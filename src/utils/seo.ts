// SEO utility functions for canonical URLs and hreflang
export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://mangala-living.com'
  
  // Remove language prefixes for canonical URLs
  let cleanPath = path
  if (path.startsWith('/id/') || path.startsWith('/eng/')) {
    cleanPath = path.substring(4) // Remove /id/ or /eng/
  } else if (path === '/id' || path === '/eng') {
    cleanPath = '/'
  } else if (path.startsWith('/id') || path.startsWith('/eng')) {
    cleanPath = path.substring(3) // Remove /id or /eng
  }
  
  return `${baseUrl}${cleanPath}`
}

export const generateHreflangTags = (currentPath: string) => {
  const baseUrl = 'https://mangala-living.com'
  
  // Clean the current path
  let cleanPath = currentPath
  if (currentPath.startsWith('/id/') || currentPath.startsWith('/eng/')) {
    cleanPath = currentPath.substring(4)
  } else if (currentPath === '/id' || currentPath === '/eng') {
    cleanPath = '/'
  } else if (currentPath.startsWith('/id') || currentPath.startsWith('/eng')) {
    cleanPath = currentPath.substring(3)
  }
  
  return {
    id: `${baseUrl}/id${cleanPath === '/' ? '' : cleanPath}`,
    en: `${baseUrl}/eng${cleanPath === '/' ? '' : cleanPath}`,
    default: `${baseUrl}${cleanPath}`
  }
}

export const generateLanguageSpecificMeta = (isIndonesian: boolean) => {
  return {
    locale: isIndonesian ? 'id_ID' : 'en_US',
    lang: isIndonesian ? 'id' : 'en',
    direction: 'ltr' // Both Indonesian and English are LTR
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
