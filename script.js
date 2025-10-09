function mostrarSeccion(id) {
    const secciones = document.querySelectorAll(".seccion");
    secciones.forEach(sec => sec.classList.remove("activa"));
    document.getElementById(id).classList.add("activa");
  }
  
  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! La banda te responderá pronto.");
  });
  
  document.getElementById("nombre").addEventListener("input", function () {
    this.value = this.value.replace(/[0-9]/g, "");
  });
  
  function abrirImagen(src) {
    document.getElementById("imagenAmpliada").src = src;
    document.getElementById("modalImagen").style.display = "flex";
  }
  
  function cerrarImagen() {
    document.getElementById("modalImagen").style.display = "none";
  }
  function mostrarSeccion(id) {
    const secciones = document.querySelectorAll(".seccion");
    secciones.forEach(sec => {
      sec.classList.remove("activa");
      sec.style.opacity = 0;
    });
  
    const activa = document.getElementById(id);
    activa.classList.add("activa");
    activa.style.opacity = 1;
  }
  function mostrarSeccion(id) {
    const secciones = document.querySelectorAll(".seccion");
    secciones.forEach(sec => sec.classList.remove("activa"));
    document.getElementById(id).classList.add("activa");
  }