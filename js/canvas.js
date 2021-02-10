function comenzar(){
    //var elemento=document.getElementById("idLienzo");
    //idLienzo=elemento.getContext("2d");

    //idLienzo.fillStyle="#f00";

    //idLienzo.strokeStyle="#f00";

    //idLienzo.fillRect(100, 80, 200, 200);

    //idLienzo.strokeRect(100, 80, 200, 200);

    //idLienzo.clearRect(130, 130, 50, 50);

    var elemento=document.getElementById("idLienzo");
    idLienzo=elemento.getContext("2d");

    idLienzo.strokeStyle="#f00";

    idLienzo.fillStyle="#f8c30d";

    idLienzo.globalAlpha=0.8;

    idLienzo.strokeRect(100, 100, 120, 120);

    idLienzo.fillRect(110, 110, 100, 100);

    idLienzo.clearRect(120, 120, 80, 80);

    
    
}

window.addEventListener("load", comenzar, false);
