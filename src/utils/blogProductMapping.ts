import type { Product } from '../data/products'
import { ALL_PRODUCTS } from '../data/products'

/**
 * Mapping keywords dari artikel blog ke produk yang relevan
 * Sistem ini akan mendeteksi keyword di title, slug, atau content artikel
 * dan menampilkan produk yang sesuai
 */
export interface ProductKeywordMapping {
  keywords: string[]  // Keyword yang muncul di artikel
  productIds: number[]  // ID produk yang relevan
  category?: string  // Kategori produk (optional)
}

// Mapping keyword artikel ke produk
const PRODUCT_KEYWORD_MAPPINGS: ProductKeywordMapping[] = [
  // MEJA / TABLE
  {
    keywords: ['meja', 'table', 'meja makan', 'meja cafe', 'meja bar', 'meja kerja', 'dining table', 'bar table', 'coffee table'],
    productIds: [4, 5, 15, 3], // Dining tables, meja kerja, coffee table
    category: 'Tables'
  },
  // KURSI / CHAIR
  {
    keywords: ['kursi', 'chair', 'kursi bar', 'bar chair', 'stall chair', 'barstool'],
    productIds: [6, 7], // Bar chairs
    category: 'Bar Set'
  },
  // RAK / RACK / SHELF / STORAGE
  {
    keywords: ['rak', 'rack', 'shelf', 'display', 'storage', 'rak display', 'display rack', 'bookshelf', 'lemari', 'kabinet'],
    productIds: [1, 9, 10, 11, 12, 13], // Racks, shelves, cabinets
    category: 'Storage'
  },
  // BAR SET / OUTDOOR
  {
    keywords: ['bar set', 'bar-set', 'outdoor', 'balcony', 'teras', 'area luar'],
    productIds: [2, 8], // Bar sets dan outdoor furniture
    category: 'Bar Set'
  },
  // DAYBED / LOUNGE
  {
    keywords: ['daybed', 'loung', 'sofa', 'santai', 'lounge set', 'bench'],
    productIds: [16, 17, 3], // Daybed, bench, lounge set
    category: 'Lounge Set'
  },
  // DINING SET
  {
    keywords: ['dining set', 'set makan', 'meja kursi set'],
    productIds: [4, 5], // Dining sets
    category: 'Dining Set'
  },
  // KITCHEN / DAPUR
  {
    keywords: ['kitchen', 'dapur', 'cabinet', 'kabinet', 'lemari dapur'],
    productIds: [9, 10], // Kitchen cabinets
    category: 'Storage'
  },
  // GANTUNGAN / HANGING
  {
    keywords: ['gantungan', 'hanging', 'coat rack'],
    productIds: [13, 14], // Hanging shelves, coat racks
    category: 'Storage'
  }
]

/**
 * Mendapatkan produk yang relevan berdasarkan artikel blog
 * @param slug - Slug artikel blog
 * @param title - Judul artikel
 * @param excerpt - Excerpt artikel (optional)
 * @returns Array produk yang relevan
 */
export const getRelevantProductsForBlog = (
  slug: string,
  title: string,
  excerpt?: string
): Product[] => {
  // Kombinasi semua teks untuk searching
  const searchText = `${slug} ${title} ${excerpt || ''}`.toLowerCase()
  
  // Collect semua product IDs yang relevan
  const relevantProductIds = new Set<number>()
  
  // Loop melalui setiap mapping
  for (const mapping of PRODUCT_KEYWORD_MAPPINGS) {
    // Cek apakah ada keyword yang match
    const hasKeyword = mapping.keywords.some(keyword => {
      const keywordLower = keyword.toLowerCase()
      return searchText.includes(keywordLower)
    })
    
    // Jika ada keyword match, tambahkan product IDs
    if (hasKeyword) {
      mapping.productIds.forEach(id => relevantProductIds.add(id))
    }
  }
  
  // Convert Set ke Array dan dapatkan produk
  const productIds = Array.from(relevantProductIds)
  
  if (productIds.length === 0) {
    // Fallback: tampilkan best sellers jika tidak ada match
    return ALL_PRODUCTS.slice(0, 6)
  }
  
  // Ambil produk berdasarkan IDs, maksimal 6 produk
  const products = productIds
    .map(id => ALL_PRODUCTS.find(p => p.id === id))
    .filter((p): p is Product => p !== undefined)
    .slice(0, 6)
  
  return products
}

/**
 * Mendapatkan heading yang relevan untuk showcase produk
 * @param slug - Slug artikel
 * @param title - Judul artikel
 * @returns Heading text untuk showcase section
 */
export const getProductShowcaseHeading = (
  slug: string,
  title: string
): string => {
  const searchText = `${slug} ${title}`.toLowerCase()
  
  if (searchText.includes('meja')) {
    return 'Produk Meja Industrial Pilihan Kami'
  }
  if (searchText.includes('kursi')) {
    return 'Kursi Bar & Cafe Industrial Berkualitas'
  }
  if (searchText.includes('rak') || searchText.includes('display')) {
    return 'Rak Display & Storage Industrial Terbaik'
  }
  if (searchText.includes('bar') || searchText.includes('outdoor')) {
    return 'Bar Set & Outdoor Furniture Industrial'
  }
  if (searchText.includes('dining') || searchText.includes('makan')) {
    return 'Dining Set Industrial untuk Cafe & Restoran'
  }
  if (searchText.includes('kitchen') || searchText.includes('dapur')) {
    return 'Kitchen Cabinet & Storage Industrial'
  }
  if (searchText.includes('lounge') || searchText.includes('daybed')) {
    return 'Lounge Set & Daybed Industrial Nyaman'
  }
  
  // Default heading
  return 'Produk Industrial Terkait yang Mungkin Anda Suka'
}
