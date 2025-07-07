
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("mandala");
  const total = orbes.length;
  const radius = 150; //minimo, maximo 300
  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;

  orbes.forEach((orbe, i) => {
    const angle = (2 * Math.PI * i) / total;
    const x = centerX + radius * Math.cos(angle) - 30;
    const y = centerY + radius * Math.sin(angle) - 30;

    const div = document.createElement("div");
    div.className = "orbe";
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.style.backgroundColor = orbe.color;
    div.textContent = orbe.nombre;
    container.appendChild(div);
  });
});
