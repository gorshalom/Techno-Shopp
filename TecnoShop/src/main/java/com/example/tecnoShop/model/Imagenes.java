package com.example.tecnoShop.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity //representacion de la informacion que nosotros necesitamos
@Table(name = "imagenes")
public class Imagenes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name="id_imagen")
	private Integer id;
		
	@Column(nullable = false, name="nombre")
	private String nombre;
	
	@Column(nullable = false, name="url")
	private String url;	
	
	@Column(nullable = true, name="creado")
	private LocalDateTime creado;
	
	@Column(nullable = true, name="modificado")
	private LocalDateTime modificado;
	
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_producto", nullable = false)
	@JsonProperty(access = Access.WRITE_ONLY)
    private Producto producto;
	
	

	public Imagenes() {
		super();
	}

	public Imagenes(Integer id, String nombre, String url, Producto producto) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.url = url;
		this.producto = producto;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
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
		return "Imagenes [id=" + id + ", nombre=" + nombre + ", url=" + url + ", creado=" + creado + ", modificado="
				+ modificado + "]";
	}

	
}
