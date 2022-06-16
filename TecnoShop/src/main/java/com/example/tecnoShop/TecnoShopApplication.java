package com.example.tecnoShop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.tecnoShop.model.Imagenes;
import com.example.tecnoShop.model.Producto;
import com.example.tecnoShop.repository.ImagenesRepository;
import com.example.tecnoShop.repository.ProductoRepository;

@SpringBootApplication
public class TecnoShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(TecnoShopApplication.class, args);	
	}
	


}
