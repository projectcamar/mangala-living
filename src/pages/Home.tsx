import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

// Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import CatalogModal from '../components/CatalogModal'
import CategoriesSection from '../components/CategoriesSection'
import BestSellersSection from '../components/BestSellersSection'
import OurProductsSection from '../components/OurProductsSection'
import MessageSection from '../components/MessageSection'
import Footer from '../components/Footer'

// Utils
import { generateMerchantStructuredData } from '../utils/structuredData'

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

  // Indonesian translations
  const translations = {
    title: isIndonesian 
      ? "Furniture Industrial Besi Custom Bekasi | Mangala Living"
      : "Industrial Furniture Besi Custom Bekasi | Mangala Living",
    description: isIndonesian
      ? "Furniture industrial besi custom untuk cafe, restoran, hotel. Workshop Bekasi sejak 1999. Harga pabrik. WA: 0852-1207-8467."
      : "Industrial furniture besi custom untuk cafe, restoran, hotel. Workshop Bekasi sejak 1999. Harga pabrik. WA: 0852-1207-8467.",
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
              borderTop: '4px solid #ff6b35',
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
      <Helmet>
        <title>{translations.title}</title>
        <meta name="description" content={translations.description} />
        <meta name="keywords" content="furniture industrial bekasi, furniture besi custom, furniture cafe murah, meja industrial, kursi bar besi, rak display industrial, furniture restoran, mangala living, pabrik furniture bekasi" />
        
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
                    "url": "https://mangala-living.com/product/frame-loft-bookshelf",
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
                    "url": "https://mangala-living.com/product/balcony-bar-table",
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
                    "url": "https://mangala-living.com/product/beam-industrial-bar-chair",
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
        
        {/* Merchant Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateMerchantStructuredData())}
        </script>
      </Helmet>
      <Header isIndonesian={isIndonesian} />
      <Hero isIndonesian={isIndonesian} />
      
      
      <CategoriesSection isIndonesian={isIndonesian} />
      <BestSellersSection isIndonesian={isIndonesian} />
      <OurProductsSection isIndonesian={isIndonesian} />
      <MessageSection isIndonesian={isIndonesian} />
      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default Home
