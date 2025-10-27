import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Clock, MapPin, Phone, Mail, Globe } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import './ShippingInformation.css'

const ShippingInformation: React.FC = () => {
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
    <div className="shipping-information-page">
      <Helmet>
        <title>{isIndonesian ? 'Informasi Pengiriman - Mangala Living' : 'Shipping Information - Mangala Living'}</title>
        <meta name="description" content={isIndonesian 
          ? "Informasi lengkap tentang pengiriman furniture dari Mangala Living. Waktu pengiriman, biaya, dan prosedur pengiriman internasional." 
          : "Complete information about furniture shipping from Mangala Living. Shipping times, costs, and international shipping procedures."} />
        <meta name="keywords" content={isIndonesian 
          ? "pengiriman furniture, shipping furniture, ekspor furniture, pengiriman internasional" 
          : "furniture shipping, international shipping, furniture export, shipping times"} />
        <link rel="canonical" href="https://mangalaliving.com/shipping-information/" />
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      
      {/* Hero Section */}
      <section className="shipping-hero">
        <div className="shipping-hero-image">
          <img src={heroImage} alt="Shipping Information" loading="eager" />
          <div className="shipping-hero-overlay"></div>
        </div>
        <div className="shipping-hero-content">
          <h1 className="shipping-hero-title">{isIndonesian ? 'Informasi Pengiriman' : 'Shipping Information'}</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="shipping-main-section">
        <div className="shipping-main-container">
          <div className="shipping-main-content">
            <h2 className="shipping-main-title">{isIndonesian ? 'Pengiriman dari Indonesia ke Seluruh Dunia' : 'Shipping from Indonesia to Worldwide'}</h2>
            <div className="shipping-main-body">
              {isIndonesian ? (
                <p className="shipping-main-paragraph">
                  Kami mengirim dari pelabuhan Tanjung Priok, Jakarta, Indonesia. Pengiriman ke sebagian besar pelabuhan internasional membutuhkan waktu sekitar empat minggu dari Indonesia.
                </p>
              ) : (
                <p className="shipping-main-paragraph">
                  We ship from the port of Tanjung Priok, Jakarta, Indonesia. Shipping to most international ports takes approximately four weeks from Indonesia.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Times Section */}
      <section className="shipping-times-section">
        <div className="shipping-times-container">
          <h2 className="shipping-times-title">{isIndonesian ? 'Waktu Pengiriman ke Pelabuhan Utama Dunia' : 'Shipping Times to Major World Ports'}</h2>
          
          <div className="shipping-times-grid">
            <div className="shipping-time-item">
              <div className="shipping-time-icon">
                <Clock size={24} />
              </div>
              <div className="shipping-time-content">
                <h3 className="shipping-time-region">{isIndonesian ? 'Pelabuhan Pantai Barat AS' : 'USA West Coast Ports'}</h3>
                <p className="shipping-time-duration">{isIndonesian ? '4 minggu' : '4 weeks'}</p>
              </div>
            </div>

            <div className="shipping-time-item">
              <div className="shipping-time-icon">
                <Clock size={24} />
              </div>
              <div className="shipping-time-content">
                <h3 className="shipping-time-region">{isIndonesian ? 'Pelabuhan Pantai Timur AS' : 'USA East Coast Ports'}</h3>
                <p className="shipping-time-duration">{isIndonesian ? '4-5 minggu' : '4-5 weeks'}</p>
              </div>
            </div>

            <div className="shipping-time-item">
              <div className="shipping-time-icon">
                <Clock size={24} />
              </div>
              <div className="shipping-time-content">
                <h3 className="shipping-time-region">{isIndonesian ? 'Pelabuhan Inggris' : 'U.K. Ports'}</h3>
                <p className="shipping-time-duration">{isIndonesian ? '3-4 minggu' : '3-4 weeks'}</p>
              </div>
            </div>

            <div className="shipping-time-item">
              <div className="shipping-time-icon">
                <Clock size={24} />
              </div>
              <div className="shipping-time-content">
                <h3 className="shipping-time-region">{isIndonesian ? 'Pelabuhan Eropa' : 'European Ports'}</h3>
                <p className="shipping-time-duration">{isIndonesian ? '3-4 minggu' : '3-4 weeks'}</p>
              </div>
            </div>

            <div className="shipping-time-item">
              <div className="shipping-time-icon">
                <Clock size={24} />
              </div>
              <div className="shipping-time-content">
                <h3 className="shipping-time-region">{isIndonesian ? 'Pelabuhan Timur Tengah' : 'Middle Eastern Ports'}</h3>
                <p className="shipping-time-duration">{isIndonesian ? '3-4 minggu' : '3-4 weeks'}</p>
              </div>
            </div>

            <div className="shipping-time-item">
              <div className="shipping-time-icon">
                <Clock size={24} />
              </div>
              <div className="shipping-time-content">
                <h3 className="shipping-time-region">{isIndonesian ? 'Pelabuhan Asia' : 'Asian Ports'}</h3>
                <p className="shipping-time-duration">{isIndonesian ? '2-3 minggu' : '2-3 weeks'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Container Information Section */}
      <section className="shipping-container-section">
        <div className="shipping-container-container">
          <h2 className="shipping-container-title">{isIndonesian ? 'Volume Pengiriman dengan Kontainer' : 'Shipping Volume by Containers'}</h2>
          
          <div className="shipping-container-content">
            {isIndonesian ? (
              <p className="shipping-container-description">
                Volume pengiriman kami menggunakan kontainer 20' (dua puluh kaki) – 40' (empat puluh kaki) – 40'HC (empat puluh kaki high cube).
              </p>
            ) : (
              <p className="shipping-container-description">
                Our shipping volumes are by 20' (twenty foot) – 40' (forty foot) – 40'HC (forty foot high cube) containers.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Information Section */}
      <section className="shipping-pricing-section">
        <div className="shipping-pricing-container">
          <h2 className="shipping-pricing-title">{isIndonesian ? 'Informasi Biaya Pengiriman' : 'Shipping Cost Information'}</h2>
          
          <div className="shipping-pricing-content">
            {isIndonesian ? (
              <>
                <p className="shipping-pricing-description">
                  Semua penawaran pengiriman kami mencakup biaya dokumen, penanganan lokal dan biaya truk, biaya pemuatan pelabuhan, dan semua biaya lokal lainnya yang dikenakan dalam pengepakan dan pengiriman kontainer Anda ke pelabuhan Anda.
                </p>
                <p className="shipping-pricing-description">
                  Biaya D.D.C (Document & Destination Charge) yang dikenakan oleh pelabuhan tujuan tidak termasuk. Beberapa pelabuhan internasional mengenakan biaya D.D.C saat kedatangan dan penanganan pengiriman Anda di pelabuhan lokal Anda. Silakan periksa dengan departemen bea cukai Anda untuk informasi lebih lanjut tentang biaya D.D.C.
                </p>
              </>
            ) : (
              <>
                <p className="shipping-pricing-description">
                  All of our shipping quotes include document fees, local handling and trucking fees, port loading fees and all other local charges levied in the packing and delivery of your container to your port.
                </p>
                <p className="shipping-pricing-description">
                  D.D.C fees (Document & Destination Charge) levied by the port of destination are not included. Some international ports charge a D.D.C fee upon the arrival and handling of your shipment in your local port. Check with your customs department for more information on D.D.C charges.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Responsibility Section */}
      <section className="shipping-responsibility-section">
        <div className="shipping-responsibility-container">
          <h2 className="shipping-responsibility-title">{isIndonesian ? 'Tanggung Jawab Pengiriman' : 'Shipping Responsibility'}</h2>
          
          <div className="shipping-responsibility-content">
            {isIndonesian ? (
              <>
                <p className="shipping-responsibility-description">
                  Kami bukan perusahaan kargo dan tidak bertanggung jawab atas kerusakan yang disebabkan oleh pengiriman dan penanganan pesanan Anda oleh perusahaan kargo yang menangani pengiriman kami. Meskipun kami memiliki perusahaan kargo sendiri, kami sangat merekomendasikan Anda menggunakan perusahaan kargo sendiri dengan agen di area lokal Anda.
                </p>
                <p className="shipping-responsibility-description">
                  Jika Anda tidak memiliki perusahaan kargo, kami dapat menyarankan beberapa perusahaan untuk dipilih. Namun, kami tidak menerima tanggung jawab atas keandalan atau kualitas layanan dari perusahaan kargo mana pun.
                </p>
                <p className="shipping-responsibility-description">
                  Kami memiliki kerja sama yang sangat baik dengan banyak forwarder dan jalur pengiriman yang dapat diandalkan. Jika tidak ada pengiriman yang ditentukan, kami bebas menunjuk pengiriman yang terbaik untuk kepentingan pelanggan.
                </p>
              </>
            ) : (
              <>
                <p className="shipping-responsibility-description">
                  We are not a cargo company and we are not responsible for any damage caused by shipping and handling of your order by the cargo companies that handle our shipments. Although we have our own cargo companies, we do highly recommend that you use your own cargo company with an agent in your local area.
                </p>
                <p className="shipping-responsibility-description">
                  If you don't have a cargo company, we can suggest a few companies to choose from. However, we accept no responsibility for the reliability or quality of service from any cargo company.
                </p>
                <p className="shipping-responsibility-description">
                  We are in very good cooperation with many reliable freight forwarders and shipping lines. In the event no shipping is specified, we are free to appoint shipping in the best interest of customers.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="shipping-contact-section">
        <div className="shipping-contact-container">
          <h2 className="shipping-contact-title">{isIndonesian ? 'Informasi Lebih Lanjut' : 'For More Information'}</h2>
          <p className="shipping-contact-description">
            {isIndonesian 
              ? "Untuk informasi lebih lanjut, silakan kirim email kepada kami."
              : "For more information, please send an email to us."}
          </p>
          
          <div className="shipping-contact-info">
            <div className="shipping-contact-item">
              <div className="shipping-contact-icon">
                <MapPin size={20} />
              </div>
              <div className="shipping-contact-details">
                <h3 className="shipping-contact-label">{isIndonesian ? 'Alamat' : 'Address'}</h3>
                <p className="shipping-contact-value">
                  <strong>Workshop Bekasi:</strong><br />
                  <a 
                    href="https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: '#8B7355', textDecoration: 'underline' }}
                  >
                    Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
                  </a>
                </p>
              </div>
            </div>

            <div className="shipping-contact-item">
              <div className="shipping-contact-icon">
                <Phone size={20} />
              </div>
              <div className="shipping-contact-details">
                <h3 className="shipping-contact-label">{isIndonesian ? 'Telepon' : 'Phone'}</h3>
                <p className="shipping-contact-value">
                  <a href="tel:+6285212078467" style={{ color: '#8B7355', textDecoration: 'underline' }}>
                    +62 852-1207-8467
                  </a>
                </p>
              </div>
            </div>

            <div className="shipping-contact-item">
              <div className="shipping-contact-icon">
                <Mail size={20} />
              </div>
              <div className="shipping-contact-details">
                <h3 className="shipping-contact-label">Email</h3>
                <p className="shipping-contact-value">
                  <a href="mailto:info@mangala-living.com" style={{ color: '#8B7355', textDecoration: 'underline' }}>
                    info@mangala-living.com
                  </a>
                </p>
              </div>
            </div>

            <div className="shipping-contact-item">
              <div className="shipping-contact-icon">
                <Globe size={20} />
              </div>
              <div className="shipping-contact-details">
                <h3 className="shipping-contact-label">Website</h3>
                <p className="shipping-contact-value">
                  <a href="https://www.mangalaliving.com" target="_blank" rel="noopener noreferrer" style={{ color: '#8B7355', textDecoration: 'underline' }}>
                    www.mangalaliving.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default ShippingInformation