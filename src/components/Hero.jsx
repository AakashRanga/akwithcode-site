import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      label: "Upcoming Workshop",
      title: (
        <>
          The <span className="text-primary underline decoration-accent">Cyberpunk</span>
          <br />
          Architecture
        </>
      ),
      desc: "Master the art of scalable backend systems using Rust and distributed ledgers. Join the elite network of developers shaping the next era.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOdqgqJCmQkyPZ3-ULbUPMi0WiTpM6VttW-Bwp1slBtzUMHBTeP0J-xzpFNRdHBz-lU4pCtrkJr7P28AB3AAM-Lp1mSLfyh__baVRtES5h8BaH5uPju0P1XaY6UkxmQjEifw5ptLUKxyuzzyazzDIay3cOks75_KslmMX1yc_g6NPXbHsOZuKNQkZMKKx2MmeUVbtAI9EgL9yzFfhtWoJ169BpC900Gz5t8CKmowUO0zxhbJqDY4xtybwOmi1W4KpM2wAImCoCSU0",
      ctaRegister: "Register Now",
      ctaDetails: "Details"
    },
    {
      label: "Advanced Course",
      title: (
        <>
          Fullstack <span className="text-primary underline decoration-accent">React</span>
          <br />
          Engineering
        </>
      ),
      desc: "Learn advanced design patterns, server components, fine-grained reactivity, and beautiful visual effects to build outstanding digital products.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxrTaQUVWXSvHuwdJ0ddxtoC8GBNlfgAK-nonhoHpwns6MdusjUbYkEwEpJJKT-UFBH4gx_lah3zgC_UqX1jGJ6ntlezi9-ZQ6V5DbQ6Glmu5YmdGAjZ4JsXBA30YgVk8Z0KDCjDd5FIzJOZkJVsU_IoAZNhPEmft7mOkT4CtJc8GZ5ezPUWKZNZFQrAMlEDQTZOrtdnBNEo_4nis5B36IMJV7nAs_QlDGJ4xMhSpen2WfmgY6kQTCFDjPzGTnadkWFzC2kPfKNq0",
      ctaRegister: "Enroll Now",
      ctaDetails: "Curriculum"
    },
    {
      label: "AI Integration",
      title: (
        <>
          Orchestrating <span className="text-primary underline decoration-accent">LLM</span>
          <br />
          Agents
        </>
      ),
      desc: "Build autonomous web-agents using Google Gemini APIs, dynamic prompt chains, and robust vector search retrieval mechanisms.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMOkI-tSJYi1qbZsuQtEKd0nbRdxL5_jdj3ixwvd2NBwlVEdcagqNPef7xjpz83vz15e8yBNSc_JesUyT6c8pdOGTHR64S_qFEAdWrcV3KihGA4Frie9yu2JXtTXHO4vnAZAw-YGJpuNFpz0g-gaLH-vBSL-cqPmolrlBBGUsDRdy5p_f33bkH7mPKOT7rAwBjUeXj486CAiOUppQsAttLikpQpL8so2bQfArXqAfdhu0OTZeizg2bRC-G5cz72S1SwxFATWRAvS0",
      ctaRegister: "Explore Now",
      ctaDetails: "Syllabus"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative group h-[480px] sm:h-[500px] md:h-[520px] overflow-hidden rounded-xl border border-primary/20 bg-surface-dark select-none">
      {/* Slide Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Overlay Gradient: deeper on mobile to guarantee readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/90 lg:via-background-dark/40 to-transparent lg:bg-gradient-to-r lg:from-background-dark lg:via-background-dark/70 lg:to-transparent z-10"></div>
              
              {/* Text Content */}
              <div className="absolute inset-0 flex items-center p-4 sm:p-12 lg:p-16 z-20">
                <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6">
                  <div className="inline-block bg-accent text-white px-3 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] vintage-label">
                    {slide.label}
                  </div>
                  <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter uppercase italic text-slate-100 break-words">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-base lg:text-lg text-slate-300 font-light max-w-xs sm:max-w-lg leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {slide.desc}
                  </p>
                  <div className="flex flex-wrap gap-2.5 sm:gap-4 pt-2 sm:pt-4">
                    <button className="bg-primary text-background-dark px-4 py-2.5 sm:px-8 sm:py-4 text-[10px] sm:text-sm font-black uppercase tracking-widest hover:bg-white transition-all cursor-pointer">
                      {slide.ctaRegister}
                    </button>
                    <button className="border border-white/20 text-white px-4 py-2.5 sm:px-8 sm:py-4 text-[10px] sm:text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer">
                      {slide.ctaDetails}
                    </button>
                  </div>
                </div>
              </div>

              {/* Background Image: occupies right 2/3 on desktop, full screen on mobile */}
              <div className="absolute inset-0 lg:left-1/3 lg:w-2/3 h-full grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  className="w-full h-full object-cover select-none"
                  src={slide.img} 
                  alt={slide.label}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Carousel Indicators */}
      <div className="absolute bottom-4 left-4 sm:left-12 lg:left-16 z-30 flex gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="p-2 cursor-pointer group"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === i ? 'w-12 bg-primary' : 'w-6 bg-white/20 group-hover:bg-white/40'
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
