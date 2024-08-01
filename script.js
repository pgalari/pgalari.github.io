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

                // Limpiar clases anteriores
                moonFase.className = '';
                sky = 0;        
                // Asignar la clase correspondiente a la fase lunar
                switch (phase) {
                    case 0:
                        moonFase.classList.add('luna-nueva');
                                        starsky = 1;  
                        break;
                    case 1:
                        moonFase.classList.add('lunula-creciente');
                                        starsky = 2;  
                        break;
                    case 2:
                        moonFase.classList.add('cuarto-creciente');
                                        starsky = 3;  
                        break;
                    case 3:
                        moonFase.classList.add('gibosa-creciente');
                                        starsky = 4;  
                        break;
                    case 4:
                        moonFase.classList.add('luna-llena');
                                        starsky = 5;  
                        break;
                    case 5:
                        moonFase.classList.add('gibosa-menguante');
                                        starsky = 6;  
                        break;
                    case 6:
                        moonFase.classList.add('cuarto-menguante');
                                        starsky = 7;  
                        break;
                    case 7:
                        moonFase.classList.add('lunula-menguante');
                                        starsky = 8;  
                        break;
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

            var w = window.innerWidth;
            var h = window.innerHeight;

            // estrellas random
            sky = 240/starsky;
            for (i = 1; i < starsky; i++) {
                wRan = Math.floor(Math.random() * w);
                hRan = Math.floor(Math.random() * h);
                var star = document.createElement("div");
                star.setAttribute("class", "star");
                star.style.bottom = hRan + "px";
                star.style.right = wRan + "px";
                star.style.bordeRadius = "2px";
                document.body.appendChild(star);
            } 
        });
            
