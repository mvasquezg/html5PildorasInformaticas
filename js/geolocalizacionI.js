var parametros={enableHighAccuracy: true, timeout:10000, maximunAge: 60000};

    
function comenzar(){
    var idBtnUbicacion=document.getElementById("idBtnUbicacion");

    idBtnUbicacion.addEventListener("click", obtenerUbicacion, false);
}//end comenzar

function obtenerUbicacion(){
    //navigator.geolocation.getCurrentPosition(mostarPosicion, gestionarErrores, parametros);
    navigator.geolocation.watchPosition(mostarPosicion, gestionarErrores, parametros);
}//end obtenerUbicacion

function mostarPosicion(posicion){
    var ubicacion=document.getElementById("idUbicacion");

    //var latitud="Latitud: "+posicion.coords.latitude;
    //var longitud="Longitud: "+posicion.coords.longitude;

    /*var miUbicacion="";
    miUbicacion+="Latitud: "+posicion.coords.latitude+"<p></p>";
    miUbicacion+="Longitud: "+posicion.coords.longitude+"<p></p>";
    miUbicacion+="Exactitud: "+posicion.coords.accuracy+"<p></p>";

    //ubicacion.innerHTML=latitud;

    ubicacion.innerHTML=miUbicacion;*/
    var mapa="http://maps.google.com/maps/api/staticmap?center"+posicion.coords.latitude+","+posicion.coords.longitude+","+"&zoom=12&size=400X400&sensor=false&markers="+posicion.coords.latitude+","+posicion.coords.longitude;
    ubicacion.innerHTML="<img src='"+mapa+"'>";
}

function gestionarErrores(error){
    //alert("Se ha producido un error: "+error.code+" "+error.message);

    if(error.message == "User denied Geolocation"){
        alert("Debes permitir la geolocalizacion en tu navegador");
    }
}


window.addEventListener("load", comenzar, false);
