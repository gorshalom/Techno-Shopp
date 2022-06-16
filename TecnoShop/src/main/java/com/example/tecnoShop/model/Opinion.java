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
@Table(name = "opinion")
public class Opinion {	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name="opinion_id")
	private Integer id;
	
	@Column(nullable = false, name="calificacion")
	private Float calificacion;
	
	@Column(nullable = false, name="opinion")
	private String opinion;
	
	@Column(nullable = false, name="autor")
	private String autor;
	
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_producto", nullable = false)
	@JsonProperty(access = Access.WRITE_ONLY)
    private Producto producto;
		
	
	@Column(nullable = true, name="creado")
	private LocalDateTime creado;
	
	@Column(nullable = true, name="modificado")
	private LocalDateTime modificado;
	
	
	
	public String getOpinion() {
		return opinion;
	}

	public void setOpinion(String opinion) {
		this.opinion = opinion;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
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
	
	
	public Float getCalificacion() {
	    return calificacion;
	}
	
	public void setCalificacion(Float calificacion) {
	    this.calificacion = calificacion;
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
		return "Opinion [id=" + id + ", calificacion=" + calificacion + ", opinion=" + opinion + ", autor=" + autor
				+ ", producto=" + producto + ", creado=" + creado + ", modificado=" + modificado + "]";
	}
	
	
	
}
