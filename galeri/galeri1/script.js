document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        // Toggle (tambah/hapus) kelas 'hidden' pada mobile menu
        mobileMenu.classList.toggle('hidden');

        // Ganti ikon hamburger menjadi ikon silang (close) dan sebaliknya
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }
    });
});