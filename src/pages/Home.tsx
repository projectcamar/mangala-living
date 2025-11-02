import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

// Components
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CatalogModal from '../components/CatalogModal'
import CategoriesSection from '../components/CategoriesSection'
import BestSellersSection from '../components/BestSellersSection'
import OurProductsSection from '../components/OurProductsSection'
import MessageSection from '../components/MessageSection'
import Footer from '../components/Footer'
import AISearchOptimizedContent from '../components/AISearchOptimizedContent'
import AISearchFeatures from '../components/AISearchFeatures'

// Utils
import { generateAIOptimizedStructuredData, generateFAQStructuredData, generateWebSiteStructuredData } from '../utils/aiSearchOptimization'
import { ALL_PRODUCTS } from '../data/products'
import { generateLanguageSpecificMeta, generateLocalizedUrls, getProductImageUrl } from '../utils/seo'

const Home: React.FC = () => {
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Check URL for language prefix first
    const path = location.pathname
    if (path.startsWith('/id')) {
      setIsIndonesian(true)
      setIsLoading(false)
      return
    }
    if (path.startsWith('/eng')) {
      setIsIndonesian(false)
      setIsLoading(false)
      return
    }

    // If no language prefix, detect from IP
    const detectLocation = async () => {
      try {
        // Try to get location from IP
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        if (data.country_code === 'ID') {
          setIsIndonesian(true)
        }
      } catch (error) {
        console.log('IP detection failed, checking browser language')
        // Fallback: check browser language
        const browserLang = navigator.language || navigator.languages?.[0]
        if (browserLang?.startsWith('id')) {
          setIsIndonesian(true)
        }
      } finally {
        setIsLoading(false)
      }
    }

    detectLocation()
  }, [location.pathname])

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

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

  if (isLoading) {
    return (
      <div className="home">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          background: '#f8f9fa'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #8B7355',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px'
            }}></div>
            <p style={{ color: '#666', margin: 0 }}>
              {isIndonesian ? "Memuat..." : "Loading..."}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="home">
      <CatalogModal />
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{translations.title}</title>
        <meta name="description" content={translations.description} />
        <meta name="keywords" content="hollowline display rack, set furniture industrial, display shelf rack, call mangala furniture, mangala showroom, mangala kitchen cabinet, furniture bekasi murah, industrial furniture murah, meja kursi cafe, stall chair design" />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={translations.ogTitle} />
        <meta property="og:description" content={translations.ogDescription} />
        <meta property="og:image" content="https://mangala-living.com/og-image.jpg" />
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
        
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
        {/* Canonical and Hreflang */}
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`home-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        
        {/* Structured Data - Product Catalog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Furniture Industrial Mangala Living",
            "description": "Koleksi furniture industrial besi custom untuk cafe, restoran, dan hotel",
            "numberOfItems": ALL_PRODUCTS.length,
            "itemListElement": ALL_PRODUCTS.map((product, index) => {
              const imageUrl = getProductImageUrl(product.image, product.slug)
              const priceNumeric = product.price.replace(/[^\d]/g, '')
              const description = `Industrial furniture ${product.name} by Mangala Living. Premium quality furniture made in Indonesia since 1999.`
              
              return {
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": product.name,
                  "description": description,
                  "image": imageUrl,
                  "url": `https://mangala-living.com/product/${product.slug}`,
                  "brand": {
                    "@type": "Brand",
                    "name": "Mangala Living"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": priceNumeric,
                    "priceCurrency": "IDR",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2026-12-31",
                    "url": `https://mangala-living.com/product/${product.slug}`,
                    "hasMerchantReturnPolicy": {
                      "@type": "MerchantReturnPolicy",
                      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                      "merchantReturnDays": 30,
                      "returnMethod": "https://schema.org/ReturnByMail",
                      "returnFees": "https://schema.org/FreeReturn",
                      "applicableCountry": "ID"
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
                      "name": "Mangala Living",
                      "url": "https://mangala-living.com",
                      "logo": "https://mangala-living.com/logo.png",
                      "image": "https://mangala-living.com/og-image.jpg"
                    }
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "127",
                    "reviewCount": "127",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                }
              }
            })
          })}
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
                  "ratingCount": "1000",
                  "reviewCount": "1000",
                  "bestRating": "5",
                  "worstRating": "1"
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
      
      
      <CategoriesSection isIndonesian={isIndonesian} />
      <BestSellersSection isIndonesian={isIndonesian} />
      <OurProductsSection isIndonesian={isIndonesian} />
      <MessageSection isIndonesian={isIndonesian} />
      <Footer isIndonesian={isIndonesian} />
      
      {/* AI Search Optimized Content */}
      <AISearchOptimizedContent isIndonesian={isIndonesian} />
      
      {/* AI Search Features */}
      <AISearchFeatures isIndonesian={isIndonesian} />
    </div>
  )
}

export default Home
