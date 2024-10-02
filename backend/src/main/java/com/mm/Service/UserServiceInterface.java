package com.mm.Service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mm.Model.Users;

public interface UserServiceInterface 
{
    // CREATE
    Users createUser(Users users);
    
    // READ
    List<Users> getUsers();
    
    // UPDATE
    Users updateById(Long id, Users users);
    
    // DELETE
    String deleteById(Long id);
    
	//FIND BY NAME
	@Query("FROM Users WHERE name LIKE %:name%")
	List<Users> findByName(@Param("name")String name);
    
    // FIND BY EMAIL
    List<Users> findByEmail(String email);
    
    // FIND BY EMAIL AND PASSWORD
    boolean findByEmailAndPassword(String email, String password);
   
    
}
