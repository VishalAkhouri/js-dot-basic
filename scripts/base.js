function healthCheck() {
    console.log('basic health check');
}

function drawLine() {
    var myCanvas = document.getElementById('myCanvas');
    var ctx = myCanvas.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawCircle() {
    var myCanvas = document.getElementById('myCanvas');
    var ctx = myCanvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(90, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}