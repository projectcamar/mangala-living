import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import './CatalogModal.css'
import { generateCatalog } from '../utils/catalogGenerator'
import { trackEvent } from '../utils/analytics'
import catalogPreview from '../assets/Bench-corner-kursi-sudut-kursi-santai.webp'

interface CatalogModalProps {
  onClose?: () => void
}

const CatalogModal: React.FC<CatalogModalProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    whatsapp: ''
  })

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedBefore = localStorage.getItem('hasVisitedMangala')
    
    let shouldShow = false
    
    if (!hasVisitedBefore) {
      // First visit = 100% show
      shouldShow = true
      localStorage.setItem('hasVisitedMangala', 'true')
    } else {
      // Return visits = 70% chance
      shouldShow = Math.random() < 0.7
    }
    
    if (shouldShow) {
      // Show modal after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    if (onClose) onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Store form data (optional - could send to backend/analytics)
    console.log('Catalog download requested:', formData)
    
    // Get the button element
    const button = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement
    if (button) {
      button.disabled = true
      button.textContent = 'GENERATING...'
    }
    
    // Store original content before making changes
    const originalContent = document.body.innerHTML
    
    try {
      // Show loading state
      document.body.innerHTML = `
        <html>
          <head>
            <title>Generating Catalog...</title>
            <style>
              body { 
                font-family: Arial, sans-serif; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                margin: 0; 
                background: #f5f5f5;
              }
              .loading {
                text-align: center;
                padding: 40px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              .spinner {
                border: 4px solid #f3f3f3;
                border-top: 4px solid #ff6b35;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              h2 { color: #333; margin-bottom: 10px; }
              p { color: #666; margin: 0; }
            </style>
          </head>
          <body>
            <div class="loading">
              <div class="spinner"></div>
              <h2>Generating Catalog...</h2>
              <p>Please wait while we prepare your furniture catalog</p>
            </div>
          </body>
        </html>
      `
      
      // Generate the catalog
      await generateCatalog()
      
      // Track catalog download
      trackEvent.catalogDownload()
      
      // Close the modal
      handleClose()
      
      // Restore original content
      document.body.innerHTML = originalContent
      
    } catch (error) {
      console.error('Error generating catalog:', error)
      alert('Failed to download catalog. Please try again.')
      
      // Restore original content
      document.body.innerHTML = originalContent
      
      // Reset button on error
      if (button) {
        button.textContent = 'DOWNLOAD'
        button.disabled = false
      }
    }
  }

  if (!isVisible) return null

  return (
    <div className="catalog-modal-overlay" onClick={handleClose}>
      <div className="catalog-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="catalog-modal-close" onClick={handleClose}>
          <X size={24} />
        </button>

        <div className="catalog-modal-content">
          {/* Left Side - Catalog Preview */}
          <div className="catalog-preview">
            <div className="catalog-preview-wrapper">
              <div className="pdf-icon">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" fill="#E74C3C" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="12" y="17" fontSize="6" fill="white" textAnchor="middle" fontWeight="bold">PDF</text>
                </svg>
              </div>
              <div className="catalog-preview-image">
                <div className="catalog-year">2025</div>
                <img src={catalogPreview} alt="Mangala Living Catalog 2025" />
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="catalog-form-section">
            <h2 className="catalog-modal-title">
              FREE GET NEW 2025<br />
              MANGALA LIVING CATALOG
            </h2>

            <form onSubmit={handleDownload} className="catalog-form">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp Number</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="catalog-download-btn">
                DOWNLOAD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogModal

