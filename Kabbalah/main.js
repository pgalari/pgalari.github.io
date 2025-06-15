import { sefirot } from './sefirot-data.js';
import { sendas } from './sendas-data.js';

const container = document.getElementById("tree-container");
const panel = document.getElementById("info-panel");
const panelTitle = document.getElementById("panel-title");
const panelContent = document.getElementById("panel-content");
const closeBtn = document.getElementById("close-panel");
const startBtn = document.getElementById("start-button");
const sound1 = document.getElementById("sound1");
const sound2 = document.getElementById("sound2");

function renderTree() {
  container.innerHTML = "";
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", "0 0 700 800");

  sendas.forEach(s => {
    const from = sefirot.find(n => n.id === s.desde);
    const to = sefirot.find(n => n.id === s.hasta);
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.setAttribute("stroke", "#ccc");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
  });

  sefirot.forEach((s, i) => {
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", s.x);
    circle.setAttribute("cy", s.y);
    circle.setAttribute("r", "30");
    circle.setAttribute("fill", s.color);
    circle.setAttribute("stroke", "#333");
    circle.setAttribute("stroke-width", "2");
    circle.setAttribute("id", `circle-${s.id}`);
    circle.addEventListener("click", () => showPanel(s));
    svg.appendChild(circle);

    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", s.x);
    text.setAttribute("y", s.y + 5);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-size", "14");
    text.setAttribute("fill", "#000");
    text.textContent = s.nombre;
    svg.appendChild(text);
  });

  container.appendChild(svg);
}

function showPanel(s) {
  panelTitle.textContent = s.nombre;
  panelContent.textContent = s.descripcion;
  panel.classList.add("show");
}

function hidePanel() {
  panel.classList.remove("show");
}

function iniciarRecorrido() {
  let i = 0;
  function iluminar() {
    if (i >= sefirot.length) return;
    const s = sefirot[i];
    const node = document.getElementById(`circle-${s.id}`);
    node.setAttribute("fill", "#ffff88");
    showPanel(s);
    (i % 2 === 0 ? sound1 : sound2).play();
    i++;
    setTimeout(iluminar, 1500);
  }
  iluminar();
}

closeBtn.addEventListener("click", hidePanel);
startBtn.addEventListener("click", iniciarRecorrido);
window.addEventListener("load", () => {
  renderTree();
  iniciarRecorrido();
});
