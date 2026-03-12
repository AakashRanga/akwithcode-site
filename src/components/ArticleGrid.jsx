import React from 'react';

const ArticleGrid = () => {
  const articles = [
    {
      title: "The Rise of Memory-Safe Systems",
      desc: "Exploring why Rust is becoming the standard for high-stakes financial infrastructure in 2024.",
      tag: "Backend",
      tagColor: "bg-primary/90 text-background-dark",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBr-NQkH4HSLEbz5883MoW8i9RXkslymQL1M06HoQp9Df47tVXfWND3qPwDFwnsiRl8lsGyIe_Q_LHU8OG0q1F8sFfpfrTYo5mfLkFqyKiCt7d7TVisx2K2Ap11KUz0nnRs9tXjGNHPIdpTTOg_fIVog8uNQ5f7_qepjPgkRXKj3SPoni2MRMoS7Cl9nU_aDfjlFP1uSZ_RmyQBFhcpdbxmjIO2bUJQidbEtCO6qOyvnEXk4RZ1Ke5Hgwe2Ami0DuPpx7NgQ48Yo4",
      read: "8 MIN READ",
      date: "OCT 24 // 2023"
    },
    {
      title: "Hardening Your Edge Infrastructure",
      desc: "Proactive measures to defend against next-gen DDoS attacks using edge computing models.",
      tag: "Security",
      tagColor: "bg-accent/90 text-white",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzInxeruzwB-Awp7NPoP6S5wdFx_2HuEhvoTz8jjgVFK-lRnawQsEdpRfIuaD5csMyiYXJhrB8YIcctNFAy_leUFshI8QcZe6yv5XL2HFzDrRzbCGZjj0MxvquvOXxJ_cX854Ab-RPdWvadCzV9vUJ6NvTMwnvuqdlZ9uSJDAbu6f2qWsE04XMeGkhuby39nzT9mdWtTimSsQ1hfq0gJQNOddiPnO6DKUGlvEWicPso8_LMcgowW_Yk75N4IG8omkOVexv0GAZyu8",
      read: "12 MIN READ",
      date: "OCT 21 // 2023"
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-8 border-b border-primary/20 pb-4">
        <h3 className="text-3xl font-black uppercase tracking-tighter italic">Latest <span className="text-primary">Transmissions</span></h3>
        <a className="text-xs font-bold uppercase tracking-widest text-primary hover:underline" href="#">View All Terminal Data</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-4 border border-primary/10 group-hover:border-primary/50 transition-all">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={article.image} alt={article.title} />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`${article.tagColor} text-[10px] font-bold px-2 py-1 uppercase`}>{article.tag}</span>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h4>
            <p className="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">{article.desc}</p>
            <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              <span>{article.read}</span>
              <span>{article.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;
