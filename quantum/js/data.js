const orbes = [
  { id: "orb1", x: 100, y: 100, color: "#f00", orden: 1 },
  { id: "orb2", x: 300, y: 100, color: "#0f0", orden: 2 },
  { id: "orb3", x: 200, y: 250, color: "#00f", orden: 3 }
];

const conexiones = [
  { de: "orb1", a: "orb2" },
  { de: "orb2", a: "orb3" },
  { de: "orb3", a: "orb1" }
];

const contenidos = {
  que: {
    textos: {
      orb1: "Qué 1", orb2: "Qué 2", orb3: "Qué 3"
    },
    descripcion: "Esto es el apartado QUÉ."
  },
  cuando: {
    textos: {
      orb1: "Cuándo 1", orb2: "Cuándo 2", orb3: "Cuándo 3"
    },
    descripcion: "Esto es el apartado CUÁNDO."
  },
  donde: {
    textos: {
      orb1: "Dónde 1", orb2: "Dónde 2", orb3: "Dónde 3"
    },
    descripcion: "Esto es el apartado DÓNDE."
  },
  como: {
    textos: {
      orb1: "Cómo 1", orb2: "Cómo 2", orb3: "Cómo 3"
    },
    descripcion: "Esto es el apartado CÓMO."
  }
};