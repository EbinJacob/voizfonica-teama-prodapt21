package com.example.registration.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.registration.model.Issue;
import com.example.registration.repository.IssueRepository;

@Service
@Transactional
public class IssueService {
	@Autowired
	private IssueRepository issueRepo;
	
	public Issue saveIssue(Issue issue) {
		issueRepo.save(issue);
		return issue;
	}
	public List<Issue> getAllIssues(){
		return issueRepo.findAll();
	}
	public List<Issue> fetchIssueByUserId(int userId){
		return issueRepo.findByUserId(userId);
	}
	public void resolve(int id) {
		issueRepo.resolve(id);
	}
}
