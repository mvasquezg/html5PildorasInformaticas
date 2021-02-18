var arrayPuertos=new Array();

addEventListener("connect", conectar, false);


function conectar(e){
    
    arrayPuertos.push(e.ports[0]);

    e.ports[0].onmessage=enviar;


}//end recibirMensaje


function enviar(e){
    for(var i=0; i<arrayPuertos.length; i++){
        arrayPuertos[i].postMessage("El texto que has puesto es: "+e.data);    
    }//end for
}
