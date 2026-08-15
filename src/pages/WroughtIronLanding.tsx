import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnnouncementBar from '../components/AnnouncementBar'
import { ALL_PRODUCTS } from '../data/products'
import './WroughtIronLanding.css'

const WroughtIronLanding: React.FC = () => {
  const wroughtIronProducts = ALL_PRODUCTS.filter(p => p.categories.includes('Wrought Iron'))

  const handleWhatsAppQuote = (subject: string) => {
    const message = encodeURIComponent(`Halo Tim Mangala Living, saya berminat dengan ${subject} (Custom Wrought Iron / Export). Bisakah konsultasi desain dan estimasi harga?`)
    window.open(`https://wa.me/6288801146881?text=${message}`, '_blank')
  }

  return (
    <div className="wrought-iron-page">
      <Helmet>
        <title>Wrought Iron Gate Manufacturer Indonesia | Custom Villa Gates & Architectural Metalwork | Mangala Living</title>
        <meta name="description" content="Handcrafted wrought iron gates, fences, railings, and architectural metalwork manufactured in Indonesia. Serving villa developers, architects, hotels, and export to Australia, Singapore, USA, UAE." />
        <meta name="keywords" content="wrought iron gate manufacturer indonesia, custom wrought iron gates bali, indonesian wrought iron supplier, wrought iron gates singapore, wrought iron fence australia export, architectural metalwork indonesia, villa gate manufacturer" />
        <link rel="canonical" href="https://mangala-living.com/wrought-iron" />
      </Helmet>

      <AnnouncementBar isIndonesian={true} language="id" />
      <Header isIndonesian={true} language="id" />

      {/* Hero Section */}
      <section className="wi-hero">
        <div className="wi-container">
          <div className="wi-hero-content">
            <span className="wi-badge">Direct Factory & Export Manufacturer</span>
            <h1>Handcrafted Wrought Iron Gates & Architectural Metalwork from Indonesia</h1>
            <p>
              Custom ornamental ironwork forged by master artisans for luxury villas, residences, hotels, and international export.
              Direct-from-factory pricing with world-class powder coating, hot-dip galvanizing, and export-grade packaging.
            </p>
            <div className="wi-hero-actions">
              <button onClick={() => handleWhatsAppQuote('Besi Tempa Custom / Villa Gate')} className="wi-btn wi-btn-primary">
                💬 Request Custom Quote (WhatsApp)
              </button>
              <a href="#wi-catalog" className="wi-btn wi-btn-secondary">
                View Gate & Metalwork Collection
              </a>
            </div>
            <div className="wi-target-tags">
              <span>✈️ Export Ready: Australia • Singapore • USA • UAE • UK • NZ</span>
              <span>🏰 Custom Villa Gates • Architects & Developers B2B Sourcing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Target Buyer Segments */}
      <section className="wi-segments">
        <div className="wi-container">
          <h2 className="wi-section-title">Built for Buyers, Architects & Project Developers</h2>
          <p className="wi-section-subtitle">Whether you need a single masterpiece villa gate or recurring supply for multi-unit residential projects.</p>

          <div className="wi-grid-4">
            <div className="wi-card">
              <div className="wi-card-icon">🏰</div>
              <h3>Villa Owners & Developers</h3>
              <p>Custom luxury gates, balcony railings, and decorative screens tailored for villas in Bali, Lombok, Jakarta, and international destinations.</p>
            </div>
            <div className="wi-card">
              <div className="wi-card-icon">📐</div>
              <h3>Architects & Designers</h3>
              <p>Reliable B2B metal fabrication partner. Send us your CAD drawings or design sketches for precision forging and custom finishes.</p>
            </div>
            <div className="wi-card">
              <div className="wi-card-icon">🏨</div>
              <h3>Hotels & Resorts</h3>
              <p>Ornamental entryway gates, poolside fences, architectural partitions, and decorative wrought iron gazebos for hospitality projects.</p>
            </div>
            <div className="wi-card">
              <div className="wi-card-icon">🌐</div>
              <h3>Overseas Importers</h3>
              <p>Export packaging, container loading, and international shipping support for buyers in Australia, Singapore, USA, UAE, and Europe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories & Capabilities */}
      <section id="wi-catalog" className="wi-capabilities">
        <div className="wi-container">
          <h2 className="wi-section-title">Wrought Iron Capabilities & Product Range</h2>

          <div className="wi-grid-3">
            <div className="wi-feature-card">
              <h3>🚪 Wrought Iron Gates</h3>
              <ul>
                <li>Classic Victorian & European Driveway Gates</li>
                <li>Modern Minimalist Slatted Iron Gates</li>
                <li>Balinese Heritage & Ornamental Villa Gates</li>
                <li>Automatic Motorized Sliding & Swing Gates</li>
              </ul>
              <button onClick={() => handleWhatsAppQuote('Wrought Iron Gate')} className="wi-card-btn">
                Inquire Gate Pricing →
              </button>
            </div>

            <div className="wi-feature-card">
              <h3>🛡️ Fences & Railings</h3>
              <ul>
                <li>High-Security Ornamental Perimeter Fences</li>
                <li>Artisan Stair & Spiral Balustrades</li>
                <li>Weather-Shield Balcony Railings</li>
                <li>Poolside & Garden Boundary Fences</li>
              </ul>
              <button onClick={() => handleWhatsAppQuote('Wrought Iron Fence / Railing')} className="wi-card-btn">
                Inquire Railing Pricing →
              </button>
            </div>

            <div className="wi-feature-card">
              <h3>🪑 Furniture & Custom Metalwork</h3>
              <ul>
                <li>Wrought Iron Console & Dining Tables</li>
                <li>Artisan Garden Benches & Seating</li>
                <li>Heritage Building Restoration & Replicas</li>
                <li>Decorative Wall Panels & Window Grilles</li>
              </ul>
              <button onClick={() => handleWhatsAppQuote('Wrought Iron Furniture / Custom Work')} className="wi-card-btn">
                Inquire Custom Project →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Destinations */}
      <section className="wi-export-destinations">
        <div className="wi-container">
          <h2 className="wi-section-title">Global Export & Shipping Destination Support</h2>
          <div className="wi-flags-grid">
            <div className="wi-flag-box">🇦🇺 Australia <span>(High-Demand Villa & Custom Home Market)</span></div>
            <div className="wi-flag-box">🇸🇬 Singapore <span>(Landed House & Boutique Hotel Projects)</span></div>
            <div className="wi-flag-box">🇺🇸 United States <span>(Driveway Gates & Luxury Estate Ironwork)</span></div>
            <div className="wi-flag-box">🇦🇪 UAE & Middle East <span>(Palace & Luxury Villa Perimeter Gates)</span></div>
            <div className="wi-flag-box">🇬🇧 United Kingdom <span>(Heritage & Architectural Restoration)</span></div>
            <div className="wi-flag-box">🇨🇦 Canada & 🇳🇿 NZ <span>(Custom Residential Construction)</span></div>
          </div>
        </div>
      </section>

      {/* Catalog Items */}
      {wroughtIronProducts.length > 0 && (
        <section className="wi-products-section">
          <div className="wi-container">
            <h2 className="wi-section-title">Featured Wrought Iron Showcase</h2>
            <div className="wi-product-grid">
              {wroughtIronProducts.map((p) => (
                <div key={p.id} className="wi-product-card">
                  <img src={p.image} alt={p.name} className="wi-product-img" />
                  <div className="wi-product-info">
                    <h3>{p.name}</h3>
                    <p className="wi-price">{p.price}</p>
                    <button onClick={() => handleWhatsAppQuote(p.name)} className="wi-product-btn">
                      Konsultasi Desain & Harga
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="wi-cta">
        <div className="wi-container">
          <h2>Ready to Discuss Your Custom Wrought Iron Project?</h2>
          <p>Send your sketches, CAD drawings, or dimension specifications. Our engineering team provides free site surveys (Jabodetabek) and instant CAD reviews for international inquiries.</p>
          <button onClick={() => handleWhatsAppQuote('Konsultasi Proyek Besi Tempa')} className="wi-btn wi-btn-primary wi-btn-large">
            📱 Chat via WhatsApp (+62 888-0114-6881)
          </button>
        </div>
      </section>

      <Footer isIndonesian={true} language="id" />
    </div>
  )
}

export default WroughtIronLanding
