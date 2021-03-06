package com.example.registration.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.registration.model.Invoice;
import com.example.registration.repository.InvoiceRepository;

@Service
@Transactional
public class InvoiceGenerationService {
	@Autowired
	private InvoiceRepository invoiceRepo;
	public Invoice saveInvoice(Invoice invoice) {
		return invoiceRepo.save(invoice);
	}
	public List<Invoice> fetchInvoiceByUserId(Integer userId) {
		return invoiceRepo.findByUserId(userId);
	}
	public List<Invoice> fetchAllIssues(){
		return invoiceRepo.findAll();
	}
}
