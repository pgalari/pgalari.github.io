// logic.js

import { orbes, conexiones } from 'datos.js';

const svg = document.getElementById("simbolo");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");
const closeOverlay = document.getElementById("close-overlay");

// Posicionar orbes
orbes.forEach((orbe) => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("id", orbe.id);
  circle.setAttribute("cx", orbe.x);
  circle.setAttribute("cy", orbe.y);
  circle.setAttribute("r", 20);
  circle.setAttribute("fill", orbe.color);
  circle.classList.add("orbe", orbe.tipo);
  svg.appendChild(circle);

  // Evento para mostrar overlay
  circle.addEventListener("click", () => {
    overlayContent.innerHTML = `
      <h2>${orbe.nombre}</h2>
      <p><strong>Frecuencia:</strong> <a href="frecuencia-${orbe.frecuencia.toLowerCase()}.html">${orbe.frecuencia}</a></p>
      <p><strong>Mudra:</strong> <a href="mudra-${orbe.mudra.toLowerCase().replace(/\s+/g, '-')}.html">${orbe.mudra}</a></p>
      <p><strong>Situación:</strong> ${orbe.situacion}</p>
      <p><strong>Conecta:</strong> ${orbe.conecta}</p>
      <p>${orbe.breve}</p>
      <p>${orbe.ampliado}</p>
    `;
    overlay.style.display = "flex";
  });
});

// Dibujar conexiones
conexiones.forEach((con) => {
  const orbeInicio = orbes.find((o) => o.id === con.de);
  const orbeFin = orbes.find((o) => o.id === con.a);

  if (orbeInicio && orbeFin) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", orbeInicio.x);
    line.setAttribute("y1", orbeInicio.y);
    line.setAttribute("x2", orbeFin.x);
    line.setAttribute("y2", orbeFin.y);
    line.setAttribute("stroke", "white");
    line.setAttribute("stroke-width", con.width);
    svg.insertBefore(line, svg.firstChild);
  }
});

// Cerrar overlay
closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Tema oscuro/claro
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", (e) => {
  document.body.classList.toggle("light-theme", e.target.checked);
});

// Menu responsive
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

