package com.example.registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Invoice {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int invoiceId;              //id to identify each transaction
	private int userId;                //id of the user who did the recharge
	private int planId;               //id of the plan taken by the user
	private String rechargeDate;     //today's date - Date of recharge
	private int rechargeAmount;      //planCost from RechargePlan table
	
	
	public Invoice(int userId, int planId, String rechargeDate,int rechargeAmount) {
		super();
		this.userId = userId;
		this.planId = planId;
		this.rechargeDate = rechargeDate;
		this.rechargeAmount=rechargeAmount;
		
	}
	
	public int getRechargeAmount() {
		return rechargeAmount;
	}

	public void setRechargeAmount(int rechargeAmount) {
		this.rechargeAmount = rechargeAmount;
	}

	public Invoice() {
		super();
	}
	public int getInvoiceId() {
		return invoiceId;
	}

	public void setInvoiceId(int invoiceId) {
		this.invoiceId = invoiceId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getPlanId() {
		return planId;
	}

	public void setPlanId(int planId) {
		this.planId = planId;
	}

	public String getRechargeDate() {
		return rechargeDate;
	}

	public void setRechargeDate(String rechargeDate) {
		this.rechargeDate = rechargeDate;
	}
	
}
