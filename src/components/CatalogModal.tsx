import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import './CatalogModal.css'
import { generateCatalog } from '../utils/catalogGenerator'
import { trackEvent } from '../utils/analytics'
import { getLanguageFromLocation, type LanguageCode } from '../utils/languageManager'

// Import multiple product images for collage
import catalogPreview1 from '../assets/Bench-corner-kursi-sudut-kursi-santai.webp'
import catalogPreview2 from '../assets/meja-industrial-mejamakan.webp'
import catalogPreview3 from '../assets/Kursi-Bar-kursi-stall-chair.webp'

interface CatalogModalProps {
  onClose?: () => void
}

const CatalogModal: React.FC<CatalogModalProps> = ({ onClose }) => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const [language, setLanguage] = useState<LanguageCode>('id')
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    whatsapp: ''
  })

  // Translations for the modal
  const translations = {
    id: {
      title: 'GRATIS DOWNLOAD KATALOG\nMANGALA LIVING 2025',
      firstName: 'Nama Depan',
      email: 'Email',
      whatsapp: 'Nomor WhatsApp',
      download: 'DOWNLOAD'
    },
    en: {
      title: 'FREE GET NEW 2025\nMANGALA LIVING CATALOG',
      firstName: 'First name',
      email: 'Email',
      whatsapp: 'WhatsApp Number',
      download: 'DOWNLOAD'
    },
    ar: {
      title: 'تحميل كتالوج مجانًا\nمانجالا ليفينج 2025',
      firstName: 'الاسم الأول',
      email: 'البريد الإلكتروني',
      whatsapp: 'رقم واتساب',
      download: 'تحميل'
    },
    zh: {
      title: '免费获取2025\n曼加拉生活目录',
      firstName: '名字',
      email: '电子邮件',
      whatsapp: 'WhatsApp号码',
      download: '下载'
    },
    ja: {
      title: '無料カタログダウンロード\nマンガラリビング2025',
      firstName: '名前',
      email: 'メールアドレス',
      whatsapp: 'WhatsApp番号',
      download: 'ダウンロード'
    },
    es: {
      title: 'DESCARGA GRATUITA DEL CATÁLOGO\nMANGALA LIVING 2025',
      firstName: 'Nombre',
      email: 'Correo electrónico',
      whatsapp: 'Número de WhatsApp',
      download: 'DESCARGAR'
    },
    fr: {
      title: 'TÉLÉCHARGEMENT GRATUIT DU CATALOGUE\nMANGALA LIVING 2025',
      firstName: 'Prénom',
      email: 'E-mail',
      whatsapp: 'Numéro WhatsApp',
      download: 'TÉLÉCHARGER'
    },
    ko: {
      title: '무료 카탈로그 다운로드\n망갈라 리빙 2025',
      firstName: '이름',
      email: '이메일',
      whatsapp: 'WhatsApp 번호',
      download: '다운로드'
    }
  }

  const t = translations[language]

  useEffect(() => {
    // Initialize modal with current page language
    const initializeModal = () => {
      // Get language from current page URL (instant, no async needed)
      const urlLang = getLanguageFromLocation(location.pathname, location.search)
      if (urlLang) {
        setLanguage(urlLang)
      } else {
        // Fallback to browser language
        const browserLang = navigator.language || navigator.languages?.[0]
        if (browserLang?.startsWith('id')) setLanguage('id')
        else if (browserLang?.startsWith('ar')) setLanguage('ar')
        else if (browserLang?.startsWith('zh')) setLanguage('zh')
        else if (browserLang?.startsWith('ja')) setLanguage('ja')
        else if (browserLang?.startsWith('es')) setLanguage('es')
        else if (browserLang?.startsWith('fr')) setLanguage('fr')
        else if (browserLang?.startsWith('ko')) setLanguage('ko')
        else setLanguage('en')
      }

      // Check if user clicked X (close button) recently (within 12 hours)
      const lastClosedTime = localStorage.getItem('catalogLastClosed')
      
      if (lastClosedTime) {
        const twelveHoursInMs = 12 * 60 * 60 * 1000 // 12 hours in milliseconds
        const timeSinceClosed = Date.now() - parseInt(lastClosedTime)
        
        // If less than 12 hours have passed since user closed, don't show the modal
        if (timeSinceClosed < twelveHoursInMs) {
          return
        }
      }

      // Check if user has downloaded catalog recently (within 3 days)
      const lastDownloadTime = localStorage.getItem('catalogLastDownload')
      
      if (lastDownloadTime) {
        const threeDaysInMs = 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
        const timeSinceDownload = Date.now() - parseInt(lastDownloadTime)
        
        // If less than 3 days have passed, don't show the modal
        if (timeSinceDownload < threeDaysInMs) {
          return
        }
      }
      
      // Check if this is the first visit
      const hasVisitedBefore = localStorage.getItem('hasVisitedMangala')
      
      let shouldShow = false
      
      if (!hasVisitedBefore) {
        // First visit = 100% show
        shouldShow = true
        localStorage.setItem('hasVisitedMangala', 'true')
      } else {
        // Return visits = 70% chance
        shouldShow = Math.random() < 0.7
      }
      
      if (shouldShow) {
        // Show modal after 2 seconds
        setTimeout(() => {
          setIsVisible(true)
        }, 2000)
      }
    }

    initializeModal()
  }, [location.pathname, location.search])

  const handleClose = () => {
    setIsVisible(false)
    
    // Store the timestamp when user closes the modal
    // This prevents the popup from showing again for 12 hours
    localStorage.setItem('catalogLastClosed', Date.now().toString())
    
    if (onClose) onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Get the button element
    const button = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement
    if (button) {
      button.disabled = true
      button.textContent = 'GENERATING...'
    }
    
    try {
      // Send form data to email API (dual functionality)
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            email: formData.email,
            whatsapp: formData.whatsapp,
            notificationType: 'catalog_download'
          }),
        })
        
        if (response.ok) {
          console.log('Form data sent to email successfully')
        } else {
          console.warn('Failed to send form data to email:', await response.text())
        }
      } catch (emailError) {
        // Don't block download if email fails
        console.error('Error sending email:', emailError)
      }
      
      // Generate the catalog
      await generateCatalog()
      
      // Track catalog download
      trackEvent.catalogDownload()
      
      // Store the download timestamp to prevent popup for 3 days
      localStorage.setItem('catalogLastDownload', Date.now().toString())
      
      // Close the modal after successful download
      handleClose()
      
    } catch (error) {
      console.error('Error generating catalog:', error)
      alert('Failed to download catalog. Please try again.')
      
      // Reset button on error
      if (button) {
        button.textContent = 'DOWNLOAD'
        button.disabled = false
      }
    }
  }

  return (
    <div 
      className={`catalog-modal-overlay ${isVisible ? 'catalog-modal-visible' : 'catalog-modal-hidden'}`}
      onClick={handleClose}
    >
      <div className="catalog-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="catalog-modal-close" onClick={handleClose} aria-label="Close catalog modal">
          <X size={24} />
        </button>

        <div className="catalog-modal-content">
          {/* Left Side - Product Collage */}
          <div className="catalog-preview">
            <div className="catalog-preview-wrapper">
              <div className="pdf-icon">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" fill="#E74C3C" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="12" y="17" fontSize="6" fill="white" textAnchor="middle" fontWeight="bold">PDF</text>
                </svg>
              </div>
              
              {/* Collage of 3 overlapping product images */}
              <div className="catalog-collage">
                <div className="catalog-year">2025</div>
                
                <div className="collage-image collage-image-1">
                  <img 
                    src={catalogPreview1} 
                    alt="Mangala Living Industrial Furniture - Corner Bench"
                    loading="lazy"
                  />
                </div>
                
                <div className="collage-image collage-image-2">
                  <img 
                    src={catalogPreview2} 
                    alt="Mangala Living Industrial Furniture - Dining Table"
                    loading="lazy"
                  />
                </div>
                
                <div className="collage-image collage-image-3">
                  <img 
                    src={catalogPreview3} 
                    alt="Mangala Living Industrial Furniture - Bar Chair"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="catalog-form-section">
            <h2 className="catalog-modal-title">
              {t.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </h2>

            <form onSubmit={handleDownload} className="catalog-form">
              <div className="form-group">
                <label htmlFor="firstName">{t.firstName}</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="whatsapp">{t.whatsapp}</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="catalog-download-btn">
                {t.download}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogModal

