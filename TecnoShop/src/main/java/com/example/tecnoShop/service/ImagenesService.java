package com.example.tecnoShop.service;

import java.util.List;

import com.example.tecnoShop.model.Imagenes;

public interface ImagenesService {
	
	// Leer
		Imagenes getImagenes(Integer id);
		List<Imagenes> getImagenes();
		
		//Cliente validaCredenciales(String contrasenia,String email);
		
		//Guardar
		Imagenes saveImagenes(Imagenes imagenes);
		
		
		//Borrar
		Boolean deleteImagenes(Integer id);
		
		//Actualizar
		Imagenes updateImagenes(Imagenes imagenes);

}
