import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Bengkel Las Mandiri</h3>
            <p>
              Spesialis konstruksi baja dan aksesori rumah berkualitas tinggi 
              sejak tahun 1999. Melayani dengan profesionalisme dan kualitas terbaik.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Menu</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tentang-kami">Tentang</Link></li>
              <li><Link to="/layanan-las-bekasi">Layanan</Link></li>
              <li><Link to="/album-bengkel-las-mandiri">Katalog</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/kontak-bengkel-las-bekasi">Kontak</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Layanan</h4>
            <ul>
              <li><Link to="/layanan-las-bekasi/jasa-pembuatan-kanopi-bekasi">Kanopi</Link></li>
              <li><Link to="/layanan-las-bekasi/jasa-pembuatan-pagar-besi-bekasi">Pagar</Link></li>
              <li><Link to="/layanan-las-bekasi/jasa-pembuatan-teralis-bekasi">Tralis</Link></li>
              <li><Link to="/layanan-las-bekasi/jasa-konstruksi-baja-bekasi">Konstruksi Baja</Link></li>
              <li><Link to="/layanan-las-bekasi/jasa-pembuatan-railing-tangga-bekasi">Railing Tangga</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Kontak</h4>
            <p className="footer-contact"><a href="https://wa.me/6285212078467" target="_blank" rel="noopener noreferrer" className="contact-link">+62 852-1207-8467</a></p>
            <p className="footer-contact"><a href="mailto:info@lasbekasi.com" className="contact-link">info@lasbekasi.com</a></p>
            <p className="footer-address">Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
