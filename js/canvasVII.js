
function comenzar(){
    /*var elemento=document.getElementById("idLienzo");
    idLienzo=elemento.getContext("2d");
    

    /*Rotacion del canvas
    idLienzo.font="bold 20px Verdana";
    idLienzo.fillText("Hola Alumnos", 50, 20);
    idLienzo.translate(100, 100);
    idLienzo.scale(3, 3);
    idLienzo.rotate(Math.PI);
    idLienzo.fillText("Hola Alumnos", -200, -150);

    /*Usando el metodo transform
    //idLienzo.transform(1,0,0,1,0,0); //valores por defecto
    //idLienzo.transform(3,1,2,3,150,200);
    
    idLienzo.transform(3,0,0,1,0,0);
    
    
    idLienzo.font="bold 20px Verdana";
    idLienzo.fillText("Hola Alumnos", 50, 50);

    //idLienzo.transform(1,0,0,10,0,0); //aplica los cambios tomando en cuenta lo hecho antriormente
    idLienzo.setTransform(1,0,0,10,0,0); //aplica los cambios tomando no tomando en cuenta lo hecho antriormente
    idLienzo.font="bold 20px Verdana";
    idLienzo.fillText("Hola Alumnos", 50, 50);*/


    /** Aplicando save y restores */
    var elemento=document.getElementById("idLienzo");
    idLienzo=elemento.getContext("2d");

    idLienzo.font="bold 20px Verdana";

    idLienzo.save();

    idLienzo.fillText("Hola Mundo", 50, 50);
    
    idLienzo.translate(60, 70);
    idLienzo.rotate(Math.PI/180*55);
    idLienzo.fillText("Hola alumnos", 0,0);

    //idLienzo.rotate(-Math.PI/180*55);
    idLienzo.restore();
    idLienzo.translate(300, 400);
    idLienzo.scale(2, 2);
    idLienzo.fillText("Hola Mundo", 100, 100);

}//end comenzar

window.addEventListener("load", comenzar, false);
