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
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">
          {isIndonesian ? "MANGALA LIVING" : "MANGALA LIVING"}
        </h1>
        <p className="hero-subtitle">
          {isIndonesian 
            ? "Sejak 1999, kami menghadirkan Industrial Set terbaik untuk cafe, hotel dan restoran dengan kualitas premium dari workshop Bekasi"
            : "Since 1999, we deliver premium Industrial Sets for cafes, hotels and restaurants with superior quality from our Bekasi workshop"
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
