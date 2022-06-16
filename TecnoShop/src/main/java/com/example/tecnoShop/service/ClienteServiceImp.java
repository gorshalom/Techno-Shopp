package com.example.tecnoShop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tecnoShop.model.Cliente;
import com.example.tecnoShop.repository.ClienteRepository;


@Service 
public class ClienteServiceImp implements ClienteService {
	
	ClienteRepository clienteRepository;
	
	@Autowired
	public ClienteServiceImp(ClienteRepository clienteRepository) {
		this.clienteRepository=clienteRepository;
	}
	

	@Override
	public Cliente getCliente(Integer id) {
		Optional<Cliente> cliente = clienteRepository.findById(id);
		return cliente.orElse(null);
	}

	@Override
	public List<Cliente> getClientes() {
		return clienteRepository.findAll();
	}
	

	@Override
	public Cliente saveCliente(Cliente cliente) {
		return clienteRepository.save(cliente);
	}

	@Override
	public Boolean deleteCliente(Integer id) {
		try {
			clienteRepository.deleteById(id);
			return true;
		}
		catch(Exception e){
			return false;
		}

	}

	@Override
	public Cliente updateCliente(Cliente cliente) {
		return clienteRepository.save(cliente);
	}


	@Override
	public Cliente validaCredenciales(String contrasenia, String email) {
		Optional<Cliente> cliente = Optional.ofNullable(clienteRepository.validaCredenciales(contrasenia,email));
		return cliente.orElse(null);
		
	}

}
