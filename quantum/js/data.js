
const orbes = [
    { id: "orb1", tipo: "central", x: 350, y: 100, color: "#902692", orden:1, nombre: "Conexión", frecuencia: "Gama", situacion: "Flota por encima de tu cabeza", conecta: "Pineal", mudra: "Mudra L.O.V.E", respiracion: "G Breath", breve: "Es el sistema principal.", ampliado: "Es el sistema de memoria vibracional. Es el sistema que hace posible que los demás sistemas estén activos en el cuerpo. Regula el sueño y el descanso, la conexión espiritual, habilidades extrasensoriales, DMT y conciencia elevada. En caso de necesitar regulación lo mejor es la respiración." },
    { id: "orb2", tipo: "central", x: 350, y: 200, color: "#0071bd", orden:2, nombre: "Química", frecuencia: "Beta", situacion: "Flota frente a la cabeza", conecta: "Hipotálamo e Hipófisis", mudra: "Gyan Mudra", respiracion: "Beta", breve: "Es el sistema de memoria nutricional.", ampliado: "Es el sistema que hace posible la digestión, el balance hormonal, el equilibrio hidro-electrólitico y el ph. Si el cuerpo está bien nutrido, dispondrá de energía para iniciar, gestionar y terminar proyectos, si hay desbalance pueden existir alergias y adicciones. En caso de necesitar regulación lo mejor es el movimiento." },
    { id: "orb3", tipo: "central", x: 350, y: 300, color: "#02a550", orden:3, nombre: "Emociones", frecuencia: "Alpha", situacion: "Flota frente al pecho", conecta: "Amígdala y el hipocampo", mudra: "Shuni Mudra", respiracion: "Alpha", breve: "Es el sistema de memoria emocional", ampliado: "El sistema límbico. Es decir, convierte la química cerebral en vibración y de esta forma sientas en el cuerpo la emoción. Este sistema es básicamente un GPS, conectado a todo tu cuerpo es un sistema intuitivo diseñado para indicarte si vas bien, o debes cambiar de dirección o decisiones. En caso de necesitar regulación lo mejor es el arte." },
    { id: "orb4", tipo: "central", x: 350, y: 400, color: "#FFDE21", orden:4, nombre: "Información", frecuencia: "Theta", situacion: "Flota frente al vientre", conecta: "Lóbulo Frontal", mudra: "Surya Mudra", respiracion: "Theta", breve: "Es el sistema de creencias y valores.", ampliado: "Este sistema de información es básicamente la personalidad y se emplea en la solución de problemas, la toma de decisiones. Generando habilidades y confianza. Problemas de personalidad, desórdenes obsesivo-compulsivos, la hipocondría, o la falta de decisión para solucionar problemas o hacer cosas nuevas  se trabajan en este sistema." },
    { id: "orb5", tipo: "central", x: 350, y: 500, color: "#f7941f", orden:5, nombre: "Comunicación", frecuencia: "Delta", situacion: "Flota frente a las rodillas", conecta: "Lóbulos parietal, occipital y temporal", mudra: "Buddhi Mudra", respiracion: "Theta", breve: "Es el sistema de memoria de comunicación", ampliado: "Regula la comunicación porque es el puente que conecta tu realidad interior con el mundo externo. Este sistema es peculiar porque actúa como el puente entre lo que sientes y piensas con la realidad tridimensional." },
    { id: "orb6", tipo: "central", x: 350, y: 600, color: "#fb0202", orden:6, nombre: "Interacción", frecuencia: "Segundo Beta", situacion: "Flota frente a los pies", conecta: "Cerebelo", mudra: "Anjali Mudra", respiracion: "Beta", breve: "Es el sistema de memoria muscular", ampliado: "Este sistema regula la motricidad y cualquier movimiento. Personas con poca energía física, que necesitan estimulantes o tienen problemas con energía sexual o recuperación de lesiones, hay que incrementar la energía en este sistema." },
    { id: "orb7", tipo: "orbital", x: 250, y: 450, color: "#fb0202", orden:7, nombre: "Servicio", frecuencia: "", situacion: "Orbita alrededor de la muñeca de la mano dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est" },
    { id: "orb8", tipo: "orbital", x: 450, y: 450, color: "#f7941f", orden:8, nombre: "Relaciones", frecuencia: "", situacion: "Orbita alrededor de la muñeca de la mano no dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est"  },
    { id: "orb9", tipo: "orbital", x: 250, y: 350, color: "#FFDE21", orden:9, nombre: "Habilidades", frecuencia: "", situacion: "Orbita alrededor del codo de la mano dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est" },
    { id: "orb10", tipo: "orbital", x: 450, y: 350, color: "#02a550", orden:10, nombre: "Pareja", frecuencia: "", situacion: "Orbita alrededor del codo de la mano no dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est" },
    { id: "orb11", tipo: "orbital", x: 250, y: 250, color: "#0071bd", orden:11, nombre: "Propósito", frecuencia: "", situacion: "Orbita alrededor del hombro de la mano dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est" },
    { id: "orb12", tipo: "orbital", x: 450, y: 250, color: "#902692", orden:12, nombre: "Familia", frecuencia: "", situacion: "Orbita alrededor del hombro de la mano no dominante", conecta: "", mudra: "", respiracion: "", breve: "Es el sistema de memoria de servicio", ampliado: "Est" }
];

const conexiones = [
  { de: "orb1", a: "orb2" },
  { de: "orb2", a: "orb3" },
  { de: "orb3", a: "orb4" },
  { de: "orb4", a: "orb5" },
  { de: "orb5", a: "orb6" },
  { de: "orb1", a: "orb11" },
  { de: "orb1", a: "orb12" },
  { de: "orb2", a: "orb11" },
  { de: "orb2", a: "orb12" },
  { de: "orb11", a: "orb12" },
  { de: "orb3", a: "orb11" },
  { de: "orb3", a: "orb12" },
  { de: "orb3", a: "orb9" },
  { de: "orb3", a: "orb10" },
  { de: "orb9", a: "orb10" },
  { de: "orb4", a: "orb9" },
  { de: "orb4", a: "orb10" },
  { de: "orb4", a: "orb7" },
  { de: "orb4", a: "orb8" },
  { de: "orb7", a: "orb8" },
  { de: "orb5", a: "orb7" },
  { de: "orb5", a: "orb8" },
  { de: "orb6", a: "orb7" },
  { de: "orb6", a: "orb8" },
  { de: "orb7", a: "orb9" },
  { de: "orb8", a: "orb10" },
  { de: "orb9", a: "orb11" },
  { de: "orb10", a: "orb12" },
  { de: "orb7", a: "orb3" },
  { de: "orb8", a: "orb3" },
  { de: "orb9", a: "orb2" },
  { de: "orb10", a: "orb2" },
  { de: "orb11", a: "orb4" },
  { de: "orb12", a: "orb4" },
  { de: "orb9", a: "orb5" },
  { de: "orb10", a: "orb5" }
];

const contenidos = {
  que: {
    textos: {
      orb1: "Vibracional", orb2: "Nutricional", orb3: "Sensacional", orb4: "Neurológico", orb5: "Expresional", orb6: "Experiencial",
      orb7: "Vocacional", orb8: "Social", orb9: "Motivacional", orb10: "Marital", orb11: "Filantrópico", orb12: "Supervivencia",
    },
    descripcion: "Las orbs son energía pulsando en onda y partícula, movilizando la memoría de los distintos sistemas."
  },
  cuando: {
    textos: {
      orb1: "Espiritual", orb2: "Químico", orb3: "Límbico", orb4: "Neurológico", orb5: "Comunicativo", orb6: "Físico",
      orb7: "Trabajo", orb8: "Relaciones", orb9: "Pareja", orb10: "Habilidades", orb11: "Familia", orb12: "Propósito",
    },
    descripcion: "Cuerpo donde se expresa"
  },
  donde: {
    textos: {
      orb1: "Sobre la cabeza", orb2: "Cabeza", orb3: "Pecho", orb4: "Abdomen", orb5: "Rodillas",
        orb6: "Pies",
      orb7: "Mano dominate", orb8: "Mano no dominante", orb9: "Codo dominante",  orb10: "Codo no dominante", orb11: "Hombro dominante", orb12: "Hombro no dominante"
    },
    descripcion: "Las orbes centrales se ubican por delante del cuerpo, a un codo de distancia. Las laterales, son mas pequeñas y orbitan alrededor de una parte de los brazos"
  },
  como: {
    textos: {
      orb1: "Gamma", orb2: "Beta", orb3: "Alpha",  orb4: "Theta", orb5: "Delta", orb6: "Zeta",
      orb7: "Alpha", orb8: "Alpha", orb9: "Theta",  orb10: "Theta", orb11: "Delta", orb12: "Delta"
    },
    descripcion: "Frecuencia cerebrales. Las orbes centrales son pulsantes y las exteriores orbitan, dan vueltas."
  }
};
