import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams, useLocation } from 'react-router-dom'
import { MessageSquare, Phone, ArrowLeft } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NotFound from './NotFound'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getCurrentLanguage } from '../utils/languageManager'
import { getServiceBySlug, STEEL_SERVICES, type LanguageCode } from '../data/steelServices'
import './ServiceDetail.css'

// Static Unsplash images by slug (using Unsplash source with search)
const HERO_IMAGES: Record<string, string> = {
  'kanopi': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop',
  'teralis': 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&auto=format&fit=crop',
  'pagar-besi-minimalis': 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=900&auto=format&fit=crop',
  'pintu-pagar': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop',
  'folding-gate': 'https://images.unsplash.com/photo-1565038591210-2c28e5d1f957?w=900&auto=format&fit=crop',
  'railing-balkon': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop',
  'railing-tangga': 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900&auto=format&fit=crop',
  'tangga-besi': 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=900&auto=format&fit=crop',
  'pergola': 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=900&auto=format&fit=crop',
  'carport': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop',
  'besi-tempa': 'https://images.unsplash.com/photo-1565038591210-2c28e5d1f957?w=900&auto=format&fit=crop',
  'partisi-besi': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop',
  'jasa-las-custom': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&auto=format&fit=crop',
  'rak-gudang': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&auto=format&fit=crop',
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&auto=format&fit=crop'

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const lang = getCurrentLanguage(location.pathname, location.search)
  const isIndonesian = lang === 'id'

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!slug) return <NotFound />
  const service = getServiceBySlug(slug)
  if (!service) return <NotFound />

  const svcT = service.translations[lang as keyof typeof service.translations] || (isIndonesian ? service.translations.id : service.translations.en)
  const heroImg = HERO_IMAGES[slug] ?? DEFAULT_IMAGE

  const waMessage = isIndonesian
    ? encodeURIComponent(`Halo Mangala Living, saya ingin konsultasi mengenai ${svcT.name}. Bisa bantu?`)
    : encodeURIComponent(`Hello Mangala Living, I would like to consult about ${svcT.name}. Can you help?`)

  // Related services (same cluster, excluding current)
  const related = STEEL_SERVICES
    .filter(s => s.cluster === service.cluster && s.slug !== slug)
    .slice(0, 6)

  const metaTitle = isIndonesian ? service.metaTitle.id : service.metaTitle.en
  const metaDesc = isIndonesian ? service.metaDescription.id : service.metaDescription.en

  const canonicalUrl = `https://mangala-living.com/services/${slug}`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svcT.name,
    description: metaDesc,
    url: canonicalUrl,
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
    serviceType: svcT.name,
    keywords: service.keywords.join(', '),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: svcT.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Mangala Living', item: 'https://mangala-living.com' },
      { '@type': 'ListItem', position: 2, name: isIndonesian ? 'Custom Steel Works' : 'Custom Steel Works', item: 'https://mangala-living.com/services/custom-steel-works' },
      { '@type': 'ListItem', position: 3, name: svcT.name, item: canonicalUrl },
    ],
  }

  const stats = isIndonesian
    ? [
        { v: '25+', l: 'Tahun Pengalaman' },
        { v: '1000+', l: 'Proyek Selesai' },
        { v: '1 Tahun', l: 'Garansi Pekerjaan' },
        { v: 'Gratis', l: 'Konsultasi' },
      ]
    : [
        { v: '25+', l: 'Years Experience' },
        { v: '1000+', l: 'Projects Done' },
        { v: '1 Year', l: 'Work Warranty' },
        { v: 'Free', l: 'Consultation' },
      ]

  return (
    <div className="sd-page">
      <Helmet htmlAttributes={{ lang: isIndonesian ? 'id' : 'en' }}>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={service.keywords.join(', ')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="id" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={heroImg} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <AnnouncementBar language={lang as LanguageCode} isIndonesian={isIndonesian} />
      <Header isIndonesian={isIndonesian} language={lang as LanguageCode} />

      {/* BREADCRUMB */}
      <nav className="sd-breadcrumb" aria-label="breadcrumb">
        <a href="/">Mangala Living</a>
        <span>›</span>
        <Link to="/services/custom-steel-works">Custom Steel Works</Link>
        <span>›</span>
        <strong>{svcT.name}</strong>
      </nav>

      {/* HERO */}
      <section className="sd-hero">
        <div className="sd-hero-content">
          <div className="sd-hero-badge">
            {service.icon} {isIndonesian ? 'Workshop Bekasi' : 'Bekasi Workshop'}
          </div>
          <h1>{svcT.heroTitle}</h1>
          <p>{svcT.heroSubtitle}</p>
          <div className="sd-hero-ctas">
            <a
              href={`https://wa.me/6288801146881?text=${waMessage}`}
              className="sd-btn-wa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`service_detail_${slug}_hero`)}
            >
              <MessageSquare size={16} />
              {isIndonesian ? 'Konsultasi Gratis' : 'Free Consultation'}
            </a>
            <Link to="/services/custom-steel-works" className="sd-btn-back">
              <ArrowLeft size={16} />
              {isIndonesian ? 'Semua Layanan' : 'All Services'}
            </Link>
          </div>
        </div>
        <div className="sd-hero-image">
          <img
            src={heroImg}
            alt={`${svcT.name} — Mangala Living Bekasi`}
            loading="eager"
            width="900"
            height="600"
          />
          <div className="sd-hero-image-overlay" />
        </div>
      </section>

      {/* QUICK STATS */}
      <div className="sd-quick-stats">
        <div className="sd-quick-stats-inner">
          {stats.map(s => (
            <div key={s.l} className="sd-stat">
              <strong>{s.v}</strong>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="sd-content">
        <main className="sd-main">
          {/* ABOUT / LONG DESC */}
          <h2>{isIndonesian ? 'Tentang Layanan Ini' : 'About This Service'}</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#444', marginBottom: '2.5rem' }}>
            {svcT.longDesc}
          </p>

          {/* MATERIALS */}
          <h2>{svcT.materialTitle}</h2>
          <div className="sd-materials">
            {svcT.materials.map(m => (
              <div key={m} className="sd-material-chip">{m}</div>
            ))}
          </div>

          {/* PROCESS */}
          <h2>{svcT.processTitle}</h2>
          <ol className="sd-process-list">
            {svcT.process.map((step, i) => (
              <li key={i}>
                <span className="sd-process-num">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          {/* FAQ */}
          <h2>FAQ</h2>
          <div className="sd-faq">
            {svcT.faqs.map((faq, i) => (
              <details key={i} className="sd-faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="sd-sidebar">
          <div className="sd-contact-card">
            <h3>
              {isIndonesian ? '💬 Konsultasi Gratis' : '💬 Free Consultation'}
            </h3>
            <p>
              {isIndonesian
                ? 'Ceritakan kebutuhan Anda. Tim kami siap membantu merancang solusi yang tepat dengan harga pabrik.'
                : 'Tell us about your project. Our team will design the right solution at factory-direct pricing.'}
            </p>
            <a
              href={`https://wa.me/6288801146881?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`service_detail_${slug}_sidebar`)}
            >
              <MessageSquare size={16} />
              {isIndonesian ? 'WhatsApp Kami' : 'WhatsApp Us'}
            </a>
            <a
              href="tel:+6288801146881"
              className="outline"
            >
              <Phone size={16} />
              +62 888 0114 6881
            </a>
          </div>

          {/* RELATED SERVICES */}
          {related.length > 0 && (
            <div className="sd-related">
              <h4>{isIndonesian ? 'Layanan Terkait' : 'Related Services'}</h4>
              <ul className="sd-related-links">
                {related.map(r => {
                  const rT = isIndonesian ? r.translations.id : r.translations.en
                  return (
                    <li key={r.slug}>
                      <Link to={`/services/${r.slug}`}>
                        <span>{r.icon}</span>
                        {rT.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {/* AREA CTA */}
      <section className="sd-area-cta">
        <h2>
          {isIndonesian
            ? `Butuh ${svcT.name}? Hubungi Kami Sekarang`
            : `Need ${svcT.name}? Contact Us Today`}
        </h2>
        <p>
          {isIndonesian
            ? 'Konsultasi gratis. Harga pabrik. Melayani Jakarta, Bekasi, Bogor, Tangerang, Depok, dan seluruh Indonesia.'
            : 'Free consultation. Factory-direct pricing. Serving Jakarta, Bekasi, Bogor, Tangerang, Depok, and all of Indonesia.'}
        </p>
        <a
          href={`https://wa.me/6288801146881?text=${waMessage}`}
          className="wa"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(`service_detail_${slug}_bottom_cta`)}
        >
          <MessageSquare size={16} />
          {isIndonesian ? 'WhatsApp Sekarang' : 'WhatsApp Now'}
        </a>
        <Link to="/services/custom-steel-works">
          {isIndonesian ? 'Lihat Semua Layanan' : 'View All Services'}
        </Link>
      </section>

      <Footer isIndonesian={isIndonesian} language={lang as LanguageCode} />
    </div>
  )
}

export default ServiceDetail
