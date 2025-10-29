import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Contact.css'

const Contact: React.FC = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert(t('common.success'))
  }

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} - MANGALA Furniture</title>
        <meta name="description" content={t('contact.subtitle')} />
        <meta name="keywords" content="contact furniture jepara, furniture inquiry, custom furniture order" />
        <link rel="canonical" href="https://mangalafurniture.com/contact" />
      </Helmet>

      <Header />
      
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-content">
              <h1>{t('contact.title')}</h1>
              <p>{t('contact.subtitle')}</p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-section">
                <h2>Send us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">{t('contact.form.name')} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">{t('contact.form.email')} *</label>
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
                    <label htmlFor="phone">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">{t('contact.form.subject')}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">{t('contact.form.message')} *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    {t('contact.form.submit')}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="contact-info-section">
                <h2>{t('contact.info.title')}</h2>
                
                <div className="contact-info-item">
                  <h3>Address</h3>
                  <p>{t('contact.info.address')}</p>
                </div>
                
                <div className="contact-info-item">
                  <h3>Phone</h3>
                  <p>{t('contact.info.phone')}</p>
                </div>
                
                <div className="contact-info-item">
                  <h3>Email</h3>
                  <p>{t('contact.info.email')}</p>
                </div>
                
                <div className="contact-info-item">
                  <h3>Business Hours</h3>
                  <p>{t('contact.info.hours')}</p>
                </div>

                {/* Map */}
                <div className="contact-map">
                  <h3>{t('contact.map.title')}</h3>
                  <div className="map-placeholder">
                    <p>Map will be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Contact