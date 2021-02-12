var elementoOrigen, elementoDestino;
    
function comenzar(){
    var arrayImagenes=document.querySelectorAll("#idCajaImagen img");

    for(var i=0; i<arrayImagenes.length;i++){
        arrayImagenes[i].addEventListener("dragstar", arrastrar , false);
        
        if(i!=1){
            arrayImagenes[i].addEventListener("dragend", terminar , false);
        }
        
    }


    elementoDestino=document.getElementById("idZonaDestino");

    elementoDestino.addEventListener("dragenter",entrar,false);
    elementoDestino.addEventListener("dragover",function(e){e.preventDefault()},false);
    elementoDestino.addEventListener("drop", soltar ,false);
    elementoDestino.addEventListener("dragleave", salir ,false);

}//end comenzar

function arrastrar(e){
    elementoOrigen=e.target;

    e.dataTransfer.setData("Text", elementoOrigen.getAttribute("id"));
}//end arrastrar

function soltar(e){
    e.preventDefault();

    console.log("que trae transfer: "+e.dataTransfer.getData("Text"));

    var idImagen=e.dataTransfer.getData("Text");
    
    console.log("que trae idImagen: "+idImagen.id);
    if(idImagen!="idImagen02"){
        //var ruta=document.getElementById(idImagen).src;
        var ruta=e.dataTransfer.getData("Text");

        elementoDestino.innerHTML="<img src='"+ruta+"'>";
        /*e.preventDefault(); 
        var src_imagen = e.dataTransfer.getData("Text");
        elem_destino.innerHTML = "<img src='" + src_imagen + "'>";*/
    }else{
        elementoDestino.innerHTML="La imagen no es admitida";
        elementoDestino.style.background="#fa0d29";
    }

    
 }

function entrar(e){
    e.preventDefault();

    var idImagen=e.dataTransfer.getData("Text");

    if(idImagen!="idImagen02"){
        elementoDestino.style.background="rgba(8,255,25,.8)";
    }else{
        elementoDestino.style.background="#fa0d29";
    }




}//end entrar


function salir(e){
    e.preventDefault();
    elementoDestino.style.background="#fff";    
}

function terminar(e){
    var elemento=e.target;
    elemento.style.visibility="hidden";

}//end terminar


window.addEventListener("load", comenzar, false);
