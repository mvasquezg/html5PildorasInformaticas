var nombre, apellido;

function comenzar(){
    nombre=document.getElementById("idNombreUsuario");
    apellido=document.getElementById("idApellidoUsuario");

    nombre.addEventListener("input", validar, false);
    apellido.addEventListener("input", validar, false);

    validar();
}//end function comenzar

function validar(){
        if( nombre.value=="" && apellido.value==""){
            
            nombre.setCustomValidity("Introduce nombre o apellido");
            apellido.setCustomValidity("Introduce nombre o apellido");

            nombre.style.background="#f00";
            apellido.style.background="#f00";
        }else{
            nombre.setCustomValidity("");
            apellido.setCustomValidity("")

            nombre.style.background="#ffffff";
            apellido.style.background="#ffffff";
        }

}


window.addEventListener("load", comenzar, false);

