
window.addEventListener("DOMContentLoaded", () => {
  var alto = screen.height;
  var ancho = screen.width;
  alert (ancho);
 // innerHeight y innerWidth
  const container = document.getElementById("mandala");
  const total = orbes.length;
  const radius = 150; //minimo 150, maximo 300?
//  const centerX = container.offsetWidth / 2;
//  const centerY = container.offsetHeight / 2;
  const centerX = ancho / 2;
  const centerY = alto / 2;

  orbes.forEach((orbe, i) => {
    const angle = (2 * Math.PI * i) / total;
    const x = centerX + radius * Math.cos(angle) - 33;
    const y = centerY + radius * Math.sin(angle) - 33;

    const div = document.createElement("div");
    div.className = "orbe";
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.style.backgroundColor = orbe.color;
    div.textContent = orbe.mandala;
    container.appendChild(div);
  });
});
