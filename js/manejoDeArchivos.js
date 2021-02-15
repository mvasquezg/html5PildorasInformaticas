function comenzar(){
   var idZonaDatos=document.getElementById("idZonaDatos");

    var idArchivos = document.getElementById("idArchivos");

    idArchivos.addEventListener("change", procesar, false);

}//end comenzar

function procesar(e){
    var archivos=e.target.files;

    idZonaDatos.innerHTML="";

    var miArchivo=archivos[0];

    if(!miArchivo.type.match(/image/) ){
        alert("Seleciona un imagen");    
    }else{
        idZonaDatos.innerHTML+="Nombre del archivo: " +miArchivo.name+"<p></p>";
        //idZonaDatos.innerHTML+="Tamanho del archivo: " +miArchivo.size+" bytes<p></p>";
        idZonaDatos.innerHTML+="Tamanho del archivo: " +Math.round((miArchivo.size)/1024)+" KB<p></p>";

        var lector = new FileReader();

        lector.readAsDataURL(miArchivo);
        
        lector.addEventListener("load", mostrarEnWeb, false);

    }

    //var lector = new FileReader();

    //lector.readAsText(miArchivo);
    
    //lector.addEventListener("load", mostrarEnWeb, false);


}//end procesar    

function mostrarEnWeb(e){
    var resultado=e.target.result;

   // idZonaDatos.innerHTML=resultado;

   idZonaDatos.innerHTML+="<img src'" +resultado+"' width='85%'>";
}

window.addEventListener("load", comenzar, false);
