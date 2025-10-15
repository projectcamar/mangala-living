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
        <title>Furniture Industrial Besi Custom Bekasi | Mangala Living</title>
        <meta name="description" content="Furniture industrial besi custom untuk cafe, restoran, hotel. Workshop Bekasi sejak 1999. Harga pabrik. WA: 0852-1207-8467. Custom design, material industrial grade, garansi kualitas." />
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
        {/* Canonical removed - already in index.html */}
        
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
                  "description": "Rak buku industrial dengan desain loft modern untuk cafe dan kantor",
                  "image": "https://mangala-living.com/assets/frame-Loft-Bookshelf.png",
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
                  }
                },
                {
                  "@type": "Product",
                  "position": 2,
                  "name": "Balcony Bar Table",
                  "description": "Meja bar balkon industrial untuk area outdoor cafe dan restoran",
                  "image": "https://mangala-living.com/assets/balcony-bar-table.png",
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
                  }
                },
                {
                  "@type": "Product",
                  "position": 3,
                  "name": "Beam Industrial Bar Chair",
                  "description": "Kursi bar industrial besi dengan desain beam modern untuk cafe",
                  "image": "https://mangala-living.com/assets/Kursi-Barstool-Besi-Behel.png",
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
      
      {/* SEO Content Section */}
      <section className="seo-content" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>
              Furniture Industrial Besi Custom Terpercaya di Bekasi
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
              Mangala Living adalah manufacturer furniture industrial besi custom terpercaya di Bekasi sejak 1999. 
              Dengan pengalaman 25+ tahun, kami telah melayani lebih dari 1000 bisnis di seluruh Indonesia.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
              Kami memproduksi furniture industrial custom untuk cafe, restoran, hotel, kantor, dan berbagai kebutuhan komersial. 
              Setiap produk dibuat dengan teknik pengelasan berkualitas tinggi dan material industrial grade terbaik.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666', marginBottom: '30px' }}>
              <strong>Lokasi Workshop:</strong> Bekasi, Jawa Barat | <strong>Telp/WA:</strong> +62 852-1207-8467 | 
              <strong> Email:</strong> info@mangala-living.com
            </p>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
              Koleksi & Keunggulan Furniture Industrial
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
              Kami menyediakan berbagai koleksi furniture industrial besi custom termasuk New Arrivals, Lounge Set, 
              Sofa Bench, Dining Set, Bar Set, Outdoor, Daybed, Storage, Tables, dan Dine Table. 
              Semua produk dapat disesuaikan dengan kebutuhan bisnis Anda.
            </p>
            <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              <li>✓ Pengalaman 25+ tahun sebagai manufacturer furniture industrial</li>
              <li>✓ 1000+ klien puas di seluruh Indonesia</li>
              <li>✓ Custom design sesuai kebutuhan bisnis Anda</li>
              <li>✓ Material industrial grade berkualitas tinggi</li>
              <li>✓ Harga kompetitif langsung dari pabrik</li>
              <li>✓ Garansi kualitas produk</li>
              <li>✓ Workshop di Bekasi dengan akses mudah</li>
            </ul>
          </div>
        </div>
      </section>
      
      <CategoriesSection />
      <BestSellersSection />
      <OurProductsSection />
      <MessageSection />
      <Footer />
    </div>
  )
}

export default Home
