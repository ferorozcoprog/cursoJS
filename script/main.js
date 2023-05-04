/*function unirse() {
  const nombre = document.getElementsById("nombre").value;
  const fecha = document.getElementById("date").value;
  const edad = document.getElementById("edad").value;
  const suscripcion = document.getElementById("tipoSuscripcion").value;
  const pais = document.getElementById("pais").value;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("date", fecha);
  localStorage.setItem("edad", edad);
  localStorage.setItem("tipoSuscripcion", suscripcion);
  localStorage.setItem("pais", pais);

  alert("gracias por unirte");
}*/

function guardarDatos() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("correo", correo);
  localStorage.setItem("telefono", telefono);

  alert("Datos guardados correctamente");
}

