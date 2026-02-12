package com.sf.backend.service;

import com.sf.backend.model.Lead;
import com.sf.backend.repository.LeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LeadService {

    private final LeadRepository leadRepository;

    public LeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    public Lead saveLead(Lead lead) {
        return leadRepository.save(lead);
    }

    public List<Lead> getAllLeads() {
        return leadRepository.findAll();
    }

    public Lead updateLeadStatus(Long id, String newStatus) {
        Lead lead = leadRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Lead not found with id: " + id));

        lead.setStatus(newStatus);

        return leadRepository.save(lead);
    }
}