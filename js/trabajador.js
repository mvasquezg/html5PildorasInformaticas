addEventListener("message", recibirMensaje, false);

function recibirMensaje(e){
    var respuesta="El texto escrito en el cuadro es: "+e.data;

    postMessage(respuesta);

}//end recibirMensaje

