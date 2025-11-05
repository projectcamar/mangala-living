import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ALL_PRODUCTS } from '../data/products'
import { trackEvent } from '../utils/analytics'
import { convertIDRToUSD } from '../utils/currencyConverter'
import './OurProductsSection.css'

interface OurProductsSectionProps {
  isIndonesian?: boolean
}

// Our Products - products 9-28 (20 products), excluding Meja Kerja Industrial
const products = ALL_PRODUCTS.slice(8, 28)
  .filter(p => p.slug !== 'meja-kerja-industrial')
  .map(p => ({
    id: p.id,
    name: p.name,
    category: p.categories.join(', '),
    price: p.price,
    image: p.image,
    link: `/product/${p.slug}`
  }))

const OurProductsSection: React.FC<OurProductsSectionProps> = ({ isIndonesian = false }) => {
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
  }, [])

  return (
    <section className="our-products-section">
      <div className="container">
        <div className="section-header-row">
          <h2 className="our-products-title">
            {isIndonesian ? "Koleksi Produk: Bar Set, Lounge Set, Storage & Furniture Industrial" : "Our Collection: Bar Set, Lounge Set, Storage & Industrial Furniture"}
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
                {usdPrices[product.id] ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <p
                      className="product-price-full"
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
                  <p className="product-price-full">{product.price}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProductsSection
