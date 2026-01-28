
import React from 'react';

const services = [
  {
    name: 'Roof Replacements',
    desc: 'Full-scale architectural shingle replacements using premium lifetime systems. We handle everything from tear-off to final nail.',
    img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Roof Repairs',
    desc: 'Damage from wind, hail, or age? We provide durable repairs that blend seamlessly with your existing roof.',
    img: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Leak Detection',
    desc: 'Finding mystery leaks is our specialty. We stop the water before it destroys your drywall and attic insulation.',
    img: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Gutters & Drainage',
    desc: 'High-capacity seamless gutters and downspouts to direct water away from your foundation effectively.',
    img: 'https://images.unsplash.com/photo-1605333146437-080c98f99e33?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Vent Boot Replacement',
    desc: 'One of the most common causes of leaks. We replace old rubber boots with bulletproof metal or composite options.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Inspections & Estimating',
    desc: 'Real estate inspections or storm damage assessments. We provide honest reports with photos of every issue.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
  }
];

interface ServicesProps {
  onEstimateClick: (e: React.MouseEvent) => void;
}

const Services: React.FC<ServicesProps> = ({ onEstimateClick }) => {
  return (
    <section id="services" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
            <p className="text-4xl md:text-5xl font-display font-bold">Solutions for Every Roof Type.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="group relative bg-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{s.name}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {s.desc}
                </p>
                <button 
                  onClick={onEstimateClick}
                  className="inline-flex items-center gap-2 text-red-500 font-bold hover:text-red-400 outline-none"
                >
                  GET A FREE ESTIMATE
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
