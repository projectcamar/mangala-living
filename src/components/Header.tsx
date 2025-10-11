import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Wrench, ChevronDown } from 'lucide-react'
import './Header.css'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <div className="logo-icon">
                <Wrench size={32} />
              </div>
              <div className="logo-text">
                <h2>Bengkel Las Mandiri</h2>
                <span>Mandiri Steel</span>
              </div>
            </Link>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/tentang-kami" className="nav-link">Tentang Kami</Link></li>
              <li className="nav-dropdown" ref={dropdownRef}>
                <button 
                  className="nav-link dropdown-toggle"
                  onClick={toggleServices}
                >
                  Layanan Las Bekasi
                  <ChevronDown size={16} />
                </button>
                    <ul className={`dropdown-menu ${isServicesOpen ? 'dropdown-open' : ''}`}>
                      <li><Link to="/layanan-las-bekasi" className="dropdown-link dropdown-main">Semua Layanan Las</Link></li>
                      <li className="dropdown-divider"></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-kanopi-bekasi" className="dropdown-link">Kanopi Minimalis</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-konstruksi-baja-bekasi" className="dropdown-link">Konstruksi Baja</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-pagar-besi-bekasi" className="dropdown-link">Pagar Besi</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-railing-tangga-bekasi" className="dropdown-link">Railing Tangga</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-bike-rack-bekasi" className="dropdown-link">Bike Rack</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-pintu-dorong-bekasi" className="dropdown-link">Pintu Dorong</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-pintu-kayu-ulin-bekasi" className="dropdown-link">Pintu Kayu Ulin</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-railing-balkon-bekasi" className="dropdown-link">Railing Balkon</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-teralis-bekasi" className="dropdown-link">Teralis</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-pintu-besi-bekasi" className="dropdown-link">Pintu Besi</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-pintu-kasa-nyamuk-bekasi" className="dropdown-link">Pintu Kasa Nyamuk</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-teralis-jendela-bekasi" className="dropdown-link">Teralis Jendela</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-teralis-pintu-bekasi" className="dropdown-link">Teralis Pintu</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-pintu-henderson-bekasi" className="dropdown-link">Pintu Henderson</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-pintu-lipat-bekasi" className="dropdown-link">Pintu Lipat</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-tangga-putar-bekasi" className="dropdown-link">Tangga Putar</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-menara-tangki-air-bekasi" className="dropdown-link">Menara Tangki Air</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-pintu-garasi-sliding-bekasi" className="dropdown-link">Pintu Garasi Sliding</Link></li>
                      <li><Link to="/layanan-las-bekasi/jasa-pembuatan-tempat-tidur-besi-bekasi" className="dropdown-link">Tempat Tidur Besi</Link></li>
                    </ul>
              </li>
              <li><Link to="/album-bengkel-las-mandiri" className="nav-link">Katalog</Link></li>
              <li><Link to="/blog" className="nav-link">Blog</Link></li>
              <li><Link to="/kontak-bengkel-las-bekasi" className="nav-link">Kontak</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/kontak-bengkel-las-bekasi" className="btn-primary">
              KONSULTASI GRATIS
            </Link>
            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
