
function comenzar(){    
    idZonaDatos=document.getElementById("idZonaDatos");
    idBtnSolicitud=document.getElementById("idSolicitud");
    idZonaProgreso = document.getElementById("idZonaProgreso");


    idBtnSolicitud.addEventListener("click", leer, false);
}

function leer(){
    var url="../video/video.mp4";

    var solicitud=new XMLHttpRequest();

    solicitud.addEventListener("loadstart", comenzarBarra, false);

    solicitud.addEventListener("progress", cargarEstadooBarra ,false);

    solicitud.addEventListener("load", mostrar, false);

    //abriendo conoexcion
    solicitud.open("GET", url, true);

    solicitud.send(null);
}

function comenzarBarra(){
    idZonaDatos.innerHTML="<progress value='0' max='100'></progress>";
}

function cargarEstadooBarra(e){
    var porcentaje=parseInt(e.loaded/e.total*100);
    var barraProgreso=idZonaDatos.querySelector("progress");

    barraProgreso.value=porcentaje;
    idZonaProgreso.innerHTML=porcentaje + "%";
}

function mostrar(e){
    idZonaDatos.innerHTML="Archivo leido!!!";
}//end mostrar


window.addEventListener("load", comenzar, false);
