var IdZonaDestino;
    
function comenzar(){
    IdZonaDestino=document.getElementById("idZonaDestino");
    
    IdZonaDestino.addEventListener("dragenter", function(e){
        e.preventDefault()
    },false);

    IdZonaDestino.addEventListener("dragover", function(e){
        e.preventDefault()
    },false);

    IdZonaDestino.addEventListener("drop", soltar,false);

}//end comenzar

function soltar(e){
    e.preventDefault();
    var arrayArchivos=e.dataTransfer.files;

    var listado="";

    for(var f=0; f<arrayArchivos.length; f++){
        //listado=arrayArchivos[f].name;
        //listado=(arrayArchivos[f].size/1024).toFixed(2);
        
        //listado+="Archivos: "+arrayArchivos[f].name+" "+" peso: "+ (arrayArchivos[f].size/1024).toFixed(2)+
        //" Tipo de archivo: "+arrayArchivos[f].type+"<p></p>";
        
        listado+="Archivos: "+arrayArchivos[f].name+" "+" peso: "+ (arrayArchivos[f].size/1024).toFixed(2)+
        " Fecha: "+arrayArchivos[f].lastModifiedDate.toLocaleDateString()+"<p></p>";
    
    }

    IdZonaDestino.innerHTML=listado;
}



window.addEventListener("load", comenzar, false);
