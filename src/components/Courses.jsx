import React from 'react';

const Courses = () => {
  const courseModules = [
    {
      title: "Mastering C++ Internals",
      desc: "Deconstruct the compiler, memory models, and pointer arithmetic of the industrial titan.",
      level: "ADVANCED",
      levelColor: "bg-accent-red text-white",
      progress: "67% Complete",
      progressWidth: "67%",
      icon: "settings_input_component",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTwNGX8A9G_YN1DajCglZSdFll0N9Ei2BgQpeOxBjCnYaRtsA7r3zT0amiKFk2xtUBLYWVNtupcBFDhape4UNzrNmbNlhpimzoMEGXtbanv28zKHi7QNSQ8N3YcLxIG9udeo-cnpdtnFNGqW6R2_Vo6lgaQrKNQtVyGU-3yD1siHF5ZriA7zhgPp5JKcb9kEhvb8HI0urCQqUlub4WCOiW0mo9S-hRxBIKMzWBiFnKpBJyB2Xr331CScd4zYpcafyoRx6h_eUmnLY",
      action: "Resume"
    },
    {
      title: "Distributed Systems 101",
      desc: "Learn consensus algorithms, Paxos, and fault tolerance in planetary-scale architectures.",
      level: "INTERMEDIATE",
      levelColor: "bg-primary text-background-dark",
      cost: "CREDITS: 1,200",
      icon: "hub",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU2uWgJoII5thKuBPnWI5mU1whjknSlc_qkfq-kxe7TlQOgH35WCX8v0eZsCEyFK3i9snt3NgVjQOPK5WAJcHWZrGojwRqbOCJPFUk7imf70Xz9a0PVxPx9-8qEJ73etCnvzCVn0dLZqMSFpSIIcWy55RdpWzB3rvHHFSCcrhh40ZzykEfnN-8Rw0r0b9BBAp3MddfT0-kEAEWja_MiI4kK6Iprlg19XJlRZZCqlq4-j5o4ByiI1GefJXP8lpJ2ERqon3s2M4Is9U",
      action: "Enroll"
    },
    {
      title: "Kernel Hacking",
      desc: "Exploit development and binary analysis for the Linux kernel and low-level drivers.",
      level: "ADVANCED",
      levelColor: "bg-accent-red text-white",
      availability: "Limited Slot",
      icon: "security",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIkt2oi7d5EymBGmVoXVXtSh-ldt-G6ghNx1BnbQ1weLqG1bH39ghYT_hJZ9Hrq4gQbOBARdLb2NlTDZ0mSlwShbAS-by2yOhIP-KrC44KPwrePj2D7jao1IUk6Wr1jh7U5sA8yz5HAaix9mhED8bHZ-bgm-G0eMgFWOPhvKw93RQIvPRlItGmA10yK0eW1fWleBO0UEXoCDhkPqW02GXgGbB6LUHmAi5TvQfPQ105DEymQWZAYbBfTcgpmYtWBm-s9AbLFB_Tz-k",
      action: "Enroll"
    },
    {
      title: "OS Fundamentals",
      desc: "From BIOS to shell. Understanding the bridge between hardware and application software.",
      level: "BEGINNER",
      levelColor: "bg-primary text-background-dark",
      cost: "FREE_TIER",
      icon: "data_object",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfyyUF8dNhOtn2aVkYAXuVvPFh2pfypV2SLteZIbC8MWeja-r_wL-aTiZTvsPIYlZ7BDdgMqDj-LRPiituKSlzfBIPF5yyTVzGDwtMGW4CXeomle0ZeToRdNEAgfL5u4EGgqrZ9v1BPGVjWaL8VTXQKswdqL7HUHokgLFH9e-ZEs_TjRzIqiirOxKK8TgtQBL2z8brQGVe05LlWTfS5AJNLy9lcmHBMNAvdtw0TGlzLP3TSnwbBJRInA72ka08_qURtMllsCeEaf4",
      action: "Enroll"
    }
  ];

  return (
    <div className="flex-1 flex flex-col grainy-bg min-h-screen">
      <section className="relative pt-16 pb-12 px-6 md:px-20 overflow-hidden border-b border-primary/10">
        <div className="scanline absolute inset-0 opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 mb-4 bg-accent-red text-white text-[10px] font-black tracking-[0.3em] uppercase rounded-sm">
            Access Level: ARCHIVE_ADMIN
          </div>
          <h1 className="text-slate-100 text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase italic select-none">
            Explore<br />
            <span className="text-primary">Courses</span>
          </h1>
          <p className="mt-6 text-primary/60 text-sm font-bold uppercase tracking-[0.4em] max-w-xl">
            Vintage Tech Archive // Batch 2024-X // System Loaded
          </p>
        </div>
        <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[300px] text-primary">memory</span>
        </div>
      </section>

      <div className="px-6 md:px-20 py-8 bg-background-dark/40 backdrop-blur-sm border-b border-primary/20">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-background-dark font-black uppercase text-xs tracking-widest rounded-sm">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              All Systems
            </button>
            {["Backend", "Low-Level", "Security", "Architecture"].map(filter => (
              <button key={filter} className="flex items-center gap-2 px-4 py-2 border border-primary/30 hover:border-primary text-primary font-black uppercase text-xs tracking-widest rounded-sm transition-all text-nowrap">
                {filter}
              </button>
            ))}
          </div>
          <div className="text-[10px] font-mono text-primary/40 uppercase tracking-widest">
            Displaying 12/256 Modules
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 px-6 md:px-20 py-12">
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseModules.map((course, i) => (
              <div key={i} className="group relative flex flex-col bg-background-dark border border-primary/20 rounded-lg overflow-hidden glow-edge transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-40 bg-slate-800 relative overflow-hidden">
                  <img className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-opacity" src={course.img} alt={course.title} />
                  <div className={`absolute top-4 right-4 ${course.levelColor} text-[10px] font-black px-2 py-1 rounded-sm`}>
                    LEVEL: {course.level}
                  </div>
                  {course.progressWidth && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20">
                      <div className="h-full bg-primary" style={{ width: course.progressWidth }}></div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-slate-100 group-hover:text-primary transition-colors leading-tight">
                      {course.title}
                    </h3>
                    <span className="material-symbols-outlined text-primary/40 shrink-0">{course.icon}</span>
                  </div>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">{course.desc}</p>
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-primary/10">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                        {course.progress ? "Progress" : (course.cost ? "Cost" : "Availability")}
                      </span>
                      <span className="text-xs font-mono text-slate-300">
                        {course.progress || course.cost || course.availability}
                      </span>
                    </div>
                    <button className={`${course.action === "Enroll" ? "border border-primary text-primary hover:bg-primary hover:text-background-dark" : "bg-primary text-background-dark hover:bg-white"} px-6 py-2 font-black uppercase text-sm rounded-sm transition-colors`}>
                      {course.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="w-full lg:w-80 flex flex-col gap-8">
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rotate-45 transform translate-x-8 -translate-y-8"></div>
            <h4 className="text-primary font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">stars</span>
              Recommended Tracks
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { title: "The Architect", count: "4 Courses", tags: ["SYSTEMS", "SCALABILITY"] },
                { title: "The Breaker", count: "6 Courses", tags: ["SECURITY", "EXPLOITS"] },
                { title: "Low-Level Dev", count: "5 Courses", tags: ["KERNELS", "HARDWARE"] }
              ].map((track, i) => (
                <div key={i} className="group flex flex-col gap-2 p-3 border border-primary/10 hover:border-primary/40 bg-background-dark transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-100">{track.title}</span>
                    <span className="bg-primary/20 text-primary text-[8px] font-bold px-1.5 py-0.5 uppercase rounded-sm">{track.count}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {track.tags.map(tag => (
                      <span key={tag} className={`vintage-tag ${tag === "SYSTEMS" || tag === "SECURITY" || tag === "KERNELS" ? "bg-accent-red" : "bg-slate-700"} text-white text-[8px] font-black px-2 py-0.5 uppercase`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-accent-red/10 border border-accent-red/20 rounded-lg">
            <h4 className="text-accent-red font-black uppercase tracking-widest text-sm mb-4">Urgent Terminal Update</h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-4">The "Distributed Systems" module will be offline for maintenance in 04:22:12. Finish your labs before shutdown.</p>
            <div className="bg-accent-red text-white text-[10px] font-black p-2 text-center uppercase cursor-pointer hover:bg-white hover:text-accent-red transition-colors">
              Check Status
            </div>
          </div>

          <div className="p-6 border border-primary/10 rounded-lg flex flex-col items-center justify-center text-center gap-4 group">
            <span className="material-symbols-outlined text-4xl text-primary/40 group-hover:scale-110 transition-transform">emoji_events</span>
            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-widest text-slate-100">Global Leaderboard</span>
              <span className="text-[10px] text-primary/60 font-mono">Season 4 Active</span>
            </div>
            <button className="w-full text-[10px] font-black uppercase py-2 border border-primary/30 text-primary/60">View Standings</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Courses;
