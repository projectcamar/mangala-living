// Geolocation utility for detecting visitor's country based on IP address

export interface GeolocationData {
  country: string
  countryCode: string
  isIndonesia: boolean
}

/**
 * Detect visitor's location using IP-based geolocation
 * Returns Indonesia as default if detection fails
 */
export const detectVisitorLocation = async (): Promise<GeolocationData> => {
  try {
    // Check if we already have cached location data
    const cachedLocation = localStorage.getItem('mangala_visitor_location')
    const cachedTimestamp = localStorage.getItem('mangala_location_timestamp')
    
    // Cache for 24 hours
    if (cachedLocation && cachedTimestamp) {
      const age = Date.now() - parseInt(cachedTimestamp)
      const twentyFourHours = 24 * 60 * 60 * 1000
      
      if (age < twentyFourHours) {
        return JSON.parse(cachedLocation)
      }
    }

    // Try multiple free geolocation APIs with fallback
    let locationData: GeolocationData | null = null

    // Try ipapi.co first (100 requests per day free)
    try {
      const response = await fetch('https://ipapi.co/json/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })
      
      if (response.ok) {
        const data = await response.json()
        locationData = {
          country: data.country_name || 'Indonesia',
          countryCode: data.country_code || 'ID',
          isIndonesia: data.country_code === 'ID'
        }
      }
    } catch (error) {
      console.log('ipapi.co failed, trying fallback...')
    }

    // Fallback to ip-api.com (free, unlimited for non-commercial)
    if (!locationData) {
      try {
        const response = await fetch('http://ip-api.com/json/?fields=status,country,countryCode', {
          method: 'GET',
        })
        
        if (response.ok) {
          const data = await response.json()
          if (data.status === 'success') {
            locationData = {
              country: data.country || 'Indonesia',
              countryCode: data.countryCode || 'ID',
              isIndonesia: data.countryCode === 'ID'
            }
          }
        }
      } catch (error) {
        console.log('ip-api.com failed, using default...')
      }
    }

    // Default to Indonesia if all APIs fail
    if (!locationData) {
      locationData = {
        country: 'Indonesia',
        countryCode: 'ID',
        isIndonesia: true
      }
    }

    // Cache the result
    localStorage.setItem('mangala_visitor_location', JSON.stringify(locationData))
    localStorage.setItem('mangala_location_timestamp', Date.now().toString())

    return locationData
  } catch (error) {
    console.error('Error detecting location:', error)
    
    // Default to Indonesia on error
    return {
      country: 'Indonesia',
      countryCode: 'ID',
      isIndonesia: true
    }
  }
}

/**
 * Set language preference based on detected location
 * Indonesian visitors get 'id', Arabic-speaking countries get 'ar', Chinese-speaking get 'zh', Japanese get 'ja', others get 'en'
 */
export const setLanguagePreferenceByLocation = async (): Promise<'id' | 'en' | 'ar' | 'zh' | 'ja'> => {
  try {
    const locationData = await detectVisitorLocation()
    
    // Chinese-speaking countries/regions
    const chineseCountries = [
      'CN', // China
      'TW', // Taiwan
      'HK', // Hong Kong
      'SG', // Singapore
      'MO'  // Macau
    ]
    
    // Arabic-speaking countries
    const arabicCountries = [
      'SA', 'AE', 'KW', 'QA', 'OM', 'BH', // Gulf countries
      'EG', 'JO', 'LB', 'SY', 'IQ', 'YE', // Levant & others
      'MA', 'DZ', 'TN', 'LY', 'SD', 'PS'  // North Africa
    ]
    
    // Set language preference based on location
    let langPreference: 'id' | 'en' | 'ar' | 'zh' | 'ja' = 'en'
    
    if (locationData.isIndonesia) {
      langPreference = 'id'
    } else if (locationData.countryCode === 'JP') {
      langPreference = 'ja'
    } else if (chineseCountries.includes(locationData.countryCode)) {
      langPreference = 'zh'
    } else if (arabicCountries.includes(locationData.countryCode)) {
      langPreference = 'ar'
    }
    
    // Store in localStorage for catalog generator
    localStorage.setItem('mangala_lang_preference', langPreference)
    
    return langPreference
  } catch (error) {
    console.error('Error setting language preference:', error)
    
    // Default to English
    localStorage.setItem('mangala_lang_preference', 'en')
    return 'en'
  }
}
