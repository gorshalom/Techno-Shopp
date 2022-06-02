data = {
    staus: "ok",
    datos: [
        {
            id: 1,
            nombre: "Vengance niño",
            precio: 221,
            categoria: "Hombre",
            calificacion: 4.1,
            imagen: "../assets/img/productos/1/4.webp",
        },
        {
            id: 2,
            nombre: "Vengance niño2",
            precio: 222,
            categoria: "Hombre",
            calificacion: 4.4,
            imagen: "../assets/img/productos/1/4.webp",
        },
        {
            id: 3,
            nombre: "Vengance niño3",
            precio: 223,
            categoria: "Hombre",
            calificacion: 4.6,
            imagen: "../assets/img/productos/1/4.webp",
        },
        {
            id: 4,
            nombre: "Vengance niño4",
            precio: 224,
            categoria: "Hombre",
            calificacion: 4.9,
            imagen: "../assets/img/productos/1/4.webp",
        },
        {
            id: 5,
            nombre: "Vengance niño5",
            precio: 225,
            categoria: "Hombre",
            calificacion: 4.4,
            imagen: "../assets/img/productos/1/4.webp",
        },
        {
            id: 6,
            nombre: "Vengance niño6",
            precio: 226,
            categoria: "Hombre",
            calificacion: 4.4,
            imagen: "../assets/img/productos/1/4.webp",
        },
        {
            id: 7,
            nombre: "Vengance niño7",
            precio: 227,
            categoria: "Hombre",
            calificacion: 4.4,
            imagen: "../assets/img/productos/1/4.webp",
        },
        {
            id: 8,
            nombre: "Vengance niño8",
            precio: 228,
            categoria: "Hombre",
            calificacion: 4.4,
            imagen: "../assets/img/productos/1/4.webp",
        },
        {
            id: 9,
            nombre: "Vengance niño9",
            precio: 229,
            categoria: "Hombre",
            calificacion: 3,
            imagen: "../assets/img/productos/1/4.webp",
        },
    ]
}

let estrellaLLena = '<li class="fas fa-star"></li>';
let estrellaVacia = '<li class="fas fa-star disable"></li>';
let estrellaMitad = '<li class="fas fa-star-half-alt"></li>';




let $contenido = document.querySelector("#contenido");
data.datos.forEach(prod => {
    let tempProd = `
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="product-grid">
            <div class="product-image">
                <a href="detalle-producto.html" class="image">
                <img class="pic-1"
                    src="https://ih1.redbubble.net/image.935418396.6203/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.jpg">
                <img class="pic-2"
                    src="https://ih1.redbubble.net/image.935418396.6203/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.jpg">
                </a>
                <span class="product-sale-label">3X2</span>
            </div>
            <div class="product-content">
                <ul class="rating">`;
    
    for (let index = 1; index <= 5; index++) {
        if (prod.calificacion >= index) {
            
            tempProd += estrellaLLena;            
        } else if (prod.calificacion >= index - .5) {        
            
            tempProd += estrellaMitad;            
        } else {            
            
            tempProd += estrellaVacia;            
        }
    }


    tempProd+=`</ul>
                <h3 class="title"><a href="detalle-producto.html">${prod.nombre}</a></h3>
                <div class="price"><span>$${prod.precio+50}</span>${prod.precio}</div>
                <div class="product-button-group">
                <a class="product-like-icon" href="#"><i class="fas fa-heart"></i></a>
                <a class="add-to-cart" href="#"><i class="fa fa-shopping-bag"></i>ADD TO CART</a>
                <a class="product-compare-icon" href="#"><i class="fas fa-random"></i></a>
                </div>
            </div>
            </div>
        </div>
    `;

    $contenido.innerHTML += tempProd;
});