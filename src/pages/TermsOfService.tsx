import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import './TermsOfService.css'

const TermsOfService: React.FC = () => {
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
    <div className="terms-page">
      <Helmet>
        <title>{isIndonesian ? 'Syarat dan Ketentuan - Mangala Living' : 'Terms of Service - Mangala Living'}</title>
        <meta name="description" content={isIndonesian 
          ? 'Syarat dan ketentuan layanan Mangala Living untuk pemesanan furniture industrial scandinavian premium' 
          : 'Terms of service for Mangala Living premium industrial scandinavian furniture orders'
        } />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://mangala-living.com${isIndonesian ? '/id' : ''}/terms-of-service`} />
      </Helmet>

      <Header isIndonesian={isIndonesian} />
      
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-image">
          <img src={heroImage} alt="Terms of Service" loading="eager" />
          <div className="terms-hero-overlay"></div>
        </div>
        <div className="terms-hero-content">
          <h1 className="terms-hero-title">{isIndonesian ? 'Syarat dan Ketentuan' : 'Terms of Service'}</h1>
        </div>
      </section>

      <div className="terms-content-wrapper">
        <div className="terms-container">
          <div className="terms-intro-section">
            <p className="terms-intro">
              {isIndonesian 
                ? 'Syarat dan ketentuan layanan Mangala Living untuk pemesanan furniture industrial scandinavian premium'
                : 'Terms of service for Mangala Living premium industrial scandinavian furniture orders'
              }
            </p>
          </div>

          <div className="terms-content">
            {/* How to Order Section */}
            <section className="terms-section">
              <div className="section-header">
                <div className="section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                    <path d="M9 14l2 2 4-4"/>
                  </svg>
                </div>
                <h2>{isIndonesian ? 'Cara Pemesanan' : 'How to Order'}</h2>
              </div>
              
              <div className="key-points-grid">
                <div className="key-point-card">
                  <div className="key-point-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <h3>{isIndonesian ? 'Pemesanan' : 'Ordering'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Pemesanan bisa langsung datang ke workshop kami di Bekasi atau melalui online dengan komunikasi via chat WhatsApp atau telepon ke nomor yang kami sediakan.'
                      : 'Orders can be placed by visiting our workshop in Bekasi or online through WhatsApp chat or phone calls to our provided number.'
                    }
                  </p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3>{isIndonesian ? 'Layanan' : 'Service'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Jika produk yang diorder custom design, silahkan ajukan design kepada kami untuk kami pelajari. Akan lebih baik disertai gambar kerja.'
                      : 'If the ordered product is custom design, please submit the design to us for our review. It would be better accompanied by working drawings.'
                    }
                  </p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <h3>{isIndonesian ? 'Produksi' : 'Production'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Setelah negosiasi dan sudah deal kesepakatan harga akan kami buatkan PO Invoice detail order anda.'
                      : 'After negotiation and price agreement, we will create a PO Invoice with your order details.'
                    }
                  </p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                      <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                      <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                    </svg>
                  </div>
                  <h3>{isIndonesian ? 'Support' : 'Support'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Proses pengerjaan barang pre order kurang lebih 2-4 minggu tergantung design dan jumlah barang, akan kami update melalui Chat WhatsApp atau Email.'
                      : 'Pre-order production process takes approximately 2-4 weeks depending on design and quantity, we will update via WhatsApp Chat or Email.'
                    }
                  </p>
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section className="terms-section">
              <div className="section-header">
                <div className="section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <h2>{isIndonesian ? 'Pembayaran' : 'Payment'}</h2>
              </div>
              
              <div className="key-points-grid">
                <div className="key-point-card">
                  <div className="key-point-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                      <line x1="9" y1="9" x2="9.01" y2="9"/>
                      <line x1="15" y1="9" x2="15.01" y2="9"/>
                    </svg>
                  </div>
                  <h3>{isIndonesian ? 'Deposit' : 'Deposit'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Pengerjaan barang akan kami mulai setelah kami menerima deposit minimal 40% dari jumlah belanja atau atas kesepakatan bersama'
                      : 'Production will begin after we receive a minimum deposit of 40% of the total purchase amount or by mutual agreement'
                    }
                  </p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 1v6l3-3 3 3"/>
                      <path d="M12 7l-3 3 3 3"/>
                      <path d="M12 13v6l-3-3-3 3"/>
                      <path d="M12 17l3-3-3-3"/>
                    </svg>
                  </div>
                  <h3>{isIndonesian ? 'Pelunasan' : 'Balance Payment'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Untuk provinsi pulau Jawa dan DKI Jakarta, pelunasan dengan jumlah tertentu dapat dibayar pada saat barang sudah sampai dengan menunjukkan bukti transfer kepada sopir yang mengantarkan barang. Untuk wilayah luar pulau Jawa, pelunasan dibayarkan pada saat barang sudah dipacking dan siap dikirimkan melalui jasa ekspedisi.'
                      : 'For Java Island provinces and DKI Jakarta, balance payment of certain amounts can be paid when the goods arrive by showing transfer proof to the delivery driver. For areas outside Java Island, balance payment is made when goods are packed and ready for shipment via expedition service.'
                    }
                  </p>
                </div>
              </div>
            </section>

            {/* Shipping Section */}
            <section className="terms-section">
              <div className="section-header">
                <div className="section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"/>
                    <path d="M16 8h4l3 3v5a2 2 0 0 1-2 2H16"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <h2>{isIndonesian ? 'Pengiriman Barang' : 'Product Shipping'}</h2>
              </div>
              
              <div className="shipping-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <div className="timeline-content">
                    <h4>{isIndonesian ? 'Jabodetabek' : 'Jabodetabek'}</h4>
                    <p>{isIndonesian ? '1-2 hari' : '1-2 days'}</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="timeline-content">
                    <h4>{isIndonesian ? 'Luar Pulau Jawa' : 'Outside Java Island'}</h4>
                    <p>{isIndonesian ? '5-7 hari' : '5-7 days'}</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="timeline-content">
                    <h4>{isIndonesian ? 'Internasional' : 'International'}</h4>
                    <p>{isIndonesian ? 'LCL/FCL' : 'LCL/FCL'}</p>
                  </div>
                </div>
              </div>

              <div className="shipping-notes">
                <div className="note-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p>{isIndonesian ? 'Harga belum termasuk ongkos pengiriman kecuali kesepakatan' : 'Prices exclude shipping costs unless agreed upon'}</p>
                </div>
                <div className="note-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p>{isIndonesian ? 'Pembatalan tidak dapat dilakukan setelah produksi dimulai' : 'Cancellation not allowed after production begins'}</p>
                </div>
              </div>
            </section>

            {/* Warranty Section */}
            <section className="terms-section">
              <div className="section-header">
                <div className="section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                  </svg>
                </div>
                <h2>{isIndonesian ? 'Garansi Produk' : 'Product Warranty'}</h2>
              </div>
              
              <div className="warranty-highlight">
                <div className="warranty-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>{isIndonesian ? '30 Hari Garansi' : '30 Days Warranty'}</span>
                </div>
              </div>

              <div className="warranty-details">
                <div className="warranty-item">
                  <div className="warranty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <div className="warranty-content">
                    <h4>{isIndonesian ? 'Yang Dijamin' : 'What\'s Covered'}</h4>
                    <p>{isIndonesian ? 'Kerusakan konstruksi akibat kesalahan pertukangan' : 'Construction damage due to workmanship errors'}</p>
                  </div>
                </div>

                <div className="warranty-item">
                  <div className="warranty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </div>
                  <div className="warranty-content">
                    <h4>{isIndonesian ? 'Tidak Dijamin' : 'Not Covered'}</h4>
                    <p>{isIndonesian ? 'Rayap, perubahan warna, kain luntur, pemuaian kayu alami' : 'Termites, color changes, fabric fading, natural wood expansion'}</p>
                  </div>
                </div>

                <div className="warranty-item">
                  <div className="warranty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </div>
                  <div className="warranty-content">
                    <h4>{isIndonesian ? 'Catatan' : 'Note'}</h4>
                    <p>{isIndonesian ? 'Biaya pengambilan dan pengiriman tidak termasuk' : 'Pickup and shipping costs not included'}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Workshop Info Section */}
            <section className="terms-section">
              <h2>{isIndonesian ? 'Workshop dan Kantor' : 'Workshop and Office'}</h2>
              <div className="workshop-info">
                <h3>Mangala Living</h3>
                <p>
                  <a
                    href="https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="workshop-address"
                  >
                    Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
                  </a>
                </p>
                <p className="workshop-phone">+62 852-1207-8467</p>
                <p className="workshop-hours">
                  {isIndonesian 
                    ? 'Jam Kerja: 08.00 - 22.00 GMT +7'
                    : 'Work Hours: 08.00 am - 22.00 GMT +7'
                  }
                </p>
                <p className="workshop-languages">
                  {isIndonesian 
                    ? 'Tersedia dalam Bahasa Indonesia atau English'
                    : 'Available in Bahasa Indonesia or English'
                  }
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsOfService