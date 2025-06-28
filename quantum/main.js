const contenido = document.getElementById("contenido");
const texto = document.getElementById("texto");
const botones = document.querySelectorAll(".menu button");

function render(tab) {
  // Activar botón
  botones.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });

  // Limpiar contenido
  contenido.innerHTML = "";

  const contenedor = document.createElement("div");
  contenedor.className = "orbes";

  datos[tab].orbes.forEach(texto => {
    const orb = document.createElement("div");
    orb.className = "orb";
    orb.textContent = texto;
    contenedor.appendChild(orb);
  });

  contenido.appendChild(contenedor);
  texto.textContent = datos[tab].texto;
}

// Listeners
botones.forEach(btn => {
  btn.addEventListener("click", () => {
    render(btn.dataset.tab);
  });
});

// Render inicial
render("que");
