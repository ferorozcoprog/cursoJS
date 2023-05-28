class Item {
  constructor(tipo, descripcion, precio, stock, img) {
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock= stock;
    this.img = img;
  }
}

// buscar los items con fetch en ubicación relativa
const buscarItems = async () => {
    const respuesta = await fetch("../items.json");
    const data = await respuesta.json();
    localStorage.setItem("tienda", JSON.stringify(data));
    console.log("El catálogo se ha cargado");
    console.log(data);
    verItems(data);
    return data;
};

// mostrar los items
const verItems = (data) => {
  const cardContainer = document.getElementById("cardContainer");
  data.forEach((e) => {
    const { tipo, img, descripcion, precio, stock } = e;
    let card = document.createElement("div");
    card.setAttribute("class", "card_1");
    card.innerHTML = `
      <img alt=${tipo} src='${img}'/>
      <h4>${tipo}</h4>
      <p>${descripcion}</p>
      <h3>$${precio}</h3>
      <h3 class=${stock ? "green" : "red"}> Stock:${stock || " No hay Stock"}</h3> 
      <button class="addbtn" data-tipo="${tipo}"><a class="whiteLink">AGREGAR</a></button>
    `;
    cardContainer.appendChild(card);
  });

  const botonesAgregar = document.getElementsByClassName("addbtn");
  for (let btn of botonesAgregar) {
    btn.addEventListener("click", () => anadirCarrito(btn.getAttribute("data-tipo")));
  }
};

// añadir al carrito

const anadirCarrito = (tipo) => {
  const data = JSON.parse(localStorage.getItem("tienda"));
  const carritoItem = data.find((i) => i.tipo == tipo);
  if (carritoItem.stock > 0) {
    const toast = (tipo) => {
      Toastify({
        text: `${tipo} agregado con éxito`,
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    };
    let yaEnCarrito = cart.some((item) => item.tipo == item);
    if (yaEnCarrito) {
      const itemIndex = cart.findIndex((e) => e.tipo === carritoItem.item);
      const item4cart = cart[itemIndex];
      item4cart.cantidad++;
      item4cart.total = item4cart.precio * item4cart.cantidad;
      localStorage.setItem("cart", JSON.stringify(cart));
      toast(item4cart.tipo);
    } else {
      const item4cart = {
        ...carritoItem,
        stock: carritoItem.stock - 1,
        cantidad: 1,
        total: carritoItem.precio,
      };
      cart.push(item4cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast(item4cart.tipo);
    }
  } else {
    Swal.mixin({
      toast: true,
      position: "top-right",
      iconColor: "white",
      customClass: {
        popup: "colored-toast",
      },
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    }).fire({
      icon: "error",
      title: "No hay stock del producto seleccionado",
    });
  }
};

// carrito vacio
const carritoVacio = () => {
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = "";
  let sign = document.createElement("h2");
  sign.innerHTML = `No hay productos en el carrito`;
  cartContainer.appendChild(sign);
};

//calcular el total
const calcularTotal = () => cart.reduce((acc, val) => acc + val.total, 0);

//items del carrito
const carritoItems = () => {
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = "";
  let totalCompra = calcularTotal();
  cart.forEach((e) => {
    const { tipo, cantidad, total } = e;
    let carritoItem = document.createElement("div");
    carritoItem.innerHTML = `
      <h3>${tipo}</h3>
      <h4> Cantidad: ${cantidad}</h4>
      <h4>$${total}</h4>
    `;
    cartContainer.appendChild(carritoItem);
  });
  let totalElement = document.createElement("h3");
  totalElement.innerHTML = `Total de la compra: $${totalCompra}`;
  cartContainer.appendChild(totalElement);
};

// mostrar carrito
const mostrarCarrito = () => {
  const cartContainer = document.getElementById("cartContainer");
  cart.length ? carritoItems() : carritoVacio();
  cartContainer.style.display = "block";
};

// orden
const orden = () => {
  let mensaje = "";
  cart.forEach((e) => {
    const { cantidad, tipo, total } = e;
    mensaje += `<p>(x${cantidad}) - ${tipo} - $${total}</p>`;
  });
  return mensaje;
};

// confirmar orden
const confirmarOrden = () => {
  if (cart.length) {
    const DateTime = luxon.DateTime;
    const fecha = DateTime.now().setLocale("es").toLocaleString();

    Swal.fire({
      icon: "success",
      title: "Exito!",
      html: `Su orden:<br>${orden()}Ha sido generada con éxito. <br>`,
      footer: `Fecha: ${fecha} - Precio total de su orden: $${calcularTotal()}`,
    });
    localStorage.setItem("cart", JSON.stringify([]));
    cart = JSON.parse(localStorage.getItem("cart"));
    mostrarCarrito();
  } else {
    Swal.fire({
      icon: "error",
      title: "No hay productos en el carrito",
      showConfirmButton: false,
      timer: 3000,
    });
  }
};

// vaciar el carrito
const vaciarCarrito = () => {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  mostrarCarrito();
};

// llamar a la función buscarItems y verItems
buscarItems().then((data) => {
  verItems(data);
});

// array carrito
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// evento mostrar carrito
const mostrarCarritoBtn = document.getElementById("mostrarCarrito");
mostrarCarritoBtn.addEventListener("click", mostrarCarrito);

// evento confirmar
const confirmarBtn = document.getElementById("confirmar");
confirmarBtn.addEventListener("click", () => confirmarOrden());

// evento vaciar carrito
const vaciarCarritoBtn = document.getElementById("vaciarCarrito");
vaciarCarritoBtn.addEventListener("click", vaciarCarrito);