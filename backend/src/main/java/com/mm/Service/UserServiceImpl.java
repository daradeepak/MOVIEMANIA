package com.mm.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mm.Model.Users;
import com.mm.Repository.UserRepo;

@Service
public class UserServiceImpl implements UserServiceInterface {
    @Autowired
    UserRepo userRepo;

    @Override
    public Users createUser(Users users) {
        return userRepo.save(users);
    }

    @Override
    public List<Users> getUsers()
    { 
        return userRepo.findAll();
    }

    @Override
    public Users updateById(Long id, Users users) {
        Users oldUser = userRepo.findById(id).get();
        oldUser.setName(users.getName());
        oldUser.setEmail(users.getEmail());
        oldUser.setPassword(users.getPassword());
        oldUser.setConfirm_password(users.getConfirm_password());
        
        return userRepo.save(oldUser);
    }

    @Override
    public String deleteById(Long id) 
    {
        userRepo.deleteById(id);
        return "User deleted successfully";
    }

    @Override
    public List<Users> findByEmail(String email)
    {
        return userRepo.findByEmail(email);
    }

    @Override
    public boolean findByEmailAndPassword(String email, String password)
    {
        Users user = userRepo.findByEmailAndPassword(email, password);
        return user != null; 
    }

	@Override
	public List<Users> findByName(String name) {
		// TODO Auto-generated method stub
		return userRepo.findByName(name);
	}

}
