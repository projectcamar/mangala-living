import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.jpg'

const Hero: React.FC = () => {
  return (
    <section className="hero" role="banner" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          <article className="hero-text">
            <header>
              <p className="hero-subtitle" aria-label="Tagline">Jasa Las Bekasi Terpercaya</p>
              <h1 id="hero-title">Bengkel Las Bekasi #1 - Bengkel Las Mandiri</h1>
              <p className="hero-description" role="doc-subtitle">
                Spesialis Las Listrik, Konstruksi Baja & Aksesori Rumah di Bekasi
              </p>
            </header>
            <div className="hero-body">
              <p role="contentinfo">
                Melayani jasa las profesional di Bekasi untuk pembuatan kanopi minimalis, 
                pagar besi, teralis jendela, konstruksi baja, railing tangga stainless, 
                dan berbagai kebutuhan las berkualitas tinggi dengan harga terjangkau. 
                Pengalaman 20+ tahun melayani area Bekasi dan sekitarnya.
              </p>
              <nav className="hero-actions" aria-label="Primary navigation">
                <Link to="/layanan-las-bekasi" className="btn-primary" role="button" aria-label="Lihat semua layanan las">
                  Lihat Layanan
                </Link>
                <Link to="/kontak-bengkel-las-bekasi" className="btn-secondary" role="button" aria-label="Konsultasi gratis dengan ahli las">
                  Konsultasi Gratis
                </Link>
              </nav>
            </div>
          </article>
          <figure className="hero-image" role="img" aria-label="Bengkel Las Bekasi">
            <img 
              src={heroImage}
              alt="Workshop Bengkel Las Bekasi dengan peralatan las modern dan hasil pekerjaan berkualitas" 
              loading="eager" 
              width="600" 
              height="400"
              className="hero-img"
            />
            <figcaption className="visually-hidden">
              Workshop Bengkel Las Mandiri di Bekasi dengan peralatan las modern dan hasil pekerjaan berkualitas tinggi
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
