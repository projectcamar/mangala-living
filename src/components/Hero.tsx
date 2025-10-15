import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.jpg'

const Hero: React.FC = () => {
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
        <h1 id="hero-title" className="hero-title">MANGALA LIVING</h1>
        <p className="hero-subtitle">
          Premium Industrial Scandinavian Furniture for Coffee Shops, Restaurants & Offices. 
          Custom Solutions Since 1999.
        </p>
        <Link to="/shop" className="hero-btn">
          • SHOP NOW
        </Link>
      </div>
    </section>
  )
}

export default Hero
