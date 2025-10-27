import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import './Contact.css'

const Contact: React.FC = () => {
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    // Detect location from IP
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        if (data.country_code === 'ID') {
          setIsIndonesian(true)
        }
      } catch (error) {
        console.log('IP detection failed, checking browser language')
        const browserLang = navigator.language || navigator.languages?.[0]
        if (browserLang?.startsWith('id')) {
          setIsIndonesian(true)
        }
      } finally {
        setIsLoading(false)
      }
    }

    detectLocation()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format WhatsApp message
    const whatsappMessage = isIndonesian 
      ? `Halo Mangala Living,

Nama: ${formData.name}
Email: ${formData.email}
Telepon: ${formData.phone}
Subjek: ${formData.subject}

Pesan:
${formData.message}

Terima kasih!`
      : `Hello Mangala Living,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

Thank you!`
    
    const whatsappUrl = `https://wa.me/6285212078467?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  if (isLoading) {
    return null
  }

  return (
    <div className="contact-page">
      <Helmet>
        <title>{isIndonesian ? 'Hubungi Kami - Mangala Living' : 'Contact Us - Mangala Living'}</title>
        <meta name="description" content={isIndonesian 
          ? "Hubungi workshop kami untuk pertanyaan custom furniture industrial. Melayani cafe, restoran & bisnis di seluruh Indonesia sejak 1999."
          : "Contact our welding workshop for custom industrial furniture inquiries. Serving coffee shops, restaurants & businesses across Indonesia since 1999."} />
        <meta name="keywords" content={isIndonesian 
          ? "hubungi mangala living, furniture industrial inquiry, custom furniture besi, workshop bekasi, furniture manufacturer contact"
          : "contact mangala living, industrial furniture inquiry, custom steel furniture, welding workshop kediri, furniture manufacturer contact"} />
        <link rel="canonical" href="https://mangalaliving.com/contact-us/" />
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-image">
          <img src={heroImage} alt="Contact Mangala Living" loading="eager" />
          <div className="contact-hero-overlay"></div>
        </div>
          <div className="contact-hero-content">
          <h1 className="contact-hero-title">{isIndonesian ? 'Hubungi Kami' : 'Contact Us'}</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-intro">
            <h2 className="contact-main-title">
              {isIndonesian 
                ? "Kami senang mendiskusikan kebutuhan custom furniture Anda atau menjawab pertanyaan. Hubungi tim workshop kami di bawah ini."
                : "We're happy to discuss your custom furniture needs or answer any questions. Get in touch with our welding workshop team below."}
            </h2>
                </div>
                
          <div className="enquiry-form-wrapper">
            <h3 className="enquiry-form-title">{isIndonesian ? 'Formulir Pertanyaan' : 'Enquiry Form'}</h3>
            <p className="enquiry-form-subtitle">
              {isIndonesian 
                ? "Hubungi tim Customer Service kami dengan mengisi formulir di bawah ini. Kami akan berusaha merespons dalam 24 jam."
                : "Contact our Customer Services team by completing the form. We will endeavour to respond within 24 hours."}
            </p>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">{isIndonesian ? 'Nama Anda' : 'Your name'}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-field">
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
                </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">{isIndonesian ? 'Nomor telepon' : 'Phone number'}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="subject">{isIndonesian ? 'Subjek' : 'Subject'}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                </div>

              <div className="form-field-full">
                <label htmlFor="message">{isIndonesian ? 'Tulis pesan Anda di sini' : 'Write your message here'}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  rows={6}
                    required
                ></textarea>
                </div>

              <div className="form-submit-wrapper">
                <button type="submit" className="send-enquiry-btn">
                  {isIndonesian ? '• KIRIM PERTANYAAN' : '• SEND ENQUIRY'}
                </button>
              </div>
              </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact

