// AI Search Optimization utilities for Mangala Living
export const generateAIOptimizedStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": "Mangala Living",
    "alternateName": ["Mangala Living Furniture", "Industrial Furniture Indonesia", "Furniture Besi Custom"],
    "description": "Premium Industrial Scandinavian Furniture manufacturer specializing in custom steel furniture for cafes, restaurants, hotels, and offices. Established 1999 in Bekasi, Indonesia. Serving customers across Indonesia and internationally.",
    "url": "https://mangala-living.com",
    "logo": "https://mangala-living.com/logo.png",
    "image": "https://mangala-living.com/og-image.jpg",
    "foundingDate": "1999",
    "founder": {
      "@type": "Person",
      "name": "Mangala Living Founder"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Setu Cikarang Bar.",
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
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+62-852-1207-8467",
        "contactType": "customer service",
        "email": "info@mangala-living.com",
        "availableLanguage": ["Indonesian", "English"],
        "areaServed": ["ID", "International"]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/mangalaliving",
      "https://www.facebook.com/mangalaliving",
      "https://wa.me/6285212078467"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Furniture Collection",
      "description": "Complete collection of industrial furniture for commercial and residential use",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Industrial Furniture",
            "category": "Furniture",
            "description": "Premium industrial furniture made from high-quality materials"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "keywords": [
      "furniture industrial indonesia",
      "furniture besi custom",
      "furniture cafe",
      "furniture restoran",
      "meja industrial",
      "kursi bar",
      "rak display industrial",
      "mangala living",
      "furniture besi bekasi",
      "industrial furniture custom",
      "steel furniture",
      "scandinavian furniture",
      "cafe furniture",
      "restaurant furniture",
      "hotel furniture",
      "office furniture"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -6.2088,
        "longitude": 107.1602
      },
      "geoRadius": "500000"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Furniture Design",
          "description": "Custom industrial furniture design and manufacturing services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Furniture Installation",
          "description": "Professional furniture installation services"
        }
      }
    ]
  }
}

export const generateProductStructuredData = (product: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description || `Industrial furniture ${product.name} by Mangala Living`,
    "image": product.image,
    "url": `https://mangala-living.com/product/${product.slug}`,
    "brand": {
      "@type": "Brand",
      "name": "Mangala Living"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Mangala Living",
      "url": "https://mangala-living.com"
    },
    "category": product.categories?.[0] || "Industrial Furniture",
    "keywords": [
      product.name.toLowerCase(),
      "industrial furniture",
      "besi custom",
      "furniture indonesia",
      ...(product.categories || []).map((cat: string) => cat.toLowerCase())
    ],
    "offers": {
      "@type": "Offer",
      "price": product.price?.replace(/[^\d]/g, '') || "0",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31",
      "url": `https://mangala-living.com/product/${product.slug}`,
      "seller": {
        "@type": "Organization",
        "name": "Mangala Living"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
}

export const generateFAQStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu Mangala Living?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mangala Living adalah manufacturer furniture industrial besi custom yang telah beroperasi sejak 1999 di Bekasi. Kami mengkhususkan diri dalam pembuatan furniture industrial untuk cafe, restoran, hotel, dan kantor dengan kualitas premium."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa lama proses pembuatan furniture custom?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proses pembuatan furniture custom membutuhkan waktu 2-4 minggu tergantung kompleksitas desain dan volume pesanan. Kami akan memberikan estimasi waktu yang lebih detail setelah konsultasi desain."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah Mangala Living melayani pengiriman ke seluruh Indonesia dan internasional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, kami melayani pengiriman furniture ke seluruh Indonesia dan internasional. Biaya pengiriman akan disesuaikan dengan lokasi dan ukuran furniture yang dipesan. Untuk pengiriman internasional, kami mengirim dari pelabuhan Semarang."
        }
      },
      {
        "@type": "Question",
        "name": "Material apa yang digunakan untuk furniture industrial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kami menggunakan material industrial grade berkualitas tinggi seperti besi hollow, besi siku, dan material finishing yang tahan lama. Semua material dipilih untuk memastikan durability dan estetika yang optimal."
        }
      }
    ]
  }
}

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

export const generateWebSiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mangala Living",
    "url": "https://mangala-living.com",
    "description": "Industrial Furniture Besi Custom Indonesia - Manufacturer sejak 1999",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mangala-living.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mangala Living",
      "url": "https://mangala-living.com"
    }
  }
}