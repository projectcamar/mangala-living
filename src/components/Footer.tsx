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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email }),
      })

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: isIndonesian 
            ? 'Terima kasih telah berlangganan!' 
            : 'Thank you for subscribing!' 
        })
        setFirstName('')
        setEmail('')
      } else {
        setMessage({ 
          type: 'error', 
          text: isIndonesian 
            ? 'Gagal berlangganan. Silakan coba lagi.' 
            : 'Subscription failed. Please try again.' 
        })
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setMessage({ 
        type: 'error', 
        text: isIndonesian 
          ? 'Terjadi kesalahan. Silakan coba lagi.' 
          : 'An error occurred. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
      // Clear message after 5 seconds
      setTimeout(() => setMessage(null), 5000)
    }
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
                : "Your best choice for premium industrial scandinavian furniture since 1999. Serving coffee shops, restaurants, and businesses across Indonesia, Jabodetabek, Jakarta, and major international markets. Custom orders welcome."
              }
            </p>
            <div className="footer-contact-info">
              <h4>{isIndonesian ? "Hubungi Kami" : "Contact Us"}</h4>
              <p>
                <a href="mailto:info@mangala-living.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  info@mangala-living.com
                </a>
              </p>
              <p>
                <a href="https://wa.me/6285212078467" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  +62 852 1207 8467
                </a>
              </p>
              <div className="footer-social-icons">
                <a href="https://instagram.com/mangala_living" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
                  href="https://maps.app.goo.gl/5Bc5ymfVtAYRPtpK7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-address-link"
                >
                  Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
                </a>
              </p>
              <p className="footer-phone">
                <a href="https://wa.me/6285212078467" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  +62 852-1207-8467
                </a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-column">
                      <h4>{isIndonesian ? "Tautan Cepat" : "Quick Links"}</h4>
                      <ul className="footer-links">
                        <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link></li>
              <li><Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Blog</Link></li>
                        <li><Link to="/shipping-information" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{isIndonesian ? "Pengiriman" : "Shipping"}</Link></li>
                        <li><Link to="/contact-us" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link></li>
                        <li><Link to="/custom-order" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{isIndonesian ? "Custom Order" : "Custom Order"}</Link></li>
                        <li><Link to="/partnership" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{isIndonesian ? "Kerja Sama" : "Partnership"}</Link></li>
                        <li><Link to="/terms-of-service" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{isIndonesian ? "Syarat & Ketentuan" : "Terms of Service"}</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="footer-column">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><Link to="/product-category/new-arrivals" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>New Arrivals</Link></li>
              <li><Link to="/product-category/lounge-seating-set" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Lounge Set</Link></li>
              <li><Link to="/product-category/industrial-sofa-bench" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Sofa Bench</Link></li>
              <li><Link to="/product-category/dining-set-collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Dining Set</Link></li>
              <li><Link to="/product-category/bar-furniture-collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Bar Set</Link></li>
              <li><Link to="/product-category/balcony-outdoor-collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Outdoor</Link></li>
              <li><Link to="/product-category/daybed-lounge-frame" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Daybed</Link></li>
              <li><Link to="/product-category/accessories-storage" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Storage</Link></li>
              <li><Link to="/product-category/table-collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Tables</Link></li>
              <li><Link to="/product-category/dining-table-collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Dine Table</Link></li>
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
                disabled={isSubmitting}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting 
                  ? (isIndonesian ? "Mengirim..." : "Sending...") 
                  : (isIndonesian ? "BERLANGGANAN" : "SUBSCRIBE")
                }
              </button>
              {message && (
                <div className={`subscribe-message ${message.type}`}>
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>? 2025 Mangala Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
