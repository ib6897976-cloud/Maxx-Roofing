
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onEstimateClick: (e: React.MouseEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ onEstimateClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Track active section via IntersectionObserver
    const sections = ['home', 'services', 'reviews', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-2 group relative z-50 cursor-pointer outline-none"
        >
          <div className="bg-red-600 text-white p-2 rounded transform -skew-x-12 transition-transform group-hover:scale-110">
            <span className="font-display font-bold text-2xl tracking-tight">MAXX</span>
          </div>
          <span className={`font-display font-bold text-2xl tracking-tight transition-colors ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}>ROOFING</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all relative py-1 text-sm lg:text-base cursor-pointer outline-none ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                } hover:text-red-600`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transition-transform origin-left ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`}></span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:5551234567" className={`font-bold hidden lg:flex items-center gap-2 transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'} hover:text-red-600`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 123-4567
          </a>
          <button
            onClick={onEstimateClick}
            className="bg-red-600 hover:bg-red-700 text-white px-5 md:px-8 py-3 rounded font-bold transition-all shadow-lg hover:shadow-red-500/30 active:scale-95 text-xs md:text-sm lg:text-base whitespace-nowrap"
          >
            FREE ESTIMATE
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-900 relative z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl font-display font-bold tracking-wide transition-colors outline-none cursor-pointer ${
                activeSection === item.id ? 'text-red-600 underline decoration-4 underline-offset-8' : 'text-slate-900'
              }`}
            >
              {item.name.toUpperCase()}
            </button>
          ))}
          <div className="w-full max-w-xs h-px bg-slate-100 my-4"></div>
          <a href="tel:5551234567" className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 123-4567
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
