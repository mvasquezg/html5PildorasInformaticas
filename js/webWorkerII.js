function comenzar(){
    idBtnEnviar=document.getElementById("idBtnEnviar");

    idBtnEnviar.addEventListener("click", enviarInformacion,false);

    trabajador = new SharedWorker("../js/trabajadorII.js");

    trabajador.port.addEventListener("message", recibir, false);

    trabajador.port.start();

}//end comenzar

function enviarInformacion(){
    var idNombre=document.getElementById("idNombre").value;
    trabajador.port.postMessage(idNombre);
}

function recibir(e){
    alert(e.data);
}



window.addEventListener("load", comenzar, false);