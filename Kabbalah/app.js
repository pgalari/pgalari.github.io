import { sefirot } from './sefirot.js';

const svg = document.getElementById("tree-svg");
const panel = document.getElementById("panel-lateral");
const contenido = document.getElementById("contenido-sefira");

const conexiones = [
  ["keter", "chochmah"], ["keter", "binah"],["chochmah", "binah"], 
  ["chochmah", "chesed"], ["binah", "gevurah"], ["chesed", "gevurah"],
  ["chesed", "tiferet"], ["gevurah", "tiferet"],["tiferet", "netzach"], 
  ["tiferet", "hod"],["netzach", "hod"], ["netzach", "yesod"],
  ["hod", "yesod"], ["yesod", "malkuth"], ["daat", "tiferet"], 
  ["daat", "keter"], ["daat", "chochmah"], ["daat", "binah"],
  ["netzach", "malkuth"], ["hod", "malkuth"],["chesed", "netzach"], 
  ["gevurah", "hod"]
];

conexiones.forEach(([id1, id2]) => {
  const s1 = sefirot.find(s => s.id === id1);
  const s2 = sefirot.find(s => s.id === id2);
  if (s1 && s2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", s1.x);
    line.setAttribute("y1", s1.y);
    line.setAttribute("x2", s2.x);
    line.setAttribute("y2", s2.y);
    line.setAttribute("stroke", "#fff");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
  }
});

sefirot.forEach(sefira => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", sefira.x);
  circle.setAttribute("cy", sefira.y);
  circle.setAttribute("r", 30);
  circle.setAttribute("class", `sefira ${sefira.color}`);
  circle.setAttribute("id", sefira.id);
  circle.addEventListener("click", () => mostrarSefira(sefira));
  svg.appendChild(circle);
});

let index = 0;
function activarSefira() {
  if (index < sefirot.length) {
    const sefira = sefirot[index];
    const el = document.getElementById(sefira.id);
    el.classList.add("activo");
    index++;
    setTimeout(activarSefira, 400);
  }
}
activarSefira();

function mostrarSefira(sefira) {
  contenido.innerHTML = `<h2>${sefira.nombre}</h2><p>${sefira.descripcion}</p>`;
  panel.classList.remove("cerrado");
}

window.cerrarPanel = function () {
  panel.classList.add("cerrado");
};
