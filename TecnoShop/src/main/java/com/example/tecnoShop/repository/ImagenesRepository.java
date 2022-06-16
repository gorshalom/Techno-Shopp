package com.example.tecnoShop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.tecnoShop.model.Imagenes;

@Repository
public interface ImagenesRepository extends JpaRepository<Imagenes,Integer> {

}
