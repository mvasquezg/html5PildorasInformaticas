
function comenzar(){
  var elemento=document.getElementById("idLienzo");
  idLienzo=elemento.getContext("2d");

  /*Construyendo arco
  idLienzo.beginPath();
  idLienzo.arc(100, 100, 50, 0, 1, false);
  idLienzo.stroke();*/

  /*Arco con metodo cradraitico
  idLienzo.beginPath();
  idLienzo.moveTo(50, 50);
  idLienzo.quadraticCurveTo(100, 125, 50, 200);
  idLienzo.stroke();*/

  /*Arco con metodo berzier*/
  idLienzo.beginPath();
  idLienzo.moveTo(250, 50);
  idLienzo.bezierCurveTo(200, 125, 300, 125, 250, 200);
  idLienzo.stroke();



    
}

window.addEventListener("load", comenzar, false);
