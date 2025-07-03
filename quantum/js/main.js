window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("orbes-container");

  const filename = window.location.pathname.split("/").pop();
  let modo = "mandala";

  if (filename === "simbolo.html") modo = "simbolo";
 // alert(filename);
  container.innerHTML = "";

  if (modo === "mandala") {
    const total = orbes.length;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const reorganizados = [...orbes.slice(1), orbes[0]];
    const radius = Math.min(window.innerWidth, window.innerHeight) / 2.5;

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

