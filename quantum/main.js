const svg = document.getElementById("conexiones");
const orbesContainer = document.getElementById("orbes-container");
const descripcion = document.getElementById("descripcion");

function crearSVG() {
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
    line.setAttribute("stroke-width", 3);
    svg.appendChild(line);
  });
}

function crearOrbes() {
  orbesContainer.innerHTML = "";
  orbes.forEach(orb => {
    const div = document.createElement("div");
    div.className = "orb";
    div.id = orb.id;
    div.style.left = `${orb.x - 30}px`;
    div.style.top = `${orb.y - 30}px`;
    div.style.backgroundColor = orb.color;

    const label = document.createElement("span");
    label.className = "orb-label";
    label.textContent = "-";
    div.appendChild(label);

    orbesContainer.appendChild(div);
  });
}

function actualizarContenido(tab) {
  const { titulo, descripcion: desc } = contenidos[tab];
  document.querySelectorAll(".orb-label").forEach(label => label.textContent = titulo);
  descripcion.textContent = desc;
}

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    actualizarContenido(tab);
  });
});

 m ,

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("orbes-container");

  const filename = window.location.pathname.split("/").pop();
  let modo = "mandala";

  if (filename === "simbolo.html") modo = "simbolo";
/*  if (filename === "arbol2.html") modo = "arbol2";
  if (filename === "arbol3.html") modo = "arbol3";*/

  container.innerHTML = "";

  if (modo === "mandala") { 
    const total = orbes.length;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const reorganizados = [...orbes.slice(1), orbes[0]];
    const radius = 200 * (window.innerWidth < 600 ? 0.6 : 1);

    reorganizados.forEach((orb, i) => {
      const angle = (2 * Math.PI / total) * i;
      const x = centerX + Math.cos(Math.PI - angle) * radius;
      const y = centerY + Math.sin(Math.PI - angle) * radius;

      crearOrb(orb, x, y, container);
    });

  } else {
    orbes.forEach((orb) => {
      crearOrb(orb, orb.x, orb.y, container);
    });
  }

  // Menú hamburguesa
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }
});

function crearOrb(orb, x, y, container) {
  const div = document.createElement("div");
  div.classList.add("orb");
  div.style.left = `${x - 30}px`;
  div.style.top = `${y - 30}px`;
  div.textContent = contenidos?.que?.textos?.[orb.id] || orb.nombre || orb.id;
  if (orb.color) div.style.backgroundColor = orb.color;
  container.appendChild(div);
}
