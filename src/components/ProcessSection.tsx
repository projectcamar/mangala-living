import React from 'react'
import { Link } from 'react-router-dom'
import './ProcessSection.css'

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Pastikan kebutuhan anda',
      description: 'Tentukan jenis layanan yang Anda butuhkan, seperti kanopi, pagar besi, teralis, atau konstruksi baja lainnya.'
    },
    {
      number: '02',
      title: 'Konsultasikan kepada kami',
      description: 'Hubungi kami melalui WhatsApp atau kunjungi workshop kami untuk konsultasi gratis dan survey lokasi.'
    },
    {
      number: '03',
      title: 'Negosiasi dan Transfer DP',
      description: 'Dapatkan penawaran harga terbaik, lakukan negosiasi, dan transfer DP untuk memulai pengerjaan.'
    },
    {
      number: '04',
      title: 'Pengerjaan dan Pelunasan',
      description: 'Tim ahli kami akan mengerjakan proyek Anda dengan profesional, tepat waktu, dan berkualitas tinggi.'
    }
  ]

  return (
    <section className="process-section" id="proses">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">PROSES PEMESANAN</div>
          <h2>Langkah - langkah memesan jasa bengkel las</h2>
        </div>
        
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="process-cta" style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            Lihat berbagai pilihan <Link to="/layanan-las-bekasi">jasa las kami</Link> atau 
            langsung <Link to="/kontak-bengkel-las-bekasi">hubungi kami</Link> untuk konsultasi gratis.
          </p>
          <p style={{ fontSize: '16px', color: '#666' }}>
            Kami melayani area <strong>Bekasi Timur</strong>, <strong>Bekasi Barat</strong>, 
            <strong> Bekasi Utara</strong>, <strong>Bekasi Selatan</strong>, <strong>Cikarang</strong>, 
            dan sekitarnya dengan harga terjangkau dan kualitas terbaik.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
