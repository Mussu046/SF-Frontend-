
import { Lead } from '../types';

// In a real environment, this would come from process.env.API_BASE_URL
const API_BASE_URL = 'https://api.safafloratech.com/v1';

/**
 * Service layer for CRM and Lead management
 * Currently falls back to localStorage for a "simulated persistence" experience
 * before you plug in your real Spring Boot endpoints.
 */
export const LeadService = {
  // GET all leads for Admin CRM
  async getAllLeads(): Promise<Lead[]> {
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const stored = localStorage.getItem('safa_leads');
    if (stored) return JSON.parse(stored);
    
    // Return empty if nothing exists
    return [];
  },

  // POST a new inquiry from Contact Page
  async submitInquiry(leadData: Omit<Lead, 'id' | 'status' | 'date'>): Promise<Lead> {
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const newLead: Lead = {
      ...leadData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'New',
      date: new Date().toISOString().split('T')[0]
    };

    const current = await this.getAllLeads();
    localStorage.setItem('safa_leads', JSON.stringify([newLead, ...current]));
    
    return newLead;
  },

  // PATCH update lead status
  async updateLeadStatus(id: string, status: Lead['status']): Promise<void> {
    const leads = await this.getAllLeads();
    const updated = leads.map(l => l.id === id ? { ...l, status } : l);
    localStorage.setItem('safa_leads', JSON.stringify(updated));
  }
};
