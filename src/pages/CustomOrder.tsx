import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Wrench, Palette, Truck, CheckCircle, MessageCircle } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import showroomImage from '../assets/Bench-corner-kursi-sudut-kursi-santai.webp'
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

  return (
    <div className="custom-order-page">
      <Helmet>
        <title>{isIndonesian ? 'Custom Order - Mangala Living' : 'Custom Order - Mangala Living'}</title>
        <meta name="description" content={isIndonesian 
          ? "Custom furniture industrial scandinavian premium sesuai kebutuhan Anda. Konsultasi gratis, desain custom, dan kualitas eksport." 
          : "Premium custom industrial scandinavian furniture tailored to your needs. Free consultation, custom design, and export quality."} />
        <meta name="keywords" content={isIndonesian 
          ? "custom furniture, furniture custom, mebel custom, furniture industrial custom, desain furniture custom" 
          : "custom furniture, custom industrial furniture, custom scandinavian furniture, bespoke furniture design"} />
        <link rel="canonical" href="https://mangalaliving.com/custom-order/" />
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      
      {/* Hero Section */}
      <section className="custom-order-hero">
        <div className="custom-order-hero-image">
          <img src={heroImage} alt="Custom Order" loading="eager" />
          <div className="custom-order-hero-overlay"></div>
        </div>
        <div className="custom-order-hero-content">
          <h1 className="custom-order-hero-title">{isIndonesian ? 'Custom Order' : 'Custom Order'}</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="custom-order-main-section">
        <div className="custom-order-main-container">
          <div className="custom-order-main-content">
            <div className="custom-order-main-text">
              <h2 className="custom-order-main-title">{isIndonesian ? 'Setiap orang punya selera' : 'Everyone has their own taste'}</h2>
              <div className="custom-order-main-body">
                {isIndonesian ? (
                  <>
                    <p className="custom-order-main-paragraph">
                      Dan sering kali, selera itu tak bisa diwakili oleh produk jadi yang sudah ada di pasaran. Itulah mengapa kami membuka pintu bagi Anda yang ingin sesuatu yang lebih personal—lebih dekat dengan karakter, fungsi, dan nilai estetika yang Anda yakini.
                    </p>
                    <p className="custom-order-main-paragraph">
                      Kami tidak sekadar membuat furnitur. Kami membentuknya dari pemahaman. Tentang gaya hidup Anda, tentang ruangan yang ingin Anda bangun, dan tentang cerita yang ingin Anda hadirkan di dalamnya.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="custom-order-main-paragraph">
                      And often, that taste cannot be represented by ready-made products available in the market. That's why we open our doors to those who want something more personal—closer to the character, function, and aesthetic values you believe in.
                    </p>
                    <p className="custom-order-main-paragraph">
                      We don't just make furniture. We shape it from understanding. About your lifestyle, about the room you want to build, and about the story you want to present in it.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="custom-order-main-image-wrapper">
              <img 
                src={showroomImage} 
                alt="Custom Furniture Design" 
                className="custom-order-main-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="custom-order-process-section">
        <div className="custom-order-process-container">
          <h2 className="custom-order-process-title">{isIndonesian ? 'Dimulai dari Ide yang Sederhana' : 'Starting from Simple Ideas'}</h2>
          <p className="custom-order-process-subtitle">{isIndonesian ? 'Furniture Custom Desain Terpercaya Kualitas Eksport' : 'Trusted Custom Furniture Design Export Quality'}</p>
          
          <div className="custom-order-process-content">
            {isIndonesian ? (
              <p className="custom-order-process-description">
                Ceritakan saja keinginan Anda, tak perlu pakai kata rumit. Mau rak terbuka dengan ukuran khusus? Kursi santai yang bisa muat di sudut favorit rumah? Atau mungkin satu set meja makan untuk menghidupkan suasana kafe? Semua bisa dirancang sejak awal, sesuai dengan kebutuhan dan suasana yang ingin Anda bangun.
              </p>
            ) : (
              <p className="custom-order-process-description">
                Just tell us your wishes, no need for complicated words. Want an open shelf with custom dimensions? A comfortable chair that fits in your favorite corner? Or maybe a dining set to liven up the cafe atmosphere? Everything can be designed from scratch, according to your needs and the atmosphere you want to create.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="custom-order-styles-section">
        <div className="custom-order-styles-container">
          <h2 className="custom-order-styles-title">{isIndonesian ? 'Banyak Gaya dan Konsep — Semua Bisa Diatur' : 'Many Styles and Concepts — All Can Be Arranged'}</h2>
          
          <div className="custom-order-styles-content">
            {isIndonesian ? (
              <>
                    <p className="custom-order-styles-description">
                      Kami percaya, setiap orang punya selera unik dalam menata ruang. Ada yang menyukai detail yang kaya, ada pula yang memilih garis sederhana dan bersih. Di Mangala Living, semua pendekatan desain tersebut bukan sekadar mungkin, tapi memang menjadi keahlian kami.
                    </p>
                <p className="custom-order-styles-description">
                  Tim kami terbiasa menangani permintaan desain dengan ragam karakter: dari estetika megah penuh aksen klasik, tampilan natural yang earthy, hingga gaya modern yang tegas namun tetap fungsional. Permintaan desain berproporsi simetris, potongan melengkung lembut, hingga struktur modular dengan fungsi ganda, menjadi beberapa pola yang paling sering dikerjakan dan digemari pasar.
                </p>
                <p className="custom-order-styles-description">
                  Semua produk kami dibuat dengan presisi oleh pengrajin berpengalaman yang memahami keseimbangan antara visual dan konstruksi. Keahlian lokal dipadukan dengan standar desain global menjadikan setiap hasil akhir terasa eksklusif, namun tetap terasa akrab di rumah Anda.
                </p>
              </>
            ) : (
              <>
                <p className="custom-order-styles-description">
                  We believe everyone has a unique taste in arranging space. Some like rich details, others choose simple and clean lines. At Mangala Living, all these design approaches are not just possible, but indeed our expertise.
                </p>
                <p className="custom-order-styles-description">
                  Our team is accustomed to handling design requests with various characters: from magnificent aesthetics full of classic accents, natural earthy looks, to modern styles that are firm yet functional. Symmetrical proportioned designs, soft curved cuts, to modular structures with dual functions, are some of the patterns most often worked on and favored by the market.
                </p>
                <p className="custom-order-styles-description">
                  All our products are made with precision by experienced craftsmen who understand the balance between visual and construction. Local expertise combined with global design standards makes every final result feel exclusive, yet still familiar in your home.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="custom-order-steps-section">
        <div className="custom-order-steps-container">
          <h2 className="custom-order-steps-title">{isIndonesian ? 'Proses yang Nyata dan Bisa Diandalkan' : 'Real and Reliable Process'}</h2>
          <p className="custom-order-steps-subtitle">
            {isIndonesian 
              ? "Tidak semua orang paham proses produksi furnitur. Dan Anda tidak perlu paham—cukup punya ide. Biarkan sisanya kami bantu urus."
              : "Not everyone understands the furniture production process. And you don't need to understand—just have an idea. Let us handle the rest."}
          </p>
          
          <div className="custom-order-steps-grid">
            <div className="custom-order-step">
              <div className="custom-order-step-icon">
                <MessageCircle size={48} strokeWidth={1.5} />
              </div>
              <h3 className="custom-order-step-title">{isIndonesian ? 'Konsultasi Awal' : 'Initial Consultation'}</h3>
              <p className="custom-order-step-description">
                {isIndonesian 
                  ? "Kirimkan inspirasi Anda. Bisa berupa gambar, sketsa, atau catatan kasar."
                  : "Send us your inspiration. Can be images, sketches, or rough notes."}
              </p>
            </div>

            <div className="custom-order-step">
              <div className="custom-order-step-icon">
                <Palette size={48} strokeWidth={1.5} />
              </div>
              <h3 className="custom-order-step-title">{isIndonesian ? 'Pemilihan Bahan' : 'Material Selection'}</h3>
              <p className="custom-order-step-description">
                {isIndonesian 
                  ? "Kami sarankan opsi terbaik, mulai dari kayu jati hingga jenis kayu mahoni."
                  : "We suggest the best options, from teak wood to mahogany wood types."}
              </p>
            </div>

            <div className="custom-order-step">
              <div className="custom-order-step-icon">
                <Wrench size={48} strokeWidth={1.5} />
              </div>
              <h3 className="custom-order-step-title">{isIndonesian ? 'Produksi & Finishing' : 'Production & Finishing'}</h3>
              <p className="custom-order-step-description">
                {isIndonesian 
                  ? "Tim produksi kami yang berpengalaman akan mengerjakannya langsung secara profesional."
                  : "Our experienced production team will work on it directly and professionally."}
              </p>
            </div>

            <div className="custom-order-step">
              <div className="custom-order-step-icon">
                <CheckCircle size={48} strokeWidth={1.5} />
              </div>
              <h3 className="custom-order-step-title">{isIndonesian ? 'Pemeriksaan Kualitas' : 'Quality Check'}</h3>
              <p className="custom-order-step-description">
                {isIndonesian 
                  ? "Setiap detail dicek sebelum masuk ke proses pengemasan."
                  : "Every detail is checked before entering the packaging process."}
              </p>
            </div>

            <div className="custom-order-step">
              <div className="custom-order-step-icon">
                <Truck size={48} strokeWidth={1.5} />
              </div>
              <h3 className="custom-order-step-title">{isIndonesian ? 'Pengiriman Aman' : 'Safe Delivery'}</h3>
              <p className="custom-order-step-description">
                {isIndonesian 
                  ? "Proses ekspor dilakukan dengan sistem yang tertata dan transparan."
                  : "Export process is carried out with a well-organized and transparent system."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="custom-order-cta-section">
        <div className="custom-order-cta-container">
          <h2 className="custom-order-cta-title">{isIndonesian ? 'Siap untuk Mulai?' : 'Ready to Start?'}</h2>
          <p className="custom-order-cta-description">
            {isIndonesian 
              ? "Jika Anda mencari furnitur yang bisa mewakili identitas, fungsi, dan estetika ruang Anda, ini saatnya bicara."
              : "If you're looking for furniture that can represent your space's identity, function, and aesthetics, it's time to talk."}
          </p>
          <p className="custom-order-cta-description">
            {isIndonesian 
              ? "Kirimkan ide Anda. Kami bantu rancang, buatkan, dan antarkan hingga terpasang dengan rapi."
              : "Send us your ideas. We'll help design, create, and deliver until it's neatly installed."}
          </p>
          
          <div className="custom-order-cta-buttons">
            <a 
              href="https://wa.me/6285212078467" 
              target="_blank" 
              rel="noopener noreferrer"
              className="custom-order-cta-button"
            >
              {isIndonesian ? '📩 Langsung hubungi kami sekarang' : '📩 Contact us now'}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="custom-order-contact-section">
        <div className="custom-order-contact-container">
          <h2 className="custom-order-contact-title">{isIndonesian ? 'Alamat' : 'Address'}</h2>
          <div className="custom-order-contact-info">
            <p className="custom-order-contact-address">
              Jl. RA Rukmini KM 2 no. 77 Desa Pekalongan RT 05 RW 01, Kec. Batealit - Jepara
            </p>
            <p className="custom-order-contact-phone">Telepon : +62 852-1207-8467</p>
            <p className="custom-order-contact-email">Email : info@mangala-living.com</p>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default CustomOrder