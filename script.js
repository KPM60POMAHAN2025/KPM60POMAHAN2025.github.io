// 1. Mobile Menu Logic (Sudah Oke, saya rapikan sedikit)
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuBtn.querySelector('i');

const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    const isHidden = mobileMenu.classList.contains('hidden');
    menuIcon.className = isHidden ? 'fas fa-bars text-2xl text-brand-darkgreen' : 'fas fa-times text-2xl text-brand-darkgreen';
};

menuBtn.addEventListener('click', toggleMenu);

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// 2. Navbar Scroll Effect & Active Link Highlighter
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Efek Shadow saat scroll
    window.scrollY > 10 ? header.classList.add('shadow-md', 'bg-white') : header.classList.remove('shadow-md', 'bg-white');

    // Logika Highlighting Menu Aktif
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("text-brand-green", "font-bold");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("text-brand-green", "font-bold");
        }
    });
});

// 3. Smooth Scroll dengan Offset (Supaya tidak mentok ke atas)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 4. Scroll Reveal Animation (Efek muncul perlahan)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

// Daftarkan elemen yang ingin diberi efek muncul (Kartu program, judul, dll)
document.querySelectorAll('.section-title, #programs .grid > div, #team .text-center').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
    observer.observe(el);
});