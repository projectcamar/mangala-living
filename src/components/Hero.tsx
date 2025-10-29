import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Hero.css'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'

const Hero: React.FC = () => {
  const { t } = useTranslation()
  
  // Handle download catalog if provided

  return (
    <section className="hero" role="banner" aria-labelledby="hero-title">
      <div className="hero-background">
        <img 
          src={heroImage}
          alt="Industrial Furniture Collection by Mangala Living" 
          className="hero-bg-image"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="hero-overlay"></div>
        </div>
      
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">
          {t('hero.title')}
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        
        <div className="hero-cta">
          <Link to="/shop" className="btn btn-primary btn-large">
            {t('hero.cta.primary')}
          </Link>
          <Link to="/about" className="btn btn-secondary btn-large">
            {t('hero.cta.secondary')}
          </Link>
        </div>
        
        <div className="hero-features">
          <div className="hero-feature">
            <span className="feature-icon">✋</span>
            <span>{t('hero.features.handcrafted')}</span>
          </div>
          <div className="hero-feature">
            <span className="feature-icon">⭐</span>
            <span>{t('hero.features.premium')}</span>
          </div>
          <div className="hero-feature">
            <span className="feature-icon">🌱</span>
            <span>{t('hero.features.sustainable')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero