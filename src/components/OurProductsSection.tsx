import React from 'react'
import { Link } from 'react-router-dom'
import { ALL_PRODUCTS } from '../data/products'
import { trackEvent } from '../utils/analytics'
import './OurProductsSection.css'

interface OurProductsSectionProps {
  isIndonesian?: boolean
}

// Our Products - products 9-28 (20 products)
const products = ALL_PRODUCTS.slice(8, 28).map(p => ({
  id: p.id,
  name: p.name,
  category: p.categories.join(', '),
  price: p.price,
  image: p.image,
  link: `/product/${p.slug}`
}))

const OurProductsSection: React.FC<OurProductsSectionProps> = ({ isIndonesian = false }) => {
  return (
    <section className="our-products-section">
      <div className="container">
        <div className="section-header-row">
          <h2 className="our-products-title">
            {isIndonesian ? "Produk Kami" : "Our Products"}
          </h2>
          <Link to="/shop" className="view-all-link">
            {isIndonesian ? "LIHAT SEMUA" : "VIEW ALL"}
          </Link>
        </div>

        <div className="products-grid-full">
          {products.map((product) => (
            <Link 
              key={product.id}
              to={product.link}
              className="product-card-full"
              onClick={() => trackEvent.productClick(product.name, product.category)}
            >
              <div className="product-image-wrapper-full">
                <img 
                  src={product.image} 
                  alt={`${product.name} - Industrial Furniture ${product.category} Mangala Living Workshop Bekasi`}
                  title={`${product.name} - Custom Industrial Furniture from Mangala Living`}
                  className="product-image-full"
                  loading="lazy"
                  width="400"
                  height="300"
                  itemProp="image"
                  data-image-type="product"
                  data-product-name={product.name}
                  data-category={product.category}
                />
              </div>
              <div className="product-info-full">
                <h3 className="product-name-full">{product.name}</h3>
                <p className="product-category-full">{product.category}</p>
                <p className="product-price-full">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProductsSection
