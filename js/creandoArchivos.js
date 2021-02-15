
/*Creando archivos
function comenzar(){    
    idZonaDatos=document.getElementById("zonadatos");
    idBtnBoton=document.getElementById("boton");

    idBtnBoton.addEventListener("click", crear, false);

    navigator.webkitPersistentStorage.requestQuota(5*1024*1024, acceder);
}

function crear(){

}//end crear

function acceder(){
    window.webkitRequestFileSystem(PERSISTENT, 5*1024*1024, crearSis, mostrarErrores);
}//end acceder

function crearSis(sistema){
    espacio=sistema.root;
}

function crear(){
    var nombreArchivo=document.getElementById("entrada").value;

    if( nombreArchivo !=""){
        espacio.getFile(nombreArchivo, {create:true, exclusive:false}, mostrar, mostrarErrores);
    }
}

function mostrar(entrada){
    document.getElementById("entrada").value="";

    idZonaDatos.innerHTML="Exito en la creacion de espacio y archivo!<p></p>";
    
    idZonaDatos.innerHTML+="Nombre archivo: "+  entrada.name+"<p></p>"
    idZonaDatos.innerHTML+="Ruta: "+  entrada.fullPath+"<p></p>"

}//end mostrar 

function mostrarErrores(e){
    alert("Ha habido un error: "+ e.code);
}*/

/******************Creando directorios************************/
function comenzar(){    
    idZonaDatos=document.getElementById("zonadatos");
    idBtnBoton=document.getElementById("boton");

    idBtnBoton.addEventListener("click", crear, false);

    navigator.webkitPersistentStorage.requestQuota(5*1024*1024, acceder);
}

function acceder(){
    window.webkitRequestFileSystem(PERSISTENT, 5*1024*1024, crearSis, mostrarErrores);
}//end acceder

function crearSis(sistema){
    espacio=sistema.root;
    ruta="";
    mostrar();
}

function crear(){
    var nombreArchivo=document.getElementById("entrada").value;

    if( nombreArchivo != ""){
          nombreArchivo=ruta+nombreArchivo;  
        espacio.getFile(nombreArchivo, {create:true, exclusive:false}, mostrar, mostrarErrores);
    }

}//end crear

function mostrar(){
    document.getElementById("entrada").value="";
    idZonaDatos="";

    espacio.getDirectory(ruta, null, leerDir, mostrarErrores);


}//end mostrar


function leerDir(dir){
    lector=dir.createReader();

    leer;
}

function leer(){
    lector.readEntries(function(archivos){
        if(archivos.length){
            listar(archivos);
        }

    }, mostrarErrores);
}

function listar(archivos){
    for(var i=0; i<archivos.length; i++){
        if(archivos[i].isFile){
            idZonaDatos.innerHTML+=archivos[i].name+"<p></p>"
        }else if(archivos[i].isDirectory){
            idZonaDatos.innerHTML+="<span class='directorio'>" + archivos[i].name + "</span><p></p>"
        }
    }
}

function mostrarErrores(e){
    alert("Ha habido un error: " + e.code);
}

function volver(){
    espacio.getDirectory(ruta, null, function(dirActual){
        dirActual.getParent(function(dirPadre){
            ruta=dirPadre.fullPath;
            mostrar();
        }, mostrarErrores);

     },  mostrarErrores);
}//end volver

window.addEventListener("load", comenzar, false);
