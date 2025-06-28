document.addEventListener("DOMContentLoaded", () => {
  crearSVG();
  crearOrbes();
  actualizarContenido("que");
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const tab = e.target.dataset.tab;
      actualizarContenido(tab);
    });
  });
});

function crearSVG() {
  const svg = document.getElementById("conexiones");
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  svg.appendChild(defs);

  conexiones.forEach(({ de, a }) => {
    const orbA = orbes.find(o => o.id === de);
    const orbB = orbes.find(o => o.id === a);
    if (!orbA || !orbB) return;

    const gradId = `grad-${de}-${a}`;
    const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    gradient.setAttribute("id", gradId);
    gradient.setAttribute("gradientUnits", "userSpaceOnUse");
    gradient.setAttribute("x1", orbA.x);
    gradient.setAttribute("y1", orbA.y);
    gradient.setAttribute("x2", orbB.x);
    gradient.setAttribute("y2", orbB.y);

    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", orbA.color);
    gradient.appendChild(stop1);

    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", orbB.color);
    gradient.appendChild(stop2);

    defs.appendChild(gradient);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", orbA.x);
    line.setAttribute("y1", orbA.y);
    line.setAttribute("x2", orbB.x);
    line.setAttribute("y2", orbB.y);
    line.setAttribute("stroke", `url(#${gradId})`);
    line.setAttribute("stroke-width", 4);
    svg.appendChild(line);
  });
}

function crearOrbes() {
  const container = document.getElementById("orbes-container");
  orbes.forEach(orb => {
    const div = document.createElement("div");
    div.className = "orb";
    div.id = orb.id;
    div.style.backgroundColor = orb.color;
    div.style.left = `${orb.x - 30}px`;
    div.style.top = `${orb.y - 30}px`;
    container.appendChild(div);
  });
}

function actualizarContenido(tab) {
  const data = contenidos[tab];
  orbes.forEach(orb => {
    const orbDiv = document.getElementById(orb.id);
    orbDiv.textContent = data.textos[orb.id] || "";
  });
  document.getElementById("descripcion").textContent = data.descripcion;
}