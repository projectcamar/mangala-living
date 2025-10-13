import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { ALL_PRODUCTS } from '../data/products'
import './ProductDetail.css'

interface ProductDetail {
  slug: string
  name: string
  categories: string[]
  price: string
  images: string[]
  details: string
  description: string
}

// Generate product description
const generateProductDescription = (name: string) => {
  return `The ${name} from Mangala Living is expertly crafted industrial furniture designed for modern spaces. Built in our workshop in Bekasi, Indonesia, each piece showcases superior welding techniques and attention to detail.

Handcrafted by experienced welders and metalworkers, every piece demonstrates exceptional craftsmanship. Constructed from premium materials including high-grade steel hollow sections, solid steel plates, and powder-coated finishes, this furniture delivers both strength and refined industrial aesthetics.

Designed for durability and style, this piece features carefully selected materials that ensure long-lasting performance. The industrial design paired with expert craftsmanship makes it a standout piece in any modern setting—whether in cafes, restaurants, offices, or contemporary homes.

Built to commercial-grade standards, this furniture is meticulously welded using professional equipment that can withstand heavy daily use for years to come. The sophisticated design effortlessly blends functionality, strength, and industrial character, making it an ideal choice for hospitality venues, co-working spaces, and modern residences.

Mangala Living is committed to quality and precision, ensuring that every weld and joint not only meets industrial standards but exceeds expectations. Explore our complete collection to find more equally well-crafted pieces designed to bring industrial elegance and durability to your spaces.`
}

// Generate product details based on categories
const generateProductDetails = (categories: string[]) => {
  const details: string[] = []
  
  if (categories.some(c => c.includes('Table') || c.includes('Dining'))) {
    details.push('Industrial Steel Frame')
    details.push('Powder Coated Finish')
    details.push('Solid Wood/Metal Top')
  }
  
  if (categories.some(c => c.includes('Chair') || c.includes('Bench') || c.includes('Sofa'))) {
    details.push('Welded Steel Construction')
    details.push('Ergonomic Design')
    details.push('Weather Resistant Finish')
  }
  
  if (categories.some(c => c.includes('Bar'))) {
    details.push('High-Grade Steel Pipe')
    details.push('Footrest Support')
    details.push('Commercial Grade')
  }
  
  if (categories.some(c => c.includes('Storage') || c.includes('Accessories'))) {
    details.push('Heavy Duty Construction')
    details.push('Multiple Shelves/Compartments')
    details.push('Easy Assembly')
  }
  
  if (details.length === 0) {
    details.push('Premium Steel Construction')
    details.push('Powder Coated Black Finish')
    details.push('Industrial Design')
    details.push('Built to Last')
  }
  
  return details.join(', ')
}

// Create product details from ALL_PRODUCTS
const products: { [key: string]: ProductDetail } = {}
ALL_PRODUCTS.forEach(p => {
  products[p.slug] = {
    slug: p.slug,
    name: p.name,
    categories: p.categories,
    price: p.price,
    images: [p.image, p.image, p.image, p.image],
    details: generateProductDetails(p.categories),
    description: generateProductDescription(p.name)
  }
})

// Related products - random 4 products
const getRelatedProducts = (currentSlug: string) => {
  return ALL_PRODUCTS
    .filter(p => p.slug !== currentSlug)
    .slice(0, 4)
    .map(p => ({
      slug: p.slug,
      name: p.name,
      category: p.categories[0],
      price: p.price,
      image: p.image
    }))
}

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const product = products[slug || '']
  
  const [selectedImage, setSelectedImage] = useState(0)

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return (
      <div>
        <Header />
        <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h1>Product not found</h1>
          <Link to="/shop" style={{ color: '#333', textDecoration: 'underline' }}>
            Browse all products
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(slug || '')

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: product.categories[0], path: `/product-category/${product.categories[0].toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}` },
    { label: product.name, path: `/product/${product.slug}` }
  ]

  return (
    <div className="product-detail-page">
      <Helmet>
        <title>{product.name} - Mangala Living</title>
        <meta name="description" content={`${product.name} - ${product.details}`} />
      </Helmet>

      <Header />

      <main className="product-detail-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />

          <div className="product-detail-content">
            {/* Product Gallery */}
            <div className="product-gallery">
              <div className="gallery-thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
              <div className="gallery-main">
                <img src={product.images[selectedImage]} alt={product.name} />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-section">
              <h1 className="product-detail-title">{product.name}</h1>
              <p className="product-detail-categories">{product.categories.join(' • ')}</p>
              <p className="product-detail-price">{product.price}</p>
              <p className="product-price-note">*Price may vary based on customization</p>

              <button 
                className="order-now-btn"
                onClick={() => {
                  const whatsappMessage = `Halo Mangala Living,

Saya tertarik dengan produk:
*${product.name}*

Kategori: ${product.categories.join(', ')}
Harga: ${product.price}

Link Produk: ${window.location.href}

Mohon informasi lebih lanjut dan cara pemesanannya.

Terima kasih!`
                  
                  const whatsappUrl = `https://wa.me/6285212078467?text=${encodeURIComponent(whatsappMessage)}`
                  window.location.href = whatsappUrl
                }}
              >
                ORDER NOW
              </button>

              <div className="product-details-box">
                <h3>Product Details</h3>
                <p>{product.details}</p>
              </div>
            </div>
          </div>

          {/* About Product */}
          <div className="about-product-section">
            <h2>About {product.name}</h2>
            <div className="about-product-content">
              {product.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div className="related-products-section">
            <h2>You Might be Interested</h2>
            <div className="related-products-grid">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.slug}
                  to={`/product/${relatedProduct.slug}`}
                  className="related-product-card"
                >
                  <div className="related-product-image">
                    <img src={relatedProduct.image} alt={relatedProduct.name} />
                  </div>
                  <div className="related-product-info">
                    <h3>{relatedProduct.name}</h3>
                    <p className="related-product-category">{relatedProduct.category}</p>
                    <p className="related-product-price">{relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProductDetail
