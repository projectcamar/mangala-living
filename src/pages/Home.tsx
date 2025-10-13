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
        <title>Mangala Living - Industrial Steel Furniture for Coffee Shops & Restaurants</title>
        <meta name="description" content="Family-owned welding workshop since 1999. Premium industrial steel furniture for coffee shops, restaurants & offices. Custom welded furniture across Indonesia." />
        <meta name="keywords" content="industrial furniture indonesia, welding workshop kediri, coffee shop furniture, restaurant furniture, custom steel furniture, mangala living" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mangala Living - Industrial Steel Furniture" />
        <meta property="og:description" content="Family-owned welding workshop since 1999. Custom industrial furniture for businesses across Indonesia. 1000+ orders completed." />
        <meta property="og:image" content="/images/mangala-living.jpg" />
        <meta property="og:url" content="https://mangalaliving.com/" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mangala Living - Industrial Steel Furniture" />
        <meta name="twitter:description" content="Family-owned welding workshop since 1999. Custom industrial furniture for businesses across Indonesia. 1000+ orders completed." />
        <meta name="twitter:image" content="/images/mangala-living.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Kediri" />
        <link rel="canonical" href="https://mangalaliving.com/" />
        
        {/* Structured Data / Schema.org */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FurnitureStore",
              "name": "Mangala Living",
              "image": "/images/mangala-living.jpg",
              "description": "Family-owned welding workshop since 1999 specializing in custom industrial steel furniture for coffee shops, restaurants, offices, and hotels across Indonesia.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kediri",
                "addressRegion": "East Java",
                "addressCountry": "ID"
              },
              "url": "https://mangalaliving.com",
              "telephone": "+6281138860034",
              "priceRange": "Rp$$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
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
