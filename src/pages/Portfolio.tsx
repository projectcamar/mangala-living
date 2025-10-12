import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioSection from '../components/PortfolioSection'

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
      <Helmet>
        <title>Katalog Produk - Album Bengkel Las Mandiri Bekasi | Furniture Industrial</title>
        <meta name="description" content="Lihat katalog produk furniture industrial Bengkel Las Mandiri: meja industrial, rak besi, kursi besi, lemari industrial, dan custom furniture besi berkualitas di Bekasi." />
        <meta name="keywords" content="katalog bengkel las bekasi, portfolio las bekasi, furniture industrial bekasi, meja besi industrial, rak besi bekasi, custom furniture besi" />
        <link rel="canonical" href="https://www.lasbekasi.com/album-bengkel-las-mandiri" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Katalog Produk Bengkel Las Mandiri - Furniture Industrial Bekasi" />
        <meta property="og:description" content="Lihat koleksi furniture industrial custom dari Bengkel Las Mandiri: meja, rak, kursi, lemari besi berkualitas untuk rumah dan kantor." />
        <meta property="og:url" content="https://www.lasbekasi.com/album-bengkel-las-mandiri" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Katalog Furniture Industrial Bengkel Las Mandiri" />
        <meta name="twitter:description" content="Furniture industrial custom berkualitas: meja, rak, kursi, lemari besi untuk rumah dan kantor." />
        
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
      <PortfolioSection />
      <Footer />
    </div>
  )
}

export default Portfolio
