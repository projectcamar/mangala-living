/**
 * Currency conversion utilities
 * Converts IDR to USD based on current exchange rate
 */

// English-speaking countries that should see USD conversion
const ENGLISH_SPEAKING_COUNTRIES = [
  'US', 'GB', 'CA', 'AU', 'NZ', 'IE', 'ZA', 'SG', 'MY', 'PH',
  'IN', 'PK', 'BD', 'LK', 'KE', 'NG', 'GH', 'TZ', 'UG', 'ZM',
  'ZW', 'BW', 'LS', 'MW', 'NA', 'SZ', 'BB', 'BS', 'BZ', 'DM',
  'GD', 'GY', 'JM', 'KN', 'LC', 'VC', 'AG', 'TT', 'FJ', 'PG',
  'SB', 'VU', 'MH', 'FM', 'PW', 'WS', 'TO', 'TV', 'KI', 'NR'
]

/**
 * Check if country code is English-speaking
 */
export const isEnglishSpeakingCountry = (countryCode: string | undefined | null): boolean => {
  if (!countryCode) return false
  return ENGLISH_SPEAKING_COUNTRIES.includes(countryCode.toUpperCase())
}

/**
 * Get USD to IDR exchange rate
 * Using a conservative estimate (can be updated with API call later)
 * Current approximate rate: ~15,000 IDR = 1 USD
 */
let cachedExchangeRate: number | null = null

export const getExchangeRate = async (): Promise<number> => {
  if (cachedExchangeRate) {
    return cachedExchangeRate
  }

  try {
    // Try to fetch current exchange rate from a free API
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
    const data = await response.json()
    if (data.rates && data.rates.IDR) {
      cachedExchangeRate = data.rates.IDR
      return cachedExchangeRate
    }
  } catch (error) {
    console.log('Failed to fetch exchange rate, using default')
  }

  // Fallback to default rate if API fails
  cachedExchangeRate = 15000
  return cachedExchangeRate
}

/**
 * Convert IDR price to USD
 */
export const convertIDRToUSD = async (idrPrice: string): Promise<string> => {
  // Extract numeric value from price string (e.g., "Rp 2.500.000" -> 2500000)
  const numericValue = parseFloat(
    idrPrice
      .replace(/[^\d.,]/g, '')
      .replace(/\./g, '')
      .replace(',', '.')
  )

  if (isNaN(numericValue) || numericValue === 0) {
    return 'N/A'
  }

  const exchangeRate = await getExchangeRate()
  const usdPrice = numericValue / exchangeRate

  // Format to 2 decimal places
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(usdPrice)
}

/**
 * Detect user's country from IP
 */
export const detectUserCountry = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    return data.country_code || null
  } catch (error) {
    console.log('Failed to detect country from IP')
    return null
  }
}
