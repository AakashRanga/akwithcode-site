const navbarHTML = `
<header
            class="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 bg-background-dark/90 backdrop-blur-md px-4 md:px-20 py-3 md:py-4 sticky top-0 z-50">
            <div class="flex items-center gap-4 md:gap-8">
                <div class="flex items-center gap-3 text-primary">
                    <div class="size-8 md:size-10 flex items-center justify-center bg-primary text-background-dark rounded shadow-[0_0_15px_rgba(255,106,0,0.4)]">
                        <span class="material-symbols-outlined font-bold text-xl md:text-2xl">terminal</span>
                    </div>
                    <h2 class="hidden sm:block text-lg md:text-xl font-black leading-tight tracking-tighter uppercase italic">Tech<span class="text-slate-400">_</span>LMS</h2>
                </div>
                <nav class="hidden lg:flex items-center gap-9">
                    <a class="nav-link text-slate-100 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group" href="home.html">
                        Courses
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                    <a class="nav-link text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group" href="#">
                        Tracks
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                    <a class="nav-link text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group" href="#">
                        Terminal
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                    <a class="nav-link text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group" href="#">
                        User_System
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                </nav>
            </div>
            <div class="flex flex-1 justify-end gap-3 md:gap-6 items-center">
                <label class="hidden md:flex flex-col min-w-40 h-10 max-w-64 relative">
                    <div
                        class="flex w-full items-center rounded border border-primary/30 bg-primary/5 px-3 h-full group focus-within:border-primary transition-all">
                        <span
                            class="material-symbols-outlined text-primary/60 text-xl group-focus-within:text-primary">search</span>
                        <input
                            class="w-full border-none bg-transparent focus:ring-0 text-sm placeholder:text-primary/40 text-slate-100 pl-2"
                            placeholder="SCAN_DATABASE..." />
                    </div>
                </label>
                <div class="flex items-center gap-2 md:gap-3">
                    <button
                        class="hidden md:flex items-center justify-center rounded size-9 md:size-10 bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all">
                        <span class="material-symbols-outlined">notifications</span>
                    </button>
                    <div class="size-9 md:size-10 rounded overflow-hidden border-2 border-primary p-0.5 bg-background-dark shadow-[0_0_10px_rgba(255,106,0,0.3)]">
                        <img alt="User Profile" class="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                            data-alt="Cyberpunk style user profile avatar grayscale"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDiLHih59C_ClJwtd_WlIZEEV6fF4ITtJaVZiPqPJTYIkpSHboFRx0Pmg99b6FfCvsYpRNX5MlIL2TAjRsbjdGhbgXw7s-4gfHwGgx-Xvq1xr79F_qiA2cAjtbiAz3epAWRDXhEthuz0zwTkRpNfWcMterFr6WsxLGTeEEvjMGZpmUfYYW2gSgkA8BJWYzP9CzKubCHJGpA7U6y38BxX4URo6bP2NFnZOkUuXtvOYFQRCT9pKaSB8TgPuJr2pwta5kysUHVup-Fjw" />
                    </div>
                    <!-- Mobile Menu Toggle -->
                    <button id="mobile-menu-btn" class="lg:hidden text-primary focus:outline-none p-2  rounded-full transition-colors">
                        <span class="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Menu Overlay -->
            <div id="mobile-menu-overlay" class="lg:hidden fixed inset-0 bg-background-dark/60 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300"></div>

            <!-- Offcanvas Mobile Menu -->
            <div id="mobile-menu" class="lg:hidden fixed top-0 left-0 h-screen w-[300px] bg-background-dark/95 backdrop-blur-xl border-r border-primary/20 shadow-2xl z-50 -translate-x-full transition-transform duration-300 ease-in-out flex flex-col p-6 overflow-y-auto">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-3 text-primary">
                        <div class="size-8 flex items-center justify-center bg-primary text-background-dark rounded">
                            <span class="material-symbols-outlined font-bold text-xl">terminal</span>
                        </div>
                        <h2 class="text-lg font-black uppercase italic">Tech<span class="text-slate-400">_</span>LMS</h2>
                    </div>
                    <button id="mobile-menu-close" class="text-primary/70 hover:text-primary transition-colors">
                        <span class="material-symbols-outlined text-2xl">close</span>
                    </button>
                </div>

                <div class="flex-1">
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 mb-4">Main Navigation</p>
                    <nav class="flex flex-col gap-2 mb-8">
                        <a href="home.html" class="nav-link flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary py-3 group transition-all">
                            <span class="size-8 flex items-center justify-center bg-primary/10 rounded group-hover:bg-primary group-hover:text-background-dark transition-all">
                                <span class="material-symbols-outlined text-lg">school</span>
                            </span>
                            Courses
                        </a>
                        <a href="#" class="nav-link flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary py-3 group transition-all text-slate-400">
                            <span class="size-8 flex items-center justify-center bg-primary/10 rounded group-hover:bg-primary group-hover:text-background-dark transition-all">
                                <span class="material-symbols-outlined text-lg">route</span>
                            </span>
                            Tracks
                        </a>
                        <a href="#" class="nav-link flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary py-3 group transition-all text-slate-400">
                            <span class="size-8 flex items-center justify-center bg-primary/10 rounded group-hover:bg-primary group-hover:text-background-dark transition-all">
                                <span class="material-symbols-outlined text-lg">terminal</span>
                            </span>
                            Terminal
                        </a>
                        <a href="#" class="nav-link flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary py-3 group transition-all text-slate-400">
                            <span class="size-8 flex items-center justify-center bg-primary/10 rounded group-hover:bg-primary group-hover:text-background-dark transition-all">
                                <span class="material-symbols-outlined text-lg">grid_view</span>
                            </span>
                            User_System
                        </a>
                    </nav>

                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 mb-4">System Utilities</p>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center justify-between p-4 bg-primary/5 border border-primary/10 rounded-lg">
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary">notifications</span>
                                <span class="text-xs font-bold uppercase tracking-wider text-slate-300">Notifications</span>
                            </div>
                            <span class="size-5 bg-primary text-background-dark text-[10px] font-bold flex items-center justify-center rounded-full">3</span>
                        </div>
                        <div class="flex items-center gap-3 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                            <span class="material-symbols-outlined text-primary">search</span>
                            <input class="bg-transparent border-none focus:ring-0 text-xs uppercase tracking-widest text-slate-100 placeholder:text-primary/30 w-full" placeholder="Search system..." />
                        </div>
                    </div>
                </div>

                <div class="mt-auto pt-6 border-t border-primary/10 flex items-center gap-4">
                    <div class="size-12 rounded-full border-2 border-primary p-0.5">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDiLHih59C_ClJwtd_WlIZEEV6fF4ITtJaVZiPqPJTYIkpSHboFRx0Pmg99b6FfCvsYpRNX5MlIL2TAjRsbjdGhbgXw7s-4gfHwGgx-Xvq1xr79F_qiA2cAjtbiAz3epAWRDXhEthuz0zwTkRpNfWcMterFr6WsxLGTeEEvjMGZpmUfYYW2gSgkA8BJWYzP9CzKubCHJGpA7U6y38BxX4URo6bP2NFnZOkUuXtvOYFQRCT9pKaSB8TgPuJr2pwta5kysUHVup-Fjw" class="w-full h-full object-cover rounded-full" />
                    </div>
                    <div>
                        <p class="text-sm font-bold text-slate-100 uppercase tracking-widest">CYBER_USER_01</p>
                        <p class="text-[10px] text-primary font-bold uppercase tracking-tighter">Level 42 Architect</p>
                    </div>
                </div>
            </div>
        </header>`;

document.addEventListener("DOMContentLoaded", () => {
  // Insert the navbar at the beginning of the body or a specific placeholder
  const placeholder = document.getElementById("navbar-placeholder");
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;
  } else {
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
  }

  // Highlight active link based on current URL
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (currentPath === href || (currentPath === "" && href === "home.html")) {
      link.classList.add("text-primary");
      link.classList.remove("text-slate-400", "text-slate-900", "dark:text-slate-100");
    }
  });

  // Mobile menu toggle
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("mobile-menu-overlay");
  const closeBtn = document.getElementById("mobile-menu-close");

  function openMenu() {
    menu.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    setTimeout(() => {
        overlay.classList.remove("opacity-0");
        overlay.classList.add("opacity-100");
    }, 10);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  function closeMenu() {
    menu.classList.add("-translate-x-full");
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 300);
    document.body.style.overflow = ""; // Enable scrolling
  }

  if (btn && menu && overlay) {
    btn.addEventListener("click", openMenu);
    overlay.addEventListener("click", closeMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  }
});
