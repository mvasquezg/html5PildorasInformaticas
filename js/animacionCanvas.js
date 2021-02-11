var y=300;
var estado="bajando";
var arriba=y;
var horizontal=0;

function comenzar(){
    var elemento=document.getElementById("idLienzo");
    idLienzo=elemento.getContext("2d");
    
    setInterval(animar, 150); 

}//end comenzar


function animar(){
    
    
    if(y<850 && estado=="bajando"){

        idLienzo.clearRect(0, 0, 1200, 900);
    
        idLienzo.beginPath();
        idLienzo.arc(500+horizontal,y,40,0,Math.PI*2,false);
        idLienzo.fill();
        y+=50;
        horizontal+=2;
    } 
    
    if(y==850){
        estado="subiendo";
        arriba+=50;
    }

    if(y>=arriba && estado=="subiendo"){
        idLienzo.clearRect(0, 0, 1200, 900);
    
        idLienzo.beginPath();
        idLienzo.arc(500+horizontal,y,40,0,Math.PI*2,false);
        idLienzo.fill();
        y-=50; 
        horizontal+=2;   
    }

    if(y==arriba ){
        estado="bajando";
    }
}

window.addEventListener("load", comenzar, false);
