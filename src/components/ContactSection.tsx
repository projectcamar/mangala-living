import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import './ContactSection.css'

const ContactSection: React.FC = () => {
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

  return (
    <section className="contact-section" id="kontak">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Hubungi Bengkel Las Bekasi</div>
          <h2>Kontak Bengkel Las Bekasi</h2>
          <p>Hubungi kami untuk konsultasi gratis dan penawaran harga las termurah di Bekasi</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h3>Hubungi Bapak Maman Toha:</h3>
                <p><a href="https://wa.me/6285212078467" target="_blank" rel="noopener noreferrer" className="contact-link">+62 852-1207-8467</a></p>
                <p className="contact-hours">Buka: Senin - Minggu (08:00 - 20:00 WIB)</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h3>Email Bengkel Las:</h3>
                <p><a href="mailto:info@lasbekasi.com" className="contact-link">info@lasbekasi.com</a></p>
                <p className="contact-response">Respon Cepat dalam 24 Jam</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h3>Lokasi Bengkel Las Bekasi:</h3>
                <p>Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320</p>
                <div className="service-areas">
                  <h4>Area Layanan:</h4>
                  <ul>
                    <li>Bekasi Timur</li>
                    <li>Bekasi Barat</li>
                    <li>Bekasi Utara</li>
                    <li>Bekasi Selatan</li>
                    <li>Cikarang</li>
                    <li>Tambun</li>
                    <li>Cibitung</li>
                  </ul>
                </div>
                <a href="https://maps.google.com/?q=Bengkel+Las+Mandiri+Bekasi" target="_blank" rel="noopener noreferrer" className="map-link">
                  Lihat di Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Konsultasi Sekarang</h3>
            <form className="whatsapp-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">Kota</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Kota Asal"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Sebutkan Kebutuhan"
                  rows={4}
                  required
                />
              </div>

              <button type="submit" className="btn-whatsapp">
                <Send size={20} />
                Konsultasi Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection