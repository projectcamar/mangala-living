import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'

// Critical components loaded immediately
import Header from '../components/Header'
import Hero from '../components/Hero'

// Lazy loaded components
const AboutSection = lazy(() => import('../components/AboutSection'))
const ClientsSection = lazy(() => import('../components/ClientsSection'))
const ServicesSection = lazy(() => import('../components/ServicesSection'))
const AdvantagesSection = lazy(() => import('../components/AdvantagesSection'))
const ProcessSection = lazy(() => import('../components/ProcessSection'))
const PromoSection = lazy(() => import('../components/PromoSection'))
const FAQSection = lazy(() => import('../components/FAQSection'))
const TestimonialSection = lazy(() => import('../components/TestimonialSection'))
const ContactSection = lazy(() => import('../components/ContactSection'))
const Footer = lazy(() => import('../components/Footer'))

// Loading component
const SectionLoading = () => (
  <div className="section-loading">
    <div className="section-spinner"></div>
  </div>
)

const Home: React.FC = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Bengkel Las Mandiri - Jasa Las Profesional & Berkualitas di Bekasi</title>
        <meta name="description" content="Bengkel Las Mandiri menyediakan jasa las profesional di Bekasi dengan harga terjangkau. Spesialis kanopi, pagar besi, teralis, railing tangga & konstruksi besi. ☎ Hubungi Sekarang!" />
        <meta name="keywords" content="bengkel las bekasi, jasa las bekasi, las listrik bekasi, kanopi bekasi, pagar besi bekasi, teralis bekasi, railing tangga bekasi" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bengkel Las Mandiri - Jasa Las Profesional Bekasi" />
        <meta property="og:description" content="Jasa las profesional & terpercaya di Bekasi. Pengerjaan rapi, berpengalaman 7+ tahun, harga bersaing. Spesialis kanopi, pagar, teralis & konstruksi besi." />
        <meta property="og:image" content="/images/bengkel-las-mandiri.jpg" />
        <meta property="og:url" content="https://www.lasbekasi.com/" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bengkel Las Mandiri - Jasa Las Profesional Bekasi" />
        <meta name="twitter:description" content="Jasa las profesional & terpercaya di Bekasi. Pengerjaan rapi, berpengalaman 7+ tahun, harga bersaing. Spesialis kanopi, pagar, teralis & konstruksi besi." />
        <meta name="twitter:image" content="/images/bengkel-las-mandiri.jpg" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bekasi" />
        <link rel="canonical" href="https://www.lasbekasi.com/" />
        
        {/* Structured Data / Schema.org */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bengkel Las Mandiri",
              "image": "/images/bengkel-las-mandiri.jpg",
              "description": "Jasa las profesional & terpercaya di Bekasi. Spesialis kanopi, pagar besi, teralis, railing tangga & konstruksi besi.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jalan Raya Bekasi",
                "addressLocality": "Bekasi",
                "addressRegion": "Jawa Barat",
                "postalCode": "17111",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-6.2349",
                "longitude": "106.9896"
              },
              "url": "https://www.lasbekasi.com",
              "telephone": "+6285212078467",
              "priceRange": "Rp$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://facebook.com/lasbekasi",
                "https://instagram.com/lasbekasi"
              ]
            }
          `}
        </script>
      </Helmet>
      <Header />
      <Hero />
      <Suspense fallback={<SectionLoading />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <ClientsSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <AdvantagesSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <PromoSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home
