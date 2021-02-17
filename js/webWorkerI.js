function comenzar(){
    idZonaDatos=document.getElementById("idZonaDatos");
    idBtnEnviar=document.getElementById("idBtnEnviar");

    idBtnEnviar.addEventListener("click", enviarInformacion,false);

    trabajador = new Worker("../js/trabajador.js");

    trabajador.addEventListener("message",recibir,false);
}//end comenzar

function enviarInformacion(){
    var idNombre=document.getElementById("idNombre").value;
    trabajador.postMessage(idNombre);
}

function recibir(e){
    idZonaDatos.innerHTML=e.data;
}



window.addEventListener("load", comenzar, false);