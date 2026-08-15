import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, useLocation, Link } from 'react-router-dom'
import { Calculator, CheckCircle2, MapPin, MessageSquare, Phone, ShieldCheck, Wrench, ArrowRight } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { resolvePSEOSlug, POPULAR_PSEO_SLUGS } from '../data/pseoMatrix'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import heroImage from '../assets/main-hero-image.webp'
import './PSEOLandingPage.css'

export default function PSEOLandingPage() {
  const { slug } = useParams<{ slug?: string }>()
  const location = useLocation()

  // Determine query or slug
  const queryParam = new URLSearchParams(location.search).get('q')
  const activeInput = slug || queryParam || 'pagar-besi-minimalis-bekasi'

  const lang = getCurrentLanguage(location.pathname, location.search)
  const isIndonesian = lang === 'id'

  const intent = resolvePSEOSlug(activeInput)

  // Interactive Estimator State
  const [width, setWidth] = useState<number>(5)
  const [height, setHeight] = useState<number>(2)
  const area = Math.max(1, width * height)

  const estimatedMinTotal = area * intent.estimatedPriceMin
  const estimatedMaxTotal = area * intent.estimatedPriceMax

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeInput])

  const metaTitle = intent.metaTitle[lang] || intent.metaTitle.en
  const metaDesc = intent.metaDescription[lang] || intent.metaDescription.en
  const heroH1 = intent.heroTitle[lang] || intent.heroTitle.en
  const heroSub = intent.heroSubtitle[lang] || intent.heroSubtitle.en

  const waMessage = encodeURIComponent(
    `Halo Mangala Living, saya berminat dengan ${heroH1} (Estimasi luas: ${area} m² - Rp ${estimatedMinTotal.toLocaleString('id-ID')} s/d Rp ${estimatedMaxTotal.toLocaleString('id-ID')}). Bisakah jadwal survei lokasi atau kirim RAB terinci?`
  )

  const canonicalUrl = `https://mangala-living.com/s/${intent.slug}`

  // Schema.org Structured Data
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: heroH1,
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
    areaServed: intent.locationName || 'Indonesia',
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: intent.estimatedPriceMin,
        maxPrice: intent.estimatedPriceMax,
        priceCurrency: 'IDR',
        unitText: 'm²',
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: intent.faqs.map(f => ({
      '@type': 'Question',
      name: f.q[lang] || f.q.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a[lang] || f.a.en,
      },
    })),
  }

  return (
    <div className="pseo-page">
      <Helmet htmlAttributes={{ lang: isIndonesian ? 'id' : 'en' }}>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="id" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <AnnouncementBar isIndonesian={isIndonesian} language={lang as LanguageCode} />
      <Header isIndonesian={isIndonesian} language={lang as LanguageCode} />

      {/* Hero */}
      <section className="pseo-hero">
        <div className="pseo-hero-bg">
          <img src={heroImage} alt={heroH1} />
          <div className="pseo-hero-overlay" />
        </div>
        <div className="pseo-hero-container">
          <div className="pseo-hero-badge">
            <ShieldCheck size={16} />
            <span>Direct Workshop & Factory Manufacturer · Since 1999</span>
          </div>
          <h1>{heroH1}</h1>
          <p>{heroSub}</p>
          <div className="pseo-hero-ctas">
            <a
              href={`https://wa.me/6288801146881?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pseo-btn-primary"
              onClick={() => trackWhatsAppClick(`pseo_hero_${intent.slug}`)}
            >
              <MessageSquare size={18} />
              {isIndonesian ? 'Konsultasi Gratis via WhatsApp' : 'Get Free Custom Quote (WhatsApp)'}
            </a>
            <a href="#estimator" className="pseo-btn-secondary">
              <Calculator size={18} />
              {isIndonesian ? 'Hitung Estimasi Biaya (RAB)' : 'Calculate Cost Estimate'}
            </a>
          </div>
        </div>
      </section>

      {/* Interactive RAB Estimator Widget */}
      <section id="estimator" className="pseo-estimator-section">
        <div className="pseo-container">
          <div className="pseo-estimator-card">
            <div className="pseo-estimator-header">
              <Calculator size={28} className="pseo-accent-icon" />
              <div>
                <h2>{isIndonesian ? 'Kalkulator Estimasi Biaya (RAB)' : 'Instant Cost & Size Estimator'}</h2>
                <p>{isIndonesian ? 'Hitung estimasi biaya pengerjaan sesuai dimensi area rumah Anda.' : 'Calculate your project estimate based on dimensions.'}</p>
              </div>
            </div>

            <div className="pseo-estimator-grid">
              <div className="pseo-input-group">
                <label>{isIndonesian ? 'Panjang / Lebar (Meter)' : 'Length / Width (Meters)'}</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={width}
                  onChange={(e) => setWidth(Math.max(1, parseFloat(e.target.value) || 1))}
                />
              </div>

              <div className="pseo-input-group">
                <label>{isIndonesian ? 'Tinggi (Meter)' : 'Height / Depth (Meters)'}</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={height}
                  onChange={(e) => setHeight(Math.max(1, parseFloat(e.target.value) || 1))}
                />
              </div>

              <div className="pseo-result-box">
                <span className="pseo-result-label">{isIndonesian ? 'Total Luas & Estimasi Biaya' : 'Total Area & Cost Range'}</span>
                <strong className="pseo-area-display">{area} m²</strong>
                <div className="pseo-price-range">
                  Rp {estimatedMinTotal.toLocaleString('id-ID')} — Rp {estimatedMaxTotal.toLocaleString('id-ID')}
                </div>
                <span className="pseo-price-note">
                  * {isIndonesian ? 'Sudah termasuk bahan, perakitan, finishing powder coat & pemasangan.' : 'Includes materials, fabrication, powder coating & installation.'}
                </span>
              </div>
            </div>

            <div className="pseo-estimator-footer">
              <a
                href={`https://wa.me/6288801146881?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pseo-btn-primary pseo-btn-full"
                onClick={() => trackWhatsAppClick(`pseo_estimator_${intent.slug}`)}
              >
                <Phone size={18} />
                {isIndonesian ? 'Minta Penawaran RAB Resmi ke WhatsApp' : 'Send Estimates & Request Official RAB Quote'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Standards Table */}
      <section className="pseo-specs-section">
        <div className="pseo-container">
          <h2 className="pseo-section-title">{isIndonesian ? 'Spesifikasi & Standar Kualitas' : 'Material & Fabrication Specifications'}</h2>
          <p className="pseo-section-subtitle">{isIndonesian ? 'Semua produk difabrikasi di workshop kami di Setu Cibitung, Bekasi dengan standar presisi tinggi.' : 'All steel works fabricated at our Setu Cibitung workshop in Bekasi to high structural precision.'}</p>

          <div className="pseo-specs-grid">
            {intent.specs.map((item, idx) => (
              <div key={idx} className="pseo-spec-card">
                <CheckCircle2 size={24} className="pseo-check-icon" />
                <div>
                  <strong>{isIndonesian ? item.label.id : item.label.en}</strong>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Showcase */}
      {intent.matchedProducts.length > 0 && (
        <section className="pseo-products-section">
          <div className="pseo-container">
            <h2 className="pseo-section-title">{isIndonesian ? 'Rekomendasi Produk & Katalog Relevan' : 'Featured Related Furniture & Steel Products'}</h2>
            <div className="pseo-products-grid">
              {intent.matchedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.slug}`} className="pseo-product-card">
                  <div className="pseo-product-img-box">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div className="pseo-product-info">
                    <h3>{p.name}</h3>
                    <span className="pseo-product-price">{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Showcase */}
      {intent.matchedServices.length > 0 && (
        <section className="pseo-services-section">
          <div className="pseo-container">
            <h2 className="pseo-section-title">{isIndonesian ? 'Layanan Fabrikasi Besi Terkait' : 'Related Steel Fabrication Services'}</h2>
            <div className="pseo-services-grid">
              {intent.matchedServices.map((s) => {
                const sT = isIndonesian ? s.translations.id : s.translations.en
                return (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="pseo-service-card">
                    <Wrench size={24} className="pseo-wrench-icon" />
                    <div>
                      <h3>{sT.name}</h3>
                      <p>{sT.shortDesc}</p>
                      <span className="pseo-link-arrow">{isIndonesian ? 'Lihat Detail Layanan →' : 'View Service Details →'}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="pseo-faq-section">
        <div className="pseo-container">
          <h2 className="pseo-section-title">{isIndonesian ? 'Pertanyaan yang Sering Diajukan (FAQ)' : 'Frequently Asked Questions'}</h2>
          <div className="pseo-faq-list">
            {intent.faqs.map((f, i) => (
              <div key={i} className="pseo-faq-item">
                <h3>{f.q[lang] || f.q.en}</h3>
                <p>{f.a[lang] || f.a.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular SEO Links / Internal Graph */}
      <section className="pseo-internal-links">
        <div className="pseo-container">
          <h3 className="pseo-links-title">{isIndonesian ? 'Kategori & Layanan Terpopuler Lainnya' : 'Other Popular Architectural Steel Search Topics'}</h3>
          <div className="pseo-chips-grid">
            {POPULAR_PSEO_SLUGS.map((pslug) => (
              <Link key={pslug} to={`/s/${pslug}`} className="pseo-chip">
                {pslug.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="pseo-cta-bottom">
        <div className="pseo-container">
          <h2>{isIndonesian ? `Konsultasi Proyek ${heroH1} Sekarang` : `Start Your Custom ${heroH1} Project`}</h2>
          <p>{isIndonesian ? 'Tim enginering kami siap memberikan survei lokasi gratis dan RAB transparan untuk kebutuhan hunian atau komersial Anda.' : 'Our engineering team is ready to provide free site surveys and transparent quotes.'}</p>
          <a
            href={`https://wa.me/6288801146881?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pseo-btn-primary pseo-btn-large"
            onClick={() => trackWhatsAppClick(`pseo_bottom_cta_${intent.slug}`)}
          >
            <MessageSquare size={20} />
            {isIndonesian ? 'Chat WhatsApp (+62 888-0114-6881)' : 'Chat on WhatsApp (+62 888-0114-6881)'}
          </a>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} language={lang as LanguageCode} />
    </div>
  )
}
