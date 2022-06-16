package com.example.tecnoShop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tecnoShop.model.Opinion;
import com.example.tecnoShop.repository.OpinionRepository;

@Service
public class OpinionServiceImp implements OpinionService{
	
	OpinionRepository opinionRepository;
	
	
	@Autowired
	public OpinionServiceImp(OpinionRepository opinionRepository){
		this.opinionRepository=opinionRepository;
	}	

	@Override
	public Opinion getOpinion(Integer id) {
		Optional<Opinion> opinion = opinionRepository.findById(id);
		return  opinion.orElse(null);
	}

	@Override
	public List<Opinion> getOpiniones() {
		return opinionRepository.findAll();
	}

	@Override
	public Opinion saveOpinion(Opinion opinion) {
		return opinionRepository.save(opinion);
	}

	@Override
	public Boolean deleteOpinion(Integer id) {
		try {
			opinionRepository.deleteById(id);
			return true;
			
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Opinion updateOpinion(Opinion opinion) {
		return opinionRepository.save(opinion);
	}

}
