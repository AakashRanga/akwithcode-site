import React, { useEffect, useState, useRef } from 'react';
import robotImg from '../assets/robot_img.png';

const Connect = () => {
    const [robotMsg, setRobotMsg] = useState("Let's build your project together.");
    const [metadata, setMetadata] = useState(null);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const tooltipRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        // Scroll Reveal Animation
        const reveals = document.querySelectorAll(".reveal");
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, options);

        reveals.forEach(reveal => observer.observe(reveal));
        observerRef.current = observer;

        // Tooltip logic
        const handleScroll = () => {
            if (window.scrollY > 100 && !tooltipRef.current?.classList.contains('has-shown')) {
                setTooltipVisible(true);
                tooltipRef.current?.classList.add('has-shown');
                setTimeout(() => {
                    setTooltipVisible(false);
                }, 4000);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Initial check
        setTimeout(() => {
            reveals.forEach(reveal => {
                const rect = reveal.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    reveal.classList.add("active");
                }
            });
        }, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const tooltipMessages = [
        "Tell us your exact parameters.",
        "Analyzing incoming data...",
        "Excellent choice.",
        "Processing details...",
        "Almost ready to synchronize."
    ];

    const handleInputFocus = () => {
        setMetadata(null);
        const randomMsg = tooltipMessages[Math.floor(Math.random() * tooltipMessages.length)];
        setRobotMsg(randomMsg);
        setTooltipVisible(true);
    };

    const handleInputBlur = () => {
        setTooltipVisible(false);
    };

    const handleCardEnter = (cardData) => {
        setMetadata(cardData);
        setTooltipVisible(true);
    };

    const handleCardLeave = () => {
        setTooltipVisible(false);
        setTimeout(() => {
            setMetadata(null);
            setRobotMsg("System Idle.");
        }, 300);
    };

    const projects = [
        {
            title: "Enterprise RPA Orchestration",
            purpose: "End-to-End Invoice Automation & Verification",
            stack: "UiPath, REFramework, Python (OCR), SQL Server",
            performance: "Processing time reduced by 85% per invoice.",
            benefits: "Saved 40 man-hours/week. 99.8% accuracy rate on unstructured data extraction.",
            desc: "Intelligent robotic process automation deployment utilizing UiPath to handle complex financial workflows.",
            icon: "smart_toy",
            tag: "RPA / Automation",
            tagColor: "bg-primary"
        },
        {
            title: "High-Frequency Data Pipeline",
            purpose: "Real-time multi-source data ingestion and normalization",
            stack: "Rust, Apache Kafka, PostgreSQL, Docker",
            performance: "Handles 50,000 req/sec with <10ms P99 latency.",
            benefits: "Zero-downtime streaming architecture. Enabled real-time analytics dashboards.",
            desc: "Memory-safe rust backend designed for massive throughput and unyielding stability under load.",
            icon: "memory",
            tag: "Backend Core",
            tagColor: "bg-accent-red"
        }
    ];

    return (
        <main className="max-w-7xl mx-auto px-6 py-16 relative z-10 overflow-hidden">
            {/* Background glow effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-[-20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
            </div>

            {/* Hero Section */}
            <section className="max-w-4xl mx-auto text-center mb-24 reveal">
                <div className="inline-block bg-primary/20 text-primary border border-primary/40 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(255,106,0,0.2)]">
                    Secure Handshake Initialization
                </div>
                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic mb-8 text-slate-100">
                    Build The <br /> <span className="text-primary underline decoration-accent-red decoration-4 underline-offset-8">Future</span>
                </h1>
                <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Enter your parameters into the terminal below. Our intelligent systems and engineering core are ready to synchronize with your vision.
                </p>
            </section>

            {/* Deployed Protocols */}
            <section className="mb-32 reveal delay-100">
                <div className="flex items-end justify-between border-b border-primary/20 pb-4 mb-8">
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3 text-slate-100">
                            <span className="material-symbols-outlined text-primary text-4xl">memory</span>
                            Deployed <span className="text-primary">Protocols</span>
                        </h2>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Hover capabilities to scan architecture details.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <article 
                            key={i}
                            className="bg-surface-dark border border-white/5 rounded-xl overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors relative"
                            onMouseEnter={() => handleCardEnter(project)}
                            onMouseLeave={handleCardLeave}
                        >
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none"></div>
                            <div className="aspect-[16/9] bg-background-dark relative overflow-hidden border-b border-white/5 z-10">
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10"></div>
                                
                                {project.title === "Enterprise RPA Orchestration" ? (
                                    /* RPA Visual */
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                                            <div className="w-24 h-24 rounded-full border border-accent/40 animate-[spin_8s_linear_infinite_reverse]"></div>
                                        </div>
                                        <span className="material-symbols-outlined absolute text-5xl text-primary/50">{project.icon}</span>
                                    </div>
                                ) : (
                                    /* Data Pipeline Visual */
                                    <div className="absolute inset-0 flex items-center justify-center opacity-70">
                                        <div className="grid grid-cols-5 gap-2 w-full px-8">
                                            <div className="h-20 bg-primary/20 rounded-sm animate-pulse-slow [animation-delay:100ms]"></div>
                                            <div className="h-32 bg-primary/40 rounded-sm animate-pulse-slow [animation-delay:200ms]"></div>
                                            <div className="h-16 bg-accent-red/30 rounded-sm animate-pulse-slow [animation-delay:300ms]"></div>
                                            <div className="h-40 bg-primary/60 rounded-sm animate-pulse-slow [animation-delay:100ms]"></div>
                                            <div className="h-24 bg-primary/30 rounded-sm animate-pulse-slow"></div>
                                        </div>
                                    </div>
                                )}

                                <div className="absolute top-4 left-4 z-20">
                                    <span className={`${project.tagColor} text-background-dark text-[10px] font-black px-3 py-1 uppercase tracking-widest shadow-lg`}>{project.tag}</span>
                                </div>
                            </div>
                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-bold uppercase mb-2 text-slate-100 group-hover:text-primary transition-colors tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-slate-400 line-clamp-2">{project.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                {/* Left Sidebar */}
                <div className="hidden lg:col-span-4 lg:flex flex-col space-y-8 reveal delay-100">
                    <div className="bg-surface-dark border border-white/5 p-6 rounded-xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary/20">
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-100">Protocol Stats</h3>
                            <span className="material-symbols-outlined text-primary text-xl">query_stats</span>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                                    <span>Network Load</span>
                                    <span className="text-primary font-bold">14%</span>
                                </div>
                                <div className="h-1 w-full bg-background-dark overflow-hidden">
                                    <div className="h-full bg-primary w-[14%] animate-pulse"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                                    <span>Core Efficiency</span>
                                    <span className="text-accent font-bold">99.9%</span>
                                </div>
                                <div className="h-1 w-full bg-background-dark overflow-hidden">
                                    <div className="h-full bg-accent w-[99%]"></div>
                                </div>
                            </div>
                            <div className="pt-4 mt-4 border-t border-white/5 text-[10px] text-slate-500 font-mono flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                SYSTEM READY TO ACCEPT NEW PROJECTS
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary/5 p-8 rounded-xl border border-primary/20 border-dashed hover:bg-primary/10 transition-colors">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4 block">handshake</span>
                        <h4 className="text-xl font-black uppercase tracking-tighter italic mb-2 text-slate-100">Direct Link</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mb-6">Skip the form and establish a direct encrypted link with lead architects.</p>
                        <a href="mailto:hello@akwithcode.system" className="text-xs font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/30 hover:border-primary pb-1 inline-flex items-center gap-2">
                            Initialize Email <span className="material-symbols-outlined text-sm">arrow_outward</span>
                        </a>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="lg:col-span-8 reveal delay-200">
                    <form className="bg-surface-dark border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-1000"></div>

                        <div className="mb-10 pb-6 border-b border-white/5 relative z-10 flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0 text-primary">
                                <span className="material-symbols-outlined text-2xl">terminal</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-black uppercase tracking-tighter italic text-slate-100">Input <span className="text-primary">Parameters</span></h2>
                                <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Execute Handshake Request</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <div className="col-span-full md:col-span-1">
                                <label className="block text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Target Identity</label>
                                <input
                                    className="w-full bg-background-dark border border-white/10 rounded-lg h-14 px-5 text-slate-100 placeholder:text-slate-600 glow-input text-sm"
                                    placeholder="Full Name / Handle" type="text" required onFocus={handleInputFocus} onBlur={handleInputBlur}
                                />
                            </div>
                            <div className="col-span-full md:col-span-1">
                                <label className="block text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Comm Link (Email)</label>
                                <input
                                    className="w-full bg-background-dark border border-white/10 rounded-lg h-14 px-5 text-slate-100 placeholder:text-slate-600 glow-input text-sm"
                                    placeholder="encrypted@domain.com" type="email" required onFocus={handleInputFocus} onBlur={handleInputBlur}
                                />
                            </div>
                            <div className="col-span-full md:col-span-1">
                                <label className="block text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Protocol Type</label>
                                <select className="w-full bg-background-dark border border-white/10 rounded-lg h-14 px-5 text-slate-100 appearance-none glow-input text-sm focus:bg-background-dark" onFocus={handleInputFocus} onBlur={handleInputBlur}>
                                    <option value="" disabled selected>Select objective...</option>
                                    <option value="saas">SaaS Infrastructure</option>
                                    <option value="app">Mobile / Web App</option>
                                    <option value="mentorship">Architecture Mentorship</option>
                                    <option value="audit">Security Audit</option>
                                </select>
                            </div>
                            <div className="col-span-full md:col-span-1">
                                <label className="block text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Resource Allocation</label>
                                <select className="w-full bg-background-dark border border-white/10 rounded-lg h-14 px-5 text-slate-100 appearance-none glow-input text-sm focus:bg-background-dark" onFocus={handleInputFocus} onBlur={handleInputBlur}>
                                    <option value="" disabled selected>Estimated capacity...</option>
                                    <option value="small">&lt; $5k (Micro-service)</option>
                                    <option value="medium">$5k - $20k (Standard Build)</option>
                                    <option value="large">&gt; $20k (Enterprise Grade)</option>
                                    <option value="idk">Awaiting Estimation</option>
                                </select>
                            </div>
                            <div className="col-span-full">
                                <label className="block text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Data Payload</label>
                                <textarea
                                    className="w-full bg-background-dark border border-white/10 rounded-lg p-5 text-slate-100 placeholder:text-slate-600 glow-input text-sm resize-none h-40"
                                    placeholder="Describe your requirements..." required onFocus={handleInputFocus} onBlur={handleInputBlur}
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                            <div className="flex items-center gap-3 text-slate-400">
                                <span className="material-symbols-outlined text-accent-red animate-pulse">security</span>
                                <span className="text-[10px] font-mono tracking-widest uppercase">End-to-End Encrypted</span>
                            </div>
                            <button type="submit" className="w-full sm:w-auto bg-primary text-background-dark px-10 py-4 text-xs font-black uppercase tracking-[0.2em] btn-glow hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(179,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-3">
                                <span>Execute</span>
                                <span className="material-symbols-outlined text-lg">rocket_launch</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Interactive Robot Assistant */}
            <div className="fixed bottom-8 right-8 z-50 flex items-end gap-4 pointer-events-none">
                <div
                    ref={tooltipRef}
                    className={`${tooltipVisible ? 'opacity-100' : 'opacity-0'} flex flex-col bg-background-dark/95 backdrop-blur-md border border-primary/40 p-4 rounded-xl rounded-br-none shadow-[0_0_20px_rgba(255,106,0,0.2)] transition-opacity duration-300 pointer-events-auto max-w-sm w-[350px]`}
                >
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-primary/20">
                        <span className="material-symbols-outlined text-primary text-sm animate-pulse">memory</span>
                        <span className="text-xs font-black uppercase tracking-widest text-primary">System Scanner</span>
                    </div>

                    {!metadata ? (
                        <p className="text-xs text-slate-200 font-mono">{robotMsg}</p>
                    ) : (
                        <div className="flex flex-col gap-3 tooltip-content max-h-[300px] overflow-y-auto pr-2">
                            <h4 className="font-bold text-slate-100 text-sm italic uppercase">{metadata.title}</h4>
                            <div>
                                <span className="text-[9px] uppercase tracking-widest text-slate-500 block mb-1">Purpose</span>
                                <p className="text-xs text-slate-300 font-mono">{metadata.purpose}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-widest text-slate-500 block mb-1">Tech Stack</span>
                                <p className="text-xs text-primary font-mono">{metadata.stack}</p>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-widest text-slate-500 block mb-1">Impact</span>
                                <p className="text-xs text-slate-300 font-mono">{metadata.benefits}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-32 h-32 relative overflow-visible pointer-events-auto cursor-pointer flex-shrink-0 animate-float drop-shadow-[0_15px_15px_rgba(255,106,0,0.15)] group"
                    onMouseEnter={() => { if (!tooltipVisible) setTooltipVisible(true); setRobotMsg("I am ready to assist. Scan a protocol or input your connection request."); }}
                    onMouseLeave={() => setTooltipVisible(false)}
                >
                    <img id="robot-image" src={robotImg} alt="Vintage 3D Robot Assistant" className="w-full h-full object-contain filter hover:brightness-110 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,106,0,0.3)]" />
                </div>
            </div>
        </main>
    );
};

export default Connect;
