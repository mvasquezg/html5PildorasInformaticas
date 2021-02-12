var elementoOrigen, elementoDestino;
    
function comenzar(){
    elementoOrigen=document.getElementById("idImagen01");
    elementoDestino=document.getElementById("idZonaDestino");
    //elemento.addEventListener("dragstart", function(){//se ejecuta la fucnion cuando inicia el movimiento
    //elemento.addEventListener("dragend", function(){//se ejecuta ciuando sueltas ;la imagen
    //elemento.addEventListener("drag", function(){
    elementoOrigen.addEventListener("dragstart", arrastrar ,false);
    
    elementoDestino.addEventListener("dragenter",function(e){
                e.preventDefault();
    } ,false);

    elementoDestino.addEventListener("dragover",function(e){
        e.preventDefault();
    } ,false);

    elementoDestino.addEventListener("drop", soltar ,false);

}//end comenzar

function arrastrar(e){
    var codigo="<img src='"+elementoOrigen.getAttribute("src")+"'>";

    e.dataTransfer.setData("Text", codigo);


}//end arrastrar

function soltar(e){
    e.preventDefault();

    elementoDestino.innerHTML=e.dataTransfer.getData("Text");
}//end soltar



window.addEventListener("load", comenzar, false);
