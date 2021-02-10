/********************** Inicia codigo para la pagina primeraPaginaJS.html *******************************/
/*function ejecutar(){
   // document.getElementsByTagName("p")[0].onclick=saludar;

   //document.getElementById("idP2").onclick=saludar;

    /*for(var i=0; i<3; i++){
        document.getElementsByTagName("p")[i].onclick=saludar;
    }*/

    //var ejecuta=document.getElementsByClassName("importante")[0].onclick=saludar;

    /*for(var i=0; i<2; i++){
        document.getElementsByClassName("importante")[i].onclick=saludar;
    }

    //document.querySelector(".importante").onclick=saludar;


    //document.querySelector("#idPrincipal p:last-child").onclick=saludar;

   // var arrayElementos=document.querySelectorAll("#idPrincipal p")[0].onclick=saludar;

   var arrayElementos=document.querySelectorAll("#idPrincipal p, span");

   for(var i=0; i<arrayElementos.length; i++){
        arrayElementos[i].onclick=saludar;
   }




}//end ejecutar


function saludar(){
    alert("Hola mundo");
}

//window.onload=saludar;

window.onload=ejecutar;*/
/********************** Finaliza codigo para la pagina primeraPaginaJS.html *******************************/ 

/********************** Empieza codigo para la pagina eventosHTML5.html *******************************/
/*var arrayImagenes=new Array(3);

function mostrarNombreFlor(){
    alert("Pensamientos, usando addEventListener");
}

function cargarFuncion(){
   // document.getElementsByTagName("img")[0].onclick=mostrarNombreFlor;

   //var arrayImagenes=document.getElementsByTagName("img")[0];

   //arrayImagenes=document.getElementsByTagName("img")[0];

   //arrayImagenes.addEventListener("click", mostrarNombreFlor, false);

   //arrayImagenes.addEventListener("mouseover", crecer, false);
   //arrayImagenes.addEventListener("mouseout", restaurar, false);
   //arrayImagenes.addEventListener("click", mostrarNombreFlor, false);

    for(var i=0; i<4; i++){
        arrayImagenes[i]=document.getElementsByTagName("img")[i];
    }

        arrayImagenes[0].addEventListener("mouseover", function(){arrayImagenes[0].width=225; arrayImagenes[0].height=225}, false);
        arrayImagenes[0].addEventListener("mouseout", function(){arrayImagenes[0].width=200; arrayImagenes[0].height=200}, false);
        arrayImagenes[0].addEventListener("click", mostrarNombreFlor, false);

        arrayImagenes[1].addEventListener("mouseover", function(){arrayImagenes[1].width=225; arrayImagenes[1].height=225}, false);
        arrayImagenes[1].addEventListener("mouseout", function(){arrayImagenes[1].width=200; arrayImagenes[1].height=200}, false);
        arrayImagenes[1].addEventListener("click", mostrarNombreFlor, false);

        arrayImagenes[2].addEventListener("mouseover", function(){arrayImagenes[2].width=225; arrayImagenes[2].height=225}, false);
        arrayImagenes[2].addEventListener("mouseout", function(){arrayImagenes[2].width=200; arrayImagenes[2].height=200}, false);
        arrayImagenes[2].addEventListener("click", mostrarNombreFlor, false);

        arrayImagenes[3].addEventListener("mouseover", function(){arrayImagenes[3].width=225; arrayImagenes[3].height=225}, false);
        arrayImagenes[3].addEventListener("mouseout", function(){arrayImagenes[3].width=200; arrayImagenes[3].height=200}, false);
        arrayImagenes[3].addEventListener("click", mostrarNombreFlor, false);


}

/*function crecer(){
    arrayImagenes.width=225;
    arrayImagenes.height=225;
}*/

/*function restaurar(){
    arrayImagenes.width=200;
    arrayImagenes.height=200;
}

//window.onload=cargarFuncion;

window.addEventListener("load", cargarFuncion, false); */

/********************** Finaliza codigo para la pagina eventosHTML5.html *******************************/


/********************** inicia codigo para la pagina anidados.html *******************************/
    /*function mostrarMensajeImagen(){
        alert("soy la imagen");
    }


    function mostrarMensajeParrafo(){
        alert("soy el parrafo");
    }   

    function llamarFunciones (){
        var elemento1 = document.getElementsByTagName("p")[0];
        var elemento2 = document.getElementsByTagName("img")[0];

        elemento1.addEventListener("click", mostrarMensajeParrafo, true);
        elemento2.addEventListener("click", mostrarMensajeImagen, false)
    }

    window.addEventListener("load", llamarFunciones, false);*/

/********************** Finaliza codigo para la pagina anidados.html *******************************/

/********************** Inicia codigo repoructor de video para la pagina video.html *******************************/
    var idMiVideo, idBotones, idBarra, idProgreso,idPlay, idVideo, maximo, bucle;
    maximo=600;

    function comenzar(){
        idMiVideo = document.getElementById("idMiVideo");
        idPlay = document.getElementById("idPlay");
        idBarra = document.getElementById("idBarra");
        idProgreso = document.getElementById("idProgreso");

        idPlay.addEventListener("click", reproducir, false);
        //idProgreso.addEventListener("click", adelantar, false);
        idBarra.addEventListener("click", adelantar, false);
    }

    function reproducir(){
        if( (idMiVideo.paused==false) && (idMiVideo.ended==false) ){
            idMiVideo.pause();
            idPlay.innerHTML="Play";
        }else{
            idMiVideo.play();
            idPlay.innerHTML="Pause";
            
            bucle=setInterval(estado, 30);

            
        }
    }//end reproducir

    function estado(){
        var total=0;
        
        if( idMiVideo.ended==false){
            total=parseInt( (idMiVideo.currentTime*maximo) / idMiVideo.duration);
            
            idProgreso.style.width=total+"px";
        }
    }//end estado


    function adelantar(posicion){
        if( idMiVideo.paused == false && idMiVideo.ended==false ){
            var ratonX=posicion.pageX-idBarra.offsetLeft;

            var nuevoTiempo=ratonX*idMiVideo.duration/maximo;

            idMiVideo.currentTime=nuevoTiempo;

            idProgreso.style.width=ratonX+"px";
        }
    }

    window.addEventListener("load", comenzar, false);

/********************** Finaliza codigo repoructor de video para la pagina video.html *******************************/