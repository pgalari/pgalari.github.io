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

