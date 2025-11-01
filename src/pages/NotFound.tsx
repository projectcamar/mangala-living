import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ALL_PRODUCTS } from '../data/products'
import './NotFound.css'

const NotFound: React.FC = () => {
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Check query parameter first (lang=id or lang=en)
    const searchParams = new URLSearchParams(location.search)
    const langParam = searchParams.get('lang')
    if (langParam === 'id') {
      setIsIndonesian(true)
      setIsLoading(false)
      return
    }
    if (langParam === 'en' || langParam === 'eng') {
      setIsIndonesian(false)
      setIsLoading(false)
      return
    }

    // Check URL for language prefix
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
  }, [location.pathname, location.search])

  // Get 4 featured products (mix of different categories)
  const featuredProducts = ALL_PRODUCTS.slice(0, 4)

  // Translations
  const translations = {
    title: isIndonesian 
      ? '404 - Halaman Tidak Ditemukan | Mangala Living'
      : '404 - Page Not Found | Mangala Living',
    description: isIndonesian
      ? 'Halaman yang Anda cari tidak ditemukan. Jelajahi produk furniture industrial terbaik kami atau kembali ke beranda.'
      : 'The page you are looking for was not found. Explore our best industrial furniture products or return to home.',
    subtitle: isIndonesian
      ? 'Halaman Tidak Ditemukan'
      : 'Page Not Found',
    pageDescription: isIndonesian
      ? 'Maaf, halaman yang Anda cari tidak tersedia. Mungkin URL yang diketik salah atau halaman sudah dipindahkan.'
      : 'Sorry, the page you are looking for is not available. The URL may be incorrect or the page has been moved.',
    backToHome: isIndonesian
      ? 'Kembali ke Beranda'
      : 'Back to Home',
    viewAllProducts: isIndonesian
      ? 'Lihat Semua Produk'
      : 'View All Products',
    featuredProductsTitle: isIndonesian
      ? 'Produk Unggulan untuk Anda'
      : 'Featured Products for You',
    viewAllProductsLink: isIndonesian
      ? 'Lihat Semua Produk →'
      : 'View All Products →'
  }

  if (isLoading) {
    return (
      <div className="not-found-page">
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
    <div className="not-found-page">
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Helmet>
        <title>{translations.title}</title>
        <meta name="description" content={translations.description} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      
      <main className="not-found-main">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-hero">
              <h1 className="not-found-title">404</h1>
              <h2 className="not-found-subtitle">{translations.subtitle}</h2>
              <p className="not-found-description">
                {translations.pageDescription}
              </p>

              <div className="not-found-actions">
                <Link to="/" className="btn-primary">
                  {translations.backToHome}
                </Link>
                <Link to="/shop" className="btn-secondary">
                  {translations.viewAllProducts}
                </Link>
              </div>
            </div>

            {/* Featured Products Section */}
            <div className="not-found-products">
              <h3 className="products-section-title">
                {translations.featuredProductsTitle}
              </h3>
              <div className="products-grid">
                {featuredProducts.map((product) => (
                  <Link 
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className="product-card"
                  >
                    <div className="product-image-wrapper">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                        width="300"
                        height="200"
                      />
                    </div>
                    <div className="product-info">
                      <h4 className="product-name">{product.name}</h4>
                      <p className="product-category">
                        {product.categories.join(', ')}
                      </p>
                      <p className="product-price">{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="products-cta">
                <Link to="/shop" className="btn-view-all">
                  {translations.viewAllProductsLink}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default NotFound
