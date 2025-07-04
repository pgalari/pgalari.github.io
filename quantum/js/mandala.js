const contenedor = document.getElementById("orbes-container");
const centroX = contenedor.offsetWidth / 2;
const centroY = contenedor.offsetHeight / 2;
const radio = 200;

const orbesOrdenadas = [...orbes];
orbesOrdenadas.unshift(orbesOrdenadas.pop()); // Empezar desde la segunda

orbesOrdenadas.forEach((orb, i) => {
  const angulo = (2 * Math.PI * i) / orbesOrdenadas.length;
  const x = centroX + radio * Math.cos(angulo) - 40;
  const y = centroY + radio * Math.sin(angulo) - 40;

  const div = document.createElement("div");
  div.className = "orbe";
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.style.setProperty('--color', orb.color);
  div.textContent = orb.nombre;
  div.id = orb.id;

  contenedor.appendChild(div);
});
