import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import './WhatsAppButton.css'
import { trackEvent } from '../utils/analytics'

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    // Track WhatsApp click
    trackEvent.whatsappClick('floating_button')
    
    const whatsappMessage = `Hello, I'm interested in Mangala Living furniture. Can I get more information?`
    const whatsappUrl = `https://wa.me/6285212078467?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="whatsapp-container">
      {/* Popup Message */}
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <span>Welcome to Mangala Living. Get the best furniture deals with us.</span>
            <button className="close-popup" onClick={togglePopup}>
              <X size={16} />
            </button>
          </div>
          <div className="popup-body">
            <div className="popup-logo">
              <div className="logo-icon">
                <MessageCircle size={24} />
              </div>
              <div className="logo-text">
                <div className="logo-title">Premium Furniture</div>
                <div className="logo-subtitle">Mangala Living</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <MessageCircle size={24} />
        <span>Contact Us</span>
      </button>
    </div>
  )
}

export default WhatsAppButton
