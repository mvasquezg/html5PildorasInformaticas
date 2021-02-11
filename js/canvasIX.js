
function comenzar(){
    var elemento=document.getElementById("idLienzo");
    idLienzo=elemento.getContext("2d");
    
    var imagen=new Image();
    imagen.setAttribute("crossOrigin", "");
    //imagen.src="../img/1.jpg"; //Se modifico la ruta para ponerlo en un serviodor locarl y fucnionara
    imagen.src="../html5PildorasInformaticas/img/1.jpg";
    imagen.addEventListener("load", manipularImagen, false);
    
}//end comenzar

function manipularImagen(e){
    imagen=e.target;

    idLienzo.drawImage(imagen, 0, 0);
    
    

    var infoImagen=idLienzo.getImageData(0,0,145,145);

    var posicion;

    for(var x=0; x<=145; x++){
        for(var y=0; y<=145; y++){
            posicion=(infoImagen.width*4*y)+(x*4);
            
            infoImagen.data[posicion]=255-infoImagen.data[posicion];
            infoImagen.data[posicion+1]=255-infoImagen.data[posicion+1];
            infoImagen.data[posicion+2]=255-infoImagen.data[posicion+2];


        }
    }

    idLienzo.putImageData(infoImagen, 0, 0);


}//end manipularImagen

window.addEventListener("load", comenzar, false);
