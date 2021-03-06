package com.example.registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int feedbackId;
	private int userId;
	private String Call_Connectivity;
	private String Experience;
	private String Customer_Support;
	private String Value_For_Money;
	private String Your_Opinion;
	public Feedback() {
		super();
	}
	public Feedback(int userId, String call_Connectivity, String experience, String customer_Support,
			String value_For_Money, String your_Opinion) {
		super();
		this.userId = userId;
		Call_Connectivity = call_Connectivity;
		Experience = experience;
		Customer_Support = customer_Support;
		Value_For_Money = value_For_Money;
		Your_Opinion = your_Opinion;
	}
	public int getFeedbackId() {
		return feedbackId;
	}
	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getCall_Connectivity() {
		return Call_Connectivity;
	}
	public void setCall_Connectivity(String call_Connectivity) {
		this.Call_Connectivity = call_Connectivity;
	}
	public String getExperience() {
		return Experience;
	}
	public void setExperience(String experience) {
		this.Experience = experience;
	}
	public String getCustomer_Support() {
		return Customer_Support;
	}
	public void setCustomer_Support(String customer_Support) {
		this.Customer_Support = customer_Support;
	}
	public String getValue_For_Money() {
		return Value_For_Money;
	}
	public void setValue_For_Money(String value_For_Money) {
		this.Value_For_Money = value_For_Money;
	}
	public String getYour_Opinion() {
		return Your_Opinion;
	}
	public void setYour_Opinion(String your_Opinion) {
		this.Your_Opinion = your_Opinion;
	}
	
}
