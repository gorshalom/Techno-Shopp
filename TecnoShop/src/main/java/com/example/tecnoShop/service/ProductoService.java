package com.example.tecnoShop.service;

import java.util.List;

import com.example.tecnoShop.model.Cliente;
import com.example.tecnoShop.model.Producto;

public interface ProductoService {
	
	// Leer
	Producto getProducto(Integer id);
	List<Producto> getProductos();
	List<Producto> findByCategoria(String categoria);
	List<Producto> findTendencias();
	List<Producto> findParam(String param);
	
	
	//Guardar
	Producto saveProducto(Producto producto);
	
	
	//Borrar
	Boolean deleteProducto(Integer id);
	
	//Actualizar
	Producto updateProducto(Producto producto);

}
