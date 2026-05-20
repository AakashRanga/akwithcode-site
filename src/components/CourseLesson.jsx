import React, { useState, useEffect, useRef } from 'react';

const CourseLesson = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(err => console.log("Video playback error: ", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden pt-16">
      <div className="fixed inset-0 grain-texture z-50 pointer-events-none"></div>
      
      <main className="max-w-[1600px] w-full mx-auto p-4 sm:p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">
        {/* Left Column: Video & Content */}
        <div className="flex flex-col gap-6 w-full min-w-0">
          {/* Video Player */}
          <div className="relative group rounded-xl overflow-hidden border-2 border-primary/30 glow-border bg-black aspect-video select-none">
            <video
              ref={videoRef}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ0tGmYlG4ygMrV_Uk5hLhreYF5P9htQOQ1Yd8YTJRo3fF1-phQOv0pVZa5fehRVnSzrwJyq70zhRYjUc34S1-dawJE2EYtpoK7sdMQgCzmLX0TB8mrQFdM8pAbO6EX73iJeCrnH_bAE-wAxMItHiiPsoqPCnNokF10u0ne6wsTWrkPI9m82dXbf0xSKT14q_7JsMMdM61DLrY2iSBnFQeccOS7LX8g7MvavnqZk6u_WeoFoGsPTq7zPDqo-VbQSDv0QZsxk6I9oc"
              className="w-full h-full object-cover"
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              playsInline
            />
            
            {/* Play/Pause Center Button Overlay when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                <button 
                  onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                  className="size-16 sm:size-20 bg-primary/95 hover:bg-primary text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-2xl pointer-events-auto cursor-pointer"
                >
                  <span className="material-symbols-outlined text-4xl sm:text-5xl">play_arrow</span>
                </button>
              </div>
            )}

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300">
              <div 
                className="h-1.5 w-full bg-slate-700/60 rounded-full mb-3 relative cursor-pointer"
                onClick={handleProgressClick}
              >
                <div 
                  className="absolute left-0 top-0 h-full bg-primary rounded-full"
                  style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                ></div>
                <div 
                  className="absolute top-1/2 -translate-y-1/2 size-3.5 bg-white rounded-full border-2 border-primary shadow-glow transition-all"
                  style={{ left: `calc(${duration > 0 ? (currentTime / duration) * 100 : 0}% - 7px)` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center text-xs font-mono text-slate-300">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={togglePlay} 
                    className="hover:text-primary transition-colors cursor-pointer flex items-center"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                  <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                </div>
                
                <div className="flex gap-4 items-center">
                  {/* Settings icon is removed as requested by the user */}
                  <button 
                    onClick={toggleFullscreen} 
                    className="hover:text-primary transition-colors cursor-pointer flex items-center"
                    title="Fullscreen"
                  >
                    <span className="material-symbols-outlined text-lg">fullscreen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Header */}
          <div className="relative bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border-l-8 border-primary shadow-xl">
            <div className="absolute -top-3 -right-3 bg-accent-red text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter rotate-12">
              Live Session
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight leading-tight uppercase italic text-slate-900 dark:text-white">Mastering Memory Management</h2>
            <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Deep dive into manual memory allocation, pointers, and ownership models in low-level programming. We explore why heap vs stack matters in high-performance C++ and Rust applications.
            </p>
            {/* Terminal Style Resources */}
            <div className="mt-6 sm:mt-8 bg-black rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm border-t-4 border-accent-red">
              <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                <span className="text-primary">$</span>
                <span className="text-slate-100">ls ./lesson-resources</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-primary text-base sm:text-lg">description</span>
                  memory_map_v1.pdf
                </a>
                <a className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-primary text-base sm:text-lg">folder_zip</span>
                  starter_code.zip
                </a>
                <a className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-primary text-base sm:text-lg">link</span>
                  official_docs.md
                </a>
                <a className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-primary text-base sm:text-lg">quiz</span>
                  knowledge_check.exe
                </a>
              </div>
            </div>
          </div>

          {/* Lesson Navigation */}
          <div className="flex justify-between items-center mt-2 gap-4">
            <button className="retro-sticker bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 sm:px-6 sm:py-3 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 border-2 border-slate-900 dark:border-white cursor-pointer">
              <span className="material-symbols-outlined text-sm sm:text-base">arrow_back</span>
              Prev
            </button>
            <button className="retro-sticker bg-primary text-white px-6 py-2.5 sm:px-8 sm:py-3 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 border-2 border-slate-900 cursor-pointer">
              Next
              <span className="material-symbols-outlined text-sm sm:text-base">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Column: Code Editor & Progress */}
        <div className="flex flex-col gap-6 w-full min-w-0">
          {/* Code Editor Wrapper */}
          <div className="flex flex-col bg-[#1e1e1e] rounded-xl overflow-hidden border-2 border-slate-700/50 shadow-2xl relative h-[380px] sm:h-[450px] lg:h-auto lg:flex-1 lg:min-h-[500px]">
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-white/5 shrink-0 select-none">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-accent-red"></div>
                  <div className="size-2.5 rounded-full bg-yellow-500"></div>
                  <div className="size-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-slate-400 truncate">main.cpp — ak-with-code — SSH</span>
              </div>
              <div className="flex gap-2">
                <span className="material-symbols-outlined text-slate-500 text-sm hover:text-white cursor-pointer">play_arrow</span>
                <span className="material-symbols-outlined text-slate-500 text-sm hover:text-white cursor-pointer">save</span>
              </div>
            </div>
            {/* Syntax Highlighting Content */}
            <div className="flex-1 p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-auto custom-scrollbar">
              <div className="min-w-[450px]">
                <table className="w-full border-collapse text-slate-300">
                  <tbody>
                    <tr className="group">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">1</td>
                      <td><span className="text-[#569cd6]">#include</span> <span className="text-[#ce9178]">&lt;iostream&gt;</span></td>
                    </tr>
                    <tr className="group">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">2</td>
                      <td><span className="text-[#569cd6]">#include</span> <span className="text-[#ce9178]">&lt;memory&gt;</span></td>
                    </tr>
                    <tr className="group">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">3</td>
                      <td></td>
                    </tr>
                    <tr className="group">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">4</td>
                      <td><span className="text-[#569cd6]">int</span> <span className="text-[#dcdcaa]">main</span>() {"{"}</td>
                    </tr>
                    <tr className="group bg-primary/10">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">5</td>
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]">// Manually allocating memory (DANGEROUS)</span></td>
                    </tr>
                    <tr className="group">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">6</td>
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">int</span>* ptr = <span className="text-[#569cd6]">new</span> <span className="text-[#569cd6]">int</span>(<span className="text-[#b5cea8]">42</span>);</td>
                    </tr>
                    <tr className="group">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">7</td>
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#dcdcaa]">std::cout</span> &lt;&lt; <span className="text-[#ce9178]">"Value: "</span> &lt;&lt; *ptr &lt;&lt; <span className="text-[#dcdcaa]">std::endl</span>;</td>
                    </tr>
                    <tr className="group text-slate-600 italic">
                      <td className="w-8 text-right pr-4 select-none">8</td>
                      <td></td>
                    </tr>
                    <tr className="group">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">9</td>
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]">// Always free what you allocate!</span></td>
                    </tr>
                    <tr className="group border-l-2 border-primary">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">10</td>
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">delete</span> ptr;</td>
                    </tr>
                    <tr className="group text-slate-600 italic">
                      <td className="w-8 text-right pr-4 select-none">11</td>
                      <td></td>
                    </tr>
                    <tr className="group">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">12</td>
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">return</span> <span className="text-[#b5cea8]">0</span>;</td>
                    </tr>
                    <tr className="group">
                      <td className="w-8 text-slate-600 text-right pr-4 select-none italic">13</td>
                      <td>{"}"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Integrated Terminal Area */}
            <div className="bg-black/80 h-32 border-t border-white/10 p-4 font-mono text-[10px] sm:text-xs overflow-y-auto shrink-0">
              <div className="flex items-center gap-2 mb-1.5 text-slate-500">
                <span className="material-symbols-outlined text-xs">terminal</span>
                <span>TERMINAL</span>
              </div>
              <div className="text-green-500">ak@linux:~/projects/memory-mastery$ g++ main.cpp -o main</div>
              <div className="text-green-500">ak@linux:~/projects/memory-mastery$ ./main</div>
              <div className="text-slate-100">Value: 42</div>
              <div className="text-green-500 flex items-center gap-1">
                <span>ak@linux:~/projects/memory-mastery$</span> 
                <span className="size-1.5 bg-green-500 animate-pulse inline-block"></span>
              </div>
            </div>
          </div>
          {/* Course Progress Section */}
          <div className="bg-slate-900 p-5 sm:p-6 rounded-xl border border-primary/20 shadow-2xl shrink-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">System Progress</h3>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400">75% Complete</span>
            </div>
            {/* ASCII Style Progress Bar */}
            <div className="font-mono text-primary text-xs sm:text-sm mb-4 flex overflow-hidden select-none">
              <span className="text-accent-red">[</span>
              <span className="flex-1 truncate">#######################################-------</span>
              <span className="text-accent-red">]</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                <span className="truncate">01_introduction_to_low_level.sh</span>
              </div>
              <div className="flex items-center gap-3 text-white text-xs font-mono font-bold">
                <span className="material-symbols-outlined text-primary text-sm">radio_button_checked</span>
                <span className="bg-primary/20 px-1 truncate">02_memory_management_basics.cpp</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-xs font-mono">
                <span className="material-symbols-outlined text-slate-700 text-sm">radio_button_unchecked</span>
                <span className="truncate">03_pointers_and_references.rust</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseLesson;
