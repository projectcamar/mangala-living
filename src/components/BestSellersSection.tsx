import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ALL_PRODUCTS } from '../data/products'
import './BestSellersSection.css'

interface BestSellersSectionProps {
  isIndonesian?: boolean
}

// Best Sellers - first 8 products
const products = ALL_PRODUCTS.slice(0, 8).map(p => ({
  id: p.id,
  name: p.name,
  categories: p.categories,
  price: p.price,
  image: p.image,
  link: `/product/${p.slug}`
}))

const BestSellersSection: React.FC<BestSellersSectionProps> = ({ isIndonesian = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4

  const nextSlide = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage)
    }
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage)
  const totalDots = Math.ceil(products.length / itemsPerPage)

  return (
    <section className="bestsellers-section">
      <div className="container">
        <div className="section-header-row">
          <h2 className="bestsellers-title">
            {isIndonesian ? "Produk Terlaris" : "Best Sellers"}
          </h2>
          <Link to="/product-tag/best-seller" className="view-all-link">
            {isIndonesian ? "LIHAT SEMUA" : "VIEW ALL"}
          </Link>
        </div>

        <div className="bestsellers-carousel">
          {currentIndex > 0 && (
            <button 
              className="carousel-btn carousel-btn-prev" 
              onClick={prevSlide}
              aria-label="Previous products"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="products-grid">
            {visibleProducts.map((product) => (
              <Link 
                key={product.id}
                to={product.link}
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
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-categories">{product.categories.join(', ')}</p>
                  <p className="product-price">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {currentIndex < products.length - itemsPerPage && (
            <button 
              className="carousel-btn carousel-btn-next" 
              onClick={nextSlide}
              aria-label="Next products"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {totalDots > 1 && (
          <div className="carousel-dots">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === Math.floor(currentIndex / itemsPerPage) ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default BestSellersSection
