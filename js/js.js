function ejecutar(){
   // document.getElementsByTagName("p")[0].onclick=saludar;

   //document.getElementById("idP2").onclick=saludar;

    /*for(var i=0; i<3; i++){
        document.getElementsByTagName("p")[i].onclick=saludar;
    }*/

    //var ejecuta=document.getElementsByClassName("importante")[0].onclick=saludar;

    /*for(var i=0; i<2; i++){
        document.getElementsByClassName("importante")[i].onclick=saludar;
    }*/

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

window.onload=ejecutar;
 