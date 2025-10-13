import React from 'react'
import { Helmet } from 'react-helmet-async'

// Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import CatalogModal from '../components/CatalogModal'
import CategoriesSection from '../components/CategoriesSection'
import BestSellersSection from '../components/BestSellersSection'
import OurProductsSection from '../components/OurProductsSection'
import MessageSection from '../components/MessageSection'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <div className="home">
      <CatalogModal />
      <Helmet>
        <title>Furniture Industrial Besi Custom Bekasi | Mangala Living - Cafe, Restoran, Hotel</title>
        <meta name="description" content="Mangala Living - Manufacturer furniture industrial besi custom sejak 1999. Spesialis meja, kursi bar, rak display untuk cafe & restoran. Workshop Bekasi. Harga pabrik. WA: 0852-1207-8467" />
        <meta name="keywords" content="furniture industrial bekasi, furniture besi custom, furniture cafe murah, meja industrial, kursi bar besi, rak display industrial, furniture restoran, mangala living, pabrik furniture bekasi" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Furniture Industrial Besi Custom Bekasi | Cafe & Restoran" />
        <meta property="og:description" content="Manufacturer furniture industrial custom untuk cafe, restoran, hotel. Pengalaman 25+ tahun, 1000+ klien puas. Workshop di Bekasi. Harga langsung pabrik." />
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
        <link rel="canonical" content="https://mangala-living.com/" />
        
        {/* Structured Data - Product Catalog */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Furniture Industrial Mangala Living",
              "description": "Koleksi furniture industrial besi custom untuk cafe, restoran, dan hotel",
              "numberOfItems": 16,
              "itemListElement": [
                {
                  "@type": "Product",
                  "position": 1,
                  "name": "Frame Loft Bookshelf",
                  "offers": {
                    "@type": "Offer",
                    "price": "3500000",
                    "priceCurrency": "IDR"
                  }
                },
                {
                  "@type": "Product",
                  "position": 2,
                  "name": "Balcony Bar Table",
                  "offers": {
                    "@type": "Offer",
                    "price": "3500000",
                    "priceCurrency": "IDR"
                  }
                },
                {
                  "@type": "Product",
                  "position": 3,
                  "name": "Beam Industrial Bar Chair",
                  "offers": {
                    "@type": "Offer",
                    "price": "450000",
                    "priceCurrency": "IDR"
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
      </Helmet>
      <Header />
      <Hero />
      <CategoriesSection />
      <BestSellersSection />
      <OurProductsSection />
      <MessageSection />
      <Footer />
    </div>
  )
}

export default Home
