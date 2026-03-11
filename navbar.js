const navbarHTML = `
<!-- Header Navigation -->
<header class="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-12">
            <a class="flex items-center gap-3 group" href="home.html">
                <div class="bg-primary p-1 rounded-sm rotate-3 group-hover:rotate-0 transition-transform shadow-[0_0_15px_rgba(255,106,0,0.4)]">
                    <span class="material-symbols-outlined text-background-dark font-bold text-2xl">terminal</span>
                </div>
                <h1 class="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter uppercase italic text-slate-900 dark:text-slate-100">AK <span class="text-primary">WITH</span> CODE</h1>
            </a>
            <nav class="hidden md:flex items-center gap-8">
                <a class="nav-link text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group text-slate-900 dark:text-slate-100" href="home.html" data-page="home">
                    Home
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a class="nav-link text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group text-slate-900 dark:text-slate-100" href="allcourses.html" data-page="courses">
                    Courses
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a class="nav-link text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group text-slate-900 dark:text-slate-100" href="topics.html" data-page="topics">
                    Topics
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a class="nav-link text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group text-slate-900 dark:text-slate-100" href="blog.html" data-page="blog">
                    Blog
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a class="nav-link text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group text-slate-900 dark:text-slate-100" href="connect.html" data-page="connect">
                    Connect
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
            </nav>
        </div>
        <div class="flex items-center gap-4">
            <div class="hidden lg:block relative text-slate-900 dark:text-slate-100">
                <input class="bg-surface-dark/50 border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-none px-4 py-2 text-xs tracking-widest uppercase w-64 placeholder:text-slate-500" placeholder="SEARCH SYSTEM..." type="text"/>
                <span class="material-symbols-outlined absolute right-3 top-2 text-primary drop-shadow-[0_0_8px_rgba(255,106,0,0.8)] cursor-pointer">search</span>
            </div>
             <div class="flex gap-3">
                    <button
                        class="hidden sm:flex items-center justify-center rounded size-10 bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all">
                        <span class="material-symbols-outlined">notifications</span>
                    </button>
                </div>
                 <div class="relative group">
                    <div
                        class="absolute -inset-1 bg-primary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200">
                    </div>
                    <button
                        class="relative bg-background-dark p-2 rounded-full border border-primary/30 flex items-center justify-center">
                        <span class="material-symbols-outlined text-primary">search</span>
                    </button>
                </div>
            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-btn" class="md:hidden text-primary focus:outline-none p-2 hover:bg-primary/10 rounded-full transition-colors">
                <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
        </div>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu-overlay" class="md:hidden fixed inset-0 bg-background-dark/60 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300"></div>

    <!-- Offcanvas Mobile Menu -->
    <div id="mobile-menu" class="md:hidden fixed top-0 left-0 h-screen w-[300px] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-r border-primary/20 shadow-2xl z-50 -translate-x-full transition-transform duration-300 ease-in-out flex flex-col p-6 overflow-y-auto">
        <div class="flex items-center justify-between mb-10">
            <a class="flex items-center gap-3" href="home.html">
                <div class="bg-primary p-1 rounded-sm rotate-3">
                    <span class="material-symbols-outlined text-background-dark font-bold text-xl">terminal</span>
                </div>
                <h1 class="text-lg sm:text-xl font-bold tracking-tighter uppercase italic text-slate-900 dark:text-slate-100">AK <span class="text-primary">WITH</span> CODE</h1>
            </a>
            <button id="mobile-menu-close" class="text-primary/70 hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-2xl">close</span>
            </button>
        </div>

        <div class="flex-1">
            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 mb-4">Navigation</p>
            <nav class="flex flex-col gap-1">
                <a href="home.html" class="nav-link flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary py-4 border-b border-primary/5 group transition-all text-slate-900 dark:text-slate-100">
                    <span class="material-symbols-outlined text-lg text-primary/60 group-hover:text-primary">home</span>
                    Home
                </a>
                <a href="allcourses.html" class="nav-link flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary py-4 border-b border-primary/5 group transition-all text-slate-900 dark:text-slate-100">
                    <span class="material-symbols-outlined text-lg text-primary/60 group-hover:text-primary">school</span>
                    Courses
                </a>
                <a href="topics.html" class="nav-link flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary py-4 border-b border-primary/5 group transition-all text-slate-900 dark:text-slate-100">
                    <span class="material-symbols-outlined text-lg text-primary/60 group-hover:text-primary">segment</span>
                    Topics
                </a>
                <a href="blog.html" class="nav-link flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary py-4 border-b border-primary/5 group transition-all text-slate-900 dark:text-slate-100">
                    <span class="material-symbols-outlined text-lg text-primary/60 group-hover:text-primary">article</span>
                    Blog
                </a>
                <a href="connect.html" class="nav-link flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary py-4 group transition-all text-slate-900 dark:text-slate-100">
                    <span class="material-symbols-outlined text-lg text-primary/60 group-hover:text-primary">alternate_email</span>
                    Connect
                </a>
            </nav>

            <div class="mt-8 py-6 border-t border-primary/10">
                <p class="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 mb-4">Utilities</p>
                <div class="flex items-center justify-between p-4 bg-primary/5 border border-primary/10 rounded-lg mb-4">
                    <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-primary">notifications</span>
                        <span class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Notifications</span>
                    </div>
                    <span class="size-5 bg-primary text-background-dark text-[10px] font-bold flex items-center justify-center rounded-full">3</span>
                </div>
            </div>
        </div>

        <div class="mt-auto pt-6 border-t border-primary/10 text-center">
            <p class="text-[10px] text-slate-500 uppercase tracking-widest">© 2026 AK WITH CODE</p>
        </div>
    </div>
</header>
`;

document.addEventListener("DOMContentLoaded", () => {
    // Insert the navbar at the beginning of the body or a specific placeholder
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }

    // Highlight active link based on current URL
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath === href || (currentPath === '' && href === 'home.html')) {
            link.classList.add('text-primary');
            link.classList.remove('text-slate-900', 'dark:text-slate-100');
            const indicator = link.querySelector('span');
            if (indicator) {
                indicator.classList.remove('w-0');
                indicator.classList.add('w-full');
            }
        }
    });

    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const closeBtn = document.getElementById('mobile-menu-close');

    function openMenu() {
        if (!menu || !overlay) return;
        menu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => {
            overlay.classList.remove('opacity-0');
            overlay.classList.add('opacity-100');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        if (!menu || !overlay) return;
        menu.classList.add('-translate-x-full');
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0');
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300);
        document.body.style.overflow = '';
    }

    if (btn && menu && overlay) {
        btn.addEventListener('click', openMenu);
        overlay.addEventListener('click', closeMenu);
        if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    }
});
