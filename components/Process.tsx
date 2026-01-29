
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Request an Estimate',
    desc: 'Call or use our online form to schedule your free inspection at a time that works for you.'
  },
  {
    num: '02',
    title: 'On-Site Inspection',
    desc: 'Our pros examine your roof, gutters, and attic to find the root cause of issues.'
  },
  {
    num: '03',
    title: 'Clear Pricing',
    desc: 'We provide a detailed quote with zero hidden fees and multiple repair options.'
  },
  {
    num: '04',
    title: 'Pro Installation',
    desc: 'Our experienced crews work efficiently, keeping your site clean and safe.'
  }
];

interface ProcessProps {
  onEstimateClick: (e: React.MouseEvent) => void;
}

const Process: React.FC<ProcessProps> = ({ onEstimateClick }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">How It Works</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-slate-900">Simple, Reassuring Process.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-slate-100 z-0"></div>

          {steps.map((s, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white border-2 border-red-600 rounded-full flex items-center justify-center mb-8 shadow-xl">
                <span className="text-2xl font-display font-bold text-red-600">{s.num}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Need Roofing You Can Actually Trust?</h3>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Stop worrying about leaks and cowboy contractors. Get the professional results you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5555555555" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-red-900/30">
              CALL NOW
            </a>
            <button 
              onClick={onEstimateClick}
              className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 rounded-lg font-bold text-lg transition-all"
            >
              GET FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
