import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full" />

      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6 inline-block">
              Next-Gen React Engineering
            </span>
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
              Build the Future of the <br />
              <span className="premium-gradient">Digital Web</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Create stunning, high-performance web applications with our premium React boilerplate. 
              Designed for speed, beauty, and developer happiness.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-premium py-4 px-8 text-lg">
                Get Started for Free <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-semibold">
                View Documentation
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { icon: Zap, title: 'Ultra Fast', desc: 'Optimized build processes and hydration for lightning speed.' },
              { icon: Shield, title: 'Secure by Default', desc: 'Best practices for web security baked right into the core.' },
              { icon: Sparkles, title: 'Premium UI', desc: 'Pre-styled components with smooth animations and transitions.' }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                  <feature.icon className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
