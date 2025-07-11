const datos = {
  que: {
    orbes: ["Esencia", "Vida", "Energía", "Luz", "Amor"],
    texto: "Esto es lo que representa cada orbe en el contexto de QUÉ."
  },
  cuando: {
    orbes: ["Pasado", "Presente", "Futuro", "Momento", "Ciclo"],
    texto: "Aquí se muestra el sentido temporal de las orbes: CUÁNDO."
  },
  donde: {
    orbes: ["Cielo", "Tierra", "Centro", "Entorno", "Espacio"],
    texto: "Esta sección ubica las orbes en el espacio: DÓNDE."
  },
  como: {
    orbes: ["Fluir", "Crear", "Sentir", "Conectar", "Ser"],
    texto: "En esta sección vemos el modo de interactuar: CÓMO."
  }
const contenidos = {
  que: {
    titulo: '¿Qué es?',
    descripcion: 'Esta sección explica el propósito y contenido del proyecto.'
  },
  cuando: {
    titulo: '¿Cuándo?',
    descripcion: 'Aquí detallamos los momentos claves del desarrollo y uso.'
  },
  donde: {
    titulo: '¿Dónde?',
    descripcion: 'Se describe el lugar o contexto donde aplica este conocimiento.'
  },
  como: {
    titulo: '¿Cómo?',
    descripcion: 'Explicación sobre el funcionamiento y aplicación práctica.'
  }
};
  
  
};

const orbes = [
    { id: "orb-1", tipo: "central", x: 350, y: 100, color: "#902692", nombre: "Conexión", frecuencia: "Gama", situacion: "Flota por encima de tu cabeza", conecta: "Pineal", mudra: "Mudra L.O.V.E", respiracion: "G Breath", breve: "Es el sistema principal.", ampliado: "Es el sistema de memoria vibracional. Es el sistema que hace posible que los demás sistemas estén activos en el cuerpo. Regula el sueño y el descanso, la conexión espiritual, habilidades extrasensoriales, DMT y conciencia elevada. En caso de necesitar regulación lo mejor es la respiración." },
    { id: "orb-2", tipo: "central", x: 350, y: 200, color: "#0071bd", nombre: "Química", frecuencia: "Beta", situacion: "Flota frente a la cabeza", conecta: "Hipotálamo e Hipófisis", mudra: "Gyan Mudra", respiracion: "Beta", breve: "Es el sistema de memoria nutricional.", ampliado: "Es el sistema que hace posible la digestión, el balance hormonal, el equilibrio hidro-electrólitico y el ph. Si el cuerpo está bien nutrido, dispondrá de energía para iniciar, gestionar y terminar proyectos, si hay desbalance pueden existir alergias y adicciones. En caso de necesitar regulación lo mejor es el movimiento." },
    { id: "orb-3", tipo: "central", x: 350, y: 300, color: "#02a550", nombre: "Emociones", frecuencia: "Alpha", situacion: "Flota frente al pecho", conecta: "Amígdala y el hipocampo", mudra: "Shuni Mudra", respiracion: "Alpha", breve: "Es el sistema de memoria emocional", ampliado: "El sistema límbico. Es decir, convierte la química cerebral en vibración y de esta forma sientas en el cuerpo la emoción. Este sistema es básicamente un GPS, conectado a todo tu cuerpo es un sistema intuitivo diseñado para indicarte si vas bien, o debes cambiar de dirección o decisiones. En caso de necesitar regulación lo mejor es el arte." },
    { id: "orb-4", tipo: "central", x: 350, y: 400, color: "#CCCC00", nombre: "Información", frecuencia: "Theta", situacion: "Flota frente al vientre", conecta: "Lóbulo Frontal", mudra: "Surya Mudra", respiracion: "Theta", breve: "Es el sistema de creencias y valores.", ampliado: "Este sistema de información es básicamente la personalidad y se emplea en la solución de problemas, la toma de decisiones. Generando habilidades y confianza. Problemas de personalidad, desórdenes obsesivo-compulsivos, la hipocondría, o la falta de decisión para solucionar problemas o hacer cosas nuevas  se trabajan en este sistema." },
    { id: "orb-5", tipo: "central", x: 350, y: 500, color: "#f7941f", nombre: "Comunicación", frecuencia: "Delta", situacion: "Flota frente a las rodillas", conecta: "Lóbulos parietal, occipital y temporal", mudra: "Buddhi Mudra", respiracion: "Theta", breve: "Es el sistema de memoria de comunicación", ampliado: "Regula la comunicación porque es el puente que conecta tu realidad interior con el mundo externo. Este sistema es peculiar porque actúa como el puente entre lo que sientes y piensas con la realidad tridimensional." },
    { id: "orb-6", tipo: "central", x: 350, y: 600, color: "#fb0202", nombre: "Interacción", frecuencia: "Segundo Beta", situacion: "Flota frente a los pies", conecta: "Cerebelo", mudra: "Anjali Mudra", respiracion: "Beta", breve: "Es el sistema de memoria muscular", ampliado: "Este sistema regula la motricidad y cualquier movimiento. Personas con poca energía física, que necesitan estimulantes o tienen problemas con energía sexual o recuperación de lesiones, hay que incrementar la energía en este sistema." },
    { id: "orb-7", tipo: "orbital", x: 250, y: 450, color: "#fb0202", nombre: "Servicio", frecuencia: "", situacion: "Orbita alrededor de la muñeca de la mano dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est" },
    { id: "orb-8", tipo: "orbital", x: 450, y: 450, color: "#f7941f", nombre: "Relaciones", frecuencia: "", situacion: "Orbita alrededor de la muñeca de la mano no dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est"  },
    { id: "orb-9", tipo: "orbital", x: 250, y: 350, color: "#f7941f", nombre: "Habilidades", frecuencia: "", situacion: "Orbita alrededor del codo de la mano dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est" },
    { id: "orb-10", tipo: "orbital", x: 450, y: 350, color: "#02a550", nombre: "Pareja", frecuencia: "", situacion: "Orbita alrededor del codo de la mano no dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est" },
    { id: "orb-11", tipo: "orbital", x: 250, y: 250, color: "#0071bd", nombre: "Propósito", frecuencia: "", situacion: "Orbita alrededor del hombro de la mano dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est" },
    { id: "orb-12", tipo: "orbital", x: 450, y: 250, color: "#902692", nombre: "Familia", frecuencia: "", situacion: "Orbita alrededor del hombro de la mano no dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est" }
];

const conexiones = [
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
  { de: "orb-7", a: "orb-3" },
  { de: "orb-8", a: "orb-3" },
  { de: "orb-9", a: "orb-2" },
  { de: "orb-10", a: "orb-2" },
  { de: "orb-11", a: "orb-4" },
  { de: "orb-12", a: "orb-4" },
  { de: "orb-9", a: "orb-5" },
  { de: "orb-10", a: "orb-5" }
];
