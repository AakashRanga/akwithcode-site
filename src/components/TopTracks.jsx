import React from 'react';

const TopTracks = () => {
  const tracks = [
    {
      title: "Kernel Development Mastery",
      desc: "Building your own OS from scratch using low-level C and Assembly.",
      level: "Advanced",
      levelColor: "bg-accent text-white rotate-12",
      icon: "developer_mode_tv",
      modules: "48 Modules",
      author: "AK"
    },
    {
      title: "Offensive Security Ops",
      desc: "Learn advanced penetration testing techniques used by top security labs.",
      level: "Intermediate",
      levelColor: "bg-primary text-background-dark -rotate-12",
      icon: "shield_lock",
      modules: "32 Modules",
      author: "X"
    }
  ];

  return (
    <section className="bg-primary/5 p-8 rounded-2xl border border-primary/20 border-dashed">
      <div className="flex items-center gap-4 mb-8">
        <span className="material-symbols-outlined text-primary text-4xl">grade</span>
        <h3 className="text-3xl font-black uppercase tracking-tighter italic">Top Rated <span className="text-primary">Tracks</span></h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tracks.map((track, i) => (
          <div key={i} className="bg-surface-dark border border-white/5 p-6 glow-border transition-all group relative">
            <div className={`absolute -top-3 -right-3 ${track.levelColor} text-[9px] font-black px-3 py-1 uppercase shadow-lg`}>
              Level: {track.level}
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 shrink-0 bg-primary/20 flex items-center justify-center rounded">
                <span className="material-symbols-outlined text-primary text-3xl">{track.icon}</span>
              </div>
              <div>
                <h5 className="text-lg font-bold leading-tight mb-2 uppercase">{track.title}</h5>
                <p className="text-xs text-slate-400 mb-4 tracking-wide">{track.desc}</p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-primary border border-background-dark flex items-center justify-center text-[8px] font-bold">
                      {track.author}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase">{track.modules}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTracks;
