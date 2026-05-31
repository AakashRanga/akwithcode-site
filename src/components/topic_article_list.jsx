import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const API_BASE = 'http://localhost:1002/automation/blogs';

const TopicArticleList = () => {
  const [blogs, setBlogs] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchTopics();
  }, []);

  useEffect(() => {
    const topicFromUrl = searchParams.get('topic');
    setSelectedTopic(topicFromUrl || '');
    fetchBlogs(topicFromUrl || '');
  }, [searchParams]);

  const fetchTopics = async () => {
    try {
      const response = await fetch('http://localhost:1002/automation/topics');
      if (!response.ok) throw new Error('Failed to fetch topics');
      const data = await response.json();
      setTopics(['All', ...data.map(t => t.topic)]);
    } catch (err) {
      setTopics(['All']);
    }
  };

  const fetchBlogs = async (topicFilter = '') => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE);
      if (!response.ok) throw new Error('Failed to fetch blogs');

      const data = await response.json();

      if (!topicFilter) {
        setBlogs(data);
      } else {
        setBlogs(data.filter(blog => blog.topic === topicFilter));
      }
    } catch (err) {
      setError(err.message);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const calculateReadTime = (text) => {
    if (!text) return '5 MIN';
    const words = text.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} MIN READ`;
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Vintage Grain Overlay */}
      <div className="vintage-grain fixed inset-0 z-[9999] pointer-events-none opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>

      {/* TopNavBar */}
      <nav className="bg-stone-950/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-orange-500/10 shadow-[0_0_20px_rgba(255,106,0,0.1)]">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 py-4 max-w-screen-2xl mx-auto">
          <Link to="/" className="text-xl sm:text-2xl font-black italic tracking-tighter text-orange-500">KINETIC_MONO</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link to="/" className="text-stone-400 font-['Space_Grotesk'] font-black uppercase tracking-tighter italic hover:text-orange-400 transition-all duration-300">HOME</Link>
            <Link to="/topics" className="text-orange-500 border-b-2 border-orange-500 pb-1 font-['Space_Grotesk'] font-black uppercase tracking-tighter italic hover:text-orange-400 transition-all duration-300">TOPICS</Link>
            <Link to="/topic-article-list" className="text-stone-400 font-['Space_Grotesk'] font-black uppercase tracking-tighter italic hover:text-orange-400 transition-all duration-300">ARTICLES</Link>
            <Link to="/connect" className="text-stone-400 font-['Space_Grotesk'] font-black uppercase tracking-tighter italic hover:text-orange-400 transition-all duration-300">CONTACT</Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/connect" className="bg-primary text-black px-3 sm:px-4 py-2 font-black uppercase tracking-tighter italic scale-95 active:scale-90 transition-transform rounded-lg text-xs sm:text-sm">
              CONTACT_US
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[870px] flex items-center justify-center overflow-hidden px-4 sm:px-6">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-surface-container-low to-surface-container-low z-10"></div>
            <img
              alt="Glitchy charts background"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjxrwjyV_rvDCN20EE60myJNENEhEEzg6Zok-ZTBETZqETtAsG0YOyQz9un7wlZU0XuMZd2OYStW7e59u8ZsOBXNDK6GHJxzEXS9FtJ3oAgmbWvxVrgcAYwvENPXObdkkTYWRHON-ydQwbVlyHYe72oiClJrDG6ENKI57ZuUWqHP16kBYvoQ9nen-io_pFV5N_FCLfCJEfHjdgzNwcTRCgtb49MtCXXLGWxp7eOVgVEeP82sCksZs-71_s3u2cUFAdW1cH0OqS_LE"
            />
          </div>
          <div className="relative z-20 text-center max-w-6xl">
            <div className="inline-block px-4 py-1 mb-4 sm:mb-6 bg-primary text-on-primary font-black text-[10px] tracking-[0.2em] uppercase" style={{ transform: 'rotate(-3deg)' }}>
              PROTOCOL_V.1.0 // GROWTH_CORE
            </div>
            <h1 className="text-[clamp(2rem,8vw,8rem)] leading-[0.9] font-black italic tracking-tighter uppercase mb-4 sm:mb-8 text-on-background">
              KINETIC <span className="text-primary">GROWTH</span> STRATEGIES
            </h1>
            <p className="max-w-2xl mx-auto text-on-surface-variant text-base sm:text-lg md:text-xl font-light leading-relaxed mb-6 sm:mb-10">
              High-performance digital engineering for market dominance. We treat growth as an architectural challenge, not a creative whim.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-primary text-on-primary px-6 sm:px-10 py-3 sm:py-4 font-black uppercase tracking-tighter italic rounded-lg hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all duration-300">
                INITIALIZE_CONSULTATION
              </button>
              <button className="border border-orange-500/30 text-orange-500 px-6 sm:px-10 py-3 sm:py-4 font-black uppercase tracking-tighter italic rounded-lg hover:bg-orange-500/10 transition-all">
                VIEW_DATA_REPORTS
              </button>
            </div>
          </div>
        </section>

        {/* Product Details / Services - Dynamic Topics */}
        <section className="py-12 sm:py-24 px-4 sm:px-6 max-w-screen-2xl mx-auto">
          {/* Topic Filter */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-12 justify-center">
            <button
              onClick={() => setSearchParams({})}
              className={`px-4 sm:px-6 py-2 font-black uppercase tracking-tighter italic text-xs sm:text-sm transition-all ${
                !selectedTopic
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant hover:text-primary'
              } rounded-lg`}
            >
              ALL
            </button>
            {topics.filter(t => t !== 'All').map((topic) => (
              <button
                key={topic}
                onClick={() => setSearchParams({ topic })}
                className={`px-4 sm:px-6 py-2 font-black uppercase tracking-tighter italic text-xs sm:text-sm transition-all ${
                  selectedTopic === topic
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-primary'
                } rounded-lg`}
              >
                {topic}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-4 text-on-surface-variant font-mono text-sm">LOADING_ARCHIVE_DATA...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500 font-mono text-sm">ERROR: {error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
              {blogs.map((blog) => (
                <Link
                  to={`/topic-article/${blog.id}`}
                  key={blog.id}
                  className="group relative flex flex-col bg-surface-container-high p-4 sm:p-8 border-l-4 border-primary/20 hover:border-primary transition-all duration-500 h-full"
                >
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 sm:mb-4">
                    {blog.topic?.toUpperCase() || 'UNCATEGORIZED'} // {String(blog.id).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tighter italic mb-3 sm:mb-6 line-clamp-2">
                    {blog.title}
                  </h3>
                  <div className="w-full aspect-square mb-4 sm:mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-surface-container-low">
                    <img
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      src={`https://lh3.googleusercontent.com/aida-public/AB6AXuBOl2N_mHJKUySLbT44dvc8oiAMquehLgcGAq5-YuQ0fECO5AWx0jIaCIU_4a8LyAsW6GX1mFRAST-IYDq5zgbvB9YQ_HlpPg309Us9by-BWlYtMKUqJ3CYf6aXktF1xfnen0qhgkBshuaffoxA5ifRALE8eQZZGWE2uHdQaBTwq_oC1w1r77ODMt4sEjN3XYwcQCvnUG3hZnxohsvSvnoq_PVfrPehqRtaYYQBpMhNOzmjE_ZBeVhmKe1Z9PNYVvHTK3hlsIiQfrQ`}
                    />
                  </div>
                  <p className="text-on-surface-variant leading-relaxed mb-4 flex-grow line-clamp-3">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-tight text-on-surface">
                    <span className="text-primary material-symbols-outlined text-base">check_circle</span>
                    <span className="text-stone-500">{calculateReadTime(blog.description)}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {blogs.length === 0 && !loading && !error && (
            <div className="text-center py-20">
              <p className="text-on-surface-variant font-mono text-sm">NO ARTICLES FOUND FOR SELECTED TOPIC</p>
            </div>
          )}
        </section>

        {/* Project Showcase */}
        <section className="py-12 sm:py-24 bg-surface-container-lowest overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-16 gap-4 sm:gap-6">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">ARCHIVE_ACCESS</div>
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter italic">PROJECT_SHOWCASE</h2>
              </div>
              <div className="text-right">
                <p className="text-on-surface-variant font-mono text-sm">[{blogs.length}] CONFIDENTIAL_REPORTS</p>
                <p className="text-stone-500 text-xs mt-1">RESTRICTED_ACCESS_ONLY</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-orange-500/10 border border-orange-500/10">
              {blogs.slice(0, 4).map((blog) => (
                <Link
                  to={`/topic-article/${blog.id}`}
                  key={blog.id}
                  className="bg-surface-container-low p-6 sm:p-12 hover:bg-surface-container-high transition-colors group"
                >
                  <div className="flex justify-between items-start mb-4 sm:mb-8">
                    <span className="text-stone-500 font-mono text-xs">REF: #KINETIC_{String(blog.id).padStart(4, '0')}</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-[10px] font-black uppercase">COMPLETED</span>
                  </div>
                  <h4 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter italic mb-3 sm:mb-4 group-hover:text-primary transition-colors line-clamp-1">
                    {blog.title}
                  </h4>
                  <p className="text-on-surface-variant mb-4 sm:mb-8 line-clamp-3">
                    {blog.description}
                  </p>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/5 pt-4 sm:pt-6">
                    <div>
                      <div className="text-[10px] text-stone-500 font-black mb-1">DATE</div>
                      <div className="text-sm font-black italic">{formatDate(blog.created_at)}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-stone-500 font-black mb-1">TOPIC</div>
                      <div className="text-sm font-black italic uppercase">{blog.topic}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-primary material-symbols-outlined">arrow_forward_ios</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-stone-950 p-8 sm:p-12 md:p-24 text-center border border-primary/20 relative">
            <div className="absolute -top-4 -left-4 bg-primary text-on-primary font-black px-4 py-1 text-[10px]" style={{ transform: 'rotate(-3deg)' }}>OPERATIONAL_NOW</div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-6 sm:mb-8">READY TO ACCELERATE?</h2>
            <p className="text-on-surface-variant mb-8 sm:mb-12 text-base sm:text-lg">
              Connect with our lead strategists to audit your current stack and identify performance bottlenecks.
            </p>
            <button className="bg-primary text-on-primary px-8 sm:px-12 py-4 sm:py-5 font-black uppercase tracking-tighter italic rounded-lg hover:shadow-[0_0_15px_rgba(255,106,0,0.3)] transition-all duration-300 text-sm sm:text-base">
              Schedule Growth Consultation
            </button>
            <div className="mt-6 sm:mt-8 text-stone-500 font-mono text-[10px] sm:text-xs tracking-widest">ENCRYPTION_LAYER_ACTIVE // SSL_SECURED</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 w-full py-8 sm:py-12 mt-12 sm:mt-20 border-t border-orange-500/20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="text-orange-500 font-black italic tracking-tighter text-lg sm:text-xl">KINETIC_MONO</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <Link className="text-stone-500 font-['Space_Grotesk'] text-[10px] font-black uppercase tracking-widest hover:text-orange-400 transition-colors" to="/">DOCUMENTATION</Link>
            <Link className="text-stone-500 font-['Space_Grotesk'] text-[10px] font-black uppercase tracking-widest hover:text-orange-400 transition-colors" to="/">API_ACCESS</Link>
            <Link className="text-stone-500 font-['Space_Grotesk'] text-[10px] font-black uppercase tracking-widest hover:text-orange-400 transition-colors" to="/">PRIVACY_LOG</Link>
            <Link className="text-stone-500 font-['Space_Grotesk'] text-[10px] font-black uppercase tracking-widest hover:text-orange-400 transition-colors" to="/">RESOURCES</Link>
          </div>
          <div className="text-stone-500 font-['Space_Grotesk'] text-[10px] font-black uppercase tracking-widest">
            ©2024 KINETIC_MONO_CORE. PROTOCOL_V.1.0
          </div>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-stone-950 px-2 shadow-[0_-4px_20px_rgba(255,106,0,0.15)] border-t border-orange-500/20">
        <Link to="/" className="flex flex-col items-center justify-center text-stone-500 p-2 font-['Space_Grotesk'] text-[10px] font-black uppercase tracking-widest">
          <span className="material-symbols-outlined">terminal</span>
          <span>DASHBOARD</span>
        </Link>
        <Link to="/topics" className="flex flex-col items-center justify-center text-orange-500 bg-orange-500/10 rounded-none p-2 italic font-['Space_Grotesk'] text-[10px] font-black uppercase tracking-widest">
          <span className="material-symbols-outlined">layers</span>
          <span>SERVICES</span>
        </Link>
        <Link to="/topics" className="flex flex-col items-center justify-center text-stone-500 p-2 font-['Space_Grotesk'] text-[10px] font-black uppercase tracking-widest">
          <span className="material-symbols-outlined">school</span>
          <span>ACADEMY</span>
        </Link>
        <Link to="/topics" className="flex flex-col items-center justify-center text-stone-500 p-2 font-['Space_Grotesk'] text-[10px] font-black uppercase tracking-widest">
          <span className="material-symbols-outlined">settings_input_antenna</span>
          <span>PROFILE</span>
        </Link>
      </nav>

      {/* Tailwind Config */}
      <script id="tailwind-config" dangerouslySetInnerHTML={{
        __html: `
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "surface-container-high": "#36281e",
                  "surface-container-low": "#23170f",
                  "surface-container-lowest": "#140d09",
                  "on-primary-fixed-variant": "#7b2f00",
                  "on-surface-variant": "#d1c4bc",
                  "primary-container": "#ff6a00",
                  "on-background": "#f8f7f5",
                  "surface-dim": "#1a110b",
                  "inverse-primary": "#ff8c40",
                  "surface": "#23170f",
                  "on-primary": "#23170f",
                  "primary-fixed-dim": "#ffb694",
                  "primary-fixed": "#ffdbcc",
                  "on-primary-fixed": "#351000",
                  "on-surface": "#f8f7f5",
                  "primary": "#ff6a00",
                  "on-surface-variant": "#d1c4bc",
                  "surface-bright": "#3d2d24",
                  "surface-variant": "#3d2d24",
                  "surface-tint": "#ff6a00",
                  "inverse-surface": "#f8f7f5",
                  "surface-container": "#2c1e14",
                  "on-primary-container": "#23170f",
                  "surface-container-highest": "#413328",
                  "background": "#23170f",
                  "outline": "#ff6a00",
                  "tertiary": "#9ccaff",
                  "on-tertiary": "#003256",
                  "on-tertiary-container": "#d0e4ff"
                },
                fontFamily: {
                  "headline": ["Space Grotesk"],
                  "body": ["Space Grotesk"],
                  "label": ["Space Grotesk"]
                }
              }
            }
          }
        `
      }} />
    </div>
  );
};

export default TopicArticleList;