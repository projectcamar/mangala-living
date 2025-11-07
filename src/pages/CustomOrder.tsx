import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MessageCircle, CheckCircle, FileText, Wrench, Package, Truck } from 'lucide-react'
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
        <div className="custom-order-hero-content">
          <h1 className="custom-order-hero-title">
            {isIndonesian ? 'Custom Order' : 'Custom Order'}
          </h1>
        </div>
      </section>

      {/* Opening Section */}
      <section className="custom-order-section">
        <div className="custom-order-container">
          <h2 className="custom-order-heading">
            {isIndonesian ? 'Setiap orang punya selera' : 'Everyone has their own taste'}
          </h2>
          <p className="custom-order-text">
            {isIndonesian 
              ? 'Dan sering kali, selera itu tak bisa diwakili oleh produk jadi yang sudah ada di pasaran. Itulah mengapa kami membuka pintu bagi Anda yang ingin sesuatu yang lebih personal - lebih dekat dengan karakter, fungsi, dan nilai estetika yang Anda yakini.'
              : 'And often, that taste cannot be represented by ready-made products available in the market. That\'s why we open our doors to those who want something more personal - closer to the character, function, and aesthetic values you believe in.'}
          </p>
          <p className="custom-order-text">
            {isIndonesian 
              ? 'Kami tidak sekadar membuat furnitur. Kami membentuknya dari pemahaman. Tentang gaya hidup Anda, tentang ruangan yang ingin Anda bangun, dan tentang cerita yang ingin Anda hadirkan di dalamnya.'
              : 'We don\'t just make furniture. We shape it from understanding. About your lifestyle, about the room you want to build, and about the story you want to present in it.'}
          </p>
        </div>
      </section>

      {/* Simple Ideas Section */}
      <section className="custom-order-section custom-order-section-gray">
        <div className="custom-order-container">
          <h2 className="custom-order-heading">
            {isIndonesian ? 'Dimulai dari Ide yang Sederhana' : 'Starting from Simple Ideas'}
          </h2>
          <div className="custom-order-badge">
            {isIndonesian 
              ? 'Furniture Custom Desain Terpercaya Kualitas Eksport'
              : 'Trusted Custom Furniture Design Export Quality'}
          </div>
          
          <div className="custom-order-content-with-image">
            <div className="custom-order-image">
              <img 
                src={showroomImage} 
                alt={isIndonesian ? 'Furniture Custom Design' : 'Custom Furniture Design'}
                loading="lazy"
              />
            </div>
            <div className="custom-order-text-content">
              <p className="custom-order-text">
                {isIndonesian 
                  ? 'Ceritakan saja keinginan Anda, tak perlu pakai kata rumit. Mau rak terbuka dengan ukuran khusus? Kursi santai yang bisa muat di sudut favorit rumah? Atau mungkin satu set meja makan untuk menghidupkan suasana kafe? Semua bisa dirancang sejak awal, sesuai dengan kebutuhan dan suasana yang ingin Anda bangun.'
                  : 'Just tell us your wishes, no need for complicated words. Want an open shelf with custom dimensions? A comfortable chair that fits in your favorite corner? Or maybe a dining set to liven up the cafe atmosphere? Everything can be designed from scratch, according to your needs and the atmosphere you want to create.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Styles and Concepts Section */}
      <section className="custom-order-section">
        <div className="custom-order-container">
          <h2 className="custom-order-heading">
            {isIndonesian ? 'Banyak Gaya dan Konsep - Semua Bisa Diatur' : 'Many Styles and Concepts - All Can Be Arranged'}
          </h2>
          <p className="custom-order-text">
            {isIndonesian 
              ? 'Kami percaya, setiap orang punya selera unik dalam menata ruang. Ada yang menyukai detail yang kaya, ada pula yang memilih garis sederhana dan bersih. Di Mangala Living, semua pendekatan desain tersebut bukan sekadar mungkin, tapi memang menjadi keahlian kami.'
              : 'We believe everyone has a unique taste in arranging space. Some like rich details, others choose simple and clean lines. At Mangala Living, all these design approaches are not just possible, but indeed our expertise.'}
          </p>
          <p className="custom-order-text">
            {isIndonesian 
              ? 'Tim kami terbiasa menangani permintaan desain dengan ragam karakter: dari estetika megah penuh aksen klasik, tampilan natural yang earthy, hingga gaya modern yang tegas namun tetap fungsional. Permintaan desain berproporsi simetris, potongan melengkung lembut, hingga struktur modular dengan fungsi ganda, menjadi beberapa pola yang paling sering dikerjakan dan digemari pasar.'
              : 'Our team is accustomed to handling design requests with various characters: from magnificent aesthetics full of classic accents, natural earthy looks, to modern styles that are firm yet functional. Symmetrical proportioned designs, soft curved cuts, to modular structures with dual functions, are some of the patterns most often worked on and favored by the market.'}
          </p>
          <p className="custom-order-text">
            {isIndonesian 
              ? 'Semua produk kami dibuat dengan presisi oleh pengrajin berpengalaman yang memahami keseimbangan antara visual dan konstruksi. Keahlian lokal dipadukan dengan standar desain global menjadikan setiap hasil akhir terasa eksklusif, namun tetap terasa akrab di rumah Anda.'
              : 'All our products are made with precision by experienced craftsmen who understand the balance between visual and construction. Local expertise combined with global design standards makes every final result feel exclusive, yet still familiar in your home.'}
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="custom-order-section custom-order-section-gray">
        <div className="custom-order-container">
          <h2 className="custom-order-heading">
            {isIndonesian ? 'Proses yang Nyata dan Bisa Diandalkan' : 'Real and Reliable Process'}
          </h2>
          <p className="custom-order-text custom-order-text-center">
            {isIndonesian 
              ? 'Tidak semua orang paham proses produksi furnitur. Dan Anda tidak perlu paham - cukup punya ide. Biarkan sisanya kami bantu urus.'
              : 'Not everyone understands the furniture production process. And you don\'t need to understand - just have an idea. Let us handle the rest.'}
          </p>
          
          <div className="custom-order-process-grid">
            <div className="custom-order-process-item">
              <div className="custom-order-process-icon">
                <MessageCircle size={32} />
              </div>
              <h3 className="custom-order-process-title">
                {isIndonesian ? 'Konsultasi Awal' : 'Initial Consultation'}
              </h3>
              <p className="custom-order-process-desc">
                {isIndonesian 
                  ? 'Kirimkan inspirasi Anda. Bisa berupa gambar, sketsa, atau catatan kasar.'
                  : 'Send us your inspiration. Can be images, sketches, or rough notes.'}
              </p>
            </div>

            <div className="custom-order-process-item">
              <div className="custom-order-process-icon">
                <FileText size={32} />
              </div>
              <h3 className="custom-order-process-title">
                {isIndonesian ? 'Pemilihan Bahan' : 'Material Selection'}
              </h3>
              <p className="custom-order-process-desc">
                {isIndonesian 
                  ? 'Kami sarankan opsi terbaik, mulai dari kayu jati hingga jenis kayu mahoni.'
                  : 'We suggest the best options, from teak wood to mahogany wood types.'}
              </p>
            </div>

            <div className="custom-order-process-item">
              <div className="custom-order-process-icon">
                <Wrench size={32} />
              </div>
              <h3 className="custom-order-process-title">
                {isIndonesian ? 'Produksi & Finishing' : 'Production & Finishing'}
              </h3>
              <p className="custom-order-process-desc">
                {isIndonesian 
                  ? 'Tim produksi kami yang berpengalaman akan mengerjakannya langsung secara profesional.'
                  : 'Our experienced production team will work on it directly and professionally.'}
              </p>
            </div>

            <div className="custom-order-process-item">
              <div className="custom-order-process-icon">
                <CheckCircle size={32} />
              </div>
              <h3 className="custom-order-process-title">
                {isIndonesian ? 'Pemeriksaan Kualitas' : 'Quality Check'}
              </h3>
              <p className="custom-order-process-desc">
                {isIndonesian 
                  ? 'Setiap detail dicek sebelum masuk ke proses pengemasan.'
                  : 'Every detail is checked before entering the packaging process.'}
              </p>
            </div>

            <div className="custom-order-process-item">
              <div className="custom-order-process-icon">
                <Truck size={32} />
              </div>
              <h3 className="custom-order-process-title">
                {isIndonesian ? 'Pengiriman Aman' : 'Safe Delivery'}
              </h3>
              <p className="custom-order-process-desc">
                {isIndonesian 
                  ? 'Proses ekspor dilakukan dengan sistem yang tertata dan transparan.'
                  : 'Export process is carried out with a well-organized and transparent system.'}
              </p>
            </div>

            <div className="custom-order-process-item">
              <div className="custom-order-process-icon">
                <Package size={32} />
              </div>
              <h3 className="custom-order-process-title">
                {isIndonesian ? 'Dokumentasi Lengkap' : 'Complete Documentation'}
              </h3>
              <p className="custom-order-process-desc">
                {isIndonesian 
                  ? 'Dilengkapi dengan dokumentasi produk dan panduan perawatan untuk ketahanan jangka panjang.'
                  : 'Comes with product documentation and maintenance guide for long-term durability.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="custom-order-section">
        <div className="custom-order-container custom-order-cta-container">
          <h2 className="custom-order-heading">
            {isIndonesian ? 'Siap untuk Mulai?' : 'Ready to Start?'}
          </h2>
          <p className="custom-order-text custom-order-text-center">
            {isIndonesian 
              ? 'Jika Anda mencari furnitur yang bisa mewakili identitas, fungsi, dan estetika ruang Anda, ini saatnya bicara.'
              : 'If you\'re looking for furniture that can represent your space\'s identity, function, and aesthetics, it\'s time to talk.'}
          </p>
          <p className="custom-order-text custom-order-text-center">
            {isIndonesian 
              ? 'Kirimkan ide Anda. Kami bantu rancang, buatkan, dan antarkan hingga terpasang dengan rapi.'
              : 'Send us your ideas. We\'ll help design, create, and deliver until it\'s neatly installed.'}
          </p>
          
          <div className="custom-order-cta-button-wrapper">
            <a 
              href="https://wa.me/6285212078467" 
              target="_blank" 
              rel="noopener noreferrer"
              className="custom-order-cta-button"
            >
              <MessageCircle size={20} />
              {isIndonesian ? 'Langsung hubungi kami sekarang' : 'Contact us now'}
            </a>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="custom-order-section custom-order-section-dark">
        <div className="custom-order-container">
          <h2 className="custom-order-heading custom-order-heading-light">
            {isIndonesian ? 'Find Us' : 'Find Us'}
          </h2>
          <div className="custom-order-contact-info">
            <p className="custom-order-text custom-order-text-light">
              <strong>{isIndonesian ? 'Workshop Bekasi:' : 'Workshop Bekasi:'}</strong><br />
              <a 
                href="https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="custom-order-link"
              >
                Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
              </a>
            </p>
            <p className="custom-order-text custom-order-text-light">
              <a href="https://wa.me/6285212078467" className="custom-order-link" target="_blank" rel="noopener noreferrer">
                +62 852-1207-8467
              </a>
            </p>
            <p className="custom-order-text custom-order-text-light">
              <a href="mailto:info@mangala-living.com" className="custom-order-link">
                info@mangala-living.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default CustomOrder
