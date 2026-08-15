/**
 * Programmatic SEO & Search Intelligence Matrix Engine (pseoMatrix.ts)
 * 
 * Dynamically resolves search queries and permalinks into rich, high-converting,
 * data-rich landing experiences for Mangala Living.
 */

import { ALL_PRODUCTS, type Product } from './products'
import { STEEL_SERVICES, type SteelService } from './steelServices'

export type LanguageCode = 'id' | 'en' | 'es' | 'ar' | 'zh' | 'ja' | 'fr' | 'ko'

export interface PSEOIntentData {
  slug: string
  categoryKey: string
  categoryName: { id: string; en: string; es: string; ar: string; zh: string; ja: string; fr: string; ko: string }
  materialKey?: string
  materialName?: string
  styleKey?: string
  styleName?: string
  locationKey?: string
  locationName?: string
  
  metaTitle: { [key in LanguageCode]: string }
  metaDescription: { [key in LanguageCode]: string }
  heroTitle: { [key in LanguageCode]: string }
  heroSubtitle: { [key in LanguageCode]: string }
  
  estimatedPriceMin: number // in IDR per m² or unit
  estimatedPriceMax: number
  priceUnit: string
  
  specs: Array<{ label: { id: string; en: string }; value: string }>
  faqs: Array<{ q: { [key in LanguageCode]: string }; a: { [key in LanguageCode]: string } }>
  
  matchedProducts: Product[]
  matchedServices: SteelService[]
}

// ─── TAXONOMY DEFINITIONS ──────────────────────────────────────────────────

export const PSEO_CATEGORIES = [
  { key: 'pagar', id: 'Pagar Besi', en: 'Steel Fence & Gate', keywords: ['pagar', 'fence', 'gate', 'pintu pagar'] },
  { key: 'kanopi', id: 'Kanopi Besi', en: 'Steel Canopy', keywords: ['kanopi', 'canopy', 'carport', 'atap'] },
  { key: 'railing', id: 'Railing Tangga & Balkon', en: 'Stair & Balcony Railing', keywords: ['railing', 'balustrade', 'handrail', 'balkon'] },
  { key: 'teralis', id: 'Teralis Jendela & Pintu', en: 'Window & Door Grilles', keywords: ['teralis', 'grille', 'pengaman jendela'] },
  { key: 'tangga', id: 'Tangga Besi & Spiral', en: 'Steel Staircase', keywords: ['tangga', 'staircase', 'tangga putar', 'tangga melayang'] },
  { key: 'folding-gate', id: 'Folding Gate & Pintu Lipat', en: 'Folding Gate', keywords: ['folding gate', 'pintu lipat', 'pintu besi toko'] },
  { key: 'besi-tempa', id: 'Besi Tempa Custom (Wrought Iron)', en: 'Custom Wrought Iron', keywords: ['besi tempa', 'wrought iron', 'ornamental', 'villa gate'] },
  { key: 'mezzanine', id: 'Mezzanine Besi', en: 'Steel Mezzanine Floor', keywords: ['mezzanine', 'lantai mezzanine', 'rangka mezzanine'] },
]

export const PSEO_MATERIALS = [
  { key: 'besi-hollow', id: 'Besi Hollow Galvalum/Hitam', en: 'Hollow Steel', priceMin: 450000, priceMax: 850000 },
  { key: 'polycarbonate', id: 'Atap Polycarbonate', en: 'Polycarbonate Roofing', priceMin: 750000, priceMax: 1200000 },
  { key: 'alderon', id: 'Atap Alderon Double Layer', en: 'Alderon UPVC Roofing', priceMin: 850000, priceMax: 1400000 },
  { key: 'stainless', id: 'Stainless Steel 304', en: 'Stainless Steel 304', priceMin: 1200000, priceMax: 2500000 },
  { key: 'besi-tempa-solid', id: 'Besi Tempa Solid Handmade', en: 'Solid Wrought Iron', priceMin: 1800000, priceMax: 4500000 },
  { key: 'woodplank', id: 'Kombinasi Woodplank / Motif Kayu', en: 'Woodplank Steel Combo', priceMin: 650000, priceMax: 1100000 },
]

export const PSEO_STYLES = [
  { key: 'minimalis', id: 'Minimalis Modern', en: 'Modern Minimalist' },
  { key: 'industrial', id: 'Industrial Loft', en: 'Industrial Loft' },
  { key: 'klasik', id: 'Klasik Ornamental', en: 'Classic Ornamental' },
  { key: 'bali-heritage', id: 'Bali Heritage / Villa Luxury', en: 'Balinese Heritage Villa' },
]

export const PSEO_LOCATIONS = [
  { key: 'bekasi', id: 'Bekasi', en: 'Bekasi', desc: 'Melayani area Bekasi, Grand Wisata, Summarecon, Harapan Indah, Cibitung, Setu' },
  { key: 'cikarang', id: 'Cikarang', en: 'Cikarang', desc: 'Melayani kawasan industri Jababeka, EJIP, MM2100, Delta Silicon, Lippo Cikarang' },
  { key: 'cibubur', id: 'Cibubur', en: 'Cibubur', desc: 'Melayani Kota Wisata, Legenda Wisata, Raffles Hills, Cibubur Residence' },
  { key: 'jakarta', id: 'Jakarta', en: 'Jakarta', desc: 'Melayani Jakarta Timur, Jakarta Selatan, Jakarta Pusat, Jakarta Utara, Jakarta Barat' },
  { key: 'depok', id: 'Depok', en: 'Depok', desc: 'Melayani Margonda, Cinere, Sawangan, Cimanggis Depok' },
  { key: 'tangerang', id: 'Tangerang', en: 'Tangerang', desc: 'Melayani BSD City, Gading Serpong, Bintaro, Karawaci Tangerang' },
  { key: 'bogor', id: 'Bogor', en: 'Bogor', desc: 'Melayani Bogor Kota, Sentul City, Cibinong' },
  { key: 'bali', id: 'Bali', en: 'Bali', desc: 'Melayani Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua Villa & Resort' },
  { key: 'australia', id: 'Australia (Export)', en: 'Australia (Export)', desc: 'Export shipping & custom packing for Sydney, Melbourne, Brisbane, Perth' },
  { key: 'singapore', id: 'Singapore (Export)', en: 'Singapore (Export)', desc: 'Export supply for Singapore landed properties & boutique hotels' },
  { key: 'uae', id: 'UAE & Middle East (Export)', en: 'UAE & Middle East (Export)', desc: 'Palace & luxury villa wrought iron gates export for Dubai, Abu Dhabi, Qatar' },
  { key: 'usa', id: 'USA & North America (Export)', en: 'USA & North America (Export)', desc: 'Export packaging for California, Florida, New York luxury estates' },
]

// ─── POPULAR PROGRAMMATIC PERMALINKS ──────────────────────────────────────────

export const POPULAR_PSEO_SLUGS = [
  'pagar-besi-minimalis-bekasi',
  'kanopi-polycarbonate-bekasi',
  'kanopi-alderon-bekasi',
  'teralis-jendela-bekasi',
  'railing-tangga-industrial-bekasi',
  'tangga-putar-besi-bekasi',
  'folding-gate-cikarang',
  'pagar-besi-tempa-bali',
  'kanopi-carport-minimalis-jakarta',
  'mezzanine-besi-bekasi',
  'bengkel-las-grand-wisata-bekasi',
  'wrought-iron-gate-export-australia',
  'wrought-iron-fence-export-singapore',
  'luxury-villa-gate-export-uae',
  'pagar-besi-woodplank-cibubur',
]

// ─── RESOLVER ENGINE FUNCTION ───────────────────────────────────────────────

export function resolvePSEOSlug(queryOrSlug: string): PSEOIntentData {
  const cleanInput = queryOrSlug.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/[\s_]+/g, '-')

  // 1. Identify Category
  let categoryObj = PSEO_CATEGORIES.find(c => cleanInput.includes(c.key)) || PSEO_CATEGORIES[0]
  for (const c of PSEO_CATEGORIES) {
    if (c.keywords.some(kw => cleanInput.includes(kw))) {
      categoryObj = c; break
    }
  }

  // 2. Identify Material
  const materialObj = PSEO_MATERIALS.find(m => cleanInput.includes(m.key) || cleanInput.includes(m.id.toLowerCase()))

  // 3. Identify Style
  const styleObj = PSEO_STYLES.find(s => cleanInput.includes(s.key) || cleanInput.includes(s.id.toLowerCase()))

  // 4. Identify Location
  const locationObj = PSEO_LOCATIONS.find(l => cleanInput.includes(l.key) || cleanInput.includes(l.id.toLowerCase()))

  // Format Names
  const catTitleId = categoryObj.id
  const matTitleId = materialObj ? ` ${materialObj.id}` : ''
  const styleTitleId = styleObj ? ` ${styleObj.id}` : ''
  const locTitleId = locationObj ? ` ${locationObj.id}` : 'Bekasi & Jabodetabek'

  const catTitleEn = categoryObj.en
  const matTitleEn = materialObj ? ` ${materialObj.en}` : ''
  const styleTitleEn = styleObj ? ` ${styleObj.en}` : ''
  const locTitleEn = locationObj ? ` ${locationObj.en}` : 'Indonesia & Export'

  // Estimate price ranges
  const minP = materialObj ? materialObj.priceMin : 500000
  const maxP = materialObj ? materialObj.priceMax : 1500000

  // Filter Matching Products
  const matchedProducts = ALL_PRODUCTS.filter(p => {
    const pName = p.name.toLowerCase()
    const pCats = p.categories.map(c => c.toLowerCase()).join(' ')
    return pName.includes(categoryObj.key) || pCats.includes(categoryObj.key) || pCats.includes('wrought iron')
  }).slice(0, 6)

  // Filter Matching Services
  const matchedServices = STEEL_SERVICES.filter(s => {
    return s.slug.includes(categoryObj.key) || s.keywords.some(k => k.includes(categoryObj.key))
  }).slice(0, 4)

  return {
    slug: cleanInput,
    categoryKey: categoryObj.key,
    categoryName: {
      id: categoryObj.id,
      en: categoryObj.en,
      es: categoryObj.en,
      ar: categoryObj.en,
      zh: categoryObj.en,
      ja: categoryObj.en,
      fr: categoryObj.en,
      ko: categoryObj.en
    },
    materialKey: materialObj?.key,
    materialName: materialObj?.id,
    styleKey: styleObj?.key,
    styleName: styleObj?.id,
    locationKey: locationObj?.key,
    locationName: locationObj?.id,

    metaTitle: {
      id: `Jasa ${catTitleId}${matTitleId}${styleTitleId} ${locTitleId} | Mangala Living`,
      en: `Custom ${catTitleEn}${matTitleEn}${styleTitleEn} ${locTitleEn} | Mangala Living`,
      es: `Fabricación de ${catTitleEn}${matTitleEn} ${locTitleEn} | Mangala Living`,
      ar: `تصنيع ${catTitleEn} مخصص ${locTitleEn} | Mangala Living`,
      zh: `定制 ${catTitleEn}${matTitleEn} ${locTitleEn} | Mangala Living`,
      ja: `カスタム ${catTitleEn}${matTitleEn} ${locTitleEn} | Mangala Living`,
      fr: `Fabrication Sur Mesure ${catTitleEn} ${locTitleEn} | Mangala Living`,
      ko: `맞춤형 ${catTitleEn}${matTitleEn} ${locTitleEn} | Mangala Living`,
    },

    metaDescription: {
      id: `Jasa pembuatan dan pemasangan ${catTitleId}${matTitleId}${styleTitleId} profesional di ${locTitleId}. Material berkualitas, garansi 1 tahun, finishing powder coating. Hubungi WhatsApp +6288801146881.`,
      en: `Professional custom fabrication and installation of ${catTitleEn}${matTitleEn} in ${locTitleEn}. High quality materials, 1-year warranty, factory direct. WhatsApp +6288801146881.`,
      es: `Servicio profesional de fabricación e instalación de ${catTitleEn} en ${locTitleEn}. Materiales de calidad, 1 año de garantía. WhatsApp +6288801146881.`,
      ar: `خدمات تصنيع وتركيب احترافية لـ ${catTitleEn} في ${locTitleEn}. مواد عالية الجودة وضمان سنة واحدة.`,
      zh: `在 ${locTitleEn} 专业的 ${catTitleEn} 定制制造与安装服务。优质材料，1年质保，工厂直销。`,
      ja: `${locTitleEn} での専門的な ${catTitleEn} のカスタム製造・施工サービス。高品質素材、1年保証。`,
      fr: `Service professionnel de fabrication et d'installation de ${catTitleEn} à ${locTitleEn}. Garantie 1 ans.`,
      ko: `${locTitleEn} 에서의 전문적인 ${catTitleEn} 맞춤 제작 및 설치 서비스. 1년 보증, 공장 직판.`,
    },

    heroTitle: {
      id: `${catTitleId}${matTitleId}${styleTitleId}`,
      en: `${catTitleEn}${matTitleEn}${styleTitleEn}`,
      es: `${catTitleEn}${matTitleEn}`,
      ar: `${catTitleEn}`,
      zh: `${catTitleEn}${matTitleEn}`,
      ja: `${catTitleEn}${matTitleEn}`,
      fr: `${catTitleEn}`,
      ko: `${catTitleEn}${matTitleEn}`,
    },

    heroSubtitle: {
      id: `Jasa pembuatan & pemasangan custom untuk wilayah ${locTitleId} dan sekitarnya. Pilihan material terbaik, dilapisi cat powder coat anti-karat, dikerjakan oleh teknisi berpengalaman sejak 1999.`,
      en: `Custom manufacturing & installation serving ${locTitleEn} and nearby destinations. Built with premium materials, weather-shield powder coat finish, crafted by experienced master welders since 1999.`,
      es: `Fabricación e instalación personalizada para ${locTitleEn}. Construido con materiales premium y acabado resistente al clima.`,
      ar: `تصنيع وتركيب مخصص لمنطقة ${locTitleEn}. مجهزة بمواد فاخرة وطلاء مقاوم للعوامل الجوية.`,
      zh: `为 ${locTitleEn} 地区提供专业定制制造与安装服务。采用优质材料，耐候粉末涂层，自1999年经验丰富的技师制作。`,
      ja: `${locTitleEn} 向けカスタム製造＆施工サービス。高品質素材と屋外対応粉体塗装で仕上げ、1999年創業の熟練職人が施工。`,
      fr: `Fabrication et installation sur mesure pour la région de ${locTitleEn}. Matériaux premium et finition haute résistance.`,
      ko: `${locTitleEn} 지역을 위한 맞춤형 제작 및 설치 서비스. 프리미엄 재료와 분체 도장 마감, 1999년부터의 숙련된 기술자 시공.`,
    },

    estimatedPriceMin: minP,
    estimatedPriceMax: maxP,
    priceUnit: 'm²',

    specs: [
      { label: { id: 'Ketebalan Rangka', en: 'Frame Thickness' }, value: '1.2mm - 2.0mm Solid Steel' },
      { label: { id: 'Finishing Anti Karat', en: 'Anti-Rust Coating' }, value: 'Epoxy Zinc Primer + Powder Coating / Hot-Dip Galvanized' },
      { label: { id: 'Garansi Pekerjaan', en: 'Warranty' }, value: '1 Tahun Full Garansi Struktur & Las' },
      { label: { id: 'Estimasi Pengerjaan', en: 'Production Lead Time' }, value: '3 - 7 Hari Kerja' },
      { label: { id: 'Layanan Tambahan', en: 'Included Services' }, value: 'Gratis Survei Lokasi & Gambar Desain CAD' },
    ],

    faqs: [
      {
        q: {
          id: `Berapa estimasi biaya pembuatan ${catTitleId} di ${locTitleId}?`,
          en: `What is the estimated cost of ${catTitleEn} in ${locTitleEn}?`,
          es: `¿Cuál es el costo estimado de ${catTitleEn} en ${locTitleEn}?`,
          ar: `ما هي التكلفة المقدرة لـ ${catTitleEn} في ${locTitleEn}؟`,
          zh: `在 ${locTitleEn} 制作 ${catTitleEn} 的预估费用是多少？`,
          ja: `${locTitleEn} での ${catTitleEn} の概算費用はいくらですか？`,
          fr: `Quel est le coût estimé de ${catTitleEn} à ${locTitleEn}?`,
          ko: `${locTitleEn} 에서 ${catTitleEn} 제작 예상 비용은 얼마인가요?`,
        },
        a: {
          id: `Harga pembuatan ${catTitleId} berkisar antara Rp ${minP.toLocaleString('id-ID')} hingga Rp ${maxP.toLocaleString('id-ID')} per m², tergantung pada pilihan spesifikasi material (hollow, polycarbonate, alderon, besi tempa solid), ketebalan, dan tingkat kerumitan desain.`,
          en: `The cost ranges from IDR ${minP.toLocaleString()} to IDR ${maxP.toLocaleString()} per m², depending on material specifications (hollow steel, polycarbonate, alderon, solid wrought iron), thickness, and design complexity.`,
          es: `El costo oscila entre IDR ${minP.toLocaleString()} e IDR ${maxP.toLocaleString()} por m², según el material y la complejidad del diseño.`,
          ar: `تتراوح التكلفة بين IDR ${minP.toLocaleString()} و IDR ${maxP.toLocaleString()} لكل متر مربع حسب المواصفات والتصميم.`,
          zh: `费用约为每平方米 IDR ${minP.toLocaleString()} 至 IDR ${maxP.toLocaleString()}，具体取决于材料规格（空心钢、聚碳酸酯、Alderon、实心锻铁）、厚度和设计复杂程度。`,
          ja: `費用は素材の仕様（中空スチール、ポリカーボネート、アルデロン、無垢錬鉄）、厚み、デザインの複雑さにより、1m²あたり IDR ${minP.toLocaleString()} 〜 IDR ${maxP.toLocaleString()} となります。`,
          fr: `Le coût varie de IDR ${minP.toLocaleString()} à IDR ${maxP.toLocaleString()} par m² selon les matériaux et la complexité du design.`,
          ko: `비용은 재료 사양(중공 강철, 폴리카보네이트, 알데론, 단조철), 두께 및 디자인 복잡성에 따라 m²당 IDR ${minP.toLocaleString()} ~ IDR ${maxP.toLocaleString()} 입니다.`,
        },
      },
      {
        q: {
          id: `Apakah Mangala Living menyediakan survei lokasi gratis?`,
          en: `Does Mangala Living offer free site surveys?`,
          es: `¿Mangala Living ofrece inspección gratuita en el sitio?`,
          ar: `هل تقدم Mangala Living مسحاً مجانياً للموقع؟`,
          zh: `Mangala Living 提供免费现场勘查吗？`,
          ja: `Mangala Living は無料現地調査を提供していますか？`,
          fr: `Mangala Living propose-t-il des visites gratuites du site?`,
          ko: `Mangala Living은 무료 현장 조사를 제공하나요?`,
        },
        a: {
          id: `Ya! Untuk wilayah ${locTitleId} dan sekitarnya, tim kami menyediakan layanan survei lokasi, pengukuran presisi, dan konsultasi desain secara GRATIS tanpa dipungut biaya.`,
          en: `Yes! For ${locTitleEn} and nearby areas, our engineering team provides FREE site surveys, precision measurements, and design consultations with no obligation.`,
          es: `¡Sí! Para ${locTitleEn} y zonas cercanas, nuestro equipo ofrece inspección de sitio y medición GRATIS.`,
          ar: `نعم! لمنطقة ${locTitleEn} والمناطق المجاورة، يقدم فريقنا الهندسي مسحاً مجانياً للموقع وقياسات دقيقة.`,
          zh: `是的！对于 ${locTitleEn} 及周边地区，我们的工程团队提供免费现场勘查、精密测量和设计咨询。`,
          ja: `はい！ ${locTitleEn} および周辺地域向けに、当社のエンジニアリングチームが無料現地調査、精密採寸、デザイン相談を無料で実施しています。`,
          fr: `Oui! Pour la région de ${locTitleEn}, notre équipe d'ingénieurs propose des visites de site et des relevés de mesures GRATUITS.`,
          ko: `네! ${locTitleEn} 및 인근 지역의 경우 당사 엔지니어링 팀이 무료 현장 조사, 정밀 실측 및 디자인 상담을 부담 없이 제공합니다.`,
        },
      },
    ],

    matchedProducts,
    matchedServices,
  }
}
