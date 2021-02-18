function comenzar(){
    trabajador = new SharedWorker("../js/trabajadorII.js");
    trabajador.port.addEventListener("message",recibir,false);
    trabajador.port.start();    
}//end comenzar

function recibir(e){
    idZonaDatos=document.getElementById("idZonaDatos");
    idZonaDatos.innerHTML=e.data;
}


window.addEventListener("load", comenzar, false);