/* 
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
 */

const parametros = window.location.search;
const urlParams = new URLSearchParams(parametros);
const search = decodeURI(urlParams.get('search'));

document.getElementById("titulo").innerHTML = search+"-TS";

let $categoria = document.getElementById("categoria");
$categoria.innerHTML = search;

let $contenedor = document.querySelector("#contenido");

if (search === "Hombre" || search === "Mujer" || search === "Niñx" || search === "Accesorio") {
    
    fetch('http://localhost:8080/api/producto/categoria?search=' + search)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        pintarProducto(data, $contenedor);    
    });

}else{
    fetch('http://localhost:8080/api/producto/search?search=' + search)
    .then(response => response.json())
    .then(data => {
        pintarProducto(data, $contenedor);    
    });
}





