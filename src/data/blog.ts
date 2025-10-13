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

