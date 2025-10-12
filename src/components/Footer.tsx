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
            
            <div className="footer-social">
              <h4>Ikuti Kami</h4>
              <div className="social-links">
                <a href="https://facebook.com/lasbekasi" target="_blank" rel="noopener noreferrer external" aria-label="Facebook Bengkel Las Mandiri">
                  Facebook
                </a>
                <a href="https://instagram.com/lasbekasi" target="_blank" rel="noopener noreferrer external" aria-label="Instagram Bengkel Las Mandiri">
                  Instagram
                </a>
                <a href="https://www.youtube.com/@bengkellasmandiribekasiofficial" target="_blank" rel="noopener noreferrer external" aria-label="YouTube Bengkel Las Mandiri">
                  YouTube
                </a>
                <a href="https://www.tiktok.com/@lasbekasi" target="_blank" rel="noopener noreferrer external" aria-label="TikTok Bengkel Las Mandiri">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © 2025. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://maps.google.com/?q=Bengkel+Las+Mandiri+Bekasi" target="_blank" rel="noopener noreferrer external">Google Maps</a>
            <span>|</span>
            <a href="https://www.tokopedia.com/lasbekasi" target="_blank" rel="noopener noreferrer external">Tokopedia</a>
            <span>|</span>
            <a href="https://shopee.co.id/lasbekasi" target="_blank" rel="noopener noreferrer external">Shopee</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
