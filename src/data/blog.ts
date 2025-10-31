export interface BlogPost {
  id: number
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  date: string
  author?: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'tips-memilih-furniture-industrial-untuk-cafe',
    title: 'Tips Memilih Furniture Industrial untuk Cafe Modern',
    category: 'Tips and Trick',
    excerpt: 'Panduan lengkap memilih furniture industrial yang tepat untuk menciptakan suasana cafe modern dan nyaman bagi pelanggan.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-10-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 2,
    slug: 'keunggulan-furniture-besi-custom-vs-ready-stock',
    title: 'Keunggulan Furniture Besi Custom vs Ready Stock',
    category: 'About Furniture',
    excerpt: 'Mengenal perbedaan dan keunggulan furniture besi custom dibanding ready stock untuk kebutuhan bisnis Anda.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-10-14',
    author: 'Helmi Ramdan'
  },
  {
    id: 3,
    slug: 'inspirasi-desain-interior-industrial-minimalis',
    title: 'Inspirasi Desain Interior Industrial Minimalis 2025',
    category: 'Furniture Information',
    excerpt: 'Kumpulan inspirasi desain interior bergaya industrial minimalis yang cocok untuk ruang komersial maupun residential.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-10-13',
    author: 'Helmi Ramdan'
  },
  {
    id: 4,
    slug: 'cara-merawat-furniture-besi-agar-awet',
    title: 'Cara Merawat Furniture Besi Agar Tetap Awet dan Berkualitas',
    category: 'Tips and Trick',
    excerpt: 'Tips praktis merawat furniture besi industrial agar tetap awet, anti karat, dan selalu terlihat seperti baru.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 5,
    slug: 'tren-furniture-cafe-dan-restoran-2025',
    title: 'Tren Furniture Cafe dan Restoran Tahun 2025',
    category: 'Furniture Information',
    excerpt: 'Simak tren furniture terkini untuk cafe dan restoran yang akan membuat bisnis F&B Anda semakin menarik di tahun 2025.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-10-11',
    author: 'Helmi Ramdan'
  },
  {
    id: 6,
    slug: 'mengapa-memilih-furniture-lokal-indonesia',
    title: 'Mengapa Memilih Furniture Lokal Buatan Indonesia',
    category: 'About Furniture',
    excerpt: 'Keunggulan furniture lokal Indonesia yang tidak kalah berkualitas dengan produk impor namun dengan harga lebih terjangkau.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop',
    date: '2025-10-10',
    author: 'Helmi Ramdan'
  },
  {
    id: 7,
    slug: 'desain-meja-bar-industrial-untuk-ruang-terbatas',
    title: 'Desain Meja Bar Industrial untuk Ruang Terbatas',
    category: 'Tips and Trick',
    excerpt: 'Solusi desain meja bar industrial yang efisien dan stylish untuk ruangan dengan ukuran terbatas.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-10-09',
    author: 'Helmi Ramdan'
  },
  {
    id: 8,
    slug: 'kombinasi-kayu-dan-besi-untuk-furniture-modern',
    title: 'Kombinasi Kayu dan Besi untuk Furniture Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan menciptakan harmoni sempurna antara material kayu dan besi dalam desain furniture modern industrial.',
    image: 'https://images.unsplash.com/photo-1615529162924-f83c82d7d7f4?w=800&auto=format&fit=crop',
    date: '2025-10-08',
    author: 'Helmi Ramdan'
  },
  {
    id: 9,
    slug: 'furniture-outdoor-tahan-cuaca-untuk-teras',
    title: 'Furniture Outdoor Tahan Cuaca untuk Area Teras',
    category: 'About Furniture',
    excerpt: 'Rekomendasi furniture outdoor yang tahan cuaca ekstrem untuk area teras cafe, restoran, atau rumah Anda.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-10-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 10,
    slug: 'budget-furniture-cafe-untuk-pemula',
    title: 'Panduan Budget Furniture Cafe untuk Pemula',
    category: 'Tips and Trick',
    excerpt: 'Tips mengatur budget furniture cafe untuk pemula tanpa mengorbankan kualitas dan estetika ruangan.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop',
    date: '2025-10-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 11,
    slug: 'finishing-furniture-besi-powder-coating-vs-cat',
    title: 'Finishing Furniture Besi: Powder Coating vs Cat Biasa',
    category: 'Furniture Information',
    excerpt: 'Perbandingan lengkap antara powder coating dan cat biasa untuk finishing furniture besi industrial.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-05',
    author: 'Helmi Ramdan'
  },
  {
    id: 12,
    slug: 'kesalahan-umum-saat-membeli-furniture-industrial',
    title: '7 Kesalahan Umum Saat Membeli Furniture Industrial',
    category: 'About Furniture',
    excerpt: 'Hindari kesalahan-kesalahan umum ini saat membeli furniture industrial untuk bisnis atau hunian Anda.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-10-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 13,
    slug: 'sofa-cafe-industrial-minimalis-untuk-konsep-modern',
    title: 'Sofa Cafe Industrial Minimalis untuk Konsep Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih sofa cafe industrial minimalis yang tepat untuk menciptakan konsep modern dan elegan di cafe Anda.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 14,
    slug: 'meja-bar-industrial-untuk-cafe-dan-restoran',
    title: 'Meja Bar Industrial untuk Cafe dan Restoran',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih meja bar industrial yang tepat untuk cafe dan restoran modern dengan desain yang kokoh dan elegan.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-10-17',
    author: 'Helmi Ramdan'
  },
  {
    id: 15,
    slug: 'kursi-bar-industrial-dengan-desain-modern',
    title: 'Kursi Bar Industrial dengan Desain Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih kursi bar industrial dengan desain modern yang memberikan kenyamanan duduk optimal untuk cafe dan restoran.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-10-18',
    author: 'Helmi Ramdan'
  },
  {
    id: 16,
    slug: 'rak-display-industrial-untuk-retail-dan-cafe',
    title: 'Rak Display Industrial untuk Retail dan Cafe',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih rak display industrial yang tepat untuk retail dan cafe dengan desain yang kokoh dan fungsional.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-10-19',
    author: 'Helmi Ramdan'
  },
  {
    id: 17,
    slug: 'meja-makan-industrial-untuk-restoran-modern',
    title: 'Meja Makan Industrial untuk Restoran Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih meja makan industrial yang tepat untuk restoran modern dengan desain yang kokoh dan elegan.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-10-20',
    author: 'Helmi Ramdan'
  },
  {
    id: 18,
    slug: 'furniture-outdoor-industrial-tahan-cuaca',
    title: 'Furniture Outdoor Industrial Tahan Cuaca',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih furniture outdoor industrial yang tahan cuaca untuk area outdoor cafe, restoran, dan hotel.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    date: '2025-10-21',
    author: 'Helmi Ramdan'
  },
  {
    id: 19,
    slug: 'daybed-industrial-untuk-area-lounge-modern',
    title: 'Daybed Industrial untuk Area Lounge Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih daybed industrial yang tepat untuk area lounge modern di hotel, cafe, dan restoran.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-22',
    author: 'Helmi Ramdan'
  },
  {
    id: 20,
    slug: 'meja-kerja-industrial-untuk-kantor-modern',
    title: 'Meja Kerja Industrial untuk Kantor Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih meja kerja industrial yang tepat untuk kantor modern dengan desain yang kokoh dan fungsional.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2025-10-23',
    author: 'Helmi Ramdan'
  },
  {
    id: 21,
    slug: 'rak-buku-industrial-untuk-perpustakaan-modern',
    title: 'Rak Buku Industrial untuk Perpustakaan Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih rak buku industrial yang tepat untuk perpustakaan modern dengan desain yang kokoh dan modular.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    date: '2025-10-24',
    author: 'Helmi Ramdan'
  },
  {
    id: 22,
    slug: 'furniture-industrial-custom-untuk-hotel',
    title: 'Furniture Industrial Custom untuk Hotel',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih furniture industrial custom yang tepat untuk hotel dengan desain yang unik dan fungsional.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    date: '2025-10-25',
    author: 'Helmi Ramdan'
  },
  {
    id: 23,
    slug: 'furniture-industrial-murah-untuk-startup',
    title: 'Furniture Industrial Murah untuk Startup',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih furniture industrial murah yang tepat untuk startup dengan budget terbatas dan kualitas terjamin.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2025-10-26',
    author: 'Helmi Ramdan'
  },
  {
    id: 24,
    slug: 'furniture-industrial-bekasi-terpercaya',
    title: 'Furniture Industrial Bekasi Terpercaya',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih furniture industrial Bekasi terpercaya dengan kualitas terjamin dan harga kompetitif.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-27',
    author: 'Helmi Ramdan'
  },
  {
    id: 25,
    slug: 'furniture-industrial-custom-design',
    title: 'Furniture Industrial Custom Design',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial custom design yang unik dan sesuai dengan kebutuhan spesifik Anda.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-28',
    author: 'Helmi Ramdan'
  },
  {
    id: 26,
    slug: 'furniture-industrial-harga-pabrik',
    title: 'Furniture Industrial Harga Pabrik',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial harga pabrik yang memberikan nilai terbaik untuk investasi furniture Anda.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-29',
    author: 'Helmi Ramdan'
  },
  {
    id: 27,
    slug: 'furniture-industrial-garansi-kualitas',
    title: 'Furniture Industrial Garansi Kualitas',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial garansi kualitas yang memberikan perlindungan untuk investasi furniture jangka panjang.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-30',
    author: 'Helmi Ramdan'
  },
  {
    id: 28,
    slug: 'furniture-industrial-workshop-bekasi',
    title: 'Furniture Industrial Workshop Bekasi',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial workshop Bekasi yang menjadi pusat produksi furniture berkualitas tinggi di Indonesia.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-31',
    author: 'Helmi Ramdan'
  },
  {
    id: 29,
    slug: 'furniture-industrial-material-berkualitas',
    title: 'Furniture Industrial Material Berkualitas',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial material berkualitas yang memberikan jaminan kualitas dan daya tahan optimal.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-01',
    author: 'Helmi Ramdan'
  },
  {
    id: 30,
    slug: 'furniture-industrial-finishing-powder-coating',
    title: 'Furniture Industrial Finishing Powder Coating',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial finishing powder coating yang memberikan perlindungan dan tampilan optimal.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-02',
    author: 'Helmi Ramdan'
  },
  {
    id: 31,
    slug: 'furniture-industrial-layanan-profesional',
    title: 'Furniture Industrial Layanan Profesional',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial layanan profesional yang memberikan pengalaman terbaik dan kepuasan pelanggan optimal.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-03',
    author: 'Helmi Ramdan'
  },
  {
    id: 32,
    slug: 'furniture-industrial-pengalaman-25-tahun',
    title: 'Furniture Industrial Pengalaman 25 Tahun',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial pengalaman 25 tahun yang memberikan jaminan kualitas dan kepercayaan terbukti.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 33,
    slug: 'furniture-industrial-1000-klien-puas',
    title: 'Furniture Industrial 1000 Klien Puas',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial 1000 klien puas yang memberikan jaminan kualitas dan kepercayaan terbukti.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-05',
    author: 'Helmi Ramdan'
  },
  {
    id: 34,
    slug: 'furniture-industrial-custom-design-terpercaya',
    title: 'Furniture Industrial Custom Design Terpercaya',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture industrial custom design terpercaya yang memberikan jaminan kualitas dan kepercayaan terbukti.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 35,
    slug: 'inspirasi-desain-kafe-industrial-minimalis-7-furniture-wajib',
    title: 'Inspirasi Desain Kafe Industrial Minimalis: 7 Furniture Wajib Punya',
    category: 'Furniture Information',
    excerpt: 'Temukan 7 furniture industrial minimalis yang wajib ada di kafe modern Anda. Panduan lengkap dengan inspirasi desain dan tips pemilihan furniture terbaik.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 36,
    slug: 'harga-furniture-industrial-terbaru-2025-lengkap-kafe-kantor',
    title: 'Harga Furniture Industrial Terbaru 2025 (Lengkap untuk Kafe & Kantor)',
    category: 'Furniture Information',
    excerpt: 'Daftar harga furniture industrial terbaru 2025 untuk kafe, restoran, dan kantor. Informasi lengkap dengan spesifikasi dan rekomendasi terbaik.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 37,
    slug: 'panduan-lengkap-memilih-furniture-industrial-untuk-restoran',
    title: 'Panduan Lengkap Memilih Furniture Industrial untuk Restoran',
    category: 'Tips and Trick',
    excerpt: 'Panduan komprehensif memilih furniture industrial yang tepat untuk restoran modern. Tips pemilihan material, ukuran, dan desain yang sesuai konsep bisnis Anda.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 38,
    slug: '7-model-meja-industrial-terlaris-untuk-kantor-modern',
    title: '7 Model Meja Industrial Terlaris untuk Kantor Modern',
    category: 'Furniture Information',
    excerpt: '7 model meja industrial terlaris yang cocok untuk kantor modern. Rekomendasi lengkap dengan spesifikasi, harga, dan tips pemilihan terbaik.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 39,
    slug: 'tren-desain-interior-industrial-scandinavian-2025',
    title: 'Tren Desain Interior Industrial Scandinavian 2025',
    category: 'Furniture Information',
    excerpt: 'Simak tren desain interior industrial Scandinavian terbaru 2025. Inspirasi modern yang menggabungkan elemen industrial dengan estetika Scandinavian minimalis.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 40,
    slug: 'hollowline-display-rack-solusi-storage-industrial-modern',
    title: 'Hollowline Display Rack: Solusi Storage Industrial Modern Terbaik',
    category: 'Furniture Information',
    excerpt: 'Temukan keunggulan Hollowline Display Rack untuk kebutuhan storage industrial modern. Desain hollow steel yang kuat, modular, dan estetis untuk retail dan komersial.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 41,
    slug: 'display-shelf-rack-industrial-untuk-retail-dan-cafe',
    title: 'Display Shelf Rack Industrial untuk Retail dan Cafe Modern',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap memilih display shelf rack industrial yang tepat untuk retail dan cafe. Tips pemilihan, layout, dan inspirasi desain terbaik.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 42,
    slug: 'stall-chair-design-inspirasi-kursi-bar-industrial',
    title: 'Stall Chair Design: Inspirasi Kursi Bar Industrial Terbaik',
    category: 'Furniture Information',
    excerpt: 'Kumpulan inspirasi stall chair design dengan konsep industrial modern. Tips pemilihan kursi bar yang stylish dan fungsional untuk cafe dan restoran.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 43,
    slug: 'meja-cafe-murah-harga-terbaru-2025',
    title: 'Meja Cafe Murah Harga Terbaru 2025 - Kualitas Premium',
    category: 'Furniture Information',
    excerpt: 'Daftar harga meja cafe murah terbaru 2025 dengan kualitas premium. Meja makan industrial, meja bar, dan meja cafe minimalis dengan harga terbaik di Bekasi. Workshop langsung.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 44,
    slug: 'kursi-bar-cafe-murah-bekasi-ready-stock',
    title: 'Kursi Bar Cafe Murah Bekasi Ready Stock - Harga Terjangkau',
    category: 'Furniture Information',
    excerpt: 'Jual kursi bar cafe murah Bekasi ready stock dengan harga terjangkau. Kursi barstool besi, stall chair industrial, dan kursi bar modern. Pengalaman 25 tahun.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-11-08',
    author: 'Helmi Ramdan'
  },
  {
    id: 45,
    slug: 'furniture-cafe-murah-bekasi-harga-pabrik',
    title: 'Furniture Cafe Murah Bekasi Harga Pabrik - Workshop Langsung',
    category: 'Furniture Information',
    excerpt: 'Furniture cafe murah Bekasi dengan harga pabrik. Workshop langsung di Bekasi, pengalaman 25 tahun, 1000+ klien puas. Meja cafe, kursi bar, display rack, dan kitchen cabinet.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-09',
    author: 'Helmi Ramdan'
  },
  {
    id: 46,
    slug: 'meja-makan-cafe-industrial-minimalis-murah',
    title: 'Meja Makan Cafe Industrial Minimalis Murah - Set dengan Kursi',
    category: 'Furniture Information',
    excerpt: 'Meja makan cafe industrial minimalis murah dengan desain modern. Set meja makan cafe dengan 2 kursi, dining table industrial untuk restoran dan cafe. Harga kompetitif.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-10',
    author: 'Helmi Ramdan'
  },
  {
    id: 47,
    slug: 'display-rack-cafe-murah-industrial-besi',
    title: 'Display Rack Cafe Murah Industrial Besi - Hollowline Model',
    category: 'Furniture Information',
    excerpt: 'Display rack cafe murah dengan desain industrial besi hollowline modern. Rak display retail, rak gantung industrial, dan storage solution untuk cafe dan toko.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-11-11',
    author: 'Helmi Ramdan'
  },
  {
    id: 48,
    slug: 'bar-set-cafe-murah-outdoor-industrial',
    title: 'Bar Set Cafe Murah Outdoor Industrial - Steelframe Model',
    category: 'Furniture Information',
    excerpt: 'Bar set cafe murah outdoor industrial dengan steelframe yang tahan cuaca. Balcony bar table, outdoor bar furniture, dan bar set lengkap dengan kursi untuk area outdoor.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    date: '2025-11-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 49,
    slug: 'furniture-industrial-harga-murah-jakarta-bekasi',
    title: 'Furniture Industrial Harga Murah Jakarta Bekasi - Pengalaman 25 Tahun',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial harga murah untuk Jakarta dan Bekasi. Workshop di Bekasi, pengalaman 25 tahun melayani cafe, restoran, hotel, dan kantor. Kualitas premium, harga terjangkau.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-13',
    author: 'Helmi Ramdan'
  },
  {
    id: 50,
    slug: 'meja-kerja-cafe-murah-industrial-rak-buku',
    title: 'Meja Kerja Cafe Murah Industrial dengan Rak Buku - Multifungsi',
    category: 'Furniture Information',
    excerpt: 'Meja kerja cafe murah industrial dengan kombinasi rak buku multifungsi. Meja belajar custom, meja kerja minimalis untuk co-working space dan cafe. Murah dan berkualitas.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2025-11-14',
    author: 'Helmi Ramdan'
  },
  {
    id: 51,
    slug: 'kitchen-cabinet-cafe-murah-industrial-besi',
    title: 'Kitchen Cabinet Cafe Murah Industrial Besi - Custom Design',
    category: 'Furniture Information',
    excerpt: 'Kitchen cabinet cafe murah dengan desain industrial besi. Kabinet lemari industrial custom, storage solution untuk dapur cafe dan restoran. Harga terbaik di Bekasi.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 52,
    slug: 'outdoor-furniture-cafe-murah-tahan-cuaca',
    title: 'Outdoor Furniture Cafe Murah Tahan Cuaca - Industrial Style',
    category: 'Furniture Information',
    excerpt: 'Outdoor furniture cafe murah dengan desain tahan cuaca dan industrial style. Daybed outdoor, bar set outdoor, dan furniture teras untuk area outdoor cafe modern.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-11-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 53,
    slug: 'jual-meja-kafe-industrial-modern-harga-terbaik-2025',
    title: 'Jual Meja Kafe Industrial Modern - Harga Terbaik 2025',
    category: 'Furniture Information',
    excerpt: 'Temukan meja kafe industrial modern dengan harga terbaik 2025. Meja bar industrial, meja makan cafe, dan meja kerja dengan kualitas premium dan desain terkini.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-17',
    author: 'Helmi Ramdan'
  },
  {
    id: 54,
    slug: 'meja-kafe-bulat-industrial-desain-unik-cafe-modern',
    title: 'Meja Kafe Bulat Industrial - Desain Unik untuk Cafe Modern',
    category: 'Furniture Information',
    excerpt: 'Meja kafe bulat industrial dengan desain unik dan modern. Solusi furniture cafe yang elegan dengan material besi berkualitas dan finishing powder coating tahan lama.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop',
    date: '2025-11-18',
    author: 'Helmi Ramdan'
  },
  {
    id: 55,
    slug: 'meja-kursi-kafe-set-industrial-solusi-lengkap-cafe',
    title: 'Meja Kursi Kafe Set Industrial - Solusi Lengkap Cafe',
    category: 'Furniture Information',
    excerpt: 'Set meja kursi kafe industrial lengkap dengan desain modern. Paket furniture cafe yang terdiri dari meja makan, kursi bar, dan aksesoris pendukung untuk cafe Anda.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-11-19',
    author: 'Helmi Ramdan'
  },
  {
    id: 56,
    slug: 'model-kursi-meja-kafe-industrial-inspirasi-terbaru',
    title: 'Model Kursi Meja Kafe Industrial - Inspirasi Terbaru',
    category: 'Furniture Information',
    excerpt: 'Kumpulan model kursi meja kafe industrial terbaru dengan inspirasi desain modern. Tips pemilihan furniture cafe yang sesuai dengan konsep bisnis Anda.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-11-20',
    author: 'Helmi Ramdan'
  },
  {
    id: 57,
    slug: 'harga-bikin-meja-kafe-murah-custom-design-terjangkau',
    title: 'Harga Bikin Meja Kafe Murah - Custom Design Terjangkau',
    category: 'Tips and Trick',
    excerpt: 'Panduan harga bikin meja kafe murah dengan custom design terjangkau. Tips menghemat budget furniture cafe tanpa mengorbankan kualitas dan estetika.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-21',
    author: 'Helmi Ramdan'
  },
  {
    id: 58,
    slug: 'meja-dan-kursi-untuk-kafe-murah-tapi-bagus-rekomendasi-terbaik',
    title: 'Meja dan Kursi untuk Kafe Murah Tapi Bagus - Rekomendasi Terbaik',
    category: 'Furniture Information',
    excerpt: 'Rekomendasi meja dan kursi untuk kafe murah tapi bagus dengan kualitas terjamin. Panduan memilih furniture cafe berkualitas dengan budget terbatas.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-11-22',
    author: 'Helmi Ramdan'
  },
  {
    id: 59,
    slug: 'meja-kursi-kafe-murah-solusi-budget-terbatas',
    title: 'Meja Kursi Kafe Murah - Solusi Budget Terbatas',
    category: 'Tips and Trick',
    excerpt: 'Solusi meja kursi kafe murah untuk budget terbatas. Tips cerdas memilih furniture cafe berkualitas dengan harga terjangkau tanpa mengorbankan estetika.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-11-23',
    author: 'Helmi Ramdan'
  },
  {
    id: 60,
    slug: 'furniture-kafe-industrial-panduan-lengkap-pemilihan',
    title: 'Furniture Kafe Industrial - Panduan Lengkap Pemilihan',
    category: 'Tips and Trick',
    excerpt: 'Panduan lengkap memilih furniture kafe industrial yang tepat. Tips pemilihan material, ukuran, dan desain furniture cafe industrial untuk bisnis F&B Anda.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-24',
    author: 'Helmi Ramdan'
  },
  {
    id: 61,
    slug: 'furnitur-untuk-kafe-tips-memilih-yang-tepat',
    title: 'Furnitur untuk Kafe - Tips Memilih yang Tepat',
    category: 'Tips and Trick',
    excerpt: 'Tips memilih furnitur untuk kafe yang tepat sesuai konsep dan budget. Panduan lengkap pemilihan furniture cafe dari material hingga layout ruangan.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-25',
    author: 'Helmi Ramdan'
  },
  {
    id: 62,
    slug: 'furniture-kafe-2-lantai-sederhana-modern-inspirasi-desain',
    title: 'Furniture Kafe 2 Lantai Sederhana Modern - Inspirasi Desain',
    category: 'Furniture Information',
    excerpt: 'Inspirasi desain furniture kafe 2 lantai sederhana modern. Tips layout dan pemilihan furniture cafe untuk bangunan bertingkat dengan konsep industrial minimalis.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-11-26',
    author: 'Helmi Ramdan'
  },
  {
    id: 63,
    slug: 'furniture-kafe-buku-konsep-cafe-literasi-modern',
    title: 'Furniture Kafe Buku - Konsep Cafe Literasi Modern',
    category: 'Furniture Information',
    excerpt: 'Konsep furniture kafe buku untuk cafe literasi modern. Panduan desain cafe dengan tema perpustakaan dan furniture yang mendukung aktivitas membaca.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    date: '2025-11-27',
    author: 'Helmi Ramdan'
  },
  {
    id: 64,
    slug: 'furniture-untuk-kafe-bergaya-industrial-vintage-panduan-lengkap',
    title: 'Furniture untuk Kafe Bergaya Industrial Vintage - Panduan Lengkap',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap furniture untuk kafe bergaya industrial vintage. Tips menciptakan atmosfer vintage dengan furniture industrial modern yang fungsional.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-11-28',
    author: 'Helmi Ramdan'
  },
  {
    id: 65,
    slug: 'kafe-dengan-furniture-paling-unik-inspirasi-kreatif',
    title: 'Kafe dengan Furniture Paling Unik - Inspirasi Kreatif',
    category: 'Furniture Information',
    excerpt: 'Inspirasi kafe dengan furniture paling unik dan kreatif. Kumpulan desain cafe inovatif dengan furniture industrial custom yang menciptakan pengalaman tak terlupakan.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-11-29',
    author: 'Helmi Ramdan'
  },
  {
    id: 66,
    slug: 'perhitungan-furniture-kafe-panduan-budget-dan-layout',
    title: 'Perhitungan Furniture Kafe - Panduan Budget dan Layout',
    category: 'Tips and Trick',
    excerpt: 'Panduan perhitungan furniture kafe untuk budget dan layout optimal. Tips menghitung kebutuhan furniture cafe berdasarkan kapasitas dan konsep bisnis.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-30',
    author: 'Helmi Ramdan'
  },
  {
    id: 67,
    slug: 'industrial-cafe-furniture-tren-terbaru-2025',
    title: 'Industrial Cafe Furniture - Tren Terbaru 2025',
    category: 'Furniture Information',
    excerpt: 'Tren industrial cafe furniture terbaru 2025. Simak perkembangan desain furniture cafe industrial yang sedang populer dan akan menjadi favorit di tahun depan.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-12-01',
    author: 'Helmi Ramdan'
  },
  // HIGH-INTENT KEYWORDS - PRIORITY FOR PAGE 1 GOOGLE
  {
    id: 68,
    slug: 'furniture-besi-custom-bekasi-workshop-terpercaya',
    title: 'Furniture Besi Custom Bekasi: Workshop Terpercaya dengan Pengalaman 25 Tahun',
    category: 'Workshop & Production',
    excerpt: 'Cari furniture besi custom Bekasi? Mangala Living workshop terpercaya sejak 1999. Produksi langsung, harga pabrik, kualitas premium. Melayani cafe, restoran, hotel, kantor. Free konsultasi desain.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-12-02',
    author: 'Helmi Ramdan'
  },
  {
    id: 69,
    slug: 'industrial-furniture-bekasi-harga-pabrik-kualitas-premium',
    title: 'Industrial Furniture Bekasi: Harga Pabrik, Kualitas Premium, Workshop Langsung',
    category: 'Workshop & Production',
    excerpt: 'Industrial furniture Bekasi dengan harga pabrik dan kualitas terjamin. Workshop Mangala Living di Bekasi melayani custom furniture untuk cafe, restoran, hotel. 1000+ klien puas. Konsultasi gratis.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-12-03',
    author: 'Helmi Ramdan'
  },
  {
    id: 70,
    slug: 'furniture-cafe-industrial-bekasi-desain-custom-modern',
    title: 'Furniture Cafe Industrial Bekasi: Desain Custom Modern untuk Bisnis F&B',
    category: 'Commercial Furniture',
    excerpt: 'Furniture cafe industrial Bekasi dengan desain custom modern. Mangala Living spesialis furniture cafe industrial: meja makan, kursi bar, display rack. Workshop Bekasi, pengalaman 25 tahun.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-12-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 71,
    slug: 'workshop-furniture-besi-bekasi-produksi-langsung',
    title: 'Workshop Furniture Besi Bekasi: Produksi Langsung, Custom Design, Harga Kompetitif',
    category: 'Workshop & Production',
    excerpt: 'Workshop furniture besi Bekasi terpercaya. Mangala Living workshop modern dengan produksi langsung, custom design sesuai kebutuhan. Material berkualitas, finishing powder coating, garansi kualitas.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2025-12-05',
    author: 'Helmi Ramdan'
  },
  {
    id: 72,
    slug: 'jual-furniture-industrial-jakarta-bekasi-terlengkap',
    title: 'Jual Furniture Industrial Jakarta Bekasi Terlengkap - Harga Pabrik',
    category: 'Commercial Furniture',
    excerpt: 'Jual furniture industrial Jakarta dan Bekasi paling lengkap. Mangala Living menyediakan meja, kursi, rak display, kitchen cabinet industrial. Workshop di Bekasi, melayani seluruh Jabodetabek.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-12-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 73,
    slug: 'meja-makan-besi-custom-bekasi-industrial-minimalis',
    title: 'Meja Makan Besi Custom Bekasi: Industrial Minimalis untuk Cafe & Restoran',
    category: 'Commercial Furniture',
    excerpt: 'Meja makan besi custom Bekasi dengan desain industrial minimalis. Set meja makan + kursi, berbagai ukuran custom. Workshop Mangala Living melayani cafe, restoran, hotel. Kualitas premium, harga terjangkau.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-12-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 74,
    slug: 'meja-cafe-industrial-besi-custom-bekasi-jabodetabek',
    title: 'Meja Cafe Industrial Besi Custom Bekasi - Melayani Jabodetabek',
    category: 'Commercial Furniture',
    excerpt: 'Meja cafe industrial besi custom dari Bekasi. Mangala Living produksi meja cafe berbagai model: bar table, dining table, coffee table. Material berkualitas, finishing powder coating, harga kompetitif.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-12-08',
    author: 'Helmi Ramdan'
  },
  {
    id: 75,
    slug: 'furniture-besi-hotel-custom-desain-eksklusif',
    title: 'Furniture Besi Hotel Custom: Desain Eksklusif, Kualitas Premium',
    category: 'Commercial Furniture',
    excerpt: 'Furniture besi hotel custom dengan desain eksklusif. Mangala Living spesialis furniture hotel industrial: lobby furniture, restaurant furniture, room furniture. Workshop Bekasi, pengalaman project hotel.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    date: '2025-12-09',
    author: 'Helmi Ramdan'
  },
  {
    id: 76,
    slug: 'bikin-furniture-besi-custom-jabodetabek-berkualitas',
    title: 'Bikin Furniture Besi Custom Jabodetabek Berkualitas - Workshop Mangala',
    category: 'Workshop & Production',
    excerpt: 'Bikin furniture besi custom Jabodetabek dengan kualitas terjamin. Mangala Living workshop modern di Bekasi melayani custom furniture untuk cafe, restoran, hotel, kantor. Free konsultasi & survey lokasi.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-12-10',
    author: 'Helmi Ramdan'
  },
  {
    id: 77,
    slug: 'furniture-besi-untuk-restoran-industrial-modern',
    title: 'Furniture Besi untuk Restoran: Solusi Industrial Modern Berkualitas',
    category: 'Commercial Furniture',
    excerpt: 'Furniture besi untuk restoran dengan desain industrial modern. Meja makan, kursi, bar set, storage solution dari Mangala Living. Tahan lama, mudah perawatan, harga kompetitif. Workshop Bekasi.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-12-11',
    author: 'Helmi Ramdan'
  },
  // MEDIUM-INTENT KEYWORDS - INSPIRASI & EDUKASI
  {
    id: 78,
    slug: 'inspirasi-furniture-industrial-cafe-kecil-minimalis',
    title: 'Inspirasi Furniture Industrial untuk Cafe Kecil: Desain Minimalis Maksimal',
    category: 'Design Inspiration',
    excerpt: 'Kumpulan inspirasi furniture industrial untuk cafe kecil dengan konsep minimalis. Tips layout, pemilihan furniture yang tepat, dan desain yang memaksimalkan ruang terbatas. Cocok untuk startup cafe.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-12-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 79,
    slug: 'desain-interior-industrial-besi-kayu-harmonis',
    title: 'Desain Interior Industrial Besi dan Kayu: Kombinasi Harmonis Modern',
    category: 'Design Inspiration',
    excerpt: 'Panduan lengkap desain interior industrial dengan kombinasi besi dan kayu. Tips memadukan material, pemilihan warna, finishing, dan inspirasi desain untuk cafe, restoran, dan kantor modern.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-12-13',
    author: 'Helmi Ramdan'
  },
  {
    id: 80,
    slug: 'meja-bar-industrial-minimalis-desain-compact',
    title: 'Meja Bar Industrial Minimalis: Desain Compact untuk Cafe Modern',
    category: 'Design Inspiration',
    excerpt: 'Inspirasi meja bar industrial minimalis dengan desain compact. Solusi space-efficient untuk cafe kecil. Tips ukuran ideal, material, dan model meja bar yang sesuai konsep industrial minimalis.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-12-14',
    author: 'Helmi Ramdan'
  },
  {
    id: 81,
    slug: 'desain-ruang-makan-industrial-furniture-besi',
    title: 'Desain Ruang Makan Industrial dengan Furniture Besi: Panduan Lengkap',
    category: 'Design Inspiration',
    excerpt: 'Panduan desain ruang makan industrial dengan furniture besi. Tips layout, pemilihan furniture, lighting, dan dekorasi untuk menciptakan dining area industrial modern yang fungsional dan estetis.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-12-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 82,
    slug: 'contoh-furniture-cafe-industrial-buatan-lokal-indonesia',
    title: 'Contoh Furniture Cafe Industrial Buatan Lokal Indonesia Berkualitas',
    category: 'Design Inspiration',
    excerpt: 'Kumpulan contoh furniture cafe industrial buatan lokal Indonesia. Portfolio project Mangala Living: cafe, restoran, hotel dengan furniture industrial berkualitas. Desain custom, material premium.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-12-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 83,
    slug: 'furniture-besi-cocok-konsep-vintage-cafe',
    title: 'Furniture Besi Cocok untuk Konsep Vintage Cafe: Tips Styling',
    category: 'Design Inspiration',
    excerpt: 'Tips styling furniture besi untuk konsep vintage cafe. Panduan memilih furniture industrial yang cocok untuk tema vintage, pemilihan warna, finishing, dan aksesoris pendukung.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-12-17',
    author: 'Helmi Ramdan'
  },
  {
    id: 84,
    slug: 'desain-meja-industrial-besi-hollow-modern',
    title: 'Desain Meja Industrial Besi Hollow Modern: Model Terbaru 2025',
    category: 'Design Inspiration',
    excerpt: 'Model desain meja industrial besi hollow terbaru 2025. Inspirasi meja kerja, meja makan, meja bar dengan material hollow steel berkualitas. Tips pemilihan ukuran dan finishing powder coating.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2025-12-18',
    author: 'Helmi Ramdan'
  },
  {
    id: 85,
    slug: 'koleksi-furniture-industrial-terbaru-2025-mangala',
    title: 'Koleksi Furniture Industrial Terbaru 2025 dari Mangala Living',
    category: 'Product Showcase',
    excerpt: 'Koleksi furniture industrial terbaru 2025 dari Mangala Living. Meja, kursi, rak display, kitchen cabinet, outdoor furniture dengan desain modern. Material premium, finishing berkualitas, harga kompetitif.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-12-19',
    author: 'Helmi Ramdan'
  },
  // LOW-INTENT KEYWORDS - EDUKASI & AUTHORITY BUILDING
  {
    id: 86,
    slug: 'apa-itu-furniture-industrial-panduan-lengkap-pemula',
    title: 'Apa Itu Furniture Industrial? Panduan Lengkap untuk Pemula',
    category: 'Educational',
    excerpt: 'Panduan lengkap apa itu furniture industrial untuk pemula. Sejarah, karakteristik, material, keunggulan, dan tips memilih furniture industrial yang tepat untuk rumah, cafe, atau kantor Anda.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-12-20',
    author: 'Helmi Ramdan'
  },
  {
    id: 87,
    slug: 'kenapa-furniture-besi-lebih-awet-dari-kayu',
    title: 'Kenapa Furniture Besi Lebih Awet dari Kayu? Perbandingan Lengkap',
    category: 'Educational',
    excerpt: 'Perbandingan lengkap furniture besi vs kayu. Kenapa furniture besi lebih awet? Analisis durabilitas, perawatan, harga, dan nilai investasi jangka panjang untuk bisnis F&B dan kantor.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-12-21',
    author: 'Helmi Ramdan'
  },
  {
    id: 88,
    slug: 'perbandingan-furniture-besi-vs-kayu-cafe-restoran',
    title: 'Perbandingan Furniture Besi vs Kayu untuk Cafe & Restoran',
    category: 'Educational',
    excerpt: 'Perbandingan detail furniture besi vs kayu untuk bisnis cafe dan restoran. Analisis kelebihan-kekurangan, investasi jangka panjang, perawatan, dan rekomendasi terbaik untuk bisnis F&B.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-12-22',
    author: 'Helmi Ramdan'
  },
  {
    id: 89,
    slug: 'cara-merawat-furniture-besi-anti-karat-awet',
    title: 'Cara Merawat Furniture Besi Supaya Gak Berkarat dan Tetap Awet',
    category: 'Tips and Trick',
    excerpt: 'Tips lengkap cara merawat furniture besi supaya anti karat dan awet bertahun-tahun. Panduan cleaning, treatment, dan preventive maintenance untuk furniture besi industrial indoor dan outdoor.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2025-12-23',
    author: 'Helmi Ramdan'
  },
  {
    id: 90,
    slug: 'proses-pembuatan-furniture-besi-custom-workshop',
    title: 'Proses Pembuatan Furniture Besi Custom di Workshop: Behind The Scene',
    category: 'Educational',
    excerpt: 'Behind the scene proses pembuatan furniture besi custom di workshop Mangala Living. Dari desain, cutting, welding, finishing hingga quality control. Transparansi proses produksi furniture berkualitas.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2025-12-24',
    author: 'Helmi Ramdan'
  },
  {
    id: 91,
    slug: 'tips-memilih-furniture-besi-untuk-restoran-profesional',
    title: 'Tips Memilih Furniture Besi untuk Restoran: Panduan Profesional',
    category: 'Tips and Trick',
    excerpt: 'Tips profesional memilih furniture besi untuk restoran. Panduan material, ukuran, desain, budget, dan vendor terpercaya. Checklist lengkap untuk pemilik restoran dan interior designer.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-12-25',
    author: 'Helmi Ramdan'
  },
  {
    id: 92,
    slug: 'trend-desain-industrial-2025-furniture-modern',
    title: 'Trend Desain Industrial 2025: Furniture Modern untuk Bisnis',
    category: 'Furniture Information',
    excerpt: 'Trend desain industrial 2025 untuk furniture modern. Prediksi tren material, warna, finishing, dan style furniture industrial yang akan populer. Panduan untuk bisnis cafe, restoran, dan kantor.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-12-26',
    author: 'Helmi Ramdan'
  },
  {
    id: 93,
    slug: 'jenis-finishing-furniture-besi-powder-coating-duco',
    title: 'Jenis Finishing Furniture Besi: Powder Coating, Cat Duco, Elektrostatic',
    category: 'Educational',
    excerpt: 'Panduan lengkap jenis finishing furniture besi: powder coating, cat duco, elektrostatic painting. Perbandingan kualitas, harga, durabilitas, dan rekomendasi finishing terbaik untuk furniture industrial.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-12-27',
    author: 'Helmi Ramdan'
  },
  // GEO-TARGETED BLOG POSTS - HYPER-LOCAL BEKASI STRATEGY
  // BEKASI BARAT
  {
    id: 94,
    slug: 'furniture-industrial-bekasi-barat-custom-berkualitas',
    title: 'Furniture Industrial Bekasi Barat: Custom Berkualitas untuk Cafe & Restoran',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial di Bekasi Barat. Melayani Bintara, Kranji, Kota Baru, Jakasampurna. Custom meja kursi cafe, restoran, hotel. Free konsultasi & survey. Harga pabrik langsung.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-12-28',
    author: 'Helmi Ramdan'
  },
  // BEKASI TIMUR
  {
    id: 95,
    slug: 'furniture-cafe-bekasi-timur-jatiasih-pekayon',
    title: 'Furniture Cafe Bekasi Timur: Melayani Jatiasih, Pekayon, Aren Jaya',
    category: 'Local Area Guide',
    excerpt: 'Supplier furniture cafe industrial untuk Bekasi Timur. Coverage area: Jatiasih, Pekayon, Aren Jaya, Duren Jaya. Gratis delivery. Meja bar, kursi cafe, display rack custom. Workshop terpercaya.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-12-29',
    author: 'Helmi Ramdan'
  },
  // BEKASI SELATAN
  {
    id: 96,
    slug: 'furniture-besi-bekasi-selatan-kayuringin-margajaya',
    title: 'Furniture Besi Bekasi Selatan: Kayuringin, Margajaya, Jakasetia',
    category: 'Local Area Guide',
    excerpt: 'Jasa furniture besi custom Bekasi Selatan. Melayani Kayuringin Jaya, Margajaya, Jakasetia, Pekayon Jaya. Workshop dekat dengan lokasi Anda. Material premium, finishing powder coating, harga terjangkau.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-12-30',
    author: 'Helmi Ramdan'
  },
  // BEKASI UTARA
  {
    id: 97,
    slug: 'furniture-industrial-bekasi-utara-harapan-indah-summarecon',
    title: 'Furniture Industrial Bekasi Utara: Harapan Indah, Summarecon, Pejuang',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial Bekasi Utara. Coverage: Harapan Indah, Summarecon Bekasi, Pejuang, Teluk Pucung, Kaliabang. Spesialis cafe, restoran, hotel. Custom design, harga kompetitif.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-12-31',
    author: 'Helmi Ramdan'
  },
  // CIKARANG BARAT
  {
    id: 98,
    slug: 'furniture-cafe-cikarang-barat-lippo-cikarang-cibatu',
    title: 'Furniture Cafe Cikarang Barat: Lippo Cikarang, Cibatu, Telaga Murni',
    category: 'Local Area Guide',
    excerpt: 'Furniture cafe industrial Cikarang Barat. Melayani Lippo Cikarang, Cibatu, Telaga Murni, Pasir Gombong. Workshop dekat area industri. Custom furniture untuk cafe karyawan pabrik & F&B bisnis.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-01',
    author: 'Helmi Ramdan'
  },
  // CIKARANG UTARA
  {
    id: 99,
    slug: 'furniture-restoran-cikarang-utara-karang-asih-simpangan',
    title: 'Furniture Restoran Cikarang Utara: Karang Asih, Simpangan, Sukamaju',
    category: 'Local Area Guide',
    excerpt: 'Supplier furniture restoran Cikarang Utara. Area: Karang Asih, Simpangan, Sukamaju, Danau Indah. Spesialis meja makan industrial, kursi restoran, furniture outdoor. Produksi lokal Bekasi.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2026-01-02',
    author: 'Helmi Ramdan'
  },
  // CIKARANG SELATAN
  {
    id: 100,
    slug: 'furniture-industrial-cikarang-selatan-jababeka-greenland',
    title: 'Furniture Industrial Cikarang Selatan: Jababeka, Greenland, Pasirsari',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial Cikarang Selatan. Coverage Jababeka, Greenland International, Pasirsari, Ciantra. Melayani corporate office, cafe pabrik, kantin karyawan. Harga volume discount.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-01-03',
    author: 'Helmi Ramdan'
  },
  // CIKARANG TIMUR
  {
    id: 101,
    slug: 'furniture-hotel-cikarang-timur-serang-baru-karangreja',
    title: 'Furniture Hotel Cikarang Timur: Serang Baru, Karangreja, Jayamukti',
    category: 'Local Area Guide',
    excerpt: 'Furniture hotel industrial Cikarang Timur. Melayani Serang Baru, Karangreja, Jayamukti, Sukamanah. Spesialis lobby furniture, restaurant hotel, room furniture. Project hotel & homestay.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    date: '2026-01-04',
    author: 'Helmi Ramdan'
  },
  // CIKARANG PUSAT
  {
    id: 102,
    slug: 'furniture-cafe-cikarang-pusat-taman-galaxy-lemahabang',
    title: 'Furniture Cafe Cikarang Pusat: Taman Galaxy, Lemahabang, Hegarmukti',
    category: 'Local Area Guide',
    excerpt: 'Furniture cafe industrial Cikarang Pusat. Area coverage: Taman Galaxy, Lemahabang, Hegarmukti, Kalijaya. Custom meja bar, kursi cafe, display rack. Free konsultasi desain interior.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-05',
    author: 'Helmi Ramdan'
  },
  // TAMBUN SELATAN
  {
    id: 103,
    slug: 'furniture-industrial-tambun-selatan-sertajaya-mangunjaya',
    title: 'Furniture Industrial Tambun Selatan: Sertajaya, Mangunjaya, Lambangjaya',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial Tambun Selatan. Melayani Sertajaya, Mangunjaya, Lambangjaya, Setiadarma. Produksi furniture cafe, restoran, kantor. Material berkualitas, harga terjangkau.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2026-01-06',
    author: 'Helmi Ramdan'
  },
  // TAMBUN UTARA
  {
    id: 104,
    slug: 'furniture-custom-tambun-utara-satria-jaya-karang-satria',
    title: 'Furniture Custom Tambun Utara: Satria Jaya, Karang Satria, Wanasari',
    category: 'Local Area Guide',
    excerpt: 'Jasa furniture custom Tambun Utara. Coverage: Satria Jaya, Karang Satria, Wanasari, Karang Bahagia. Spesialis furniture besi industrial untuk cafe & restoran. Gratis delivery area Tambun.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-01-07',
    author: 'Helmi Ramdan'
  },
  // PONDOK GEDE
  {
    id: 105,
    slug: 'furniture-cafe-pondok-gede-jatiwaringin-jatibening',
    title: 'Furniture Cafe Pondok Gede: Jatiwaringin, Jatibening, Jatiraden',
    category: 'Local Area Guide',
    excerpt: 'Furniture cafe industrial Pondok Gede. Melayani Jatiwaringin, Jatibening, Jatiraden, Jatimakmur. Workshop Bekasi melayani border Jakarta-Bekasi. Custom design, fast production 20 hari.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-08',
    author: 'Helmi Ramdan'
  },
  // MUSTIKA JAYA
  {
    id: 106,
    slug: 'furniture-restoran-mustika-jaya-mustikasari-pedurenan',
    title: 'Furniture Restoran Mustika Jaya: Mustikasari, Pedurenan, Cimuning',
    category: 'Local Area Guide',
    excerpt: 'Supplier furniture restoran Mustika Jaya. Area: Mustikasari, Pedurenan, Cimuning. Meja makan industrial, kursi restoran, bar set. Material premium, finishing powder coating tahan lama.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2026-01-09',
    author: 'Helmi Ramdan'
  },
  // RAWALUMBU
  {
    id: 107,
    slug: 'furniture-industrial-rawalumbu-bojong-rawalumbu-sepanjang-jaya',
    title: 'Furniture Industrial Rawalumbu: Bojong Rawalumbu, Sepanjang Jaya',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial Rawalumbu. Coverage: Bojong Rawalumbu, Sepanjang Jaya, Pengasinan. Dekat pintu tol, mudah akses. Furniture cafe, restoran, office. Custom & ready design.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-01-10',
    author: 'Helmi Ramdan'
  },
  // MEDAN SATRIA
  {
    id: 108,
    slug: 'furniture-cafe-medan-satria-kali-baru-pejuang',
    title: 'Furniture Cafe Medan Satria: Kali Baru, Pejuang, Harapan Baru',
    category: 'Local Area Guide',
    excerpt: 'Furniture cafe industrial Medan Satria. Melayani Kali Baru, Pejuang, Harapan Baru, Medan Satria. Workshop furniture besi custom untuk cafe modern. Harga kompetitif, kualitas terjamin.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-11',
    author: 'Helmi Ramdan'
  },
  // SUMMARECON BEKASI - KAWASAN KOMERSIAL PREMIUM
  {
    id: 109,
    slug: 'furniture-cafe-summarecon-bekasi-premium-mall-area',
    title: 'Furniture Cafe Summarecon Bekasi: Premium Mall Area - Custom Design',
    category: 'Local Area Guide',
    excerpt: 'Spesialis furniture cafe industrial untuk area Summarecon Bekasi. Melayani Mall Summarecon, Boulevard area, residential Summarecon. Custom design premium untuk F&B tenant mall. Workshop terdekat.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-12',
    author: 'Helmi Ramdan'
  },
  // HARAPAN INDAH - RESIDENTIAL & KOMERSIAL
  {
    id: 110,
    slug: 'furniture-industrial-harapan-indah-residential-commercial',
    title: 'Furniture Industrial Harapan Indah: Residential & Commercial Area',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial terdekat untuk Harapan Indah. Coverage: Boulevard Harapan Indah, Taman Harapan Indah, area komersial. Spesialis cafe, restoran, office. Free survey & konsultasi desain.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-01-13',
    author: 'Helmi Ramdan'
  },
  // GRAND GALAXY CITY - SUPERBLOK
  {
    id: 111,
    slug: 'furniture-cafe-grand-galaxy-city-bekasi-superblok',
    title: 'Furniture Cafe Grand Galaxy City Bekasi: Superblok F&B Area',
    category: 'Local Area Guide',
    excerpt: 'Furniture cafe industrial untuk Grand Galaxy City Bekasi. Melayani tenant mall, foodcourt, cafe strip. Custom furniture dengan delivery cepat ke area Grand Galaxy. Workshop Bekasi berpengalaman.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2026-01-14',
    author: 'Helmi Ramdan'
  },
  // GALAXY BEKASI - MALL & ENTERTAINMENT
  {
    id: 112,
    slug: 'furniture-restoran-galaxy-bekasi-mall-tenant',
    title: 'Furniture Restoran Galaxy Bekasi: Mall Tenant & Foodcourt Specialist',
    category: 'Local Area Guide',
    excerpt: 'Supplier furniture restoran untuk Galaxy Bekasi mall tenant. Spesialis foodcourt furniture, cafe tenant, restaurant area. Fast production 15-20 hari. Custom design sesuai konsep mall. Harga volume.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2026-01-15',
    author: 'Helmi Ramdan'
  },
  // KEMANG PRATAMA - RESIDENTIAL PREMIUM
  {
    id: 113,
    slug: 'furniture-industrial-kemang-pratama-bekasi-premium',
    title: 'Furniture Industrial Kemang Pratama Bekasi: Premium Residential Area',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial untuk area Kemang Pratama. Melayani residential, cafe, home office. Custom furniture besi berkualitas dengan desain modern. Dekat dengan lokasi, delivery gratis area Kemang Pratama.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-01-16',
    author: 'Helmi Ramdan'
  },
  // JABABEKA - KAWASAN INDUSTRI
  {
    id: 114,
    slug: 'furniture-industrial-jababeka-cikarang-kawasan-pabrik',
    title: 'Furniture Industrial Jababeka Cikarang: Kawasan Pabrik & Corporate',
    category: 'Local Area Guide',
    excerpt: 'Spesialis furniture industrial untuk Jababeka Industrial Estate. Melayani kantin pabrik, cafe karyawan, corporate office, mess. Volume discount untuk project besar. Workshop dekat Jababeka.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-01-17',
    author: 'Helmi Ramdan'
  },
  // LIPPO CIKARANG
  {
    id: 115,
    slug: 'furniture-cafe-lippo-cikarang-mall-commercial',
    title: 'Furniture Cafe Lippo Cikarang: Mall & Commercial District',
    category: 'Local Area Guide',
    excerpt: 'Furniture cafe industrial untuk Lippo Cikarang area. Coverage: Mall Lippo Cikarang, Lippo Village, commercial district. Spesialis tenant mall, cafe, restoran. Custom design dengan timeline cepat.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-18',
    author: 'Helmi Ramdan'
  },
  // DELTAMAS - MIXED-USE DEVELOPMENT
  {
    id: 116,
    slug: 'furniture-industrial-deltamas-cikarang-mixed-development',
    title: 'Furniture Industrial Deltamas Cikarang: Mixed-Use Development',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial untuk kawasan Deltamas. Melayani commercial area, residential, F&B tenant. Custom furniture cafe, restoran, kantor. Material premium, harga kompetitif, delivery gratis.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2026-01-19',
    author: 'Helmi Ramdan'
  },
  // EJIP (EAST JAKARTA INDUSTRIAL PARK)
  {
    id: 117,
    slug: 'furniture-cafe-ejip-cikarang-industrial-park',
    title: 'Furniture Cafe EJIP Cikarang: East Jakarta Industrial Park Area',
    category: 'Local Area Guide',
    excerpt: 'Supplier furniture cafe untuk EJIP Industrial Park. Spesialis kantin pabrik, cafe employee, mess karyawan. Volume pricing untuk corporate project. Workshop terdekat dengan EJIP, fast delivery.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-20',
    author: 'Helmi Ramdan'
  },
  // GREENLAND INTERNATIONAL - CIKARANG
  {
    id: 118,
    slug: 'furniture-restoran-greenland-cikarang-commercial',
    title: 'Furniture Restoran Greenland Cikarang: Commercial & Residential',
    category: 'Local Area Guide',
    excerpt: 'Furniture restoran industrial untuk Greenland International Cikarang. Custom design untuk commercial area, residential cafe. Material berkualitas, finishing powder coating. Workshop lokal Bekasi.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2026-01-21',
    author: 'Helmi Ramdan'
  },
  // KOTA HARAPAN INDAH
  {
    id: 119,
    slug: 'furniture-cafe-kota-harapan-indah-bekasi-cluster',
    title: 'Furniture Cafe Kota Harapan Indah Bekasi: Cluster Commercial Area',
    category: 'Local Area Guide',
    excerpt: 'Jasa furniture cafe industrial Kota Harapan Indah. Melayani commercial cluster, cafe residential, home business. Custom design sesuai space. Free konsultasi & measurement. Delivery gratis Harapan Indah.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-22',
    author: 'Helmi Ramdan'
  },
  // MARGAHAYU - BEKASI TIMUR
  {
    id: 120,
    slug: 'furniture-industrial-margahayu-bekasi-timur-area',
    title: 'Furniture Industrial Margahayu Bekasi Timur: Residential & F&B',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial untuk Margahayu, Bekasi Timur. Coverage area: Margahayu Raya, sekitar kampus. Spesialis furniture cafe mahasiswa, warung, restoran. Harga terjangkau, kualitas premium.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-01-23',
    author: 'Helmi Ramdan'
  },
  // KALIABANG - BEKASI UTARA
  {
    id: 121,
    slug: 'furniture-cafe-kaliabang-bekasi-utara-tengah',
    title: 'Furniture Cafe Kaliabang Bekasi Utara Tengah: Area Komersial',
    category: 'Local Area Guide',
    excerpt: 'Furniture cafe industrial untuk Kaliabang Bekasi Utara Tengah. Melayani cafe, warung, restoran area komersial. Custom furniture dengan harga pabrik. Workshop terdekat, fast production 20 hari.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-24',
    author: 'Helmi Ramdan'
  },
  // KAYURINGIN JAYA
  {
    id: 122,
    slug: 'furniture-restoran-kayuringin-jaya-bekasi-selatan',
    title: 'Furniture Restoran Kayuringin Jaya Bekasi Selatan: F&B Specialist',
    category: 'Local Area Guide',
    excerpt: 'Supplier furniture restoran Kayuringin Jaya, Bekasi Selatan. Coverage: Kayuringin Raya, area kampus, commercial. Spesialis meja makan industrial, kursi restoran. Material premium, harga terjangkau.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2026-01-25',
    author: 'Helmi Ramdan'
  },
  // PEKAYON JAYA
  {
    id: 123,
    slug: 'furniture-cafe-pekayon-jaya-bekasi-selatan-area',
    title: 'Furniture Cafe Pekayon Jaya Bekasi Selatan: Commercial District',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture cafe Pekayon Jaya. Melayani area Pekayon, Jakasetia, commercial district. Custom furniture besi industrial untuk cafe modern. Free delivery area Bekasi Selatan. Garansi kualitas.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-26',
    author: 'Helmi Ramdan'
  },
  // JAKASAMPURNA - BEKASI BARAT
  {
    id: 124,
    slug: 'furniture-industrial-jakasampurna-bekasi-barat-area',
    title: 'Furniture Industrial Jakasampurna Bekasi Barat: Custom Workshop',
    category: 'Local Area Guide',
    excerpt: 'Furniture industrial custom Jakasampurna, Bekasi Barat. Coverage: Jakasampurna, Kota Baru. Spesialis cafe, restoran, office furniture. Workshop lokal Bekasi, produksi cepat, harga kompetitif.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-01-27',
    author: 'Helmi Ramdan'
  },
  // KRANJI - BEKASI BARAT
  {
    id: 125,
    slug: 'furniture-cafe-kranji-bekasi-barat-pinggir-jakarta',
    title: 'Furniture Cafe Kranji Bekasi Barat: Pinggir Jakarta Border',
    category: 'Local Area Guide',
    excerpt: 'Jasa furniture cafe industrial Kranji, Bekasi Barat. Strategis border Jakarta-Bekasi. Melayani cafe, restoran, home office. Custom design modern, material berkualitas. Delivery Jakarta & Bekasi.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-28',
    author: 'Helmi Ramdan'
  },
  // BINTARA - BEKASI BARAT
  {
    id: 126,
    slug: 'furniture-restoran-bintara-bekasi-barat-commercial',
    title: 'Furniture Restoran Bintara Bekasi Barat: Commercial Area',
    category: 'Local Area Guide',
    excerpt: 'Supplier furniture restoran Bintara, Bekasi Barat. Area coverage: Bintara Jaya, commercial strip. Spesialis meja kursi restoran industrial. Workshop terdekat, harga pabrik, kualitas terjamin.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2026-01-29',
    author: 'Helmi Ramdan'
  },
  // KARAWANG - TETANGGA BEKASI
  {
    id: 127,
    slug: 'furniture-industrial-karawang-terdekat-dari-bekasi',
    title: 'Furniture Industrial Karawang: Workshop Terdekat dari Bekasi',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial terdekat untuk Karawang. Lokasi di Bekasi dekat border Karawang. Melayani Karawang Barat, Karawang Timur. Spesialis cafe pabrik, kantin karyawan, corporate office.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-01-30',
    author: 'Helmi Ramdan'
  },
  // CIBITUNG - AREA PABRIK
  {
    id: 128,
    slug: 'furniture-cafe-cibitung-bekasi-kawasan-industri',
    title: 'Furniture Cafe Cibitung Bekasi: Kawasan Industri & Pabrik',
    category: 'Local Area Guide',
    excerpt: 'Furniture cafe industrial untuk Cibitung, Bekasi. Spesialis kantin pabrik, cafe karyawan, mess area. Volume discount untuk corporate project. Workshop dekat kawasan industri Cibitung. Fast delivery.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-01-31',
    author: 'Helmi Ramdan'
  },
  // SETU - AREA WORKSHOP
  {
    id: 129,
    slug: 'furniture-industrial-setu-bekasi-workshop-langsung',
    title: 'Furniture Industrial Setu Bekasi: Workshop Langsung - Harga Pabrik',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial di Setu, Bekasi. Lokasi produksi langsung, harga pabrik tanpa markup. Custom furniture cafe, restoran, hotel, kantor. Material premium, finishing powder coating berkualitas.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-02-01',
    author: 'Helmi Ramdan'
  },
  // METLAND TRANSYOGI - CILEUNGSI
  {
    id: 130,
    slug: 'furniture-cafe-metland-transyogi-cileungsi-commercial',
    title: 'Furniture Cafe Metland Transyogi Cileungsi: Commercial Area',
    category: 'Local Area Guide',
    excerpt: 'Furniture cafe industrial untuk Metland Transyogi, Cileungsi. Coverage: commercial area, residential. Workshop Bekasi melayani Cileungsi & sekitar. Custom design, delivery gratis area Metland.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-02-02',
    author: 'Helmi Ramdan'
  },
  // JAKARTA TIMUR - PERBATASAN BEKASI
  {
    id: 131,
    slug: 'furniture-industrial-jakarta-timur-perbatasan-bekasi',
    title: 'Furniture Industrial Jakarta Timur: Perbatasan Bekasi - Fast Delivery',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial terdekat untuk Jakarta Timur. Coverage: Cakung, Kramat Jati, Makasar, Cipayung. Dekat border Bekasi-Jakarta. Custom furniture cafe, restoran. Delivery cepat Jakarta Timur.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-02-03',
    author: 'Helmi Ramdan'
  },
  // JAKARTA PUSAT - CBD AREA
  {
    id: 132,
    slug: 'furniture-cafe-jakarta-pusat-cbd-office-building',
    title: 'Furniture Cafe Jakarta Pusat: CBD & Office Building Specialist',
    category: 'Local Area Guide',
    excerpt: 'Supplier furniture cafe industrial Jakarta Pusat. Spesialis tenant gedung perkantoran, corporate cafe, co-working space. Workshop Bekasi melayani Jakarta. Custom design premium, project experience.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-02-04',
    author: 'Helmi Ramdan'
  },
  // JAKARTA SELATAN - PREMIUM AREA
  {
    id: 133,
    slug: 'furniture-restoran-jakarta-selatan-premium-area',
    title: 'Furniture Restoran Jakarta Selatan: Premium F&B Area',
    category: 'Local Area Guide',
    excerpt: 'Furniture restoran industrial Jakarta Selatan. Coverage: Kemang, SCBD, Senopati, Kebayoran. Workshop Bekasi melayani Jakarta Selatan. Custom design premium, material berkualitas, timeline terjamin.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2026-02-05',
    author: 'Helmi Ramdan'
  },
  // DEPOK - SELATAN JAKARTA
  {
    id: 134,
    slug: 'furniture-cafe-depok-terdekat-dari-bekasi-workshop',
    title: 'Furniture Cafe Depok: Workshop Terdekat dari Bekasi',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture cafe industrial terdekat untuk Depok. Coverage: Margonda, UI, Sawangan. Melayani cafe kampus, restoran, F&B bisnis. Custom furniture berkualitas, harga terjangkau mahasiswa.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2026-02-06',
    author: 'Helmi Ramdan'
  },
  // BOGOR - JABODETABEK
  {
    id: 135,
    slug: 'furniture-industrial-bogor-workshop-bekasi-melayani',
    title: 'Furniture Industrial Bogor: Workshop Bekasi Melayani Area Bogor',
    category: 'Local Area Guide',
    excerpt: 'Workshop furniture industrial Bekasi melayani Bogor. Coverage: Bogor Kota, Cibinong, Sentul. Spesialis cafe, villa, resort furniture. Custom design tropical industrial. Delivery Bekasi-Bogor tersedia.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2026-02-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 136,
    slug: 'rahasia-cafe-hits-jakarta-bandung-bali-furniture-industrial-bikin-pelanggan-betah',
    title: 'Rahasia Cafe Hits di Jakarta, Bandung, Bali: Furniture Industrial yang Bikin Pelanggan Betah',
    category: 'Design Inspiration',
    excerpt: 'Kenapa cafe di Jakarta, Bandung, dan Bali makin hits? Temukan rahasia furniture industrial yang bikin pelanggan betah berlama-lama. Panduan lengkap dari praktisi arsitektur dengan pengalaman 10+ tahun.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-10-31',
    author: 'Helmi Ramdan'
  },
  // 20 NEW ARTICLES - CAFE & FURNITURE TRENDING KEYWORDS
  {
    id: 137,
    slug: 'cafe-24-jam-jakarta-bekasi-furniture-tahan-lama-operasional-non-stop',
    title: 'Cafe 24 Jam Jakarta & Bekasi: Furniture Tahan Lama untuk Operasional Non-Stop',
    category: 'Commercial Furniture',
    excerpt: 'Panduan memilih furniture industrial untuk cafe 24 jam. Material tahan intensitas tinggi, maintenance mudah, dan ROI optimal untuk bisnis cafe non-stop di Jakarta dan Bekasi.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-11-01',
    author: 'Helmi Ramdan'
  },
  {
    id: 138,
    slug: 'cafe-alam-outdoor-furniture-industrial-tahan-cuaca-tropis',
    title: 'Cafe Alam: Outdoor Furniture Industrial Tahan Cuaca Tropis Indonesia',
    category: 'Design Inspiration',
    excerpt: 'Desain cafe alam dengan furniture outdoor industrial. Tips memilih material tahan hujan dan panas, layout outdoor optimal, dan inspirasi cafe alam hits di Indonesia.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-11-02',
    author: 'Helmi Ramdan'
  },
  {
    id: 139,
    slug: 'cafe-sekitar-saya-strategi-furniture-menarik-pelanggan-lokal',
    title: 'Cafe Sekitar Saya: Strategi Furniture untuk Menarik Pelanggan Lokal',
    category: 'Tips and Trick',
    excerpt: 'Bagaimana furniture yang tepat bikin "cafe sekitar" jadi destinasi favorit warga lokal. Strategi layout, seating capacity, dan budget-friendly furniture untuk cafe residential area.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop',
    date: '2025-11-03',
    author: 'Helmi Ramdan'
  },
  {
    id: 140,
    slug: 'nama-cafe-unik-branding-furniture-industrial-konsep-kuat',
    title: 'Nama Cafe Unik: Branding dengan Furniture Industrial untuk Konsep Kuat',
    category: 'Design Inspiration',
    excerpt: 'Sinkronisasi nama cafe unik dengan furniture industrial yang match. Panduan branding visual, konsep interior, dan furniture custom yang represent identitas cafe Anda.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 141,
    slug: 'cafe-bsd-serpong-furniture-industrial-area-premium',
    title: 'Cafe BSD Serpong: Furniture Industrial untuk Area Premium & Modern',
    category: 'Local Area Guide',
    excerpt: 'Panduan furniture cafe BSD dan Serpong area. Demographics premium, design expectation tinggi, dan supplier furniture industrial terdekat dari BSD.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-05',
    author: 'Helmi Ramdan'
  },
  {
    id: 142,
    slug: 'cafe-sentul-bogor-furniture-konsep-alam-industrial',
    title: 'Cafe Sentul Bogor: Furniture Konsep Alam-Industrial Tropical Modern',
    category: 'Design Inspiration',
    excerpt: 'Kombinasi alam dan industrial untuk cafe Sentul-Bogor. Material natural wood dan besi, konsep tropical modern, dan furniture tahan kelembaban Bogor.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 143,
    slug: 'cafe-depok-margonda-ui-furniture-student-friendly',
    title: 'Cafe Depok Margonda UI: Furniture Student-Friendly dengan Budget Terjangkau',
    category: 'Commercial Furniture',
    excerpt: 'Furniture cafe untuk area kampus Depok-Margonda-UI. Layout study-friendly, power outlet strategy, dan harga terjangkau mahasiswa tanpa compromise kualitas.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 144,
    slug: 'cafe-jakarta-selatan-kemang-scbd-furniture-premium',
    title: 'Cafe Jakarta Selatan Kemang SCBD: Furniture Premium Industrial Chic',
    category: 'Design Inspiration',
    excerpt: 'Standar furniture cafe di area premium Jakarta Selatan. Material high-end, design sophisticated, dan ROI untuk high-spending customer Kemang-SCBD.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-08',
    author: 'Helmi Ramdan'
  },
  {
    id: 145,
    slug: 'cafe-bandung-dago-riau-furniture-instagrammable-hits',
    title: 'Cafe Bandung Dago Riau: Furniture Instagrammable yang Bikin Hits',
    category: 'Design Inspiration',
    excerpt: 'Rahasia cafe hits di Bandung: furniture industrial yang photogenic. Analisis cafe populer Dago-Riau, trend Bandung, dan tips furniture Instagram-worthy.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-11-09',
    author: 'Helmi Ramdan'
  },
  {
    id: 146,
    slug: 'cafe-bali-canggu-seminyak-furniture-tropical-industrial',
    title: 'Cafe Bali Canggu Seminyak: Furniture Tropical Industrial Beach Vibes',
    category: 'Design Inspiration',
    excerpt: 'Furniture industrial untuk cafe Bali style. Material tahan garam laut, design tropical-industrial, dan inspirasi cafe hits Canggu-Seminyak-Ubud.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-11-10',
    author: 'Helmi Ramdan'
  },
  {
    id: 147,
    slug: 'cafe-surabaya-galaxy-pakuwon-furniture-modern-spacious',
    title: 'Cafe Surabaya Galaxy Pakuwon: Furniture Modern Spacious & Comfortable',
    category: 'Local Area Guide',
    excerpt: 'Panduan furniture cafe Surabaya area mall dan premium. Demographics Surabaya, preferensi spacious seating, dan supplier furniture industrial Jawa Timur.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-11',
    author: 'Helmi Ramdan'
  },
  {
    id: 148,
    slug: 'cafe-jogja-prawirotaman-malioboro-furniture-vintage-industrial',
    title: 'Cafe Jogja Prawirotaman Malioboro: Furniture Vintage Industrial Heritage',
    category: 'Design Inspiration',
    excerpt: 'Kombinasi heritage Jogja dengan industrial furniture. Konsep vintage-industrial, material reclaimed, dan cafe hits di Prawirotaman-Malioboro-Kaliurang.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-11-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 149,
    slug: 'cafe-malang-batu-furniture-mountain-view-industrial',
    title: 'Cafe Malang Batu: Furniture Mountain View Industrial dengan Pemandangan',
    category: 'Design Inspiration',
    excerpt: 'Desain cafe dengan view pegunungan Malang-Batu. Furniture outdoor industrial, layout maximize view, dan konsep nature-meets-industrial.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    date: '2025-11-13',
    author: 'Helmi Ramdan'
  },
  {
    id: 150,
    slug: 'cafe-bogor-puncak-furniture-sejuk-highland-industrial',
    title: 'Cafe Bogor Puncak: Furniture Sejuk Highland Industrial Cool Climate',
    category: 'Design Inspiration',
    excerpt: 'Furniture industrial untuk cafe dataran tinggi Bogor-Puncak. Material tahan kelembaban tinggi, konsep cozy highland, dan pemilihan warna warm.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop',
    date: '2025-11-14',
    author: 'Helmi Ramdan'
  },
  {
    id: 151,
    slug: 'cafe-medan-furniture-spacious-culture-sumatera',
    title: 'Cafe Medan: Furniture Spacious untuk Culture Nongkrong Sumatera',
    category: 'Local Area Guide',
    excerpt: 'Karakteristik cafe Medan: spacious dan group-friendly. Furniture industrial untuk accommodate kultur nongkrong Medan, meja besar, dan seating banyak.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 152,
    slug: 'cafe-semarang-furniture-compact-efficient-mall-ruko',
    title: 'Cafe Semarang: Furniture Compact Efficient untuk Mall & Ruko',
    category: 'Local Area Guide',
    excerpt: 'Strategi furniture cafe Semarang di mall dan ruko. Space efficiency, layout optimal untuk tenant terbatas, dan supplier furniture Jawa Tengah.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 153,
    slug: 'cafe-makassar-furniture-coastal-industrial-sulawesi',
    title: 'Cafe Makassar: Furniture Coastal Industrial Sulawesi Beach Style',
    category: 'Design Inspiration',
    excerpt: 'Furniture industrial untuk cafe coastal Makassar. Material tahan angin laut, konsep beach industrial, dan kultur kopi Sulawesi Selatan.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-11-17',
    author: 'Helmi Ramdan'
  },
  {
    id: 154,
    slug: 'cafe-terdekat-dari-saya-furniture-strategy-lokal',
    title: 'Cafe Terdekat dari Saya: Furniture Strategy Menjadi Pilihan Lokal Pertama',
    category: 'Tips and Trick',
    excerpt: 'Bagaimana furniture bikin "cafe terdekat" jadi go-to place warga sekitar. Community-oriented design, comfortable seating, dan word-of-mouth organic marketing.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-11-18',
    author: 'Helmi Ramdan'
  },
  {
    id: 155,
    slug: 'menu-cafe-furniture-mendukung-pengalaman-kuliner',
    title: 'Menu Cafe & Furniture: Bagaimana Furniture Mendukung Pengalaman Kuliner',
    category: 'Tips and Trick',
    excerpt: 'Sinkronisasi menu cafe dengan furniture. Fine dining butuh meja besar, quick bite butuh bar table, dan bagaimana furniture enhance food experience.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-19',
    author: 'Helmi Ramdan'
  },
  {
    id: 156,
    slug: 'the-cafe-konsep-minimalis-furniture-less-is-more',
    title: 'The Cafe Konsep Minimalis: Furniture "Less is More" yang Powerful',
    category: 'Design Inspiration',
    excerpt: 'Konsep minimalis untuk "The Cafe" brand positioning. Furniture industrial minimalis, color palette monochrome, dan aesthetic clean yang timeless.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-11-20',
    author: 'Helmi Ramdan'
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

