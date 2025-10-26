import React, { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { ALL_PRODUCTS } from '../data/products'
import { CATEGORY_MAP } from '../data/categories'
import { generateCanonicalUrl, generateHreflangTags } from '../utils/seo'
import './ProductCategory.css'

const ProductCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>()
  const [sortBy, setSortBy] = useState('default')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const categoryName = CATEGORY_MAP[category || ''] || 'Products'

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [category])

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

  return (
    <div className="product-category-page">
      <Helmet>
        <title>{categoryName} - Mangala Living</title>
        <meta name="description" content={`Browse our ${categoryName} collection at Mangala Living. Industrial furniture besi custom untuk ${categoryName.toLowerCase()}. Kualitas terbaik, harga terjangkau.`} />
        <meta name="keywords" content={`${categoryName}, industrial furniture, furniture besi, ${categoryName.toLowerCase()}, mangala living, furniture custom`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={generateCanonicalUrl(`/product-category/${category}`)} />
        
        {/* Hreflang for language variants */}
        <link rel="alternate" hrefLang="id" href={generateHreflangTags(`/product-category/${category}`).id} />
        <link rel="alternate" hrefLang="en" href={generateHreflangTags(`/product-category/${category}`).en} />
        <link rel="alternate" hrefLang="x-default" href={generateHreflangTags(`/product-category/${category}`).default} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${categoryName} - Mangala Living`} />
        <meta property="og:description" content={`Browse our ${categoryName} collection at Mangala Living. Industrial furniture besi custom untuk ${categoryName.toLowerCase()}.`} />
        <meta property="og:url" content={`https://mangala-living.com/product-category/${category}`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${categoryName} - Mangala Living`} />
        <meta name="twitter:description" content={`Browse our ${categoryName} collection at Mangala Living.`} />
      </Helmet>
      
      <Header />
      
      <main className="category-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          
          <h1 className="category-page-title">{categoryName}</h1>
          
          <div className="category-controls">
            <p className="showing-results">
              Showing 1-{filteredProducts.length} of {filteredProducts.length} results
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
            {filteredProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.slug}`}
                className="category-product-card"
              >
                <div className="category-product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="category-product-info">
                  <h3 className="category-product-name">{product.name}</h3>
                  <p className="category-product-cats">{product.categories.join(', ')}</p>
                  <p className="category-product-price">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default ProductCategory

