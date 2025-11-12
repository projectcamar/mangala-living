import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'
import './Footer.css'
import { trackWhatsAppClick } from '../utils/whatsappTracking'

interface FooterProps {
  isIndonesian?: boolean
  language?: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr'
}

const Footer: React.FC<FooterProps> = ({ isIndonesian = false, language = 'en' }) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email }),
      })

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: language === 'id' 
            ? 'Terima kasih telah berlangganan!' 
            : language === 'ar'
            ? 'شكراً لاشتراكك!'
            : language === 'zh'
            ? '感谢您的订阅！'
            : language === 'ja'
            ? 'ご登録ありがとうございます！'
            : language === 'es'
            ? '¡Gracias por suscribirte!'
            : language === 'fr'
            ? 'Merci de vous être abonné !'
            : 'Thank you for subscribing!' 
        })
        setFirstName('')
        setEmail('')
      } else {
        setMessage({ 
          type: 'error', 
          text: language === 'id' 
            ? 'Gagal berlangganan. Silakan coba lagi.' 
            : language === 'ar'
            ? 'فشل الاشتراك. يرجى المحاولة مرة أخرى.'
            : language === 'zh'
            ? '订阅失败。请重试。'
            : language === 'ja'
            ? '登録に失敗しました。もう一度お試しください。'
            : language === 'es'
            ? 'Suscripción fallida. Por favor, inténtalo de nuevo.'
            : language === 'fr'
            ? 'Échec de l'abonnement. Veuillez réessayer.'
            : 'Subscription failed. Please try again.' 
        })
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setMessage({ 
        type: 'error', 
        text: language === 'id' 
          ? 'Terjadi kesalahan. Silakan coba lagi.' 
          : language === 'ar'
          ? 'حدث خطأ. يرجى المحاولة مرة أخرى.'
          : language === 'zh'
          ? '发生错误。请重试。'
          : language === 'ja'
          ? 'エラーが発生しました。もう一度お試しください。'
          : language === 'es'
          ? 'Ocurrió un error. Por favor, inténtalo de nuevo.'
          : language === 'fr'
          ? 'Une erreur s'est produite. Veuillez réessayer.'
          : 'An error occurred. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
      // Clear message after 5 seconds
      setTimeout(() => setMessage(null), 5000)
    }
  }

  return (
    <footer className="footer" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="footer-logo">MANGALA</h2>
            <p className="footer-description">
              {language === 'id'
                ? "Pilihan terbaik untuk furniture industrial scandinavian premium sejak 1999. Melayani coffee shop, restoran, dan bisnis di seluruh Indonesia. Pesanan custom diterima."
                : language === 'ar'
                ? "خيارك الأفضل للأثاث الصناعي الاسكندنافي الفاخر منذ عام 1999. نخدم المقاهي والمطاعم والأعمال في جميع أنحاء إندونيسيا وجاكرتا والأسواق الدولية الرئيسية. نرحب بالطلبات المخصصة."
                : language === 'zh'
                ? "自1999年以来，您的优质工业斯堪的纳维亚家具的最佳选择。服务于印度尼西亚、雅加达和主要国际市场的咖啡店、餐厅和企业。欢迎定制订单。"
                : language === 'ja'
                ? "1999年以来、プレミアムインダストリアル・スカンジナビア家具のベストチョイス。インドネシア、ジャカルタ、主要国際市場のカフェ、レストラン、ビジネスにサービスを提供。カスタムオーダー歓迎。"
                : language === 'es'
                ? "Su mejor opción para muebles industriales escandinavos premium desde 1999. Sirviendo a cafeterías, restaurantes y negocios en Indonesia, Yakarta y principales mercados internacionales. Pedidos personalizados bienvenidos."
                : language === 'fr'
                ? "Votre meilleur choix pour des meubles industriels scandinaves premium depuis 1999. Au service des cafés, restaurants et entreprises à travers l'Indonésie, Jakarta et les principaux marchés internationaux. Commandes personnalisées bienvenues."
                : "Your best choice for premium industrial scandinavian furniture since 1999. Serving coffee shops, restaurants, and businesses across Indonesia, Jabodetabek, Jakarta, and major international markets. Custom orders welcome."
              }
            </p>
            <div className="footer-contact-info">
              <h4>{language === 'id' ? "Hubungi Kami" : language === 'ar' ? "اتصل بنا" : language === 'zh' ? "联系我们" : language === 'ja' ? "お問い合わせ" : language === 'es' ? "Contáctenos" : language === 'fr' ? "Contactez-nous" : "Contact Us"}</h4>
              <p>
                <a href="mailto:lifewithmangala@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  lifewithmangala@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="https://wa.me/+6288801146881" 
                  style={{ color: 'inherit', textDecoration: 'underline' }}
                  onClick={() => trackWhatsAppClick('footer_contact_info')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +6288801146881
                </a>
              </p>
              <div className="footer-social-icons">
                <a href="https://instagram.com/mangala_living" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com/mangalaliving" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Find Us */}
          <div className="footer-column">
            <h4>{language === 'id' ? "Temukan Kami" : language === 'ar' ? "موقعنا" : language === 'zh' ? "找到我们" : language === 'ja' ? "アクセス" : language === 'es' ? "Encuéntranos" : language === 'fr' ? "Nous Trouver" : "Find Us"}</h4>
            <div className="footer-location">
              <h5>Workshop Bekasi :</h5>
              <p>
                <a
                  href="https://maps.app.goo.gl/5Bc5ymfVtAYRPtpK7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-address-link"
                >
                  Jl. Raya Setu Cibitung - Bekasi, Telajung, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320
                </a>
              </p>
              <p className="footer-phone">
                <a 
                  href="https://wa.me/+6288801146881" 
                  style={{ color: 'inherit', textDecoration: 'underline' }}
                  onClick={() => trackWhatsAppClick('footer_workshop_address')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +6288801146881
                </a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-column">
                      <h4>{language === 'id' ? "Tautan Cepat" : language === 'ar' ? "روابط سريعة" : language === 'zh' ? "快速链接" : language === 'ja' ? "クイックリンク" : language === 'es' ? "Enlaces Rápidos" : language === 'fr' ? "Liens Rapides" : "Quick Links"}</h4>
                      <ul className="footer-links">
                        <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'ar' ? 'حول' : 'About'}</Link></li>
              <li><Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'ar' ? 'مدونة' : 'Blog'}</Link></li>
                        <li><Link to="/shipping-information" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? "Pengiriman" : language === 'ar' ? "الشحن" : "Shipping"}</Link></li>
                        <li><Link to="/contact-us" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'ar' ? 'اتصل بنا' : 'Contact Us'}</Link></li>
                        <li><Link to="/custom-order" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? "Custom Order" : language === 'ar' ? "طلب مخصص" : "Custom Order"}</Link></li>
                        <li><Link to="/partnership" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? "Kerja Sama" : language === 'ar' ? "شراكة" : "Partnership"}</Link></li>
                        <li><Link to="/terms-of-service" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? "Syarat & Ketentuan" : language === 'ar' ? "الشروط والأحكام" : "Terms of Service"}</Link></li>
                        <li><Link to="/image-license" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'id' ? "Lisensi Gambar" : language === 'ar' ? "ترخيص الصور" : "Image License"}</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="footer-column">
            <h4>{language === 'id' ? 'Kategori' : language === 'ar' ? 'الفئات' : language === 'zh' ? '类别' : language === 'ja' ? 'カテゴリー' : language === 'es' ? 'Categorías' : language === 'fr' ? 'Catégories' : 'Categories'}</h4>
            <ul className="footer-links">
              <li><Link to="/product-category/new-arrivals" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>New Arrivals</Link></li>
              <li><Link to="/product-category/lounge-seating-set" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Lounge Set</Link></li>
              <li><Link to="/product-category/industrial-sofa-bench" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Sofa Bench</Link></li>
              <li><Link to="/product-category/dining-set-collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Dining Set</Link></li>
              <li><Link to="/product-category/bar-furniture-collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Bar Set</Link></li>
              <li><Link to="/product-category/balcony-outdoor-collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Outdoor</Link></li>
              <li><Link to="/product-category/daybed-lounge-frame" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Daybed</Link></li>
              <li><Link to="/product-category/accessories-storage" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Storage</Link></li>
              <li><Link to="/product-category/table-collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Tables</Link></li>
              <li><Link to="/product-category/dining-table-collection" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Dine Table</Link></li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div className="footer-column">
            <h4>{language === 'id' ? "Berlangganan" : language === 'ar' ? "اشترك" : language === 'zh' ? "订阅" : language === 'ja' ? "登録" : language === 'es' ? "Suscríbete" : language === 'fr' ? "S'abonner" : "Subscribe"}</h4>
            <form onSubmit={handleSubscribe} className="footer-subscribe-form">
              <input
                type="text"
                placeholder={language === 'id' ? "Nama depan" : language === 'ar' ? "الاسم الأول" : language === 'zh' ? "名字" : language === 'ja' ? "名前" : language === 'es' ? "Nombre" : language === 'fr' ? "Prénom" : "First name"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                placeholder={language === 'ar' ? "البريد الإلكتروني" : language === 'zh' ? "电子邮件" : language === 'ja' ? "メールアドレス" : language === 'es' ? "Correo electrónico" : language === 'fr' ? "Email" : "Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting 
                  ? (language === 'id' ? "Mengirim..." : language === 'ar' ? "جاري الإرسال..." : language === 'zh' ? "发送中..." : language === 'ja' ? "送信中..." : language === 'es' ? "Enviando..." : language === 'fr' ? "Envoi..." : "Sending...") 
                  : (language === 'id' ? "BERLANGGANAN" : language === 'ar' ? "اشترك" : language === 'zh' ? "订阅" : language === 'ja' ? "登録" : language === 'es' ? "SUSCRIBIRSE" : language === 'fr' ? "S'ABONNER" : "SUBSCRIBE")
                }
              </button>
              {message && (
                <div className={`subscribe-message ${message.type}`}>
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright 2025 Mangala Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
