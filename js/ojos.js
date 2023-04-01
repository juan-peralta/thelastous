let canvas; 

function iniciar(){
    let elemento = document.getElementById("canvas");
    canvas = elemento.getContext("2d");
    window.addEventListener("mousemove", animacion);
}
function animacion(evento){
    canvas.clearRect(0,0,500,300);
    let xcentro = 220;
    let ycentro = 150;
    let xmouse = evento.clientX;
    let ymouse = evento.clientY;
    let ang = Math.atan2(ymouse-ycentro, xmouse-xcentro);
    let x = xcentro + Math.round(Math.cos(ang)*8);
    let y = ycentro + Math.round(Math.sin(ang)*8);
    canvas.fillStyle = "black";
    canvas.strokeStyle ="rgba(0, 0, 0, 0)";

    canvas.beginPath();
    canvas.arc(xcentro, ycentro, 20,0,Math.PI *2,false);
    canvas.moveTo(xcentro+70,ycentro);
    canvas.arc(xcentro+100,ycentro,20,0,Math.PI*2, false);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(x+20,y);
    canvas.arc(x,y,5,0,Math.PI *2, false);
    canvas.moveTo(x+60,y);
    canvas.arc(x+100,y,5,0,Math.PI *2, false);
    canvas.fill();
}

window.addEventListener("load", iniciar);