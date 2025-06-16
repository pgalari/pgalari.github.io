import { orbs } from './orbs.js';
import { sendas } from './sendas.js';

const svg = document.getElementById("simbolo");

function crearOrbs({ id, x, y, color, nombre }) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", 30);
  circle.setAttribute("fill", color);
  circle.setAttribute("id", id);
  circle.addEventListener("click", () => mostrarInfo(id));
  svg.appendChild(circle);
}

function crearSendas() {
  sendas.forEach(({ de, a }) => {
    const origen = orbs.find(s => s.id === de);
    const destino = orbs.find(s => s.id === a);
    if (origen && destino) {
      const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
      linea.setAttribute("x1", origen.x);
      linea.setAttribute("y1", origen.y);
      linea.setAttribute("x2", destino.x);
      linea.setAttribute("y2", destino.y);
      linea.setAttribute("stroke", "#888");
      svg.appendChild(linea);
    }
  });
}

function mostrarInfo(id) {
  const orb = orbs.find(s => s.id === id);
  const panel = document.getElementById("p-lateral");
  const contenido = document.getElementById("p-contenido");
  contenido.innerHTML = `<h2>${orb.nombre}</h2><p>${orb.descripcion}</p>`;
  panel.classList.remove("cerrado");
}

window.cerrarPanel = () => {
  document.getElementById("p-lateral").classList.add("cerrado");
}

export function iluminarRecorrido(recorrido) {
  recorrido.forEach(({ id, nivel }) => {
    const node = document.getElementById(id);
    if (node) {
      node.classList.add(`iluminado-${nivel}`);
    }
  });
}

function showInfo(name, description) {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    document.getElementById('mobileTitle').textContent = name;
    document.getElementById('mobileDescription').textContent = description;
    document.getElementById('mobileModal').classList.add('active');
  } else {
    // Código para mostrar en panel lateral (escritorio)
    document.getElementById('sidebar-title').textContent = name;
    document.getElementById('sidebar-description').textContent = description;
    document.getElementById('sidebar').classList.add('active');
    document.getElementById("reiniciar").addEventListener("click", demoRecorrido);
  }
}

function closeMobileModal() {
  document.getElementById('mobileModal').classList.remove('active');
}
function demoRecorrido() {
  const ordenRecorrido = [
    "orb-1", "orb-2", "orb-3", "orb-4", "orb-5", "orb-6",
    "orb-7", "orb-8", "orb-9", "orb-10", "orb-11", "orb-12"
  ];

  ordenRecorrido.forEach((id, index) => {
    setTimeout(() => {
      document.querySelectorAll(".orb").forEach(el => {
        el.classList.remove("nivel1", "nivel2", "nivel3");
      });
      const orb = document.getElementById(id);
      if (orb) orb.classList.add("nivel1");
    }, index * 1000); // 1 segundo entre cada paso
  });
}

window.addEventListener("DOMContentLoaded", () => {
  demoRecorrido(); // Inicia automáticamente
});

crearSendas();
orbs.forEach(crearOrbs);
