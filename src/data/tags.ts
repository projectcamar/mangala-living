/**
 * Tag & Geo-Location Data — Mangala Living SEO Cluster Strategy
 * Powers: /tag/:slug archive pages (Location & Product tags)
 * Purpose: Outrank competitors like Eka Jaya Steel on local & keyword archive searches
 */

export interface GeoLocationTag {
  slug: string
  name: string
  region: string
  type: 'city' | 'district' | 'area'
  description: {
    id: string
    en: string
  }
}

export interface ProductTag {
  slug: string
  name: string
  category: string
  description: {
    id: string
    en: string
  }
}

export const GEO_TAGS: GeoLocationTag[] = [
  {
    slug: 'bekasi',
    name: 'Bekasi',
    region: 'Jawa Barat',
    type: 'city',
    description: {
      id: 'Layanan bengkel las & fabrikasi besi custom profesional di wilayah Bekasi. Melayani pembuatan kanopi, pagar, teralis, railing, pintu besi, dan tangga besi untuk hunian & komersial.',
      en: 'Professional custom steel fabrication and welding service in Bekasi area. Producing canopies, fences, window grilles, railings, steel doors, and staircases.',
    },
  },
  {
    slug: 'cikarang',
    name: 'Cikarang',
    region: 'Kabupaten Bekasi',
    type: 'area',
    description: {
      id: 'Bengkel las terdekat Cikarang & kawasan industri. Jasa las custom, kanopi hollow, rak gudang heavy duty, dan konstruksi besi profesional.',
      en: 'Nearby welding shop in Cikarang industrial zone. Custom welding, hollow canopy, heavy-duty warehouse racks, and steel structures.',
    },
  },
  {
    slug: 'cibubur',
    name: 'Cibubur',
    region: 'Jakarta / Depok / Bogor',
    type: 'area',
    description: {
      id: 'Jasa bengkel las Cibubur profesional untuk perumahan Kota Wisata, Legenda Wisata, Raffles Hills, dan sekitarnya. Kanopi minimalis, pagar besi, dan teralis.',
      en: 'Professional Cibubur welding service for Kota Wisata, Legenda Wisata, Raffles Hills housing complexes. Minimalist canopy, steel fences, and grilles.',
    },
  },
  {
    slug: 'jakarta',
    name: 'Jakarta',
    region: 'DKI Jakarta',
    type: 'city',
    description: {
      id: 'Bengkel las jakarta terdekat & profesional. Melayani seluruh wilayah Jakarta Timur, Jakarta Selatan, Jakarta Pusat, Jakarta Barat, dan Jakarta Utara.',
      en: 'Professional Jakarta welding shop serving East, South, Central, West, and North Jakarta areas.',
    },
  },
  {
    slug: 'jakarta-timur',
    name: 'Jakarta Timur',
    region: 'DKI Jakarta',
    type: 'area',
    description: {
      id: 'Bengkel las Jakarta Timur terpercaya (Cakung, Duren Sawit, Ciracas, Kramat Jati, Jatinegara). Pembuatan kanopi, pagar, teralis, dan railing.',
      en: 'Trusted East Jakarta welding service serving Cakung, Duren Sawit, Ciracas, Kramat Jati, Jatinegara.',
    },
  },
  {
    slug: 'jakarta-selatan',
    name: 'Jakarta Selatan',
    region: 'DKI Jakarta',
    type: 'area',
    description: {
      id: 'Bengkel las Jakarta Selatan berpengalaman. Melayani pembuatan furniture besi industrial, partisi kaca besi cafe, kanopi, dan railing balkon.',
      en: 'Experienced South Jakarta steel fabrication service for industrial furniture, cafe steel partitions, canopies, and balcony railings.',
    },
  },
  {
    slug: 'depok',
    name: 'Depok',
    region: 'Jawa Barat',
    type: 'city',
    description: {
      id: 'Bengkel las Depok terdekat & murah dengan tukang las ahli. Pembuatan kanopi alderon, pagar minimalis, dan teralis pintu.',
      en: 'Nearby affordable Depok welding shop with expert welders. Alderon canopy, minimalist fence, and door grilles.',
    },
  },
  {
    slug: 'bogor',
    name: 'Bogor',
    region: 'Jawa Barat',
    type: 'city',
    description: {
      id: 'Jasa bengkel las Bogor profesional. Melayani pembuatan kanopi garasi, pergola taman, dan pagar besi tahan cuaca.',
      en: 'Professional Bogor welding service for garage canopies, garden pergolas, and weather-resistant steel fences.',
    },
  },
  {
    slug: 'cileungsi',
    name: 'Cileungsi',
    region: 'Bogor',
    type: 'area',
    description: {
      id: 'Bengkel las Cileungsi terdekat & berpengalaman. Melayani pembuatan kanopi, pintu lipat, menara tangki air, dan teralis.',
      en: 'Nearby experienced Cileungsi welding shop for canopies, folding gates, water tank towers, and window grilles.',
    },
  },
  {
    slug: 'tambun',
    name: 'Tambun',
    region: 'Bekasi',
    type: 'area',
    description: {
      id: 'Bengkel las Tambun Selatan & Tambun Utara. Tukang las panggilan terdekat untuk kanopi, pagar besi, dan perbaikan besi.',
      en: 'South & North Tambun welding shop. Nearby call-out welder for canopies, steel gates, and iron repair.',
    },
  },
  {
    slug: 'cibitung',
    name: 'Cibitung',
    region: 'Bekasi',
    type: 'area',
    description: {
      id: 'Bengkel las Cibitung dekat kawasan MM2100. Spesialis fabrikasi besi industrial, kanopi, rak pabrik, dan railing.',
      en: 'Cibitung welding shop near MM2100 industrial area. Specialist in industrial steel fabrication, canopy, and factory racks.',
    },
  },
  {
    slug: 'karawang',
    name: 'Karawang',
    region: 'Jawa Barat',
    type: 'city',
    description: {
      id: 'Bengkel las Karawang profesional untuk kawasan industri KIIC, Suryacipta, dan perumahan. Fabrikasi baja & furniture custom.',
      en: 'Professional Karawang welding service for industrial zones and residential homes. Steel fabrication & custom furniture.',
    },
  },
  {
    slug: 'jatiasih',
    name: 'Jatiasih',
    region: 'Bekasi',
    type: 'area',
    description: {
      id: 'Bengkel las Jatiasih Bekasi murah & berkualitas. Pembuatan kanopi garasi, pagar besi minimalis, dan teralis jendela.',
      en: 'Affordable high-quality Jatiasih Bekasi welding shop. Garage canopy, minimalist fence, and window grilles.',
    },
  },
  {
    slug: 'grand-wisata',
    name: 'Grand Wisata',
    region: 'Bekasi',
    type: 'area',
    description: {
      id: 'Bengkel las perumahan Grand Wisata Tambun Bekasi. Desain kanopi mewah, pagar besi hollow, dan railing balkon minimalis.',
      en: 'Grand Wisata Tambun housing welding specialist. Luxury canopy design, hollow fence, and minimalist balcony railings.',
    },
  },
  {
    slug: 'summarecon-bekasi',
    name: 'Summarecon Bekasi',
    region: 'Bekasi',
    type: 'area',
    description: {
      id: 'Bengkel las area Summarecon Bekasi. Pembuatan kanopi polycarbonate, railing kaca tempered, dan partisi besi komersial.',
      en: 'Summarecon Bekasi area steel fabrication. Polycarbonate canopy, tempered glass railings, and commercial steel partitions.',
    },
  },
  {
    slug: 'harapan-indah',
    name: 'Harapan Indah',
    region: 'Bekasi',
    type: 'area',
    description: {
      id: 'Bengkel las Kota Harapan Indah Bekasi. Jasa pembuatan kanopi, pintu besi henderson, dan teralis minimalis.',
      en: 'Kota Harapan Indah Bekasi welding shop. Fabrication for canopy, henderson steel door, and minimalist grilles.',
    },
  },
]

export const PRODUCT_TAGS: ProductTag[] = [
  {
    slug: 'kanopi',
    name: 'Kanopi Besi',
    category: 'Struktur Atap',
    description: {
      id: 'Koleksi artikel & jasa pembuatan kanopi besi hollow, alderon, polycarbonate, dan spandek dari Mangala Living.',
      en: 'Articles and custom fabrication services for hollow steel, alderon, polycarbonate, and spandek canopies by Mangala Living.',
    },
  },
  {
    slug: 'railing',
    name: 'Railing Besi',
    category: 'Keamanan & Arsitektur',
    description: {
      id: 'Layanan pembuatan railing balkon, railing tangga besi minimalis, dan railing stainless steel custom.',
      en: 'Fabrication service for balcony railings, minimalist steel stair railings, and custom stainless steel handrails.',
    },
  },
  {
    slug: 'pagar-besi',
    name: 'Pagar Besi',
    category: 'Eksterior',
    description: {
      id: 'Pagar besi minimalis, pagar hollow, pintu pagar sliding & swing, serta pagar besi tempa klasik.',
      en: 'Minimalist steel fence, hollow fence, sliding & swing gates, and classic wrought iron fences.',
    },
  },
  {
    slug: 'teralis',
    name: 'Teralis Besi',
    category: 'Keamanan',
    description: {
      id: 'Teralis jendela minimalis modern, teralis pintu anti maling, dan teralis besi custom.',
      en: 'Modern minimalist window grilles, anti-theft door grilles, and custom steel grilles.',
    },
  },
  {
    slug: 'pintu-besi',
    name: 'Pintu Besi',
    category: 'Pintu & Akses',
    description: {
      id: 'Pintu besi minimalis, pintu henderson geser/lipat, folding gate, dan pintu kasa nyamuk expanda.',
      en: 'Minimalist steel doors, henderson sliding/folding doors, folding gates, and expanda mosquito net doors.',
    },
  },
  {
    slug: 'folding-gate',
    name: 'Folding Gate',
    category: 'Pintu Toko & Garasi',
    description: {
      id: 'Folding gate besi accordion hemat tempat untuk ruko, toko, minimarket, dan garasi rumah.',
      en: 'Space-saving steel accordion folding gates for shopfronts, mini-markets, and garages.',
    },
  },
  {
    slug: 'tangga-putar',
    name: 'Tangga Putar',
    category: 'Tangga',
    description: {
      id: 'Jasa pembuatan tangga putar besi hemat tempat untuk rumah bertingkat, jemuran, dan akses servis.',
      en: 'Fabrication service for space-saving spiral steel staircases for multi-story homes and service access.',
    },
  },
  {
    slug: 'besi-hollow',
    name: 'Besi Hollow',
    category: 'Material',
    description: {
      id: 'Kreasi kerajinan dan struktur dari besi hollow galvanis & hitam untuk kanopi, pagar, rak, dan furniture.',
      en: 'Steel creations and structures made from galvanized & black hollow steel for canopies, fences, racks, and furniture.',
    },
  },
  {
    slug: 'tukang-las',
    name: 'Tukang Las Panggilan',
    category: 'Jasa & Perbaikan',
    description: {
      id: 'Jasa tukang las panggilan terdekat 24 jam untuk pembuatan baru, perbaikan kanopi, pagar engsel patah, dan servis las.',
      en: 'Nearby 24/7 call-out welder service for new fabrication, canopy repairs, broken gate hinges, and welding maintenance.',
    },
  },
  {
    slug: 'menara-tangki-air',
    name: 'Menara Tangki Air',
    category: 'Konstruksi',
    description: {
      id: 'Jasa pembuatan menara tangki air (toren) besi siku & besi hollow kokoh dan tahan gempa.',
      en: 'Custom fabrication of sturdy angle bar and hollow steel water tank (toren) towers.',
    },
  },
  {
    slug: 'pintu-henderson',
    name: 'Pintu Henderson',
    category: 'Pintu Garasi',
    description: {
      id: 'Pintu besi garasi sistem henderson geser & lipat heavy duty untuk rumah dan ruko.',
      en: 'Heavy duty henderson sliding & folding steel garage doors for residential and commercial buildings.',
    },
  },
]

export const getGeoTagBySlug = (slug: string): GeoLocationTag | undefined => {
  return GEO_TAGS.find((g) => g.slug === slug)
}

export const getProductTagBySlug = (slug: string): ProductTag | undefined => {
  return PRODUCT_TAGS.find((p) => p.slug === slug)
}

export const getAllTagSlugs = (): string[] => {
  return [...GEO_TAGS.map((g) => g.slug), ...PRODUCT_TAGS.map((p) => p.slug)]
}
