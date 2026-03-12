import React from 'react';

const CourseLesson = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden pt-16">
      <div className="fixed inset-0 grain-texture z-50 pointer-events-none"></div>
      
      <main className="max-w-[1600px] mx-auto p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Left Column: Video & Content */}
        <div className="flex flex-col gap-6">
          {/* Video Player */}
          <div className="relative group rounded-xl overflow-hidden border-2 border-primary/30 glow-border bg-black aspect-video">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQ0tGmYlG4ygMrV_Uk5hLhreYF5P9htQOQ1Yd8YTJRo3fF1-phQOv0pVZa5fehRVnSzrwJyq70zhRYjUc34S1-dawJE2EYtpoK7sdMQgCzmLX0TB8mrQFdM8pAbO6EX73iJeCrnH_bAE-wAxMItHiiPsoqPCnNokF10u0ne6wsTWrkPI9m82dXbf0xSKT14q_7JsMMdM61DLrY2iSBnFQeccOS7LX8g7MvavnqZk6u_WeoFoGsPTq7zPDqo-VbQSDv0QZsxk6I9oc')" }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="size-20 bg-primary/90 hover:bg-primary text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-2xl">
                <span className="material-symbols-outlined text-5xl">play_arrow</span>
              </button>
            </div>
            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="h-1.5 w-full bg-slate-700 rounded-full mb-3 relative cursor-pointer">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-primary rounded-full"></div>
                <div className="absolute left-1/3 top-1/2 -translate-y-1/2 size-4 bg-white rounded-full border-2 border-primary shadow-glow"></div>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-slate-300">
                <span>12:45 / 45:00</span>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-sm cursor-pointer">settings</span>
                  <span className="material-symbols-outlined text-sm cursor-pointer">fullscreen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Header */}
          <div className="relative bg-white dark:bg-slate-900 p-8 rounded-xl border-l-8 border-primary shadow-xl">
            <div className="absolute -top-4 -right-4 bg-accent-red text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter rotate-12">
              Live Session
            </div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight leading-none uppercase italic text-slate-900 dark:text-white">Mastering Memory Management</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Deep dive into manual memory allocation, pointers, and ownership models in low-level programming. We explore why heap vs stack matters in high-performance C++ and Rust applications.
            </p>
            {/* Terminal Style Resources */}
            <div className="mt-8 bg-black rounded-lg p-6 font-mono text-sm border-t-4 border-accent-red">
              <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                <span className="text-primary">$</span>
                <span className="text-slate-100">ls ./lesson-resources</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-primary">description</span>
                  memory_map_v1.pdf
                </a>
                <a className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-primary">folder_zip</span>
                  starter_code.zip
                </a>
                <a className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-primary">link</span>
                  official_docs.md
                </a>
                <a className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-primary">quiz</span>
                  knowledge_check.exe
                </a>
              </div>
            </div>
          </div>

          {/* Lesson Navigation */}
          <div className="flex justify-between items-center mt-4">
            <button className="retro-sticker bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-3 font-bold uppercase tracking-widest text-sm flex items-center gap-2 border-2 border-slate-900 dark:border-white">
              <span className="material-symbols-outlined">arrow_back</span>
              Prev Lesson
            </button>
            <button className="retro-sticker bg-primary text-white px-8 py-3 font-bold uppercase tracking-widest text-sm flex items-center gap-2 border-2 border-slate-900">
              Next Lesson
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Column: Code Editor & Progress */}
        <div className="flex flex-col gap-6 h-full">
          {/* Code Editor Wrapper */}
          <div className="flex-1 min-h-[500px] flex flex-col bg-[#1e1e1e] rounded-xl overflow-hidden border-2 border-slate-700/50 shadow-2xl relative">
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-accent-red"></div>
                  <div className="size-3 rounded-full bg-yellow-500"></div>
                  <div className="size-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-slate-400">main.cpp — ak-with-code — SSH</span>
              </div>
              <div className="flex gap-2">
                <span className="material-symbols-outlined text-slate-500 text-sm hover:text-white cursor-pointer">play_arrow</span>
                <span className="material-symbols-outlined text-slate-500 text-sm hover:text-white cursor-pointer">save</span>
              </div>
            </div>
            {/* Syntax Highlighting Content */}
            <div className="flex-1 p-6 font-mono text-sm overflow-auto">
              <table className="w-full border-collapse text-slate-300">
                <tbody>
                  <tr className="group">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">1</td>
                    <td><span className="text-[#569cd6]">#include</span> <span className="text-[#ce9178]">&lt;iostream&gt;</span></td>
                  </tr>
                  <tr className="group">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">2</td>
                    <td><span className="text-[#569cd6]">#include</span> <span className="text-[#ce9178]">&lt;memory&gt;</span></td>
                  </tr>
                  <tr className="group">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">3</td>
                    <td></td>
                  </tr>
                  <tr className="group">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">4</td>
                    <td><span className="text-[#569cd6]">int</span> <span className="text-[#dcdcaa]">main</span>() {"{"}</td>
                  </tr>
                  <tr className="group bg-primary/10">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">5</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]">// Manually allocating memory (DANGEROUS)</span></td>
                  </tr>
                  <tr className="group">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">6</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">int</span>* ptr = <span className="text-[#569cd6]">new</span> <span className="text-[#569cd6]">int</span>(<span className="text-[#b5cea8]">42</span>);</td>
                  </tr>
                  <tr className="group">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">7</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#dcdcaa]">std::cout</span> &lt;&lt; <span className="text-[#ce9178]">"Value: "</span> &lt;&lt; *ptr &lt;&lt; <span className="text-[#dcdcaa]">std::endl</span>;</td>
                  </tr>
                  <tr className="group text-slate-600 italic">
                    <td className="w-10 text-right pr-4 select-none">8</td>
                    <td></td>
                  </tr>
                  <tr className="group">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">9</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]">// Always free what you allocate!</span></td>
                  </tr>
                  <tr className="group border-l-2 border-primary">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">10</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">delete</span> ptr;</td>
                  </tr>
                  <tr className="group text-slate-600 italic">
                    <td className="w-10 text-right pr-4 select-none">11</td>
                    <td></td>
                  </tr>
                  <tr className="group">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">12</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">return</span> <span className="text-[#b5cea8]">0</span>;</td>
                  </tr>
                  <tr className="group">
                    <td className="w-10 text-slate-600 text-right pr-4 select-none italic">13</td>
                    <td>{"}"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Integrated Terminal Area */}
            <div className="bg-black/80 h-32 border-t border-white/10 p-4 font-mono text-xs overflow-hidden">
              <div className="flex items-center gap-2 mb-2 text-slate-500">
                <span className="material-symbols-outlined text-xs">terminal</span>
                <span>TERMINAL</span>
              </div>
              <div className="text-green-500">ak@linux:~/projects/memory-mastery$ g++ main.cpp -o main</div>
              <div className="text-green-500">ak@linux:~/projects/memory-mastery$ ./main</div>
              <div className="text-slate-100">Value: 42</div>
              <div className="text-green-500">ak@linux:~/projects/memory-mastery$ <span className="animate-pulse">_</span></div>
            </div>
          </div>
          {/* Course Progress Section */}
          <div className="bg-slate-900 p-6 rounded-xl border border-primary/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">System Progress</h3>
              <span className="text-xs font-mono text-slate-400">75% Complete</span>
            </div>
            {/* ASCII Style Progress Bar */}
            <div className="font-mono text-primary text-sm mb-4 flex overflow-hidden">
              <span className="text-accent-red">[</span>
              <span className="flex-1">#######################################-------</span>
              <span className="text-accent-red">]</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                <span>01_introduction_to_low_level.sh</span>
              </div>
              <div className="flex items-center gap-3 text-white text-xs font-mono font-bold">
                <span className="material-symbols-outlined text-primary text-sm">radio_button_checked</span>
                <span className="bg-primary/20 px-1">02_memory_management_basics.cpp</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-xs font-mono">
                <span className="material-symbols-outlined text-slate-700 text-sm">radio_button_unchecked</span>
                <span>03_pointers_and_references.rust</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseLesson;
