package com.example.registration.service;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.registration.model.User;
import com.example.registration.repository.RegisterationRepository;

@Service
@Transactional
public class RegistrationService {
	
	@Autowired
	private JavaMailSender mailSender;
		
	@Autowired
	private RegisterationRepository repo;
		
	public User saveUser(User user) 
	{
		return repo.save(user);
	}
		
	public void sendVerificationEmail(User user, String siteURL) throws UnsupportedEncodingException, MessagingException 
	{
		String subject="Verify your registration to VoizFonica Telecom";
		String senderName="VoizFonica Telecom";
		String mailContent = "<p>Dear "+user.getFullname()+"</p>";
		
		mailContent+="<p>Greetings from VoizFonica Telecom.<br>Please click on the link below to verify your account.</p>";
		
		String verifyURL=siteURL+"/verification?code="+user.getVerificationCode();
		
		mailContent+="<h3><a href=\""+ verifyURL +"\">Verify Now!</a></h3>";
		mailContent+="<p>Thanks and Regards,<br>VoizFonica Telecom<br><em>Team-A@Prodapt-Digital-21</em></p>";
		
		MimeMessage message=mailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message);
		
		helper.setFrom("eng18cs0097.ebinjacob@gmail.com", senderName);
		helper.setTo(user.getEmailid());
		helper.setSubject(subject);
		helper.setText(mailContent,true);
		
		mailSender.send(message);
	}
	public boolean verify(String verificationCode) 
	{
		User user=repo.findByVerificationCode(verificationCode);
		if(user==null || user.isEnabled()) 
		{
			return false;
		}
		else 
		{
			repo.enable(user.getEmailid());
			return true;
		}
	}
	
	public User fetchUserByEmailid(String email) 
	{
		return repo.findByEmailid(email);
	}
	public User fetchUserByEmailidAndPassword(String email, String password) 
	{
		return repo.findByEmailidAndPassword(email, password);
	}
	public User fetchUserById(Integer id) {
		int x = id;
		return repo.findById(x);
	}
	public void setCurrentPlan(Integer userId, Integer planId) {
		repo.setCurrentPlan(userId, planId);
	}
}
