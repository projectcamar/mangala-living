import React from 'react'
import { Clock, CheckCircle, DollarSign, MessageCircle, Shield, Zap } from 'lucide-react'
import './AdvantagesSection.css'

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: Clock,
      title: 'Berpengalaman',
      description: 'Bengkel Las Mandiri sudah memiliki pengalaman dalam bidang bengkel las lebih dari sepuluh tahun sehingga anda tak perlu lagi meragukan kualitasnya'
    },
    {
      icon: CheckCircle,
      title: 'Pemesanan Mudah',
      description: 'Bersama kami proses pemesanan akan berjalan mudah dan cepat. Tidak akan bertele-tele dan semua akan dibuat sesuai kebutuhan'
    },
    {
      icon: Zap,
      title: 'Tepat Waktu',
      description: 'Sepanjang perjalanan menjalani bidang bengkel las kami selalu mengerjakan proyek tepat waktu demi kepuasan pelanggan'
    },
    {
      icon: DollarSign,
      title: 'Harga Murah',
      description: 'Penawaran jasa Bengkel Las Mandiri yang kami tawarkan adalah jasa termurah. Anda bisa melakukan negosiasi sampai jadi'
    },
    {
      icon: MessageCircle,
      title: 'Respon Cepat',
      description: 'Customer Service kami akan merespon dengan cepat dan Anda bisa berkonsultasi langsung memberikan informasi semua kebutuhan yang diperlukan'
    },
    {
      icon: Shield,
      title: 'Bergaransi',
      description: 'Bengkel Las Mandiri memberikan garansi pekerjaan pada produk pesanan Anda. Jika ada hal yang tidak sesuai dengan apa yang diinginkan segera beri tahu kami'
    }
  ]


  return (
    <section className="advantages-section" id="keunggulan">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">KEUNGGULAN</div>
          <h2>Keunggulan yang menjadi daya jual kami</h2>
        </div>
        
        <div className="advantages-grid">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="advantage-card">
                <div className="advantage-icon">
                  <IconComponent size={32} />
                </div>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection
