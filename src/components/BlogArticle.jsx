import React from 'react';
import { Link } from 'react-router-dom';

const BlogArticle = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-16 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-8 uppercase text-[10px] font-black tracking-[0.2em] text-zinc-500">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <span className="text-primary">/</span>
            <Link className="hover:text-primary transition-colors" to="/blog">Blog</Link>
            <span className="text-primary">/</span>
            <span className="text-zinc-300">Backend Engineering</span>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-600 uppercase mb-8">
                DEEP DIVE: ARCHITECTING <span className="text-primary">SCALABLE</span> MICROSERVICES
              </h1>
              
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/40 transition-all"></div>
                    <img 
                       className="relative size-16 rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-primary/50" 
                       src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrHqi3s7CMrM_6ZIPaoxnQmipSxopUjy7oOKEJJeORCSXaxUcFjqxPpsBiVphMwobjonS902gq-Ci9Jq7RKfkVTjGgOyJ-5EW9vysJ3gBCNy-_Vm5qZmVxPOHURhPqqxtlh_pfTtPn38qI79pO9D-d4njk9yOH-G1wgM8Bq1a5QTK5ZzjybaD2FTtPYDvGKxz85TMkC-xZuqM9PNFqw-yAurt66sx60xvIXVLAicaOQx7eJNSgrEDvJSHxmYma1rZzP1IoPdfwNwY" 
                       alt="Alex Kode author"
                    />
                  </div>
                  <div>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm italic">Transmitted by</p>
                    <p className="text-white text-xl font-bold uppercase">Alex Kode</p>
                  </div>
                </div>
                <div className="h-12 w-px bg-zinc-800"></div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Date Stamp</p>
                  <p className="text-zinc-300 font-bold uppercase">Oct 15, 2023</p>
                </div>
                <div className="h-12 w-px bg-zinc-800"></div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Read Time</p>
                  <p className="text-zinc-300 font-bold uppercase">12 MINS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mt-16 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent-red to-primary blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl border border-zinc-800 vintage-grain">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-primary/10 z-20"></div>
              <img 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuComiFfA7g3KyAG_3cgDPYWKkmkhzYnB4-gxAl-1zgtDgkC_jgtGfzkTaqjsKwL3rxDL4Dau_WVDrvDoenPiuq-2Sz19jqOW36trEXv8PPNZbUwUIZaqNrv0E6cA07ni81PUtME1He3ZNYCV96kAW4c3PO5iF1BfvLvTqsbXApaAq5Fr_68PBmV014c7tqMRmnchliDGvKUgLqHaSMd9kagZSyKfWGXSLJ4j72qlzV5V_OvQrr_Tvww3POzfBRf_67x_JWJSB9tg-w" 
                alt="Futuristic server room"
              />
            </div>
            <div className="absolute bottom-6 right-6 z-30 flex gap-2">
              <span className="bg-primary text-black px-4 py-1 text-xs font-black uppercase tracking-widest">SYSTEM_LIVE</span>
              <span className="bg-background-dark text-primary border border-primary px-4 py-1 text-xs font-black uppercase tracking-widest">v2.0.4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Layout */}
      <main className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-12 gap-16 pb-32">
        {/* Main Content */}
        <article className="lg:col-span-8 space-y-12 text-lg leading-relaxed text-zinc-300">
          <section className="space-y-6">
            <p className="text-2xl font-light italic text-white leading-snug border-l-4 border-primary pl-6">
              In the landscape of modern backend engineering, scalability isn't just a feature—it's survival. 
              As we move away from monolithic giants, the microservices architecture emerges as the neon-lit path to resilience.
            </p>
            <p>
              The journey from a single codebase to a distributed network of services is fraught with peril. 
              Latency, consistency, and network partitions are the ghosts in the machine that we must exorcise. 
              Today, we peel back the layers of service orchestration and data consistency in high-load environments.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">01. THE BLUEPRINT OF DECENTRALIZATION</h2>
            <p>
              Every service must be its own island of functionality. If your "Order Service" cannot survive the death of the "Notification Service," you haven't built microservices; you've built a distributed monolith.
            </p>
            <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl glow-border">
              <h3 className="text-primary font-black uppercase mb-4 tracking-widest">Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">radio_button_checked</span>
                  <span><strong className="text-white">Database per Service:</strong> Never share a schema. Data isolation is non-negotiable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">radio_button_checked</span>
                  <span><strong className="text-white">API Gateway Pattern:</strong> A single entry point to mask internal complexity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">radio_button_checked</span>
                  <span><strong className="text-white">Event-Driven Flow:</strong> Asynchronous communication over synchronous coupling.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Pull Quote */}
          <blockquote className="relative py-12 px-12 border-y-2 border-primary/30">
            <span className="absolute -top-6 left-12 bg-primary text-black px-4 py-1 font-black text-sm uppercase">PULL_QUOTE.LOG</span>
            <p className="text-4xl md:text-5xl font-black italic text-center text-white leading-none">
              "ARCHITECTURE IS THE ART OF DECIDING WHICH <span className="text-primary">CHAOS</span> YOU CAN LIVE WITH."
            </p>
            <div className="mt-6 flex justify-center items-center gap-4 text-primary font-bold tracking-[0.3em] text-xs">
              <div className="h-px w-12 bg-primary"></div>
              <span>KERNEL_COMMAND_O1</span>
              <div className="h-px w-12 bg-primary"></div>
            </div>
          </blockquote>

          <section className="space-y-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">02. COMMUNICATION CHANNELS</h2>
            <p> How do services talk? When latency is the enemy, your choice of protocol is your primary weapon. </p>
            
            {/* Terminal Style Code Box */}
            <div className="retro-terminal rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-accent-red"></div>
                  <div className="size-2.5 rounded-full bg-yellow-500"></div>
                  <div className="size-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">GRPC_INTERFACE.GO</span>
              </div>
              <pre className="p-6 font-mono text-sm overflow-x-auto text-green-400">
                <code>
                  {`func HandleStream(srv pb.Metrics_StreamServer) error {
    // Initialize high-frequency data pipeline
    ctx := srv.Context()
    for {
        // Listen for incoming telemetry packets
        req, err := srv.Recv()
        if err == io.EOF {
            return srv.SendAndClose(&pb.Status{Code: 200})
        }
        // Broadcast to internal event bus
        EventBus.Publish("telemetry.raw", req.Data)
    }
}`}
                </code>
              </pre>
            </div>
          </section>

          {/* Tags */}
          <div className="pt-12 border-t border-zinc-800">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">Classified Tags</p>
            <div className="flex flex-wrap gap-4">
              <a className="sticker-tag bg-primary text-black px-6 py-2 font-black text-sm uppercase shadow-lg border-2 border-black" href="#">#MICROSERVICES</a>
              <a className="sticker-tag bg-zinc-100 text-black px-6 py-2 font-black text-sm uppercase shadow-lg border-2 border-black" href="#">#BACKEND</a>
              <a className="sticker-tag bg-accent-red text-white px-6 py-2 font-black text-sm uppercase shadow-lg border-2 border-black" href="#">#SCALABILITY</a>
              <a className="sticker-tag bg-white text-black px-6 py-2 font-black text-sm uppercase shadow-lg border-2 border-black" href="#">#DISTRIBUTED_SYSTEMS</a>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Next Transmission Card */}
          <div className="bg-primary p-1 rounded-xl shadow-2xl rotate-1">
            <div className="bg-background-dark p-6 rounded-lg border-2 border-black">
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary text-[10px] font-black tracking-widest uppercase">Next Transmission</span>
                <span className="material-symbols-outlined text-primary">sensors</span>
              </div>
              <h4 className="text-2xl font-black text-white uppercase leading-tight mb-4">The Kubernetes Conspiracy: Beyond the YAML</h4>
              <p className="text-zinc-400 text-sm mb-6">A deep dive into why your cluster is actually a sentient machine trying to optimize your life.</p>
              <button className="w-full bg-primary hover:bg-white text-black py-3 font-black uppercase text-xs tracking-[0.2em] transition-colors">Pre-order Log</button>
            </div>
          </div>

          {/* Author's Log */}
          <div className="bg-zinc-900/30 p-8 border-l-2 border-primary/40">
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
            <div className="space-y-6">
              <a className="flex gap-4 group" href="#">
                <div className="size-16 flex-shrink-0 bg-zinc-800 overflow-hidden rounded">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgZ_q8VqaEgogNAM1oDWRPRWmx_4dFKwYRoH4wNUFWejZ-22TaV7tU-h2JvkD6co0jwib3daNpCzets7y95vGbPkfMfUsXsn_cQe9jbjZ2oWIAmcPuvuHhsq8uZGO5W32X0vm24wrktBNrRAPCkqXT_zNRqOECPc8ezmUQaoh25CvfmqxOjuoJz0--tsoytIYgBFS3Cl4DM062fFUqEz6uBC1iM8nJqORo744O0IazR6LqxvlGu9CrQA9ZQLIQJXrpyTZmnnvpchY" alt="Server hardware" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-white text-sm font-bold leading-tight group-hover:text-primary transition-colors">Securing the Data Fortress: Auth in 2024</h5>
                  <p className="text-zinc-500 text-[10px] uppercase font-bold">5 MIN READ</p>
                </div>
              </a>
              <a className="flex gap-4 group" href="#">
                <div className="size-16 flex-shrink-0 bg-zinc-800 overflow-hidden rounded">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmHiN0OpaQBUaNLlFa5vS2Y4IfPoXpVKBHTqRLVkdg8uzQZuUeuFuUpz4QwsgiDbyqndOm1GBfAiNyWOgmIuAmwcHcq7r_njt5cND4h9p_9VSRPCwpZ7vjbRspsT-Noku85_nvzbXSBBPAhEzzaro5NOQOS4e2vF964ja3QY1h6CA99mXYCoXWVVtp5qn2aT6W8AAg6XJVHPjSfHkVgBkd3XeQQp0fRSX8G8OuxM27ueYAA172EjT8VMTgKXENb1u1INalSOlzXPE" alt="Computer chip" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-white text-sm font-bold leading-tight group-hover:text-primary transition-colors">Rust vs Go: The Battle for the Backend</h5>
                  <p className="text-zinc-500 text-[10px] uppercase font-bold">18 MIN READ</p>
                </div>
              </a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default BlogArticle;
