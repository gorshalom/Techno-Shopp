//simulacion objeto 
let data = {
    datos: {
        id_cliente: 1,
        nombre_cliente: "Juan",
        productos: [
            {
            nombre: "Vengance niño",
            precio: "220",
            img: "../assets/img/productos/1/1.webp",
            cantidad: 4,
            talla:"M",
            categoria: "Playeras",
            detalle: [
                "Playera manga corta, regular fit",
                "Estampado en frente y espalda, serigrafía sin tacto",
                "100% algodón",
                "Hecho en México"
            ],
            calificacion: 4.4,
            id: 1},
            {
            nombre: "Vengance niño",
            precio: "220",
            img: "../assets/img/productos/1/1.webp",
            cantidad: 2,
            talla:"CH",
            categoria: "Playeras",
            detalle: [
                "Playera manga corta, regular fit",
                "Estampado en frente y espalda, serigrafía sin tacto",
                "100% algodón",
                "Hecho en México"
            ],
            calificacion: 4.4,
            id: 1}
        ]
    }
} 



let $cuerpoCarrito= document.getElementById("cuerpoCarrito");
let precioTotal=0;


data.datos.productos.forEach(prod => {
    let templateCard = `
        <tr>
            <td rowspan="2">
                <img src="${prod.img}" alt="producto" class="img-carrito d-none d-sm-inline">
            </td>
            <td class="col">
                <p class="titulo-car m-0 p-0">${prod.nombre} - ${prod.talla}</p>
            </td>
            <td rowspan="2" class="align-items-center">
                <p class="align-self-center titulo-car">$${prod.precio}</p>
            </td>
        </tr>
        <tr class="sin-borde">
            <td class="">
                <div class="d-flex">
                    <button class="button cont-car border-none d-inline-flex ml-0 ml-sm-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-dash-circle align-self-center"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button>
                    <input type="number" class="form-control input-canti d-inline" value="${prod.cantidad}">
                    <button class="button cont-car border-none d-inline-flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-plus-circle align-self-center"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                    <button
                        class="button cont-car d-inline-flex ml-1 ml-sm-5 align-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            fill="currentColor" class="bi bi-trash3-fill " viewBox="0 0 16 16">
                            <path
                                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>`;
    precioTotal+=parseInt(prod.precio);
    $cuerpoCarrito.innerHTML += templateCard;
});

let templateTotal = `
<tr>
    <td colspan="2">
        <p class="text-right total-car">Total</p>
    </td>
    <td>
        <p class="align-self-center total-car">$${precioTotal}</p>
    </td>
    </tr>
    <tr>
    <td colspan="2">

    </td>
    <td>
        <button class="btn btn-danger">
            Continuar
        </button>
    </td>
</tr>

`;

$cuerpoCarrito.innerHTML += templateTotal;


    