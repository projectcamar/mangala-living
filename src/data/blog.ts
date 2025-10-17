export interface BlogPost {
  id: number
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  date: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'tips-memilih-furniture-industrial-untuk-cafe',
    title: 'Tips Memilih Furniture Industrial untuk Cafe Modern',
    category: 'Tips and Trick',
    excerpt: 'Panduan lengkap memilih furniture industrial yang tepat untuk menciptakan suasana cafe modern dan nyaman bagi pelanggan.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-03-15'
  },
  {
    id: 2,
    slug: 'keunggulan-furniture-besi-custom-vs-ready-stock',
    title: 'Keunggulan Furniture Besi Custom vs Ready Stock',
    category: 'About Furniture',
    excerpt: 'Mengenal perbedaan dan keunggulan furniture besi custom dibanding ready stock untuk kebutuhan bisnis Anda.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2024-03-12'
  },
  {
    id: 3,
    slug: 'inspirasi-desain-interior-industrial-minimalis',
    title: 'Inspirasi Desain Interior Industrial Minimalis 2024',
    category: 'Furniture Information',
    excerpt: 'Kumpulan inspirasi desain interior bergaya industrial minimalis yang cocok untuk ruang komersial maupun residential.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2024-03-10'
  },
  {
    id: 4,
    slug: 'cara-merawat-furniture-besi-agar-awet',
    title: 'Cara Merawat Furniture Besi Agar Tetap Awet dan Berkualitas',
    category: 'Tips and Trick',
    excerpt: 'Tips praktis merawat furniture besi industrial agar tetap awet, anti karat, dan selalu terlihat seperti baru.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2024-03-08'
  },
  {
    id: 5,
    slug: 'tren-furniture-cafe-dan-restoran-2024',
    title: 'Tren Furniture Cafe dan Restoran Tahun 2024',
    category: 'Furniture Information',
    excerpt: 'Simak tren furniture terkini untuk cafe dan restoran yang akan membuat bisnis F&B Anda semakin menarik di tahun 2024.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-03-05'
  },
  {
    id: 6,
    slug: 'mengapa-memilih-furniture-lokal-indonesia',
    title: 'Mengapa Memilih Furniture Lokal Buatan Indonesia',
    category: 'About Furniture',
    excerpt: 'Keunggulan furniture lokal Indonesia yang tidak kalah berkualitas dengan produk impor namun dengan harga lebih terjangkau.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop',
    date: '2024-03-01'
  },
  {
    id: 7,
    slug: 'desain-meja-bar-industrial-untuk-ruang-terbatas',
    title: 'Desain Meja Bar Industrial untuk Ruang Terbatas',
    category: 'Tips and Trick',
    excerpt: 'Solusi desain meja bar industrial yang efisien dan stylish untuk ruangan dengan ukuran terbatas.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2024-02-28'
  },
  {
    id: 8,
    slug: 'kombinasi-kayu-dan-besi-untuk-furniture-modern',
    title: 'Kombinasi Kayu dan Besi untuk Furniture Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan menciptakan harmoni sempurna antara material kayu dan besi dalam desain furniture modern industrial.',
    image: 'https://images.unsplash.com/photo-1615529162924-f83c82d7d7f4?w=800&auto=format&fit=crop',
    date: '2024-02-25'
  },
  {
    id: 9,
    slug: 'furniture-outdoor-tahan-cuaca-untuk-teras',
    title: 'Furniture Outdoor Tahan Cuaca untuk Area Teras',
    category: 'About Furniture',
    excerpt: 'Rekomendasi furniture outdoor yang tahan cuaca ekstrem untuk area teras cafe, restoran, atau rumah Anda.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-02-20'
  },
  {
    id: 10,
    slug: 'budget-furniture-cafe-untuk-pemula',
    title: 'Panduan Budget Furniture Cafe untuk Pemula',
    category: 'Tips and Trick',
    excerpt: 'Tips mengatur budget furniture cafe untuk pemula tanpa mengorbankan kualitas dan estetika ruangan.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop',
    date: '2024-02-15'
  },
  {
    id: 11,
    slug: 'finishing-furniture-besi-powder-coating-vs-cat',
    title: 'Finishing Furniture Besi: Powder Coating vs Cat Biasa',
    category: 'Furniture Information',
    excerpt: 'Perbandingan lengkap antara powder coating dan cat biasa untuk finishing furniture besi industrial.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-02-10'
  },
  {
    id: 12,
    slug: 'kesalahan-umum-saat-membeli-furniture-industrial',
    title: '7 Kesalahan Umum Saat Membeli Furniture Industrial',
    category: 'About Furniture',
    excerpt: 'Hindari kesalahan-kesalahan umum ini saat membeli furniture industrial untuk bisnis atau hunian Anda.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2024-02-05'
  },
  {
    id: 13,
    slug: 'sofa-cafe-industrial-minimalis-untuk-konsep-modern',
    title: 'Sofa Cafe Industrial Minimalis untuk Konsep Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih sofa cafe industrial minimalis yang tepat untuk menciptakan konsep modern dan elegan di cafe Anda.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-03-20'
  },
  {
    id: 14,
    slug: 'meja-bar-industrial-untuk-cafe-dan-restoran',
    title: 'Meja Bar Industrial untuk Cafe dan Restoran',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih meja bar industrial yang tepat untuk cafe dan restoran modern dengan desain yang kokoh dan elegan.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2024-03-22'
  },
  {
    id: 15,
    slug: 'kursi-bar-industrial-dengan-desain-modern',
    title: 'Kursi Bar Industrial dengan Desain Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih kursi bar industrial dengan desain modern yang memberikan kenyamanan duduk optimal untuk cafe dan restoran.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2024-03-25'
  },
  {
    id: 16,
    slug: 'rak-display-industrial-untuk-retail-dan-cafe',
    title: 'Rak Display Industrial untuk Retail dan Cafe',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih rak display industrial yang tepat untuk retail dan cafe dengan desain yang kokoh dan fungsional.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2024-03-28'
  },
  {
    id: 17,
    slug: 'meja-makan-industrial-untuk-restoran-modern',
    title: 'Meja Makan Industrial untuk Restoran Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih meja makan industrial yang tepat untuk restoran modern dengan desain yang kokoh dan elegan.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-03-30'
  },
  {
    id: 18,
    slug: 'furniture-outdoor-industrial-tahan-cuaca',
    title: 'Furniture Outdoor Industrial Tahan Cuaca',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih furniture outdoor industrial yang tahan cuaca untuk area outdoor cafe, restoran, dan hotel.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    date: '2024-04-02'
  },
  {
    id: 19,
    slug: 'daybed-industrial-untuk-area-lounge-modern',
    title: 'Daybed Industrial untuk Area Lounge Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih daybed industrial yang tepat untuk area lounge modern di hotel, cafe, dan restoran.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-04-05'
  },
  {
    id: 20,
    slug: 'meja-kerja-industrial-untuk-kantor-modern',
    title: 'Meja Kerja Industrial untuk Kantor Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih meja kerja industrial yang tepat untuk kantor modern dengan desain yang kokoh dan fungsional.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2024-04-08'
  },
  {
    id: 21,
    slug: 'rak-buku-industrial-untuk-perpustakaan-modern',
    title: 'Rak Buku Industrial untuk Perpustakaan Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih rak buku industrial yang tepat untuk perpustakaan modern dengan desain yang kokoh dan modular.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    date: '2024-04-10'
  },
  {
    id: 22,
    slug: 'furniture-industrial-custom-untuk-hotel',
    title: 'Furniture Industrial Custom untuk Hotel',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih furniture industrial custom yang tepat untuk hotel dengan desain yang unik dan fungsional.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    date: '2024-04-12'
  },
  {
    id: 23,
    slug: 'furniture-industrial-murah-untuk-startup',
    title: 'Furniture Industrial Murah untuk Startup',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih furniture industrial murah yang tepat untuk startup dengan budget terbatas dan kualitas terjamin.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2024-04-15'
  },
  {
    id: 24,
    slug: 'furniture-industrial-bekasi-terpercaya',
    title: 'Furniture Industrial Bekasi Terpercaya',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih furniture industrial Bekasi terpercaya dengan kualitas terjamin dan harga kompetitif.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-04-18'
  },
  {
    id: 25,
    slug: 'furniture-industrial-custom-design',
    title: 'Furniture Industrial Custom Design',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial custom design yang unik dan sesuai dengan kebutuhan spesifik Anda.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-04-20'
  },
  {
    id: 26,
    slug: 'furniture-industrial-harga-pabrik',
    title: 'Furniture Industrial Harga Pabrik',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial harga pabrik yang memberikan nilai terbaik untuk investasi furniture Anda.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-04-22'
  },
  {
    id: 27,
    slug: 'furniture-industrial-garansi-kualitas',
    title: 'Furniture Industrial Garansi Kualitas',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial garansi kualitas yang memberikan perlindungan untuk investasi furniture jangka panjang.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-04-25'
  },
  {
    id: 28,
    slug: 'furniture-industrial-workshop-bekasi',
    title: 'Furniture Industrial Workshop Bekasi',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial workshop Bekasi yang menjadi pusat produksi furniture berkualitas tinggi di Indonesia.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-04-28'
  },
  {
    id: 29,
    slug: 'furniture-industrial-material-berkualitas',
    title: 'Furniture Industrial Material Berkualitas',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial material berkualitas yang memberikan jaminan kualitas dan daya tahan optimal.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-05-01'
  },
  {
    id: 30,
    slug: 'furniture-industrial-finishing-powder-coating',
    title: 'Furniture Industrial Finishing Powder Coating',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial finishing powder coating yang memberikan perlindungan dan tampilan optimal.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-05-03'
  },
  {
    id: 31,
    slug: 'furniture-industrial-layanan-profesional',
    title: 'Furniture Industrial Layanan Profesional',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial layanan profesional yang memberikan pengalaman terbaik dan kepuasan pelanggan optimal.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-05-05'
  },
  {
    id: 32,
    slug: 'furniture-industrial-pengalaman-25-tahun',
    title: 'Furniture Industrial Pengalaman 25 Tahun',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial pengalaman 25 tahun yang memberikan jaminan kualitas dan kepercayaan terbukti.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-05-08'
  },
  {
    id: 33,
    slug: 'furniture-industrial-1000-klien-puas',
    title: 'Furniture Industrial 1000 Klien Puas',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial 1000 klien puas yang memberikan jaminan kualitas dan kepercayaan terbukti.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-05-10'
  },
  {
    id: 34,
    slug: 'furniture-industrial-custom-design-terpercaya',
    title: 'Furniture Industrial Custom Design Terpercaya',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial custom design terpercaya yang memberikan jaminan kualitas dan kepercayaan terbukti.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-05-12'
  },
  {
    id: 35,
    slug: 'inspirasi-desain-kafe-industrial-minimalis-7-furniture-wajib',
    title: 'Inspirasi Desain Kafe Industrial Minimalis: 7 Furniture Wajib Punya',
    category: 'Furniture Information',
    excerpt: 'Temukan 7 furniture industrial minimalis yang wajib ada di kafe modern Anda. Panduan lengkap dengan inspirasi desain dan tips pemilihan furniture terbaik.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-01-15'
  },
  {
    id: 36,
    slug: 'harga-furniture-industrial-terbaru-2025-lengkap-kafe-kantor',
    title: 'Harga Furniture Industrial Terbaru 2025 (Lengkap untuk Kafe & Kantor)',
    category: 'Furniture Information',
    excerpt: 'Daftar harga furniture industrial terbaru 2025 untuk kafe, restoran, dan kantor. Informasi lengkap dengan spesifikasi dan rekomendasi terbaik.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-01-15'
  },
  {
    id: 37,
    slug: 'panduan-lengkap-memilih-furniture-industrial-untuk-restoran',
    title: 'Panduan Lengkap Memilih Furniture Industrial untuk Restoran',
    category: 'Tips and Trick',
    excerpt: 'Panduan komprehensif memilih furniture industrial yang tepat untuk restoran modern. Tips pemilihan material, ukuran, dan desain yang sesuai konsep bisnis Anda.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-01-15'
  },
  {
    id: 38,
    slug: '7-model-meja-industrial-terlaris-untuk-kantor-modern',
    title: '7 Model Meja Industrial Terlaris untuk Kantor Modern',
    category: 'Furniture Information',
    excerpt: '7 model meja industrial terlaris yang cocok untuk kantor modern. Rekomendasi lengkap dengan spesifikasi, harga, dan tips pemilihan terbaik.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2025-01-15'
  },
  {
    id: 39,
    slug: 'tren-desain-interior-industrial-scandinavian-2025',
    title: 'Tren Desain Interior Industrial Scandinavian 2025',
    category: 'Furniture Information',
    excerpt: 'Simak tren desain interior industrial Scandinavian terbaru 2025. Inspirasi modern yang menggabungkan elemen industrial dengan estetika Scandinavian minimalis.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-01-15'
  },
  {
    id: 40,
    slug: 'hollowline-display-rack-solusi-storage-industrial-modern',
    title: 'Hollowline Display Rack: Solusi Storage Industrial Modern Terbaik',
    category: 'Furniture Information',
    excerpt: 'Temukan keunggulan Hollowline Display Rack untuk kebutuhan storage industrial modern. Desain hollow steel yang kuat, modular, dan estetis untuk retail dan komersial.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-01-15'
  },
  {
    id: 41,
    slug: 'display-shelf-rack-industrial-untuk-retail-dan-cafe',
    title: 'Display Shelf Rack Industrial untuk Retail dan Cafe Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih display shelf rack industrial yang tepat untuk retail dan cafe. Tips pemilihan, layout, dan inspirasi desain terbaik.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-01-15'
  },
  {
    id: 42,
    slug: 'stall-chair-design-inspirasi-kursi-bar-industrial',
    title: 'Stall Chair Design: Inspirasi Kursi Bar Industrial Terbaik',
    category: 'Furniture Information',
    excerpt: 'Kumpulan inspirasi stall chair design dengan konsep industrial modern. Tips pemilihan kursi bar yang stylish dan fungsional untuk cafe dan restoran.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-01-15'
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

