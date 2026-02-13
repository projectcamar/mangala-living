/**
 * Multi-Language Product Descriptions and Captions
 * SEO-friendly descriptions in 8 languages
 */

// @ts-ignore
import productDescriptionsData from './product-descriptions.json';

interface LanguageContent {
  name: string
  caption: string
  shortCaption: string
  description: string
  metaDescription: string
  imageAlt: string
  dimensions?: string
  details?: string[]
}

export interface MultiLanguageDescription {
  en: LanguageContent
  id: LanguageContent
  ar?: LanguageContent
  zh?: LanguageContent
  ja?: LanguageContent
  es?: LanguageContent
  fr?: LanguageContent
  ko?: LanguageContent
}

// Keep backward compatibility
export type DualLanguageDescription = MultiLanguageDescription

export const PRODUCT_DESCRIPTIONS: Record<string, MultiLanguageDescription> = productDescriptionsData;

/**
 * Get multi-language description for a product by slug
 */
export const getProductDescription = (slug: string): MultiLanguageDescription | null => {
  const desc = PRODUCT_DESCRIPTIONS[slug]
  if (!desc) return null
  return desc
}

/**
 * Get caption for product image (SEO-friendly multi-language)
 */
export const getProductImageCaption = (slug: string, isIndonesian: boolean, language?: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'): string => {
  const desc = getProductDescription(slug)
  const lang = language || (isIndonesian ? 'id' : 'en')

  if (!desc) {
    // Fallback to generic caption
    const fallbacks: Record<string, string> = {
      en: 'Premium Industrial Furniture from Mangala Living Workshop Bekasi',
      id: 'Furniture Industrial Premium dari Mangala Living Workshop Bekasi',
      ar: 'أثاث صناعي مميز من ورشة Mangala Living بيكاسي',
      zh: 'Mangala Living勿加泗车间的优质工业家具',
      ja: 'Mangala Livingブカシワークショップのプレミアム工業用家具',
      es: 'Mobiliario Industrial Premium del Taller Mangala Living Bekasi',
      fr: 'Mobilier Industriel Premium de l\'Atelier Mangala Living Bekasi',
      ko: 'Mangala Living 브카시 워크숍의 프리미엄 인더스트리얼 가구'
    }
    return fallbacks[lang] || fallbacks.en
  }
  // @ts-ignore
  return desc[lang]?.caption || desc.en.caption
}

/**
 * Get short caption for product image (for alt text)
 */
export const getProductImageAlt = (slug: string, isIndonesian: boolean, language?: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'): string => {
  const desc = getProductDescription(slug)
  const lang = language || (isIndonesian ? 'id' : 'en')

  if (!desc) {
    // Fallback to generic alt
    const fallbacks: Record<string, string> = {
      en: 'Premium Industrial Furniture from Mangala Living',
      id: 'Furniture Industrial Premium dari Mangala Living',
      ar: 'أثاث صناعي مميز من Mangala Living',
      zh: 'Mangala Living的优质工业家具',
      ja: 'Mangala Livingのプレミアム工業用家具',
      es: 'Mobiliario Industrial Premium de Mangala Living',
      fr: 'Mobilier Industriel Premium de Mangala Living',
      ko: 'Mangala Living의 프리미엄 인더스트리얼 가구'
    }
    return fallbacks[lang] || fallbacks.en
  }
  // @ts-ignore
  return desc[lang]?.imageAlt || desc.en.imageAlt
}

/**
 * Get translated product name
 */
export const getProductName = (slug: string, isIndonesian: boolean, language?: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'): string => {
  const desc = getProductDescription(slug)
  const lang = language || (isIndonesian ? 'id' : 'en')

  if (!desc) {
    // Fallback - get name from products.ts
    return ''
  }
  // @ts-ignore
  return desc[lang]?.name || desc.en.name
}
