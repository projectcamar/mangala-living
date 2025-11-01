import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import './AnnouncementBar.css'

interface AnnouncementBarProps {
  isIndonesian?: boolean
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ isIndonesian = false }) => {
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

  const content = isIndonesian ? {
    text: 'Wujudkan Furniture Impian Anda!',
    cta: 'Pesan Custom Order Sekarang',
    highlight: 'Gratis Konsultasi Desain'
  } : {
    text: 'Bring Your Dream Furniture to Life!',
    cta: 'Order Custom Order Now',
    highlight: 'Free Design Consultation'
  }

  return (
    <div className="announcement-bar" role="banner" aria-label={isIndonesian ? "Pengumuman" : "Announcement"}>
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
        aria-label={isIndonesian ? "Tutup pengumuman" : "Close announcement"}
        title={isIndonesian ? "Tutup" : "Close"}
      >
        <X size={18} />
      </button>
    </div>
  )
}

export default AnnouncementBar
