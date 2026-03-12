import React from 'react';

const SaaSSection = () => {
  return (
    <section className="bg-surface-dark border-l-4 border-primary p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
      <div className="relative z-10 flex items-center gap-5">
        <div className="bg-primary/10 p-3 rounded-lg">
          <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
        </div>
        <div>
          <h4 className="text-xl font-black uppercase tracking-tighter italic">SaaS Projects <span className="text-primary">We Build</span></h4>
          <p className="text-xs text-slate-400 uppercase tracking-[0.1em] mt-1">Custom high-performance architecture for your next big idea.</p>
        </div>
      </div>
      <div className="relative z-10 shrink-0">
        <button className="bg-primary text-background-dark px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(179,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none">
          Connect with Us
        </button>
      </div>
    </section>
  );
};

export default SaaSSection;
