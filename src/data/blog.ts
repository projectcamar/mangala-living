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
    excerpt: 'Memilih furniture industrial untuk cafe bukan hanya soal estetika, tetapi juga tentang menciptakan suasana yang nyaman dan fungsional bagi pelanggan.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-10-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 2,
    slug: 'keunggulan-furniture-besi-custom-vs-ready-stock',
    title: 'Keunggulan Furniture Besi Custom vs Ready Stock',
    category: 'About Furniture',
    excerpt: 'Saat memutuskan untuk membeli furniture besi industrial, Anda akan dihadapkan pada dua pilihan: custom atau ready stock.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-10-14',
    author: 'Helmi Ramdan'
  },
  {
    id: 3,
    slug: 'inspirasi-desain-interior-industrial-minimalis',
    title: 'Inspirasi Desain Interior Industrial Minimalis 2025',
    category: 'Furniture Information',
    excerpt: 'Desain interior industrial minimalis menjadi tren yang terus populer di tahun 2024.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-10-13',
    author: 'Helmi Ramdan'
  },
  {
    id: 4,
    slug: 'cara-merawat-furniture-besi-agar-awet',
    title: 'Cara Merawat Furniture Besi Agar Tetap Awet dan Berkualitas',
    category: 'Tips and Trick',
    excerpt: 'Furniture besi industrial adalah investasi jangka panjang untuk bisnis atau rumah Anda.',
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
    excerpt: 'Banyak pelaku bisnis masih beranggapan bahwa furniture import lebih berkualitas dibanding produk lokal.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop',
    date: '2025-10-10',
    author: 'Helmi Ramdan'
  },
  {
    id: 7,
    slug: 'desain-meja-bar-industrial-untuk-ruang-terbatas',
    title: 'Desain Meja Bar Industrial untuk Ruang Terbatas',
    category: 'Tips and Trick',
    excerpt: 'Memiliki ruangan terbatas bukan berarti Anda tidak bisa memiliki bar area yang stylish dan fungsional.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-10-09',
    author: 'Helmi Ramdan'
  },
  {
    id: 8,
    slug: 'kombinasi-kayu-dan-besi-untuk-furniture-modern',
    title: 'Kombinasi Kayu dan Besi untuk Furniture Modern',
    category: 'Furniture Information',
    excerpt: 'Kombinasi kayu dan besi adalah formula sempurna untuk furniture modern industrial.',
    image: 'https://images.unsplash.com/photo-1615529162924-f83c82d7d7f4?w=800&auto=format&fit=crop',
    date: '2025-10-08',
    author: 'Helmi Ramdan'
  },
  {
    id: 9,
    slug: 'furniture-outdoor-tahan-cuaca-untuk-teras',
    title: 'Furniture Outdoor Tahan Cuaca untuk Area Teras',
    category: 'About Furniture',
    excerpt: 'Area outdoor seperti teras, balkon, atau taman membutuhkan furniture khusus yang tahan terhadap cuaca ekstrem.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-10-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 10,
    slug: 'budget-furniture-cafe-untuk-pemula',
    title: 'Panduan Budget Furniture Cafe untuk Pemula',
    category: 'Tips and Trick',
    excerpt: 'Memulai bisnis cafe membutuhkan budget yang tidak sedikit, dan furniture adalah salah satu cost component terbesar.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop',
    date: '2025-10-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 11,
    slug: 'finishing-furniture-besi-powder-coating-vs-cat',
    title: 'Finishing Furniture Besi: Powder Coating vs Cat Biasa',
    category: 'Furniture Information',
    excerpt: 'Finishing adalah tahap crucial yang menentukan durability dan aesthetic furniture besi. Dua metode finishing paling populer adalah powder coating dan cat biasa.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-05',
    author: 'Helmi Ramdan'
  },
  {
    id: 12,
    slug: 'kesalahan-umum-saat-membeli-furniture-industrial',
    title: '7 Kesalahan Umum Saat Membeli Furniture Industrial',
    category: 'About Furniture',
    excerpt: 'Membeli furniture industrial adalah investasi signifikan, baik untuk bisnis maupun hunian.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-10-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 13,
    slug: 'sofa-cafe-industrial-minimalis-untuk-konsep-modern',
    title: 'Sofa Cafe Industrial Minimalis untuk Konsep Modern',
    category: 'Furniture Information',
    excerpt: 'Sofa cafe industrial minimalis menjadi pilihan utama untuk menciptakan konsep modern yang elegan dan fungsional.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 14,
    slug: 'meja-bar-industrial-untuk-cafe-dan-restoran',
    title: 'Meja Bar Industrial untuk Cafe dan Restoran',
    category: 'Furniture Information',
    excerpt: 'Meja bar industrial menjadi elemen penting dalam desain interior cafe dan restoran modern.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-10-17',
    author: 'Helmi Ramdan'
  },
  {
    id: 15,
    slug: 'kursi-bar-industrial-dengan-desain-modern',
    title: 'Kursi Bar Industrial dengan Desain Modern',
    category: 'Furniture Information',
    excerpt: 'Kursi bar industrial dengan desain modern menjadi pilihan utama untuk melengkapi area bar dan lounge di cafe serta restoran.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-10-18',
    author: 'Helmi Ramdan'
  },
  {
    id: 16,
    slug: 'rak-display-industrial-untuk-retail-dan-cafe',
    title: 'Rak Display Industrial untuk Retail dan Cafe',
    category: 'Furniture Information',
    excerpt: 'Rak display industrial menjadi solusi praktis untuk menampilkan produk dan merchandise di retail, cafe, dan restoran.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-10-19',
    author: 'Helmi Ramdan'
  },
  {
    id: 17,
    slug: 'meja-makan-industrial-untuk-restoran-modern',
    title: 'Meja Makan Industrial untuk Restoran Modern',
    category: 'Furniture Information',
    excerpt: 'Meja makan industrial menjadi pilihan utama untuk menciptakan suasana yang hangat dan modern di restoran.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-10-20',
    author: 'Helmi Ramdan'
  },
  {
    id: 18,
    slug: 'furniture-outdoor-industrial-tahan-cuaca',
    title: 'Furniture Outdoor Industrial Tahan Cuaca',
    category: 'Furniture Information',
    excerpt: 'Furniture outdoor industrial tahan cuaca menjadi solusi ideal untuk area outdoor cafe, restoran, dan hotel.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    date: '2025-10-21',
    author: 'Helmi Ramdan'
  },
  {
    id: 19,
    slug: 'daybed-industrial-untuk-area-lounge-modern',
    title: 'Daybed Industrial untuk Area Lounge Modern',
    category: 'Furniture Information',
    excerpt: 'Daybed industrial menjadi pilihan utama untuk menciptakan area lounge yang nyaman dan modern di hotel, cafe, dan restoran.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-22',
    author: 'Helmi Ramdan'
  },
  {
    id: 20,
    slug: 'meja-kerja-industrial-untuk-kantor-modern',
    title: 'Meja Kerja Industrial untuk Kantor Modern',
    category: 'Furniture Information',
    excerpt: 'Meja kerja industrial menjadi pilihan utama untuk menciptakan workspace yang produktif dan modern di kantor.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2025-10-23',
    author: 'Helmi Ramdan'
  },
  {
    id: 21,
    slug: 'rak-buku-industrial-untuk-perpustakaan-modern',
    title: 'Rak Buku Industrial untuk Perpustakaan Modern',
    category: 'Furniture Information',
    excerpt: 'Rak buku industrial menjadi pilihan utama untuk menciptakan perpustakaan yang fungsional dan modern.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    date: '2025-10-24',
    author: 'Helmi Ramdan'
  },
  {
    id: 22,
    slug: 'furniture-industrial-custom-untuk-hotel',
    title: 'Furniture Industrial Custom untuk Hotel',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial custom untuk hotel menjadi solusi ideal untuk menciptakan suasana yang elegan dan modern di berbagai area hotel.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    date: '2025-10-25',
    author: 'Helmi Ramdan'
  },
  {
    id: 23,
    slug: 'furniture-industrial-murah-untuk-startup',
    title: 'Furniture Industrial Murah untuk Startup',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial murah menjadi solusi ideal untuk startup yang membutuhkan furniture berkualitas dengan budget terbatas.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2025-10-26',
    author: 'Helmi Ramdan'
  },
  {
    id: 24,
    slug: 'furniture-industrial-bekasi-terpercaya',
    title: 'Furniture Industrial Bekasi Terpercaya',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial Bekasi terpercaya menjadi pilihan utama untuk berbagai kebutuhan furniture berkualitas tinggi.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-27',
    author: 'Helmi Ramdan'
  },
  {
    id: 25,
    slug: 'furniture-industrial-custom-design',
    title: 'Furniture Industrial Custom Design',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial custom design menjadi solusi ideal untuk menciptakan furniture yang unik dan sesuai dengan kebutuhan spesifik.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-28',
    author: 'Helmi Ramdan'
  },
  {
    id: 26,
    slug: 'furniture-industrial-harga-pabrik',
    title: 'Furniture Industrial Harga Pabrik',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial harga pabrik menjadi solusi ideal untuk mendapatkan furniture berkualitas tinggi dengan harga yang kompetitif.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-29',
    author: 'Helmi Ramdan'
  },
  {
    id: 27,
    slug: 'furniture-industrial-garansi-kualitas',
    title: 'Furniture Industrial Garansi Kualitas',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial garansi kualitas menjadi jaminan penting untuk investasi furniture jangka panjang.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-30',
    author: 'Helmi Ramdan'
  },
  {
    id: 28,
    slug: 'furniture-industrial-workshop-bekasi',
    title: 'Furniture Industrial Workshop Bekasi',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial workshop Bekasi menjadi pusat produksi furniture berkualitas tinggi di Indonesia.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-10-31',
    author: 'Helmi Ramdan'
  },
  {
    id: 29,
    slug: 'furniture-industrial-material-berkualitas',
    title: 'Furniture Industrial Material Berkualitas',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial material berkualitas menjadi faktor penting dalam menentukan kualitas dan daya tahan furniture.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-01',
    author: 'Helmi Ramdan'
  },
  {
    id: 30,
    slug: 'furniture-industrial-finishing-powder-coating',
    title: 'Furniture Industrial Finishing Powder Coating',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial finishing powder coating menjadi solusi ideal untuk memberikan perlindungan dan tampilan yang optimal pada furniture.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-02',
    author: 'Helmi Ramdan'
  },
  {
    id: 31,
    slug: 'furniture-industrial-layanan-profesional',
    title: 'Furniture Industrial Layanan Profesional',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial layanan profesional menjadi faktor penting dalam memberikan pengalaman terbaik untuk pelanggan.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-03',
    author: 'Helmi Ramdan'
  },
  {
    id: 32,
    slug: 'furniture-industrial-pengalaman-25-tahun',
    title: 'Furniture Industrial Pengalaman 25 Tahun',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial pengalaman 25 tahun menjadi bukti kualitas dan kepercayaan dalam industri furniture.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 33,
    slug: 'furniture-industrial-1000-klien-puas',
    title: 'Furniture Industrial 1000 Klien Puas',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial 1000 klien puas menjadi bukti kualitas dan kepercayaan dalam industri furniture.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-05',
    author: 'Helmi Ramdan'
  },
  {
    id: 34,
    slug: 'furniture-industrial-custom-design-terpercaya',
    title: 'Furniture Industrial Custom Design Terpercaya',
    category: 'Furniture Information',
    excerpt: 'Furniture industrial custom design terpercaya menjadi solusi ideal untuk menciptakan furniture yang unik dan sesuai dengan kebutuhan spesifik.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 35,
    slug: 'inspirasi-desain-kafe-industrial-minimalis-7-furniture-wajib',
    title: 'Inspirasi Desain Kafe Industrial Minimalis: 7 Furniture Wajib Punya',
    category: 'Furniture Information',
    excerpt: 'Desain kafe industrial minimalis menjadi tren yang tak pernah lekang oleh waktu.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 36,
    slug: 'harga-furniture-industrial-terbaru-2025-lengkap-kafe-kantor',
    title: 'Harga Furniture Industrial Terbaru 2025 (Lengkap untuk Kafe & Kantor)',
    category: 'Furniture Information',
    excerpt: 'Harga furniture industrial menjadi pertimbangan utama bagi pemilik bisnis yang ingin menciptakan ruang komersial dengan konsep industrial modern.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 37,
    slug: 'panduan-lengkap-memilih-furniture-industrial-untuk-restoran',
    title: 'Panduan Lengkap Memilih Furniture Industrial untuk Restoran',
    category: 'Tips and Trick',
    excerpt: 'Memilih furniture industrial untuk restoran memerlukan pertimbangan yang matang karena restoran memiliki karakteristik operasional yang berbeda dengan kafe.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 38,
    slug: '7-model-meja-industrial-terlaris-untuk-kantor-modern',
    title: '7 Model Meja Industrial Terlaris untuk Kantor Modern',
    category: 'Furniture Information',
    excerpt: 'Meja kantor industrial menjadi pilihan populer untuk menciptakan workspace modern yang produktif dan estetis.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 39,
    slug: 'tren-desain-interior-industrial-scandinavian-2025',
    title: 'Tren Desain Interior Industrial Scandinavian 2025',
    category: 'Furniture Information',
    excerpt: 'Tren desain interior industrial Scandinavian 2025 menggabungkan elemen industrial yang kuat dengan estetika Scandinavian yang minimalis dan hangat.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 40,
    slug: 'hollowline-display-rack-solusi-storage-industrial-modern',
    title: 'Hollowline Display Rack: Solusi Storage Industrial Modern Terbaik',
    category: 'Furniture Information',
    excerpt: 'Hollowline Display Rack menjadi solusi storage industrial modern yang sangat populer di kalangan pemilik bisnis retail, cafe, dan restoran.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 41,
    slug: 'display-shelf-rack-industrial-untuk-retail-dan-cafe',
    title: 'Display Shelf Rack Industrial untuk Retail dan Cafe Modern',
    category: 'Furniture Information',
    excerpt: 'Display Shelf Rack Industrial menjadi elemen penting dalam menciptakan tampilan retail dan cafe yang menarik dan fungsional.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 42,
    slug: 'stall-chair-design-inspirasi-kursi-bar-industrial',
    title: 'Stall Chair Design: Inspirasi Kursi Bar Industrial Terbaik',
    category: 'Furniture Information',
    excerpt: 'Stall Chair Design dengan konsep industrial menjadi pilihan populer untuk cafe, restoran, dan bar modern.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-10-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 43,
    slug: 'meja-cafe-murah-harga-terbaru-2025',
    title: 'Meja Cafe Murah Harga Terbaru 2025 - Kualitas Premium',
    category: 'Furniture Information',
    excerpt: 'Mencari meja cafe murah dengan kualitas premium? Mangala Living menawarkan berbagai pilihan meja cafe murah harga terbaru 2025 yang dirancang khusus untuk cafe, restoran, dan kedai kopi modern.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 44,
    slug: 'kursi-bar-cafe-murah-bekasi-ready-stock',
    title: 'Kursi Bar Cafe Murah Bekasi Ready Stock - Harga Terjangkau',
    category: 'Furniture Information',
    excerpt: 'Pencari kursi bar cafe murah di Bekasi? Mangala Living menyediakan kursi bar cafe murah ready stock dengan harga terjangkau.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-11-08',
    author: 'Helmi Ramdan'
  },
  {
    id: 45,
    slug: 'furniture-cafe-murah-bekasi-harga-pabrik',
    title: 'Furniture Cafe Murah Bekasi Harga Pabrik - Workshop Langsung',
    category: 'Furniture Information',
    excerpt: 'Mencari furniture cafe murah di Bekasi? Mangala Living adalah produsen furniture industrial terpercaya dengan harga pabrik yang terjangkau.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-09',
    author: 'Helmi Ramdan'
  },
  {
    id: 46,
    slug: 'meja-makan-cafe-industrial-minimalis-murah',
    title: 'Meja Makan Cafe Industrial Minimalis Murah - Set dengan Kursi',
    category: 'Furniture Information',
    excerpt: 'Meja makan adalah salah satu furniture paling penting di cafe.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-10',
    author: 'Helmi Ramdan'
  },
  {
    id: 47,
    slug: 'display-rack-cafe-murah-industrial-besi',
    title: 'Display Rack Cafe Murah Industrial Besi - Hollowline Model',
    category: 'Furniture Information',
    excerpt: 'Display rack adalah furniture multifungsi yang sangat penting di cafe modern.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-11-11',
    author: 'Helmi Ramdan'
  },
  {
    id: 48,
    slug: 'bar-set-cafe-murah-outdoor-industrial',
    title: 'Bar Set Cafe Murah Outdoor Industrial - Steelframe Model',
    category: 'Furniture Information',
    excerpt: 'Area outdoor adalah aset berharga untuk cafe modern.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    date: '2025-11-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 49,
    slug: 'furniture-industrial-harga-murah-jakarta-bekasi',
    title: 'Furniture Industrial Harga Murah Jakarta Bekasi - Pengalaman 25 Tahun',
    category: 'Furniture Information',
    excerpt: 'Mencari furniture industrial harga murah untuk Jakarta dan Bekasi? Mangala Living adalah solusinya.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-11-13',
    author: 'Helmi Ramdan'
  },
  {
    id: 50,
    slug: 'meja-kerja-cafe-murah-industrial-rak-buku',
    title: 'Meja Kerja Cafe Murah Industrial dengan Rak Buku - Multifungsi',
    category: 'Furniture Information',
    excerpt: 'Meja kerja adalah furniture yang wajib ada di cafe modern.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2024-11-14',
    author: 'Helmi Ramdan'
  },
  {
    id: 51,
    slug: 'kitchen-cabinet-cafe-murah-industrial-besi',
    title: 'Kitchen Cabinet Cafe Murah Industrial Besi - Custom Design',
    category: 'Furniture Information',
    excerpt: 'Kitchen cabinet adalah heart of the kitchen di cafe Anda.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 52,
    slug: 'outdoor-furniture-cafe-murah-tahan-cuaca',
    title: 'Outdoor Furniture Cafe Murah Tahan Cuaca - Industrial Style',
    category: 'Furniture Information',
    excerpt: 'Area outdoor adalah aset berharga yang harus dioptimalkan untuk cafe modern.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 53,
    slug: 'jual-meja-kafe-industrial-modern-harga-terbaik-2025',
    title: 'Jual Meja Kafe Industrial Modern - Harga Terbaik 2025',
    category: 'Furniture Information',
    excerpt: 'Mencari meja kafe industrial modern dengan harga terbaik 2025? Anda berada di tempat yang tepat! Meja kafe industrial menjadi pilihan utama para pemilik cafe dan restoran modern karena desainnya yang elegan, kokoh, dan tahan lama.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-11-17',
    author: 'Helmi Ramdan'
  },
  {
    id: 54,
    slug: 'meja-kafe-bulat-industrial-desain-unik-cafe-modern',
    title: 'Meja Kafe Bulat Industrial - Desain Unik untuk Cafe Modern',
    category: 'Furniture Information',
    excerpt: 'Meja kafe bulat industrial menjadi pilihan unik untuk menciptakan suasana cafe modern yang berbeda.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop',
    date: '2024-11-18',
    author: 'Helmi Ramdan'
  },
  {
    id: 55,
    slug: 'meja-kursi-kafe-set-industrial-solusi-lengkap-cafe',
    title: 'Meja Kursi Kafe Set Industrial - Solusi Lengkap Cafe',
    category: 'Furniture Information',
    excerpt: 'Set meja kursi kafe industrial menjadi solusi lengkap untuk furnishing cafe Anda.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2024-11-19',
    author: 'Helmi Ramdan'
  },
  {
    id: 56,
    slug: 'model-kursi-meja-kafe-industrial-inspirasi-terbaru',
    title: 'Model Kursi Meja Kafe Industrial - Inspirasi Terbaru',
    category: 'Furniture Information',
    excerpt: 'Model kursi meja kafe industrial terus berkembang dengan inspirasi desain terbaru yang mengikuti tren modern.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2024-11-20',
    author: 'Helmi Ramdan'
  },
  {
    id: 57,
    slug: 'harga-bikin-meja-kafe-murah-custom-design-terjangkau',
    title: 'Harga Bikin Meja Kafe Murah - Custom Design Terjangkau',
    category: 'Tips and Trick',
    excerpt: 'Mencari harga bikin meja kafe murah dengan custom design terjangkau? Custom furniture cafe menjadi pilihan cerdas untuk mendapatkan furniture yang sesuai dengan konsep dan budget cafe Anda.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-11-21',
    author: 'Helmi Ramdan'
  },
  {
    id: 58,
    slug: 'meja-dan-kursi-untuk-kafe-murah-tapi-bagus-rekomendasi-terbaik',
    title: 'Meja dan Kursi untuk Kafe Murah Tapi Bagus - Rekomendasi Terbaik',
    category: 'Furniture Information',
    excerpt: 'Mencari meja dan kursi untuk kafe murah tapi bagus? Budget terbatas bukan berarti Anda harus mengorbankan kualitas furniture cafe.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2024-11-22',
    author: 'Helmi Ramdan'
  },
  {
    id: 59,
    slug: 'meja-kursi-kafe-murah-solusi-budget-terbatas',
    title: 'Meja Kursi Kafe Murah - Solusi Budget Terbatas',
    category: 'Tips and Trick',
    excerpt: 'Memiliki budget terbatas untuk furniture cafe bukan berarti Anda harus mengorbankan kualitas dan estetika.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2024-11-23',
    author: 'Helmi Ramdan'
  },
  {
    id: 60,
    slug: 'furniture-kafe-industrial-panduan-lengkap-pemilihan',
    title: 'Furniture Kafe Industrial - Panduan Lengkap Pemilihan',
    category: 'Tips and Trick',
    excerpt: 'Furniture kafe industrial menjadi pilihan utama para pemilik cafe modern karena desainnya yang elegan, kokoh, dan tahan lama.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-11-24',
    author: 'Helmi Ramdan'
  },
  {
    id: 61,
    slug: 'furnitur-untuk-kafe-tips-memilih-yang-tepat',
    title: 'Furnitur untuk Kafe - Tips Memilih yang Tepat',
    category: 'Tips and Trick',
    excerpt: 'Memilih furnitur untuk kafe yang tepat merupakan langkah penting dalam menciptakan atmosfer yang nyaman dan menarik bagi pelanggan.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-11-25',
    author: 'Helmi Ramdan'
  },
  {
    id: 62,
    slug: 'furniture-kafe-2-lantai-sederhana-modern-inspirasi-desain',
    title: 'Furniture Kafe 2 Lantai Sederhana Modern - Inspirasi Desain',
    category: 'Furniture Information',
    excerpt: 'Furniture kafe 2 lantai sederhana modern menjadi solusi ideal untuk memaksimalkan ruang dan menciptakan pengalaman yang berbeda di setiap lantai.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2024-11-26',
    author: 'Helmi Ramdan'
  },
  {
    id: 63,
    slug: 'furniture-kafe-buku-konsep-cafe-literasi-modern',
    title: 'Furniture Kafe Buku - Konsep Cafe Literasi Modern',
    category: 'Furniture Information',
    excerpt: 'Furniture kafe buku menjadi konsep unik yang menggabungkan suasana literasi dengan kenyamanan cafe modern.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    date: '2024-11-27',
    author: 'Helmi Ramdan'
  },
  {
    id: 64,
    slug: 'furniture-untuk-kafe-bergaya-industrial-vintage-panduan-lengkap',
    title: 'Furniture untuk Kafe Bergaya Industrial Vintage - Panduan Lengkap',
    category: 'Furniture Information',
    excerpt: 'Furniture untuk kafe bergaya industrial vintage menjadi pilihan populer untuk menciptakan atmosfer yang unik dan berkarakter.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2024-11-28',
    author: 'Helmi Ramdan'
  },
  {
    id: 65,
    slug: 'kafe-dengan-furniture-paling-unik-inspirasi-kreatif',
    title: 'Kafe dengan Furniture Paling Unik - Inspirasi Kreatif',
    category: 'Furniture Information',
    excerpt: 'Kafe dengan furniture paling unik menjadi daya tarik utama yang membedakan cafe Anda dari kompetitor.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2024-11-29',
    author: 'Helmi Ramdan'
  },
  {
    id: 66,
    slug: 'perhitungan-furniture-kafe-panduan-budget-dan-layout',
    title: 'Perhitungan Furniture Kafe - Panduan Budget dan Layout',
    category: 'Tips and Trick',
    excerpt: 'Perhitungan furniture kafe yang tepat merupakan kunci sukses dalam perencanaan budget dan layout cafe.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-11-30',
    author: 'Helmi Ramdan'
  },
  {
    id: 67,
    slug: 'industrial-cafe-furniture-tren-terbaru-2025',
    title: 'Industrial Cafe Furniture - Tren Terbaru 2025',
    category: 'Furniture Information',
    excerpt: 'Industrial cafe furniture terus berkembang dengan tren terbaru 2025 yang mengikuti perkembangan desain dan kebutuhan pelanggan.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-12-01',
    author: 'Helmi Ramdan'
  },
  // HIGH-INTENT KEYWORDS - PRIORITY FOR PAGE 1 GOOGLE
  {
    id: 68,
    slug: 'furniture-besi-custom-bekasi-workshop-terpercaya',
    title: 'Furniture Besi Custom Bekasi: Workshop Terpercaya dengan Pengalaman 25 Tahun',
    category: 'Workshop & Production',
    excerpt: 'Mencari furniture besi custom Bekasi berkualitas tinggi dengan harga yang kompetitif? Mangala Living adalah workshop furniture industrial terpercaya di Bekasi yang telah melayani lebih dari 1000 klien sejak tahun 1999.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-02',
    author: 'Helmi Ramdan'
  },
  {
    id: 69,
    slug: 'industrial-furniture-bekasi-harga-pabrik-kualitas-premium',
    title: 'Industrial Furniture Bekasi: Harga Pabrik, Kualitas Premium, Workshop Langsung',
    category: 'Workshop & Production',
    excerpt: 'Industrial furniture Bekasi dengan harga pabrik dan kualitas premium kini bukan lagi mimpi.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2024-12-03',
    author: 'Helmi Ramdan'
  },
  {
    id: 70,
    slug: 'furniture-cafe-industrial-bekasi-desain-custom-modern',
    title: 'Furniture Cafe Industrial Bekasi: Desain Custom Modern untuk Bisnis F&B',
    category: 'Commercial Furniture',
    excerpt: 'Furniture cafe industrial Bekasi dengan desain custom modern. Mangala Living spesialis furniture cafe industrial: meja makan, kursi bar, display rack. Workshop Bekasi, pengalaman 25 tahun.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-12-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 71,
    slug: 'workshop-furniture-besi-bekasi-produksi-langsung',
    title: 'Workshop Furniture Besi Bekasi: Produksi Langsung, Custom Design, Harga Kompetitif',
    category: 'Workshop & Production',
    excerpt: 'Workshop furniture besi Bekasi terpercaya. Mangala Living workshop modern dengan produksi langsung, custom design sesuai kebutuhan. Material berkualitas, finishing powder coating, garansi kualitas.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2024-12-05',
    author: 'Helmi Ramdan'
  },
  {
    id: 72,
    slug: 'jual-furniture-industrial-jakarta-bekasi-terlengkap',
    title: 'Jual Furniture Industrial Jakarta Bekasi Terlengkap - Harga Pabrik',
    category: 'Commercial Furniture',
    excerpt: 'Jual furniture industrial Jakarta dan Bekasi paling lengkap. Mangala Living menyediakan meja, kursi, rak display, kitchen cabinet industrial. Workshop di Bekasi, melayani seluruh Jabodetabek.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 73,
    slug: 'meja-makan-besi-custom-bekasi-industrial-minimalis',
    title: 'Meja Makan Besi Custom Bekasi: Industrial Minimalis untuk Cafe & Restoran',
    category: 'Commercial Furniture',
    excerpt: 'Meja makan besi custom Bekasi dengan desain industrial minimalis. Set meja makan + kursi, berbagai ukuran custom. Workshop Mangala Living melayani cafe, restoran, hotel. Kualitas premium, harga terjangkau.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-12-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 74,
    slug: 'meja-cafe-industrial-besi-custom-bekasi-jabodetabek',
    title: 'Meja Cafe Industrial Besi Custom Bekasi - Melayani Jabodetabek',
    category: 'Commercial Furniture',
    excerpt: 'Meja cafe industrial besi custom dari Bekasi. Mangala Living produksi meja cafe berbagai model: bar table, dining table, coffee table. Material berkualitas, finishing powder coating, harga kompetitif.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2024-12-08',
    author: 'Helmi Ramdan'
  },
  {
    id: 75,
    slug: 'furniture-besi-hotel-custom-desain-eksklusif',
    title: 'Furniture Besi Hotel Custom: Desain Eksklusif, Kualitas Premium',
    category: 'Commercial Furniture',
    excerpt: 'Furniture besi hotel custom dengan desain eksklusif. Mangala Living spesialis furniture hotel industrial: lobby furniture, restaurant furniture, room furniture. Workshop Bekasi, pengalaman project hotel.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    date: '2024-12-09',
    author: 'Helmi Ramdan'
  },
  {
    id: 76,
    slug: 'bikin-furniture-besi-custom-jabodetabek-berkualitas',
    title: 'Bikin Furniture Besi Custom Jabodetabek Berkualitas - Workshop Mangala',
    category: 'Workshop & Production',
    excerpt: 'Bikin furniture besi custom Jabodetabek dengan kualitas terjamin. Mangala Living workshop modern di Bekasi melayani custom furniture untuk cafe, restoran, hotel, kantor. Free konsultasi & survey lokasi.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-10',
    author: 'Helmi Ramdan'
  },
  {
    id: 77,
    slug: 'furniture-besi-untuk-restoran-industrial-modern',
    title: 'Furniture Besi untuk Restoran: Solusi Industrial Modern Berkualitas',
    category: 'Commercial Furniture',
    excerpt: 'Furniture besi untuk restoran dengan desain industrial modern. Meja makan, kursi, bar set, storage solution dari Mangala Living. Tahan lama, mudah perawatan, harga kompetitif. Workshop Bekasi.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-12-11',
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
    date: '2024-12-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 79,
    slug: 'desain-interior-industrial-besi-kayu-harmonis',
    title: 'Desain Interior Industrial Besi dan Kayu: Kombinasi Harmonis Modern',
    category: 'Design Inspiration',
    excerpt: 'Panduan lengkap desain interior industrial dengan kombinasi besi dan kayu. Tips memadukan material, pemilihan warna, finishing, dan inspirasi desain untuk cafe, restoran, dan kantor modern.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2024-12-13',
    author: 'Helmi Ramdan'
  },
  {
    id: 80,
    slug: 'meja-bar-industrial-minimalis-desain-compact',
    title: 'Meja Bar Industrial Minimalis: Desain Compact untuk Cafe Modern',
    category: 'Design Inspiration',
    excerpt: 'Inspirasi meja bar industrial minimalis dengan desain compact. Solusi space-efficient untuk cafe kecil. Tips ukuran ideal, material, dan model meja bar yang sesuai konsep industrial minimalis.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2024-12-14',
    author: 'Helmi Ramdan'
  },
  {
    id: 81,
    slug: 'desain-ruang-makan-industrial-furniture-besi',
    title: 'Desain Ruang Makan Industrial dengan Furniture Besi: Panduan Lengkap',
    category: 'Design Inspiration',
    excerpt: 'Panduan desain ruang makan industrial dengan furniture besi. Tips layout, pemilihan furniture, lighting, dan dekorasi untuk menciptakan dining area industrial modern yang fungsional dan estetis.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-12-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 82,
    slug: 'contoh-furniture-cafe-industrial-buatan-lokal-indonesia',
    title: 'Contoh Furniture Cafe Industrial Buatan Lokal Indonesia Berkualitas',
    category: 'Design Inspiration',
    excerpt: 'Kumpulan contoh furniture cafe industrial buatan lokal Indonesia. Portfolio project Mangala Living: cafe, restoran, hotel dengan furniture industrial berkualitas. Desain custom, material premium.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2024-12-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 83,
    slug: 'furniture-besi-cocok-konsep-vintage-cafe',
    title: 'Furniture Besi Cocok untuk Konsep Vintage Cafe: Tips Styling',
    category: 'Design Inspiration',
    excerpt: 'Tips styling furniture besi untuk konsep vintage cafe. Panduan memilih furniture industrial yang cocok untuk tema vintage, pemilihan warna, finishing, dan aksesoris pendukung.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2024-12-17',
    author: 'Helmi Ramdan'
  },
  {
    id: 84,
    slug: 'desain-meja-industrial-besi-hollow-modern',
    title: 'Desain Meja Industrial Besi Hollow Modern: Model Terbaru 2025',
    category: 'Design Inspiration',
    excerpt: 'Model desain meja industrial besi hollow terbaru 2025. Inspirasi meja kerja, meja makan, meja bar dengan material hollow steel berkualitas. Tips pemilihan ukuran dan finishing powder coating.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2024-12-18',
    author: 'Helmi Ramdan'
  },
  {
    id: 85,
    slug: 'koleksi-furniture-industrial-terbaru-2025-mangala',
    title: 'Koleksi Furniture Industrial Terbaru 2025 dari Mangala Living',
    category: 'Product Showcase',
    excerpt: 'Koleksi furniture industrial terbaru 2025 dari Mangala Living. Meja, kursi, rak display, kitchen cabinet, outdoor furniture dengan desain modern. Material premium, finishing berkualitas, harga kompetitif.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-19',
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
    date: '2024-12-20',
    author: 'Helmi Ramdan'
  },
  {
    id: 87,
    slug: 'kenapa-furniture-besi-lebih-awet-dari-kayu',
    title: 'Kenapa Furniture Besi Lebih Awet dari Kayu? Perbandingan Lengkap',
    category: 'Educational',
    excerpt: 'Perbandingan lengkap furniture besi vs kayu. Kenapa furniture besi lebih awet? Analisis durabilitas, perawatan, harga, dan nilai investasi jangka panjang untuk bisnis F&B dan kantor.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2024-12-21',
    author: 'Helmi Ramdan'
  },
  {
    id: 88,
    slug: 'perbandingan-furniture-besi-vs-kayu-cafe-restoran',
    title: 'Perbandingan Furniture Besi vs Kayu untuk Cafe & Restoran',
    category: 'Educational',
    excerpt: 'Perbandingan detail furniture besi vs kayu untuk bisnis cafe dan restoran. Analisis kelebihan-kekurangan, investasi jangka panjang, perawatan, dan rekomendasi terbaik untuk bisnis F&B.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-12-22',
    author: 'Helmi Ramdan'
  },
  {
    id: 89,
    slug: 'cara-merawat-furniture-besi-anti-karat-awet',
    title: 'Cara Merawat Furniture Besi Supaya Gak Berkarat dan Tetap Awet',
    category: 'Tips and Trick',
    excerpt: 'Tips lengkap cara merawat furniture besi supaya anti karat dan awet bertahun-tahun. Panduan cleaning, treatment, dan preventive maintenance untuk furniture besi industrial indoor dan outdoor.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2024-12-23',
    author: 'Helmi Ramdan'
  },
  {
    id: 90,
    slug: 'proses-pembuatan-furniture-besi-custom-workshop',
    title: 'Proses Pembuatan Furniture Besi Custom di Workshop: Behind The Scene',
    category: 'Educational',
    excerpt: 'Behind the scene proses pembuatan furniture besi custom di workshop Mangala Living. Dari desain, cutting, welding, finishing hingga quality control. Transparansi proses produksi furniture berkualitas.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2024-12-24',
    author: 'Helmi Ramdan'
  },
  {
    id: 91,
    slug: 'tips-memilih-furniture-besi-untuk-restoran-profesional',
    title: 'Tips Memilih Furniture Besi untuk Restoran: Panduan Profesional',
    category: 'Tips and Trick',
    excerpt: 'Tips profesional memilih furniture besi untuk restoran. Panduan material, ukuran, desain, budget, dan vendor terpercaya. Checklist lengkap untuk pemilik restoran dan interior designer.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-12-25',
    author: 'Helmi Ramdan'
  },
  {
    id: 92,
    slug: 'trend-desain-industrial-2025-furniture-modern',
    title: 'Trend Desain Industrial 2025: Furniture Modern untuk Bisnis',
    category: 'Furniture Information',
    excerpt: 'Trend desain industrial 2025 untuk furniture modern. Prediksi tren material, warna, finishing, dan style furniture industrial yang akan populer. Panduan untuk bisnis cafe, restoran, dan kantor.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2024-12-26',
    author: 'Helmi Ramdan'
  },
  {
    id: 93,
    slug: 'jenis-finishing-furniture-besi-powder-coating-duco',
    title: 'Jenis Finishing Furniture Besi: Powder Coating, Cat Duco, Elektrostatic',
    category: 'Educational',
    excerpt: 'Panduan lengkap jenis finishing furniture besi: powder coating, cat duco, elektrostatic painting. Perbandingan kualitas, harga, durabilitas, dan rekomendasi finishing terbaik untuk furniture industrial.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-27',
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
    date: '2024-12-28',
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
    date: '2024-12-29',
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
    date: '2024-12-30',
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
    date: '2024-12-31',
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
    date: '2025-01-01',
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
    date: '2025-01-02',
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
    date: '2025-01-03',
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
    date: '2025-01-04',
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
    date: '2025-01-05',
    author: 'Helmi Ramdan'
  },
  // TAMBUN SELATAN
  {
    id: 103,
    slug: 'furniture-industrial-tambun-selatan-sertajaya-mangunjaya',
    title: 'Furniture Industrial Tambun Selatan: Sertajaya, Mangunjaya, Lambangjaya',
    category: 'Local Area Guide',
    excerpt: 'Industrial furniture besi custom untuk cafe, restoran, hotel. Workshop Bekasi sejak 1999. Harga pabrik. WA: +6288801146881.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-01-06',
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
    date: '2025-01-07',
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
    date: '2025-01-08',
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
    date: '2025-01-09',
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
    date: '2025-01-10',
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
    date: '2025-01-11',
    author: 'Helmi Ramdan'
  },
  // SUMMARECON BEKASI - KAWASAN KOMERSIAL PREMIUM
  {
    id: 109,
    slug: 'furniture-cafe-summarecon-bekasi-premium-mall-area',
    title: 'Furniture Cafe Summarecon Bekasi: Premium Mall Area - Custom Design',
    category: 'Local Area Guide',
    excerpt: 'Summarecon Bekasi telah menjadi destinasi F&B dan lifestyle terpopuler di Bekasi dengan traffic pengunjung yang tinggi setiap harinya.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-01-12',
    author: 'Helmi Ramdan'
  },
  // HARAPAN INDAH - RESIDENTIAL & KOMERSIAL
  {
    id: 110,
    slug: 'furniture-industrial-harapan-indah-residential-commercial',
    title: 'Furniture Industrial Harapan Indah: Residential & Commercial Area',
    category: 'Local Area Guide',
    excerpt: 'Harapan Indah telah berkembang menjadi kawasan hunian dan komersial terpadu yang dinamis di Bekasi Utara.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-01-13',
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
    date: '2025-01-14',
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
    date: '2025-01-15',
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
    date: '2025-01-16',
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
    date: '2025-01-17',
    author: 'Helmi Ramdan'
  },
  // LIPPO CIKARANG
  {
    id: 115,
    slug: 'furniture-cafe-lippo-cikarang-mall-commercial',
    title: 'Furniture Cafe Lippo Cikarang: Mall & Commercial District',
    category: 'Local Area Guide',
    excerpt: 'Lippo Cikarang adalah kawasan mixed-use development terbesar di Cikarang dengan kombinasi mall, residential, office, dan education hub.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-01-18',
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
    date: '2025-01-19',
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
    date: '2025-01-20',
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
    date: '2025-01-21',
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
    date: '2025-01-22',
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
    date: '2025-01-23',
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
    date: '2025-01-24',
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
    date: '2025-01-25',
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
    date: '2025-01-26',
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
    date: '2025-01-27',
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
    date: '2025-01-28',
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
    date: '2025-01-29',
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
    date: '2025-01-30',
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
    date: '2025-01-31',
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
    date: '2025-02-01',
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
    date: '2025-02-02',
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
    date: '2025-02-03',
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
    date: '2025-02-04',
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
    date: '2025-02-05',
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
    date: '2025-02-06',
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
    date: '2025-02-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 136,
    slug: 'rahasia-cafe-hits-jakarta-bandung-bali-furniture-industrial-bikin-pelanggan-betah',
    title: 'Rahasia Cafe Hits di Jakarta, Bandung, Bali: Furniture Industrial yang Bikin Pelanggan Betah',
    category: 'Design Inspiration',
    excerpt: 'Sebagai praktisi arsitektur yang sudah belasan tahun terlibat dalam proyek renovasi dan desain ruang komersial - mulai dari perumahan hingga cafe dan restoran - saya sering mendapat pertanyaan dari klien: "Kenapa cafe tertentu selalu ramai, sementara yang lain sepi padahal lokasi sama-sama strategis?".',
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
    excerpt: 'Dari pengalaman saya handle commercial space di Jakarta dan Bekasi, saya notice bahwa furniture tahan lama untuk operasional non-stop adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-11-01',
    author: 'Helmi Ramdan'
  },
  {
    id: 138,
    slug: 'cafe-alam-outdoor-furniture-industrial-tahan-cuaca-tropis',
    title: 'Cafe Alam: Outdoor Furniture Industrial Tahan Cuaca Tropis Indonesia',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di area outdoor dengan cuaca ekstrem, saya notice bahwa furniture outdoor tahan cuaca tropis Indonesia adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-11-02',
    author: 'Helmi Ramdan'
  },
  {
    id: 139,
    slug: 'cafe-sekitar-saya-strategi-furniture-menarik-pelanggan-lokal',
    title: 'Cafe Sekitar Saya: Strategi Furniture untuk Menarik Pelanggan Lokal',
    category: 'Tips and Trick',
    excerpt: 'Dari pengalaman saya handle commercial space di area residential dan perumahan, saya notice bahwa furniture strategy menarik pelanggan lokal adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop',
    date: '2025-11-03',
    author: 'Helmi Ramdan'
  },
  {
    id: 140,
    slug: 'nama-cafe-unik-branding-furniture-industrial-konsep-kuat',
    title: 'Nama Cafe Unik: Branding dengan Furniture Industrial untuk Konsep Kuat',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di semua area dengan konsep unik, saya notice bahwa sinkronisasi furniture dengan brand identity adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 141,
    slug: 'cafe-bsd-serpong-furniture-industrial-area-premium',
    title: 'Cafe BSD Serpong: Furniture Industrial untuk Area Premium & Modern',
    category: 'Local Area Guide',
    excerpt: 'Dari pengalaman saya handle commercial space di BSD City dan Serpong, saya notice bahwa furniture industrial untuk demographics premium adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-05',
    author: 'Helmi Ramdan'
  },
  {
    id: 142,
    slug: 'cafe-sentul-bogor-furniture-konsep-alam-industrial',
    title: 'Cafe Sentul Bogor: Furniture Konsep Alam-Industrial Tropical Modern',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di Sentul dan Bogor area, saya notice bahwa kombinasi alam dan industrial style adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 143,
    slug: 'cafe-depok-margonda-ui-furniture-student-friendly',
    title: 'Cafe Depok Margonda UI: Furniture Student-Friendly dengan Budget Terjangkau',
    category: 'Commercial Furniture',
    excerpt: 'Dari pengalaman saya handle commercial space di Margonda, UI, area kampus, saya notice bahwa furniture student-friendly dan affordable adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 144,
    slug: 'cafe-jakarta-selatan-kemang-scbd-furniture-premium',
    title: 'Cafe Jakarta Selatan Kemang SCBD: Furniture Premium Industrial Chic',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di Kemang, SCBD, Senopati, saya notice bahwa furniture high-end industrial chic adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-08',
    author: 'Helmi Ramdan'
  },
  {
    id: 145,
    slug: 'cafe-bandung-dago-riau-furniture-instagrammable-hits',
    title: 'Cafe Bandung Dago Riau: Furniture Instagrammable yang Bikin Hits',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di Dago, Riau, Progo Bandung, saya notice bahwa furniture instagrammable yang viral adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-11-09',
    author: 'Helmi Ramdan'
  },
  {
    id: 146,
    slug: 'cafe-bali-canggu-seminyak-furniture-tropical-industrial',
    title: 'Cafe Bali Canggu Seminyak: Furniture Tropical Industrial Beach Vibes',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di Canggu, Seminyak, Ubud, saya notice bahwa furniture tropical industrial beach style adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-11-10',
    author: 'Helmi Ramdan'
  },
  {
    id: 147,
    slug: 'cafe-surabaya-galaxy-pakuwon-furniture-modern-spacious',
    title: 'Cafe Surabaya Galaxy Pakuwon: Furniture Modern Spacious & Comfortable',
    category: 'Local Area Guide',
    excerpt: 'Dari pengalaman saya handle commercial space di Galaxy Mall, Pakuwon, saya notice bahwa furniture spacious dan comfortable adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-11',
    author: 'Helmi Ramdan'
  },
  {
    id: 148,
    slug: 'cafe-jogja-prawirotaman-malioboro-furniture-vintage-industrial',
    title: 'Cafe Jogja Prawirotaman Malioboro: Furniture Vintage Industrial Heritage',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di Prawirotaman, Malioboro, Kaliurang, saya notice bahwa furniture vintage industrial heritage adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-11-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 149,
    slug: 'cafe-malang-batu-furniture-mountain-view-industrial',
    title: 'Cafe Malang Batu: Furniture Mountain View Industrial dengan Pemandangan',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di Malang dan Batu, saya notice bahwa furniture outdoor dengan view pegunungan adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    date: '2024-11-13',
    author: 'Helmi Ramdan'
  },
  {
    id: 150,
    slug: 'cafe-bogor-puncak-furniture-sejuk-highland-industrial',
    title: 'Cafe Bogor Puncak: Furniture Sejuk Highland Industrial Cool Climate',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di Bogor dan Puncak, saya notice bahwa furniture untuk dataran tinggi sejuk adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop',
    date: '2024-11-14',
    author: 'Helmi Ramdan'
  },
  {
    id: 151,
    slug: 'cafe-medan-furniture-spacious-culture-sumatera',
    title: 'Cafe Medan: Furniture Spacious untuk Culture Nongkrong Sumatera',
    category: 'Local Area Guide',
    excerpt: 'Dari pengalaman saya handle commercial space di Medan, Sumatera Utara, saya notice bahwa furniture untuk kultur nongkrong Medan adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 152,
    slug: 'cafe-semarang-furniture-compact-efficient-mall-ruko',
    title: 'Cafe Semarang: Furniture Compact Efficient untuk Mall & Ruko',
    category: 'Local Area Guide',
    excerpt: 'Dari pengalaman saya handle commercial space di Semarang, Jawa Tengah, saya notice bahwa furniture compact untuk mall dan ruko adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-11-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 153,
    slug: 'cafe-makassar-furniture-coastal-industrial-sulawesi',
    title: 'Cafe Makassar: Furniture Coastal Industrial Sulawesi Beach Style',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di Makassar, Sulawesi Selatan, saya notice bahwa furniture coastal industrial beach style adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-17',
    author: 'Helmi Ramdan'
  },
  {
    id: 154,
    slug: 'cafe-terdekat-dari-saya-furniture-strategy-lokal',
    title: 'Cafe Terdekat dari Saya: Furniture Strategy Menjadi Pilihan Lokal Pertama',
    category: 'Tips and Trick',
    excerpt: 'Dari pengalaman saya handle commercial space di area residential lokal, saya notice bahwa furniture strategy jadi pilihan lokal pertama adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2024-11-18',
    author: 'Helmi Ramdan'
  },
  {
    id: 155,
    slug: 'menu-cafe-furniture-mendukung-pengalaman-kuliner',
    title: 'Menu Cafe & Furniture: Bagaimana Furniture Mendukung Pengalaman Kuliner',
    category: 'Tips and Trick',
    excerpt: 'Dari pengalaman saya handle commercial space di semua cafe dengan fokus F&B, saya notice bahwa furniture mendukung pengalaman kuliner adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-11-19',
    author: 'Helmi Ramdan'
  },
  {
    id: 156,
    slug: 'the-cafe-konsep-minimalis-furniture-less-is-more',
    title: 'The Cafe Konsep Minimalis: Furniture "Less is More" yang Powerful',
    category: 'Design Inspiration',
    excerpt: 'Dari pengalaman saya handle commercial space di urban area dengan brand positioning premium, saya notice bahwa furniture minimalis less is more adalah kunci sukses cafe di area ini.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    date: '2024-11-20',
    author: 'Helmi Ramdan'
  },
  {
    id: 157,
    slug: 'jasa-furniture-industrial-minimalis-murah-bekasi-berkualitas',
    title: 'Jasa Furniture Industrial Minimalis Murah Bekasi - Berkualitas Premium',
    category: 'Commercial Furniture',
    excerpt: 'Mencari jasa furniture industrial minimalis murah di Bekasi yang berkualitas? Mangala Living adalah workshop furniture industrial terpercaya yang melayani custom furniture minimalis modern dengan harga terjangkau namun tetap berkualitas premium.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-08',
    author: 'Helmi Ramdan'
  },
  {
    id: 158,
    slug: 'jual-meja-cafe-modern-minimalis-murah-berkualitas-jakarta-bekasi',
    title: 'Jual Meja Cafe Modern Minimalis Murah - Berkualitas Jakarta Bekasi',
    category: 'Commercial Furniture',
    excerpt: 'Jual meja cafe modern minimalis murah dengan kualitas premium untuk Jakarta dan Bekasi.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-12-09',
    author: 'Helmi Ramdan'
  },
  {
    id: 159,
    slug: 'kursi-resto-modern-minimalis-murah-berkualitas-harga-terbaik',
    title: 'Kursi Resto Modern Minimalis Murah - Berkualitas Harga Terbaik 2025',
    category: 'Commercial Furniture',
    excerpt: 'Kursi resto modern minimalis murah dengan kualitas premium dan harga terbaik 2025.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2024-12-10',
    author: 'Helmi Ramdan'
  },
  {
    id: 160,
    slug: 'furniture-cafe-minimalis-modern-murah-jasa-custom-berkualitas',
    title: 'Furniture Cafe Minimalis Modern Murah - Jasa Custom Berkualitas',
    category: 'Commercial Furniture',
    excerpt: 'Furniture cafe minimalis modern murah dengan jasa custom berkualitas dari Mangala Living.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-12-11',
    author: 'Helmi Ramdan'
  },
  {
    id: 161,
    slug: 'meja-resto-industrial-modern-minimalis-murah-berkualitas',
    title: 'Meja Resto Industrial Modern Minimalis Murah - Berkualitas Premium',
    category: 'Commercial Furniture',
    excerpt: 'Meja resto industrial modern minimalis murah dengan kualitas premium.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-12-12',
    author: 'Helmi Ramdan'
  },
  {
    id: 162,
    slug: 'jasa-bikin-furniture-cafe-custom-minimalis-murah-bekasi',
    title: 'Jasa Bikin Furniture Cafe Custom Minimalis Murah Bekasi - Workshop Langsung',
    category: 'Workshop & Production',
    excerpt: 'Jasa bikin furniture cafe custom minimalis murah Bekasi dengan workshop langsung.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-13',
    author: 'Helmi Ramdan'
  },
  {
    id: 163,
    slug: 'furniture-resto-modern-minimalis-murah-jual-berkualitas',
    title: 'Furniture Resto Modern Minimalis Murah - Jual Berkualitas Harga Terbaik',
    category: 'Commercial Furniture',
    excerpt: 'Furniture resto modern minimalis murah yang kami jual dengan kualitas premium.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-12-14',
    author: 'Helmi Ramdan'
  },
  {
    id: 164,
    slug: 'display-rack-cafe-modern-minimalis-murah-berkualitas-industrial',
    title: 'Display Rack Cafe Modern Minimalis Murah - Berkualitas Industrial',
    category: 'Commercial Furniture',
    excerpt: 'Display rack cafe modern minimalis murah dengan kualitas industrial premium.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2024-12-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 165,
    slug: 'bar-set-cafe-modern-minimalis-murah-jasa-custom-berkualitas',
    title: 'Bar Set Cafe Modern Minimalis Murah - Jasa Custom Berkualitas',
    category: 'Commercial Furniture',
    excerpt: 'Bar set cafe modern minimalis murah dengan jasa custom berkualitas dari Mangala Living.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2024-12-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 166,
    slug: 'kitchen-cabinet-resto-modern-minimalis-murah-berkualitas',
    title: 'Kitchen Cabinet Resto Modern Minimalis Murah - Berkualitas Custom',
    category: 'Commercial Furniture',
    excerpt: 'Kitchen cabinet resto modern minimalis murah dengan kualitas custom premium.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-17',
    author: 'Helmi Ramdan'
  },
  {
    id: 167,
    slug: 'jual-furniture-industrial-modern-minimalis-murah-jakarta-bekasi',
    title: 'Jual Furniture Industrial Modern Minimalis Murah Jakarta Bekasi',
    category: 'Commercial Furniture',
    excerpt: 'Jual furniture industrial modern minimalis murah untuk Jakarta dan Bekasi dengan kualitas premium.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-18',
    author: 'Helmi Ramdan'
  },
  {
    id: 168,
    slug: 'meja-kursi-cafe-modern-minimalis-murah-set-berkualitas',
    title: 'Meja Kursi Cafe Modern Minimalis Murah - Set Berkualitas Harga Terbaik',
    category: 'Commercial Furniture',
    excerpt: 'Set meja kursi cafe modern minimalis murah dengan kualitas premium.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2024-12-19',
    author: 'Helmi Ramdan'
  },
  {
    id: 169,
    slug: 'jasa-furniture-resto-custom-modern-minimalis-murah',
    title: 'Jasa Furniture Resto Custom Modern Minimalis Murah - Berkualitas',
    category: 'Workshop & Production',
    excerpt: 'Jasa furniture resto custom modern minimalis murah berkualitas dari Mangala Living.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-12-20',
    author: 'Helmi Ramdan'
  },
  {
    id: 170,
    slug: 'outdoor-furniture-cafe-modern-minimalis-murah-berkualitas',
    title: 'Outdoor Furniture Cafe Modern Minimalis Murah - Berkualitas Tahan Cuaca',
    category: 'Commercial Furniture',
    excerpt: 'Outdoor furniture cafe modern minimalis murah dengan kualitas tahan cuaca.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-12-21',
    author: 'Helmi Ramdan'
  },
  {
    id: 171,
    slug: 'rak-display-resto-modern-minimalis-murah-jual-berkualitas',
    title: 'Rak Display Resto Modern Minimalis Murah - Jual Berkualitas Industrial',
    category: 'Commercial Furniture',
    excerpt: 'Rak display resto modern minimalis murah yang kami jual dengan kualitas industrial premium.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2024-12-22',
    author: 'Helmi Ramdan'
  },
  {
    id: 172,
    slug: 'meja-kerja-cafe-modern-minimalis-murah-berkualitas-multifungsi',
    title: 'Meja Kerja Cafe Modern Minimalis Murah - Berkualitas Multifungsi',
    category: 'Commercial Furniture',
    excerpt: 'Meja kerja cafe modern minimalis murah dengan kualitas multifungsi premium.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2024-12-23',
    author: 'Helmi Ramdan'
  },
  {
    id: 173,
    slug: 'jasa-buat-furniture-cafe-custom-modern-minimalis-murah',
    title: 'Jasa Buat Furniture Cafe Custom Modern Minimalis Murah Bekasi',
    category: 'Workshop & Production',
    excerpt: 'Jasa buat furniture cafe custom modern minimalis murah Bekasi dengan workshop langsung.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-12-24',
    author: 'Helmi Ramdan'
  },
  {
    id: 174,
    slug: 'kursi-bar-cafe-modern-minimalis-murah-jual-berkualitas',
    title: 'Kursi Bar Cafe Modern Minimalis Murah - Jual Berkualitas Industrial',
    category: 'Commercial Furniture',
    excerpt: 'Kursi bar cafe modern minimalis murah yang kami jual dengan kualitas industrial premium.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2024-12-25',
    author: 'Helmi Ramdan'
  },
  {
    id: 175,
    slug: 'furniture-kantin-industrial-modern-minimalis-murah-berkualitas',
    title: 'Furniture Kantin Industrial Modern Minimalis Murah - Berkualitas',
    category: 'Commercial Furniture',
    excerpt: 'Furniture kantin industrial modern minimalis murah dengan kualitas premium.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-26',
    author: 'Helmi Ramdan'
  },
  {
    id: 176,
    slug: 'meja-makan-resto-modern-minimalis-murah-set-berkualitas',
    title: 'Meja Makan Resto Modern Minimalis Murah - Set Berkualitas Lengkap',
    category: 'Commercial Furniture',
    excerpt: 'Set meja makan resto modern minimalis murah dengan kualitas lengkap premium.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2024-12-27',
    author: 'Helmi Ramdan'
  },
  {
    id: 177,
    slug: 'jasa-furniture-hotel-custom-modern-minimalis-murah-berkualitas',
    title: 'Jasa Furniture Hotel Custom Modern Minimalis Murah - Berkualitas Premium',
    category: 'Commercial Furniture',
    excerpt: 'Jasa furniture hotel custom modern minimalis murah berkualitas premium dari Mangala Living.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    date: '2024-12-28',
    author: 'Helmi Ramdan'
  },
  {
    id: 178,
    slug: 'rak-buku-cafe-modern-minimalis-murah-jual-berkualitas',
    title: 'Rak Buku Cafe Modern Minimalis Murah - Jual Berkualitas Industrial',
    category: 'Commercial Furniture',
    excerpt: 'Rak buku cafe modern minimalis murah yang kami jual dengan kualitas industrial premium.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    date: '2024-12-29',
    author: 'Helmi Ramdan'
  },
  {
    id: 179,
    slug: 'daybed-cafe-modern-minimalis-murah-berkualitas-lounge-area',
    title: 'Daybed Cafe Modern Minimalis Murah - Berkualitas Lounge Area',
    category: 'Commercial Furniture',
    excerpt: 'Daybed cafe modern minimalis murah dengan kualitas premium untuk lounge area.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2024-12-30',
    author: 'Helmi Ramdan'
  },
  {
    id: 180,
    slug: 'jasa-furniture-kantor-industrial-modern-minimalis-murah',
    title: 'Jasa Furniture Kantor Industrial Modern Minimalis Murah - Berkualitas',
    category: 'Commercial Furniture',
    excerpt: 'Jasa furniture kantor industrial modern minimalis murah berkualitas dari Mangala Living.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2024-12-31',
    author: 'Helmi Ramdan'
  },
  {
    id: 181,
    slug: 'sofa-bench-cafe-modern-minimalis-murah-jual-berkualitas',
    title: 'Sofa Bench Cafe Modern Minimalis Murah - Jual Berkualitas Industrial',
    category: 'Commercial Furniture',
    excerpt: 'Sofa bench cafe modern minimalis murah yang kami jual dengan kualitas industrial premium.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-01-01',
    author: 'Helmi Ramdan'
  },
  {
    id: 182,
    slug: 'meja-coffee-cafe-modern-minimalis-murah-berkualitas-berkualitas',
    title: 'Meja Coffee Cafe Modern Minimalis Murah - Berkualitas Industrial',
    category: 'Commercial Furniture',
    excerpt: 'Meja coffee cafe modern minimalis murah dengan kualitas industrial premium.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop',
    date: '2025-01-02',
    author: 'Helmi Ramdan'
  },
  {
    id: 183,
    slug: 'jasa-furniture-cafe-custom-minimalis-modern-murah-bekasi-jakarta',
    title: 'Jasa Furniture Cafe Custom Minimalis Modern Murah Bekasi Jakarta',
    category: 'Workshop & Production',
    excerpt: 'Jasa furniture cafe custom minimalis modern murah untuk Bekasi dan Jakarta dengan kualitas premium.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-01-03',
    author: 'Helmi Ramdan'
  },
  {
    id: 184,
    slug: 'furniture-mall-cafe-resto-modern-minimalis-murah-berkualitas',
    title: 'Furniture Mall Cafe Resto Modern Minimalis Murah - Berkualitas',
    category: 'Commercial Furniture',
    excerpt: 'Furniture mall cafe resto modern minimalis murah dengan kualitas premium.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-01-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 185,
    slug: 'rak-gantung-cafe-modern-minimalis-murah-jual-berkualitas',
    title: 'Rak Gantung Cafe Modern Minimalis Murah - Jual Berkualitas Industrial',
    category: 'Commercial Furniture',
    excerpt: 'Rak gantung cafe modern minimalis murah yang kami jual dengan kualitas industrial premium.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-01-05',
    author: 'Helmi Ramdan'
  },
  {
    id: 186,
    slug: 'jasa-furniture-besi-custom-modern-minimalis-murah-jabodetabek',
    title: 'Jasa Furniture Besi Custom Modern Minimalis Murah Jabodetabek',
    category: 'Workshop & Production',
    excerpt: 'Jasa furniture besi custom modern minimalis murah untuk Jabodetabek dengan kualitas premium.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-01-06',
    author: 'Helmi Ramdan'
  },
  // EXPORT-FOCUSED ARTICLES - 20 NEW ARTICLES FOR INTERNATIONAL BUYERS
  {
    id: 187,
    slug: 'indonesian-industrial-furniture-export-quality-global-standards',
    title: 'Indonesian Industrial Furniture Export: Quality Meets Global Standards',
    category: 'Export & International',
    excerpt: 'Discover why Indonesian industrial furniture manufacturers are becoming the preferred choice for international buyers. Quality craftsmanship, competitive pricing, and reliable export services.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 188,
    slug: 'custom-metal-furniture-manufacturer-indonesia-export-worldwide',
    title: 'Custom Metal Furniture Manufacturer Indonesia - Export Worldwide',
    category: 'Export & International',
    excerpt: 'Leading custom metal furniture manufacturer in Indonesia specializing in export. We deliver high-quality industrial furniture to hotels, restaurants, and commercial spaces globally.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 189,
    slug: 'wholesale-industrial-furniture-indonesia-bulk-orders-export',
    title: 'Wholesale Industrial Furniture Indonesia - Bulk Orders & Export',
    category: 'Export & International',
    excerpt: 'Wholesale industrial furniture manufacturer in Indonesia offering competitive pricing for bulk orders. We handle export documentation, shipping, and quality assurance for international clients.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 190,
    slug: 'indonesian-furniture-factory-custom-commercial-furniture-export',
    title: 'Indonesian Furniture Factory: Custom Commercial Furniture Export',
    category: 'Export & International',
    excerpt: 'Direct from factory in Bekasi, Indonesia. We manufacture custom commercial furniture for hotels, restaurants, cafes, and offices. Export-ready with international quality standards.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 191,
    slug: 'metal-furniture-supplier-indonesia-export-hotels-restaurants',
    title: 'Metal Furniture Supplier Indonesia - Export to Hotels & Restaurants',
    category: 'Export & International',
    excerpt: 'Trusted metal furniture supplier in Indonesia exporting to hotels and restaurants worldwide. Premium quality steel furniture with powder coating finish and competitive FOB prices.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 192,
    slug: 'indonesia-industrial-furniture-manufacturer-oem-odm-export',
    title: 'Indonesia Industrial Furniture Manufacturer - OEM & ODM Export',
    category: 'Export & International',
    excerpt: 'OEM and ODM industrial furniture manufacturer in Indonesia. We work with international brands, furniture importers, and hospitality chains. Custom design and private label available.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 193,
    slug: 'export-quality-restaurant-furniture-indonesia-manufacturer',
    title: 'Export Quality Restaurant Furniture - Indonesia Manufacturer',
    category: 'Export & International',
    excerpt: 'Manufacturer of export-quality restaurant furniture in Indonesia. Industrial dining tables, chairs, bar stools, and custom commercial furniture. Competitive pricing for international buyers.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 194,
    slug: 'indonesian-furniture-exporter-bekasi-factory-direct-pricing',
    title: 'Indonesian Furniture Exporter Bekasi - Factory Direct Pricing',
    category: 'Export & International',
    excerpt: 'Factory-direct furniture exporter based in Bekasi, Indonesia. Eliminate middlemen and get the best FOB prices for industrial furniture. Minimum order: 1 container (20ft/40ft).',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 195,
    slug: 'custom-hospitality-furniture-indonesia-export-hotels-worldwide',
    title: 'Custom Hospitality Furniture Indonesia - Export Hotels Worldwide',
    category: 'Export & International',
    excerpt: 'Specialized hospitality furniture manufacturer in Indonesia. Custom furniture for hotel lobbies, restaurants, guest rooms, and outdoor areas. Export documentation and shipping support.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 196,
    slug: 'industrial-metal-furniture-indonesia-powder-coating-export',
    title: 'Industrial Metal Furniture Indonesia - Powder Coating Export',
    category: 'Export & International',
    excerpt: 'Premium powder-coated industrial metal furniture from Indonesia. Durable outdoor-grade finish, rust-resistant, and weather-proof. Perfect for tropical and humid climates worldwide.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 197,
    slug: 'indonesia-furniture-manufacturer-container-pricing-export',
    title: 'Indonesia Furniture Manufacturer - Container Pricing & Export',
    category: 'Export & International',
    excerpt: 'Transparent container pricing for furniture export from Indonesia. 20ft and 40ft container options available. We handle documentation, quality control, and loading supervision.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 198,
    slug: 'cafe-furniture-manufacturer-indonesia-export-international',
    title: 'Cafe Furniture Manufacturer Indonesia - Export International',
    category: 'Export & International',
    excerpt: 'Leading cafe furniture manufacturer in Indonesia exporting to cafes worldwide. Industrial-style tables, chairs, bar sets, and display racks. Custom design and branding available.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 199,
    slug: 'indonesian-steel-furniture-supplier-export-quality-assurance',
    title: 'Indonesian Steel Furniture Supplier - Export Quality Assurance',
    category: 'Export & International',
    excerpt: 'Quality-assured steel furniture supplier in Indonesia. ISO-standard manufacturing process, pre-shipment inspection, and quality documentation for international export.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 200,
    slug: 'outdoor-furniture-manufacturer-indonesia-weather-resistant-export',
    title: 'Outdoor Furniture Manufacturer Indonesia - Weather Resistant Export',
    category: 'Export & International',
    excerpt: 'Weather-resistant outdoor furniture manufacturer in Indonesia. Specialized in powder-coated steel furniture for tropical climates. Export to resorts, hotels, and restaurants globally.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 201,
    slug: 'furniture-factory-bekasi-indonesia-export-international-buyers',
    title: 'Furniture Factory Bekasi Indonesia - Export for International Buyers',
    category: 'Export & International',
    excerpt: 'Modern furniture factory in Bekasi serving international buyers. 25 years experience, 10,000+ sqm production facility. We handle custom design, manufacturing, and export logistics.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 202,
    slug: 'indonesian-furniture-exporter-fob-cif-pricing-international',
    title: 'Indonesian Furniture Exporter - FOB & CIF Pricing International',
    category: 'Export & International',
    excerpt: 'Transparent FOB and CIF pricing from Indonesian furniture exporter. Calculate landed cost easily. We work with freight forwarders worldwide for competitive shipping rates.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 203,
    slug: 'commercial-furniture-supplier-indonesia-export-documentation',
    title: 'Commercial Furniture Supplier Indonesia - Export Documentation',
    category: 'Export & International',
    excerpt: 'Complete export documentation support for commercial furniture buyers. Certificate of Origin, Packing List, Invoice, and custom clearance assistance for international shipping.',
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 204,
    slug: 'indonesia-metal-furniture-factory-custom-design-export',
    title: 'Indonesia Metal Furniture Factory - Custom Design Export',
    category: 'Export & International',
    excerpt: 'Custom design metal furniture factory in Indonesia. Work directly with our design team to create unique furniture for your brand. Export-ready with competitive MOQ.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 205,
    slug: 'wholesale-restaurant-furniture-indonesia-bulk-order-export',
    title: 'Wholesale Restaurant Furniture Indonesia - Bulk Order Export',
    category: 'Export & International',
    excerpt: 'Bulk order discounts for wholesale restaurant furniture from Indonesia. Perfect for restaurant chains, franchises, and hospitality groups expanding internationally.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  {
    id: 206,
    slug: 'indonesian-furniture-manufacturer-sustainable-export-quality',
    title: 'Indonesian Furniture Manufacturer - Sustainable Export Quality',
    category: 'Export & International',
    excerpt: 'Sustainable furniture manufacturing in Indonesia with eco-friendly practices. Recycled materials, water-based finishes, and responsible sourcing. Export certification available.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-04',
    author: 'Helmi Ramdan'
  },
  // 30 NEW SEO ARTICLES - PATIO & OUTDOOR FURNITURE (15 Indonesian + 15 English)
  // INDONESIAN ARTICLES (15)
  {
    id: 207,
    slug: 'furniture-outdoor-industrial-beli-bekasi-jakarta',
    title: 'Furniture Outdoor Industrial - Beli di Bekasi Jakarta',
    category: 'Commercial Furniture',
    excerpt: 'Beli furniture outdoor industrial berkualitas untuk cafe, restoran, dan area patio. Workshop kami di Bekasi melayani Jakarta dan sekitarnya dengan harga kompetitif.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 208,
    slug: 'patio-furniture-industrial-custom-bekasi',
    title: 'Patio Furniture Industrial Custom di Bekasi - Harga Terbaik',
    category: 'Commercial Furniture',
    excerpt: 'Patio furniture industrial custom untuk area outdoor cafe dan restoran. Workshop Bekasi dengan layanan custom desain sesuai kebutuhan bisnis Anda.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 209,
    slug: 'beli-heavy-duty-commercial-outdoor-furniture-bekasi',
    title: 'Beli Heavy Duty Commercial Outdoor Furniture di Bekasi',
    category: 'Commercial Furniture',
    excerpt: 'Heavy duty commercial outdoor furniture tahan cuaca untuk cafe, restoran, hotel. Kualitas export dengan finishing powder coating premium. Lokasi workshop Bekasi.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 210,
    slug: 'custom-patio-furniture-besi-industrial-jakarta',
    title: 'Custom Patio Furniture Besi Industrial Jakarta - Desain Khusus',
    category: 'Workshop & Production',
    excerpt: 'Jasa custom patio furniture besi industrial untuk Jakarta. Desain khusus sesuai konsep cafe, restoran, atau area outdoor. Workshop Bekasi dengan pengalaman 25 tahun.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 211,
    slug: 'cafe-patio-outdoor-furniture-industrial-bekasi',
    title: 'Cafe Patio Outdoor Furniture Industrial Bekasi - Inspirasi Desain',
    category: 'Design Inspiration',
    excerpt: 'Inspirasi desain cafe patio dengan outdoor furniture industrial. Tips memilih furniture tahan cuaca, gaya industrial modern, dan layout optimal untuk area outdoor.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 212,
    slug: 'gaya-patio-industrial-furniture-outdoor-inspirasi',
    title: 'Gaya Patio Industrial - Furniture Outdoor Inspirasi Desain 2025',
    category: 'Design Inspiration',
    excerpt: 'Gaya patio industrial dengan furniture outdoor modern. Inspirasi desain untuk cafe, restoran, dan area outdoor. Kombinasi material besi dan kayu untuk estetika industrial.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 213,
    slug: 'patio-jakarta-furniture-industrial-custom-area-outdoor',
    title: 'Patio Jakarta - Furniture Industrial Custom untuk Area Outdoor',
    category: 'Local Area Guide',
    excerpt: 'Furniture industrial custom untuk patio Jakarta. Workshop Bekasi melayani area Jakarta dengan layanan survey, custom desain, dan instalasi area outdoor cafe restoran.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 214,
    slug: 'patio-bekasi-furniture-outdoor-industrial-workshop-lokal',
    title: 'Patio Bekasi - Furniture Outdoor Industrial dari Workshop Lokal',
    category: 'Local Area Guide',
    excerpt: 'Furniture outdoor industrial untuk patio Bekasi. Workshop lokal dengan pengalaman 25 tahun, melayani custom desain dan produksi furniture tahan cuaca untuk area outdoor.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 215,
    slug: 'inspirasi-furniture-outdoor-industrial-untuk-patio-cafe',
    title: 'Inspirasi Furniture Outdoor Industrial untuk Patio Cafe',
    category: 'Design Inspiration',
    excerpt: 'Inspirasi furniture outdoor industrial untuk patio cafe. Tips memilih meja, kursi, dan dekorasi industrial yang tahan cuaca dan cocok untuk area outdoor cafe modern.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 216,
    slug: 'cafe-patio-furniture-besi-industrial-murah-jakarta',
    title: 'Cafe Patio Furniture Besi Industrial Murah Jakarta',
    category: 'Commercial Furniture',
    excerpt: 'Cafe patio furniture besi industrial murah untuk Jakarta. Set meja dan kursi outdoor tahan cuaca dengan finishing powder coating. Harga kompetitif dari workshop Bekasi.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 217,
    slug: 'furniture-outdoor-tahan-hujan-industrial-bekasi',
    title: 'Furniture Outdoor Tahan Hujan Industrial Bekasi - Kualitas Premium',
    category: 'Commercial Furniture',
    excerpt: 'Furniture outdoor tahan hujan industrial untuk area patio. Finishing powder coating premium anti-karat, cocok untuk cuaca tropis Indonesia. Workshop Bekasi dengan garansi kualitas.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 218,
    slug: 'custom-patio-set-besi-industrial-jakarta-bekasi',
    title: 'Custom Patio Set Besi Industrial Jakarta Bekasi - Desain Khusus',
    category: 'Workshop & Production',
    excerpt: 'Jasa custom patio set besi industrial untuk Jakarta dan Bekasi. Desain khusus sesuai kebutuhan cafe, restoran, atau area outdoor. Produksi di workshop Bekasi dengan kualitas export.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 219,
    slug: 'gaya-industrial-modern-furniture-outdoor-patio',
    title: 'Gaya Industrial Modern - Furniture Outdoor Patio Inspirasi',
    category: 'Design Inspiration',
    excerpt: 'Gaya industrial modern untuk furniture outdoor patio. Inspirasi desain kombinasi besi dan kayu, warna matte black, dan layout yang fungsional untuk area outdoor modern.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 220,
    slug: 'furniture-outdoor-commercial-heavy-duty-bekasi',
    title: 'Furniture Outdoor Commercial Heavy Duty Bekasi - Tahan Lama',
    category: 'Commercial Furniture',
    excerpt: 'Furniture outdoor commercial heavy duty untuk cafe dan restoran. Konstruksi kuat dengan material besi hollow grade A, finishing powder coating premium. Workshop Bekasi.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 221,
    slug: 'tips-memilih-patio-furniture-industrial-outdoor',
    title: 'Tips Memilih Patio Furniture Industrial Outdoor - Panduan Lengkap',
    category: 'Tips and Trick',
    excerpt: 'Tips memilih patio furniture industrial outdoor yang tepat. Panduan material, finishing, ukuran, dan layout untuk area outdoor cafe, restoran, atau rumah tinggal.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  // ENGLISH ARTICLES (15) - TARGETING INTERNATIONAL BUYERS
  {
    id: 222,
    slug: 'industrial-outdoor-furniture-indonesia-export-quality',
    title: 'Industrial Outdoor Furniture Indonesia - Export Quality',
    category: 'Export & International',
    excerpt: 'Premium industrial outdoor furniture from Indonesia. Weather-resistant powder coating, heavy-duty construction for commercial use. Export-ready with competitive FOB pricing.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 223,
    slug: 'patio-furniture-manufacturer-indonesia-custom-export',
    title: 'Patio Furniture Manufacturer Indonesia - Custom Export',
    category: 'Export & International',
    excerpt: 'Custom patio furniture manufacturer in Indonesia. We design and manufacture industrial-style outdoor furniture for cafes, restaurants, and hotels worldwide. Export quality guaranteed.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 224,
    slug: 'buy-heavy-duty-commercial-outdoor-furniture-indonesia',
    title: 'Buy Heavy Duty Commercial Outdoor Furniture from Indonesia',
    category: 'Export & International',
    excerpt: 'Heavy duty commercial outdoor furniture from Indonesian manufacturer. Perfect for cafes, restaurants, hotels, and resorts. Weather-resistant, rust-proof, and built to last.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 225,
    slug: 'custom-patio-furniture-indonesia-export-manufacturer',
    title: 'Custom Patio Furniture Indonesia - Export Manufacturer',
    category: 'Export & International',
    excerpt: 'Custom patio furniture manufacturer in Indonesia. Work with our design team to create unique outdoor furniture for your brand. Export-ready with OEM/ODM services available.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 226,
    slug: 'cafe-patio-outdoor-furniture-industrial-style-indonesia',
    title: 'Cafe Patio Outdoor Furniture - Industrial Style Indonesia',
    category: 'Export & International',
    excerpt: 'Industrial-style cafe patio outdoor furniture from Indonesia. Metal tables, chairs, and bar sets with powder coating finish. Perfect for modern cafes and restaurants worldwide.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 227,
    slug: 'industrial-patio-furniture-style-inspiration-design',
    title: 'Industrial Patio Furniture - Style & Inspiration Design',
    category: 'Design Inspiration',
    excerpt: 'Industrial patio furniture style inspiration for modern outdoor spaces. Design ideas combining metal and wood, color schemes, and layout tips for cafes and restaurants.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 228,
    slug: 'outdoor-furniture-indonesia-weather-resistant-tropical',
    title: 'Outdoor Furniture Indonesia - Weather Resistant for Tropical Climate',
    category: 'Export & International',
    excerpt: 'Weather-resistant outdoor furniture from Indonesia designed for tropical climates. Powder coating finish withstands rain, sun, and humidity. Perfect for resorts and hotels in tropical regions.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 229,
    slug: 'commercial-outdoor-furniture-indonesia-bulk-order-export',
    title: 'Commercial Outdoor Furniture Indonesia - Bulk Order Export',
    category: 'Export & International',
    excerpt: 'Bulk order commercial outdoor furniture from Indonesia. Competitive pricing for restaurant chains, hotel groups, and hospitality businesses. Minimum order: 1 container (20ft/40ft).',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 230,
    slug: 'patio-furniture-set-indonesia-custom-manufacturer',
    title: 'Patio Furniture Set Indonesia - Custom Manufacturer',
    category: 'Export & International',
    excerpt: 'Custom patio furniture sets from Indonesian manufacturer. Tables, chairs, and bar sets designed for outdoor cafes and restaurants. OEM/ODM services with competitive MOQ.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 231,
    slug: 'industrial-metal-outdoor-furniture-indonesia-powder-coating',
    title: 'Industrial Metal Outdoor Furniture Indonesia - Powder Coating',
    category: 'Export & International',
    excerpt: 'Industrial metal outdoor furniture from Indonesia with premium powder coating finish. Rust-resistant, UV-protected, and weather-proof. Export quality with international standards.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 232,
    slug: 'cafe-outdoor-furniture-indonesia-export-manufacturer',
    title: 'Cafe Outdoor Furniture Indonesia - Export Manufacturer',
    category: 'Export & International',
    excerpt: 'Cafe outdoor furniture manufacturer in Indonesia. Industrial-style tables, chairs, and bar sets for outdoor dining areas. Export to cafes worldwide with competitive pricing.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 233,
    slug: 'patio-furniture-inspiration-industrial-design-trends',
    title: 'Patio Furniture Inspiration - Industrial Design Trends 2025',
    category: 'Design Inspiration',
    excerpt: 'Patio furniture inspiration with industrial design trends for 2025. Color schemes, material combinations, and layout ideas for modern outdoor spaces in cafes and restaurants.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 234,
    slug: 'outdoor-furniture-manufacturer-indonesia-factory-direct',
    title: 'Outdoor Furniture Manufacturer Indonesia - Factory Direct',
    category: 'Export & International',
    excerpt: 'Factory-direct outdoor furniture manufacturer in Indonesia. Eliminate middlemen and get best FOB prices. We handle custom design, production, and export documentation.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 235,
    slug: 'heavy-duty-outdoor-furniture-indonesia-export-quality',
    title: 'Heavy Duty Outdoor Furniture Indonesia - Export Quality',
    category: 'Export & International',
    excerpt: 'Heavy duty outdoor furniture from Indonesia built for commercial use. Strong construction, durable materials, and weather-resistant finish. Export quality with competitive pricing.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 236,
    slug: 'custom-outdoor-furniture-indonesia-design-manufacturing',
    title: 'Custom Outdoor Furniture Indonesia - Design & Manufacturing',
    category: 'Export & International',
    excerpt: 'Custom outdoor furniture design and manufacturing in Indonesia. From concept to production, we create unique outdoor furniture for your brand. Export services with quality assurance.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2024-11-15',
    author: 'Helmi Ramdan'
  },
  {
    id: 237,
    slug: 'industrial-dining-tables-export-quality-indonesia',
    title: 'Industrial Dining Tables Export Quality from Indonesia',
    category: 'Export & International',
    excerpt: 'Premium industrial dining tables manufactured in Indonesia for export. Combining steel frames with solid wood tops, our dining tables offer durability and modern aesthetics for commercial spaces worldwide.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 238,
    slug: 'metal-bar-stools-indonesia-manufacturer-exporter',
    title: 'Metal Bar Stools Indonesia - Manufacturer & Exporter',
    category: 'Export & International',
    excerpt: 'High-quality metal bar stools from Indonesia. We manufacture industrial-style bar chairs with robust steel construction, perfect for bars, restaurants, and cafes. Export services available worldwide.',
    image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 239,
    slug: 'industrial-lounge-furniture-indonesia-export',
    title: 'Industrial Lounge Furniture Indonesia - Export Quality',
    category: 'Export & International',
    excerpt: 'Indonesian industrial lounge furniture for commercial spaces. Our lounge sets combine comfort and durability with modern industrial design. Ideal for hotels, lounges, and hospitality projects.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 240,
    slug: 'industrial-storage-solutions-metal-shelving-export',
    title: 'Industrial Storage Solutions - Metal Shelving Export',
    category: 'Export & International',
    excerpt: 'Custom industrial storage solutions from Indonesia. Metal shelving, display racks, and storage cabinets built for commercial use. Durable construction with modern industrial aesthetics.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 241,
    slug: 'custom-metal-furniture-manufacturing-indonesia',
    title: 'Custom Metal Furniture Manufacturing in Indonesia',
    category: 'Export & International',
    excerpt: 'Professional custom metal furniture manufacturing services in Indonesia. From design to production, we create bespoke industrial furniture for international clients with complete export support.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 242,
    slug: 'industrial-kitchen-cabinets-commercial-export',
    title: 'Industrial Kitchen Cabinets - Commercial Export',
    category: 'Export & International',
    excerpt: 'Industrial-style kitchen cabinets for commercial kitchens. Manufactured in Indonesia with heavy-duty steel construction and professional finishing. Perfect for restaurants and commercial spaces.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 243,
    slug: 'outdoor-bar-sets-weather-resistant-indonesia',
    title: 'Outdoor Bar Sets - Weather Resistant from Indonesia',
    category: 'Export & International',
    excerpt: 'Premium outdoor bar sets manufactured in Indonesia. Weather-resistant powder coating and galvanized steel construction ensure long-lasting performance in any climate. Export quality guaranteed.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 244,
    slug: 'industrial-daybed-frames-metal-furniture-export',
    title: 'Industrial Daybed Frames - Metal Furniture Export',
    category: 'Export & International',
    excerpt: 'Modern industrial daybed frames from Indonesia. Minimalist steel construction perfect for lounges, hotels, and residential projects. Customizable dimensions and finishes for international markets.',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 245,
    slug: 'metal-display-racks-retail-furniture-indonesia',
    title: 'Metal Display Racks - Retail Furniture from Indonesia',
    category: 'Export & International',
    excerpt: 'Industrial display racks and retail shelving from Indonesia. Custom designs for retail stores, showrooms, and commercial spaces. Strong construction with modern industrial styling.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 246,
    slug: 'industrial-work-tables-office-furniture-export',
    title: 'Industrial Work Tables - Office Furniture Export',
    category: 'Export & International',
    excerpt: 'Industrial work tables and office desks manufactured in Indonesia. Steel frame construction with solid wood or metal tops. Perfect for modern offices, co-working spaces, and studios.',
    image: 'https://images.unsplash.com/photo-1595428773629-6e5cf2e1d8f1?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 247,
    slug: 'metal-coat-racks-commercial-furniture-indonesia',
    title: 'Metal Coat Racks - Commercial Furniture Indonesia',
    category: 'Export & International',
    excerpt: 'Industrial metal coat racks and wall hooks from Indonesia. Heavy-duty construction for commercial use in offices, hotels, and restaurants. Modern design with reliable functionality.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 248,
    slug: 'industrial-bookshelf-metal-frame-export-indonesia',
    title: 'Industrial Bookshelf - Metal Frame Export from Indonesia',
    category: 'Export & International',
    excerpt: 'Industrial-style bookshelves with steel frames from Indonesia. Custom sizes and configurations available. Perfect for offices, libraries, and residential projects requiring durable storage solutions.',
    image: 'https://images.unsplash.com/photo-1595428773629-6e5cf2e1d8f1?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 249,
    slug: 'balcony-furniture-space-saving-designs-indonesia',
    title: 'Balcony Furniture - Space-Saving Designs from Indonesia',
    category: 'Export & International',
    excerpt: 'Space-efficient balcony furniture manufactured in Indonesia. Compact bar tables and seating solutions perfect for small outdoor spaces. Weather-resistant and stylish industrial designs.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 250,
    slug: 'steel-frame-furniture-manufacturer-indonesia',
    title: 'Steel Frame Furniture Manufacturer in Indonesia',
    category: 'Export & International',
    excerpt: 'Leading steel frame furniture manufacturer in Indonesia. We produce high-quality industrial furniture with precision welding and professional finishing. Export services to global markets.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 251,
    slug: 'industrial-bench-seating-commercial-furniture',
    title: 'Industrial Bench Seating - Commercial Furniture',
    category: 'Export & International',
    excerpt: 'Industrial bench seating and corner lounges from Indonesia. Robust steel frames with comfortable cushioning options. Ideal for cafes, restaurants, and commercial waiting areas.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 252,
    slug: 'hospitality-furniture-supplier-indonesia-export',
    title: 'Hospitality Furniture Supplier Indonesia - Export',
    category: 'Export & International',
    excerpt: 'Complete hospitality furniture solutions from Indonesia. We supply hotels, resorts, and restaurants worldwide with durable industrial-style furniture. Custom designs and bulk orders welcome.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 253,
    slug: 'restaurant-furniture-indonesia-wholesale-export',
    title: 'Restaurant Furniture Indonesia - Wholesale Export',
    category: 'Export & International',
    excerpt: 'Wholesale restaurant furniture manufacturer in Indonesia. Industrial dining tables, chairs, and bar furniture for commercial restaurants. Competitive pricing with consistent quality for bulk orders.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 254,
    slug: 'cafe-furniture-wholesale-indonesia-manufacturer',
    title: 'Cafe Furniture Wholesale - Indonesia Manufacturer',
    category: 'Export & International',
    excerpt: 'Wholesale cafe furniture from Indonesia. Modern industrial designs perfect for coffee shops and cafes worldwide. Competitive bulk pricing with reliable production timelines and quality control.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 255,
    slug: 'industrial-furniture-hotels-contract-furniture',
    title: 'Industrial Furniture for Hotels - Contract Furniture',
    category: 'Export & International',
    excerpt: 'Contract furniture solutions for hotels and hospitality projects. Indonesian industrial furniture manufacturer with experience in large-scale hotel furniture projects worldwide.',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 256,
    slug: 'powder-coating-metal-furniture-finishing-indonesia',
    title: 'Powder Coating Metal Furniture - Professional Finishing',
    category: 'Export & International',
    excerpt: 'Expert powder coating services for metal furniture in Indonesia. High-quality finishes with excellent durability and color consistency. We use industrial-grade powder coating for export-quality products.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 257,
    slug: 'custom-order-process-international-buyers-indonesia',
    title: 'Custom Order Process for International Buyers',
    category: 'Export & International',
    excerpt: 'Complete guide to ordering custom industrial furniture from Indonesia. Learn about our streamlined process from design consultation to international shipping, with quality assurance at every step.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-11-06',
    author: 'Helmi Ramdan'
  },
  {
    id: 258,
    slug: 'manufacturer-furniture-custom-order-indonesia-arabic',
    title: 'مصنع الأثاث المعدني المخصص - طلبات حسب الطلب من إندونيسيا',
    category: 'Export & International',
    excerpt: 'مصنع إندونيسي متخصص في الأثاث المعدني الصناعي المخصص. نقدم خدمات التصميم حسب الطلب، التصنيع الداخلي، والتصدير العالمي. جودة التصدير مع ضمان الجودة في كل خطوة.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 259,
    slug: 'industrial-furniture-exporter-china-manufacturer',
    title: '印尼工业家具出口商 - 定制制造商直销',
    category: 'Export & International',
    excerpt: '印尼领先的工业家具制造商和出口商。我们提供定制设计、内部生产控制和全球出口服务。25年经验，1000+项目完成，工厂直供价格，专业品质保证。',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 260,
    slug: 'patio-furniture-manufacturer-japan-export',
    title: 'パティオ家具メーカー - インドネシアからの輸出',
    category: 'Export & International',
    excerpt: 'インドネシアのパティオ家具専門メーカー。カスタムオーダー、屋内生産、国際輸出に対応。屋外対応の高品質パウダーコーティング仕上げで、長期的な耐久性を保証。25年の経験と1000以上のプロジェクト実績。',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 261,
    slug: 'rack-furniture-in-house-production-spain',
    title: 'Fabricante de Muebles de Estantería - Producción Interna en Indonesia',
    category: 'Export & International',
    excerpt: 'Fabricante indonesio especializado en estanterías y racks industriales. Producción interna completa desde diseño hasta acabado. Pedidos personalizados, exportación internacional y precios de fábrica directa. Calidad de exportación garantizada.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 262,
    slug: 'custom-furniture-exporter-france-manufacturer',
    title: 'Exportateur de Mobilier Sur Mesure - Fabricant Indonésien',
    category: 'Export & International',
    excerpt: 'Fabricant et exportateur indonésien de mobilier industriel sur mesure. Production interne complète, commandes personnalisées, et exportation mondiale. 25 ans d\'expérience, plus de 1000 projets réalisés. Qualité export garantie avec prix direct usine.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 263,
    slug: 'industrial-rack-manufacturer-korea-export',
    title: '산업용 랙 제조업체 - 인도네시아 수출 전문',
    category: 'Export & International',
    excerpt: '인도네시아의 산업용 랙 및 디스플레이 선반 전문 제조업체. 맞춤 주문, 내부 생산, 국제 수출 서비스 제공. 25년 경험, 1000개 이상 프로젝트 완료. 공장 직접 가격과 수출 품질 보장.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 264,
    slug: 'patio-furniture-exporter-arabic-custom',
    title: 'مصدر أثاث الباحات - طلبات مخصصة من إندونيسيا',
    category: 'Export & International',
    excerpt: 'مصدر إندونيسي متخصص في أثاث الباحات والتراسات. نقدم تصميمات مخصصة، تصنيع داخلي كامل، وتصدير عالمي. أثاث مقاوم للطقس مع طلاء بودرة عالي الجودة. 25 عاماً من الخبرة وأكثر من 1000 مشروع مكتمل.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 265,
    slug: 'in-house-custom-furniture-china-manufacturer',
    title: '内部定制家具制造商 - 印尼一站式生产',
    category: 'Export & International',
    excerpt: '印尼内部定制家具制造商，提供从设计到生产的完整内部服务。无中间商，工厂直供价格。定制设计、内部生产控制、质量保证。25年经验，1000+项目，专业出口品质。',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 266,
    slug: 'display-rack-manufacturer-japan-export',
    title: 'ディスプレイラックメーカー - インドネシア輸出専門',
    category: 'Export & International',
    excerpt: 'インドネシアのディスプレイラック・展示棚専門メーカー。小売店、ショールーム、商業スペース向けのカスタムデザイン。内部生産による品質管理、国際輸出対応。競争力のある価格と一貫した品質。',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 267,
    slug: 'complete-furniture-solutions-exporter-spain',
    title: 'Soluciones Completas de Mobiliario - Exportador de Indonesia',
    category: 'Export & International',
    excerpt: 'Exportador indonesio de soluciones completas de mobiliario industrial. Desde diseño personalizado hasta producción interna y exportación internacional. Fabricamos todo: muebles de interior, patio, estanterías, y más. Un solo proveedor para todas sus necesidades de mobiliario comercial.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-11-07',
    author: 'Helmi Ramdan'
  },
  {
    id: 268,
    slug: 'pengadaan-furniture-industrial-untuk-proyek-pemerintah-dan-fasilitas-publik',
    title: 'Panduan Pengadaan Furniture Industrial untuk Proyek Pemerintah & Fasilitas Publik',
    category: 'Furniture Information',
    excerpt: 'Panduan lengkap pengadaan furniture industrial untuk kantor dinas, balai kota, fasilitas publik, hingga ruang tunggu pelayanan masyarakat di Jakarta, Bekasi, Depok, Tangerang, Bogor dan Bandung.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&auto=format&fit=crop',
    date: '2025-11-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 269,
    slug: 'strategi-pengadaan-furniture-cafe-dan-restoran-di-jabodetabek',
    title: 'Strategi Pengadaan Furniture Cafe & Restoran di Jabodetabek',
    category: 'Tips and Trick',
    excerpt: 'Cara merencanakan pengadaan furniture untuk cafe dan restoran di Jakarta, Bekasi, Depok, Tangerang, dan Bogor agar hemat budget tapi tetap terlihat premium dan fungsional.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    date: '2025-11-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 270,
    slug: 'custom-order-furniture-kolam-renang-dan-fasilitas-hotel',
    title: 'Custom Order Furniture Kolam Renang & Fasilitas Hotel',
    category: 'About Furniture',
    excerpt: 'Penjelasan lengkap tentang custom order furniture untuk area kolam renang, rooftop, dan fasilitas pendukung hotel/resort agar tahan cuaca dan tetap aman untuk tamu.',
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb2108a?w=800&auto=format&fit=crop',
    date: '2025-11-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 271,
    slug: 'pengadaan-furniture-kantor-modern-di-jakarta-bekasi-dan-bandung',
    title: 'Pengadaan Furniture Kantor Modern di Jakarta, Bekasi, dan Bandung',
    category: 'Furniture Information',
    excerpt: 'Checklist pengadaan furniture kantor modern untuk perusahaan di Jakarta, Bekasi, dan Bandung: mulai dari meja kerja, ruang meeting, hingga area kolaborasi dan pantry.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    date: '2025-11-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 272,
    slug: 'panduan-lengkap-custom-order-furniture-industrial-untuk-proyek-jabodetabek',
    title: 'Panduan Lengkap Custom Order Furniture Industrial untuk Proyek Jabodetabek',
    category: 'Tips and Trick',
    excerpt: 'Langkah demi langkah proses custom order furniture industrial di Mangala Living untuk proyek cafe, kantor, restoran, dan fasilitas publik di seluruh Jabodetabek.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop',
    date: '2025-11-16',
    author: 'Helmi Ramdan'
  },
  {
    id: 273,
    slug: 'ru-he-wei-ka-fei-ting-xuan-ze-gong-ye-feng-jia-ju',
    title: '如何为咖啡厅选择工业风家具：完整选购指南2025',
    category: 'Tips and Trick',
    excerpt: '选择合适的工业风家具对咖啡厅的成功至关重要。本文将为您详细介绍如何为咖啡厅选择工业风家具，包括材质、尺寸、颜色搭配等关键因素，帮助您打造独特而实用的咖啡厅空间。',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
    date: '2025-11-17',
    author: 'Helmi Ramdan'
  },
  {
    id: 274,
    slug: 'ding-zhi-gong-ye-jia-ju-de-you-shi-yu-xuan-ze-zhi-nan',
    title: '定制工业家具的优势与选择指南：为什么选择定制家具',
    category: 'About Furniture',
    excerpt: '定制工业家具相比成品家具具有独特优势。本文将深入探讨定制工业家具的优势、适用场景、材质选择以及如何选择可靠的定制家具供应商，帮助您做出明智的投资决策。',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop',
    date: '2025-11-18',
    author: 'Helmi Ramdan'
  },
  {
    id: 275,
    slug: 'gong-ye-feng-tie-yi-jia-ju-bao-yang-wan-zheng-zhi-nan',
    title: '工业风铁艺家具保养完整指南：让您的家具历久如新',
    category: 'Tips and Trick',
    excerpt: '正确的保养方法可以延长工业风铁艺家具的使用寿命。本文提供详细的保养指南，包括日常清洁、防锈处理、定期维护等实用技巧，确保您的家具长期保持美观和功能性。',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop',
    date: '2025-11-19',
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

