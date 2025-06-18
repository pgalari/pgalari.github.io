  export const orbes = [
  {
    id: "orb-1", tipo: "central", x: 350, y: 100, color: "#902692", nombre: "Conexión", frecuencia: "Onda Gama", situacion: "Flota por encima de tu cabeza", conecta: "Glándula Pineal", mudra: "Love mudra", respiracion: "G Breath", breve: "Es el sistema principal.", ampliado: "Es el sistema de memoria vibracional. Es el sistema que hace posible que los demás sistemas estén activos en el cuerpo. Regula el sueño y el descanso, la conexión espiritual, habilidades extrasensoriales, DMT y conciencia elevada. En caso de necesitar regulación lo mejor es la respiración." 
  },
  { 
    id: "orb-2", tipo: "central", x: 350, y: 200, color: "#0071bd", nombre: "Química", frecuencia: "Partícula Beta", situacion: "Flota frente a la cabeza", conecta: "Hipotálamo e Hipófisis", mudra: "Gyan Mudra", respiracion: "Beta",breve: "Es el sistema de memoria nutricional.", ampliado: "Es el sistema que hace posible la digestión, el balance hormonal, el equilibrio hidro-electrolítico y el ph. Si el cuerpo está bien nutrido, dispondrá de energía para iniciar, gestionar y terminar proyectos, si hay desbalance pueden existir alergias y adicciones. En caso de necesitar regulación lo mejor es el movimiento."
  }
];

 export const conexiones= [
  { de: "orb-1", a: "orb-2" },
  { de: "orb-2", a: "orb-3" },
  { de: "orb-3", a: "orb-4" },
  { de: "orb-4", a: "orb-5" },
  { de: "orb-5", a: "orb-6" },
  { de: "orb-1", a: "orb-11" },
  { de: "orb-1", a: "orb-12" },
  { de: "orb-2", a: "orb-11" },
  { de: "orb-2", a: "orb-12" },
  { de: "orb-11", a: "orb-12" },
  { de: "orb-3", a: "orb-11" },
  { de: "orb-3", a: "orb-12" },
  { de: "orb-3", a: "orb-9" },
  { de: "orb-3", a: "orb-10" },
  { de: "orb-9", a: "orb-10" },
  { de: "orb-4", a: "orb-9" },
  { de: "orb-4", a: "orb-10" },
  { de: "orb-4", a: "orb-7" },
  { de: "orb-4", a: "orb-8" },
  { de: "orb-7", a: "orb-8" },
  { de: "orb-5", a: "orb-7" },
  { de: "orb-5", a: "orb-8" },
  { de: "orb-6", a: "orb-7" },
  { de: "orb-6", a: "orb-8" },
  { de: "orb-7", a: "orb-9" },
  { de: "orb-8", a: "orb-10" },
  { de: "orb-9", a: "orb-11" },
  { de: "orb-10", a: "orb-12" },
  { de: "orb-10", a: "orb-12" },
  { de: "orb-7", a: "orb-3" },
  { de: "orb-8", a: "orb-3" },
  { de: "orb-9", a: "orb-2" },
  { de: "orb-10", a: "orb-2" },
  { de: "orb-11", a: "orb-4" },
  { de: "orb-12", a: "orb-4" },
  { de: "orb-9", a: "orb-5" },
  { de: "orb-10", a: "orb-5" }
];

