export interface ProductVariant {
  name: string
  price: string
  dimensions?: string
}

export type LanguageCode = 'id' | 'en' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'

export interface ProductTranslation {
  name: string
  description?: string
  productDetails?: string[]
}

export interface ProductTranslations {
  id: ProductTranslation
  en: ProductTranslation
  ar: ProductTranslation
  zh: ProductTranslation
  ja: ProductTranslation
  es: ProductTranslation
  fr: ProductTranslation
  ko: ProductTranslation
}

export interface Product {
  id: number
  slug: string
  // Legacy fields (kept for backward compatibility - use Indonesian as default)
  name: string
  categories: string[]
  price: string
  image: string
  video?: string
  description?: string
  productDetails?: string[]
  status?: 'live' | 'draft'
  variants?: ProductVariant[]

  // New multilanguage field
  translations?: ProductTranslations
}

export const ALL_PRODUCTS: Product[] = [
  {
    "id": 1,
    "slug": "frame-loft-bookshelf",
    "name": "Frame Loft Bookshelf",
    "categories": [
      "New Arrivals",
      "Storage"
    ],
    "price": "Rp3.500.000",
    "image": "/images/products/frame-Loft-Bookshelf.webp",
    "description": "A stylish and sturdy industrial bookshelf with a robust metal frame and natural wood shelves. Perfect for displaying books, plants, and decorative items in your living room or office.",
    "productDetails": [
      "Konstruksi Heavy Duty",
      "Beberapa Rak/Kompartemen",
      "Mudah Dipasang"
    ],
    "status": "live",
    "translations": {
      "id": {
        "name": "Frame Loft Bookshelf",
        "description": "A stylish and sturdy industrial bookshelf with a robust metal frame and natural wood shelves. Perfect for displaying books, plants, and decorative items in your living room or office.",
        "productDetails": [
          "Konstruksi Heavy Duty",
          "Beberapa Rak/Kompartemen",
          "Mudah Dipasang"
        ]
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 2,
    "slug": "balcony-bar-table",
    "name": "Balcony Bar Table",
    "categories": [
      "New Arrivals",
      "Bar Set",
      "Outdoor"
    ],
    "price": "Rp350.000",
    "image": "/images/products/balcony-bar-table.webp",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Balcony Bar Table",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 3,
    "slug": "lounge-set-coffee-table",
    "name": "Lounge Set Coffee Table",
    "categories": [
      "Lounge Set",
      "Tables"
    ],
    "price": "Rp2.000.000",
    "image": "/images/products/longue-set-coffee-table.webp",
    "video": "/images/products/longue-set-coffee-table.mp4",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Lounge Set Coffee Table",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 17,
    "slug": "bench-corner-lounge",
    "name": "Bench Corner Lounge",
    "categories": [
      "Lounge Set",
      "Sofa Bench"
    ],
    "price": "Rp3.500.000",
    "image": "/images/products/Bench-corner-kursi-sudut-kursi-santai.webp",
    "video": "/images/products/Bench-corner-kursi-sudut-kursi-santai.mp4",
    "variants": [
      {
        "name": "200x50x50",
        "price": "Rp3.500.000",
        "dimensions": "200x50x50"
      },
      {
        "name": "150x50x50",
        "price": "Rp2.800.000",
        "dimensions": "150x50x50"
      }
    ],
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Bench Corner Lounge",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 16,
    "slug": "industrial-daybed-frame",
    "name": "Industrial Daybed Frame",
    "categories": [
      "Daybed"
    ],
    "price": "Rp3.200.000",
    "image": "/images/products/industrial-daybed-boneonly.webp",
    "video": "/images/products/industrial-daybed.mp4",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Industrial Daybed Frame",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 4,
    "slug": "bandung-pipe-dining-table",
    "name": "Bandung Pipe Dining Table",
    "categories": [
      "Dining Set",
      "Dine Table"
    ],
    "price": "Rp2.800.000",
    "image": "/images/products/meja-industrial-mejamakan.webp",
    "variants": [
      {
        "name": "Meja Saja",
        "price": "Rp2.800.000",
        "dimensions": "120x60x75"
      },
      {
        "name": "Meja + 2 Kursi",
        "price": "Rp3.600.000",
        "dimensions": "120x60x75"
      },
      {
        "name": "Meja 150x80x120",
        "price": "Rp3.800.000",
        "dimensions": "150x80x120"
      }
    ],
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Bandung Pipe Dining Table",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 5,
    "slug": "dining-set-with-2-chairs",
    "name": "Dining Set with 2 Chairs",
    "categories": [
      "Dining Set",
      "Dine Table"
    ],
    "price": "Rp4.000.000",
    "image": "/images/products/Meja-makan-industrial-150x60x90-2 kursi.webp",
    "video": "/images/products/meja-makan-industrial.mp4",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Dining Set with 2 Chairs",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 6,
    "slug": "beam-industrial-bar-chair",
    "name": "Beam Industrial Bar Chair",
    "categories": [
      "Bar Set"
    ],
    "price": "Rp450.000",
    "image": "/images/products/Kursi-Barstool-Besi-Behel.webp",
    "video": "/images/products/kursi-barstool.mp4",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Beam Industrial Bar Chair",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 7,
    "slug": "bar-stall-chair",
    "name": "Bar Stall Chair",
    "categories": [
      "Bar Set"
    ],
    "price": "Rp450.000",
    "image": "/images/products/Kursi-Bar-kursi-stall-chair.webp",
    "video": "/images/products/kursi-bar-stall-chair.mp4",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Bar Stall Chair",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 8,
    "slug": "steelframe-outdoor-bar-set",
    "name": "Steelframe Outdoor Bar Set",
    "categories": [
      "Bar Set",
      "Outdoor"
    ],
    "price": "Rp8.150.000",
    "image": "/images/products/Steelfram-Outdoor-Bar-Set.webp",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Steelframe Outdoor Bar Set",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 9,
    "slug": "industrial-kitchen-cabinet",
    "name": "Industrial Kitchen Cabinet",
    "categories": [
      "Storage"
    ],
    "price": "Rp6.500.000",
    "image": "/images/products/Kabinet-Industrial-Dapur.webp",
    "video": "/images/products/Kabinet-Industrial-Dapur.mp4",
    "variants": [
      {
        "name": "280x40x110",
        "price": "Rp6.500.000",
        "dimensions": "280x40x110"
      },
      {
        "name": "200x40x110",
        "price": "Rp5.800.000",
        "dimensions": "200x40x110"
      },
      {
        "name": "150x40x90",
        "price": "Rp4.500.000",
        "dimensions": "150x40x90"
      }
    ],
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Industrial Kitchen Cabinet",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 10,
    "slug": "kabinet-lemari-industrial",
    "name": "Kabinet Lemari Industrial",
    "categories": [
      "Storage"
    ],
    "price": "Rp4.500.000",
    "image": "/images/products/Kabinet-Lemari-industrial.webp",
    "video": "/images/products/kabinet-lemari-industrial.mp4",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Kabinet Lemari Industrial",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 11,
    "slug": "hollowline-display-rack",
    "name": "Hollowline Display Rack",
    "categories": [
      "Storage"
    ],
    "price": "Rp3.700.000",
    "image": "/images/products/Hollowline-Display-Rack.webp",
    "video": "/images/products/hollowline-display-rack.mp4",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Hollowline Display Rack",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 12,
    "slug": "ladder-frame-display-stand",
    "name": "Ladder Frame Display Stand",
    "categories": [
      "Storage"
    ],
    "price": "Rp3.700.000",
    "image": "/images/products/rak-display-partisi-industrial-besi.webp",
    "video": "/images/products/rak-display-partisi-industrial-besi.mp4",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Ladder Frame Display Stand",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 13,
    "slug": "industrial-hanging-shelf",
    "name": "Industrial Hanging Shelf",
    "categories": [
      "Storage"
    ],
    "price": "Rp1.800.000",
    "image": "/images/products/rak-gantung-industrial.webp",
    "video": "/images/products/rak-gantung-industrial.mp4",
    "variants": [
      {
        "name": "180x30x90",
        "price": "Rp1.800.000",
        "dimensions": "180x30x90"
      },
      {
        "name": "120x30x90",
        "price": "Rp1.200.000",
        "dimensions": "120x30x90"
      },
      {
        "name": "120x20x60",
        "price": "Rp850.000",
        "dimensions": "120x20x60"
      },
      {
        "name": "120x20x90",
        "price": "Rp950.000",
        "dimensions": "120x20x90"
      },
      {
        "name": "120x30x60",
        "price": "Rp950.000",
        "dimensions": "120x30x60"
      },
      {
        "name": "150x20x60",
        "price": "Rp950.000",
        "dimensions": "150x20x60"
      },
      {
        "name": "150x20x90",
        "price": "Rp1.050.000",
        "dimensions": "150x20x90"
      },
      {
        "name": "180x20x60",
        "price": "Rp1.300.000",
        "dimensions": "180x20x60"
      },
      {
        "name": "180x20x90",
        "price": "Rp1.600.000",
        "dimensions": "180x20x90"
      },
      {
        "name": "180x30x60",
        "price": "Rp1.600.000",
        "dimensions": "180x30x60"
      }
    ],
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Industrial Hanging Shelf",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 14,
    "slug": "industrial-coat-rack",
    "name": "Industrial Coat Rack",
    "categories": [
      "Storage"
    ],
    "price": "Rp2.500.000",
    "image": "/images/products/gantungan-baju-industrial.webp",
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Industrial Coat Rack",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 15,
    "slug": "meja-kerja-industrial",
    "name": "Meja Kerja Industrial",
    "categories": [
      "Tables"
    ],
    "price": "Rp2.800.000",
    "image": "/images/products/Meja-Kerja-Rak-Meja-Belajar-custom.webp",
    "variants": [
      {
        "name": "120x60x90",
        "price": "Rp2.800.000",
        "dimensions": "120x60x90"
      },
      {
        "name": "140x60x90",
        "price": "Rp3.200.000",
        "dimensions": "140x60x90"
      }
    ],
    "status": "live",
    "description": "",
    "productDetails": [],
    "translations": {
      "id": {
        "name": "Meja Kerja Industrial",
        "description": "",
        "productDetails": []
      },
      "en": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ar": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "zh": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ja": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "es": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "fr": {
        "name": "",
        "description": "",
        "productDetails": []
      },
      "ko": {
        "name": "",
        "description": "",
        "productDetails": []
      }
    }
  },
  {
    "id": 18,
    "slug": "industrial-wooden-soap-station",
    "name": "Stasiun Sabun Kayu Industri",
    "categories": [],
    "price": "",
    "image": "",
    "video": "",
    "description": "Stasiun sabun kayu industri ini dirancang untuk menyediakan tempat penyimpanan yang elegan dan fungsional. Terbuat dari kayu dan logam, produk ini sangat tahan lama dan sesuai untuk digunakan di kafe, restoran, dan rumah modern.",
    "productDetails": [
      "Desain industri yang kuat",
      "Bahan kayu dan logam berkualitas",
      "Tahan lama dan mudah dibersihkan"
    ],
    "status": "draft",
    "variants": [],
    "translations": {
      "id": {
        "name": "Stasiun Sabun Kayu Industri",
        "description": "Stasiun sabun kayu industri ini dirancang untuk menyediakan tempat penyimpanan yang elegan dan fungsional. Terbuat dari kayu dan logam, produk ini sangat tahan lama dan sesuai untuk digunakan di kafe, restoran, dan rumah modern.",
        "productDetails": [
          "Desain industri yang kuat",
          "Bahan kayu dan logam berkualitas",
          "Tahan lama dan mudah dibersihkan"
        ]
      },
      "en": {
        "name": "Industrial Wooden Soap Station",
        "description": "This industrial wooden soap station is designed to provide an elegant and functional storage solution. Made from wood and metal, this product is highly durable and perfect for use in cafes, restaurants, and modern homes.",
        "productDetails": [
          "Strong industrial design",
          "High-quality wood and metal materials",
          "Durable and easy to clean"
        ]
      },
      "ar": {
        "name": "محطة صابون خشبية صناعية",
        "description": "تم تصميم هذه المحطة الصابون الخشبية الصناعية لتوفير حل تخزين أنيق ووظيفي. مصنوعة من الخشب وال金属، هذا المنتج قوي جدا ومثالي للاستخدام في المقاهي والمطاعم والمنازل الحديثة.",
        "productDetails": [
          "تصميم صناعي قوي",
          "مواد خشبية ومعدنية عالية الجودة",
          "متين وسهل التنظيف"
        ]
      },
      "zh": {
        "name": "工业木制肥皂站",
        "description": "该工业木制肥皂站旨在提供一个优雅且功能性的存储解决方案。由木材和金属制成，该产品非常耐用，非常适合在咖啡馆、餐厅和现代家庭中使用。",
        "productDetails": [
          "强大的工业设计",
          "高质量的木材和金属材料",
          "耐用且易于清洁"
        ]
      },
      "ja": {
        "name": "インダストリアルウッド石鹸ステーション",
        "description": "このインダストリアルウッド石鹸ステーションは、エレガントで機能的なストレージソリューションを提供するために設計されています。木材と金属で作られ、非常に耐久性が高く、カフェ、レストラン、モダンハウスに最適です。",
        "productDetails": [
          "強いインダストリアルデザイン",
          "高品質の木材と金属材料",
          "耐久性が高く、簡単に掃除できます"
        ]
      },
      "es": {
        "name": "Estación de Jabón de Madera Industrial",
        "description": "Esta estación de jabón de madera industrial está diseñada para proporcionar una solución de almacenamiento elegante y funcional. Hecha de madera y metal, este producto es muy duradero y perfecto para usar en cafeterías, restaurantes y hogares modernos.",
        "productDetails": [
          "Diseño industrial fuerte",
          "Materiales de madera y metal de alta calidad",
          "Duradero y fácil de limpiar"
        ]
      },
      "fr": {
        "name": "Station de Savon en Bois Industriel",
        "description": "Cette station de savon en bois industriel est conçue pour offrir une solution de stockage élégante et fonctionnelle. Faite de bois et de métal, ce produit est très durable et parfait pour une utilisation dans les cafés, les restaurants et les maisons modernes.",
        "productDetails": [
          "Conception industrielle robuste",
          "Matériaux en bois et métal de haute qualité",
          "Durabilité et facilité de nettoyage"
        ]
      },
      "ko": {
        "name": "산업용 목재 비누 스테이션",
        "description": "이 산업용 목재 비누 스테이션은 우아하고 기능적인 저장 솔루션을 제공하기 위해 설계되었습니다. 목재와 금속으로 만들어져 매우 내구성이 뛰어나고 카페, 레스토랑, 모던 홈에서 사용하기 적합합니다.",
        "productDetails": [
          "강한 산업 디자인",
          "고품질의 목재와 금속 재료",
          "내구성과 청소 용이"
        ]
      }
    }
  }
]
