import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import './AnnouncementBar.css'
import type { LanguageCode } from '../utils/languageManager'

interface AnnouncementBarProps {
  /**
   * @deprecated Use `language` prop instead. Retained for backward compatibility.
   */
  isIndonesian?: boolean
  language?: LanguageCode
}

type AnnouncementContent = {
  text: string
  cta: string
  highlight: string
  ariaLabel: string
  closeLabel: string
  closeTitle: string
}

const ANNOUNCEMENT_COPY: Record<LanguageCode, AnnouncementContent> = {
  id: {
    text: 'Wujudkan Furniture Impian Anda!',
    cta: 'Pesan Custom Order Sekarang',
    highlight: 'Gratis Konsultasi Desain',
    ariaLabel: 'Pengumuman',
    closeLabel: 'Tutup pengumuman',
    closeTitle: 'Tutup'
  },
  en: {
    text: 'Bring Your Dream Furniture to Life!',
    cta: 'Order Custom Order Now',
    highlight: 'Free Design Consultation',
    ariaLabel: 'Announcement',
    closeLabel: 'Close announcement',
    closeTitle: 'Close'
  },
  ar: {
    text: 'حقق حلمك بامتلاك الأثاث المثالي!',
    cta: 'اطلب تفصيل الأثاث الآن',
    highlight: 'استشارة تصميم مجانية',
    ariaLabel: 'إعلان',
    closeLabel: 'إغلاق الإعلان',
    closeTitle: 'إغلاق'
  },
  zh: {
    text: '打造理想中的工业风家具！',
    cta: '立即订购定制家具',
    highlight: '免费设计咨询',
    ariaLabel: '公告',
    closeLabel: '关闭公告栏',
    closeTitle: '关闭'
  },
  ja: {
    text: '理想の家具をオーダーメイドで実現！',
    cta: 'カスタムオーダーを今すぐ相談',
    highlight: 'デザイン無料相談',
    ariaLabel: 'お知らせ',
    closeLabel: 'お知らせを閉じる',
    closeTitle: '閉じる'
  },
  es: {
    text: '¡Haz realidad tus muebles soñados!',
    cta: 'Solicita tu pedido personalizado ahora',
    highlight: 'Asesoría de diseño gratuita',
    ariaLabel: 'Aviso',
    closeLabel: 'Cerrar aviso',
    closeTitle: 'Cerrar'
  },
  fr: {
    text: 'Donnez vie à vos meubles sur mesure !',
    cta: 'Commandez votre mobilier sur mesure',
    highlight: 'Consultation design offerte',
    ariaLabel: 'Annonce',
    closeLabel: 'Fermer l’annonce',
    closeTitle: 'Fermer'
  },
  ko: {
    text: '꿈꾸던 맞춤 가구를 현실로!',
    cta: '지금 맞춤 주문 상담하기',
    highlight: '무료 디자인 상담',
    ariaLabel: '공지',
    closeLabel: '공지를 닫기',
    closeTitle: '닫기'
  }
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ isIndonesian = false, language }) => {
  const [isVisible, setIsVisible] = useState(false)
  const COOKIE_NAME = 'mangala_announcement_dismissed'
  const COOKIE_EXPIRY_HOURS = 24
  const AUTO_CLOSE_DELAY = 10000 // 10 seconds

  // Check if cookie exists
  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null
    }
    return null
  }

  // Set cookie
  const setCookie = (name: string, value: string, hours: number) => {
    const date = new Date()
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000))
    const expires = `expires=${date.toUTCString()}`
    document.cookie = `${name}=${value};${expires};path=/`
  }

  // Handle close button click
  const handleClose = () => {
    setIsVisible(false)
    // Set cookie to prevent showing for 24 hours
    setCookie(COOKIE_NAME, 'true', COOKIE_EXPIRY_HOURS)
  }

  // Handle auto-close (without setting cookie)
  const handleAutoClose = () => {
    setIsVisible(false)
    // Don't set cookie - will appear again on next visit
  }

  useEffect(() => {
    // Check if announcement was dismissed
    const isDismissed = getCookie(COOKIE_NAME)
    
    if (!isDismissed) {
      // Show announcement bar
      setIsVisible(true)

      // Auto-close after 10 seconds (without setting cookie)
      const autoCloseTimer = setTimeout(() => {
        handleAutoClose()
      }, AUTO_CLOSE_DELAY)

      // Cleanup timer on unmount
      return () => {
        clearTimeout(autoCloseTimer)
      }
    }
  }, [])

  // Don't render if not visible
  if (!isVisible) return null

  const resolvedLanguage: LanguageCode = language
    ? language
    : (isIndonesian ? 'id' : 'en')
  const content = ANNOUNCEMENT_COPY[resolvedLanguage] ?? ANNOUNCEMENT_COPY.en

  return (
    <div className="announcement-bar" role="banner" aria-label={content.ariaLabel}>
      <div className="announcement-content">
        <span className="announcement-text">
          {content.text} <span className="announcement-highlight">{content.highlight}</span>
        </span>
        <Link to="/custom-order" className="announcement-cta">
          {content.cta}{' >'}
        </Link>
      </div>
      <button 
        className="announcement-close" 
        onClick={handleClose}
        aria-label={content.closeLabel}
        title={content.closeTitle}
      >
        <X size={18} />
      </button>
    </div>
  )
}

export default AnnouncementBar
