/* carrusel no cambia automaticamente */
$('.carousel').carousel({
    interval: false
})


/* simulacion de datos */

/* data = {
    staus: "ok",
    datos: {
        id: 1,
        nombre: "Vengance niño",
        precio: 220,
        categoria: "Playeras",
        detalle: [
            "Playera manga corta, regular fit",
            "Estampado en frente y espalda, serigrafía sin tacto",
            "100% algodón",
            "Hecho en México"
        ],
        calificacion: 4.4,
        detalleCalif: {
            cantidad: 4,
            estrellas: [
                0,
                0,
                0,
                1,
                3
            ],
            porcentaje: [
                0,
                0,
                0,
                25,
                75]
        },
        imagenes: [
            "../assets/img/productos/1/1.webp",
            "../assets/img/productos/1/2.webp",
            "../assets/img/productos/1/3.webp",
            "../assets/img/productos/1/4.webp"            
        ],
        nOpiniones: 4,
        opiniones: [
            {
                autor: "Alejandra A.",
                calificacion: 5,
                comentario: "Amo el algodón, el estampado y a Batman. ",
                like: 0,
                dislike: 0,
            },
            {
                autor: "Arlette P.",
                calificacion: 5,
                comentario: "Ya había comprado otras 3 ediciones de Batman, tengo como 7 años con ellas. Excelente calidad.",
                like: 0,
                dislike: 0,
            },
            {
                autor: "Erika A.",
                calificacion: 5,
                comentario: "Nos encantó la calidad y estampado de la playera, excelente calidad y diseño, es muy suave la tela, gracias.",
                like: 0,
                dislike: 0,
            },
            {
                autor: "Veronica R.",
                calificacion: 4,
                comentario: "No me da superpoderes >:v",
                like: 0,
                dislike: 0,
            }
        ],
        stock: 32,
    }
} */


/* producto */
const parametros = window.location.search;
const urlParams = new URLSearchParams(parametros);
const search = decodeURI(urlParams.get('producto'));

fetch('http://localhost:8080/api/producto/' + search)
.then(response => response.json())
.then(data => {
    console.log(data);
    pintarDetalles(data);    
});

//document.getElementById("titulo").innerHTML = search+"-TS";








function pintarDetalles(producto) {
    console.log(producto.imagenes.length);
    /* galeria de imagenes */
    let galerriaImg = document.getElementById("galeria-imagenes");
    let carruselInner = document.getElementById("carousel-inner");
    for (let i = 0; i < producto.imagenes.length; i++) {
        let tempImgGal = `<img src="${producto.imagenes[i].url}" alt="" class="col-md-3 col-lg h-25  mb-3 img-gal ">`;
        
        let tempImgCarr = `<div class="carousel-item `;
        if (i == 0) {
            tempImgCarr += `active`;
        }
        tempImgCarr += `">
                <img src="${producto.imagenes[i].url}" alt="" class="col w-auto carru">
            </div>`;

        carruselInner.innerHTML += tempImgCarr;
        galerriaImg.innerHTML += tempImgGal;
    }



    /* breadcrumb */
    let breadcrumbCategoria = document.querySelector("#breadcrumbCategoria");
    breadcrumbCategoria.innerHTML = producto.categoria;
    breadcrumbCategoria.href = "/templates/busqueda.html?search=" + producto.categoria;

    let breadcrumbProducto = document.querySelector("#breadcrumbProducto");
    breadcrumbProducto.innerHTML = producto.nombre;


    /* detalles del producto */
    let titulos = document.querySelectorAll("h1");

    titulos.forEach(function (titulo) {
        titulo.innerHTML = producto.nombre;
    });

    let precio = document.querySelector("#precio");
    precio.innerHTML = `Precio: $${producto.precio}`;

    //calificacion con estrellas
    let calificacion = document.querySelector("#calificacion");
    let estrellaLLena = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill"
    viewBox="0 0 16 16">
    <path
    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>`;
    let estrellaVacia = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
    viewBox="0 0 16 16">
    <path
    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>`;
    let estrellaMitad = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
    </svg>`;

    let resumenCalif = document.querySelector("#resumen-calif");
    resumenCalif.innerHTML += `<label for="" class="calif">${producto.calificacion}</label> `;

    for (let index = 1; index <= 5; index++) {
        if (producto.calificacion >= index) {
            resumenCalif.innerHTML += estrellaLLena;
            calificacion.innerHTML += estrellaLLena;
        } else if (producto.calificacion >= index - .5) {
            resumenCalif.innerHTML += estrellaMitad;
            calificacion.innerHTML += estrellaMitad;
        } else {
            resumenCalif.innerHTML += estrellaVacia;
            calificacion.innerHTML += estrellaVacia;
        }
    }
    calificacion.innerHTML += ` (${producto.opiniones.length} opiniones)`;

    let detalleProducto = document.querySelector("#detalleProducto");
    let arrayDetalle = producto.detalles.split("*");
    for (let index = 0; index < arrayDetalle.length; index++) {
        detalleProducto.innerHTML += `<li>*${arrayDetalle[index]}</li>`;
    }

    let calificiones = document.querySelector("#calificaciones");
    calificiones.innerHTML += `Basado en ${producto.opiniones.length} comentarios`;

    //conteo de estrellas


    //porcentajes de calificacion
    let estrellas = [0, 0, 0, 0, 0];
    producto.opiniones.forEach(function (opinion) {
        estrellas[opinion.calificacion - 1]++;
    });



    for (let i = 1; i <= 5; i++) {
        let estrella = document.querySelector(`#estrella${i}`);
        let progresEstrella = document.querySelector(`#progresEstrella${i}`);
        estrellaCont = document.querySelector(`#estrella${i}Cont`);

        for (let j = 1; j <= 5; j++) {
            if (i >= j) {
                estrella.innerHTML += estrellaLLena;
            } else {
                estrella.innerHTML += estrellaVacia;
            }
        }
    
        
        let porcentaje=0;
        if(producto.opiniones.length > 0){
            porcentaje = (estrellas[i-1] / producto.opiniones.length) * 100;
        }
        let tempProgress=`<div class="progress-bar bgn-black" role="progressbar" style="width: ${porcentaje}%" aria-valuenow="${porcentaje}"
        aria-valuemin="0" aria-valuemax="100" id="progresEstrella5"></div>`;
        
        
        progresEstrella.innerHTML = tempProgress;   

        estrellaCont.innerHTML += estrellas[i - 1];
    }

    let opiniones = document.querySelector("#opiniones");
    producto.opiniones.forEach(opinion => {
        let templateOpinion = `
        <div class="card col-11 m-3" >
            <div class="card-header">
                <p class="mr-2 d-inline">${opinion.autor}</p>
        `;

        //agregar estrellas aqui
        for (let index = 1; index <= 5; index++) {
            if (opinion.calificacion >= index) {
                templateOpinion += estrellaLLena;
            } else if (opinion.calificacion >= index - .5) {
                templateOpinion += estrellaMitad;
            } else {
                templateOpinion += estrellaVacia;
            }
        }



        templateOpinion += `
            </div>
            <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>${opinion.opinion} </p>
            </blockquote>
            </div>
        </div>
        `;

        opiniones.innerHTML += templateOpinion;
    });

    
}




































/* modal imagen grande */

var modal = document.getElementById('modalZoomImg');
var img2 = document.querySelectorAll(".carru");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img2.forEach(element => {
    element.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});
img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close2")[0];
span.onclick = function () {
    modal.style.display = "none";
}


/* modal imagen grande */