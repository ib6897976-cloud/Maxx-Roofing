
import React, { useState } from 'react';

interface ContactFormProps {
  isModal?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isModal = false }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`bg-white p-8 md:p-12 ${isModal ? '' : 'rounded-2xl shadow-2xl border border-slate-100'} text-center`}>
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Estimate Requested!</h3>
        <p className="text-slate-600">Thanks for reaching out. A Maxx Roofing specialist will call you within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-red-600 font-bold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white ${isModal ? 'p-8 md:p-12' : 'p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-100'}`}>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Your Free Estimate</h3>
      <p className="text-slate-500 mb-6">Fill out the form below and we'll get back to you shortly.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="555-555-5555"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all" 
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Service Address</label>
          <input 
            required
            type="text" 
            placeholder="123 Roofing Lane, City"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Service Needed</label>
          <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all bg-white">
            <option>Full Roof Replacement</option>
            <option>Leak Repair</option>
            <option>Gutter Installation</option>
            <option>General Inspection</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Brief Description (Optional)</label>
          <textarea 
            rows={isModal ? 3 : 4}
            placeholder="Tell us about the issue..."
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all"
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-red-200 active:scale-95"
        >
          SEND REQUEST
        </button>
        <p className="text-center text-xs text-slate-500 pt-2">
          By clicking, you agree to be contacted by Maxx Roofing via call or text.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
