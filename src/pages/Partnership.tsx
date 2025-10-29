import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import './Partnership.css'

const Partnership: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="partnership-page">
      <head>
        <title>{t('partnership.title')} - {t('header.subtitle')}</title>
        <meta name="description" content={t('partnership.metaDescription')} />
        <meta name="keywords" content={t('partnership.metaKeywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://mangalaliving.com/partnership" />
      </head>
      
      <Header />
      
      <main className="partnership-main">
        <section className="partnership-hero">
          <div className="partnership-hero-content">
            <h1 className="partnership-hero-title">{t('partnership.title')}</h1>
            <p className="partnership-hero-subtitle">
              {t('partnership.subtitle')}
            </p>
          </div>
        </section>

        <section className="partnership-intro">
          <div className="partnership-container">
            <div className="partnership-intro-content">
              <h2 className="partnership-main-title">{t('partnership.mainTitle')}</h2>
              <p className="partnership-main-description">
                {t('partnership.mainDescription')}
              </p>
            </div>
          </div>
        </section>

        <section className="partnership-experience">
          <div className="partnership-container">
            <h2 className="partnership-experience-title">{t('partnership.experienceTitle')}</h2>
            <p className="partnership-experience-subtitle">{t('partnership.experienceSubtitle')}</p>
            
            <div className="partnership-experience-content">
              <div className="partnership-experience-image">
                <img 
                  src="/src/assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp" 
                  alt={t('partnership.experienceImageAlt')}
                  className="partnership-experience-img"
                />
              </div>
              <div className="partnership-experience-text">
                <h3>{t('partnership.experienceTextTitle')}</h3>
                <p>{t('partnership.experienceTextDescription')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-collaboration">
          <div className="partnership-container">
            <h2 className="partnership-collaboration-title">{t('partnership.collaborationTitle')}</h2>
            <p className="partnership-collaboration-subtitle">{t('partnership.collaborationSubtitle')}</p>
            
            <div className="partnership-collaboration-content">
              <div className="partnership-collaboration-item">
                <h3>{t('partnership.collaboration1.title')}</h3>
                <p>{t('partnership.collaboration1.description')}</p>
              </div>
              <div className="partnership-collaboration-item">
                <h3>{t('partnership.collaboration2.title')}</h3>
                <p>{t('partnership.collaboration2.description')}</p>
              </div>
              <div className="partnership-collaboration-item">
                <h3>{t('partnership.collaboration3.title')}</h3>
                <p>{t('partnership.collaboration3.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-flexibility">
          <div className="partnership-container">
            <h2 className="partnership-flexibility-title">{t('partnership.flexibilityTitle')}</h2>
            <p className="partnership-flexibility-subtitle">{t('partnership.flexibilitySubtitle')}</p>
            
            <div className="partnership-flexibility-content">
              <div className="partnership-flexibility-item">
                <h3>{t('partnership.flexibility1.title')}</h3>
                <p>{t('partnership.flexibility1.description')}</p>
              </div>
              <div className="partnership-flexibility-item">
                <h3>{t('partnership.flexibility2.title')}</h3>
                <p>{t('partnership.flexibility2.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-scale">
          <div className="partnership-container">
            <h2 className="partnership-scale-title">{t('partnership.scaleTitle')}</h2>
            <p className="partnership-scale-subtitle">{t('partnership.scaleSubtitle')}</p>
            
            <div className="partnership-scale-content">
              <div className="partnership-scale-item">
                <h3>{t('partnership.scale1.title')}</h3>
                <p>{t('partnership.scale1.description')}</p>
              </div>
              <div className="partnership-scale-item">
                <h3>{t('partnership.scale2.title')}</h3>
                <p>{t('partnership.scale2.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-cta">
          <div className="partnership-container">
            <h2 className="partnership-cta-title">{t('partnership.ctaTitle')}</h2>
            <p className="partnership-cta-description">
              {t('partnership.ctaDescription')}
            </p>
            <div className="partnership-cta-buttons">
              <a 
                href="https://wa.me/6281234567890" 
                className="partnership-cta-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('partnership.ctaButton1')}
              </a>
              <a 
                href="tel:+6281234567890" 
                className="partnership-cta-button secondary"
              >
                {t('partnership.ctaButton2')}
              </a>
            </div>
            <p className="partnership-cta-note">
              {t('partnership.ctaNote')}
            </p>
          </div>
        </section>

        <section className="partnership-contact">
          <div className="partnership-container">
            <h2 className="partnership-contact-title">{t('partnership.contactTitle')}</h2>
            <div className="partnership-contact-info">
              <div className="partnership-contact-item">
                <h3>{t('partnership.contact.address.title')}</h3>
                <p>{t('partnership.contact.address.value')}</p>
              </div>
              <div className="partnership-contact-item">
                <h3>{t('partnership.contact.phone.title')}</h3>
                <p>{t('partnership.contact.phone.value')}</p>
              </div>
              <div className="partnership-contact-item">
                <h3>{t('partnership.contact.email.title')}</h3>
                <p>{t('partnership.contact.email.value')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Partnership