import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import './Contact.css'

const Contact: React.FC = () => {
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    // 1) Check URL path prefix
    const path = location.pathname
    if (path.startsWith('/id')) {
      setIsIndonesian(true)
      setIsLoading(false)
      return
    }
    if (path.startsWith('/eng')) {
      setIsIndonesian(false)
      setIsLoading(false)
      return
    }

    // 2) Check query parameter ?lang=
    const params = new URLSearchParams(location.search)
    const lang = params.get('lang')
    if (lang === 'id' || lang === 'en') {
      setIsIndonesian(lang === 'id')
      setIsLoading(false)
      return
    }

    // 3) Fallback to IP/Browser detection
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        if (data.country_code === 'ID') {
          setIsIndonesian(true)
        }
      } catch (error) {
        const browserLang = navigator.language || navigator.languages?.[0]
        if (browserLang?.startsWith('id')) {
          setIsIndonesian(true)
        }
      } finally {
        setIsLoading(false)
      }
    }

    detectLocation()
  }, [location.pathname, location.search])

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
    
    const whatsappUrl = `https://wa.me/+6288801146881?text=${encodeURIComponent(whatsappMessage)}`
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

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  return (
    <div className="contact-page">
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{isIndonesian ? 'Hubungi Workshop Furniture Bekasi: WhatsApp, Lokasi, Jam Operasional - Mangala Living' : 'Contact Furniture Workshop Bekasi: WhatsApp, Location, Operating Hours - Mangala Living'}</title>
        <meta name="description" content={isIndonesian 
          ? "Bagaimana cara menghubungi Mangala Living? WhatsApp: +6288801146881 (response 1-3 jam), Email: info@mangala-living.com, Alamat workshop: Jl. Raya Setu Cibitung Bekasi (10 menit dari tol Cibitung, 25 menit dari Jakarta Timur). Jam buka: Senin-Sabtu 08.00-17.00 WIB. Area melayani: FREE survey Bekasi, Jakarta Timur, Cikarang. Konsultasi furniture industrial gratis via WhatsApp."
          : "How to contact Mangala Living? WhatsApp: +6288801146881 (1-3 hour response), Email: info@mangala-living.com, Workshop address: Jl. Raya Setu Cibitung Bekasi (10 minutes from Cibitung toll gate, 25 minutes from East Jakarta). Operating hours: Monday-Saturday 08.00-17.00 WIB. Service area: FREE survey for Bekasi, East Jakarta, Cikarang. Free industrial furniture consultation via WhatsApp."} />
        <meta name="keywords" content={isIndonesian 
          ? "hubungi mangala living, whatsapp furniture bekasi, nomor workshop furniture bekasi, lokasi workshop furniture bekasi, alamat mangala living bekasi, jam buka furniture bekasi, cara menghubungi workshop furniture, konsultasi furniture industrial gratis, kontak furniture besi bekasi, email mangala living, survey furniture gratis bekasi"
          : "contact mangala living, whatsapp furniture bekasi, furniture workshop bekasi contact, mangala living location, workshop address bekasi, operating hours furniture bekasi, free furniture consultation"} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`contact-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-image">
          <img 
            src={heroImage} 
            alt="Contact Mangala Living - Hubungi Workshop Furniture Industrial Bekasi - WhatsApp +6288801146881"
            title="Contact Mangala Living - Get in Touch with Industrial Furniture Manufacturer"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            itemProp="image"
            data-image-type="contact-hero"
            data-category="contact"
          />
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
                  {isIndonesian ? 'KIRIM PERTANYAAN' : 'SEND ENQUIRY'}
                </button>
              </div>
              </form>
          </div>
          
          {/* Centered Workshop Info */}
          <div style={{ textAlign: 'center', margin: '40px auto 32px' }}>
            <div style={{ fontWeight: 600, marginBottom: 12, fontSize: '1.1rem', color: '#2c2c2c' }}>
              Find Us
            </div>
            <div style={{ fontWeight: 600, marginBottom: 8, color: '#8B7355' }}>
              Workshop Bekasi:
            </div>
            <div style={{ marginBottom: 8, lineHeight: '1.6' }}>
              <a 
                href="https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#2c2c2c', textDecoration: 'underline' }}
              >
                Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
              </a>
            </div>
            <div>
              <a 
                href="https://wa.me/+6288801146881" 
                style={{ color: '#8B7355', textDecoration: 'underline', fontWeight: '500' }}
              >
                +6288801146881
              </a>
            </div>
          </div>
          
          {/* Embedded Google Map */}
          <div style={{ margin: '0 auto 40px', maxWidth: 900 }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 8 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4698705313735!2d107.04449967316903!3d-6.3331217619628015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699155096769b1%3A0x32e8009b574bfb5e!2sMangala%20Living%20(Workshop)!5e0!3m2!1sen!2sid!4v1761932272164!5m2!1sen!2sid"
                width="600"
                height="450"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mangala Living Workshop Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact

