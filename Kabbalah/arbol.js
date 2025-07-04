
window.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("simbolo");

  conexiones.forEach(([from, to]) => {
    const orbA = orbes.find(o => o.id === from);
    const orbB = orbes.find(o => o.id === to);
    if (orbA && orbB) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", orbA.x);
      line.setAttribute("y1", orbA.y);
      line.setAttribute("x2", orbB.x);
      line.setAttribute("y2", orbB.y);
      line.setAttribute("stroke", "#ccc");
      svg.appendChild(line);
    }
  });

  orbes.forEach(orbe => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", orbe.x);
    circle.setAttribute("cy", orbe.y);
    circle.setAttribute("r", 30);
    circle.setAttribute("fill", orbe.color);
    svg.appendChild(circle);
  });
});
