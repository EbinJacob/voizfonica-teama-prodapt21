package com.example.registration.model;

public class ErrorClazz {
	private String errorMessage;
	private int code;
	public ErrorClazz(String errorMessage, int code) {
		super();
		this.errorMessage = errorMessage;
		this.code = code;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	
}
