import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'
import './Footer.css'

interface FooterProps {
  isIndonesian?: boolean
}

const Footer: React.FC<FooterProps> = ({ isIndonesian = false }) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribe:', { firstName, email })
    setFirstName('')
    setEmail('')
  }

  return (
    <footer className="footer" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="footer-logo">MANGALA</h2>
            <p className="footer-description">
              {isIndonesian 
                ? "Pilihan terbaik untuk furniture industrial scandinavian premium sejak 1999. Melayani coffee shop, restoran, dan bisnis di seluruh Indonesia. Pesanan custom diterima."
                : "Your best choice for premium industrial scandinavian furniture since 1999. Serving coffee shops, restaurants, and businesses across Indonesia. Custom orders welcome."
              }
            </p>
            <div className="footer-contact-info">
              <h4>{isIndonesian ? "Hubungi Kami" : "Contact Us"}</h4>
              <p>info@mangala-living.com</p>
              <p>+62 852 1207 8467</p>
              <div className="footer-social-icons">
                <a href="https://instagram.com/mangalaliving" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com/mangalaliving" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Find Us */}
          <div className="footer-column">
            <h4>{isIndonesian ? "Temukan Kami" : "Find Us"}</h4>
            <div className="footer-location">
              <h5>Workshop Bekasi :</h5>
              <p>
                <a
                  href="https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-address-link"
                >
                  Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
                </a>
              </p>
              <p className="footer-phone">+62 852-1207-8467</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-column">
                      <h4>{isIndonesian ? "Tautan Cepat" : "Quick Links"}</h4>
                      <ul className="footer-links">
                        <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/shipping-information">{isIndonesian ? "Pengiriman" : "Shipping"}</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/custom-order">{isIndonesian ? "Custom Order" : "Custom Order"}</Link></li>
                        <li><Link to="/partnership">{isIndonesian ? "Kerja Sama" : "Partnership"}</Link></li>
                        <li><Link to="/terms-of-service">{isIndonesian ? "Syarat & Ketentuan" : "Terms of Service"}</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="footer-column">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><Link to="/product-category/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/product-category/lounge-seating-set">Lounge Set</Link></li>
              <li><Link to="/product-category/industrial-sofa-bench">Sofa Bench</Link></li>
              <li><Link to="/product-category/dining-set-collection">Dining Set</Link></li>
              <li><Link to="/product-category/bar-furniture-collection">Bar Set</Link></li>
              <li><Link to="/product-category/balcony-outdoor-collection">Outdoor</Link></li>
              <li><Link to="/product-category/daybed-lounge-frame">Daybed</Link></li>
              <li><Link to="/product-category/accessories-storage">Storage</Link></li>
              <li><Link to="/product-category/table-collection">Tables</Link></li>
              <li><Link to="/product-category/dining-table-collection">Dine Table</Link></li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div className="footer-column">
            <h4>{isIndonesian ? "Berlangganan" : "Subscribe"}</h4>
            <form onSubmit={handleSubscribe} className="footer-subscribe-form">
              <input
                type="text"
                placeholder={isIndonesian ? "Nama depan" : "First name"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">{isIndonesian ? "BERLANGGANAN" : "SUBSCRIBE"}</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Mangala Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
