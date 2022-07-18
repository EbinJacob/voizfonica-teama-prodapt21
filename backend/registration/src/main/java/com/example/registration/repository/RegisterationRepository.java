package com.example.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.registration.model.User;

@Repository
public interface RegisterationRepository extends JpaRepository<User, Integer>{
	public User findByEmailid(String emailId);
	public User findByEmailidAndPassword(String emailId, String password);
	public User findById(int id);
	
	@Query("update User u set u.enabled=true where u.emailid=?1")
	@Modifying
	public void enable(String emailid);
	
	@Query("select u from User u where u.verificationCode=?1")
	public User findByVerificationCode(String code);
	
	@Query("update User u set u.currentPlanId=?2 where u.id=?1")
	@Modifying
	public void setCurrentPlan(Integer userId,Integer planId);
}

