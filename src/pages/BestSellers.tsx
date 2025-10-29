import React, { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { ALL_PRODUCTS } from '../data/products'
import './ProductCategory.css'

// Best sellers - first 10 products from ALL_PRODUCTS
const bestSellersProducts = ALL_PRODUCTS.slice(0, 10)

const BestSellers: React.FC = () => {
  const [sortBy, setSortBy] = useState('default')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sortedProducts = useMemo(() => {
    let products = [...bestSellersProducts]

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
  }, [sortBy])

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Best Sellers', path: '/product-tag/best-seller' }
  ]

  return (
    <div className="product-category-page">
      <AnnouncementBar />
      <Helmet>
        <title>Best Sellers - Mangala Living</title>
        <meta name="description" content="Browse our best-selling industrial furniture collection at Mangala Living" />
      </Helmet>
      
      <Header />
      
      <main className="category-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          
          <h1 className="category-page-title">Best Sellers</h1>
          
          <div className="category-controls">
            <p className="showing-results">
              Showing 1-{sortedProducts.length} of {sortedProducts.length} results
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
            {sortedProducts.map((product) => (
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

export default BestSellers
