import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Diamond, DollarSign, Wrench, Globe } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import showroomImage from '../assets/Bench-corner-kursi-sudut-kursi-santai.webp'
import './About.css'

const About: React.FC = () => {
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

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

  if (isLoading) {
    return null
  }

  return (
    <div className="about-page">
      <Helmet>
        <title>{isIndonesian ? 'Tentang Kami - Mangala Living' : 'About Us - Mangala Living'}</title>
        <meta name="description" content={isIndonesian 
          ? "Produsen furniture industrial scandinavian premium sejak 1999. Pengalaman 25 tahun melayani cafe, restoran, dan bisnis di seluruh Indonesia." 
          : "Premium industrial scandinavian furniture manufacturer since 1999. 25 years of experience serving coffee shops, restaurants, and businesses across Indonesia."} />
        <meta name="keywords" content={isIndonesian 
          ? "tentang mangala living, produsen furniture industrial, furniture scandinavian bekasi, custom furniture industrial, furniture cafe" 
          : "about mangala living, industrial furniture manufacturer, scandinavian furniture bekasi, custom industrial furniture, coffee shop furniture"} />
        <link rel="canonical" href="https://mangalaliving.com/about/" />
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-image">
          <img src={heroImage} alt="About Mangala Living" loading="eager" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">{isIndonesian ? 'Tentang Kami' : 'About Us'}</h1>
        </div>
      </section>

      {/* Message from Mangala */}
      <section className="about-message-section">
        <div className="about-message-container">
          <div className="about-message-content">
            <div className="about-message-text">
              <h2 className="about-message-title">{isIndonesian ? 'Pesan dari Mangala' : 'Message from Mangala'}</h2>
              <div className="about-message-body">
                {isIndonesian ? (
                  <>
                    <p className="about-message-paragraph">
                      Sejak 1999, Mangala Living telah menjadi produsen furniture industrial scandinavian premium terkemuka di Indonesia. Dengan pengalaman 25 tahun, kami dengan bangga telah melayani lebih dari 1.000 pesanan dari bisnis di seluruh Indonesia, menjadikan kami sebagai pilihan terbaik untuk solusi furniture komersial.
                    </p>
                    <p className="about-message-paragraph">
                      Jaringan kami meliputi seluruh kepulauan Indonesia, menyediakan solusi furniture berkualitas tinggi untuk cafe, restoran, kantor, hotel, co-working space, dan retail. Setiap produk dibuat dengan teknik manufaktur presisi dan perhatian terhadap detail.
                    </p>
                    <p className="about-message-paragraph">
                      Kami menerima penuh custom request dan bekerja erat dengan klien untuk mewujudkan visi mereka. Baik Anda membutuhkan dining set industrial, furniture bar, sistem rak, atau custom pieces unik, pengrajin ahli kami dapat menciptakan persis apa yang bisnis Anda butuhkan.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="about-message-paragraph">
                      Since 1999, Mangala Living has been Indonesia's premier manufacturer specializing in custom industrial scandinavian furniture. With 25 years of experience, we've proudly served over 1,000 orders from businesses across Indonesia, establishing ourselves as the best choice for commercial furniture solutions.
                    </p>
                    <p className="about-message-paragraph">
                      Our network spans the entire Indonesian archipelago, providing highest-quality furniture solutions for coffee shops, restaurants, offices, hotels, co-working spaces, and retail establishments. Every piece is crafted with precision manufacturing techniques and attention to detail.
                    </p>
                    <p className="about-message-paragraph">
                      We fully accept custom requests and work closely with our clients to bring their vision to life. Whether you need industrial dining sets, bar furniture, shelving systems, or unique custom pieces, our skilled craftsmen can create exactly what your business needs.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="about-message-image-wrapper">
              <img 
                src={showroomImage} 
                alt="Mangala Living Workshop" 
                className="about-message-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="showrooms-section">
        <div className="showrooms-container">
          <h2 className="showrooms-title">{isIndonesian ? 'Workshop Kami' : 'Our Workshop'}</h2>
          <p className="showrooms-intro">
            {isIndonesian 
              ? "Kunjungi workshop kami di Bekasi untuk melihat koleksi furniture industrial scandinavian dan diskusikan kebutuhan custom order Anda:"
              : "Visit our workshop in Bekasi to see our industrial scandinavian furniture collection and discuss your custom order needs:"}
          </p>
          
          <div className="showrooms-locations">
            <div className="showroom-location">
              <h3>Workshop Bekasi</h3>
              <p>
                <a
                  href="https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
                </a>
              </p>
              <p className="footer-phone">+62 852 1207 8467</p>
            </div>
          </div>

          <p className="showrooms-description">
            {isIndonesian 
              ? "Workshop kami dilengkapi fasilitas manufaktur lengkap di mana kami menciptakan custom furniture industrial scandinavian. Tim berpengalaman kami dapat mendiskusikan kebutuhan Anda dan membantu menemukan solusi terbaik untuk cafe, restoran, atau kantor Anda."
              : "Our workshop features a complete manufacturing facility where we create custom industrial scandinavian furniture. Our experienced team can discuss your requirements and help you find the perfect solutions for your coffee shop, restaurant, hail office."}
          </p>

          {/* Embedded Google Map */}
          <div style={{ margin: '30px auto', maxWidth: 900 }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 8 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5118897310535!2d107.04941077380113!3d-6.327649161913011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69918607fe41b1%3A0xf593b1e076b20ae8!2sEmma%20House%20Furniture%20(Bengkel%20Las%20Mandiri)!5e0!3m2!1sen!2sid!4v1761558670806!5m2!1sen!2sid"
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

          <div className="showrooms-buttons">
            <a 
              href="https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="showroom-btn"
            >
              {isIndonesian ? 'Kunjungi Workshop' : 'Visit Workshop'}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Mangala */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2 className="why-choose-title">{isIndonesian ? 'Mengapa Pilih MANGALA?' : 'Why Choose MANGALA?'}</h2>
          
          <div className="why-choose-grid">
            {/* Premium Quality */}
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <Diamond size={48} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-item-title">{isIndonesian ? 'Kualitas Premium' : 'Premium Quality'}</h3>
              <p className="why-choose-item-description">
                {isIndonesian 
                  ? "25 tahun pengalaman dengan teknik manufaktur berkualitas tertinggi dan material industrial grade."
                  : "25 years of experience with highest-quality manufacturing techniques and industrial-grade materials."}
              </p>
            </div>

            {/* Best Value */}
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <DollarSign size={48} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-item-title">{isIndonesian ? 'Harga Pabrik Langsung' : 'Factory Direct Pricing'}</h3>
              <p className="why-choose-item-description">
                {isIndonesian 
                  ? "Kami memproduksi semua produk in-house—tanpa tengkulak, hanya harga terbaik untuk furniture industrial berkualitas."
                  : "We manufacture everything in-house—no middlemen, just the best prices for quality industrial furniture."}
              </p>
            </div>

            {/* Custom Designs */}
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <Wrench size={48} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-item-title">{isIndonesian ? 'Sepenuhnya Dapat Dikustomisasi' : 'Fully Customizable'}</h3>
              <p className="why-choose-item-description">
                {isIndonesian 
                  ? "Kami menerima semua custom request. Beri tahu kami visi Anda dan kami akan mewujudkannya untuk bisnis Anda."
                  : "We accept all custom requests. Tell us your vision and we'll bring it to reality for your business."}
              </p>
            </div>

            {/* Export-Grade Standards */}
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <Globe size={48} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-item-title">{isIndonesian ? 'Jaringan Nasional' : 'Nationwide Network'}</h3>
              <p className="why-choose-item-description">
                {isIndonesian 
                  ? "Melayani 1000+ bisnis di seluruh Indonesia termasuk cafe, restoran, hotel, dan kantor."
                  : "Serving 1000+ businesses across Indonesia including coffee shops, restaurants, hotels, and offices."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About

