import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import { Wrench, Phone, MessageSquare } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import {
  STEEL_SERVICES,
  SERVICE_CLUSTERS,
  getServicesByCluster,
} from '../data/steelServices'
import './CustomSteelWorks.css'

// ─── i18n ────────────────────────────────────────────────────────────────────
type CSWTranslation = {
  badge: string
  h1: string
  h1accent: string
  sub: string
  whatsapp: string
  viewFurniture: string
  stats: Array<{ v: string; l: string }>
  clustersTitle: string
  clustersSub: string
  processTitle: string
  processSub: string
  steps: Array<{ n: string; t: string; d: string }>
  aboutTitle: string
  aboutP1: string
  aboutP2: string
  ctaTitle: string
  ctaSub: string
  ctaWa: string
  ctaShop: string
  learnMore: string
  metaTitle: string
  metaDesc: string
}

const t: Record<LanguageCode, CSWTranslation> = {
  en: {
    badge: 'Workshop Bekasi · Since 1999',
    h1: 'Custom Steel Works',
    h1accent: 'Fabrication & Installation Services',
    sub: 'Beyond premium industrial furniture, Mangala Living provides professional custom steel fabrication services from our Bekasi workshop — canopies, railings, gates, staircases, pergolas, partitions, and full industrial metalwork for residential and commercial projects.',
    whatsapp: 'WhatsApp Consultation',
    viewFurniture: 'View Furniture Collection',
    stats: [
      { v: '25+', l: 'Years Experience' },
      { v: '1000+', l: 'Projects Completed' },
      { v: '30+', l: 'Steel Services' },
      { v: 'Free', l: 'Consultation' },
    ],
    clustersTitle: 'All Steel Fabrication Services',
    clustersSub: 'From residential canopies to industrial warehouse racks — browse our complete range of custom steel fabrication services.',
    processTitle: 'How We Work',
    processSub: 'Every project follows the same disciplined process — from measurement to handover.',
    steps: [
      { n: '1', t: 'Consultation', d: 'Free site visit or WhatsApp consult. Share requirements, dimensions, and design references.' },
      { n: '2', t: 'Design & Quote', d: 'We prepare a custom design drawing and detailed price quote for your approval.' },
      { n: '3', t: 'Fabrication', d: 'Your order is fabricated at our Bekasi workshop with quality-controlled processes.' },
      { n: '4', t: 'Installation', d: 'Our team handles delivery and professional on-site installation.' },
      { n: '5', t: 'Handover', d: 'Final inspection together with you. 1-year warranty on all fabrication work.' },
    ],
    aboutTitle: 'Custom Steel Fabrication from Bekasi for All of Indonesia',
    aboutP1: 'Mangala Living started as a steel furniture manufacturer in 1999 and has grown into a full-service steel fabrication workshop serving residential, commercial, and industrial clients across Indonesia. Our Bekasi workshop handles everything from canopy installation and custom fence fabrication to industrial racks and architectural metalwork.',
    aboutP2: 'Whether you need a minimalist steel canopy for your home, a wrought iron gate for your property, folding gates for your shopfront, or heavy-duty warehouse racks for your factory — our team has the expertise and equipment to deliver to the highest standards. All work is custom-fabricated to your exact specifications, powder-coated for durability, and installed by our own team.',
    ctaTitle: 'Ready to Start Your Project?',
    ctaSub: 'Contact us today for a free consultation and custom price quote. We serve Jakarta, Bekasi, Bogor, Tangerang, Depok, and across Indonesia.',
    ctaWa: 'WhatsApp Now',
    ctaShop: 'Browse Our Furniture',
    learnMore: 'Learn more →',
    metaTitle: 'Custom Steel Works Bekasi | Canopy, Railings, Gates, Steel Fabrication | Mangala Living',
    metaDesc: 'Professional custom steel fabrication services from Bekasi workshop. Canopy, railings, gates, folding gates, staircases, pergolas, partitions, and industrial metalwork. Free consultation.',
  },
  id: {
    badge: 'Workshop Bekasi · Sejak 1999',
    h1: 'Custom Steel Works',
    h1accent: 'Jasa Fabrikasi & Pemasangan Besi',
    sub: 'Selain furniture industrial premium, Mangala Living juga menyediakan jasa fabrikasi besi custom profesional dari workshop Bekasi kami — kanopi, railing, pagar, tangga, pergola, partisi, dan pekerjaan logam industrial lengkap untuk proyek hunian dan komersial.',
    whatsapp: 'Konsultasi via WhatsApp',
    viewFurniture: 'Lihat Koleksi Furniture',
    stats: [
      { v: '25+', l: 'Tahun Pengalaman' },
      { v: '1000+', l: 'Proyek Selesai' },
      { v: '30+', l: 'Layanan Baja' },
      { v: 'Gratis', l: 'Konsultasi' },
    ],
    clustersTitle: 'Semua Layanan Fabrikasi Besi',
    clustersSub: 'Dari kanopi hunian hingga rak gudang industrial — jelajahi rangkap lengkap jasa fabrikasi besi custom kami.',
    processTitle: 'Cara Kerja Kami',
    processSub: 'Setiap proyek mengikuti proses yang sama — dari pengukuran hingga serah terima.',
    steps: [
      { n: '1', t: 'Konsultasi', d: 'Kunjungan lokasi gratis atau konsultasi via WhatsApp. Bagikan kebutuhan, dimensi, dan referensi desain.' },
      { n: '2', t: 'Desain & Penawaran', d: 'Kami menyiapkan gambar desain custom dan penawaran harga terinci untuk persetujuan Anda.' },
      { n: '3', t: 'Fabrikasi', d: 'Pesanan Anda difabrikasi di workshop Bekasi kami dengan proses kontrol kualitas.' },
      { n: '4', t: 'Pemasangan', d: 'Tim kami menangani pengiriman dan pemasangan profesional di lokasi.' },
      { n: '5', t: 'Serah Terima', d: 'Inspeksi akhir bersama Anda. Garansi 1 tahun untuk semua pekerjaan fabrikasi.' },
    ],
    aboutTitle: 'Fabrikasi Besi Custom dari Bekasi untuk Seluruh Indonesia',
    aboutP1: 'Mangala Living dimulai sebagai manufacturer furniture besi pada tahun 1999 dan berkembang menjadi workshop fabrikasi besi full-service yang melayani klien hunian, komersial, dan industrial di seluruh Indonesia. Workshop Bekasi kami menangani segalanya mulai dari pemasangan kanopi dan fabrikasi pagar custom hingga rak industrial dan pekerjaan logam arsitektural.',
    aboutP2: 'Apakah Anda membutuhkan kanopi besi minimalis untuk rumah, pagar besi tempa untuk properti, folding gate untuk toko, atau rak gudang heavy-duty untuk pabrik — tim kami memiliki keahlian dan peralatan untuk memberikan hasil dengan standar tertinggi. Semua pekerjaan difabrikasi custom sesuai spesifikasi Anda, difinishing powder coat untuk daya tahan, dan dipasang oleh tim kami sendiri.',
    ctaTitle: 'Siap Memulai Proyek Anda?',
    ctaSub: 'Hubungi kami sekarang untuk konsultasi gratis dan penawaran harga custom. Kami melayani Jakarta, Bekasi, Bogor, Tangerang, Depok, dan seluruh Indonesia.',
    ctaWa: 'WhatsApp Sekarang',
    ctaShop: 'Lihat Furniture Kami',
    learnMore: 'Pelajari lebih →',
    metaTitle: 'Custom Steel Works Bekasi | Kanopi, Railing, Pagar, Fabrikasi Baja | Mangala Living',
    metaDesc: 'Jasa fabrikasi besi custom profesional dari workshop Bekasi. Kanopi, railing, pagar, folding gate, tangga, pergola, partisi, dan metalwork industrial. Konsultasi gratis.',
  },
  es: {
    badge: 'Taller Bekasi · Desde 1999',
    h1: 'Trabajos de Acero a Medida',
    h1accent: 'Servicios de Fabricación e Instalación',
    sub: 'Más allá de muebles industriales de primera calidad, Mangala Living ofrece servicios profesionales de fabricación de acero a medida desde nuestro taller de Bekasi: toldos, barandillas, puertas, escaleras, pérgolas, tabiques y estructuras metálicas industriales para proyectos residenciales y comerciales.',
    whatsapp: 'Consulta por WhatsApp',
    viewFurniture: 'Ver Colección de Muebles',
    stats: [
      { v: '25+', l: 'Años de Experiencia' },
      { v: '1000+', l: 'Proyectos Completados' },
      { v: '30+', l: 'Servicios de Acero' },
      { v: 'Gratis', l: 'Consulta' },
    ],
    clustersTitle: 'Todos los Servicios de Fabricación de Acero',
    clustersSub: 'Desde toldos residenciales hasta estanterías para almacenes industriales: explore nuestra gama completa de servicios de fabricación de acero a medida.',
    processTitle: 'Cómo Trabajamos',
    processSub: 'Cada proyecto sigue un proceso riguroso, desde la medición hasta la entrega final.',
    steps: [
      { n: '1', t: 'Consulta', d: 'Visita gratuita al sitio o consulta por WhatsApp. Comparta sus requisitos, dimensiones y referencias de diseño.' },
      { n: '2', t: 'Diseño y Presupuesto', d: 'Preparamos un plano de diseño personalizado y una cotización detallada para su aprobación.' },
      { n: '3', t: 'Fabricación', d: 'Su pedido se fabrica en nuestro taller de Bekasi mediante procesos con control de calidad.' },
      { n: '4', t: 'Instalación', d: 'Nuestro equipo se encarga de la entrega e instalación profesional en el sitio.' },
      { n: '5', t: 'Entrega', d: 'Inspección final junto a usted. 1 año de garantía en todos los trabajos de fabricación.' },
    ],
    aboutTitle: 'Fabricación de Acero a Medida desde Bekasi para Toda Indonesia',
    aboutP1: 'Mangala Living comenzó como fabricante de muebles de acero en 1999 y ha crecido hasta convertirse en un taller de fabricación metálica de servicio completo que atiende a clientes residenciales, comerciales e industriales en toda Indonesia.',
    aboutP2: 'Ya sea que necesite un toldo de acero minimalista para su hogar, una puerta de hierro forjado para su propiedad, puertas plegables para su negocio o estanterías de gran capacidad para su fábrica, nuestro equipo cuenta con la experiencia para ofrecer los más altos estándares.',
    ctaTitle: '¿Listo para Comenzar su Proyecto?',
    ctaSub: 'Contáctenos hoy para una consulta gratuita y cotización personalizada. Servimos a Yakarta, Bekasi, Bogor, Tangerang, Depok y toda Indonesia.',
    ctaWa: 'WhatsApp Ahora',
    ctaShop: 'Explorar Muebles',
    learnMore: 'Más información →',
    metaTitle: 'Trabajos de Acero a Medida Bekasi | Toldos, Barandillas, Puertas | Mangala Living',
    metaDesc: 'Servicios profesionales de fabricación de acero a medida en Bekasi. Toldos, barandillas, puertas, estructuras industriales. Consulta gratuita.',
  },
  zh: {
    badge: '勿加泗工厂 · 始于1999年',
    h1: '定制钢铁工程',
    h1accent: '制造与安装服务',
    sub: '除了优质工业家具外，Mangala Living 还从我们位于勿加泗的工厂提供专业的定制钢材制造服务 — 包括遮阳棚、栏杆、大门、楼梯、凉亭、隔断以及用于住宅和商业项目的全套工业金属工程。',
    whatsapp: 'WhatsApp 咨询',
    viewFurniture: '查看家具系列',
    stats: [
      { v: '25+', l: '年行业经验' },
      { v: '1000+', l: '已完成项目' },
      { v: '30+', l: '项钢材服务' },
      { v: '免费', l: '项目咨询' },
    ],
    clustersTitle: '所有钢结构制造服务',
    clustersSub: '从住宅遮阳棚到工业仓库货架 — 浏览我们完整的定制钢结构制造服务系列。',
    processTitle: '我们的工作流程',
    processSub: '每个项目都遵循严谨的流程 — 从现场测量到最终交付。',
    steps: [
      { n: '1', t: '咨询沟通', d: '免费现场勘查或 WhatsApp 咨询。分享您的需求、尺寸和设计参考。' },
      { n: '2', t: '设计与报价', d: '我们准备定制设计图纸和详细的价格报价供您确认批准。' },
      { n: '3', t: '车间制造', d: '您的订单将在我们勿加泗工厂经过质量控制流程精工制造。' },
      { n: '4', t: '现场安装', d: '我们的专业团队负责运输交付和现场安装。' },
      { n: '5', t: '竣工交付', d: '与您共同进行最终验收。所有制造工程均享有1年质保。' },
    ],
    aboutTitle: '来自勿加泗、服务印尼全境的定制钢结构工程',
    aboutP1: 'Mangala Living 始于1999年的钢制家具制造，如今已发展成为一家全服务钢结构制造工厂，服务于印尼各地的住宅、商业和工业客户。',
    aboutP2: '无论您需要家用简约钢遮阳棚、熟铁大门、店面折叠门，还是工厂重型货架 — 我们的团队都具备最高标准的专业知识和设备。',
    ctaTitle: '准备好开始您的项目了吗？',
    ctaSub: '立即联系我们获取免费咨询和定制报价。我们服务于雅加达、勿加泗、茂物、唐格朗、德波及全印尼。',
    ctaWa: '立即 WhatsApp 联系',
    ctaShop: '浏览家具产品',
    learnMore: '了解更多 →',
    metaTitle: '定制钢铁工程 勿加泗 | 遮阳棚、栏杆、大门制造 | Mangala Living',
    metaDesc: '来自勿加泗工厂的专业定制钢结构制造服务。遮阳棚、栏杆、大门、工业金属工程。免费咨询。',
  },
  ar: {
    badge: 'ورشة بيكاسي · منذ 1999',
    h1: 'أعمال الحديد المخصصة',
    h1accent: 'خدمات التصنيع والتركيب',
    sub: 'إلى جانب الأثاث الصناعي الفاخر، تقدم Mangala Living خدمات تصنيع الحديد المخصصة من ورشتنا في بيكاسي — المظلات، القضبان، البوابات، السلالم، المظلات الخشبية، الفواصل والأعمال المعدنية الصناعية.',
    whatsapp: 'استشارة عبر الواتساب',
    viewFurniture: 'عرض مجموعة الأثاث',
    stats: [
      { v: '+25', l: 'سنة خبرة' },
      { v: '+1000', l: 'مشروع مكتمل' },
      { v: '+30', l: 'خدمة حديد' },
      { v: 'مجاناً', l: 'استشارة' },
    ],
    clustersTitle: 'جميع خدمات تصنيع الحديد',
    clustersSub: 'من المظلات السكنية إلى أرفف المستودعات الصناعية — تصفح مجموعتنا الكاملة من خدمات تصنيع الحديد المخصصة.',
    processTitle: 'كيف نعمل',
    processSub: 'يتبع كل مشروع نفس العملية المنضبطة — من القياس إلى التسليم.',
    steps: [
      { n: '1', t: 'الاستشارة', d: 'زيارة موقع مجانية أو استشارة عبر الواتساب. شارك المتطلبات والأبعاد ومراجع التصميم.' },
      { n: '2', t: 'التصميم والعرص', d: 'نعد رسم تصميم مخصص وعرض سعر تفصيلي للموافقة عليها.' },
      { n: '3', t: 'التصنيع', d: 'يتم تصنيع طلبك في ورشتنا في بيكاسي وفق عمليات مراقبة الجودة.' },
      { n: '4', t: 'التركيب', d: 'يتولى فريقنا عملية التسليم والتركيب الاحترافي في الموقع.' },
      { n: '5', t: 'التسليم', d: 'الفحص النهائي معك. ضمان لمدة سنة واحدة على جميع أعمال التصنيع.' },
    ],
    aboutTitle: 'تصنيع حديد مخصص من بيكاسي لكل إندونيسيا',
    aboutP1: 'بدأت Mangala Living كمصنع أثاث حديدي في عام 1999 ونمت لتصبح ورشة تصنيع متكاملة تخدم العملاء السكنيين والتجاريين والصناعيين.',
    aboutP2: 'سواء كنت بحاجة إلى مظلة حديدية بسيطة، أو بوابة حديد مطروق، أو بوابات قابلة للطي، أو أرفف مستودعات ثقيلة — يمتلك فريقنا الخبرة والمعدات اللازمة.',
    ctaTitle: 'هل أنت مستعد لبدء مشروعك؟',
    ctaSub: 'اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص. نخدم جاكرتا وبيكاسي وبوغور وتانجيرانج وديبوك وكافة إندونيسيا.',
    ctaWa: 'تواصل واتساب الآن',
    ctaShop: 'تصفح أثاثنا',
    learnMore: 'تعرف على المزيد ←',
    metaTitle: 'أعمال حديد مخصصة بيكاسي | مظلات، درابزين، بوابات | Mangala Living',
    metaDesc: 'خدمات تصنيع حديد مخصصة احترافية من ورشة بيكاسي. مظلات، درابزين، بوابات، أعمال معدنية صناعية.',
  },
  ja: {
    badge: 'ブカシ工房 · 1999年創業',
    h1: 'カスタムスチールワークス',
    h1accent: '製造＆施工サービス',
    sub: 'Mangala Livingは、高品質なインダストリアル家具に加え、ブカシの自社工房から専門的なカスタムスチール製造サービスを提供しています。キャノピー、手すり、門扉、階段、パーゴラ、間仕切りなど、住宅および商業プロジェクトに対応します。',
    whatsapp: 'WhatsApp相談',
    viewFurniture: '家具コレクションを見る',
    stats: [
      { v: '25年+', l: '業界実績' },
      { v: '1000件+', l: '施工実績' },
      { v: '30種類+', l: 'スチールサービス' },
      { v: '無料', l: 'ご相談' },
    ],
    clustersTitle: '全スチール製造サービス',
    clustersSub: '住宅用キャノピーから産業用大型ラックまで、当社のカスタムスチール製造サービス一覧をご覧ください。',
    processTitle: '作業プロセス',
    processSub: 'すべてのプロジェクトは採寸から引き渡しまで厳格なプロセスに従って進行します。',
    steps: [
      { n: '1', t: 'ご相談', d: '無料現地調査またはWhatsApp相談。ご要望、サイズ、デザイン案をお知らせください。' },
      { n: '2', t: '設計・お見積り', d: 'カスタム設計図面とお見積り書を作成し、お客様のご確認をいただきます。' },
      { n: '3', t: '自社製造', d: 'ブカシの自社工房にて品質管理のもと製造いたします。' },
      { n: '4', t: '現地施工', d: '当社の専門チームが搬入および現地施工まで行います。' },
      { n: '5', t: 'お引き渡し', d: 'お客様立会いのもと最終検査。全施工に1年間の保証がつきます。' },
    ],
    aboutTitle: 'ブカシ発・インドネシア全域対応のカスタムスチール製造',
    aboutP1: 'Mangala Livingは1999年にスチール家具メーカーとして創業し、現在では住宅、商業、産業クライアントに対応する総合スチール工房へと成長しました。',
    aboutP2: 'シンプルなスチールキャノピーから錬鉄製の門扉、折りたたみゲート、倉庫用重量ラックまで、最高水準で制作・施工いたします。',
    ctaTitle: 'プロジェクトを始めませんか？',
    ctaSub: '無料相談とお見積りについて今すぐお問い合わせください。ジャカルタ、ブカシ、ボゴール、タンゲラン、デポックおよびインドネシア全域に対応。',
    ctaWa: '今すぐWhatsApp相談',
    ctaShop: '家具を見る',
    learnMore: '詳細を見る →',
    metaTitle: 'カスタムスチール制作 ブカシ | キャノピー、手すり、門扉 | Mangala Living',
    metaDesc: 'ブカシ工房によるカスタムスチール製造・施工。キャノピー、手すり、門扉、階段、工業金属加工。無料相談受付中。',
  },
  fr: {
    badge: 'Atelier Bekasi · Depuis 1999',
    h1: 'Travaux d\'Acier Sur Mesure',
    h1accent: 'Services de Fabrication & Installation',
    sub: 'Au-delà des meubles industriels haut de gamme, Mangala Living fournit des services professionnels de fabrication d\'acier sur mesure depuis notre atelier de Bekasi — auvents, gardes-corps, portails, escaliers, pergolas, cloisons et métallerie industrielle.',
    whatsapp: 'Consultation WhatsApp',
    viewFurniture: 'Voir la Collection de Meubles',
    stats: [
      { v: '25+', l: 'Ans d\'Expérience' },
      { v: '1000+', l: 'Projets Réalisés' },
      { v: '30+', l: 'Services d\'Acier' },
      { v: 'Gratuit', l: 'Consultation' },
    ],
    clustersTitle: 'Tous les Services de Fabrication d\'Acier',
    clustersSub: 'Des auvents résidentiels aux rayonnages industriels — découvrez notre gamme complète de services de fabrication d\'acier sur mesure.',
    processTitle: 'Notre Processus',
    processSub: 'Chaque projet suit un processus rigoureux — du métré à la livraison.',
    steps: [
      { n: '1', t: 'Consultation', d: 'Visite gratuite sur site ou consultation WhatsApp. Partagez vos exigences, dimensions et références de design.' },
      { n: '2', t: 'Design & Devis', d: 'Nous préparons un plan sur mesure et un devis détaillé pour votre validation.' },
      { n: '3', t: 'Fabrication', d: 'Votre commande est fabriquée dans notre atelier de Bekasi selon des processus contrôlés.' },
      { n: '4', t: 'Installation', d: 'Notre équipe s\'occupe de la livraison et de l\'installation professionnelle sur site.' },
      { n: '5', t: 'Livraison', d: 'Inspection finale avec vous. Garantie 1 an sur tous les travaux de fabrication.' },
    ],
    aboutTitle: 'Fabrication d\'Acier Sur Mesure depuis Bekasi pour toute l\'Indonésie',
    aboutP1: 'Mangala Living a débuté comme fabricant de meubles en acier en 1999 et s\'est développé pour devenir un atelier complet de métallerie servant des clients résidentiels, commerciaux et industriels.',
    aboutP2: 'Que vous ayez besoin d\'un auvent en acier minimaliste, d\'un portail en fer forgé, de portes accordéon ou de rayonnages industriels, notre équipe possède l\'expertise et l\'équipement requis.',
    ctaTitle: 'Prêt à Démarrer Votre Projet ?',
    ctaSub: 'Contactez-nous dès aujourd\'hui pour une consultation gratuite et un devis personnalisé. Nous servons Jakarta, Bekasi, Bogor, Tangerang, Depok et toute l\'Indonésie.',
    ctaWa: 'WhatsApp Maintenant',
    ctaShop: 'Découvrir le Mobilier',
    learnMore: 'En savoir plus →',
    metaTitle: 'Travaux d\'Acier Sur Mesure Bekasi | Auvents, Gardes-corps, Portails | Mangala Living',
    metaDesc: 'Services professionnels de fabrication d\'acier sur mesure depuis l\'atelier de Bekasi. Auvents, gardes-corps, portails, métallerie industrielle. Consultation gratuite.',
  },
  ko: {
    badge: '브카시 공방 · 1999년부터',
    h1: '맞춤형 철강 제작',
    h1accent: '제작 및 설치 서비스',
    sub: '프리미엄 산업용 가구 외에도 Mangala Living은 브카시 공방에서 전문적인 맞춤형 철강 제작 서비스를 제공합니다. 캐노피, 난간, 대문, 계단, 파고라, 파티션 및 산업용 금속 공예를 주거 및 상업 프로젝트에 제공합니다.',
    whatsapp: 'WhatsApp 상담',
    viewFurniture: '가구 컬렉션 보기',
    stats: [
      { v: '25년+', l: '풍부한 경력' },
      { v: '1000+', l: '완료된 프로젝트' },
      { v: '30+', l: '철강 서비스' },
      { v: '무료', l: '프로젝트 상담' },
    ],
    clustersTitle: '모든 철강 제작 서비스',
    clustersSub: '주거용 캐노피부터 산업용 물류 랙까지 — 맞춤형 철강 제작 서비스의 전체 라인업을 둘러보세요.',
    processTitle: '작업 프로세스',
    processSub: '모든 프로젝트는 현장 실측부터 최종 인도까지 체계적인 프로세스를 따릅니다.',
    steps: [
      { n: '1', t: '상담 및 실측', d: '무료 현장 방문 또는 WhatsApp 상담. 요구 사항, 규격 및 디자인 참고 자료를 공유해 주세요.' },
      { n: '2', t: '디자인 및 견적', d: '맞춤 도면과 상세 견적서를 작성하여 승인을 받습니다.' },
      { n: '3', t: '공방 제작', d: '브카시 공방에서 엄격한 품질 관리 하에 주문 제작됩니다.' },
      { n: '4', t: '현장 설치', d: '당사의 전문 팀이 운송 및 현장 설치를 전담합니다.' },
      { n: '5', t: '최종 인도', d: '고객님과의 최종 점검 및 검수. 모든 제작 작업에 대해 1년 보증이 제공됩니다.' },
    ],
    aboutTitle: '브카시에서 시작되어 인도네시아 전역으로 공급되는 맞춤 철강 제작',
    aboutP1: 'Mangala Living은 1999년 철제 가구 제조업체로 출발하여 인도네시아 전역의 주거, 상업 및 산업 고객을 위한 종합 철강 제작 공방으로 성장했습니다.',
    aboutP2: '주택용 미니멀 캐노피, 단조철 대문, 상가용 자바라 문, 공장용 고하중 랙 등 모든 철강 제작을 최고 수준으로 수행합니다.',
    ctaTitle: '프로젝트를 시작할 준비가 되셨나요?',
    ctaSub: '무료 상담 및 맞춤 견적 문의는 지금 바로 연락 주세요. 자카르타, 브카시, 보고르, 탱그랑, 데폭 및 인도네시아 전역을 지원합니다.',
    ctaWa: '지금 WhatsApp 문의',
    ctaShop: '가구 둘러보기',
    learnMore: '자세히 보기 →',
    metaTitle: '맞춤형 철강 제작 브카시 | 캐노피, 난간, 대문 | Mangala Living',
    metaDesc: '브카시 공방의 전문 맞춤형 철강 제작 및 설치 서비스. 캐노피, 난간, 대문, 파고라, 산업용 금속 제작. 무료 상담.',
  },
}

const CustomSteelWorks: React.FC = () => {
  const location = useLocation()
  const lang = getCurrentLanguage(location.pathname, location.search)
  const isIndonesian = lang === 'id'
  const tx = t[lang] ?? t.en

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const waMessage = isIndonesian
    ? encodeURIComponent('Halo Mangala Living, saya ingin konsultasi mengenai jasa Custom Steel Works (kanopi/railing/pagar/dll). Bisa bantu?')
    : encodeURIComponent('Hello Mangala Living, I would like to consult about your Custom Steel Works services. Can you help?')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Steel Works — Mangala Living',
    description: tx.metaDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Mangala Living',
      url: 'https://mangala-living.com',
      telephone: '+6288801146881',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Raya Setu Cibitung - Bekasi, Telajung',
        addressLocality: 'Bekasi',
        addressRegion: 'Jawa Barat',
        postalCode: '17320',
        addressCountry: 'ID',
      },
    },
    areaServed: 'Indonesia',
    serviceType: ['Steel Fabrication', 'Custom Metalwork', 'Welding Service'],
  }

  return (
    <div className="csw-page">
      <Helmet htmlAttributes={{ lang: isIndonesian ? 'id' : 'en' }}>
        <title>{tx.metaTitle}</title>
        <meta name="description" content={tx.metaDesc} />
        <meta name="keywords" content="kanopi besi bekasi, teralis jendela, pagar besi minimalis, folding gate, railing balkon, railing tangga, tangga besi, pergola besi, besi tempa, partisi besi, jasa las bekasi, rak gudang heavy duty, custom steel works, steel fabrication indonesia, fabrikasi baja bekasi" />
        <link rel="canonical" href="https://mangala-living.com/services/custom-steel-works" />
        <link rel="alternate" hrefLang="id" href="https://mangala-living.com/services/custom-steel-works" />
        <link rel="alternate" hrefLang="en" href="https://mangala-living.com/services/custom-steel-works" />
        <link rel="alternate" hrefLang="x-default" href="https://mangala-living.com/services/custom-steel-works" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={tx.metaTitle} />
        <meta property="og:description" content={tx.metaDesc} />
        <meta property="og:url" content="https://mangala-living.com/services/custom-steel-works" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <AnnouncementBar language={lang as LanguageCode} isIndonesian={isIndonesian} />
      <Header isIndonesian={isIndonesian} language={lang as LanguageCode} />

      {/* HERO */}
      <section className="csw-hero">
        <div className="csw-hero-inner">
          <div className="csw-hero-badge">
            <Wrench size={14} />
            {tx.badge}
          </div>
          <h1>
            {tx.h1}<br />
            <span>{tx.h1accent}</span>
          </h1>
          <p className="csw-hero-sub">{tx.sub}</p>
          <div className="csw-hero-ctas">
            <a
              href={`https://wa.me/6288801146881?text=${waMessage}`}
              className="csw-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('csw_hero')}
            >
              <MessageSquare size={18} />
              {tx.whatsapp}
            </a>
            <Link to="/shop" className="csw-btn-secondary">
              {tx.viewFurniture}
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="csw-stats">
        <div className="csw-stats-inner">
          {tx.stats.map((s) => (
            <div key={s.l} className="csw-stat">
              <strong>{s.v}</strong>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ALL SERVICE CLUSTERS */}
      <section className="csw-clusters">
        <div className="csw-clusters-inner">
          <div className="csw-section-header">
            <h2>{tx.clustersTitle}</h2>
            <p>{tx.clustersSub}</p>
          </div>

          {SERVICE_CLUSTERS.map((cluster) => {
            const services = getServicesByCluster(cluster.key)
            if (!services.length) return null
            const clusterLabel = cluster.label[lang] || cluster.label.en || cluster.label.id
            const clusterDesc = cluster.description[isIndonesian ? 'id' : 'en'] || cluster.description.en
            return (
              <div key={cluster.key} className="csw-cluster" id={cluster.key}>
                <div className="csw-cluster-header">
                  <div>
                    <h3>{clusterLabel}</h3>
                    <p>{clusterDesc}</p>
                  </div>
                </div>
                <div className="csw-grid">
                  {services.map((svc, idx) => {
                    const svcT = svc.translations[lang as keyof typeof svc.translations] || (isIndonesian ? svc.translations.id : svc.translations.en)
                    return (
                      <Link
                        key={svc.slug}
                        to={`/services/${svc.slug}`}
                        className="csw-card"
                        aria-label={svcT.name}
                      >
                        <span className="csw-card-num">{String(idx + 1).padStart(2, '0')}</span>
                        <h4>{svcT.name}</h4>
                        <p>{svcT.shortDesc}</p>
                        <span className="csw-card-link">{tx.learnMore}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="csw-process">
        <div className="csw-process-inner">
          <div className="csw-section-header">
            <h2>{tx.processTitle}</h2>
            <p>{tx.processSub}</p>
          </div>
          <div className="csw-process-steps">
            {tx.steps.map((step) => (
              <div key={step.n} className="csw-step">
                <div className="csw-step-num">{step.n}</div>
                <h4>{step.t}</h4>
                <p>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO TEXT */}
      <section className="csw-about">
        <div className="csw-about-inner">
          <h2>{tx.aboutTitle}</h2>
          <p>{tx.aboutP1}</p>
          <p>{tx.aboutP2}</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="csw-cta">
        <h2>{tx.ctaTitle}</h2>
        <p>{tx.ctaSub}</p>
        <div className="csw-cta-buttons">
          <a
            href={`https://wa.me/6288801146881?text=${waMessage}`}
            className="csw-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('csw_final_cta')}
          >
            <Phone size={18} />
            {tx.ctaWa}
          </a>
          <Link to="/shop" className="csw-btn-secondary">
            {tx.ctaShop}
          </Link>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} language={lang as LanguageCode} />
    </div>
  )
}

export default CustomSteelWorks
