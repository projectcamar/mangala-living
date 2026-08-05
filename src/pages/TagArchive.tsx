import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams, useLocation } from 'react-router-dom'
import { MessageSquare, MapPin, Tag as TagIcon, Wrench } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NotFound from './NotFound'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getCurrentLanguage } from '../utils/languageManager'
import { GEO_TAGS, PRODUCT_TAGS, getGeoTagBySlug, getProductTagBySlug } from '../data/tags'
import { STEEL_SERVICES, type LanguageCode } from '../data/steelServices'
import './TagArchive.css'

const TagArchive: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const lang = getCurrentLanguage(location.pathname, location.search)
  const isIndonesian = lang === 'id'

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!slug) return <NotFound />

  const geoTag = getGeoTagBySlug(slug)
  const productTag = getProductTagBySlug(slug)

  if (!geoTag && !productTag) {
    return <NotFound />
  }

  const isGeo = !!geoTag
  const tagName = isGeo ? geoTag!.name : productTag!.name
  const tagDesc = isGeo
    ? (isIndonesian ? geoTag!.description.id : geoTag!.description.en)
    : (isIndonesian ? productTag!.description.id : productTag!.description.en)

  const metaTitle = isGeo
    ? `Bengkel Las ${tagName} Terdekat & Profesional | Mangala Living`
    : `Jasa Pembuatan ${tagName} Custom | Mangala Living`

  const metaDesc = isGeo
    ? `Bengkel las terdekat ${tagName} berpengalaman. Melayani pembuatan kanopi, pagar, teralis, railing, pintu besi, dan tangga besi untuk wilayah ${tagName} dan sekitarnya.`
    : `Jasa pembuatan ${tagName} custom berkualitas dari Mangala Living. Material besi hollow, galvanis, powder coating, dan garansi 1 tahun.`

  const canonicalUrl = `https://mangala-living.com/tag/${slug}`

  const waMessage = isIndonesian
    ? encodeURIComponent(`Halo Mangala Living, saya dari area ${tagName} ingin konsultasi mengenai jasa bengkel las / fabrikasi besi custom. Bisa bantu?`)
    : encodeURIComponent(`Hello Mangala Living, I am from ${tagName} area and would like to consult about steel fabrication services. Can you help?`)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: metaTitle,
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
  }

  return (
    <div className="tag-page">
      <Helmet htmlAttributes={{ lang: isIndonesian ? 'id' : 'en' }}>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`bengkel las ${tagName.toLowerCase()}, tukang las ${tagName.toLowerCase()}, kanopi ${tagName.toLowerCase()}, pagar besi ${tagName.toLowerCase()}, teralis ${tagName.toLowerCase()}, railing ${tagName.toLowerCase()}`} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="id" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <AnnouncementBar language={lang as LanguageCode} isIndonesian={isIndonesian} />
      <Header isIndonesian={isIndonesian} language={lang as LanguageCode} />

      {/* BREADCRUMB */}
      <nav className="tag-breadcrumb" aria-label="breadcrumb">
        <a href="/">Mangala Living</a>
        <span>›</span>
        <Link to="/services/custom-steel-works">Custom Steel Works</Link>
        <span>›</span>
        <span>{isGeo ? 'Wilayah' : 'Tag'}</span>
        <span>›</span>
        <strong>{tagName}</strong>
      </nav>

      {/* HERO */}
      <section className="tag-hero">
        <div className="tag-hero-inner">
          <div className="tag-badge">
            {isGeo ? <MapPin size={14} /> : <TagIcon size={14} />}
            {isGeo ? `Bengkel Las Terdekat — ${tagName}` : `Layanan Custom — ${tagName}`}
          </div>
          <h1>
            {isGeo ? (
              <>
                Bengkel Las <span>{tagName}</span> Terdekat & Profesional
              </>
            ) : (
              <>
                Jasa Pembuatan <span>{tagName}</span> Custom
              </>
            )}
          </h1>
          <p className="tag-hero-desc">{tagDesc}</p>
          <div className="tag-hero-ctas">
            <a
              href={`https://wa.me/6288801146881?text=${waMessage}`}
              className="tag-btn-wa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`tag_archive_${slug}_hero`)}
            >
              <MessageSquare size={16} />
              {isIndonesian ? `Konsultasi Area ${tagName}` : `Consultation for ${tagName}`}
            </a>
            <Link to="/services/custom-steel-works" className="tag-btn-all">
              <Wrench size={16} />
              {isIndonesian ? 'Katalog Layanan Lengkap' : 'Full Service Catalog'}
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN SERVICES GRID */}
      <div className="tag-content">
        <h2 className="tag-section-title">
          {isIndonesian ? `Layanan Fabrikasi Besi di ${tagName}` : `Steel Fabrication Services in ${tagName}`}
        </h2>
        <p className="tag-section-sub">
          {isIndonesian
            ? `Mangala Living melayani pembuatan & pemasangan besi custom di area ${tagName} dan sekitarnya dengan harga langsung dari workshop.`
            : `Mangala Living provides custom steel fabrication and installation in ${tagName} and surrounding areas at factory-direct pricing.`}
        </p>

        <div className="tag-grid">
          {STEEL_SERVICES.map((svc) => {
            const svcT = isIndonesian ? svc.translations.id : svc.translations.en
            return (
              <Link key={svc.slug} to={`/services/${svc.slug}`} className="tag-card">
                <span className="tag-card-icon">{svc.icon}</span>
                <h3>{svcT.name}</h3>
                <p>{svcT.shortDesc}</p>
                <span className="tag-card-link">
                  {isIndonesian ? 'Lihat Detail & Harga →' : 'View Details & Pricing →'}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* GEO & PRODUCT TAG CLOUD */}
      <section className="tag-cloud-section">
        <div className="tag-cloud-inner">
          <h3 className="tag-cloud-title">
            📍 {isIndonesian ? 'Jangkauan Wilayah Bengkel Las Terdekat' : 'Nearby Service Areas'}
          </h3>
          <div className="tag-chips">
            {GEO_TAGS.map((g) => (
              <Link
                key={g.slug}
                to={`/tag/${g.slug}`}
                className={`tag-chip ${g.slug === slug ? 'active' : ''}`}
              >
                {g.name}
              </Link>
            ))}
          </div>

          <h3 className="tag-cloud-title" style={{ marginTop: '2rem' }}>
            🏷️ {isIndonesian ? 'Tag Produk & Layanan Besi' : 'Product & Service Tags'}
          </h3>
          <div className="tag-chips">
            {PRODUCT_TAGS.map((p) => (
              <Link
                key={p.slug}
                to={`/tag/${p.slug}`}
                className={`tag-chip ${p.slug === slug ? 'active' : ''}`}
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} language={lang as LanguageCode} />
    </div>
  )
}

export default TagArchive
