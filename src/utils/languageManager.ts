/**
 * Language management utility
 * Persists language preference across pages to maintain consistency
 * Supports: English (en), Indonesian (id), Arabic (ar)
 */

const LANGUAGE_STORAGE_KEY = 'mangala_lang_preference'

export type LanguageCode = 'id' | 'en' | 'ar'

/**
 * Get stored language preference from localStorage
 */
export const getStoredLanguage = (): LanguageCode | null => {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored === 'id' || stored === 'en' || stored === 'ar') {
      return stored as LanguageCode
    }
  } catch (error) {
    console.log('Failed to read language from localStorage')
  }
  return null
}

/**
 * Store language preference to localStorage
 */
export const storeLanguage = (lang: LanguageCode): void => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
  } catch (error) {
    console.log('Failed to store language to localStorage')
  }
}

/**
 * Detect language from various sources in priority order:
 * 1. URL query parameter (?lang=)
 * 2. URL path prefix (/id/, /eng/, /ar/)
 * 3. Stored preference in localStorage
 * 4. IP detection (Arabic-speaking countries)
 * 5. Browser language fallback
 */
export const detectLanguage = async (
  pathname: string,
  search: string
): Promise<LanguageCode> => {
  // 1) Check query parameter ?lang=
  const searchParams = new URLSearchParams(search)
  const langParam = searchParams.get('lang')
  if (langParam === 'id' || langParam === 'en' || langParam === 'ar') {
    storeLanguage(langParam as LanguageCode)
    return langParam as LanguageCode
  }

  // 2) Check URL for language prefix
  if (pathname.startsWith('/id') || pathname.startsWith('/id/')) {
    storeLanguage('id')
    return 'id'
  }
  if (pathname.startsWith('/eng') || pathname.startsWith('/eng/')) {
    storeLanguage('en')
    return 'en'
  }
  if (pathname.startsWith('/ar') || pathname.startsWith('/ar/')) {
    storeLanguage('ar')
    return 'ar'
  }

  // 3) Check stored preference
  const stored = getStoredLanguage()
  if (stored) {
    return stored
  }

  // 4) Detect from IP - Check for Arabic-speaking countries
  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    const countryCode = data.country_code
    
    // Arabic-speaking countries
    const arabicCountries = [
      'SA', 'AE', 'KW', 'QA', 'OM', 'BH', // Gulf countries
      'EG', 'JO', 'LB', 'SY', 'IQ', 'YE', // Levant & others
      'MA', 'DZ', 'TN', 'LY', 'SD', 'PS'  // North Africa
    ]
    
    if (arabicCountries.includes(countryCode)) {
      storeLanguage('ar')
      return 'ar'
    }
    
    if (countryCode === 'ID') {
      storeLanguage('id')
      return 'id'
    }
  } catch (error) {
    console.log('IP detection failed, checking browser language')
  }

  // 5) Fallback: check browser language
  const browserLang = navigator.language || navigator.languages?.[0]
  if (browserLang?.startsWith('id')) {
    storeLanguage('id')
    return 'id'
  }
  if (browserLang?.startsWith('ar')) {
    storeLanguage('ar')
    return 'ar'
  }

  // Default to English
  storeLanguage('en')
  return 'en'
}
