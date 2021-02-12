var y=300;
var estado="bajando";
var arriba=y;
var horizontal=0;

function comenzar(){
    var elemento=document.getElementById("idLienzo");
    idLienzo=elemento.getContext("2d");
    
    window.addEventListener("mousemove", animar, false);

}//end comenzar


function animar(e){
   idLienzo.clearRect(0,0,1200,900);

   var xRaton=e.clientX;
   var yRaton=e.clientY;

   var xCentro=550;
   var yCentro=325;

   var angulo=Math.atan2(xRaton-xCentro, yRaton-yCentro);

   var x=xCentro+Math.round(Math.sin(angulo)*10);
   var y=yCentro+Math.round(Math.cos(angulo)*10);

   idLienzo.beginPath();

   idLienzo.arc(xCentro, yCentro, 20, 0, Math.PI*2, false);
   idLienzo.moveTo(620, 325);
   idLienzo.arc(600, yCentro, 20, 0, Math.PI*2, false);
   idLienzo.stroke();

   idLienzo.beginPath();
   idLienzo.arc(x,y,10,0,Math.PI*2, false);
   idLienzo.moveTo(x, y); 
   idLienzo.arc(x+50,y,10,0,Math.PI*2, false);
   idLienzo.fill();
}//end animar

window.addEventListener("load", comenzar, false);
