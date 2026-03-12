import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const carouselSlides = [
    {
      label: "Live Workshop",
      labelBg: "bg-accent-red",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxrTaQUVWXSvHuwdJ0ddxtoC8GBNlfgAK-nonhoHpwns6MdusjUbYkEwEpJJKT-UFBH4gx_lah3zgC_UqX1jGJ6ntlezi9-ZQ6V5DbQ6Glmu5YmdGAjZ4JsXBA30YgVk8Z0KDCjDd5FIzJOZkJVsU_IoAZNhPEmft7mOkT4CtJc8GZ5ezPUWKZNZFQrAMlEDQTZOrtdnBNEo_4nis5B36IMJV7nAs_QlDGJ4xMhSpen2WfmgY6kQTCFDjPzGTnadkWFzC2kPfKNq0"
    },
    {
      label: "Upcoming Event",
      labelBg: "bg-white text-background-dark",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMOkI-tSJYi1qbZsuQtEKd0nbRdxL5_jdj3ixwvd2NBwlVEdcagqNPef7xjpz83vz15e8yBNSc_JesUyT6c8pdOGTHR64S_qFEAdWrcV3KihGA4Frie9yu2JXtTXHO4vnAZAw-YGJpuNFpz0g-gaLH-vBSL-cqPmolrlBBGUsDRdy5p_f33bkH7mPKOT7rAwBjUeXj486CAiOUppQsAttLikpQpL8so2bQfArXqAfdhu0OTZeizg2bRC-G5cz72S1SwxFATWRAvS0"
    },
    {
      label: "Live Session",
      labelBg: "bg-primary text-background-dark",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1lGbQmdvjfN943w_pm4tbjKUr8TAfzc4bHoi-v2-3aoOOcdgYTqmzg3f41Vss_QweHa-2QGyvIXwbw4c29xf34SFi2HQL5tpTUubW6E3ZmwVGY9TZFpn8okoTFf-zdRv8DVhI2rmUSo8QN_k213eEy_4GZOkCTNpJMHgFuZKIJKjr1gMfMrS8BnwQQ3E5KcxMx6tQ87G8dLur2abdpLW1QzJ-Rndi3l3aB5RWGouU08aM-_8yTrQC0aLS4l83u662zQgpEIF8SpY"
    }
  ];

  const blogPosts = [
    {
      category: "Cybersecurity",
      tag: "Hardcore Dev",
      tagBg: "bg-accent-red",
      title: "The Rise of Retro Computing in Modern DevStacks",
      desc: "Why terminal-first workflows and vintage aesthetics are making a massive comeback in the Silicon Valley.",
      date: "May 12, 2024",
      readTime: "5 min read",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMOkI-tSJYi1qbZsuQtEKd0nbRdxL5_jdj3ixwvd2NBwlVEdcagqNPef7xjpz83vz15e8yBNSc_JesUyT6c8pdOGTHR64S_qFEAdWrcV3KihGA4Frie9yu2JXtTXHO4vnAZAw-YGJpuNFpz0g-gaLH-vBSL-cqPmolrlBBGUsDRdy5p_f33bkH7mPKOT7rAwBjUeXj486CAiOUppQsAttLikpQpL8so2bQfArXqAfdhu0OTZeizg2bRC-G5cz72S1SwxFATWRAvS0"
    },
    {
      category: "Development",
      tag: "Architecture",
      tagBg: "bg-primary",
      title: "Building Scalable APIs for the 2025 Web",
      desc: "Navigating the complex landscape of serverless functions and edge computing for ultra-fast response times.",
      date: "May 10, 2024",
      readTime: "8 min read",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1lGbQmdvjfN943w_pm4tbjKUr8TAfzc4bHoi-v2-3aoOOcdgYTqmzg3f41Vss_QweHa-2QGyvIXwbw4c29xf34SFi2HQL5tpTUubW6E3ZmwVGY9TZFpn8okoTFf-zdRv8DVhI2rmUSo8QN_k213eEy_4GZOkCTNpJMHgFuZKIJKjr1gMfMrS8BnwQQ3E5KcxMx6tQ87G8dLur2abdpLW1QzJ-Rndi3l3aB5RWGouU08aM-_8yTrQC0aLS4l83u662zQgpEIF8SpY"
    },
    {
      category: "Design",
      tag: "Trending",
      tagBg: "bg-white",
      title: "Mastering CSS Grid: The Editorial Layout",
      desc: "Pushing the boundaries of web typography and layout using advanced CSS techniques.",
      date: "May 08, 2024",
      readTime: "6 min read",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4WSvRcQOTR8w-JcfXmHSkAvONljW9PkGIk3nz8rH_MjHNTxdMvMbDfL7phudlQTAA7AY21-DwMiRgv-W-FwCDEYSKq4-ddPUOmDPx2Le0m6cM1BMJuN9cWGETiWYGWZPuY5saK2rBC7TGrnACZMsM4tYtP9Wf0YJ4vNQY1AxQgs5qcUfBmql4fb8J9mJpM4TIceChXUZ0Zy4gAoavNANrCPFcyEr_q0fn8jdgOF5Q4-SO526zbQy-jCdoYGeJuxQefpRnarNkTfE"
    },
    {
      category: "Future Tech",
      tag: "New Tech",
      tagBg: "bg-accent-red",
      title: "Quantum Supremacy: What it Means for Web Encryption",
      desc: "A deep dive into post-quantum cryptography and preparing your applications for the next decade.",
      date: "May 05, 2024",
      readTime: "15 min read",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_JstRuuAQcs5ijwxXAnkI4EM_JMpIc0A5bLWCd7I6SmGKlrdpTvk0JQ7HQmRiSW48vNDgldUtykgNFShOnM71hyGB18yhaQTWd2avuJhJmQ712CEE6gBWnJ0qjvbxWzSLK15iKhUszd62U0AH3DRyIsbeehWRttSGLWBn7Yl-j0r1oc5CqFxOOD8y9OcP7t-vs_3n6sSKtJix_IKeGnELybZpqI3VV_zgbdMTnnPN9YMFYRYZwuo-OQhvagxC_Ma0xKcCBf6Eo04"
    }
  ];

  const popularPosts = [
    {
      title: "GitHub Actions for Massive Scalability",
      readTime: "4 min read",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJdl1jbDpso2KHoGdlsnp9Tz3JW-r1kAwTBO_XZOYgZv4swMXcKgK0IPUnCKjivKDk08cPmcwVXYLAfcQvZtRm15J9sm55pr8n9quxTjazxQpMTLcTRe6NUenzfYZb2MCnISX0u6OgZAS1cy4XqKHn-U4F-hX9vPPkJlssA0Es4hYlu7hX7o5T6_yi-ZcijY7lCRBsL0547XJweICmIxCa6OuPikvneTJSqw8o_VFE9zz0nbpm4dugKrCRpiu_ZxJpvcRSrgYBQZk"
    },
    {
      title: "The Perfect VS Code Setup in 2024",
      readTime: "7 min read",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3D1JzTZ5U8tmhSUx0_o8NYJ-M2xo-BEZru2FuPDNslTph4K1sIB1i349dUJSFAd3veAAjkChVhJkVEKJRP6JLdADtCduZEon6OgElcCebKt5wwynY0xjjIrKKjMjtrrF3049m3pocZXGqVU-rH-W_8uV2AcWp43T70MkxQ-aoyWKf_a3uGA24JWv5RjmZrJ7bTnJe5l8Yu8KSCeH2NVLq-3aLyHOngbgrn3dcudvV6qHIL_P7CtCxGtqwzv4YSBPw-BD2m03eldk"
    },
    {
      title: "Why Senior Engineers are Learning Rust",
      readTime: "10 min read",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASQHctKW9In3jdYHSEBrf35Dbi8CYrD_Ddbab31R83g3lgaDNzEgCLqpLtkoJIge2DxEN8fT2RVCwHC53R5r92246FwOLbJk_BXt_ul88pn3CJOOa7P2-KIvymkGBRLDKHaPsxwI3VYITr8GJDeFRq3UI8zbfNp7TmGO4Tf1NcKThCWIfKMXpa_MVff2k08wnI8jAQM4JKyNAF3Aai4FxOp4kDx7w0GnPrsCZCmao10YGCfGtmLGXaGetqGNLaXyk8lDGmafjLUNo"
    }
  ];

  return (
    <main className="pt-16 pb-20 px-6 max-w-7xl mx-auto overflow-x-hidden">
      {/* Hero Section: Featured Article */}
      <section className="relative mb-20 group">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent-red/10 rounded-xl blur-3xl opacity-30"></div>
        <div className="relative bg-slate-900/40 rounded-xl overflow-hidden border border-white/5 flex flex-col lg:flex-row min-h-[500px]">
          <div className="lg:w-3/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
            <div className="relative w-full h-full overflow-hidden">
              {/* Carousel Wrapper */}
              <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselSlides.map((slide, i) => (
                  <div key={i} className="min-w-full relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                    <img alt={slide.label} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={slide.img} />
                    <div className="absolute top-16 left-6 z-20">
                      <span className={`${slide.labelBg} px-3 py-1 font-bold text-[10px] uppercase tracking-widest sticker-label inline-block`}>{slide.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${currentSlide === i ? 'bg-primary' : 'bg-white/20 hover:bg-primary'}`}
                  >
                  </button>
                ))}
              </div>
            </div>
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-primary text-background-dark px-4 py-1 font-bold text-xs uppercase tracking-widest sticker-label inline-block">Featured Deep Dive</span>
            </div>
          </div>
          <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center vintage-paper bg-background-dark/80 relative">
            <p className="text-primary font-bold text-sm tracking-[0.3em] mb-4 uppercase">Artificial Intelligence</p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-100">
              Build A <span className="italic">Google Gemini</span> Chatbot with Modern Tech
              <span className="title-underline"></span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 font-light leading-relaxed">
              Master the integration of next-gen Large Language Models into high-performance web applications using HTML5, Tailwind, and JavaScript.
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-primary text-background-dark px-8 py-3 rounded-lg font-bold text-base uppercase hover:bg-white transition-colors">
                Read Article
              </button>
              <span className="text-slate-500 text-sm font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">schedule</span> 12 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid & Sidebar Layout */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Blog Feed */}
        <div className="lg:w-2/3 space-y-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-2xl font-bold uppercase tracking-tighter text-slate-100">Latest Transmissions</h3>
            <div className="flex gap-4">
              <button className="text-primary text-sm font-bold uppercase transition-opacity hover:opacity-70">View All</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <Link key={i} to="/blog-articles" className="group cursor-pointer block">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border border-white/5">
                  <img alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={post.img} />
                  <div className="absolute bottom-2 right-2">
                    <span className={`${post.tagBg} ${post.tag === "Design" || post.tag === "Trending" ? "text-background-dark" : "text-white"} px-3 py-1 text-[10px] font-bold uppercase sticker-label`}>{post.tag}</span>
                  </div>
                </div>
                <p className="text-primary text-xs font-bold tracking-widest mb-2 uppercase">{post.category}</p>
                <h4 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-primary transition-colors">{post.title}</h4>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4 font-light">{post.desc}</p>
                <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-12">
          {/* Trending Topics */}
          <div className="vintage-paper bg-primary/5 p-8 rounded-xl border border-primary/20">
            <h3 className="text-xl font-bold uppercase tracking-tighter mb-6 flex items-center gap-2 text-slate-100">
              <span className="material-symbols-outlined text-primary">local_fire_department</span>
              Trending Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "#JavaScript", class: "bg-background-dark border border-white/10 hover:border-primary hover:text-primary" },
                { name: "#LLMs", class: "bg-primary text-background-dark" },
                { name: "#TailwindCSS", class: "bg-background-dark border border-white/10 hover:border-primary hover:text-primary" },
                { name: "#VintageDesign", class: "bg-background-dark border border-white/10 hover:border-primary hover:text-primary" },
                { name: "#CyberpunkUI", class: "bg-accent-red text-white" },
                { name: "#ReactQuery", class: "bg-background-dark border border-white/10 hover:border-primary hover:text-primary" }
              ].map((topic, i) => (
                <button key={i} className={`${topic.class} px-4 py-2 rounded text-xs font-bold uppercase tracking-widest sticker-label transition-all`}>
                  {topic.name}
                </button>
              ))}
            </div>
          </div>

          {/* Popular This Week */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-tighter border-l-4 border-primary pl-4 text-slate-100">Popular This Week</h3>
            {popularPosts.map((post, i) => (
              <div key={i} className="group flex gap-4 items-start cursor-pointer">
                <div className="w-16 h-16 shrink-0 rounded bg-slate-800 overflow-hidden">
                  <img alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src={post.img} />
                </div>
                <div>
                  <h5 className="text-sm font-bold leading-snug text-slate-100 group-hover:text-primary transition-colors">{post.title}</h5>
                  <p className="text-[10px] text-slate-500 uppercase mt-1 tracking-widest">{post.readTime}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Card */}
          <div className="relative p-8 rounded-xl overflow-hidden bg-background-dark border-2 border-primary/50 glow-edge">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20"></div>
            <p className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-2">JOIN THE LIST</p>
            <h4 className="text-2xl font-bold mb-4 uppercase text-slate-100">Weekly Code Drops</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">No fluff. Just hard-hitting technical deep dives and premium code snippets delivered to your inbox.</p>
            <div className="space-y-3">
              <input
                className="w-full bg-slate-900 border border-white/10 rounded px-4 py-3 text-xs font-bold text-slate-300 placeholder:text-slate-700 focus:border-primary focus:ring-0 outline-none"
                placeholder="YOUR@EMAIL.COM"
                type="email"
              />
              <button className="w-full bg-primary text-background-dark font-bold py-3 rounded uppercase text-xs tracking-[0.2em] hover:bg-white transition-colors">Subscribe Now</button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Blog;
