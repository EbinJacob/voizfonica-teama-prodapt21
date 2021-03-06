package com.example.registration.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.registration.model.Feedback;
import com.example.registration.repository.FeedbackRepository;

@Service
@Transactional
public class FeedbackService {
	@Autowired
	FeedbackRepository feedbackRepo;
	
	public Feedback saveFeedback(Feedback feedback) {
		feedbackRepo.save(feedback);
		return feedback;
	}
	public List<Feedback> getAllFeedbacks(){
		return feedbackRepo.findAll();
	}
}
