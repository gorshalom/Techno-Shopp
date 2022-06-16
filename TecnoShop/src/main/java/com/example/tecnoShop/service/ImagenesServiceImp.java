package com.example.tecnoShop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tecnoShop.model.Imagenes;
import com.example.tecnoShop.repository.ImagenesRepository;

@Service 
public class ImagenesServiceImp implements ImagenesService {
	
	ImagenesRepository imagenesRepository;

	@Autowired
	public ImagenesServiceImp (ImagenesRepository imagenesRepository) {
		this.imagenesRepository = imagenesRepository;
	}
	
	@Override
	public Imagenes getImagenes(Integer id) {
		Optional<Imagenes> imagenes = imagenesRepository.findById(id);
		return imagenes.orElse(null);
	}

	@Override
	public List<Imagenes> getImagenes() {
		return imagenesRepository.findAll();
	}

	@Override
	public Imagenes saveImagenes(Imagenes imagenes) {
		return imagenesRepository.save(imagenes);
	}

	@Override
	public Boolean deleteImagenes(Integer id) {
		try {
			imagenesRepository.deleteById(id);
			return true;
		}
		catch(Exception e){
			return false;
		}
	}

	@Override
	public Imagenes updateImagenes(Imagenes imagenes) {
		return imagenesRepository.save(imagenes);
	}
	

}
