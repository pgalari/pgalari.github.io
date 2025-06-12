const svg = document.getElementById("tree-svg");
const panel = document.getElementById("panel-lateral");
const contenido = document.getElementById("contenido-sefira");

fetch("sefirot.json")
  .then(res => res.json())
  .then(data => {
    data.sefirot.forEach(sefira => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", sefira.x);
      circle.setAttribute("cy", sefira.y);
      circle.setAttribute("r", 25);
      circle.classList.add("sefira", sefira.nombre.toLowerCase());
      circle.addEventListener("click", () => mostrarPanel(sefira));
      svg.appendChild(circle);
    });

    data.sendas.forEach(senda => {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", data.sefirot[senda.de].x);
      line.setAttribute("y1", data.sefirot[senda.de].y);
      line.setAttribute("x2", data.sefirot[senda.a].x);
      line.setAttribute("y2", data.sefirot[senda.a].y);
      line.setAttribute("stroke", "#555");
      line.setAttribute("stroke-width", "2");
      svg.insertBefore(line, svg.firstChild);
    });
  });

function mostrarPanel(sefira) {
  contenido.innerHTML = `
    <h2>${sefira.nombre}</h2>
    <p>${sefira.descripcion}</p>
  `;
  panel.classList.add("abierto");
}
function cerrarPanel() {
  panel.classList.remove("abierto");
}
