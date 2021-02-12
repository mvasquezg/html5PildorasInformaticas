
function comenzar(){
    var idBtnGrabar=document.getElementById("idBtnGrabar");

    idBtnGrabar.addEventListener("click", cargarNuevosItems,false);

}

function cargarNuevosItems(){
    var clave=document.getElementById("idClave").value;
    var valor=document.getElementById("idValor").value;

    sessionStorage.setItem(clave, valor);
    //sessionStorage[clave]=valor;

    leerYMostrar(clave);
    document.getElementById("idClave").value="";
    document.getElementById("idValor").value="";

}//end cargarNuevosItems

function leerYMostrar(clave){
    var idZonaDatos=document.getElementById("idZonaDatos");

    idZonaDatos.innerHTML="";
    //var elValor=sessionStorage.getItem(clave);

    idZonaDatos.innerHTML="<div><button onclick='eliminarTodo()'>Eliminar Todo</button></div>";


    for(var i=0; i<sessionStorage.length;i++){
        var clave=sessionStorage.key(i);
        var elValor=sessionStorage.getItem(clave);
        
        idZonaDatos.innerHTML+="<div>Clave: "+clave+" -- "+ " Valor: " +elValor+"<p><button onclick='eliminarItem(\""+clave+"\")'>Eliminar Elemento</button></p>"+"</div>";
    }
    
    //var elValor=sessionStorage.getItem(clave);
    //var elValor=sessionStorage[clave];

    //idZonaDatos.innerHTML="<div>Clave: "+clave+" -- "+ " Valor: " +elValor+"</div>";
}

function eliminarTodo(){
    if( confirm("Estas Seguro?") ){
        sessionStorage.clear();
        leerYMostrar();
    }
}//end eliminarTodo

function eliminarItem(clave){
    if( confirm("Estas Seguro?") ){
        sessionStorage.removeItem(clave);
        leerYMostrar();
    }
}



window.addEventListener("load", comenzar, false);
