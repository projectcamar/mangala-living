import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceAreasSection from '../components/ServiceAreasSection'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import showroomImage from '../assets/Bench-corner-kursi-sudut-kursi-santai.webp'
import './Partnership.css'

const Partnership: React.FC = () => {
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
    <div className="partnership-page">
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Helmet>
        <title>{isIndonesian ? 'Kerja Sama - Mangala Living' : 'Partnership - Mangala Living'}</title>
        <meta name="description" content={isIndonesian 
          ? "Kerja sama furniture untuk proyek hotel, vila, restoran, dan rumah tinggal. Mitra terpercaya untuk pengadaan furnitur komersial." 
          : "Furniture partnership for hotel, villa, restaurant, and residential projects. Trusted partner for commercial furniture procurement."} />
        <meta name="keywords" content={isIndonesian 
          ? "kerja sama furniture, partnership furniture, kontraktor mebel, pengadaan furniture hotel, furniture proyek" 
          : "furniture partnership, furniture contractor, hotel furniture procurement, commercial furniture projects"} />
        <link rel="canonical" href="https://mangalaliving.com/partnership/" />
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      
      {/* Hero Section */}
      <section className="partnership-hero">
        <div className="partnership-hero-image">
          <img src={heroImage} alt="Partnership" loading="eager" />
          <div className="partnership-hero-overlay"></div>
        </div>
        <div className="partnership-hero-content">
          <h1 className="partnership-hero-title">{isIndonesian ? 'Kerja Sama' : 'Partnership'}</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="partnership-main-section">
        <div className="partnership-main-container">
          <div className="partnership-main-content">
            <div className="partnership-main-text">
              <h2 className="partnership-main-title">{isIndonesian ? 'Setiap proyek punya cerita sendiri' : 'Every project has its own story'}</h2>
              <div className="partnership-main-body">
                {isIndonesian ? (
                  <>
                    <p className="partnership-main-paragraph">
                      Baik itu pengadaan furnitur hotel, vila, restoran, atau rumah tinggal—yang dibutuhkan bukan hanya produk, tapi mitra kerja yang bisa dipercaya. Mangala Living hadir bukan sebagai penjual, tapi sebagai bagian dari tim Anda.
                    </p>
                    <p className="partnership-main-paragraph">
                      Kami mengerti bahwa sebuah proyek berarti tenggat, spesifikasi ketat, revisi mendadak, dan harapan yang tinggi. Anda butuh rekan yang bisa mengakomodasi, bukan menambah kerumitan. Yang bisa mendengar, bukan hanya menjawab.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="partnership-main-paragraph">
                      Whether it's hotel, villa, restaurant, or residential furniture procurement—what's needed is not just products, but a trusted work partner. Mangala Living is here not as a seller, but as part of your team.
                    </p>
                    <p className="partnership-main-paragraph">
                      We understand that a project means deadlines, strict specifications, sudden revisions, and high expectations. You need a partner who can accommodate, not add complexity. Who can listen, not just answer.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="partnership-main-image-wrapper">
              <img 
                src={showroomImage} 
                alt="Partnership Collaboration" 
                className="partnership-main-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="partnership-experience-section">
        <div className="partnership-experience-container">
          <h2 className="partnership-experience-title">{isIndonesian ? 'Pengalaman Jadi Nilai Tambah' : 'Experience Becomes Added Value'}</h2>
          
          <div className="partnership-experience-content">
            {isIndonesian ? (
              <>
                <p className="partnership-experience-description">
                  Kami sudah terbiasa ikut dalam banyak skema proyek—dari apartemen di tengah kota, resor di pinggir pantai, hingga pengadaan ruang publik. Setiap klien membawa tantangan berbeda. Justru itu yang membuat kami terlatih, bukan sekadar ahli membuat furnitur, tapi juga memahami dinamika proyeknya.
                </p>
                <p className="partnership-experience-description">
                  Mulai dari proses penyesuaian desain, pemilihan material, hingga skema pengiriman bertahap, semuanya bisa dikomunikasikan. Anda tidak perlu menjelaskan dua kali. Kami tahu bagaimana menyusun alur kerja yang efisien.
                </p>
              </>
            ) : (
              <>
                <p className="partnership-experience-description">
                  We're already accustomed to participating in many project schemes—from apartments in the city center, resorts on the beach, to public space procurement. Each client brings different challenges. That's exactly what makes us trained, not just experts at making furniture, but also understanding project dynamics.
                </p>
                <p className="partnership-experience-description">
                  From the design adjustment process, material selection, to phased delivery schemes, everything can be communicated. You don't need to explain twice. We know how to organize efficient workflows.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="partnership-collaboration-section">
        <div className="partnership-collaboration-container">
          <h2 className="partnership-collaboration-title">{isIndonesian ? 'Bukan Sekadar Produksi, Tapi Kolaborasi' : 'Not Just Production, But Collaboration'}</h2>
          <p className="partnership-collaboration-subtitle">{isIndonesian ? 'Kontraktor Mebel' : 'Furniture Contractor'}</p>
          
          <div className="partnership-collaboration-content">
            {isIndonesian ? (
              <>
                <p className="partnership-collaboration-description">
                  Kami percaya, keberhasilan proyek bukan dari banyaknya item yang diproduksi, tapi dari seberapa tepat kami mengeksekusi ide Anda. Ada klien yang datang dengan moodboard, ada yang cuma kirim foto, bahkan ada yang hanya bilang: "Saya butuh nuansa tropis, hangat, tapi tetap elegan."
                </p>
                <p className="partnership-collaboration-description">
                  Semua bisa dibicarakan. Tim kami terbuka untuk berdiskusi dari awal. Anda bisa menyampaikan keperluan khusus: ukuran ruang, batasan anggaran, gaya desain interior, atau detail konstruksi.
                </p>
                <p className="partnership-collaboration-description">
                  Kami akan bantu merumuskan solusi. Bukan dengan kata-kata manis, tapi dengan sketsa, perhitungan material dan prototipe bila dibutuhkan. Semuanya jelas dan terukur.
                </p>
              </>
            ) : (
              <>
                <p className="partnership-collaboration-description">
                  We believe project success is not from the number of items produced, but from how precisely we execute your ideas. Some clients come with moodboards, some just send photos, even some just say: "I need a tropical, warm, yet elegant atmosphere."
                </p>
                <p className="partnership-collaboration-description">
                  Everything can be discussed. Our team is open to discussion from the start. You can convey special needs: room dimensions, budget constraints, interior design style, or construction details.
                </p>
                <p className="partnership-collaboration-description">
                  We'll help formulate solutions. Not with sweet words, but with sketches, material calculations and prototypes when needed. Everything is clear and measurable.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Flexibility Section */}
      <section className="partnership-flexibility-section">
        <div className="partnership-flexibility-container">
          <h2 className="partnership-flexibility-title">{isIndonesian ? 'Tahu Kapan Harus Cepat, Tahu Kapan Harus Teliti' : 'Know When to Be Fast, Know When to Be Careful'}</h2>
          
          <div className="partnership-flexibility-content">
            {isIndonesian ? (
              <>
                <p className="partnership-flexibility-description">
                  Beberapa klien butuh cepat. Ada yang menginginkan tahap pengiriman per zona. Ada pula yang meminta penyesuaian produksi berdasarkan hasil site inspection. Semua itu masuk akal dan bisa dibicarakan.
                </p>
                <p className="partnership-flexibility-description">
                  Kami tidak menawarkan paket seragam untuk semua proyek. Anda bisa memilih. Mau fokus pada kayu solid dengan sentuhan handmade? Atau kombinasi antara efisiensi produksi dan detail artistik? Kami bantu wujudkan.
                </p>
              </>
            ) : (
              <>
                <p className="partnership-flexibility-description">
                  Some clients need speed. Some want phased delivery per zone. Others request production adjustments based on site inspection results. All of that makes sense and can be discussed.
                </p>
                <p className="partnership-flexibility-description">
                  We don't offer uniform packages for all projects. You can choose. Want to focus on solid wood with handmade touches? Or a combination of production efficiency and artistic details? We'll help make it happen.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Scale Section */}
      <section className="partnership-scale-section">
        <div className="partnership-scale-container">
          <h2 className="partnership-scale-title">{isIndonesian ? 'Proyek Besar atau Kecil, Sama-Sama Serius' : 'Large or Small Projects, Both Taken Seriously'}</h2>
          
          <div className="partnership-scale-content">
            {isIndonesian ? (
              <p className="partnership-scale-description">
                Pernah mengerjakan ratusan unit dalam satu waktu. Pernah juga hanya buat satu set kursi untuk area tamu privat. Skala bukan penentu. Yang penting: apakah proyek Anda berarti?
              </p>
            ) : (
              <p className="partnership-scale-description">
                We've worked on hundreds of units at once. We've also made just one set of chairs for a private guest area. Scale is not the determining factor. What matters: does your project matter?
              </p>
            )}
            
            <p className="partnership-scale-question">
              {isIndonesian ? 'Bila jawabannya ya, mari kita bicarakan lebih lanjut.' : 'If the answer is yes, let\'s discuss further.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partnership-cta-section">
        <div className="partnership-cta-container">
          <h2 className="partnership-cta-title">{isIndonesian ? 'Siap Bahas Proyek Anda?' : 'Ready to Discuss Your Project?'}</h2>
          <p className="partnership-cta-description">
            {isIndonesian 
              ? "Ceritakan kebutuhan proyek Anda sekarang. Kirimkan gambar, denah, atau referensi, dan kami akan bantu merumuskannya jadi langkah nyata."
              : "Tell us about your project needs now. Send images, floor plans, or references, and we'll help formulate them into concrete steps."}
          </p>
          
          <div className="partnership-cta-buttons">
            <a 
              href="https://wa.me/6285212078467" 
              target="_blank" 
              rel="noopener noreferrer"
              className="partnership-cta-button"
            >
              {isIndonesian ? '📩 Hubungi kami sekarang' : '📩 Contact us now'}
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <ServiceAreasSection isIndonesian={isIndonesian} />

      {/* Contact Info */}
      <section className="partnership-contact-section">
        <div className="partnership-contact-container">
          <h2 className="partnership-contact-title">{isIndonesian ? 'Find Us' : 'Find Us'}</h2>
          <div className="partnership-contact-info">
            <div style={{ marginBottom: '16px' }}>
              <strong style={{ color: '#8B7355', display: 'block', marginBottom: '8px' }}>
                Workshop Bekasi:
              </strong>
              <p className="partnership-contact-address">
                <a 
                  href="https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#2c2c2c', textDecoration: 'underline' }}
                >
                  Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
                </a>
              </p>
            </div>
            <p className="partnership-contact-phone">
              <a href="https://wa.me/6285212078467" style={{ color: '#8B7355', textDecoration: 'underline' }}>
                +62 852-1207-8467
              </a>
            </p>
            <p className="partnership-contact-email">
              <a href="mailto:info@mangala-living.com" style={{ color: '#8B7355', textDecoration: 'underline' }}>
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

export default Partnership