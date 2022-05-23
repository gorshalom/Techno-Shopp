/* carrusel no cambia automaticamente */
$('.carousel').carousel({
    interval: false
})


/* modal imagen grande */

var modal = document.getElementById('modalZoomImg');
var img2= document.querySelectorAll(".carru");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img2.forEach(element => {
    element.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
});
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close2")[0];
span.onclick = function() { 
  modal.style.display = "none";
}



/* simulacion de datos */

data={
    staus:"ok",
    datos:{
        id: 1,
        nombre: "Vengance niño",
        precio: 220,
        detalle: [
            "Playera manga corta, regular fit",
            "Estampado en frente y espalda, serigrafía sin tacto",
            "100% algodón",
            "Hecho en México"
        ],
        nOpiniones:4,
        opiniones:[
            {
                autor:"Alejandra A.",
                calificaion:5,
                comentario:"Amo el algodón, el estampado y a Batman. ",
                like:0,
                dislike:0,
            },
            {
                autor:"Alejandra A.",
                calificaion:5,
                comentario:"Amo el algodón, el estampado y a Batman. ",
                like:0,
                dislike:0,
            },
            {
                autor:"Alejandra A.",
                calificaion:5,
                comentario:"Amo el algodón, el estampado y a Batman. ",
                like:0,
                dislike:0,
            },
            {
                autor:"Alejandra A.",
                calificaion:5,
                comentario:"Amo el algodón, el estampado y a Batman. ",
                like:0,
                dislike:0,
            }
        ],
        stock:32,    
    }
}






    
