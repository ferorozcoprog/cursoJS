
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

