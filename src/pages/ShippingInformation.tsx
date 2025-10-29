import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import './ShippingInformation.css'

const ShippingInformation: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="shipping-page">
      <head>
        <title>{t('shipping.title')} - {t('header.subtitle')}</title>
        <meta name="description" content={t('shipping.metaDescription')} />
        <meta name="keywords" content={t('shipping.metaKeywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://mangalaliving.com/shipping-information" />
      </head>
      
      <Header />
      
      <main className="shipping-main">
        <section className="shipping-hero">
          <div className="shipping-hero-content">
            <h1 className="shipping-hero-title">{t('shipping.title')}</h1>
            <p className="shipping-hero-subtitle">
              {t('shipping.subtitle')}
            </p>
          </div>
        </section>

        <section className="shipping-intro">
          <div className="shipping-container">
            <div className="shipping-intro-content">
              <h2 className="shipping-main-title">{t('shipping.mainTitle')}</h2>
              <p className="shipping-main-description">
                {t('shipping.mainDescription')}
              </p>
            </div>
          </div>
        </section>

        <section className="shipping-times">
          <div className="shipping-container">
            <h2 className="shipping-times-title">{t('shipping.timesTitle')}</h2>
            <p className="shipping-times-subtitle">{t('shipping.timesSubtitle')}</p>
            
            <div className="shipping-times-grid">
              <div className="shipping-time-item">
                <h3 className="shipping-time-region">{t('shipping.time1.region')}</h3>
                <p className="shipping-time-duration">{t('shipping.time1.duration')}</p>
                <p className="shipping-time-description">{t('shipping.time1.description')}</p>
              </div>
              
              <div className="shipping-time-item">
                <h3 className="shipping-time-region">{t('shipping.time2.region')}</h3>
                <p className="shipping-time-duration">{t('shipping.time2.duration')}</p>
                <p className="shipping-time-description">{t('shipping.time2.description')}</p>
              </div>
              
              <div className="shipping-time-item">
                <h3 className="shipping-time-region">{t('shipping.time3.region')}</h3>
                <p className="shipping-time-duration">{t('shipping.time3.duration')}</p>
                <p className="shipping-time-description">{t('shipping.time3.description')}</p>
              </div>
              
              <div className="shipping-time-item">
                <h3 className="shipping-time-region">{t('shipping.time4.region')}</h3>
                <p className="shipping-time-duration">{t('shipping.time4.duration')}</p>
                <p className="shipping-time-description">{t('shipping.time4.description')}</p>
              </div>
              
              <div className="shipping-time-item">
                <h3 className="shipping-time-region">{t('shipping.time5.region')}</h3>
                <p className="shipping-time-duration">{t('shipping.time5.duration')}</p>
                <p className="shipping-time-description">{t('shipping.time5.description')}</p>
              </div>
              
              <div className="shipping-time-item">
                <h3 className="shipping-time-region">{t('shipping.time6.region')}</h3>
                <p className="shipping-time-duration">{t('shipping.time6.duration')}</p>
                <p className="shipping-time-description">{t('shipping.time6.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="shipping-container">
          <div className="shipping-container">
            <h2 className="shipping-container-title">{t('shipping.containerTitle')}</h2>
            <p className="shipping-container-subtitle">{t('shipping.containerSubtitle')}</p>
            
            <div className="shipping-container-content">
              <div className="shipping-container-item">
                <h3>{t('shipping.container1.title')}</h3>
                <p>{t('shipping.container1.description')}</p>
              </div>
              <div className="shipping-container-item">
                <h3>{t('shipping.container2.title')}</h3>
                <p>{t('shipping.container2.description')}</p>
              </div>
              <div className="shipping-container-item">
                <h3>{t('shipping.container3.title')}</h3>
                <p>{t('shipping.container3.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="shipping-pricing">
          <div className="shipping-container">
            <h2 className="shipping-pricing-title">{t('shipping.pricingTitle')}</h2>
            <p className="shipping-pricing-subtitle">{t('shipping.pricingSubtitle')}</p>
            
            <div className="shipping-pricing-content">
              <div className="shipping-pricing-item">
                <h3>{t('shipping.pricing1.title')}</h3>
                <p>{t('shipping.pricing1.description')}</p>
              </div>
              <div className="shipping-pricing-item">
                <h3>{t('shipping.pricing2.title')}</h3>
                <p>{t('shipping.pricing2.description')}</p>
              </div>
              <div className="shipping-pricing-item">
                <h3>{t('shipping.pricing3.title')}</h3>
                <p>{t('shipping.pricing3.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="shipping-responsibility">
          <div className="shipping-container">
            <h2 className="shipping-responsibility-title">{t('shipping.responsibilityTitle')}</h2>
            <p className="shipping-responsibility-subtitle">{t('shipping.responsibilitySubtitle')}</p>
            
            <div className="shipping-responsibility-content">
              <div className="shipping-responsibility-item">
                <h3>{t('shipping.responsibility1.title')}</h3>
                <p>{t('shipping.responsibility1.description')}</p>
              </div>
              <div className="shipping-responsibility-item">
                <h3>{t('shipping.responsibility2.title')}</h3>
                <p>{t('shipping.responsibility2.description')}</p>
              </div>
              <div className="shipping-responsibility-item">
                <h3>{t('shipping.responsibility3.title')}</h3>
                <p>{t('shipping.responsibility3.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="shipping-contact">
          <div className="shipping-container">
            <h2 className="shipping-contact-title">{t('shipping.contactTitle')}</h2>
            <p className="shipping-contact-subtitle">{t('shipping.contactSubtitle')}</p>
            
            <div className="shipping-contact-info">
              <div className="shipping-contact-item">
                <h3 className="shipping-contact-label">{t('shipping.contact.address.title')}</h3>
                <p>{t('shipping.contact.address.value')}</p>
              </div>
              <div className="shipping-contact-item">
                <h3 className="shipping-contact-label">{t('shipping.contact.phone.title')}</h3>
                <p>{t('shipping.contact.phone.value')}</p>
              </div>
              <div className="shipping-contact-item">
                <h3 className="shipping-contact-label">{t('shipping.contact.email.title')}</h3>
                <p>{t('shipping.contact.email.value')}</p>
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

export default ShippingInformation