document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('venusStarCanvas');
    const ctx = canvas.getContext('2d');

    function drawVenusStarPoint(cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.fillStyle = 'gold';
        ctx.fill();
    }

    function drawVenusPosition(cx, cy, radius, venusAngle) {
        let angleInRadians = venusAngle * (Math.PI / 180);
        let x = cx + radius * Math.cos(angleInRadians);
        let y = cy + radius * Math.sin(angleInRadians);

        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }

    // Obtén la posición actual de Venus utilizando Astro.js
    function getVenusPosition() {
        const now = new Date();
        const observer = Astronomy.MakeObserver(0, 0, 0); // Observador en el centro de la Tierra
        const venus = Astronomy.HelioVector('Venus', now);
        const ecliptic = Astronomy.Ecliptic(venus);
        return ecliptic.elon; // Longitud eclíptica de Venus en grados
    }

    let venusAngle = getVenusPosition(); // Obtiene la posición actual de Venus en grados

    drawVenusStarPoint(400, 400, 5, 300, 150);
    drawVenusPosition(400, 400, 300, venusAngle);
});
