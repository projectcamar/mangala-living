import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, ShoppingBag, Package, Mail, Info } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ALL_PRODUCTS } from '../data/products'
import './NotFound.css'

const NotFound: React.FC = () => {
  // Get 5 featured products (mix of different categories)
  const featuredProducts = ALL_PRODUCTS.slice(0, 5)

  const quickLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/shop', label: 'Shop', icon: ShoppingBag },
    { path: '/product-tag/best-seller', label: 'Best Sellers', icon: Package },
    { path: '/contact-us', label: 'Contact Us', icon: Mail },
    { path: '/about', label: 'About', icon: Info },
  ]

  return (
    <div className="not-found-page">
      <AnnouncementBar />
      <Helmet>
        <title>404 - Halaman Tidak Ditemukan | Mangala Living</title>
        <meta name="description" content="Halaman yang Anda cari tidak ditemukan. Jelajahi produk furniture industrial terbaik kami atau kembali ke beranda." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Header />
      
      <main className="not-found-main">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-hero">
              <h1 className="not-found-title">404</h1>
              <h2 className="not-found-subtitle">Halaman Tidak Ditemukan</h2>
              <p className="not-found-description">
                Maaf, halaman yang Anda cari tidak tersedia. 
                Mungkin URL yang diketik salah atau halaman sudah dipindahkan.
              </p>
              
              {/* Quick Links */}
              <div className="not-found-quicklinks">
                <h3 className="quicklinks-title">Quick Links</h3>
                <div className="quicklinks-grid">
                  {quickLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <Link 
                        key={link.path}
                        to={link.path}
                        className="quicklink-card"
                      >
                        <Icon size={24} />
                        <span>{link.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="not-found-actions">
                <Link to="/" className="btn-primary">
                  Kembali ke Beranda
                </Link>
                <Link to="/shop" className="btn-secondary">
                  Lihat Semua Produk
                </Link>
              </div>
            </div>

            {/* Featured Products Section */}
            <div className="not-found-products">
              <h3 className="products-section-title">
                Produk Unggulan untuk Anda
              </h3>
              <div className="products-grid">
                {featuredProducts.map((product) => (
                  <Link 
                    key={product.id}
                    to={`/product/${product.slug}`}
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
                      <h4 className="product-name">{product.name}</h4>
                      <p className="product-category">
                        {product.categories.join(', ')}
                      </p>
                      <p className="product-price">{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="products-cta">
                <Link to="/shop" className="btn-view-all">
                  Lihat Semua Produk →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default NotFound
