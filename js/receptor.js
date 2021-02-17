function comenzar(){
    window.addEventListener("message", recibirMensaje, false);

}//end comenzar

function recibirMensaje(e){
    var idZonaMensaje=document.getElementById("idZonaMensaje");

    if( e.origin=="http://pildorasinformaticas.com"){
        idZonaMensaje.innerHTML+="Mesaje desde:  "+ e.origin +"<br/>";
        idZonaMensaje.innerHTML+="Mensaje: "+ e.data+"<p></p>";
        e.source.postMessage("Mensaje Recibido corectamente.<br/>", e.origin);
    }else{
        e.source.postMessage("Mensaje Erroneo.<br/>", e.origin);
    }
    
    
    

}


window.addEventListener("load", comenzar, false);