alert("Bienvenido a la tienda del Real Madrid!! Solo por Hoy Descuentos 20% en camisas del segunda equipo");


// Objeto con los precios de las camisas
const preciosCamisas = {
  "primera equipacion": 120,
  "segunda equipacion": 100,
  "tercera equipacion": 85,
};

// Función para obtener el precio total de la compra
function obtenerPrecioTotal(camisa, cantidad, esSocio) {
  // Función de orden superior para calcular el descuento por el tipo de camisa
  const calcularDescuentoCamisa = (precio) => {
    let descuentoPrecio = precio;
    if (camisa === "segunda equipacion") {
        descuentoPrecio = precio * 0.8;
    }
    return descuentoPrecio;
}

  // Función de orden superior para calcular el descuento por ser socio
  const calcularDescuentoSocio = (precio) => {
    let descuentoPrecio = precio;
    if (esSocio) {
        descuentoPrecio = precio * 0.9;
    }
    return descuentoPrecio;
  }

  let precio = preciosCamisas[camisa];
  if (!precio) {
    return 0;
  }

  precio = calcularDescuentoCamisa(precio);
  precio = calcularDescuentoSocio(precio);

  return precio * cantidad;
}

let modeloValido = false;
let modelocamisa;

while (!modeloValido) {
  modelocamisa = prompt("Por favor ingrese la camisa que desea comprar (primera equipacion, segunda equipacion, tercera equipacion)");
  if (Object.keys(preciosCamisas).includes(modelocamisa)) {
    modeloValido = true;
  } else {
    alert("El modelo ingresado no es correcto, ingresa una de las opciones mencionadas");
  }
}

let cantidad = parseInt(prompt("por favor ingresa la cantidad que desea comprar"));
let esSocio = false;

let respuesta = prompt("Es socio de la pagina? Responda si o no");
if (respuesta !== null) {
  respuesta = respuesta.toLowerCase();
  if (respuesta === "sí" || respuesta === "si") {
    esSocio = true;
    alert("Por ser socio tienes un 10% adicional");
  }
}

let totalPagar = obtenerPrecioTotal(modelocamisa, cantidad, esSocio);
alert("el precio total de tu compra es: " + totalPagar);
