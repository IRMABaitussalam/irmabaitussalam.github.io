const ads = [
    {
        image: 'https://updates.techforpalestine.org/content/images/size/w1000/2024/01/social-card.png',
        title: 'New product: Profile Pic Maker',
        description: 'Tech For Palestine has a new product, allowing you to easily add support for Palestine to your profile pictures.',
        link: 'https://updates.techforpalestine.org/profile-pic-maker/'
    },
    {
        image: 'https://cdn.mos.cms.futurecdn.net/ZuiADTPtBv45SjxdLgxhQ7-650-80.jpg.webp',
        title: 'Edit Foto dengan Snapseed!',
        description: 'Transformasi foto Anda dengan mudah menggunakan Snapseed. Unduh sekarang!',
        link: 'https://snapseed.online/'
    },
    {
        image: 'https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fc8fdb842-a8c3-4da8-a184-fc9625f04a0b.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=1080&q=75',
        title: 'Kirim bantuan ke anak-anak di Palestina',
        description: 'Donasi di Kitabisa ke Palestina, bantu para korban bertahan. Bantu anak-anak Palestina, kirim donasi Anda di Kitabisa.',
        link: 'https://kitabisa.com/campaign/panganuntukrafah?utm_source=ads_google&utm_medium=cpc&utm_campaign=IMPACTS_panganuntukrafah_GADS-2_SEM_DIMAS_RICO_ILHAM_RUTH_Rumah+Zakat+DIY_548605&gad_source=1&gclid=Cj0KCQjwjNS3BhChARIsAOxBM6p5Lru9P4IARJySKAkAAPqP6ASWhL-6bh5-hXSi8cTTil-H8Di7x2kaAmbyEALw_wcB'
    },
    {
        image: 'https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2020/01/12/2390779314.jpg',
        title: 'Aman dan Mudah!',
        description: 'Simpan dan bagikan file Anda dengan Google Drive. Mulai gratis!',
        link: 'https://www.google.com/drive/'
    },
    {
        image: 'https://rumah-yatim.org/storage/donasi/43HVOigkwBsfHKEV6w4aeKRXsRk7KlBHpLRRkKns.png',
        title: 'Ayo Berinfak dan Bersedekah!',
        description: 'Ringankan beban mereka yang membutuhkan. Donasikan sebagian dari harta Anda untuk membantu anak yatim dan dhuafa.',
        link: 'https://rumah-yatim.org/donasi/infaqsedekah'
    },
    {
        image: 'https://updates.techforpalestine.org/content/images/size/w1000/2024/03/gifisitgenocide.gif',
        title: 'Is it Genocide? It\'s time to answer that question.',
        description: 'IsItGenocide? streamlines an extensive database of carefully sourced quotes from Israeli officials, politicians, and IDF leaders, help you answer this essential question for yourself.',
        link: 'https://updates.techforpalestine.org/is-it-genocide-time-to-stop-asking-that-question/'
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*zHDG_zjjA_p9qPZNjsCmZw.png',
        title: 'Gunakan Gmail!',
        description: 'Kelola email Anda dengan lebih baik. Daftar sekarang di Gmail!',
        link: 'https://mail.google.com/'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dT26yzhyZuuS-kmYXlWWAt6sZo7bWZkxmqqrTXQg2YbSeV6_63Iwz5EQ&s=10',
        title: 'Edit Foto Profesional dengan Adobe Lightroom!',
        description: 'Ubah foto biasa menjadi luar biasa dengan Adobe Lightroom. Fitur edit canggih dan mudah digunakan. Coba sekarang gratis!',
        link: 'https://www.adobe.com/products/photoshop-lightroom.html'
    },
    {
        image: 'https://img-c.udemycdn.com/course/750x422/5346430_f677.jpg',
        title: 'Kreasikan Imajinasi Anda dengan Adobe Photoshop!',
        description: 'Jadikan ide kreatif Anda menjadi kenyataan dengan Adobe Photoshop. Edit gambar dengan fitur profesional dan tanpa batas. Mulai sekarang!',
        link: 'https://www.adobe.com/products/photoshop.html'
    },
    {
        image: 'https://hybrid.co.id/wp-content/uploads/2023/05/b18c9b06a73806f9d4fe0f57d0ba0ec3_canva-768x403.jpg',
        title: 'Desain Apa Pun dengan Mudah di Canva!',
        description: 'Buat desain yang menakjubkan untuk keperluan pribadi atau bisnis dengan Canva. Mudah digunakan, bahkan untuk pemula! Coba gratis sekarang!',
        link: 'https://www.canva.com/'
    }
];

function getRandomAdIndex() {
    return Math.floor(Math.random() * ads.length);
}

function showAdAtPosition(position, index) {
    const ad = ads[index];
    $(`#${position}-image`).attr('src', ad.image);
    $(`#${position}-title`).text(ad.title);
    $(`#${position}-description`).text(ad.description);
    $(`#${position}-link`).attr('href', ad.link);
    $(`#${position}`).show();
}

function startAdRotation(n) {
	setInterval(function() {
        for (let i = 1; i <= n; i++) {
            showAdAtPosition(`ads${i}`, getRandomAdIndex());
        }
    }, 30000);
}

function startAd(n) {
    for (let i = 1; i <= n; i++) {
        showAdAtPosition(`ads${i}`, getRandomAdIndex());
    }
    startAdRotation(n);
}