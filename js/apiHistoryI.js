function comenzar(){
    idZonaDatos=document.getElementById("idZonaDatos");
    idUrl=document.getElementById("idUrl");

    idUrl.addEventListener("click", cambiarUrl, false);

    window.addEventListener("popstate", cambiarUrlNueva,false);
    //window.replaceState(1, null);
    window.history.replaceState(1, null)
}

function cambiarUrl(){
    /*idZonaDatos.innerHTML="Estas en la pagina dos";
    window.history.pushState(null, null, "pagina2.html");*/

    mostrar(2);
    window.history.pushState(2, null, "pagina2.html");
}//end cambiarUrl

function cambiarUrlNueva(e){
        mostrar(e.state);
}//end 


function mostrar(actual){
    idZonaDatos.innerHTML="Estas en la pagina" + actual;
}   



window.addEventListener("load", comenzar, false);
