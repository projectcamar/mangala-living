import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Wrench, MessageSquare } from 'lucide-react'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { STEEL_SERVICES, type SteelService } from '../data/steelServices'
import './BeyondFurnitureSection.css'

interface BeyondFurnitureSectionProps {
  isIndonesian?: boolean
  language?: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'
}

// Featured services to highlight on the homepage section
const FEATURED_SLUGS = [
  'kanopi',
  'teralis',
  'pagar-besi-minimalis',
  'pintu-pagar',
  'folding-gate',
  'railing-balkon',
  'railing-tangga',
  'tangga-besi',
  'pergola',
  'besi-tempa',
  'partisi-besi',
  'jasa-las-custom'
]

const translations = {
  id: {
    label: 'Custom Steel Works',
    title: 'Layanan Fabrikasi Besi & Baja Custom',
    desc: 'Selain memproduksi furniture industrial premium, Mangala Living juga menyediakan jasa fabrikasi besi custom dari workshop Bekasi kami — kanopi, railing, pagar, teralis, folding gate, tangga besi, dan karya logam arsitektural untuk hunian maupun komersial.',
    viewAll: 'Lihat Semua Layanan',
    ctaTitle: 'Butuh Fabrikasi Besi Custom?',
    ctaDesc: 'Konsultasi gratis & penawaran harga langsung dari workshop Bekasi.',
    waBtn: 'Konsultasi WhatsApp',
    hubBtn: 'Katalog Steel Works',
    learnMore: 'Pelajari',
  },
  en: {
    label: 'Custom Steel Works',
    title: 'Custom Steel Fabrication Services',
    desc: 'Besides manufacturing premium industrial furniture, Mangala Living also provides professional custom steel fabrication services from our Bekasi workshop — canopies, railings, gates, window grilles, folding gates, staircases, and architectural metalwork for residential and commercial projects.',
    viewAll: 'View All Services',
    ctaTitle: 'Need Custom Steel Fabrication?',
    ctaDesc: 'Free consultation & factory-direct quotes from our Bekasi workshop.',
    waBtn: 'WhatsApp Consult',
    hubBtn: 'Steel Works Hub',
    learnMore: 'Learn More',
  },
  ar: {
    label: 'أعمال الحديد المخصصة',
    title: 'خدمات تصنيع الحديد والصلب المخصصة',
    desc: 'إلى جانب تصنيع الأثاث الصناعي الفاخر، تقدم مانجالا ليفينج أيضاً خدمات تصنيع الحديد المخصصة من ورشتنا في بيكاسي — مظلات، درابزين، بوابات، شبكات حماية، وأبواب قابلة للطي.',
    viewAll: 'عرض جميع الخدمات',
    ctaTitle: 'هل تحتاج إلى تصنيع حديد مخصص؟',
    ctaDesc: 'استشارة مجانية وأسعار مباشرة من المصنع.',
    waBtn: 'استشارة عبر واتساب',
    hubBtn: 'كتالوج أعمال الصلب',
    learnMore: 'معرفة المزيد',
  },
  zh: {
    label: '定制钢铁工程',
    title: '专业定制钢铁制造服务',
    desc: '除了制造优质工业家具外，曼加拉生活还从我们在勿加泗的工作坊提供专业的定制钢铁制造服务——遮阳棚、栏杆、大门、防盗网、折叠门、钢梯和建筑金属制品。',
    viewAll: '查看所有服务',
    ctaTitle: '需要定制钢铁制造？',
    ctaDesc: '免费咨询和来自勿加泗工作坊的工厂直销报价。',
    waBtn: 'WhatsApp 咨询',
    hubBtn: '钢铁工程目录',
    learnMore: '了解更多',
  },
  ja: {
    label: 'カスタムスチールワークス',
    title: 'カスタム鉄鋼製造サービス',
    desc: 'マンガラリビングは、プレミアムインダストリアル家具の製造に加え、ブカシ工房からカスタムスチール製造サービス（キャノピー、手すり、門扉、面格子、折りたたみ門、スチール階段）を提供しています。',
    viewAll: 'すべてのサービスを見る',
    ctaTitle: 'カスタムスチール製造が必要ですか？',
    ctaDesc: '無料相談と工場直販見積もり。',
    waBtn: 'WhatsAppで相談',
    hubBtn: 'スチールワークスカタログ',
    learnMore: '詳細を見る',
  },
  es: {
    label: 'Trabajos en Acero Personalizados',
    title: 'Servicios de Fabricación de Acero Personalizado',
    desc: 'Además de fabricar muebles industriales premium, Mangala Living ofrece servicios profesionales de fabricación de acero a medida desde nuestro taller en Bekasi: doseles, barandillas, portones, rejas, puertas plegables y escaleras de acero.',
    viewAll: 'Ver Todos los Servicios',
    ctaTitle: '¿Necesita Fabricación de Acero Personalizada?',
    ctaDesc: 'Consulta gratuita y presupuestos directos de fábrica.',
    waBtn: 'Consulta por WhatsApp',
    hubBtn: 'Catálogo de Acero',
    learnMore: 'Más Información',
  },
  fr: {
    label: 'Travaux en Acier Sur Mesure',
    title: 'Services de Fabrication en Acier Sur Mesure',
    desc: 'En plus de fabriquer des meubles industriels haut de gamme, Mangala Living fournit des services professionnels de fabrication en acier sur mesure depuis notre atelier de Bekasi : auvents, garde-corps, portails, grilles, portes pliantes et escaliers.',
    viewAll: 'Voir Tous les Services',
    ctaTitle: 'Besoin d\'une Fabrication en Acier Sur Mesure ?',
    ctaDesc: 'Consultation gratuite et devis directs d\'usine.',
    waBtn: 'Consultation WhatsApp',
    hubBtn: 'Catalogue Travaux Acier',
    learnMore: 'En Savoir Plus',
  },
  ko: {
    label: '맞춤형 철제 제작',
    title: '맞춤형 철제 및 강철 제작 서비스',
    desc: '프리미엄 산업용 가구 제조 외에도 망갈라 리빙은 비카시 워크숍에서 맞춤형 철제 제작 서비스(캐노피, 난간, 대문, 창살, 접이식 문, 철제 계단)를 제공합니다.',
    viewAll: '모든 서비스 보기',
    ctaTitle: '맞춤형 철제 제작이 필요하신가요?',
    ctaDesc: '무료 상담 및 공장 직영 견적.',
    waBtn: 'WhatsApp 상담',
    hubBtn: '철제 카탈로그',
    learnMore: '자세히 보기',
  },
}

const BeyondFurnitureSection: React.FC<BeyondFurnitureSectionProps> = ({
  isIndonesian = false,
  language = 'en',
}) => {
  const langKey = language in translations ? (language as keyof typeof translations) : (isIndonesian ? 'id' : 'en')
  const t = translations[langKey]

  const featuredServices: SteelService[] = FEATURED_SLUGS.map(
    (slug) => STEEL_SERVICES.find((s) => s.slug === slug)!
  ).filter(Boolean)

  const waMessage = isIndonesian
    ? encodeURIComponent('Halo Mangala Living, saya ingin konsultasi mengenai jasa pembuatan kanopi/railing/pagar/besi custom. Bisa bantu?')
    : encodeURIComponent('Hello Mangala Living, I would like to consult about custom steel fabrication services (canopy/railing/gate/etc). Can you help?')

  return (
    <section className="beyond-section" id="custom-steel-works">
      <div className="beyond-inner">
        {/* HEADER */}
        <div className="beyond-header">
          <div>
            <span className="beyond-label">{t.label}</span>
            <h2>{t.title}</h2>
          </div>
          <Link to="/services/custom-steel-works" className="beyond-view-all">
            {t.viewAll} <ArrowRight size={16} />
          </Link>
        </div>

        <p className="beyond-desc">{t.desc}</p>

        {/* CARDS GRID */}
        <div className="beyond-grid">
          {featuredServices.map((svc) => {
            const svcT = isIndonesian ? svc.translations.id : svc.translations.en
            return (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="beyond-card"
                aria-label={svcT.name}
              >
                <span className="beyond-card-icon">{svc.icon}</span>
                <h3>{svcT.name}</h3>
                <p>{svcT.shortDesc}</p>
                <span className="beyond-card-arrow">
                  {t.learnMore} →
                </span>
              </Link>
            )
          })}
        </div>

        {/* BOTTOM CTA BAR */}
        <div className="beyond-cta">
          <div className="beyond-cta-text">
            <h4>{t.ctaTitle}</h4>
            <p>{t.ctaDesc}</p>
          </div>
          <div className="beyond-cta-buttons">
            <a
              href={`https://wa.me/6288801146881?text=${waMessage}`}
              className="beyond-btn-wa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('beyond_furniture_section')}
            >
              <MessageSquare size={16} />
              {t.waBtn}
            </a>
            <Link to="/services/custom-steel-works" className="beyond-btn-all">
              <Wrench size={16} />
              {t.hubBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeyondFurnitureSection
