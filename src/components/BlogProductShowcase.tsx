import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../data/products'
import { convertIDRToUSD } from '../utils/currencyConverter'
import './BlogProductShowcase.css'

interface BlogProductShowcaseProps {
  products: Product[]
  heading?: string
  description?: string
  isIndonesian?: boolean
}

/**
 * Komponen Product Showcase untuk Artikel Blog
 * Menampilkan produk yang relevan dengan konten artikel
 * dengan desain yang menarik dan hard-selling
 */
const BlogProductShowcase: React.FC<BlogProductShowcaseProps> = ({
  products,
  heading = 'Produk Industrial Terkait',
  description,
  isIndonesian = true
}) => {
  const [usdPrices, setUsdPrices] = useState<{ [key: number]: string }>({})

  useEffect(() => {
    const convertPrices = async () => {
      const prices: { [key: number]: string } = {}
      for (const product of products) {
        const usdPrice = await convertIDRToUSD(product.price)
        prices[product.id] = usdPrice
      }
      setUsdPrices(prices)
    }
    convertPrices()
  }, [products])

  if (!products || products.length === 0) {
    return null
  }

  // Tampilkan maksimal 6 produk dalam grid 2x3 atau 3x2
  const displayProducts = products.slice(0, 6)

  return (
    <section className="blog-product-showcase">
      <div className="blog-product-showcase-container">
        <div className="blog-product-showcase-header">
          <h2 className="blog-product-showcase-heading">{heading}</h2>
          {description && (
            <p className="blog-product-showcase-description">{description}</p>
          )}
        </div>

        <div className="blog-product-showcase-grid">
          {displayProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="blog-product-showcase-card"
              title={`${product.name} - Industrial Furniture Premium by Mangala Living`}
            >
              <div className="blog-product-showcase-image-wrapper">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.categories.join(' ')} Industrial Furniture Mangala Living Bekasi`}
                  title={`${product.name} - Premium Quality Industrial Furniture`}
                  className="blog-product-showcase-image"
                  loading="lazy"
                  width="350"
                  height="250"
                  itemProp="image"
                  data-image-type="blog-product-showcase"
                  data-product-name={product.name}
                  data-product-id={product.id}
                  data-category={product.categories.join(',')}
                />
                <div className="blog-product-showcase-badge">
                  <span className="blog-product-badge-text">PRODUK KAMI</span>
                </div>
              </div>
              
              <div className="blog-product-showcase-info">
                <h3 className="blog-product-showcase-name">{product.name}</h3>
                <div className="blog-product-showcase-categories">
                  {product.categories.map((cat, idx) => (
                    <span key={idx} className="blog-product-category-tag">
                      {cat}
                    </span>
                  ))}
                </div>
                
                <div className="blog-product-showcase-price-container">
                  {usdPrices[product.id] ? (
                    <>
                      <p className="blog-product-showcase-price-primary">
                        {isIndonesian ? product.price : usdPrices[product.id]}
                      </p>
                      <p className="blog-product-showcase-price-secondary">
                        {isIndonesian ? usdPrices[product.id] : product.price}
                      </p>
                    </>
                  ) : (
                    <p className="blog-product-showcase-price-primary">
                      {product.price}
                    </p>
                  )}
                </div>
                
                <div className="blog-product-showcase-cta">
                  <span className="blog-product-showcase-link">
                    {isIndonesian ? 'Lihat Detail Produk →' : 'View Product Details →'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="blog-product-showcase-footer">
          <Link 
            to="/shop" 
            className="blog-product-showcase-all-products-btn"
            title="Lihat Semua Produk Industrial Mangala Living"
          >
            {isIndonesian ? 'Lihat Semua Produk' : 'View All Products'}
          </Link>
          <Link 
            to="/contact-us" 
            className="blog-product-showcase-contact-btn"
            title="Konsultasi Gratis dengan Tim Mangala Living"
          >
            {isIndonesian ? 'Konsultasi Gratis' : 'Free Consultation'}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogProductShowcase
