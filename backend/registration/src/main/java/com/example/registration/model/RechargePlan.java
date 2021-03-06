package com.example.registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RechargePlan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int planId;
	private String serviceType;    //PREPAID/POSTPAID/DONGLE
	private String planName;      //Description of the plan
	private int planCost;        //Cost of the recharge
	private int planValidity;   //Validity of the plan in days
	
	public RechargePlan(String serviceType, String planName, int planCost, int planValidity) {
		super();
		this.serviceType = serviceType;
		this.planName = planName;
		this.planCost = planCost;
		this.planValidity = planValidity;
	}
	
	public RechargePlan() {
		super();
	}

	public int getPlanId() {
		return planId;
	}
	public void setPlanId(int planId) {
		this.planId = planId;
	}
	public String getServiceType() {
		return serviceType;
	}
	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}
	public String getPlanName() {
		return planName;
	}
	public void setPlanName(String planName) {
		this.planName = planName;
	}
	public int getPlanCost() {
		return planCost;
	}
	public void setPlanCost(int planCost) {
		this.planCost = planCost;
	}
	public int getPlanValidity() {
		return planValidity;
	}
	public void setPlanValidity(int planValidity) {
		this.planValidity = planValidity;
	}
	
	
}
