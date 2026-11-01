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
    "Dari benang sutra ke birunya samudra. Temukan pusaka tenun Kaili, sumur laut alami Pusentasi, bentang teluk bahari, dan cerita yang hidup bersama warga.",
  heroImage: "/images/hero_limboro_coastal.png",
  heroAlt: "Panorama pesisir teluk berpasir putih melengkung di Desa Limboro",
  heroCaption: "PANORAMA PESISIR LIMBORO",
  heroNote: "Dua desa. Beragam cerita. Satu perjalanan.",
  scroll: "GULIR UNTUK MENGENAL",
  aboutTitle: "Dua desa pesisir,",
  aboutAccent: "satu denyut kearifan.",
  aboutText:
    "Di tepian Selat Makassar, Towale dan Limboro menyimpan cara hidup yang dekat dengan alam. Dari sumur raksasa alami Pusentasi, tangan tekun penenun Buya Sabe, hingga ketahanan pangan sagu di dapur-dapur warga.",
  aboutTextSecond:
    "Singgahlah lebih lama. Kenali Towale lewat kriya tenun dan geowisata Pusentasi, lalu ikuti garis pesisir menuju pasir putih Pantai Kaluku dan tradisi bahari Limboro yang hangat.",
  aboutCaption: "KERAMAHAN WARGA & HOMESTAY PESISIR TOWALE",
  aboutImage: "/images/destinasi/homestay-pesisir-towale.jpg",
  statsNote:
    "Profil Desa Wisata Pusat Laut Towale & Limboro · data terverifikasi Proposal ADWI 2023 & KKN-PPM UGM.",
  villagesEyebrow: "DUA WAJAH DONGGALA",
  villagesTitle: "Berbeda pesona, bertaut cerita.",
  productsEyebrow: "DARI TANGAN WARGA",
  productsTitle: "Rasa, rupa, dan warisan.",
  productsCta: "Jelajahi Kriya & Kuliner",
  productsText:
    "Bawa pulang cerita dalam sehelai tenun sutra dan cita rasa kuliner khas Kaili dari hasil bumi sendiri.",
  productCta: "Detail & hubungi pengrajin",
  productNote:
    "Katalog kriya & kuliner Desa Wisata. Ketersediaan dan harga dikonfirmasi bersama pengrajin dan Pokdarwis.",
  tripsEyebrow: "PERJALANAN YANG BERMAKNA",
  tripsTitle: "Datang sebagai tamu. Pulang membawa cerita.",
  tripCta: "Cek jadwal & kuota keberangkatan",
  tripNote:
    "Setiap perjalanan mengikuti kesiapan warga, cuaca bahari, dan konfirmasi pengelola lokal Pokdarwis.",
  cultureEyebrow: "BUDAYA & KONSERVASI",
  cultureTitle: "Yang diwariskan, yang kita jaga.",
  languageEyebrow: "SEJENAK BELAJAR BAHASA KAILI",
  languageTitle: "Sapa warga dengan bahasanya.",
  languageText:
    "Perjalanan yang hangat dimulai dari sapaan sederhana. Penggunaan kata dapat berbeda menurut dialek; belajarlah langsung bersama warga.",
  emergencyEyebrow: "JELAJAH DENGAN BIJAK",
  emergencyTitle: "Selamat berangkat, selamat kembali.",
  emergencyText:
    "Patuhi pemandu saat berenang di sumur Pusat Laut dan perhatikan pasang surut Selat Makassar. Kenali titik kumpul dan rute evakuasi sebelum beraktivitas.",
  emergencyLocal:
    "Kontak Pokdarwis Towale (@pokdarwis_towale), Pos Pengamanan Pantai, dan Puskesmas Banawa Tengah siap mendampingi kunjungan Anda.",
  emergencyAdvice:
    "Jika merasakan guncangan kuat atau lama di pesisir, segera evakuasi mandiri ke arah perbukitan melalui jalur aman dan ikuti arahan petugas.",
  mapEyebrow: "SATU PINTU EKSPLORASI",
  mapTitle: "Mulai dari rasa ingin tahu.",
  mapText:
    "Temukan desa, destinasi, dan aktivitas warga melalui peta pada platform Jelajah Donggala.",
  mapCta: "Buka peta interaktif lengkap",
  footerText:
    "Ruang perjumpaan dengan alam, budaya, dan warga Towale & Limboro. Jelajahi dengan rasa hormat, tinggalkan jejak yang baik.",
  footerNav: "JELAJAH",
  footerContact: "BERSAMA WARGA",
  footerPartners: "KKN-PPM UGM · Pemerintah Desa & Pokdarwis Towale & Limboro",
  footerAddress: "Banawa Tengah, Donggala\nSulawesi Tengah, Indonesia",
  copyright: "© 2026 Jelajah Donggala. Merawat cerita, menjaga pesisir.",
  skip: "Langsung ke konten",
  openMenu: "Buka menu",
  closeMenu: "Tutup menu",
  navigation: "Navigasi utama",
  loading: "Memuat cerita Donggala…",
} as const;
export const MARQUEE_ITEMS = [
  "GEOWISATA PUSENTASI (PUSAT LAUT)",
  "TENUN SUTRA BUYA SABE",
  "PANORAMA PANTAI BONEBULA",
  "WISATA BAHARI & HIU PAUS",
  "PANTAI KALUKU LIMBORO",
  "KETAHANAN PANGAN SAGU",
  "KKN-PPM UGM",
] as const;
export const VILLAGE_STATS = [
  { value: "2.034+", label: "Jiwa warga Towale" },
  { value: "5,33 km²", label: "Luas wilayah Towale" },
  { value: "48 km", label: "Dari Kota Palu" },
  { value: "20+", label: "Pengelola Pokdarwis & BUMDes" },
] as const;
export const VILLAGES = [
  {
    name: "Towale",
    number: "01",
    tag: "SIMPUL WARISAN KAILI & GEOWISATA",
    image: "/images/destinasi/pusat-laut-pusentasi.jpg",
    alt: "Geowisata Pusentasi (Pusat Laut) sumur alami air asin toska di Desa Towale",
    description:
      "Desa wisata bahari dengan fenomena sumur raksasa alami Pusentasi, tradisi sakral pusaka Bulava Mpongeo, dan sentra kriya tenun sutra Buya Sabe.",
    highlights: ["Pusentasi (Pusat Laut)", "Tenun Buya Sabe", "Pantai Bonebula", "Hiu Paus & Karampuana"],
    cta: "Eksplorasi Towale",
    href: "/desa/towale",
  },
  {
    name: "Limboro",
    number: "02",
    tag: "RITME KEHIDUPAN BAHARI & SAGU",
    image: "/images/destinasi/pantai-kaluku-limboro.jpg",
    alt: "Bentang Pantai Kaluku Limboro dengan pasir putih dan deretan pohon kelapa",
    description:
      "Menyusuri garis pantai pasir putih Kaluku, terumbu karang dangkal, serta geliat dapur warga pengolah sagu dan tradisi nelayan pesisir.",
    highlights: ["Pantai Kaluku", "Sentra Olahan Sagu", "Snorkeling Karang", "Tradisi Nelayan"],
    cta: "Eksplorasi Limboro",
    href: "/desa/limboro",
  },
] as const;
export const PRODUCTS = [
  {
    name: "Kain Tenun Buya Sabe & Bomba",
    maker: "Penenun Tradisional · Towale",
    price: "Rp450.000",
    tag: "KRIYA",
    motif: "pink",
    description:
      "Tenun sutra pusaka Kaili dengan ragam motif flora geometris yang ditenun menggunakan alat tenun tradisional gedongan.",
  },
  {
    name: "Kue Bagea & Keripik Pisang",
    maker: "Kelompok Usaha Rumahan · Towale",
    price: "Rp25.000",
    tag: "OLEH-OLEH",
    motif: "kuning",
    description:
      "Kue kering bagea berbahan pati sagu dan kacang serta keripik pisang renyah oleh-oleh khas UMKM Towale.",
  },
  {
    name: "Kaledo & Dange Tabaro",
    maker: "Dapur Tradisional · Towale & Banawa",
    price: "Khas Kaili",
    tag: "KULINER",
    motif: "biru",
    description:
      "Sup kaki lembu kuah asam-pedas segar berpadu ubi rebus serta olahan sagu bakar Dange Tabaro di wajan tanah liat.",
  },
  {
    name: "Kerajinan Kayu Hitam & Batok",
    maker: "Pengrajin Kriya · Towale",
    price: "Karya Warga",
    tag: "KRIYA LOKAL",
    motif: "putih",
    description:
      "Jam dinding ukir kayu hitam berbentuk Pulau Sulawesi dan aneka kerajinan artistik tempurung kelapa.",
  },
] as const;
export const TRIPS = [
  {
    number: "01",
    title: "Eksplorasi Pusentasi & Homestay Pesisir",
    duration: "2 HARI · 1 MALAM",
    description:
      "Menginap di cottage kayu tepi pantai Towale, merasakan segarnya sumur laut Pusentasi, dan belajar menenun Buya Sabe bersama warga.",
    image: "/images/destinasi/homestay-cottage-depan.jpg",
  },
  {
    number: "02",
    title: "Wisata Bahari Hiu Paus & Karampuana",
    duration: "WISATA BAHARI",
    description:
      "Menyusuri pulau karang Karampuana dan atol, mengamati megafauna hiu paus Donggala, serta snorkeling terumbu karang Pantai Kaluku.",
    image: "/images/destinasi/hiu-paus-donggala.jpg",
  },
  {
    number: "03",
    title: "Tur Sepeda Ontel & Kelas Olahan Sagu",
    duration: "JELAJAH DESA",
    description:
      "Bersepeda ontel klasik menyusuri jalan pesisir, mengunjungi Masjid Tertua Towale, dan belajar membuat Dange Tabaro bersama warga.",
    image: "/images/destinasi/sepeda-ontel-towale.jpg",
  },
] as const;
export const CULTURE_STORIES = [
  {
    tag: "01 / WARISAN TOWALE",
    title: "Pusaka Bulava Mpongeo & Sehelai Tenun Buya Sabe.",
    description:
      "Di Desa Wisata Towale, peninggalan Raja Kaili berupa pusaka 'Bulava Mpongeo' (Emas Mengeong) dirawat melalui tradisi ritual adat tahunan Modiu Bulava Mpongeo. Bersanding dengan ketekunan para perempuan menenun Buya Sabe di alat tenun gedongan, merawat ingatan leluhur lintas generasi.",
    motif: "pink",
  },
  {
    tag: "02 / KEARIFAN BAHARI",
    title: "Keajaiban Pusat Laut & Harmoni Samudra.",
    description:
      "Pusentasi membuktikan hubungan magis daratan karst dengan perairan Selat Makassar. Menjaga teluk berarti menghormati habitat Hiu Paus, merawat terumbu karang Karampuana, dan menjaga ruang penghidupan para nelayan tradisional.",
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
      "Kenali karakter Desa Wisata Towale dan Limboro: geowisata sumur raksasa alami Pusentasi, warisan kriya tenun Buya Sabe, dan ketahanan pangan pesisir.",
    image: "/images/destinasi/pantai-bonebula-aerial.jpg",
    imageAlt: "Pemandangan udara semenanjung pesisir dan Pantai Bonebula Desa Towale",
    introTitle: "Satu koridor, pengalaman yang saling melengkapi.",
    paragraphs: [
      "Desa Wisata Towale berjarak sekitar 48 km dari Kota Palu (sekitar 60 menit via darat). Terletak pada ketinggian 7 mdpl dengan topografi 75% dataran dan 25% perbukitan pesisir, Towale memiliki daya tarik kelas dunia seperti geowisata Pusentasi (sumur air laut alami sedalam 7 meter), Pantai Bonebula, pulau karang Karampuana, hingga spot interaksi megafauna Hiu Paus.",
      "Limboro melengkapi perjalanan dengan lengkung pantai pasir putih Kaluku, spot snorkeling terumbu karang dangkal yang terjaga, serta sentra ketahanan pangan olahan sagu (dange, keripik sagu, cookies sagu) yang diolah mandiri oleh kelompok perempuan warga.",
    ],
    guide: [
      {
        title: "Akses dan Rute Perjalanan",
        text: "Dari Bandara SIS Al-Jufri Palu, tempuh perjalanan darat 60 menit menuju Towale. Menuju situs Pusat Laut dapat menggunakan speed boat 5 menit, taksi wisata 30 menit, atau jalur darat lokal 15 menit.",
      },
      {
        title: "Akomodasi Homestay Ramah",
        text: "Towale menyediakan homestay cottage kayu A-frame di tepi pantai dengan fasilitas kamar tidur ber-AC, pemandangan sunset dan sunrise, kolam renang pesisir, serta sarapan kuliner lokal.",
      },
      {
        title: "Gunakan Peta Eksplorasi",
        text: "Buka platform Jelajah Donggala untuk menemukan titik destinasi, jadwal pasang surut air laut di Pusentasi, serta kontak pengelola Pokdarwis.",
      },
    ],
  },
  karya: {
    path: "/kriya-kuliner",
    label: "Kriya & Kuliner",
    eyebrow: "KARYA TANGAN · HASIL BUMI · CITA RASA",
    title: "Kenali asalnya, hargai prosesnya.",
    description:
      "Dari kilau benang sutra Tenun Buya Sabe hingga gurihnya Sup Kaledo dan Dange Tabaro hangat di tungku tanah liat.",
    image: "/images/destinasi/tenun-buya-sabe-proses.jpg",
    imageAlt: "Pengrajin wanita sedang menenun kain Tenun Buya Sabe khas Donggala",
    introTitle: "Karya tangan dan cita rasa autentik pesisir Donggala.",
    paragraphs: [
      "Kain Tenun Buya Sabe dan Buya Bomba berbahan sutra merupakan cinderamata unggulan Desa Wisata Towale. Wisatawan dapat berkunjung langsung ke rumah penenun untuk mengamati proses merajut motif bunga khas Kaili menggunakan alat tenun bukan mesin (gedongan).",
      "Di sektor kuliner, nikmati Kaledo (Kaki Lembu Donggala) berupa sup tulang kaki lembu berkuah asam-pedas segar yang disantap bersama ubi kayu rebus. Rasakan pula Dange Tabaro (olahan sagu bakar ikan dalam wajan belanga tanah liat), kue kering Bagea, dan keripik pisang olahan UMKM Towale.",
    ],
    guide: [
      {
        title: "Edukasi Belajar Menenun",
        text: "Wisatawan dapat meminta izin untuk ikut mencoba alat tenun tradisional dan mendengar langsung filosofi motif kain dari penenun lokal.",
      },
      {
        title: "Oleh-Oleh Khas Rumahan",
        text: "Dukung perekonomian warga dengan membeli kain tenun sutra, kerajinan jam kayu ukir Pulau Sulawesi, kerajinan batok kelapa, serta camilan kue bagea.",
      },
      {
        title: "Cicipi Kuliner Hangat",
        text: "Nikmati Kaledo dan Dange Tabaro saat baru diangkat dari tungku tanah liat di warung pesisir untuk rasa terbaik.",
      },
    ],
  },
  budaya: {
    path: "/budaya",
    label: "Budaya",
    eyebrow: "WARISAN KAILI & KEPEDULIAN PADA ALAM",
    title: "Budaya hidup dalam keseharian warga.",
    description:
      "Dari sakralnya pusaka Bulava Mpongeo dan Masjid Tertua Towale, hingga tradisi menenun sutra yang dirawat dari masa ke masa.",
    image: "/images/destinasi/bulava-mpongeo-kaili.jpg",
    imageAlt: "Pusaka Raja Kaili Bulava Mpongeo di atas sesaji adat ritual Modiu Bulava Mpongeo",
    introTitle: "Jejak sejarah raja Kaili dan kearifan religi pesisir.",
    paragraphs: [
      "Desa Towale menyimpan pusaka bersejarah peninggalan Raja Kaili yaitu 'Bulava Mpongeo' (Emas Mengeong). Setiap tahun, masyarakat menggelar ritual sakral tahunan 'Modiu Bulava Mpongeo' berupa upacara penyucian pusaka dan doa syukur kemakmuran bersama.",
      "Towale juga menjadi saksi sejarah syiar Islam melalui berdirinya Masjid Tertua dengan gaya arsitektur tumpang khas Nusantara. Dipadukan dengan seni tari adat penyambutan Baju Nggembe dan keramahan warga yang tulus saat menyambut tamu.",
    ],
    guide: [
      {
        title: "Hormati Tempat & Benda Sakral",
        text: "Saat mengunjungi situs pusaka atau Masjid Tertua, kenakan pakaian sopan dan dengarkan arahan tokoh adat atau pengelola Pokdarwis.",
      },
      {
        title: "Minta Izin Dokumentasi",
        text: "Tanyakan izin terlebih dahulu sebelum mendokumentasikan prosesi ritual adat atau memotret warga saat beraktivitas.",
      },
      {
        title: "Jaga Kebersihan Lingkungan",
        text: "Bawa kembali sampah Anda dan jaga keasrian tempat bersejarah serta kawasan pesisir pantai.",
      },
    ],
  },
  bahasa: {
    path: "/bahasa",
    label: "Bahasa Kaili",
    eyebrow: "KAMUS SAPAAN · BELAJAR BERSAMA WARGA",
    title: "Mulai dengan satu sapaan hangat.",
    description:
      "Buka perjumpaan dengan sapaan bahasa Kaili. Kenali dialek lokal dan rasakan sambutan hangat warga pesisir.",
    image: "/images/destinasi/homestay-pesisir-towale.jpg",
    imageAlt: "Keramahan warga Towale menyambut wisatawan dengan busana adat khas Kaili",
    introTitle: "Bahasa sebagai pintu silaturahmi.",
    paragraphs: [
      "Masyarakat Banawa Tengah menyapa setiap tamu dengan kehangatan. Mengenal sapaan sederhana seperti 'Ndokumo' (Halo/Apa kabar) dan 'Tarimakasi' (Terima kasih) menjadi jembatan awal yang menghubungkan hati pengunjung dengan warga.",
      "Masyarakat Kaili memiliki beragam dialek (seperti Tara, Rai, Ledo, Da'a). Gunakan kamus ringkas ini sebagai panduan bertamu, menikmati sajian warga ('Kande'), dan mengagumi keindahan tenun serta alam ('Mabelo').",
    ],
    guide: [
      {
        title: "Dengarkan Penutur Asli",
        text: "Mintalah warga mencontohkan intonasi dan pengucapan kata sesuai dialek yang mereka gunakan sehari-hari.",
      },
      {
        title: "Gunakan dengan Rendah Hati",
        text: "Warga akan sangat mengapresiasi wisatawan yang berusaha menyapa dalam bahasa daerah mereka.",
      },
      {
        title: "Sapaan Santun Bertamu",
        text: "Gunakan kata sapaan yang pantas terutama saat berbincang dengan tetua desa atau penenun senior.",
      },
    ],
  },
  kedaruratan: {
    path: "/kedaruratan",
    label: "Kedaruratan",
    eyebrow: "KESELAMATAN PESISIR · KONTAK PENTING",
    title: "Kenali mitigasi dan bantuan sebelum beraktivitas.",
    description:
      "Informasi keselamatan berenang di Pusat Laut, jalur evakuasi gempa pesisir, dan kontak pengelola darurat.",
    image: "/images/destinasi/chse-sanitasi-kesehatan.jpg",
    imageAlt: "Fasilitas sanitasi CHSE, pos keamanan wisata, dan jalur evakuasi",
    introTitle: "Kesiapsiagaan wisata bahari yang aman dan nyaman.",
    paragraphs: [
      "Aktivitas cliff jumping dan berenang di Pusat Laut (Pusentasi) wajib mematuhi arahan pengelola Pokdarwis Towale. Gunakan tangga pengaman yang disediakan dan hindari berenang saat air surut ekstrem atau ombak laut lepas sedang tinggi.",
      "Topografi Towale terdiri dari 75% dataran dan 25% perbukitan dengan ketinggian 7 mdpl. Jika merasakan guncangan gempa bumi kuat di pesisir, segera lakukan evakuasi mandiri menuju perbukitan atau tempat yang lebih tinggi melalui jalur evakuasi desa.",
    ],
    guide: [
      {
        title: "Patuhi Petugas Wisata & Pokdarwis",
        text: "Di objek wisata disiapkan petugas keamanan dan petugas kesehatan untuk mendampingi pengunjung.",
      },
      {
        title: "Simpan Kontak Darurat",
        text: "Hubungi Pokdarwis Towale (@pokdarwis_towale), Pos Keamanan Pantai, atau layanan darurat nasional 112/115/119 bila terjadi insiden.",
      },
      {
        title: "Kenali Rute Evakuasi",
        text: "Ketahui jalan akses menuju dataran perbukitan di belakang garis pantai sebelum memulai aktivitas bahari.",
      },
    ],
  },
  kesehatan: {
    path: "/kesehatan",
    label: "Kesehatan",
    eyebrow: "STANDAR CHSE & EDUKASI KESEHATAN DESA",
    title: "Penerapan CHSE dan gaya hidup sehat pesisir.",
    description:
      "Fasilitas sanitasi bersih berstandar CHSE di objek wisata, skrining kesehatan posyandu, dan kebaikan pangan alami.",
    image: "/images/destinasi/chse-sanitasi-kesehatan.jpg",
    imageAlt: "Penerapan fasilitas kebersihan CHSE dan wastafel cuci tangan di desa wisata",
    introTitle: "Kebiasaan sehat baru dan kearifan pangan alami.",
    paragraphs: [
      "Desa Wisata Towale menerapkan standar CHSE (Cleanliness, Health, Safety, Environment Sustainability) dengan menyediakan fasilitas wastafel cuci tangan, sabun, dan hand sanitizer di area wisata, serta memastikan toilet di setiap homestay terjamin kebersihannya.",
      "Warga dan pengunjung didorong memantau indikator kesehatan utama di posyandu desa (tekanan darah, gula darah, kolesterol, asam urat). Pola konsumsi lokal berbasis pati sagu bebas gluten, ikan laut segar bakar, dan sayur kelor menjadi fondasi ketahanan kesehatan alami.",
    ],
    guide: [
      {
        title: "Gunakan Sarana Cuci Tangan",
        text: "Manfaatkan wastafel berstandar yang tersedia di titik-titik kunjungan wisata sebelum dan sesudah beraktivitas.",
      },
      {
        title: "Kebersihan Homestay Terjamin",
        text: "Setiap homestay mitra desa wisata telah terstandarisasi sanitasi kamar mandi dan kebersihan ruang istirahat.",
      },
      {
        title: "Pangan Segar Bergizi",
        text: "Cukupi hidrasi air kelapa muda dan nikmati menu ikan segar tanpa minyak berlebih untuk menjaga kebugaran tubuh.",
      },
    ],
  },
  mangrove: {
    path: "/mangrove",
    label: "Informasi Mangrove",
    eyebrow: "KONSERVASI PESISIR · SABUK HIJAU SELAT MAKASSAR",
    title: "Menjaga benteng hijau di batas samudra.",
    description:
      "Peran vital ekosistem sabuk hijau pesisir sebagai peredam abrasi Selat Makassar dan habitat pemijahan biota bahari.",
    image: "/images/destinasi/pantai-kaluku-limboro.jpg",
    imageAlt: "Garis pantai dan ekosistem pesisir alami di Banawa Tengah",
    introTitle: "Akar penahan gelombang, penyangga kehidupan nelayan.",
    paragraphs: [
      "Ekosistem pesisir di Banawa Tengah menjadi pelindung alami pertama pemukiman warga dari hempasan gelombang ombak Selat Makassar. Sabuk vegetasi pesisir dan rumpun mangrove menstabilkan garis pantai serta mencegah abrasi pantai berpasir putih.",
      "Kawasan ini juga berfungsi sebagai nursery ground (tempat pemijahan alami) bagi kepiting bakau, udang, dan ribuan benih ikan karang yang menjadi tumpuan nafkah nelayan Towale dan Limboro, sekaligus penyerap karbon biru (blue carbon).",
    ],
    guide: [
      {
        title: "Jaga Kebersihan Pesisir",
        text: "Hindari membuang sampah plastik ke perairan laut dan muara pasang surut yang menjadi habitat biota.",
      },
      {
        title: "Dukung Aksi Konservasi",
        text: "Ikuti kegiatan adopsi bibit mangrove dan aksi bersih pantai yang digagas pemuda Pokdarwis bersama tim KKN-PPM UGM.",
      },
      {
        title: "Ekowisata Berkelanjutan",
        text: "Nikmati keindahan pesisir dengan perahu tradisional tanpa menginjak terumbu karang atau merusak perakaran bakau.",
      },
    ],
  },
} as const;
export type TopicKey = keyof typeof TOPIC_PAGES;

export const HERO_SLIDES = [
  {
    image: "/images/hero_limboro_coastal.png",
    alt: "Panorama pesisir teluk berpasir putih melengkung di Desa Limboro",
    caption: "PESISIR PANTAI LIMBORO",
  },
  {
    image: "/images/wisata_towale.jpg",
    alt: "Pemandangan keindahan alam dan pesona destinasi wisata di Desa Towale",
    caption: "PESONA WISATA TOWALE",
  },
  {
    image: "/images/wisata_limboro.jpeg",
    alt: "Bentang alam pantai dan panorama bahari di Desa Limboro",
    caption: "PESONA WISATA LIMBORO",
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
        title: "Towale: geowisata bahari dan kriya Kaili",
        text: "Pusat geowisata bahari dengan fenomena alam langka, peninggalan sejarah kerajaan, dan tradisi tenun sutra.",
        points: [
          "Pusentasi (Pusat Laut): sumur raksasa karst sedalam 7 meter terhubung langsung ke laut, spot favorit cliff jumping.",
          "Kain Tenun Buya Sabe: amati penenun merajut motif bunga khas Kaili pada alat tenun tradisional di rumah warga.",
          "Pantai Bonebula & Karampuana: bentang pasir putih melengkung, pulau karang karst atol, dan spot melihat Hiu Paus.",
          "Bulava Mpongeo & Masjid Tertua: situs pusaka bersejarah peninggalan Raja Kaili dan syiar Islam awal di Donggala.",
        ],
      },
      {
        title: "Limboro: lanskap bahari dan ketahanan pangan",
        text: "Lengkung pesisir Pantai Kaluku dan geliat dapur pengolahan sagu memperlihatkan harmoni warga dengan hasil bumi.",
        points: [
          "Pantai Kaluku: bentang pasir putih landai dengan terumbu karang dangkal yang terjaga untuk snorkeling.",
          "Sentra Olahan Sagu: sentra produksi pangan sagu (dange, cookies sagu, keripik sagu) oleh KWT Sejahtera Limboro.",
          "Tradisi Nelayan Pesisir: aktivitas melaut nelayan tradisional dengan perahu bercadik dan sajian ikan bakar segar harian.",
        ],
      },
    ],
    questions: [
      {
        question:
          "Bagaimana rute perjalanan dari Bandara Palu ke Desa Wisata Towale?",
        answer:
          "Dari Bandara SIS Al-Jufri Palu, tempuh perjalanan darat sekitar 48 km (kurang lebih 60 menit) via jalur darat dengan akses jalan sangat baik. Menuju situs Pusat Laut dapat menggunakan speed boat (5 menit), taksi wisata (30 menit), atau jalur darat lokal (15 menit).",
      },
      {
        question: "Fasilitas apa saja yang disediakan di Homestay Desa Wisata Towale?",
        answer:
          "Tersedia homestay cottage kayu A-frame menghadap langsung ke pantai dengan fasilitas kamar tidur ber-AC, pemandangan sunset dan sunrise, kolam renang pesisir, toilet bersih terstandarisasi CHSE, serta sarapan menu tradisional khas Kaili.",
      },
      {
        question: "Berapa luas wilayah dan jumlah penduduk Desa Towale?",
        answer:
          "Berdasarkan data Proposal Desa Wisata Towale, desa ini memiliki luas wilayah 5,33 km² dengan jumlah penduduk 2.034 jiwa, berada pada ketinggian 7 mdpl (75% dataran dan 25% perbukitan), serta dikelola oleh Pokdarwis (15 pengurus) dan BUMDes Unit Pariwisata (5 pengurus).",
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
        title: "Kriya Tenun Sutra Buya Sabe",
        text: "Kain tenun sutra Donggala dibuat secara manual oleh pengrajin perempuan Towale menggunakan alat tenun gedongan.",
        points: [
          "Kenali motif pusaka Kaili seperti Buya Bomba, motif bunga, dan ornamen tradisional warisan leluhur.",
          "Wisatawan dapat mengikuti sesi belajar menenun langsung bersama para penenun berpengalaman.",
          "Beli kain tenun asli langsung dari penenun sebagai cinderamata bernilai budaya tinggi.",
        ],
      },
      {
        title: "Cita Rasa Kuliner Pesisir & Oleh-Oleh",
        text: "Kekayaan kuliner tradisional khas Donggala berakar dari hasil laut segar, rempah pesisir, dan olahan sagu lokal.",
        points: [
          "Kaledo (Kaki Lembu Donggala): sup kaki sapi berkuah asam-pedas segar yang nikmat disajikan bersama ubi kayu rebus.",
          "Dange Tabaro: olahan sagu bakar gurih berpadu ikan atau kelapa yang dimasak dalam cetakan wajan belanga tanah liat.",
          "Oleh-Oleh Khas UMKM: kue kering Bagea sagu kacang, keripik pisang renyah, kue baurasa, balurengga, dan somo.",
          "Kerajinan Kayu & Batok: jam dinding ukir kayu hitam berbentuk peta Pulau Sulawesi dan kerajinan tempurung kelapa.",
        ],
      },
    ],
    questions: [
      {
        question: "Bagaimana cara membeli produk tenun dan kuliner lokal?",
        answer:
          "Wisatawan dapat membeli langsung di sentra pengrajin Towale atau melalui katalog platform Jelajah Donggala. Pengelola Pokdarwis Towale siap membantu menghubungkan pengunjung dengan pengrajin lokal.",
      },
      {
        question: "Apakah wisatawan bisa mengikuti kelas membuat Dange atau olahan sagu?",
        answer:
          "Bisa. Pokdarwis dan kelompok usaha ibu-ibu desa menyediakan paket edukasi kuliner lokal, di mana wisatawan diajak praktik mencetak dan memanggang Dange Tabaro di wajan tanah liat tradisional.",
      },
      {
        question: "Apa saja produk oleh-oleh tahan lama yang cocok untuk dibawa bepergian?",
        answer:
          "Kain Tenun Buya Sabe, kue kering Bagea, keripik pisang UMKM, kerajinan jam dinding kayu hitam, serta hiasan dinding biota laut merupakan suvenir yang awet dan praktis dibawa bepergian jauh.",
      },
    ],
    actionLabel: "Jelajahi katalog warga",
    actionHref: "https://jelajah-donggala.vercel.app#karya",
    isExternal: true,
  },
  budaya: {
    eyebrow: "WARISAN SEJARAH & TRADISI KAILI",
    title: "Menghormati cerita, merawat tempatnya.",
    cards: [
      {
        title: "Pusaka Bulava Mpongeo & Ritual Pembersihan",
        text: "Peninggalan Raja Kaili yang disucikan setiap tahun melalui ritual sakral Modiu Bulava Mpongeo.",
        points: [
          "Bulava Mpongeo (Emas Mengeong): arca pusaka berkepala ganda berlapis emas lambang keagungan raja masa lampau.",
          "Tradisi Modiu Bulava Mpongeo: ritual adat tahunan pencucian pusaka yang dihadiri pemangku adat dan warga desa.",
          "Sajian Adat Biji-Bijian: ritual dilengkapi wadah persembahan berondong padi dan beras warna-warni perlambang kemakmuran.",
        ],
      },
      {
        title: "Masjid Tertua & Seni Pertunjukan Tradisional",
        text: "Warisan syiar Islam bersejarah berpadu dengan keindahan seni tari penyambutan khas Kaili.",
        points: [
          "Masjid Tertua Towale: bangunan bersejarah dengan arsitektur atap tumpang Nusantara yang masih tegak berdiri kokoh.",
          "Tari Adat Baju Nggembe: tari penyambutan tamu terhormat oleh penari perempuan berbusana adat Kaili warna-warni cerah.",
          "Etika Bertamu: berpakaian sopan, menghargai waktu ibadah warga, dan meminta izin sebelum mendokumentasikan upacara adat.",
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

export const VILLAGE_DETAILS = {
  towale: {
    slug: "towale",
    name: "Desa Wisata Towale",
    title: "Sentra Tenun Buya Sabe & Geowisata Purba Pusat Laut",
    eyebrow: "DESA WISATA BANAWA TENGAH · DONGGALA",
    tagline: "Pesona karst purba, kilau sutra Kaili, dan keramahan pesisir.",
    description:
      "Desa Wisata Towale berjarak 48 km dari Kota Palu (60 menit berkendara). Menjadi simpul budaya kriya tenun Buya Sabe, situs sakral peninggalan Raja Kaili Bulava Mpongeo, dan geowisata laut karst alami Pusentasi.",
    image: "/images/destinasi/pusat-laut-pusentasi.jpg",
    imageAlt: "Geowisata Pusentasi (Pusat Laut) di Desa Towale",
    stats: [
      { value: "2.034+", label: "Jiwa Warga Towale" },
      { value: "5,33 km²", label: "Luas Wilayah" },
      { value: "48 km", label: "Dari Kota Palu (60 mnt)" },
      { value: "7 mdpl", label: "Elevasi Dataran Pesisir" },
    ],
    attractions: [
      {
        title: "Pusentasi (Pusat Laut)",
        category: "GEOWISATA",
        description:
          "Sumur karst alami sedalam 7 meter dengan air asin toska jernih yang terhubung ke laut bebas. Spot favorit berenang dan cliff jumping.",
        image: "/images/destinasi/pusat-laut-pusentasi.jpg",
      },
      {
        title: "Sentra Tenun Buya Sabe",
        category: "KRIYA PUSAKA",
        description:
          "Warisan tenun ikat sutra pusaka Kaili yang ditenun secara tradisional oleh ibu-ibu penenun Towale dengan ragam motif flora geometris.",
        image: "/images/destinasi/tenun-buya-sabe-proses.jpg",
      },
      {
        title: "Pantai Bonebula & Karampuana",
        category: "WISATA BAHARI",
        description:
          "Lengkung semenanjung pasir putih alami, gugusan pulau karang atol Karampuana, dan perairan tenang untuk snorkeling.",
        image: "/images/destinasi/pantai-bonebula-aerial.jpg",
      },
      {
        title: "Wisata Hiu Paus Donggala",
        category: "FAUNA LAUT",
        description:
          "Perairan pesisir Towale menjadi jalur perlintasan megafauna Hiu Paus ramah yang dapat diamati bersama nelayan pemandu lokal.",
        image: "/images/destinasi/hiu-paus-donggala.jpg",
      },
      {
        title: "Pusaka Bulava Mpongeo & Masjid Tua",
        category: "SEJARAH & BUDAYA",
        description:
          "Situs keramat pusaka Raja Kaili serta Masjid Tertua Towale yang menjadi tonggak awal syiar Islam di pesisir barat Donggala.",
        image: "/images/destinasi/bulava-mpongeo-kaili.jpg",
      },
      {
        title: "Homestay Cottage Kayu Pesisir",
        category: "AKOMODASI",
        description:
          "Cottage A-frame kayu tepi pantai dengan fasilitas kamar AC, kolam renang pesisir, balkon sunset Selat Makassar, dan sarapan lokal.",
        image: "/images/destinasi/homestay-cottage-depan.jpg",
      },
    ],
    guide: [
      {
        title: "Aksesibilitas & Rute",
        text: "Dari Bandara Mutiara SIS Al-Jufri Palu, tempuh jalur darat 60 menit via jalan beraspal mulus ke Towale. Menuju Pusentasi dapat diakses 15 menit jalur darat atau 5 menit speed boat.",
      },
      {
        title: "Waktu Terbaik Berkunjung",
        text: "Pagi hari (08.00–11.00) untuk kejernihan air laut Pusentasi dan sore hari (16.30–18.00) untuk menikmati matahari terbenam spektakuler di Pantai Bonebula.",
      },
      {
        title: "Etika Kunjungan Tenun",
        text: "Wisatawan dipersilakan berkunjung ke rumah penenun warga untuk belajar menenun dan dapat membeli kain tenun sutra langsung dari pengrajin.",
      },
      {
        title: "Keamanan Berenang",
        text: "Gunakan pelampung jika belum mahir berenang di kedalaman Pusentasi (7 meter). Ikuti instruksi petugas Pokdarwis pengelola sumur laut.",
      },
    ],
    ctaOtherVillage: {
      name: "Desa Limboro",
      href: "/desa/limboro",
      tagline: "Teluk pasir putih Kaluku & sentra ketahanan pangan sagu pesisir.",
    },
  },
  limboro: {
    slug: "limboro",
    name: "Desa Wisata Limboro",
    title: "Lanskap Teluk Pasir Putih Kaluku & Ketahanan Pangan Sagu",
    eyebrow: "DESA WISATA BANAWA TENGAH · DONGGALA",
    tagline: "Perairan tenang, lumbung sagu pesisir, dan keramahan warga nelayan.",
    description:
      "Desa Wisata Limboro berbatasan langsung dengan Towale di pesisir Banawa Tengah. Terkenal dengan pesona Pantai Kaluku yang berpasir putih bersih, terumbu karang dangkal, serta geliat dapur pengolahan sagu tradisional oleh kelompok wanita tani warga.",
    image: "/images/destinasi/pantai-kaluku-limboro.jpg",
    imageAlt: "Bentang Pantai Kaluku di Desa Limboro",
    stats: [
      { value: "3 km", label: "Panjang Garis Pantai" },
      { value: "50+ ha", label: "Kebun Sagu & Kelapa" },
      { value: "52 km", label: "Dari Kota Palu" },
      { value: "KWT", label: "Sentra Sagu Sejahtera" },
    ],
    attractions: [
      {
        title: "Pantai Kaluku Limboro",
        category: "WISATA PANTAI",
        description:
          "Pantai berpasir putih halus dengan deretan pohon kelapa menjulang dan ombak tenang, sangat ramah untuk rekreasi keluarga dan santai sore.",
        image: "/images/destinasi/pantai-kaluku-limboro.jpg",
      },
      {
        title: "Snorkeling Terumbu Karang Dangkal",
        category: "BAHARI",
        description:
          "Taman karang bawah laut yang tumbuh di perairan dangkal Pantai Kaluku, menjadi habitat ikan karang warna-warni dan bintang laut biru.",
        image: "/images/destinasi/snorkeling-kaluku.jpg",
      },
      {
        title: "Sentra Pengolahan Sagu Tradisional",
        category: "KULINER & PANGAN",
        description:
          "Dapur pengolahan sagu basah menjadi aneka kuliner khas: Dange Tabaro bakar belanga tanah, kue bagea renyah, cookies sagu, dan keripik gurih.",
        image: "/images/destinasi/cookies-sagu-limboro.jpg",
      },
      {
        title: "Tradisi Nelayan Pesisir",
        category: "BUDAYA BAHARI",
        description:
          "Menyaksikan nelayan pesisir melaut dengan perahu bercadik tradisional dan menikmati hasil tangkapan ikan segar bakar di tepi teluk.",
        image: "/images/destinasi/sepeda-ontel-towale.jpg",
      },
      {
        title: "Sabuk Hijau Mangrove Pesisir",
        category: "KONSERVASI",
        description:
          "Ekosistem hutan bakau alami yang meredam abrasi Selat Makassar dan menjadi area pembibitan kepiting serta pemijahan biota laut.",
        image: "/images/destinasi/pantai-bonebula-aerial.jpg",
      },
      {
        title: "Pondok Santai Tepi Pantai",
        category: "FASILITAS",
        description:
          "Gazebo bambu dan pondok peristirahatan di bawah naungan pohon kelapa dengan sajian es kelapa muda segar langsung dari pohon.",
        image: "/images/destinasi/homestay-pesisir-towale.jpg",
      },
    ],
    guide: [
      {
        title: "Akses & Perjalanan",
        text: "Terletak bersebelahan dengan Desa Towale, hanya 5–10 menit berkendara ke arah selatan menyusuri jalan pesisir Banawa Tengah yang indah.",
      },
      {
        title: "Aktivitas Rekreasi Air",
        text: "Pantai Kaluku memiliki ombak yang tenang dan dasar laut landai, sangat ideal untuk berenang, bermain kano, atau snorkeling di dekat pantai.",
      },
      {
        title: "Kuliner Sagu Segar",
        text: "Kunjungi rumah produksi KWT Sejahtera untuk mencicipi Dange Tabaro hangat yang baru matang dari cetakan wajan tanah liat.",
      },
      {
        title: "Kebersihan & Konservasi",
        text: "Jaga kelestarian terumbu karang dengan tidak menginjak karang saat snorkeling dan selalu membuang sampah pada tempat yang disediakan.",
      },
    ],
    ctaOtherVillage: {
      name: "Desa Towale",
      href: "/desa/towale",
      tagline: "Geowisata purba sumur laut Pusentasi & sentra tenun sutra Buya Sabe.",
    },
  },
} as const;

export type VillageSlug = keyof typeof VILLAGE_DETAILS;
