import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import { Wrench, Phone, MessageSquare } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getCurrentLanguage } from '../utils/languageManager'
import {
  STEEL_SERVICES,
  SERVICE_CLUSTERS,
  getServicesByCluster,
  FEATURED_SERVICES,
  type LanguageCode,
} from '../data/steelServices'
import './CustomSteelWorks.css'

// ─── i18n ────────────────────────────────────────────────────────────────────
const t = {
  en: {
    badge: 'Workshop Bekasi · Since 1999',
    h1: 'Custom Steel Works',
    h1accent: 'Fabrication & Installation Services',
    sub: 'Beyond premium industrial furniture, Mangala Living provides professional custom steel fabrication services from our Bekasi workshop — canopies, railings, gates, staircases, pergolas, partitions, and full industrial metalwork for residential and commercial projects.',
    whatsapp: 'WhatsApp Consultation',
    viewFurniture: 'View Furniture Collection',
    stats: [
      { v: '25+', l: 'Years Experience' },
      { v: '1000+', l: 'Projects Completed' },
      { v: '30+', l: 'Steel Services' },
      { v: 'Free', l: 'Consultation' },
    ],
    clustersTitle: 'All Steel Fabrication Services',
    clustersSub: 'From residential canopies to industrial warehouse racks — browse our complete range of custom steel fabrication services.',
    processTitle: 'How We Work',
    processSub: 'Every project follows the same disciplined process — from measurement to handover.',
    steps: [
      { n: '1', t: 'Consultation', d: 'Free site visit or WhatsApp consult. Share requirements, dimensions, and design references.' },
      { n: '2', t: 'Design & Quote', d: 'We prepare a custom design drawing and detailed price quote for your approval.' },
      { n: '3', t: 'Fabrication', d: 'Your order is fabricated at our Bekasi workshop with quality-controlled processes.' },
      { n: '4', t: 'Installation', d: 'Our team handles delivery and professional on-site installation.' },
      { n: '5', t: 'Handover', d: 'Final inspection together with you. 1-year warranty on all fabrication work.' },
    ],
    aboutTitle: 'Custom Steel Fabrication from Bekasi for All of Indonesia',
    aboutP1: 'Mangala Living started as a steel furniture manufacturer in 1999 and has grown into a full-service steel fabrication workshop serving residential, commercial, and industrial clients across Indonesia. Our Bekasi workshop handles everything from canopy installation and custom fence fabrication to industrial racks and architectural metalwork.',
    aboutP2: 'Whether you need a minimalist steel canopy for your home, a wrought iron gate for your property, folding gates for your shopfront, or heavy-duty warehouse racks for your factory — our team has the expertise and equipment to deliver to the highest standards. All work is custom-fabricated to your exact specifications, powder-coated for durability, and installed by our own team.',
    ctaTitle: 'Ready to Start Your Project?',
    ctaSub: 'Contact us today for a free consultation and custom price quote. We serve Jakarta, Bekasi, Bogor, Tangerang, Depok, and across Indonesia.',
    ctaWa: 'WhatsApp Now',
    ctaShop: 'Browse Our Furniture',
    learnMore: 'Learn more →',
    metaTitle: 'Custom Steel Works Bekasi | Kanopi, Railing, Pagar, Fabrikasi Baja | Mangala Living',
    metaDesc: 'Professional custom steel fabrication services from Bekasi workshop. Canopy, railings, gates, folding gates, staircases, pergolas, partitions, and industrial metalwork. Free consultation.',
  },
  id: {
    badge: 'Workshop Bekasi · Sejak 1999',
    h1: 'Custom Steel Works',
    h1accent: 'Jasa Fabrikasi & Pemasangan Besi',
    sub: 'Selain furniture industrial premium, Mangala Living juga menyediakan jasa fabrikasi besi custom profesional dari workshop Bekasi kami — kanopi, railing, pagar, tangga, pergola, partisi, dan pekerjaan logam industrial lengkap untuk proyek hunian dan komersial.',
    whatsapp: 'Konsultasi via WhatsApp',
    viewFurniture: 'Lihat Koleksi Furniture',
    stats: [
      { v: '25+', l: 'Tahun Pengalaman' },
      { v: '1000+', l: 'Proyek Selesai' },
      { v: '30+', l: 'Layanan Baja' },
      { v: 'Gratis', l: 'Konsultasi' },
    ],
    clustersTitle: 'Semua Layanan Fabrikasi Besi',
    clustersSub: 'Dari kanopi hunian hingga rak gudang industrial — jelajahi rangkap lengkap jasa fabrikasi besi custom kami.',
    processTitle: 'Cara Kerja Kami',
    processSub: 'Setiap proyek mengikuti proses yang sama — dari pengukuran hingga serah terima.',
    steps: [
      { n: '1', t: 'Konsultasi', d: 'Kunjungan lokasi gratis atau konsultasi via WhatsApp. Bagikan kebutuhan, dimensi, dan referensi desain.' },
      { n: '2', t: 'Desain & Penawaran', d: 'Kami menyiapkan gambar desain custom dan penawaran harga terinci untuk persetujuan Anda.' },
      { n: '3', t: 'Fabrikasi', d: 'Pesanan Anda difabrikasi di workshop Bekasi kami dengan proses kontrol kualitas.' },
      { n: '4', t: 'Pemasangan', d: 'Tim kami menangani pengiriman dan pemasangan profesional di lokasi.' },
      { n: '5', t: 'Serah Terima', d: 'Inspeksi akhir bersama Anda. Garansi 1 tahun untuk semua pekerjaan fabrikasi.' },
    ],
    aboutTitle: 'Fabrikasi Besi Custom dari Bekasi untuk Seluruh Indonesia',
    aboutP1: 'Mangala Living dimulai sebagai manufacturer furniture besi pada tahun 1999 dan berkembang menjadi workshop fabrikasi besi full-service yang melayani klien hunian, komersial, dan industrial di seluruh Indonesia. Workshop Bekasi kami menangani segalanya mulai dari pemasangan kanopi dan fabrikasi pagar custom hingga rak industrial dan pekerjaan logam arsitektural.',
    aboutP2: 'Apakah Anda membutuhkan kanopi besi minimalis untuk rumah, pagar besi tempa untuk properti, folding gate untuk toko, atau rak gudang heavy-duty untuk pabrik — tim kami memiliki keahlian dan peralatan untuk memberikan hasil dengan standar tertinggi. Semua pekerjaan difabrikasi custom sesuai spesifikasi Anda, difinishing powder coat untuk daya tahan, dan dipasang oleh tim kami sendiri.',
    ctaTitle: 'Siap Memulai Proyek Anda?',
    ctaSub: 'Hubungi kami sekarang untuk konsultasi gratis dan penawaran harga custom. Kami melayani Jakarta, Bekasi, Bogor, Tangerang, Depok, dan seluruh Indonesia.',
    ctaWa: 'WhatsApp Sekarang',
    ctaShop: 'Lihat Furniture Kami',
    learnMore: 'Pelajari lebih →',
    metaTitle: 'Custom Steel Works Bekasi | Kanopi, Railing, Pagar, Fabrikasi Baja | Mangala Living',
    metaDesc: 'Jasa fabrikasi besi custom profesional dari workshop Bekasi. Kanopi, railing, pagar, folding gate, tangga, pergola, partisi, dan metalwork industrial. Konsultasi gratis.',
  },
}

const CustomSteelWorks: React.FC = () => {
  const location = useLocation()
  const lang = getCurrentLanguage(location.pathname, location.search)
  const isIndonesian = lang === 'id'
  const tx = isIndonesian ? t.id : t.en

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const waMessage = isIndonesian
    ? encodeURIComponent('Halo Mangala Living, saya ingin konsultasi mengenai jasa Custom Steel Works (kanopi/railing/pagar/dll). Bisa bantu?')
    : encodeURIComponent('Hello Mangala Living, I would like to consult about your Custom Steel Works services. Can you help?')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Steel Works — Mangala Living',
    description: tx.metaDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Mangala Living',
      url: 'https://mangala-living.com',
      telephone: '+6288801146881',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Raya Setu Cibitung - Bekasi, Telajung',
        addressLocality: 'Bekasi',
        addressRegion: 'Jawa Barat',
        postalCode: '17320',
        addressCountry: 'ID',
      },
    },
    areaServed: 'Indonesia',
    serviceType: ['Steel Fabrication', 'Custom Metalwork', 'Welding Service'],
  }

  return (
    <div className="csw-page">
      <Helmet htmlAttributes={{ lang: isIndonesian ? 'id' : 'en' }}>
        <title>{tx.metaTitle}</title>
        <meta name="description" content={tx.metaDesc} />
        <meta name="keywords" content="kanopi besi bekasi, teralis jendela, pagar besi minimalis, folding gate, railing balkon, railing tangga, tangga besi, pergola besi, besi tempa, partisi besi, jasa las bekasi, rak gudang heavy duty, custom steel works, steel fabrication indonesia, fabrikasi baja bekasi" />
        <link rel="canonical" href="https://mangala-living.com/services/custom-steel-works" />
        <link rel="alternate" hrefLang="id" href="https://mangala-living.com/services/custom-steel-works" />
        <link rel="alternate" hrefLang="en" href="https://mangala-living.com/services/custom-steel-works" />
        <link rel="alternate" hrefLang="x-default" href="https://mangala-living.com/services/custom-steel-works" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={tx.metaTitle} />
        <meta property="og:description" content={tx.metaDesc} />
        <meta property="og:url" content="https://mangala-living.com/services/custom-steel-works" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <AnnouncementBar language={lang as LanguageCode} isIndonesian={isIndonesian} />
      <Header isIndonesian={isIndonesian} language={lang as LanguageCode} />

      {/* HERO */}
      <section className="csw-hero">
        <div className="csw-hero-inner">
          <div className="csw-hero-badge">
            <Wrench size={14} />
            {tx.badge}
          </div>
          <h1>
            {tx.h1}<br />
            <span>{tx.h1accent}</span>
          </h1>
          <p className="csw-hero-sub">{tx.sub}</p>
          <div className="csw-hero-ctas">
            <a
              href={`https://wa.me/6288801146881?text=${waMessage}`}
              className="csw-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('csw_hero')}
            >
              <MessageSquare size={18} />
              {tx.whatsapp}
            </a>
            <Link to="/shop" className="csw-btn-secondary">
              {tx.viewFurniture}
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="csw-stats">
        <div className="csw-stats-inner">
          {tx.stats.map((s) => (
            <div key={s.l} className="csw-stat">
              <strong>{s.v}</strong>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ALL SERVICE CLUSTERS */}
      <section className="csw-clusters">
        <div className="csw-clusters-inner">
          <div className="csw-section-header">
            <h2>{tx.clustersTitle}</h2>
            <p>{tx.clustersSub}</p>
          </div>

          {SERVICE_CLUSTERS.map((cluster) => {
            const services = getServicesByCluster(cluster.key)
            if (!services.length) return null
            const clusterLabel = isIndonesian ? cluster.label.id : cluster.label.en
            const clusterDesc = isIndonesian ? cluster.description.id : cluster.description.en
            return (
              <div key={cluster.key} className="csw-cluster" id={cluster.key}>
                <div className="csw-cluster-header">
                  <div>
                    <h3>{clusterLabel}</h3>
                    <p>{clusterDesc}</p>
                  </div>
                </div>
                <div className="csw-grid">
                  {services.map((svc, idx) => {
                    const svcT = isIndonesian ? svc.translations.id : svc.translations.en
                    return (
                      <Link
                        key={svc.slug}
                        to={`/services/${svc.slug}`}
                        className="csw-card"
                        aria-label={svcT.name}
                      >
                        <span className="csw-card-num">{String(idx + 1).padStart(2, '0')}</span>
                        <h4>{svcT.name}</h4>
                        <p>{svcT.shortDesc}</p>
                        <span className="csw-card-link">{tx.learnMore}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="csw-process">
        <div className="csw-process-inner">
          <div className="csw-section-header">
            <h2>{tx.processTitle}</h2>
            <p>{tx.processSub}</p>
          </div>
          <div className="csw-process-steps">
            {tx.steps.map((step) => (
              <div key={step.n} className="csw-step">
                <div className="csw-step-num">{step.n}</div>
                <h4>{step.t}</h4>
                <p>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO TEXT */}
      <section className="csw-about">
        <div className="csw-about-inner">
          <h2>{tx.aboutTitle}</h2>
          <p>{tx.aboutP1}</p>
          <p>{tx.aboutP2}</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="csw-cta">
        <h2>{tx.ctaTitle}</h2>
        <p>{tx.ctaSub}</p>
        <div className="csw-cta-buttons">
          <a
            href={`https://wa.me/6288801146881?text=${waMessage}`}
            className="csw-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('csw_final_cta')}
          >
            <Phone size={18} />
            {tx.ctaWa}
          </a>
          <Link to="/shop" className="csw-btn-secondary">
            {tx.ctaShop}
          </Link>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} language={lang as LanguageCode} />
    </div>
  )
}

export default CustomSteelWorks
