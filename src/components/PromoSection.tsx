import React, { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import './PromoSection.css'

const PromoSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const currentMonth = now.getMonth()
      
      // Get last day of current month
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
      
      // Set end time to last day of month at 23:59:59
      const endTime = new Date(currentYear, currentMonth, lastDayOfMonth.getDate(), 23, 59, 59)
      
      const difference = endTime.getTime() - now.getTime()
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-content">
          <div className="promo-text">
            <h2>DAPATKAN HARGA BENGKEL LAS TERMURAH,</h2>
            <h3>PROMO HARGA MURAH HANYA SAMPAI AKHIR BULAN!!!</h3>
            <p>KONSULTASIKAN SEMUA KEBUTUHAN ANDA</p>
          </div>
          <div className="promo-button">
            {/* Countdown Timer */}
            <div className="countdown-container">
              <div className="countdown-item">
                <div className="countdown-number">{timeLeft.days}</div>
                <div className="countdown-label">Hari</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <div className="countdown-number">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="countdown-label">Jam</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <div className="countdown-number">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="countdown-label">Menit</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <div className="countdown-number">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="countdown-label">Detik</div>
              </div>
            </div>
            
            <a href="tel:+628158869459" className="btn-promo">
              <Phone size={20} />
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoSection
