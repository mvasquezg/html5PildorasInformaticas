
function comenzar(){    
    idZonaDatos=document.getElementById("idZonaDatos");
    idBtnEnviar=document.getElementById("idEnviar");
    

    idBtnEnviar.addEventListener("click", enviarDatos, false);
}

function enviarDatos(){
    var nombre=document.getElementById("idNombre").value;
    var apellido=document.getElementById("idApellido").value;
    
    var datos = new FormData();
    
    datos.append("nombre", nombre);
    datos.append("apellido", apellido);

    var url="../php/apiComunicationsIII.php";

    var solicitud=new XMLHttpRequest();

    solicitud.addEventListener("load", mostrar, false);

    solicitud.open("POST", url, true);

    solicitud.send(datos);
}

function mostrar(e){
    console.log("Parametros de e: " + e);
    idZonaDatos.innerHTML=e.target.responseText;
}//end mostrar


window.addEventListener("load", comenzar, false);
