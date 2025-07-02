// 🌳 Modo simbolo con coordenadas
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("orbes-container");

  if (!orbes || !Array.isArray(orbes) || !container) {
    console.error("No se encontraron los orbes o el contenedor.");
    return;
  }

  container.innerHTML = "";

 
    
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
