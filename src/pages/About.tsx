import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Diamond, DollarSign, Wrench, Globe } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.jpg'
import showroomImage from '../assets/Bench-corner-kursi-sudut-kursi-santai.png'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Us - Mangala Living</title>
        <meta name="description" content="Premium industrial scandinavian furniture manufacturer since 1999. 25 years of experience serving coffee shops, restaurants, and businesses across Indonesia." />
        <meta name="keywords" content="about mangala living, industrial furniture manufacturer, scandinavian furniture bekasi, custom industrial furniture, coffee shop furniture" />
        <link rel="canonical" href="https://mangalaliving.com/about/" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-image">
          <img src={heroImage} alt="About Mangala Living" loading="eager" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
        </div>
      </section>

      {/* Message from Mangala */}
      <section className="about-message-section">
        <div className="about-message-container">
          <div className="about-message-content">
            <div className="about-message-text">
              <h2 className="about-message-title">Message from Mangala</h2>
              <div className="about-message-body">
                <p className="about-message-paragraph">
                  Since 1999, Mangala Living has been Indonesia's premier manufacturer specializing in custom industrial scandinavian furniture. With 25 years of experience, we've proudly served over 1,000 orders from businesses across Indonesia, establishing ourselves as the best choice for commercial furniture solutions.
                </p>
                <p className="about-message-paragraph">
                  Our network spans the entire Indonesian archipelago, providing highest-quality furniture solutions for coffee shops, restaurants, offices, hotels, co-working spaces, and retail establishments. Every piece is crafted with precision manufacturing techniques and attention to detail.
                </p>
                <p className="about-message-paragraph">
                  We fully accept custom requests and work closely with our clients to bring their vision to life. Whether you need industrial dining sets, bar furniture, shelving systems, or unique custom pieces, our skilled craftsmen can create exactly what your business needs.
                </p>
              </div>
            </div>
            <div className="about-message-image-wrapper">
              <img 
                src={showroomImage} 
                alt="Mangala Living Workshop" 
                className="about-message-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="showrooms-section">
        <div className="showrooms-container">
          <h2 className="showrooms-title">Our Workshop</h2>
          <p className="showrooms-intro">
            Visit our workshop in Bekasi to see our industrial scandinavian furniture collection and discuss your custom order needs:
          </p>
          
          <div className="showrooms-locations">
            <div className="showroom-location">
              <h3>Workshop Bekasi</h3>
              <p>Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320</p>
              <p className="footer-phone">+62 852-1207-8467</p>
            </div>
          </div>

          <p className="showrooms-description">
            Our workshop features a complete manufacturing facility where we create custom industrial scandinavian furniture. Our experienced team can discuss your requirements and help you find the perfect solutions for your coffee shop, restaurant, or office.
          </p>

          <div className="showrooms-buttons">
            <a 
              href="https://maps.google.com/?q=Jl.+Raya+Setu+Cibitung+Bekasi+Telajung+Cikarang+Barat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="showroom-btn"
            >
              Visit Workshop
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Mangala */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2 className="why-choose-title">Why Choose MANGALA?</h2>
          
          <div className="why-choose-grid">
            {/* Premium Quality */}
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <Diamond size={48} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-item-title">Premium Quality</h3>
              <p className="why-choose-item-description">
                25 years of experience with highest-quality manufacturing techniques and industrial-grade materials.
              </p>
            </div>

            {/* Best Value */}
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <DollarSign size={48} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-item-title">Factory Direct Pricing</h3>
              <p className="why-choose-item-description">
                We manufacture everything in-house—no middlemen, just the best prices for quality industrial furniture.
              </p>
            </div>

            {/* Custom Designs */}
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <Wrench size={48} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-item-title">Fully Customizable</h3>
              <p className="why-choose-item-description">
                We accept all custom requests. Tell us your vision and we'll bring it to reality for your business.
              </p>
            </div>

            {/* Export-Grade Standards */}
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <Globe size={48} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-item-title">Nationwide Network</h3>
              <p className="why-choose-item-description">
                Serving 1000+ businesses across Indonesia including coffee shops, restaurants, hotels, and offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About

