
function comenzar(){
  var elemento=document.getElementById("idLienzo");
  idLienzo=elemento.getContext("2d");
  
  idLienzo.beginPath();
  idLienzo.moveTo(100, 200);

  idLienzo.lineTo(200, 200);

  //idLienzo.lineTo(150, 150);

  idLienzo.lineTo(200, 150);

  //idLienzo.lineTo(100, 200);
  idLienzo.lineTo(100, 150);

  idLienzo.lineTo(100, 200);


  idLienzo.clip();


  /*Dibijamdo lineas*/
  idLienzo.beginPath();

  for(i=0; i<250; i+=10){
    idLienzo.moveTo(0, i);
    idLienzo.lineTo(500, i);
  }//end for






  //idLienzo.closePath();

  idLienzo.stroke();

  //idLienzo.fill();



    
}

window.addEventListener("load", comenzar, false);
