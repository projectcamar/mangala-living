import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'

interface HeroProps {
  isIndonesian?: boolean
}

const Hero: React.FC<HeroProps> = ({ isIndonesian = false }) => {
  return (
    <section className="hero" role="banner" aria-labelledby="hero-title">
      <div className="hero-background">
            <img 
              src={heroImage}
          alt="Industrial Furniture Collection by Mangala Living" 
          className="hero-bg-image"
              loading="eager" 
            />
        <div className="hero-overlay"></div>
        </div>
      
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">
          {isIndonesian ? "MANGALA LIVING" : "MANGALA LIVING"}
        </h1>
        <p className="hero-subtitle">
          {isIndonesian 
            ? "Set Furniture Industrial dengan Hollowline Display Rack, hubungi Mangala di 0852-1207-8467 untuk harga murah dari workshop Bekasi"
            : "Hollowline Display Rack & Industrial Furniture Set, call Mangala at +6285212078467 for affordable prices from Bekasi workshop"
          }
        </p>
        <Link to="/shop" className="hero-btn">
          {isIndonesian ? "• BELANJA SEKARANG" : "• SHOP NOW"}
        </Link>
      </div>
    </section>
  )
}

export default Hero
