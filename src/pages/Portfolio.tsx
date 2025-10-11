import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioSection from '../components/PortfolioSection'

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
      <Header />
      <PortfolioSection />
      <Footer />
    </div>
  )
}

export default Portfolio
