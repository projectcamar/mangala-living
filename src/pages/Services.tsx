import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  Umbrella, 
  Building2, 
  Fence, 
  TrendingUp, 
  DoorOpen, 
  Building, 
  Grid3X3,
  ArrowRight,
  Bike,
  TreePine,
  Bed
} from 'lucide-react'
import './Services.css'

const Services: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const services = [
    {
      slug: 'kanopi',
      title: 'Kanopi',
      description: 'Kanopi adalah struktur atau penutup yang digunakan di atas pintu masuk, jendela, atau area luar lainnya untuk memberikan perlindungan dari sinar matahari dan hujan.',
      icon: Umbrella
    },
    {
      slug: 'konstruksi-baja',
      title: 'Konstruksi Baja',
      description: 'Baja adalah logam yang sering digunakan dalam konstruksi karena memiliki sifat-sifat mekanis yang sangat baik, termasuk kekuatan yang tinggi, daya lentur, dan kemampuan untuk menahan beban yang signifikan.',
      icon: Building2
    },
    {
      slug: 'pagar-besi',
      title: 'Pagar Besi',
      description: 'Pagar adalah struktur fisik yang dibuat untuk membatasi atau memisahkan suatu area dari area lainnya. Pagar memiliki berbagai tujuan, termasuk keamanan, privasi, estetika, dan pembatasan akses.',
      icon: Fence
    },
    {
      slug: 'railing-tangga',
      title: 'Railing Tangga',
      description: 'Railing tangga, juga dikenal sebagai pegangan tangga atau pagar tangga, adalah struktur atau elemen yang dipasang di sepanjang tepi tangga untuk memberikan dukungan, keamanan, dan estetika.',
      icon: TrendingUp
    },
    {
      slug: 'bike-rack',
      title: 'Bike Rack',
      description: 'Bike rack, atau rak sepeda, adalah struktur atau perangkat yang dirancang khusus untuk menyimpan atau mengamankan sepeda. Tujuannya adalah untuk memberikan tempat yang aman dan teratur untuk menyimpan sepeda.',
      icon: Bike
    },
    {
      slug: 'pintu-dorong',
      title: 'Pintu Dorong',
      description: 'Pintu dorong, juga dikenal sebagai pintu geser atau pintu luncur, adalah jenis pintu yang dibuka dan ditutup dengan cara digeser ke samping, tanpa perlu memutar pegangan atau tuas.',
      icon: DoorOpen
    },
    {
      slug: 'pintu-kayu-ulin',
      title: 'Pintu Kayu Ulin',
      description: 'Pintu besi dengan penutup kayu ulin adalah jenis pintu yang memiliki bingkai atau struktur utama terbuat dari besi, dengan permukaan eksterior yang ditutupi oleh kayu ulin.',
      icon: TreePine
    },
    {
      slug: 'railing-balkon',
      title: 'Railing Balkon',
      description: 'Railing balkon (juga disebut pagar balkon atau pagar teras) adalah struktur pengaman yang dipasang di sekeliling balkon atau teras lantai atas bangunan.',
      icon: Building
    },
    {
      slug: 'teralis',
      title: 'Teralis',
      description: 'Tralis dengan plat cutting merujuk pada penggunaan teknologi pemotongan laser untuk membuat desain atau motif pada plat.',
      icon: Grid3X3
    },
    {
      slug: 'pintu-besi',
      title: 'Pintu Besi',
      description: 'Jasa pembuatan pintu yang mampu menerima berbagai pesanan bentuk, ukuran dan model',
      icon: DoorOpen
    },
    {
      slug: 'pintu-kasa-nyamuk',
      title: 'Pintu Kasa Nyamuk',
      description: 'Menerima pembuatan pintu kasa nyamuk dengan kualitas besi terbaik',
      icon: Grid3X3
    },
    {
      slug: 'teralis-jendela',
      title: 'Teralis Jendela',
      description: 'Bengkel las terbaik siap Mengerjakan teralis jendela untuk pengamanan rumah',
      icon: Grid3X3
    },
    {
      slug: 'teralis-pintu',
      title: 'Teralis Pintu',
      description: 'Tukang las yang siap membuat teralis pintu sebagai anti maling dan menghalau hewan',
      icon: Grid3X3
    },
    {
      slug: 'pintu-henderson',
      title: 'Pintu Henderson',
      description: 'Kami mengerjakan pembuatan pintu henderson sesuai permintaan',
      icon: DoorOpen
    },
    {
      slug: 'pintu-lipat',
      title: 'Pintu Lipat',
      description: 'Bengkel Las Mandiri menerima pembuatan pintu lipat berbagai model',
      icon: DoorOpen
    },
    {
      slug: 'tangga-putar',
      title: 'Tangga Putar',
      description: 'Berpengalaman membuat tangga putar dengan berbagai model',
      icon: TrendingUp
    },
    {
      slug: 'menara-tangki-air',
      title: 'Menara Tangki Air',
      description: 'Bengkel Las Mandiri mengerjakan pembuatan menara tangki air untuk toren',
      icon: Building2
    },
    {
      slug: 'pintu-garasi-sliding',
      title: 'Pintu Garasi Sliding',
      description: 'Pintu garasi sliding adalah jenis pintu yang dibuka dengan cara digeser ke samping, sangat cocok untuk garasi dengan ruang terbatas',
      icon: DoorOpen
    },
    {
      slug: 'tempat-tidur-besi',
      title: 'Tempat Tidur Besi',
      description: 'Tempat tidur besi yang kokoh dan tahan lama dengan desain modern dan minimalis',
      icon: Bed
    }
  ]

  return (
    <div className="services-page">
      <Helmet>
        <title>Jasa Las Bekasi - Layanan Bengkel Las Profesional & Terpercaya</title>
        <meta name="description" content="Bengkel Las Mandiri menyediakan berbagai jasa las profesional di Bekasi: kanopi minimalis, pagar besi, teralis jendela, konstruksi baja, railing tangga & lebih. ✓ Harga Terjangkau ✓ Garansi ✓ Gratis Konsultasi" />
        <meta name="keywords" content="jasa las bekasi, bengkel las bekasi, tukang las bekasi, las listrik bekasi, kanopi bekasi, pagar besi bekasi, teralis bekasi" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jasa Las Bekasi - Layanan Bengkel Las Profesional & Terpercaya" />
        <meta property="og:description" content="Bengkel Las Mandiri menyediakan berbagai jasa las profesional di Bekasi dengan pengalaman 20+ tahun. Spesialis kanopi, pagar besi, teralis & konstruksi baja. Hubungi kami untuk konsultasi gratis!" />
        <meta property="og:url" content="https://lasbekasi.com/layanan-las-bekasi" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jasa Las Bekasi - Layanan Bengkel Las Profesional & Terpercaya" />
        <meta name="twitter:description" content="Bengkel Las Mandiri menyediakan berbagai jasa las profesional di Bekasi dengan pengalaman 20+ tahun. Spesialis kanopi, pagar besi, teralis & konstruksi baja. Hubungi kami untuk konsultasi gratis!" />
        
        <link rel="canonical" href="https://lasbekasi.com/layanan-las-bekasi" />
      </Helmet>
      <Header />
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <div className="section-subtitle">Jasa Las Bekasi</div>
            <h1>Layanan Bengkel Las Bekasi</h1>
            <h2>Jasa Las Profesional & Terpercaya di Bekasi</h2>
            <p>Melayani berbagai kebutuhan las dengan pengalaman 20+ tahun dan harga terjangkau</p>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="service-card">
                  <div className="service-icon-top">
                    <IconComponent size={40} />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to={`/layanan-las-bekasi/jasa-pembuatan-${service.slug}-bekasi`} className="service-btn">
                      Lihat Detail <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Services
