
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import GeminiAssistant from './components/GeminiAssistant';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen">
      <Analytics />
      <Header onEstimateClick={openModal} />
      <main>
        <section id="home">
          <Hero onEstimateClick={openModal} />
        </section>
        <Features />
        <section id="services">
          <Services onEstimateClick={openModal} />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <Process onEstimateClick={openModal} />
        
        {/* Contact section remains for SEO and scroll-depth utility, but primary CTAs now use Modal */}
        <section id="contact" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
                  Ready for a Roof You Can Trust?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Get your free, no-obligation estimate today. Our experts will inspect your property and provide a clear, honest breakdown of what's needed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-600 flex items-center justify-center rounded-full text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Call Us Anytime</h4>
                      <p className="text-slate-600 font-medium">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-800 flex items-center justify-center rounded-full text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Service Area</h4>
                      <p className="text-slate-600">Serving Local County & Surrounding Areas</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA onEstimateClick={openModal} />
      <GeminiAssistant />
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm isModal={true} />
      </Modal>
    </div>
  );
};

export default App;
