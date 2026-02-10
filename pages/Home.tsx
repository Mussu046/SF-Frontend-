
import React from 'react';
import Hero from '../components/Hero';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { val: '50+', label: 'Solar Rooftops' },
              { val: '100+', label: 'Fencing Projects' },
              { val: '200+', label: 'Residences' },
              { val: '30+', label: 'Solar Pumps' },
              { val: '25+', label: 'Landscapes' },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-3xl font-bold text-forest mb-2">{stat.val}</div>
                <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-forest text-sm font-bold tracking-[0.2em] uppercase mb-4">Core Solutions</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-heading text-dark">Enterprise Eco-Systems</h3>
            </div>
            <Link to="/services" className="mt-4 md:mt-0 text-forest font-bold hover:underline flex items-center">
              View All Services <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-forest transition-colors">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-forest text-sm font-bold uppercase tracking-wider hover:opacity-75">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-forest text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-solar/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-solar text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Commitment</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading leading-tight">Driving sustainability with modern engineering.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Trusted Solutions', desc: 'Over a decade of experience delivering high-performance infrastructure.' },
              { title: 'Eco-Friendly Focus', desc: 'Minimizing carbon footprints through solar and biodiversity solutions.' },
              { title: 'On-Time Delivery', desc: 'Precision project management ensuring timelines are strictly followed.' },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-solar text-forest flex items-center justify-center rounded-lg font-bold text-xl">0{i+1}</div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-gray-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h2 className="text-forest text-sm font-bold tracking-[0.2em] uppercase mb-4">Testimonials</h2>
                <h3 className="text-3xl md:text-5xl font-bold font-heading">What Our Clients Say</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Ravi Kumar', role: 'Farm Owner', quote: 'Excellent solar installation and professional fencing work. Highly recommended.' },
                    { name: 'Anita Sharma', role: 'Business Owner', quote: 'Their landscaping transformed our commercial space beautifully. Professional team.' },
                    { name: 'Corporate Green', role: 'Industrial Manager', quote: 'Reliable team, quality plants, and timely delivery of our 50-acre fencing project.' },
                ].map((t, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex text-solar mb-4">
                            {[...Array(5)].map((_, j) => (
                                <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            ))}
                        </div>
                        <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
                        <div>
                            <div className="font-bold text-dark">{t.name}</div>
                            <div className="text-sm text-forest font-semibold uppercase tracking-tighter">{t.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
            <div className="bg-gradient-to-br from-forest to-green-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-solar/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-heading">Ready to transform your space?</h2>
                    <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">Join the hundreds of sustainable property owners who trust SAFA FLORATECH for energy and infrastructure.</p>
                    <Link to="/contact" className="inline-block bg-solar text-dark px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">Get a Free Consultation</Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
