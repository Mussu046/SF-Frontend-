
import React, { useState } from 'react';
import { LeadService } from '../services/api';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Solar Energy Solutions',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await LeadService.submitInquiry(formData);
      setSubmitted(true);
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Frame */}
      <section className="h-[40vh] bg-blue-950 flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-6xl font-extrabold text-white uppercase tracking-tighter">LET'S CONNECT</h1>
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Empowering Your Infrastructure Journey</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-10 pb-32">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          {/* Info Panel */}
          <div className="lg:w-2/5 bg-gray-950 p-16 text-white space-y-16">
            <div className="space-y-4">
               <h2 className="text-4xl font-extrabold uppercase tracking-tighter">Office <br />Hub</h2>
               <div className="h-2 w-16 bg-blue-600 rounded-full"></div>
            </div>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="bg-blue-600/20 p-4 rounded-2xl group-hover:bg-blue-600 transition-all">
                  <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-blue-400 tracking-widest mb-1">Visit Us</p>
                  <p className="text-lg font-bold text-gray-300">#89/1, 1st main, RT Nagar, Bangalore</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="bg-blue-600/20 p-4 rounded-2xl group-hover:bg-blue-600 transition-all">
                  <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-blue-400 tracking-widest mb-1">Call Us</p>
                  <p className="text-lg font-bold text-gray-300">+91 9606644163</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="bg-blue-600/20 p-4 rounded-2xl group-hover:bg-blue-600 transition-all">
                  <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-blue-400 tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-bold text-gray-300">info@safafloratech.com</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/5 space-y-4">
               <h4 className="text-sm font-black uppercase tracking-widest text-gray-500">Operation Hours</h4>
               <p className="text-gray-300 font-bold">Mon – Sat | 09:00 AM – 06:00 PM</p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:w-3/5 p-16 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl shadow-xl">✓</div>
                <h2 className="text-5xl font-extrabold text-blue-950 uppercase tracking-tighter">Inquiry Logged!</h2>
                <p className="text-gray-500 text-xl font-medium max-w-sm">Our technical team has received your request. Expect a briefing within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-blue-600 font-black uppercase tracking-widest hover:text-black transition-colors">Submit Another Request</button>
              </div>
            ) : (
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-extrabold text-blue-950 uppercase tracking-tighter">Inquiry Details</h2>
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.2em]">All fields are mandatory for accurate project quoting</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Legal Full Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-5 outline-none font-bold text-lg transition-all" 
                        placeholder="e.g. Rahul Sharma" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-5 outline-none font-bold text-lg transition-all" 
                        placeholder="rahul@company.com" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Select Primary Solution</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-5 outline-none font-bold text-lg transition-all cursor-pointer"
                    >
                      <option>Solar Energy Solutions</option>
                      <option>Fencing Solutions</option>
                      <option>Industrial Landscaping</option>
                      <option>Bulk Plant Supply</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Project Brief & Site Location</label>
                    <textarea 
                      required
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-5 outline-none font-bold text-lg transition-all resize-none" 
                      placeholder="Describe the scope, site dimensions, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button 
                    disabled={loading}
                    type="submit" 
                    className={`w-full bg-blue-600 text-white font-extrabold py-8 rounded-[2rem] transition-all shadow-2xl flex items-center justify-center gap-4 text-2xl uppercase tracking-widest hover:bg-black active:scale-95 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                       <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-8 h-8" /> Transmit Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Visual Map Anchor */}
      <div className="h-[500px] w-full mt-24 grayscale brightness-50 contrast-150 hover:grayscale-0 transition-all duration-1000">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.050686414986!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
