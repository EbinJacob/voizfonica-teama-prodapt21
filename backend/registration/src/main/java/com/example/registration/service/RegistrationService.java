package com.example.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.registration.model.User;
import com.example.registration.repository.RegisterationRepository;

@Service
public class RegistrationService {
	
	@Autowired
	private RegisterationRepository repo;
	
	public User saveUser(User user) {
		return repo.save(user);
	}
	
	public User fetchUserByEmailid(String email) {
		return repo.findByEmailid(email);
	}
	public User fetchUserByEmailidAndPassword(String email, String password) {
		return repo.findByEmailidAndPassword(email, password);
	}
}
