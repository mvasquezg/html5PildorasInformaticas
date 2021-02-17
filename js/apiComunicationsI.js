
function comenzar(){    
    idZonaDatos=document.getElementById("idZonaDatos");
    idBtnSolicitud=document.getElementById("idSolicitud");

    idBtnSolicitud.addEventListener("click", leer, false);
}

function leer(){
    var url="texto.txt";

    var solicitud=new XMLHttpRequest();

    solicitud.addEventListener("load", mostrar, false);

    //abriendo conoexcion
    solicitud.open("GET", url, true);

    solicitud.send(null);
}

function mostrar(e){
    idZonaDatos.innerHTML=e.target.responseText;
}//end mostrar


window.addEventListener("load", comenzar, false);
