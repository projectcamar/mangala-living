import React from 'react'
import './ServiceAreasSection.css'

interface ServiceAreasSectionProps {
  isIndonesian?: boolean
}

const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ isIndonesian = true }) => {
  const serviceAreas = {
    bekasiKota: {
      title: "BEKASI KOTA",
      areas: [
        { name: "Bekasi Barat", kelurahan: "Bintara, Kranji, Kota Baru, Jakasampurna" },
        { name: "Bekasi Timur", kelurahan: "Jatiasih, Pekayon, Margahayu, Aren Jaya" },
        { name: "Bekasi Selatan", kelurahan: "Kayuringin Jaya, Pekayon Jaya, Jakasetia" },
        { name: "Bekasi Utara", kelurahan: "Harapan Indah, Pejuang, Kaliabang, Medan Satria" },
        { name: "Rawalumbu", kelurahan: "Bojong Rawalumbu, Sepanjang Jaya, Pengasinan" },
        { name: "Pondok Gede", kelurahan: "Jatiwaringin, Jatibening, Jatiraden" },
        { name: "Mustika Jaya", kelurahan: "Mustikasari, Pedurenan, Cimuning" }
      ]
    },
    cikarang: {
      title: "CIKARANG & SEKITARNYA",
      areas: [
        { name: "Cikarang Barat", kelurahan: "Lippo Cikarang, Cibatu, Telaga Murni" },
        { name: "Cikarang Utara", kelurahan: "Karang Asih, Simpangan, Sukamaju" },
        { name: "Cikarang Selatan", kelurahan: "Jababeka, Greenland, Pasirsari" },
        { name: "Cikarang Timur", kelurahan: "Serang Baru, Karangreja, Jayamukti" },
        { name: "Cikarang Pusat", kelurahan: "Taman Galaxy, Lemahabang, Hegarmukti" },
        { name: "Tambun Selatan", kelurahan: "Sertajaya, Mangunjaya, Setiadarma" },
        { name: "Tambun Utara", kelurahan: "Satria Jaya, Karang Satria, Wanasari" },
        { name: "Cibitung", kelurahan: "Wanajaya, Mekarjaya, Lambang Jaya" },
        { name: "Setu", kelurahan: "Telajung (Workshop Location)" }
      ]
    },
    komersial: {
      title: "KAWASAN KOMERSIAL & INDUSTRIAL",
      areas: [
        { name: "Summarecon Bekasi", icon: "🏢", desc: "Mall & Boulevard Area" },
        { name: "Harapan Indah", icon: "🏘️", desc: "Residential & Commercial" },
        { name: "Grand Galaxy City", icon: "🏬", desc: "Superblock F&B District" },
        { name: "Galaxy Bekasi", icon: "🏪", desc: "Mall & Entertainment" },
        { name: "Kemang Pratama", icon: "🏡", desc: "Premium Residential" },
        { name: "Lippo Cikarang", icon: "🏢", desc: "Mall & Commercial Hub" },
        { name: "Jababeka", icon: "🏭", desc: "Industrial Estate" },
        { name: "Deltamas", icon: "🌆", desc: "Mixed-Use Development" },
        { name: "EJIP Cikarang", icon: "🏭", desc: "East Jakarta Industrial Park" },
        { name: "Greenland International", icon: "🏢", desc: "Commercial & Residential" },
        { name: "MM2100", icon: "🏭", desc: "Industrial Town" }
      ]
    },
    jakarta: {
      title: "JAKARTA & JABODETABEK",
      areas: [
        { name: "Jakarta Timur", kelurahan: "Cakung, Kramat Jati, Makasar, Cipayung" },
        { name: "Jakarta Pusat", kelurahan: "Sudirman, Thamrin, Kuningan (CBD)" },
        { name: "Jakarta Selatan", kelurahan: "Kemang, SCBD, Senopati, Kebayoran" },
        { name: "Depok", kelurahan: "Margonda, UI, Sawangan" },
        { name: "Bogor", kelurahan: "Bogor Kota, Cibinong, Sentul" },
        { name: "Karawang", kelurahan: "Karawang Barat, Karawang Timur" },
        { name: "Cileungsi", kelurahan: "Metland Transyogi" }
      ]
    }
  }

  return (
    <section className="service-areas-section">
      <div className="service-areas-container">
        <div className="service-areas-header">
          <h2 className="section-title">
            {isIndonesian ? "Wilayah Layanan Kami" : "Our Service Areas"}
          </h2>
          <p className="section-subtitle">
            {isIndonesian 
              ? "Melayani Bekasi, Jakarta, dan seluruh Jabodetabek dengan pengalaman 25+ tahun" 
              : "Serving Bekasi, Jakarta, and entire Jabodetabek with 25+ years of experience"}
          </p>
        </div>

        {/* Bekasi Kota */}
        <div className="service-area-group">
          <h3 className="area-group-title">
            <span className="area-icon">📍</span>
            {serviceAreas.bekasiKota.title}
          </h3>
          <div className="areas-grid">
            {serviceAreas.bekasiKota.areas.map((area, index) => (
              <div key={index} className="area-card">
                <h4 className="area-name">{area.name}</h4>
                <p className="area-kelurahan">{area.kelurahan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cikarang & Sekitarnya */}
        <div className="service-area-group">
          <h3 className="area-group-title">
            <span className="area-icon">🏭</span>
            {serviceAreas.cikarang.title}
          </h3>
          <div className="areas-grid">
            {serviceAreas.cikarang.areas.map((area, index) => (
              <div key={index} className="area-card">
                <h4 className="area-name">{area.name}</h4>
                <p className="area-kelurahan">{area.kelurahan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kawasan Komersial */}
        <div className="service-area-group commercial">
          <h3 className="area-group-title">
            <span className="area-icon">🏢</span>
            {serviceAreas.komersial.title}
          </h3>
          <div className="commercial-grid">
            {serviceAreas.komersial.areas.map((area, index) => (
              <div key={index} className="commercial-card">
                <span className="commercial-icon">{area.icon}</span>
                <h4 className="commercial-name">{area.name}</h4>
                <p className="commercial-desc">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Jakarta & Jabodetabek */}
        <div className="service-area-group">
          <h3 className="area-group-title">
            <span className="area-icon">🌆</span>
            {serviceAreas.jakarta.title}
          </h3>
          <div className="areas-grid">
            {serviceAreas.jakarta.areas.map((area, index) => (
              <div key={index} className="area-card jakarta">
                <h4 className="area-name">{area.name}</h4>
                <p className="area-kelurahan">{area.kelurahan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="service-areas-cta">
          <div className="cta-content">
            <h3>
              {isIndonesian 
                ? "Area Anda Tidak Tercantum?" 
                : "Your Area Not Listed?"}
            </h3>
            <p>
              {isIndonesian
                ? "Hubungi kami untuk diskusi cakupan layanan kami. Kami melayani seluruh Jabodetabek dan sekitarnya."
                : "Contact us to discuss our service coverage. We serve entire Jabodetabek and surrounding areas."}
            </p>
            <a 
              href="https://wa.me/6285212078467?text=Halo%20Mangala%20Living%2C%20saya%20tertarik%20dengan%20furniture%20industrial%20untuk%20area%20saya" 
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="whatsapp-icon">💬</span>
              {isIndonesian ? "Konsultasi Gratis" : "Free Consultation"}
            </a>
          </div>
        </div>

        {/* SEO Rich Text */}
        <div className="service-areas-seo-text">
          <p>
            <strong>Mangala Living</strong> adalah workshop furniture industrial terpercaya yang melayani seluruh wilayah 
            Bekasi (Bekasi Barat, Bekasi Timur, Bekasi Selatan, Bekasi Utara, Cikarang, Tambun), Jakarta 
            (Jakarta Timur, Jakarta Pusat, Jakarta Selatan), dan Jabodetabek (Depok, Bogor, Tangerang, Karawang). 
            Dengan lokasi workshop di Setu, Bekasi, kami memberikan layanan custom furniture besi industrial untuk 
            café, restoran, hotel, kantor dengan harga pabrik langsung. Pengalaman 25+ tahun, 1000+ klien puas. 
            Melayani kawasan komersial premium seperti Summarecon Bekasi, Harapan Indah, Grand Galaxy City, 
            Lippo Cikarang, Jababeka, dan area industrial estate di Cikarang.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreasSection
