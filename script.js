document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');

    // Toggle menu saat burger icon diklik
    burgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Mengganti icon burger (opsional)
        const icon = burgerMenu.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Tutup menu saat link navigasi diklik (penting untuk mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                // Mengembalikan icon burger
                const icon = burgerMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- Animasi On Scroll (Opsional: membutuhkan Intersection Observer) ---

    // Dapatkan semua elemen dengan kelas yang ingin dianimasikan
    const animatedElements = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas untuk memulai animasi
                entry.target.classList.add('animate__fadeInUp'); 
                
                // Hapus observer setelah animasi berjalan (untuk single run)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Mulai animasi ketika 10% elemen terlihat
        rootMargin: '0px 0px -50px 0px' // Offset bawah
    });

    // Amati setiap elemen
    animatedElements.forEach(element => {
        // Hapus kelas animasi awal agar hanya diaktifkan oleh observer
        element.classList.remove('animate__fadeInUp'); 
        observer.observe(element);
    });

    // --- Contoh fungsionalitas tombol Beli (Placeholder) ---
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.closest('.product-card').querySelector('h3').textContent;
            alert(`Anda akan membeli: ${productName}. Silakan lanjutkan ke halaman checkout/kontak.`);
            // Di implementasi nyata, ini akan mengarahkan ke halaman checkout atau API WhatsApp
        });
    });

});