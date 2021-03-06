package com.example.registration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.registration.model.RechargePlan;

@Repository
public interface RechargePlanRepository extends JpaRepository<RechargePlan, Integer>{
	
	@Query("select p from RechargePlan p where p.serviceType=?1")
	List<RechargePlan> findByServiceType(String serviceType);
	
}
 