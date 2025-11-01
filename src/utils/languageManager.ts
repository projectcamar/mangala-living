/**
 * Language management utility
 * Persists language preference across pages to maintain consistency
 */

const LANGUAGE_STORAGE_KEY = 'mangala_lang_preference'

/**
 * Get stored language preference from localStorage
 */
export const getStoredLanguage = (): 'id' | 'en' | null => {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored === 'id' || stored === 'en') {
      return stored
    }
  } catch (error) {
    console.log('Failed to read language from localStorage')
  }
  return null
}

/**
 * Store language preference to localStorage
 */
export const storeLanguage = (lang: 'id' | 'en'): void => {
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
 * 2. URL path prefix (/id/, /eng/)
 * 3. Stored preference in localStorage
 * 4. IP detection
 * 5. Browser language fallback
 */
export const detectLanguage = async (
  pathname: string,
  search: string
): Promise<'id' | 'en'> => {
  // 1) Check query parameter ?lang=
  const searchParams = new URLSearchParams(search)
  const langParam = searchParams.get('lang')
  if (langParam === 'id' || langParam === 'en') {
    storeLanguage(langParam)
    return langParam
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

  // 3) Check stored preference
  const stored = getStoredLanguage()
  if (stored) {
    return stored
  }

  // 4) Detect from IP
  try {
    const { detectUserCountry } = await import('./currencyConverter')
    const countryCode = await detectUserCountry()
    
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

  // Default to English
  storeLanguage('en')
  return 'en'
}
