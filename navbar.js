const navbarHTML = `
<!-- Header Navigation -->
<header class="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-12">
            <a class="flex items-center gap-3 group" href="home.html">
                <div class="bg-primary p-1 rounded-sm rotate-3 group-hover:rotate-0 transition-transform">
                    <span class="material-symbols-outlined text-background-dark font-bold text-2xl">terminal</span>
                </div>
                <h1 class="text-2xl font-bold tracking-tighter uppercase italic text-slate-900 dark:text-slate-100">AK <span class="text-primary">WITH</span> CODE</h1>
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
                        class="flex items-center justify-center rounded size-10 bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all">
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
            <button id="mobile-menu-btn" class="md:hidden text-primary focus:outline-none p-2">
                <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
        </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden bg-background-light dark:bg-background-dark border-t border-primary/20 absolute w-full left-0 top-20 shadow-xl pb-4 px-6 flex-col gap-4">
        <a href="home.html" class="block text-sm font-bold uppercase tracking-widest hover:text-primary py-2 border-b border-primary/10 text-slate-900 dark:text-slate-100">Home</a>
        <a href="allcourses.html" class="block text-sm font-bold uppercase tracking-widest hover:text-primary py-2 border-b border-primary/10 text-slate-900 dark:text-slate-100">Courses</a>
        <a href="topics.html" class="block text-sm font-bold uppercase tracking-widest hover:text-primary py-2 border-b border-primary/10 text-slate-900 dark:text-slate-100">Topics</a>
        <a href="blog.html" class="block text-sm font-bold uppercase tracking-widest hover:text-primary py-2 border-b border-primary/10 text-slate-900 dark:text-slate-100">Blog</a>
        <a href="connect.html" class="block text-sm font-bold uppercase tracking-widest hover:text-primary py-2 text-slate-900 dark:text-slate-100">Connect</a>
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

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');

            // Toggle icon
            const icon = btn.querySelector('span');
            if (menu.classList.contains('hidden')) {
                icon.textContent = 'menu';
            } else {
                icon.textContent = 'close';
            }
        });
    }
});
