import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

// Components
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

const Home: React.FC = () => {
  const { t } = useTranslation()
  const [showCatalogModal, setShowCatalogModal] = useState(false)


  return (
    <>
      <Helmet>
        <title>{t('header.title')} - {t('header.subtitle')}</title>
        <meta name="description" content={t('hero.subtitle')} />
        <meta name="keywords" content="furniture jepara, teak wood furniture, handmade furniture, indonesia furniture, custom furniture" />
        <link rel="canonical" href="https://mangalafurniture.com/" />
        
        {/* AI-Optimized Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateAIOptimizedStructuredData())}
        </script>
        
        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateFAQStructuredData())}
        </script>
        
        {/* Website Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateWebSiteStructuredData())}
        </script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* AI Search Features */}
        <AISearchFeatures />
        
        {/* AI-Optimized Content */}
        <AISearchOptimizedContent />
        
        {/* Categories Section */}
        <CategoriesSection />
        
        {/* Best Sellers Section */}
        <BestSellersSection />
        
        {/* Our Products Section */}
        <OurProductsSection />
        
        {/* Message Section */}
        <MessageSection />
      </main>

      <Footer />
      
      {/* Catalog Modal */}
      {showCatalogModal && (
        <CatalogModal 
          onClose={() => setShowCatalogModal(false)}
        />
      )}
    </>
  )
}

export default Home