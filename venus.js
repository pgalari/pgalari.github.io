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

    drawVenusStarPoint(400, 400, 5, 300, 150);
});
