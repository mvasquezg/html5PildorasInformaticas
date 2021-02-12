var elementoOrigen, elementoDestino;
    
function comenzar(){
    elementoOrigen=document.getElementById("idImagen01");
    elementoDestino=document.getElementById("idZonaDestino");
    //elemento.addEventListener("dragstart", function(){//se ejecuta la fucnion cuando inicia el movimiento
    //elemento.addEventListener("dragend", function(){//se ejecuta ciuando sueltas ;la imagen
    //elemento.addEventListener("drag", function(){
    elementoOrigen.addEventListener("dragstart", arrastrar ,false);
    
    /*elementoDestino.addEventListener("dragenter",function(e){
                e.preventDefault();
    } ,false);*/

    elementoDestino.addEventListener("dragover",function(e){
        e.preventDefault();
    } ,false);

    elementoDestino.addEventListener("drop", soltar ,false);

    elementoOrigen.addEventListener("dragend", terminar, false);

    elementoDestino.addEventListener("dragenter", entrar ,false);

    elementoDestino.addEventListener("dragleave", salir, false);
}//end comenzar

function arrastrar(e){
    var codigo="<img src='"+elementoOrigen.getAttribute("src")+"'>";

    e.dataTransfer.setData("Text", codigo);


}//end arrastrar

function soltar(e){
    e.preventDefault();

    elementoDestino.innerHTML=e.dataTransfer.getData("Text");
}//end soltar

function terminar(e){
    var elemento=e.target;

    elemento.style.visibility="hidden";
}   

function entrar(e){
        e.preventDefault();

        elementoDestino.style.background="rgba(8,255,25,.8)";
}

function salir(e){
    e.preventDefault();

    //pone en blanco la zona destnio al salir 
    //elementoDestino.style.background="#fff";

    //oculta la zona de destino al salir
    elementoDestino.style.visibility="hidden";
}

window.addEventListener("load", comenzar, false);
