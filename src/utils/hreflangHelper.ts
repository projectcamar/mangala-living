/**
 * Helper utility for generating hreflang tags for multilingual SEO
 * Ensures proper indexing of both Indonesian and English versions
 */

export interface HreflangUrls {
  id: string
  en: string
  default: string
}

/**
 * Generate hreflang URLs for a given path
 * @param path - The current page path (without language prefix)
 * @returns Object with id, en, and default URLs
 */
export const generateHreflangUrls = (path: string): HreflangUrls => {
  const baseUrl = 'https://mangala-living.com'
  
  // Clean the path (remove language prefixes if any)
  let cleanPath = path
  if (path.startsWith('/id/') || path.startsWith('/eng/')) {
    cleanPath = path.substring(4)
  } else if (path === '/id' || path === '/eng') {
    cleanPath = '/'
  } else if (path.startsWith('/id') || path.startsWith('/eng')) {
    cleanPath = path.substring(3)
  }
  
  // Ensure path starts with /
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath
  }
  
  return {
    id: `${baseUrl}/id${cleanPath === '/' ? '' : cleanPath}`,
    en: `${baseUrl}/eng${cleanPath === '/' ? '' : cleanPath}`,
    default: `${baseUrl}${cleanPath}`
  }
}

/**
 * Generate hreflang React link elements for Helmet
 * @param path - The current page path
 * @returns Array of React link elements
 */
export const generateHreflangElements = (path: string) => {
  const urls = generateHreflangUrls(path)
  return [
    <link key="hreflang-id" rel="alternate" hrefLang="id" href={urls.id} />,
    <link key="hreflang-en" rel="alternate" hrefLang="en" href={urls.en} />,
    <link key="hreflang-default" rel="alternate" hrefLang="x-default" href={urls.default} />
  ]
}
