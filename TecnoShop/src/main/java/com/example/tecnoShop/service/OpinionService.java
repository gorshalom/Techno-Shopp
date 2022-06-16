package com.example.tecnoShop.service;

import java.util.List;

import com.example.tecnoShop.model.Opinion;

public interface OpinionService {
	
	 // Leer
    Opinion getOpinion(Integer id);
    List<Opinion> getOpiniones();

    //Guardar
    Opinion saveOpinion(Opinion opinion);

    //Borrar
    Boolean deleteOpinion(Integer id);

    //Actualizar
    Opinion updateOpinion(Opinion opinion);
}
