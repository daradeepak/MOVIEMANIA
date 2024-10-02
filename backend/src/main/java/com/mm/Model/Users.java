package com.mm.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;

@Entity
@Data
@Table (uniqueConstraints = 
			{
					@UniqueConstraint(columnNames = {"id"})
			}
		) 

public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
  
    private Long id;
    @Column(nullable=false)
    private String name;
    @Column(nullable=false)
    private String email;
    @Column(nullable=false)
    private String password;
    @Column(nullable=false)
    private String confirm_password;
    
	@Column(nullable = false)
    private String role; // Example: "ADMIN" or "USER"
}
