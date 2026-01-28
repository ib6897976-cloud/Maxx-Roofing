
import React from 'react';

const features = [
  {
    title: 'Free, Fast Estimates',
    description: 'We respect your time. Get a comprehensive quote within 24-48 hours of your request.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Premium Materials',
    description: 'We exclusively use high-grade architectural shingles and underlayment built to last 50+ years.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Clean Job Sites',
    description: 'No stray nails or debris. We treat your property with respect and leave it spotless every day.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    )
  },
  {
    title: 'Experienced Crews',
    description: 'Our team consists of lifelong roofers, not seasonal laborers. Craftsmanship is our priority.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Maxx Roofing</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Built for Durability. <br/>Managed with Care.</p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="group p-8 border border-slate-100 rounded-2xl hover:border-red-100 hover:bg-red-50/30 transition-all duration-300">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
