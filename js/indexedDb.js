/*Ver como poder mejorar y vertificar o que hace en el video
51-52-53 de pildoras informaticas de hhtml5*/

var bd;
var solicitud =indexedDB.open("basePrueba2");

function comenzar(){
    idZonaDatos=document.getElementById("idZonaDatos"); 
    idBtnGrabar=document.getElementById("idBtnGrabar");
    
    idBtnGrabar.addEventListener("click", agregarObjetos, false);

    ///var solicitud =indexedDB.open("basePrueba2");


}//end comenzar

solicitud.onsuccess=function(e){
    bd=e.target.result;
    //bd=e.result;
}

solicitud.onupgradeneeded=function(e){
    bd=e.target.result;
   // bd=e.result;
    bd.createObjectStore("persona", {keyPath: "clave", autoincrement:true});
}



function agregarObjetos(){
    var idClave=document.getElementById("idClave").value;
    var idTitulo=document.getElementById("idTitulo").value;
    var idYear=document.getElementById("idYear").value;

    var transanccion=bd.transaction(["persona"], "readwrite");

    var almacen=transanccion.objectStore("persona");

    var agrega=almacen.add({clave: idClave, titulo: idTitulo, year: idYear});

    agrega.addEventListener("success", mostrar, false);
}//end agregarObjetos

function mostrar(){
    idZonaDatos.innerHtml="";

    var transanccion=db.transaction("[persona]", "readonly");

    var almacen=transanccion.objectStore("persona");

    var cursor=almacen.openCursor();

    cursor.addEventListener("success", mostrarDatos, false);
}

function mostrarDatos(e){
    var cursor=e.target.result;

    if(cursor){
        idZonaDatos.innerHTML+="<div>" + cursor.value.clave + " -- " + cursor.value.titulo + " -- " + cursor.value.year + "</div>";

        cursor.continue();
    }


}//end mostrarDatos




window.addEventListener("load", comenzar, false);
