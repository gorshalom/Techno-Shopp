


fetch('http://localhost:8080/api/producto/tendencias')
    .then(response => response.json())
    .then(data => {
        
        let $contenedorTendencias = document.querySelector('#contenedor-tendencias');
        pintarProducto(data, $contenedorTendencias);
        
    }
);




