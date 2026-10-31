import type {
  NavItem,
  ServiceItem,
  PortfolioItem,
  StatItem,
  ValueItem,
  SocialLink,
} from "@/types"

/**
 * Single Source of Truth untuk Konstanta, Metadata, dan Konfigurasi Profil Perusahaan
 * Mengikuti arsitektur UPPER_SNAKE_CASE
 */

// ============================================================================
// 1. COMPANY METADATA & BRANDING
// ============================================================================
export const COMPANY_NAME = "Donggala Kreatif Mandiri" as const
export const COMPANY_TAGLINE = "Inovasi Digital Berkelanjutan untuk Potensi Lokal" as const
export const COMPANY_SUBTITLE =
  "Membangun ekosistem teknologi, pemberdayaan komunitas, dan transformasi digital yang berdampak nyata." as const
export const COMPANY_DESCRIPTION =
  "Perusahaan solusi teknologi dan konsultasi digital yang fokus mendampingi transformasi bisnis, komoditas lokal, dan pariwisata berkelanjutan." as const

// ============================================================================
// 2. NAVIGASI UTAMA
// ============================================================================
export const NAV_LINKS: readonly NavItem[] = [
  { title: "Beranda", href: "#beranda" },
  { title: "Tentang Kami", href: "#tentang" },
  { title: "Layanan", href: "#layanan" },
  { title: "Portofolio", href: "#portofolio" },
  { title: "Kontak", href: "#kontak" },
] as const

// ============================================================================
// 3. STATISTIK PERUSAHAAN (STATS)
// ============================================================================
export const COMPANY_STATS: readonly StatItem[] = [
  { value: "10+", label: "Tahun Pengalaman", description: "Dedikasi solusi teknologi & riset" },
  { value: "50+", label: "Proyek Selesai", description: "Platform web, mobile, & sistem terpadu" },
  { value: "99.8%", label: "Kepuasan Klien", description: "Standar delivery tepat waktu & presisi" },
  { value: "24/7", label: "Dukungan Teknis", description: "Monitoring & kesiapan operasional" },
] as const

// ============================================================================
// 4. NILAI & VISI MISI PERUSAHAAN
// ============================================================================
export const VISION_TEXT =
  "Menjadi pionir akselerasi transformasi digital yang mengintegrasikan kearifan lokal dengan teknologi modern berstandar global." as const

export const MISSION_ITEMS: readonly string[] = [
  "Mengembangkan produk perangkat lunak tangguh, aman, dan mudah digunakan.",
  "Mendorong digitalisasi UMKM dan inisiatif pariwisata berbasis komunitas.",
  "Membangun kemitraan strategis yang berkelanjutan dengan para pemangku kepentingan.",
  "Menjunjung tinggi etika rekayasa perangkat lunak dan keandalan sistem.",
] as const

export const CORE_VALUES: readonly ValueItem[] = [
  {
    title: "Integritas & Transparansi",
    description: "Kami mengutamakan kejujuran teknis, keterbukaan progres, dan akuntabilitas hasil kerja.",
  },
  {
    title: "Inovasi Berkelanjutan",
    description: "Terus berevolusi mengikuti standar teknologi terdepan demi memberikan nilai jangka panjang.",
  },
  {
    title: "Orientasi Dampak Nyata",
    description: "Setiap baris kode dan solusi arsitektur dirancang untuk memecahkan persoalan riil pengguna.",
  },
] as const

// ============================================================================
// 5. LAYANAN UNGGULAN (SERVICES)
// ============================================================================
export const SERVICES: readonly ServiceItem[] = [
  {
    id: "web-development",
    title: "Modern Web Engineering",
    description: "Arsitektur web berbasis Next.js App Router dengan pemisahan SSR/CSR ketat untuk kecepatan maksimal dan SEO prima.",
    iconName: "Globe",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & DevSecOps",
    description: "Perancangan infrastruktur cloud otomatis, containerization dengan Docker, dan integrasi CI/CD yang andal.",
    iconName: "Cloud",
  },
  {
    id: "digital-strategy",
    title: "Digital Consultation",
    description: "Analisis kebutuhan sistem, pemetaan tata kelola data, dan perumusan strategi roadmap produk teknologi.",
    iconName: "Compass",
  },
  {
    id: "community-platform",
    title: "Community & Local Empowerment",
    description: "Pengembangan portal ekowisata, katalog digital UMKM, dan platform pemberdayaan masyarakat.",
    iconName: "Users",
  },
] as const

// ============================================================================
// 6. PROYEK & PORTOFOLIO (PORTFOLIO)
// ============================================================================
export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: "jelajah-donggala",
    title: "Portal Ekowisata & Katalog Komunitas",
    category: "Web Application",
    description: "Platform digital terintegrasi untuk eksplorasi pesisir Towale & Limboro, katalog kriya tenun, dan reservasi layanan lokal.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
  },
  {
    id: "enterprise-dashboard",
    title: "Sistem Manajemen Operasional Terpadu",
    category: "Internal Tooling",
    description: "Dashboard administrasi data real-time dengan kontrol hak akses berbasis peran (RBAC) dan pelaporan analitik komprehensif.",
    tags: ["Next.js SSR", "TypeScript", "Audit Trail"],
  },
  {
    id: "gis-mapping-system",
    title: "Peta Interaktif Potensi Wilayah",
    category: "Spatial Tech",
    description: "Visualisasi titik persebaran potensi desa, akomodasi, dan destinasi bahari dengan optimasi pemuatan asinkron.",
    tags: ["Leaflet", "GeoJSON", "Modular Architecture"],
  },
] as const

// ============================================================================
// 7. INFORMASI KONTAK & LEGALITAS
// ============================================================================
export const CONTACT_INFO = {
  address: "Jl. Trans Sulawesi, Donggala, Sulawesi Tengah",
  email: "kontak@donggalakreatif.id",
  phone: "+62 812-3456-7890",
  whatsappUrl: "https://wa.me/6281234567890",
  operatingHours: "Senin – Jumat, 08.00 – 17.00 WITA",
} as const

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", iconName: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com", iconName: "Linkedin" },
  { platform: "Instagram", url: "https://instagram.com", iconName: "Instagram" },
] as const

// ============================================================================
// 8. TAHUN HAK CIPTA
// ============================================================================
export const COPYRIGHT_YEAR = 2026 as const
