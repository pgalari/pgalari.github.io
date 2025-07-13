// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const orbes = document.querySelectorAll(".orbe");
  const overlay = document.querySelector(".overlay");
  const overlayTitle = overlay.querySelector("h2");
  const overlayText = overlay.querySelector("p");
  const overlayLink = overlay.querySelector("a");
  const overlayClose = overlay.querySelector("button");
  const themeToggle = document.querySelector(".theme-toggle");
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");

  // Manejo de clicks en orbes
  orbes.forEach(orbe => {
    orbe.addEventListener("click", () => {
      const id = orbe.getAttribute("data-id");
      const info = datosOrbes[id]; // definido en datos.js

      if (info) {
        overlayTitle.textContent = info.titulo || "Sin título";
        overlayText.textContent = info.descripcion || "Sin descripción.";
        overlayLink.href = info.enlace || "#";
        overlayLink.textContent = info.enlace ? "Ver más" : "";
        overlay.classList.add("active");
      }
    });
  });

  // Cerrar overlay
  overlayClose.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  // Tema claro/oscuro
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Toggle de menú hamburguesa
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});

