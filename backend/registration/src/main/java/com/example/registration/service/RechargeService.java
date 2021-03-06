package com.example.registration.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.registration.model.RechargePlan;
import com.example.registration.repository.RechargePlanRepository;

@Service
@Transactional
public class RechargeService {
	@Autowired
	private RechargePlanRepository planRepo;
	
	public RechargePlan savePlan(RechargePlan plan) {
		return planRepo.save(plan);
	}
	public Optional<RechargePlan> fetchRechargePlanByPlanId(int planId) {
		return planRepo.findById(planId);
	}
	public List<RechargePlan> fetchRechargePlanByServiceType(String serviceType) {
		return planRepo.findByServiceType(serviceType);
	}
}
