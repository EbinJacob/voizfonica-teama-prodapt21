package com.example.registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.lang.NonNull;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NonNull
	private String fullname;
	@NonNull
	private String emailid;
	@NonNull
	private String password;
	private String verificationCode;
	private boolean enabled;
	private int currentPlanId;
	public User(String fullname, String emailid, String password, String verificationCode, boolean enabled,
			int currentPlanId) {
		super();
		this.fullname = fullname;
		this.emailid = emailid;
		this.password = password;
		this.verificationCode = verificationCode;
		this.enabled = enabled;
		this.currentPlanId = currentPlanId;
	}
	public User() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getVerificationCode() {
		return verificationCode;
	}
	public void setVerificationCode(String verificationCode) {
		this.verificationCode = verificationCode;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	public int getCurrentPlanId() {
		return currentPlanId;
	}
	public void setCurrentPlanId(int currentPlanId) {
		this.currentPlanId = currentPlanId;
	}
}
	
