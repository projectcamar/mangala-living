import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    message: ''
  })

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    <div className="contact-page">
      <Header />
      
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="section-subtitle">KONTAK KAMI</div>
            <h1>KONTAK KAMI</h1>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.3779416604472!2d107.0516816!3d-6.3276652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69918607fe41b1%3A0xf593b1e076b20ae8!2sEmma%20House%20Furniture%20(Bengkel%20Las%20Mandiri)!5e0!3m2!1sen!2sid!4v1760212836163!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Emma House Furniture (Bengkel Las Mandiri) Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Info - Left Side */}
            <div className="contact-info-section">
              <h2>Informasi Kontak</h2>
              <div className="contact-info-blocks">
                <div className="contact-block">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>Hubungi Bapak Maman Toha:</h3>
                    <p><a href="https://wa.me/6285212078467" target="_blank" rel="noopener noreferrer">+62 852-1207-8467</a></p>
                  </div>
                </div>
                
                <div className="contact-block">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>Email:</h3>
                    <p><a href="mailto:info@lasbekasi.com">info@lasbekasi.com</a></p>
                  </div>
                </div>
                
                <div className="contact-block">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>Lokasi:</h3>
                    <p>Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Form - Right Side */}
            <div className="contact-form-section">
              <h2>Konsultasi Sekarang</h2>
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

      <Footer />
    </div>
  )
}

export default Contact
