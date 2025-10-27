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
              
              <div className="terms-subsection">
                <h3>{isIndonesian ? 'Pemesanan' : 'Ordering'}</h3>
                <p>
                  {isIndonesian 
                    ? 'Pemesanan bisa langsung datang ke workshop kami di Bekasi atau melalui online dengan komunikasi via chat WhatsApp atau telepon ke nomor yang kami sediakan.'
                    : 'Orders can be placed by visiting our workshop in Bekasi or online through WhatsApp chat or phone calls to our provided number.'
                  }
                </p>
              </div>

              <div className="terms-subsection">
                <h3>{isIndonesian ? 'Layanan' : 'Service'}</h3>
                <p>
                  {isIndonesian 
                    ? 'Jika produk yang diorder custom design, silahkan ajukan design kepada kami untuk kami pelajari. Akan lebih baik disertai gambar kerja.'
                    : 'If the ordered product is custom design, please submit the design to us for our review. It would be better accompanied by working drawings.'
                  }
                </p>
              </div>

              <div className="terms-subsection">
                <h3>{isIndonesian ? 'Produksi' : 'Production'}</h3>
                <p>
                  {isIndonesian 
                    ? 'Setelah negosiasi dan sudah deal kesepakatan harga akan kami buatkan PO Invoice detail order anda.'
                    : 'After negotiation and price agreement, we will create a PO Invoice with your order details.'
                  }
                </p>
              </div>

              <div className="terms-subsection">
                <h3>{isIndonesian ? 'Support' : 'Support'}</h3>
                <p>
                  {isIndonesian 
                    ? 'Proses pengerjaan barang pre order kurang lebih 2-4 minggu tergantung design dan jumlah barang, akan kami update melalui Chat WhatsApp atau Email.'
                    : 'Pre-order production process takes approximately 2-4 weeks depending on design and quantity, we will update via WhatsApp Chat or Email.'
                  }
                </p>
              </div>
            </section>

            {/* Payment Section */}
            <section className="terms-section">
              <h2>{isIndonesian ? 'Pembayaran' : 'Payment'}</h2>
              
              <div className="terms-subsection">
                <h3>{isIndonesian ? 'Deposit' : 'Deposit'}</h3>
                <p>
                  {isIndonesian 
                    ? 'Pengerjaan barang akan kami mulai setelah kami menerima deposit minimal 40% dari jumlah belanja atau atas kesepakatan bersama'
                    : 'Production will begin after we receive a minimum deposit of 40% of the total purchase amount or by mutual agreement'
                  }
                </p>
              </div>

              <div className="terms-subsection">
                <h3>{isIndonesian ? 'Pelunasan' : 'Balance Payment'}</h3>
                <p>
                  {isIndonesian 
                    ? 'Untuk provinsi pulau Jawa, DKI Jakarta, Pelunasan dengan jumlah tertentu dapat dibayar pada saat barang sudah sampai dengan menunjukkan bukti transfer kepada sopir yang mengantarkan barang. Untuk wilayah luar pulau Jawa, pelunasan dibayarkan pada saat barang sudah dipacking dan siap dikirimkan melalui jasa ekspedisi'
                    : 'For Java Island provinces, DKI Jakarta, balance payment of certain amounts can be paid when the goods arrive by showing transfer proof to the delivery driver. For areas outside Java Island, balance payment is made when goods are packed and ready for shipment via expedition service'
                  }
                </p>
              </div>
            </section>

            {/* Shipping Section */}
            <section className="terms-section">
              <h2>{isIndonesian ? 'Pengiriman Barang' : 'Product Shipping'}</h2>
              <ul>
                <li>
                  {isIndonesian 
                    ? 'Barang akan kami kirimkan melalui biro jasa truk ekspedisi yang telah bekerjasama dengan kami.'
                    : 'Goods will be shipped through truck expedition services that have partnered with us.'
                  }
                </li>
                <li>
                  {isIndonesian 
                    ? 'Pengiriman untuk daerah Jabodetabek kurang lebih 1 – 2 hari'
                    : 'Shipping for Jabodetabek area approximately 1-2 days'
                  }
                </li>
                <li>
                  {isIndonesian 
                    ? 'Pengiriman barang untuk luar pulau jawa kurang lebih 5-7 hari atau situasional'
                    : 'Shipping for areas outside Java Island approximately 5-7 days or situational'
                  }
                </li>
                <li>
                  {isIndonesian 
                    ? 'Pengiriman LCL atau FCL international akan kami pilihkan shipping agent yang sudah berpengalaman'
                    : 'LCL or FCL international shipping will be handled by experienced shipping agents we choose'
                  }
                </li>
                <li>
                  {isIndonesian 
                    ? 'Harga yang tercantum belum termasuk ongkos pengiriman kecuali hasil kesepakatan'
                    : 'Listed prices do not include shipping costs unless by agreement'
                  }
                </li>
                <li>
                  {isIndonesian 
                    ? 'Pembatalan tidak dapat dilakukan setelah proses produksi telah dilakukan'
                    : 'Cancellation cannot be done after production process has begun'
                  }
                </li>
              </ul>
            </section>

            {/* Warranty Section */}
            <section className="terms-section">
              <h2>{isIndonesian ? 'Garansi Produk' : 'Product Warranty'}</h2>
              <ul>
                <li>
                  {isIndonesian 
                    ? 'Garansi berlaku 30 hari sejak barang diterima'
                    : 'Warranty is valid for 30 days from receipt of goods'
                  }
                </li>
                <li>
                  {isIndonesian 
                    ? 'Garansi meliputi kerusakan konstruksi akibat kesalahan pertukangan, bukan karena faktor luar seperti rayap, perubahan warna akibat cuaca, kain jok luntur akibat dicuci dan lainnya atau pemuaian kayu yang bersifat alami.'
                    : 'Warranty covers construction damage due to workmanship errors, not external factors such as termites, color changes due to weather, fabric fading due to washing and others or natural wood expansion.'
                  }
                </li>
                <li>
                  {isIndonesian 
                    ? 'Garansi tidak termasuk biaya pengambilan barang dan pengiriman'
                    : 'Warranty does not include pickup and shipping costs'
                  }
                </li>
                <li>
                  {isIndonesian 
                    ? 'Hal-hal yang belum disebutkan dapat dinegoisasikan berdasarkan kesepakatan bersama'
                    : 'Matters not mentioned can be negotiated based on mutual agreement'
                  }
                </li>
              </ul>
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