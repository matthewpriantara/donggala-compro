import type {
  NavItem,
  ServiceItem,
  PortfolioItem,
  StatItem,
  ValueItem,
  SocialLink,
} from "@/types";

/**
 * Single Source of Truth untuk Konstanta, Metadata, dan Konfigurasi Profil Perusahaan
 * Mengikuti arsitektur UPPER_SNAKE_CASE
 */

// ============================================================================
// 1. COMPANY METADATA & BRANDING
// ============================================================================
export const COMPANY_NAME = "Jelajah Donggala" as const;
export const COMPANY_TAGLINE = "Towale & Limboro" as const;
export const COMPANY_SUBTITLE =
  "Membangun ekosistem teknologi, pemberdayaan komunitas, dan transformasi digital yang berdampak nyata." as const;
export const COMPANY_DESCRIPTION =
  "Kenali Towale dan Limboro: warisan tenun Kaili, pesisir Donggala, pangan sagu, dan perjalanan bersama warga." as const;

// ============================================================================
// 2. NAVIGASI UTAMA
// ============================================================================
export const NAV_LINKS: readonly NavItem[] = [
  { title: "Profil Desa", href: "/desa" },
  { title: "Kriya & Kuliner", href: "/kriya-kuliner" },
  { title: "Budaya", href: "/budaya" },
  { title: "Bahasa Kaili", href: "/bahasa" },
  { title: "Kedaruratan", href: "/kedaruratan" },
];

// ============================================================================
// 3. STATISTIK PERUSAHAAN (STATS)
// ============================================================================
export const COMPANY_STATS: readonly StatItem[] = [
  {
    value: "10+",
    label: "Tahun Pengalaman",
    description: "Dedikasi solusi teknologi & riset",
  },
  {
    value: "50+",
    label: "Proyek Selesai",
    description: "Platform web, mobile, & sistem terpadu",
  },
  {
    value: "99.8%",
    label: "Kepuasan Klien",
    description: "Standar delivery tepat waktu & presisi",
  },
  {
    value: "24/7",
    label: "Dukungan Teknis",
    description: "Monitoring & kesiapan operasional",
  },
] as const;

// ============================================================================
// 4. NILAI & VISI MISI PERUSAHAAN
// ============================================================================
export const VISION_TEXT =
  "Menjadi pionir akselerasi transformasi digital yang mengintegrasikan kearifan lokal dengan teknologi modern berstandar global." as const;

export const MISSION_ITEMS: readonly string[] = [
  "Mengembangkan produk perangkat lunak tangguh, aman, dan mudah digunakan.",
  "Mendorong digitalisasi UMKM dan inisiatif pariwisata berbasis komunitas.",
  "Membangun kemitraan strategis yang berkelanjutan dengan para pemangku kepentingan.",
  "Menjunjung tinggi etika rekayasa perangkat lunak dan keandalan sistem.",
] as const;

export const CORE_VALUES: readonly ValueItem[] = [
  {
    title: "Integritas & Transparansi",
    description:
      "Kami mengutamakan kejujuran teknis, keterbukaan progres, dan akuntabilitas hasil kerja.",
  },
  {
    title: "Inovasi Berkelanjutan",
    description:
      "Terus berevolusi mengikuti standar teknologi terdepan demi memberikan nilai jangka panjang.",
  },
  {
    title: "Orientasi Dampak Nyata",
    description:
      "Setiap baris kode dan solusi arsitektur dirancang untuk memecahkan persoalan riil pengguna.",
  },
] as const;

// ============================================================================
// 5. LAYANAN UNGGULAN (SERVICES)
// ============================================================================
export const SERVICES: readonly ServiceItem[] = [
  {
    id: "web-development",
    title: "Modern Web Engineering",
    description:
      "Arsitektur web berbasis Next.js App Router dengan pemisahan SSR/CSR ketat untuk kecepatan maksimal dan SEO prima.",
    iconName: "Globe",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & DevSecOps",
    description:
      "Perancangan infrastruktur cloud otomatis, containerization dengan Docker, dan integrasi CI/CD yang andal.",
    iconName: "Cloud",
  },
  {
    id: "digital-strategy",
    title: "Digital Consultation",
    description:
      "Analisis kebutuhan sistem, pemetaan tata kelola data, dan perumusan strategi roadmap produk teknologi.",
    iconName: "Compass",
  },
  {
    id: "community-platform",
    title: "Community & Local Empowerment",
    description:
      "Pengembangan portal ekowisata, katalog digital UMKM, dan platform pemberdayaan masyarakat.",
    iconName: "Users",
  },
] as const;

// ============================================================================
// 6. PROYEK & PORTOFOLIO (PORTFOLIO)
// ============================================================================
export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: "jelajah-donggala",
    title: "Portal Ekowisata & Katalog Komunitas",
    category: "Web Application",
    description:
      "Platform digital terintegrasi untuk eksplorasi pesisir Towale & Limboro, katalog kriya tenun, dan reservasi layanan lokal.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
  },
  {
    id: "enterprise-dashboard",
    title: "Sistem Manajemen Operasional Terpadu",
    category: "Internal Tooling",
    description:
      "Dashboard administrasi data real-time dengan kontrol hak akses berbasis peran (RBAC) dan pelaporan analitik komprehensif.",
    tags: ["Next.js SSR", "TypeScript", "Audit Trail"],
  },
  {
    id: "gis-mapping-system",
    title: "Peta Interaktif Potensi Wilayah",
    category: "Spatial Tech",
    description:
      "Visualisasi titik persebaran potensi desa, akomodasi, dan destinasi bahari dengan optimasi pemuatan asinkron.",
    tags: ["Leaflet", "GeoJSON", "Modular Architecture"],
  },
] as const;

// ============================================================================
// 7. INFORMASI KONTAK & LEGALITAS
// ============================================================================
export const CONTACT_INFO = {
  address: "Jl. Trans Sulawesi, Donggala, Sulawesi Tengah",
  email: "kontak@donggalakreatif.id",
  phone: "+62 812-3456-7890",
  whatsappUrl: "https://wa.me/6281234567890",
  operatingHours: "Senin – Jumat, 08.00 – 17.00 WITA",
} as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", iconName: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com", iconName: "Linkedin" },
  {
    platform: "Instagram",
    url: "https://instagram.com",
    iconName: "Instagram",
  },
] as const;

// ============================================================================
// 8. TAHUN HAK CIPTA
// ============================================================================
export const COPYRIGHT_YEAR = 2026 as const;

// Portal wilayah: sumber konten tunggal untuk seluruh modul yang aktif.
export const PORTAL = {
  initials: "JD",
  subtitle: "TOWALE & LIMBORO",
  url: "https://jelajah-donggala.vercel.app",
  platform: "Platform Jelajah",
  heroCta: "Buka Platform Jelajah Donggala",
  villageCta: "Kenali Dua Desa",
  location: "Kecamatan Banawa Tengah, Donggala, Sulawesi Tengah",
  eyebrow: "SEBUAH PERJALANAN DI PESISIR SULAWESI",
  headline: "Towale dan Limboro,",
  headlineSecond: "dua pesona",
  headlineAccent: "dalam satu perjalanan.",
  description:
    "Dari benang sutra ke birunya samudra. Temukan pusaka tenun Kaili, bentang teluk bahari, dan cerita yang hidup bersama warga.",
  heroImage: "/images/hero_limboro_coastal.png",
  heroAlt: "Panorama teluk pesisir dengan air toska dan pantai melengkung",
  heroCaption: "TELUK LIMBORO",
  heroNote: "Dua desa. Beragam cerita. Satu perjalanan.",
  scroll: "GULIR UNTUK MENGENAL",
  aboutEyebrow: "SELAMAT DATANG DI DONGGALA",
  aboutTitle: "Dua desa pesisir,",
  aboutAccent: "satu denyut kearifan.",
  aboutText:
    "Di tepian Selat Makassar, Towale dan Limboro menyimpan cara hidup yang dekat dengan alam. Tangan-tangan penenun merawat ingatan, perahu menyapa laut, dan sagu menghidupi meja makan keluarga.",
  aboutTextSecond:
    "Singgahlah lebih lama. Kenali Towale lewat kriya tenun dan Pusentasi, lalu ikuti garis pesisir menuju pasir putih Kaluku dan cerita pangan Limboro.",
  aboutCaption: "SELANGKAH LEBIH DEKAT DENGAN KEHIDUPAN PESISIR",
  aboutImage: "/images/wisata_towale.jpg",
  statsNote:
    "Gambaran dua desa · angka perencanaan dari PRD, menunggu validasi pemerintah desa.",
  villagesEyebrow: "DUA WAJAH DONGGALA",
  villagesTitle: "Berbeda pesona, bertaut cerita.",
  productsEyebrow: "DARI TANGAN WARGA",
  productsTitle: "Rasa, rupa, dan warisan.",
  productsText:
    "Bawa pulang cerita dalam sehelai tenun dan cita rasa yang tumbuh dari tanah sendiri.",
  productCta: "Detail & hubungi pengrajin",
  productNote:
    "Harga acuan PRD. Ketersediaan dan harga dikonfirmasi bersama pengrajin melalui platform.",
  tripsEyebrow: "PERJALANAN YANG BERMAKNA",
  tripsTitle: "Datang sebagai tamu. Pulang membawa cerita.",
  tripCta: "Cek jadwal & kuota keberangkatan",
  tripNote:
    "Setiap perjalanan mengikuti kesiapan warga, cuaca, dan konfirmasi pengelola lokal.",
  cultureEyebrow: "BUDAYA & KONSERVASI",
  cultureTitle: "Yang diwariskan, yang kita jaga.",
  languageEyebrow: "SEJENAK BELAJAR BAHASA KAILI",
  languageTitle: "Sapa warga dengan bahasanya.",
  languageText:
    "Perjalanan yang hangat dimulai dari sapaan sederhana. Penggunaan kata dapat berbeda menurut dialek; belajarlah langsung bersama warga.",
  emergencyEyebrow: "JELAJAH DENGAN BIJAK",
  emergencyTitle: "Selamat berangkat, selamat kembali.",
  emergencyText:
    "Tanyakan kondisi laut dan pasang surut kepada pendamping lokal. Kenali titik kumpul dan rute evakuasi sebelum beraktivitas di pesisir.",
  emergencyLocal:
    "Kontak Puskesmas Banawa Tengah dan peta evakuasi lokal menunggu verifikasi pemerintah desa. Minta informasi terbaru kepada pendamping sebelum berkunjung.",
  emergencyAdvice:
    "Jika merasakan guncangan kuat atau lama di pesisir, segera evakuasi mandiri ke tempat tinggi melalui jalur aman dan ikuti arahan petugas.",
  mapEyebrow: "SATU PINTU EKSPLORASI",
  mapTitle: "Mulai dari rasa ingin tahu.",
  mapText:
    "Temukan desa, destinasi, dan aktivitas warga melalui peta pada platform Jelajah Donggala.",
  mapCta: "Buka peta interaktif lengkap",
  footerText:
    "Ruang perjumpaan dengan alam, budaya, dan warga Towale & Limboro. Jelajahi dengan rasa hormat, tinggalkan jejak yang baik.",
  footerNav: "JELAJAH",
  footerContact: "BERSAMA WARGA",
  footerPartners: "KKN-PPM UGM · Pemerintah Desa Towale & Limboro",
  footerAddress: "Banawa Tengah, Donggala\nSulawesi Tengah, Indonesia",
  copyright: "© 2026 Jelajah Donggala. Merawat cerita, menjaga pesisir.",
  skip: "Langsung ke konten",
  openMenu: "Buka menu",
  closeMenu: "Tutup menu",
  navigation: "Navigasi utama",
  loading: "Memuat cerita Donggala…",
} as const;
export const MARQUEE_ITEMS = [
  "AIR TOSKA TELUK LIMBORO",
  "TENUN IKAT BUYA BOMBA",
  "GEOWISATA PUSENTASI",
  "KETAHANAN PANGAN SAGU",
  "KKN-PPM UGM",
] as const;
export const VILLAGE_STATS = [
  { value: "4.820", label: "Jiwa penduduk" },
  { value: "1.240", label: "Kepala keluarga" },
  { value: "64,2 km²", label: "Pesisir & daratan" },
  { value: "8", label: "Dusun binaan" },
] as const;
export const VILLAGES = [
  {
    name: "Towale",
    number: "01",
    tag: "SIMPUL WARISAN KAILI",
    image: "/images/wisata_towale.jpg",
    alt: "Pesisir Towale dengan pohon kelapa dan perahu warga",
    description:
      "Di antara helaian sutra dan debur ombak, warisan Kaili terus ditenun dari generasi ke generasi.",
    highlights: ["Tenun Buya Bomba", "Pusentasi", "Pantai Bonebula"],
    cta: "Eksplorasi Towale",
  },
  {
    name: "Limboro",
    number: "02",
    tag: "RITME KEHIDUPAN BAHARI",
    image: "/images/wisata_limboro.jpeg",
    alt: "Bentang pantai dan suasana bahari Limboro",
    description:
      "Ikuti lengkung pantai Kaluku, kenali kehidupan nelayan, dan cicipi sagu dari dapur-dapur warga.",
    highlights: ["Pantai Kaluku", "Olahan sagu", "Tradisi nelayan"],
    cta: "Eksplorasi Limboro",
  },
] as const;
export const PRODUCTS = [
  {
    name: "Kain Tenun Buya Bomba",
    maker: "Penenun Subaer · Towale",
    price: "Rp450.000",
    tag: "KRIYA",
    motif: "pink",
    description: "Warisan keterampilan dalam helaian benang dan motif Kaili.",
  },
  {
    name: "Keripik Sagu Gurih",
    maker: "KWT Sejahtera · Limboro",
    price: "Rp20.000",
    tag: "PANGAN",
    motif: "kuning",
    description: "Olahan sagu lokal untuk teman berbagi cerita.",
  },
  {
    name: "Cookies Sagu Rendah Gula",
    maker: "Sentra Pangan · Limboro",
    price: "Rp25.000",
    tag: "OLAHAN SAGU",
    motif: "biru",
    description: "Kreasi dapur warga dari hasil bumi sendiri.",
  },
  {
    name: "Ikan Bakar Selat Makassar",
    maker: "Nelayan pesisir Kaluku",
    price: "Segar harian",
    tag: "BAHARI",
    motif: "putih",
    description: "Hasil tangkapan laut, dinikmati bersama di pesisir.",
  },
] as const;
export const TRIPS = [
  {
    number: "01",
    title: "Jelajah Tanah Kaili",
    duration: "2 HARI · 1 MALAM",
    description:
      "Menginap di rumah warga, menyusuri teluk, dan mengenal proses menenun.",
    image: "/images/hero_limboro_coastal.png",
  },
  {
    number: "02",
    title: "Snorkeling Pantai Kaluku",
    duration: "WISATA BAHARI",
    description:
      "Mengenal terumbu karang dangkal bersama pendamping lokal tanpa menyentuh atau mengambil biota.",
    image: "/images/wisata_limboro.jpeg",
  },
  {
    number: "03",
    title: "Kelas Olahan Sagu",
    duration: "BELAJAR BERSAMA WARGA",
    description:
      "Mengenal bahan pangan lokal dan praktik mengolah sagu bersama warga Limboro.",
    image: null,
  },
] as const;
export const CULTURE_STORIES = [
  {
    tag: "01 / WARISAN TOWALE",
    title: "Sehelai tenun, berlapis ingatan.",
    description:
      "Buya Bomba menyimpan cerita tentang bunga, kehidupan, dan ketekunan. Mengenalnya berarti meluangkan waktu untuk mendengar penenun, menghargai prosesnya, dan menjaga keterampilan ini tetap hidup.",
    motif: "pink",
  },
  {
    tag: "02 / KEARIFAN LIMBORO",
    title: "Laut yang memberi, laut yang dijaga.",
    description:
      "Keindahan teluk adalah titipan bersama. Hormati ruang kerja nelayan, bawa kembali sampah, hindari menginjak karang, dan ikuti arahan pendamping agar perjalanan kita ikut menjaga pesisir.",
    motif: "biru",
  },
] as const;
export const KAILI_WORDS = [
  {
    word: "Ndokumo",
    meaning: "Halo / Apa kabar",
    context: "Sapaan saat bertamu",
  },
  {
    word: "Tarimakasi",
    meaning: "Terima kasih",
    context: "Untuk setiap kebaikan",
  },
  {
    word: "Mabelo",
    meaning: "Indah / Elok / Bagus",
    context: "Mengapresiasi tenun dan alam",
  },
  {
    word: "Kande",
    meaning: "Ayo makan",
    context: "Hangatnya meja makan warga",
  },
] as const;
export const EMERGENCY_CONTACTS = [
  {
    number: "112",
    label: "Darurat umum",
    note: "Ketersediaan layanan mengikuti wilayah",
  },
  { number: "115", label: "Pencarian & pertolongan", note: "Basarnas" },
  { number: "119", label: "Kegawatdaruratan medis", note: "Layanan kesehatan" },
] as const;
export const MOTIF_PATH = "/images/elements/kotak 4 ";

export const TOPIC_UI = {
  home: "Beranda",
  back: "Kembali ke beranda",
  related: "LANJUTKAN PENJELAJAHAN",
  relatedTitle: "Masih ada cerita untuk dikenali.",
  readMore: "Kenali lebih dekat",
  guide: "PANDUAN SEBELUM BERKUNJUNG",
  guideTitle: "Bekal kecil untuk perjalanan yang baik.",
  searchLabel: "Cari kosakata Kaili",
  searchPlaceholder: "Cari kata, arti, atau situasi…",
  noWords: "Belum ada kosakata yang sesuai. Coba kata lain.",
  wordsUnit: "kosakata ditampilkan",
} as const;
export const TOPIC_PAGES = {
  desa: {
    path: "/desa",
    label: "Profil Desa",
    eyebrow: "TOWALE & LIMBORO · BANAWA TENGAH",
    title: "Dua desa, dua cara merawat pesisir.",
    description:
      "Kenali karakter Towale dan Limboro sebelum menyusun perjalanan: warisan tenun Kaili, bentang bahari, dan kehidupan yang tumbuh bersama warga.",
    image: "/images/wisata_towale.jpg",
    imageAlt: "Pohon kelapa dan perahu di pesisir Towale",
    introTitle: "Satu koridor, pengalaman yang saling melengkapi.",
    paragraphs: [
      "Towale mempertemukan pengunjung dengan kriya tenun Buya Bomba, Pusentasi, dan Pantai Bonebula. Luangkan waktu untuk melihat proses, mendengar cerita, dan memahami kehidupan di balik setiap tempat.",
      "Limboro melanjutkan perjalanan melalui pesisir Kaluku, tradisi nelayan, dan pengolahan sagu. Perjalanan tidak hanya tentang berpindah destinasi, tetapi juga mengenal hubungan warga dengan laut dan hasil bumi.",
    ],
    guide: [
      {
        title: "Mulai dari percakapan",
        text: "Hubungi pengelola lokal melalui platform untuk menanyakan akses, pendamping, dan kesiapan aktivitas warga.",
      },
      {
        title: "Susun waktu yang lentur",
        text: "Gabungkan kunjungan kriya dan pesisir tanpa memaksakan jadwal. Aktivitas mengikuti cuaca serta keseharian tuan rumah.",
      },
      {
        title: "Gunakan peta eksplorasi",
        text: "Buka peta platform untuk mengenali wilayah. Konfirmasikan kondisi jalan dan lokasi pertemuan sebelum berangkat.",
      },
    ],
  },
  karya: {
    path: "/kriya-kuliner",
    label: "Kriya & Kuliner",
    eyebrow: "KARYA TANGAN · HASIL BUMI · CITA RASA",
    title: "Kenali asalnya, hargai prosesnya.",
    description:
      "Di balik sehelai tenun dan sepiring sajian, ada keterampilan, bahan lokal, dan keseharian warga Towale serta Limboro.",
    image: null,
    imageAlt: "",
    introTitle: "Belanja sebagai perjumpaan dengan pembuatnya.",
    paragraphs: [
      "Tenun Buya Bomba membuka ruang untuk mengenal motif, bahan, dan waktu pengerjaan bersama penenun Towale. Tanyakan perbedaan setiap kain serta cara merawatnya sebelum memilih karya untuk dibawa pulang.",
      "Di Limboro, sagu hadir sebagai bahan pangan yang diolah menjadi keripik dan cookies. Sajian ikan pesisir mengikuti hasil tangkapan harian. Tanyakan bahan, porsi, dan ketersediaan langsung kepada pembuatnya.",
    ],
    guide: [
      {
        title: "Konfirmasi sebelum membeli",
        text: "Harga yang ditampilkan merupakan acuan PRD. Cocokkan harga terkini, pilihan produk, dan stok dengan pengrajin melalui katalog platform.",
      },
      {
        title: "Tanyakan bahan dan perawatan",
        text: "Untuk tenun, tanyakan bahan dan petunjuk pencucian. Untuk pangan, periksa komposisi, alergen, kemasan, dan masa simpan bersama penjual.",
      },
      {
        title: "Dukung karya warga",
        text: "Hargai waktu pengerjaan serta izin dokumentasi. Pengaturan pembayaran dan pengambilan disepakati langsung dengan pembuat.",
      },
    ],
  },
  budaya: {
    path: "/budaya",
    label: "Budaya",
    eyebrow: "WARISAN KAILI & KEPEDULIAN PADA ALAM",
    title: "Budaya hidup dalam keseharian.",
    description:
      "Dari ketekunan menenun hingga cara menjaga pesisir, kenali nilai yang dirawat warga melalui cerita dan perjumpaan langsung.",
    image: null,
    imageAlt: "",
    introTitle: "Datang untuk mendengar, bukan sekadar melihat.",
    paragraphs: [
      "Kriya tenun merupakan pintu masuk untuk mengenal warisan Kaili di Towale. Makna motif dan kisah keluarga sebaiknya didengar langsung dari penenun, dengan menghormati perbedaan penuturan serta pengalaman setiap orang.",
      "Di pesisir Limboro, perjalanan yang menghargai budaya juga berarti menghormati ruang kerja nelayan dan menjaga lingkungan. Menikmati teluk membawa tanggung jawab untuk meninggalkannya tetap baik bagi warga.",
    ],
    guide: [
      {
        title: "Minta izin sebelum merekam",
        text: "Tanyakan kesediaan warga sebelum memotret, merekam proses kerja, atau mempublikasikan cerita pribadi.",
      },
      {
        title: "Hargai ruang dan waktu warga",
        text: "Ikuti arahan tuan rumah saat berkunjung ke tempat menenun, rumah, atau ruang kerja nelayan.",
      },
      {
        title: "Bawa pulang sampah",
        text: "Hindari mengambil biota atau menyentuh karang. Pilih aktivitas bersama pendamping yang memahami kondisi pesisir.",
      },
    ],
  },
  bahasa: {
    path: "/bahasa",
    label: "Bahasa Kaili",
    eyebrow: "KAMUS SAPAAN · BELAJAR BERSAMA WARGA",
    title: "Mulai dengan satu sapaan.",
    description:
      "Kosakata sederhana untuk membuka percakapan dengan warga. Cari kata menurut arti atau situasi, lalu pelajari pengucapannya langsung dari penutur lokal.",
    image: null,
    imageAlt: "",
    introTitle: "Bahasa bukan hanya daftar kata.",
    paragraphs: [
      "Sapaan memberi ruang untuk mengenal orang yang kita temui. Gunakan kamus ringkas ini sebagai pengantar ketika bertamu, mengapresiasi karya, atau berbagi makanan bersama warga.",
      "Bahasa Kaili memiliki ragam dialek. Entri awal mengikuti PRD dan masih memerlukan validasi penutur setempat; arti, konteks, serta pengucapannya dapat berbeda. Jangan ragu meminta koreksi dengan santun.",
    ],
    guide: [
      {
        title: "Dengarkan pengucapannya",
        text: "Mintalah warga mencontohkan kata sesuai dialek yang mereka gunakan. Halaman ini belum menyediakan rekaman audio terverifikasi.",
      },
      {
        title: "Perhatikan situasinya",
        text: "Tanyakan sapaan yang pantas digunakan kepada orang yang lebih tua atau saat pertama kali bertamu.",
      },
      {
        title: "Belajar tanpa terburu-buru",
        text: "Gunakan sedikit kata dengan niat baik. Ucapkan terima kasih ketika warga membantu memperbaiki pengucapan Anda.",
      },
    ],
  },
  kedaruratan: {
    path: "/kedaruratan",
    label: "Kedaruratan",
    eyebrow: "KESELAMATAN PESISIR · KONTAK PENTING",
    title: "Kenali bantuan sebelum dibutuhkan.",
    description:
      "Simpan kontak penting dan bicarakan rencana keselamatan bersama pendamping sebelum menjelajahi pesisir Towale dan Limboro.",
    image: null,
    imageAlt: "",
    introTitle: "Persiapan dimulai sebelum tiba di pantai.",
    paragraphs: [
      "Pastikan pendamping mengetahui tujuan, kegiatan, dan waktu kembali Anda. Tanyakan kondisi laut, titik pertemuan, serta lokasi bantuan terdekat sebelum memulai aktivitas.",
      "Daftar kontak di halaman ini merupakan nomor layanan nasional. Jangkauan dan kesiapan respons mengikuti wilayah. Kontak Puskesmas Banawa Tengah dan peta evakuasi lokal masih menunggu verifikasi pemerintah desa.",
    ],
    guide: [
      {
        title: "Simpan kontak lokal",
        text: "Minta nomor pendamping serta fasilitas kesehatan terdekat sebelum berangkat. Catat juga secara luring jika sinyal terbatas.",
      },
      {
        title: "Kenali lokasi Anda",
        text: "Saat meminta bantuan, sampaikan lokasi atau patokan terdekat, jenis kejadian, jumlah orang, serta nomor yang dapat dihubungi kembali.",
      },
      {
        title: "Konfirmasi jalur evakuasi",
        text: "Minta pendamping menunjukkan titik kumpul dan jalur yang telah ditetapkan setempat. Peta eksplorasi platform bukan peta evakuasi resmi.",
      },
    ],
  },
} as const;
export type TopicKey = keyof typeof TOPIC_PAGES;

export const HERO_SLIDES = [
  {
    image: "/images/hero_limboro_coastal.png",
    alt: "Panorama teluk berpasir putih dan pepohonan pesisir Limboro",
    caption: "TELUK LIMBORO",
  },
  {
    image: "/images/wisata_limboro.jpeg",
    alt: "Pantai Limboro dengan pohon kelapa, pasir, dan laut tenang",
    caption: "PESISIR LIMBORO",
  },
  {
    image: "/images/wisata_towale.jpg",
    alt: "Pohon kelapa dan perahu warga di pesisir Towale",
    caption: "PESISIR TOWALE",
  },
] as const;
export const HERO_CAROUSEL = {
  interval: 6000,
  label: "Panorama Towale dan Limboro",
  roleDescription: "carousel",
  pause: "Jeda pergantian gambar",
  play: "Lanjutkan pergantian gambar",
  choose: "Tampilkan panorama",
} as const;
