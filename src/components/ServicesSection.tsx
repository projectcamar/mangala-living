import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Umbrella, 
  Building2, 
  Fence, 
  TrendingUp, 
  Bike, 
  DoorOpen, 
  TreePine, 
  Building, 
  Grid3X3,
  Phone
} from 'lucide-react'
import ConsultationModal from './ConsultationModal'
import './ServicesSection.css'

const ServicesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      title: "Kanopi",
      slug: "jasa-pembuatan-kanopi-bekasi",
      description: "Kanopi adalah struktur atau penutup yang digunakan di atas pintu masuk, jendela, atau area luar lainnya untuk memberikan perlindungan dari sinar matahari dan hujan.",
      icon: Umbrella
    },
    {
      title: "Konstruksi Baja",
      slug: "jasa-konstruksi-baja-bekasi",
      description: "Baja adalah logam yang sering digunakan dalam konstruksi karena memiliki sifat-sifat mekanis yang sangat baik, termasuk kekuatan yang tinggi, daya lentur, dan kemampuan untuk menahan beban yang signifikan.",
      icon: Building2
    },
    {
      title: "Pagar Besi",
      slug: "jasa-pembuatan-pagar-besi-bekasi",
      description: "Pagar adalah struktur fisik yang dibuat untuk membatasi atau memisahkan suatu area dari area lainnya. Pagar memiliki berbagai tujuan, termasuk keamanan, privasi, estetika, dan pembatasan akses.",
      icon: Fence
    },
    {
      title: "Railing Tangga",
      slug: "jasa-pembuatan-railing-tangga-bekasi",
      description: "Railing tangga, juga dikenal sebagai pegangan tangga atau pagar tangga, adalah struktur atau elemen yang dipasang di sepanjang tepi tangga untuk memberikan dukungan, keamanan, dan estetika.",
      icon: TrendingUp
    },
    {
      title: "Bike Rack",
      slug: "jasa-pembuatan-bike-rack-bekasi",
      description: "Bike rack, atau rak sepeda, adalah struktur atau perangkat yang dirancang khusus untuk menyimpan atau mengamankan sepeda. Tujuannya adalah untuk memberikan tempat yang aman dan teratur untuk menyimpan sepeda.",
      icon: Bike
    },
    {
      title: "Pintu Dorong",
      slug: "jasa-pembuatan-pintu-dorong-bekasi",
      description: "Pintu dorong, juga dikenal sebagai pintu geser atau pintu luncur, adalah jenis pintu yang dibuka dan ditutup dengan cara digeser ke samping, tanpa perlu memutar pegangan atau tuas.",
      icon: DoorOpen
    },
    {
      title: "Pintu Kayu Ulin",
      slug: "jasa-pembuatan-pintu-kayu-ulin-bekasi",
      description: "Pintu besi dengan penutup kayu ulin adalah jenis pintu yang memiliki bingkai atau struktur utama terbuat dari besi, dengan permukaan eksterior yang ditutupi oleh kayu ulin.",
      icon: TreePine
    },
    {
      title: "Railing Balkon",
      slug: "jasa-pembuatan-railing-balkon-bekasi",
      description: "Railing balkon (juga disebut pagar balkon atau pagar teras) adalah struktur pengaman yang dipasang di sekeliling balkon atau teras lantai atas bangunan.",
      icon: Building
    },
    {
      title: "Teralis",
      slug: "jasa-pembuatan-teralis-bekasi",
      description: "Tralis dengan plat cutting merujuk pada penggunaan teknologi pemotongan laser untuk membuat desain atau motif pada plat.",
      icon: Grid3X3
    }
  ]

  return (
    <section className="services-section" id="layanan">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Jasa Las Bekasi Terlengkap</div>
          <h2>Layanan Bengkel Las Bekasi</h2>
          <p>Spesialis las listrik untuk kanopi minimalis, pagar besi, teralis jendela, dan konstruksi baja berkualitas tinggi di Bekasi</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <IconComponent size={32} />
                </div>
                <div className="service-content">
                  <h3>{service.title} Bekasi</h3>
                  <p>{service.description}</p>
                  <Link to={`/layanan-las-bekasi/${service.slug}`} className="service-btn">
                    Lihat Detail {service.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="services-actions">
          <button 
            className="btn-consultation-now"
            onClick={() => setIsModalOpen(true)}
          >
            <Phone size={20} />
            Hubungi Sekarang
          </button>
          
          <Link to="/layanan-las-bekasi" className="view-all-link">
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

export default ServicesSection
