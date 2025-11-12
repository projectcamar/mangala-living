import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Search, ChevronDown } from 'lucide-react'
import './Header.css'
import { ALL_PRODUCTS } from '../data/products'
import { generateCatalog } from '../utils/catalogGenerator'
import { trackEvent } from '../utils/analytics'
import { sendBackgroundEmail } from '../utils/emailHelpers'
import { storeLanguage } from '../utils/languageManager'

interface HeaderProps {
  isIndonesian?: boolean
  language?: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es'
}

const Header: React.FC<HeaderProps> = ({ isIndonesian = false }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSearchClosing, setIsSearchClosing] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [showAllCategories, setShowAllCategories] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()


  const toggleSearch = () => {
    if (isSearchOpen) {
      closeSearch()
    } else {
      setIsSearchOpen(true)
      setIsSearchClosing(false)
      setSearchQuery('')
    }
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

  const handleLanguageChange = (lang: 'id' | 'en' | 'ar' | 'zh' | 'ja' | 'es') => {
    setIsLanguageOpen(false)
    const currentPath = location.pathname
    
    // Store language preference
    storeLanguage(lang)
    
    // Track language switch
    const currentLang = getCurrentLanguageFromUrl() || (isIndonesian ? 'id' : 'en')
    trackEvent.languageSwitch(currentLang, lang)
    
    // Remove existing language prefix if any
    let cleanPath = currentPath
    
    // Handle /id/, /eng/, /ar/, /zh/, /ja/, /es/ (with trailing slash)
    if (currentPath.startsWith('/id/') || currentPath.startsWith('/eng/') || currentPath.startsWith('/ar/') || currentPath.startsWith('/zh/') || currentPath.startsWith('/ja/') || currentPath.startsWith('/es/')) {
      cleanPath = currentPath.substring(4) // Remove language prefix
    } 
    // Handle /id, /eng, /ar, /zh, /ja, /es (without trailing slash)
    else if (currentPath === '/id' || currentPath === '/eng' || currentPath === '/ar' || currentPath === '/zh' || currentPath === '/ja' || currentPath === '/es') {
      cleanPath = '/' // Go to home
    }
    // Handle language prefix followed by more path
    else if (currentPath.startsWith('/id') || currentPath.startsWith('/eng') || currentPath.startsWith('/ar') || currentPath.startsWith('/zh') || currentPath.startsWith('/ja') || currentPath.startsWith('/es')) {
      cleanPath = currentPath.substring(3) // Remove language prefix
    }
    
    // If cleanPath is empty or just '/', go to home with language prefix for SEO
    if (!cleanPath || cleanPath === '/') {
      const newPath = lang === 'id' ? '/id' : (lang === 'ar' ? '/ar' : (lang === 'zh' ? '/zh' : (lang === 'ja' ? '/ja' : (lang === 'es' ? '/es' : '/eng'))))
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
    if (path.startsWith('/ar')) return 'ar'
    if (path.startsWith('/zh')) return 'zh'
    if (path.startsWith('/ja')) return 'ja'
    if (path.startsWith('/es')) return 'es'
    const params = new URLSearchParams(location.search)
    const qLang = params.get('lang')
    if (qLang === 'id' || qLang === 'en' || qLang === 'ar' || qLang === 'zh' || qLang === 'ja' || qLang === 'es') return qLang
    return null
  }

  const getCurrentLanguageDisplay = () => {
    const urlLang = getCurrentLanguageFromUrl()
    if (urlLang) return urlLang.toUpperCase()
    return isIndonesian ? 'ID' : 'EN'
  }

  const getCurrentFlag = () => {
    const urlLang = getCurrentLanguageFromUrl()
    if (urlLang === 'id') return 'flag-id'
    if (urlLang === 'ar') return 'flag-ar'
    if (urlLang === 'zh') return 'flag-zh'
    if (urlLang === 'ja') return 'flag-ja'
    if (urlLang === 'es') return 'flag-es'
    return 'flag-us'
  }

  const closeSearch = () => {
    setIsSearchClosing(true)
    setTimeout(() => {
      setIsSearchOpen(false)
      setIsSearchClosing(false)
      setSearchQuery('')
    }, 350) // Match the CSS transition duration for closing animation
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
                  <span className={`flag ${getCurrentFlag()}`}></span>
                  <span className="language-text">{getCurrentLanguageDisplay()}</span>
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
                    <button 
                      className="language-option"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => handleLanguageChange('ar')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleLanguageChange('ar')
                        }
                      }}
                    >
                      <span className="flag flag-ar"></span>
                      <span>العربية</span>
                    </button>
                    <button 
                      className="language-option"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => handleLanguageChange('zh')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleLanguageChange('zh')
                        }
                      }}
                    >
                      <span className="flag flag-zh"></span>
                      <span>中文</span>
                    </button>
                    <button 
                      className="language-option"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => handleLanguageChange('ja')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleLanguageChange('ja')
                        }
                      }}
                    >
                      <span className="flag flag-ja"></span>
                      <span>日本語</span>
                    </button>
                    <button 
                      className="language-option"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => handleLanguageChange('es')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleLanguageChange('es')
                        }
                      }}
                    >
                      <span className="flag flag-es"></span>
                      <span>Español</span>
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
                          border-top: 4px solid #8B7355;
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
              
              // Send background email notification
              sendBackgroundEmail('catalog_download', {})

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
          {/* Desktop Navigation */}
          <nav className="category-nav">
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

          {/* Mobile Compact Category Navigation */}
          <nav className="mobile-category-nav">
            {[
              { to: "/product-category/new-arrivals", label: "New Arrivals" },
              { to: "/product-category/lounge-seating-set", label: "Lounge Set" },
              { to: "/product-category/industrial-sofa-bench", label: "Sofa Bench" },
              { to: "/product-category/dining-set-collection", label: "Dining Set" },
              { to: "/product-category/bar-furniture-collection", label: "Bar Set" },
              { to: "/product-category/balcony-outdoor-collection", label: "Outdoor" },
              { to: "/product-category/daybed-lounge-frame", label: "Daybed" },
              { to: "/product-category/accessories-storage", label: "Storage" },
              { to: "/product-category/table-collection", label: "Tables" },
              { to: "/product-category/dining-table-collection", label: "Dine Table" }
            ].slice(0, showAllCategories ? 10 : 5).map((category) => (
              <Link 
                key={category.to}
                to={category.to} 
                className="mobile-category-link"
              >
                {category.label}
              </Link>
            ))}
            {!showAllCategories && (
              <button 
                className="mobile-category-more"
                onClick={() => setShowAllCategories(true)}
                aria-label={isIndonesian ? "Tampilkan lebih banyak" : "Show more"}
              >
                More
              </button>
            )}
          </nav>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <>
          <div className={`search-modal-backdrop ${isSearchClosing ? 'closing' : ''}`} onClick={closeSearch}></div>
          <div className={`search-modal-container ${isSearchClosing ? 'closing' : ''}`}>
            <div className="search-modal-content">
              <button className="search-close-btn" onClick={closeSearch} aria-label={isIndonesian ? "Tutup pencarian" : "Close search"}>
                x
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
                        x
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
                          <img 
                            src={product.image} 
                            alt={`${product.name} - ${product.category} Industrial Furniture Mangala Living`}
                            title={`${product.name} - Quick Search Result`}
                            loading="lazy"
                            width="60"
                            height="60"
                            itemProp="image"
                            data-image-type="header-search"
                            data-product-name={product.name}
                          />
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
