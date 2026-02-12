package com.sf.backend.controller;

import com.sf.backend.model.Lead;
import com.sf.backend.service.LeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin(origins = "http://localhost:5173") // Crucial for React communication
public class LeadController {

    private final LeadService leadService;

    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    @PostMapping
    public Lead createLead(@RequestBody Lead lead) {
        return leadService.saveLead(lead);
    }

    @GetMapping
    public List<Lead> getLeads() {
        return leadService.getAllLeads();
    }

    @PatchMapping("/{id}/status")
    public Lead updateStatus(@PathVariable Long id,
                             @RequestBody Map<String, String> body) {

        String newStatus = body.get("status");

        return leadService.updateLeadStatus(id, newStatus);
    }
}