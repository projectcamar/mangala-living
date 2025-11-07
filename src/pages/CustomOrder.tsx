import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MessageCircle, Download } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import catalogPDF from '../assets/Mangala-Living-Catalog-2025.pdf'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import './CustomOrder.css'

const CustomOrder: React.FC = () => {
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // 1) Check URL path prefix
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

    // 2) Check query parameter ?lang=
    const params = new URLSearchParams(location.search)
    const lang = params.get('lang')
    if (lang === 'id' || lang === 'en') {
      setIsIndonesian(lang === 'id')
      setIsLoading(false)
      return
    }

    // 3) Fallback to IP/Browser detection
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        if (data.country_code === 'ID') {
          setIsIndonesian(true)
        }
      } catch (error) {
        const browserLang = navigator.language || navigator.languages?.[0]
        if (browserLang?.startsWith('id')) {
          setIsIndonesian(true)
        }
      } finally {
        setIsLoading(false)
      }
    }
    detectLocation()
  }, [location.pathname, location.search])

  if (isLoading) {
    return null
  }

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  return (
    <div className="custom-order-page">
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{isIndonesian ? 'Custom Order - Mangala Living' : 'Custom Order - Mangala Living'}</title>
        <meta name="description" content={isIndonesian 
          ? "Pesan furniture industrial custom sesuai kebutuhan Anda. Workshop Mangala Living Bekasi melayani custom order untuk cafe, restoran, kantor, dan rumah." 
          : "Order custom industrial furniture according to your needs. Mangala Living Bekasi Workshop serves custom orders for cafes, restaurants, offices, and homes."} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`custom-order-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      
      {/* Hero Section */}
      <section className="custom-order-hero">
        <div className="custom-order-hero-image">
          <img 
            src={heroImage} 
            alt="Custom Order Furniture Industrial"
            loading="eager"
            fetchPriority="high"
          />
          <div className="custom-order-hero-overlay"></div>
        </div>
        <div className="custom-order-hero-content">
          <h1 className="custom-order-hero-title">
            {isIndonesian ? 'Pesanan Khusus' : 'Custom Order'}
          </h1>
          <p className="custom-order-hero-subtitle">
            {isIndonesian 
              ? 'Wujudkan Furniture Industrial Impian Anda'
              : 'Create Your Dream Industrial Furniture'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="custom-order-content">
        <div className="custom-order-container">
          <h2>{isIndonesian ? 'Layanan Custom Order' : 'Custom Order Service'}</h2>
          <p>
            {isIndonesian 
              ? 'Kami menerima pesanan furniture custom sesuai kebutuhan Anda. Dari desain, material, hingga finishing - semua dapat disesuaikan.'
              : 'We accept custom furniture orders according to your needs. From design, materials, to finishing - everything can be customized.'}
          </p>
          
          <div className="custom-order-cta-buttons">
            <a 
              href="https://wa.me/6285212078467" 
              target="_blank" 
              rel="noopener noreferrer"
              className="custom-order-cta-button custom-order-cta-button-primary"
            >
              <MessageCircle size={20} />
              {isIndonesian ? 'WhatsApp Sekarang' : 'WhatsApp Now'}
            </a>
            <a 
              href={catalogPDF}
              download="Mangala-Living-Catalog-2025.pdf"
              className="custom-order-cta-button custom-order-cta-button-secondary"
            >
              <Download size={20} />
              {isIndonesian ? 'Download Katalog' : 'Download Catalog'}
            </a>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default CustomOrder
