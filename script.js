document.addEventListener("DOMContentLoaded", function () {
    const moonPhaseName = document.getElementById('moon-phase-name');
    const dateForm = document.getElementById('date-form');
    const dateInput = document.getElementById('date-input');

    function getMoonPhase(date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1; // Enero es 0
        let day = date.getDate();

        let c = 0, e = 0, jd = 0, b = 0;
        if (month < 3) {
            year--;
            month += 12;
        }
        ++month;
        c = 365.25 * year;
        e = 30.6 * month;
        jd = c + e + day - 694039.09; // días julianos desde 1/1/1900
        jd /= 29.5305882; // ciclo lunar (29.53 días)
        b = parseInt(jd); // parte entera
        jd -= b; // parte fraccionaria
        b = Math.round(jd * 8); // fases de la luna en 8 partes
        if (b >= 8) {
            b = 0; // fase completa en 8 partes
        }

        return b;
    }

    function displayMoonPhase(phase) {
        const phases = [
            "Luna Nueva",
            "Luna Creciente",
            "Cuarto Creciente",
            "Gibosa Creciente",
            "Luna Llena",
            "Gibosa Menguante",
            "Cuarto Menguante",
            "Luna Menguante"
        ];

        moonPhaseName.textContent = phases[phase];
        moonPhaseName.style.color = "#333"; // Cambiar el color del texto según el fondo
    }

    function updateMoonPhase(date) {
        const phase = getMoonPhase(date);
        displayMoonPhase(phase);
    }

    dateForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedDate = new Date(dateInput.value);
        updateMoonPhase(selectedDate);
    });

    // Mostrar fase lunar actual al cargar la página
    updateMoonPhase(new Date());
});


    // Mostrar fase lunar actual al cargar la página
    updateMoonPhase(new Date());
});
