const svg = document.getElementById("simbolo");

// Dibujar conexiones
conexiones.forEach(([id1, id2]) => {
  const orb1 = orbes.find(o => o.id === id1);
  const orb2 = orbes.find(o => o.id === id2);

  const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
  linea.setAttribute("x1", orb1.x);
  linea.setAttribute("y1", orb1.y);
  linea.setAttribute("x2", orb2.x);
  linea.setAttribute("y2", orb2.y);
  linea.setAttribute("stroke", "#999");
  linea.setAttribute("stroke-width", 2);
  svg.appendChild(linea);
});

// Dibujar orbes
orbes.forEach(o => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", o.x);
  circle.setAttribute("cy", o.y);
  circle.setAttribute("r", 30);
  circle.setAttribute("fill", o.color);
  circle.setAttribute("class", "orbe");
  circle.setAttribute("id", o.id);
  svg.appendChild(circle);
});
