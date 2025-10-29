import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

// Critical above-the-fold components - Load immediately
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CatalogModal from '../components/CatalogModal'

// Below-the-fold components - Lazy load for better Speed Index
const CategoriesSection = lazy(() => import('../components/CategoriesSection'))
const BestSellersSection = lazy(() => import('../components/BestSellersSection'))
const OurProductsSection = lazy(() => import('../components/OurProductsSection'))
const MessageSection = lazy(() => import('../components/MessageSection'))
const Footer = lazy(() => import('../components/Footer'))
const AISearchOptimizedContent = lazy(() => import('../components/AISearchOptimizedContent'))
const AISearchFeatures = lazy(() => import('../components/AISearchFeatures'))

// Utils
import { generateAIOptimizedStructuredData, generateFAQStructuredData, generateWebSiteStructuredData } from '../utils/aiSearchOptimization'

const Home: React.FC = () => {
  const [isIndonesian, setIsIndonesian] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Check URL for language prefix first (synchronous - no blocking)
    const path = location.pathname
    if (path.startsWith('/id')) {
      setIsIndonesian(true)
      return
    }
    if (path.startsWith('/eng')) {
      setIsIndonesian(false)
      return
    }

    // Immediately check browser language (synchronous - no blocking)
    const browserLang = navigator.language || navigator.languages?.[0]
    if (browserLang?.startsWith('id')) {
      setIsIndonesian(true)
    }

    // Non-blocking IP detection in background (doesn't delay render)
    const detectLocationAsync = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        if (data.country_code === 'ID' && !path.startsWith('/eng')) {
          setIsIndonesian(true)
        }
      } catch (error) {
        console.log('IP detection failed, using browser language')
      }
    }

    // Run in background without blocking
    detectLocationAsync()
  }, [location.pathname])

  // Indonesian translations
  const translations = {
    title: isIndonesian 
      ? "Furniture Industrial Besi Custom Bekasi | Mangala Living"
      : "Industrial Furniture Besi Custom Bekasi | Mangala Living",
    description: isIndonesian
      ? "Sejak 1999, kami menghadirkan Industrial Set terbaik untuk cafe, hotel dan restoran dengan kualitas premium dari workshop Bekasi dan pengalaman 25 tahun"
      : "Since 1999, we deliver premium Industrial Sets for cafes, hotels and restaurants with superior quality from our Bekasi workshop and 25 years of experience",
    ogTitle: isIndonesian
      ? "Furniture Industrial Besi Custom Bekasi | Cafe & Restoran"
      : "Industrial Furniture Besi Custom Bekasi | Cafe & Restoran",
    ogDescription: isIndonesian
      ? "Manufacturer furniture industrial custom untuk cafe, restoran, hotel. Pengalaman 25+ tahun, 1000+ klien puas. Workshop di Bekasi. Harga langsung pabrik."
      : "Manufacturer industrial furniture custom untuk cafe, restoran, hotel. Pengalaman 25+ tahun, 1000+ klien puas. Workshop di Bekasi. Harga langsung pabrik."
  }

  return (
    <div className="home">
      <CatalogModal />
      <Helmet>
        <title>{translations.title}</title>
        <meta name="description" content={translations.description} />
        <meta name="keywords" content="hollowline display rack, set furniture industrial, display shelf rack, call mangala furniture, mangala showroom, mangala kitchen cabinet, furniture bekasi murah, industrial furniture murah, meja kursi cafe, stall chair design" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={translations.ogTitle} />
        <meta property="og:description" content={translations.ogDescription} />
        <meta property="og:image" content="https://mangala-living.com/og-image.jpg" />
        <meta property="og:url" content="https://mangala-living.com/" />
        <meta property="og:locale" content="id_ID" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Furniture Industrial Besi Custom Bekasi - Mangala Living" />
        <meta name="twitter:description" content="Manufacturer furniture industrial custom untuk cafe, restoran, hotel. Workshop Bekasi. Pengalaman 25+ tahun." />
        <meta name="twitter:image" content="https://mangala-living.com/og-image.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bekasi" />
        <meta name="geo.position" content="-6.2088;107.1602" />
        {/* Canonical URL - Always point to main domain */}
        <link rel="canonical" href="https://mangala-living.com/" />
        
        {/* Hreflang for language variants */}
        <link rel="alternate" hrefLang="id" href="https://mangala-living.com/id" />
        <link rel="alternate" hrefLang="en" href="https://mangala-living.com/eng" />
        <link rel="alternate" hrefLang="x-default" href="https://mangala-living.com/" />
        
        {/* Language-specific meta tags */}
        <meta property="og:locale" content={isIndonesian ? "id_ID" : "en_US"} />
        
        {/* Structured Data - Product Catalog */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Furniture Industrial Mangala Living",
              "description": "Koleksi furniture industrial besi custom untuk cafe, restoran, dan hotel",
              "numberOfItems": 3,
              "itemListElement": [
                {
                  "@type": "Product",
                  "position": 1,
                  "name": "Frame Loft Bookshelf",
                  "description": "Rak buku industrial dengan desain loft modern untuk cafe dan kantor",
                  "image": "https://mangala-living.com/assets/frame-Loft-Bookshelf.webp",
                  "url": "https://mangala-living.com/product/frame-loft-bookshelf",
                  "brand": {
                    "@type": "Brand",
                    "name": "Mangala Living"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "3500000",
                    "priceCurrency": "IDR",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2026-12-31",
                    "url": "https://mangala-living.com/product/frame-loft-bookshelf",
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
                    },
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
                },
                {
                  "@type": "Product",
                  "position": 2,
                  "name": "Balcony Bar Table",
                  "description": "Meja bar balkon industrial untuk area outdoor cafe dan restoran",
                  "image": "https://mangala-living.com/assets/balcony-bar-table.webp",
                  "url": "https://mangala-living.com/product/balcony-bar-table",
                  "brand": {
                    "@type": "Brand",
                    "name": "Mangala Living"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "3500000",
                    "priceCurrency": "IDR",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2026-12-31",
                    "url": "https://mangala-living.com/product/balcony-bar-table",
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
                    },
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
                },
                {
                  "@type": "Product",
                  "position": 3,
                  "name": "Beam Industrial Bar Chair",
                  "description": "Kursi bar industrial besi dengan desain beam modern untuk cafe",
                  "image": "https://mangala-living.com/assets/Kursi-Barstool-Besi-Behel.webp",
                  "url": "https://mangala-living.com/product/beam-industrial-bar-chair",
                  "brand": {
                    "@type": "Brand",
                    "name": "Mangala Living"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "450000",
                    "priceCurrency": "IDR",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2026-12-31",
                    "url": "https://mangala-living.com/product/beam-industrial-bar-chair",
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
                    },
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
              ]
            }
          `}
        </script>
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mangala Living",
              "image": "https://mangala-living.com/og-image.jpg",
              "@id": "https://mangala-living.com",
              "url": "https://mangala-living.com",
              "telephone": "+6285212078467",
              "email": "info@mangala-living.com",
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
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "17:00"
              },
              "priceRange": "Rp$$-$$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1000"
              }
            }
          `}
        </script>
        
        {/* AI-Optimized Merchant Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateAIOptimizedStructuredData())}
        </script>
        
        {/* FAQ Schema for AI Understanding */}
        <script type="application/ld+json">
          {JSON.stringify(generateFAQStructuredData())}
        </script>
        
        {/* WebSite Schema with Search Action */}
        <script type="application/ld+json">
          {JSON.stringify(generateWebSiteStructuredData())}
        </script>
      </Helmet>
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Header isIndonesian={isIndonesian} />
      <Hero isIndonesian={isIndonesian} />
      
      {/* Lazy load below-the-fold content for better Speed Index */}
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <CategoriesSection isIndonesian={isIndonesian} />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <BestSellersSection isIndonesian={isIndonesian} />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <OurProductsSection isIndonesian={isIndonesian} />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <MessageSection isIndonesian={isIndonesian} />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <Footer isIndonesian={isIndonesian} />
      </Suspense>
      
      {/* AI Search Optimized Content - Hidden, no visual impact */}
      <Suspense fallback={null}>
        <AISearchOptimizedContent isIndonesian={isIndonesian} />
      </Suspense>
      
      {/* AI Search Features - Hidden, no visual impact */}
      <Suspense fallback={null}>
        <AISearchFeatures isIndonesian={isIndonesian} />
      </Suspense>
    </div>
  )
}

export default Home
