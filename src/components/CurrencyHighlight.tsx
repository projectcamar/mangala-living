import React, { useState, useEffect } from 'react'
import { DollarSign, TrendingUp } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { getExchangeRate } from '../utils/currencyConverter'
import './CurrencyHighlight.css'

interface CurrencyHighlightProps {
  isIndonesian?: boolean
}

const CurrencyHighlight: React.FC<CurrencyHighlightProps> = ({ isIndonesian = false }) => {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const rate = await getExchangeRate()
        setExchangeRate(rate)
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error)
        // Fallback to default rate
        setExchangeRate(15000)
      } finally {
        setIsLoading(false)
      }
    }

    fetchExchangeRate()
  }, [location.pathname, isIndonesian])

  // Don't render while loading
  if (isLoading || exchangeRate === null) {
    return null
  }

  // Check URL for language prefix
  const path = location.pathname
  let currentIsIndonesian = isIndonesian

  if (path.startsWith('/id')) {
    currentIsIndonesian = true
  } else if (path.startsWith('/eng')) {
    currentIsIndonesian = false
  }

  const formattedRate = new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(exchangeRate)

  const content = currentIsIndonesian ? {
    text: 'Kurs USD:',
    rate: `1 USD = Rp ${formattedRate}`,
    icon: <DollarSign size={16} />
  } : {
    text: 'USD Rate:',
    rate: `1 USD = ${formattedRate} IDR`,
    icon: <DollarSign size={16} />
  }

  return (
    <div className="currency-highlight" role="complementary" aria-label={currentIsIndonesian ? "Kurs mata uang" : "Currency rate"}>
      <div className="currency-highlight-content">
        <div className="currency-icon">
          {content.icon}
        </div>
        <div className="currency-text">
          <span className="currency-label">{content.text}</span>
          <span className="currency-rate">{content.rate}</span>
        </div>
        <div className="currency-trend">
          <TrendingUp size={14} />
        </div>
      </div>
    </div>
  )
}

export default CurrencyHighlight