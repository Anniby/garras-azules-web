// 🔹 Navegación entre módulos
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

// 🔹 Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  const nombreInput = document.getElementById("nombre");
  const correoInput = document.getElementById("correo");
  const formulario = document.getElementById("formulario");

  // Bloquear números al escribir
  if (nombreInput) {
    nombreInput.addEventListener("input", function () {
      this.value = this.value.replace(/[0-9]/g, "");
    });

    // Bloquear números al pegar
    nombreInput.addEventListener("paste", function (e) {
      const textoPegado = (e.clipboardData || window.clipboardData).getData("text");
      if (/\d/.test(textoPegado)) {
        e.preventDefault();
        alert("No se permite pegar números en el nombre.");
      }
    });
  }

  // Validación al enviar
  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      const nombre = nombreInput.value.trim();
      const correo = correoInput.value.trim();

      const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
      if (!soloLetras.test(nombre)) {
        alert("El nombre solo debe contener letras. No se permiten números ni símbolos.");
        e.preventDefault();
        return;
      }

      if (!correo.endsWith("@gmail.com")) {
        alert("Solo se aceptan correos que terminen en '@gmail.com'.");
        e.preventDefault();
        return;
      }

      // Si todo está bien, el formulario se envía automáticamente
    });
  }
});

// 🔹 Modal de imagen ampliada
function abrirImagen(src) {
  document.getElementById("imagenAmpliada").src = src;
  document.getElementById("modalImagen").style.display = "flex";
}

function cerrarImagen() {
  document.getElementById("modalImagen").style.display = "none";
}