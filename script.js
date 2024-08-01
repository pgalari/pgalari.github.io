document.addEventListener("DOMContentLoaded", function () {
    const moonFase = document.getElementById('moonFase');
    const phaseName = document.getElementById('phase-name');
    const dateForm = document.getElementById('date-form');
    const dateInput = document.getElementById('date-input');
    const formattedDateDisplay = document.getElementById('formattedDateDisplay');

    function formatDate(date) {
        const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        return `${dayName}, ${day} de ${month} de ${year}, ${hours}:${minutes}`;
    }

    function getMoonPhase(date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1; // Enero es 0
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let c = 0, e = 0, jd = 0, b = 0;
        if (month < 3) {
            year--;
            month += 12;
        }
        ++month;
        c = 365.25 * year;
        e = 30.6 * month;
        jd = c + e + day - 694039.09 + (hours + minutes / 60 + seconds / 3600) / 24; // días julianos desde 1/1/1900
        jd /= 29.5305882; // ciclo lunar (29.53 días)
        b = parseInt(jd); // parte entera
        jd -= b; // parte fraccionaria
        b = Math.round(jd * 8); // fases de la luna en 8 partes
        if (b >= 8) {
            b = 0; // fase completa en 8 partes
        }

        return {
            phase: b,
            illumination: (1 - Math.cos((jd - 0.5) * 2 * Math.PI)) * 100 // Porcentaje de iluminación
        };
    }

    function displayMoonPhase(phase, illumination) {
        const phases = [
            "Luna Nueva",
            "Lúnula Creciente",
            "Cuarto Creciente",
            "Gibosa Creciente",
            "Luna Llena",
            "Gibosa Menguante",
            "Cuarto Menguante",
            "Lúnula Menguante"
        ];

        phaseName.textContent = phases[phase];
        console.log("Displaying phase: ", phases[phase]);

        // Limpiar clases anteriores
        moonFase.className = '';
        // Asignar la clase correspondiente a la fase lunar
        switch (phase) {
            case 0:
                moonFase.classList.add('luna-nueva');
                starsky = 240;
                break;
            case 1:
                moonFase.classList.add('lunula-creciente');
                starsky = 180;
                break;
            case 2:
                moonFase.classList.add('cuarto-creciente');
                starsky = 120;
                break;
            case 3:
                moonFase.classList.add('gibosa-creciente');
                starsky = 60;
                break;
            case 4:
                moonFase.classList.add('luna-llena');
                starsky = 30;
                break;
            case 5:
                moonFase.classList.add('gibosa-menguante');
                starsky = 60;
                break;
            case 6:
                moonFase.classList.add('cuarto-menguante');
                starsky = 120;
                break;
            case 7:
                moonFase.classList.add('lunula-menguante');
                starsky = 180;
                break;
        }
        displayStars(starsky);
    }

    function updateMoonPhase(date) {
        const { phase, illumination } = getMoonPhase(date);
        displayMoonPhase(phase, illumination);
    }

    function getRandomSize() {
        const rand = Math.random();
        if (rand < 0.7) {
            return 1; // 70% de probabilidad para las estrellas pequeñas
        } else if (rand < 0.9) {
            return 2; // 20% de probabilidad para las estrellas medianas
        } else {
            return 3; // 10% de probabilidad para las estrellas grandes
        }
    }

    function displayStars(starsky) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        
        // Limpiar estrellas anteriores
        document.querySelectorAll('.star').forEach(star => star.remove());
        
        // Generar nuevas estrellas
        for (let i = 0; i < starsky; i++) {
            let wRan = Math.floor(Math.random() * w);
            let hRan = Math.floor(Math.random() * h);
            let size = getRandomSize();
            var star = document.createElement("div");
            star.setAttribute("class", "star");
            star.style.bottom = hRan + "px";
            star.style.right = wRan + "px";
            star.style.borderRadius = "50%";
            star.style.width = size + "px";
            star.style.height = size + "px";
            document.body.appendChild(star);
        }
    }

    dateForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedDate = dateInput.value ? new Date(dateInput.value) : new Date();
        const formattedDate = formatDate(selectedDate);
        updateMoonPhase(selectedDate);

        // Mostrar la fecha formateada
        formattedDateDisplay.textContent = formattedDate;
    });

    // Mostrar fase lunar actual al cargar la página
    const currentDate = new Date();
    updateMoonPhase(currentDate);

    // Mostrar la fecha actual formateada al cargar la página
    formattedDateDisplay.textContent = formatDate(currentDate);
});

