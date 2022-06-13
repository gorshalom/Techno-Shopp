

fetch('http://localhost:8080/api/producto/tendencias')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }
    );
