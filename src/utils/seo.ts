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
  
  // Ensure cleanPath is not empty - if it is, default to the pathname
  const finalPath = cleanPath || pathname || '/'
  
  // Get current language from search params
  const params = new URLSearchParams(search)
  
  // Canonical URL strategy:
  // Canonical should ALWAYS point to the page itself WITHOUT lang parameter
  // This ensures each page has its own canonical URL (not pointing to homepage)
  const canonicalParams = new URLSearchParams()
  // Preserve all query params EXCEPT lang
  params.forEach((value, key) => {
    if (key !== 'lang') {
      canonicalParams.set(key, value)
    }
  })
  const canonical = buildUrlFromParams(finalPath, canonicalParams)

  // For hreflang alternates, each language version should have its own URL with lang parameter
  // This ensures hreflang points to canonical URLs (each language version is its own canonical)
  const buildLangUrl = (lang: LanguageCode) => {
    const langParams = new URLSearchParams()
    // Preserve other query params but replace lang
    params.forEach((value, key) => {
      if (key !== 'lang') {
        langParams.set(key, value)
      }
    })
    langParams.set('lang', lang) // Set specific lang
    return buildUrlFromParams(finalPath, langParams)
  }

  // x-default should point to URL without lang parameter (default version)
  const xDefaultParams = new URLSearchParams()
  params.forEach((value, key) => {
    if (key !== 'lang') {
      xDefaultParams.set(key, value)
    }
  })
  const xDefault = buildUrlFromParams(finalPath, xDefaultParams)

  return {
    canonical,
    alternates: [
      ...SUPPORTED_LANGUAGES.map((code) => ({
        hrefLang: LANGUAGE_METADATA[code].hrefLang,
        href: buildLangUrl(code) // Each hreflang points to its language-specific URL with lang parameter
      })),
      { hrefLang: 'x-default', href: xDefault }
    ]
  }
}

export const generateHreflangTags = (path: string, search: string = '') => {
  const cleanPath = removeLanguagePrefix(path)
  const params = new URLSearchParams(search)
  
  // Build URL for each language version with lang parameter
  const buildLangUrl = (lang: LanguageCode) => {
    const langParams = new URLSearchParams(params)
    langParams.delete('lang')
    langParams.set('lang', lang)
    return buildUrlFromParams(cleanPath, langParams)
  }

  const entries = SUPPORTED_LANGUAGES.reduce<Record<string, string>>((acc, code) => {
    acc[LANGUAGE_METADATA[code].hrefLang] = buildLangUrl(code)
    return acc
  }, {})

  // x-default points to URL without lang parameter
  const defaultParams = new URLSearchParams(params)
  defaultParams.delete('lang')
  entries.default = buildUrlFromParams(cleanPath, defaultParams)
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

/**
 * Truncate title to optimal SEO length (50-60 characters)
 * Google typically displays 50-60 characters in search results
 */
export const truncateTitle = (title: string, maxLength: number = 60): string => {
  if (!title) return ''
  if (title.length <= maxLength) return title
  // Truncate at word boundary to avoid cutting words
  const truncated = title.substring(0, maxLength - 3).trim()
  const lastSpace = truncated.lastIndexOf(' ')
  if (lastSpace > 0 && lastSpace > maxLength - 20) {
    return truncated.substring(0, lastSpace) + '...'
  }
  return truncated + '...'
}

/**
 * Truncate meta description to optimal SEO length (120-160 characters)
 * Google typically displays 120-160 characters in search results
 */
export const truncateMetaDescription = (description: string, minLength: number = 120, maxLength: number = 160): string => {
  if (!description) return ''
  // If description is too short, pad it (if possible) or return as is
  if (description.length < minLength) return description
  // If description is within range, return as is
  if (description.length <= maxLength) return description
  // Truncate at word boundary
  const truncated = description.substring(0, maxLength - 3).trim()
  const lastSpace = truncated.lastIndexOf(' ')
  if (lastSpace > 0 && lastSpace > minLength) {
    return truncated.substring(0, lastSpace) + '...'
  }
  return truncated + '...'
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
