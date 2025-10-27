import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format WhatsApp message
    const whatsappMessage = `Hello Mangala Living,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

Thank you!`
    
    const whatsappUrl = `https://wa.me/6281138860034?text=${encodeURIComponent(whatsappMessage)}`
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

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us - Mangala Living</title>
        <meta name="description" content="Contact our welding workshop for custom industrial furniture inquiries. Serving coffee shops, restaurants & businesses across Indonesia since 1999." />
        <meta name="keywords" content="contact mangala living, industrial furniture inquiry, custom steel furniture, welding workshop kediri, furniture manufacturer contact" />
        <link rel="canonical" href="https://mangalaliving.com/contact-us/" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-image">
          <img src={heroImage} alt="Contact Mangala Living" loading="eager" />
          <div className="contact-hero-overlay"></div>
        </div>
          <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-intro">
            <h2 className="contact-main-title">
              We're happy to discuss your custom furniture needs or answer any questions. Get in touch with our welding workshop team below.
            </h2>
                </div>
                
          <div className="enquiry-form-wrapper">
            <h3 className="enquiry-form-title">Enquiry Form</h3>
            <p className="enquiry-form-subtitle">
              Contact our Customer Services team by completing the form. We will endeavour to respond within 24 hours.
            </p>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Your name</label>
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
                  <label htmlFor="phone">Phone number</label>
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
                  <label htmlFor="subject">Subject</label>
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
                <label htmlFor="message">Write your message here</label>
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
                  • SEND ENQUIRY
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

