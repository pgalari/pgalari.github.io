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
    const origen = sefirot.find(s => s.id === de);
    const destino = sefirot.find(s => s.id === a);
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
  const sefira = sefirot.find(s => s.id === id);
  const panel = document.getElementById("panel-lateral");
  const contenido = document.getElementById("contenido-sefira");
  contenido.innerHTML = `<h2>${sefira.nombre}</h2><p>${sefira.descripcion}</p>`;
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

crearSendas();
sefirot.forEach(crearSefira);
