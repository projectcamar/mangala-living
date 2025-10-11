import React, { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'
import './ConsultationModal.css'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const whatsappMessage = `Halo Bapak Maman Toha,\n\nSaya ${formData.name} dari ${formData.city}, ingin menanyakan layanan Bengkel Las Mandiri.\n\nKebutuhan: ${formData.message}\n\nTerimakasih.`
    
    const whatsappUrl = `https://wa.me/6285212078467?text=${encodeURIComponent(whatsappMessage)}`
    
    window.open(whatsappUrl, '_blank')
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Konsultasi Sekarang</h3>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <form className="consultation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="modal-name">Nama</label>
            <input
              type="text"
              id="modal-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="modal-city">Kota</label>
            <input
              type="text"
              id="modal-city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Kota Asal"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="modal-message">Pesan</label>
            <textarea
              id="modal-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Sebutkan Kebutuhan"
              rows={3}
              required
            />
          </div>

          <button type="submit" className="btn-consultation">
            <MessageCircle size={18} />
            Konsultasi Sekarang
          </button>
        </form>
      </div>
    </div>
  )
}

export default ConsultationModal
