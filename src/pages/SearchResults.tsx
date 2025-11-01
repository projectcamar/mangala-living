import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { ALL_PRODUCTS } from '../data/products'
import './SearchResults.css'

interface Product {
  id: number
  name: string
  category: string
  price: string
  image: string
  slug: string
}

const allProducts: Product[] = ALL_PRODUCTS.map(p => ({
  id: p.id,
  name: p.name,
  category: p.categories.join(', '),
  price: p.price,
  image: p.image,
  slug: p.slug
}))

function SearchResults() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('q') || ''
  
  const [sortBy, setSortBy] = useState('default')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    // Filter products based on search query
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filtered)
  }, [query])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''))
    } else if (sortBy === 'price-high') {
      return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''))
    }
    return 0
  })

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: `Search results for "${query}"`, path: `/search?q=${query}` }
  ]

  return (
    <div className="search-results-page">
      <AnnouncementBar />
      <Helmet>
        <title>Search: {query} - Mangala Living</title>
        <meta name="description" content={`Search results for ${query}`} />
      </Helmet>

      <Header />

      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        <div className="search-results-header">
          <h1 className="search-results-title">
            Search Results for "{query}"
          </h1>
          <div className="search-results-controls">
            <select 
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <p className="results-count">{sortedProducts.length} results found</p>

        {sortedProducts.length > 0 ? (
          <div className="products-grid">
            {sortedProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.slug}`}
                className="product-card"
              >
                <div className="product-image">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - Industrial Furniture ${product.category} Search Results Mangala Living`}
                    title={`${product.name} - ${product.category} Industrial Furniture - Mangala Living`}
                    loading="lazy"
                    width="300"
                    height="200"
                    itemProp="image"
                    data-image-type="search-result"
                    data-product-name={product.name}
                    data-category={product.category}
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p className="no-results-message">
              No products found for "{query}". Try a different search term.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default SearchResults
