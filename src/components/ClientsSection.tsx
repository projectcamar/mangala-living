import React, { useState, useEffect } from 'react'
import './ClientsSection.css'

const ClientsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const clients = [
    {
      name: "BDS PT BINA DIANA SEJAHTERA",
      logo: "https://bengkellas.biz/assets/img/clients/client-5.png"
    },
    {
      name: "DUTA PUTRA LAND REAL ESTATE & DEVELOPER",
      logo: "https://bengkellas.biz/assets/img/clients/client-4.png"
    },
    {
      name: "MUKTI GOLD",
      logo: "https://bengkellas.biz/assets/img/clients/client-5.png"
    },
    {
      name: "MRT JAKARTA",
      logo: "https://bengkellas.biz/assets/img/clients/client-4.png"
    },
    {
      name: "MANDIRI",
      logo: "https://bengkellas.biz/assets/img/clients/client-5.png"
    },
    {
      name: "PT. WIJAYA PERDANA",
      logo: "https://bengkellas.biz/assets/img/clients/client-4.png"
    },
    {
      name: "BANK INDONESIA",
      logo: "https://bengkellas.biz/assets/img/clients/client-5.png"
    },
    {
      name: "JAKARTA PROPERTI",
      logo: "https://bengkellas.biz/assets/img/clients/client-4.png"
    }
  ]

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === clients.length - 1 ? 0 : prevSlide + 1
      )
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [clients.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="clients-section" id="klien">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Klien Kami</div>
          <h2>Klien Kami</h2>
          <p>Berbagai perusahaan dan individu yang telah mempercayai layanan kami</p>
        </div>
        
        <div className="clients-slider">
          <div className="clients-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {clients.map((client, index) => (
              <div key={index} className="client-slide">
                <div className="client-logo">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="logo-image"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="clients-dots">
            {clients.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
