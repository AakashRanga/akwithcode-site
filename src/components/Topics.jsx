import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const response = await fetch('http://localhost:1002/automation/topics');
      if (!response.ok) throw new Error('Failed to fetch topics');
      const data = await response.json();
      setTopics(data);
    } catch (err) {
      console.error(err);
      setTopics([]);
    } finally {
      setLoading(false);
    }
  };

  const getTopicColor = (index) => {
    const colors = [
      { bg: 'bg-primary', text: 'text-white' },
      { bg: 'bg-white', text: 'text-black' },
      { bg: 'bg-primary', text: 'text-white' },
      { bg: 'bg-white', text: 'text-black' },
      { bg: 'bg-primary', text: 'text-white' }
    ];
    return colors[index % colors.length];
  };

  const getTopicImage = (topic) => {
    const images = {
      'python': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMm6UnCegfbvDTISHUkAHmmnHx6J_4r3InCghSuFAEmBf1rq7eOiO0MQcbWCCMijc88TCvmq6gFe8IOmGFAgZcR9iNnki2Ep92KK69zm552UPiCV3kqzNo03Hb_fWxqHaaMsO_vW003_8qm9Z1lbIALf2Z7sqS1mT7-hlON_3jtkjeLg8lpbMuJSak0MYdIwO5-plxWmbMvndlXchp_Dz9sqJtQMV6LDBzWgjY_xWMYOrVCeq0rovf7Bw2e7W01_WANtBWOQSJJ2U',
      'n8n': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPiig88hNE47_GaOW4cHw8fgY7yXJlwRoaVzJOx4pbHkcAOkQj3AdReUdXN4-OnEsFV7NsYpGbfMe5obXiK5gjN7yF7QXb9BT99X5TpujhvHspdzYFbGncTutYK9nnBep3qGa17M9kSP9ipBXjhxCLq_pU5mcm7_VPL4AqOpHxlDk2lmI82yGqDBXX1rt_kmFoMSYenZlZ2VXjb6_46L9cJYmrgUA8AP4rWA40UVbWeayOoof8XgeLyc4w1o5aSo3sPCfeEaXyIgo',
      'automation': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI_6H-I9Q43FMBRRK9WbdakG-LxYGSpIaNCQC4-LbT9Q5CRw6u29NOYWGroiOQUu1N5jOfxdZnKQakiAkR13fZAsjo5VGrS6LFtFKrtZaevTZePwJ6d2CBXG92W2jAansQV_OQTfab_BV2j4ejEMLhMsCaxo0RiKM5M0S_lvhT8vTxVaS7nzfzYIxjo8SOPPs0GgVrkRnZbTQ77B4dWrOqzNxfGZVqDrTH72mMObi4ug1L62hX1wZGar8LUhFjvdeTy1RnEL9eNqI'
    };
    return images[topic.toLowerCase()] || images['python'];
  };

  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-20 py-12 max-w-7xl mx-auto w-full relative">
      <div className="vintage-grain fixed inset-0 z-50 pointer-events-none"></div>

      <div className="mb-4">
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Link className="hover:text-primary transition-colors cursor-pointer" to="/">Home</Link>
          <span className="material-symbols-outlined text-sm select-none">chevron_right</span>
          <span className="text-primary">Topics Explorer</span>
        </nav>
      </div>

      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 italic">
            Explore <span className="text-primary">Topics</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed border-l-4 border-primary pl-4 sm:pl-6">
            Deep dives into hardcore engineering, low-level architecture, and the patterns that define modern scalable systems. Pure technical depth, no fluff.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-6 py-2 bg-primary text-background-dark font-bold text-sm uppercase tracking-widest rounded-lg hover:scale-105 transition-transform cursor-pointer">Filter All</button>
          <button className="px-6 py-2 border border-primary/30 hover:border-primary text-slate-600 dark:text-slate-300 font-bold text-sm uppercase tracking-widest rounded-lg transition-all cursor-pointer">Trending</button>
        </div>
      </section>

      {loading ? (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-4 text-slate-500 font-mono text-sm">LOADING_TOPICS...</p>
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic, i) => {
          const colors = getTopicColor(i);
          const img = getTopicImage(topic.topic);
          return (
          <Link key={i} to={`/topic-article-list?topic=${encodeURIComponent(topic.topic)}`} className="group relative aspect-square bg-slate-900 overflow-hidden rounded-xl border-2 border-slate-800 transition-all duration-300 hover:-translate-y-2 glow-border flex flex-col justify-end p-4 sm:p-8">
            <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110">
              <img className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 select-none" src={img} alt={topic.topic} />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <div className={`sticker-angle mb-4 inline-block px-3 py-1 ${colors.bg} ${colors.text} text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                {topic.articleCount} ARTICLES
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-2">
                {topic.topic}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium mb-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                Explore {topic.articleCount} article{topic.articleCount !== 1 ? 's' : ''} in {topic.topic}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
                <span>Explore Module</span>
                <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
              </div>
            </div>
          </Link>
        )})}

        <div className="group relative aspect-square bg-slate-900 overflow-hidden rounded-xl border-2 border-slate-800 transition-all duration-300 hover:-translate-y-2 glow-border flex flex-col justify-center items-center p-4 sm:p-8 border-dashed cursor-pointer">
          <div className="text-primary mb-4">
            <span className="material-symbols-outlined text-6xl select-none">add_circle</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter text-center">Suggest a<br />Topic</h3>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-4">Community Driven</p>
        </div>
      </div>
      )}

      <section className="mt-16 sm:mt-24 bg-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 border border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 pointer-events-none opacity-20 sm:opacity-100">
          <span className="material-symbols-outlined text-primary/10 text-[100px] sm:text-[150px] select-none">code_off</span>
        </div>
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter mb-4 italic">Ready for <span className="text-primary">Hardcore</span> Dev?</h2>
          <p className="text-base sm:text-lg text-slate-400 mb-8">Join 10k+ engineers mastering the art of low-level optimization and architectural excellence.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 sm:px-10 sm:py-4 bg-primary text-background-dark font-black uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer text-xs sm:text-sm">Get Pro Access</button>
            <button className="px-6 py-3 sm:px-10 sm:py-4 border-2 border-primary text-primary font-black uppercase tracking-widest hover:bg-primary/10 transition-colors cursor-pointer text-xs sm:text-sm">Free Trials</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topics;
