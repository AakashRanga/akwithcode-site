import React from 'react';

const Sidebar = () => {
  return (
    <aside className="lg:col-span-4 space-y-12">
      {/* Trending Topics */}
      <section>
        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-6 flex items-center gap-2">
          <span className="w-8 h-px bg-slate-700"></span>
          Trending Topics
        </h4>
        <div className="flex flex-wrap gap-2">
          {["#Kubernetes", "#Web3.0", "#DevOps", "#AIGovernance", "#ZeroTrust", "#Quantum"].map(topic => (
            <a key={topic} className="bg-surface-dark border border-primary/20 px-3 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all" href="#">{topic}</a>
          ))}
        </div>
      </section>

      {/* Recent Terminal Feed */}
      <section>
        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-6 flex items-center gap-2">
          <span className="w-8 h-px bg-slate-700"></span>
          Recent Data
        </h4>
        <div className="space-y-6">
          {[
            { date: "01 NOV 2023", title: "Deploying Microservices with confidence on Bare Metal" },
            { date: "28 OCT 2023", title: "Post-Quantum Cryptography: Why it matters today" },
            { date: "25 OCT 2023", title: "The Modern Data Stack: A retrospective" }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <p className="text-[10px] font-bold text-primary uppercase mb-1">{item.date}</p>
              <h5 className="font-bold text-sm leading-snug group-hover:underline uppercase tracking-tight">{item.title}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-accent p-6 text-white relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 opacity-10">
          <span className="material-symbols-outlined text-[120px] rotate-12">sensors</span>
        </div>
        <h4 className="text-xl font-black uppercase italic mb-2">Join the Signal</h4>
        <p className="text-xs mb-6 text-white/80 leading-relaxed uppercase tracking-widest">Weekly deep-dives into the architecture of the future. No noise, just signals.</p>
        <div className="space-y-3">
          <input className="w-full bg-white/10 border-white/20 placeholder:text-white/40 text-xs py-3 px-4 focus:ring-0 focus:border-white outline-none" placeholder="ENCRYPTED_EMAIL" type="email" />
          <button className="w-full bg-white text-accent font-black py-3 text-xs uppercase tracking-[0.2em] hover:bg-background-dark hover:text-white transition-colors">Subscribe</button>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
