import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import './WhatsAppButton.css'

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const whatsappMessage = `Halo Bapak Maman Toha, saya tertarik dengan layanan Bengkel Las Mandiri. Bisa minta informasi lebih lanjut?`
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
            <span>Selamat datang di Bengkel Las Mandiri. Dapatkan penawaran harga bengkel las termurah bersama kami.</span>
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
                <div className="logo-title">Bengkel Las Terbaik</div>
                <div className="logo-subtitle">Bengkel Las Mandiri</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <MessageCircle size={24} />
        <span>Hubungi Kami di WA</span>
      </button>
    </div>
  )
}

export default WhatsAppButton
