import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import './Header.css'
import { ALL_PRODUCTS } from '../data/products'
import { generateCatalog } from '../utils/catalogGenerator'
import { trackEvent } from '../utils/analytics'
import LanguageSwitcher from './LanguageSwitcher'
import { useIPDetection } from '../hooks/useIPDetection'

const Header: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { language: detectedLanguage } = useIPDetection()

  // Auto-detect language on first load
  useEffect(() => {
    if (detectedLanguage && !localStorage.getItem('i18nextLng')) {
      i18n.changeLanguage(detectedLanguage)
    }
  }, [detectedLanguage, i18n])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    setSearchQuery('')
  }

  const closeSearch = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Track search query
      trackEvent.searchQuery(searchQuery.trim(), filteredProducts.length)
      closeSearch()
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  // All products for search - use centralized data
  const filteredProducts = searchQuery.trim() 
    ? ALL_PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
      .map(p => ({
        name: p.name,
        category: p.categories.join(', '),
        slug: p.slug,
        image: p.image
      }))
    : []

  useEffect(() => {
    const handleScroll = () => {
      // Don't hide header if search is open
      if (isSearchOpen) {
        setIsHeaderVisible(true)
        return
      }

      const currentScrollY = window.scrollY
      
      // Show header at top (first 100px)
      if (currentScrollY < 100) {
        setIsHeaderVisible(true)
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isSearchOpen])

  return (
    <header className={`header ${!isHeaderVisible ? 'header-hidden' : ''}`} role="banner" itemScope itemType="https://schema.org/WPHeader">
      {/* Top Header */}
      <div className="header-top">
      <div className="container">
          <div className="header-top-content">
            <nav className="header-top-nav">
              <Link to="/about" className="header-top-link">{t('common.about')}</Link>
              <Link to="/blog" className="header-top-link">{t('common.blog')}</Link>
              <Link to="/shipping-information" className="header-top-link">{t('common.shipping')}</Link>
              <Link to="/contact-us" className="header-top-link">{t('common.contact')}</Link>
            </nav>
            
            <Link to="/" className="logo">
              <span className="logo-text">MANGALA</span>
            </Link>
            
            <div className="header-top-actions">
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              <button className="search-btn" aria-label={t('common.search')} onClick={toggleSearch}>
                <Search size={20} />
                <span>{t('common.search')}</span>
              </button>
        <button 
          className="catalog-btn" 
          onClick={async (event) => {
            try {
              // Show loading state
              const button = event.target as HTMLButtonElement
              button.textContent = t('common.loading')
              button.disabled = true
              
              // Generate catalog in new tab
              const newWindow = window.open('', '_blank', 'width=800,height=600')
              if (newWindow) {
                newWindow.document.write(`
                  <html>
                    <head>
                      <title>Generating Catalog...</title>
                      <style>
                        body { 
                          font-family: Arial, sans-serif; 
                          display: flex; 
                          justify-content: center; 
                          align-items: center; 
                          height: 100vh; 
                          margin: 0; 
                          background: #f5f5f5;
                        }
                        .loading {
                          text-align: center;
                          padding: 40px;
                          background: white;
                          border-radius: 8px;
                          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        }
                        .spinner {
                          border: 4px solid #f3f3f3;
                          border-top: 4px solid #ff6b35;
                          border-radius: 50%;
                          width: 40px;
                          height: 40px;
                          animation: spin 1s linear infinite;
                          margin: 0 auto 20px;
                        }
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                        h2 { color: #333; margin-bottom: 10px; }
                        p { color: #666; margin: 0; }
                      </style>
                    </head>
                    <body>
                      <div class="loading">
                        <div class="spinner"></div>
                        <h2>${t('common.loading')}</h2>
                        <p>${t('common.loading')}</p>
                      </div>
                    </body>
                  </html>
                `)
              }
              
              await generateCatalog()
              
              // Track catalog download
              trackEvent.catalogDownload()
              
              // Close the loading window
              if (newWindow) {
                newWindow.close()
              }
              
              // Reset button
              button.textContent = t('common.getQuote')
              button.disabled = false
              
            } catch (error) {
              console.error('Error generating catalog:', error)
              alert(t('common.error'))
              
              // Reset button on error
              const button = event.target as HTMLButtonElement
              button.textContent = t('common.getQuote')
              button.disabled = false
            }
          }}
        >
          {t('common.getQuote')}
              </button>
            </div>
          </div>
        </div>
          </div>
          
      {/* Bottom Header - Category Navigation */}
      <div className="header-bottom">
        <div className="container">
          <nav className={`category-nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/product-category/new-arrivals" className="category-link">New Arrivals</Link>
            <Link to="/product-category/lounge-seating-set" className="category-link">Lounge Set</Link>
            <Link to="/product-category/industrial-sofa-bench" className="category-link">Sofa Bench</Link>
            <Link to="/product-category/dining-set-collection" className="category-link">Dining Set</Link>
            <Link to="/product-category/bar-furniture-collection" className="category-link">Bar Set</Link>
            <Link to="/product-category/balcony-outdoor-collection" className="category-link">Outdoor</Link>
            <Link to="/product-category/daybed-lounge-frame" className="category-link">Daybed</Link>
            <Link to="/product-category/accessories-storage" className="category-link">Storage</Link>
            <Link to="/product-category/table-collection" className="category-link">Tables</Link>
            <Link to="/product-category/dining-table-collection" className="category-link">Dine Table</Link>
          </nav>

            <button 
            className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label={t('common.menu')}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <>
          <div className="search-modal-backdrop" onClick={closeSearch}></div>
          <div className="search-modal-container">
            <div className="search-modal-content">
              <button className="search-close-btn" onClick={closeSearch} aria-label={t('common.close')}>
                ×
              </button>
              <div className="search-modal-inner">
                <div className="search-input-wrapper">
                  <Search size={22} className="search-input-icon" />
                  <input
                    type="text"
                    className="search-modal-input"
                    placeholder={t('header.search.placeholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    autoFocus
                  />
                  {searchQuery ? (
                    <>
                      <button className="search-clear-btn" onClick={clearSearch} aria-label={t('common.close')}>
                        ×
                      </button>
                      <button className="search-submit-btn" onClick={handleSearch} aria-label={t('common.search')}>
                        <Search size={20} />
                      </button>
                    </>
                  ) : null}
                </div>

                {/* Search Results */}
                {filteredProducts.length > 0 && (
                  <div className="search-results">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/product/${product.slug}`}
                        className="search-result-item"
                        onClick={closeSearch}
                      >
                        <div className="search-result-image">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="search-result-info">
                          <div className="search-result-name">{product.name}</div>
                          <div className="search-result-category">{product.category}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Suggestions - only show when no search query */}
                {!searchQuery && (
                  <div className="search-suggestions">
                    <span className="suggestions-label">Suggested:</span>
                    <Link to="/product-category/lounge-seating-set" className="suggestion-tag" onClick={closeSearch}>
                      Lounge Set
                    </Link>
                    <Link to="/product-category/industrial-sofa-bench" className="suggestion-tag" onClick={closeSearch}>
                      Sofa Bench
                    </Link>
                    <Link to="/product-category/dining-set-collection" className="suggestion-tag" onClick={closeSearch}>
                      Dining Set
                    </Link>
                    <Link to="/product-category/bar-furniture-collection" className="suggestion-tag" onClick={closeSearch}>
                      Bar Set
                    </Link>
                    <Link to="/product-category/accessories-storage" className="suggestion-tag" onClick={closeSearch}>
                      Storage
                    </Link>
                  </div>
                )}
          </div>
        </div>
      </div>
        </>
      )}
    </header>
  )
}

export default Header