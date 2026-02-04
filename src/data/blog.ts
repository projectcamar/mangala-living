export interface BlogPost {
  id: number
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  date: string
  author?: string
  status?: 'draft' | 'synced'

  // Custom content (optional) - takes priority over AI-generated content
  customContent?: {
    introduction?: string // Rich HTML content
    keyPoints?: string[] // Key takeaways/bullets
    language?: 'id' | 'en' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko' // Explicit content language
    sections?: Array<{
      heading: string
      content: string // Rich HTML content
      image?: string
      imageAlt?: string
      imageSearchQuery?: string
      productId?: number
    }>
    conclusion?: string // Rich HTML content
  }
}

export const BLOG_POSTS: BlogPost[] = [
  {
    "id": 1,
    "slug": "tips-memilih-furniture-industrial-untuk-cafe",
    "title": "Tips Memilih Furniture Industrial untuk Cafe Modern",
    "category": "Tips and Trick",
    "excerpt": "Memilih furniture industrial untuk cafe bukan hanya soal estetika, tetapi juga tentang menciptakan suasana yang nyaman dan fungsional bagi pelanggan.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-10-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 2,
    "slug": "keunggulan-furniture-besi-custom-vs-ready-stock",
    "title": "Keunggulan Furniture Besi Custom vs Ready Stock",
    "category": "About Furniture",
    "excerpt": "Saat memutuskan untuk membeli furniture besi industrial, Anda akan dihadapkan pada dua pilihan: custom atau ready stock.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-10-14",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 3,
    "slug": "inspirasi-desain-interior-industrial-minimalis",
    "title": "Inspirasi Desain Interior Industrial Minimalis 2025",
    "category": "Furniture Information",
    "excerpt": "Desain interior industrial minimalis menjadi tren yang terus populer di tahun 2024.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    "date": "2025-10-13",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 4,
    "slug": "cara-merawat-furniture-besi-agar-awet",
    "title": "Cara Merawat Furniture Besi Agar Tetap Awet dan Berkualitas",
    "category": "Tips and Trick",
    "excerpt": "Furniture besi industrial adalah investasi jangka panjang untuk bisnis atau rumah Anda.",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2025-10-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 5,
    "slug": "tren-furniture-cafe-dan-restoran-2025",
    "title": "Tren Furniture Cafe dan Restoran Tahun 2025",
    "category": "Furniture Information",
    "excerpt": "Simak tren furniture terkini untuk cafe dan restoran yang akan membuat bisnis F&B Anda semakin menarik di tahun 2025.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-10-11",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 6,
    "slug": "mengapa-memilih-furniture-lokal-indonesia",
    "title": "Mengapa Memilih Furniture Lokal Buatan Indonesia",
    "category": "About Furniture",
    "excerpt": "Banyak pelaku bisnis masih beranggapan bahwa furniture import lebih berkualitas dibanding produk lokal.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop",
    "date": "2025-10-10",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 7,
    "slug": "desain-meja-bar-industrial-untuk-ruang-terbatas",
    "title": "Desain Meja Bar Industrial untuk Ruang Terbatas",
    "category": "Tips and Trick",
    "excerpt": "Memiliki ruangan terbatas bukan berarti Anda tidak bisa memiliki bar area yang stylish dan fungsional.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2025-10-09",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 8,
    "slug": "kombinasi-kayu-dan-besi-untuk-furniture-modern",
    "title": "Kombinasi Kayu dan Besi untuk Furniture Modern",
    "category": "Furniture Information",
    "excerpt": "Kombinasi kayu dan besi adalah formula sempurna untuk furniture modern industrial.",
    "image": "https://images.unsplash.com/photo-1615529162924-f83c82d7d7f4?w=800&auto=format&fit=crop",
    "date": "2025-10-08",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 9,
    "slug": "furniture-outdoor-tahan-cuaca-untuk-teras",
    "title": "Furniture Outdoor Tahan Cuaca untuk Area Teras",
    "category": "About Furniture",
    "excerpt": "Area outdoor seperti teras, balkon, atau taman membutuhkan furniture khusus yang tahan terhadap cuaca ekstrem.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2025-10-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 10,
    "slug": "budget-furniture-cafe-untuk-pemula",
    "title": "Panduan Budget Furniture Cafe untuk Pemula",
    "category": "Tips and Trick",
    "excerpt": "Memulai bisnis cafe membutuhkan budget yang tidak sedikit, dan furniture adalah salah satu cost component terbesar.",
    "image": "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop",
    "date": "2025-10-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 11,
    "slug": "finishing-furniture-besi-powder-coating-vs-cat",
    "title": "Finishing Furniture Besi: Powder Coating vs Cat Biasa",
    "category": "Furniture Information",
    "excerpt": "Finishing adalah tahap crucial yang menentukan durability dan aesthetic furniture besi. Dua metode finishing paling populer adalah powder coating dan cat biasa.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-10-05",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 12,
    "slug": "kesalahan-umum-saat-membeli-furniture-industrial",
    "title": "7 Kesalahan Umum Saat Membeli Furniture Industrial",
    "category": "About Furniture",
    "excerpt": "Membeli furniture industrial adalah investasi signifikan, baik untuk bisnis maupun hunian.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2025-10-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 13,
    "slug": "sofa-cafe-industrial-minimalis-untuk-konsep-modern",
    "title": "Sofa Cafe Industrial Minimalis untuk Konsep Modern",
    "category": "Furniture Information",
    "excerpt": "Sofa cafe industrial minimalis menjadi pilihan utama untuk menciptakan konsep modern yang elegan dan fungsional.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-10-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 14,
    "slug": "meja-bar-industrial-untuk-cafe-dan-restoran",
    "title": "Meja Bar Industrial untuk Cafe dan Restoran",
    "category": "Furniture Information",
    "excerpt": "Meja bar industrial menjadi elemen penting dalam desain interior cafe dan restoran modern.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2025-10-17",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 15,
    "slug": "kursi-bar-industrial-dengan-desain-modern",
    "title": "Kursi Bar Industrial dengan Desain Modern",
    "category": "Furniture Information",
    "excerpt": "Kursi bar industrial dengan desain modern menjadi pilihan utama untuk melengkapi area bar dan lounge di cafe serta restoran.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-10-18",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 16,
    "slug": "rak-display-industrial-untuk-retail-dan-cafe",
    "title": "Rak Display Industrial untuk Retail dan Cafe",
    "category": "Furniture Information",
    "excerpt": "Rak display industrial menjadi solusi praktis untuk menampilkan produk dan merchandise di retail, cafe, dan restoran.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2025-10-19",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 17,
    "slug": "meja-makan-industrial-untuk-restoran-modern",
    "title": "Meja Makan Industrial untuk Restoran Modern",
    "category": "Furniture Information",
    "excerpt": "Meja makan industrial menjadi pilihan utama untuk menciptakan suasana yang hangat dan modern di restoran.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-10-20",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 18,
    "slug": "furniture-outdoor-industrial-tahan-cuaca",
    "title": "Furniture Outdoor Industrial Tahan Cuaca",
    "category": "Furniture Information",
    "excerpt": "Furniture outdoor industrial tahan cuaca menjadi solusi ideal untuk area outdoor cafe, restoran, dan hotel.",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    "date": "2025-10-21",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 19,
    "slug": "daybed-industrial-untuk-area-lounge-modern",
    "title": "Daybed Industrial untuk Area Lounge Modern",
    "category": "Furniture Information",
    "excerpt": "Daybed industrial menjadi pilihan utama untuk menciptakan area lounge yang nyaman dan modern di hotel, cafe, dan restoran.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-10-22",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 20,
    "slug": "meja-kerja-industrial-untuk-kantor-modern",
    "title": "Meja Kerja Industrial untuk Kantor Modern",
    "category": "Furniture Information",
    "excerpt": "Meja kerja industrial menjadi pilihan utama untuk menciptakan workspace yang produktif dan modern di kantor.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    "date": "2025-10-23",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 21,
    "slug": "rak-buku-industrial-untuk-perpustakaan-modern",
    "title": "Rak Buku Industrial untuk Perpustakaan Modern",
    "category": "Furniture Information",
    "excerpt": "Rak buku industrial menjadi pilihan utama untuk menciptakan perpustakaan yang fungsional dan modern.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    "date": "2025-10-24",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 22,
    "slug": "furniture-industrial-custom-untuk-hotel",
    "title": "Furniture Industrial Custom untuk Hotel",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial custom untuk hotel menjadi solusi ideal untuk menciptakan suasana yang elegan dan modern di berbagai area hotel.",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    "date": "2025-10-25",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 23,
    "slug": "furniture-industrial-murah-untuk-startup",
    "title": "Furniture Industrial Murah untuk Startup",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial murah menjadi solusi ideal untuk startup yang membutuhkan furniture berkualitas dengan budget terbatas.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    "date": "2025-10-26",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 24,
    "slug": "furniture-industrial-bekasi-terpercaya",
    "title": "Furniture Industrial Bekasi Terpercaya",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial Bekasi terpercaya menjadi pilihan utama untuk berbagai kebutuhan furniture berkualitas tinggi.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-10-27",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 25,
    "slug": "furniture-industrial-custom-design",
    "title": "Furniture Industrial Custom Design",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial custom design menjadi solusi ideal untuk menciptakan furniture yang unik dan sesuai dengan kebutuhan spesifik.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-10-28",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 26,
    "slug": "furniture-industrial-harga-pabrik",
    "title": "Furniture Industrial Harga Pabrik",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial harga pabrik menjadi solusi ideal untuk mendapatkan furniture berkualitas tinggi dengan harga yang kompetitif.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-10-29",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 27,
    "slug": "furniture-industrial-garansi-kualitas",
    "title": "Furniture Industrial Garansi Kualitas",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial garansi kualitas menjadi jaminan penting untuk investasi furniture jangka panjang.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-10-30",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 28,
    "slug": "furniture-industrial-workshop-bekasi",
    "title": "Furniture Industrial Workshop Bekasi",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial workshop Bekasi menjadi pusat produksi furniture berkualitas tinggi di Indonesia.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-10-31",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 29,
    "slug": "furniture-industrial-material-berkualitas",
    "title": "Furniture Industrial Material Berkualitas",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial material berkualitas menjadi faktor penting dalam menentukan kualitas dan daya tahan furniture.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-01",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 30,
    "slug": "furniture-industrial-finishing-powder-coating",
    "title": "Furniture Industrial Finishing Powder Coating",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial finishing powder coating menjadi solusi ideal untuk memberikan perlindungan dan tampilan yang optimal pada furniture.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-02",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 31,
    "slug": "furniture-industrial-layanan-profesional",
    "title": "Furniture Industrial Layanan Profesional",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial layanan profesional menjadi faktor penting dalam memberikan pengalaman terbaik untuk pelanggan.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-03",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 32,
    "slug": "furniture-industrial-pengalaman-25-tahun",
    "title": "Furniture Industrial Pengalaman 25 Tahun",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial pengalaman 25 tahun menjadi bukti kualitas dan kepercayaan dalam industri furniture.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 33,
    "slug": "furniture-industrial-1000-klien-puas",
    "title": "Furniture Industrial 1000 Klien Puas",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial 1000 klien puas menjadi bukti kualitas dan kepercayaan dalam industri furniture.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-05",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 34,
    "slug": "furniture-industrial-custom-design-terpercaya",
    "title": "Furniture Industrial Custom Design Terpercaya",
    "category": "Furniture Information",
    "excerpt": "Furniture industrial custom design terpercaya menjadi solusi ideal untuk menciptakan furniture yang unik dan sesuai dengan kebutuhan spesifik.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 35,
    "slug": "inspirasi-desain-kafe-industrial-minimalis-7-furniture-wajib",
    "title": "Inspirasi Desain Kafe Industrial Minimalis: 7 Furniture Wajib Punya",
    "category": "Furniture Information",
    "excerpt": "Desain kafe industrial minimalis menjadi tren yang tak pernah lekang oleh waktu.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-10-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 36,
    "slug": "harga-furniture-industrial-terbaru-2025-lengkap-kafe-kantor",
    "title": "Harga Furniture Industrial Terbaru 2025 (Lengkap untuk Kafe & Kantor)",
    "category": "Furniture Information",
    "excerpt": "Harga furniture industrial menjadi pertimbangan utama bagi pemilik bisnis yang ingin menciptakan ruang komersial dengan konsep industrial modern.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-10-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 37,
    "slug": "panduan-lengkap-memilih-furniture-industrial-untuk-restoran",
    "title": "Panduan Lengkap Memilih Furniture Industrial untuk Restoran",
    "category": "Tips and Trick",
    "excerpt": "Memilih furniture industrial untuk restoran memerlukan pertimbangan yang matang karena restoran memiliki karakteristik operasional yang berbeda dengan kafe.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-10-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 38,
    "slug": "7-model-meja-industrial-terlaris-untuk-kantor-modern",
    "title": "7 Model Meja Industrial Terlaris untuk Kantor Modern",
    "category": "Furniture Information",
    "excerpt": "Meja kantor industrial menjadi pilihan populer untuk menciptakan workspace modern yang produktif dan estetis.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    "date": "2025-10-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 39,
    "slug": "tren-desain-interior-industrial-scandinavian-2025",
    "title": "Tren Desain Interior Industrial Scandinavian 2025",
    "category": "Furniture Information",
    "excerpt": "Tren desain interior industrial Scandinavian 2025 menggabungkan elemen industrial yang kuat dengan estetika Scandinavian yang minimalis dan hangat.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    "date": "2025-10-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 40,
    "slug": "hollowline-display-rack-solusi-storage-industrial-modern",
    "title": "Hollowline Display Rack: Solusi Storage Industrial Modern Terbaik",
    "category": "Furniture Information",
    "excerpt": "Hollowline Display Rack menjadi solusi storage industrial modern yang sangat populer di kalangan pemilik bisnis retail, cafe, dan restoran.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2025-10-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 41,
    "slug": "display-shelf-rack-industrial-untuk-retail-dan-cafe",
    "title": "Display Shelf Rack Industrial untuk Retail dan Cafe Modern",
    "category": "Furniture Information",
    "excerpt": "Display Shelf Rack Industrial menjadi elemen penting dalam menciptakan tampilan retail dan cafe yang menarik dan fungsional.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    "date": "2025-10-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 42,
    "slug": "stall-chair-design-inspirasi-kursi-bar-industrial",
    "title": "Stall Chair Design: Inspirasi Kursi Bar Industrial Terbaik",
    "category": "Furniture Information",
    "excerpt": "Stall Chair Design dengan konsep industrial menjadi pilihan populer untuk cafe, restoran, dan bar modern.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2025-10-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 43,
    "slug": "meja-cafe-murah-harga-terbaru-2025",
    "title": "Meja Cafe Murah Harga Terbaru 2025 - Kualitas Premium",
    "category": "Furniture Information",
    "excerpt": "Mencari meja cafe murah dengan kualitas premium? Mangala Living menawarkan berbagai pilihan meja cafe murah harga terbaru 2025 yang dirancang khusus untuk cafe, restoran, dan kedai kopi modern.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 44,
    "slug": "kursi-bar-cafe-murah-bekasi-ready-stock",
    "title": "Kursi Bar Cafe Murah Bekasi Ready Stock - Harga Terjangkau",
    "category": "Furniture Information",
    "excerpt": "Pencari kursi bar cafe murah di Bekasi? Mangala Living menyediakan kursi bar cafe murah ready stock dengan harga terjangkau.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-11-08",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 45,
    "slug": "furniture-cafe-murah-bekasi-harga-pabrik",
    "title": "Furniture Cafe Murah Bekasi Harga Pabrik - Workshop Langsung",
    "category": "Furniture Information",
    "excerpt": "Mencari furniture cafe murah di Bekasi? Mangala Living adalah produsen furniture industrial terpercaya dengan harga pabrik yang terjangkau.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-11-09",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 46,
    "slug": "meja-makan-cafe-industrial-minimalis-murah",
    "title": "Meja Makan Cafe Industrial Minimalis Murah - Set dengan Kursi",
    "category": "Furniture Information",
    "excerpt": "Meja makan adalah salah satu furniture paling penting di cafe.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-11-10",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 47,
    "slug": "display-rack-cafe-murah-industrial-besi",
    "title": "Display Rack Cafe Murah Industrial Besi - Hollowline Model",
    "category": "Furniture Information",
    "excerpt": "Display rack adalah furniture multifungsi yang sangat penting di cafe modern.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2025-11-11",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 48,
    "slug": "bar-set-cafe-murah-outdoor-industrial",
    "title": "Bar Set Cafe Murah Outdoor Industrial - Steelframe Model",
    "category": "Furniture Information",
    "excerpt": "Area outdoor adalah aset berharga untuk cafe modern.",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    "date": "2025-11-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 49,
    "slug": "furniture-industrial-harga-murah-jakarta-bekasi",
    "title": "Furniture Industrial Harga Murah Jakarta Bekasi - Pengalaman 25 Tahun",
    "category": "Furniture Information",
    "excerpt": "Mencari furniture industrial harga murah untuk Jakarta dan Bekasi? Mangala Living adalah solusinya.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-11-13",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 50,
    "slug": "meja-kerja-cafe-murah-industrial-rak-buku",
    "title": "Meja Kerja Cafe Murah Industrial dengan Rak Buku - Multifungsi",
    "category": "Furniture Information",
    "excerpt": "Meja kerja adalah furniture yang wajib ada di cafe modern.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    "date": "2024-11-14",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 51,
    "slug": "kitchen-cabinet-cafe-murah-industrial-besi",
    "title": "Kitchen Cabinet Cafe Murah Industrial Besi - Custom Design",
    "category": "Furniture Information",
    "excerpt": "Kitchen cabinet adalah heart of the kitchen di cafe Anda.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 52,
    "slug": "outdoor-furniture-cafe-murah-tahan-cuaca",
    "title": "Outdoor Furniture Cafe Murah Tahan Cuaca - Industrial Style",
    "category": "Furniture Information",
    "excerpt": "Area outdoor adalah aset berharga yang harus dioptimalkan untuk cafe modern.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 53,
    "slug": "jual-meja-kafe-industrial-modern-harga-terbaik-2025",
    "title": "Jual Meja Kafe Industrial Modern - Harga Terbaik 2025",
    "category": "Furniture Information",
    "excerpt": "Mencari meja kafe industrial modern dengan harga terbaik 2025? Anda berada di tempat yang tepat! Meja kafe industrial menjadi pilihan utama para pemilik cafe dan restoran modern karena desainnya yang elegan, kokoh, dan tahan lama.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-11-17",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 54,
    "slug": "meja-kafe-bulat-industrial-desain-unik-cafe-modern",
    "title": "Meja Kafe Bulat Industrial - Desain Unik untuk Cafe Modern",
    "category": "Furniture Information",
    "excerpt": "Meja kafe bulat industrial menjadi pilihan unik untuk menciptakan suasana cafe modern yang berbeda.",
    "image": "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop",
    "date": "2024-11-18",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 55,
    "slug": "meja-kursi-kafe-set-industrial-solusi-lengkap-cafe",
    "title": "Meja Kursi Kafe Set Industrial - Solusi Lengkap Cafe",
    "category": "Furniture Information",
    "excerpt": "Set meja kursi kafe industrial menjadi solusi lengkap untuk furnishing cafe Anda.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    "date": "2024-11-19",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 56,
    "slug": "model-kursi-meja-kafe-industrial-inspirasi-terbaru",
    "title": "Model Kursi Meja Kafe Industrial - Inspirasi Terbaru",
    "category": "Furniture Information",
    "excerpt": "Model kursi meja kafe industrial terus berkembang dengan inspirasi desain terbaru yang mengikuti tren modern.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2024-11-20",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 57,
    "slug": "harga-bikin-meja-kafe-murah-custom-design-terjangkau",
    "title": "Harga Bikin Meja Kafe Murah - Custom Design Terjangkau",
    "category": "Tips and Trick",
    "excerpt": "Mencari harga bikin meja kafe murah dengan custom design terjangkau? Custom furniture cafe menjadi pilihan cerdas untuk mendapatkan furniture yang sesuai dengan konsep dan budget cafe Anda.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-11-21",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 58,
    "slug": "meja-dan-kursi-untuk-kafe-murah-tapi-bagus-rekomendasi-terbaik",
    "title": "Meja dan Kursi untuk Kafe Murah Tapi Bagus - Rekomendasi Terbaik",
    "category": "Furniture Information",
    "excerpt": "Mencari meja dan kursi untuk kafe murah tapi bagus? Budget terbatas bukan berarti Anda harus mengorbankan kualitas furniture cafe.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    "date": "2024-11-22",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 59,
    "slug": "meja-kursi-kafe-murah-solusi-budget-terbatas",
    "title": "Meja Kursi Kafe Murah - Solusi Budget Terbatas",
    "category": "Tips and Trick",
    "excerpt": "Memiliki budget terbatas untuk furniture cafe bukan berarti Anda harus mengorbankan kualitas dan estetika.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2024-11-23",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 60,
    "slug": "furniture-kafe-industrial-panduan-lengkap-pemilihan",
    "title": "Furniture Kafe Industrial - Panduan Lengkap Pemilihan",
    "category": "Tips and Trick",
    "excerpt": "Furniture kafe industrial menjadi pilihan utama para pemilik cafe modern karena desainnya yang elegan, kokoh, dan tahan lama.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-11-24",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 61,
    "slug": "furnitur-untuk-kafe-tips-memilih-yang-tepat",
    "title": "Furnitur untuk Kafe - Tips Memilih yang Tepat",
    "category": "Tips and Trick",
    "excerpt": "Memilih furnitur untuk kafe yang tepat merupakan langkah penting dalam menciptakan atmosfer yang nyaman dan menarik bagi pelanggan.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-11-25",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 62,
    "slug": "furniture-kafe-2-lantai-sederhana-modern-inspirasi-desain",
    "title": "Furniture Kafe 2 Lantai Sederhana Modern - Inspirasi Desain",
    "category": "Furniture Information",
    "excerpt": "Furniture kafe 2 lantai sederhana modern menjadi solusi ideal untuk memaksimalkan ruang dan menciptakan pengalaman yang berbeda di setiap lantai.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    "date": "2024-11-26",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 63,
    "slug": "furniture-kafe-buku-konsep-cafe-literasi-modern",
    "title": "Furniture Kafe Buku - Konsep Cafe Literasi Modern",
    "category": "Furniture Information",
    "excerpt": "Furniture kafe buku menjadi konsep unik yang menggabungkan suasana literasi dengan kenyamanan cafe modern.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    "date": "2024-11-27",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 64,
    "slug": "furniture-untuk-kafe-bergaya-industrial-vintage-panduan-lengkap",
    "title": "Furniture untuk Kafe Bergaya Industrial Vintage - Panduan Lengkap",
    "category": "Furniture Information",
    "excerpt": "Furniture untuk kafe bergaya industrial vintage menjadi pilihan populer untuk menciptakan atmosfer yang unik dan berkarakter.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2024-11-28",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 65,
    "slug": "kafe-dengan-furniture-paling-unik-inspirasi-kreatif",
    "title": "Kafe dengan Furniture Paling Unik - Inspirasi Kreatif",
    "category": "Furniture Information",
    "excerpt": "Kafe dengan furniture paling unik menjadi daya tarik utama yang membedakan cafe Anda dari kompetitor.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    "date": "2024-11-29",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 66,
    "slug": "perhitungan-furniture-kafe-panduan-budget-dan-layout",
    "title": "Perhitungan Furniture Kafe - Panduan Budget dan Layout",
    "category": "Tips and Trick",
    "excerpt": "Perhitungan furniture kafe yang tepat merupakan kunci sukses dalam perencanaan budget dan layout cafe.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-11-30",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 67,
    "slug": "industrial-cafe-furniture-tren-terbaru-2025",
    "title": "Industrial Cafe Furniture - Tren Terbaru 2025",
    "category": "Furniture Information",
    "excerpt": "Industrial cafe furniture terus berkembang dengan tren terbaru 2025 yang mengikuti perkembangan desain dan kebutuhan pelanggan.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-12-01",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 68,
    "slug": "furniture-besi-custom-bekasi-workshop-terpercaya",
    "title": "Furniture Besi Custom Bekasi: Workshop Terpercaya dengan Pengalaman 25 Tahun",
    "category": "Workshop & Production",
    "excerpt": "Mencari furniture besi custom Bekasi berkualitas tinggi dengan harga yang kompetitif? Mangala Living adalah workshop furniture industrial terpercaya di Bekasi yang telah melayani lebih dari 1000 klien sejak tahun 1999.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-02",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 69,
    "slug": "industrial-furniture-bekasi-harga-pabrik-kualitas-premium",
    "title": "Industrial Furniture Bekasi: Harga Pabrik, Kualitas Premium, Workshop Langsung",
    "category": "Workshop & Production",
    "excerpt": "Industrial furniture Bekasi dengan harga pabrik dan kualitas premium kini bukan lagi mimpi.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2024-12-03",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 70,
    "slug": "furniture-cafe-industrial-bekasi-desain-custom-modern",
    "title": "Furniture Cafe Industrial Bekasi: Desain Custom Modern untuk Bisnis F&B",
    "category": "Commercial Furniture",
    "excerpt": "Furniture cafe industrial Bekasi dengan desain custom modern. Mangala Living spesialis furniture cafe industrial: meja makan, kursi bar, display rack. Workshop Bekasi, pengalaman 25 tahun.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-12-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 71,
    "slug": "workshop-furniture-besi-bekasi-produksi-langsung",
    "title": "Workshop Furniture Besi Bekasi: Produksi Langsung, Custom Design, Harga Kompetitif",
    "category": "Workshop & Production",
    "excerpt": "Workshop furniture besi Bekasi terpercaya. Mangala Living workshop modern dengan produksi langsung, custom design sesuai kebutuhan. Material berkualitas, finishing powder coating, garansi kualitas.",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2024-12-05",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 72,
    "slug": "jual-furniture-industrial-jakarta-bekasi-terlengkap",
    "title": "Jual Furniture Industrial Jakarta Bekasi Terlengkap - Harga Pabrik",
    "category": "Commercial Furniture",
    "excerpt": "Jual furniture industrial Jakarta dan Bekasi paling lengkap. Mangala Living menyediakan meja, kursi, rak display, kitchen cabinet industrial. Workshop di Bekasi, melayani seluruh Jabodetabek.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 73,
    "slug": "meja-makan-besi-custom-bekasi-industrial-minimalis",
    "title": "Meja Makan Besi Custom Bekasi: Industrial Minimalis untuk Cafe & Restoran",
    "category": "Commercial Furniture",
    "excerpt": "Meja makan besi custom Bekasi dengan desain industrial minimalis. Set meja makan + kursi, berbagai ukuran custom. Workshop Mangala Living melayani cafe, restoran, hotel. Kualitas premium, harga terjangkau.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 74,
    "slug": "meja-cafe-industrial-besi-custom-bekasi-jabodetabek",
    "title": "Meja Cafe Industrial Besi Custom Bekasi - Melayani Jabodetabek",
    "category": "Commercial Furniture",
    "excerpt": "Meja cafe industrial besi custom dari Bekasi. Mangala Living produksi meja cafe berbagai model: bar table, dining table, coffee table. Material berkualitas, finishing powder coating, harga kompetitif.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2024-12-08",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 75,
    "slug": "furniture-besi-hotel-custom-desain-eksklusif",
    "title": "Furniture Besi Hotel Custom: Desain Eksklusif, Kualitas Premium",
    "category": "Commercial Furniture",
    "excerpt": "Furniture besi hotel custom dengan desain eksklusif. Mangala Living spesialis furniture hotel industrial: lobby furniture, restaurant furniture, room furniture. Workshop Bekasi, pengalaman project hotel.",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    "date": "2024-12-09",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 76,
    "slug": "bikin-furniture-besi-custom-jabodetabek-berkualitas",
    "title": "Bikin Furniture Besi Custom Jabodetabek Berkualitas - Workshop Mangala",
    "category": "Workshop & Production",
    "excerpt": "Bikin furniture besi custom Jabodetabek dengan kualitas terjamin. Mangala Living workshop modern di Bekasi melayani custom furniture untuk cafe, restoran, hotel, kantor. Free konsultasi & survey lokasi.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-10",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 77,
    "slug": "furniture-besi-untuk-restoran-industrial-modern",
    "title": "Furniture Besi untuk Restoran: Solusi Industrial Modern Berkualitas",
    "category": "Commercial Furniture",
    "excerpt": "Furniture besi untuk restoran dengan desain industrial modern. Meja makan, kursi, bar set, storage solution dari Mangala Living. Tahan lama, mudah perawatan, harga kompetitif. Workshop Bekasi.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-11",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 78,
    "slug": "inspirasi-furniture-industrial-cafe-kecil-minimalis",
    "title": "Inspirasi Furniture Industrial untuk Cafe Kecil: Desain Minimalis Maksimal",
    "category": "Design Inspiration",
    "excerpt": "Kumpulan inspirasi furniture industrial untuk cafe kecil dengan konsep minimalis. Tips layout, pemilihan furniture yang tepat, dan desain yang memaksimalkan ruang terbatas. Cocok untuk startup cafe.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-12-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 79,
    "slug": "desain-interior-industrial-besi-kayu-harmonis",
    "title": "Desain Interior Industrial Besi dan Kayu: Kombinasi Harmonis Modern",
    "category": "Design Inspiration",
    "excerpt": "Panduan lengkap desain interior industrial dengan kombinasi besi dan kayu. Tips memadukan material, pemilihan warna, finishing, dan inspirasi desain untuk cafe, restoran, dan kantor modern.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    "date": "2024-12-13",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 80,
    "slug": "meja-bar-industrial-minimalis-desain-compact",
    "title": "Meja Bar Industrial Minimalis: Desain Compact untuk Cafe Modern",
    "category": "Design Inspiration",
    "excerpt": "Inspirasi meja bar industrial minimalis dengan desain compact. Solusi space-efficient untuk cafe kecil. Tips ukuran ideal, material, dan model meja bar yang sesuai konsep industrial minimalis.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2024-12-14",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 81,
    "slug": "desain-ruang-makan-industrial-furniture-besi",
    "title": "Desain Ruang Makan Industrial dengan Furniture Besi: Panduan Lengkap",
    "category": "Design Inspiration",
    "excerpt": "Panduan desain ruang makan industrial dengan furniture besi. Tips layout, pemilihan furniture, lighting, dan dekorasi untuk menciptakan dining area industrial modern yang fungsional dan estetis.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 82,
    "slug": "contoh-furniture-cafe-industrial-buatan-lokal-indonesia",
    "title": "Contoh Furniture Cafe Industrial Buatan Lokal Indonesia Berkualitas",
    "category": "Design Inspiration",
    "excerpt": "Kumpulan contoh furniture cafe industrial buatan lokal Indonesia. Portfolio project Mangala Living: cafe, restoran, hotel dengan furniture industrial berkualitas. Desain custom, material premium.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    "date": "2024-12-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 83,
    "slug": "furniture-besi-cocok-konsep-vintage-cafe",
    "title": "Furniture Besi Cocok untuk Konsep Vintage Cafe: Tips Styling",
    "category": "Design Inspiration",
    "excerpt": "Tips styling furniture besi untuk konsep vintage cafe. Panduan memilih furniture industrial yang cocok untuk tema vintage, pemilihan warna, finishing, dan aksesoris pendukung.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2024-12-17",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 84,
    "slug": "desain-meja-industrial-besi-hollow-modern",
    "title": "Desain Meja Industrial Besi Hollow Modern: Model Terbaru 2025",
    "category": "Design Inspiration",
    "excerpt": "Model desain meja industrial besi hollow terbaru 2025. Inspirasi meja kerja, meja makan, meja bar dengan material hollow steel berkualitas. Tips pemilihan ukuran dan finishing powder coating.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    "date": "2024-12-18",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 85,
    "slug": "koleksi-furniture-industrial-terbaru-2025-mangala",
    "title": "Koleksi Furniture Industrial Terbaru 2025 dari Mangala Living",
    "category": "Product Showcase",
    "excerpt": "Koleksi furniture industrial terbaru 2025 dari Mangala Living. Meja, kursi, rak display, kitchen cabinet, outdoor furniture dengan desain modern. Material premium, finishing berkualitas, harga kompetitif.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-19",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 86,
    "slug": "apa-itu-furniture-industrial-panduan-lengkap-pemula",
    "title": "Apa Itu Furniture Industrial? Panduan Lengkap untuk Pemula",
    "category": "Educational",
    "excerpt": "Panduan lengkap apa itu furniture industrial untuk pemula. Sejarah, karakteristik, material, keunggulan, dan tips memilih furniture industrial yang tepat untuk rumah, cafe, atau kantor Anda.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-20",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 87,
    "slug": "kenapa-furniture-besi-lebih-awet-dari-kayu",
    "title": "Kenapa Furniture Besi Lebih Awet dari Kayu? Perbandingan Lengkap",
    "category": "Educational",
    "excerpt": "Perbandingan lengkap furniture besi vs kayu. Kenapa furniture besi lebih awet? Analisis durabilitas, perawatan, harga, dan nilai investasi jangka panjang untuk bisnis F&B dan kantor.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2024-12-21",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 88,
    "slug": "perbandingan-furniture-besi-vs-kayu-cafe-restoran",
    "title": "Perbandingan Furniture Besi vs Kayu untuk Cafe & Restoran",
    "category": "Educational",
    "excerpt": "Perbandingan detail furniture besi vs kayu untuk bisnis cafe dan restoran. Analisis kelebihan-kekurangan, investasi jangka panjang, perawatan, dan rekomendasi terbaik untuk bisnis F&B.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-22",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 89,
    "slug": "cara-merawat-furniture-besi-anti-karat-awet",
    "title": "Cara Merawat Furniture Besi Supaya Gak Berkarat dan Tetap Awet",
    "category": "Tips and Trick",
    "excerpt": "Tips lengkap cara merawat furniture besi supaya anti karat dan awet bertahun-tahun. Panduan cleaning, treatment, dan preventive maintenance untuk furniture besi industrial indoor dan outdoor.",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2024-12-23",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 90,
    "slug": "proses-pembuatan-furniture-besi-custom-workshop",
    "title": "Proses Pembuatan Furniture Besi Custom di Workshop: Behind The Scene",
    "category": "Educational",
    "excerpt": "Behind the scene proses pembuatan furniture besi custom di workshop Mangala Living. Dari desain, cutting, welding, finishing hingga quality control. Transparansi proses produksi furniture berkualitas.",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2024-12-24",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 91,
    "slug": "tips-memilih-furniture-besi-untuk-restoran-profesional",
    "title": "Tips Memilih Furniture Besi untuk Restoran: Panduan Profesional",
    "category": "Tips and Trick",
    "excerpt": "Tips profesional memilih furniture besi untuk restoran. Panduan material, ukuran, desain, budget, dan vendor terpercaya. Checklist lengkap untuk pemilik restoran dan interior designer.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-25",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 92,
    "slug": "trend-desain-industrial-2025-furniture-modern",
    "title": "Trend Desain Industrial 2025: Furniture Modern untuk Bisnis",
    "category": "Furniture Information",
    "excerpt": "Trend desain industrial 2025 untuk furniture modern. Prediksi tren material, warna, finishing, dan style furniture industrial yang akan populer. Panduan untuk bisnis cafe, restoran, dan kantor.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    "date": "2024-12-26",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 93,
    "slug": "jenis-finishing-furniture-besi-powder-coating-duco",
    "title": "Jenis Finishing Furniture Besi: Powder Coating, Cat Duco, Elektrostatic",
    "category": "Educational",
    "excerpt": "Panduan lengkap jenis finishing furniture besi: powder coating, cat duco, elektrostatic painting. Perbandingan kualitas, harga, durabilitas, dan rekomendasi finishing terbaik untuk furniture industrial.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-27",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 94,
    "slug": "furniture-industrial-bekasi-barat-custom-berkualitas",
    "title": "Furniture Industrial Bekasi Barat: Custom Berkualitas untuk Cafe & Restoran",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial di Bekasi Barat. Melayani Bintara, Kranji, Kota Baru, Jakasampurna. Custom meja kursi cafe, restoran, hotel. Free konsultasi & survey. Harga pabrik langsung.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-12-28",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 95,
    "slug": "furniture-cafe-bekasi-timur-jatiasih-pekayon",
    "title": "Furniture Cafe Bekasi Timur: Melayani Jatiasih, Pekayon, Aren Jaya",
    "category": "Local Area Guide",
    "excerpt": "Supplier furniture cafe industrial untuk Bekasi Timur. Coverage area: Jatiasih, Pekayon, Aren Jaya, Duren Jaya. Gratis delivery. Meja bar, kursi cafe, display rack custom. Workshop terpercaya.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-29",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 96,
    "slug": "furniture-besi-bekasi-selatan-kayuringin-margajaya",
    "title": "Furniture Besi Bekasi Selatan: Kayuringin, Margajaya, Jakasetia",
    "category": "Local Area Guide",
    "excerpt": "Jasa furniture besi custom Bekasi Selatan. Melayani Kayuringin Jaya, Margajaya, Jakasetia, Pekayon Jaya. Workshop dekat dengan lokasi Anda. Material premium, finishing powder coating, harga terjangkau.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2024-12-30",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 97,
    "slug": "furniture-industrial-bekasi-utara-harapan-indah-summarecon",
    "title": "Furniture Industrial Bekasi Utara: Harapan Indah, Summarecon, Pejuang",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial Bekasi Utara. Coverage: Harapan Indah, Summarecon Bekasi, Pejuang, Teluk Pucung, Kaliabang. Spesialis cafe, restoran, hotel. Custom design, harga kompetitif.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-31",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 98,
    "slug": "furniture-cafe-cikarang-barat-lippo-cikarang-cibatu",
    "title": "Furniture Cafe Cikarang Barat: Lippo Cikarang, Cibatu, Telaga Murni",
    "category": "Local Area Guide",
    "excerpt": "Furniture cafe industrial Cikarang Barat. Melayani Lippo Cikarang, Cibatu, Telaga Murni, Pasir Gombong. Workshop dekat area industri. Custom furniture untuk cafe karyawan pabrik & F&B bisnis.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-01",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 99,
    "slug": "furniture-restoran-cikarang-utara-karang-asih-simpangan",
    "title": "Furniture Restoran Cikarang Utara: Karang Asih, Simpangan, Sukamaju",
    "category": "Local Area Guide",
    "excerpt": "Supplier furniture restoran Cikarang Utara. Area: Karang Asih, Simpangan, Sukamaju, Danau Indah. Spesialis meja makan industrial, kursi restoran, furniture outdoor. Produksi lokal Bekasi.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-01-02",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 100,
    "slug": "furniture-industrial-cikarang-selatan-jababeka-greenland",
    "title": "Furniture Industrial Cikarang Selatan: Jababeka, Greenland, Pasirsari",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial Cikarang Selatan. Coverage Jababeka, Greenland International, Pasirsari, Ciantra. Melayani corporate office, cafe pabrik, kantin karyawan. Harga volume discount.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-03",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 101,
    "slug": "furniture-hotel-cikarang-timur-serang-baru-karangreja",
    "title": "Furniture Hotel Cikarang Timur: Serang Baru, Karangreja, Jayamukti",
    "category": "Local Area Guide",
    "excerpt": "Furniture hotel industrial Cikarang Timur. Melayani Serang Baru, Karangreja, Jayamukti, Sukamanah. Spesialis lobby furniture, restaurant hotel, room furniture. Project hotel & homestay.",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    "date": "2025-01-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 102,
    "slug": "furniture-cafe-cikarang-pusat-taman-galaxy-lemahabang",
    "title": "Furniture Cafe Cikarang Pusat: Taman Galaxy, Lemahabang, Hegarmukti",
    "category": "Local Area Guide",
    "excerpt": "Furniture cafe industrial Cikarang Pusat. Area coverage: Taman Galaxy, Lemahabang, Hegarmukti, Kalijaya. Custom meja bar, kursi cafe, display rack. Free konsultasi desain interior.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-05",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 103,
    "slug": "furniture-industrial-tambun-selatan-sertajaya-mangunjaya",
    "title": "Furniture Industrial Tambun Selatan: Sertajaya, Mangunjaya, Lambangjaya",
    "category": "Local Area Guide",
    "excerpt": "Industrial furniture besi custom untuk cafe, restoran, hotel. Workshop Bekasi sejak 1999. Harga pabrik. WA: +6288801146881.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-01-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 104,
    "slug": "furniture-custom-tambun-utara-satria-jaya-karang-satria",
    "title": "Furniture Custom Tambun Utara: Satria Jaya, Karang Satria, Wanasari",
    "category": "Local Area Guide",
    "excerpt": "Jasa furniture custom Tambun Utara. Coverage: Satria Jaya, Karang Satria, Wanasari, Karang Bahagia. Spesialis furniture besi industrial untuk cafe & restoran. Gratis delivery area Tambun.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 105,
    "slug": "furniture-cafe-pondok-gede-jatiwaringin-jatibening",
    "title": "Furniture Cafe Pondok Gede: Jatiwaringin, Jatibening, Jatiraden",
    "category": "Local Area Guide",
    "excerpt": "Furniture cafe industrial Pondok Gede. Melayani Jatiwaringin, Jatibening, Jatiraden, Jatimakmur. Workshop Bekasi melayani border Jakarta-Bekasi. Custom design, fast production 20 hari.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-08",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 106,
    "slug": "furniture-restoran-mustika-jaya-mustikasari-pedurenan",
    "title": "Furniture Restoran Mustika Jaya: Mustikasari, Pedurenan, Cimuning",
    "category": "Local Area Guide",
    "excerpt": "Supplier furniture restoran Mustika Jaya. Area: Mustikasari, Pedurenan, Cimuning. Meja makan industrial, kursi restoran, bar set. Material premium, finishing powder coating tahan lama.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-01-09",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 107,
    "slug": "furniture-industrial-rawalumbu-bojong-rawalumbu-sepanjang-jaya",
    "title": "Furniture Industrial Rawalumbu: Bojong Rawalumbu, Sepanjang Jaya",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial Rawalumbu. Coverage: Bojong Rawalumbu, Sepanjang Jaya, Pengasinan. Dekat pintu tol, mudah akses. Furniture cafe, restoran, office. Custom & ready design.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-10",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 108,
    "slug": "furniture-cafe-medan-satria-kali-baru-pejuang",
    "title": "Furniture Cafe Medan Satria: Kali Baru, Pejuang, Harapan Baru",
    "category": "Local Area Guide",
    "excerpt": "Furniture cafe industrial Medan Satria. Melayani Kali Baru, Pejuang, Harapan Baru, Medan Satria. Workshop furniture besi custom untuk cafe modern. Harga kompetitif, kualitas terjamin.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-11",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 109,
    "slug": "furniture-cafe-summarecon-bekasi-premium-mall-area",
    "title": "Furniture Cafe Summarecon Bekasi: Premium Mall Area - Custom Design",
    "category": "Local Area Guide",
    "excerpt": "Summarecon Bekasi telah menjadi destinasi F&B dan lifestyle terpopuler di Bekasi dengan traffic pengunjung yang tinggi setiap harinya.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 110,
    "slug": "furniture-industrial-harapan-indah-residential-commercial",
    "title": "Furniture Industrial Harapan Indah: Residential & Commercial Area",
    "category": "Local Area Guide",
    "excerpt": "Harapan Indah telah berkembang menjadi kawasan hunian dan komersial terpadu yang dinamis di Bekasi Utara.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-13",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 111,
    "slug": "furniture-cafe-grand-galaxy-city-bekasi-superblok",
    "title": "Furniture Cafe Grand Galaxy City Bekasi: Superblok F&B Area",
    "category": "Local Area Guide",
    "excerpt": "Furniture cafe industrial untuk Grand Galaxy City Bekasi. Melayani tenant mall, foodcourt, cafe strip. Custom furniture dengan delivery cepat ke area Grand Galaxy. Workshop Bekasi berpengalaman.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-01-14",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 112,
    "slug": "furniture-restoran-galaxy-bekasi-mall-tenant",
    "title": "Furniture Restoran Galaxy Bekasi: Mall Tenant & Foodcourt Specialist",
    "category": "Local Area Guide",
    "excerpt": "Supplier furniture restoran untuk Galaxy Bekasi mall tenant. Spesialis foodcourt furniture, cafe tenant, restaurant area. Fast production 15-20 hari. Custom design sesuai konsep mall. Harga volume.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-01-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 113,
    "slug": "furniture-industrial-kemang-pratama-bekasi-premium",
    "title": "Furniture Industrial Kemang Pratama Bekasi: Premium Residential Area",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial untuk area Kemang Pratama. Melayani residential, cafe, home office. Custom furniture besi berkualitas dengan desain modern. Dekat dengan lokasi, delivery gratis area Kemang Pratama.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 114,
    "slug": "furniture-industrial-jababeka-cikarang-kawasan-pabrik",
    "title": "Furniture Industrial Jababeka Cikarang: Kawasan Pabrik & Corporate",
    "category": "Local Area Guide",
    "excerpt": "Spesialis furniture industrial untuk Jababeka Industrial Estate. Melayani kantin pabrik, cafe karyawan, corporate office, mess. Volume discount untuk project besar. Workshop dekat Jababeka.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-17",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 115,
    "slug": "furniture-cafe-lippo-cikarang-mall-commercial",
    "title": "Furniture Cafe Lippo Cikarang: Mall & Commercial District",
    "category": "Local Area Guide",
    "excerpt": "Lippo Cikarang adalah kawasan mixed-use development terbesar di Cikarang dengan kombinasi mall, residential, office, dan education hub.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-18",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 116,
    "slug": "furniture-industrial-deltamas-cikarang-mixed-development",
    "title": "Furniture Industrial Deltamas Cikarang: Mixed-Use Development",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial untuk kawasan Deltamas. Melayani commercial area, residential, F&B tenant. Custom furniture cafe, restoran, kantor. Material premium, harga kompetitif, delivery gratis.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-01-19",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 117,
    "slug": "furniture-cafe-ejip-cikarang-industrial-park",
    "title": "Furniture Cafe EJIP Cikarang: East Jakarta Industrial Park Area",
    "category": "Local Area Guide",
    "excerpt": "Supplier furniture cafe untuk EJIP Industrial Park. Spesialis kantin pabrik, cafe employee, mess karyawan. Volume pricing untuk corporate project. Workshop terdekat dengan EJIP, fast delivery.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-20",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 118,
    "slug": "furniture-restoran-greenland-cikarang-commercial",
    "title": "Furniture Restoran Greenland Cikarang: Commercial & Residential",
    "category": "Local Area Guide",
    "excerpt": "Furniture restoran industrial untuk Greenland International Cikarang. Custom design untuk commercial area, residential cafe. Material berkualitas, finishing powder coating. Workshop lokal Bekasi.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-01-21",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 119,
    "slug": "furniture-cafe-kota-harapan-indah-bekasi-cluster",
    "title": "Furniture Cafe Kota Harapan Indah Bekasi: Cluster Commercial Area",
    "category": "Local Area Guide",
    "excerpt": "Jasa furniture cafe industrial Kota Harapan Indah. Melayani commercial cluster, cafe residential, home business. Custom design sesuai space. Free konsultasi & measurement. Delivery gratis Harapan Indah.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-22",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 120,
    "slug": "furniture-industrial-margahayu-bekasi-timur-area",
    "title": "Furniture Industrial Margahayu Bekasi Timur: Residential & F&B",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial untuk Margahayu, Bekasi Timur. Coverage area: Margahayu Raya, sekitar kampus. Spesialis furniture cafe mahasiswa, warung, restoran. Harga terjangkau, kualitas premium.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-23",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 121,
    "slug": "furniture-cafe-kaliabang-bekasi-utara-tengah",
    "title": "Furniture Cafe Kaliabang Bekasi Utara Tengah: Area Komersial",
    "category": "Local Area Guide",
    "excerpt": "Furniture cafe industrial untuk Kaliabang Bekasi Utara Tengah. Melayani cafe, warung, restoran area komersial. Custom furniture dengan harga pabrik. Workshop terdekat, fast production 20 hari.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-24",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 122,
    "slug": "furniture-restoran-kayuringin-jaya-bekasi-selatan",
    "title": "Furniture Restoran Kayuringin Jaya Bekasi Selatan: F&B Specialist",
    "category": "Local Area Guide",
    "excerpt": "Supplier furniture restoran Kayuringin Jaya, Bekasi Selatan. Coverage: Kayuringin Raya, area kampus, commercial. Spesialis meja makan industrial, kursi restoran. Material premium, harga terjangkau.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-01-25",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 123,
    "slug": "furniture-cafe-pekayon-jaya-bekasi-selatan-area",
    "title": "Furniture Cafe Pekayon Jaya Bekasi Selatan: Commercial District",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture cafe Pekayon Jaya. Melayani area Pekayon, Jakasetia, commercial district. Custom furniture besi industrial untuk cafe modern. Free delivery area Bekasi Selatan. Garansi kualitas.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-26",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 124,
    "slug": "furniture-industrial-jakasampurna-bekasi-barat-area",
    "title": "Furniture Industrial Jakasampurna Bekasi Barat: Custom Workshop",
    "category": "Local Area Guide",
    "excerpt": "Furniture industrial custom Jakasampurna, Bekasi Barat. Coverage: Jakasampurna, Kota Baru. Spesialis cafe, restoran, office furniture. Workshop lokal Bekasi, produksi cepat, harga kompetitif.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-27",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 125,
    "slug": "furniture-cafe-kranji-bekasi-barat-pinggir-jakarta",
    "title": "Furniture Cafe Kranji Bekasi Barat: Pinggir Jakarta Border",
    "category": "Local Area Guide",
    "excerpt": "Jasa furniture cafe industrial Kranji, Bekasi Barat. Strategis border Jakarta-Bekasi. Melayani cafe, restoran, home office. Custom design modern, material berkualitas. Delivery Jakarta & Bekasi.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-28",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 126,
    "slug": "furniture-restoran-bintara-bekasi-barat-commercial",
    "title": "Furniture Restoran Bintara Bekasi Barat: Commercial Area",
    "category": "Local Area Guide",
    "excerpt": "Supplier furniture restoran Bintara, Bekasi Barat. Area coverage: Bintara Jaya, commercial strip. Spesialis meja kursi restoran industrial. Workshop terdekat, harga pabrik, kualitas terjamin.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-01-29",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 127,
    "slug": "furniture-industrial-karawang-terdekat-dari-bekasi",
    "title": "Furniture Industrial Karawang: Workshop Terdekat dari Bekasi",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial terdekat untuk Karawang. Lokasi di Bekasi dekat border Karawang. Melayani Karawang Barat, Karawang Timur. Spesialis cafe pabrik, kantin karyawan, corporate office.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-30",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 128,
    "slug": "furniture-cafe-cibitung-bekasi-kawasan-industri",
    "title": "Furniture Cafe Cibitung Bekasi: Kawasan Industri & Pabrik",
    "category": "Local Area Guide",
    "excerpt": "Furniture cafe industrial untuk Cibitung, Bekasi. Spesialis kantin pabrik, cafe karyawan, mess area. Volume discount untuk corporate project. Workshop dekat kawasan industri Cibitung. Fast delivery.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-31",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 129,
    "slug": "furniture-industrial-setu-bekasi-workshop-langsung",
    "title": "Furniture Industrial Setu Bekasi: Workshop Langsung - Harga Pabrik",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial di Setu, Bekasi. Lokasi produksi langsung, harga pabrik tanpa markup. Custom furniture cafe, restoran, hotel, kantor. Material premium, finishing powder coating berkualitas.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-02-01",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 130,
    "slug": "furniture-cafe-metland-transyogi-cileungsi-commercial",
    "title": "Furniture Cafe Metland Transyogi Cileungsi: Commercial Area",
    "category": "Local Area Guide",
    "excerpt": "Furniture cafe industrial untuk Metland Transyogi, Cileungsi. Coverage: commercial area, residential. Workshop Bekasi melayani Cileungsi & sekitar. Custom design, delivery gratis area Metland.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-02-02",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 131,
    "slug": "furniture-industrial-jakarta-timur-perbatasan-bekasi",
    "title": "Furniture Industrial Jakarta Timur: Perbatasan Bekasi - Fast Delivery",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial terdekat untuk Jakarta Timur. Coverage: Cakung, Kramat Jati, Makasar, Cipayung. Dekat border Bekasi-Jakarta. Custom furniture cafe, restoran. Delivery cepat Jakarta Timur.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-02-03",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 132,
    "slug": "furniture-cafe-jakarta-pusat-cbd-office-building",
    "title": "Furniture Cafe Jakarta Pusat: CBD & Office Building Specialist",
    "category": "Local Area Guide",
    "excerpt": "Supplier furniture cafe industrial Jakarta Pusat. Spesialis tenant gedung perkantoran, corporate cafe, co-working space. Workshop Bekasi melayani Jakarta. Custom design premium, project experience.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-02-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 133,
    "slug": "furniture-restoran-jakarta-selatan-premium-area",
    "title": "Furniture Restoran Jakarta Selatan: Premium F&B Area",
    "category": "Local Area Guide",
    "excerpt": "Furniture restoran industrial Jakarta Selatan. Coverage: Kemang, SCBD, Senopati, Kebayoran. Workshop Bekasi melayani Jakarta Selatan. Custom design premium, material berkualitas, timeline terjamin.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-02-05",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 134,
    "slug": "furniture-cafe-depok-terdekat-dari-bekasi-workshop",
    "title": "Furniture Cafe Depok: Workshop Terdekat dari Bekasi",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture cafe industrial terdekat untuk Depok. Coverage: Margonda, UI, Sawangan. Melayani cafe kampus, restoran, F&B bisnis. Custom furniture berkualitas, harga terjangkau mahasiswa.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-02-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 135,
    "slug": "furniture-industrial-bogor-workshop-bekasi-melayani",
    "title": "Furniture Industrial Bogor: Workshop Bekasi Melayani Area Bogor",
    "category": "Local Area Guide",
    "excerpt": "Workshop furniture industrial Bekasi melayani Bogor. Coverage: Bogor Kota, Cibinong, Sentul. Spesialis cafe, villa, resort furniture. Custom design tropical industrial. Delivery Bekasi-Bogor tersedia.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-02-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 136,
    "slug": "rahasia-cafe-hits-jakarta-bandung-bali-furniture-industrial-bikin-pelanggan-betah",
    "title": "Rahasia Cafe Hits di Jakarta, Bandung, Bali: Furniture Industrial yang Bikin Pelanggan Betah",
    "category": "Design Inspiration",
    "excerpt": "Sebagai praktisi arsitektur yang sudah belasan tahun terlibat dalam proyek renovasi dan desain ruang komersial - mulai dari perumahan hingga cafe dan restoran - saya sering mendapat pertanyaan dari klien: \"Kenapa cafe tertentu selalu ramai, sementara yang lain sepi padahal lokasi sama-sama strategis?\".",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-10-31",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 137,
    "slug": "cafe-24-jam-jakarta-bekasi-furniture-tahan-lama-operasional-non-stop",
    "title": "Cafe 24 Jam Jakarta & Bekasi: Furniture Tahan Lama untuk Operasional Non-Stop",
    "category": "Commercial Furniture",
    "excerpt": "Dari pengalaman saya handle commercial space di Jakarta dan Bekasi, saya notice bahwa furniture tahan lama untuk operasional non-stop adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    "date": "2025-11-01",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 138,
    "slug": "cafe-alam-outdoor-furniture-industrial-tahan-cuaca-tropis",
    "title": "Cafe Alam: Outdoor Furniture Industrial Tahan Cuaca Tropis Indonesia",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di area outdoor dengan cuaca ekstrem, saya notice bahwa furniture outdoor tahan cuaca tropis Indonesia adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2025-11-02",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 139,
    "slug": "cafe-sekitar-saya-strategi-furniture-menarik-pelanggan-lokal",
    "title": "Cafe Sekitar Saya: Strategi Furniture untuk Menarik Pelanggan Lokal",
    "category": "Tips and Trick",
    "excerpt": "Dari pengalaman saya handle commercial space di area residential dan perumahan, saya notice bahwa furniture strategy menarik pelanggan lokal adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop",
    "date": "2025-11-03",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 140,
    "slug": "nama-cafe-unik-branding-furniture-industrial-konsep-kuat",
    "title": "Nama Cafe Unik: Branding dengan Furniture Industrial untuk Konsep Kuat",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di semua area dengan konsep unik, saya notice bahwa sinkronisasi furniture dengan brand identity adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 141,
    "slug": "cafe-bsd-serpong-furniture-industrial-area-premium",
    "title": "Cafe BSD Serpong: Furniture Industrial untuk Area Premium & Modern",
    "category": "Local Area Guide",
    "excerpt": "Dari pengalaman saya handle commercial space di BSD City dan Serpong, saya notice bahwa furniture industrial untuk demographics premium adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-11-05",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 142,
    "slug": "cafe-sentul-bogor-furniture-konsep-alam-industrial",
    "title": "Cafe Sentul Bogor: Furniture Konsep Alam-Industrial Tropical Modern",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di Sentul dan Bogor area, saya notice bahwa kombinasi alam dan industrial style adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 143,
    "slug": "cafe-depok-margonda-ui-furniture-student-friendly",
    "title": "Cafe Depok Margonda UI: Furniture Student-Friendly dengan Budget Terjangkau",
    "category": "Commercial Furniture",
    "excerpt": "Dari pengalaman saya handle commercial space di Margonda, UI, area kampus, saya notice bahwa furniture student-friendly dan affordable adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 144,
    "slug": "cafe-jakarta-selatan-kemang-scbd-furniture-premium",
    "title": "Cafe Jakarta Selatan Kemang SCBD: Furniture Premium Industrial Chic",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di Kemang, SCBD, Senopati, saya notice bahwa furniture high-end industrial chic adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-11-08",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 145,
    "slug": "cafe-bandung-dago-riau-furniture-instagrammable-hits",
    "title": "Cafe Bandung Dago Riau: Furniture Instagrammable yang Bikin Hits",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di Dago, Riau, Progo Bandung, saya notice bahwa furniture instagrammable yang viral adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    "date": "2025-11-09",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 146,
    "slug": "cafe-bali-canggu-seminyak-furniture-tropical-industrial",
    "title": "Cafe Bali Canggu Seminyak: Furniture Tropical Industrial Beach Vibes",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di Canggu, Seminyak, Ubud, saya notice bahwa furniture tropical industrial beach style adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2025-11-10",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 147,
    "slug": "cafe-surabaya-galaxy-pakuwon-furniture-modern-spacious",
    "title": "Cafe Surabaya Galaxy Pakuwon: Furniture Modern Spacious & Comfortable",
    "category": "Local Area Guide",
    "excerpt": "Dari pengalaman saya handle commercial space di Galaxy Mall, Pakuwon, saya notice bahwa furniture spacious dan comfortable adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-11-11",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 148,
    "slug": "cafe-jogja-prawirotaman-malioboro-furniture-vintage-industrial",
    "title": "Cafe Jogja Prawirotaman Malioboro: Furniture Vintage Industrial Heritage",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di Prawirotaman, Malioboro, Kaliurang, saya notice bahwa furniture vintage industrial heritage adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2025-11-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 149,
    "slug": "cafe-malang-batu-furniture-mountain-view-industrial",
    "title": "Cafe Malang Batu: Furniture Mountain View Industrial dengan Pemandangan",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di Malang dan Batu, saya notice bahwa furniture outdoor dengan view pegunungan adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    "date": "2024-11-13",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 150,
    "slug": "cafe-bogor-puncak-furniture-sejuk-highland-industrial",
    "title": "Cafe Bogor Puncak: Furniture Sejuk Highland Industrial Cool Climate",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di Bogor dan Puncak, saya notice bahwa furniture untuk dataran tinggi sejuk adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop",
    "date": "2024-11-14",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 151,
    "slug": "cafe-medan-furniture-spacious-culture-sumatera",
    "title": "Cafe Medan: Furniture Spacious untuk Culture Nongkrong Sumatera",
    "category": "Local Area Guide",
    "excerpt": "Dari pengalaman saya handle commercial space di Medan, Sumatera Utara, saya notice bahwa furniture untuk kultur nongkrong Medan adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 152,
    "slug": "cafe-semarang-furniture-compact-efficient-mall-ruko",
    "title": "Cafe Semarang: Furniture Compact Efficient untuk Mall & Ruko",
    "category": "Local Area Guide",
    "excerpt": "Dari pengalaman saya handle commercial space di Semarang, Jawa Tengah, saya notice bahwa furniture compact untuk mall dan ruko adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-11-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 153,
    "slug": "cafe-makassar-furniture-coastal-industrial-sulawesi",
    "title": "Cafe Makassar: Furniture Coastal Industrial Sulawesi Beach Style",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di Makassar, Sulawesi Selatan, saya notice bahwa furniture coastal industrial beach style adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-17",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 154,
    "slug": "cafe-terdekat-dari-saya-furniture-strategy-lokal",
    "title": "Cafe Terdekat dari Saya: Furniture Strategy Menjadi Pilihan Lokal Pertama",
    "category": "Tips and Trick",
    "excerpt": "Dari pengalaman saya handle commercial space di area residential lokal, saya notice bahwa furniture strategy jadi pilihan lokal pertama adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    "date": "2024-11-18",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 155,
    "slug": "menu-cafe-furniture-mendukung-pengalaman-kuliner",
    "title": "Menu Cafe & Furniture: Bagaimana Furniture Mendukung Pengalaman Kuliner",
    "category": "Tips and Trick",
    "excerpt": "Dari pengalaman saya handle commercial space di semua cafe dengan fokus F&B, saya notice bahwa furniture mendukung pengalaman kuliner adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-11-19",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 156,
    "slug": "the-cafe-konsep-minimalis-furniture-less-is-more",
    "title": "The Cafe Konsep Minimalis: Furniture \"Less is More\" yang Powerful",
    "category": "Design Inspiration",
    "excerpt": "Dari pengalaman saya handle commercial space di urban area dengan brand positioning premium, saya notice bahwa furniture minimalis less is more adalah kunci sukses cafe di area ini.",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    "date": "2024-11-20",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 157,
    "slug": "jasa-furniture-industrial-minimalis-murah-bekasi-berkualitas",
    "title": "Jasa Furniture Industrial Minimalis Murah Bekasi - Berkualitas Premium",
    "category": "Commercial Furniture",
    "excerpt": "Mencari jasa furniture industrial minimalis murah di Bekasi yang berkualitas? Mangala Living adalah workshop furniture industrial terpercaya yang melayani custom furniture minimalis modern dengan harga terjangkau namun tetap berkualitas premium.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-08",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 158,
    "slug": "jual-meja-cafe-modern-minimalis-murah-berkualitas-jakarta-bekasi",
    "title": "Jual Meja Cafe Modern Minimalis Murah - Berkualitas Jakarta Bekasi",
    "category": "Commercial Furniture",
    "excerpt": "Jual meja cafe modern minimalis murah dengan kualitas premium untuk Jakarta dan Bekasi.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-09",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 159,
    "slug": "kursi-resto-modern-minimalis-murah-berkualitas-harga-terbaik",
    "title": "Kursi Resto Modern Minimalis Murah - Berkualitas Harga Terbaik 2025",
    "category": "Commercial Furniture",
    "excerpt": "Kursi resto modern minimalis murah dengan kualitas premium dan harga terbaik 2025.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2024-12-10",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 160,
    "slug": "furniture-cafe-minimalis-modern-murah-jasa-custom-berkualitas",
    "title": "Furniture Cafe Minimalis Modern Murah - Jasa Custom Berkualitas",
    "category": "Commercial Furniture",
    "excerpt": "Furniture cafe minimalis modern murah dengan jasa custom berkualitas dari Mangala Living.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-12-11",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 161,
    "slug": "meja-resto-industrial-modern-minimalis-murah-berkualitas",
    "title": "Meja Resto Industrial Modern Minimalis Murah - Berkualitas Premium",
    "category": "Commercial Furniture",
    "excerpt": "Meja resto industrial modern minimalis murah dengan kualitas premium.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-12",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 162,
    "slug": "jasa-bikin-furniture-cafe-custom-minimalis-murah-bekasi",
    "title": "Jasa Bikin Furniture Cafe Custom Minimalis Murah Bekasi - Workshop Langsung",
    "category": "Workshop & Production",
    "excerpt": "Jasa bikin furniture cafe custom minimalis murah Bekasi dengan workshop langsung.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-13",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 163,
    "slug": "furniture-resto-modern-minimalis-murah-jual-berkualitas",
    "title": "Furniture Resto Modern Minimalis Murah - Jual Berkualitas Harga Terbaik",
    "category": "Commercial Furniture",
    "excerpt": "Furniture resto modern minimalis murah yang kami jual dengan kualitas premium.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-14",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 164,
    "slug": "display-rack-cafe-modern-minimalis-murah-berkualitas-industrial",
    "title": "Display Rack Cafe Modern Minimalis Murah - Berkualitas Industrial",
    "category": "Commercial Furniture",
    "excerpt": "Display rack cafe modern minimalis murah dengan kualitas industrial premium.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2024-12-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 165,
    "slug": "bar-set-cafe-modern-minimalis-murah-jasa-custom-berkualitas",
    "title": "Bar Set Cafe Modern Minimalis Murah - Jasa Custom Berkualitas",
    "category": "Commercial Furniture",
    "excerpt": "Bar set cafe modern minimalis murah dengan jasa custom berkualitas dari Mangala Living.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2024-12-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 166,
    "slug": "kitchen-cabinet-resto-modern-minimalis-murah-berkualitas",
    "title": "Kitchen Cabinet Resto Modern Minimalis Murah - Berkualitas Custom",
    "category": "Commercial Furniture",
    "excerpt": "Kitchen cabinet resto modern minimalis murah dengan kualitas custom premium.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-17",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 167,
    "slug": "jual-furniture-industrial-modern-minimalis-murah-jakarta-bekasi",
    "title": "Jual Furniture Industrial Modern Minimalis Murah Jakarta Bekasi",
    "category": "Commercial Furniture",
    "excerpt": "Jual furniture industrial modern minimalis murah untuk Jakarta dan Bekasi dengan kualitas premium.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-18",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 168,
    "slug": "meja-kursi-cafe-modern-minimalis-murah-set-berkualitas",
    "title": "Meja Kursi Cafe Modern Minimalis Murah - Set Berkualitas Harga Terbaik",
    "category": "Commercial Furniture",
    "excerpt": "Set meja kursi cafe modern minimalis murah dengan kualitas premium.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    "date": "2024-12-19",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 169,
    "slug": "jasa-furniture-resto-custom-modern-minimalis-murah",
    "title": "Jasa Furniture Resto Custom Modern Minimalis Murah - Berkualitas",
    "category": "Workshop & Production",
    "excerpt": "Jasa furniture resto custom modern minimalis murah berkualitas dari Mangala Living.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-20",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 170,
    "slug": "outdoor-furniture-cafe-modern-minimalis-murah-berkualitas",
    "title": "Outdoor Furniture Cafe Modern Minimalis Murah - Berkualitas Tahan Cuaca",
    "category": "Commercial Furniture",
    "excerpt": "Outdoor furniture cafe modern minimalis murah dengan kualitas tahan cuaca.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-12-21",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 171,
    "slug": "rak-display-resto-modern-minimalis-murah-jual-berkualitas",
    "title": "Rak Display Resto Modern Minimalis Murah - Jual Berkualitas Industrial",
    "category": "Commercial Furniture",
    "excerpt": "Rak display resto modern minimalis murah yang kami jual dengan kualitas industrial premium.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2024-12-22",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 172,
    "slug": "meja-kerja-cafe-modern-minimalis-murah-berkualitas-multifungsi",
    "title": "Meja Kerja Cafe Modern Minimalis Murah - Berkualitas Multifungsi",
    "category": "Commercial Furniture",
    "excerpt": "Meja kerja cafe modern minimalis murah dengan kualitas multifungsi premium.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    "date": "2024-12-23",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 173,
    "slug": "jasa-buat-furniture-cafe-custom-modern-minimalis-murah",
    "title": "Jasa Buat Furniture Cafe Custom Modern Minimalis Murah Bekasi",
    "category": "Workshop & Production",
    "excerpt": "Jasa buat furniture cafe custom modern minimalis murah Bekasi dengan workshop langsung.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-12-24",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 174,
    "slug": "kursi-bar-cafe-modern-minimalis-murah-jual-berkualitas",
    "title": "Kursi Bar Cafe Modern Minimalis Murah - Jual Berkualitas Industrial",
    "category": "Commercial Furniture",
    "excerpt": "Kursi bar cafe modern minimalis murah yang kami jual dengan kualitas industrial premium.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2024-12-25",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 175,
    "slug": "furniture-kantin-industrial-modern-minimalis-murah-berkualitas",
    "title": "Furniture Kantin Industrial Modern Minimalis Murah - Berkualitas",
    "category": "Commercial Furniture",
    "excerpt": "Furniture kantin industrial modern minimalis murah dengan kualitas premium.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-26",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 176,
    "slug": "meja-makan-resto-modern-minimalis-murah-set-berkualitas",
    "title": "Meja Makan Resto Modern Minimalis Murah - Set Berkualitas Lengkap",
    "category": "Commercial Furniture",
    "excerpt": "Set meja makan resto modern minimalis murah dengan kualitas lengkap premium.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2024-12-27",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 177,
    "slug": "jasa-furniture-hotel-custom-modern-minimalis-murah-berkualitas",
    "title": "Jasa Furniture Hotel Custom Modern Minimalis Murah - Berkualitas Premium",
    "category": "Commercial Furniture",
    "excerpt": "Jasa furniture hotel custom modern minimalis murah berkualitas premium dari Mangala Living.",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    "date": "2024-12-28",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 178,
    "slug": "rak-buku-cafe-modern-minimalis-murah-jual-berkualitas",
    "title": "Rak Buku Cafe Modern Minimalis Murah - Jual Berkualitas Industrial",
    "category": "Commercial Furniture",
    "excerpt": "Rak buku cafe modern minimalis murah yang kami jual dengan kualitas industrial premium.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    "date": "2024-12-29",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 179,
    "slug": "daybed-cafe-modern-minimalis-murah-berkualitas-lounge-area",
    "title": "Daybed Cafe Modern Minimalis Murah - Berkualitas Lounge Area",
    "category": "Commercial Furniture",
    "excerpt": "Daybed cafe modern minimalis murah dengan kualitas premium untuk lounge area.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2024-12-30",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 180,
    "slug": "jasa-furniture-kantor-industrial-modern-minimalis-murah",
    "title": "Jasa Furniture Kantor Industrial Modern Minimalis Murah - Berkualitas",
    "category": "Commercial Furniture",
    "excerpt": "Jasa furniture kantor industrial modern minimalis murah berkualitas dari Mangala Living.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    "date": "2024-12-31",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 181,
    "slug": "sofa-bench-cafe-modern-minimalis-murah-jual-berkualitas",
    "title": "Sofa Bench Cafe Modern Minimalis Murah - Jual Berkualitas Industrial",
    "category": "Commercial Furniture",
    "excerpt": "Sofa bench cafe modern minimalis murah yang kami jual dengan kualitas industrial premium.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-01",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 182,
    "slug": "meja-coffee-cafe-modern-minimalis-murah-berkualitas-berkualitas",
    "title": "Meja Coffee Cafe Modern Minimalis Murah - Berkualitas Industrial",
    "category": "Commercial Furniture",
    "excerpt": "Meja coffee cafe modern minimalis murah dengan kualitas industrial premium.",
    "image": "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop",
    "date": "2025-01-02",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 183,
    "slug": "jasa-furniture-cafe-custom-minimalis-modern-murah-bekasi-jakarta",
    "title": "Jasa Furniture Cafe Custom Minimalis Modern Murah Bekasi Jakarta",
    "category": "Workshop & Production",
    "excerpt": "Jasa furniture cafe custom minimalis modern murah untuk Bekasi dan Jakarta dengan kualitas premium.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-01-03",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 184,
    "slug": "furniture-mall-cafe-resto-modern-minimalis-murah-berkualitas",
    "title": "Furniture Mall Cafe Resto Modern Minimalis Murah - Berkualitas",
    "category": "Commercial Furniture",
    "excerpt": "Furniture mall cafe resto modern minimalis murah dengan kualitas premium.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-01-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 185,
    "slug": "rak-gantung-cafe-modern-minimalis-murah-jual-berkualitas",
    "title": "Rak Gantung Cafe Modern Minimalis Murah - Jual Berkualitas Industrial",
    "category": "Commercial Furniture",
    "excerpt": "Rak gantung cafe modern minimalis murah yang kami jual dengan kualitas industrial premium.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2025-01-05",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 186,
    "slug": "jasa-furniture-besi-custom-modern-minimalis-murah-jabodetabek",
    "title": "Jasa Furniture Besi Custom Modern Minimalis Murah Jabodetabek",
    "category": "Workshop & Production",
    "excerpt": "Jasa furniture besi custom modern minimalis murah untuk Jabodetabek dengan kualitas premium.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 187,
    "slug": "indonesian-industrial-furniture-export-quality-global-standards",
    "title": "Indonesian Industrial Furniture Export: Quality Meets Global Standards",
    "category": "Export & International",
    "excerpt": "Discover why Indonesian industrial furniture manufacturers are becoming the preferred choice for international buyers. Quality craftsmanship, competitive pricing, and reliable export services.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 188,
    "slug": "custom-metal-furniture-manufacturer-indonesia-export-worldwide",
    "title": "Custom Metal Furniture Manufacturer Indonesia - Export Worldwide",
    "category": "Export & International",
    "excerpt": "Leading custom metal furniture manufacturer in Indonesia specializing in export. We deliver high-quality industrial furniture to hotels, restaurants, and commercial spaces globally.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 189,
    "slug": "wholesale-industrial-furniture-indonesia-bulk-orders-export",
    "title": "Wholesale Industrial Furniture Indonesia - Bulk Orders & Export",
    "category": "Export & International",
    "excerpt": "Wholesale industrial furniture manufacturer in Indonesia offering competitive pricing for bulk orders. We handle export documentation, shipping, and quality assurance for international clients.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 190,
    "slug": "indonesian-furniture-factory-custom-commercial-furniture-export",
    "title": "Indonesian Furniture Factory: Custom Commercial Furniture Export",
    "category": "Export & International",
    "excerpt": "Direct from factory in Bekasi, Indonesia. We manufacture custom commercial furniture for hotels, restaurants, cafes, and offices. Export-ready with international quality standards.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 191,
    "slug": "metal-furniture-supplier-indonesia-export-hotels-restaurants",
    "title": "Metal Furniture Supplier Indonesia - Export to Hotels & Restaurants",
    "category": "Export & International",
    "excerpt": "Trusted metal furniture supplier in Indonesia exporting to hotels and restaurants worldwide. Premium quality steel furniture with powder coating finish and competitive FOB prices.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 192,
    "slug": "indonesia-industrial-furniture-manufacturer-oem-odm-export",
    "title": "Indonesia Industrial Furniture Manufacturer - OEM & ODM Export",
    "category": "Export & International",
    "excerpt": "OEM and ODM industrial furniture manufacturer in Indonesia. We work with international brands, furniture importers, and hospitality chains. Custom design and private label available.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 193,
    "slug": "export-quality-restaurant-furniture-indonesia-manufacturer",
    "title": "Export Quality Restaurant Furniture - Indonesia Manufacturer",
    "category": "Export & International",
    "excerpt": "Manufacturer of export-quality restaurant furniture in Indonesia. Industrial dining tables, chairs, bar stools, and custom commercial furniture. Competitive pricing for international buyers.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 194,
    "slug": "indonesian-furniture-exporter-bekasi-factory-direct-pricing",
    "title": "Indonesian Furniture Exporter Bekasi - Factory Direct Pricing",
    "category": "Export & International",
    "excerpt": "Factory-direct furniture exporter based in Bekasi, Indonesia. Eliminate middlemen and get the best FOB prices for industrial furniture. Minimum order: 1 container (20ft/40ft).",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 195,
    "slug": "custom-hospitality-furniture-indonesia-export-hotels-worldwide",
    "title": "Custom Hospitality Furniture Indonesia - Export Hotels Worldwide",
    "category": "Export & International",
    "excerpt": "Specialized hospitality furniture manufacturer in Indonesia. Custom furniture for hotel lobbies, restaurants, guest rooms, and outdoor areas. Export documentation and shipping support.",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 196,
    "slug": "industrial-metal-furniture-indonesia-powder-coating-export",
    "title": "Industrial Metal Furniture Indonesia - Powder Coating Export",
    "category": "Export & International",
    "excerpt": "Premium powder-coated industrial metal furniture from Indonesia. Durable outdoor-grade finish, rust-resistant, and weather-proof. Perfect for tropical and humid climates worldwide.",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 197,
    "slug": "indonesia-furniture-manufacturer-container-pricing-export",
    "title": "Indonesia Furniture Manufacturer - Container Pricing & Export",
    "category": "Export & International",
    "excerpt": "Transparent container pricing for furniture export from Indonesia. 20ft and 40ft container options available. We handle documentation, quality control, and loading supervision.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 198,
    "slug": "cafe-furniture-manufacturer-indonesia-export-international",
    "title": "Cafe Furniture Manufacturer Indonesia - Export International",
    "category": "Export & International",
    "excerpt": "Leading cafe furniture manufacturer in Indonesia exporting to cafes worldwide. Industrial-style tables, chairs, bar sets, and display racks. Custom design and branding available.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 199,
    "slug": "indonesian-steel-furniture-supplier-export-quality-assurance",
    "title": "Indonesian Steel Furniture Supplier - Export Quality Assurance",
    "category": "Export & International",
    "excerpt": "Quality-assured steel furniture supplier in Indonesia. ISO-standard manufacturing process, pre-shipment inspection, and quality documentation for international export.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 200,
    "slug": "outdoor-furniture-manufacturer-indonesia-weather-resistant-export",
    "title": "Outdoor Furniture Manufacturer Indonesia - Weather Resistant Export",
    "category": "Export & International",
    "excerpt": "Weather-resistant outdoor furniture manufacturer in Indonesia. Specialized in powder-coated steel furniture for tropical climates. Export to resorts, hotels, and restaurants globally.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 201,
    "slug": "furniture-factory-bekasi-indonesia-export-international-buyers",
    "title": "Furniture Factory Bekasi Indonesia - Export for International Buyers",
    "category": "Export & International",
    "excerpt": "Modern furniture factory in Bekasi serving international buyers. 25 years experience, 10,000+ sqm production facility. We handle custom design, manufacturing, and export logistics.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 202,
    "slug": "indonesian-furniture-exporter-fob-cif-pricing-international",
    "title": "Indonesian Furniture Exporter - FOB & CIF Pricing International",
    "category": "Export & International",
    "excerpt": "Transparent FOB and CIF pricing from Indonesian furniture exporter. Calculate landed cost easily. We work with freight forwarders worldwide for competitive shipping rates.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 203,
    "slug": "commercial-furniture-supplier-indonesia-export-documentation",
    "title": "Commercial Furniture Supplier Indonesia - Export Documentation",
    "category": "Export & International",
    "excerpt": "Complete export documentation support for commercial furniture buyers. Certificate of Origin, Packing List, Invoice, and custom clearance assistance for international shipping.",
    "image": "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 204,
    "slug": "indonesia-metal-furniture-factory-custom-design-export",
    "title": "Indonesia Metal Furniture Factory - Custom Design Export",
    "category": "Export & International",
    "excerpt": "Custom design metal furniture factory in Indonesia. Work directly with our design team to create unique furniture for your brand. Export-ready with competitive MOQ.",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 205,
    "slug": "wholesale-restaurant-furniture-indonesia-bulk-order-export",
    "title": "Wholesale Restaurant Furniture Indonesia - Bulk Order Export",
    "category": "Export & International",
    "excerpt": "Bulk order discounts for wholesale restaurant furniture from Indonesia. Perfect for restaurant chains, franchises, and hospitality groups expanding internationally.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 206,
    "slug": "indonesian-furniture-manufacturer-sustainable-export-quality",
    "title": "Indonesian Furniture Manufacturer - Sustainable Export Quality",
    "category": "Export & International",
    "excerpt": "Sustainable furniture manufacturing in Indonesia with eco-friendly practices. Recycled materials, water-based finishes, and responsible sourcing. Export certification available.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-04",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 207,
    "slug": "furniture-outdoor-industrial-beli-bekasi-jakarta",
    "title": "Furniture Outdoor Industrial - Beli di Bekasi Jakarta",
    "category": "Commercial Furniture",
    "excerpt": "Beli furniture outdoor industrial berkualitas untuk cafe, restoran, dan area patio. Workshop kami di Bekasi melayani Jakarta dan sekitarnya dengan harga kompetitif.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 208,
    "slug": "patio-furniture-industrial-custom-bekasi",
    "title": "Patio Furniture Industrial Custom di Bekasi - Harga Terbaik",
    "category": "Commercial Furniture",
    "excerpt": "Patio furniture industrial custom untuk area outdoor cafe dan restoran. Workshop Bekasi dengan layanan custom desain sesuai kebutuhan bisnis Anda.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 209,
    "slug": "beli-heavy-duty-commercial-outdoor-furniture-bekasi",
    "title": "Beli Heavy Duty Commercial Outdoor Furniture di Bekasi",
    "category": "Commercial Furniture",
    "excerpt": "Heavy duty commercial outdoor furniture tahan cuaca untuk cafe, restoran, hotel. Kualitas export dengan finishing powder coating premium. Lokasi workshop Bekasi.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 210,
    "slug": "custom-patio-furniture-besi-industrial-jakarta",
    "title": "Custom Patio Furniture Besi Industrial Jakarta - Desain Khusus",
    "category": "Workshop & Production",
    "excerpt": "Jasa custom patio furniture besi industrial untuk Jakarta. Desain khusus sesuai konsep cafe, restoran, atau area outdoor. Workshop Bekasi dengan pengalaman 25 tahun.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 211,
    "slug": "cafe-patio-outdoor-furniture-industrial-bekasi",
    "title": "Cafe Patio Outdoor Furniture Industrial Bekasi - Inspirasi Desain",
    "category": "Design Inspiration",
    "excerpt": "Inspirasi desain cafe patio dengan outdoor furniture industrial. Tips memilih furniture tahan cuaca, gaya industrial modern, dan layout optimal untuk area outdoor.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 212,
    "slug": "gaya-patio-industrial-furniture-outdoor-inspirasi",
    "title": "Gaya Patio Industrial - Furniture Outdoor Inspirasi Desain 2025",
    "category": "Design Inspiration",
    "excerpt": "Gaya patio industrial dengan furniture outdoor modern. Inspirasi desain untuk cafe, restoran, dan area outdoor. Kombinasi material besi dan kayu untuk estetika industrial.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 213,
    "slug": "patio-jakarta-furniture-industrial-custom-area-outdoor",
    "title": "Patio Jakarta - Furniture Industrial Custom untuk Area Outdoor",
    "category": "Local Area Guide",
    "excerpt": "Furniture industrial custom untuk patio Jakarta. Workshop Bekasi melayani area Jakarta dengan layanan survey, custom desain, dan instalasi area outdoor cafe restoran.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 214,
    "slug": "patio-bekasi-furniture-outdoor-industrial-workshop-lokal",
    "title": "Patio Bekasi - Furniture Outdoor Industrial dari Workshop Lokal",
    "category": "Local Area Guide",
    "excerpt": "Furniture outdoor industrial untuk patio Bekasi. Workshop lokal dengan pengalaman 25 tahun, melayani custom desain dan produksi furniture tahan cuaca untuk area outdoor.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 215,
    "slug": "inspirasi-furniture-outdoor-industrial-untuk-patio-cafe",
    "title": "Inspirasi Furniture Outdoor Industrial untuk Patio Cafe",
    "category": "Design Inspiration",
    "excerpt": "Inspirasi furniture outdoor industrial untuk patio cafe. Tips memilih meja, kursi, dan dekorasi industrial yang tahan cuaca dan cocok untuk area outdoor cafe modern.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 216,
    "slug": "cafe-patio-furniture-besi-industrial-murah-jakarta",
    "title": "Cafe Patio Furniture Besi Industrial Murah Jakarta",
    "category": "Commercial Furniture",
    "excerpt": "Cafe patio furniture besi industrial murah untuk Jakarta. Set meja dan kursi outdoor tahan cuaca dengan finishing powder coating. Harga kompetitif dari workshop Bekasi.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 217,
    "slug": "furniture-outdoor-tahan-hujan-industrial-bekasi",
    "title": "Furniture Outdoor Tahan Hujan Industrial Bekasi - Kualitas Premium",
    "category": "Commercial Furniture",
    "excerpt": "Furniture outdoor tahan hujan industrial untuk area patio. Finishing powder coating premium anti-karat, cocok untuk cuaca tropis Indonesia. Workshop Bekasi dengan garansi kualitas.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 218,
    "slug": "custom-patio-set-besi-industrial-jakarta-bekasi",
    "title": "Custom Patio Set Besi Industrial Jakarta Bekasi - Desain Khusus",
    "category": "Workshop & Production",
    "excerpt": "Jasa custom patio set besi industrial untuk Jakarta dan Bekasi. Desain khusus sesuai kebutuhan cafe, restoran, atau area outdoor. Produksi di workshop Bekasi dengan kualitas export.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 219,
    "slug": "gaya-industrial-modern-furniture-outdoor-patio",
    "title": "Gaya Industrial Modern - Furniture Outdoor Patio Inspirasi",
    "category": "Design Inspiration",
    "excerpt": "Gaya industrial modern untuk furniture outdoor patio. Inspirasi desain kombinasi besi dan kayu, warna matte black, dan layout yang fungsional untuk area outdoor modern.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 220,
    "slug": "furniture-outdoor-commercial-heavy-duty-bekasi",
    "title": "Furniture Outdoor Commercial Heavy Duty Bekasi - Tahan Lama",
    "category": "Commercial Furniture",
    "excerpt": "Furniture outdoor commercial heavy duty untuk cafe dan restoran. Konstruksi kuat dengan material besi hollow grade A, finishing powder coating premium. Workshop Bekasi.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 221,
    "slug": "tips-memilih-patio-furniture-industrial-outdoor",
    "title": "Tips Memilih Patio Furniture Industrial Outdoor - Panduan Lengkap",
    "category": "Tips and Trick",
    "excerpt": "Tips memilih patio furniture industrial outdoor yang tepat. Panduan material, finishing, ukuran, dan layout untuk area outdoor cafe, restoran, atau rumah tinggal.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 222,
    "slug": "industrial-outdoor-furniture-indonesia-export-quality",
    "title": "Industrial Outdoor Furniture Indonesia - Export Quality",
    "category": "Export & International",
    "excerpt": "Premium industrial outdoor furniture from Indonesia. Weather-resistant powder coating, heavy-duty construction for commercial use. Export-ready with competitive FOB pricing.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 223,
    "slug": "patio-furniture-manufacturer-indonesia-custom-export",
    "title": "Patio Furniture Manufacturer Indonesia - Custom Export",
    "category": "Export & International",
    "excerpt": "Custom patio furniture manufacturer in Indonesia. We design and manufacture industrial-style outdoor furniture for cafes, restaurants, and hotels worldwide. Export quality guaranteed.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 224,
    "slug": "buy-heavy-duty-commercial-outdoor-furniture-indonesia",
    "title": "Buy Heavy Duty Commercial Outdoor Furniture from Indonesia",
    "category": "Export & International",
    "excerpt": "Heavy duty commercial outdoor furniture from Indonesian manufacturer. Perfect for cafes, restaurants, hotels, and resorts. Weather-resistant, rust-proof, and built to last.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 225,
    "slug": "custom-patio-furniture-indonesia-export-manufacturer",
    "title": "Custom Patio Furniture Indonesia - Export Manufacturer",
    "category": "Export & International",
    "excerpt": "Custom patio furniture manufacturer in Indonesia. Work with our design team to create unique outdoor furniture for your brand. Export-ready with OEM/ODM services available.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 226,
    "slug": "cafe-patio-outdoor-furniture-industrial-style-indonesia",
    "title": "Cafe Patio Outdoor Furniture - Industrial Style Indonesia",
    "category": "Export & International",
    "excerpt": "Industrial-style cafe patio outdoor furniture from Indonesia. Metal tables, chairs, and bar sets with powder coating finish. Perfect for modern cafes and restaurants worldwide.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 227,
    "slug": "industrial-patio-furniture-style-inspiration-design",
    "title": "Industrial Patio Furniture - Style & Inspiration Design",
    "category": "Design Inspiration",
    "excerpt": "Industrial patio furniture style inspiration for modern outdoor spaces. Design ideas combining metal and wood, color schemes, and layout tips for cafes and restaurants.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 228,
    "slug": "outdoor-furniture-indonesia-weather-resistant-tropical",
    "title": "Outdoor Furniture Indonesia - Weather Resistant for Tropical Climate",
    "category": "Export & International",
    "excerpt": "Weather-resistant outdoor furniture from Indonesia designed for tropical climates. Powder coating finish withstands rain, sun, and humidity. Perfect for resorts and hotels in tropical regions.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 229,
    "slug": "commercial-outdoor-furniture-indonesia-bulk-order-export",
    "title": "Commercial Outdoor Furniture Indonesia - Bulk Order Export",
    "category": "Export & International",
    "excerpt": "Bulk order commercial outdoor furniture from Indonesia. Competitive pricing for restaurant chains, hotel groups, and hospitality businesses. Minimum order: 1 container (20ft/40ft).",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 230,
    "slug": "patio-furniture-set-indonesia-custom-manufacturer",
    "title": "Patio Furniture Set Indonesia - Custom Manufacturer",
    "category": "Export & International",
    "excerpt": "Custom patio furniture sets from Indonesian manufacturer. Tables, chairs, and bar sets designed for outdoor cafes and restaurants. OEM/ODM services with competitive MOQ.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 231,
    "slug": "industrial-metal-outdoor-furniture-indonesia-powder-coating",
    "title": "Industrial Metal Outdoor Furniture Indonesia - Powder Coating",
    "category": "Export & International",
    "excerpt": "Industrial metal outdoor furniture from Indonesia with premium powder coating finish. Rust-resistant, UV-protected, and weather-proof. Export quality with international standards.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 232,
    "slug": "cafe-outdoor-furniture-indonesia-export-manufacturer",
    "title": "Cafe Outdoor Furniture Indonesia - Export Manufacturer",
    "category": "Export & International",
    "excerpt": "Cafe outdoor furniture manufacturer in Indonesia. Industrial-style tables, chairs, and bar sets for outdoor dining areas. Export to cafes worldwide with competitive pricing.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 233,
    "slug": "patio-furniture-inspiration-industrial-design-trends",
    "title": "Patio Furniture Inspiration - Industrial Design Trends 2025",
    "category": "Design Inspiration",
    "excerpt": "Patio furniture inspiration with industrial design trends for 2025. Color schemes, material combinations, and layout ideas for modern outdoor spaces in cafes and restaurants.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 234,
    "slug": "outdoor-furniture-manufacturer-indonesia-factory-direct",
    "title": "Outdoor Furniture Manufacturer Indonesia - Factory Direct",
    "category": "Export & International",
    "excerpt": "Factory-direct outdoor furniture manufacturer in Indonesia. Eliminate middlemen and get best FOB prices. We handle custom design, production, and export documentation.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 235,
    "slug": "heavy-duty-outdoor-furniture-indonesia-export-quality",
    "title": "Heavy Duty Outdoor Furniture Indonesia - Export Quality",
    "category": "Export & International",
    "excerpt": "Heavy duty outdoor furniture from Indonesia built for commercial use. Strong construction, durable materials, and weather-resistant finish. Export quality with competitive pricing.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 236,
    "slug": "custom-outdoor-furniture-indonesia-design-manufacturing",
    "title": "Custom Outdoor Furniture Indonesia - Design & Manufacturing",
    "category": "Export & International",
    "excerpt": "Custom outdoor furniture design and manufacturing in Indonesia. From concept to production, we create unique outdoor furniture for your brand. Export services with quality assurance.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2024-11-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 237,
    "slug": "industrial-dining-tables-export-quality-indonesia",
    "title": "Industrial Dining Tables Export Quality from Indonesia",
    "category": "Export & International",
    "excerpt": "Premium industrial dining tables manufactured in Indonesia for export. Combining steel frames with solid wood tops, our dining tables offer durability and modern aesthetics for commercial spaces worldwide.",
    "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 238,
    "slug": "metal-bar-stools-indonesia-manufacturer-exporter",
    "title": "Metal Bar Stools Indonesia - Manufacturer & Exporter",
    "category": "Export & International",
    "excerpt": "High-quality metal bar stools from Indonesia. We manufacture industrial-style bar chairs with robust steel construction, perfect for bars, restaurants, and cafes. Export services available worldwide.",
    "image": "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 239,
    "slug": "industrial-lounge-furniture-indonesia-export",
    "title": "Industrial Lounge Furniture Indonesia - Export Quality",
    "category": "Export & International",
    "excerpt": "Indonesian industrial lounge furniture for commercial spaces. Our lounge sets combine comfort and durability with modern industrial design. Ideal for hotels, lounges, and hospitality projects.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 240,
    "slug": "industrial-storage-solutions-metal-shelving-export",
    "title": "Industrial Storage Solutions - Metal Shelving Export",
    "category": "Export & International",
    "excerpt": "Custom industrial storage solutions from Indonesia. Metal shelving, display racks, and storage cabinets built for commercial use. Durable construction with modern industrial aesthetics.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 241,
    "slug": "custom-metal-furniture-manufacturing-indonesia",
    "title": "Custom Metal Furniture Manufacturing in Indonesia",
    "category": "Export & International",
    "excerpt": "Professional custom metal furniture manufacturing services in Indonesia. From design to production, we create bespoke industrial furniture for international clients with complete export support.",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 242,
    "slug": "industrial-kitchen-cabinets-commercial-export",
    "title": "Industrial Kitchen Cabinets - Commercial Export",
    "category": "Export & International",
    "excerpt": "Industrial-style kitchen cabinets for commercial kitchens. Manufactured in Indonesia with heavy-duty steel construction and professional finishing. Perfect for restaurants and commercial spaces.",
    "image": "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 243,
    "slug": "outdoor-bar-sets-weather-resistant-indonesia",
    "title": "Outdoor Bar Sets - Weather Resistant from Indonesia",
    "category": "Export & International",
    "excerpt": "Premium outdoor bar sets manufactured in Indonesia. Weather-resistant powder coating and galvanized steel construction ensure long-lasting performance in any climate. Export quality guaranteed.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 244,
    "slug": "industrial-daybed-frames-metal-furniture-export",
    "title": "Industrial Daybed Frames - Metal Furniture Export",
    "category": "Export & International",
    "excerpt": "Modern industrial daybed frames from Indonesia. Minimalist steel construction perfect for lounges, hotels, and residential projects. Customizable dimensions and finishes for international markets.",
    "image": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 245,
    "slug": "metal-display-racks-retail-furniture-indonesia",
    "title": "Metal Display Racks - Retail Furniture from Indonesia",
    "category": "Export & International",
    "excerpt": "Industrial display racks and retail shelving from Indonesia. Custom designs for retail stores, showrooms, and commercial spaces. Strong construction with modern industrial styling.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 246,
    "slug": "industrial-work-tables-office-furniture-export",
    "title": "Industrial Work Tables - Office Furniture Export",
    "category": "Export & International",
    "excerpt": "Industrial work tables and office desks manufactured in Indonesia. Steel frame construction with solid wood or metal tops. Perfect for modern offices, co-working spaces, and studios.",
    "image": "https://images.unsplash.com/photo-1595428773629-6e5cf2e1d8f1?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 247,
    "slug": "metal-coat-racks-commercial-furniture-indonesia",
    "title": "Metal Coat Racks - Commercial Furniture Indonesia",
    "category": "Export & International",
    "excerpt": "Industrial metal coat racks and wall hooks from Indonesia. Heavy-duty construction for commercial use in offices, hotels, and restaurants. Modern design with reliable functionality.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 248,
    "slug": "industrial-bookshelf-metal-frame-export-indonesia",
    "title": "Industrial Bookshelf - Metal Frame Export from Indonesia",
    "category": "Export & International",
    "excerpt": "Industrial-style bookshelves with steel frames from Indonesia. Custom sizes and configurations available. Perfect for offices, libraries, and residential projects requiring durable storage solutions.",
    "image": "https://images.unsplash.com/photo-1595428773629-6e5cf2e1d8f1?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 249,
    "slug": "balcony-furniture-space-saving-designs-indonesia",
    "title": "Balcony Furniture - Space-Saving Designs from Indonesia",
    "category": "Export & International",
    "excerpt": "Space-efficient balcony furniture manufactured in Indonesia. Compact bar tables and seating solutions perfect for small outdoor spaces. Weather-resistant and stylish industrial designs.",
    "image": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 250,
    "slug": "steel-frame-furniture-manufacturer-indonesia",
    "title": "Steel Frame Furniture Manufacturer in Indonesia",
    "category": "Export & International",
    "excerpt": "Leading steel frame furniture manufacturer in Indonesia. We produce high-quality industrial furniture with precision welding and professional finishing. Export services to global markets.",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 251,
    "slug": "industrial-bench-seating-commercial-furniture",
    "title": "Industrial Bench Seating - Commercial Furniture",
    "category": "Export & International",
    "excerpt": "Industrial bench seating and corner lounges from Indonesia. Robust steel frames with comfortable cushioning options. Ideal for cafes, restaurants, and commercial waiting areas.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 252,
    "slug": "hospitality-furniture-supplier-indonesia-export",
    "title": "Hospitality Furniture Supplier Indonesia - Export",
    "category": "Export & International",
    "excerpt": "Complete hospitality furniture solutions from Indonesia. We supply hotels, resorts, and restaurants worldwide with durable industrial-style furniture. Custom designs and bulk orders welcome.",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 253,
    "slug": "restaurant-furniture-indonesia-wholesale-export",
    "title": "Restaurant Furniture Indonesia - Wholesale Export",
    "category": "Export & International",
    "excerpt": "Wholesale restaurant furniture manufacturer in Indonesia. Industrial dining tables, chairs, and bar furniture for commercial restaurants. Competitive pricing with consistent quality for bulk orders.",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 254,
    "slug": "cafe-furniture-wholesale-indonesia-manufacturer",
    "title": "Cafe Furniture Wholesale - Indonesia Manufacturer",
    "category": "Export & International",
    "excerpt": "Wholesale cafe furniture from Indonesia. Modern industrial designs perfect for coffee shops and cafes worldwide. Competitive bulk pricing with reliable production timelines and quality control.",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 255,
    "slug": "industrial-furniture-hotels-contract-furniture",
    "title": "Industrial Furniture for Hotels - Contract Furniture",
    "category": "Export & International",
    "excerpt": "Contract furniture solutions for hotels and hospitality projects. Indonesian industrial furniture manufacturer with experience in large-scale hotel furniture projects worldwide.",
    "image": "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 256,
    "slug": "powder-coating-metal-furniture-finishing-indonesia",
    "title": "Powder Coating Metal Furniture - Professional Finishing",
    "category": "Export & International",
    "excerpt": "Expert powder coating services for metal furniture in Indonesia. High-quality finishes with excellent durability and color consistency. We use industrial-grade powder coating for export-quality products.",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 257,
    "slug": "custom-order-process-international-buyers-indonesia",
    "title": "Custom Order Process for International Buyers",
    "category": "Export & International",
    "excerpt": "Complete guide to ordering custom industrial furniture from Indonesia. Learn about our streamlined process from design consultation to international shipping, with quality assurance at every step.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-11-06",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 258,
    "slug": "manufacturer-furniture-custom-order-indonesia-arabic",
    "title": "مصنع الأثاث المعدني المخصص - طلبات حسب الطلب من إندونيسيا",
    "category": "Export & International",
    "excerpt": "مصنع إندونيسي متخصص في الأثاث المعدني الصناعي المخصص. نقدم خدمات التصميم حسب الطلب، التصنيع الداخلي، والتصدير العالمي. جودة التصدير مع ضمان الجودة في كل خطوة.",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 259,
    "slug": "industrial-furniture-exporter-china-manufacturer",
    "title": "印尼工业家具出口商 - 定制制造商直销",
    "category": "Export & International",
    "excerpt": "印尼领先的工业家具制造商和出口商。我们提供定制设计、内部生产控制和全球出口服务。25年经验，1000+项目完成，工厂直供价格，专业品质保证。",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 260,
    "slug": "patio-furniture-manufacturer-japan-export",
    "title": "パティオ家具メーカー - インドネシアからの輸出",
    "category": "Export & International",
    "excerpt": "インドネシアのパティオ家具専門メーカー。カスタムオーダー、屋内生産、国際輸出に対応。屋外対応の高品質パウダーコーティング仕上げで、長期的な耐久性を保証。25年の経験と1000以上のプロジェクト実績。",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 261,
    "slug": "rack-furniture-in-house-production-spain",
    "title": "Fabricante de Muebles de Estantería - Producción Interna en Indonesia",
    "category": "Export & International",
    "excerpt": "Fabricante indonesio especializado en estanterías y racks industriales. Producción interna completa desde diseño hasta acabado. Pedidos personalizados, exportación internacional y precios de fábrica directa. Calidad de exportación garantizada.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 262,
    "slug": "custom-furniture-exporter-france-manufacturer",
    "title": "Exportateur de Mobilier Sur Mesure - Fabricant Indonésien",
    "category": "Export & International",
    "excerpt": "Fabricant et exportateur indonésien de mobilier industriel sur mesure. Production interne complète, commandes personnalisées, et exportation mondiale. 25 ans d'expérience, plus de 1000 projets réalisés. Qualité export garantie avec prix direct usine.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 263,
    "slug": "industrial-rack-manufacturer-korea-export",
    "title": "산업용 랙 제조업체 - 인도네시아 수출 전문",
    "category": "Export & International",
    "excerpt": "인도네시아의 산업용 랙 및 디스플레이 선반 전문 제조업체. 맞춤 주문, 내부 생산, 국제 수출 서비스 제공. 25년 경험, 1000개 이상 프로젝트 완료. 공장 직접 가격과 수출 품질 보장.",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 264,
    "slug": "patio-furniture-exporter-arabic-custom",
    "title": "مصدر أثاث الباحات - طلبات مخصصة من إندونيسيا",
    "category": "Export & International",
    "excerpt": "مصدر إندونيسي متخصص في أثاث الباحات والتراسات. نقدم تصميمات مخصصة، تصنيع داخلي كامل، وتصدير عالمي. أثاث مقاوم للطقس مع طلاء بودرة عالي الجودة. 25 عاماً من الخبرة وأكثر من 1000 مشروع مكتمل.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 265,
    "slug": "in-house-custom-furniture-china-manufacturer",
    "title": "内部定制家具制造商 - 印尼一站式生产",
    "category": "Export & International",
    "excerpt": "印尼内部定制家具制造商，提供从设计到生产的完整内部服务。无中间商，工厂直供价格。定制设计、内部生产控制、质量保证。25年经验，1000+项目，专业出口品质。",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 266,
    "slug": "display-rack-manufacturer-japan-export",
    "title": "ディスプレイラックメーカー - インドネシア輸出専門",
    "category": "Export & International",
    "excerpt": "インドネシアのディスプレイラック・展示棚専門メーカー。小売店、ショールーム、商業スペース向けのカスタムデザイン。内部生産による品質管理、国際輸出対応。競争力のある価格と一貫した品質。",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 267,
    "slug": "complete-furniture-solutions-exporter-spain",
    "title": "Soluciones Completas de Mobiliario - Exportador de Indonesia",
    "category": "Export & International",
    "excerpt": "Exportador indonesio de soluciones completas de mobiliario industrial. Desde diseño personalizado hasta producción interna y exportación internacional. Fabricamos todo: muebles de interior, patio, estanterías, y más. Un solo proveedor para todas sus necesidades de mobiliario comercial.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-11-07",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 268,
    "slug": "pengadaan-furniture-industrial-untuk-proyek-pemerintah-dan-fasilitas-publik",
    "title": "Panduan Pengadaan Furniture Industrial untuk Proyek Pemerintah & Fasilitas Publik",
    "category": "Furniture Information",
    "excerpt": "Panduan lengkap pengadaan furniture industrial untuk kantor dinas, balai kota, fasilitas publik, hingga ruang tunggu pelayanan masyarakat di Jakarta, Bekasi, Depok, Tangerang, Bogor dan Bandung.",
    "image": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&auto=format&fit=crop",
    "date": "2025-11-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 269,
    "slug": "strategi-pengadaan-furniture-cafe-dan-restoran-di-jabodetabek",
    "title": "Strategi Pengadaan Furniture Cafe & Restoran di Jabodetabek",
    "category": "Tips and Trick",
    "excerpt": "Cara merencanakan pengadaan furniture untuk cafe dan restoran di Jakarta, Bekasi, Depok, Tangerang, dan Bogor agar hemat budget tapi tetap terlihat premium dan fungsional.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-11-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 270,
    "slug": "custom-order-furniture-kolam-renang-dan-fasilitas-hotel",
    "title": "Custom Order Furniture Kolam Renang & Fasilitas Hotel",
    "category": "About Furniture",
    "excerpt": "Penjelasan lengkap tentang custom order furniture untuk area kolam renang, rooftop, dan fasilitas pendukung hotel/resort agar tahan cuaca dan tetap aman untuk tamu.",
    "image": "https://images.unsplash.com/photo-1501117716987-c8e1ecb2108a?w=800&auto=format&fit=crop",
    "date": "2025-11-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 271,
    "slug": "pengadaan-furniture-kantor-modern-di-jakarta-bekasi-dan-bandung",
    "title": "Pengadaan Furniture Kantor Modern di Jakarta, Bekasi, dan Bandung",
    "category": "Furniture Information",
    "excerpt": "Checklist pengadaan furniture kantor modern untuk perusahaan di Jakarta, Bekasi, dan Bandung: mulai dari meja kerja, ruang meeting, hingga area kolaborasi dan pantry.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    "date": "2025-11-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 272,
    "slug": "panduan-lengkap-custom-order-furniture-industrial-untuk-proyek-jabodetabek",
    "title": "Panduan Lengkap Custom Order Furniture Industrial untuk Proyek Jabodetabek",
    "category": "Tips and Trick",
    "excerpt": "Langkah demi langkah proses custom order furniture industrial di Mangala Living untuk proyek cafe, kantor, restoran, dan fasilitas publik di seluruh Jabodetabek.",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop",
    "date": "2025-11-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 273,
    "slug": "ru-he-wei-ka-fei-ting-xuan-ze-gong-ye-feng-jia-ju",
    "title": "如何为咖啡厅选择工业风家具：完整选购指南2025",
    "category": "Tips and Trick",
    "excerpt": "选择合适的工业风家具对咖啡厅的成功至关重要。本文将为您详细介绍如何为咖啡厅选择工业风家具，包括材质、尺寸、颜色搭配等关键因素，帮助您打造独特而实用的咖啡厅空间。",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-11-17",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 274,
    "slug": "ding-zhi-gong-ye-jia-ju-de-you-shi-yu-xuan-ze-zhi-nan",
    "title": "定制工业家具的优势与选择指南：为什么选择定制家具",
    "category": "About Furniture",
    "excerpt": "定制工业家具相比成品家具具有独特优势。本文将深入探讨定制工业家具的优势、适用场景、材质选择以及如何选择可靠的定制家具供应商，帮助您做出明智的投资决策。",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-11-18",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 275,
    "slug": "gong-ye-feng-tie-yi-jia-ju-bao-yang-wan-zheng-zhi-nan",
    "title": "工业风铁艺家具保养完整指南：让您的家具历久如新",
    "category": "Tips and Trick",
    "excerpt": "正确的保养方法可以延长工业风铁艺家具的使用寿命。本文提供详细的保养指南，包括日常清洁、防锈处理、定期维护等实用技巧，确保您的家具长期保持美观和功能性。",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2025-11-19",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 276,
    "slug": "naseehat-ikhtiyar-athath-sinaei-maqhaa-asri",
    "title": "نصائح لاختيار أثاث صناعي لمقهى عصري",
    "category": "Tips and Trick",
    "excerpt": "اختيار أثاث صناعي لمقهى ليس مجرد مسألة جمالية، بل يتعلق أيضًا بخلق جو مريح وعملي للعملاء. سيقدم لك هذا الدليل الشامل نصائح عملية لاختيار أثاث صناعي مثالي لمقهى عصري.",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop",
    "date": "2025-11-20",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 277,
    "slug": "ding-zhi-gong-ye-jia-ju-bi-cheng-pin-jia-ju-de-you-shi",
    "title": "定制工业家具相比成品家具的优势：为何选择定制",
    "category": "About Furniture",
    "excerpt": "在决定购买工业家具时，您将面临两个选择：定制或成品。本文深入探讨定制工业家具相比成品家具的独特优势，帮助您做出明智的投资决策。",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    "date": "2025-11-21",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 278,
    "slug": "sangyo-fu-furniture-no-moderu-na-interior-design-inspire",
    "title": "産業風家具を使ったモダンなインテリアデザインのインスピレーション",
    "category": "Furniture Information",
    "excerpt": "産業風ミニマリストのインテリアデザインは、2025年も引き続き人気のトレンドです。工業的な要素とミニマリストの美学を組み合わせることで、モダンで温かみのある、インスタ映えする空間を創り出せます。",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    "date": "2025-11-22",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 279,
    "slug": "como-mantener-muebles-metalicos-industriales-duraderos",
    "title": "Cómo Mantener Muebles Metálicos Industriales Duraderos y de Calidad",
    "category": "Tips and Trick",
    "excerpt": "Los muebles metálicos industriales son una inversión a largo plazo para su negocio o hogar. Con el cuidado adecuado, pueden durar décadas manteniendo su apariencia y funcionalidad. Esta guía completa le enseñará cómo mantener sus muebles metálicos en perfectas condiciones.",
    "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
    "date": "2025-11-23",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 280,
    "slug": "tendances-mobilier-cafe-restaurant-2025",
    "title": "Tendances du Mobilier pour Cafés et Restaurants en 2025",
    "category": "Furniture Information",
    "excerpt": "Découvrez les dernières tendances en matière de mobilier pour cafés et restaurants qui rendront votre établissement F&B encore plus attractif en 2025. Du design industriel minimaliste aux solutions durables, explorez les tendances qui façonnent l'avenir de l'industrie hôtelière.",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "date": "2025-11-24",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 281,
    "slug": "hyeondae-kafe-yeong-gong-yeong-gagu-ui-jangjeom",
    "title": "현대 카페용 공업용 가구의 장점: 왜 공업용 가구를 선택해야 하는가",
    "category": "About Furniture",
    "excerpt": "많은 사업자들이 여전히 수입 가구가 국산 제품보다 품질이 더 좋다고 생각합니다. 그러나 실제로는 인도네시아에서 제조된 고품질 공업용 가구가 많은 장점을 제공합니다. 이 기사에서는 현대 카페를 위한 공업용 가구의 장점을 탐구합니다.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop",
    "date": "2025-11-25",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 282,
    "slug": "indonesian-industrial-furniture-exporter-manufacturer-svlk-certified",
    "title": "Indonesian Industrial Furniture Exporter Manufacturer - SVLK Certified Non-Illegal Logging",
    "category": "About Furniture",
    "excerpt": "Discover why Indonesian industrial furniture manufacturers with SVLK certification are the trusted choice for international buyers. Learn about our commitment to legal, sustainable wood sourcing and non-illegal logging practices.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 283,
    "slug": "yin-ni-gong-ye-jia-ju-chu-kou-sheng-chan-shang-svlk-ren-zheng",
    "title": "印尼工业家具出口制造商 - SVLK认证非非法采伐",
    "category": "About Furniture",
    "excerpt": "了解为什么拥有SVLK认证的印尼工业家具制造商是国际买家的可靠选择。了解我们对合法、可持续木材采购和非非法采伐实践的承诺。",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 284,
    "slug": "indonesia-sangyo-furniture-yushutsu-seizo-sha-svlk-ninsho",
    "title": "インドネシア産業家具輸出メーカー - SVLK認証非違法伐採",
    "category": "About Furniture",
    "excerpt": "SVLK認証を取得したインドネシアの産業家具メーカーが、国際的なバイヤーにとって信頼できる選択肢である理由を発見してください。合法的で持続可能な木材調達と非違法伐採の実践への取り組みについて学びます。",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 285,
    "slug": "exportateur-fabricant-mobilier-industriel-indonesien-svlk-certifie",
    "title": "Exportateur Fabricant de Mobilier Industriel Indonésien - Certifié SVLK Non-Exploitation Forestière Illégale",
    "category": "About Furniture",
    "excerpt": "Découvrez pourquoi les fabricants de mobilier industriel indonésiens certifiés SVLK sont le choix de confiance pour les acheteurs internationaux. Apprenez-en plus sur notre engagement en faveur de l'approvisionnement en bois légal et durable et des pratiques non-illégales d'exploitation forestière.",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    "date": "2025-01-15",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 286,
    "slug": "indonesian-furniture-manufacturer-export-sustainable-wood-svlk",
    "title": "Indonesian Furniture Manufacturer Export - Sustainable Wood Sourcing with SVLK Certification",
    "category": "About Furniture",
    "excerpt": "Learn how Indonesian furniture manufacturers with SVLK certification ensure sustainable wood sourcing and environmental responsibility. Discover the benefits of working with certified exporters for your commercial furniture needs.",
    "image": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&auto=format&fit=crop",
    "date": "2025-01-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 287,
    "slug": "yin-ni-jia-ju-sheng-chan-shang-chu-kou-chi-xu-mu-cai-svlk",
    "title": "印尼家具制造商出口 - SVLK认证的可持续木材采购",
    "category": "About Furniture",
    "excerpt": "了解拥有SVLK认证的印尼家具制造商如何确保可持续木材采购和环境责任。了解与认证出口商合作满足商业家具需求的好处。",
    "image": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&auto=format&fit=crop",
    "date": "2025-01-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 288,
    "slug": "indonesia-furniture-seizo-sha-yushutsu-jizoku-mokuzai-svlk",
    "title": "インドネシア家具メーカー輸出 - SVLK認証による持続可能な木材調達",
    "category": "About Furniture",
    "excerpt": "SVLK認証を取得したインドネシアの家具メーカーが、持続可能な木材調達と環境責任をどのように確保しているかを学びます。商業家具のニーズに対応する認証輸出業者との協力の利点を発見してください。",
    "image": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&auto=format&fit=crop",
    "date": "2025-01-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 289,
    "slug": "fabricant-mobilier-indonesien-export-bois-durable-svlk",
    "title": "Fabricant de Mobilier Indonésien Export - Approvisionnement en Bois Durable avec Certification SVLK",
    "category": "About Furniture",
    "excerpt": "Découvrez comment les fabricants de mobilier indonésiens certifiés SVLK garantissent un approvisionnement en bois durable et une responsabilité environnementale. Découvrez les avantages de travailler avec des exportateurs certifiés pour vos besoins en mobilier commercial.",
    "image": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&auto=format&fit=crop",
    "date": "2025-01-16",
    "author": "Helmi Ramdan",
    "status": "synced"
  },
  {
    "id": 290,
    "slug": "panduan-memilih-furnitur-komersial-jabodetabek",
    "title": "Panduan Memilih Furnitur Komersial di Seluruh Jabodetabek",
    "category": "Tips and Trick",
    "excerpt": "Temukan solusi furnitur industri premium untuk cafe, restoran, hotel, & kantor di seluruh Jabodetabek dengan pengalaman 25+ tahun Mangala Living.",
    "image": "https://images.unsplash.com/photo-1722227155799-cec5b9a946f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwZnVybml0dXJlJTIwaW4lMjBpbmR1c3RyaWFsJTIwY2FmZSUyMGludGVyaW9yfGVufDB8MHx8fDE3Njk4NTIxODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Sebagai pelaku bisnis di Jabodetabek, pemilihan furnitur yang tepat menjadi kunci kesuksesan ruang komersial Anda. Mangala Living dengan pengalaman 25+ tahun melayani berbagai wilayah di Bekasi, Jakarta, dan sekitarnya, siap membantu Anda menciptakan interior yang fungsional dan estetik.",
      "keyPoints": [
        "Pentingnya memahami karakteristik wilayah sebelum memilih furnitur",
        "Material tahan lama khusus untuk kebutuhan komersial",
        "Solusi custom design sesuai kebutuhan spesifik lokasi",
        "Keseimbangan antara kualitas dan budget",
        "Pengalaman 1000+ proyek di berbagai area strategis"
      ],
      "sections": [
        {
          "heading": "Mengapa Lokasi Memengaruhi Pemilihan Furnitur?",
          "content": "Setiap wilayah di Jabodetabek memiliki karakteristik unik yang memengaruhi kebutuhan furnitur:<br><br><strong>Area komersial seperti Grand Galaxy City (GG) atau Lippo Cikarang (LC)</strong> membutuhkan furnitur dengan desain modern dan tahan lama untuk mendukung aktivitas bisnis yang padat.<br><br><strong>Kawasan industri seperti Jababeka (IN) atau MM2100 (IT)</strong> memerlukan material ekstra kuat yang tahan debu dan kelembapan. Sementara <strong>area premium seperti Kemang Pratama (PR)</strong> membutuhkan sentuhan desain eksklusif."
        },
        {
          "heading": "Tips Memilih Furnitur Berdasarkan Area",
          "content": "<strong>1. Untuk Cafe & Restoran di Pusat Kota (Jakarta Pusat/Selatan):</strong><br>Pilih furnitur compact dengan material stainless steel atau powder coating yang tahan perubahan suhu dan kelembapan AC.<br><br><strong>2. Industri di Cikarang & Karawang:</strong><br>Gunakan material HPL atau ironwood yang tahan bahan kimia dan kelembapan tinggi. Desain modular memudahkan penataan ulang sesuai kebutuhan produksi.<br><br><strong>3. Hotel di Area Komersial (MB, GG, ME):</strong><br>Kombinasikan kekuatan material industri dengan sentuhan estetik seperti kombinasi metal dan kayu reclaimed wood."
        },
        {
          "heading": "Solusi Mangala Living untuk Setiap Wilayah",
          "content": "Dengan workshop utama di Setu (Telajung), kami menjangkau:<br><br><strong>Bekasi & Cikarang:</strong> Layanan khusus untuk komplek perumahan seperti Harapan Indah hingga kawasan industri Jababeka<br><br><strong>Jakarta:</strong> Dukungan logistik efisien ke Sudirman, SCBD, Kemang, dan area CBD lainnya<br><br><strong>Wilayah Penyangga:</strong> Pengiriman terjamin ke Depok, Bogor, Karawang, dan Cileungsi<br><br>Kami menyediakan konsultasi <em>gratis</em> termasuk survey lokasi untuk memastikan furnitur sesuai dengan kondisi ruangan Anda."
        },
        {
          "heading": "FAQ: Layanan Mangala Living di Jabodetabek",
          "content": "<strong>Q: Apakah tersedia layanan custom design untuk area terpencil?</strong><br>A: Ya! Kami melayani seluruh Jabodetabek termasuk wilayah Bogor dan Karawang dengan minimal order terjangkau.<br><br><strong>Q: Berapa lama proses produksi untuk area Jakarta?</strong><br>A: Rata-rata 14-21 hari kerja termasuk proses pengiriman, tergantung kompleksitas desain.<br><br><strong>Q: Apakah tersedia garansi untuk pengiriman jarak jauh?</strong><br>A: Semua produk kami bergaransi 2 tahun termasuk untuk pengiriman ke seluruh Jawa."
        }
      ],
      "conclusion": "Tidak peduli lokasi bisnis Anda di Jabodetabek, Mangala Living siap menjadi mitra furnitur komersial terpercaya. Dengan portofolio 1000+ proyek dan workshop modern di Bekasi, kami menjamin kualitas terbaik untuk cafe, restoran, hotel, atau kantor Anda. <strong>Hubungi kami hari ini untuk konsultasi gratis dan penawaran khusus wilayah Anda!</strong>"
    },
    "status": "synced"
  },
  {
    "id": 291,
    "slug": "svlk-certified-furniture-manufacturer-indonesia-mangala-living",
    "title": "Mangala Living: Your SVLK-Certified Furniture Solution",
    "category": "Tips and Trick",
    "excerpt": "Discover how Mangala Living's SVLK certification ensures legal, sustainable furniture for cafes, restaurants, hotels & offices. 25+ years expertise.",
    "image": "https://images.unsplash.com/photo-1764001597000-4576f423d6fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHdvb2RlbiUyMGZ1cm5pdHVyZSUyMGluJTIwbW9kZXJuJTIwY2FmZSUyMGludGVyaW9yfGVufDB8MHx8fDE3Njk4NTIxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "In today's global market, SVLK certification is non-negotiable for Indonesian furniture manufacturers. As a pioneer with 25+ years experience, Mangala Living combines industrial-chic designs with full compliance to meet international standards for commercial clients.",
      "keyPoints": [
        "SVLK certification guarantees legal timber sourcing",
        "Avoid import rejections and penalties with certified furniture",
        "Mangala Living offers 100% compliant custom designs",
        "Transparent supply chain from our Bekasi workshop",
        "Cost-effective solutions for bulk commercial orders"
      ],
      "sections": [
        {
          "heading": "Why SVLK Certification Matters for Your Business",
          "content": "The Indonesian Timber Legality Assurance System (SVLK) isn't just paperwork—it's your safeguard against:<br><br><strong>1. Customs rejections:</strong> 78% of EU and US buyers now require SVLK proof<br><strong>2. Reputation risks:</strong> 62% of consumers boycott non-compliant brands (Greenpeace 2023)<br><strong>3. Legal penalties:</strong> Fines up to $50,000 for illegal timber imports<br><br>For hotels, cafes, and offices sourcing furniture from Indonesia, partnering with SVLK-certified manufacturers like Mangala Living eliminates these risks while supporting sustainable forestry."
        },
        {
          "heading": "3 Tips for Choosing SVLK-Certified Partners",
          "content": "<strong>1. Verify certification validity:</strong> Check the Ministry of Environment and Forestry's official registry—our certification number SVLK-01284-ML remains current since 2017.<br><br><strong>2. Audit production facilities:</strong> Our 5,000m² Bekasi workshop welcomes inspections, showcasing:<br>- Timber traceability systems<br>- Eco-friendly finishing processes<br>- Waste management protocols<br><br><strong>3. Demand customizability:</strong> True certification applies to all products. We execute 100+ custom projects annually while maintaining full compliance."
        },
        {
          "heading": "Mangala Living's Certified Solutions",
          "content": "With 1,023 completed projects since 1999, we deliver:<br><br><strong>Commercial-Grade Durability:</strong> Steel-wood combinations withstand 3x more weight than standard furniture (8,000-cycle durability tests)<br><br><strong>Cost Efficiency:</strong> Bulk orders for hotels/offices receive 15-30% savings through optimized material usage<br><br><strong>Design Flexibility:</strong> From industrial cafe tables to ergonomic office systems—all with:<br>- Material origin documentation<br>- Chain-of-custody records<br>- Automated compliance reporting"
        },
        {
          "heading": "FAQ: SVLK Certification Simplified",
          "content": "<strong>Q: How long does certification take?</strong><br>A: New clients receive SVLK-compliant prototypes within 21 days<br><br><strong>Q: Can we modify designs later?</strong><br>A: All revisions maintain certification—we update documentation automatically<br><br><strong>Q: What about non-wood components?</strong><br>A: Our steel frames and hardware meet equivalent ISO 38200 standards"
        }
      ],
      "conclusion": "Choosing SVLK-certified furniture shouldn't mean compromising on design or budget. Mangala Living proves compliance enhances creativity—not restricts it. <em>Contact our team today</em> for a complimentary consultation and sample catalog featuring 200+ certified commercial designs."
    },
    "status": "synced"
  },
  {
    "id": 292,
    "slug": "cara-memilih-furniture-cafe-berkualitas",
    "title": "Furniture Cafe Berkualitas",
    "category": "Tips and Trick",
    "excerpt": "Mencari furniture cafe dengan kualitas high industrial grade? Berikut beberapa tips!",
    "image": "https://images.unsplash.com/photo-1728399195184-3a44c89b9947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZW5kJTIwaW5kdXN0cmlhbCUyMGNhZmUlMjBmdXJuaXR1cmV8ZW58MHwwfHx8MTc2OTg1MDExNnww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Membuka sebuah cafe membutuhkan banyak persiapan, salah satunya adalah memilih furniture yang tepat. Furniture dengan kualitas high industrial grade sangat penting untuk menjamin kenyamanan dan keamanan pelanggan. Mangala Living, dengan lebih dari 25 tahun pengalaman dan 1000+ proyek, hadir untuk membantu Anda memilih furniture cafe yang berkualitas.",
      "keyPoints": [
        "Pilih furniture dengan bahan yang kuat dan tahan lama",
        "Perhatikan desain dan estetika furniture",
        "Pastikan furniture sesuai dengan tema dan konsep cafe"
      ],
      "sections": [
        {
          "heading": "Mengapa Kualitas Furniture Penting?",
          "content": "Furniture dengan kualitas high industrial grade sangat penting untuk menjamin kenyamanan dan keamanan pelanggan. <strong>Furniture yang kuat dan tahan lama</strong> dapat menahan beban berat dan tahan terhadap kerusakan. Selain itu, furniture yang berkualitas juga dapat meningkatkan estetika dan kesan mewah pada cafe Anda. <br> Mangala Living, dengan pengalaman lebih dari 25 tahun, telah membantu banyak cafe dan restoran di Indonesia untuk memilih furniture yang tepat."
        },
        {
          "heading": "Tips Membeli Furniture Cafe",
          "content": "Saat membeli furniture cafe, ada beberapa hal yang perlu diperhatikan. <em>Pertama</em>, pilih furniture dengan bahan yang kuat dan tahan lama, seperti kayu solid atau besi. <em>Kedua</em>, perhatikan desain dan estetika furniture, pastikan sesuai dengan tema dan konsep cafe Anda. <em>Ketiga</em>, pastikan furniture memiliki ukuran yang tepat untuk ruangan cafe Anda. <br> Dengan memperhatikan hal-hal tersebut, Anda dapat memilih furniture cafe yang berkualitas dan sesuai dengan kebutuhan Anda."
        },
        {
          "heading": "Mangala Living Solusi Furniture Cafe",
          "content": "Mangala Living hadir untuk membantu Anda memilih furniture cafe yang berkualitas. Dengan workshop di Bekasi, kami dapat memproduksi furniture dengan kualitas high industrial grade. <strong>Kami menawarkan desain yang fleksibel</strong> dan dapat disesuaikan dengan kebutuhan Anda. Selain itu, kami juga menawarkan harga yang kompetitif dan layanan purna jual yang baik. <br> Jadi, tunggu apa lagi? Hubungi Mangala Living sekarang juga untuk memilih furniture cafe yang berkualitas!"
        }
      ],
      "conclusion": "Membeli furniture cafe dengan kualitas high industrial grade sangat penting untuk menjamin kenyamanan dan keamanan pelanggan. Dengan memperhatikan tips di atas dan memilih Mangala Living sebagai solusi furniture cafe, Anda dapat memiliki cafe yang nyaman dan sukses. <strong>Hubungi kami sekarang</strong> untuk memilih furniture cafe yang berkualitas dan sesuai dengan kebutuhan Anda!"
    },
    "status": "synced"
  },
  {
    "id": 293,
    "slug": "mengapa-memilih-mangala-living-furniture-komersial",
    "title": "Mengapa Memilih Mangala Living untuk Furniture Komersial Anda?",
    "category": "Tips and Trick",
    "excerpt": "Temukan mengapa Mangala Living menjadi pilihan utama untuk furniture komersial berkualitas sejak 1999. Solusi custom untuk cafe, restoran, hotel, dan kantor.",
    "image": "https://images.unsplash.com/photo-1686090589687-70433606e732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3IlMjB3aXRoJTIwY3VzdG9tJTIwZnVybml0dXJlfGVufDB8MHx8fDE3Njk4NTIyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Memilih furniture komersial yang tepat adalah investasi penting bagi bisnis Anda. Mangala Living telah menjadi mitra terpercaya bagi ribuan kafe, restoran, hotel, dan kantor selama lebih dari 25 tahun dengan menyediakan furniture industrial berkualitas tinggi yang tahan lama dan estetis.",
      "keyPoints": [
        "25+ tahun pengalaman dalam furniture komersial",
        "1000+ proyek sukses di seluruh Indonesia",
        "Workshop custom di Bekasi dengan teknologi modern",
        "Material berkualitas tinggi untuk ketahanan maksimal",
        "Desain industrial yang timeless dan elegan"
      ],
      "sections": [
        {
          "heading": "Pengalaman dan Reputasi yang Terbukti",
          "content": "Mangala Living telah berdiri sejak tahun 1999, menjadikan kami salah satu pelopor dalam industri furniture komersial di Indonesia. Dengan pengalaman lebih dari 25 tahun, kami telah melayani lebih dari 1000 proyek di seluruh negeri, mulai dari kafe kecil hingga hotel bintang lima.<br><br><strong>Komitmen kami terhadap kualitas tidak pernah berubah:</strong> setiap furniture yang kami produksi melewati proses quality control yang ketat. Workshop kami di Bekasi dilengkapi dengan teknologi modern dan tenaga ahli yang berpengalaman, memastikan setiap produk memenuhi standar tertinggi."
        },
        {
          "heading": "Material Berkualitas Tinggi untuk Ketahanan Maksimal",
          "content": "Salah satu alasan utama mengapa pelanggan memilih Mangala Living adalah penggunaan material premium yang kami pilih dengan cermat. Untuk furniture industrial, kami menggunakan bahan-bahan seperti:<br><br>- <strong>Baja berlapis powder coating</strong> untuk ketahanan karat dan korosi<br>- <strong>Kayu solid berkualitas</strong> dengan finishing tahan air dan noda<br>- <strong>Aluminium grade komersial</strong> untuk furniture outdoor<br><br>Material-material ini tidak hanya memberikan tampilan industrial yang otentik, tetapi juga memastikan furniture Anda tahan terhadap penggunaan berat di lingkungan komersial."
        },
        {
          "heading": "Desain Custom yang Sesuai Kebutuhan Bisnis Anda",
          "content": "Setiap bisnis memiliki karakteristik unik, dan furniture Anda seharusnya mencerminkan identitas tersebut. Di Mangala Living, kami menawarkan layanan desain custom yang memungkinkan Anda memiliki furniture yang benar-benar sesuai dengan visi dan kebutuhan ruang Anda.<br><br><strong>Proses desain kami meliputi:</strong> konsultasi awal, pembuatan konsep 3D, pemilihan material, dan produksi. Kami bekerja sama dengan tim interior design Anda atau menyediakan jasa desain internal untuk memastikan hasil akhir yang sempurna. Dari kafe minimalis modern hingga restoran bergaya vintage industrial, kami memiliki solusi untuk setiap konsep."
        },
        {
          "heading": "Efisiensi Biaya dan Nilai Investasi Jangka Panjang",
          "content": "Meskipun furniture komersial berkualitas tinggi memerlukan investasi awal yang lebih besar, Mangala Living menawarkan nilai yang luar biasa dalam jangka panjang. Furniture kami dirancang untuk:<br><br>- <strong>Tahan lama</strong> dengan perawatan minimal<br>- <strong>Mengurangi biaya penggantian</strong> yang sering<br>- <strong>Mempertahankan nilai estetika</strong> selama bertahun-tahun<br>- <strong>Meningkatkan pengalaman pelanggan</strong> dan citra bisnis<br><br>Dengan memilih Mangala Living, Anda tidak hanya membeli furniture, tetapi berinvestasi dalam aset bisnis yang akan memberikan return on investment yang signifikan."
        }
      ],
      "conclusion": "Dengan pengalaman lebih dari 25 tahun, material berkualitas tinggi, desain custom, dan komitmen terhadap kepuasan pelanggan, Mangala Living adalah pilihan yang tepat untuk furniture komersial Anda. Hubungi tim kami hari ini untuk konsultasi gratis dan mulailah transformasi ruang bisnis Anda menjadi lebih menarik dan fungsional."
    },
    "status": "synced"
  },
  {
    "id": 294,
    "slug": "furniture-industri-indonesia-tren-strategi-bisnis",
    "title": "Furniture Industri di Indonesia: Tren & Strategi Bisnis",
    "category": "Tips and Trick",
    "excerpt": "Pelajari tren furniture industri di Indonesia dan strategi bisnis untuk cafe, restoran, dan hotel. Mangala Living hadir dengan solusi premium sejak 1999.",
    "image": "https://images.unsplash.com/photo-1616059214795-96778fb58dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBpbiUyMGluZG9uZXNpYXxlbnwwfDB8fHwxNzY5ODUyMjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Industri furniture di Indonesia mengalami pertumbuhan pesat, terutama segmen furniture industri yang menggabungkan estetika urban dengan fungsionalitas tinggi. Dengan pengalaman lebih dari 25 tahun, Mangala Living memahami dinamika pasar furniture industri di tanah air.",
      "keyPoints": [
        "Tren furniture industri semakin diminati di sektor hospitality",
        "Custom design menjadi kunci keunggulan kompetitif",
        "Bahan berkualitas tinggi menentukan daya tahan furniture",
        "Efisiensi biaya melalui produksi lokal",
        "Desain ergonomis penting untuk kenyamanan pelanggan"
      ],
      "sections": [
        {
          "heading": "Mengapa Furniture Industri Semakin Populer di Indonesia?",
          "content": "Furniture industri menggabungkan kekuatan material seperti besi, baja, dan kayu solid dengan desain minimalis yang timeless. Di Indonesia, tren ini mulai merambah cafe-cafe urban, restoran modern, dan hotel boutique yang ingin menampilkan kesan maskulin dan autentik.<br><br>Menurut data Asosiasi Industri Permebelan Indonesia (ASMINDO), permintaan furniture bergaya industri meningkat 15% setiap tahun, terutama di kota-kota besar seperti Jakarta, Bandung, dan Surabaya. Mangala Living telah menjadi bagian dari pertumbuhan ini dengan menyediakan solusi custom yang sesuai dengan karakteristik bisnis lokal."
        },
        {
          "heading": "Bahan Baku Berkualitas untuk Furniture Industri",
          "content": "Kunci dari furniture industri yang tahan lama terletak pada pemilihan bahan baku. Material seperti besi hollow, stainless steel, kayu jati, dan reclaimed wood menjadi pilihan utama karena ketahanannya terhadap cuaca tropis Indonesia.<br><br>Di workshop Mangala Living yang berlokasi di Bekasi, kami menggunakan teknologi powder coating untuk melindungi rangka besi dari karat dan korosi. Proses ini tidak hanya meningkatkan daya tahan tetapi juga memberikan pilihan finishing yang beragam, mulai dari matte black hingga copper tone yang sedang tren."
        },
        {
          "heading": "Custom Design: Kunci Sukses Bisnis Hospitality",
          "content": "Setiap cafe, restoran, atau hotel memiliki karakter unik yang perlu tercermin dalam furniturnya. Custom design memungkinkan bisnis untuk memiliki furniture yang tidak hanya fungsional tetapi juga menjadi bagian dari brand identity.<br><br>Mangala Living telah menyelesaikan lebih dari 1000 proyek custom furniture untuk berbagai konsep bisnis. Dari meja bar dengan tinggi presisi untuk kenyamanan bartender, hingga kursi dengan sandaran ergonomis untuk pengunjung yang ingin berlama-lama, setiap detail dirancang berdasarkan kebutuhan spesifik."
        },
        {
          "heading": "Efisiensi Biaya Melalui Produksi Lokal",
          "content": "Salah satu keuntungan memilih furniture industri produksi lokal adalah efisiensi biaya tanpa mengorbankan kualitas. Dengan produksi di Indonesia, Mangala Living dapat menawarkan harga kompetitif karena tidak ada biaya impor dan pajak tambahan.<br><br>Selain itu, produksi lokal memungkinkan fleksibilitas dalam pemesanan, baik untuk skala kecil maupun besar. Waktu produksi yang lebih cepat (rata-rata 2-4 minggu) juga memungkinkan bisnis untuk segera mengoperasikan ruang mereka tanpa menunggu lama."
        },
        {
          "heading": "Tips Memilih Furniture Industri untuk Bisnis Anda",
          "content": "Pertama, tentukan konsep dan target pasar Anda. Cafe anak muda mungkin membutuhkan furniture yang playful dengan aksen warna, sementara restoran fine dining memerlukan furniture yang elegan dan minimalis.<br><br>Kedua, perhatikan ergonomi. Furniture yang nyaman akan membuat pelanggan betah berlama-lama, meningkatkan potensi penjualan. Ketiga, pilih material yang mudah perawatannya. Di iklim tropis, material yang tahan terhadap kelembapan dan panas sangat penting.<br><br>Terakhir, pastikan vendor memiliki reputasi baik dan pengalaman dalam mengerjakan proyek serupa. Mangala Living dengan pengalaman 25+ tahun siap menjadi partner bisnis Anda."
        }
      ],
      "conclusion": "Furniture industri bukan sekadar tren, tetapi investasi jangka panjang untuk bisnis hospitality Anda. Dengan kombinasi desain yang timeless, material berkualitas, dan customisasi yang tepat, furniture industri dapat meningkatkan pengalaman pelanggan sekaligus memperkuat brand identity. Hubungi Mangala Living hari ini untuk konsultasi gratis dan temukan solusi furniture industri yang sesuai dengan visi bisnis Anda."
    },
    "status": "synced"
  },
  {
    "id": 295,
    "slug": "مانجالا-ليفينج-هي-الحل-الأفضل",
    "title": "مانجالا ليفينج هي الحل الأفضل",
    "category": "Tips and Trick",
    "excerpt": "مانجالا ليفينج توفر أفضل حلول الأثاث للقهاوي والمطاعم والفنادق والمكاتب",
    "image": "https://images.unsplash.com/photo-1723465313715-586dd9689b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfHx8MTc2OTg1MDEwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "هل تبحث عن حلول أثاث متقدمة وذات جودة عالية لبيئة عملك أو مكانك؟ مانجála ليفينج هي الشركة الرائدة في صناعة الأثاث الصناعي والمتخصصة في توفير حلول أثاث مخصصة ومتطورة. مع أكثر من 25 عامًا من الخبرة في الصناعة، قامت مانجála ليفينج بتنفيذ أكثر من 1000 مشروع ناجح في جميع أنحاء العالم.",
      "keyPoints": [
        "مانجála ليفينج توفر حلول أثاث مخصصة",
        "الأثاث الصناعي ذو جودة عالية ومتين",
        "توفير حلول متطورة واقتصادية"
      ],
      "language": "ar",
      "sections": [
        {
          "heading": "لماذا مانجála ليفينج هي الحل الأفضل؟",
          "content": "مانجála ليفينج هي الشركة الرائدة في صناعة الأثاث الصناعي، وتقدم حلول أثاث متقدمة وذات جودة عالية. مع أكثر من 25 عامًا من الخبرة في الصناعة، قامت مانجála ليفينج بتنفيذ أكثر من 1000 مشروع ناجح في جميع أنحاء العالم. <br> وتقدم مانجála ليفينج مجموعة واسعة من المنتجات، بما في ذلك الأثاث للقهاوي والمطاعم والفنادق والمكاتب. <br> وكل منتج يتم تصميمه وتصنيعه بعناية ليلبي احتياجات العملاء وت満ية تطلعاتهم."
        },
        {
          "heading": "حلول أثاث مخصصة",
          "content": "مانجála ليفينج توفر حلول أثاث مخصصة تلبي احتياجات العملاء وت满یة تطلعاتهم. <br> ويمكن للعملاء الاختيار من بين مجموعة واسعة من التصاميم والأنماط، أو العمل مع فريق التصميم في مانجála ليفينج لإنشاء تصميم مخصص. <br> ويتسم الأثاث الصناعي بمتانته وثباته، مما يجعله خيارًا مثاليًا للبيئات ذات الحركة الكبيرة، مثل القهاوي والمطاعم والفنادق."
        },
        {
          "heading": "الأثاث الصناعي ذو جودة عالية",
          "content": "الأثاث الصناعي من مانجála ليفينج يتميز بจودته العالية ومتانه. <br> ويتم تصنيع جميع المنتجات باستخدام مواد ذات جودة عالية، وتخضعすべて للاختبارات القاسية لضمان جودتها ومتانتها. <br> ويتسم الأثاث الصناعي أيضًا بسهولة الصيانة والنقل، مما يجعله خيارًا مثاليًا للبيئات التي تتطلب灵活ية وسرعة التغيير."
        },
        {
          "heading": "توفير حلول متطورة واقتصادية",
          "content": "مانجála ليفينج توفر حلول أثاث متطورة واقتصادية. <br> ويمكن للعملاء الاختيار من بين مجموعة واسعة من المنتجات، بما في ذلك الأثاث المستخدم والمستعمل، أو العمل مع فريق التصميم في مانجála ليفينج لإنشاء تصميم مخصص. <br> ويتسم الأثاث الصناعي بمتانته وثباته، مما يجعله خيارًا مثاليًا للبيئات ذات الحركة الكبيرة، مثل القهاوي والمطاعم والفنادق."
        }
      ],
      "conclusion": "إذا كنت تبحث عن حلول أثاث متقدمة وذات جودة عالية، ف曼جála ليفينج هي الخيار الأمثل. <strong>توفر مانجála ليفينج حلول أثاث مخصصة</strong> وذات جودة عالية، وتتميز بمتانتها وثباتها. <em>لا تتردد في الاتصال بنا</em> للاستفادة من خبرتنا وخدماتنا في مجال الأثاث الصناعي."
    },
    "status": "synced"
  },
  {
    "id": 296,
    "slug": "tips-memilih-furniture-teak",
    "title": "Tips Memilih Furniture Teak",
    "category": "Tips and Trick",
    "excerpt": "Panduan memilih furniture teak yang tahan lama dan berkualitas",
    "image": "https://images.unsplash.com/photo-1730773066960-21c0bfb3a103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdGVhayUyMHdvb2QlMjBmdXJuaXR1cmV8ZW58MHwwfHx8MTc2OTg0ODQzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Furniture teak menjadi pilihan populer untuk dekorasi interior karena kekuatan dan keindahannya. Namun, memilih furniture teak yang tepat bisa menjadi tantangan. Dalam artikel ini, kita akan membahas tips dan trik memilih furniture teak yang tahan lama dan berkualitas.",
      "keyPoints": [
        "Pilihlah furniture teak yang terbuat dari bahan baku yang berkualitas",
        "Perhatikan finishing dan desain furniture teak",
        "Pastikan furniture teak memiliki ketahanan yang baik terhadap rayap dan kelembaban"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Furniture Teak Begitu Populer?",
          "content": "Furniture teak menjadi pilihan populer karena kekuatan dan keindahannya. <strong>Teak</strong> adalah jenis kayu yang sangat tahan lama dan memiliki ketahanan yang baik terhadap rayap dan kelembaban. Selain itu, furniture teak juga memiliki desain yang elegan dan mewah, sehingga sangat cocok untuk dekorasi interior rumah, kafe, restoran, dan hotel. <br> Mangala Living, sebagai produsen furniture industri yang telah berpengalaman lebih dari 25 tahun, telah memproduksi lebih dari 1000 proyek furniture teak yang berkualitas dan tahan lama."
        },
        {
          "heading": "Tips Memilih Furniture Teak yang Tepat",
          "content": "Dalam memilih furniture teak, ada beberapa hal yang perlu diperhatikan. <em>Pertama</em>, pilihlah furniture teak yang terbuat dari bahan baku yang berkualitas. <em>Kedua</em>, perhatikan finishing dan desain furniture teak. <em>Ketiga</em>, pastikan furniture teak memiliki ketahanan yang baik terhadap rayap dan kelembaban. <br> Dengan memperhatikan hal-hal tersebut, Anda dapat memilih furniture teak yang tepat dan tahan lama."
        },
        {
          "heading": "Mangala Living Solusi Furniture Teak Anda",
          "content": "Mangala Living adalah produsen furniture industri yang telah berpengalaman lebih dari 25 tahun. Kami memiliki workshop di Bekasi dan telah memproduksi lebih dari 1000 proyek furniture teak yang berkualitas dan tahan lama. <br> Kami menawarkan solusi furniture teak yang sesuai dengan kebutuhan Anda, mulai dari desain yang elegan dan mewah hingga ketahanan yang baik terhadap rayap dan kelembaban. <br> Dengan Mangala Living, Anda dapat memiliki furniture teak yang berkualitas dan tahan lama, serta mendapatkan layanan yang memuaskan."
        }
      ],
      "conclusion": "Dengan memperhatikan tips dan trik memilih furniture teak yang tepat, Anda dapat memiliki furniture teak yang berkualitas dan tahan lama. Mangala Living adalah solusi furniture teak Anda, dengan pengalaman lebih dari 25 tahun dan lebih dari 1000 proyek yang telah diselesaikan. <br> Jangan ragu untuk menghubungi kami untuk mendapatkan informasi lebih lanjut tentang furniture teak yang sesuai dengan kebutuhan Anda."
    },
    "status": "synced"
  },
  {
    "id": 297,
    "slug": "xin-jia-po-ka-fei-guan-lu-tai-jia-ju-jiao-yu",
    "title": "新加坡咖啡馆露台家具教育",
    "category": "Tips and Trick",
    "excerpt": "了解新加坡咖啡馆露台家具的选择和设计",
    "image": "https://images.unsplash.com/photo-1649301980208-86c868b4f30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvdXRkb29yJTIwY2FmZSUyMGZ1cm5pdHVyZSUyMHNpbmdhcG9yZXxlbnwwfDB8fHwxNzY5ODUxOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31 09:32",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "新加坡的咖啡馆业越来越蓬勃发展，许多咖啡馆老板都在寻找合适的露台家具来打造独特的氛围。然而，选择合适的露台家具并不是一件容易的事。本文将提供一些关于新加坡咖啡馆露台家具的教育和建议，帮助您做出更好的选择。",
      "keyPoints": [
        "了解新加坡咖啡馆露台家具的特点",
        "选择耐用和易于维护的材料",
        "设计要符合咖啡馆的整体风格"
      ],
      "language": "zh",
      "sections": [
        {
          "heading": "新加坡咖啡馆露台家具的特点",
          "content": "新加坡的咖啡馆通常都有一个小巧的露台区域，<strong>因此选择家具时需要考虑空间的限制</strong>。此外，新加坡的气候也比较热烈，<em>所以家具需要能够抵御阳光和雨水的影响</em>。综上所述，新加坡咖啡馆露台家具需要耐用、易于维护，并且能够适应不同的天气条件。<br><br> Mangala Living作为一家具有25年经验的工业家具制造商，我们已经完成了1000多个项目，包括许多新加坡的咖啡馆项目。我们的工作室位于Bekasi，我们的团队能够提供专业的设计和制造服务，帮助您创造独特的露台家具。",
          "image": "https://images.unsplash.com/photo-1649301980208-86c868b4f30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY2FmZSUyMGZ1cm5pdHVyZSUyMHNpbmdhcG9yZSUyMHRyb3BpY2FsJTIwcmFpbnxlbnwwfDB8fHwxNzY5ODU1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "outdoor cafe furniture singapore tropical rain"
        },
        {
          "heading": "选择合适的材料",
          "content": "选择合适的材料是设计露台家具的关键。新加坡的气候比较热烈，<strong>所以需要选择能够抵御阳光和雨水的材料</strong>。例如，<em>金属和合成材料</em>能够提供良好的耐用性和维护性。另外，<strong>木材</strong>也是一种不错的选择，特别是经过特殊处理的木材，可以提供更好的抗腐蚀性和耐用性。<br><br> 除了材料的选择，<em>颜色和设计</em>也是非常重要的。颜色需要能够与咖啡馆的整体风格相符，而设计需要能够提供舒适和美观的体验。",
          "image": "https://images.unsplash.com/photo-1722310530288-653a5b7a56be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxkdXJhYmxlJTIwb3V0ZG9vciUyMGZ1cm5pdHVyZSUyMGluJTIwbW9kZXJuJTIwY2FmZSUyMHNldHRpbmd8ZW58MHwwfHx8MTc2OTg1NTUyNHww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "durable outdoor furniture in modern cafe setting"
        },
        {
          "heading": "Mangala Living的解决方案",
          "content": "Mangala Living提供了一系列的露台家具解决方案，包括自定义设计和制造服务。我们的团队能够提供专业的设计和制造服务，帮助您创造独特的露台家具。我们使用高质量的材料，确保家具能够提供良好的耐用性和维护性。<br><br> 此外，我们的工作室位于Bekasi，我们能够提供快速和效率的制造和交付服务。我们的目标是帮助您创造一个独特和舒适的露台区域，吸引更多的顾客和提高您的业务表现。"
        }
      ],
      "conclusion": "选择合适的露台家具对于新加坡的咖啡馆来说是非常重要的。通过了解新加坡咖啡馆露台家具的特点，选择合适的材料和设计，您能够创造一个独特和舒适的露台区域。Mangala Living作为一家具有25年经验的工业家具制造商，我们能够提供专业的设计和制造服务，帮助您实现您的目标。请联系我们，获取更多信息和开始您的项目。"
    },
    "status": "synced"
  },
  {
    "id": 298,
    "slug": "hollowline-indonesia-berkualitas",
    "title": "Hollowline Indonesia Berkualitas",
    "category": "Tips and Trick",
    "excerpt": "Tips memilih hollowline Indonesia terbaik untuk dekorasi interior",
    "image": "https://images.unsplash.com/photo-1668776050654-8d461997ac1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBpbmRvbmVzaWF8ZW58MHwwfHx8MTc2OTg1Nzg4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31 11:11",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Dalam mendesain interior, hollowline menjadi salah satu elemen yang penting untuk mempercantik ruangan. Mangala Living, dengan pengalaman lebih dari 25 tahun, menyediakan hollowline Indonesia berkualitas tinggi untuk cafe, restaurant, hotel, dan kantor. Berikut beberapa tips untuk memilih hollowline yang tepat untuk proyek Anda.",
      "keyPoints": [
        "Memilih hollowline yang sesuai dengan tema interior",
        "Menggunakan bahan yang tahan lama dan awet",
        "Mengoptimalkan ruang dengan desain yang tepat"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Hollowline Penting?",
          "content": "Hollowline dapat mempercantik ruangan dan membuatnya terlihat lebih modern. Dengan menggunakan hollowline, Anda dapat menambahkan unsur estetika pada interior tanpa mengorbankan fungsionalitas. Mangala Living menyediakan berbagai jenis hollowline yang dapat disesuaikan dengan kebutuhan Anda.",
          "image": "https://images.unsplash.com/photo-1653022860307-0ccb6379f78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxob2xsb3dsaW5lJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfHx8MTc2OTg1Nzg4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "hollowline interior design"
        },
        {
          "heading": "Tips Memilih Hollowline yang Tepat",
          "content": "Dalam memilih hollowline, ada beberapa hal yang perlu dipertimbangkan. Pertama, pastikan Anda memilih hollowline yang sesuai dengan tema interior. Kedua, pilih bahan yang tahan lama dan awet. Mangala Living menggunakan bahan-bahan yang berkualitas tinggi untuk memastikan hollowline dapat bertahan lama."
        },
        {
          "heading": "Mengoptimalkan Ruang dengan Desain yang Tepat",
          "content": "Dengan desain yang tepat, Anda dapat mengoptimalkan ruang dan membuatnya terlihat lebih luas. Mangala Living menyediakan layanan desain yang dapat membantu Anda menciptakan ruangan yang sesuai dengan kebutuhan Anda. Kami memiliki pengalaman lebih dari 1000 proyek dan workshop di Bekasi yang siap membantu Anda.",
          "productId": 4
        }
      ],
      "conclusion": "Dengan memilih hollowline Indonesia berkualitas dan menggunakan tips yang tepat, Anda dapat menciptakan ruangan yang cantik dan fungsional. Mangala Living siap membantu Anda dalam menciptakan ruangan yang sesuai dengan kebutuhan Anda. Kunjungi kami sekarang juga untuk mendapatkan informasi lebih lanjut tentang hollowline Indonesia berkualitas."
    },
    "status": "synced"
  },
  {
    "id": 299,
    "slug": "pourquoi-acheter-des-meubles-en-indonesie",
    "title": "Meubles Indonésiens",
    "category": "Tips and Trick",
    "excerpt": "Découvrez les avantages de l'achat de meubles en Indonésie, avec son héritage culturel riche et ses matières premières de qualité",
    "image": "https://images.unsplash.com/photo-1709739320077-7fa1ab8bdef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdGVha3dvb2QlMjBmdXJuaXR1cmUlMjBjcmFmdHNtYW5zaGlwfGVufDB8MHx8fDE3Njk4NTkyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31 11:33",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "L'Indonésie est réputée pour son riche héritage culturel et ses matières premières de qualité, notamment le teck et le mahoni. Les meubles indonésiens sont connus pour leur beauté, leur durabilité et leur authenticité. Dans cet article, nous allons explorer les raisons pour lesquelles vous devriez considérer l'achat de meubles en Indonésie.",
      "keyPoints": [
        "Héritage culturel riche et authenticité",
        "Matières premières de qualité, notamment le teck et le mahoni",
        "Durabilité et longévité des meubles indonésiens",
        "Designs uniques et personnalisables",
        "Prix compétitifs et qualité supérieure"
      ],
      "language": "fr",
      "sections": [
        {
          "heading": "L'héritage culturel indonésien",
          "content": "L'Indonésie est un pays aux mille îles, avec une riche histoire et une culture diverse. Les meubles indonésiens reflètent cette diversité, avec des designs qui intègrent des éléments traditionnels et modernes. Le teck et le mahoni sont des matières premières de choix pour les meubles indonésiens, connus pour leur beauté et leur durabilité. <br> Les meubles indonésiens sont souvent ornés de motifs traditionnels, tels que les batiks et les ikats, qui ajoutent une touche d'authenticité et de culture à chaque pièce.",
          "image": "https://images.unsplash.com/photo-1643760066062-b65effdd2e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBmdXJuaXR1cmUlMjBwYXR0ZXJuc3xlbnwwfDB8fHwxNzY5ODU5MjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "indonesian traditional furniture patterns"
        },
        {
          "heading": "Les avantages des meubles indonésiens",
          "content": "Les meubles indonésiens offrent de nombreux avantages, notamment leur durabilité et leur longévité. Les meubles en teck et en mahoni sont résistants aux insectes et aux champignons, et peuvent durer des décennies avec un minimum d'entretien. <br> De plus, les meubles indonésiens sont souvent personnalisables, ce qui permet aux clients de choisir les designs et les matières premières qui leur conviennent le mieux. Les prix des meubles indonésiens sont également compétitifs, ce qui les rend accessibles à un large public."
        },
        {
          "heading": "Mangala Living, votre partenaire pour les meubles indonésiens",
          "content": "Mangala Living est une entreprise indonésienne spécialisée dans la fabrication de meubles de haute qualité. Avec plus de 25 ans d'expérience et plus de 1000 projets réalisés, Mangala Living est votre partenaire idéal pour les meubles indonésiens. <br> Notre équipe de designers et d'artisans travaille en étroite collaboration pour créer des meubles uniques et personnalisés qui répondent aux besoins de chaque client. Nous utilisons uniquement des matières premières de qualité, notamment le teck et le mahoni, pour garantir la durabilité et la longévité de nos meubles."
        },
        {
          "heading": "Conseils pour l'achat de meubles indonésiens",
          "content": "Lorsque vous achetez des meubles indonésiens, il est important de considérer plusieurs facteurs, notamment la qualité des matières premières, la durabilité et le design. <br> Il est également important de choisir un fabricant réputé et expérimenté, tel que Mangala Living, pour garantir la qualité et la longévité de vos meubles. <br> Enfin, n'oubliez pas de vérifier les certificats de qualité et les garanties offertes par le fabricant, pour vous assurer que vos meubles sont conformes aux normes internationales.",
          "productId": 12
        }
      ],
      "conclusion": "En conclusion, les meubles indonésiens offrent une combinaison unique de beauté, de durabilité et d'authenticité. Avec leur riche héritage culturel et leurs matières premières de qualité, les meubles indonésiens sont le choix idéal pour ceux qui cherchent à ajouter une touche d'exotisme et de elegance à leur décoration intérieure. <br> Mangala Living est votre partenaire idéal pour les meubles indonésiens, avec notre expérience et notre expertise dans la fabrication de meubles de haute qualité. N'hésitez pas à nous contacter pour en savoir plus sur nos produits et nos services."
    },
    "status": "synced"
  },
  {
    "id": 300,
    "slug": "meubles-industriels-indonesie-retail-france",
    "title": "Meubles Industriels",
    "category": "Tips and Trick",
    "excerpt": "Découvrez les meubles industriels indonésiens parfaits pour le retail en France",
    "image": "https://images.unsplash.com/photo-1762087577636-9d3fb0ab50d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZnVybml0dXJlJTIwZnJlbmNoJTIwcmV0YWlsJTIwc3RvcmUlMjBkZXNpZ258ZW58MHwwfHx8MTc2OTg1OTMxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31 11:34",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Les meubles industriels sont de plus en plus populaires dans le secteur du retail en France. Avec plus de 25 ans d'expérience et plus de 1000 projets réalisés, Mangala Living est l'un des principaux fabricants d'ameublement industriel en Indonésie. Nous proposons des solutions de meubles sur mesure pour les cafés, restaurants, hôtels et bureaux.",
      "keyPoints": [
        "Meubles industriels robustes et durables",
        "Conception sur mesure pour répondre aux besoins spécifiques",
        "Exportation vers la France et d'autres pays",
        "Prix compétitifs et qualité exceptionnelle"
      ],
      "language": "fr",
      "sections": [
        {
          "heading": " Pourquoi les meubles industriels sont-ils importants pour le retail ?",
          "content": "Les meubles industriels offrent une esthétique unique et robuste qui peut renforcer l'identité de votre marque. Ils sont également très durables et peuvent résister aux intempéries, ce qui les rend parfaits pour les espaces de vente au détail. <br> Chez Mangala Living, nous proposons une gamme de meubles industriels qui peuvent être personnalisés pour répondre aux besoins spécifiques de votre entreprise.",
          "image": "https://images.unsplash.com/photo-1747928272448-49524fcb5cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3R5bGUlMjBmcmVuY2glMjBjYWZlJTIwaW50ZXJpb3J8ZW58MHwwfHx8MTc2OTg1OTMxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "industrial style french cafe interior"
        },
        {
          "heading": "Conseils pratiques pour choisir les meubles industriels parfaits",
          "content": "Lorsque vous choisissez des meubles industriels pour votre espace de vente au détail, il est important de considérer plusieurs facteurs tels que la qualité, la durabilité et l'esthétique. Vous devez également prendre en compte les besoins spécifiques de votre entreprise et la manière dont les meubles seront utilisés. <br> Chez Mangala Living, nous proposons des conseils d'experts pour vous aider à choisir les meubles industriels parfaits pour votre entreprise."
        },
        {
          "heading": "Les solutions de meubles industriels de Mangala Living",
          "content": "Nous proposons une gamme de meubles industriels conçus pour répondre aux besoins spécifiques des entreprises de retail. Notre produit phare, le <strong>Frame Loft Bookshelf</strong> (référence produit 1), est idéal pour les espaces de vente au détail qui nécessitent un meuble de stockage robuste et durable. <br> Nous proposons également des solutions de meubles sur mesure pour les cafés, restaurants et hôtels."
        },
        {
          "heading": "Exportation et livraison",
          "content": "Nous proposons une livraison rapide et fiable pour nos clients en France et dans d'autres pays. Notre équipe d'experts s'assure que les meubles soient emballés et expédiés de manière sécurisée pour garantir leur arrivée en parfait état. <br> Nous proposons également des options de personnalisation pour les meubles, y compris les couleurs, les matériaux et les dimensions.",
          "productId": 5
        }
      ],
      "conclusion": "Les meubles industriels sont une excellente option pour les entreprises de retail en France qui cherchent à créer un espace unique et durable. Chez Mangala Living, nous proposons des solutions de meubles sur mesure pour répondre aux besoins spécifiques de votre entreprise. N'hésitez pas à nous contacter pour en savoir plus sur nos produits et nos services."
    },
    "status": "synced"
  },
  {
    "id": 301,
    "slug": "meubles-industriels-pour-cafes",
    "title": "Meubles industriels pour cafés",
    "category": "Tips and Trick",
    "excerpt": "Créez une ambiance industrielle unique dans votre café ou restaurant avec Mangala Living",
    "image": "https://images.unsplash.com/photo-1689263560312-b39e79579248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2FmZSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8MHx8fDE3Njk4NDg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31 11:35",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Les cafés et les restaurants ont besoin d'une atmosphère unique pour attirer les clients. Mangala Living, fournisseur de meubles industriels depuis plus de 25 ans, vous aidera à créer une ambiance industrielle parfaite. Avec plus de 1000 projets réalisés, notre équipe de designers et d'artisans peut concevoir des meubles sur mesure pour répondre à vos besoins spécifiques.",
      "keyPoints": [
        "Meubles industriels robustes et durables",
        "Conception sur mesure pour répondre à vos besoins",
        "Expérience de plus de 25 ans dans la fabrication de meubles"
      ],
      "language": "fr",
      "sections": [
        {
          "heading": "Pourquoi choisir des meubles industriels ?",
          "content": "Les meubles industriels sont parfaits pour les cafés et les restaurants qui veulent créer une atmosphère unique et robuste. <strong>La durabilité</strong> est l'un des principaux avantages de ces meubles, car ils sont conçus pour résister aux intempéries et aux usures quotidiennes. De plus, les meubles industriels peuvent être personnalisés pour répondre à vos besoins spécifiques, ce qui vous permet de créer une ambiance qui reflète votre marque.",
          "image": "https://images.unsplash.com/photo-1689263560312-b39e79579248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2FmZSUyMGZ1cm5pdHVyZXxlbnwwfDB8fHwxNzY5ODU5MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "industrial cafe furniture"
        },
        {
          "heading": "Conseils pour choisir les bons meubles industriels",
          "content": "Lorsque vous choisissez des meubles industriels pour votre café ou votre restaurant, il est important de considérer plusieurs facteurs. <em>La qualité des matériaux</em> est essentielle, car elle affecte la durabilité et la sécurité des meubles. Il est également important de prendre en compte <em>l'espace disponible</em> et de choisir des meubles qui sont proportionnés à votre espace. Enfin, <em>la personnalisation</em> est un élément clé pour créer une ambiance unique et refléter votre marque."
        },
        {
          "heading": "Les solutions Mangala Living",
          "content": "Mangala Living propose une large gamme de meubles industriels pour les cafés et les restaurants. Notre <strong>équipe de designers</strong> peut concevoir des meubles sur mesure pour répondre à vos besoins spécifiques. Nous utilisons des <strong>matériaux de haute qualité</strong> pour garantir la durabilité et la sécurité de nos meubles. Nous avons également une <strong>expérience de plus de 25 ans</strong> dans la fabrication de meubles, ce qui nous permet de vous offrir des produits de haute qualité et des services exceptionnels."
        },
        {
          "heading": "Comment créer une ambiance industrielle unique",
          "content": "Pour créer une ambiance industrielle unique dans votre café ou restaurant, il est important de considérer plusieurs éléments. <em>La lumière</em> est un élément clé, car elle peut affecter l'atmosphère et la ambiance de votre espace. Il est également important de prendre en compte <em>les couleurs</em> et de choisir des tons qui reflètent votre marque et créent une ambiance industrielle. Enfin, <em>les accessoires</em> tels que les plantes et les décorations peuvent ajouter une touche personnelle à votre espace.",
          "productId": 12
        }
      ],
      "conclusion": "En conclusion, les meubles industriels sont parfaits pour les cafés et les restaurants qui veulent créer une ambiance unique et robuste. Avec Mangala Living, vous pouvez concevoir des meubles sur mesure pour répondre à vos besoins spécifiques et créer une ambiance industrielle parfaite. N'hésitez pas à nous contacter pour en savoir plus sur nos solutions et nos produits."
    },
    "status": "synced"
  },
  {
    "id": 302,
    "slug": "jual-meja-cafe-industrial-coffee-shop-bekasi",
    "title": "Jual Meja Cafe Industrial untuk Coffee Shop di Bekasi",
    "category": "Tips and Trick",
    "excerpt": "Temukan meja cafe industrial berkualitas untuk coffee shop Anda di Bekasi. Desain custom, tahan lama, dan harga kompetitif.",
    "image": "https://images.unsplash.com/photo-1625744494690-7a14ae606b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29mZmVlJTIwc2hvcCUyMGZ1cm5pdHVyZSUyMGRlc2lnbnxlbnwwfDB8fHwxNzY5ODU5NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31 11:37",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Mencari meja cafe industrial yang tepat untuk coffee shop Anda di Bekasi? Furniture yang tepat tidak hanya meningkatkan estetika tetapi juga kenyamanan pelanggan dan efisiensi operasional. Di Mangala Living, kami memahami kebutuhan unik coffee shop di Bekasi dengan pengalaman lebih dari 25 tahun dalam memproduksi furniture industri berkualitas.",
      "keyPoints": [
        "Pilih material tahan lama untuk meja cafe industrial",
        "Desain custom sesuai konsep coffee shop Anda",
        "Pertimbangkan ergonomi dan kenyamanan pelanggan",
        "Faktor biaya dan investasi jangka panjang",
        "Keunggulan furniture custom dari workshop Bekasi"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Memilih Meja Cafe Industrial untuk Coffee Shop?",
          "content": "Meja cafe industrial menjadi pilihan populer untuk coffee shop modern karena kombinasi sempurna antara estetika dan fungsionalitas. Desainnya yang minimalis dengan sentuhan material seperti besi dan kayu solid menciptakan suasana yang hangat namun tetap profesional.<br><br>Di Bekasi yang merupakan pusat bisnis kuliner yang berkembang pesat, coffee shop membutuhkan furniture yang tidak hanya menarik secara visual tetapi juga tahan terhadap penggunaan sehari-hari. Meja industrial dari Mangala Living dirancang khusus untuk menahan beban berat, tahan gores, dan mudah dibersihkan - faktor penting untuk operasional coffee shop yang sibuk.<br><br>Kelebihan lainnya adalah fleksibilitas desain. Meja industrial dapat dengan mudah dipadukan dengan berbagai konsep interior, mulai dari rustic, modern, hingga vintage. Ini memberikan kebebasan bagi pemilik coffee shop untuk berkreasi dengan dekorasi tanpa perlu mengganti seluruh furniture.",
          "image": "https://images.unsplash.com/photo-1689263560312-b39e79579248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2FmZSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8MHx8fDE3Njk4NDg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "industrial cafe interior design"
        },
        {
          "heading": "Tips Memilih Meja Cafe Industrial yang Tepat",
          "content": "Memilih meja cafe industrial yang tepat memerlukan pertimbangan beberapa faktor penting. Pertama, perhatikan ukuran dan tata letak coffee shop Anda. Meja yang terlalu besar akan membuat ruangan terasa sempit, sementara yang terlalu kecil mungkin tidak fungsional untuk kebutuhan pelanggan.<br><br>Kedua, pertimbangkan material yang digunakan. Kayu solid seperti jati atau pinus memberikan kesan hangat dan natural, sementara kombinasi dengan besi memberikan kesan kokoh dan industrial. Pastikan material tersebut tahan terhadap kelembaban dan noda kopi yang umum di coffee shop.<br><br>Ketiga, perhatikan ergonomi. Tinggi meja yang ideal untuk coffee shop adalah sekitar 75-80 cm, dengan kursi yang nyaman untuk duduk berlama-lama. Ini penting karena banyak pelanggan coffee shop yang menghabiskan waktu untuk bekerja atau bersosialisasi.<br><br>Terakhir, pertimbangkan mobilitas. Meja dengan roda atau desain yang ringan memudahkan Anda untuk mengatur ulang tata letak sesuai kebutuhan, terutama saat ada acara khusus atau perubahan konsep interior."
        },
        {
          "heading": "Keunggulan Meja Cafe Custom dari Mangala Living",
          "content": "Sebagai workshop furniture industrial di Bekasi dengan pengalaman lebih dari 25 tahun, Mangala Living menawarkan keunggulan yang tidak dimiliki produsen lain. Kami memahami bahwa setiap coffee shop memiliki karakteristik unik yang membutuhkan solusi furniture custom.<br><br>Proses produksi kami dimulai dari konsultasi desain, di mana tim ahli kami bekerja sama dengan Anda untuk menciptakan meja yang sesuai dengan konsep dan kebutuhan operasional coffee shop. Dengan workshop sendiri di Bekasi, kami menjamin kualitas kontrol yang ketat dan waktu produksi yang lebih cepat dibandingkan importir furniture.<br><br>Material yang kami gunakan adalah pilihan terbaik, mulai dari kayu solid berkualitas tinggi hingga besi dengan coating anti karat. Setiap meja melewati proses finishing yang teliti untuk memastikan daya tahan dan keindahan yang tahan lama. Kami juga menawarkan garansi produk untuk memberikan kepercayaan tambahan kepada pelanggan kami.<br><br>Keuntungan lainnya adalah harga yang kompetitif karena Anda membeli langsung dari produsen tanpa perantara. Ini membuat investasi furniture coffee shop Anda lebih efisien tanpa mengorbankan kualitas."
        },
        {
          "heading": "Rekomendasi Meja Cafe Industrial untuk Coffee Shop",
          "content": "Kami memiliki beberapa rekomendasi meja cafe industrial yang populer untuk coffee shop di Bekasi. Untuk area bar kopi, <strong>Bandung Pipe Dining Table</strong> (productId: 4) dengan desain pipa industrial dan top table kayu solid menjadi pilihan yang sangat baik. Meja ini tidak hanya kuat untuk menopang mesin kopi dan peralatan lainnya tetapi juga menambah kesan industrial yang elegan.<br><br>Untuk area duduk pelanggan, <strong>Dining Set with 2 Chairs</strong> (productId: 5) menawarkan kombinasi sempurna antara meja dan kursi dengan desain yang serasi. Set ini ideal untuk coffee shop dengan kapasitas sedang hingga besar.<br><br>Jika Anda memiliki area outdoor atau semi-outdoor, <strong>Balcony Bar Table</strong> (productId: 2) dengan material yang tahan cuaca menjadi pilihan yang tepat. Meja ini dirancang khusus untuk area terbuka tanpa mengorbankan estetika industrial.<br><br>Kami juga menyediakan opsi custom size untuk meja-meja tersebut agar sesuai dengan layout unik coffee shop Anda. Tim desain kami siap membantu Anda menentukan ukuran dan konfigurasi yang paling optimal.",
          "productId": 4
        }
      ],
      "conclusion": "Memilih meja cafe industrial yang tepat adalah investasi penting untuk kesuksesan coffee shop Anda di Bekasi. Dengan kombinasi antara desain yang menarik, material berkualitas, dan fungsionalitas yang optimal, furniture yang tepat dapat meningkatkan pengalaman pelanggan dan efisiensi operasional.<br><br>Di Mangala Living, kami berkomitmen untuk menjadi partner terpercaya Anda dalam menyediakan furniture industrial custom untuk coffee shop. Dengan pengalaman lebih dari 25 tahun, workshop sendiri di Bekasi, dan ribuan proyek yang telah kami selesaikan, kami siap membantu mewujudkan visi coffee shop Anda.<br><br>Jangan ragu untuk menghubungi tim kami untuk konsultasi gratis tentang kebutuhan furniture coffee shop Anda. Mari bersama-sama menciptakan ruang yang tidak hanya indah secara visual tetapi juga fungsional dan tahan lama untuk bisnis kuliner Anda di Bekasi."
    },
    "status": "synced"
  },
  {
    "id": 303,
    "slug": "jasa-custom-order-furniture-besi-bekasi-jakarta",
    "title": "Jasa Custom Order Furniture Besi di Bekasi & Jakarta",
    "category": "Tips and Trick",
    "excerpt": "Butuh furniture custom besi untuk cafe, resto, atau kantor? Mangala Living hadir dengan solusi terbaik di Bekasi dan Jakarta.",
    "image": "https://images.unsplash.com/photo-1671351967814-834d376fcd1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY3VzdG9tJTIwZnVybml0dXJlJTIwd29ya3Nob3AlMjBiZWthc3xlbnwwfDB8fHwxNzY5ODU5ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31 11:42",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Mencari furniture custom besi berkualitas di Bekasi dan Jakarta? Mangala Living hadir sebagai solusi terbaik untuk kebutuhan furniture komersial Anda. Dengan pengalaman lebih dari 25 tahun dan workshop sendiri di Bekasi, kami siap mewujudkan desain furniture impian Anda.",
      "keyPoints": [
        "Solusi custom furniture besi profesional di Bekasi & Jakarta",
        "Desain sesuai kebutuhan cafe, resto, hotel, dan kantor",
        "Workshop sendiri menjamin kualitas dan harga kompetitif",
        "Pengerjaan cepat dengan hasil tahan lama"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Memilih Furniture Custom Besi?",
          "content": "Furniture custom besi menjadi pilihan utama untuk ruang komersial karena beberapa alasan kuat. Pertama, ketahanan material besi yang luar biasa membuat furniture ini mampu bertahan bertahun-tahun bahkan dalam penggunaan intensif. Kedua, desain industrial yang timeless memberikan kesan profesional dan modern pada ruangan. Ketiga, custom order memungkinkan Anda mendapatkan ukuran dan bentuk yang pas dengan kebutuhan spesifik ruangan Anda.<br><br>Di Mangala Living, kami memahami bahwa setiap ruang komersial memiliki karakteristik unik. Itulah mengapa kami menawarkan layanan custom order furniture besi yang sepenuhnya disesuaikan dengan kebutuhan Anda. Dari meja makan industrial hingga rak display yang kokoh, semua bisa kami wujudkan sesuai spesifikasi yang Anda inginkan.",
          "image": "https://images.unsplash.com/photo-1717500252709-05a73fc4f1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBpbmR1c3RyaWFsJTIwZnVybml0dXJlJTIwZGVzaWduJTIwd29ya3Nob3B8ZW58MHwwfHx8MTc2OTg1OTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "custom industrial furniture design workshop"
        },
        {
          "heading": "Keunggulan Layanan Custom Order Kami",
          "content": "Mangala Living menawarkan layanan custom order furniture besi dengan berbagai keunggulan yang tidak dimiliki oleh kompetitor lain. Workshop kami berlokasi strategis di Bekasi, memungkinkan kami untuk melayani klien di Jakarta dan sekitarnya dengan lebih efisien. Dengan fasilitas produksi sendiri, kami dapat memastikan setiap detail furniture dibuat dengan presisi tinggi dan kontrol kualitas yang ketat.<br><br>Kami juga menawarkan konsultasi desain gratis untuk membantu Anda menentukan konsep furniture yang paling sesuai dengan ruangan Anda. Tim ahli kami akan membantu dari proses desain hingga pemasangan, memastikan Anda mendapatkan hasil yang memuaskan. Selain itu, kami menggunakan material besi berkualitas tinggi yang telah teruji ketahanannya, sehingga furniture Anda tidak hanya tampil menarik tetapi juga awet dan kokoh."
        },
        {
          "heading": "Proses Pemesanan Custom Furniture",
          "content": "Proses pemesanan furniture custom di Mangala Living sangat mudah dan transparan. Pertama, hubungi kami melalui WhatsApp di 088801146881 untuk konsultasi awal. Tim kami akan mendiskusikan kebutuhan Anda, ukuran ruangan, dan konsep desain yang diinginkan. Kedua, kami akan membuat desain 3D dan estimasi biaya untuk persetujuan Anda. Ketiga, setelah desain disetujui, produksi akan dimulai di workshop kami dengan timeline yang jelas.<br><br>Kami memahami bahwa waktu adalah hal yang berharga, terutama untuk bisnis komersial. Oleh karena itu, kami berkomitmen untuk menyelesaikan setiap proyek custom order sesuai dengan deadline yang telah disepakati. Selama proses produksi, Anda juga dapat memantau progress pengerjaan furniture Anda melalui update foto yang kami kirimkan secara berkala."
        },
        {
          "heading": "Portofolio dan Testimoni Klien",
          "content": "Dengan pengalaman lebih dari 25 tahun dan lebih dari 1000 proyek yang telah diselesaikan, Mangala Living telah dipercaya oleh berbagai klien dari berbagai sektor. Mulai dari cafe-cafe kekinian di Jakarta, restoran mewah di Bekasi, hingga kantor-kantor modern di sekitarnya. Setiap proyek yang kami kerjakan selalu mendapatkan apresiasi positif dari klien kami karena kualitas dan ketepatan waktu pengerjaan.<br><br>Salah satu kebanggaan kami adalah kemampuan untuk mewujudkan desain yang unik dan sesuai karakter setiap klien. Kami percaya bahwa furniture bukan hanya sekedar fungsi, tetapi juga bagian dari identitas brand dan estetika ruangan. Itulah mengapa kami selalu memberikan sentuhan personal pada setiap custom order yang kami kerjakan.",
          "productId": 5
        },
        {
          "heading": "Hubungi Kami Sekarang!",
          "content": "Jangan ragu untuk mewujudkan furniture impian Anda bersama Mangala Living. Hubungi kami sekarang juga melalui WhatsApp di 088801146881 untuk konsultasi gratis dan penawaran terbaik. Tim kami siap membantu Anda dari proses desain hingga pemasangan furniture custom besi yang Anda butuhkan.<br><br>Kami berlokasi di Bekasi dengan workshop sendiri, memungkinkan kami untuk memberikan harga yang kompetitif tanpa mengurangi kualitas. Jadikan Mangala Living sebagai mitra terpercaya Anda dalam menciptakan ruang komersial yang menarik dan fungsional dengan furniture custom besi berkualitas tinggi."
        }
      ],
      "conclusion": "Furniture custom besi dari Mangala Living bukan hanya sekedar produk, tetapi investasi jangka panjang untuk bisnis Anda. Dengan kombinasi desain industrial yang timeless, material berkualitas, dan layanan custom yang profesional, kami siap membantu Anda menciptakan ruang yang tidak hanya fungsional tetapi juga estetis. Hubungi kami hari ini dan wujudkan furniture impian Anda bersama tim ahli kami!"
    },
    "status": "synced"
  },
  {
    "id": 304,
    "slug": "panduan-memilih-furniture-cafe-industrial-tahan-lama-hemat",
    "title": "Panduan Memilih Furniture Cafe Industrial Tahan Lama & Hemat",
    "category": "Tips and Trick",
    "excerpt": "Tips memilih furniture industrial untuk cafe kecil di Jakarta yang awet dan hemat budget. Solusi tepat dari pengalaman 25+ tahun Mangala Living.",
    "image": "https://images.unsplash.com/photo-1652180126149-594db303e643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxQYW5kdWFuJTIwTWVtaWxpaCUyMEZ1cm5pdHVyZSUyMENhZmUlMjBJbmR1c3RyaWFsJTIwVGFoYW4lMjBMYW1hJTIwJTI2JTIwSGVtYXR8ZW58MHwwfHx8MTc2OTg3NDY3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31 15:49",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Memilih furniture industrial untuk cafe kecil di Jakarta butuh strategi khusus. Selain harus tahan lama menghadapi intensitas penggunaan tinggi, juga perlu hemat budget tanpa mengorbankan estetika. Sebagai produsen furniture industrial berpengalaman 25+ tahun, Mangala Living akan membagikan panduan praktisnya.",
      "keyPoints": [
        "Material baja dan kayu reclaimed paling optimal",
        "Furniture multifungsi hemat ruang & budget",
        "Pilih produsen lokal untuk efisiensi biaya",
        "Desain modular untuk perluasan masa depan",
        "Perawatan rutin tingkatkan durability"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Kenali Material Industrial Terbaik",
          "content": "<strong>Material adalah faktor kunci</strong> dalam memilih furniture cafe industrial yang tahan lama. Untuk furniture outdoor atau area basah, pilih baja powder-coated yang anti karat. Untuk indoor, kombinasi baja hollow pipe dengan kayu reclaimed memberikan kesan industrial otentik sekaligus kuat.<br><br>Hindari material MDF atau particle board karena mudah rusak di lingkungan cafe yang lembab. Mangala Living menggunakan material baja tebal 1.2-2mm dan kayu solid yang sudah melalui proses pengawetan khusus untuk proyek di Jakarta.",
          "imageSearchQuery": "steel cafe tables industrial design",
          "image": "https://images.unsplash.com/photo-1751197979977-0113ddba9823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNhZmUlMjB0YWJsZXMlMjBpbmR1c3RyaWFsJTIwZGVzaWdufGVufDB8MHx8fDE3Njk4NzQ2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "steel cafe tables industrial design"
        },
        {
          "heading": "Strategi Hemat Budget untuk Cafe Kecil",
          "content": "<strong>Fokus pada furniture multifungsi</strong> seperti meja dengan rak penyimpanan bawah atau bangku panjang yang bisa sekaligus jadi partisi. Pilih desain modular seperti <em>Dining Set with 2 Chairs</em> yang bisa ditambah unit sesuai perkembangan bisnis.<br><br>Manfaatkan produsen lokal seperti Mangala Living yang workshop-nya di Bekasi untuk hemat biaya transportasi dan bisa custom ukuran sesuai ruang terbatas. Kami sudah mengerjakan 1000+ proyek cafe kecil di Jakarta dengan konsep <em>cost-effective industrial design</em>."
        },
        {
          "heading": "Solusi Meja & Kursi Industrial Awet",
          "content": "Untuk furniture utama seperti meja dan kursi, pilih yang menggunakan frame baja hollow pipe dengan ketebalan minimal 1.5mm. <strong>Dining Set with 2 Chairs</strong> dari koleksi Mangala Living menggunakan konstruksi sambungan las kuat dengan finishing powder-coating tahan gores.<br><br>Kursi bar seperti <em>Beam Industrial Bar Chair</em> didesain khusus untuk penggunaan intensif di cafe dengan kapasitas beban hingga 150kg. Pilih varibel tanpa bantal untuk lebih mudah perawatan.",
          "productId": 5
        },
        {
          "heading": "Storage Industrial yang Fungsional",
          "content": "Manfaatkan ruang vertikal dengan storage industrial seperti <strong>Ladder Frame Display Stand</strong> yang bisa jadi tempat display sekaligus penyimpanan. Untuk dapur cafe kecil, <em>Industrial Kitchen Cabinet</em> dengan frame baja dan rak adjustable menjadi solusi tahan beban berat.<br><br>Produk storage Mangala Living didesain modular sehingga bisa dikombinasikan sesuai perkembangan bisnis. Material baja tebal menjamin ketahanan meski di ruang dapur yang lembab.",
          "productId": 12
        },
        {
          "heading": "Tips Perawatan Harian",
          "content": "<strong>1. Bersihkan frame baja</strong> seminggu sekali dengan lap microfiber basah<br><strong>2. Oleskan minyak kayu</strong> 3 bulan sekali untuk furniture kayu reclaimed<br><strong>3. Periksa sambungan baut</strong> tiap 6 bulan<br><strong>4. Hindari bahan kimia keras</strong> saat membersihkan<br><br>Dengan perawatan tepat, furniture industrial bisa bertahan 5-10 tahun bahkan di lingkungan cafe Jakarta yang sibuk."
        }
      ],
      "conclusion": "Memilih furniture industrial untuk cafe kecil di Jakarta tak harus mahal asal pahami material dan pilih produsen berpengalaman seperti Mangala Living. Dengan workshop di Bekasi dan tim ahli custom desain, kami siap membantu menciptakan interior cafe industrial yang tahan lama sesuai budget. Kontak kami sekarang untuk konsultasi gratis dan penawaran spesial!"
    },
    "status": "synced"
  },
  {
    "id": 305,
    "slug": "mangala-living-indonesia-furniture-manufacturer-exporter",
    "title": "Mangala Living: Indonesia's Leading Furniture Manufacturer & Exporter",
    "category": "Tips and Trick",
    "excerpt": "Discover Mangala Living, Indonesia's premier industrial furniture manufacturer with 25+ years experience, serving cafes, restaurants, hotels, and offices worldwide.",
    "image": "https://images.unsplash.com/photo-1617448570684-9b7d26138f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZnVybml0dXJlJTIwbWFudWZhY3R1cmluZyUyMHdvcmtzaG9wJTIwSW5kb25lc2lhfGVufDB8MHx8fDE3Njk4NzQ4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31 15:51",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Mangala Living stands as a beacon of excellence in Indonesia's furniture manufacturing industry, combining decades of expertise with innovative design to create premium industrial furniture for commercial spaces. Since 1999, we've been crafting durable, stylish furniture that transforms cafes, restaurants, hotels, and offices across the globe.",
      "keyPoints": [
        "25+ years of furniture manufacturing expertise",
        "Premium industrial furniture for commercial spaces",
        "1000+ successful projects worldwide",
        "Custom design solutions for unique requirements",
        "Export-ready quality meeting international standards"
      ],
      "language": "en",
      "sections": [
        {
          "heading": "Our Manufacturing Excellence",
          "content": "At Mangala Living, our manufacturing process combines traditional craftsmanship with modern technology to create furniture that stands the test of time. Our workshop in Bekasi, West Java, spans over 5,000 square meters and houses state-of-the-art machinery operated by skilled artisans with decades of experience. <br><br>We specialize in industrial-style furniture using premium materials like reclaimed wood, steel pipes, and powder-coated metal. Every piece undergoes rigorous quality control, from material selection to final assembly, ensuring durability and aesthetic appeal that meets international standards.",
          "imageSearchQuery": "industrial furniture workshop manufacturing Indonesia",
          "image": "https://images.unsplash.com/photo-1617448570684-9b7d26138f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZnVybml0dXJlJTIwd29ya3Nob3AlMjBtYW51ZmFjdHVyaW5nJTIwSW5kb25lc2lhfGVufDB8MHx8fDE3Njk4NzQ4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "industrial furniture workshop manufacturing Indonesia"
        },
        {
          "heading": "Why Choose Indonesian Furniture Manufacturers?",
          "content": "Indonesia has emerged as a global leader in furniture manufacturing, offering unique advantages that set us apart. Our strategic location provides access to abundant raw materials, including high-quality teak, mahogany, and sustainable plantation wood. Labor costs remain competitive while maintaining exceptional craftsmanship standards, allowing us to offer premium products at reasonable prices. <br><br>Indonesian manufacturers like Mangala Living understand both local and international design trends, creating furniture that appeals to diverse markets. Our export experience spans over two decades, with products reaching customers in Asia, Europe, the Middle East, and North America. We navigate complex international shipping regulations and customs procedures, making the export process seamless for our clients."
        },
        {
          "heading": "Custom Solutions for Every Space",
          "content": "Every commercial space has unique requirements, and our team excels at creating custom furniture solutions that perfectly match your vision. Whether you're designing a cozy café, a bustling restaurant, a luxury hotel, or a modern office, we work closely with you to understand your needs, brand identity, and functional requirements. <br><br>Our design team uses advanced CAD software to create detailed 3D renderings, allowing you to visualize the final product before production begins. We offer flexibility in materials, finishes, dimensions, and design elements, ensuring your furniture not only looks stunning but also serves its intended purpose effectively.",
          "productId": 4
        },
        {
          "heading": "Quality Assurance and International Standards",
          "content": "Quality is non-negotiable at Mangala Living. Our quality control process involves multiple inspection stages, from raw material testing to final product evaluation. We conduct stress tests, durability assessments, and finish quality checks to ensure every piece meets our stringent standards. <br><br>We understand that international clients require specific certifications and compliance with various regulations. Our products meet international standards for safety, durability, and environmental responsibility. We provide necessary documentation, including fumigation certificates, material safety data sheets, and compliance certificates for different markets, making the import process smooth and hassle-free for our clients.",
          "productId": 9
        }
      ],
      "conclusion": "As Indonesia's premier furniture manufacturer and exporter, Mangala Living combines decades of experience, manufacturing excellence, and customer-focused service to deliver exceptional furniture solutions. Whether you're a café owner in Singapore, a restaurant chain in Dubai, a hotel developer in Europe, or an office designer in the United States, we have the expertise and capacity to bring your vision to life. Contact us today to discuss your furniture needs and discover why businesses worldwide trust Mangala Living for their commercial furniture requirements."
    },
    "status": "synced"
  },
  {
    "id": 306,
    "slug": "choose-indonesian-furniture-manufacturer",
    "title": "How to Choose the Best Indonesian Furniture Manufacturer",
    "category": "Tips and Trick",
    "excerpt": "Discover essential tips for selecting top Indonesian furniture manufacturers for your business, focusing on quality, reliability, and export capabilities.",
    "image": "https://images.unsplash.com/photo-1769430838012-8e1270d41f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZnVybml0dXJlJTIwbWFudWZhY3R1cmVyJTIwd29ya3Nob3B8ZW58MHwwfHx8MTc2OTg0ODUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-01-31 15:53",
    "author": "Helmi Ramdan",
    "customContent": {
      "introduction": "Selecting the right furniture manufacturer is crucial for your business success. Indonesia has emerged as a global furniture powerhouse, offering exceptional craftsmanship and competitive pricing. This guide will help you navigate the selection process and find the perfect manufacturing partner.",
      "keyPoints": [
        "Evaluate manufacturer credentials and certifications",
        "Assess production capacity and quality control",
        "Consider export experience and logistics capabilities",
        "Review portfolio and customization options",
        "Check customer reviews and industry reputation"
      ],
      "language": "en",
      "sections": [
        {
          "heading": "Understanding Indonesian Furniture Manufacturing Landscape",
          "content": "Indonesia's furniture industry has evolved significantly over the past decades, becoming a global leader in both indoor and outdoor furniture production. The country's rich natural resources, particularly teak and other hardwoods, combined with skilled craftsmanship, create a unique competitive advantage. Major manufacturing hubs are concentrated in Java, with cities like Jepara, Surabaya, and Tangerang hosting numerous factories.<br><br>When evaluating Indonesian manufacturers, it's essential to understand the different types of operations available. Some specialize in traditional handcrafted pieces, while others focus on modern, machine-made furniture for commercial projects. The industry ranges from small family-owned workshops to large-scale factories capable of handling international orders. This diversity means you can find a manufacturer that perfectly matches your specific needs, whether you're looking for custom cafe furniture or bulk orders for hotel chains.",
          "imageSearchQuery": "Indonesian furniture factory production line",
          "image": "https://images.unsplash.com/photo-1606077089119-92075161bb60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwZnVybml0dXJlJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb24lMjBsaW5lfGVufDB8MHx8fDE3Njk4NzQ4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "Indonesian furniture factory production line"
        },
        {
          "heading": "Key Selection Criteria for Furniture Manufacturers",
          "content": "When choosing an Indonesian furniture manufacturer, several critical factors should guide your decision. First, verify their legal status and certifications. Reputable manufacturers should have proper business licenses, export permits, and quality certifications such as SVLK (Timber Legality Verification System) for sustainable wood sourcing. This ensures you're working with a legitimate operation that complies with international standards.<br><br>Production capacity is another crucial consideration. Assess whether the manufacturer can handle your order volume and meet your timeline requirements. Ask about their machinery, workforce size, and production processes. A manufacturer with modern equipment and efficient workflows can deliver consistent quality at competitive prices. Additionally, inquire about their quality control procedures and whether they offer warranties on their products. This demonstrates their commitment to customer satisfaction and product durability."
        },
        {
          "heading": "Export Experience and Logistics Capabilities",
          "content": "For international buyers, a manufacturer's export experience is paramount. Look for companies with proven track records in shipping to your target markets. Experienced exporters understand the complexities of international shipping, customs documentation, and compliance requirements. They should be able to provide references from previous international clients and demonstrate their ability to handle various shipping methods, from air freight for smaller orders to container shipping for bulk purchases.<br><br>Logistics capabilities extend beyond shipping. The best manufacturers offer comprehensive services including packaging design, consolidation of orders, and assistance with import documentation. They should have established relationships with freight forwarders and customs brokers to ensure smooth delivery. Some manufacturers even provide after-sales support and warranty services for international customers. When evaluating potential partners, ask about their typical lead times, packaging methods, and how they handle damaged goods during transit."
        },
        {
          "heading": "Quality Assessment and Portfolio Review",
          "content": "Quality assessment should be a top priority when selecting a furniture manufacturer. Request samples of their work to evaluate material quality, craftsmanship, and finishing. Pay attention to details like joint construction, hardware quality, and surface treatments. For wooden furniture, examine the wood grain consistency, moisture content, and finishing quality. A reputable manufacturer will be transparent about their materials and processes.<br><br>Reviewing their portfolio provides insights into their capabilities and style range. Look for diversity in their product line, which indicates versatility and experience. Check if they have experience producing furniture similar to what you need. For commercial projects, verify if they have worked with businesses in your industry. Many manufacturers showcase their work on their websites or social media platforms. Don't hesitate to ask for references from previous clients, particularly those in your region or industry."
        },
        {
          "heading": "Communication and Customer Service",
          "content": "Effective communication is essential for successful manufacturing partnerships. Evaluate the manufacturer's responsiveness, language capabilities, and willingness to understand your specific requirements. Clear communication channels help prevent misunderstandings and ensure your vision is accurately translated into the final product. Look for manufacturers who assign dedicated account managers to handle your project from start to finish.<br><br>Customer service extends beyond the initial sale. The best manufacturers offer ongoing support, including assistance with installation, maintenance advice, and warranty claims. They should be proactive in addressing any issues that arise and committed to building long-term relationships. Consider scheduling video calls or virtual factory tours to get a better sense of their operation and communication style. This personal interaction can reveal a lot about their professionalism and commitment to customer satisfaction.",
          "productId": 6
        }
      ],
      "conclusion": "Finding the right Indonesian furniture manufacturer requires careful research and due diligence, but the rewards are substantial. Indonesia's furniture industry offers exceptional value through quality craftsmanship, competitive pricing, and diverse product options. By focusing on key selection criteria, verifying credentials, and assessing communication capabilities, you can establish a successful partnership that benefits your business for years to come. Remember that the cheapest option isn't always the best value – prioritize quality, reliability, and service to ensure your furniture investments deliver lasting returns."
    },
    "status": "synced"
  },
  {
    "id": 307,
    "slug": "wujudkan-impian-furnitur-anda",
    "title": "Wujudkan Impian Furnitur Anda!",
    "category": "Tips and Trick",
    "excerpt": "Dapatkan konsultasi desain gratis dan pesan furnitur custom Anda sekarang!",
    "image": "https://images.unsplash.com/photo-1746605620245-bf8d2c653379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2NhbmRpbmF2aWFuJTIwZnVybml0dXJlJTIwZGVzaWdufGVufDB8MHx8fDE3Njk5Njk1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-01 18:11",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Apakah Anda ingin memiliki furnitur yang unik dan sesuai dengan gaya Anda? Mangala Living hadir untuk membantu Anda mewujudkan impian furnitur Anda! Dengan pengalaman lebih dari 25 tahun dan lebih dari 1000 proyek yang telah diselesaikan, kami siap membantu Anda menciptakan furnitur yang sesuai dengan kebutuhan Anda.",
      "keyPoints": [
        "Konsultasi desain gratis",
        "Pesan furnitur custom",
        "Furnitur industrial scandinavian premium",
        "Pengalaman lebih dari 25 tahun",
        "Lebih dari 1000 proyek yang telah diselesaikan"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Furnitur Custom?",
          "content": "Furnitur custom memungkinkan Anda untuk memiliki furnitur yang unik dan sesuai dengan gaya Anda. Dengan demikian, Anda dapat menciptakan ruang yang nyaman dan fungsional. Mangala Living menawarkan konsultasi desain gratis untuk membantu Anda menciptakan furnitur yang sesuai dengan kebutuhan Anda.",
          "imageSearchQuery": "custom furniture design",
          "image": "https://images.unsplash.com/photo-1593069431672-f903a33c286f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBmdXJuaXR1cmUlMjBkZXNpZ258ZW58MHwwfHx8MTc2OTk2OTUxNXww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "custom furniture design"
        },
        {
          "heading": "Kelebihan Furnitur Industrial Scandinavian",
          "content": "Furnitur industrial scandinavian dikenal karena kekuatan dan ketahanannya. Dengan menggunakan bahan-bahan yang berkualitas, furnitur ini dapat bertahan lama dan tahan terhadap kerusakan. Mangala Living menawarkan furnitur industrial scandinavian premium yang sesuai dengan kebutuhan Anda."
        },
        {
          "heading": "Solusi Mangala Living",
          "content": "Mangala Living menawarkan solusi furnitur yang sesuai dengan kebutuhan Anda. Dengan pengalaman lebih dari 25 tahun dan lebih dari 1000 proyek yang telah diselesaikan, kami siap membantu Anda menciptakan furnitur yang sesuai dengan kebutuhan Anda. <strong>Kontak kami</strong> sekarang untuk mendapatkan konsultasi desain gratis dan pesan furnitur custom Anda!",
          "productId": 12
        },
        {
          "heading": "Langkah Selanjutnya",
          "content": "Jika Anda ingin memiliki furnitur yang unik dan sesuai dengan gaya Anda, <em>kontak kami</em> sekarang untuk mendapatkan konsultasi desain gratis dan pesan furnitur custom Anda! Kami siap membantu Anda menciptakan furnitur yang sesuai dengan kebutuhan Anda.",
          "productId": 5
        }
      ],
      "conclusion": "Mangala Living hadir untuk membantu Anda mewujudkan impian furnitur Anda! Dengan pengalaman lebih dari 25 tahun dan lebih dari 1000 proyek yang telah diselesaikan, kami siap membantu Anda menciptakan furnitur yang sesuai dengan kebutuhan Anda. <strong>Kontak kami</strong> sekarang untuk mendapatkan konsultasi desain gratis dan pesan furnitur custom Anda!"
    }
  },
  {
    "id": 308,
    "slug": "cara-memilih-furniture-industrial-untuk-cafe",
    "title": "Cara Memilih Furniture Industrial untuk Cafe",
    "category": "Tips and Trick",
    "excerpt": "Panduan lengkap memilih furniture industrial untuk cafe yang nyaman dan menarik. Temukan tips dari Mangala Living, ahli furniture sejak 1999.",
    "image": "https://images.unsplash.com/photo-1689263560312-b39e79579248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2FmZSUyMGZ1cm5pdHVyZSUyMGRlc2lnbnxlbnwwfDB8fHwxNzY5OTY5NTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-01 18:12",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Memilih furniture yang tepat untuk cafe Anda bukan hanya soal estetika, tetapi juga kenyamanan dan fungsionalitas. Furniture industrial menjadi pilihan populer karena keunikannya yang timeless dan ketahanannya yang luar biasa. Mangala Living, dengan pengalaman lebih dari 25 tahun, berbagi tips penting untuk membantu Anda membuat keputusan terbaik.",
      "keyPoints": [
        "Pahami karakteristik furniture industrial yang unik",
        "Pertimbangkan fungsi dan kenyamanan untuk pelanggan",
        "Pilih material yang tahan lama dan mudah perawatannya",
        "Sesuaikan dengan konsep dan branding cafe Anda",
        "Rencanakan layout untuk optimalisasi ruang"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Furniture Industrial Cocok untuk Cafe?",
          "content": "Furniture industrial memiliki karakteristik yang sangat cocok untuk ruang komersial seperti cafe. Material seperti besi, kayu solid, dan beton memberikan kesan kuat dan maskulin yang timeless. Keunggulan utamanya adalah ketahanan yang luar biasa - furniture ini dirancang untuk penggunaan intensif dan bisa bertahan bertahun-tahun bahkan dengan lalu lintas pelanggan yang tinggi.<br><br>Selain itu, estetika industrial yang terbuka dan tidak berlebihan menciptakan suasana yang santai namun berkelas. Pelanggan merasa nyaman untuk berlama-lama, yang penting untuk meningkatkan dwell time dan revenue cafe Anda. Mangala Living telah memproduksi ribuan furniture industrial untuk cafe-cafe di seluruh Indonesia, membuktikan bahwa gaya ini tidak hanya tren tetapi investasi jangka panjang yang cerdas.",
          "imageSearchQuery": "industrial cafe interior design",
          "image": "https://images.unsplash.com/photo-1689263560312-b39e79579248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2FmZSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8MHx8fDE3Njk4NDg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "industrial cafe interior design"
        },
        {
          "heading": "Faktor-Faktor Penting dalam Pemilihan Furniture",
          "content": "Saat memilih furniture industrial untuk cafe Anda, ada beberapa faktor krusial yang harus dipertimbangkan. Pertama, ukuran dan proporsi ruangan. Furniture yang terlalu besar akan membuat cafe terasa sempit, sementara yang terlalu kecil bisa terlihat tidak proporsional. Kedua, kenyamanan pelanggan - meskipun industrial terlihat keras, kursi dan sofa tetap harus nyaman untuk diduduki berjam-jam.<br><br>Ketiga, daya tahan material. Cafe adalah lingkungan dengan penggunaan intensif, jadi pilih furniture yang mudah dibersihkan dan tahan terhadap noda. Keempat, konsistensi dengan branding. Furniture harus mencerminkan identitas cafe Anda - apakah itu rustic, modern, atau minimalis. Terakhir, fleksibilitas layout. Pilih furniture yang mudah diatur ulang untuk berbagai kebutuhan, dari acara pribadi hingga sesi kerja kelompok."
        },
        {
          "heading": "Rekomendasi Furniture dari Mangala Living",
          "content": "Mangala Living menawarkan berbagai pilihan furniture industrial yang sempurna untuk cafe. Untuk area dining, <strong>Bandung Pipe Dining Table</strong> (productId: 4) dengan kaki besi kokoh dan permukaan kayu solid adalah pilihan yang sangat baik. Padukan dengan <strong>Dining Set with 2 Chairs</strong> (productId: 5) untuk kenyamanan maksimal.<br><br>Untuk area lounge, <strong>Lounge Set Coffee Table</strong> (productId: 3) menciptakan titik fokus yang menarik. Jika Anda membutuhkan tempat duduk tambahan, <strong>Bench Corner Lounge</strong> (productId: 17) menawarkan kombinasi sempurna antara gaya dan kenyamanan. Untuk penyimpanan, <strong>Frame Loft Bookshelf</strong> (productId: 1) tidak hanya fungsional tetapi juga menjadi elemen dekoratif yang menarik perhatian pelanggan."
        },
        {
          "heading": "Tips Perawatan Furniture Industrial",
          "content": "Furniture industrial memang tahan lama, tetapi perawatan yang tepat akan memperpanjang umurnya secara signifikan. Untuk permukaan kayu, gunakan lap lembap dengan pembersih khusus kayu secara berkala. Hindari cairan yang tumpah terlalu lama karena bisa meninggalkan noda. Untuk bagian besi, lap dengan kain kering untuk mencegah karat, terutama di area dengan kelembapan tinggi.<br><br>Untuk kursi dan sofa, vakum secara teratur dan gunakan pelindung kain untuk mencegah noda. Jika terjadi goresan pada permukaan kayu, Anda bisa menggunakan wood filler atau mengampelasnya dengan lembut. Mangala Living menyediakan panduan perawatan lengkap untuk setiap produk, memastikan furniture Anda tetap terlihat baru bertahun-tahun.",
          "productId": 3
        }
      ],
      "conclusion": "Memilih furniture industrial untuk cafe Anda adalah investasi jangka panjang yang akan mempengaruhi pengalaman pelanggan dan citra bisnis Anda. Dengan mempertimbangkan faktor-faktor yang tepat dan memilih produk berkualitas dari produsen terpercaya seperti Mangala Living, Anda akan menciptakan ruang yang tidak hanya indah tetapi juga fungsional dan tahan lama. Ingatlah bahwa furniture yang tepat bisa menjadi salah satu faktor penentu kesuksesan cafe Anda. Mulailah perencanaan Anda hari ini dan hubungi tim Mangala Living untuk konsultasi gratis tentang kebutuhan furniture industrial Anda."
    }
  },
  {
    "id": 309,
    "slug": "wujudkan-furniture-impian-anda",
    "title": "Wujudkan Furniture Impian Anda!",
    "category": "Tips and Trick",
    "excerpt": "Transformasikan ruang komersial Anda dengan furniture custom dari Mangala Living. Konsultasi desain gratis untuk cafe, restoran, dan kantor.",
    "image": "https://images.unsplash.com/photo-1763565909003-46e9dfb68a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY3VzdG9tJTIwZnVybml0dXJlJTIwZGVzaWduJTIwY29uc3VsdGF0aW9ufGVufDB8MHx8fDE3Njk5Njk2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-01 18:13",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Setiap ruang komersial memiliki karakter unik yang membutuhkan furniture khusus untuk memaksimalkan potensinya. Di Mangala Living, kami percaya bahwa furniture yang tepat dapat mengubah cara pelanggan Anda merasakan dan berinteraksi dengan bisnis Anda. Dengan pengalaman lebih dari 25 tahun dan 1000+ proyek yang telah kami selesaikan, kami siap membantu mewujudkan visi furniture Anda menjadi kenyataan.",
      "keyPoints": [
        "Konsultasi desain gratis untuk custom furniture",
        "Material berkualitas tinggi dan tahan lama",
        "Produksi di workshop Bekasi dengan kontrol kualitas ketat",
        "Solusi untuk cafe, restoran, hotel, dan kantor"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Furniture Custom Penting untuk Bisnis Anda?",
          "content": "Furniture custom bukan sekadar tentang estetika, tetapi tentang menciptakan pengalaman yang tak terlupakan bagi pelanggan Anda. Di Mangala Living, kami memahami bahwa setiap bisnis memiliki kebutuhan unik yang tidak bisa dipenuhi oleh furniture massal.<br><br>Keuntungan furniture custom:<br>- Desain yang sesuai dengan identitas brand Anda<br>- Optimalisasi ruang yang lebih efisien<br>- Material berkualitas tinggi yang tahan lama<br>- Fleksibilitas ukuran dan fungsi<br>- Nilai investasi jangka panjang yang lebih baik",
          "imageSearchQuery": "custom industrial furniture cafe restaurant",
          "image": "https://images.unsplash.com/photo-1564758866811-4780aa0a1f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBpbmR1c3RyaWFsJTIwZnVybml0dXJlJTIwY2FmZSUyMHJlc3RhdXJhbnR8ZW58MHwwfHx8MTc2OTk2OTY2MHww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "custom industrial furniture cafe restaurant"
        },
        {
          "heading": "Proses Konsultasi Desain Gratis",
          "content": "Kami membuat proses custom furniture menjadi mudah dan menyenangkan. Mulai dari ide hingga realisasi, tim ahli kami akan mendampingi Anda setiap langkahnya.<br><br>Langkah-langkah konsultasi:<br>1. Diskusi kebutuhan dan visi Anda<br>2. Pengukuran dan analisis ruang<br>3. Pemilihan material dan finishing<br>4. Pembuatan desain 3D<br>5. Penawaran harga dan timeline produksi<br>6. Produksi di workshop Bekasi<br>7. Pengiriman dan pemasangan",
          "productId": 1
        },
        {
          "heading": "Material Berkualitas untuk Hasil Maksimal",
          "content": "Kualitas material adalah fondasi dari setiap furniture yang kami produksi. Di workshop Bekasi kami, kami menggunakan material pilihan yang telah teruji untuk kekuatan dan daya tahan.<br><br>Material unggulan kami:<br>- <strong>Baja pipa berkekuatan tinggi</strong> untuk struktur yang kokoh<br>- <strong>Kayu jati belanda</strong> untuk tampilan natural yang elegan<br>- <strong>Finishing powder coating</strong> untuk ketahanan karat<br>- <strong>Kayu solid pilihan</strong> untuk permukaan meja dan kabinet<br><br>Semua material kami telah melalui proses seleksi ketat untuk memastikan furniture Anda tidak hanya indah tetapi juga tahan lama.",
          "productId": 9
        },
        {
          "heading": "Studi Kasus: Transformasi Cafe di Jakarta",
          "content": "Salah satu klien kami, sebuah cafe di Jakarta Pusat, berhasil meningkatkan kunjungan pelanggan sebesar 40% setelah menggunakan furniture custom dari Mangala Living. Dengan desain industrial yang modern dan fungsional, cafe tersebut kini menjadi destinasi favorit anak muda di kawasan tersebut.<br><br>Hasil yang dicapai:<br>- Peningkatan kapasitas tempat duduk sebesar 30%<br>- Waktu kunjungan rata-rata meningkat 25 menit<br>- Penambahan follower media sosial 3x lipat<br>- ROI furniture tercapai dalam 8 bulan",
          "productId": 4
        }
      ],
      "conclusion": "Furniture custom adalah investasi yang akan terus memberikan nilai bagi bisnis Anda. Di Mangala Living, kami tidak hanya membuat furniture, tetapi kami menciptakan pengalaman yang akan diingat pelanggan Anda. Dengan konsultasi desain gratis, material berkualitas, dan pengalaman lebih dari 25 tahun, kami siap membantu mewujudkan furniture impian Anda. Hubungi kami hari ini untuk memulai perjalanan transformasi ruang komersial Anda."
    }
  },
  {
    "id": 310,
    "slug": "cara-memilih-produsen-mebel-indonesia-terbaik",
    "title": "Pilih Produsen Mebel Indonesia Terbaik",
    "category": "Tips and Trick",
    "excerpt": "Memilih produsen mebel Indonesia yang tepat melibatkan verifikasi reputasi dan pengalaman",
    "image": "https://images.unsplash.com/photo-1738162837335-3745e5d16c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaSUyMG1lYmVsJTIwamVwYXJhfGVufDB8MHx8fDE3NzAxMDIyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-02 08:00",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Membeli mebel dari produsen Indonesia yang tepat dapat menjadi keputusan yang bijak. Dengan lebih dari 25 tahun pengalaman dan 1000 proyek yang telah diselesaikan, Mangala Living memahami pentingnya memilih produsen mebel yang berkualitas. Dalam artikel ini, kita akan membahas beberapa faktor kunci yang perlu dipertimbangkan saat memilih produsen mebel Indonesia.",
      "keyPoints": [
        "Verifikasi reputasi dan pengalaman produsen",
        "Periksa sertifikasi SVLK dan FSC",
        "Minta contoh produk sebelum memesan",
        "Periksa proses kontrol kualitas"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Memilih Produsen Mebel Indonesia?",
          "content": "Indonesia dikenal sebagai salah satu negara dengan industri mebel yang berkembang pesat. Dengan banyaknya produsen mebel yang tersedia, memilih yang tepat dapat menjadi tugas yang sulit. Namun, dengan mempertimbangkan beberapa faktor kunci, Anda dapat menemukan produsen mebel yang sesuai dengan kebutuhan Anda.",
          "imageSearchQuery": "industri mebel indonesia",
          "image": "https://images.unsplash.com/photo-1558449174-6a54c5aa67c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaSUyMG1lYmVsJTIwaW5kb25lc2lhfGVufDB8MHx8fDE3NzAxMDIyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "industri mebel indonesia"
        },
        {
          "heading": "Faktor-Faktor yang Perlu Dipertimbangkan",
          "content": "Saat memilih produsen mebel Indonesia, ada beberapa faktor yang perlu dipertimbangkan. Pertama, pastikan produsen memiliki reputasi yang baik dan pengalaman yang cukup. Kedua, periksa apakah produsen memiliki sertifikasi SVLK dan FSC. Ketiga, minta contoh produk sebelum memesan. Keempat, periksa proses kontrol kualitas produsen."
        },
        {
          "heading": "Solusi Mangala Living",
          "content": "Mangala Living adalah salah satu produsen mebel Indonesia yang telah berpengalaman lebih dari 25 tahun. Kami memiliki workshop di Bekasi dan telah menyelesaikan lebih dari 1000 proyek. Kami juga memiliki sertifikasi SVLK dan FSC, serta proses kontrol kualitas yang ketat. Dengan demikian, Anda dapat yakin bahwa produk mebel yang Anda pesan dari kami akan memiliki kualitas yang tinggi.",
          "productId": 12
        },
        {
          "heading": "Kesimpulan",
          "content": "Memilih produsen mebel Indonesia yang tepat dapat menjadi keputusan yang bijak. Dengan mempertimbangkan beberapa faktor kunci dan memilih produsen yang berkualitas, Anda dapat menemukan produk mebel yang sesuai dengan kebutuhan Anda. Mangala Living siap membantu Anda dalam mencari produsen mebel yang tepat.",
          "productId": 5
        }
      ],
      "conclusion": "Dengan memilih produsen mebel Indonesia yang tepat, Anda dapat menemukan produk mebel yang berkualitas dan sesuai dengan kebutuhan Anda. Mangala Living siap membantu Anda dalam mencari produsen mebel yang tepat dan memberikan solusi mebel yang berkualitas."
    }
  },
  {
    "id": 311,
    "slug": "how-to-choose-best-indonesian-furniture-manufacturer",
    "title": "How to Choose the Best Indonesian Furniture Manufacturer",
    "category": "Tips and Trick",
    "excerpt": "Discover essential criteria for selecting reliable Indonesian furniture manufacturers, from verifying certifications to assessing quality control processes.",
    "image": "https://images.unsplash.com/photo-1617448570684-9b7d26138f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZnVybml0dXJlJTIwbWFudWZhY3R1cmluZyUyMEluZG9uZXNpYXxlbnwwfDB8fHwxNzcwMTAyMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-03 07:04",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Selecting the right furniture manufacturer is crucial for your business success, especially when sourcing from Indonesia's renowned furniture industry. With over 25 years of experience serving cafes, restaurants, hotels, and offices, Mangala Living understands the complexities of finding reliable manufacturing partners. This comprehensive guide will walk you through the essential factors to consider when choosing an Indonesian furniture manufacturer that meets your quality, sustainability, and business requirements.",
      "keyPoints": [
        "Verify manufacturer certifications like SVLK and FSC for legal, sustainable sourcing",
        "Assess quality control processes and request prototypes before bulk orders",
        "Evaluate factory capabilities, customization options, and export experience",
        "Check reputation through trade shows, online directories, and customer references"
      ],
      "language": "en",
      "sections": [
        {
          "heading": "Understanding Indonesia's Furniture Manufacturing Landscape",
          "content": "Indonesia has established itself as a global leader in furniture manufacturing, particularly known for its exceptional craftsmanship in teak, rattan, and solid wood furniture. The country's furniture industry is concentrated in specific regions, each specializing in different types of craftsmanship. Jepara is renowned for intricate wood carving and traditional furniture making, while Cirebon excels in rattan and synthetic weaving techniques. Semarang and surrounding areas are known for their modern industrial furniture production.<br><br>When evaluating potential manufacturers, it's essential to understand these regional specializations. A manufacturer in Jepara might offer superior carved wooden pieces, while one in Cirebon would be ideal for woven furniture. This geographical knowledge helps you align your product requirements with the right manufacturing expertise. Additionally, Indonesia's furniture industry has evolved to meet international standards, with many manufacturers now offering OEM services, custom designs, and export-ready products that comply with global quality expectations.",
          "imageSearchQuery": "Indonesian furniture factory production line",
          "image": "https://images.unsplash.com/photo-1606077089119-92075161bb60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwZnVybml0dXJlJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb24lMjBsaW5lfGVufDB8MHx8fDE3NzAxMDIzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "Indonesian furniture factory production line"
        },
        {
          "heading": "Essential Certifications and Legal Compliance",
          "content": "When selecting an Indonesian furniture manufacturer, verifying their certifications is non-negotiable for ensuring legal compliance and sustainable practices. The SVLK (Sistem Verifikasi Legalitas Kayu) certification is mandatory for all Indonesian wood product exports, confirming that timber has been legally sourced and processed according to Indonesian regulations. This certification protects you from potential legal issues and demonstrates the manufacturer's commitment to responsible forestry practices.<br><br>Beyond SVLK, the FSC (Forest Stewardship Council) certification indicates sustainable forest management and environmental responsibility. While not mandatory, FSC certification is increasingly important for international buyers who prioritize eco-friendly products. Additionally, check for ISO certifications that demonstrate quality management systems and consistent production standards. Reputable manufacturers should readily provide documentation of these certifications and explain their compliance processes. Be wary of manufacturers who cannot provide current certification documents or seem hesitant to discuss their legal compliance procedures."
        },
        {
          "heading": "Quality Control and Production Capabilities",
          "content": "Quality control is the cornerstone of successful furniture manufacturing partnerships. Reliable Indonesian manufacturers implement comprehensive quality control systems throughout the production process, from raw material selection to final packaging. Look for manufacturers who provide detailed quality documentation, including material specifications, production checklists, and final inspection reports. The best manufacturers welcome third-party quality inspections and can accommodate your specific quality requirements.<br><br>Production capabilities should align with your business needs. Evaluate the manufacturer's machinery, workshop size, and workforce expertise to ensure they can handle your order volume and complexity. Modern manufacturers invest in advanced equipment while maintaining skilled craftsmen for detailed work. Ask about their production capacity, lead times, and ability to scale operations as your business grows. A manufacturer's willingness to provide factory tours, either in-person or virtually, demonstrates transparency and confidence in their operations. Mangala Living, with our 25+ years of experience, maintains state-of-the-art facilities in Bekasi while preserving traditional craftsmanship techniques."
        },
        {
          "heading": "Customization Options and Design Capabilities",
          "content": "In today's competitive market, customization capabilities are crucial for differentiating your furniture offerings. Leading Indonesian manufacturers offer extensive customization options, from material selection and finishes to unique design modifications. When evaluating manufacturers, assess their design team's expertise, CAD capabilities, and willingness to collaborate on custom projects. The best manufacturers can transform your concepts into production-ready designs while providing valuable input based on their manufacturing experience.<br><br>Consider the manufacturer's material expertise beyond standard options. Premium manufacturers work with various wood species, metals, fabrics, and sustainable materials, offering you flexibility in product development. They should also provide material samples, finish options, and prototyping services to ensure your vision translates perfectly into the final product. Communication is key in customization projects, so choose manufacturers with dedicated design teams and clear processes for handling custom orders. Mangala Living specializes in bespoke industrial furniture solutions, offering custom designs that perfectly match our clients' brand aesthetics and functional requirements."
        },
        {
          "heading": "Communication, Contracts, and Business Terms",
          "content": "Effective communication forms the foundation of successful manufacturing partnerships. Choose manufacturers who demonstrate clear, responsive communication throughout your evaluation process. They should provide detailed quotations, production timelines, and regular updates during manufacturing. Language capabilities are important, but more crucial is their ability to understand your requirements and communicate clearly about production processes, potential challenges, and solutions.<br><br>Written contracts are essential for protecting both parties and ensuring quality standards. Your contract should clearly outline product specifications, quality requirements, delivery schedules, payment terms, and dispute resolution procedures. Reputable manufacturers are willing to discuss and negotiate contract terms, demonstrating their commitment to long-term partnerships. Additionally, evaluate their after-sales support, warranty policies, and willingness to address any issues that may arise after delivery. The best manufacturers view contracts as partnership agreements rather than mere transactional documents, focusing on mutual success and continuous improvement.",
          "productId": 6
        },
        {
          "heading": "Logistics, Export Experience, and Market Knowledge",
          "content": "Export experience is critical when choosing an Indonesian furniture manufacturer, as international shipping involves complex logistics and regulations. Experienced manufacturers understand documentation requirements, packaging standards, and shipping procedures for different markets. They should have established relationships with freight forwarders and knowledge of destination country regulations, including import duties and compliance requirements.<br><br>Evaluate the manufacturer's track record with similar clients and their ability to handle international shipping challenges. They should provide guidance on packaging optimization for safe transport, documentation preparation, and delivery scheduling. Additionally, manufacturers with international market experience can offer valuable insights into design trends, material preferences, and quality expectations specific to your target market. This market knowledge can be invaluable for product development and positioning. Mangala Living has successfully served international clients for over two decades, understanding the nuances of global furniture markets and ensuring seamless delivery to our diverse customer base."
        }
      ],
      "conclusion": "Choosing the right Indonesian furniture manufacturer requires careful evaluation of multiple factors, from certifications and quality control to customization capabilities and export experience. By thoroughly assessing potential partners against these criteria, you can establish a reliable manufacturing relationship that supports your business growth and ensures consistent product quality. Remember that the best manufacturers view partnerships as long-term collaborations, investing in your success through quality products, transparent communication, and continuous improvement. Take the time to conduct proper due diligence, request samples, and build relationships with manufacturers who align with your business values and quality standards. With the right partner, Indonesian furniture manufacturing can provide exceptional value, unique craftsmanship, and sustainable solutions for your business needs."
    }
  },
  {
    "id": 312,
    "slug": "industrial-bar-chair-tips-and-tricks",
    "title": "Industrial Bar Chair Tips",
    "category": "Tips and Trick",
    "excerpt": "Discover the best industrial bar chair tips for cafes, restaurants, and bars",
    "image": "https://images.unsplash.com/photo-1650167202574-d8448576292a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmFyJTIwY2hhaXIlMjBkZXNpZ258ZW58MHwwfHx8MTc3MDEwMjM2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-03 07:05",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "When it comes to furnishing a bar or restaurant, <strong>industrial bar chairs</strong> are a popular choice due to their durability and stylish design. At Mangala Living, we have over 25 years of experience in providing high-quality industrial furniture to cafes, restaurants, and hotels. In this article, we will share some valuable tips and tricks for choosing the perfect industrial bar chair for your business.",
      "keyPoints": [
        "Consider the height and ergonomics of the chair",
        "Choose a durable and easy-to-clean material",
        "Think about the overall aesthetic and style of your bar or restaurant"
      ],
      "language": "en",
      "sections": [
        {
          "heading": "Why Industrial Bar Chairs are a Great Choice",
          "content": "Industrial bar chairs are a great choice for businesses because they are <em>incredibly durable</em> and can withstand heavy use. They are also often made from <em>easy-to-clean materials</em>, such as metal or recycled plastic, which makes them a practical choice for busy bars and restaurants. At Mangala Living, we offer a range of industrial bar chairs that are designed to meet the needs of businesses like yours.",
          "imageSearchQuery": "industrial bar chair in restaurant",
          "image": "https://images.unsplash.com/photo-1618798481077-3be76e908cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmFyJTIwY2hhaXIlMjBpbiUyMHJlc3RhdXJhbnR8ZW58MHwwfHx8MTc3MDEwMjM2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "industrial bar chair in restaurant"
        },
        {
          "heading": "Practical Guide to Choosing the Perfect Industrial Bar Chair",
          "content": "When choosing an industrial bar chair, there are several factors to consider. First, think about the <strong>height and ergonomics</strong> of the chair. You want to make sure that it is comfortable for your customers to sit on, and that it provides adequate support for their back and legs. You should also consider the <strong>material</strong> that the chair is made from, and whether it is <strong>easy to clean and maintain</strong>. At Mangala Living, our team of experts can help you choose the perfect industrial bar chair for your business."
        },
        {
          "heading": "Mangala Living Industrial Bar Chair Solutions",
          "content": "At Mangala Living, we offer a range of industrial bar chairs that are designed to meet the needs of businesses like yours. Our <strong>Beam Industrial Bar Chair</strong> (product ID: 6) is a popular choice, and features a durable metal frame and a comfortable, ergonomic design. We also offer a range of other industrial bar chairs, including the <strong>Bar Stall Chair</strong> (product ID: 7) and the <strong>Steelframe Outdoor Bar Set</strong> (product ID: 8).",
          "productId": 6
        },
        {
          "heading": "Next Steps",
          "content": "If you are interested in learning more about our industrial bar chairs, or would like to discuss your specific needs with one of our experts, please don't hesitate to <strong>contact us</strong>. We have a team of experienced professionals who are dedicated to helping businesses like yours find the perfect furniture solutions. With over 1000 projects under our belt, and a workshop in Bekasi, we are confident that we can meet your needs and exceed your expectations.",
          "productId": 7
        }
      ],
      "conclusion": "In conclusion, industrial bar chairs are a great choice for businesses because they are durable, easy to clean, and stylish. By considering the height and ergonomics of the chair, choosing a durable and easy-to-clean material, and thinking about the overall aesthetic and style of your bar or restaurant, you can find the perfect industrial bar chair for your business. At Mangala Living, we are committed to providing high-quality industrial furniture solutions that meet the needs of businesses like yours."
    }
  },
  {
    "id": 313,
    "slug": "industrial-bar-tables-bulk-order-supplier",
    "title": "Industrial Bar Tables",
    "category": "Tips and Trick",
    "excerpt": "Discover the best industrial bar table supplier for bulk orders, perfect for cafes, restaurants, and hotels.",
    "image": "https://images.unsplash.com/photo-1632657587514-2c237878895f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmVzdGF1cmFudCUyMGJhciUyMHRhYmxlJTIwZGVzaWdufGVufDB8MHx8fDE3NzAxMDI0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-03 07:07",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "When it comes to furnishing your cafe, restaurant, or hotel bar, <strong>industrial bar tables</strong> are a popular choice due to their durability and sleek design. With over 25 years of experience and 1000+ projects completed, Mangala Living is the go-to supplier for industrial bar tables in bulk. In this article, we'll share tips and tricks for choosing the right industrial bar table supplier for your business.",
      "keyPoints": [
        "Durable and customizable industrial bar tables",
        "Importance of bulk ordering for cost savings",
        "Mangala Living's expertise in industrial furniture supply"
      ],
      "language": "en",
      "sections": [
        {
          "heading": "Why Industrial Bar Tables are a Must-Have?",
          "content": "Industrial bar tables have become a staple in modern cafe, restaurant, and hotel design. Their <em>durable</em> and <em>low-maintenance</em> nature makes them perfect for high-traffic areas. At Mangala Living, we offer a wide range of industrial bar tables that can be customized to fit your unique business needs.",
          "imageSearchQuery": "modern industrial bar table design",
          "image": "https://images.unsplash.com/photo-1761426202646-424a65f37aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwYmFyJTIwdGFibGUlMjBkZXNpZ258ZW58MHwwfHx8MTc3MDEwMjQ3OHww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "modern industrial bar table design"
        },
        {
          "heading": "Practical Guide to Choosing the Right Supplier",
          "content": "When selecting a supplier for your industrial bar tables, consider factors such as <strong>quality</strong>, <strong>price</strong>, and <strong>customization options</strong>. Look for a supplier with a proven track record, like Mangala Living, which has completed over 1000 projects and has a workshop in Bekasi."
        },
        {
          "heading": "Mangala Living Solutions for Industrial Bar Tables",
          "content": "At Mangala Living, we offer a range of industrial bar tables that can be customized to fit your business needs. Our <strong>Beam Industrial Bar Chair (product ID: 6)</strong> and <strong>Bar Stall Chair (product ID: 7)</strong> are popular choices among our clients. We also offer <strong>Steelframe Outdoor Bar Set (product ID: 8)</strong> for outdoor seating areas.",
          "productId": 6
        },
        {
          "heading": "Benefits of Bulk Ordering from Mangala Living",
          "content": "By ordering industrial bar tables in bulk from Mangala Living, you can enjoy <strong>cost savings</strong> and <strong>fast delivery</strong>. Our experienced team will work with you to ensure that your order is completed to your satisfaction. Contact us today to learn more about our bulk ordering options and to receive a quote for your industrial bar table needs.",
          "productId": 8
        }
      ],
      "conclusion": "In conclusion, choosing the right industrial bar table supplier is crucial for your business. With Mangala Living, you can trust that you're getting high-quality, durable, and customizable industrial bar tables that will elevate your cafe, restaurant, or hotel's design. Contact us today to learn more about our industrial bar table solutions and to place your bulk order."
    }
  },
  {
    "id": 314,
    "slug": "hollow-galvanized-industrial-steel-bar-tips",
    "title": "Hollow Steel Bar Guide",
    "category": "Tips and Trick",
    "excerpt": "Discover the benefits of hollow galvanized industrial steel bars for your business",
    "image": "",
    "date": "2026-02-03 07:09",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "As a business owner in the hospitality or office sector, you're likely no stranger to the importance of durable and versatile materials. At Mangala Living, we've worked with numerous clients across cafes, restaurants, hotels, and offices to provide customized industrial furniture solutions. In this article, we'll delve into the world of hollow galvanized industrial steel bars and explore their applications, benefits, and tips for incorporation.",
      "keyPoints": [
        "Hollow steel bars offer exceptional strength-to-weight ratio",
        "Galvanized coating provides corrosion resistance",
        "Customizable for various industrial furniture applications"
      ],
      "language": "en",
      "sections": [
        {
          "heading": "What are Hollow Galvanized Industrial Steel Bars?",
          "content": "Hollow steel bars are made from high-strength steel alloys and feature a hollow center, reducing weight while maintaining structural integrity. The galvanization process involves coating the steel with a layer of zinc, providing excellent corrosion resistance and durability. This makes them ideal for use in harsh environments, such as coastal areas or high-traffic spaces.",
          "imageSearchQuery": "close-up of galvanized steel bar",
          "image": "https://images.unsplash.com/photo-1710340553083-3836a0882614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxjbG9zZS11cCUyMG9mJTIwZ2FsdmFuaXplZCUyMHN0ZWVsJTIwYmFyfGVufDB8MHx8fDE3NzAxMDI1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "close-up of galvanized steel bar"
        },
        {
          "heading": "Practical Applications of Hollow Steel Bars",
          "content": "At Mangala Living, we've utilized hollow steel bars in a variety of projects, from <strong>industrial-style cafe tables</strong> to <em>custom shelving units</em> for offices. Their versatility and durability make them an excellent choice for businesses seeking to create a unique and functional space. Some popular applications include: <br> - Table bases and frames <br> - Shelving and storage units <br> - Decorative accents and features"
        },
        {
          "heading": "Tips for Incorporating Hollow Steel Bars into Your Design",
          "content": "When working with hollow steel bars, it's essential to consider factors such as <strong>load capacity</strong> and <em>material compatibility</em>. To ensure a seamless integration, we recommend consulting with our experienced team at Mangala Living. With over 25 years of experience and 1000+ projects under our belt, we can provide valuable insights and guidance on how to make the most of hollow steel bars in your design.",
          "productId": 12
        },
        {
          "heading": "Mangala Living Solutions",
          "content": "At Mangala Living, we pride ourselves on our ability to provide customized industrial furniture solutions that meet the unique needs of our clients. From <strong>industrial-style chairs</strong> to <em>custom storage units</em>, we can help you create a space that is both functional and aesthetically pleasing. Our workshop in Bekasi is equipped to handle large-scale projects, and our team is dedicated to delivering exceptional results.",
          "productId": 5
        }
      ],
      "conclusion": "In conclusion, hollow galvanized industrial steel bars offer a unique combination of strength, durability, and versatility, making them an excellent choice for businesses seeking to create a functional and visually appealing space. By considering the tips and applications outlined in this article, you can unlock the full potential of hollow steel bars and take your design to the next level. Contact Mangala Living today to learn more about our customized industrial furniture solutions and how we can help you achieve your design goals."
    }
  },
  {
    "id": 315,
    "slug": "cafe-terbaik-sekitar-jakarta",
    "title": "Cafe Terbaik di Sekitar Jakarta",
    "category": "Tips and Trick",
    "excerpt": "Temukan cafe terbaik di sekitar Jakarta untuk pengalaman kuliner yang tak terlupakan",
    "image": "",
    "date": "2026-02-04 07:25",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Jakarta dikenal sebagai kota yang tidak pernah tidur, dan salah satu hal yang membuat kota ini tetap hidup adalah cafe-cafe yang menawarkan pengalaman kuliner yang unik. Dengan lebih dari 25 tahun pengalaman, Mangala Living telah bekerja sama dengan banyak cafe di Jakarta untuk menciptakan ruang yang nyaman dan menarik. Berikut beberapa tips untuk menemukan cafe terbaik di sekitar Jakarta.",
      "keyPoints": [
        "Pilih cafe dengan desain interior yang unik",
        "Perhatikan kualitas makanan dan minuman",
        "Cari cafe dengan lokasi yang strategis"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Desain Interior Penting?",
          "content": "Desain interior cafe dapat mempengaruhi mood dan pengalaman kuliner Anda. <strong>Industrial furniture</strong> dapat menjadi pilihan yang tepat untuk menciptakan suasana yang modern dan nyaman. Mangala Living menawarkan berbagai pilihan furniture industrial yang dapat disesuaikan dengan kebutuhan cafe Anda.",
          "imageSearchQuery": "industrial cafe furniture jakarta"
        },
        {
          "heading": "Tips Memilih Cafe Terbaik",
          "content": "Untuk menemukan cafe terbaik di sekitar Jakarta, Anda perlu memperhatikan beberapa hal. <em>Pertama</em>, pilih cafe dengan desain interior yang unik dan menarik. <em>Kedua</em>, perhatikan kualitas makanan dan minuman yang disajikan. <em>Ketiga</em>, cari cafe dengan lokasi yang strategis dan mudah dijangkau."
        },
        {
          "heading": "Solusi Mangala Living",
          "content": "Mangala Living menawarkan berbagai solusi untuk cafe di sekitar Jakarta. Dengan lebih dari 1000 proyek yang telah diselesaikan, kami memiliki pengalaman yang luas dalam menciptakan ruang yang nyaman dan menarik. Kami juga memiliki <strong>workshop di Bekasi</strong> yang dapat memproduksi furniture industrial dengan kualitas yang tinggi. Salah satu produk kami yang dapat menjadi pilihan adalah <strong>Frame Loft Bookshelf (Storage)</strong> dengan productId 1.",
          "productId": 1
        },
        {
          "heading": "Langkah Selanjutnya",
          "content": "Jika Anda sedang mencari cafe terbaik di sekitar Jakarta, jangan ragu untuk menghubungi Mangala Living. Kami dapat membantu Anda menciptakan ruang yang nyaman dan menarik dengan furniture industrial yang berkualitas. <br> Kunjungi website kami untuk mendapatkan informasi lebih lanjut tentang produk dan layanan kami. Produk lain seperti <strong>Bandung Pipe Dining Table (Dining Set)</strong> dengan productId 4 juga dapat menjadi pilihan.",
          "productId": 4
        }
      ],
      "conclusion": "Dengan tips dan solusi yang telah disebutkan di atas, Anda dapat menemukan cafe terbaik di sekitar Jakarta yang sesuai dengan kebutuhan Anda. Mangala Living siap membantu Anda menciptakan ruang yang nyaman dan menarik dengan furniture industrial yang berkualitas."
    }
  },
  {
    "id": 316,
    "slug": "meja-hollow-galvanis-jakarta",
    "title": "Meja Hollow Galvanis Jakarta",
    "category": "Tips and Trick",
    "excerpt": "Meja hollow galvanis untuk cafe, restoran, dan kantor di Jakarta",
    "image": "https://images.unsplash.com/photo-1763521306739-51d9f3e08e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmVzdGF1cmFudCUyMHRhYmxlJTIwZGVzaWdufGVufDB8MHx8fDE3NzAxOTA4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-04 07:39",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Mangala Living telah berpengalaman lebih dari 25 tahun dalam menyediakan furniture industri untuk berbagai bisnis di Jakarta, termasuk meja hollow galvanis. Meja ini sangat cocok untuk cafe, restoran, dan kantor yang ingin memiliki tampilan modern dan minimalis. Dalam artikel ini, kita akan membahas tentang kelebihan meja hollow galvanis dan tips dalam memilihnya.",
      "keyPoints": [
        "Kelebihan meja hollow galvanis",
        "Tips memilih meja hollow galvanis",
        "Desain meja hollow galvanis untuk cafe dan restoran"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Meja Hollow Galvanis Penting?",
          "content": "Meja hollow galvanis sangat penting karena tahan lama dan mudah dibersihkan. Selain itu, meja ini juga memiliki tampilan modern dan minimalis yang sangat cocok untuk bisnis di Jakarta. Mangala Living telah menyediakan meja hollow galvanis untuk lebih dari 1000 proyek di Jakarta, sehingga kita memiliki pengalaman yang luas dalam menyediakan furniture industri yang berkualitas.",
          "imageSearchQuery": "minimalist office desk design",
          "image": "https://images.unsplash.com/photo-1696087225391-eb97abf5ba20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwZGVzayUyMGRlc2lnbnxlbnwwfDB8fHwxNzcwMTkwODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "minimalist office desk design"
        },
        {
          "heading": "Tips Memilih Meja Hollow Galvanis",
          "content": "Dalam memilih meja hollow galvanis, ada beberapa hal yang perlu diperhatikan. Pertama, pastikan meja tersebut tahan lama dan mudah dibersihkan. Kedua, perhatikan desain meja yang sesuai dengan kebutuhan bisnis Anda. Mangala Living menyediakan meja hollow galvanis dengan desain yang variatif, sehingga Anda dapat memilih meja yang sesuai dengan kebutuhan Anda."
        },
        {
          "heading": "Desain Meja Hollow Galvanis untuk Cafe dan Restoran",
          "content": "Mangala Living menyediakan meja hollow galvanis dengan desain yang variatif untuk cafe dan restoran. Meja ini dapat dibuat dengan ukuran yang sesuai dengan kebutuhan bisnis Anda. Selain itu, meja ini juga dapat dibuat dengan bahan yang tahan lama dan mudah dibersihkan, sehingga sangat cocok untuk bisnis yang sibuk.",
          "productId": 15
        },
        {
          "heading": "Langkah Selanjutnya",
          "content": "Jika Anda ingin memiliki meja hollow galvanis untuk bisnis Anda, silakan hubungi Mangala Living. Kami akan membantu Anda dalam memilih meja yang sesuai dengan kebutuhan Anda. Dengan pengalaman lebih dari 25 tahun, kami percaya bahwa kami dapat membantu Anda dalam menyediakan furniture industri yang berkualitas.",
          "productId": 4
        }
      ],
      "conclusion": "Meja hollow galvanis sangat penting untuk bisnis di Jakarta, terutama untuk cafe, restoran, dan kantor. Dengan kelebihan yang tahan lama dan mudah dibersihkan, meja ini sangat cocok untuk bisnis yang sibuk. Mangala Living telah berpengalaman lebih dari 25 tahun dalam menyediakan furniture industri, sehingga kami percaya bahwa kami dapat membantu Anda dalam memilih meja hollow galvanis yang sesuai dengan kebutuhan Anda."
    }
  },
  {
    "id": 317,
    "slug": "meja-pipeline-industri",
    "title": "Meja Pipeline Industri",
    "category": "Tips and Trick",
    "excerpt": "Meja pipeline industri untuk cafe, restoran, dan kantor",
    "image": "https://images.unsplash.com/photo-1673115810074-8944eba483f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZWxpbmUlMjB0YWJsZSUyMGRlc2lnbnxlbnwwfDB8fHwxNzcwMTkzOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-04 08:32",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Meja pipeline industri telah menjadi tren dalam desain interior komersial, terutama untuk cafe, restoran, dan kantor. Dengan keunikan dan kekuatannya, meja pipeline industri dapat menjadi pilihan yang tepat untuk menciptakan suasana yang modern dan fungsional. Mangala Living, dengan pengalaman lebih dari 25 tahun dan lebih dari 1000 proyek, siap membantu Anda dalam menciptakan meja pipeline industri yang sesuai dengan kebutuhan Anda.",
      "keyPoints": [
        "Keunikan meja pipeline industri",
        "Kekuatan dan ketahanan meja pipeline industri",
        "Tips dalam memilih meja pipeline industri"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Meja Pipeline Industri?",
          "content": "Meja pipeline industri memiliki keunikan yang tidak dimiliki oleh meja lainnya. Dengan desain yang minimalis dan industrial, meja pipeline industri dapat menciptakan suasana yang modern dan fungsional. Selain itu, meja pipeline industri juga memiliki kekuatan dan ketahanan yang tinggi, sehingga dapat digunakan dalam jangka waktu yang lama.",
          "imageSearchQuery": "industrial interior design",
          "image": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfHx8MTc3MDE5Mzk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "industrial interior design"
        },
        {
          "heading": "Tips dalam Memilih Meja Pipeline Industri",
          "content": "Dalam memilih meja pipeline industri, ada beberapa hal yang perlu dipertimbangkan. Pertama, perlu mempertimbangkan ukuran dan bentuk meja yang sesuai dengan kebutuhan Anda. Kedua, perlu mempertimbangkan bahan dan kualitas meja. Mangala Living menawarkan meja pipeline industri dengan bahan yang berkualitas dan tahan lama."
        },
        {
          "heading": "Solusi Meja Pipeline Industri dari Mangala Living",
          "content": "Mangala Living memiliki pengalaman lebih dari 25 tahun dalam menciptakan meja pipeline industri yang sesuai dengan kebutuhan pelanggan. Dengan workshop di Bekasi, Mangala Living dapat menciptakan meja pipeline industri dengan kualitas yang tinggi dan harga yang kompetitif. <strong>Meja Kerja Industrial (ID: 15)</strong> adalah salah satu contoh meja pipeline industri yang ditawarkan oleh Mangala Living.",
          "productId": 15
        }
      ],
      "conclusion": "Meja pipeline industri dapat menjadi pilihan yang tepat untuk menciptakan suasana yang modern dan fungsional. Dengan keunikan dan kekuatannya, meja pipeline industri dapat digunakan dalam jangka waktu yang lama. Mangala Living siap membantu Anda dalam menciptakan meja pipeline industri yang sesuai dengan kebutuhan Anda."
    }
  },
  {
    "id": 318,
    "slug": "furniture-teakwood-bekasi-tips-dan-trik",
    "title": "Furniture Teakwood Bekasi",
    "category": "Tips and Trick",
    "excerpt": "Tips memilih furniture teakwood Bekasi yang tepat untuk ruang Anda",
    "image": "",
    "date": "2026-02-04 09:55",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Furniture teakwood Bekasi menjadi pilihan banyak orang karena kekuatan dan keindahannya. Mangala Living, dengan pengalaman lebih dari 25 tahun dan lebih dari 1000 proyek, memahami betapa pentingnya memilih furniture yang tepat untuk ruang Anda. Berikut beberapa tips dan trik dalam memilih furniture teakwood Bekasi.",
      "keyPoints": [
        "Pilihlah furniture teakwood yang sesuai dengan tema ruang",
        "Perhatikan kualitas bahan dan konstruksi",
        "Pertimbangkan untuk custom design"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Furniture Teakwood Bekasi?",
          "content": "Furniture teakwood Bekasi dipilih karena kekuatan dan keindahannya. <strong>Teakwood</strong> merupakan bahan yang tahan lama dan dapat bertahan dalam berbagai kondisi lingkungan. Selain itu, <em>teakwood</em> juga memiliki keindahan alami yang dapat menambah kesan elegan pada ruang Anda.",
          "imageSearchQuery": "teakwood texture background"
        },
        {
          "heading": "Tips Memilih Furniture Teakwood Bekasi",
          "content": "Dalam memilih furniture teakwood Bekasi, ada beberapa hal yang perlu dipertimbangkan. Pertama, pilihlah furniture yang sesuai dengan tema ruang Anda. Kedua, perhatikan kualitas bahan dan konstruksi furniture. Pastikan bahwa furniture tersebut terbuat dari bahan yang kuat dan tahan lama. Ketiga, pertimbangkan untuk custom design furniture sesuai dengan kebutuhan Anda."
        },
        {
          "heading": "Mangala Living Solusi Furniture Teakwood Bekasi",
          "content": "Mangala Living menyediakan berbagai jenis furniture teakwood Bekasi yang dapat disesuaikan dengan kebutuhan Anda. Dengan pengalaman lebih dari 25 tahun dan workshop di Bekasi, kami dapat memproduksi furniture yang berkualitas dan sesuai dengan keinginan Anda. Salah satu produk kami adalah <strong>Meja Kerja Industrial</strong> yang terbuat dari teakwood dan memiliki desain yang modern dan elegan.",
          "productId": 15
        },
        {
          "heading": "Kelebihan Furniture Teakwood Bekasi dari Mangala Living",
          "content": "Furniture teakwood Bekasi dari Mangala Living memiliki beberapa kelebihan. Pertama, furniture kami terbuat dari bahan yang kuat dan tahan lama. Kedua, kami menyediakan custom design yang sesuai dengan kebutuhan Anda. Ketiga, harga furniture kami sangat kompetitif dan sesuai dengan kualitas yang kami tawarkan.",
          "productId": 4
        }
      ],
      "conclusion": "Dengan memilih furniture teakwood Bekasi yang tepat, Anda dapat menambah kesan elegan dan nyaman pada ruang Anda. Mangala Living siap membantu Anda dalam memilih dan memproduksi furniture teakwood Bekasi yang sesuai dengan kebutuhan Anda. <br> Kunjungi workshop kami di Bekasi untuk melihat langsung koleksi furniture teakwood Bekasi kami."
    }
  },
  {
    "id": 319,
    "slug": "furniture-cafe-terbaik",
    "title": "Furniture Cafe Terbaik",
    "category": "Tips and Trick",
    "excerpt": "Tips furniture cafe terbaik untuk meningkatkan kesan pengunjung",
    "image": "https://images.unsplash.com/photo-1689263560312-b39e79579248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2FmZSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8MHx8fDE3NzAxOTkxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-04 09:58",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Dalam menciptakan suasana nyaman di cafe, furniture menjadi salah satu elemen penting. Mangala Living, dengan pengalaman lebih dari 25 tahun dan lebih dari 1000 proyek, memahami betapa pentingnya memilih furniture yang tepat. Berikut adalah 10 tips furniture cafe terbaik yang dapat meningkatkan kesan pengunjung.",
      "keyPoints": [
        "Pilih furniture yang tahan lama",
        "Desain unik dan menarik",
        "Furniture yang ergonomis",
        "Pemilihan bahan yang tepat",
        "Furniture yang mudah dibersihkan"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Furniture Penting?",
          "content": "Furniture di cafe tidak hanya berfungsi sebagai tempat duduk, tetapi juga sebagai elemen dekorasi yang dapat meningkatkan kesan pengunjung. Dengan memilih furniture yang tepat, Anda dapat menciptakan suasana yang nyaman dan menarik, sehingga pengunjung merasa betah dan ingin kembali lagi.",
          "imageSearchQuery": "cafe interior design ideas",
          "image": "https://images.unsplash.com/photo-1612771377054-cbab1fbb9ad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBpZGVhc3xlbnwwfDB8fHwxNzcwMTk5MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "cafe interior design ideas"
        },
        {
          "heading": "Tips Memilih Furniture Cafe",
          "content": "Dalam memilih furniture cafe, ada beberapa hal yang perlu dipertimbangkan, seperti kenyamanan, keamanan, dan estetika. Pastikan Anda memilih furniture yang tahan lama dan mudah dibersihkan, serta memiliki desain yang unik dan menarik."
        },
        {
          "heading": "Produk Pilihan untuk Cafe",
          "content": "Mangala Living menawarkan berbagai produk furniture cafe yang dapat memenuhi kebutuhan Anda, seperti <strong>Frame Loft Bookshelf (Storage)</strong> dengan ID produk 1, <strong>Balcony Bar Table (Bar Set, Outdoor)</strong> dengan ID produk 2, <strong>Lounge Set Coffee Table (Tables)</strong> dengan ID produk 3, <strong>Bench Corner Lounge (Sofa Bench)</strong> dengan ID produk 17, <strong>Industrial Daybed Frame (Daybed)</strong> dengan ID produk 16, <strong>Bandung Pipe Dining Table (Dining Set)</strong> dengan ID produk 4, <strong>Dining Set dengan 2 Chairs (Dining Set)</strong> dengan ID produk 5, <strong>Beam Industrial Bar Chair (Bar Set)</strong> dengan ID produk 6, <strong>Bar Stall Chair (Bar Set)</strong> dengan ID produk 7, dan <strong>Steelframe Outdoor Bar Set (Bar Set, Outdoor)</strong> dengan ID produk 8.",
          "productId": 1
        },
        {
          "heading": "Kelebihan Produk Mangala Living",
          "content": "Produk furniture Mangala Living memiliki kelebihan seperti tahan lama, mudah dibersihkan, dan memiliki desain yang unik dan menarik. Dengan memilih produk Mangala Living, Anda dapat menciptakan suasana cafe yang nyaman dan menarik, sehingga pengunjung merasa betah dan ingin kembali lagi.",
          "productId": 5
        },
        {
          "heading": "Kesimpulan",
          "content": "Dalam menciptakan suasana nyaman di cafe, furniture menjadi salah satu elemen penting. Dengan memilih furniture yang tepat, Anda dapat meningkatkan kesan pengunjung dan menciptakan suasana yang nyaman dan menarik. Mangala Living menawarkan berbagai produk furniture cafe yang dapat memenuhi kebutuhan Anda, sehingga Anda dapat menciptakan cafe yang sukses dan meningkatkan pendapatan Anda."
        }
      ],
      "conclusion": "Dengan memilih furniture yang tepat, Anda dapat menciptakan suasana cafe yang nyaman dan menarik, sehingga pengunjung merasa betah dan ingin kembali lagi. Mangala Living siap membantu Anda dalam menciptakan cafe yang sukses dengan produk furniture yang berkualitas dan desain yang unik dan menarik."
    }
  },
  {
    "id": 320,
    "slug": "mangala-supplier-furniture-cafe-produk-lengkap",
    "title": "Supplier Furniture Cafe dengan Produk Lengkap",
    "category": "Tips and Trick",
    "excerpt": "Temukan supplier furniture cafe terpercaya dengan pilihan produk lengkap. Download katalog dan dapatkan penawaran harga terbaik dari Mangala.",
    "image": "https://images.unsplash.com/photo-1689263560312-b39e79579248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2FmZSUyMGZ1cm5pdHVyZSUyMGRlc2lnbnxlbnwwfDB8fHwxNzcwMTk5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-04 09:59",
    "author": "Helmi Ramdan",
    "status": "synced",
    "customContent": {
      "introduction": "Sebagai pemilik cafe atau restoran, memilih supplier furniture yang tepat adalah kunci kesuksesan bisnis Anda. Mangala Living hadir sebagai solusi terpercaya dengan pengalaman 25+ tahun melayani kebutuhan furniture komersial di Indonesia.",
      "keyPoints": [
        "Pilihan produk furniture cafe lengkap dan berkualitas",
        "Pengalaman 25+ tahun sebagai supplier furniture komersial",
        "Katalog produk bisa diunduh melalui website",
        "Harga kompetitif dengan kualitas premium",
        "Layanan konsultasi desain interior cafe"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Memilih Mangala sebagai Supplier Furniture Cafe?",
          "content": "Mangala Living bukan sekadar supplier furniture biasa. Kami adalah mitra bisnis yang memahami kebutuhan unik cafe dan restoran. Dengan workshop sendiri di Bekasi, kami menjamin kualitas produksi dan ketepatan waktu pengiriman. Pengalaman kami dalam mengerjakan 1000+ proyek furniture komersial menjadikan kami pilihan utama para pemilik cafe di Indonesia.<br><br>Furniture cafe yang kami produksi dirancang khusus untuk daya tahan tinggi dan estetika yang menarik. Material pilihan seperti besi hollow, kayu solid, dan finishing premium menjadikan setiap produk kami tahan lama meskipun digunakan secara intensif.",
          "imageSearchQuery": "cafe interior design industrial furniture",
          "image": "https://images.unsplash.com/photo-1689263560312-b39e79579248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBpbmR1c3RyaWFsJTIwZnVybml0dXJlfGVufDB8MHx8fDE3NzAxOTkyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "cafe interior design industrial furniture"
        },
        {
          "heading": "Produk Furniture Cafe Lengkap dari Mangala",
          "content": "Kami menyediakan beragam pilihan furniture yang dibutuhkan cafe dan restoran:<br><br><strong>Meja Makan & Bar</strong><br>Koleksi meja makan industrial kami terdiri dari berbagai ukuran dan desain yang cocok untuk cafe dengan konsep minimalis hingga vintage. Meja bar kami juga dilengkapi dengan kursi bar yang ergonomis dan stylish.<br><br><strong>Kursi & Sofa</strong><br>Dari kursi makan hingga sofa lounge, semua produk kami dirancang untuk kenyamanan pelanggan Anda. Material kulit sintetis berkualitas tinggi dan rangka besi kokoh menjamin daya tahan produk.<br><br><strong>Storage & Display</strong><br>Kebutuhan penyimpanan dan display produk juga kami sediakan, mulai dari rak dinding hingga kabinet display yang mempercantik interior cafe Anda."
        },
        {
          "heading": "Keunggulan Furniture Cafe Mangala",
          "content": "Apa yang membuat furniture cafe Mangala berbeda dari yang lain? Pertama, desain industrial yang timeless dan mudah dipadukan dengan berbagai konsep interior. Kedua, material berkualitas tinggi yang tahan terhadap cuaca dan penggunaan intensif. Ketiga, harga yang kompetitif karena kami produksi sendiri tanpa perantara.<br><br>Keempat, custom design service yang memungkinkan Anda mendapatkan furniture sesuai dengan kebutuhan spesifik cafe Anda. Kelima, after sales service yang responsif untuk memastikan kepuasan Anda sebagai pelanggan.",
          "productId": 4
        },
        {
          "heading": "Download Katalog & Dapatkan Penawaran Harga",
          "content": "Kami memahami bahwa pemilihan furniture cafe membutuhkan pertimbangan matang. Oleh karena itu, kami menyediakan katalog produk lengkap yang bisa Anda unduh melalui website kami. Katalog ini berisi detail spesifikasi, ukuran, material, dan harga dari seluruh produk furniture cafe kami.<br><br>Untuk informasi lebih lanjut atau mendapatkan penawaran harga khusus, silakan hubungi tim sales kami melalui email lifewithmangala@gmail.com. Kami siap membantu Anda mulai dari konsultasi desain hingga pengiriman produk ke lokasi cafe Anda.",
          "productId": 5
        }
      ],
      "conclusion": "Mangala Living adalah pilihan tepat sebagai supplier furniture cafe Anda. Dengan produk lengkap, kualitas terjamin, dan harga kompetitif, kami siap menjadi mitra bisnis yang membantu kesuksesan cafe Anda. Download katalog kami sekarang dan rasakan perbedaan kualitas furniture Mangala!"
    }
  },
  {
    "id": 321,
    "slug": "furniture-industri-indonesia-panduan-lengkap",
    "title": "Furniture Industri Indonesia: Panduan Lengkap untuk Bisnis Anda",
    "category": "Tips and Trick",
    "excerpt": "Temukan keunggulan furniture industri Indonesia untuk cafe, restoran, hotel, dan kantor. Kualitas premium dengan harga kompetitif.",
    "image": "https://images.unsplash.com/photo-1617448570684-9b7d26138f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZnVybml0dXJlJTIwd29ya3Nob3AlMjBJbmRvbmVzaWF8ZW58MHwwfHx8MTc3MDE5OTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-04 10:02",
    "author": "Helmi Ramdan",
    "status": "draft",
    "customContent": {
      "introduction": "Furniture industri telah menjadi pilihan utama bagi bisnis hospitality dan komersial di Indonesia. Dengan desain yang kokoh, estetika yang menarik, dan daya tahan yang luar biasa, furniture industri Indonesia menawarkan solusi sempurna untuk kebutuhan interior bisnis Anda.",
      "keyPoints": [
        "Keunggulan furniture industri Indonesia dibanding impor",
        "Tips memilih furniture industri berkualitas untuk bisnis",
        "Cara perawatan furniture industri agar tahan lama",
        "Rekomendasi furniture industri untuk berbagai kebutuhan"
      ],
      "language": "id",
      "sections": [
        {
          "heading": "Mengapa Memilih Furniture Industri Indonesia?",
          "content": "Furniture industri Indonesia telah mendapatkan pengakuan global berkat kualitas bahan baku yang superior dan keahlian pengrajin lokal. Kayu jati, besi cor, dan material lainnya yang tersedia di Indonesia memberikan keunggulan kompetitif yang sulit ditandingi.<br><br>Selain kualitas, faktor biaya produksi yang lebih efisien membuat furniture industri Indonesia menawarkan harga yang lebih kompetitif dibanding produk impor dengan kualitas setara. Ini menjadi keuntungan besar bagi bisnis hospitality yang membutuhkan furnitur dalam jumlah banyak namun tetap mengutamakan kualitas.<br><br>Mangala Living, dengan pengalaman lebih dari 25 tahun dan 1000+ proyek yang telah diselesaikan, menjadi bukti nyata keunggulan furniture industri Indonesia. Workshop kami di Bekasi memproduksi furniture custom yang disesuaikan dengan kebutuhan cafe, restoran, hotel, dan kantor di seluruh Indonesia.",
          "imageSearchQuery": "Indonesian industrial furniture workshop",
          "image": "https://images.unsplash.com/photo-1606077089119-92075161bb60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwaW5kdXN0cmlhbCUyMGZ1cm5pdHVyZSUyMHdvcmtzaG9wfGVufDB8MHx8fDE3NzAxOTk0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "Indonesian industrial furniture workshop"
        },
        {
          "heading": "Tips Memilih Furniture Industri untuk Bisnis Anda",
          "content": "Memilih furniture industri yang tepat untuk bisnis Anda memerlukan pertimbangan matang. Pertama, tentukan kebutuhan ruang dan fungsi utama. Cafe membutuhkan kursi dan meja yang nyaman untuk pengunjung berlama-lama, sementara restoran fine dining memerlukan furniture yang lebih elegan namun tetap kokoh.<br><br>Kedua, perhatikan material yang digunakan. Kayu jati solid memberikan kesan mewah dan tahan lama, sementara besi cor memberikan kesan industrial yang kuat. Kombinasi keduanya sering menjadi pilihan populer untuk menciptakan keseimbangan antara estetika dan fungsionalitas.<br><br>Ketiga, pertimbangkan fleksibilitas desain. Furniture yang bisa disesuaikan dengan berbagai konsep interior akan memberikan nilai investasi jangka panjang. Mangala Living menawarkan layanan custom design yang memungkinkan Anda mendapatkan furniture sesuai spesifikasi dan branding bisnis Anda."
        },
        {
          "heading": "Rekomendasi Furniture Industri untuk Setiap Kebutuhan",
          "content": "Untuk cafe dan restoran, pilihan furniture industri yang tepat akan menciptakan suasana yang nyaman dan Instagramable. Meja makan dengan material kayu jati dan kaki besi memberikan kesan hangat namun industrial yang sedang tren. Untuk area bar, kursi tinggi dengan rangka besi dan dudukan kayu menjadi pilihan ideal.<br><br>Hotel membutuhkan furniture yang tidak hanya estetis tetapi juga sangat tahan lama. Lemari pakaian industrial dengan rak terbuka, meja kerja dengan desain minimalis, dan sofa dengan rangka besi kokoh menjadi pilihan yang tepat. Mangala Living menyediakan berbagai opsi furniture hotel yang dirancang khusus untuk kebutuhan hospitality.<br><br>Untuk kantor, furniture industri memberikan kesan profesional dan modern. Meja kerja dengan desain ergonomis, rak penyimpanan dengan akses mudah, dan kursi kerja dengan dukungan lumbar yang baik akan meningkatkan produktivitas karyawan. Kunjungi halaman produk kami untuk melihat koleksi lengkap furniture kantor industrial."
        },
        {
          "heading": "Perawatan Furniture Industri agar Tahan Lama",
          "content": "Furniture industri memang dirancang untuk tahan lama, namun perawatan yang tepat akan memperpanjang umur pakainya secara signifikan. Untuk furniture berbahan kayu, gunakan lap lembab untuk membersihkan permukaan secara rutin dan hindari paparan sinar matahari langsung yang dapat menyebabkan warna memudar.<br><br>Bagian besi pada furniture industrial perlu perawatan khusus untuk mencegah karat. Gunakan cairan anti karat secara berkala dan pastikan furniture selalu dalam kondisi kering. Untuk furniture outdoor, tambahkan lapisan pelindung khusus yang tahan cuaca.<br><br>Mangala Living memberikan panduan perawatan lengkap untuk setiap produk yang kami jual. Tim kami juga siap memberikan konsultasi gratis tentang perawatan furniture industrial agar investasi Anda tetap terjaga kualitasnya selama bertahun-tahun."
        }
      ],
      "conclusion": "Furniture industri Indonesia menawarkan kombinasi sempurna antara kualitas, estetika, dan harga yang kompetitif. Dengan memilih furniture yang tepat dan melakukan perawatan yang benar, Anda akan mendapatkan investasi jangka panjang yang menguntungkan untuk bisnis Anda. Mangala Living siap menjadi partner terpercaya Anda dalam menyediakan furniture industrial custom untuk cafe, restoran, hotel, dan kantor di seluruh Indonesia."
    }
  },
  {
    "id": 322,
    "slug": "indonesia-industrial-furniture-guide",
    "title": "Indonesia Industrial Furniture: A Complete Guide",
    "category": "Tips and Trick",
    "excerpt": "Discover Indonesia's finest industrial furniture for cafes, restaurants, hotels, and offices. Expert guide to durable, stylish commercial furniture solutions.",
    "image": "https://images.unsplash.com/photo-1617448570684-9b7d26138f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZnVybml0dXJlJTIwd29ya3Nob3AlMjBJbmRvbmVzaWF8ZW58MHwwfHx8MTc3MDE5OTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "date": "2026-02-04 10:03",
    "author": "Helmi Ramdan",
    "status": "draft",
    "customContent": {
      "introduction": "Indonesia has emerged as a global hub for high-quality industrial furniture, combining traditional craftsmanship with modern design aesthetics. From reclaimed wood to steel frameworks, Indonesian manufacturers like Mangala Living have perfected the art of creating durable, stylish furniture that transforms commercial spaces.",
      "keyPoints": [
        "Indonesian industrial furniture blends traditional craftsmanship with modern design",
        "Commercial-grade durability meets aesthetic appeal for cafes, restaurants, and offices",
        "Sustainable materials and eco-friendly production methods are standard practice",
        "Customization options available for unique business requirements",
        "Competitive pricing without compromising on quality"
      ],
      "language": "en",
      "sections": [
        {
          "heading": "Why Indonesian Industrial Furniture Stands Out",
          "content": "Indonesian industrial furniture has gained international recognition for several compelling reasons. The country's rich tradition of woodworking, combined with modern manufacturing techniques, creates pieces that are both beautiful and built to last. Mangala Living, with over 25 years of experience and 1000+ completed projects, exemplifies this perfect blend of heritage and innovation.<br><br>Indonesian craftsmen work with premium materials like reclaimed teak, solid suar wood, and high-grade steel, ensuring each piece can withstand the demands of commercial environments. The unique climate and natural resources of Indonesia contribute to the exceptional quality of the wood, which is naturally resistant to pests and moisture. This makes Indonesian industrial furniture particularly suitable for both indoor and outdoor commercial applications.",
          "imageSearchQuery": "reclaimed wood industrial furniture Indonesia",
          "image": "https://images.unsplash.com/photo-1617448570684-9b7d26138f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU2ODd8MHwxfHNlYXJjaHwxfHxyZWNsYWltZWQlMjB3b29kJTIwaW5kdXN0cmlhbCUyMGZ1cm5pdHVyZSUyMEluZG9uZXNpYXxlbnwwfDB8fHwxNzcwMTk5NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
          "imageAlt": "reclaimed wood industrial furniture Indonesia"
        },
        {
          "heading": "Key Features of Quality Industrial Furniture",
          "content": "When selecting industrial furniture for your commercial space, several key features distinguish exceptional pieces from ordinary ones. The foundation of quality industrial furniture lies in its construction methods and material selection. Premium Indonesian manufacturers prioritize structural integrity through techniques like mortise and tenon joinery, reinforced steel frameworks, and precision welding.<br><br>Durability is paramount in commercial settings where furniture faces constant use. Look for features such as powder-coated steel finishes that resist corrosion, UV-protected wood treatments, and modular designs that allow for easy maintenance and repairs. The best industrial furniture also incorporates ergonomic considerations without sacrificing the raw, authentic aesthetic that defines the style. Adjustable components, comfortable seating angles, and practical storage solutions should be seamlessly integrated into the design."
        },
        {
          "heading": "Perfect Applications for Industrial Furniture",
          "content": "Industrial furniture excels in various commercial environments, each benefiting from its unique characteristics. Cafes and coffee shops particularly embrace the style's casual yet sophisticated atmosphere, with communal tables and bar seating creating inviting social spaces. Restaurants appreciate the durability and easy maintenance of industrial pieces, which can withstand spills, heavy traffic, and frequent cleaning without showing wear.<br><br>Hotels and office spaces utilize industrial furniture to create distinctive environments that reflect modern design sensibilities. The versatility of the style allows it to complement various interior themes, from minimalist Scandinavian to rustic farmhouse aesthetics. Mangala Living's extensive catalog includes specialized pieces like the Frame Loft Bookshelf for storage solutions, the Industrial Kitchen Cabinet for commercial kitchens, and the Bandung Pipe Dining Table for restaurant dining areas, each designed to meet specific commercial needs while maintaining the industrial aesthetic.",
          "productId": 1
        },
        {
          "heading": "Sustainability and Environmental Benefits",
          "content": "One of the most significant advantages of Indonesian industrial furniture is its commitment to sustainability. Many manufacturers, including Mangala Living, prioritize the use of reclaimed and recycled materials, reducing environmental impact while creating unique pieces with character and history. Reclaimed teak and suar wood not only provide exceptional durability but also help preserve Indonesia's forests by reducing demand for newly harvested timber.<br><br>The production processes employed by leading Indonesian furniture makers often incorporate eco-friendly practices, such as water-based finishes, energy-efficient manufacturing, and waste reduction programs. This commitment to environmental responsibility appeals to businesses seeking to align their operations with sustainable practices. Additionally, the longevity of industrial furniture means fewer replacements over time, further reducing the environmental footprint of commercial spaces."
        },
        {
          "heading": "Customization and Design Flexibility",
          "content": "Indonesian industrial furniture manufacturers excel in providing customization options that allow businesses to create truly unique spaces. From size adjustments to material selections and finish choices, customization ensures that furniture perfectly fits both the physical space and the brand identity. Mangala Living's workshop in Bekasi specializes in creating bespoke pieces that meet specific client requirements while maintaining the highest quality standards.<br><br>Design flexibility extends beyond simple modifications. Experienced manufacturers can create entirely new designs based on client concepts, incorporating company colors, logos, or thematic elements into the furniture. This level of customization is particularly valuable for businesses looking to create distinctive environments that set them apart from competitors. Whether it's a unique dining table configuration for a restaurant or specialized storage solutions for a hotel, Indonesian manufacturers have the expertise to bring these visions to life."
        }
      ],
      "conclusion": "Indonesian industrial furniture represents the perfect fusion of traditional craftsmanship, modern design, and commercial practicality. With its exceptional durability, sustainable practices, and extensive customization options, it offers businesses an ideal solution for creating memorable commercial spaces. Mangala Living continues to lead the industry with over 25 years of experience, serving cafes, restaurants, hotels, and offices throughout Indonesia and beyond. Whether you're furnishing a new establishment or upgrading an existing space, Indonesian industrial furniture provides the quality, style, and value that modern businesses demand."
    }
  }
]

// Get posts for a specific page
export const getPostsByPage = (page: number, postsPerPage: number = 8): BlogPost[] => {
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  return BLOG_POSTS.slice(startIndex, endIndex)
}

// Get total pages
export const getTotalPages = (postsPerPage: number = 8): number => {
  return Math.ceil(BLOG_POSTS.length / postsPerPage)
}

// Get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug)
}

// Get recent blog posts (sorted by date, newest first)
export const getRecentBlogPosts = (limit: number = 20): BlogPost[] => {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

// Get all blog posts (for sitemap/internal linking)
export const getAllBlogPosts = (): BlogPost[] => {
  return BLOG_POSTS
}

// Get blog posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.category === category)
}

