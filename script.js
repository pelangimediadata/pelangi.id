document.addEventListener('DOMContentLoaded', () => {
    // 1. Logika Hamburger Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });
    }

    // 2. Logika Tab Paket
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // 3. Logika Form Pendaftaran Ke WhatsApp
    const formDaftar = document.getElementById('formPendaftaran');

    if (formDaftar) {
        formDaftar.addEventListener('submit', function(e) {
            e.preventDefault();

            const paket = document.getElementById('inputPaket').value;
            const nama = document.getElementById('regNama').value;
            const alamat = document.getElementById('regAlamat').value;

            // Nomor WhatsApp Tujuan
            const noWA = "6285715708144"; 

            // Format Pesan WhatsApp
            const pesan = `Halo PELANGINET, saya ingin mendaftar pemasangan internet.%0A%0A` +
                          `*Detail Pendaftaran:*%0A` +
                          `- Paket: ${paket}%0A` +
                          `- Nama: ${nama}%0A` +
                          `- Alamat: ${alamat}%0A%0A` +
                          `Mohon segera diproses, terima kasih.`;

            const urlWA = `https://wa.me/${noWA}?text=${pesan}`;
            window.open(urlWA, '_blank');
        });
    }

    // 4. Auto Slide Promo Tengah
    setInterval(() => {
        movePromo(1);
    }, 5000);
});

// Fungsi Menutup Menu Mobile
function tutupMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('active');
    }
}

// Fungsi Menggerakkan Slider Promo
let promoIndex = 0;
function movePromo(direction) {
    const slides = document.getElementById('promoSlides');
    const totalPromoSlides = 3;

    if (slides) {
        promoIndex = (promoIndex + direction + totalPromoSlides) % totalPromoSlides;
        slides.style.transform = `translateX(-${promoIndex * 33.333}%)`;
    }
}

// Fungsi Buka Pendaftaran
function bukaPendaftaran(namaPaket) {
    tutupIklan();
    const sectionDaftar = document.getElementById('halaman-daftar');
    const mainContent = document.getElementById('main-content');
    const inputPaket = document.getElementById('inputPaket');

    if (sectionDaftar && mainContent) {
        mainContent.style.display = 'none';
        sectionDaftar.style.display = 'block';
        inputPaket.value = namaPaket;
        window.scrollTo(0, 0);
    }
}

// Fungsi Tutup Pendaftaran
function tutupPendaftaran() {
    document.getElementById('halaman-daftar').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

// Iklan Modal Pop-up
window.onload = function() {
    setTimeout(function() {
        const modal = document.getElementById('modalIklan');
        if (modal) modal.style.display = 'flex';
    }, 1000);
};

function tutupIklan() {
    const modal = document.getElementById('modalIklan');
    if (modal) modal.style.display = 'none';
}