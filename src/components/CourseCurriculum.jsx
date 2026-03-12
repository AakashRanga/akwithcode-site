import React from 'react';

const CourseCurriculum = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden pt-16">
      <main className="flex-1 flex flex-col md:flex-row gap-6 p-6 max-w-[1440px] mx-auto w-full">
        {/* Sidebar (System Stats) */}
        <aside className="w-full md:w-72 flex flex-col gap-6 order-2 md:order-1">
          <div className="terminal-border bg-surface-dark/50 p-4 rounded-lg relative overflow-hidden group">
            <div className="crt-overlay absolute inset-0 opacity-20"></div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-sm">monitoring</span>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest">System Stats</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-mono mb-1">
                  <span>CPU_LOAD_PROGRESS</span>
                  <span className="text-primary">72%</span>
                </div>
                <div className="h-1 bg-primary/10 w-full rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-primary/10 pt-3">
                <span className="text-[10px] font-mono opacity-60">STREAK_STABILITY</span>
                <span className="text-sm font-mono text-terminal-green">15_DAYS_UP</span>
              </div>
              <div className="flex items-center justify-between border-t border-primary/10 pt-3">
                <span className="text-[10px] font-mono opacity-60">TASKS_RESOLVED</span>
                <span className="text-sm font-mono">24 / 32</span>
              </div>
            </div>
          </div>
          <div className="terminal-border bg-surface-dark/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-sm">history</span>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Active Processes</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group cursor-pointer">
                <span className="text-primary font-mono text-xs mt-1">&gt;</span>
                <div>
                  <p className="text-[11px] font-mono leading-tight group-hover:text-primary transition-colors">INIT_NETWORK_LAYER.sh</p>
                  <p className="text-[9px] font-mono opacity-40">2 HOURS AGO</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer">
                <span className="text-primary font-mono text-xs mt-1">&gt;</span>
                <div>
                  <p className="text-[11px] font-mono leading-tight group-hover:text-primary transition-colors">ALLOCATE_MEM_BUFF.bin</p>
                  <p className="text-[9px] font-mono opacity-40">5 HOURS AGO</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer opacity-50">
                <span className="text-primary font-mono text-xs mt-1">&gt;</span>
                <div>
                  <p className="text-[11px] font-mono leading-tight group-hover:text-primary transition-colors">AUTH_PROTOCOL_V2.py</p>
                  <p className="text-[9px] font-mono opacity-40">YESTERDAY</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto p-4 border border-dashed border-primary/20 rounded bg-primary/5">
            <p className="text-[10px] font-mono leading-relaxed opacity-70">
              [NOTICE]: System resources are optimal. Maintain connection to prevent architecture fragmentation.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6 order-1 md:order-2">
          {/* Hero Section (Terminal Window) */}
          <section className="relative terminal-border bg-black rounded-lg overflow-hidden min-h-[220px] flex flex-col">
            <div className="bg-surface-dark border-b border-primary/20 px-4 py-2 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-red/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-terminal-green/60"></div>
              </div>
              <div className="text-[10px] font-mono opacity-50 tracking-widest">TTY: /DEV/PTS/0 - ROOT</div>
              <div className="w-10"></div>
            </div>
            <div className="p-8 flex-1 relative flex flex-col justify-center">
              <div className="crt-overlay absolute inset-0 z-10 opacity-40"></div>
              <div className="scanline z-20 opacity-20"></div>
              <div className="relative z-0 space-y-4">
                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                  <span>[SUCCESS]</span>
                  <span className="h-px w-12 bg-primary/30"></span>
                  <span className="opacity-70">DIRECTORY_MOUNTED</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-mono font-bold leading-none tracking-tighter text-slate-100 uppercase glitch-hover">
                  ROOT_DIRECTORY / COURSES / SYSTEM_ARCHITECTURE
                </h1>
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 bg-accent-red text-white text-[10px] font-mono rounded-sm">LVL: ADVANCED</span>
                  <span className="text-primary font-mono text-xs">[SCANNING_SYSTEM_RESOURCES...]</span>
                </div>
              </div>
            </div>
          </section>

          {/* Curriculum List */}
          <section className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-sm font-mono font-bold tracking-widest uppercase text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">folder_open</span>
                Listing_Modules
              </h2>
              <span className="text-[10px] font-mono opacity-40 italic">4 NODES FOUND</span>
            </div>

            {/* Module 1 */}
            <div className="terminal-border bg-surface-dark/20 rounded overflow-hidden group">
              <div className="p-4 flex items-center justify-between bg-surface-dark/40 border-b border-primary/10 cursor-pointer">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-mono font-bold">01/</span>
                  <span className="font-mono text-sm tracking-tight uppercase group-hover:text-primary transition-colors">Module_Core_Foundations</span>
                  <span className="text-[9px] border border-primary/30 px-1.5 text-primary/70 font-mono">STABLE</span>
                </div>
                <span className="material-symbols-outlined text-primary group-hover:rotate-90 transition-transform">chevron_right</span>
              </div>
              <div className="divide-y divide-primary/5">
                <div className="p-3 pl-12 flex items-center justify-between hover:bg-primary/5 transition-colors group/lesson">
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-mono text-xs">$</span>
                    <span className="font-mono text-xs opacity-80 group-hover/lesson:opacity-100">01.01_Network_Protocols.pdf</span>
                    <span className="text-[9px] font-mono text-terminal-green">[COMPLETED]</span>
                  </div>
                  <button className="px-3 py-1 bg-primary/10 border border-primary/30 text-[10px] font-mono text-primary opacity-0 group-hover/lesson:opacity-100 transition-all hover:bg-primary hover:text-white uppercase glitch-hover">
                    Run_Module
                  </button>
                </div>
                <div className="p-3 pl-12 flex items-center justify-between hover:bg-primary/5 transition-colors group/lesson">
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-mono text-xs">$</span>
                    <span className="font-mono text-xs opacity-80 group-hover/lesson:opacity-100">01.02_Memory_Management.bin</span>
                    <span className="text-[9px] font-mono text-primary animate-pulse">[IN_PROGRESS]</span>
                  </div>
                  <button className="px-3 py-1 bg-primary border border-primary text-[10px] font-mono text-white opacity-0 group-hover/lesson:opacity-100 transition-all uppercase glitch-hover">
                    Run_Module
                  </button>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="terminal-border bg-surface-dark/20 rounded overflow-hidden group">
              <div className="p-4 flex items-center justify-between bg-surface-dark/40 border-b border-primary/10 cursor-pointer">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-mono font-bold">02/</span>
                  <span className="font-mono text-sm tracking-tight uppercase group-hover:text-primary transition-colors">Distributed_Compute_Nodes</span>
                  <span className="text-[9px] border border-accent-red/30 px-1.5 text-accent-red/70 font-mono">UNSTABLE</span>
                </div>
                <span className="material-symbols-outlined text-primary group-hover:rotate-90 transition-transform">chevron_right</span>
              </div>
              <div className="divide-y divide-primary/5">
                <div className="p-3 pl-12 flex items-center justify-between hover:bg-primary/5 transition-colors group/lesson">
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-mono text-xs">$</span>
                    <span className="font-mono text-xs opacity-80">02.01_Shard_Architecture.db</span>
                    <span className="text-[9px] font-mono opacity-40">[LOCKED]</span>
                  </div>
                  <span className="material-symbols-outlined text-xs opacity-30">lock</span>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="terminal-border bg-surface-dark/20 rounded overflow-hidden opacity-50 grayscale">
              <div className="p-4 flex items-center justify-between bg-surface-dark/40 cursor-not-allowed">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-mono font-bold">03/</span>
                  <span className="font-mono text-sm tracking-tight uppercase">High_Availability_Clusters</span>
                </div>
                <span className="material-symbols-outlined text-primary">lock</span>
              </div>
            </div>

            {/* Module 4 */}
            <div className="terminal-border bg-surface-dark/20 rounded overflow-hidden opacity-50 grayscale">
              <div className="p-4 flex items-center justify-between bg-surface-dark/40 cursor-not-allowed">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-mono font-bold">04/</span>
                  <span className="font-mono text-sm tracking-tight uppercase">Security_Protocols_Final</span>
                </div>
                <span className="material-symbols-outlined text-primary">lock</span>
              </div>
            </div>
          </section>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono opacity-40 px-2">
            <span>LAST_SYNC: 2023-11-24 14:32:01</span>
            <span>ENCRYPTION: AES-256-BIT</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseCurriculum;
