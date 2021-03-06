package com.example.registration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.registration.model.Invoice;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer>{
	@Query("select i from Invoice i where i.userId=?1")
	List<Invoice> findByUserId(Integer userId);
}
