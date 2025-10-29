import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import './TermsOfService.css'

const TermsOfService: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="terms-page">
      <head>
        <title>{t('terms.title')} - {t('header.subtitle')}</title>
        <meta name="description" content={t('terms.metaDescription')} />
        <meta name="keywords" content={t('terms.metaKeywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://mangalaliving.com/terms-of-service" />
      </head>
      
      <Header />
      
      <main className="terms-main">
        <section className="terms-hero">
          <div className="terms-hero-content">
            <h1 className="terms-hero-title">{t('terms.title')}</h1>
            <p className="terms-hero-subtitle">
              {t('terms.subtitle')}
            </p>
          </div>
        </section>

        <section className="terms-content">
          <div className="terms-container">
            <div className="terms-intro">
              <h2>{t('terms.intro.title')}</h2>
              <p>{t('terms.intro.description')}</p>
            </div>

            <div className="terms-section">
              <h2>{t('terms.order.title')}</h2>
              
              <div className="terms-subsection">
                <h3>{t('terms.order.ordering.title')}</h3>
                <p>{t('terms.order.ordering.description')}</p>
              </div>
              
              <div className="terms-subsection">
                <h3>{t('terms.order.service.title')}</h3>
                <p>{t('terms.order.service.description')}</p>
              </div>
              
              <div className="terms-subsection">
                <h3>{t('terms.order.production.title')}</h3>
                <p>{t('terms.order.production.description')}</p>
              </div>
              
              <div className="terms-subsection">
                <h3>{t('terms.order.support.title')}</h3>
                <p>{t('terms.order.support.description')}</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>{t('terms.payment.title')}</h2>
              
              <div className="terms-subsection">
                <h3>{t('terms.payment.deposit.title')}</h3>
                <p>{t('terms.payment.deposit.description')}</p>
              </div>
              
              <div className="terms-subsection">
                <h3>{t('terms.payment.balance.title')}</h3>
                <p>{t('terms.payment.balance.description')}</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>{t('terms.shipping.title')}</h2>
              
              <div className="terms-shipping-grid">
                <div className="terms-shipping-item">
                  <h4>{t('terms.shipping.jabodetabek.title')}</h4>
                  <p>{t('terms.shipping.jabodetabek.duration')}</p>
                </div>
                
                <div className="terms-shipping-item">
                  <h4>{t('terms.shipping.outsideJava.title')}</h4>
                  <p>{t('terms.shipping.outsideJava.duration')}</p>
                </div>
                
                <div className="terms-shipping-item">
                  <h4>{t('terms.shipping.international.title')}</h4>
                  <p>{t('terms.shipping.international.duration')}</p>
                </div>
              </div>
              
              <div className="terms-shipping-notes">
                <p>{t('terms.shipping.note1')}</p>
                <p>{t('terms.shipping.note2')}</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>{t('terms.warranty.title')}</h2>
              
              <div className="terms-warranty-info">
                <div className="terms-warranty-duration">
                  <span>{t('terms.warranty.duration')}</span>
                </div>
                
                <div className="terms-warranty-coverage">
                  <h4>{t('terms.warranty.covered.title')}</h4>
                  <p>{t('terms.warranty.covered.description')}</p>
                </div>
                
                <div className="terms-warranty-exclusions">
                  <h4>{t('terms.warranty.notCovered.title')}</h4>
                  <p>{t('terms.warranty.notCovered.description')}</p>
                </div>
                
                <div className="terms-warranty-note">
                  <h4>{t('terms.warranty.note.title')}</h4>
                  <p>{t('terms.warranty.note.description')}</p>
                </div>
              </div>
            </div>

            <div className="terms-contact">
              <h2>{t('terms.contact.title')}</h2>
              <div className="terms-contact-info">
                <div className="terms-contact-item">
                  <h3>{t('terms.contact.address.title')}</h3>
                  <p>{t('terms.contact.address.value')}</p>
                </div>
                <div className="terms-contact-item">
                  <h3>{t('terms.contact.phone.title')}</h3>
                  <p>{t('terms.contact.phone.value')}</p>
                </div>
                <div className="terms-contact-item">
                  <h3>{t('terms.contact.email.title')}</h3>
                  <p>{t('terms.contact.email.value')}</p>
                </div>
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

export default TermsOfService