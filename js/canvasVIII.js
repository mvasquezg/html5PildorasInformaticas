
function comenzar(){
    var elemento=document.getElementById("idLienzo");
    idLienzo=elemento.getContext("2d");
    
    /*Superpociones de elemntos con canvas y JS
    idLienzo.fillStyle="#880000";
    idLienzo.fillRect(400, 250, 300, 100);

    //idLienzo.globalCompositeOperation="destination-atop";
    idLienzo.globalCompositeOperation="source-out";

    idLienzo.fillStyle="#aaaaff";
    idLienzo.font="bold 80px Verdana";
    idLienzo.textAlign="center";
    idLienzo.textBaseline="middle";
    idLienzo.fillText("Hola alumnos", 550, 300);
    */

    var imagen=new Image();

    imagen.src="../html5PildorasInformaticas/img/1.jpg";

    imagen.addEventListener("load", function(){
                //idLienzo.drawImage(imagen, 250, 300);
                //idLienzo.drawImage(imagen, 0, 0, elemento.width, elemento.height);
                idLienzo.drawImage(imagen, 50, 10, 75, 75, 0, 0, 300, 300);
            
            } ,false
    );



}//end comenzar

window.addEventListener("load", comenzar, false);
