window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("orbes-container");

  if (!orbes || !Array.isArray(orbes) || !container) {
    console.error("No se encontraron los orbes o el contenedor.");
    return;
  }

  container.innerHTML = "";

  const urlParams = new URLSearchParams(window.location.search);
  const pagina = parseInt(urlParams.get('pagina')) || 1;

  if (pagina < 2) {
    // 🔵 Modo mandala  if (pagina === 1|| pagina = ''|| pagina = null) {
  const totalOrbes = orbes.length;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const scaleFactor = window.innerWidth < 600 ? 0.6 : 1;
  const radius = 200 * scaleFactor;

  orbes.forEach((orbData, index) => {
    const angle = (2 * Math.PI / totalOrbes) * index;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
/*
    const orb = document.createElement("div");
    orb.classList.add("orb");
    orb.style.left = `${x - 30}px`;
    orb.style.top = `${y - 30}px`;
    orb.textContent = orbData.nombre || orbData.id;

    if (orbData.color) {
      orb.style.backgroundColor = orbData.color;
    }
*/


    // Reorganiza: empieza desde la segunda, termina con la primera
    const reorganizados = [...orbes.slice(1), orbes[0]];

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

  } else {
    // 🌳 Modo árbol clásico con coordenadas
    orbes.forEach((orbData) => {
      const orb = document.createElement("div");
      orb.classList.add("orb");
      orb.style.left = `${orbData.x}px`;
      orb.style.top = `${orbData.y}px`;

      const texto = contenidos?.que?.textos?.[orbData.id] || orbData.nombre || orbData.id;
      orb.textContent = texto;

      if (orbData.color) orb.style.backgroundColor = orbData.color;

      container.appendChild(orb);
    });
  }
});
/*


  const totalOrbes = orbes.length;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const scaleFactor = window.innerWidth < 600 ? 0.6 : 1;
  const radius = 200 * scaleFactor;

  orbes.forEach((orbData, index) => {
    const angle = (2 * Math.PI / totalOrbes) * index;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    const orb = document.createElement("div");
    orb.classList.add("orb");
    orb.style.left = `${x - 30}px`;
    orb.style.top = `${y - 30}px`;
    orb.textContent = orbData.nombre || orbData.id;

    if (orbData.color) {
      orb.style.backgroundColor = orbData.color;
    }

    container.appendChild(orb);
 });   
});
*/
