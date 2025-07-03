window.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById("orbes-container");
  const svg = document.getElementById("simbolo");
  const descripcion = document.getElementById("descripcion");
  const activa = localStorage.getItem("orbeActiva");

  if (!orbes || !Array.isArray(orbes) ) {
      console.error("Sin orbs que mostrar.");
    return;
  }

 // let modo = "mandala";
  //const filename = window.location.pathname.split("/").pop();
  //if (filename === "simbolo.html") modo = "simbolo";
 // alert(filename);

  if (contenedor) {
    // Mandala
    const total = orbes.length;
    const centro = 200;
    const radio = 120;

    orbes.forEach((orbe, i) => {
      const angle = ((i + 1) / total) * 2 * Math.PI;
      const x = centro + radio * Math.cos(angle);
      const y = centro + radio * Math.sin(angle);

      const div = document.createElement("div");
      div.className = "orbe";
      div.style.backgroundColor = orbe.color;
      div.style.position = "absolute";
      div.style.left = `${x}px`;
      div.style.top = `${y}px`;
      div.textContent = orbe.nombre;

      div.addEventListener("click", () => {
        localStorage.setItem("orbeActiva", orbe.id);
        window.location.href = "simbolo.html";
      });

      contenedor.appendChild(div);
    });

    contenedor.style.position = "relative";
    contenedor.style.width = "400px";
    contenedor.style.height = "400px";
    contenedor.style.margin = "0 auto";
  }

  if (svg) {
    // Árbol de la vida fijo
    orbes.forEach((orbe) => {
      orbe.conexiones.forEach(destino => {
        const orbeDestino = orbes.find(o => o.id === destino);
        if (orbeDestino) {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", orbe.x);
          line.setAttribute("y1", orbe.y);
          line.setAttribute("x2", orbeDestino.x);
          line.setAttribute("y2", orbeDestino.y);
          line.setAttribute("stroke", "#aaa");
          svg.appendChild(line);
        }
      });

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", orbe.x);
      circle.setAttribute("cy", orbe.y);
      circle.setAttribute("r", 30);
      circle.setAttribute("fill", orbe.color);
      circle.classList.add("orbe");
      if (activa === orbe.id) circle.classList.add("resaltada");

      circle.addEventListener("click", () => {
        descripcion.textContent = orbe.descripcion;
        localStorage.setItem("orbeActiva", orbe.id);
        document.querySelectorAll("circle.orbe").forEach(c => c.classList.remove("resaltada"));
        circle.classList.add("resaltada");
      });

      svg.appendChild(circle);
    });

    if (activa) {
      const orbe = orbes.find(o => o.id === activa);
      if (orbe) descripcion.textContent = orbe.descripcion;
    }
  }
});


/* 🔵 Modo mandala 
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("orbes-container");
  if (!orbes || !Array.isArray(orbes) || !container) {
      console.error("No se encontraron los orbes o el contenedor.");
    return;
  }
  
  container.innerHTML = "";

  const totalOrbes = orbes.length;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const scaleFactor = window.innerWidth < 600 ? 0.6 : 1;
  const radius = 200 * scaleFactor;

  orbes.forEach((orbData, index) => {
    const angle = (2 * Math.PI / totalOrbes) * index;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    const reorganizados = [...orbes.slice(1), orbes[0]];// Reorganiza: empieza desde la segunda, termina con la primera

    reorganizados.forEach((orbData, index) => {
      // Sentido antihorario
      const angle = (2 * Math.PI / totalOrbes) * index;
      const x = centerX + Math.cos(Math.PI - angle) * radius;
      const y = centerY + Math.sin(Math.PI - angle) * radius;

      const orb = document.createElement("div");
      orb.classList.add("orb");
      orb.style.left = `${x - 30}px`;
      orb.style.top = `${y - 30}px`;

      const texto = contenidos?.que?.textos?.[orbData.id] || orbData.nombre || orbData.id;
      orb.textContent = texto;

      if (orbData.color) orb.style.backgroundColor = orbData.color;

      container.appendChild(orb);
    });
  });   
});
*/

