let param = window.location.href.split("=").pop();
let busca = decodeURI(param);
//cambiar titulo de la pagina
document.getElementById("titulo").innerHTML = busca+"-TS";




data = {
    staus: "ok",
    datos: [
        //niñx
        {
            id: 9,
            nombre: "Nerd T-Shirt",
            precio: 229,
            categoria: "Niñx",
            calificacion: 3,
            imagen: "https://i.postimg.cc/1zKVSL1r/ra-kids-tee-x1250-FFFFFF-97ab1c12de-front-pad-1000x1000-f8f8f8.jpg",
        },
        {
            id: 10,
            nombre: "Hacker T-Shirt",
            precio: 229,
            categoria: "Niñx",
            calificacion: 3,
            imagen: "https://i.postimg.cc/05nnnB6m/ra-kids-tee-x1250-000000-44f0b734a5-front-pad-1000x1000-f8f8f8-u3.jpg",
        },
        {
            id: 11,
            nombre: "Pithon T-Shirt",
            precio: 229,
            categoria: "Niñx",
            calificacion: 3,
            imagen: "https://i.postimg.cc/J7p3ZHg5/ra-kids-tee-x1250-000000-44f0b734a5-front-pad-1000x1000-f8f8f8.jpg",
        },
        /*****Mujeres******/
        {
            id: 109,
            nombre: "T-shirt git pull",
            precio: 229,
            categoria: "Mujer",
            calificacion: 4,
            imagen: "https://i.postimg.cc/pdRDcvyP/3-4-sleeve-t-shirt-mockup-featuring-a-smiling-woman-at-a-gym-holding-a-bottle-of-water-m20349-r-el2.png",
        }, {
            id: 110,
            nombre: "T-shirt IT WORKS",
            precio: 189,
            categoria: "Mujer",
            calificacion: 5,
            imagen: "https://i.postimg.cc/k5sWkHtK/mockup-of-a-woman-pointing-at-her-heather-t-shirt-at-a-studio-m21166-r-el2.png",
        }, {
            id: 111,
            nombre: "Crop manga larga",
            precio: 229,
            categoria: "Mujer",
            calificacion: 3,
            imagen: "https://i.postimg.cc/BbLDPQ7B/mockup-of-a-woman-wearing-a-crop-top-hoodie-and-shorts-while-jumping-42352a.png",
        },
        //" /*****Hombres******/
        {
            id: 209,
            nombre: "T-shirt CSS",
            precio: 159,
            categoria: "Hombre",
            calificacion: 4,
            imagen: "https://i.postimg.cc/ZKymppRG/ssrco-long-t-shirt-mens-101010-01c5ca27c6-front-square-three-quarter-x1000-bg-f8f8f8-1.jpg",
        }, {
            id: 210,
            nombre: "T-shirt Stack overflow",
            precio: 189,
            categoria: "Hombre",
            calificacion: 5,
            imagen: "https://i.postimg.cc/nrd6Lxwx/ra-vneck-x1900-101010-01c5ca27c6-front-c-160-70-1000-1000-bg-f8f8f8.jpg",
        }, {
            id: 211,
            nombre: "T-shirt Java",
            precio: 229,
            categoria: "Hombre",
            calificacion: 4,
            imagen: "https://i.postimg.cc/Gp06tqz4/ssrco-active-tshirt-mens-101010-01c5ca27c6-front-square-three-quarter-1000x1000.jpg",
        },

        //accesorios
        {
            id: 309,
            nombre: "Taza javascript",
            precio: 60,
            categoria: "Accesorio",
            calificacion: 4,
            imagen: "https://i.postimg.cc/Ls55RXB9/mug-tall-x1000-right-pad-1000x1000-f8f8f8.jpg",
        }, {
            id: 310,
            nombre: "Taza Git",
            precio: 60,
            categoria: "Accesorio",
            calificacion: 5,
            imagen: "https://i.postimg.cc/250WFMT6/mug-tall-x1000-right-pad-1000x1000-f8f8f8-u3.jpg",
        }, {
            id: 311,
            nombre: "Taza colores",
            precio: 65,
            categoria: "Accesorio",
            calificacion: 4,
            imagen: "https://i.postimg.cc/YC0wbqcY/mug-tall-x1000-center-pad-750x1000-f8f8f8-u2.jpg",
        },


    ]
}

//----favoritos-----
if (busca === "favoritos") {
    let favoritos = [];
    if(localStorage.getItem("favoritos") != null){        
        favoritos = JSON.parse(localStorage.getItem("favoritos"));
        data.datos=favoritos;                              
    }else {           
        data.datos=[];
        
    }    
}

let estrellaLLena = '<li class="fas fa-star"></li>';
let estrellaVacia = '<li class="fas fa-star disable"></li>';
let estrellaMitad = '<li class="fas fa-star-half-alt"></li>';


let $categoria = document.getElementById("categoria");
$categoria.innerHTML = busca;

let $contenido = document.querySelector("#contenido");
data.datos.forEach(prod => {
    if (prod.categoria == busca || busca == "favoritos") {
        let tempProd = `
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="product-grid">
                <div class="product-image">
                    <a href="detalle-producto.html" class="image">
                    <img class="pic-1"
                        src="${prod.imagen}">
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
                    <a class="product-like-icon" onclick="agegarFavoritos(${prod.id})"><i class="fas fa-heart"></i></a>
                    <a class="add-to-cart"  onclick="agegarCarrito(${prod.id})"><i class="fa fa-shopping-bag"></i>ADD TO CART</a>
                    <a class="product-compare-icon" ><i class="fas fa-random"></i></a>
                    </div>
                </div>
                </div>
            </div>
        `;

        $contenido.innerHTML += tempProd;
    }    
});


function agegarCarrito(id) {
    let producto = data.datos.find(prod => prod.id == id);
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
        
    } 
}


function agegarFavoritos(id) {
    let producto = data.datos.find(prod => prod.id == id);
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
        
    } 
}

