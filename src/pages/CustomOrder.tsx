import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import './CustomOrder.css'

const CustomOrder: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="custom-order-page">
      <head>
        <title>{t('customOrder.title')} - {t('header.subtitle')}</title>
        <meta name="description" content={t('customOrder.metaDescription')} />
        <meta name="keywords" content={t('customOrder.metaKeywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://mangalaliving.com/custom-order" />
      </head>
      
      <Header />
      
      <main className="custom-order-main">
        <section className="custom-order-hero">
          <div className="custom-order-hero-content">
            <h1 className="custom-order-hero-title">{t('customOrder.title')}</h1>
            <p className="custom-order-hero-subtitle">
              {t('customOrder.subtitle')}
            </p>
          </div>
        </section>

        <section className="custom-order-intro">
          <div className="custom-order-container">
            <div className="custom-order-intro-content">
              <h2 className="custom-order-main-title">{t('customOrder.mainTitle')}</h2>
              <p className="custom-order-main-description">
                {t('customOrder.mainDescription')}
              </p>
            </div>
          </div>
        </section>

        <section className="custom-order-process">
          <div className="custom-order-container">
            <h2 className="custom-order-process-title">{t('customOrder.processTitle')}</h2>
            <p className="custom-order-process-subtitle">{t('customOrder.processSubtitle')}</p>
            
            <div className="custom-order-process-content">
              <div className="custom-order-process-image">
                <img 
                  src="/src/assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp" 
                  alt={t('customOrder.processImageAlt')}
                  className="custom-order-process-img"
                />
              </div>
              <div className="custom-order-process-text">
                <h3>{t('customOrder.processTextTitle')}</h3>
                <p>{t('customOrder.processTextDescription')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="custom-order-styles">
          <div className="custom-order-container">
            <h2 className="custom-order-styles-title">{t('customOrder.stylesTitle')}</h2>
            <p className="custom-order-styles-subtitle">{t('customOrder.stylesSubtitle')}</p>
            
            <div className="custom-order-styles-grid">
              <div className="custom-order-style-item">
                <h3>{t('customOrder.style1.title')}</h3>
                <p>{t('customOrder.style1.description')}</p>
              </div>
              <div className="custom-order-style-item">
                <h3>{t('customOrder.style2.title')}</h3>
                <p>{t('customOrder.style2.description')}</p>
              </div>
              <div className="custom-order-style-item">
                <h3>{t('customOrder.style3.title')}</h3>
                <p>{t('customOrder.style3.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="custom-order-steps">
          <div className="custom-order-container">
            <h2 className="custom-order-steps-title">{t('customOrder.stepsTitle')}</h2>
            <p className="custom-order-steps-subtitle">{t('customOrder.stepsSubtitle')}</p>
            
            <div className="custom-order-steps-grid">
              <div className="custom-order-step">
                <div className="custom-order-step-number">1</div>
                <h3 className="custom-order-step-title">{t('customOrder.step1.title')}</h3>
                <p className="custom-order-step-description">
                  {t('customOrder.step1.description')}
                </p>
              </div>
              
              <div className="custom-order-step">
                <div className="custom-order-step-number">2</div>
                <h3 className="custom-order-step-title">{t('customOrder.step2.title')}</h3>
                <p className="custom-order-step-description">
                  {t('customOrder.step2.description')}
                </p>
              </div>
              
              <div className="custom-order-step">
                <div className="custom-order-step-number">3</div>
                <h3 className="custom-order-step-title">{t('customOrder.step3.title')}</h3>
                <p className="custom-order-step-description">
                  {t('customOrder.step3.description')}
                </p>
              </div>
              
              <div className="custom-order-step">
                <div className="custom-order-step-number">4</div>
                <h3 className="custom-order-step-title">{t('customOrder.step4.title')}</h3>
                <p className="custom-order-step-description">
                  {t('customOrder.step4.description')}
                </p>
              </div>
              
              <div className="custom-order-step">
                <div className="custom-order-step-number">5</div>
                <h3 className="custom-order-step-title">{t('customOrder.step5.title')}</h3>
                <p className="custom-order-step-description">
                  {t('customOrder.step5.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="custom-order-cta">
          <div className="custom-order-container">
            <h2 className="custom-order-cta-title">{t('customOrder.ctaTitle')}</h2>
            <p className="custom-order-cta-description">
              {t('customOrder.ctaDescription')}
            </p>
            <div className="custom-order-cta-buttons">
              <a 
                href="https://wa.me/6281234567890" 
                className="custom-order-cta-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('customOrder.ctaButton1')}
              </a>
              <a 
                href="tel:+6281234567890" 
                className="custom-order-cta-button secondary"
              >
                {t('customOrder.ctaButton2')}
              </a>
            </div>
            <p className="custom-order-cta-note">
              {t('customOrder.ctaNote')}
            </p>
          </div>
        </section>

        <section className="custom-order-contact">
          <div className="custom-order-container">
            <h2 className="custom-order-contact-title">{t('customOrder.contactTitle')}</h2>
            <div className="custom-order-contact-info">
              <div className="custom-order-contact-item">
                <h3>{t('customOrder.contact.address.title')}</h3>
                <p>{t('customOrder.contact.address.value')}</p>
              </div>
              <div className="custom-order-contact-item">
                <h3>{t('customOrder.contact.phone.title')}</h3>
                <p>{t('customOrder.contact.phone.value')}</p>
              </div>
              <div className="custom-order-contact-item">
                <h3>{t('customOrder.contact.email.title')}</h3>
                <p>{t('customOrder.contact.email.value')}</p>
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

export default CustomOrder