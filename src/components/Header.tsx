import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Search, ChevronDown } from 'lucide-react'
import './Header.css'
import { ALL_PRODUCTS } from '../data/products'
import { generateCatalog } from '../utils/catalogGenerator'
import { trackEvent } from '../utils/analytics'

interface HeaderProps {
  isIndonesian?: boolean
}

const Header: React.FC<HeaderProps> = ({ isIndonesian = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    setSearchQuery('')
  }

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen)
  }

  const handleLanguageKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleLanguage()
    } else if (e.key === 'Escape') {
      setIsLanguageOpen(false)
    }
  }

  const handleLanguageChange = (lang: 'id' | 'en') => {
    setIsLanguageOpen(false)
    const currentPath = location.pathname
    
    // Track language switch
    const currentLang = getCurrentLanguageFromUrl() || (isIndonesian ? 'id' : 'en')
    trackEvent.languageSwitch(currentLang, lang)
    
    // Remove existing language prefix if any
    let cleanPath = currentPath
    
    // Handle /id/ and /eng/ (with trailing slash)
    if (currentPath.startsWith('/id/') || currentPath.startsWith('/eng/')) {
      cleanPath = currentPath.substring(4) // Remove /id/ or /eng/
    } 
    // Handle /id and /eng (without trailing slash) - but not /id/ or /eng/
    else if (currentPath === '/id' || currentPath === '/eng') {
      cleanPath = '/' // Go to home
    }
    // Handle /id or /eng followed by more path (like /id/product-category/...)
    else if (currentPath.startsWith('/id') || currentPath.startsWith('/eng')) {
      cleanPath = currentPath.substring(3) // Remove /id or /eng
    }
    
    // If cleanPath is empty or just '/', go to home with language prefix for SEO
    if (!cleanPath || cleanPath === '/') {
      const newPath = lang === 'id' ? '/id' : '/eng'
      navigate(newPath)
      return
    }

    // For other paths, preserve the path and set ?lang=...
    const params = new URLSearchParams(location.search)
    params.set('lang', lang)
    navigate({ pathname: cleanPath, search: `?${params.toString()}` })
  }


  const getCurrentLanguageFromUrl = () => {
    const path = location.pathname
    if (path.startsWith('/id')) return 'id'
    if (path.startsWith('/eng')) return 'en'
    const params = new URLSearchParams(location.search)
    const qLang = params.get('lang')
    if (qLang === 'id' || qLang === 'en') return qLang
    return null
  }

  const getCurrentLanguageDisplay = () => {
    const urlLang = getCurrentLanguageFromUrl()
    if (urlLang) return urlLang
    return isIndonesian ? 'id' : 'en'
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('.language-switcher')) {
          setIsLanguageOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isLanguageOpen])

  return (
    <header className={`header ${!isHeaderVisible ? 'header-hidden' : ''}`} role="banner" itemScope itemType="https://schema.org/WPHeader">
      {/* Top Header */}
      <div className="header-top">
      <div className="container">
          <div className="header-top-content">
            <nav className="header-top-nav">
              <Link to="/about" className="header-top-link">About</Link>
              <Link to="/blog" className="header-top-link">Blog</Link>
              <Link to="/contact-us" className="header-top-link">Contact Us</Link>
            </nav>
            
            <Link to="/" className="logo">
              <span className="logo-text">MANGALA</span>
            </Link>
            
            <div className="header-top-actions">
              {/* Language Switcher */}
              <div className="language-switcher">
                <button 
                  className="language-btn" 
                  onClick={toggleLanguage}
                  onKeyDown={handleLanguageKeyDown}
                  aria-label={isIndonesian ? "Pilih bahasa" : "Choose language"}
                  aria-expanded={isLanguageOpen}
                  aria-haspopup="true"
                  tabIndex={0}
                >
                  <span className={`flag ${getCurrentLanguageDisplay() === 'id' ? 'flag-id' : 'flag-us'}`}></span>
                  <span className="language-text">{getCurrentLanguageDisplay() === 'id' ? "ID" : "EN"}</span>
                  <ChevronDown size={16} />
                </button>
                {isLanguageOpen && (
                  <div className="language-dropdown" onClick={(e) => e.stopPropagation()} role="menu" aria-label={isIndonesian ? "Pilih bahasa" : "Choose language"}>
                    <button 
                      className="language-option"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => handleLanguageChange('id')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleLanguageChange('id')
                        }
                      }}
                    >
                      <span className="flag flag-id"></span>
                      <span>Indonesia</span>
                    </button>
                    <button 
                      className="language-option"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => handleLanguageChange('en')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleLanguageChange('en')
                        }
                      }}
                    >
                      <span className="flag flag-us"></span>
                      <span>English</span>
                    </button>
                  </div>
                )}
              </div>
              
              <button className="search-btn" aria-label={isIndonesian ? "Cari" : "Search"} onClick={toggleSearch}>
                <Search size={20} />
                <span>{isIndonesian ? "Cari" : "Search"}</span>
              </button>
        <button 
          className="catalog-btn" 
          onClick={async (event) => {
            try {
              // Show loading state
              const button = event.target as HTMLButtonElement
              button.textContent = isIndonesian ? 'MEMBUAT...' : 'GENERATING...'
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
                        <h2>${isIndonesian ? "Membuat Katalog..." : "Generating Catalog..."}</h2>
                        <p>${isIndonesian ? "Mohon tunggu sementara kami menyiapkan katalog furniture Anda" : "Please wait while we prepare your furniture catalog"}</p>
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
              button.textContent = isIndonesian ? 'UNDUH KATALOG KAMI' : 'DOWNLOAD OUR CATALOG'
              button.disabled = false
              
            } catch (error) {
              console.error('Error generating catalog:', error)
              alert(isIndonesian ? 'Gagal mengunduh katalog. Silakan coba lagi.' : 'Failed to download catalog. Please try again.')
              
              // Reset button on error
              const button = event.target as HTMLButtonElement
              button.textContent = isIndonesian ? 'UNDUH KATALOG KAMI' : 'DOWNLOAD OUR CATALOG'
              button.disabled = false
            }
          }}
        >
          {isIndonesian ? "UNDUH KATALOG KAMI" : "DOWNLOAD OUR CATALOG"}
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
              aria-label={isIndonesian ? "Buka menu" : "Toggle menu"}
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
              <button className="search-close-btn" onClick={closeSearch} aria-label={isIndonesian ? "Tutup pencarian" : "Close search"}>
                ×
              </button>
              <div className="search-modal-inner">
                <div className="search-input-wrapper">
                  <Search size={22} className="search-input-icon" />
                  <input
                    type="text"
                    className="search-modal-input"
                    placeholder={isIndonesian ? "Cari di sini" : "Search here"}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    autoFocus
                  />
                  {searchQuery ? (
                    <>
                      <button className="search-clear-btn" onClick={clearSearch} aria-label={isIndonesian ? "Hapus pencarian" : "Clear search"}>
                        ×
                      </button>
                      <button className="search-submit-btn" onClick={handleSearch} aria-label={isIndonesian ? "Cari" : "Search"}>
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
