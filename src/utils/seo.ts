import { type LanguageCode } from './languageManager'

const BASE_URL = 'https://mangala-living.com'

const LANGUAGE_METADATA: Record<
  LanguageCode,
  { lang: string; locale: string; direction: 'ltr' | 'rtl'; hrefLang: string }
> = {
  id: { lang: 'id', locale: 'id_ID', direction: 'ltr', hrefLang: 'id-ID' },
  en: { lang: 'en', locale: 'en_US', direction: 'ltr', hrefLang: 'en' },
  ar: { lang: 'ar', locale: 'ar_SA', direction: 'rtl', hrefLang: 'ar' },
  zh: { lang: 'zh', locale: 'zh_CN', direction: 'ltr', hrefLang: 'zh-CN' },
  ja: { lang: 'ja', locale: 'ja_JP', direction: 'ltr', hrefLang: 'ja-JP' },
  es: { lang: 'es', locale: 'es_ES', direction: 'ltr', hrefLang: 'es-ES' },
  fr: { lang: 'fr', locale: 'fr_FR', direction: 'ltr', hrefLang: 'fr-FR' },
  ko: { lang: 'ko', locale: 'ko_KR', direction: 'ltr', hrefLang: 'ko-KR' }
}

const SUPPORTED_LANGUAGES = Object.keys(LANGUAGE_METADATA) as LanguageCode[]

const normalizePath = (path: string): string => {
  if (!path) return '/'
  const hasLeadingSlash = path.startsWith('/')
  let normalized = hasLeadingSlash ? path : `/${path}`

  // Remove duplicate trailing slashes except for root
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.replace(/\/+$/, '')
  }

  return normalized || '/'
}

// Remove language path prefixes from paths (e.g., /id/blog/post -> /blog/post)
const removeLanguagePrefix = (path: string): string => {
  const languagePrefixes = ['/id', '/eng', '/ar', '/zh', '/ja', '/es', '/fr', '/ko']
  
  for (const prefix of languagePrefixes) {
    // Handle /id/, /eng/, etc. (with trailing slash)
    if (path.startsWith(`${prefix}/`)) {
      return path.substring(prefix.length)
    }
    // Handle /id, /eng, etc. (without trailing slash, only if it's the full path)
    if (path === prefix) {
      return '/'
    }
  }
  
  return path
}

const buildUrlFromParams = (path: string, params: URLSearchParams): string => {
  const normalizedPath = normalizePath(path)
  const query = params.toString()
  return `${BASE_URL}${normalizedPath}${query ? `?${query}` : ''}`
}

// SEO utility functions for canonical URLs and hreflang
export const generateCanonicalUrl = (path: string, search: string = ''): string => {
  // Remove language prefix and parameters for canonical
  const cleanPath = removeLanguagePrefix(path)
  const params = new URLSearchParams(search)
  params.delete('lang') // Remove lang parameter from canonical
  return buildUrlFromParams(cleanPath, params)
}

export const generateLocalizedUrls = (pathname: string, search: string = '') => {
  // Remove language prefix from pathname for canonical URL
  const cleanPath = removeLanguagePrefix(pathname)
  
  // Canonical URL should always be without lang parameter and without language prefix
  const canonicalParams = new URLSearchParams(search)
  canonicalParams.delete('lang') // Remove lang parameter
  const canonical = buildUrlFromParams(cleanPath, canonicalParams)

  // For hreflang alternates, use clean path with lang parameter
  const buildLangUrl = (lang: LanguageCode) => {
    const params = new URLSearchParams()
    params.set('lang', lang)
    return buildUrlFromParams(cleanPath, params)
  }

  // x-default should point to clean path without lang parameter
  const xDefault = buildUrlFromParams(cleanPath, new URLSearchParams())

  return {
    canonical,
    alternates: [
      ...SUPPORTED_LANGUAGES.map((code) => ({
        hrefLang: LANGUAGE_METADATA[code].hrefLang,
        href: buildLangUrl(code)
      })),
      { hrefLang: 'x-default', href: xDefault }
    ]
  }
}

export const generateHreflangTags = (path: string, search: string = '') => {
  const defaultParams = new URLSearchParams(search)
  defaultParams.delete('lang')

  const buildLangUrl = (lang: LanguageCode) => {
    const params = new URLSearchParams(defaultParams)
    params.set('lang', lang)
    return buildUrlFromParams(path, params)
  }

  const entries = SUPPORTED_LANGUAGES.reduce<Record<string, string>>((acc, code) => {
    acc[LANGUAGE_METADATA[code].hrefLang] = buildLangUrl(code)
    return acc
  }, {})

  entries.default = buildUrlFromParams(path, defaultParams)
  return entries
}

export const generateLanguageSpecificMeta = (
  languageOrIndonesian: boolean | LanguageCode
) => {
  const language: LanguageCode =
    typeof languageOrIndonesian === 'boolean'
      ? (languageOrIndonesian ? 'id' : 'en')
      : languageOrIndonesian

  const metadata = LANGUAGE_METADATA[language] ?? LANGUAGE_METADATA.en

  return {
    locale: metadata.locale,
    lang: metadata.lang,
    direction: metadata.direction
  }
}

// Generate structured data with proper language
export const generateLocalizedStructuredData = (data: any, isIndonesian: boolean) => {
  return {
    ...data,
    inLanguage: isIndonesian ? 'id' : 'en',
    ...(data.name && { 
      name: isIndonesian ? data.name : data.name 
    }),
    ...(data.description && { 
      description: isIndonesian ? data.description : data.description 
    })
  }
}

// Mapping from product slug to image filename
const PRODUCT_IMAGE_MAP: { [key: string]: string } = {
  'frame-loft-bookshelf': 'frame-Loft-Bookshelf.webp',
  'balcony-bar-table': 'balcony-bar-table.webp',
  'bench-corner-lounge': 'Bench-corner-kursi-sudut-kursi-santai.webp',
  'industrial-daybed-frame': 'industrial-daybed-boneonly.webp',
  'bandung-pipe-dining-table': 'meja-industrial-mejamakan.webp',
  'dining-set-with-2-chairs': 'Meja-makan-industrial-150x60x90-2 kursi.webp',
  'beam-industrial-bar-chair': 'Kursi-Barstool-Besi-Behel.webp',
  'bar-stall-chair': 'Kursi-Bar-kursi-stall-chair.webp',
  'steelframe-outdoor-bar-set': 'Steelfram-Outdoor-Bar-Set.webp',
  'industrial-kitchen-cabinet': 'Kabinet-Industrial-Dapur.webp',
  'kabinet-lemari-industrial': 'Kabinet-Lemari-industrial.webp',
  'hollowline-display-rack': 'Hollowline-Display-Rack.webp',
  'ladder-frame-display-stand': 'rak-display-partisi-industrial-besi.webp',
  'industrial-hanging-shelf': 'rak-gantung-industrial.webp',
  'industrial-coat-rack': 'gantungan-baju-industrial.webp',
  'meja-kerja-industrial': 'Meja-Kerja-Rak-Meja-Belajar-custom.webp'
}

// Convert product image path to full URL
// This extracts the filename from webpack imported images or uses the image directly if it's already a URL
export const getProductImageUrl = (imagePath: string, slug?: string): string => {
  // If already a full URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  
  // Try to get filename from slug mapping first
  if (slug && PRODUCT_IMAGE_MAP[slug]) {
    return `https://mangala-living.com/assets/${PRODUCT_IMAGE_MAP[slug]}`
  }
  
  // Extract filename from webpack import path (e.g., /assets/frame-Loft-Bookshelf.webp)
  // or from relative paths
  let filename = ''
  
  if (imagePath.includes('/')) {
    filename = imagePath.split('/').pop() || ''
  } else {
    filename = imagePath
  }
  
  // If filename already includes extension, use it directly
  if (filename.includes('.')) {
    return `https://mangala-living.com/assets/${filename}`
  }
  
  // Fallback: try to construct from path
  if (imagePath.includes('assets')) {
    const parts = imagePath.split('assets')
    if (parts.length > 1) {
      const assetPath = parts[1].startsWith('/') ? parts[1] : `/${parts[1]}`
      return `https://mangala-living.com${assetPath}`
    }
  }
  
  // Default: assume it's in assets folder
  return `https://mangala-living.com/assets/${filename}`
}
