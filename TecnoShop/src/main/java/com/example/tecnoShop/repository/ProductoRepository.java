package com.example.tecnoShop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.example.tecnoShop.model.Producto;


@Repository
public interface ProductoRepository extends JpaRepository<Producto,Integer>  {
	//List<Producto> findByCategoria(String categoria);
	
	@Query(value = "SELECT * FROM producto WHERE categoria = ?1 ;" , nativeQuery=true)
	List<Producto> findByCategoria(String categoria);
	
	@Query(value = "SELECT * FROM producto ORDER BY vendidos DESC LIMIT 8 ;" , nativeQuery=true)
	List<Producto> findTendencias();
	
	@Query(value = "SELECT * FROM producto WHERE "
			+ "nombre LIKE CONCAT('%',:param,'%') "
			+ "OR categoria LIKE CONCAT('%',:param,'%') "
			+ "OR color LIKE CONCAT('%',:param,'%') "
			+ "OR detalles LIKE CONCAT('%',:param,'%') ;" , nativeQuery=true)
	List<Producto> findParam(@Param("param") String param);
	
	
	
}
