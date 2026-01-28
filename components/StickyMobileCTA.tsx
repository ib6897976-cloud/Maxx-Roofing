
import React from 'react';

interface StickyMobileCTAProps {
  onEstimateClick: (e: React.MouseEvent) => void;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onEstimateClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <a 
        href="tel:5551234567" 
        className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        CALL
      </a>
      <button 
        onClick={onEstimateClick}
        className="flex-[2] bg-red-600 text-white py-3 rounded-lg font-bold flex items-center justify-center shadow-lg shadow-red-500/30 active:scale-95"
      >
        FREE ESTIMATE
      </button>
    </div>
  );
};

export default StickyMobileCTA;
