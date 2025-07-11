const orbes = [
    { id: "orb1", tipo: "interior", x: 350, y: 100, color: "#902692", orb:1, ordenM:7, mandala: "Alma", nombre: "Vibración", frecuencia: "Gamma", 
     situacion: "Flota por encima de la cabeza", conecta: "Glándula Pineal", mudra: "Mudra L.O.V.E", respiracion: "G Breath", 
     breve: "Es el sistema principal.", ampliado: "Es el sistema de memoria vibracional. Es el sistema que hace posible que los demás sistemas estén activos en el cuerpo y nos conecta con el espiritú. Regula el sueño y el descanso, la conexión espiritual, habilidades extrasensoriales, DMT y conciencia elevada. En caso de necesitar regulación lo mejor es la respiración." },
    { id: "orb2", tipo: "interior", x: 350, y: 200, color: "#0071bd", orb:2, ordenM:6, mandala: "Química", nombre: "Química", frecuencia: "Beta", situacion: "Flota frente a la cabeza", conecta: "Hipotálamo e Hipófisis", mudra: "Gyan Mudra", respiracion: "Beta", breve: "Es el sistema de memoria nutricional.", 
     ampliado: "Es el sistema que hace posible la digestión, el balance hormonal, el equilibrio hidro-electrólitico y el ph. Si el cuerpo está bien nutrido, dispondrá de energía para iniciar, gestionar y terminar proyectos, si hay desbalance pueden existir alergias y adicciones. En caso de necesitar regulación lo mejor es el movimiento." },
    { id: "orb3", tipo: "interior", x: 350, y: 300, color: "#02a550", orb:3, ordenM:5, mandala: "Emocional", nombre: "Emociones", frecuencia: "Alpha", situacion: "Flota frente al pecho", conecta: "Amígdala e Hipocampo", mudra: "Shuni Mudra", respiracion: "Alpha", breve: "Es el sistema de memoria emocional", ampliado: "El sistema límbico. Es decir, convierte la química cerebral en vibración y de esta forma sientas en el cuerpo la emoción. Este sistema es básicamente un GPS, conectado a todo tu cuerpo es un sistema intuitivo diseñado para indicarte si vas bien, o debes cambiar de dirección o decisiones. En caso de necesitar regulación lo mejor es el arte." },
    { id: "orb4", tipo: "interior", x: 350, y: 400, color: "#FFDE21", orb:4, ordenM:4, mandala: "Mental", nombre: "Información", frecuencia: "Theta", situacion: "Flota frente al vientre", conecta: "Lóbulo Frontal", mudra: "Surya Mudra", respiracion: "Theta", breve: "Es el sistema de creencias y valores.", ampliado: "Este sistema de información es básicamente la personalidad y se emplea en la solución de problemas, la toma de decisiones. Generando habilidades y confianza. Problemas de personalidad, desórdenes obsesivo-compulsivos, la hipocondría, o la falta de decisión para solucionar problemas o hacer cosas nuevas  se trabajan en este sistema." },
    { id: "orb5", tipo: "interior", x: 350, y: 500, color: "#f7941f", orb:5, ordenM:3, mandala: "Expresión", nombre: "Comunicación", frecuencia: "Delta", situacion: "Flota frente a las rodillas", conecta: "Lóbulos Parietal, Occipital y Temporal", mudra: "Buddhi Mudra", respiracion: "Delta", breve: "Es el sistema de memoria de comunicación", ampliado: "Regula la comunicación porque es el puente que conecta tu realidad interior con el mundo externo. Este sistema es peculiar porque actúa como el puente entre lo que sientes y piensas con la realidad tridimensional." },
    { id: "orb6", tipo: "interior", x: 350, y: 600, color: "#fb0202", orb:6, ordenM:2, mandala: "Acción", nombre: "Físico", frecuencia: "Segundo Beta", situacion: "Flota frente a los pies", conecta: "Cerebelo", mudra: "Anjali Mudra", respiracion: "Beta", breve: "Es el sistema de memoria muscular", ampliado: "Este sistema regula la motricidad y cualquier movimiento. Personas con poca energía física, que necesitan estimulantes o tienen problemas con energía sexual o recuperación de lesiones, hay que incrementar la energía en este sistema." },
    { id: "orb7", tipo: "exterior", x: 250, y: 450, color: "#fb0202", orb:7, ordenM:1, mandala: "Vocación", nombre: "Servicio", frecuencia: "Alpha", situacion: "Orbita alrededor de la muñeca de la mano dominante", conecta: "Tallo Cerebral", mudra: "", respiracion: "Alpha", breve: "Es el sistema de memoria de servicio", ampliado: "Este sistema de memoria, almacena la educación y vocación, que se puede trasladar a trabajar con servicio. El acto de dar con responsabilidad, disfrutando de ello." },
    { id: "orb8", tipo: "exterior", x: 450, y: 450, color: "#f7941f", orb:8, ordenM:12, mandala: "Social", nombre: "Relaciones", frecuencia: "Alpha", situacion: "Orbita alrededor de la muñeca de la mano no dominante", conecta: "Tallo Cerebral", mudra: "", respiracion: "Alpha", breve: "Es el sistema de memoria de servicio", ampliado: "Este sistema de memoria, almacena la interacción social, las relaciones que nos permiten recibir. Es necesario que haya equilibro entre las energías de ambas manos. Son las únicas memorias orbitales que hay que mantener activas."  },
    { id: "orb9", tipo: "exterior", x: 250, y: 350, color: "#FFDE21", orb:9, ordenM:11, mandala: "Motivación", nombre "Habilidades", frecuencia: "Theta", situacion: "Orbita alrededor del codo de la mano dominante", conecta: "Cordón Espinal", mudra: "", respiracion: "Theta", breve: "Es el sistema de memoria de servicio", ampliado: "Este sistema de memoria, registra las habilidades que se han ido obteniendo con la educación, vocación y servicio, y los dones que traemos de serie" },
    { id: "orb10", tipo: "exterior", x: 450, y: 350, color: "#02a550", orb:10, ordenM:10, mandala: "Marital", nombre: "Pareja", frecuencia: "Theta", situacion: "Orbita alrededor del codo de la mano no dominante", conecta: "Cordón Espinal", mudra: "", respiracion: "Theta", breve: "Es el sistema de memoria de servicio", ampliado: "Este sistema de memoria, registra las relaciones íntimas, nuestras preferencias y debilidades en este contexto." },
    { id: "orb11", tipo: "exterior", x: 250, y: 250, color: "#0071bd", orb:11, ordenM:9, mandala: "Filosofía", nombre: "Propósito", frecuencia: "Delta", 
     situacion: "Orbita alrededor del hombro de la mano dominante", conecta: "Sistema Nervioso Periférico", mudra: "", respiracion: "Delta", breve: "Es el sistema de memoria de servicio", ampliado: "Este sistema de memoria, nos permite vivir con propósito, gracias a nuestra vocación y habilidades en consonancia con nuestra filosofia de vida." },
    { id: "orb12", tipo: "exterior", x: 450, y: 250, color: "#902692", orb:12, ordenM:8, mandala: "Tribu", nombre: "Familia", frecuencia: "Delta", 
     situacion: "Orbita alrededor del hombro de la mano no dominante", conecta: "Sistema Nervioso Periférico", mudra: "", respiracion: "Delta", 
     breve: "Es el sistema de memoria familiar", 
     ampliado: "Este sistema de memoria, guarda nuestra interacción que sostiene nuestra vida, nuestra familia original y si la creamos nuestra tribu social elegida." 
    }
];

const conexiones = [
  { de: "orb1", a: "orb2", width: 3 },
  { de: "orb2", a: "orb3", width: 3 },
  { de: "orb3", a: "orb4", width: 3 },
  { de: "orb4", a: "orb5", width: 3 },
  { de: "orb5", a: "orb6", width: 3 },
  { de: "orb1", a: "orb11", width: 3 },
  { de: "orb1", a: "orb12", width: 3 },
  { de: "orb2", a: "orb11", width: 3 },
  { de: "orb2", a: "orb12", width: 3 },
  { de: "orb11", a: "orb12", width: 3 },
  { de: "orb3", a: "orb11", width: 3 },
  { de: "orb3", a: "orb12", width: 3 },
  { de: "orb3", a: "orb9", width: 3 },
  { de: "orb3", a: "orb10", width: 3 },
  { de: "orb9", a: "orb10", width: 2 },
  { de: "orb4", a: "orb9", width: 3 },
  { de: "orb4", a: "orb10", width: 3 },
  { de: "orb4", a: "orb7", width: 3 },
  { de: "orb4", a: "orb8", width: 3 },
  { de: "orb7", a: "orb8", width: 3 },
  { de: "orb5", a: "orb7", width: 3 },
  { de: "orb5", a: "orb8", width: 3 },
  { de: "orb6", a: "orb7", width: 3 },
  { de: "orb6", a: "orb8", width: 3 },
  { de: "orb7", a: "orb9", width: 2 },
  { de: "orb8", a: "orb10", width: 2 },
  { de: "orb9", a: "orb11", width: 2 },
  { de: "orb10", a: "orb12", width: 2 },
  { de: "orb7", a: "orb3", width: 3 },
  { de: "orb8", a: "orb3", width: 3 },
  { de: "orb9", a: "orb2", width: 3 },
  { de: "orb10", a: "orb2", width: 3 },
  { de: "orb11", a: "orb4", width: 3 },
  { de: "orb12", a: "orb4", width: 3 },
  { de: "orb9", a: "orb5", width: 3 },
  { de: "orb10", a: "orb5", width: 3 }
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

 const circulos = [
      { id: "orb-1", nombre: "Orb 1", orden: 1, x: 350, y: 100, color: "#902692", descripcion: "Gama. Vibración" },
      { id: "orb-2", nombre: "Orb 2", orden: 2, x: 350, y: 200, color: "#0071bd", descripcion: "Beta. Química" },
      { id: "orb-3", nombre: "Orb 3", orden: 3, x: 350, y: 300, color: "#02a550", descripcion: "Alpha. Emociones." },
      { id: "orb-4", nombre: "Orb 4", orden: 4, x: 350, y: 400, color: "#fef200", descripcion: "Theta. Información" },
      { id: "orb-5", nombre: "Orb 5", orden: 5, x: 350, y: 500, color: "#f7941f", descripcion: "Delta. Comunicación" },
      { id: "orb-6", nombre: "Orb 6", orden: 6, x: 350, y: 600, color: "#fb0202", descripcion: "Segundo Beta. Interacción" },
      { id: "orb-12", nombre: "Orb 12", orden: 12, x: 450, y: 250, color: "#eb018e", descripcion: "Familia" },
      { id: "orb-10", nombre: "Orb 10", orden: 10, x: 450, y: 350, color: "#00ff01", descripcion: "Pareja" },
      { id: "orb-8", nombre: "Orb 8", orden: 8, x: 450, y: 450, color: "#fef200", descripcion: "Relaciones" },
      { id: "orb-11", nombre: "Orb 11", orden: 11, x: 250, y: 250, color: "#0800ff", descripcion: "Propósito" },
      { id: "orb-9", nombre: "Orb 9", orden: 9, x: 250, y: 350, color: "#04adf0", descripcion: "Habilidades." },
      { id: "orb-7", nombre: "Orb 7", orden: 7, x: 250, y: 450, color: "#fb0202", descripcion: "Servicio" }
    ];
