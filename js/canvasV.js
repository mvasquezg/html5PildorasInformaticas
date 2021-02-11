
function comenzar(){
    var elemento=document.getElementById("idLienzo");
    
    idLienzo=elemento.getContext("2d");

    idLienzo.arc(200, 150, 100, 0, Math.PI*2, false);

    idLienzo.stroke();

    idLienzo.lineWidth=10;
    idLienzo.lineCap="round";

    idLienzo.beginPath();

    idLienzo.arc(200, 170, 60, 0, Math.PI, false);

    idLienzo.stroke();

    //Cambiar el tipo de linea
    idLienzo.lineWidth=5;

    //idLienzo.lineJoin="round"; idLienzo.lineJoin="bevel";
    idLienzo.lineJoin="miter";
    idLienzo.miterLimit=2;

    idLienzo.beginPath();

    //se lleva el lapiz a estos puntos
    idLienzo.moveTo(195, 135);

    idLienzo.lineTo(215, 155);

    idLienzo.lineTo(195, 155);

    idLienzo.stroke();


    //Ojos
    idLienzo.lineWidth=1;

    idLienzo.beginPath();

    idLienzo.arc(175, 110, 7, 0, Math.PI*2, false);

    idLienzo.arc(225, 110, 7, 0, Math.PI*2, false);

    idLienzo.fill();

    idLienzo.beginPath();

    idLienzo.arc(168, 106, 15, 0, Math.PI*2, false);

    idLienzo.stroke();

    idLienzo.beginPath();

    idLienzo.arc(232, 106, 15, 0, Math.PI*2, false);

    idLienzo.stroke();







}//end comenzar

window.addEventListener("load", comenzar, false);
