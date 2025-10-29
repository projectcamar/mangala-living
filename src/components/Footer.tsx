import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import './Footer.css'

const Footer: React.FC = () => {
  const { t } = useTranslation()
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
              {t('footer.description')}
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/mangalafurniture" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/mangalafurniture" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>{t('footer.quickLinks.title')}</h3>
            <ul>
              <li><Link to="/">{t('footer.quickLinks.home')}</Link></li>
              <li><Link to="/about">{t('footer.quickLinks.about')}</Link></li>
              <li><Link to="/products">{t('footer.quickLinks.products')}</Link></li>
              <li><Link to="/contact">{t('footer.quickLinks.contact')}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-categories">
            <h3>{t('footer.categories.title')}</h3>
            <ul>
              <li><Link to="/product-category/dining-set-collection">{t('footer.categories.dining')}</Link></li>
              <li><Link to="/product-category/lounge-seating-set">{t('footer.categories.living')}</Link></li>
              <li><Link to="/product-category/accessories-storage">{t('footer.categories.bedroom')}</Link></li>
              <li><Link to="/product-category/table-collection">{t('footer.categories.office')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3>{t('footer.contact.title')}</h3>
            <div className="contact-info">
              <p><strong>Address:</strong><br />{t('footer.contact.address')}</p>
              <p><strong>Phone:</strong><br />{t('footer.contact.phone')}</p>
              <p><strong>Email:</strong><br />{t('footer.contact.email')}</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3>{t('footer.newsletter.title')}</h3>
            <p>{t('footer.newsletter.description')}</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-inputs">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="newsletter-btn">
                {t('footer.newsletter.subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              {t('footer.copyright')}
            </p>
            <div className="footer-legal">
              <Link to="/privacy-policy">{t('footer.privacy')}</Link>
              <Link to="/terms-of-service">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer