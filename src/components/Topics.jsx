import React from 'react';
import { Link } from 'react-router-dom';

const Topics = () => {
  const categories = [
    "All Systems",
    "Backend Architecture",
    "Infrastructure & Ops",
    "Low Level Mastery",
    "Security Protocols"
  ];

  const topicsList = [
    {
      title: "Memory\nManagement",
      desc: "Deep dive into C memory allocators, heap vs stack, and GC internals.",
      tag: "HARDCORE DEV",
      tagColor: "bg-white text-black",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCysrNUtWulTCCbxeNNub7_joQxp7mcSCd0RIvFjgDjmNQ4rPPJqMjdAzvnPojUIKSs3uecAZxmyExXkvTsqxM02wO440lkPcA3Z-vi_xhrO4L8cDmcBlzZgmJaj7A7yodyLEClphdY9njAeuqxjaHgrC6-2rDO0Z-ONQpE6mY6bxIwjPMPPZBSmolWdSrD27BJoWtz69DEmCDW12aeqnCD9c3f90DiRkDxXuKlX_zFk0iHQ4BPurJ4WKlrLh-thm6PpgVEXvNPk1Q"
    },
    {
      title: "Distributed\nSystems",
      desc: "Consensus algorithms, Paxos, Raft, and CAP theorem in practice.",
      tag: "ARCHITECTURE",
      tagColor: "bg-primary text-white",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI_6H-I9Q43FMBRRK9WbdakG-LxYGSpIaNCQC4-LbT9Q5CRw6u29NOYWGroiOQUu1N5jOfxdZnKQakiAkR13fZAsjo5VGrS6LFtFKrtZaevTZePwJ6d2CBXG92W2jAansQV_OQTfab_BV2j4ejEMLhMsCaxo0RiKM5M0S_lvhT8vTxVaS7nzfzYIxjo8SOPPs0GgVrkRnZbTQ77B4dWrOqzNxfGZVqDrTH72mMObi4ug1L62hX1wZGar8LUhFjvdeTy1RnEL9eNqI"
    },
    {
      title: "Compiler\nDesign",
      desc: "AST, Lexing, LLVM, and building your own language from scratch.",
      tag: "LOW LEVEL",
      tagColor: "bg-white text-black",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMm6UnCegfbvDTISHUkAHmmnHx6J_4r3InCghSuFAEmBf1rq7eOiO0MQcbWCCMijc88TCvmq6gFe8IOmGFAgZcR9iNnki2Ep92KK69zm552UPiCV3kqzNo03Hb_fWxqHaaMsO_vW003_8qm9Z1lbIALf2Z7sqS1mT7-hlON_3jtkjeLg8lpbMuJSak0MYdIwO5-plxWmbMvndlXchp_Dz9sqJtQMV6LDBzWgjY_xWMYOrVCeq0rovf7Bw2e7W01_WANtBWOQSJJ2U"
    },
    {
      title: "Kubernetes\nInternals",
      desc: "Inside the API server, etcd synchronization, and CNI plugins.",
      tag: "CLOUD NATIVE",
      tagColor: "bg-primary text-white",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPiig88hNE47_GaOW4cHw8fgY7yXJlwRoaVzJOx4pbHkcAOkQj3AdReUdXN4-OnEsFV7NsYpGbfMe5obXiK5gjN7yF7QXb9BT99X5TpujhvHspdzYFbGncTutYK9nnBep3qGa17M9kSP9ipBXjhxCLq_pU5mcm7_VPL4AqOpHxlDk2lmI82yGqDBXX1rt_kmFoMSYenZlZ2VXjb6_46L9cJYmrgUA8AP4rWA40UVbWeayOoof8XgeLyc4w1o5aSo3sPCfeEaXyIgo"
    },
    {
      title: "Offensive\nSecurity",
      desc: "Buffer overflows, heap spraying, and custom shellcode development.",
      tag: "SECURITY",
      tagColor: "bg-white text-black",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAnaZIngaO3fOiZsA2xiPUAk-3CFwKOtgxzAoWcYIKzULkwTjgPO5rrwVFHVU6quUVVXJfxinq8oo0mCrq5hXc9SA8biUGqVfzK-96GQUDdss8_Qhx5J-lzRKaF3Pzx5h1v-IhVIgBWD7AmfAEt0N78KNMaysjn927no-LPqdoIUdgM2qlBUi4jaHYgQ1Aqx_U2zDHzB_T3pjs-ztDjvxx8R-jWR2w2dUYumP5qUwmr4qRXr-ygCcHTH-OAjGwmDuTYpNe6FN7G0"
    }
  ];

  return (
    <div className="flex-1 px-6 lg:px-20 py-12 max-w-7xl mx-auto w-full relative">
      <div className="vintage-grain fixed inset-0 z-50 pointer-events-none"></div>

      <div className="mb-4">
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Link className="hover:text-primary transition-colors" to="/">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-primary">Topics Explorer</span>
        </nav>
      </div>

      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 italic">
            Explore <span className="text-primary">Topics</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed border-l-4 border-primary pl-6">
            Deep dives into hardcore engineering, low-level architecture, and the patterns that define modern scalable systems. Pure technical depth, no fluff.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-6 py-2 bg-primary text-background-dark font-bold text-sm uppercase tracking-widest rounded-lg hover:scale-105 transition-transform">Filter All</button>
          <button className="px-6 py-2 border border-primary/30 hover:border-primary text-slate-600 dark:text-slate-300 font-bold text-sm uppercase tracking-widest rounded-lg transition-all">Trending</button>
        </div>
      </section>

      <div className="flex gap-4 overflow-x-auto pb-8 mb-12 scrollbar-hide border-b border-primary/10">
        {categories.map((cat, i) => (
          <button key={i} className={`flex-none flex items-center gap-2 px-5 py-2 ${i === 0 ? 'bg-primary/20 border-primary/40 text-primary' : 'hover:bg-primary/10 border-transparent hover:border-primary/20 text-slate-500'} rounded-full border transition-all font-bold text-sm text-nowrap`}>
            {i === 0 && <span className="material-symbols-outlined text-sm">category</span>}
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topicsList.map((topic, i) => (
          <div key={i} className="group relative aspect-square bg-slate-900 overflow-hidden rounded-xl border-2 border-slate-800 transition-all duration-300 hover:-translate-y-2 glow-border flex flex-col justify-end p-8">
            <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110">
              <img className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0" src={topic.img} alt={topic.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <div className={`sticker-angle mb-4 inline-block px-3 py-1 ${topic.tagColor} text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                {topic.tag}
              </div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-2 whitespace-pre-line">
                {topic.title}
              </h3>
              <p className="text-slate-400 text-sm font-medium mb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                {topic.desc}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest">
                <span>Explore Module</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}

        <div className="group relative aspect-square bg-slate-900 overflow-hidden rounded-xl border-2 border-slate-800 transition-all duration-300 hover:-translate-y-2 glow-border flex flex-col justify-center items-center p-8 border-dashed">
          <div className="text-primary mb-4">
            <span className="material-symbols-outlined text-6xl">add_circle</span>
          </div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter text-center">Suggest a<br />Topic</h3>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-4">Community Driven</p>
        </div>
      </div>

      <section className="mt-24 bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <span className="material-symbols-outlined text-primary/10 text-9xl">code_off</span>
        </div>
        <div className="relative z-10 max-w-xl">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Ready for <span className="text-primary">Hardcore</span> Dev?</h2>
          <p className="text-lg text-slate-400 mb-8">Join 10k+ engineers mastering the art of low-level optimization and architectural excellence.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 bg-primary text-background-dark font-black uppercase tracking-widest hover:scale-105 transition-transform">Get Pro Access</button>
            <button className="px-10 py-4 border-2 border-primary text-primary font-black uppercase tracking-widest hover:bg-primary/10 transition-colors">Free Trials</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topics;
