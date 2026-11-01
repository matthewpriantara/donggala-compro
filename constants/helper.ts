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
  {
    title: "Profil",
    href: "/desa",
    items: [
      {
        title: "Desa Towale",
        description: "Sentra tenun Buya Sabe, sumur Pusat Laut purba, dan Pantai Bonebula.",
        href: "/desa#towale",
        iconName: "Landmark",
        badge: "Towale",
      },
      {
        title: "Desa Limboro",
        description: "Panorama teluk pasir putih Pantai Kaluku, sentra sagu, dan tradisi bahari.",
        href: "/desa#limboro",
        iconName: "Palmtree",
        badge: "Limboro",
      },
      {
        title: "Satu Koridor Dua Desa",
        description: "Kemitraan koridor terpadu kriya tenun dan wisata bahari Banawa Tengah.",
        href: "/#tentang",
        iconName: "Compass",
      },
    ],
  },
  {
    title: "Kriya & Kuliner",
    href: "/kriya-kuliner",
    items: [
      {
        title: "Tenun Buya Sabe / Bomba",
        description: "Pusaka tenun ikat sutra buatan tangan ibu-ibu penenun Towale.",
        href: "/kriya-kuliner#tenun",
        iconName: "Sparkles",
        badge: "Kriya Pusaka",
      },
      {
        title: "Kuliner Tradisional & Sagu",
        description: "Kaledo ubi Donggala, Dange Tabaro, Sinole, dan keripik sagu gurih.",
        href: "/kriya-kuliner#kuliner",
        iconName: "UtensilsCrossed",
        badge: "Kuliner Khas",
      },
      {
        title: "Camilan & Oleh-Oleh",
        description: "Kue Bagea, Baurasa, Balurengga, Somo, dan keripik pisang Towale.",
        href: "/kriya-kuliner#oleh-oleh",
        iconName: "ShoppingBag",
        badge: "Oleh-Oleh",
      },
    ],
  },
  {
    title: "Budaya",
    href: "/budaya",
    items: [
      {
        title: "Filosofi Tenun Kaili",
        description: "Makna simbolis motif bunga mekar kemakmuran dan doa keselamatan.",
        href: "/budaya#filosofi",
        iconName: "BookOpen",
        badge: "Filosofi",
      },
      {
        title: "Pusaka Bulava Mpongeo",
        description: "Peninggalan Raja Kaili dan ritual tahunan Modiu Bulava Mpongeo.",
        href: "/budaya#ritual",
        iconName: "Crown",
        badge: "Pusaka Sakral",
      },
      {
        title: "Kearifan Bahari & Konservasi",
        description: "Etika nelayan menjaga terumbu karang dan sabuk pantai Selat Makassar.",
        href: "/budaya#konservasi",
        iconName: "Fish",
        badge: "Tradisi Laut",
      },
      {
        title: "Kamus Sapaan Bahasa Kaili",
        description: "Kosakata santun untuk menyapa warga penenun dan nelayan lokal.",
        href: "/bahasa",
        iconName: "Languages",
        badge: "Bahasa Daerah",
      },
    ],
  },
  {
    title: "Kesehatan",
    href: "/kesehatan",
    items: [
      {
        title: "Tekanan Darah (Tensi)",
        description: "Standar tensi normal (<120/80 mmHg), panduan pencegahan hipertensi pesisir.",
        href: "/kesehatan#tekanan-darah",
        iconName: "HeartPulse",
        badge: "< 120/80 mmHg",
      },
      {
        title: "Glukosa (Gula Darah)",
        description: "Standar normal glukosa puasa (70–99 mg/dL) & pola konsumsi rendah gula.",
        href: "/kesehatan#glukosa",
        iconName: "Activity",
        badge: "70-99 mg/dL",
      },
      {
        title: "Kolesterol Total",
        description: "Batas aman kolesterol (<200 mg/dL) & manfaat konsumsi ikan segar berlemak sehat.",
        href: "/kesehatan#kolesterol",
        iconName: "ShieldCheck",
        badge: "< 200 mg/dL",
      },
      {
        title: "Asam Urat (Uric Acid)",
        description: "Standar batas asam urat pria (3.5–7.2) & wanita (2.6–6.0) ramah sendi.",
        href: "/kesehatan#asam-urat",
        iconName: "Stethoscope",
        badge: "< 7.0 mg/dL",
      },
    ],
  },
  {
    title: "Darurat",
    href: "/kedaruratan",
    items: [
      {
        title: "Polsek Banawa / Banawa Tengah",
        description: "Keamanan & ketertiban sektor pesisir Banawa Tengah.",
        href: "tel:045771110",
        iconName: "ShieldAlert",
        badge: "(0457) 71110",
        phone: "(0457) 71110",
        isExternal: true,
      },
      {
        title: "Polres Donggala / Polisi 110",
        description: "Layanan darurat kepolisian 24 jam bebas pulsa nasional.",
        href: "tel:110",
        iconName: "PhoneCall",
        badge: "Call 110",
        phone: "110",
        isExternal: true,
      },
      {
        title: "Puskesmas Banawa Tengah",
        description: "Layanan medis darurat pertama, ambulans, dan penanganan gawat darurat.",
        href: "tel:119",
        iconName: "Ambulance",
        badge: "119 / Medis",
        phone: "119 / Medis",
        isExternal: true,
      },
      {
        title: "Basarnas Palu / SAR Laut",
        description: "Kedaruratan bahari dan pertolongan perahu nelayan Selat Makassar.",
        href: "tel:115",
        iconName: "LifeBuoy",
        badge: "Call 115",
        phone: "115",
        isExternal: true,
      },
      {
        title: "Darurat Nasional 112",
        description: "Layanan bebas pulsa 24 jam semua jenis kedaruratan & bencana.",
        href: "tel:112",
        iconName: "PhoneForwarded",
        badge: "Call 112",
        phone: "112",
        isExternal: true,
      },
    ],
  },
  {
    title: "Informasi Mangrove",
    href: "/mangrove",
    items: [
      {
        title: "Sabuk Hijau Pesisir",
        description: "Peran ekologis hutan bakau meredam abrasi gelombang Selat Makassar.",
        href: "/mangrove#sabuk-hijau",
        iconName: "Trees",
        badge: "Ekologi Pesisir",
      },
      {
        title: "Habitat Biota & Terumbu Karang",
        description: "Zona pemijahan ikan, kepiting bakau, dan penopang ekonomi nelayan.",
        href: "/mangrove#ekosistem",
        iconName: "Waves",
        badge: "Fauna & Flora",
      },
      {
        title: "Edukasi & Pembibitan Bakau",
        description: "Program pembibitan mangrove dan aksi bersih pesisir bersama warga & KKN.",
        href: "/mangrove#konservasi",
        iconName: "Leaf",
        badge: "Aksi Nyata",
      },
    ],
  },
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
  productsCta: "Jelajahi Kriya & Kuliner",
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
        text: "Konfirmasikan harga terkini, pilihan produk, dan stok langsung dengan pengrajin melalui katalog platform.",
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
  kesehatan: {
    path: "/kesehatan",
    label: "Kesehatan",
    eyebrow: "LAYANAN KESEHATAN · SKRINING & EDUKASI POSYANDU",
    title: "Pencegahan dini untuk kehidupan pesisir yang sehat.",
    description:
      "Panduan indikator kesehatan dasar: tekanan darah, glukosa, kolesterol, dan asam urat sebagai langkah pencegahan penyakit degeneratif bagi warga dan pengunjung.",
    image: null,
    imageAlt: "",
    introTitle: "Sehat bersama alam dan kearifan pangan lokal.",
    paragraphs: [
      "Kesehatan warga pesisir Banawa Tengah ditopang oleh pola konsumsi pangan alami seperti sagu, ikan segar, dan sayur kelor (uta kelo). Skrining berkala di posyandu membantu memantau kondisi kesehatan sejak dini.",
      "Kenali empat parameter utama: tekanan darah untuk mencegah stroke, glukosa untuk mencegah diabetes, kolesterol untuk kesehatan jantung, dan asam urat untuk kenyamanan gerak beraktivitas di pesisir.",
    ],
    guide: [
      {
        title: "Pemeriksaan Rutin Posyandu",
        text: "Manfaatkan posyandu dan posbindu terdekat di Desa Towale dan Limboro untuk cek tensi dan tes darah berkala.",
      },
      {
        title: "Perhatikan Pola Konsumsi",
        text: "Kurangi konsumsi garam berlebih dan makanan olahan tinggi gula; perbanyak konsumsi serat sagu dan ikan segar.",
      },
      {
        title: "Konsultasi ke Tenaga Medis",
        text: "Bila hasil skrining melebihi ambang normal, segera periksakan ke Puskesmas Banawa Tengah untuk penanganan medis tepat.",
      },
    ],
  },
  mangrove: {
    path: "/mangrove",
    label: "Informasi Mangrove",
    eyebrow: "KONSERVASI PESISIR · SABUK HIJAU SELAT MAKASSAR",
    title: "Menjaga benteng hijau di batas samudra.",
    description:
      "Peran penting ekosistem hutan mangrove sebagai pelindung alami dari abrasi gelombang Selat Makassar, penyimpan karbon, dan habitat pemijahan biota laut Towale dan Limboro.",
    image: null,
    imageAlt: "",
    introTitle: "Akar yang mengikat tanah, meneduhkan samudra.",
    paragraphs: [
      "Hutan mangrove di pesisir Banawa Tengah merupakan benteng pelindung alami pertama warga dari hantaman ombak besar dan potensi ancaman tsunami Selat Makassar. Rumpun bakau menjaga garis pantai dari abrasi tahunan.",
      "Selain melindungi daratan, ekosistem mangrove menjadi rumah dan tempat berkembang biak kepiting bakau, udang, dan aneka ikan karang yang menjadi sumber mata pencaharian utama para nelayan tradisional.",
    ],
    guide: [
      {
        title: "Jaga Kelestarian Rumpun Bakau",
        text: "Hindari penebangan pohon bakau dan buang sampah plastik di area perairan pasang surut.",
      },
      {
        title: "Dukung Program Pembibitan",
        text: "Ikuti aksi penanaman bibit mangrove bersama pemuda desa, pokdarwis, dan tim KKN-PPM UGM.",
      },
      {
        title: "Ekowisata Berkelanjutan",
        text: "Susuri jalur mangrove dengan perahu tradisional tanpa merusak perakaran dan habitat fauna.",
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

export const TENUN_DIVIDER_IMAGE = "/images/tenun-donggala-border.svg";

export const TOPIC_DETAILS = {
  desa: {
    eyebrow: "KENALI KARAKTER WILAYAH",
    title: "Pilih cara Anda mengenal dua desa.",
    cards: [
      {
        title: "Towale: kriya dan bentang pesisir",
        text: "Awali perjumpaan dengan cerita penenun, lalu kenali bentang alam yang menjadi bagian dari kehidupan warga.",
        points: [
          "Tenun Buya Bomba: tanyakan proses, bahan, dan makna motif kepada pembuatnya.",
          "Pusentasi: kenali geowisata sumur air laut alami bersama pendamping setempat.",
          "Pantai Bonebula: konfirmasikan akses dan kondisi pesisir sebelum berkunjung.",
        ],
      },
      {
        title: "Limboro: laut dan hasil bumi",
        text: "Lengkung pesisir Kaluku dan olahan sagu memperlihatkan hubungan warga dengan sumber penghidupannya.",
        points: [
          "Pantai Kaluku: bicarakan kondisi laut dan pendampingan sebelum aktivitas bahari.",
          "Olahan sagu: kenali produk serta prosesnya melalui kunjungan yang disepakati bersama warga.",
          "Tradisi nelayan: hormati area tambat perahu dan aktivitas kerja sehari-hari.",
        ],
      },
    ],
    questions: [
      {
        question:
          "Bisakah Towale dan Limboro dijelajahi dalam satu perjalanan?",
        answer:
          "Keduanya dapat menjadi bagian dari rencana perjalanan bersama warga. Pilihan paket 2 hari 1 malam tercantum di platform; durasi, rute, dan ketersediaan perlu dikonfirmasi kepada pengelola.",
      },
      {
        question: "Di mana melihat peta dan informasi akses?",
        answer:
          "Gunakan peta eksplorasi pada platform Jelajah Donggala. Konfirmasikan lokasi pertemuan, kondisi jalan, serta kebutuhan transportasi langsung kepada pendamping lokal; estimasi jarak dan waktu terverifikasi belum tersedia di portal ini.",
      },
      {
        question: "Apakah statistik desa sudah final?",
        answer:
          "Angka penduduk, keluarga, luas wilayah, dan dusun masih berupa data perencanaan dari PRD. Portal belum menyajikannya sebagai data resmi pemerintah desa yang telah divalidasi.",
      },
    ],
    actionLabel: "Buka peta eksplorasi desa",
    actionHref: "https://jelajah-donggala.vercel.app/cari",
    isExternal: true,
  },
  karya: {
    eyebrow: "LEBIH DEKAT DENGAN PEMBUATNYA",
    title: "Ada proses di balik setiap karya.",
    cards: [
      {
        title: "Mengenal sehelai tenun",
        text: "Nilai tenun tidak berhenti pada rupa. Percakapan dengan penenun membantu memahami keterampilan dan pilihan di balik kain yang Anda lihat.",
        points: [
          "Tanyakan nama motif serta penuturan maknanya menurut penenun.",
          "Kenali bahan, ukuran, waktu pengerjaan, dan kemungkinan pesanan khusus.",
          "Mintalah petunjuk perawatan yang sesuai dengan bahan kain tersebut.",
        ],
      },
      {
        title: "Mengenal cita rasa pesisir",
        text: "Keripik dan cookies sagu serta sajian ikan memperkenalkan bahan lokal melalui kreasi dapur warga.",
        points: [
          "Tanyakan komposisi, alergen, serta informasi kemasan sebelum membeli pangan.",
          "Konfirmasikan masa simpan dan cara membawa produk dalam perjalanan.",
          "Untuk sajian ikan, tanyakan pilihan tangkapan dan kesiapan penyajian hari itu.",
        ],
      },
    ],
    questions: [
      {
        question: "Bagaimana membeli atau menghubungi pembuatnya?",
        answer:
          "Tombol pada kartu mengarahkan Anda ke katalog platform Jelajah Donggala. Pilih produk dan gunakan kontak pengrajin atau pengelola yang tersedia di sana untuk bersepakat langsung.",
      },
      {
        question: "Mengapa harga tidak ditampilkan di portal ini?",
        answer:
          "Pilihan bahan, ukuran, jumlah pesanan, dan ketersediaan dapat memengaruhi penawaran. Mintalah harga terkini langsung kepada pembuat sebelum melakukan pembayaran.",
      },
      {
        question: "Apakah bisa mengikuti proses menenun atau mengolah sagu?",
        answer:
          "Platform memuat rencana aktivitas workshop menenun dan kelas olahan sagu. Kunjungan mengikuti kesiapan tuan rumah, sehingga jadwal serta bentuk kegiatan perlu disepakati terlebih dahulu.",
      },
    ],
    actionLabel: "Jelajahi katalog warga",
    actionHref: "https://jelajah-donggala.vercel.app#karya",
    isExternal: true,
  },
  budaya: {
    eyebrow: "ETIKA PERJUMPAAN",
    title: "Menghormati cerita, merawat tempatnya.",
    cards: [
      {
        title: "Belajar dari penenun Towale",
        text: "Penenun adalah sumber utama untuk mengenal pengalaman dan pengetahuan yang hidup di balik kriya Kaili.",
        points: [
          "Tanyakan apakah proses kerja dapat diamati tanpa mengganggu.",
          "Mintalah izin sebelum merekam wajah, alat, atau percakapan pribadi.",
          "Jika membagikan cerita, hormati cara narasumber ingin disebut dan dikutip.",
        ],
      },
      {
        title: "Menjadi tamu di pesisir Limboro",
        text: "Ruang yang kita datangi untuk berwisata juga menjadi tempat tinggal dan ruang kerja masyarakat.",
        points: [
          "Dengarkan arahan warga tentang area yang boleh diakses.",
          "Jaga ruang tambat perahu dan jangan memindahkan peralatan nelayan.",
          "Bawa kembali sampah dan nikmati alam tanpa mengambil biota atau merusak karang.",
        ],
      },
    ],
    questions: [
      {
        question: "Apakah semua motif tenun memiliki makna yang sama?",
        answer:
          "Portal memberi pengantar tentang Buya Bomba, tetapi tidak menggantikan penuturan penenun. Tanyakan nama serta cerita tiap motif kepada pembuatnya karena pengalaman dan penjelasannya dapat berbeda.",
      },
      {
        question: "Bolehkah mendokumentasikan aktivitas warga?",
        answer:
          "Mintalah persetujuan terlebih dahulu, termasuk untuk penggunaan foto atau video di media sosial. Hormati penolakan dan hindari menghalangi kegiatan warga demi dokumentasi.",
      },
      {
        question: "Di mana belajar cara menyapa warga?",
        answer:
          "Halaman Bahasa Kaili menyediakan kosakata awal beserta konteks penggunaannya. Untuk dialek dan pengucapan yang sesuai, belajarlah langsung kepada penutur setempat.",
      },
    ],
    actionLabel: "Belajar sapaan Bahasa Kaili",
    actionHref: "/bahasa",
    isExternal: false,
  },
  bahasa: {
    eyebrow: "DARI KATA KE PERCAKAPAN",
    title: "Gunakan sapaan pada saat yang tepat.",
    cards: [
      {
        title: "Saat bertamu dan mengenal karya",
        text: "Mulai dengan sikap terbuka, perkenalkan diri, dan dengarkan cara warga menyapa Anda.",
        points: [
          "Ndokumo: entri awal untuk sapaan halo atau apa kabar.",
          "Mabelo: entri untuk mengapresiasi sesuatu yang indah, elok, atau bagus.",
          "Tanyakan pilihan sapaan yang sopan untuk lawan bicara dan dialek setempat.",
        ],
      },
      {
        title: "Saat berbagi makanan dan berterima kasih",
        text: "Meja makan dan percakapan sederhana menjadi kesempatan untuk mendengar bahasa digunakan dalam keseharian.",
        points: [
          "Kande: entri awal yang dalam PRD digunakan untuk ajakan makan.",
          "Tarimakasi: entri untuk menyampaikan terima kasih.",
          "Mintalah contoh penggunaan langsung, bukan menganggap setiap kata selalu memiliki arti atau bentuk yang sama.",
        ],
      },
    ],
    questions: [
      {
        question: "Apakah kosakata ini berlaku untuk semua dialek Kaili?",
        answer:
          "Belum tentu. Entri awal mengikuti PRD dan memerlukan validasi penutur lokal. Bahasa Kaili memiliki ragam dialek; penggunaan dan pengucapan dapat berbeda menurut wilayah serta konteks.",
      },
      {
        question: "Apakah tersedia audio pengucapan?",
        answer:
          "Belum ada rekaman audio terverifikasi di portal ini. Untuk mempelajari pengucapan, mintalah contoh dari penutur setempat dan izin jika ingin merekamnya.",
      },
      {
        question: "Bagaimana menggunakan pencarian kamus?",
        answer:
          "Ketik kata Kaili, arti bahasa Indonesia, atau situasi pada kolom pencarian. Daftar akan disaring secara langsung; kosongkan pencarian untuk melihat seluruh kosakata awal.",
      },
    ],
    actionLabel: "Kenali etika bertamu",
    actionHref: "/budaya",
    isExternal: false,
  },
  kedaruratan: {
    eyebrow: "SIAPKAN INFORMASI PENTING",
    title: "Bantu petugas mengenali kebutuhan Anda.",
    cards: [
      {
        title: "Catatan sebelum berangkat",
        text: "Lengkapi nomor nasional di halaman ini dengan informasi lokal yang dikonfirmasi bersama pendamping.",
        points: [
          "Nama dan nomor pendamping atau pengelola kegiatan.",
          "Lokasi pertemuan, patokan yang mudah dikenali, serta waktu kembali yang disepakati.",
          "Kontak fasilitas kesehatan setempat dan arahan jalur evakuasi yang berlaku.",
        ],
      },
      {
        title: "Informasi saat menghubungi bantuan",
        text: "Sampaikan situasi dan lokasi secara jelas, lalu ikuti pertanyaan serta arahan operator.",
        points: [
          "Lokasi kejadian dan patokan terdekat yang dapat dikenali.",
          "Jenis kejadian, jumlah orang yang membutuhkan bantuan, dan kondisi yang Anda amati.",
          "Nomor yang dapat dihubungi kembali serta informasi akses menuju lokasi.",
        ],
      },
    ],
    questions: [
      {
        question: "Apakah peta platform merupakan peta evakuasi?",
        answer:
          "Bukan. Peta platform digunakan untuk eksplorasi wilayah. Peta evakuasi lokal terverifikasi belum tersedia di portal; minta pendamping menunjukkan jalur serta titik kumpul yang ditetapkan setempat.",
      },
      {
        question: "Apakah nomor Puskesmas Banawa Tengah sudah tersedia?",
        answer:
          "Belum ada nomor lokal yang telah diverifikasi untuk ditampilkan. Mintalah kontak terbaru kepada pemerintah desa atau pendamping sebelum berkunjung dan simpan secara luring bila diperlukan.",
      },
      {
        question: "Apakah nomor nasional menjamin respons di semua lokasi?",
        answer:
          "Cakupan dan kesiapan layanan mengikuti wilayah. Persiapkan kontak lokal, dan sampaikan lokasi serta situasi kepada operator agar kebutuhan bantuan dapat dipahami dengan jelas.",
      },
    ],
    actionLabel: "Kembali mengenali wilayah desa",
    actionHref: "/desa",
    isExternal: false,
  },
  kesehatan: {
    eyebrow: "PANDUAN EMPAT PARAMETER KESEHATAN",
    title: "Ambang batas normal & anjuran pola hidup sehat.",
    cards: [
      {
        title: "Tekanan Darah (Tensi)",
        text: "Tekanan darah optimal adalah di bawah 120/80 mmHg. Menjaga tensi stabil sangat penting untuk mencegah risiko stroke dan penyakit kardiovaskular pada masyarakat pesisir.",
        points: [
          "Normal: Sistolik < 120 mmHg dan Diastolik < 80 mmHg.",
          "Pra-hipertensi: Sistolik 120–129 mmHg.",
          "Hipertensi Derajat 1: Sistolik 130–139 atau Diastolik 80–89 mmHg.",
          "Anjuran: Batasi konsumsi garam, rutin jalan kaki di pantai, dan kelola stres.",
        ],
      },
      {
        title: "Glukosa (Gula Darah)",
        text: "Kadar gula darah yang terkontrol menjaga energi harian stabil dan mencegah risiko komplikasi diabetes melitus.",
        points: [
          "Gula Darah Puasa normal: 70–99 mg/dL.",
          "Gula Darah Sewaktu normal: < 140 mg/dL.",
          "Pra-diabetes puasa: 100–125 mg/dL.",
          "Anjuran: Manfaatkan pati sagu lokal berindeks glikemik rendah sebagai alternatif sehat.",
        ],
      },
      {
        title: "Kolesterol Total",
        text: "Kadar kolesterol total darah sebaiknya di bawah 200 mg/dL demi menjaga kelancaran sirkulasi pembuluh darah.",
        points: [
          "Batas aman optimal: < 200 mg/dL.",
          "Batas tinggi (borderline): 200–239 mg/dL.",
          "Tinggi (berisiko): ≥ 240 mg/dL.",
          "Anjuran: Konsumsi ikan laut segar tanpa digoreng berlebih (bakar/sup asam) dan hindari lemak jenuh.",
        ],
      },
      {
        title: "Asam Urat (Uric Acid)",
        text: "Kadar asam urat yang normal mencegah penumpukan kristal pada persendian yang memicu nyeri sendi akut.",
        points: [
          "Pria normal: 3,5 – 7,2 mg/dL.",
          "Wanita normal: 2,6 – 6,0 mg/dL.",
          "Tinggi (hiperurisemia): > 7,0 mg/dL.",
          "Anjuran: Cukupi minum air putih, batasi jeroan/emping, dan perbanyak sayur daun kelor segar.",
        ],
      },
    ],
    questions: [
      {
        question: "Di mana warga dan pengunjung dapat mengecek tensi dan gula darah di desa?",
        answer:
          "Pemeriksaan tensi dan tes darah sederhana dapat dilakukan di Posyandu/Posbindu berkala di balai desa Towale dan Limboro, atau di Puskesmas Banawa Tengah.",
      },
      {
        question: "Apakah makanan khas Donggala aman bagi penderita kolesterol?",
        answer:
          "Sangat aman bila memilih olahan ikan bakar rempah segar, sup kaledo tanpa lemak berlebih, sayur kelor bening, serta olahan sagu alami yang bebas kolesterol.",
      },
    ],
    actionLabel: "Lihat Kontak Puskesmas & Darurat",
    actionHref: "/kedaruratan",
    isExternal: false,
  },
  mangrove: {
    eyebrow: "EKOLOGI PESISIR BANAWA TENGAH",
    title: "Fungsi strategis ekosistem mangrove Donggala.",
    cards: [
      {
        title: "Peredam Gelombang & Mitigasi Abrasi",
        text: "Sistem perakaran tunjang pohon bakau (Rhizophora) terbukti meredam energi ombak besar dan mengurangi laju abrasi pesisir Selat Makassar hingga 60%.",
        points: [
          "Melindungi pemukiman warga pesisir dari hempasan gelombang badai.",
          "Menstabilkan garis pantai dan mencegah hanyutnya pasir pantai alami.",
          "Meredam risiko kenaikan permukaan air laut di muara sungai.",
        ],
      },
      {
        title: "Nursery Ground Biota Laut Pesisir",
        text: "Rindang mangrove menjadi tempat pemijahan dan perlindungan anak ikan karang, udang, dan kepiting bakau sebelum berenang ke laut lepas.",
        points: [
          "Menjaga ketersediaan tangkapan ikan harian nelayan Limboro dan Towale.",
          "Habitat utama kepiting bakau berkualitas unggul.",
          "Menyaring sedimen lumpur dari darat agar air terumbu karang tetap jernih.",
        ],
      },
      {
        title: "Penyerapan Karbon Biru (Blue Carbon)",
        text: "Hutan mangrove memiliki kapasitas menyerap dan mengunci karbon 3 hingga 5 kali lebih tinggi dibandingkan hutan hujan daratan.",
        points: [
          "Mendukung pelestarian iklim dan perlindungan keanekaragaman hayati pesisir.",
          "Menjadi kawasan laboratorium riset biologi dan ekologi bagi pelajar/mahasiswa.",
          "Potensi pengembangan jalur ekowisata berbasis komunitas yang berkelanjutan.",
        ],
      },
    ],
    questions: [
      {
        question: "Apakah ada program penanaman mangrove di Towale dan Limboro?",
        answer:
          "Ya, kelompok pemuda dan Pokdarwis bersama tim KKN-PPM UGM secara rutin melakukan pembibitan dan aksi tanam bakau di titik pesisir rawan abrasi.",
      },
      {
        question: "Bagaimana cara wisatawan berpartisipasi dalam konservasi?",
        answer:
          "Wisatawan dapat ikut serta dalam aksi adopsi bibit mangrove atau mengikuti tur edukasi susur pesisir bersama pengelola Pokdarwis.",
      },
    ],
    actionLabel: "Eksplorasi Peta Mangrove di Platform",
    actionHref: "https://jelajah-donggala.vercel.app/cari",
    isExternal: true,
  },
} as const;
export const DETAIL_UI = {
  questions: "PERTANYAAN UMUM",
  questionsTitle: "Hal yang perlu Anda ketahui.",
} as const;
