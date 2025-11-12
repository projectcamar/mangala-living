import React, { useState, useMemo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import CategoryAIContent from '../components/CategoryAIContent'
import CurrencyHighlight from '../components/CurrencyHighlight'
import { ALL_PRODUCTS } from '../data/products'
import { CATEGORIES } from '../data/categories'
import { generateMerchantStructuredData } from '../utils/structuredData'
import { generateLanguageSpecificMeta, generateLocalizedUrls, getProductImageUrl } from '../utils/seo'
import { convertIDRToUSD } from '../utils/currencyConverter'
import { getProductName } from '../data/productDescriptions'
import './ProductCategory.css'
import './Shop.css'

const PRODUCTS_PER_PAGE = 24

const Shop: React.FC = () => {
  const [sortBy, setSortBy] = useState('default')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 60000000])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [usdPrices, setUsdPrices] = useState<{ [key: number]: string }>({})
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  // Language detection
  useEffect(() => {
    const detectLanguage = async () => {
      const { detectLanguage: detectLang } = await import('../utils/languageManager')
      const lang = await detectLang(location.pathname, location.search)
      setIsIndonesian(lang === 'id')
    }

    detectLanguage()
  }, [location.pathname, location.search])

  useEffect(() => {
    const convertPrices = async () => {
      const prices: { [key: number]: string } = {}
      for (const product of ALL_PRODUCTS) {
        const usdPrice = await convertIDRToUSD(product.price)
        prices[product.id] = usdPrice
      }
      setUsdPrices(prices)
    }
    convertPrices()
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
    setCurrentPage(1)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newRange = [...priceRange]
    const newValue = parseInt(e.target.value)
    
    if (index === 0) {
      // Min slider - ensure it doesn't exceed max
      newRange[0] = Math.min(newValue, priceRange[1])
    } else {
      // Max slider - ensure it doesn't go below min
      newRange[1] = Math.max(newValue, priceRange[0])
    }
    
    setPriceRange(newRange as [number, number])
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 60000000])
    setCurrentPage(1)
  }

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...ALL_PRODUCTS]

    // Filter by category
    if (selectedCategories.length > 0) {
      products = products.filter(product =>
        product.categories.some(cat => selectedCategories.includes(cat))
      )
    }

    // Filter by price
    products = products.filter(product => {
      const price = parseInt(product.price.replace(/\D/g, ''))
      return price >= priceRange[0] && price <= priceRange[1]
    })

    // Sort
    if (sortBy === 'price-low') {
      products = products.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''))
        const priceB = parseInt(b.price.replace(/\D/g, ''))
        return priceA - priceB
      })
    } else if (sortBy === 'price-high') {
      products = products.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''))
        const priceB = parseInt(b.price.replace(/\D/g, ''))
        return priceB - priceA
      })
    }

    return products
  }, [sortBy, selectedCategories, priceRange])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex)

  const getPaginationRange = () => {
    const range: (number | string)[] = []
    const showEllipsis = totalPages > 7

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) range.push(i)
        range.push('...')
        range.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        range.push(1)
        range.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) range.push(i)
      } else {
        range.push(1)
        range.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) range.push(i)
        range.push('...')
        range.push(totalPages)
      }
    }

    return range
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' }
  ]

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  return (
    <div className="product-category-page shop-page-layout">
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>All Products - Bar Set Lounge Set Storage Furniture Industrial | Mangala Living</title>
        <meta name="description" content="Browse all industrial furniture: bar set outdoor, lounge set sofa bench, storage rack display, new arrivals untuk cafe restoran hotel. Kualitas terbaik, harga terjangkau." />
        <meta name="keywords" content="bar set, lounge set, sofa bench, storage rack, new arrivals, outdoor furniture set, industrial furniture, furniture besi, furniture custom, furniture cafe, furniture restoran, mangala living, furniture bekasi" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`shop-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        
        {/* Open Graph */}
        <meta property="og:title" content="All Products - Bar Set Lounge Set Storage Furniture Industrial | Mangala Living" />
        <meta property="og:description" content="Browse all furniture industrial: bar set outdoor, lounge set, sofa bench, storage rack, new arrivals untuk cafe restoran hotel." />
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="All Products - Bar Set Lounge Set Storage New Arrivals | Mangala Living" />
        <meta name="twitter:description" content="Browse bar set outdoor, lounge set sofa bench, storage rack display, new arrivals furniture industrial at Mangala Living." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Industrial Furniture Collection - Mangala Living",
            "description": "Browse our complete collection of industrial furniture for cafes, restaurants, and offices. Premium quality furniture made in Indonesia since 1999.",
            "url": "https://mangala-living.com/shop",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ALL_PRODUCTS.length,
              "itemListElement": ALL_PRODUCTS.map((product, index) => {
                const imageUrl = getProductImageUrl(product.image, product.slug)
                const priceNumeric = product.price.replace(/[^\d]/g, '')
                const description = `Industrial furniture ${product.name} by Mangala Living. Premium quality furniture made in Indonesia since 1999.`
                
                return {
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Product",
                    "name": product.name,
                    "description": description,
                    "url": `https://mangala-living.com/product/${product.slug}`,
                    "image": imageUrl,
                    "brand": {
                      "@type": "Brand",
                      "name": "Mangala Living"
                    },
                    "offers": {
                      "@type": "Offer",
                      "price": priceNumeric,
                      "priceCurrency": "IDR",
                      "availability": "https://schema.org/InStock",
                      "priceValidUntil": "2026-12-31",
                      "url": `https://mangala-living.com/product/${product.slug}`,
                      "hasMerchantReturnPolicy": {
                        "@type": "MerchantReturnPolicy",
                        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                        "merchantReturnDays": 30,
                        "returnMethod": "https://schema.org/ReturnByMail",
                        "returnFees": "https://schema.org/FreeReturn",
                        "applicableCountry": "ID"
                      },
                      "shippingDetails": {
                        "@type": "OfferShippingDetails",
                        "shippingRate": {
                          "@type": "MonetaryAmount",
                          "value": "0",
                          "currency": "IDR"
                        },
                        "shippingDestination": {
                          "@type": "DefinedRegion",
                          "addressCountry": "ID"
                        },
                        "deliveryTime": {
                          "@type": "ShippingDeliveryTime",
                          "businessDays": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
                          },
                          "cutoffTime": "14:00",
                          "handlingTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 3,
                            "maxValue": 5,
                            "unitCode": "DAY"
                          },
                          "transitTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 1,
                            "maxValue": 3,
                            "unitCode": "DAY"
                          }
                        }
                      },
                      "seller": {
                        "@type": "Organization",
                        "name": "Mangala Living",
                        "url": "https://mangala-living.com",
                        "logo": "https://mangala-living.com/logo.png",
                        "image": "https://mangala-living.com/og-image.jpg",
                        "description": "Premium Industrial Scandinavian Furniture for Coffee Shops, Restaurants & Offices. Custom Solutions Since 1999."
                      }
                    },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "127",
                  "reviewCount": "127",
                  "bestRating": "5",
                  "worstRating": "1"
                }
                  }
                }
              })
            }
          })}
        </script>
        
        {/* Merchant Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateMerchantStructuredData())}
        </script>
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      <CurrencyHighlight isIndonesian={isIndonesian} />
      
      <main className="category-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          
          <h1 className="category-page-title">All Product</h1>
          
          {/* Mobile Filter Toggle */}
          <div className="mobile-filter-toggle">
            <button 
              className="filter-toggle-btn"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <span>Filters</span>
              <ChevronDown size={16} />
            </button>
          </div>
          
          <div className="shop-layout">
            {/* Sidebar */}
            <aside className={`shop-sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
              <div className="filter-section">
                <h3 className="filter-title">Categories</h3>
                <div className="filter-options">
                  {CATEGORIES.map(category => (
                    <label key={category} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Price</h3>
                <div className="price-range">
                  <div className="dual-range-slider">
                    <input
                      type="range"
                      min="0"
                      max="60000000"
                      step="100000"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="price-slider price-slider-min"
                    />
                    <input
                      type="range"
                      min="0"
                      max="60000000"
                      step="100000"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="price-slider price-slider-max"
                    />
                  </div>
                  <div className="price-labels">
                    <span>Rp{priceRange[0].toLocaleString('id-ID')}</span>
                    <span>Rp{priceRange[1].toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </div>

              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear All
              </button>
            </aside>

            {/* Main Content */}
            <div className="shop-content">
              <div className="category-controls">
                <p className="showing-results">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedProducts.length)} of {filteredAndSortedProducts.length} results
                </p>
                
                <div className="sort-dropdown">
                  <button 
                    className="sort-button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Sort by: {sortBy === 'default' ? 'Default' : sortBy === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                    <ChevronDown size={16} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="sort-options">
                      <button onClick={() => { setSortBy('default'); setIsDropdownOpen(false); }}>Default</button>
                      <button onClick={() => { setSortBy('price-low'); setIsDropdownOpen(false); }}>Price: Low to High</button>
                      <button onClick={() => { setSortBy('price-high'); setIsDropdownOpen(false); }}>Price: High to Low</button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="category-products-grid">
                {currentProducts.map((product) => {
                  const translatedName = getProductName(product.slug, isIndonesian) || product.name
                  return (
                    <Link 
                      key={product.id}
                      to={`/product/${product.slug}`}
                      className="category-product-card"
                    >
                      <div className="category-product-image">
                        <img 
                          src={product.image} 
                          alt={`${translatedName} - Industrial Furniture ${product.categories.join(' ')} Mangala Living Shop`}
                          title={`${translatedName} - Premium Industrial Furniture ${product.categories.join(' ')} - Shop Now`}
                          loading="lazy"
                          width="300"
                          height="200"
                          itemProp="image"
                          data-image-type="shop-product"
                          data-product-name={translatedName}
                          data-product-slug={product.slug}
                          data-category={product.categories.join(',')}
                        />
                      </div>
                      <div className="category-product-info">
                        <h3 className="category-product-name">{translatedName}</h3>
                      <p className="category-product-cats">{product.categories.join(', ')}</p>
                      {usdPrices[product.id] ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <p
                            className="category-product-price"
                            style={{
                              margin: 0,
                              fontSize: '0.875rem',
                              fontWeight: 600,
                              color: '#333'
                            }}
                          >
                            {isIndonesian ? product.price : usdPrices[product.id]}
                          </p>
                          <p
                            style={{
                              margin: 0,
                              fontSize: '0.75rem',
                              fontWeight: 400,
                              color: '#999'
                            }}
                          >
                            {isIndonesian ? usdPrices[product.id] : product.price}
                          </p>
                        </div>
                      ) : (
                        <p className="category-product-price">{product.price}</p>
                      )}
                    </div>
                  </Link>
                  )
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button 
                    className="pagination-btn pagination-prev"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>

                  {getPaginationRange().map((page, index) => (
                    page === '...' ? (
                      <span key={`ellipsis-${index}`} className="pagination-ellipsis">&hellip;</span>
                    ) : (
                      <button
                        key={page}
                        className={`pagination-btn pagination-number ${currentPage === page ? 'active' : ''}`}
                        onClick={() => setCurrentPage(page as number)}
                      >
                        Page {page}
                      </button>
                    )
                  ))}

                  <button 
                    className="pagination-btn pagination-next"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
              
              {/* AI-Optimized Content for Shop Page */}
              <CategoryAIContent 
                category="All Products"
                productCount={ALL_PRODUCTS.length}
                isIndonesian={isIndonesian}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default Shop
