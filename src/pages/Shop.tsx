import React, { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { ALL_PRODUCTS } from '../data/products'
import { CATEGORIES } from '../data/categories'
import './ProductCategory.css'
import './Shop.css'

const PRODUCTS_PER_PAGE = 24

const Shop: React.FC = () => {
  const [sortBy, setSortBy] = useState('default')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 60000000])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

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
    newRange[index] = parseInt(e.target.value)
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

  return (
    <div className="product-category-page shop-page-layout">
      <Helmet>
        <title>All Products - Industrial Furniture Collection | Mangala Living</title>
        <meta name="description" content="Browse all industrial furniture products at Mangala Living. Industrial furniture besi custom untuk cafe, restoran, hotel. Kualitas terbaik, harga terjangkau." />
        <meta name="keywords" content="industrial furniture, furniture besi, furniture custom, furniture cafe, furniture restoran, mangala living, furniture bekasi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mangala-living.com/shop" />
        
        {/* Open Graph */}
        <meta property="og:title" content="All Products - Industrial Furniture Collection | Mangala Living" />
        <meta property="og:description" content="Browse all industrial furniture products at Mangala Living. Industrial furniture besi custom untuk cafe, restoran, hotel." />
        <meta property="og:url" content="https://mangala-living.com/shop" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="All Products - Industrial Furniture Collection | Mangala Living" />
        <meta name="twitter:description" content="Browse all industrial furniture products at Mangala Living." />
      </Helmet>
      
      <Header />
      
      <main className="category-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          
          <h1 className="category-page-title">All Product</h1>
          
          <div className="shop-layout">
            {/* Sidebar */}
            <aside className="shop-sidebar">
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
                  <input
                    type="range"
                    min="0"
                    max="60000000"
                    step="100000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="price-slider"
                  />
                  <input
                    type="range"
                    min="0"
                    max="60000000"
                    step="100000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="price-slider"
                  />
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
                {currentProducts.map((product) => (
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
                      <span key={`ellipsis-${index}`} className="pagination-ellipsis">…</span>
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
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Shop
