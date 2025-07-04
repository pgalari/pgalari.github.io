document.addEventListener("DOMContentLoaded", () => {
  crearOrbesArbol(); 
});

// Función para crear orbes y conexiones
function crearOrbesArbol() {
  const svg = document.getElementById("simbolo");

  // Dibujar líneas de conexión
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
      line.setAttribute("stroke-width", "2");
      svg.appendChild(line);
    }
  });

  // Dibujar orbes
  orbes.forEach(orbe => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", orbe.x);
    circle.setAttribute("cy", orbe.y);
    circle.setAttribute("r", 30);
    circle.setAttribute("fill", orbe.color);
    circle.setAttribute("id", orbe.id);

    // Acciones al hacer clic
    circle.addEventListener("click", () => {
      mostrarDescripcion(orbe);
    });

    svg.appendChild(circle);
  });
}

// Mostrar descripción (opcional)
function mostrarDescripcion(orbe) {
  const descDiv = document.getElementById("descripcion");
  if (descDiv) {
    descDiv.innerHTML = `
      <h2>${orbe.nombre}</h2>
      <p>ID: ${orbe.id}</p>
    `;
  }
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", crearOrbesArbol);
