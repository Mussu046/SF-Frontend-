
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-forest py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-solar/10 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">About Us</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Pioneering sustainable infrastructure through the harmony of nature and modern technology.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-solar/20 rounded-2xl -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" 
                  alt="Safa Floratech Team" 
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest/20 rounded-2xl -z-10"></div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-forest text-sm font-bold tracking-[0.2em] uppercase">Welcome to Safa Floratech</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-heading text-dark leading-tight">Blending nature and infrastructure.</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Safa Floratech, we blend nature, sustainability, and smart infrastructure to create greener, stronger, and more beautiful spaces. We are a multi-service company specializing in solar energy solutions, fencing systems, plants, gardening, and landscape development.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With a strong commitment to quality, innovation, and environmental responsibility, Safa Floratech has grown into a trusted name for clients seeking reliable outdoor and energy solutions under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-forest text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading">Comprehensive Green Solutions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: '☀️', 
                title: 'Solar Energy Solutions', 
                desc: 'Advanced renewable systems including rooftop solar, water pumps, heaters, and street lights engineered for efficiency and durability.' 
              },
              { 
                icon: '🔒', 
                title: 'Fencing Solutions', 
                desc: 'Security systems including barbed wire, fixed knot, chain link, and high-security razor fencing for farms, industries, and homes.' 
              },
              { 
                icon: '🌱', 
                title: 'Plants & Green Solutions', 
                desc: 'Wide variety of healthy indoor, outdoor, ornamental, and avenue plants selected to enhance aesthetics and sustainability.' 
              },
              { 
                icon: '🪴', 
                title: 'Decorative Planters', 
                desc: 'Style-focused planter boxes and stands designed to complement modern, traditional, and commercial spaces with high durability.' 
              },
              { 
                icon: '🌿', 
                title: 'Gardening Services', 
                desc: 'Professional maintenance ensuring vibrant green spaces through expert pruning, soil care, and seasonal management.' 
              },
              { 
                icon: '🏞️', 
                title: 'Landscape Development', 
                desc: 'Complete transformation of empty land into functional, beautiful, and eco-friendly environments balancing design with nature.' 
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-forest/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-solar transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-forest text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="inline-block p-4 bg-white/10 rounded-2xl mb-4">
                 <svg className="w-10 h-10 text-solar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </div>
              <h3 className="text-3xl font-bold font-heading">Our Vision</h3>
              <p className="text-white/80 text-lg leading-relaxed italic">
                "To become a leading force in sustainable infrastructure and green development, creating eco-friendly spaces powered by renewable energy and thoughtful landscaping."
              </p>
            </div>
            <div className="space-y-6">
              <div className="inline-block p-4 bg-white/10 rounded-2xl mb-4">
                 <svg className="w-10 h-10 text-solar" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
              </div>
              <h3 className="text-3xl font-bold font-heading">Our Mission</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center"><span className="w-2 h-2 bg-solar rounded-full mr-4"></span> To deliver high-quality, reliable, and affordable solutions</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-solar rounded-full mr-4"></span> To promote renewable energy and green living</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-solar rounded-full mr-4"></span> To combine technology, nature, and craftsmanship</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-solar rounded-full mr-4"></span> To build long-term relationships through trust and performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-solar p-12 md:p-20 rounded-[3rem] text-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold font-heading mb-12 text-center">Why Choose Safa Floratech?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  'One-stop solution for solar, fencing, and landscaping',
                  'Experienced and skilled team',
                  'Quality materials and modern techniques',
                  'Customer-focused approach',
                  'Commitment to sustainability and innovation',
                  'Proven track record across industries'
                ].map((reason, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-forest rounded-full flex items-center justify-center mt-1 shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="font-bold text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-2xl text-gray-500 font-light italic max-w-4xl mx-auto leading-relaxed">
            "At Safa Floratech, we don’t just provide services—we build sustainable futures and greener environments."
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
