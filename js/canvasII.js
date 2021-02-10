
function comenzar(){
    
    var elemento=document.getElementById("idLienzo");
    idLienzo=elemento.getContext("2d");

    /*Degrado lineal
    var degradado=idLienzo.createLinearGradient(0, 150, 500, 150);

    degradado.addColorStop(0, "red");
    degradado.addColorStop(1 , "green");

    idLienzo.fillStyle=degradado;

    idLienzo.fillRect(0, 0, 500, 300);
    */

   /*degradado diagonal 
   var degradado=idLienzo.createLinearGradient(0, 0, 500, 300);
   degradado.addColorStop(0, "red");
   degradado.addColorStop(1 , "green");

   idLienzo.fillStyle=degradado;

   idLienzo.fillRect(0, 0, 500, 300);*/
   
   /*Cambiando de posicion los colores
   var degradado=idLienzo.createLinearGradient(0, 150, 500, 150);
   degradado.addColorStop(1, "red");
   degradado.addColorStop(0 , "green");

   idLienzo.fillStyle=degradado;

   idLienzo.fillRect(0, 0, 500, 300);
   */

  var degradado=idLienzo.createRadialGradient(250, 150, 50, 250, 150, 100);
  degradado.addColorStop(0, "red");
  degradado.addColorStop(1 , "green");

  idLienzo.fillStyle=degradado;

  idLienzo.fillRect(0, 0, 500, 300);
  

}

window.addEventListener("load", comenzar, false);
