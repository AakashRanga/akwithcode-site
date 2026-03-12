import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/', icon: 'home' },
    { name: 'Courses', href: '/courses', icon: 'school' },
    { name: 'Topics', href: '/topics', icon: 'segment' },
    { name: 'Blog', href: '/blog', icon: 'article' },
    { name: 'Connect', href: '/connect', icon: 'alternate_email' }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full border-b border-primary/20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link className="flex items-center gap-3 group" to="/">
              <div className="bg-primary p-1 rounded-sm rotate-3 group-hover:rotate-0 transition-transform shadow-[0_0_15px_rgba(255,106,0,0.4)]">
                <span className="material-symbols-outlined text-background-dark font-bold text-2xl">terminal</span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter uppercase italic text-slate-900 dark:text-slate-100">
                AK <span className="text-primary">WITH</span> CODE
              </h1>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  className={`text-sm font-bold uppercase tracking-widest transition-colors relative group ${location.pathname === link.href ? 'text-primary' : 'text-slate-900 dark:text-slate-100 hover:text-primary'}`} 
                  to={link.href}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all group-hover:w-full ${location.pathname === link.href ? 'w-full' : 'w-0'}`}></span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block relative text-slate-900 dark:text-slate-100">
              <input 
                className="bg-surface-dark/50 border border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-none px-4 py-2 text-xs tracking-widest uppercase w-64 placeholder:text-slate-500 outline-none" 
                placeholder="SEARCH SYSTEM..." 
                type="text"
              />
              <span className="material-symbols-outlined absolute right-3 top-2 text-primary drop-shadow-[0_0_8px_rgba(255,106,0,0.8)] cursor-pointer">search</span>
            </div>
            
            <div className="flex gap-3">
              <button className="hidden sm:flex items-center justify-center rounded size-10 bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">notifications</span>
              </button>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-primary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative bg-background-dark p-2 rounded-full border border-primary/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">search</span>
              </button>
            </div>

            <button onClick={toggleMenu} className="md:hidden text-primary focus:outline-none p-2 hover:bg-primary/10 rounded-full transition-colors">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      <div 
        onClick={toggleMenu}
        className={`fixed inset-0 bg-background-dark/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      ></div>

      <div className={`fixed top-0 left-0 h-screen w-[300px] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-r border-primary/20 shadow-2xl z-50 transition-transform duration-300 ease-in-out flex flex-col p-6 overflow-y-auto md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between mb-10">
          <Link onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3" to="/">
            <div className="bg-primary p-1 rounded-sm rotate-3">
              <span className="material-symbols-outlined text-background-dark font-bold text-xl">terminal</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tighter uppercase italic text-slate-900 dark:text-slate-100">
              AK <span className="text-primary">WITH</span> CODE
            </h1>
          </Link>
          <button onClick={toggleMenu} className="text-primary/70 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="flex-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 mb-4">Navigation</p>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-4 text-sm font-bold uppercase tracking-widest py-4 border-b border-primary/5 group transition-all ${location.pathname === link.href ? 'text-primary' : 'text-slate-900 dark:text-slate-100 hover:text-primary'}`}
              >
                <span className={`material-symbols-outlined text-lg group-hover:text-primary ${location.pathname === link.href ? 'text-primary' : 'text-primary/60'}`}>{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 py-6 border-t border-primary/10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 mb-4">Utilities</p>
            <div className="flex items-center justify-between p-4 bg-primary/5 border border-primary/10 rounded-lg mb-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">notifications</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Notifications</span>
              </div>
              <span className="size-5 bg-primary text-background-dark text-[10px] font-bold flex items-center justify-center rounded-full">3</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-primary/10 text-center">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">© 2026 AK WITH CODE</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
