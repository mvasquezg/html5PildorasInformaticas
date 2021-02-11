
function comenzar(){
    var elemento=document.getElementById("idLienzo");
    idLienzo=elemento.getContext("2d");

    //propiedades para el sombreado
    idLienzo.shadowColor="rgba(0,0,0,0.5)";
    idLienzo.shadowOffsetX=4;
    idLienzo.shadowOffsetY=4;
    idLienzo.shadowBlur=5;


    idLienzo.font="bold 48px Verdana";
    idLienzo.textAlign="start"; //inicia en este ejemplo ne 100, 100
    //idLienzo.textAlign="end"; //termina en ests ejemplo en 100, 100
    
    idLienzo.textBaseline="top" //linea arriba del texto en este ejemplo
    //idLienzo.textBaseline="bottom" //linea abajo del texto en este ejemplo

    idLienzo.fillText("Hola Alumnos", 100, 100);

    /*idLienzo.moveTo(100, 100);

    idLienzo.lineTo(200, 100);
    idLienzo.stroke();*/

    var dimensiones=idLienzo.measureText("Hola Alumnos");

    //idLienzo.strokeRect(100, 100, dimensiones.width+10, 48+10);

    


    
}//end comenzar

window.addEventListener("load", comenzar, false);
