package com.example.tecnoShop.service;

import java.util.List;
//import java.util.Map;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.tecnoShop.model.Cliente;


public interface ClienteService {
	
	// Leer
	Cliente getCliente(Integer id);
	List<Cliente> getClientes();
	Cliente validaCredenciales(String contrasenia,String email);
	
	//Guardar
	Cliente saveCliente(Cliente cliente);
	
	
	//Borrar
	Boolean deleteCliente(Integer id);
	
	//Actualizar
	Cliente updateCliente(Cliente cliente);
	UserDetails loadUserByUsername(String email) throws UsernameNotFoundException;
	

}
