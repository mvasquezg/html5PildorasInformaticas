
function comenzar(){    
    idZonaDatos=document.getElementById("idZonaDatos");
    idBtnArchivo = document.getElementById("idArchivo");

    idBtnArchivo.addEventListener("change", subirArchivos, false);
}

function subirArchivos(e){
    var arrayArchivos=e.target.files;
    
    var archivo=arrayArchivos[0];

    var url="../php/procesar.php";

    var solicitud=new XMLHttpRequest();

    var subida=solicitud.upload();

    subida.addEventListener("loadstart", comenzarBarraProgreso, false);

    subida.addEventListener("progress", mostrarEstadoBarra, false);

    subida.addEventListener("load", mostrar, false);

    solicitud.open("POST", url, true);

    var datos=new FormData();

    datos.append("archivo", archivo);

    solicitud.send(datos);
}//end subirArchivos

function comenzarBarraProgreso(){
    idZonaDatos.innerHTML="<progress value='0' max='100'></progress>";
}//end 

function mostrarEstadoBarra(e){
    var procentaje = parseInt(e.loaded/e.total*100);

    var barraProgreso=idZonaDatos.querySelector("progress");

    barraProgreso.value=procentaje;

    idZonaProgreso.innerHTML=procentaje + " %";
}

function mostrar(){
    idZonaDatos.innerHTML="Terminado";
}




window.addEventListener("load", comenzar, false);
