// Skrip untuk menu mobile (hamburger)
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    // Toggle (tampilkan/sembunyikan) menu mobile
    mobileMenu.classList.toggle('hidden');
});

// Menutup menu mobile ketika salah satu link di dalam menu diklik
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Tambahkan kelas 'hidden' untuk menyembunyikan menu lagi
        mobileMenu.classList.add('hidden');
    });
});
