import React, { useEffect, useState } from 'react'
import './SingaporeLanguageModal.css'
import { detectVisitorLocation } from '../utils/geolocation'
import { storeLanguage, type LanguageCode } from '../utils/languageManager'

const SG_LANG_CHOICE_KEY = 'mangala_sg_lang_choice'

const SingaporeLanguageModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let isMounted = true

    const checkAndShowModal = async () => {
      if (typeof window === 'undefined') return

      try {
        // If user already chose, don't show again
        const existingChoice = localStorage.getItem(SG_LANG_CHOICE_KEY)
        if (existingChoice) return

        const location = await detectVisitorLocation()

        // Only show for Singapore visitors
        if (!isMounted) return
        if (location.countryCode === 'SG') {
          setIsVisible(true)
        }
      } catch (error) {
        // Fail silently – no modal, no impact
        console.log('Singapore language modal detection failed', error)
      }
    }

    checkAndShowModal()

    return () => {
      isMounted = false
    }
  }, [])

  if (!isVisible) return null

  const handleChoice = (lang: LanguageCode) => {
    try {
      storeLanguage(lang)
      localStorage.setItem(SG_LANG_CHOICE_KEY, lang)
    } catch (error) {
      console.log('Failed to store Singapore language choice', error)
    }

    setIsVisible(false)

    // Reload once so the whole app picks up the new language preference
    window.location.reload()
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <div className="sg-lang-modal-overlay" onClick={handleClose}>
      <div
        className="sg-lang-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sg-lang-modal-title"
      >
        <div className="sg-lang-modal-header">
          <div className="sg-lang-badge">MANGALA EXPORT &amp; INTERNATIONAL</div>
          <h2 id="sg-lang-modal-title">Welcome Singapore buyer!</h2>
          <p className="sg-lang-subtitle">
            Welcome to Mangala Living. Please choose your preferred language for this site.
          </p>
        </div>

        <div className="sg-lang-options">
          <button
            className="sg-lang-button sg-lang-button-en"
            onClick={() => handleChoice('en')}
          >
            <span className="sg-lang-flag sg-flag-en" />
            <span className="sg-lang-label-main">English</span>
            <span className="sg-lang-label-sub">Recommended if you prefer English</span>
          </button>

          <button
            className="sg-lang-button sg-lang-button-zh"
            onClick={() => handleChoice('zh')}
          >
            <span className="sg-lang-flag sg-flag-zh" />
            <span className="sg-lang-label-main">中文 (Chinese)</span>
            <span className="sg-lang-label-sub">推荐：如果你更习惯中文</span>
          </button>
        </div>

        <p className="sg-lang-note">
          We&apos;ll remember your choice for your next visits from this device.
        </p>

        <button
          className="sg-lang-close"
          type="button"
          onClick={handleClose}
          aria-label="Close language selection"
        >
          Skip for now
        </button>
      </div>
    </div>
  )
}

export default SingaporeLanguageModal


