

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function dibujarCuadrado() {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 50, 50);
    

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(25, 1);
    ctx.lineTo(25, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 25);
    ctx.lineTo(50, 25);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(50, 50);
    ctx.lineTo(50, 0);
    ctx.lineTo(0, 0);
    ctx.lineTo(0, 50);
    ctx.stroke();
}


function dibujarrectangulo() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 25, 100);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(25, 1);
    ctx.lineTo(25, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 25);
    ctx.lineTo(25, 25);
    ctx.moveTo(0, 50);
    ctx.lineTo(25, 50);
    ctx.moveTo(0, 75);
    ctx.lineTo(25, 75);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(25, 0);
    ctx.lineTo(25, 100);
    ctx.lineTo(0, 100);
    ctx.lineTo(0,0);
    ctx.stroke();
}

dibujarCuadrado();
//dibujarrectangulo()

//--------------------------------------------