package com.example.tecnoShop.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;



@Entity //representacion de la informacion que nosotros necesitamos
@Table(name = "cliente")
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name="id_cliente")
	private Integer id;
	
	@Column(nullable = false, name="email")
	private String email;
	
	@Column(nullable = false, name="nombre")
	private String nombre;
	
	@Column(nullable = false, name="contrasenia")
	private String contrasenia;	
	
	@Column(nullable = false, name="telefono")
	private String telefono;	
	
	@Column(nullable = true, name="creado")
	private LocalDateTime creado;
	
	@Column(nullable = true, name="modificado")
	private LocalDateTime modificado;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}	

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	
	public LocalDateTime getCreado() {
		return creado;
	}

	public void setCreado(LocalDateTime creado) {
		this.creado = creado;
	}

	public LocalDateTime getModificado() {
		return modificado;
	}

	public void setModificado(LocalDateTime modificado) {
		this.modificado = modificado;
	}

	@Override
	public String toString() {
		return "Cliente [id=" + id + ", email=" + email + ", nomnbre=" + nombre + ", contrasenia=" + contrasenia
				+ ", telefono=" + telefono + ", creado=" + creado + ", modificado="
				+ modificado + "]";
	}
	
	
	
	
	
	
	

}
