
import React from 'react';

const reviews = [
  {
    name: 'John Doe',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5,
    tag: 'Leak Repair'
  },
  {
    name: 'Jane Doe',
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    stars: 5,
    tag: 'Full Replacement'
  },
  {
    name: 'Jebediah Doe',
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    stars: 5,
    tag: 'Roof Repair'
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Don't Take Our Word For It.</h2>
          <p className="text-xl text-slate-600">See what your neighbors are saying about Maxx Roofing.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 tracking-wider">
                  {r.tag}
                </div>
                <p className="text-slate-700 italic leading-relaxed text-lg mb-8">
                  "{r.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {r.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1">{r.name}</h4>
                  <p className="text-slate-500 text-sm">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-full shadow-sm">
            {/* Fix: Using URL encoding %22 instead of backslash-escaped quotes to avoid JSX parsing errors where the parser incorrectly identifies 'G' as a property */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
            <span className="font-bold text-slate-800">4.9 / 5.0 Rating based on 120+ Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
