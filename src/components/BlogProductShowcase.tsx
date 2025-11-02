import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import type { Product } from '../data/products'
import { convertIDRToUSD } from '../utils/currencyConverter'
import { generateImageObjectSchema } from '../utils/structuredData'
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

  // Tampilkan maksimal 3 produk untuk compact view
  const displayProducts = products.slice(0, 3)

  // Generate Product schema untuk setiap produk
  const generateProductSchema = (product: Product) => {
    const priceValue = product.price.replace(/[^0-9]/g, '')
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": `${product.name} - ${product.categories.join(', ')} Industrial Furniture berkualitas premium dari Mangala Living Workshop Bekasi. Material industrial grade, finishing powder coating tahan lama.`,
      "image": product.image,
      "category": product.categories.join(', '),
      "brand": {
        "@type": "Brand",
        "name": "Mangala Living"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Mangala Living",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bekasi",
          "addressRegion": "Jawa Barat",
          "addressCountry": "ID"
        }
      },
      "offers": {
        "@type": "Offer",
        "url": `https://mangala-living.com/product/${product.slug}`,
        "priceCurrency": "IDR",
        "price": priceValue,
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Mangala Living"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  }

  // Generate ItemList schema untuk showcase collection
  const generateItemListSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": heading,
      "description": description || "Koleksi produk industrial berkualitas premium dari Mangala Living",
      "itemListElement": displayProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": generateProductSchema(product)
      }))
    }
  }

  // Generate image schemas untuk semua produk
  const productImageSchemas = displayProducts.map(product => {
    return generateImageObjectSchema({
      url: product.image,
      alt: `${product.name} - ${product.categories.join(' ')} Industrial Furniture Mangala Living Bekasi`,
      title: `${product.name} - Premium Quality Industrial Furniture`,
      width: 350,
      height: 250,
      description: `${product.name} dari koleksi industrial furniture Mangala Living. Produk berkualitas premium dengan material industrial grade dan finishing powder coating.`,
      caption: `${product.name} - ${product.categories.join(', ')} Industrial Furniture`
    })
  })

  const itemListSchema = generateItemListSchema()

  return (
    <>
      {/* Structured Data for SEO */}
      <Helmet>
        {/* ItemList Schema */}
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
        
        {/* Product Schemas */}
        {displayProducts.map((product) => (
          <script key={`product-schema-${product.id}`} type="application/ld+json">
            {JSON.stringify(generateProductSchema(product))}
          </script>
        ))}
        
        {/* Image Schemas */}
        {productImageSchemas.map((imgSchema, imgIndex) => (
          <script key={`image-schema-${imgIndex}`} type="application/ld+json">
            {JSON.stringify(imgSchema)}
          </script>
        ))}
      </Helmet>

      <section className="blog-product-showcase" itemScope itemType="https://schema.org/ItemList">
        <div className="blog-product-showcase-container">
          <div className="blog-product-showcase-header">
            <h2 className="blog-product-showcase-heading" itemProp="name">{heading}</h2>
          </div>

        <div className="blog-product-showcase-grid" itemProp="itemListElement" itemScope itemType="https://schema.org/ItemList">
          {displayProducts.map((product, index) => {
            const fullAlt = `${product.name} - ${product.categories.join(' ')} Industrial Furniture Mangala Living Bekasi. Material berkualitas, finishing powder coating, harga ${product.price}.`
            const fullTitle = `${product.name} - Premium Quality Industrial Furniture dari Mangala Living Workshop Bekasi. ${product.categories.join(', ')} dengan desain modern dan durable.`
            
            return (
              <article
                key={product.id}
                itemScope
                itemType="https://schema.org/Product"
                className="blog-product-showcase-item"
                data-item-position={index + 1}
              >
                <Link
                  to={`/product/${product.slug}`}
                  className="blog-product-showcase-card"
                  title={fullTitle}
                  itemProp="url"
                  rel="nofollow sponsored"
                  aria-label={`Lihat detail produk ${product.name}`}
                >
                  <div className="blog-product-showcase-image-wrapper" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                    <img
                      src={product.image}
                      alt={fullAlt}
                      title={fullTitle}
                      className="blog-product-showcase-image"
                      loading="lazy"
                      width="350"
                      height="250"
                      itemProp="contentUrl"
                      data-image-type="blog-product-showcase"
                      data-product-name={product.name}
                      data-product-id={product.id}
                      data-product-slug={product.slug}
                      data-category={product.categories.join(',')}
                      data-image-index={index + 1}
                      decoding="async"
                      fetchPriority={index < 2 ? "high" : "low"}
                    />
                    <meta itemProp="caption" content={`${product.name} - ${product.categories.join(', ')} Industrial Furniture`} />
                    <meta itemProp="description" content={`Produk ${product.name} dengan kualitas premium dari Mangala Living Workshop Bekasi`} />
                    <meta itemProp="url" content={product.image} />
                    <div className="blog-product-showcase-badge">
                      <span className="blog-product-badge-text">PRODUK KAMI</span>
                    </div>
                  </div>
                  
                  <div className="blog-product-showcase-info">
                    <h3 className="blog-product-showcase-name" itemProp="name">
                      {product.name}
                    </h3>
                    <meta itemProp="description" content={`${product.name} - ${product.categories.join(', ')} Industrial Furniture berkualitas premium. Material industrial grade, finishing powder coating tahan lama. Harga ${product.price}.`} />
                    
                    <div className="blog-product-showcase-categories">
                      {product.categories.map((cat, idx) => (
                        <span key={idx} className="blog-product-category-tag" itemProp="category">
                          {cat}
                        </span>
                      ))}
                    </div>
                    
                    <div className="blog-product-showcase-price-container" itemScope itemType="https://schema.org/Offer">
                      <meta itemProp="priceCurrency" content="IDR" />
                      <meta itemProp="availability" content="https://schema.org/InStock" />
                      <meta itemProp="price" content={product.price.replace(/[^0-9]/g, '')} />
                      {usdPrices[product.id] ? (
                        <>
                          <p className="blog-product-showcase-price-primary" itemProp="price">
                            {isIndonesian ? product.price : usdPrices[product.id]}
                          </p>
                          <p className="blog-product-showcase-price-secondary">
                            {isIndonesian ? usdPrices[product.id] : product.price}
                          </p>
                        </>
                      ) : (
                        <p className="blog-product-showcase-price-primary" itemProp="price">
                          {product.price}
                        </p>
                      )}
                    </div>
                    
                    <div className="blog-product-showcase-cta">
                      <span className="blog-product-showcase-link">
                        {isIndonesian ? 'Lihat Detail Produk ?' : 'View Product Details ?'}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>

        <div className="blog-product-showcase-footer">
          <Link 
            to="/shop" 
            className="blog-product-showcase-all-products-btn"
            title="Lihat Semua Produk Industrial Mangala Living"
            rel="nofollow"
            aria-label="Lihat semua produk furniture industrial"
          >
            {isIndonesian ? 'Lihat Semua Produk' : 'View All Products'}
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default BlogProductShowcase
