package com.example.registration.controller;

import java.io.UnsupportedEncodingException;


import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.registration.Utility;
import com.example.registration.model.ErrorClazz;

import com.example.registration.model.User;
import com.example.registration.service.RegistrationService;
import net.bytebuddy.utility.RandomString;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterationController {
	
	@Autowired
	private RegistrationService service;
	
	@PostMapping("/verifyuser")
	public ResponseEntity<?> createUser(@RequestBody User user,HttpServletRequest request) throws UnsupportedEncodingException, MessagingException
	{
		String randomCode=RandomString.make(64);
		user.setVerificationCode(randomCode);
		user=service.saveUser(user);
		String siteURL=Utility.getSiteURL(request);
		service.sendVerificationEmail(user,siteURL);
		return new ResponseEntity<Void>(HttpStatus.OK);		
	}
	@GetMapping("/verification")
	public ResponseEntity<?> verifyAccount(@Param("code") String code){
		boolean verified=service.verify(code);
		if(verified) {
			return new ResponseEntity<String>("{Success! Account Verified Successfully! You can now login.}",HttpStatus.OK);
		}
		else {
			ErrorClazz errorClazz=new ErrorClazz("Verification failed",500);
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user,HttpServletRequest request) throws Exception {
		String tempEmailid=user.getEmailid();
		String randomCode=RandomString.make(64);
		user.setVerificationCode(randomCode);
		if(tempEmailid != null && !"".equals(tempEmailid)) {
			User userobj = service.fetchUserByEmailid(tempEmailid);
			if(userobj != null) {
				throw new Exception("User with "+tempEmailid+" already exists!");
			}
		}
		User userObj=null;
		userObj = service.saveUser(user);
		String siteURL=Utility.getSiteURL(request);
		service.sendVerificationEmail(user,siteURL);
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
	@DeleteMapping("/user/logout")
	public ResponseEntity<?> logout (HttpSession session){
		User user = (User)session.getAttribute("user");
		if(user!=null)
			session.removeAttribute("user");
		session.invalidate();
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	
}
