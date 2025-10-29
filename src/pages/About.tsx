import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Diamond, Wrench, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import showroomImage from '../assets/Bench-corner-kursi-sudut-kursi-santai.webp'
import './About.css'

const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('about.title')} - MANGALA Furniture</title>
        <meta name="description" content={t('about.subtitle')} />
        <meta name="keywords" content="furniture jepara, teak wood furniture, handmade furniture, indonesia furniture" />
        <link rel="canonical" href="https://mangalafurniture.com/about" />
      </Helmet>

      <Header />
      
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-content">
              <div className="about-hero-text">
                <h1>{t('about.title')}</h1>
                <p className="about-hero-subtitle">{t('about.subtitle')}</p>
                <p className="about-hero-description">{t('about.description')}</p>
              </div>
              <div className="about-hero-image">
                <img src={heroImage} alt="Furniture Manufacturing" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-mission-vision">
          <div className="container">
            <div className="mission-vision-grid">
              <div className="mission-card">
                <h2>{t('about.mission.title')}</h2>
                <p>{t('about.mission.description')}</p>
              </div>
              <div className="vision-card">
                <h2>{t('about.vision.title')}</h2>
                <p>{t('about.vision.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values">
          <div className="container">
            <h2 className="section-title">{t('about.values.title')}</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <Diamond size={48} />
                </div>
                <h3>{t('about.values.quality.title')}</h3>
                <p>{t('about.values.quality.description')}</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <Wrench size={48} />
                </div>
                <h3>{t('about.values.craftsmanship.title')}</h3>
                <p>{t('about.values.craftsmanship.description')}</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <Globe size={48} />
                </div>
                <h3>{t('about.values.sustainability.title')}</h3>
                <p>{t('about.values.sustainability.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="about-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>{t('about.stats.experience')}</h3>
                <p>30+ Years</p>
              </div>
              <div className="stat-item">
                <h3>{t('about.stats.products')}</h3>
                <p>1000+ Products</p>
              </div>
              <div className="stat-item">
                <h3>{t('about.stats.customers')}</h3>
                <p>5000+ Customers</p>
              </div>
              <div className="stat-item">
                <h3>{t('about.stats.countries')}</h3>
                <p>20+ Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Showroom */}
        <section className="about-showroom">
          <div className="container">
            <div className="showroom-content">
              <div className="showroom-text">
                <h2>Our Showroom</h2>
                <p>Visit our showroom to see our furniture collection in person and experience the quality of our craftsmanship.</p>
                <div className="showroom-cta">
                  <a href="/contact" className="btn btn-primary">Visit Showroom</a>
                </div>
              </div>
              <div className="showroom-image">
                <img src={showroomImage} alt="Showroom" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default About