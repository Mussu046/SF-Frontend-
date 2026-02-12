import { Lead } from '../types';

// Points to your Spring Boot server (standard port 8080)
const API_BASE_URL = 'http://localhost:8080/api/leads';

/**
 * Service layer for CRM and Lead management.
 * Now connects directly to the Spring Boot REST API.
 */
export const LeadService = {
  
  // GET all leads for Admin CRM
  async getAllLeads(): Promise<Lead[]> {
    const response = await fetch(API_BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch leads from the server');
    }

    return response.json();
  },

  // POST a new inquiry from Contact Page
  async submitInquiry(leadData: Omit<Lead, 'id' | 'status' | 'date'>): Promise<Lead> {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Maps React fields to Spring Boot Lead.java fields
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit inquiry to the database');
    }

    return response.json();
  },

  // PATCH update lead status
  // Note: Ensure you add a @PatchMapping in your LeadController to support this!
  async updateLeadStatus(id: string, status: Lead['status']): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });

    if (!response.ok) {
      throw new Error('Could not update lead status');
    }
  }
};