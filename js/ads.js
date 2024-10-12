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
    },
    {
        image: 'https://jnewsonline.com/wp-content/uploads/2021/04/Facebook-batalkan-pemblokiran-konten-berita-Australia.jpg',
        title: 'Terhubung dengan Teman di Seluruh Dunia dengan Facebook!',
        description: 'Bagikan momen, temukan teman baru, dan tetap terhubung dengan keluarga di Facebook. Bergabunglah sekarang!',
        link: 'https://www.facebook.com/'
    },
    {
        image: 'https://akcdn.detik.net.id/community/media/visual/2023/09/13/whatsapp-channel_169.png?w=600&q=90',
        title: 'Chat Mudah dan Cepat dengan WhatsApp!',
        description: 'Kirim pesan, lakukan panggilan, dan berbagi momen dengan mudah menggunakan WhatsApp. Unduh gratis sekarang!',
        link: 'https://www.whatsapp.com/'
    },
    {
        image: 'https://images.news18.com/ibnlive/uploads/2024/07/instagram-reels-add-20-music-2024-07-1f423b3f0a40a922079ec60046a034ae.jpg?impolicy=website&width=640&height=480',
        title: 'Bagikan Gaya Hidupmu di Instagram!',
        description: 'Abadikan momen terbaikmu dengan foto dan video yang memukau di Instagram. Temukan komunitas baru dan terhubung!',
        link: 'https://www.instagram.com/'
    },
    {
        image: 'https://cdnpro.eraspace.com/media/mageplaza/blog/post/p/e/pengguna_twitter_primary.jpg',
        title: 'Ikuti Berita Terkini di X!',
        description: 'Dapatkan informasi terbaru, opini, dan tren dari seluruh dunia dengan X. Mulai berkomunikasi sekarang!',
        link: 'https://www.x.com/'
    },
    {
        image: 'https://images.bisnis.com/thumb/posts/2023/07/07/1672633/threads2_1688617832.jpg?w=600&h=400',
        title: 'Gabung Diskusi Seru di Threads!',
        description: 'Bicarakan topik yang kamu suka dan temukan percakapan seru dengan Threads. Bergabung dan berinteraksi sekarang!',
        link: 'https://www.threads.net/'
    },
    {
        image: 'https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/og.png',
        title: 'Tingkatkan Desain Anda dengan Tabler Icons!',
        description: 'Akses koleksi ikon berkualitas tinggi yang gratis dan dapat disesuaikan untuk proyek Anda. Mudah digunakan, dapat diskalakan, dan sempurna untuk desain modern. Mulai gunakan Tabler Icons hari ini!',
        link: 'https://tabler.io/icons'
    },
    {
        image: 'https://discover.buysellads.com/hs-fs/hubfs/publisher-pages/images/carbon/carbonads_icon.png?width=800&height=800&name=carbonads_icon.png', 
        title: 'Monetisasi Website Anda dengan Carbon Ads!',
        description: 'Tampilkan iklan minimalis yang fokus pada teknologi tanpa mengganggu desain situs Anda. Dapatkan penghasilan sambil menjaga tampilan tetap rapi. Coba Carbon Ads sekarang!',
        link: 'https://carbonads.net/'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sW6tqoSV0BCMJUwt5VIyTLQyrSNN_DNDsIMV-Pycpn6q5C4KEUAuOK5U&s=10',
        title: 'Tingkatkan Terminal Anda dengan Nerd Font!',
        description: 'Perkaya pengalaman coding dengan lebih dari 50+ font, ikon, dan glyph yang telah di-patch. Cocok untuk developer. Unduh Nerd Fonts sekarang!',
        link: 'https://www.nerdfonts.com/'
    },
    {
        image: 'https://i.ibb.co/X3GNW8v/Bootstrap.png',
        title: 'Buat Website Responsif dengan Mudah Menggunakan Bootstrap!',
        description: 'Kembangkan website responsif dengan cepat dan mudah menggunakan Bootstrap. Framework front-end paling populer untuk pengembangan web. Mulai sekarang!',
        link: 'https://getbootstrap.com/'
    },
    {
        image: 'https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2F1zUViz84vavghFDIK1qmlm%2F8be7ec39bf58472414e212d7547e7f8b%2FVercel__Zeit_.jpeg&w=1920&q=75',
        title: 'Deploy Website Anda dengan Mudah di Vercel!',
        description: 'Platform terbaik untuk deploy dan skala proyek web modern. Nikmati deploy otomatis yang cepat, aman, dan mudah dengan Vercel. Mulai gratis sekarang!',
        link: 'https://vercel.com/'
    },
    {
        image: 'https://www.catatan.net/images/gohugo/gohugo.jpeg',
        title: 'Bangun Website Super Cepat dengan Hugo!',
        description: 'Ciptakan website statis dengan cepat menggunakan Hugo. Cepat, fleksibel, dan mudah digunakan—cocok untuk blog pribadi atau proyek besar. Coba Hugo sekarang!',
        link: 'https://gohugo.io/'
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