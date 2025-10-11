import React from 'react'
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
              Sebagai spesialis las di Bekasi, kami menyediakan berbagai layanan las berkualitas tinggi termasuk:
              pembuatan kanopi minimalis, pagar besi tempa, teralis jendela anti maling, konstruksi baja ringan,
              railing tangga stainless steel, dan berbagai kebutuhan las lainnya. Kami menggunakan material 
              berkualitas tinggi dan teknologi las modern untuk hasil yang tahan lama dan anti karat.
            </p>
            
            <p>
              Kami bangga menjadi mitra terpercaya untuk jasa las di Bekasi dengan ribuan proyek yang telah 
              diselesaikan. Tim tukang las kami adalah tenaga ahli bersertifikat dengan pengalaman bertahun-tahun, 
              menjamin hasil pengerjaan yang rapi, kuat, dan sesuai standar keamanan. Kami melayani area Bekasi Timur, 
              Bekasi Barat, Bekasi Utara, Bekasi Selatan, dan sekitarnya dengan harga las termurah tanpa mengorbankan kualitas.
            </p>
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
