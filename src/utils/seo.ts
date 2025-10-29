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
