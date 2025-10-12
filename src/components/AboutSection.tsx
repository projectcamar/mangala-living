import React from 'react'
import { Link } from 'react-router-dom'
import './AboutSection.css'

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="tentang">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Bengkel Las Terbaik di Bekasi</div>
          <h2>Bengkel Las Profesional & Terpercaya di Bekasi</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Bengkel Las Mandiri di Bekasi, yang dipimpin oleh Bapak Maman Toha, adalah bengkel las profesional 
              yang telah berdiri sejak tahun 1999. Dengan pengalaman lebih dari 20 tahun dalam jasa las listrik 
              dan konstruksi baja, kami telah menjadi bengkel las terpercaya di Bekasi dan sekitarnya.
            </p>
            
            <p>
              Sebagai spesialis las di Bekasi, kami menyediakan berbagai <Link to="/layanan-las-bekasi">layanan las berkualitas tinggi</Link> termasuk:
              <Link to="/layanan-las-bekasi/jasa-pembuatan-kanopi-bekasi"> pembuatan kanopi minimalis</Link>, 
              <Link to="/layanan-las-bekasi/jasa-pembuatan-pagar-besi-bekasi"> pagar besi tempa</Link>, 
              <Link to="/layanan-las-bekasi/jasa-pembuatan-teralis-bekasi"> teralis jendela anti maling</Link>, 
              <Link to="/layanan-las-bekasi/jasa-konstruksi-baja-bekasi"> konstruksi baja ringan</Link>,
              <Link to="/layanan-las-bekasi/jasa-pembuatan-railing-tangga-bekasi"> railing tangga stainless steel</Link>, 
              dan berbagai kebutuhan las lainnya. Kami menggunakan material 
              berkualitas tinggi dan teknologi las modern untuk hasil yang tahan lama dan anti karat.
            </p>
            
            <p>
              Kami bangga menjadi mitra terpercaya untuk jasa las di Bekasi dengan ribuan <Link to="/album-bengkel-las-mandiri">proyek yang telah 
              diselesaikan</Link>. Tim tukang las kami adalah tenaga ahli bersertifikat dengan pengalaman bertahun-tahun, 
              menjamin hasil pengerjaan yang rapi, kuat, dan sesuai standar keamanan. Kami melayani area Bekasi Timur, 
              Bekasi Barat, Bekasi Utara, Bekasi Selatan, dan sekitarnya dengan harga las termurah tanpa mengorbankan kualitas.
            </p>
            
            <div style={{ marginTop: '20px' }}>
              <Link to="/tentang-kami" className="btn-secondary" style={{ display: 'inline-block', padding: '10px 25px', backgroundColor: 'transparent', border: '2px solid #ff6b35', color: '#ff6b35', textDecoration: 'none', borderRadius: '5px', marginRight: '10px' }}>
                Selengkapnya Tentang Kami
              </Link>
              <Link to="/kontak-bengkel-las-bekasi" className="btn-primary" style={{ display: 'inline-block', padding: '10px 25px', backgroundColor: '#ff6b35', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                Konsultasi Gratis
              </Link>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3>25+</h3>
              <p>Tahun Pengalaman</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Proyek Selesai</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Kepuasan Pelanggan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
