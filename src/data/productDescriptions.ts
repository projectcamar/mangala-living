import productDescriptions from './product-descriptions.json'
import type { LanguageCode } from '../utils/languageManager'

export type ProductDescription = {
  name: string
  caption: string
  shortCaption: string
  description: string
  metaDescription: string
  imageAlt: string
}

export type LocalizedProductDescriptions = {
  [key in LanguageCode]: ProductDescription
}

export const getProductDescription = (slug: string): LocalizedProductDescriptions | null => {
  // @ts-ignore
  return productDescriptions[slug] || null
}

export const getProductName = (slug: string, isIndonesian: boolean, language: LanguageCode = 'en'): string => {
  const desc = getProductDescription(slug)
  if (!desc) return ''

  // Try specific language first, fallback to English
  return desc[language]?.name || desc['en']?.name || ''
}

export const getProductImageAlt = (slug: string, isIndonesian: boolean, language: LanguageCode = 'en'): string => {
  const desc = getProductDescription(slug)
  if (!desc) return ''

  return desc[language]?.imageAlt || desc['en']?.imageAlt || ''
}

export const getProductImageCaption = (slug: string, isIndonesian: boolean, language: LanguageCode = 'en'): string => {
  const desc = getProductDescription(slug)
  if (!desc) return ''

  return desc[language]?.caption || desc['en']?.caption || ''
}
