function comenzar(){
    var cache=window.applicationCache;
    cache.addEventListener("error", mostrarErrores, false);
}


function mostrarErrores(){
    alert("No se puede descargar");
}



window.addEventListener("load", comenzar, false);
