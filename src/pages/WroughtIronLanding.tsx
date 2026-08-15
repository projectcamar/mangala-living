import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { Diamond, Globe, Wrench, Shield } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import heroImage from '../assets/main-hero-image.webp'
import steelframeOutdoorBarSetImage from '../assets/Steelfram-Outdoor-Bar-Set.webp'
import './WroughtIronLanding.css'

type WITranslation = {
  meta: { title: string; description: string; keywords: string }
  hero: { title: string; subtitle: string }
  intro: { title: string; paragraphs: string[] }
  capabilities: {
    title: string
    subtitle: string
    items: Array<{ icon: string; title: string; points: string[]; cta: string }>
  }
  whyChoose: {
    title: string
    items: Array<{ title: string; description: string }>
  }
  export: {
    title: string
    subtitle: string
    destinations: Array<{ flag: string; country: string; note: string }>
  }
  buyers: {
    title: string
    subtitle: string
    items: Array<{ icon: string; title: string; description: string }>
  }
  cta: { title: string; body: string; button: string }
  whatsappMessage: string
}

const TRANSLATIONS: Record<LanguageCode, WITranslation> = {
  id: {
    meta: {
      title: 'Produsen Besi Tempa & Pagar Besi Custom Indonesia | Mangala Living',
      description: 'Produsen besi tempa handcrafted dari Indonesia — pagar villa, railing, partisi, dan metalwork arsitektural custom. Melayani villa developer, arsitek, hotel, dan ekspor ke Australia, Singapura, Amerika, UAE.',
      keywords: 'pagar besi tempa indonesia, produsen besi tempa, pagar villa bali, besi tempa custom bekasi, ekspor besi tempa, railing besi tempa'
    },
    hero: {
      title: 'Besi Tempa & Pagar Besi Custom dari Indonesia',
      subtitle: 'Handcrafted oleh pengrajin berpengalaman untuk villa mewah, residensial, hotel, dan ekspor internasional. Harga langsung pabrik.'
    },
    intro: {
      title: 'Pengrajin Besi Tempa Sejak 1999',
      paragraphs: [
        'Mangala Living adalah produsen besi tempa (wrought iron) dan metalwork arsitektural berbasis di Bekasi, Indonesia. Dengan pengalaman lebih dari 25 tahun, kami mengerjakan pagar villa, railing tangga & balkon, partisi dekoratif, dan furniture besi tempa custom untuk klien residensial maupun proyek skala besar.',
        'Workshop kami di Jl. Raya Setu Cibitung menggunakan material berkualitas tinggi — besi solid, besi tempa, galvanis, dan stainless — dengan finishing powder coating outdoor-grade dan hot-dip galvanizing untuk ketahanan cuaca tropis dan ekspor internasional.',
        'Kami melayani villa developer di Bali, Lombok, dan Jawa; arsitek & desainer interior; hotel dan resort; serta importir dari Australia, Singapura, Amerika Serikat, UAE, dan UK yang mencari sumber manufaktur besi tempa handmade langsung dari Indonesia.'
      ]
    },
    capabilities: {
      title: 'Produk & Layanan Besi Tempa',
      subtitle: 'Semua dikerjakan custom sesuai desain Anda — dari sketsa hingga produk jadi siap pasang.',
      items: [
        {
          icon: '🚪',
          title: 'Pagar & Pintu Besi Tempa',
          points: [
            'Pagar besi tempa motif klasik & Eropa',
            'Pagar villa minimalis modern',
            'Pintu besi tempa motif Bali & Heritage',
            'Pagar motorized sliding & swing otomatis'
          ],
          cta: 'Konsultasi Pagar'
        },
        {
          icon: '🛡️',
          title: 'Railing & Pagar Hias',
          points: [
            'Railing tangga besi tempa ornamental',
            'Balustrade spiral dan putar',
            'Railing balkon tahan cuaca',
            'Pagar poolside & taman'
          ],
          cta: 'Konsultasi Railing'
        },
        {
          icon: '🪑',
          title: 'Furniture & Metalwork Custom',
          points: [
            'Console table & meja makan besi tempa',
            'Garden bench & kursi taman artisanal',
            'Panel dekoratif & teralis hias',
            'Restorasi bangunan heritage & replica'
          ],
          cta: 'Konsultasi Custom'
        }
      ]
    },
    whyChoose: {
      title: 'Mengapa Memilih Mangala Living?',
      items: [
        { title: 'Kualitas Handcrafted', description: '25 tahun pengalaman dengan teknik tempa tradisional dan teknologi modern. Setiap produk dikerjakan dengan presisi dan perhatian penuh pada detail.' },
        { title: 'Harga Langsung Pabrik', description: 'Tanpa perantara — semua dikerjakan di workshop kami sendiri, sehingga harga lebih kompetitif tanpa mengorbankan kualitas.' },
        { title: 'Custom Tanpa Batas', description: 'Kirim sketsa, gambar CAD, atau referensi foto Anda. Tim kami mengerjakan sesuai spec yang diminta, apapun tingkat kerumitannya.' },
        { title: 'Ekspor Internasional', description: 'Packaging ekspor standar, hot-dip galvanizing, dan koordinasi shipping ke Australia, Singapura, UAE, Amerika, dan Eropa.' }
      ]
    },
    export: {
      title: 'Ekspor ke Seluruh Dunia',
      subtitle: 'Kami melayani pengiriman internasional dengan packaging ekspor standar dan dukungan dokumen ekspor.',
      destinations: [
        { flag: '🇦🇺', country: 'Australia', note: 'Villa & custom home market' },
        { flag: '🇸🇬', country: 'Singapura', note: 'Landed house & hotel boutique' },
        { flag: '🇺🇸', country: 'Amerika Serikat', note: 'Luxury estate & driveway gate' },
        { flag: '🇦🇪', country: 'UAE & Timur Tengah', note: 'Palace & villa perimeter gate' },
        { flag: '🇬🇧', country: 'United Kingdom', note: 'Heritage & architectural restoration' },
        { flag: '🇨🇦', country: 'Kanada & NZ', note: 'Custom residential construction' }
      ]
    },
    buyers: {
      title: 'Untuk Siapa Layanan Ini?',
      subtitle: 'Kami melayani klien dari berbagai segmen — dari pemilik villa tunggal hingga developer multi-unit berskala besar.',
      items: [
        { icon: '🏰', title: 'Pemilik & Developer Villa', description: 'Pagar villa custom, railing balkon, dan layar dekoratif untuk villa di Bali, Lombok, Jakarta, dan destinasi internasional.' },
        { icon: '📐', title: 'Arsitek & Desainer', description: 'Partner fabrikasi logam B2B. Kirim gambar CAD atau sketsa desain untuk forging presisi dan finishing custom.' },
        { icon: '🏨', title: 'Hotel & Resort', description: 'Gate pintu masuk ornamental, pagar kolam renang, partisi arsitektural, dan metalwork dekoratif untuk proyek hospitality.' },
        { icon: '🌐', title: 'Importir Luar Negeri', description: 'Packaging ekspor, loading kontainer, dan dukungan pengiriman internasional untuk buyer di Australia, Singapura, Amerika, dan Eropa.' }
      ]
    },
    cta: {
      title: 'Siap Diskusi Proyek Besi Tempa Anda?',
      body: 'Kirim sketsa, gambar CAD, atau spesifikasi dimensi Anda. Tim kami menyediakan survei gratis (Jabodetabek) dan review CAD instan untuk inquiry internasional.',
      button: '📱 Chat via WhatsApp (+62 888-0114-6881)'
    },
    whatsappMessage: 'Halo Tim Mangala Living, saya berminat dengan produk besi tempa custom. Bisakah konsultasi desain dan estimasi harga?'
  },
  en: {
    meta: {
      title: 'Wrought Iron Gate Manufacturer Indonesia | Custom Villa Gates & Architectural Metalwork | Mangala Living',
      description: 'Handcrafted wrought iron gates, fences, railings, and architectural metalwork manufactured in Indonesia. Serving villa developers, architects, hotels, and export to Australia, Singapore, USA, UAE.',
      keywords: 'wrought iron gate manufacturer indonesia, custom wrought iron gates bali, indonesian wrought iron supplier, wrought iron gates singapore, architectural metalwork indonesia, villa gate manufacturer'
    },
    hero: {
      title: 'Wrought Iron Gates & Architectural Metalwork from Indonesia',
      subtitle: 'Handcrafted by master artisans for luxury villas, residences, hotels, and international export. Direct factory pricing.'
    },
    intro: {
      title: 'Master Craftsmen Since 1999',
      paragraphs: [
        'Mangala Living is a wrought iron and architectural metalwork manufacturer based in Bekasi, Indonesia. With over 25 years of experience, we produce custom villa gates, stair and balcony railings, decorative partitions, and bespoke wrought iron furniture for both residential clients and large-scale projects.',
        'Our workshop at Jl. Raya Setu Cibitung uses high-quality materials — solid iron, wrought iron, galvanized steel, and stainless — finished with outdoor-grade powder coating and hot-dip galvanizing for tropical durability and international export standards.',
        'We serve villa developers in Bali, Lombok, and Java; architects and interior designers; hotels and resorts; and overseas importers from Australia, Singapore, USA, UAE, and UK seeking handmade wrought iron directly sourced from Indonesia.'
      ]
    },
    capabilities: {
      title: 'Wrought Iron Products & Services',
      subtitle: 'Everything custom-made to your specifications — from concept sketch to installation-ready product.',
      items: [
        {
          icon: '🚪',
          title: 'Gates & Doors',
          points: [
            'Classic Victorian & European driveway gates',
            'Modern minimalist slatted iron gates',
            'Balinese heritage & ornamental villa gates',
            'Motorized automatic sliding & swing gates'
          ],
          cta: 'Inquire Gate Pricing'
        },
        {
          icon: '🛡️',
          title: 'Fences & Railings',
          points: [
            'Ornamental wrought iron stair balustrades',
            'Spiral and curved balcony railings',
            'Weather-shield outdoor fence panels',
            'Poolside & garden boundary fences'
          ],
          cta: 'Inquire Railing Pricing'
        },
        {
          icon: '🪑',
          title: 'Furniture & Custom Metalwork',
          points: [
            'Wrought iron console & dining tables',
            'Artisan garden benches & seating',
            'Decorative wall panels & window grilles',
            'Heritage building restoration & replicas'
          ],
          cta: 'Inquire Custom Project'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Mangala Living?',
      items: [
        { title: 'Handcrafted Quality', description: '25 years of experience combining traditional forging techniques with modern technology. Every product is executed with precision and meticulous attention to detail.' },
        { title: 'Direct Factory Pricing', description: 'No middlemen — everything is produced in our own workshop, ensuring competitive pricing without compromising on quality.' },
        { title: 'Fully Custom', description: 'Send us your sketches, CAD drawings, or photo references. Our team executes to your exact specification, regardless of complexity.' },
        { title: 'International Export', description: 'Export-standard packaging, hot-dip galvanizing, and shipping coordination to Australia, Singapore, UAE, USA, and Europe.' }
      ]
    },
    export: {
      title: 'Global Export & Shipping Support',
      subtitle: 'We handle international orders with export-grade packaging and full documentation support.',
      destinations: [
        { flag: '🇦🇺', country: 'Australia', note: 'High-demand villa & custom home market' },
        { flag: '🇸🇬', country: 'Singapore', note: 'Landed house & boutique hotel projects' },
        { flag: '🇺🇸', country: 'United States', note: 'Luxury estate & driveway gates' },
        { flag: '🇦🇪', country: 'UAE & Middle East', note: 'Palace & luxury villa perimeter gates' },
        { flag: '🇬🇧', country: 'United Kingdom', note: 'Heritage & architectural restoration' },
        { flag: '🇨🇦', country: 'Canada & NZ', note: 'Custom residential construction' }
      ]
    },
    buyers: {
      title: 'Who Is This For?',
      subtitle: 'We serve clients across all segments — from single villa owners to large-scale multi-unit developers.',
      items: [
        { icon: '🏰', title: 'Villa Owners & Developers', description: 'Custom luxury gates, balcony railings, and decorative screens tailored for villas in Bali, Lombok, Jakarta, and international destinations.' },
        { icon: '📐', title: 'Architects & Designers', description: 'Reliable B2B metal fabrication partner. Send us your CAD drawings or design sketches for precision forging and custom finishes.' },
        { icon: '🏨', title: 'Hotels & Resorts', description: 'Ornamental entryway gates, poolside fences, architectural partitions, and decorative wrought iron gazebos for hospitality projects.' },
        { icon: '🌐', title: 'Overseas Importers', description: 'Export packaging, container loading, and international shipping support for buyers in Australia, Singapore, USA, UAE, and Europe.' }
      ]
    },
    cta: {
      title: 'Ready to Discuss Your Wrought Iron Project?',
      body: 'Send your sketches, CAD drawings, or dimension specifications. Our engineering team provides free site surveys (Jabodetabek) and instant CAD reviews for international inquiries.',
      button: '📱 Chat via WhatsApp (+62 888-0114-6881)'
    },
    whatsappMessage: 'Hello Mangala Living Team, I am interested in custom wrought iron products. Could we discuss design and pricing?'
  },
  ar: {
    meta: {
      title: 'مصنع بوابات الحديد المطاوع الإندونيسي | أعمال المعادن المعمارية المخصصة | Mangala Living',
      description: 'بوابات وأسوار وقضبان من الحديد المطاوع المصنوعة يدوياً في إندونيسيا. نخدم مطوري الفيلات والمعماريين والفنادق مع التصدير إلى أستراليا وسنغافورة والولايات المتحدة والإمارات.',
      keywords: 'مصنع بوابات حديد مطاوع اندونيسيا, بوابات حديد مخصصة, مورد حديد مطاوع اندونيسي'
    },
    hero: {
      title: 'بوابات الحديد المطاوع وأعمال المعادن المعمارية من إندونيسيا',
      subtitle: 'مصنوعة يدوياً من قبل حرفيين متمرسين للفيلات الفاخرة والمنازل والفنادق والتصدير الدولي.'
    },
    intro: {
      title: 'حرفيون متمرسون منذ عام 1999',
      paragraphs: [
        'Mangala Living هي شركة متخصصة في تصنيع الحديد المطاوع وأعمال المعادن المعمارية، ومقرها في بيكاسي، إندونيسيا. بخبرة تمتد لأكثر من 25 عاماً، نقوم بإنتاج بوابات الفيلات والقضبان والأسوار المخصصة.',
        'نخدم مطوري الفيلات في بالي ولومبوك وجاوة، والمعماريين والمصممين الداخليين، والفنادق والمنتجعات، والمستوردين من أستراليا وسنغافورة والولايات المتحدة والإمارات والمملكة المتحدة.',
        'جميع منتجاتنا مصنوعة حسب المواصفات الخاصة بك — من الرسم التخطيطي إلى المنتج الجاهز للتركيب.'
      ]
    },
    capabilities: {
      title: 'منتجات وخدمات الحديد المطاوع',
      subtitle: 'كل شيء مصنوع حسب الطلب وفقاً لمواصفاتك.',
      items: [
        {
          icon: '🚪',
          title: 'البوابات والأبواب',
          points: ['بوابات مميزة كلاسيكية وأوروبية', 'بوابات فيلات بأنماط بالينيزية', 'بوابات انزلاقية وأوتوماتيكية', 'بوابات حديثة ومينيمالية'],
          cta: 'استفسر عن الأسعار'
        },
        {
          icon: '🛡️',
          title: 'الأسوار والقضبان',
          points: ['قضبان درج من الحديد المطاوع', 'قضبان شرفة مقاومة للطقس', 'أسوار حديقة وحمام سباحة', 'بلسترادات حلزونية'],
          cta: 'استفسر عن الأسعار'
        },
        {
          icon: '🪑',
          title: 'الأثاث والأعمال المعدنية',
          points: ['طاولات كونسول وغرف طعام', 'مقاعد حدائق حرفية', 'ألواح ديكورية وشبكات نوافذ', 'ترميم المباني التراثية'],
          cta: 'استفسر عن المشاريع'
        }
      ]
    },
    whyChoose: {
      title: 'لماذا تختار Mangala Living؟',
      items: [
        { title: 'جودة حرفية', description: '25 عاماً من الخبرة في دمج تقنيات الحدادة التقليدية مع التكنولوجيا الحديثة.' },
        { title: 'أسعار مباشرة من المصنع', description: 'بدون وسطاء — كل شيء يُنتج في ورشة العمل الخاصة بنا.' },
        { title: 'تخصيص كامل', description: 'أرسل لنا رسوماتك أو ملفات CAD وسنقوم بالتنفيذ بدقة.' },
        { title: 'تصدير دولي', description: 'تغليف بمعايير التصدير والشحن إلى أستراليا وسنغافورة والإمارات وأمريكا وأوروبا.' }
      ]
    },
    export: {
      title: 'دعم التصدير العالمي',
      subtitle: 'نتعامل مع الطلبات الدولية بتغليف درجة التصدير ودعم التوثيق الكامل.',
      destinations: [
        { flag: '🇦🇺', country: 'أستراليا', note: 'سوق الفيلات والمنازل المخصصة' },
        { flag: '🇸🇬', country: 'سنغافورة', note: 'مشاريع فنادق بوتيك' },
        { flag: '🇺🇸', country: 'الولايات المتحدة', note: 'بوابات المنازل الفاخرة' },
        { flag: '🇦🇪', country: 'الإمارات والشرق الأوسط', note: 'بوابات قصور وفيلات فاخرة' },
        { flag: '🇬🇧', country: 'المملكة المتحدة', note: 'ترميم معماري وتراثي' },
        { flag: '🇨🇦', country: 'كندا ونيوزيلندا', note: 'البناء السكني المخصص' }
      ]
    },
    buyers: {
      title: 'لمن هذه الخدمة؟',
      subtitle: 'نخدم العملاء من جميع القطاعات.',
      items: [
        { icon: '🏰', title: 'مالكو ومطورو الفيلات', description: 'بوابات فاخرة مخصصة وقضبان شرفة لفيلات في بالي ولومبوك وجاكرتا.' },
        { icon: '📐', title: 'المعماريون والمصممون', description: 'شريك تصنيع معادن B2B موثوق. أرسل رسومات CAD الخاصة بك.' },
        { icon: '🏨', title: 'الفنادق والمنتجعات', description: 'بوابات مداخل زخرفية وأسوار حمامات السباحة والتجزئة المعمارية.' },
        { icon: '🌐', title: 'المستوردون الأجانب', description: 'تغليف التصدير وتحميل الحاويات ودعم الشحن الدولي.' }
      ]
    },
    cta: {
      title: 'هل أنت مستعد لمناقشة مشروع الحديد المطاوع الخاص بك؟',
      body: 'أرسل رسوماتك أو ملفات CAD أو مواصفات الأبعاد. يوفر فريقنا مسوحات موقعية مجانية وتقييمات CAD فورية للاستفسارات الدولية.',
      button: '📱 تواصل عبر واتساب (+62 888-0114-6881)'
    },
    whatsappMessage: 'مرحباً فريق Mangala Living، أنا مهتم بمنتجات الحديد المطاوع المخصصة. هل يمكننا مناقشة التصميم والأسعار؟'
  },
  zh: {
    meta: {
      title: '印度尼西亚熟铁大门制造商 | 定制别墅大门及建筑金属工艺 | Mangala Living',
      description: '印度尼西亚手工打造的熟铁大门、围栏、栏杆及建筑金属工艺。服务别墅开发商、建筑师、酒店，并出口至澳大利亚、新加坡、美国、阿联酋。',
      keywords: '印尼熟铁大门制造商, 定制熟铁大门, 别墅大门, 熟铁出口印尼'
    },
    hero: {
      title: '来自印度尼西亚的熟铁大门与建筑金属工艺',
      subtitle: '由技艺精湛的工匠为豪华别墅、住宅、酒店和国际出口精心打造。直接工厂定价。'
    },
    intro: {
      title: '自1999年以来的工匠精神',
      paragraphs: [
        'Mangala Living是一家位于印度尼西亚勿加泗的熟铁和建筑金属工艺制造商。凭借25年以上的经验，我们生产定制别墅大门、楼梯和阳台栏杆、装饰隔断以及定制熟铁家具。',
        '我们的工厂使用高质量材料 — 实心铁、熟铁、镀锌钢和不锈钢 — 采用户外级粉末涂层和热浸镀锌，以适应热带气候和国际出口标准。',
        '我们服务于巴厘岛、龙目岛和爪哇岛的别墅开发商；建筑师和室内设计师；酒店和度假村；以及来自澳大利亚、新加坡、美国、阿联酋和英国的进口商。'
      ]
    },
    capabilities: {
      title: '熟铁产品与服务',
      subtitle: '所有产品均按您的规格定制 — 从概念草图到安装就绪产品。',
      items: [
        {
          icon: '🚪',
          title: '大门与门',
          points: ['经典维多利亚式及欧式车道门', '现代简约板条铁门', '巴厘岛传统装饰别墅门', '电动自动推拉及摆动门'],
          cta: '咨询大门价格'
        },
        {
          icon: '🛡️',
          title: '围栏与栏杆',
          points: ['装饰性熟铁楼梯栏杆', '螺旋形阳台护栏', '防风雨户外围栏', '泳池边及花园围栏'],
          cta: '咨询栏杆价格'
        },
        {
          icon: '🪑',
          title: '家具与定制金属工艺',
          points: ['熟铁控制台和餐桌', '工匠花园长凳和座椅', '装饰墙板和窗格', '历史建筑修复与复制'],
          cta: '咨询定制项目'
        }
      ]
    },
    whyChoose: {
      title: '为何选择 Mangala Living？',
      items: [
        { title: '手工品质', description: '25年经验，结合传统锻造技术与现代工艺。每件产品都以精确度和对细节的细致关注来完成。' },
        { title: '工厂直销价格', description: '无中间商 — 所有产品均在我们自己的工厂生产，确保具有竞争力的价格而不影响质量。' },
        { title: '完全定制', description: '发送您的草图、CAD图纸或照片参考。我们的团队将按照您的精确规格执行，无论复杂程度如何。' },
        { title: '国际出口', description: '出口标准包装、热浸镀锌以及到澳大利亚、新加坡、阿联酋、美国和欧洲的运输协调。' }
      ]
    },
    export: {
      title: '全球出口与运输支持',
      subtitle: '我们处理国际订单，提供出口级包装和完整文件支持。',
      destinations: [
        { flag: '🇦🇺', country: '澳大利亚', note: '别墅与定制住宅市场' },
        { flag: '🇸🇬', country: '新加坡', note: '独立屋与精品酒店项目' },
        { flag: '🇺🇸', country: '美国', note: '豪华庄园与车道门' },
        { flag: '🇦🇪', country: '阿联酋和中东', note: '宫殿与豪华别墅周界门' },
        { flag: '🇬🇧', country: '英国', note: '历史与建筑修复' },
        { flag: '🇨🇦', country: '加拿大和新西兰', note: '定制住宅建设' }
      ]
    },
    buyers: {
      title: '这适合哪些人？',
      subtitle: '我们服务于各个细分市场的客户 — 从单个别墅业主到大型多单元开发商。',
      items: [
        { icon: '🏰', title: '别墅业主和开发商', description: '为巴厘岛、龙目岛、雅加达和国际目的地的别墅定制豪华大门、阳台栏杆和装饰屏风。' },
        { icon: '📐', title: '建筑师和设计师', description: '可靠的B2B金属制造合作伙伴。发送CAD图纸或设计草图，进行精密锻造和定制饰面。' },
        { icon: '🏨', title: '酒店和度假村', description: '装饰性入口门、泳池边围栏、建筑隔断以及用于酒店项目的装饰性熟铁凉亭。' },
        { icon: '🌐', title: '海外进口商', description: '为澳大利亚、新加坡、美国、阿联酋和欧洲的买家提供出口包装、集装箱装载和国际运输支持。' }
      ]
    },
    cta: {
      title: '准备好讨论您的熟铁项目了吗？',
      body: '发送您的草图、CAD图纸或尺寸规格。我们的工程团队为雅加达地区提供免费现场勘察，并为国际询盘提供即时CAD审查。',
      button: '📱 通过WhatsApp联系我们 (+62 888-0114-6881)'
    },
    whatsappMessage: '您好，Mangala Living团队，我对定制熟铁产品感兴趣。我们可以讨论设计和价格吗？'
  },
  ja: {
    meta: {
      title: 'インドネシアの錬鉄門製造業者 | カスタムヴィラゲートと建築金属工芸 | Mangala Living',
      description: 'インドネシアで手作りされた錬鉄ゲート、フェンス、手すり、建築金属工芸。ヴィラ開発者、建築家、ホテル、オーストラリア・シンガポール・米国・UAEへの輸出対応。',
      keywords: 'インドネシア錬鉄ゲート製造業者, カスタム錬鉄ゲート, ヴィラゲート, 建築金属工芸インドネシア'
    },
    hero: {
      title: 'インドネシア産錬鉄ゲートと建築金属工芸',
      subtitle: '熟練職人が豪華別荘・住宅・ホテル・国際輸出向けに手作りしています。工場直販価格。'
    },
    intro: {
      title: '1999年から続く職人の技',
      paragraphs: [
        'Mangala Livingはインドネシアのブカシを拠点とする錬鉄・建築金属工芸メーカーです。25年以上の経験を持ち、カスタムヴィラゲート、階段・バルコニー手すり、装飾パーティション、オーダーメイド錬鉄家具を製造しています。',
        '当社のワークショップでは、高品質素材（無垢鉄、錬鉄、亜鉛メッキ鋼、ステンレス）を使用し、屋外対応粉体塗装と溶融亜鉛めっき仕上げを施しています。',
        'バリ、ロンボク、ジャワのヴィラ開発者、建築家・インテリアデザイナー、ホテル・リゾート、オーストラリア・シンガポール・米国・UAE・英国の輸入業者にサービスを提供しています。'
      ]
    },
    capabilities: {
      title: '錬鉄製品・サービス',
      subtitle: 'すべてお客様の仕様に合わせてカスタムメイド。',
      items: [
        {
          icon: '🚪',
          title: 'ゲート・ドア',
          points: ['クラシックなヴィクトリア調・ヨーロッパ風ゲート', 'モダンミニマリストスラットアイアンゲート', 'バリ伝統装飾ヴィラゲート', '電動自動スライド・スイングゲート'],
          cta: 'ゲート価格を問い合わせ'
        },
        {
          icon: '🛡️',
          title: 'フェンス・手すり',
          points: ['装飾的な錬鉄階段手すり', 'スパイラル・カーブバルコニー手すり', '耐候性屋外フェンスパネル', 'プールサイド・庭園フェンス'],
          cta: '手すり価格を問い合わせ'
        },
        {
          icon: '🪑',
          title: '家具・カスタム金属工芸',
          points: ['錬鉄コンソール・ダイニングテーブル', '職人庭園ベンチ・シーティング', '装飾ウォールパネル・窓格子', '歴史的建物の修復・レプリカ'],
          cta: 'カスタム注文を問い合わせ'
        }
      ]
    },
    whyChoose: {
      title: 'なぜMangala Livingを選ぶのか？',
      items: [
        { title: '手作りの品質', description: '25年の経験と伝統的な鍛造技術と現代技術を組み合わせています。' },
        { title: '工場直販価格', description: '中間業者なし — 自社工場で生産するため、品質を犠牲にせず競争力のある価格を実現。' },
        { title: '完全カスタム対応', description: 'スケッチ、CAD図面、写真参考を送ってください。複雑さに関わらず正確な仕様で制作します。' },
        { title: '国際輸出', description: '輸出規格梱包、溶融亜鉛めっき、オーストラリア・シンガポール・UAE・米国・欧州への配送調整。' }
      ]
    },
    export: {
      title: 'グローバル輸出・配送サポート',
      subtitle: '輸出グレードの梱包と完全な書類サポートで国際注文に対応します。',
      destinations: [
        { flag: '🇦🇺', country: 'オーストラリア', note: '別荘・カスタムホーム市場' },
        { flag: '🇸🇬', country: 'シンガポール', note: '一戸建て・ブティックホテルプロジェクト' },
        { flag: '🇺🇸', country: 'アメリカ', note: '豪邸・私道ゲート' },
        { flag: '🇦🇪', country: 'UAE・中東', note: '宮殿・豪華別荘ゲート' },
        { flag: '🇬🇧', country: 'イギリス', note: '歴史的建築修復' },
        { flag: '🇨🇦', country: 'カナダ・NZ', note: 'カスタム住宅建設' }
      ]
    },
    buyers: {
      title: 'どんな方向けですか？',
      subtitle: '個人の別荘オーナーから大規模マルチユニット開発者まで、あらゆるセグメントのクライアントにサービスを提供。',
      items: [
        { icon: '🏰', title: '別荘オーナー・開発者', description: 'バリ、ロンボク、ジャカルタ、海外の別荘向けカスタム高級ゲート、バルコニー手すり。' },
        { icon: '📐', title: '建築家・デザイナー', description: '信頼性の高いB2B金属加工パートナー。CAD図面や設計スケッチを送ってください。' },
        { icon: '🏨', title: 'ホテル・リゾート', description: '装飾的なエントランスゲート、プールサイドフェンス、建築パーティション。' },
        { icon: '🌐', title: '海外輸入業者', description: 'オーストラリア・シンガポール・米国・UAE・欧州の買い手向け輸出梱包・国際配送サポート。' }
      ]
    },
    cta: {
      title: '錬鉄プロジェクトについてご相談ください',
      body: 'スケッチ、CAD図面、寸法仕様をお送りください。エンジニアリングチームがジャボデタベック地域の無料現地調査と国際問い合わせのための即時CADレビューを提供します。',
      button: '📱 WhatsAppでお問い合わせ (+62 888-0114-6881)'
    },
    whatsappMessage: 'こんにちは、Mangala Livingチーム。カスタム錬鉄製品に興味があります。デザインと価格について相談できますか？'
  },
  es: {
    meta: {
      title: 'Fabricante de Puertas de Hierro Forjado Indonesia | Mangala Living',
      description: 'Puertas, vallas, barandillas y trabajos de metal arquitectónico de hierro forjado artesanal de Indonesia. Servimos a desarrolladores de villas, arquitectos, hoteles y exportamos a Australia, Singapur, EE.UU., EAU.',
      keywords: 'fabricante puertas hierro forjado indonesia, puertas villa personalizadas, proveedor hierro forjado indonesia'
    },
    hero: {
      title: 'Puertas de Hierro Forjado y Trabajos de Metal Arquitectónico de Indonesia',
      subtitle: 'Hechos a mano por artesanos expertos para villas de lujo, residencias, hoteles y exportación internacional.'
    },
    intro: {
      title: 'Artesanos desde 1999',
      paragraphs: [
        'Mangala Living es un fabricante de hierro forjado y trabajos de metal arquitectónico con sede en Bekasi, Indonesia. Con más de 25 años de experiencia, producimos puertas de villa personalizadas, barandillas y particiones decorativas.',
        'Nuestro taller utiliza materiales de alta calidad — hierro sólido, hierro forjado, acero galvanizado e inoxidable — terminados con pintura en polvo para exteriores y galvanizado por inmersión en caliente.',
        'Servimos a desarrolladores de villas en Bali, Lombok y Java; arquitectos y diseñadores de interiores; hoteles y resorts; e importadores de Australia, Singapur, EE.UU., EAU y Reino Unido.'
      ]
    },
    capabilities: {
      title: 'Productos y Servicios de Hierro Forjado',
      subtitle: 'Todo hecho a medida según sus especificaciones.',
      items: [
        {
          icon: '🚪',
          title: 'Puertas y Cancelas',
          points: ['Cancelas clásicas victorianas y europeas', 'Puertas modernas minimalistas', 'Puertas de villa ornamentales balinesas', 'Puertas automáticas motorizadas'],
          cta: 'Consultar precios'
        },
        {
          icon: '🛡️',
          title: 'Vallas y Barandillas',
          points: ['Barandillas ornamentales para escaleras', 'Barandillas de balcón resistentes', 'Paneles de valla para exteriores', 'Cercas de jardín y piscina'],
          cta: 'Consultar precios'
        },
        {
          icon: '🪑',
          title: 'Muebles y Metalwork Personalizado',
          points: ['Mesas consola y de comedor de hierro forjado', 'Bancos de jardín artesanales', 'Paneles decorativos y rejas', 'Restauración de edificios históricos'],
          cta: 'Consultar proyecto'
        }
      ]
    },
    whyChoose: {
      title: '¿Por Qué Elegir Mangala Living?',
      items: [
        { title: 'Calidad Artesanal', description: '25 años de experiencia combinando técnicas de forja tradicionales con tecnología moderna.' },
        { title: 'Precio Directo de Fábrica', description: 'Sin intermediarios — todo se produce en nuestro propio taller.' },
        { title: 'Totalmente Personalizado', description: 'Envíe sus bocetos, planos CAD o referencias fotográficas.' },
        { title: 'Exportación Internacional', description: 'Embalaje estándar de exportación y coordinación de envíos a Australia, Singapur, EAU, EE.UU. y Europa.' }
      ]
    },
    export: {
      title: 'Exportación Global y Soporte de Envío',
      subtitle: 'Manejamos pedidos internacionales con embalaje de grado exportación.',
      destinations: [
        { flag: '🇦🇺', country: 'Australia', note: 'Mercado de villas y casas personalizadas' },
        { flag: '🇸🇬', country: 'Singapur', note: 'Proyectos de hoteles boutique' },
        { flag: '🇺🇸', country: 'Estados Unidos', note: 'Puertas de acceso de lujo' },
        { flag: '🇦🇪', country: 'EAU y Oriente Medio', note: 'Puertas de palacio y villas de lujo' },
        { flag: '🇬🇧', country: 'Reino Unido', note: 'Restauración histórica y arquitectónica' },
        { flag: '🇨🇦', country: 'Canadá y Nueva Zelanda', note: 'Construcción residencial personalizada' }
      ]
    },
    buyers: {
      title: '¿Para Quién Es Esto?',
      subtitle: 'Servimos a clientes de todos los segmentos.',
      items: [
        { icon: '🏰', title: 'Propietarios y Desarrolladores de Villas', description: 'Puertas de lujo personalizadas para villas en Bali, Lombok, Yakarta y destinos internacionales.' },
        { icon: '📐', title: 'Arquitectos y Diseñadores', description: 'Socio confiable de fabricación de metales B2B. Envíe sus planos CAD.' },
        { icon: '🏨', title: 'Hoteles y Resorts', description: 'Puertas de entrada ornamentales, vallas de piscina y particiones arquitectónicas.' },
        { icon: '🌐', title: 'Importadores Extranjeros', description: 'Embalaje de exportación y soporte de envío internacional a Australia, Singapur, EE.UU. y Europa.' }
      ]
    },
    cta: {
      title: '¿Listo para Discutir su Proyecto de Hierro Forjado?',
      body: 'Envíe sus bocetos, planos CAD o especificaciones de dimensiones. Nuestro equipo proporciona encuestas de sitio gratuitas y revisiones CAD instantáneas para consultas internacionales.',
      button: '📱 Chat vía WhatsApp (+62 888-0114-6881)'
    },
    whatsappMessage: 'Hola equipo Mangala Living, estoy interesado en productos de hierro forjado personalizados. ¿Podemos discutir diseño y precios?'
  },
  fr: {
    meta: {
      title: 'Fabricant de Portails en Fer Forgé Indonésie | Mangala Living',
      description: 'Portails, clôtures, rampes et travaux de métal architectural en fer forgé artisanal d\'Indonésie. Au service des promoteurs de villas, architectes, hôtels, avec export vers l\'Australie, Singapour, USA, EAU.',
      keywords: 'fabricant portail fer forgé indonésie, portail villa personnalisé, fournisseur fer forgé indonésien'
    },
    hero: {
      title: 'Portails en Fer Forgé et Travaux de Métal Architectural d\'Indonésie',
      subtitle: 'Fabriqués à la main par des artisans maîtres pour villas de luxe, résidences, hôtels et export international.'
    },
    intro: {
      title: 'Artisans depuis 1999',
      paragraphs: [
        'Mangala Living est un fabricant de fer forgé et de travaux de métal architectural basé à Bekasi, Indonésie. Avec plus de 25 ans d\'expérience, nous produisons des portails de villa, des rampes et des partitions décoratives sur mesure.',
        'Notre atelier utilise des matériaux de haute qualité — fer massif, fer forgé, acier galvanisé et inoxydable — avec une finition peinture poudre extérieur et galvanisation à chaud.',
        'Nous servons les promoteurs de villas à Bali, Lombok et Java ; les architectes et designers d\'intérieur ; les hôtels et resorts ; et les importateurs d\'Australie, Singapour, USA, EAU et Royaume-Uni.'
      ]
    },
    capabilities: {
      title: 'Produits et Services en Fer Forgé',
      subtitle: 'Tout est fabriqué sur mesure selon vos spécifications.',
      items: [
        {
          icon: '🚪',
          title: 'Portails et Portes',
          points: ['Portails classiques victoriens et européens', 'Portails minimalistes modernes', 'Portails de villa ornementaux balinais', 'Portails automatiques motorisés'],
          cta: 'Demander les prix'
        },
        {
          icon: '🛡️',
          title: 'Clôtures et Rampes',
          points: ['Rampes d\'escalier ornementales en fer forgé', 'Rampes de balcon résistantes aux intempéries', 'Panneaux de clôture extérieure', 'Clôtures de piscine et jardin'],
          cta: 'Demander les prix'
        },
        {
          icon: '🪑',
          title: 'Mobilier et Travaux Métalliques',
          points: ['Tables console et de salle à manger en fer forgé', 'Bancs de jardin artisanaux', 'Panneaux décoratifs et grilles', 'Restauration de bâtiments historiques'],
          cta: 'Demander un projet'
        }
      ]
    },
    whyChoose: {
      title: 'Pourquoi Choisir Mangala Living ?',
      items: [
        { title: 'Qualité Artisanale', description: '25 ans d\'expérience combinant des techniques de forge traditionnelles avec la technologie moderne.' },
        { title: 'Prix Directement de l\'Usine', description: 'Sans intermédiaires — tout est produit dans notre propre atelier.' },
        { title: 'Entièrement Personnalisé', description: 'Envoyez vos esquisses, plans CAO ou références photo.' },
        { title: 'Export International', description: 'Emballage aux normes d\'exportation et coordination d\'expédition vers l\'Australie, Singapour, EAU, USA et Europe.' }
      ]
    },
    export: {
      title: 'Export Mondial et Support d\'Expédition',
      subtitle: 'Nous gérons les commandes internationales avec un emballage de qualité export.',
      destinations: [
        { flag: '🇦🇺', country: 'Australie', note: 'Marché des villas et maisons personnalisées' },
        { flag: '🇸🇬', country: 'Singapour', note: 'Projets d\'hôtels boutique' },
        { flag: '🇺🇸', country: 'États-Unis', note: 'Portails de propriétés de luxe' },
        { flag: '🇦🇪', country: 'EAU et Moyen-Orient', note: 'Portails de palais et villas de luxe' },
        { flag: '🇬🇧', country: 'Royaume-Uni', note: 'Restauration historique et architecturale' },
        { flag: '🇨🇦', country: 'Canada et NZ', note: 'Construction résidentielle personnalisée' }
      ]
    },
    buyers: {
      title: 'Pour Qui Est-ce ?',
      subtitle: 'Nous servons des clients de tous les segments.',
      items: [
        { icon: '🏰', title: 'Propriétaires et Promoteurs de Villas', description: 'Portails de luxe sur mesure pour villas à Bali, Lombok, Jakarta et destinations internationales.' },
        { icon: '📐', title: 'Architectes et Designers', description: 'Partenaire de fabrication métallique B2B fiable. Envoyez vos plans CAO.' },
        { icon: '🏨', title: 'Hôtels et Resorts', description: 'Portails d\'entrée ornementaux, clôtures de piscine et partitions architecturales.' },
        { icon: '🌐', title: 'Importateurs Étrangers', description: 'Emballage export et support d\'expédition internationale vers Australie, Singapour, USA et Europe.' }
      ]
    },
    cta: {
      title: 'Prêt à Discuter de Votre Projet en Fer Forgé ?',
      body: 'Envoyez vos esquisses, plans CAO ou spécifications dimensionnelles. Notre équipe fournit des visites gratuites du site et des examens CAO instantanés pour les demandes internationales.',
      button: '📱 Chat via WhatsApp (+62 888-0114-6881)'
    },
    whatsappMessage: 'Bonjour équipe Mangala Living, je suis intéressé par des produits en fer forgé personnalisés. Pouvons-nous discuter du design et des prix ?'
  },
  ko: {
    meta: {
      title: '인도네시아 단조철 게이트 제조업체 | 맞춤형 빌라 게이트 및 건축 금속 공예 | Mangala Living',
      description: '인도네시아에서 수제 제작된 단조철 게이트, 울타리, 난간 및 건축 금속 공예. 빌라 개발자, 건축가, 호텔에 서비스를 제공하며 호주, 싱가포르, 미국, UAE로 수출합니다.',
      keywords: '인도네시아 단조철 게이트 제조업체, 맞춤형 단조철 게이트, 빌라 게이트, 건축 금속 공예 인도네시아'
    },
    hero: {
      title: '인도네시아산 단조철 게이트 및 건축 금속 공예',
      subtitle: '숙련된 장인이 럭셔리 빌라, 주거, 호텔 및 국제 수출을 위해 수제 제작합니다.'
    },
    intro: {
      title: '1999년부터의 장인 정신',
      paragraphs: [
        'Mangala Living은 인도네시아 브카시에 본사를 둔 단조철 및 건축 금속 공예 제조업체입니다. 25년 이상의 경험을 바탕으로 맞춤형 빌라 게이트, 계단 및 발코니 난간, 장식 파티션, 맞춤형 단조철 가구를 생산합니다.',
        '당사 작업장은 고품질 재료(견고한 철, 단조철, 아연 도금 강철, 스테인리스)를 사용하며, 야외용 분체 도장 및 용융 아연 도금으로 마감합니다.',
        '발리, 롬복, 자바의 빌라 개발자; 건축가 및 인테리어 디자이너; 호텔 및 리조트; 호주, 싱가포르, 미국, UAE, 영국의 수입업자에게 서비스를 제공합니다.'
      ]
    },
    capabilities: {
      title: '단조철 제품 및 서비스',
      subtitle: '모든 제품은 귀하의 사양에 맞게 맞춤 제작됩니다.',
      items: [
        {
          icon: '🚪',
          title: '게이트 및 도어',
          points: ['클래식 빅토리안 및 유럽풍 진입로 게이트', '현대적인 미니멀리스트 슬랫 철 게이트', '발리 전통 장식 빌라 게이트', '전동 자동 슬라이딩 및 스윙 게이트'],
          cta: '게이트 가격 문의'
        },
        {
          icon: '🛡️',
          title: '펜스 및 난간',
          points: ['장식용 단조철 계단 난간', '나선형 발코니 난간', '내후성 야외 펜스 패널', '수영장 및 정원 경계 펜스'],
          cta: '난간 가격 문의'
        },
        {
          icon: '🪑',
          title: '가구 및 맞춤 금속 공예',
          points: ['단조철 콘솔 및 식탁', '장인 정원 벤치 및 좌석', '장식용 벽 패널 및 창문 격자', '역사적 건물 복원 및 복제'],
          cta: '맞춤 주문 문의'
        }
      ]
    },
    whyChoose: {
      title: '왜 Mangala Living을 선택해야 할까요?',
      items: [
        { title: '수제 품질', description: '전통 단조 기법과 현대 기술을 결합한 25년의 경험. 모든 제품은 정밀도와 세부 사항에 대한 세심한 주의로 완성됩니다.' },
        { title: '공장 직판 가격', description: '중간 상인 없음 — 모든 제품이 자체 작업장에서 생산되어 품질을 희생하지 않고 경쟁력 있는 가격을 보장합니다.' },
        { title: '완전 맞춤 제작', description: '스케치, CAD 도면 또는 사진 참고 자료를 보내주세요. 복잡성에 관계없이 정확한 사양으로 제작합니다.' },
        { title: '국제 수출', description: '수출 기준 포장, 용융 아연 도금, 호주, 싱가포르, UAE, 미국, 유럽으로의 운송 조정.' }
      ]
    },
    export: {
      title: '글로벌 수출 및 배송 지원',
      subtitle: '수출 등급 포장과 완전한 문서 지원으로 국제 주문을 처리합니다.',
      destinations: [
        { flag: '🇦🇺', country: '호주', note: '빌라 및 맞춤 주택 시장' },
        { flag: '🇸🇬', country: '싱가포르', note: '단독 주택 및 부티크 호텔 프로젝트' },
        { flag: '🇺🇸', country: '미국', note: '럭셔리 부동산 및 진입로 게이트' },
        { flag: '🇦🇪', country: 'UAE 및 중동', note: '궁전 및 럭셔리 빌라 경계 게이트' },
        { flag: '🇬🇧', country: '영국', note: '역사적 및 건축 복원' },
        { flag: '🇨🇦', country: '캐나다 및 뉴질랜드', note: '맞춤 주거 건설' }
      ]
    },
    buyers: {
      title: '누구를 위한 서비스인가요?',
      subtitle: '단일 빌라 소유자부터 대규모 다세대 개발자까지 모든 세그먼트의 클라이언트에게 서비스를 제공합니다.',
      items: [
        { icon: '🏰', title: '빌라 소유자 및 개발자', description: '발리, 롬복, 자카르타 및 국제 목적지의 빌라를 위한 맞춤형 럭셔리 게이트, 발코니 난간.' },
        { icon: '📐', title: '건축가 및 디자이너', description: '신뢰할 수 있는 B2B 금속 제조 파트너. CAD 도면이나 디자인 스케치를 보내주세요.' },
        { icon: '🏨', title: '호텔 및 리조트', description: '장식용 입구 게이트, 수영장 펜스, 건축 파티션 및 단조철 가제보.' },
        { icon: '🌐', title: '해외 수입업자', description: '호주, 싱가포르, 미국, UAE, 유럽 구매자를 위한 수출 포장, 컨테이너 적재, 국제 배송 지원.' }
      ]
    },
    cta: {
      title: '단조철 프로젝트를 논의할 준비가 되셨나요?',
      body: '스케치, CAD 도면 또는 치수 사양을 보내주세요. 엔지니어링 팀이 자보데타벡 지역에 대한 무료 현장 조사와 국제 문의에 대한 즉각적인 CAD 검토를 제공합니다.',
      button: '📱 WhatsApp으로 채팅 (+62 888-0114-6881)'
    },
    whatsappMessage: '안녕하세요 Mangala Living 팀, 맞춤형 단조철 제품에 관심이 있습니다. 디자인과 가격에 대해 논의할 수 있을까요?'
  }
}

export default function WroughtIronLanding() {
  const location = useLocation()
  const language = getCurrentLanguage(location.pathname, location.search)
  const isIndonesian = language === 'id'
  const t = TRANSLATIONS[language] ?? TRANSLATIONS['en']

  const handleWhatsApp = (subject?: string) => {
    const msg = subject
      ? encodeURIComponent(`${t.whatsappMessage} — ${subject}`)
      : encodeURIComponent(t.whatsappMessage)
    window.open(`https://wa.me/6288801146881?text=${msg}`, '_blank')
  }

  const iconMap: Record<number, React.ReactNode> = {
    0: <Diamond size={40} strokeWidth={1.5} />,
    1: <Globe size={40} strokeWidth={1.5} />,
    2: <Wrench size={40} strokeWidth={1.5} />,
    3: <Shield size={40} strokeWidth={1.5} />
  }

  return (
    <div className="wi-page">
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="canonical" href="https://mangala-living.com/wrought-iron" />
        <link rel="alternate" hrefLang="id" href="https://mangala-living.com/wrought-iron" />
        <link rel="alternate" hrefLang="en" href="https://mangala-living.com/wrought-iron" />
        <link rel="alternate" hrefLang="x-default" href="https://mangala-living.com/wrought-iron" />
      </Helmet>

      <AnnouncementBar isIndonesian={isIndonesian} language={language} />
      <Header isIndonesian={isIndonesian} language={language} />

      {/* Hero */}
      <section className="wi-hero">
        <div className="wi-hero-image">
          <img
            src={heroImage}
            alt="Wrought Iron Manufacturer Indonesia — Mangala Living"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="wi-hero-overlay" />
        </div>
        <div className="wi-hero-content">
          <h1 className="wi-hero-title">{t.hero.title}</h1>
          <p className="wi-hero-subtitle">{t.hero.subtitle}</p>
          <div className="wi-hero-actions">
            <button onClick={() => handleWhatsApp()} className="wi-btn-primary">
              {t.cta.button}
            </button>
          </div>
        </div>
      </section>

      {/* Intro / Message */}
      <section className="wi-intro-section">
        <div className="wi-message-container">
          <div className="wi-message-content">
            <div className="wi-message-text">
              <h2 className="wi-message-title">{t.intro.title}</h2>
              <div className="wi-message-body">
                {t.intro.paragraphs.map((p, i) => (
                  <p className="wi-message-paragraph" key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="wi-message-image-wrapper">
              <img
                src={steelframeOutdoorBarSetImage}
                alt="Wrought Iron Gate & Metalwork — Mangala Living Indonesia"
                className="wi-message-image"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="wi-capabilities-section">
        <div className="wi-section-container">
          <h2 className="wi-section-title">{t.capabilities.title}</h2>
          <p className="wi-section-subtitle">{t.capabilities.subtitle}</p>
          <div className="wi-capabilities-grid">
            {t.capabilities.items.map((item) => (
              <div className="wi-capability-card" key={item.title}>
                <div className="wi-capability-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <button onClick={() => handleWhatsApp(item.title)} className="wi-card-cta">
                  {item.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="wi-why-section">
        <div className="wi-section-container">
          <h2 className="wi-section-title">{t.whyChoose.title}</h2>
          <div className="wi-why-grid">
            {t.whyChoose.items.map((item, i) => (
              <div className="wi-why-item" key={item.title}>
                <div className="wi-why-icon">{iconMap[i]}</div>
                <h3 className="wi-why-item-title">{item.title}</h3>
                <p className="wi-why-item-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Segments */}
      <section className="wi-buyers-section">
        <div className="wi-section-container">
          <h2 className="wi-section-title">{t.buyers.title}</h2>
          <p className="wi-section-subtitle">{t.buyers.subtitle}</p>
          <div className="wi-buyers-grid">
            {t.buyers.items.map((item) => (
              <div className="wi-buyer-card" key={item.title}>
                <div className="wi-buyer-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export */}
      <section className="wi-export-section">
        <div className="wi-section-container">
          <h2 className="wi-section-title">{t.export.title}</h2>
          <p className="wi-section-subtitle">{t.export.subtitle}</p>
          <div className="wi-export-grid">
            {t.export.destinations.map((d) => (
              <div className="wi-export-card" key={d.country}>
                <span className="wi-export-flag">{d.flag}</span>
                <div>
                  <strong>{d.country}</strong>
                  <span>{d.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wi-cta-section">
        <div className="wi-cta-container">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.body}</p>
          <button onClick={() => handleWhatsApp()} className="wi-btn-primary wi-btn-large">
            {t.cta.button}
          </button>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}
