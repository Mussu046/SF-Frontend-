
import React, { useState, useEffect } from 'react';
import { LeadService } from '../services/api';
import { Lead } from '../types';

const AdminCRM: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const data = await LeadService.getAllLeads();
      setLeads(data);
    } catch (err) {
      setError('Failed to fetch lead data from server.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: Lead['status']) => {
    try {
      await LeadService.updateLeadStatus(id, status);
      await fetchLeads(); // Refresh data
    } catch (err) {
      alert('Error updating status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Persistent UI */}
      <aside className="w-80 bg-blue-950 text-white hidden xl:flex flex-col">
        <div className="p-10 border-b border-white/10">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black italic">SF</div>
             <h2 className="text-xl font-extrabold tracking-tighter uppercase">Admin Core</h2>
          </div>
        </div>
        <nav className="p-6 space-y-4 flex-grow">
          <div className="p-4 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-2xl font-bold cursor-pointer">Dashboard</div>
          <div className="p-4 text-white/50 hover:text-white transition-colors cursor-pointer font-bold">Inquiry Management</div>
          <div className="p-4 text-white/50 hover:text-white transition-colors cursor-pointer font-bold">Project Reports</div>
        </nav>
        <div className="p-8 mt-auto border-t border-white/10 text-xs text-white/30 font-bold uppercase tracking-widest">
           System v2.4.0-STABLE
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-16">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold text-blue-950 tracking-tighter uppercase leading-none">CRM Pipeline</h1>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Live Synchronized Lead Tracking</p>
          </div>
          <div className="flex items-center gap-6">
             <div className="text-right">
                <p className="text-gray-900 font-black text-lg">Deepak R.</p>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">Operations Lead</p>
             </div>
             <div className="w-16 h-16 bg-blue-100 rounded-[1.5rem] border-2 border-white shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin" />
             </div>
          </div>
        </header>

        {loading ? (
          <div className="space-y-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="h-24 w-full bg-white rounded-[2rem] animate-pulse border border-gray-100"></div>
             ))}
          </div>
        ) : error ? (
           <div className="bg-red-50 text-red-600 p-10 rounded-[3rem] text-center font-bold">
              {error}
           </div>
        ) : (
          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="p-8 font-black text-gray-400 uppercase text-xs tracking-[0.2em]">Applicant Details</th>
                  <th className="p-8 font-black text-gray-400 uppercase text-xs tracking-[0.2em]">Requirement</th>
                  <th className="p-8 font-black text-gray-400 uppercase text-xs tracking-[0.2em]">Timestamp</th>
                  <th className="p-8 font-black text-gray-400 uppercase text-xs tracking-[0.2em]">Flow Status</th>
                  <th className="p-8 font-black text-gray-400 uppercase text-xs tracking-[0.2em]">Operational Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-20 text-center text-gray-400 font-bold uppercase tracking-widest">No inquiries recorded yet</td>
                  </tr>
                ) : leads.map((lead) => (
                  <tr key={lead.id} className="group hover:bg-blue-50/30 transition-all">
                    <td className="p-8">
                      <div className="font-extrabold text-blue-950 text-lg leading-tight">{lead.name}</div>
                      <div className="text-sm text-gray-400 font-bold tracking-tight">{lead.email}</div>
                    </td>
                    <td className="p-8">
                      <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-black uppercase tracking-tight">{lead.service}</span>
                    </td>
                    <td className="p-8 text-sm text-gray-500 font-bold">{lead.date}</td>
                    <td className="p-8">
                      <span className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest ${
                        lead.status === 'New' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                        lead.status === 'In Progress' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                        'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-8">
                      <select 
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                        className="bg-gray-50 border-2 border-transparent focus:border-blue-600 rounded-xl p-3 text-xs font-black uppercase tracking-widest outline-none cursor-pointer hover:bg-white transition-all"
                      >
                        <option value="New">New Lead</option>
                        <option value="In Progress">Move to Progress</option>
                        <option value="Completed">Finalize Close</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-blue-950 p-12 rounded-[4rem] text-white space-y-6">
              <h3 className="text-3xl font-extrabold uppercase tracking-tighter">Backend Integration Flow</h3>
              <div className="space-y-4">
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-sm font-black">1</div>
                    <p className="text-blue-100/70 font-medium">Data is currently persistence-ready in <strong>LeadService</strong>. Connect Spring Boot to the REST endpoints listed in the service layer.</p>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-sm font-black">2</div>
                    <p className="text-blue-100/70 font-medium">Use Spring Security + JWT to wrap the Admin route for enterprise security.</p>
                 </div>
              </div>
           </div>
           <div className="bg-white p-12 rounded-[4rem] border border-gray-100 space-y-6 shadow-sm">
              <h3 className="text-3xl font-extrabold text-blue-950 uppercase tracking-tighter">Next Milestone</h3>
              <p className="text-gray-500 font-medium leading-relaxed">Transition the frontend state from <code className="bg-gray-100 px-2 py-1 rounded">localStorage</code> to a persistent <code className="bg-gray-100 px-2 py-1 rounded">PostgreSQL</code> instance via Spring Boot Controllers.</p>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-xl">Documentation Help</button>
           </div>
        </div>
      </main>
    </div>
  );
};

export default AdminCRM;
