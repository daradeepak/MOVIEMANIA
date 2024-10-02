package com.mm.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mm.Model.Users;

@Repository
public interface UserRepo extends JpaRepository<Users, Long> 
{
	//FIND BY NAME
	@Query("FROM Users WHERE name LIKE %:name%")
	List<Users> findByName(@Param("name")String name);

    // FIND BY EMAIL
	List<Users> findByEmail(String email);
    
    // FIND BY EMAIL AND PASSWORD
    Users findByEmailAndPassword(String email, String password);
    
}
