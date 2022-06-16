package com.example.tecnoShop.repository;

import org.springframework.stereotype.Repository;
import com.example.tecnoShop.model.Opinion;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface OpinionRepository extends JpaRepository<Opinion,Integer> {

}
