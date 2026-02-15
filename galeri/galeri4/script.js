/* Import Tailwind CSS base styles, components, and utilities */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Definisikan style kustom Anda di sini, 
  terutama yang menggunakan @layer untuk memperluas Tailwind.
*/
@layer base {
    html {
        /* Memungkinkan smooth scrolling untuk anchor links */
        scroll-behavior: smooth;
    }
    body {
        /* Menggunakan font Inter yang sudah diimpor */
        font-family: 'Inter', sans-serif;
    }
}

@layer components {
    /* Gaya untuk judul di setiap seksi */
    .section-title {
        @apply text-3xl md:text-4xl font-bold text-center text-brand-darkgreen mb-12;
    }

    /* Gaya untuk item galeri */
    .gallery-item {
        @apply relative overflow-hidden rounded-xl shadow-lg cursor-pointer block;
    }
    .gallery-item img {
        @apply w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110;
    }
    .gallery-item .gallery-overlay {
        @apply absolute inset-0 bg-black/50 flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300;
    }
    .gallery-item .gallery-overlay h3 {
        @apply text-white font-bold text-lg;
    }
}

/* Konfigurasi warna kustom.
  Anda bisa menaruh ini di dalam file tailwind.config.js jika menggunakan build process,
  namun karena Anda menggunakan CDN, kita akan menggunakan trik variabel CSS.
*/
:root {
  --brand-cream: #F8F4E1; /* Ganti dengan kode hex yang benar */
  --brand-green: #54B435; /* Ganti dengan kode hex yang benar */
  --brand-darkgreen: #379237; /* Ganti dengan kode hex yang benar */
}

/* Jika Anda tidak ingin menggunakan variabel CSS, Anda perlu menulis ulang 
  utility class di HTML dengan warna arbitrer Tailwind, contoh:
  bg-[#F8F4E1] sebagai pengganti bg-brand-cream
*/

/* Untuk membuat class kustom bekerja */
.bg-brand-cream { background-color: var(--brand-cream); }
.text-brand-green { color: var(--brand-green); }
.hover\:text-brand-green:hover { color: var(--brand-green); }
.bg-brand-green { background-color: var(--brand-green); }
.border-brand-green { border-color: var(--brand-green); }
.text-brand-darkgreen { color: var(--brand-darkgreen); }
.bg-brand-darkgreen { background-color: var(--brand-darkgreen); }
.hover\:bg-brand-darkgreen:hover { background-color: var(--brand-darkgreen); }