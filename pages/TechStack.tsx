
import React from 'react';

const TechStack: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 border-b pb-6">Technical Architecture</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="p-8 bg-forest/5 rounded-2xl border border-forest/20">
              <h2 className="text-2xl font-bold text-forest mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                Backend: Spring Boot
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-forest mr-2">✔</span> 
                  <span><strong>Spring MVC & REST:</strong> Handling API endpoints for CRM leads and product management.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest mr-2">✔</span> 
                  <span><strong>Spring Data JPA:</strong> Abstracting database interactions with Hibernate.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest mr-2">✔</span> 
                  <span><strong>Spring Security:</strong> JWT based authentication for the Admin Portal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest mr-2">✔</span> 
                  <span><strong>DB:</strong> PostgreSQL (Enterprise Ready) or MySQL.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-solar/5 rounded-2xl border border-solar/20">
              <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                Frontend: React + TS
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-forest mr-2">✔</span> 
                  <span><strong>React 18:</strong> Modular component-based architecture for scalability.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest mr-2">✔</span> 
                  <span><strong>Tailwind CSS:</strong> Utility-first styling for high-performance and modern UX.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest mr-2">✔</span> 
                  <span><strong>TypeScript:</strong> Type safety ensuring robust code quality.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest mr-2">✔</span> 
                  <span><strong>State Management:</strong> Context API or Hooks for local data persistence.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-4">Enterprise Workflow</h3>
              <p className="text-gray-600 mb-6">The system is designed to be fully scalable. Here is the data flow for a customer inquiry:</p>
              <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-50 rounded-2xl gap-4">
                <div className="text-center p-4">
                  <div className="font-bold text-forest">Frontend</div>
                  <div className="text-xs text-gray-500">React Form Submission</div>
                </div>
                <div className="text-forest">→</div>
                <div className="text-center p-4 border-2 border-dashed border-forest rounded-xl">
                  <div className="font-bold text-forest">Spring Boot API</div>
                  <div className="text-xs text-gray-500">Validation & Logic</div>
                </div>
                <div className="text-forest">→</div>
                <div className="text-center p-4">
                  <div className="font-bold text-forest">PostgreSQL</div>
                  <div className="text-xs text-gray-500">Persistent Storage</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
