package com.example.registration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.registration.model.ErrorClazz;
import com.example.registration.model.Issue;
import com.example.registration.service.IssueService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class IssueController {
	@Autowired
	private IssueService service;
	

	@PostMapping("/insert_issue")
	public ResponseEntity<?> saveIssue(@RequestBody Issue issue){
		try {
			issue=service.saveIssue(issue);
			return new ResponseEntity<Issue>(issue, HttpStatus.CREATED);
		}catch(Exception e) {
			ErrorClazz errorClazz = new ErrorClazz(e.getMessage(),500);
			return new ResponseEntity<ErrorClazz>(errorClazz, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/fetch_all_issues")	 
	 public ResponseEntity<?> getAllIssues() {
			 try {
				 List<Issue> issues = service.getAllIssues();
				 return new ResponseEntity<List<Issue>>(issues, HttpStatus.OK);
		 }catch(Exception e) {
			ErrorClazz errorClazz = new ErrorClazz(e.getMessage(),500);
			return new ResponseEntity<ErrorClazz>(errorClazz, HttpStatus.INTERNAL_SERVER_ERROR);
		 }	 
	}
	
	@GetMapping("/fetch_issue_by_id/{userId}")
	public List<Issue> getIssueByUserId(@PathVariable int userId) throws Exception{
		List<Issue> userIssues = service.fetchIssueByUserId(userId);
		if(userIssues==null) {
			throw new Exception("No issues raised by current user.");
		}
		return userIssues;
	}
	@PutMapping("/resolve")
	public void resolveIssue(@RequestBody int id) {
		service.resolveIssue(id);
	}
}
