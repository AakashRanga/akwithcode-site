import React from 'react';

const Hero = () => {
  return (
    <section className="relative group h-[500px] overflow-hidden rounded-xl border border-primary/20 bg-surface-dark">
      <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 flex items-center p-12 z-20">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block bg-accent text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] vintage-label">
            Upcoming Workshop
          </div>
          <h2 className="text-6xl font-bold leading-none tracking-tighter uppercase italic text-white">
            The <span className="text-primary underline decoration-accent">Cyberpunk</span><br />Architecture
          </h2>
          <p className="text-lg text-slate-300 font-light max-w-lg leading-relaxed">
            Master the art of scalable backend systems using Rust and distributed ledgers. Join the elite network of developers shaping the next era.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-primary text-background-dark px-8 py-4 font-black uppercase tracking-widest hover:bg-white transition-all">
              Register Now
            </button>
            <button className="border border-white/20 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              Details
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-2/3 h-full grayscale hover:grayscale-0 transition-all duration-700">
        <img 
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOdqgqJCmQkyPZ3-ULbUPMi0WiTpM6VttW-Bwp1slBtzUMHBTeP0J-xzpFNRdHBz-lU4pCtrkJr7P28AB3AAM-Lp1mSLfyh__baVRtES5h8BaH5uPju0P1XaY6UkxmQjEifw5ptLUKxyuzzyazzDIay3cOks75_KslmMX1yc_g6NPXbHsOZuKNQkZMKKx2MmeUVbtAI9EgL9yzFfhtWoJ169BpC900Gz5t8CKmowUO0zxhbJqDY4xtybwOmi1W4KpM2wAImCoCSU0" 
          alt="Futuristic cyber security server room"
        />
      </div>
      <div className="absolute bottom-8 left-12 z-20 flex gap-2">
        <div className="w-12 h-1 bg-primary"></div>
        <div className="w-12 h-1 bg-white/20"></div>
        <div className="w-12 h-1 bg-white/20"></div>
      </div>
    </section>
  );
};

export default Hero;
