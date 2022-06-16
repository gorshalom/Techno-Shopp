package com.example.tecnoShop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.tecnoShop.model.Opinion;
import com.example.tecnoShop.model.Producto;
import com.example.tecnoShop.service.OpinionServiceImp;
import com.example.tecnoShop.service.ProductoServiceImp;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("api/opinion")
public class OpinionController {
	
	OpinionServiceImp opinionServiceImp;
	ProductoServiceImp productoServiceImp;
	
	
	public OpinionController(@Autowired OpinionServiceImp opinionServiceImp,@Autowired ProductoServiceImp productoServiceImp) {
		this.opinionServiceImp=opinionServiceImp;
		this.productoServiceImp=productoServiceImp;
	}
	
	@GetMapping("all")
    public List<Opinion> getCalificacion(){
        return opinionServiceImp.getOpiniones();
    }

    @GetMapping("{id}")
    public Opinion getOpinion(@PathVariable Integer id){
        return opinionServiceImp.getOpinion(id);
    }

    @PostMapping
    public Opinion saveOpinion(@RequestBody Opinion opinion) {    	
    	try {
    		System.out.println(opinion.getProducto().getId());
    		int id=opinion.getProducto().getId();
    		Producto producto = productoServiceImp.getProducto(id);
    		
    		producto.setCalificacion(((producto.getOpiniones().size()*producto.getCalificacion())+ opinion.getCalificacion())/(producto.getOpiniones().size()+1));
    		System.out.println(producto.getCalificacion());
    		productoServiceImp.saveProducto(producto);
            return opinionServiceImp.saveOpinion(opinion);   		
		} catch (Exception e) {
			System.out.println(e);
			return null;
			
		}
    	
    	
    }

    @DeleteMapping("{id}")
    public Boolean deleteOpinion(@PathVariable Integer id) {
        return opinionServiceImp.deleteOpinion(id);
    }

    @PutMapping()
    public Opinion updateOpinion(@RequestBody Opinion opinion) {
        return opinionServiceImp.updateOpinion(opinion);
    }
	
	
	
}
