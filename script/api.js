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
    console.log("El catálogo se ha cargado en el almacenamiento local");
    console.log(data);
    return data;
};

// mostrar los items
const verItems = (data) => {
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
      <button class="addbtn" id="${tipo}"><a class="whiteLink">AGREGAR</a></button>
    `;
    cardContainer.appendChild(card);
  });
};


// Llamada a la función buscarItems y verItems
buscarItems().then((data) => {
  verItems(data);
});