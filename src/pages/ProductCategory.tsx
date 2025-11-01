import React, { useState, useMemo, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import CategoryAIContent from '../components/CategoryAIContent'
import CurrencyHighlight from '../components/CurrencyHighlight'
import { ALL_PRODUCTS } from '../data/products'
import { CATEGORY_MAP } from '../data/categories'
import { generateCanonicalUrl, generateHreflangTags } from '../utils/seo'
import { convertIDRToUSD } from '../utils/currencyConverter'
import './ProductCategory.css'

const ProductCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>()
  const location = useLocation()
  const [sortBy, setSortBy] = useState('default')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isIndonesian, setIsIndonesian] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [usdPrices, setUsdPrices] = useState<{ [key: number]: string }>({})

  const categoryName = CATEGORY_MAP[category || ''] || 'Products'

  // Language detection
  useEffect(() => {
    const detectLanguage = async () => {
      const { detectLanguage: detectLang } = await import('../utils/languageManager')
      const lang = await detectLang(location.pathname, location.search)
      setIsIndonesian(lang === 'id')
      setIsLoading(false)
    }

    detectLanguage()
  }, [location.pathname, location.search])

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [category])

  // Convert prices to USD
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

  const filteredProducts = useMemo(() => {
    let products = ALL_PRODUCTS.filter(product => 
      product.categories.some(cat => cat.toLowerCase() === categoryName.toLowerCase())
    )

    // Sort products
    if (sortBy === 'price-low') {
      products = [...products].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''))
        const priceB = parseInt(b.price.replace(/\D/g, ''))
        return priceA - priceB
      })
    } else if (sortBy === 'price-high') {
      products = [...products].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''))
        const priceB = parseInt(b.price.replace(/\D/g, ''))
        return priceB - priceA
      })
    }

    return products
  }, [categoryName, sortBy])

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: categoryName, path: `/product-category/${category}` }
  ]

  // Translations
  const translations = {
    showingResults: isIndonesian 
      ? `Menampilkan 1-${filteredProducts.length} dari ${filteredProducts.length} hasil`
      : `Showing 1-${filteredProducts.length} of ${filteredProducts.length} results`,
    sortBy: isIndonesian ? 'Urutkan:' : 'Sort by:',
    default: isIndonesian ? 'Default' : 'Default',
    priceLow: isIndonesian ? 'Harga: Rendah ke Tinggi' : 'Price: Low to High',
    priceHigh: isIndonesian ? 'Harga: Tinggi ke Rendah' : 'Price: High to Low',
    noResults: isIndonesian ? 'Tidak ada produk ditemukan' : 'No products found'
  }

  if (isLoading) {
    return (
      <div className="product-category-page">
        <AnnouncementBar />
        <Header isIndonesian={isIndonesian} />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh',
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
        <Footer />
      </div>
    )
  }

  return (
    <div className="product-category-page">
      <AnnouncementBar />
      <Helmet>
        <title>{categoryName} Industrial Bekasi - Furniture Berkualitas | Mangala Living</title>
        <meta name="description" content={`${categoryName} industrial custom dari Mangala Living Bekasi. Harga pabrik, kualitas premium, pengalaman 25+ tahun. Workshop langsung melayani Jabodetabek. ${filteredProducts.length} produk tersedia.`} />
        <meta name="keywords" content={`${categoryName.toLowerCase()}, ${categoryName.toLowerCase()} bekasi, ${categoryName.toLowerCase()} industrial, ${categoryName.toLowerCase()} custom, furniture industrial bekasi, furniture besi custom, mangala living`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={generateCanonicalUrl(`/product-category/${category}`)} />
        
        {/* Hreflang for language variants */}
        <link rel="alternate" hrefLang="id" href={generateHreflangTags(`/product-category/${category}`).id} />
        <link rel="alternate" hrefLang="en" href={generateHreflangTags(`/product-category/${category}`).en} />
        <link rel="alternate" hrefLang="x-default" href={generateHreflangTags(`/product-category/${category}`).default} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${categoryName} Industrial - Mangala Living Bekasi`} />
        <meta property="og:description" content={`${categoryName} industrial custom dengan harga pabrik. Workshop di Bekasi, pengalaman 25+ tahun.`} />
        <meta property="og:url" content={`https://mangala-living.com/product-category/${category}`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${categoryName} Industrial - Mangala Living`} />
        <meta name="twitter:description" content={`${filteredProducts.length} produk ${categoryName} industrial berkualitas premium.`} />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mangala-living.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": categoryName,
                "item": `https://mangala-living.com/product-category/${category}`
              }
            ]
          })}
        </script>
        
        {/* CollectionPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${categoryName} Industrial Furniture - Mangala Living`,
            "description": `Collection of ${categoryName} industrial furniture. Premium quality, factory prices, 25+ years experience. Bekasi workshop serving Jabodetabek.`,
            "url": `https://mangala-living.com/product-category/${category}`,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": filteredProducts.length,
              "itemListElement": filteredProducts.map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": product.name,
                  "url": `https://mangala-living.com/product/${product.slug}`,
                  "image": product.image,
                  "offers": {
                    "@type": "Offer",
                    "price": product.price.replace(/[^\d]/g, ''),
                    "priceCurrency": "IDR",
                    "availability": "https://schema.org/InStock"
                  }
                }
              }))
            }
          })}
        </script>
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      <CurrencyHighlight isIndonesian={isIndonesian} />
      
      <main className="category-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          
          <h1 className="category-page-title">{categoryName}</h1>
          
          <div className="category-controls">
            {filteredProducts.length > 0 ? (
              <p className="showing-results">
                {translations.showingResults}
              </p>
            ) : (
              <p className="showing-results">{translations.noResults}</p>
            )}
            
            {filteredProducts.length > 0 && (
              <div className="sort-dropdown">
                <button 
                  className="sort-button" 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {translations.sortBy} {sortBy === 'default' ? translations.default : sortBy === 'price-low' ? translations.priceLow : translations.priceHigh}
                  <ChevronDown size={16} />
                </button>
                
                {isDropdownOpen && (
                  <div className="sort-options">
                    <button onClick={() => { setSortBy('default'); setIsDropdownOpen(false); }}>{translations.default}</button>
                    <button onClick={() => { setSortBy('price-low'); setIsDropdownOpen(false); }}>{translations.priceLow}</button>
                    <button onClick={() => { setSortBy('price-high'); setIsDropdownOpen(false); }}>{translations.priceHigh}</button>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="category-products-grid">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.slug}`}
                className="category-product-card"
              >
                <div className="category-product-image">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - ${categoryName} Industrial Furniture Collection Mangala Living`}
                    title={`${product.name} - ${categoryName} Premium Furniture from Mangala Living Workshop Bekasi`}
                    loading="lazy"
                    width="300"
                    height="200"
                    itemProp="image"
                    data-image-type="category-product"
                    data-product-name={product.name}
                    data-product-slug={product.slug}
                    data-category={categoryName}
                  />
                </div>
                <div className="category-product-info">
                  <h3 className="category-product-name">{product.name}</h3>
                  <p className="category-product-cats">{product.categories.join(', ')}</p>
                  {usdPrices[product.id] ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <p 
                        className="category-product-price"
                        style={{ 
                          margin: 0,
                          fontSize: isIndonesian ? '0.875rem' : '0.75rem',
                          fontWeight: isIndonesian ? 600 : 400,
                          color: isIndonesian ? '#333' : '#999'
                        }}
                      >
                        {product.price}
                      </p>
                      <p 
                        style={{ 
                          margin: 0,
                          fontSize: isIndonesian ? '0.75rem' : '0.875rem',
                          fontWeight: isIndonesian ? 400 : 600,
                          color: isIndonesian ? '#999' : '#333'
                        }}
                      >
                        {usdPrices[product.id]}
                      </p>
                    </div>
                  ) : (
                    <p className="category-product-price">{product.price}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
          
          {/* AI-Optimized Category Content */}
          <CategoryAIContent 
            category={categoryName}
            productCount={filteredProducts.length}
            isIndonesian={isIndonesian}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default ProductCategory

