const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector("form");


const inputs = document.querySelectorAll("input");


const nombreError = document.querySelector("#errorNombre");
const apellidoError = document.querySelector("#errorApellido");
const emailError = document.querySelector("#errorEmail");
const passwordError = document.querySelector("#errorPassword");
const telefonoError = document.querySelector("#errorTelefono");


const statusInf = {
	nombre :false,
	apellido: false,
	email: false,
	password: false,
	telefono: false
}


inputs.forEach((inp) =>{

	inp.addEventListener("keyup",(e)=>{


		switch(e.target.name){
			case "nombre":
				if(expresiones.nombre.test(e.target.value)){
					//console.log("Nombre correcto");
					statusInf.nombre=true;
					nombreError.textContent = "";
				}else{
					//console.log("Nombre incorrecto");
					statusInf.nombre=false;
					nombreError.textContent = "Error";
				}
				break;
			case "apellido":
				if(expresiones.nombre.test(e.target.value)){
					//console.log("Apellido correcto");
					statusInf.apellido=true;
					apellidoError.textContent = "";
				}else{
					//console.log("Apellido incorrecto");
					apellidoError.textContent = "Error";
					statusInf.apellido=false;

				}				
				break;
			case "email":
				if(expresiones.email.test(e.target.value)){
					//console.log("Email correcto");
					statusInf.email=true;

					emailError.textContent = "";
				}else{
					//console.log("Email incorrecto");
					statusInf.email=false;

					emailError.textContent = "Error";

				}				
				break;
			case "password":
				if(expresiones.password.test(e.target.value)){
					//console.log("Password correcto");
					statusInf.password=true;

					passwordError.textContent = "";
				}else{
					//console.log("Password incorrecto");
					passwordError.textContent = "Error";
					statusInf.password=false;
				}				
				break;
			case "telefono":
				if(expresiones.telefono.test(e.target.value)){
					//console.log("Telefono correcto");
					statusInf.telefono=true;

					telefonoError.textContent = "";
				}else{
					//console.log("Telefóno incorrecto");
					telefonoError.textContent = "Error";
					statusInf.telefono=false;

				}				
				break;
		}

	})
})

formulario.addEventListener("submit",(e)=>{
	e.preventDefault();
	//console.log("Enviado");
	const check = document.querySelector("#terminos").cheched

	if(!Object.values(statusInf).includes(false) && check == true){
		document.querySelector(".alert-danger").style.display = "none"
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		//console.log("Enviado");
		console.log(datos);
		formulario.reset()
	}else{
		//console.log("No enviado");
		document.querySelector(".alert-danger").style.display = "block"
	}
})

