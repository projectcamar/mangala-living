import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'
import './Footer.css'

const Footer: React.FC = () => {
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="footer-logo">MANGALA</h2>
            <p className="footer-description">
              Your best choice for premium industrial scandinavian furniture since 1999. Serving coffee shops, restaurants, and businesses across Indonesia. Custom orders welcome.
            </p>
            <div className="footer-contact-info">
              <h4>Contact Us</h4>
              <p>info@mangala-living.com</p>
              <p>+62 852-1207-8467</p>
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
            <h4>Find Us</h4>
            <div className="footer-location">
              <h5>Workshop Bekasi :</h5>
              <p>Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320</p>
              <p className="footer-phone">+62 852-1207-8467</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-column">
                      <h4>Quick Links</h4>
                      <ul className="footer-links">
                        <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
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
            <h4>Subscribe</h4>
            <form onSubmit={handleSubscribe} className="footer-subscribe-form">
              <input
                type="text"
                placeholder="First name"
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
              <button type="submit">SUBSCRIBE</button>
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
