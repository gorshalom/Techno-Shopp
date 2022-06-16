function agegarCarrito(id) {
    /* let producto = data.datos.find(prod => prod.id == id);
    let carrito = [];
    producto.cantidad = 1;

    if(localStorage.getItem("carrito") != null){        
        carrito = JSON.parse(localStorage.getItem("carrito"));
        if (carrito.find(prod => prod.id == id) == undefined) {
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            
        } else {
                                   
        }                        
    }else {           
        carrito.push(producto);               
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
    }  */
    alert("Producto agregado al carrito");
    
}


function agegarFavoritos(id) {
    /* let producto = data.datos.find(prod => prod.id == id);
    let favoritos = [];

    if(localStorage.getItem("favoritos") != null){        
        favoritos = JSON.parse(localStorage.getItem("favoritos"));
        if (favoritos.find(prod => prod.id == id) == undefined) {
            favoritos.push(producto);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
           
        } else {
                                 
        }                        
    }else {           
        favoritos.push(producto);               
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        
    }  */
    alert("Producto agregado a favoritos");
    
}

function pintarProducto(data, contenedor){
    let estrellaLLena = '<li class="fas fa-star"></li>';
    let estrellaVacia = '<li class="fas fa-star disable"></li>';
    let estrellaMitad = '<li class="fas fa-star-half-alt"></li>';

    data.forEach(producto => {                  
        
        
        let prodTemplate = `
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="product-grid">
            <div class="product-image">
                <a href="/templates/detalle-producto.html?producto=${producto.id}" class="image">
                <img class="pic-1"
                    src="${producto.imagenes[0].url}">
                <img class="pic-2"
                    src="${producto.imagenes[0].url}">
                </a>
                <span class="product-sale-label">3X2</span>
            </div>
            <div class="product-content">
                <ul class="rating">`;
        for (let index = 1; index <= 5; index++) {
            if (producto.calificacion >= index) {
                
                prodTemplate += estrellaLLena;            
            } else if (producto.calificacion >= index - .5) {        
                
                prodTemplate += estrellaMitad;            
            } else {    
                
                prodTemplate += estrellaVacia;            
            }
        }

        prodTemplate += `                   
                </ul>
                <h3 class="title"><a href="/templates/detalle-producto.html?producto=${producto.id}">${producto.nombre}</a></h3>
                <div class="price"><span>$${(producto.precio * 1.2).toPrecision(5)}</span>$${producto.precio.toPrecision(5)}</div>
                <div class="product-button-group">
                <a class="product-like-icon" onclick="agegarFavoritos(${producto.id})"><i class="fas fa-heart"></i></a>
                <a class="add-to-cart" onclick="agegarCarrito(${producto.id})"><i class="fa fa-shopping-bag"></i>Agregar al carrito</a>                    
                </div>
            </div>
            </div>
        </div>
        `;
        contenedor.innerHTML += prodTemplate;            
    });
}

let $formBusqueda = document.querySelector('#formBusqueda');
$formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault();
    let $inputBusqueda = document.querySelector('#inputBusqueda');
    window.location.href = "/templates/busqueda.html?search=" + $inputBusqueda.value;    
}   
);

