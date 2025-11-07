import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MessageCircle, FileText, Wrench, Truck } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import showroomImage from '../assets/Bench-corner-kursi-sudut-kursi-santai.webp'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import './CustomOrder.css'

const CustomOrder: React.FC = () => {
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

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  return (
    <div className="custom-order-page">
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{isIndonesian ? 'Custom Order - Mangala Living' : 'Custom Order - Mangala Living'}</title>
        <meta name="description" content={isIndonesian 
          ? "Pesan furniture industrial custom sesuai kebutuhan Anda. Workshop Mangala Living Bekasi melayani custom order untuk cafe, restoran, kantor, dan rumah." 
          : "Order custom industrial furniture according to your needs. Mangala Living Bekasi Workshop serves custom orders for cafes, restaurants, offices, and homes."} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`custom-order-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      
      {/* Hero Section */}
      <section className="custom-order-hero">
        <div className="custom-order-hero-image">
          <img 
            src={heroImage} 
            alt="Custom Order Mangala Living - Workshop Furniture Industrial Bekasi"
            title="Custom Order - Industrial Furniture Manufacturing"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="custom-order-hero-overlay"></div>
        </div>
        <div className="custom-order-hero-content">
          <h1 className="custom-order-hero-title">
            {isIndonesian ? 'Custom Order' : 'Custom Order'}
          </h1>
        </div>
      </section>

      {/* Opening Section */}
      <section className="custom-order-message-section">
        <div className="custom-order-message-container">
          <div className="custom-order-message-content">
            <div className="custom-order-message-text">
              <h2 className="custom-order-message-title">
                {isIndonesian ? 'Setiap orang punya selera' : 'Everyone has their own taste'}
              </h2>
              <div className="custom-order-message-body">
                <p className="custom-order-message-paragraph">
                  {isIndonesian 
                    ? 'Dan sering kali, selera itu tak bisa diwakili oleh produk jadi yang sudah ada di pasaran. Itulah mengapa kami membuka pintu bagi Anda yang ingin sesuatu yang lebih personal - lebih dekat dengan karakter, fungsi, dan nilai estetika yang Anda yakini.'
                    : 'And often, that taste cannot be represented by ready-made products available in the market. That\'s why we open our doors to those who want something more personal - closer to the character, function, and aesthetic values you believe in.'}
                </p>
                <p className="custom-order-message-paragraph">
                  {isIndonesian 
                    ? 'Kami tidak sekadar membuat furnitur. Kami membentuknya dari pemahaman. Tentang gaya hidup Anda, tentang ruangan yang ingin Anda bangun, dan tentang cerita yang ingin Anda hadirkan di dalamnya.'
                    : 'We don\'t just make furniture. We shape it from understanding. About your lifestyle, about the room you want to build, and about the story you want to present in it.'}
                </p>
              </div>
            </div>
            <div className="custom-order-message-image-wrapper">
              <img 
                src={showroomImage} 
                alt={isIndonesian ? 'Custom Furniture Design Mangala Living' : 'Custom Furniture Design Mangala Living'}
                className="custom-order-message-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Ideas Section */}
      <section className="custom-order-ideas-section">
        <div className="custom-order-ideas-container">
          <h2 className="custom-order-ideas-title">
            {isIndonesian ? 'Dimulai dari Ide yang Sederhana' : 'Starting from Simple Ideas'}
          </h2>
          <p className="custom-order-ideas-intro">
            {isIndonesian 
              ? 'Ceritakan saja keinginan Anda, tak perlu pakai kata rumit. Mau rak terbuka dengan ukuran khusus? Kursi santai yang bisa muat di sudut favorit rumah? Atau mungkin satu set meja makan untuk menghidupkan suasana kafe? Semua bisa dirancang sejak awal, sesuai dengan kebutuhan dan suasana yang ingin Anda bangun.'
              : 'Just tell us your wishes, no need for complicated words. Want an open shelf with custom dimensions? A comfortable chair that fits in your favorite corner? Or maybe a dining set to liven up the cafe atmosphere? Everything can be designed from scratch, according to your needs and the atmosphere you want to create.'}
          </p>
          <p className="custom-order-ideas-description">
            {isIndonesian 
              ? 'Kami percaya, setiap orang punya selera unik dalam menata ruang. Ada yang menyukai detail yang kaya, ada pula yang memilih garis sederhana dan bersih. Di Mangala Living, semua pendekatan desain tersebut bukan sekadar mungkin, tapi memang menjadi keahlian kami. Tim kami terbiasa menangani permintaan desain dengan ragam karakter: dari estetika megah penuh aksen klasik, tampilan natural yang earthy, hingga gaya modern yang tegas namun tetap fungsional.'
              : 'We believe everyone has a unique taste in arranging space. Some like rich details, others choose simple and clean lines. At Mangala Living, all these design approaches are not just possible, but indeed our expertise. Our team is accustomed to handling design requests with various characters: from magnificent aesthetics full of classic accents, natural earthy looks, to modern styles that are firm yet functional.'}
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="custom-order-process-section">
        <div className="custom-order-process-container">
          <h2 className="custom-order-process-main-title">
            {isIndonesian ? 'Proses yang Nyata dan Bisa Diandalkan' : 'Real and Reliable Process'}
          </h2>
          
          <div className="custom-order-process-grid">
            {/* Initial Consultation */}
            <div className="custom-order-process-item">
              <div className="custom-order-process-icon">
                <MessageCircle size={48} strokeWidth={1.5} />
              </div>
              <h3 className="custom-order-process-item-title">
                {isIndonesian ? 'Konsultasi Awal' : 'Initial Consultation'}
              </h3>
              <p className="custom-order-process-item-description">
                {isIndonesian 
                  ? 'Kirimkan inspirasi Anda. Bisa berupa gambar, sketsa, atau catatan kasar. Kami bantu konkritkan ide Anda.'
                  : 'Send us your inspiration. Can be images, sketches, or rough notes. We help materialize your ideas.'}
              </p>
            </div>

            {/* Material Selection */}
            <div className="custom-order-process-item">
              <div className="custom-order-process-icon">
                <FileText size={48} strokeWidth={1.5} />
              </div>
              <h3 className="custom-order-process-item-title">
                {isIndonesian ? 'Pemilihan Bahan & Desain' : 'Material & Design Selection'}
              </h3>
              <p className="custom-order-process-item-description">
                {isIndonesian 
                  ? 'Kami sarankan opsi material terbaik dan buat desain sesuai kebutuhan Anda.'
                  : 'We suggest the best material options and create designs according to your needs.'}
              </p>
            </div>

            {/* Production */}
            <div className="custom-order-process-item">
              <div className="custom-order-process-icon">
                <Wrench size={48} strokeWidth={1.5} />
              </div>
              <h3 className="custom-order-process-item-title">
                {isIndonesian ? 'Produksi Berkualitas' : 'Quality Production'}
              </h3>
              <p className="custom-order-process-item-description">
                {isIndonesian 
                  ? 'Tim produksi berpengalaman mengerjakan dengan presisi dan standar kualitas tinggi.'
                  : 'Experienced production team works with precision and high quality standards.'}
              </p>
            </div>

            {/* Delivery */}
            <div className="custom-order-process-item">
              <div className="custom-order-process-icon">
                <Truck size={48} strokeWidth={1.5} />
              </div>
              <h3 className="custom-order-process-item-title">
                {isIndonesian ? 'Pengiriman & Instalasi' : 'Delivery & Installation'}
              </h3>
              <p className="custom-order-process-item-description">
                {isIndonesian 
                  ? 'Pengiriman aman dan bantuan instalasi hingga furnitur terpasang dengan sempurna.'
                  : 'Safe delivery and installation assistance until the furniture is perfectly set up.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="custom-order-cta-section">
        <div className="custom-order-cta-container">
          <h2 className="custom-order-cta-title">
            {isIndonesian ? 'Siap untuk Mulai?' : 'Ready to Start?'}
          </h2>
          <p className="custom-order-cta-intro">
            {isIndonesian 
              ? 'Jika Anda mencari furnitur yang bisa mewakili identitas, fungsi, dan estetika ruang Anda, ini saatnya bicara. Kunjungi workshop kami di Bekasi atau hubungi tim kami untuk konsultasi:'
              : 'If you\'re looking for furniture that can represent your space\'s identity, function, and aesthetics, it\'s time to talk. Visit our workshop in Bekasi or contact our team for consultation:'}
          </p>
          
          <div className="custom-order-locations">
            <div className="custom-order-location">
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
              <p className="footer-phone">+62 852-1207-8467</p>
            </div>
          </div>

          <p className="custom-order-cta-description">
            {isIndonesian 
              ? 'Workshop kami dilengkapi fasilitas manufaktur lengkap di mana kami menciptakan custom furniture industrial. Tim berpengalaman kami siap mendiskusikan kebutuhan Anda dan membantu menemukan solusi terbaik.'
              : 'Our workshop features a complete manufacturing facility where we create custom industrial furniture. Our experienced team is ready to discuss your requirements and help you find the perfect solutions.'}
          </p>

          <div className="custom-order-cta-buttons">
            <a 
              href="https://wa.me/6285212078467" 
              target="_blank" 
              rel="noopener noreferrer"
              className="custom-order-btn"
            >
              {isIndonesian ? 'Hubungi Kami' : 'Contact Us'}
            </a>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default CustomOrder
