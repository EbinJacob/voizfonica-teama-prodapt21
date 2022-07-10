package com.example.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.registration.model.User;

public interface RegisterationRepository extends JpaRepository<User, Integer>{
	public User findByEmailid(String emailId);
	public User findByEmailidAndPassword(String emailId, String password);
}
