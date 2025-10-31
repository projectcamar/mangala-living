// Advanced SEO Enhancement Utilities for Mangala Living
// Optimized for Google Page 1 Ranking

/**
 * Generate comprehensive LocalBusiness schema with E-E-A-T signals
 * E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness
 */
export const generateEnhancedOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mangala Living",
    "alternateName": [
      "Mangala Living Furniture",
      "Mangala Furniture Industrial",
      "Workshop Furniture Besi Bekasi"
    ],
    "url": "https://mangala-living.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mangala-living.com/logo.png",
      "width": 250,
      "height": 60
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://mangala-living.com/og-image.jpg",
      "width": 1200,
      "height": 630
    },
    "description": "Mangala Living adalah manufacturer furniture industrial besi custom terpercaya di Bekasi sejak 1999. Spesialis furniture cafe, restoran, hotel, dan kantor dengan pengalaman 25+ tahun dan 1000+ klien puas di seluruh Indonesia.",
    "foundingDate": "1999-01-01",
    "foundingLocation": {
      "@type": "Place",
      "name": "Bekasi, Indonesia"
    },
    "founder": {
      "@type": "Person",
      "name": "Mangala Living Founders",
      "jobTitle": "Furniture Manufacturer & Designer"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 50,
      "minValue": 40,
      "maxValue": 60
    },
    "slogan": "Premium Industrial Furniture Manufacturer Since 1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Setu Cibitung - Bekasi, Telajung",
      "addressLocality": "Bekasi",
      "addressRegion": "Jawa Barat",
      "postalCode": "17320",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2088,
      "longitude": 107.1602
    },
    "telephone": "+62-852-1207-8467",
    "email": "info@mangala-living.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+62-852-1207-8467",
        "contactType": "customer service",
        "email": "info@mangala-living.com",
        "availableLanguage": ["Indonesian", "English"],
        "areaServed": ["ID"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+62-852-1207-8467",
        "contactType": "sales",
        "email": "sales@mangala-living.com",
        "availableLanguage": ["Indonesian", "English"],
        "areaServed": ["ID"]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/mangalaliving",
      "https://www.facebook.com/mangalaliving",
      "https://wa.me/6285212078467"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia",
      "geo": {
        "@type": "GeoShape",
        "addressCountry": "ID"
      }
    },
    "knowsAbout": [
      "Industrial Furniture Manufacturing",
      "Custom Steel Furniture Design",
      "Commercial Furniture Production",
      "Cafe Furniture Installation",
      "Restaurant Furniture Design",
      "Hotel Furniture Manufacturing",
      "Powder Coating Technology",
      "Steel Welding Techniques",
      "Interior Design Consultation"
    ],
    "award": [
      "1000+ Satisfied Clients Since 1999",
      "25+ Years Industry Experience",
      "Premium Quality Manufacturing"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "brand": {
      "@type": "Brand",
      "name": "Mangala Living",
      "logo": "https://mangala-living.com/logo.png",
      "slogan": "Premium Industrial Furniture Since 1999"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Industrial Furniture Manufacturing",
          "description": "Jasa pembuatan furniture industrial custom dengan desain unik dan material berkualitas tinggi",
          "serviceType": "Manufacturing",
          "provider": {
            "@type": "Organization",
            "name": "Mangala Living"
          }
        }
      },
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR",
        "itemOffered": {
          "@type": "Service",
          "name": "Furniture Design Consultation",
          "description": "Konsultasi gratis untuk desain furniture industrial sesuai kebutuhan bisnis Anda",
          "serviceType": "Consultation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Installation & Delivery Service",
          "description": "Layanan instalasi dan pengiriman furniture ke seluruh Indonesia",
          "serviceType": "Delivery",
          "areaServed": {
            "@type": "Country",
            "name": "Indonesia"
          }
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Furniture Collection 2025",
      "description": "Koleksi lengkap furniture industrial untuk cafe, restoran, hotel, dan kantor"
    }
  }
}

/**
 * Generate BreadcrumbList schema for better navigation
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://mangala-living.com${item.url}`
    }))
  }
}

/**
 * Generate WebPage schema with comprehensive metadata
 */
export const generateWebPageSchema = (page: {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
  image?: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.title,
    "description": page.description,
    "url": `https://mangala-living.com${page.url}`,
    "inLanguage": "id-ID",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Mangala Living",
      "url": "https://mangala-living.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mangala Living",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mangala-living.com/logo.png"
      }
    },
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    ...(page.image && {
      primaryImageOfPage: {
        "@type": "ImageObject",
        "url": page.image,
        "width": 1200,
        "height": 630
      }
    })
  }
}

/**
 * Generate HowTo schema for tutorial content
 */
export const generateHowToSchema = (howto: {
  name: string
  description: string
  totalTime?: string
  steps: Array<{ name: string; text: string; image?: string }>
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howto.name,
    "description": howto.description,
    ...(howto.totalTime && { totalTime: howto.totalTime }),
    "step": howto.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && {
        image: {
          "@type": "ImageObject",
          "url": step.image
        }
      })
    }))
  }
}

/**
 * Generate optimized meta description with CTA
 */
export const generateMetaDescription = (params: {
  product?: string
  service?: string
  location?: string
  type: 'product' | 'service' | 'blog' | 'page'
  cta?: string
}) => {
  const { product, service, location, type, cta } = params
  
  const descriptions = {
    product: `${product} dari Mangala Living - Furniture industrial berkualitas premium. Harga pabrik, custom design, garansi 1 tahun. ${location || 'Bekasi'}. ${cta || 'Pesan sekarang!'}`,
    service: `${service} oleh Mangala Living. Pengalaman 25+ tahun, 1000+ klien puas. Material premium, finishing powder coating. ${location || 'Melayani Jakarta, Bekasi, Jabodetabek'}. ${cta || 'Konsultasi gratis!'}`,
    blog: `Panduan lengkap ${product || service} untuk cafe & restoran. Tips dari expert furniture industrial dengan 25+ tahun pengalaman. ${cta || 'Baca selengkapnya!'}`,
    page: `${product || service} - Mangala Living workshop furniture industrial Bekasi sejak 1999. Harga terjangkau, kualitas terbaik. ${cta || 'Hubungi kami!'}`
  }
  
  return descriptions[type].substring(0, 160) // Google truncates at ~160 chars
}

/**
 * Generate SEO-optimized keywords
 */
export const generateKeywords = (primary: string[], secondary: string[], location: string[] = []) => {
  const baseKeywords = [
    'furniture industrial',
    'furniture besi custom',
    'furniture bekasi',
    'mangala living'
  ]
  
  return [...baseKeywords, ...primary, ...secondary, ...location].join(', ')
}

/**
 * Generate Open Graph tags
 */
export const generateOGTags = (params: {
  title: string
  description: string
  image?: string
  url: string
  type?: 'website' | 'article' | 'product'
}) => {
  return {
    'og:type': params.type || 'website',
    'og:title': params.title,
    'og:description': params.description,
    'og:image': params.image || 'https://mangala-living.com/og-image.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:url': `https://mangala-living.com${params.url}`,
    'og:site_name': 'Mangala Living',
    'og:locale': 'id_ID'
  }
}

/**
 * Generate Twitter Card tags
 */
export const generateTwitterTags = (params: {
  title: string
  description: string
  image?: string
}) => {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': params.title,
    'twitter:description': params.description,
    'twitter:image': params.image || 'https://mangala-living.com/og-image.jpg',
    'twitter:site': '@mangalaliving'
  }
}

/**
 * Image optimization helper with SEO-friendly alt tags
 */
export const generateImageAlt = (params: {
  productName?: string
  category?: string
  action?: string
  location?: string
}) => {
  const { productName, category, action, location } = params
  
  const parts = [
    productName,
    category && `${category} industrial`,
    action || 'furniture besi custom',
    'Mangala Living',
    location && `${location} Bekasi`
  ].filter(Boolean)
  
  return parts.join(' - ')
}

/**
 * Generate Video schema for YouTube embeds
 */
export const generateVideoSchema = (video: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration?: string
  embedUrl: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    ...(video.duration && { duration: video.duration }),
    "embedUrl": video.embedUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Mangala Living",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mangala-living.com/logo.png"
      }
    }
  }
}

/**
 * Generate ItemList schema for category pages
 */
export const generateItemListSchema = (params: {
  name: string
  description: string
  items: Array<{ name: string; url: string; image?: string; position: number }>
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": params.name,
    "description": params.description,
    "numberOfItems": params.items.length,
    "itemListElement": params.items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "url": `https://mangala-living.com${item.url}`,
      ...(item.image && { image: item.image })
    }))
  }
}

/**
 * Generate Review schema
 */
export const generateReviewSchema = (review: {
  author: string
  reviewBody: string
  rating: number
  datePublished: string
  itemReviewed: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "datePublished": review.datePublished,
    "itemReviewed": {
      "@type": "Product",
      "name": review.itemReviewed,
      "brand": {
        "@type": "Brand",
        "name": "Mangala Living"
      }
    }
  }
}

/**
 * Calculate reading time for blog posts (SEO signal)
 */
export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `PT${minutes}M`
}

/**
 * Generate Article schema for blog posts with E-E-A-T signals
 */
export const generateArticleSchema = (article: {
  title: string
  description: string
  content: string
  url: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  category: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": "Furniture Design Expert",
      "worksFor": {
        "@type": "Organization",
        "name": "Mangala Living"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mangala Living",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mangala-living.com/logo.png",
        "width": 250,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mangala-living.com${article.url}`
    },
    "articleSection": article.category,
    "inLanguage": "id-ID",
    "wordCount": article.content.trim().split(/\s+/).length,
    "timeRequired": calculateReadingTime(article.content),
    "about": {
      "@type": "Thing",
      "name": "Industrial Furniture",
      "sameAs": "https://en.wikipedia.org/wiki/Furniture"
    }
  }
}

/**
 * Enhanced LocalBusiness schema with more E-E-A-T signals
 */
export const generateEnhancedLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["FurnitureStore", "LocalBusiness", "Store"],
    "name": "Mangala Living - Workshop Furniture Industrial Bekasi",
    "image": [
      "https://mangala-living.com/og-image.jpg",
      "https://mangala-living.com/assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp"
    ],
    "@id": "https://mangala-living.com",
    "url": "https://mangala-living.com",
    "telephone": "+6285212078467",
    "priceRange": "Rp 1.500.000 - Rp 15.000.000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Setu Cibitung - Bekasi, Telajung",
      "addressLocality": "Bekasi",
      "addressRegion": "Jawa Barat",
      "postalCode": "17320",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2088,
      "longitude": 107.1602
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "15:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "paymentAccepted": "Cash, Bank Transfer, Credit Card",
    "currenciesAccepted": "IDR",
    "hasMap": "https://maps.google.com/?q=-6.2088,107.1602"
  }
}

/**
 * Performance hints for image loading
 */
export const getImageLoadingStrategy = (position: 'hero' | 'above-fold' | 'below-fold') => {
  const strategies = {
    'hero': {
      loading: 'eager' as const,
      fetchPriority: 'high' as const,
      decoding: 'sync' as const
    },
    'above-fold': {
      loading: 'eager' as const,
      fetchPriority: 'high' as const,
      decoding: 'async' as const
    },
    'below-fold': {
      loading: 'lazy' as const,
      fetchPriority: 'low' as const,
      decoding: 'async' as const
    }
  }
  
  return strategies[position]
}

/**
 * Get optimal image dimensions for different contexts
 */
export const getImageDimensions = (context: 'hero' | 'product' | 'thumbnail' | 'og-image') => {
  const dimensions = {
    hero: { width: 1920, height: 1080, aspectRatio: '16/9' },
    product: { width: 800, height: 600, aspectRatio: '4/3' },
    thumbnail: { width: 400, height: 300, aspectRatio: '4/3' },
    'og-image': { width: 1200, height: 630, aspectRatio: '1.91/1' }
  }
  
  return dimensions[context]
}

export default {
  generateEnhancedOrganizationSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateHowToSchema,
  generateMetaDescription,
  generateKeywords,
  generateOGTags,
  generateTwitterTags,
  generateImageAlt,
  generateVideoSchema,
  generateItemListSchema,
  generateReviewSchema,
  generateArticleSchema,
  generateEnhancedLocalBusinessSchema,
  getImageLoadingStrategy,
  getImageDimensions,
  calculateReadingTime
}
