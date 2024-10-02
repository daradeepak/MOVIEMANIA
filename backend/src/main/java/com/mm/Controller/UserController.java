package com.mm.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mm.Model.Users;
import com.mm.Service.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/users") 
public class UserController 
{
    @Autowired
    UserServiceImpl service;
    
    @PostMapping("/signup")
    public Users createUser(@RequestBody Users user)
    {
        return service.createUser(user);
    }
    
    @GetMapping("/users")
    public List<Users> getUsers() 
    {
        return service.getUsers(); 
    }
    
    @PutMapping("/update-user/{id}")
    public Users updateById(@PathVariable Long id, @RequestBody Users user) 
    {
        return service.updateById(id, user);
    }
    
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) 
    {
        return service.deleteById(id);
    }
    
    @GetMapping("/searchByName/{name}")
    public List<Users> findByName(@PathVariable String name) 
    {
        return service.findByName(name);
    }
    
    @GetMapping("/searchByEmail/{email}")
    public List<Users> findByEmail(@PathVariable String email) 
    {
        return service.findByEmail(email);
    }
    
    // LOGIN - FIND BY EMAIL AND PASSWORD
    @PostMapping("/login")
    public boolean login(@RequestBody Users user) 
    {
        return service.findByEmailAndPassword(user.getEmail(), user.getPassword());
    }
    
}
