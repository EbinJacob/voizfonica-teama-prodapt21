package com.example.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.registration.model.User;
import com.example.registration.service.RegistrationService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterationController {
	
	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailid=user.getEmailid();
		if(tempEmailid != null && !"".equals(tempEmailid)) {
			User userobj = service.fetchUserByEmailid(tempEmailid);
			if(userobj != null) {
				throw new Exception("User with "+tempEmailid+" already exists!");
			}
		}
		User userObj=null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/login")
	
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmailid=user.getEmailid();
		String tempPassword=user.getPassword();
		User userobj = null;
		if(tempEmailid != null && tempPassword!=null) {
			userobj = service.fetchUserByEmailidAndPassword(tempEmailid, tempPassword);
		}
		if(userobj==null) {
			throw new Exception("Bad Credentials");
		}
		return userobj;
	}
}
