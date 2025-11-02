import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import { DEFAULT_IMAGE_RIGHTS_METADATA } from '../utils/structuredData'
import './ImageLicense.css'

const HERO_IMAGE_URL = 'https://mangala-living.com/assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'

const ImageLicense: React.FC = () => {
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    if (path.startsWith('/id')) {
      setIsIndonesian(true)
      setIsLoading(false)
      return
    }
    if (path.startsWith('/eng')) {
      setIsIndonesian(false)
      setIsLoading(false)
      return
    }

    const params = new URLSearchParams(location.search)
    const lang = params.get('lang')
    if (lang === 'id' || lang === 'en') {
      setIsIndonesian(lang === 'id')
      setIsLoading(false)
      return
    }

    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        if (data.country_code === 'ID') {
          setIsIndonesian(true)
        }
      } catch (error) {
        const browserLang = navigator.language || navigator.languages?.[0]
        if (browserLang?.startsWith('id')) {
          setIsIndonesian(true)
        }
      } finally {
        setIsLoading(false)
      }
    }

    detectLocation()
  }, [location.pathname, location.search])

  if (isLoading) {
    return null
  }

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  const pageTitle = isIndonesian ? 'Lisensi & Penggunaan Gambar - Mangala Living' : 'Image Usage & Licensing - Mangala Living'
  const pageDescription = isIndonesian
    ? 'Kebijakan lisensi gambar Mangala Living, hak cipta, dan cara memperoleh izin penggunaan gambar untuk keperluan komersial.'
    : 'Mangala Living image licensing policy, copyright details, and how to obtain permission for commercial image usage.'

  const imageObjectSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": HERO_IMAGE_URL,
    "contentUrl": HERO_IMAGE_URL,
    "caption": isIndonesian
      ? 'Lisensi & Penggunaan Gambar Mangala Living - Workshop Furniture Industrial Bekasi'
      : 'Mangala Living Image Licensing & Usage - Bekasi Industrial Furniture Workshop',
    "description": pageDescription,
    "creditText": "Mangala Living",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Mangala Living",
      "url": "https://mangala-living.com"
    },
    ...DEFAULT_IMAGE_RIGHTS_METADATA
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": localizedUrls.canonical,
    "inLanguage": isIndonesian ? 'id-ID' : 'en-US',
    "mainEntity": {
      "@type": "Organization",
      "name": "Mangala Living",
      "url": "https://mangala-living.com"
    },
    "primaryImageOfPage": {
      ...imageObjectSchema
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mangala Living",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mangala-living.com/logo.png",
        ...DEFAULT_IMAGE_RIGHTS_METADATA
      }
    }
  }

  const usageItems = isIndonesian
    ? [
        'Semua foto dan visual merupakan properti Mangala Living dan dilindungi oleh undang-undang hak cipta.',
        'Penggunaan gambar tanpa izin tertulis tidak diperbolehkan, termasuk untuk keperluan komersial, marketplace, dan promosi.',
        'Kredensial dan watermark tidak boleh dihapus. Penggunaan dengan atribusi harus mencantumkan "Mangala Living" dan tautan ke situs resmi.',
        'Lisensi berlaku non-eksklusif, dengan batasan pada konteks penggunaan dan periode yang disepakati.'
      ]
    : [
        'All photos and visuals are the property of Mangala Living and protected by copyright law.',
        'Using our images without written permission is prohibited, including for commercial, marketplace, and promotional purposes.',
        'Watermarks and credits must remain intact. Attribution usage must include "Mangala Living" and a link to the official website.',
        'Licenses are granted on a non-exclusive basis, limited to the agreed usage context and duration.'
      ]

  const permittedUses = isIndonesian
    ? [
        'Media publikasi dan editorial dengan atribusi yang jelas.',
        'Proposal proyek, katalog presentasi, dan materi pitching setelah mendapatkan izin tertulis.',
        'Materi pemasaran digital atau cetak yang mempromosikan kerjasama resmi dengan Mangala Living.'
      ]
    : [
        'Editorial coverage and press features with clear attribution.',
        'Project proposals, catalogues, and pitch materials after receiving written approval.',
        'Digital or printed marketing assets that promote an official collaboration with Mangala Living.'
      ]

  const requestSteps = isIndonesian
    ? [
        'Isi formulir permintaan lisensi atau hubungi tim kami melalui WhatsApp/Email.',
        'Cantumkan tujuan penggunaan, media publikasi, dan durasi kampanye.',
        'Tim kami akan mengirimkan paket lisensi, tarif, dan syarat penggunaan.',
        'Lisensi berlaku setelah pembayaran (jika ada) dan penandatanganan perjanjian lisensi.'
      ]
    : [
        'Submit the license request form or reach out via WhatsApp/Email.',
        'Describe the intended use, publication channels, and campaign duration.',
        'Our team will send the licensing package, fees, and usage terms.',
        'The license becomes effective once payment (if applicable) and the agreement signature are completed.'
      ]

  return (
    <div className="image-license-page">
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`image-license-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={HERO_IMAGE_URL} />
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(imageObjectSchema)}</script>
      </Helmet>

      <Header isIndonesian={isIndonesian} />

      <section className="image-license-hero">
        <div className="image-license-hero-media">
          <img
            src={heroImage}
            alt={isIndonesian ? 'Lisensi & Penggunaan Gambar Mangala Living' : 'Mangala Living Image Usage & Licensing'}
            title={isIndonesian ? 'Kebijakan Lisensi Gambar Mangala Living' : 'Mangala Living Image License Policy'}
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            itemProp="image"
            data-image-type="image-license-hero"
          />
          <div className="image-license-hero-overlay" />
        </div>
        <div className="image-license-hero-content">
          <h1 className="image-license-hero-title">{isIndonesian ? 'Lisensi & Penggunaan Gambar' : 'Image Usage & Licensing'}</h1>
          <p className="image-license-hero-subtitle">
            {isIndonesian
              ? 'Panduan resmi mengenai hak cipta, kebijakan lisensi, dan cara mengajukan izin penggunaan gambar Mangala Living.'
              : 'Official guidance on copyright, licensing policies, and how to request permission to use Mangala Living imagery.'}
          </p>
        </div>
      </section>

      <main className="image-license-main">
        <section className="image-license-section" id="usage-terms">
          <h2>{isIndonesian ? 'Ketentuan Penggunaan Gambar' : 'Image Usage Terms'}</h2>
          <p>
            {isIndonesian
              ? 'Kami berkomitmen menjaga kualitas citra brand Mangala Living. Mohon ikuti ketentuan berikut sebelum menggunakan aset visual kami:'
              : 'We are committed to protecting Mangala Living\'s brand identity. Please review the following requirements before using our visual assets:'}
          </p>
          <ul className="image-license-list">
            {usageItems.map((item, index) => (
              <li key={`usage-item-${index}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="image-license-section" id="permitted-uses">
          <h2>{isIndonesian ? 'Contoh Penggunaan yang Diizinkan' : 'Examples of Permitted Usage'}</h2>
          <ul className="image-license-list">
            {permittedUses.map((item, index) => (
              <li key={`permitted-item-${index}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="image-license-section" id="copyright">
          <h2>{isIndonesian ? 'Hak Cipta & Atribusi' : 'Copyright & Attribution'}</h2>
          <p>
            {isIndonesian
              ? 'Setiap gambar memiliki watermark digital dan catatan metadata untuk memastikan perlindungan hak cipta. Penggunaan dengan atribusi harus mencantumkan "Mangala Living" dan tautan ke https://mangala-living.com.'
              : 'Each image contains digital watermarking and metadata trails to safeguard copyright. Attribution usage must include "Mangala Living" and a link to https://mangala-living.com.'}
          </p>
        </section>

        <section className="image-license-section" id="request-license">
          <h2>{isIndonesian ? 'Cara Mengajukan Lisensi Penggunaan' : 'How to Request Image Licensing'}</h2>
          <p>
            {isIndonesian
              ? 'Ikuti langkah berikut untuk mengajukan permohonan lisensi resmi:'
              : 'Follow these steps to request official licensing approval:'}
          </p>
          <ul className="image-license-list">
            {requestSteps.map((item, index) => (
              <li key={`request-step-${index}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="image-license-cta" aria-labelledby="image-license-cta-title">
          <div className="image-license-cta-content">
            <h2 id="image-license-cta-title">
              {isIndonesian ? 'Butuh Lisensi Resmi?' : 'Need Official Licensing?'}
            </h2>
            <p>
              {isIndonesian
                ? 'Hubungi tim kami untuk mendapatkan paket lisensi komersial atau penggunaan editorial yang sesuai kebutuhan Anda.'
                : 'Contact our team to receive a tailored commercial or editorial licensing package for your upcoming project.'}
            </p>
            <a
              className="image-license-button"
              href="https://mangala-living.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isIndonesian ? 'Hubungi Tim Mangala Living' : 'Contact Mangala Living'}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ImageLicense
