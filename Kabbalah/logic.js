// logic.js//import { orbes, conexiones } from './datos.js';//mport datos from './datos.js';

const svg = document.getElementById("simbolo");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");
const closeOverlay = document.getElementById("close-overlay");

 // Gradientes
    conexiones.forEach((conn, index) => {
      const orbA = orbes.find(o => o.id === conn.de);
      const orbB = orbes.find(o => o.id === conn.a);

      if (orbA && orbB) {
        const gradId = `grad-${index}`;
        const grad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        grad.setAttribute("id", gradId);
        grad.setAttribute("x1", orbA.x);
        grad.setAttribute("y1", orbA.y);
        grad.setAttribute("x2", orbB.x);
        grad.setAttribute("y2", orbB.y);
        grad.setAttribute("gradientUnits", "userSpaceOnUse");

        const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop1.setAttribute("offset", "0%");
        stop1.setAttribute("stop-color", orbA.color);
        grad.appendChild(stop1);

        const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop2.setAttribute("offset", "100%");
        stop2.setAttribute("stop-color", orbB.color);
        grad.appendChild(stop2);

        svg.appendChild(grad);

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", orbA.x);
        line.setAttribute("y1", orbA.y);
        line.setAttribute("x2", orbB.x);
        line.setAttribute("y2", orbB.y);
        line.setAttribute("stroke", `url(#${gradId})`);
        line.setAttribute("stroke-width", "3");
        svg.appendChild(line);
      }
    });

// Posicionar orbes
orbes.forEach((orb) => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("id", orb.id);
  circle.setAttribute("cx", orb.x);
  circle.setAttribute("cy", orb.y);
  circle.setAttribute("r", 20);
  circle.setAttribute("fill", orb.color);
  circle.classList.add("orbe", orb.tipo);
 
      circle.addEventListener("click", () => showOverlay(orb));
      circle.addEventListener("touchstart", () => showOverlay(orb));
  
 svg.appendChild(circle);

 const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", orb.x);
      text.setAttribute("y", orb.y);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "middle");
      text.classList.add("circle-text");
      text.textContent = orb.orb;
      svg.appendChild(text);
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
  // Evento para mostrar overlay
     function showOverlay(orb) {
      document.body.classList.contains("dark")
        ? overlay.classList.add("dark")
        : overlay.classList.remove("dark");

      overlayContent.innerHTML = `
        <h2>${orb.orb}</h2>
        <p><strong>Frecuencia:</strong> <a href="frecuencia.html#${orb.frecuencia.toLowerCase()}">${orb.frecuencia}</a></p>
        <p><strong>Mudra:</strong> <a href="mudras.html#${orb.mudra.toLowerCase().replaceAll(' ', '-')}">${orb.mudra}</a></p>
        <p><strong>Está en:  </strong> ${orb.situacion}</p>
        <p><strong>Conecta con: </strong> ${orb.conecta}</p>
        <p><strong></strong> ${orb.breve}</p>
        <p><strong></strong> ${orb.ampliado}</p>
        <a href="detalles.html#${orb.id}">Ver más detalles</a>
      `;
      overlay.style.display = "flex";
    }

    ///  <p><strong>Frecuencia:</strong> <a href="frecuencia-${orbe.frecuencia.toLowerCase()}.html">${orbe.frecuencia}</a></p>
    //  <p><strong>Mudra:</strong> <a href="mudra-${orbe.mudra.toLowerCase().replace(/\s+/g, '-')}.html">${orbe.mudra}</a></p>


// Cerrar overlay
closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Tema oscuro/claro
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", (e) => {
  document.body.classList.toggle("light-theme", e.target.checked);
});

    document.getElementById("toggle-theme").addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });

    // Menu responsive
const menuToggle = document.getElementById("theme-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});
/*    document.getElementById("menu-button").addEventListener("click", () => {
      document.getElementById("menu").classList.toggle("open");
    });*/
