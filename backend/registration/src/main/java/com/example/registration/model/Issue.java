package com.example.registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Issue {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String email;
	private double mobile_No;
	private String plan;
	private String description;
	private int userId;
	private boolean active;
	
	
	public Issue() {
		super();
	}
	public Issue(String name, String email, double mobile_No, String plan, String description, int userId,
			boolean active) {
		super();
		this.name = name;
		this.email = email;
		this.mobile_No = mobile_No;
		this.plan = plan;
		this.description = description;
		this.userId = userId;
		this.active = active;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getMobile_No() {
		return mobile_No;
	}
	public void setMobile_No(double mobile_No) {
		this.mobile_No = mobile_No;
	}
	public String getPlan() {
		return plan;
	}
	public void setPlan(String plan) {
		this.plan = plan;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	
}
