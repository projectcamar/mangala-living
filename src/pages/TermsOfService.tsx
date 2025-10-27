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
              <h2>{isIndonesian ? 'Cara Pemesanan' : 'How to Order'}</h2>
              
              <div className="compact-content">
                <div className="content-item">
                  <h3>{isIndonesian ? '1. Pemesanan' : '1. Ordering'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Pemesanan bisa langsung datang ke workshop kami di Bekasi atau melalui online dengan komunikasi via chat WhatsApp atau telepon ke nomor yang kami sediakan.'
                      : 'Orders can be placed by visiting our workshop in Bekasi or online through WhatsApp chat or phone calls to our provided number.'
                    }
                  </p>
                </div>

                <div className="content-item">
                  <h3>{isIndonesian ? '2. Custom Design' : '2. Custom Design'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Jika produk yang diorder custom design, silahkan ajukan design kepada kami untuk kami pelajari. Akan lebih baik disertai gambar kerja.'
                      : 'If the ordered product is custom design, please submit the design to us for our review. It would be better accompanied by working drawings.'
                    }
                  </p>
                </div>

                <div className="content-item">
                  <h3>{isIndonesian ? '3. Produksi' : '3. Production'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Setelah negosiasi dan sudah deal kesepakatan harga akan kami buatkan PO Invoice detail order anda. Proses pengerjaan barang pre order kurang lebih 2-4 minggu tergantung design dan jumlah barang, akan kami update melalui Chat WhatsApp atau Email.'
                      : 'After negotiation and price agreement, we will create a PO Invoice with your order details. Pre-order production process takes approximately 2-4 weeks depending on design and quantity, we will update via WhatsApp Chat or Email.'
                    }
                  </p>
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section className="terms-section">
              <h2>{isIndonesian ? 'Pembayaran' : 'Payment'}</h2>
              
              <div className="compact-content">
                <div className="content-item">
                  <h3>{isIndonesian ? 'Deposit (40%)' : 'Deposit (40%)'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Pengerjaan barang akan kami mulai setelah kami menerima deposit minimal 40% dari jumlah belanja atau atas kesepakatan bersama.'
                      : 'Production will begin after we receive a minimum deposit of 40% of the total purchase amount or by mutual agreement.'
                    }
                  </p>
                </div>

                <div className="content-item">
                  <h3>{isIndonesian ? 'Pelunasan' : 'Balance Payment'}</h3>
                  <p>
                    {isIndonesian 
                      ? '• Jawa & DKI Jakarta: Pelunasan dapat dibayar saat barang sampai dengan menunjukkan bukti transfer kepada sopir<br/>• Luar Jawa: Pelunasan dibayar saat barang sudah dipacking dan siap dikirim'
                      : '• Java & DKI Jakarta: Balance payment can be paid when goods arrive by showing transfer proof to delivery driver<br/>• Outside Java: Balance payment made when goods are packed and ready for shipment'
                    }
                  </p>
                </div>
              </div>
            </section>

            {/* Shipping Section */}
            <section className="terms-section">
              <h2>{isIndonesian ? 'Pengiriman Barang' : 'Product Shipping'}</h2>
              
              <div className="compact-content">
                <div className="content-item">
                  <h3>{isIndonesian ? 'Waktu Pengiriman' : 'Delivery Time'}</h3>
                  <p>
                    {isIndonesian 
                      ? '• Jabodetabek: 1-2 hari<br/>• Luar Pulau Jawa: 5-7 hari<br/>• Internasional: LCL/FCL'
                      : '• Jabodetabek: 1-2 days<br/>• Outside Java Island: 5-7 days<br/>• International: LCL/FCL'
                    }
                  </p>
                </div>

                <div className="content-item">
                  <h3>{isIndonesian ? 'Catatan Penting' : 'Important Notes'}</h3>
                  <p>
                    {isIndonesian 
                      ? '• Harga belum termasuk ongkos pengiriman kecuali kesepakatan<br/>• Pembatalan tidak dapat dilakukan setelah produksi dimulai'
                      : '• Prices exclude shipping costs unless agreed upon<br/>• Cancellation not allowed after production begins'
                    }
                  </p>
                </div>
              </div>
            </section>

            {/* Warranty Section */}
            <section className="terms-section">
              <h2>{isIndonesian ? 'Garansi Produk (30 Hari)' : 'Product Warranty (30 Days)'}</h2>
              
              <div className="compact-content">
                <div className="content-item">
                  <h3>{isIndonesian ? 'Yang Dijamin' : 'What\\'s Covered'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Kerusakan konstruksi akibat kesalahan pertukangan'
                      : 'Construction damage due to workmanship errors'
                    }
                  </p>
                </div>

                <div className="content-item">
                  <h3>{isIndonesian ? 'Tidak Dijamin' : 'Not Covered'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Rayap, perubahan warna, kain luntur, pemuaian kayu alami'
                      : 'Termites, color changes, fabric fading, natural wood expansion'
                    }
                  </p>
                </div>

                <div className="content-item">
                  <h3>{isIndonesian ? 'Catatan' : 'Note'}</h3>
                  <p>
                    {isIndonesian 
                      ? 'Biaya pengambilan dan pengiriman tidak termasuk dalam garansi'
                      : 'Pickup and shipping costs not included in warranty'
                    }
                  </p>
                </div>
              </div>
            </section>

            {/* Workshop Info Section */}
            <section className="terms-section">
              <h2>{isIndonesian ? 'Kontak & Workshop' : 'Contact & Workshop'}</h2>
              
              <div className="compact-content">
                <div className="content-item">
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
                  <p><strong>Phone:</strong> +62 852-1207-8467</p>
                  <p><strong>{isIndonesian ? 'Jam Kerja:' : 'Work Hours:'}</strong> {isIndonesian ? '08.00 - 22.00 GMT +7' : '08.00 am - 22.00 GMT +7'}</p>
                  <p><strong>{isIndonesian ? 'Bahasa:' : 'Language:'}</strong> {isIndonesian ? 'Bahasa Indonesia / English' : 'Bahasa Indonesia / English'}</p>
                </div>
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