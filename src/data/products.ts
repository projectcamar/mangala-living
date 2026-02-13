export interface ProductVariant {
  name: string
  price: string
  dimensions?: string
}

export interface Product {
  id: number
  slug: string
  name: string
  categories: string[]
  price: string
  image: string
  video?: string
  description?: string
  details?: string[]
  variants?: ProductVariant[]
}

export const ALL_PRODUCTS: Product[] = [
  // New Arrivals
  {
    id: 1,
    slug: 'frame-loft-bookshelf',
    name: 'Frame Loft Bookshelf',
    categories: ['New Arrivals', 'Storage'],
    price: 'Rp3.500.000',
    image: '/images/products/frame-Loft-Bookshelf.webp',
    description: 'A stylish and sturdy industrial bookshelf with a robust metal frame and natural wood shelves. Perfect for displaying books, plants, and decorative items in your living room or office.'
  },
  {
    id: 2,
    slug: 'balcony-bar-table',
    name: 'Balcony Bar Table',
    categories: ['New Arrivals', 'Bar Set', 'Outdoor'],
    price: 'Rp350.000',
    image: '/images/products/balcony-bar-table.webp'
  },

  // Lounge Set
  {
    id: 3,
    slug: 'lounge-set-coffee-table',
    name: 'Lounge Set Coffee Table',
    categories: ['Lounge Set', 'Tables'],
    price: 'Rp2.000.000',
    image: '/images/products/longue-set-coffee-table.webp',
    video: '/images/products/longue-set-coffee-table.mp4'
  },
  {
    id: 17,
    slug: 'bench-corner-lounge',
    name: 'Bench Corner Lounge',
    categories: ['Lounge Set', 'Sofa Bench'],
    price: 'Rp3.500.000',
    image: '/images/products/Bench-corner-kursi-sudut-kursi-santai.webp',
    video: '/images/products/Bench-corner-kursi-sudut-kursi-santai.mp4',
    variants: [
      { name: '200x50x50', price: 'Rp3.500.000', dimensions: '200x50x50' },
      { name: '150x50x50', price: 'Rp2.800.000', dimensions: '150x50x50' }
    ]
  },

  // Daybed
  {
    id: 16,
    slug: 'industrial-daybed-frame',
    name: 'Industrial Daybed Frame',
    categories: ['Daybed'],
    price: 'Rp3.200.000',
    image: '/images/products/industrial-daybed-boneonly.webp',
    video: '/images/products/industrial-daybed.mp4'
  },

  // Dining Set
  {
    id: 4,
    slug: 'bandung-pipe-dining-table',
    name: 'Bandung Pipe Dining Table',
    categories: ['Dining Set', 'Dine Table'],
    price: 'Rp2.800.000',
    image: '/images/products/meja-industrial-mejamakan.webp',
    variants: [
      { name: 'Meja Saja', price: 'Rp2.800.000', dimensions: '120x60x75' },
      { name: 'Meja + 2 Kursi', price: 'Rp3.600.000', dimensions: '120x60x75' },
      { name: 'Meja 150x80x120', price: 'Rp3.800.000', dimensions: '150x80x120' }
    ]
  },
  {
    id: 5,
    slug: 'dining-set-with-2-chairs',
    name: 'Dining Set with 2 Chairs',
    categories: ['Dining Set', 'Dine Table'],
    price: 'Rp4.000.000',
    image: '/images/products/Meja-makan-industrial-150x60x90-2 kursi.webp',
    video: '/images/products/meja-makan-industrial.mp4'
  },

  // Bar Set
  {
    id: 6,
    slug: 'beam-industrial-bar-chair',
    name: 'Beam Industrial Bar Chair',
    categories: ['Bar Set'],
    price: 'Rp450.000',
    image: '/images/products/Kursi-Barstool-Besi-Behel.webp',
    video: '/images/products/kursi-barstool.mp4'
  },
  {
    id: 7,
    slug: 'bar-stall-chair',
    name: 'Bar Stall Chair',
    categories: ['Bar Set'],
    price: 'Rp450.000',
    image: '/images/products/Kursi-Bar-kursi-stall-chair.webp',
    video: '/images/products/kursi-bar-stall-chair.mp4'
  },
  {
    id: 8,
    slug: 'steelframe-outdoor-bar-set',
    name: 'Steelframe Outdoor Bar Set',
    categories: ['Bar Set', 'Outdoor'],
    price: 'Rp8.150.000',
    image: '/images/products/Steelfram-Outdoor-Bar-Set.webp'
  },

  // Storage
  {
    id: 9,
    slug: 'industrial-kitchen-cabinet',
    name: 'Industrial Kitchen Cabinet',
    categories: ['Storage'],
    price: 'Rp6.500.000',
    image: '/images/products/Kabinet-Industrial-Dapur.webp',
    video: '/images/products/Kabinet-Industrial-Dapur.mp4',
    variants: [
      { name: '280x40x110', price: 'Rp6.500.000', dimensions: '280x40x110' },
      { name: '200x40x110', price: 'Rp5.800.000', dimensions: '200x40x110' },
      { name: '150x40x90', price: 'Rp4.500.000', dimensions: '150x40x90' }
    ]
  },
  {
    id: 10,
    slug: 'kabinet-lemari-industrial',
    name: 'Kabinet Lemari Industrial',
    categories: ['Storage'],
    price: 'Rp4.500.000',
    image: '/images/products/Kabinet-Lemari-industrial.webp',
    video: '/images/products/kabinet-lemari-industrial.mp4'
  },
  {
    id: 11,
    slug: 'hollowline-display-rack',
    name: 'Hollowline Display Rack',
    categories: ['Storage'],
    price: 'Rp3.700.000',
    image: '/images/products/Hollowline-Display-Rack.webp',
    video: '/images/products/hollowline-display-rack.mp4'
  },
  {
    id: 12,
    slug: 'ladder-frame-display-stand',
    name: 'Ladder Frame Display Stand',
    categories: ['Storage'],
    price: 'Rp3.700.000',
    image: '/images/products/rak-display-partisi-industrial-besi.webp',
    video: '/images/products/rak-display-partisi-industrial-besi.mp4'
  },
  {
    id: 13,
    slug: 'industrial-hanging-shelf',
    name: 'Industrial Hanging Shelf',
    categories: ['Storage'],
    price: 'Rp1.800.000',
    image: '/images/products/rak-gantung-industrial.webp',
    video: '/images/products/rak-gantung-industrial.mp4',
    variants: [
      { name: '180x30x90', price: 'Rp1.800.000', dimensions: '180x30x90' },
      { name: '120x30x90', price: 'Rp1.200.000', dimensions: '120x30x90' },
      { name: '120x20x60', price: 'Rp850.000', dimensions: '120x20x60' },
      { name: '120x20x90', price: 'Rp950.000', dimensions: '120x20x90' },
      { name: '120x30x60', price: 'Rp950.000', dimensions: '120x30x60' },
      { name: '150x20x60', price: 'Rp950.000', dimensions: '150x20x60' },
      { name: '150x20x90', price: 'Rp1.050.000', dimensions: '150x20x90' },
      { name: '180x20x60', price: 'Rp1.300.000', dimensions: '180x20x60' },
      { name: '180x20x90', price: 'Rp1.600.000', dimensions: '180x20x90' },
      { name: '180x30x60', price: 'Rp1.600.000', dimensions: '180x30x60' }
    ]
  },
  {
    id: 14,
    slug: 'industrial-coat-rack',
    name: 'Industrial Coat Rack',
    categories: ['Storage'],
    price: 'Rp2.500.000',
    image: '/images/products/gantungan-baju-industrial.webp'
  },

  // Tables
  {
    id: 15,
    slug: 'meja-kerja-industrial',
    name: 'Meja Kerja Industrial',
    categories: ['Tables'],
    price: 'Rp2.800.000',
    image: '/images/products/Meja-Kerja-Rak-Meja-Belajar-custom.webp',
    variants: [
      { name: '120x60x90', price: 'Rp2.800.000', dimensions: '120x60x90' },
      { name: '140x60x90', price: 'Rp3.200.000', dimensions: '140x60x90' }
    ]
  },
]
