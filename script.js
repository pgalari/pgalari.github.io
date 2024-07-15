document.addEventListener("DOMContentLoaded", function () {
    const moonFase = document.getElementById('moonFase');
    const phaseName = document.getElementById('phase-name');
    const dateForm = document.getElementById('date-form');
    const dateInput = document.getElementById('date-input');

    function getMoonPhase(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Enero es 0
        const day = date.getDate();

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

        console.log("Calculated Moon Phase: ", b); // Depuración
        alert(b); // Depuración
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

        phaseName.textContent = phases[phase];
        let boxShadowValue;

        switch (phase) {
            case 0: // Luna Nueva
                boxShadowValue = "inset 100px 0 0 0 #999";
                break;
            case 1: // Luna Creciente
                boxShadowValue = "inset 75px 0 0 0 #999";
                break;
            case 2: // Cuarto Creciente
                boxShadowValue = "inset 50px 0 0 0 #999";
                break;
            case 3: // Gibosa Creciente
                boxShadowValue = "inset 25px 0 0 0 #999";
                break;
            case 4: // Luna Llena
                boxShadowValue = "inset 0 0 0 0 #999";
                break;
            case 5: // Gibosa Menguante
                boxShadowValue = "inset -25px 0 0 0 #999";
                break;
            case 6: // Cuarto Menguante
                boxShadowValue = "inset -50px 0 0 0 #999";
                break;
            case 7: // Luna Menguante
                boxShadowValue = "inset -75px 0 0 0 #999";
                break;
        }

        moonFase.style.boxShadow = boxShadowValue;
    }

    function updateMoonPhase(date) {
        const phase = getMoonPhase(date);
        displayMoonPhase(phase);
    }

    dateForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedDate = dateInput.value ? new Date(dateInput.value) : new Date();
        updateMoonPhase(selectedDate);
    });

    // Mostrar fase lunar actual al cargar la página
    updateMoonPhase(new Date());
});

