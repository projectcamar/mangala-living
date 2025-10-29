// Structured Data utilities for Mangala Living

// Generate BlogPosting Schema for SEO
export const generateBlogPostingSchema = (post: {
  title: string
  excerpt: string
  slug: string
  date: string
  image: string
  category: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mangala-living.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "inLanguage": "id-ID",
    "keywords": [
      "furniture industrial",
      "furniture besi custom",
      "furniture bekasi",
      "meja industrial",
      "kursi bar",
      "furniture cafe",
      "furniture restoran"
    ]
  }
}

// Generate FAQ Schema for educational content
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export const generateMerchantStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mangala Living",
    "url": "https://mangala-living.com",
    "logo": "https://mangala-living.com/logo.png",
    "image": "https://mangala-living.com/og-image.jpg",
    "description": "Premium Industrial Scandinavian Furniture for Coffee Shops, Restaurants & Offices. Custom Solutions Since 1999.",
    "foundingDate": "1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Setu Cikarang Bar.",
      "addressLocality": "Bekasi",
      "addressRegion": "Jawa Barat",
      "postalCode": "17320",
      "addressCountry": "ID"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+62-852-1207-8467",
        "contactType": "customer service",
        "email": "info@mangala-living.com",
        "availableLanguage": ["Indonesian", "English"],
        "areaServed": "ID"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+62-852-1207-8467",
        "contactType": "sales",
        "email": "sales@mangala-living.com",
        "availableLanguage": ["Indonesian", "English"],
        "areaServed": "ID"
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
            "description": "Premium industrial furniture made from high-quality materials",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            }
          },
          "price": "1500000",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31",
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 30,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn"
          },
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "IDR"
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": "ID"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
              },
              "cutoffTime": "14:00",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 3,
                "maxValue": 5,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 3,
                "unitCode": "DAY"
              }
            }
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
    }
  }
}

export const generateLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["FurnitureStore", "LocalBusiness"],
    "name": "Mangala Living - Workshop Furniture Industrial Bekasi",
    "alternateName": "Mangala Living Furniture Industrial Bekasi",
    "image": "https://mangala-living.com/og-image.jpg",
    "description": "Workshop Furniture Besi Custom Bekasi sejak 1999. Spesialis Industrial Furniture untuk Cafe, Restoran, Hotel, Kantor. Produksi langsung harga pabrik, material berkualitas, finishing powder coating. Melayani Jakarta, Bekasi, Jabodetabek.",
    "url": "https://mangala-living.com",
    "telephone": "+62-852-1207-8467",
    "email": "info@mangala-living.com",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Bekasi"
      },
      {
        "@type": "City",
        "name": "Jakarta"
      },
      {
        "@type": "State",
        "name": "Jabodetabek"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -6.2088,
        "longitude": 107.1602
      },
      "geoRadius": "100000"
    },
    "slogan": "Furniture Industrial Bekasi - Workshop Terpercaya Sejak 1999",
    "foundingDate": "1999",
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
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Bank Transfer", "Credit Card"],
    "currenciesAccepted": "IDR",
    "hasMap": "https://maps.google.com/?q=-6.2088,107.1602",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "brand": {
      "@type": "Brand",
      "name": "Mangala Living"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Furniture Besi Custom Bekasi",
          "description": "Jasa pembuatan furniture besi custom untuk cafe, restoran, hotel, dan kantor"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Furniture Bekasi",
          "description": "Produksi furniture industrial dengan desain modern dan material berkualitas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Furniture Café Industrial Bekasi",
          "description": "Spesialis furniture cafe industrial: meja, kursi, display rack, kitchen cabinet"
        }
      }
    ],
    "keywords": "furniture besi custom bekasi, industrial furniture bekasi, furniture café industrial bekasi, workshop furniture besi bekasi, jual furniture industrial jakarta bekasi, meja makan besi custom bekasi, meja café industrial besi, furniture besi hotel custom, bikin furniture besi custom jabodetabek, furniture besi untuk restoran, furniture bekasi barat, furniture bekasi timur, furniture bekasi selatan, furniture bekasi utara, furniture cikarang barat, furniture cikarang utara, furniture cikarang selatan, furniture cikarang timur, furniture cikarang pusat, furniture harapan indah, furniture summarecon bekasi, furniture jatiasih, furniture pekayon, furniture tambun, furniture pondok gede, furniture mustika jaya, furniture rawalumbu, furniture medan satria, furniture lippo cikarang, furniture jababeka"
  }
}

// Generate Service Area Schema with Geo Coordinates for all Bekasi areas
export const generateServiceAreaSchema = () => {
  const bekasiAreas = [
    { name: "Bekasi Barat", lat: -6.2367, lon: 106.9944, kelurahan: ["Bintara", "Kranji", "Kota Baru", "Jakasampurna"] },
    { name: "Bekasi Timur", lat: -6.2440, lon: 107.0076, kelurahan: ["Jatiasih", "Pekayon", "Aren Jaya", "Duren Jaya"] },
    { name: "Bekasi Selatan", lat: -6.2638, lon: 106.9891, kelurahan: ["Kayuringin Jaya", "Margajaya", "Jakasetia", "Pekayon Jaya"] },
    { name: "Bekasi Utara", lat: -6.2131, lon: 107.0067, kelurahan: ["Harapan Indah", "Pejuang", "Teluk Pucung", "Kaliabang"] },
    { name: "Cikarang Barat", lat: -6.2703, lon: 107.1483, kelurahan: ["Lippo Cikarang", "Cibatu", "Telaga Murni", "Pasir Gombong"] },
    { name: "Cikarang Utara", lat: -6.2481, lon: 107.1529, kelurahan: ["Karang Asih", "Simpangan", "Sukamaju", "Danau Indah"] },
    { name: "Cikarang Selatan", lat: -6.2887, lon: 107.1552, kelurahan: ["Jababeka", "Greenland", "Pasirsari", "Ciantra"] },
    { name: "Cikarang Timur", lat: -6.2674, lon: 107.1730, kelurahan: ["Serang Baru", "Karangreja", "Jayamukti", "Sukamanah"] },
    { name: "Cikarang Pusat", lat: -6.2813, lon: 107.1442, kelurahan: ["Taman Galaxy", "Lemahabang", "Hegarmukti", "Kalijaya"] },
    { name: "Tambun Selatan", lat: -6.2546, lon: 107.0529, kelurahan: ["Sertajaya", "Mangunjaya", "Lambangjaya", "Setiadarma"] },
    { name: "Tambun Utara", lat: -6.2178, lon: 107.0514, kelurahan: ["Satria Jaya", "Karang Satria", "Wanasari", "Karang Bahagia"] },
    { name: "Pondok Gede", lat: -6.2759, lon: 106.9784, kelurahan: ["Jatiwaringin", "Jatibening", "Jatiraden", "Jatimakmur"] },
    { name: "Mustika Jaya", lat: -6.2855, lon: 106.9924, kelurahan: ["Mustikasari", "Pedurenan", "Cimuning"] },
    { name: "Rawalumbu", lat: -6.2600, lon: 106.9766, kelurahan: ["Bojong Rawalumbu", "Sepanjang Jaya", "Pengasinan"] },
    { name: "Medan Satria", lat: -6.1951, lon: 107.0071, kelurahan: ["Kali Baru", "Pejuang", "Harapan Baru", "Medan Satria"] }
  ]

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Furniture Besi Custom & Industrial Furniture Manufacturing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mangala Living",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Raya Setu Cikarang Bar.",
        "addressLocality": "Bekasi",
        "addressRegion": "Jawa Barat",
        "postalCode": "17320",
        "addressCountry": "ID"
      }
    },
    "areaServed": bekasiAreas.map(area => ({
      "@type": "City",
      "name": area.name,
      "containedIn": {
        "@type": "AdministrativeArea",
        "name": "Bekasi"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": area.lat,
        "longitude": area.lon
      }
    }))
  }
}
