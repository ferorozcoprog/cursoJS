
function guardarInformacion() {
  const nombre = document.getElementById("validationTooltip01").value;
  const correo = document.getElementById("validationTooltip05").value;
  const fechaNacimiento = document.getElementById("validationTooltip02").value;
  const tipoSuscripcion = document.getElementById("validationTooltip04").value;
  const pais = document.getElementById("validationTooltip03").value;
  

  localStorage.setItem("validationTooltip01", nombre);
  localStorage.setItem("validationTooltip05", correo);
  localStorage.setItem("validationTooltip02", fechaNacimiento);
  localStorage.setItem("validationTooltip04", tipoSuscripcion);
  localStorage.setItem("validationTooltip03", pais);

  alert("Datos guardados correctamente");
}

const camisetas = [
{
  "tipo": "Camiseta de la primera equipación",
  "descripcion": "Esta camiseta oficial de la primera equipación del Real Madrid luce un look atemporal con detalles en morado claro y el escudo del club repetido sobre un fondo blanco.",
  "precio": 120
},
{
  "tipo": "Camiseta de la segunda equipación",
  "descripcion": "Esta camiseta adidas de la segunda equipación del Real Madrid luce una nueva combinación de colores. Material 100% reciclado",
  "precio": 100
},
{
  "tipo": "Camiseta de la tercera equipación",
  "descripcion": "Esta camiseta oficial adidas del Real Madrid se inspira en la nueva estética del Bernabéu",
  "precio": 85
},
];

const seccionPrecio = document.getElementById("seccionPrecio");

const btnPrimera = document.getElementById("botonPrimera");
btnPrimera.addEventListener("click", function() {
  actualizarPrecio(0);
});

const btnSegunda = document.getElementById("botonSegunda");
btnSegunda.addEventListener("click", function() {
  actualizarPrecio(1);
});

const btnTercera = document.getElementById("botonTercera");
btnTercera.addEventListener("click", function() {
  actualizarPrecio(2);
});

function actualizarPrecio(indiceCamiseta) {
  const camiseta = camisetas[indiceCamiseta];
  seccionPrecio.innerHTML = `
  <h2>${camiseta.tipo}</h2>
  <p>Precio: $${camiseta.precio}</p>
`;
}