package com.example.tecnoShop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.tecnoShop.model.Producto;
import com.example.tecnoShop.repository.ProductoRepository;

@Service
public class ProductoServiceImp implements ProductoService {
	
	ProductoRepository productoRepository;
	
	public ProductoServiceImp(@Autowired ProductoRepository productoRepository) {
		this.productoRepository=productoRepository;
	}
	

	@Override
	public Producto getProducto(Integer id) {
		Optional<Producto> producto = productoRepository.findById(id);
		return producto.orElse(null);
		
	}

	@Override
	public List<Producto> getProductos() {
		return productoRepository.findAll();
	}

	@Override
	public Producto saveProducto(Producto producto) {
		return productoRepository.save(producto);
	}

	@Override
	public Boolean deleteProducto(Integer id) {
		try {
			productoRepository.deleteById(id);
			return true;			
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Producto updateProducto(Producto producto) {
		return productoRepository.save(producto);
	}


	@Override
	public List<Producto> findByCategoria(String categoria) {		
		return productoRepository.findByCategoria(categoria);
	}


	@Override
	public List<Producto> findTendencias() {
		return productoRepository.findTendencias();
	}


	@Override
	public List<Producto> findParam(String param) {
		return productoRepository.findParam(param);
	}
	
}
