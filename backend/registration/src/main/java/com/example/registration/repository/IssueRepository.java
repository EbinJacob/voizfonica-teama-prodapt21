package com.example.registration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.registration.model.Issue;

@Repository
public interface IssueRepository  extends JpaRepository<Issue, Integer> {
	
	@Query("select i from Issue i where i.userId=?1")
	List<Issue> findByUserId(int userId);
	
	@Query("update Issue i set i.active=false where i.id=?1")
	@Modifying
	public void resolveIssue(int id);
}
