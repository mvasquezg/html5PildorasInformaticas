var edad;

function comenzar(){
    edad=document.getElementById("idEdadUsuario");
    edad.addEventListener("change", cambiarRango, false);

    document.registroUsuarios.addEventListener("invalid", validar, true);

    document.registroUsuarios.addEventListener("input", validarTiempoReal, false);

    document.getElementById("idBtnEnviar").addEventListener("click", enviar, false);

}//end function comenzar

function cambiarRango(){
    var salida = document.getElementById("idRango");
    var calculo = edad.value - 30;

    if(calculo<30){
        calculo=0;
        edad.value=30;
    }

    salida.innerHTML=calculo+" a "+edad.value;
}

function validar(e){
    var elemento=e.target;

    elemento.style.background="#ffdddd";

}

function enviar(){
    var textUsuario=document.getElementById("idUsuario");
    
    var correcto=document.registroUsuarios.checkValidity();

    if(correcto==true){
        document.registroUsuarios.submit();
    }else if((textUsuario.validity.valueMissing==true) || (textUsuario.validity.patternMismatch==true)){
        alert("El uasurio no puede estar vacio, deber ser solo tres letras");
    }

}

function validarTiempoReal(e){
    var elemento=e.target;

    if( elemento.validity.valid == true){
        elemento.style.background ="#fff";
    }else{
        elemento.style.background ="#f00";
    }
}


window.addEventListener("load", comenzar, false);

