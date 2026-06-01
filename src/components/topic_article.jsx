import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:1002';
const API_BASE = `${API_BASE_URL}/automation/blogs`;

const TopicArticle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog();
    fetchRelatedBlogs();
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      // First get all blogs and find by ID
      const response = await fetch(API_BASE);
      if (!response.ok) throw new Error('Failed to fetch blogs');

      const data = await response.json();
      const blog = data.find(b => b.id === parseInt(id));

      if (!blog) throw new Error('Blog not found');

      setBlog(blog);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedBlogs = async () => {
    try {
      const response = await fetch(API_BASE);
      if (!response.ok) return;

      const data = await response.json();
      setRelatedBlogs(data.slice(0, 3));
    } catch (err) {
      console.error('Failed to fetch related blogs');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Oct 15, 2023';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const calculateReadTime = (text) => {
    if (!text) return '12 MINS';
    const words = text.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} MINS`;
  };

  const parseTags = (tagsString) => {
    if (!tagsString) return [];
    return tagsString.split(',').map(tag => tag.trim()).filter(Boolean);
  };

  const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-4 text-zinc-500 font-mono text-sm">LOADING_ARCHIVE_DATA...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 font-mono text-sm">ERROR: {error || 'Article not found'}</p>
          <Link to="/topic-article-list" className="mt-4 inline-block text-primary hover:underline">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  const tags = parseTags(blog.tags);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8 uppercase text-[10px] font-black tracking-[0.2em] text-zinc-500">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <span className="text-primary">/</span>
            <Link className="hover:text-primary transition-colors" to="/topic-article-list">Topics</Link>
            <span className="text-primary">/</span>
            <span className="text-zinc-300">{blog.topic || 'Backend Engineering'}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-600 uppercase mb-6 sm:mb-8">
                {blog.title || 'DEEP DIVE: ARCHITECTING SCALABLE MICROSERVICES'}
              </h1>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/40 transition-all"></div>
                    <img
                      className="relative size-10 sm:size-16 rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-primary/50"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrHqi3s7CMrM_6ZIPaoxnQmipSxopUjy7oOKEJJeORCSXaxUcFjqxPpsBiVphMwobjonS902gq-Ci9Jq7RKfkVTjGgOyJ-5EW9vysJ3gBCNy-_Vm5qZmVxPOHURhPqqxtlh_pfTtPn38qI79pO9D-d4njk9yOH-G1wgM8Bq1a5QTK5ZzjybaD2FTtPYDvGKxz85TMkC-xZuqM9PNFqw-yAurt66sx60xvIXVLAicaOQx7eJNSgrEDvJSHxmYma1rZzP1IoPdfwNwY"
                      alt="Alex Kode author"
                    />
                  </div>
                  <div>
                    <p className="text-primary font-bold uppercase tracking-widest text-xs italic">Transmitted by</p>
                    <p className="text-white text-base sm:text-xl font-bold uppercase">Alex Kode</p>
                  </div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-zinc-800"></div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Date Stamp</p>
                  <p className="text-zinc-300 font-bold uppercase text-sm">{formatDate(blog.created_at)}</p>
                </div>
                <div className="hidden sm:block h-12 w-px bg-zinc-800"></div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Read Time</p>
                  <p className="text-zinc-300 font-bold uppercase text-sm">{calculateReadTime(blog.description)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mt-10 sm:mt-16 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-700 to-primary blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-xl border border-zinc-800">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-primary/10 z-20"></div>
              <img
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuComiFfA7g3KyAG_3cgDPYWKkmkhzYnB4-gxAl-1zgtDgkC_jgtGfzkTaqjsKwL3rxDL4Dau_WVDrvDoenPiuq-2Sz19jqOW36trEXv8PPNZbUwUIZaqNrv0E6cA07ni81PUtME1He3ZNYCV96kAW4c3PO5iF1BfvLvTqsbXApaAq5Fr_68PBmV014c7tqMRmnchliDGvKUgLqHaSMd9kagZSyKfWGXSLJ4j72qlzV5V_OvQrr_Tvww3POzfBRf_67x_JWJSB9tg-w"
                alt="Futuristic server room with glowing orange neon lights"
              />
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex gap-2">
              <span className="bg-primary text-black px-3 sm:px-4 py-1 font-black uppercase tracking-widest text-[10px] sm:text-xs">SYSTEM_LIVE</span>
              <span className="bg-background-dark text-primary border border-primary px-3 sm:px-4 py-1 font-black uppercase tracking-widest text-[10px] sm:text-xs">v2.0.4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 grid lg:grid-cols-12 gap-8 sm:gap-16 pb-16 sm:pb-32">
        {/* Main Content */}
        <article className="lg:col-span-8 space-y-8 sm:space-y-12 text-base sm:text-lg leading-relaxed text-zinc-300">
          <section className="space-y-6">
            <p className="text-lg sm:text-2xl font-light italic text-white leading-snug border-l-4 border-primary pl-4 sm:pl-6">
              {blog.question || "In the landscape of modern backend engineering, scalability isn't just a feature—it's survival."}
            </p>
            <p>
              {blog.description || "The journey from a single codebase to a distributed network of services is fraught with peril. Latency, consistency, and network partitions are the ghosts in the machine that we must exorcise."}
            </p>
          </section>

          {blog.steps && (
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-white">01. IMPLEMENTATION GUIDE</h2>
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.steps }}
              />
            </section>
          )}

          {blog.quote && (
            <blockquote className="relative py-8 sm:py-12 px-6 sm:px-12 border-y-2 border-primary/30">
              <span className="absolute -top-3.5 left-6 sm:left-12 bg-primary text-black px-3 sm:px-4 py-0.5 sm:py-1 font-black text-xs sm:text-sm uppercase">PULL_QUOTE.LOG</span>
              <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black italic text-center text-white leading-tight">
                "{blog.quote}"
              </p>
              <div className="mt-6 flex justify-center items-center gap-4 text-primary font-bold tracking-[0.3em] text-[10px] sm:text-xs">
                <div className="h-px w-8 sm:w-12 bg-primary"></div>
                <span>KERNEL_COMMAND_O1</span>
                <div className="h-px w-8 sm:w-12 bg-primary"></div>
              </div>
            </blockquote>
          )}

          {blog.short_code && (
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-white">02. CODE IMPLEMENTATION</h2>
              <div className="rounded-lg overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #000 100%)', borderLeft: '4px solid #ff6a00' }}>
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-600"></div>
                    <div className="size-2.5 rounded-full bg-yellow-500"></div>
                    <div className="size-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">IMPLEMENTATION.SNIPPET</span>
                </div>
                <pre className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto text-green-400">
                  <code dangerouslySetInnerHTML={{ __html: blog.short_code }} />
                </pre>
              </div>
            </section>
          )}

          {/* Tags */}
          <div className="pt-8 sm:pt-12 border-t border-zinc-800">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">Classified Tags</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {tags.length > 0 ? (
                tags.map((tag, index) => (
                  <a
                    key={index}
                    className="bg-primary text-black px-4 sm:px-6 py-1.5 sm:py-2 font-black text-xs sm:text-sm uppercase shadow-lg border-2 border-black hover:scale-110 transition-transform cursor-pointer"
                    style={{ transform: `rotate(${index % 2 === 0 ? -2 : 3}deg)` }}
                    href="#"
                  >
                    #{tag.toUpperCase()}
                  </a>
                ))
              ) : (
                <>
                  <a className="bg-primary text-black px-4 sm:px-6 py-1.5 sm:py-2 font-black text-xs sm:text-sm uppercase shadow-lg border-2 border-black hover:scale-110 transition-transform cursor-pointer" href="#">#MICROSERVICES</a>
                  <a className="bg-zinc-100 text-black px-4 sm:px-6 py-1.5 sm:py-2 font-black text-xs sm:text-sm uppercase shadow-lg border-2 border-black hover:scale-110 transition-transform cursor-pointer" href="#">#BACKEND</a>
                  <a className="bg-red-700 text-white px-4 sm:px-6 py-1.5 sm:py-2 font-black text-xs sm:text-sm uppercase shadow-lg border-2 border-black hover:scale-110 transition-transform cursor-pointer" href="#">#SCALABILITY</a>
                  <a className="bg-white text-black px-4 sm:px-6 py-1.5 sm:py-2 font-black text-xs sm:text-sm uppercase shadow-lg border-2 border-black hover:scale-110 transition-transform cursor-pointer" href="#">#DISTRIBUTED_SYSTEMS</a>
                </>
              )}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8 sm:space-y-12">
          {/* Next Transmission Card */}
          <div className="bg-primary p-1 rounded-xl shadow-2xl rotate-0 sm:rotate-1">
            <div className="bg-background-dark p-4 sm:p-6 rounded-lg border-2 border-black">
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary text-[10px] font-black tracking-widest uppercase">Next Transmission</span>
                <span className="material-symbols-outlined text-primary">sensors</span>
              </div>
              <h4 className="text-lg sm:text-2xl font-black text-white uppercase leading-tight mb-4">The Kubernetes Conspiracy: Beyond the YAML</h4>
              <p className="text-zinc-400 text-sm mb-6">A deep dive into why your cluster is actually a sentient machine trying to optimize your life.</p>
              <button className="w-full bg-primary hover:bg-white text-black py-3 font-black uppercase text-xs tracking-[0.2em] transition-colors cursor-pointer">Pre-order Log</button>
            </div>
          </div>

          {/* Author's Log */}
          <div className="bg-zinc-900/30 p-6 sm:p-8 border-l-2 border-primary/40">
            <h4 className="text-white font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">account_circle</span>
              Author's Log
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-6">
              "I've been building systems since the days of dial-up. Now I spend my time breaking them to see how they tick. Senior Architect at AK WITH CODE, full-time dreamer."
            </p>
            <div className="flex gap-4">
              <a className="text-zinc-500 hover:text-primary transition-colors" href="#">
                <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              <a className="text-zinc-500 hover:text-primary transition-colors" href="#">
                <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
            </div>
          </div>

          {/* Related Transmissions */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-xs border-b border-zinc-800 pb-2">Related Transmissions</h4>
            <div className="space-y-4 sm:space-y-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  to={`/topic-article/${relatedBlog.id}`}
                  key={relatedBlog.id}
                  className="flex gap-3 sm:gap-4 group"
                >
                  <div className="size-12 sm:size-16 flex-shrink-0 bg-zinc-800 overflow-hidden rounded">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgZ_q8VqaEgogNAM1oDWRPRWmx_4dFKwYRoH4wNUFWejZ-22TaV7tU-h2JvkD6co0jwib3daNpCzets7y95vGbPkfMfUsXsn_cQe9jbjZ2oWIAmcPuvuHhsq8uZGO5W32X0vm24wrktBNrRAPCkqXT_zNRqOECPc8ezmUQaoh25CvfmqxOjuoJz0--tsoytIYgBFS3Cl4DM062fFUqEz6uBC1iM8nJqORo744O0IazR6LqxvlGu9CrQA9ZQLIQJXrpyTZmnnvpchY"
                      alt={relatedBlog.title}
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h5 className="text-white text-xs sm:text-sm font-bold leading-tight group-hover:text-primary transition-colors truncate">
                      {relatedBlog.title}
                    </h5>
                    <p className="text-zinc-500 text-[9px] sm:text-[10px] uppercase font-bold">{calculateReadTime(relatedBlog.description)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-primary/20 py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-primary">
              <div className="size-6 flex items-center justify-center bg-primary text-black rounded-sm">
                <span className="material-symbols-outlined font-bold text-sm">terminal</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold tracking-tighter uppercase italic">AK WITH CODE</h2>
            </div>
            <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase">Evolving the human-machine interface since 2018.</p>
          </div>
          <div className="flex gap-8 sm:gap-12">
            <div className="space-y-3">
              <p className="text-white font-black text-xs uppercase tracking-widest">Navigation</p>
              <nav className="flex flex-col gap-2">
                <Link className="text-zinc-500 hover:text-primary text-xs font-bold uppercase tracking-widest" to="/courses">Academy</Link>
                <Link className="text-zinc-500 hover:text-primary text-xs font-bold uppercase tracking-widest" to="/topics">Community</Link>
                <Link className="text-zinc-500 hover:text-primary text-xs font-bold uppercase tracking-widest" to="/topics">Manifesto</Link>
              </nav>
            </div>
            <div className="space-y-3">
              <p className="text-white font-black text-xs uppercase tracking-widest">Legal</p>
              <nav className="flex flex-col gap-2">
                <a className="text-zinc-500 hover:text-primary text-xs font-bold uppercase tracking-widest" href="#">Privacy</a>
                <a className="text-zinc-500 hover:text-primary text-xs font-bold uppercase tracking-widest" href="#">Terms</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">© 2023 AK WITH CODE SYSTEM INC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-[10px] text-green-500/70 font-bold tracking-widest uppercase">Global Network Optimal</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TopicArticle;