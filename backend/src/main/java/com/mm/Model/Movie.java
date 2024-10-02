package com.mm.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;

@Entity
@Data
@Table (name = "movies", uniqueConstraints = 
			{
					@UniqueConstraint(columnNames = {"id"})
			}
		)
public class Movie
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    @Lob
    private byte[] poster;
	@Column(nullable = false)
	private String title;
	@Column(nullable = false)
	private int year;
	@Column(nullable = false)
	private String description;	

}
