import { orbs } from './orbs.js';
import { sendas } from './sendas.js';

const svg = document.getElementById("tree-svg");

function crearOrb({ id, x, y, color, nombre }) {
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
  const panel = document.getElementById("panel-lateral");
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `<h2>${orb.nombre}</h2><p>${orb.descripcion}</p>`;
  panel.classList.remove("cerrado");
}

window.cerrarPanel = () => {
  document.getElementById("panel-lateral").classList.add("cerrado");
}

export function iluminarRecorrido(recorrido) {
  recorrido.forEach(({ id, nivel }) => {
    const node = document.getElementById(id);
    if (node) {
      node.classList.add(`iluminado-${nivel}`);
    }
  });
}

function showSefiraInfo(name, description) {
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
  }
}

function closeMobileModal() {
  document.getElementById('mobileModal').classList.remove('active');
}

crearSendas();
orbs.forEach(crearOrb);
