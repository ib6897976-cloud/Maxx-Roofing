
import React from 'react';

interface HeroProps {
  onEstimateClick: (e: React.MouseEvent) => void;
}

const Hero: React.FC<HeroProps> = ({ onEstimateClick }) => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=2000')` }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded mb-6 text-sm font-bold tracking-wider uppercase">
            <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
            Rated #1 Roofing in the Area
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Reliable Roofing Done Right the <span className="text-red-500 italic">First Time.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
            Trusted local professionals delivering quality work, premium materials, and zero headaches. From leak repairs to full replacements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={onEstimateClick}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-bold text-lg text-center transition-all transform hover:scale-105 shadow-xl shadow-red-900/20"
            >
              GET A FREE ESTIMATE
            </button>
            <a 
              href="tel:5555555555" 
              className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded font-bold text-lg text-center transition-all"
            >
              CALL 555-555-5555
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="text-yellow-400 text-2xl">★★★★★</div>
              <div className="text-white">
                <p className="font-bold text-lg leading-none">5.0 Rating</p>
                <p className="text-sm opacity-80">on Google Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-white">
                <p className="font-bold text-lg leading-none">On-Time</p>
                <p className="text-sm opacity-80">& Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
