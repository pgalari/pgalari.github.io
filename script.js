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
                
                return `${dayName}, ${day} de ${month} de ${year}`;
            }

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

                let boxShadowValue = '';
                let clipPathValue = '';
                let backgroundColor = '';
                let classToAdd = ''; // Nueva variable para clases CSS

                switch (phase) {
                    case 0: // Luna Nueva
                        boxShadowValue = 'inset 0 0 0 100px #333';
                        clipPathValue = '';
                        break;
                    case 1: // Lúnula Creciente
                        boxShadowValue = 'inset 275px 0 0 0 #333';
                        clipPathValue = '';
                        break;
                    case 2: // Cuarto Creciente
                        boxShadowValue = ''; 
                        clipPathValue = ''; 
                        classToAdd = 'semicirculoR'; // Clase para semicírculo a la derecha
                        break;
                    case 3: // Gibosa Creciente
                        boxShadowValue = 'inset 50px 0 0 0 #333';
                        clipPathValue = '';
                        break;
                    case 4: // Luna Llena
                        boxShadowValue = 'inset 0 0 0 100px #eee';
                        clipPathValue = '';
                        break;
                    case 5: // Gibosa Menguante
                        boxShadowValue = 'inset -50px 0 0 0 #333';
                        clipPathValue = '';
                        break;
                    case 6: // Cuarto Menguante
                        boxShadowValue = ''; 
                        clipPathValue = ''; 
                        classToAdd = 'semicirculoL'; // Clase para semicírculo a la izquierda
                        break;
                    case 7: // Lúnula Menguante
                        boxShadowValue = 'inset -275px 0 0 0 #333';
                        clipPathValue = '';
                        break;
                }

                console.log("Applying box-shadow: ", boxShadowValue);
                console.log("Applying clip-path: ", clipPathValue);
                moonFase.style.boxShadow = boxShadowValue;
                moonFase.style.clipPath = clipPathValue;
                moonFase.style.backgroundColor = backgroundColor;
                
                // Limpiamos cualquier clase previa y aplicamos la nueva clase si es necesario
                moonFase.className = '';
                if (classToAdd) {
                    moonFase.classList.add(classToAdd);
                }
            }

            function updateMoonPhase(date) {
                const { phase, illumination } = getMoonPhase(date);
                displayMoonPhase(phase, illumination);
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

    // Mostrar fase lunar actual al cargar la página
    const currentDate = new Date();
    updateMoonPhase(currentDate);

    // Mostrar la fecha actual formateada al cargar la página
    formattedDateDisplay.textContent = formatDate(currentDate);
});
