// ══════════════════════════════════════════════════════════════════════════════
// MANGALA LIVING PREMIUM CATALOG GENERATOR 2025
// World-Class Industrial Furniture Catalog with Elegant Typography
// ══════════════════════════════════════════════════════════════════════════════

// Lazy load PDF dependencies to reduce initial bundle size
let jsPDF: any = null
let ALL_PRODUCTS: any = null

// Import Product type for proper typing
import type { Product } from '../data/products'

const loadPDFDependencies = async () => {
  if (!jsPDF) {
    const jsPDFModule = await import('jspdf')
    jsPDF = jsPDFModule.default
  }
  if (!ALL_PRODUCTS) {
    const productsModule = await import('../data/products')
    ALL_PRODUCTS = productsModule.ALL_PRODUCTS
  }
}

// Get language preference from localStorage
const getLanguagePreference = (): 'id' | 'en' => {
  try {
    const stored = localStorage.getItem('mangala_lang_preference')
    if (stored === 'id' || stored === 'en') {
      return stored
    }
  } catch (error) {
    console.log('Failed to read language preference')
  }
  return 'id' // Default to Indonesian
}

// ══════════════════════════════════════════════════════════════════════════════
// BILINGUAL CONTENT - ENHANCED WITH PROFESSIONAL COPYWRITING
// ══════════════════════════════════════════════════════════════════════════════

const content = {
  id: {
    // ─────────────────────────── Cover Page ───────────────────────────
    title1: 'MANGALA',
    title2: 'LIVING',
    subtitle: 'Katalog Furniture Industrial Premium 2025',
    tagline: 'Keahlian Lebih dari 25 Tahun dalam Craftsmanship Furniture Industrial & Scandinavian',
    since: 'Sejak 1999',
    workshop: 'Workshop & Showroom Bekasi',
    address: 'Jl. Raya Setu Cibitung, Bekasi, Jawa Barat 17320',
    copyright: '© 2025 Mangala Living. Hak Cipta Dilindungi.',
    
    // ─────────────────────────── Welcome Page ───────────────────────────
    welcomeTitle: 'Selamat Datang di Mangala Living',
    welcomeSubtitle: 'Craftsmen Furniture Industrial Terpercaya Indonesia',
    
    welcomeIntro: 'Terima kasih telah mengunduh katalog resmi Mangala Living 2025. Kami bangga mempersembahkan koleksi furniture industrial premium yang dirancang dengan dedikasi penuh untuk memenuhi kebutuhan bisnis dan hunian modern Anda.',
    
    welcomePara1: 'Selama lebih dari 25 tahun, Mangala Living telah menjadi pilihan utama para arsitek, desainer interior, pemilik cafe, restoran, hotel, kantor, dan pemilik rumah yang menghargai kualitas sejati. Kami bukan sekadar pembuat furniture—kami adalah craftsmen yang memahami bahwa setiap sudut ruang memiliki cerita, setiap kursi harus nyaman, dan setiap meja harus kokoh bertahan puluhan tahun.',
    
    welcomePara2: 'Di workshop seluas 500m² yang berlokasi strategis di Bekasi, tim produksi kami yang terdiri dari 10 tukang las berpengalaman, 5 tukang kayu ahli, dan 3 finishing specialist bekerja dengan standar kualitas ekspor. Setiap potongan besi hollow yang kami las, setiap kayu solid yang kami bentuk, dan setiap lapisan powder coating yang kami aplikasikan—semuanya melalui quality control ketat untuk memastikan produk yang sampai ke tangan Anda adalah yang terbaik.',
    
    welcomePara3: 'Koleksi kami mencakup berbagai kategori: furniture cafe & restoran yang stylish dan tahan lama, patio & outdoor furniture yang weatherproof hingga 7 tahun, furniture kantor yang ergonomis dan produktif, furniture residential yang hangat dan nyaman, furniture hotel hospitality standar bintang lima, serta retail display solutions yang memaksimalkan visual merchandising Anda.',
    
    welcomePara4: 'Kami memahami bahwa setiap project memiliki kebutuhan unik. Oleh karena itu, selain ready stock yang Anda lihat di katalog ini, kami juga melayani custom order dengan berbagai pilihan material premium: besi hollow 4x4cm hingga 6x6cm dari PT Krakatau Steel, kayu solid grade A (jati, mahoni, sungkai), powder coating Jotun/Nippon dengan 50+ pilihan warna, serta hardware import berkualitas tinggi.',
    
    welcomePara5: 'Harga yang kami tawarkan adalah factory direct—tanpa markup middleman. Dengan sistem pembayaran DP 50% dan pelunasan 50% setelah instalasi, serta garansi struktur 2 tahun dan finishing 1 tahun, Anda mendapatkan nilai terbaik untuk investasi furniture Anda. Area Bekasi, Jakarta Timur, dan Cikarang bahkan mendapatkan FREE delivery dan survey!',
    
    welcomeCTA: 'Hubungi kami hari ini untuk konsultasi gratis, diskusikan kebutuhan furniture Anda, atau kunjungi workshop kami untuk melihat langsung kualitas produk yang kami tawarkan.',
    
    welcomeSignature: 'Hormat kami,',
    welcomeTeam: 'Tim Mangala Living',
    
    // ─────────────────────────── Why Choose Us Page ───────────────────────────
    whyChooseTitle: 'Mengapa Memilih Mangala Living?',
    whyChooseSubtitle: '6 Keunggulan yang Membedakan Kami dari Kompetitor',
    
    reason1Title: '1. Kualitas Ekspor Premium yang Terjamin',
    reason1Desc: 'Setiap produk kami dibuat dengan material pilihan terbaik: besi hollow dan solid bar dari PT Krakatau Steel yang anti karat, kayu solid grade A yang telah melalui proses kiln-dried untuk stabilitas dimensi, powder coating Jotun atau Nippon standar ekspor dengan ketebalan 60-80 micron yang tahan UV dan weatherproof. Kami menggunakan standar yang sama dengan furniture ekspor ke Malaysia, Singapura, dan Australia.',
    
    reason2Title: '2. Craftsman Berpengalaman 25+ Tahun',
    reason2Desc: 'Workshop kami didukung oleh tim produksi yang telah berkecimpung di industri furniture besi dan kayu selama puluhan tahun. Tukang las kami ahli dalam teknik welding TIG dan MIG untuk hasil sambungan yang kuat dan rapi. Tukang kayu kami mahir dalam joinery tradisional dan modern. Finishing specialist kami menguasai teknik grinding, sanding, coating, dan polishing hingga hasil sempurna.',
    
    reason3Title: '3. Custom Order Fleksibel & Design 3D',
    reason3Desc: 'Tidak menemukan ukuran atau desain yang pas? Tenang! Kami melayani custom order mulai dari 1 unit. Tim designer kami akan membuat 3D rendering menggunakan SketchUp atau 3ds Max sehingga Anda bisa visualisasi produk sebelum produksi. Revisi desain 1-2 kali tanpa biaya tambahan. Konsultasi dan survey GRATIS untuk area Bekasi, Jakarta, Cikarang.',
    
    reason4Title: '4. Harga Factory Direct Tanpa Markup',
    reason4Desc: 'Karena Anda membeli langsung dari workshop, Anda tidak perlu membayar markup showroom atau toko furniture. Harga kami transparan dengan breakdown jelas: material, produksi, finishing, dan packing. Plus, kami memberikan diskon volume 5-15% untuk pembelian dalam jumlah banyak—ideal untuk project cafe, restoran, hotel, atau kantor.',
    
    reason5Title: '5. Timeline Produksi yang Transparan',
    reason5Desc: 'Kami sangat menghargai waktu Anda. Timeline produksi reguler kami adalah 15-25 hari kerja untuk furniture standard dan 30-45 hari untuk bulk order atau custom kompleks. Selama proses produksi, Anda akan mendapat update berkala via WhatsApp lengkap dengan foto dan video progress, sehingga Anda bisa pantau perkembangan project Anda secara real-time.',
    
    reason6Title: '6. Layanan Purna Jual & Garansi Komprehensif',
    reason6Desc: 'Kepuasan Anda adalah prioritas kami. Setiap pembelian dilengkapi dengan garansi struktur 2 tahun dan finishing 1 tahun. Kami juga memberikan bonus panduan perawatan furniture dan touch-up kit untuk perbaikan minor scratches. Tim after-sales kami siap membantu jika Anda memerlukan maintenance, refinishing, atau modifikasi di kemudian hari.',
    
    // ─────────────────────────── Product Categories ───────────────────────────
    categories: 'Kategori Produk',
    categoriesDesc: 'Furniture Industrial Premium untuk Berbagai Kebutuhan',
    
    // ─────────────────────────── Pricing Guide ───────────────────────────
    pricingTitle: 'Panduan Harga Estimasi',
    pricingSubtitle: 'Harga Transparan untuk Planning Budget Anda',
    
    pricingNote1: '• Harga dalam katalog ini adalah estimasi harga starting point untuk desain standard dengan material grade reguler.',
    pricingNote2: '• Custom design dengan kompleksitas tinggi, material premium (besi 6x6cm, kayu jati, electroplating finish), atau dimensi extra large akan menyesuaikan harga.',
    pricingNote3: '• Harga sudah termasuk: Material, produksi, standard finishing (powder coating/painting), quality control, dan packing aman.',
    pricingNote4: '• Delivery: FREE untuk area Bekasi, Jakarta Timur, Cikarang. Luar area dikenakan biaya berdasarkan jarak (nego).',
    pricingNote5: '• Sistem Pembayaran: DP 50% setelah desain approved, Pelunasan 50% setelah instalasi selesai. Terima Rupiah (IDR) dan Dollar (USD).',
    pricingNote6: '• Diskon Volume: 5-10 unit (diskon 5%), 11-20 unit (diskon 10%), 21+ unit (negotiable hingga 15%).',
    
    // ─────────────────────────── Material Excellence ───────────────────────────
    materialTitle: 'Material Premium yang Kami Gunakan',
    materialSubtitle: 'Hanya Material Terbaik untuk Furniture Berkualitas Ekspor',
    
    material1Title: 'Besi Hollow & Solid Bar',
    material1Desc: 'Besi hollow kotak 4x4cm, 5x5cm, 6x6cm dengan ketebalan 1.2mm hingga 2mm dari PT Krakatau Steel atau setara. Untuk struktur yang memerlukan load-bearing tinggi, kami gunakan solid steel bar. Semua besi telah dilapisi galvanized coating untuk perlindungan anti karat. Proses welding menggunakan teknik TIG dan MIG untuk sambungan yang kuat dan estetis.',
    
    material2Title: 'Kayu Solid Grade A Premium',
    material2Desc: 'Kayu jati (teak), mahoni (mahogany), dan sungkai grade A yang telah melalui proses kiln-dried untuk mengurangi kadar air hingga 12-15%, memastikan stabilitas dimensi dan mencegah cracking atau warping. Table top kami memiliki ketebalan 2-3cm dengan finishing natural oil, melamine coating, atau duco paint sesuai preferensi. Joinery menggunakan teknik dowel, mortise-tenon, atau pocket screw untuk kekuatan maksimal.',
    
    material3Title: 'Powder Coating Export Quality',
    material3Desc: 'Kami menggunakan powder coating merek Jotun (Norway) atau Nippon (Japan) dengan standar ekspor. Proses coating dilakukan setelah permukaan besi di-grinding halus dan dibersihkan sempurna. Ketebalan coating 60-80 micron untuk ketahanan optimal. Tersedia 50+ pilihan warna: Black Matte, White Glossy, Grey, Bronze, Gold, Silver, Custom RAL colors. Powder coating kami UV resistant, weather resistant, dan tahan hingga 5-7 tahun untuk penggunaan outdoor.',
    
    material4Title: 'Hardware & Accessories Import',
    material4Desc: 'Baut dan mur stainless steel 304 yang anti karat, bracket reinforcement untuk corner joints yang kuat, leveling feet adjustable untuk permukaan lantai yang tidak rata, soft-close hinges untuk kabinet, ball-bearing drawer slides untuk laci yang smooth, dan cable management solutions untuk furniture kantor. Semua hardware kami pilih dari supplier import terpercaya untuk memastikan durabilitas jangka panjang.',
    
    // ─────────────────────────── Contact & Order ───────────────────────────
    contactTitle: 'Hubungi Kami & Mulai Project Anda',
    contactSubtitle: 'Tim Kami Siap Membantu Mewujudkan Furniture Impian Anda',
    
    contactInfo: 'Untuk konsultasi gratis, quotation, atau kunjungan showroom:',
    
    whatsappTitle: 'WhatsApp & Telepon',
    whatsappNumber: '+6288801146881',
    whatsappHours: 'Senin - Sabtu: 08.00 - 17.00 WIB',
    whatsappResponse: 'Response time: 1-3 jam (jam kerja)',
    
    emailTitle: 'Email Resmi',
    emailGeneral: 'info@mangala-living.com',
    emailSales: 'sales@mangala-living.com',
    emailNote: 'Untuk quotation, partnership, atau inquiry',
    
    addressTitle: 'Workshop & Showroom',
    addressFull1: 'Mangala Living Workshop',
    addressFull2: 'Jl. Raya Setu Cibitung, Telajung',
    addressFull3: 'Kec. Cikarang Barat, Kabupaten Bekasi',
    addressFull4: 'Jawa Barat 17320, Indonesia',
    addressNote: '10 menit dari Tol Cibitung | 25 menit dari Jakarta Timur',
    
    visitTitle: 'Kunjungi Kami',
    visitDesc: 'Workshop kami terbuka untuk kunjungan. Anda bisa melihat langsung proses produksi, sample material, dan portfolio project kami. Hubungi sebelumnya untuk membuat appointment.',
    
    websiteTitle: 'Website & Online',
    website: 'www.mangala-living.com',
    websiteNote: 'Lihat portfolio lengkap, artikel furniture tips, dan update produk terbaru',
    
    exportExp: '• Export Experience: Malaysia, Singapura, Australia',
    workshopSize: '• Workshop: 500m² dengan tim produksi 18 orang',
    projectDone: '• Project Completed: 1,200+ project sejak 1999',
    
    continued: '(lanjutan)',
    
    // ─────────────────────────── Currency ───────────────────────────
    currency: 'IDR',
    currencySymbol: 'Rp',
    priceFormat: 'Mulai dari',
    
    // ─────────────────────────── Call to Actions ───────────────────────────
    cta1: '• WhatsApp kami untuk konsultasi & quotation gratis',
    cta2: '• Kunjungi workshop kami di Bekasi untuk lihat produk langsung',
    cta3: '• Eksplor koleksi lengkap di www.mangala-living.com',
  },
  
  en: {
    // ─────────────────────────── Cover Page ───────────────────────────
    title1: 'MANGALA',
    title2: 'LIVING',
    subtitle: 'Premium Industrial Furniture Catalog 2025',
    tagline: 'Over 25 Years of Expertise in Industrial & Scandinavian Furniture Craftsmanship',
    since: 'Since 1999',
    workshop: 'Workshop & Showroom Bekasi',
    address: 'Jl. Raya Setu Cibitung, Bekasi, West Java 17320',
    copyright: '© 2025 Mangala Living. All Rights Reserved.',
    
    // ─────────────────────────── Welcome Page ───────────────────────────
    welcomeTitle: 'Welcome to Mangala Living',
    welcomeSubtitle: 'Indonesia\'s Trusted Industrial Furniture Craftsmen',
    
    welcomeIntro: 'Thank you for downloading the official Mangala Living 2025 catalog. We are proud to present our premium industrial furniture collection, designed with full dedication to meet the needs of your modern business and residence.',
    
    welcomePara1: 'For over 25 years, Mangala Living has been the top choice for architects, interior designers, cafe owners, restaurants, hotels, offices, and homeowners who appreciate true quality. We are not just furniture makers—we are craftsmen who understand that every corner of space has a story, every chair must be comfortable, and every table must stand strong for decades.',
    
    welcomePara2: 'In our 500m² workshop strategically located in Bekasi, our production team consisting of 10 experienced welders, 5 skilled carpenters, and 3 finishing specialists work with export quality standards. Every piece of hollow steel we weld, every solid wood we shape, and every layer of powder coating we apply—all go through strict quality control to ensure the product that reaches you is the best.',
    
    welcomePara3: 'Our collection spans various categories: stylish and durable cafe & restaurant furniture, patio & outdoor furniture that\'s weatherproof for up to 7 years, ergonomic and productive office furniture, warm and comfortable residential furniture, five-star hotel hospitality furniture, and retail display solutions that maximize your visual merchandising.',
    
    welcomePara4: 'We understand that every project has unique needs. Therefore, in addition to the ready stock you see in this catalog, we also serve custom orders with various premium material options: 4x4cm to 6x6cm hollow steel from PT Krakatau Steel, grade A solid wood (teak, mahogany, sungkai), Jotun/Nippon powder coating with 50+ color choices, and high-quality imported hardware.',
    
    welcomePara5: 'Our prices are factory direct—no middleman markup. With a 50% down payment system and 50% settlement after installation, plus a 2-year structural warranty and 1-year finishing warranty, you get the best value for your furniture investment. The Bekasi, East Jakarta, and Cikarang areas even get FREE delivery and survey!',
    
    welcomeCTA: 'Contact us today for a free consultation, discuss your furniture needs, or visit our workshop to see firsthand the quality of the products we offer.',
    
    welcomeSignature: 'Best regards,',
    welcomeTeam: 'Mangala Living Team',
    
    // ─────────────────────────── Why Choose Us Page ───────────────────────────
    whyChooseTitle: 'Why Choose Mangala Living?',
    whyChooseSubtitle: '6 Advantages That Set Us Apart from Competitors',
    
    reason1Title: '1. Guaranteed Premium Export Quality',
    reason1Desc: 'Every product is made with the finest materials: hollow steel and solid bars from PT Krakatau Steel that are rust-resistant, grade A solid wood that has gone through a kiln-dried process for dimensional stability, Jotun or Nippon export-standard powder coating with 60-80 micron thickness that is UV and weatherproof resistant. We use the same standards as furniture exports to Malaysia, Singapore, and Australia.',
    
    reason2Title: '2. Craftsmen with 25+ Years Experience',
    reason2Desc: 'Our workshop is supported by a production team that has been involved in the steel and wood furniture industry for decades. Our welders are experts in TIG and MIG welding techniques for strong and neat joint results. Our carpenters are skilled in traditional and modern joinery. Our finishing specialists master grinding, sanding, coating, and polishing techniques to perfection.',
    
    reason3Title: '3. Flexible Custom Order & 3D Design',
    reason3Desc: 'Can\'t find the right size or design? No worries! We serve custom orders starting from 1 unit. Our designer team will create 3D renderings using SketchUp or 3ds Max so you can visualize the product before production. 1-2 design revisions at no extra cost. FREE consultation and survey for Bekasi, Jakarta, Cikarang areas.',
    
    reason4Title: '4. Factory Direct Pricing Without Markup',
    reason4Desc: 'Because you buy directly from the workshop, you don\'t have to pay showroom or furniture store markup. Our prices are transparent with a clear breakdown: materials, production, finishing, and packing. Plus, we offer volume discounts of 5-15% for bulk purchases—ideal for cafe, restaurant, hotel, or office projects.',
    
    reason5Title: '5. Transparent Production Timeline',
    reason5Desc: 'We highly value your time. Our regular production timeline is 15-25 working days for standard furniture and 30-45 days for bulk or complex custom orders. During the production process, you will receive regular updates via WhatsApp complete with photos and videos of progress, so you can monitor your project development in real-time.',
    
    reason6Title: '6. After-Sales Service & Comprehensive Warranty',
    reason6Desc: 'Your satisfaction is our priority. Every purchase comes with a 2-year structural warranty and 1-year finishing warranty. We also provide a bonus furniture care guide and touch-up kit for minor scratch repairs. Our after-sales team is ready to assist if you need maintenance, refinishing, or modifications in the future.',
    
    // ─────────────────────────── Product Categories ───────────────────────────
    categories: 'Product Categories',
    categoriesDesc: 'Premium Industrial Furniture for Various Needs',
    
    // ─────────────────────────── Pricing Guide ───────────────────────────
    pricingTitle: 'Estimated Price Guide',
    pricingSubtitle: 'Transparent Pricing for Your Budget Planning',
    
    pricingNote1: '• Prices in this catalog are estimated starting points for standard designs with regular grade materials.',
    pricingNote2: '• Custom designs with high complexity, premium materials (6x6cm steel, teak wood, electroplating finish), or extra-large dimensions will adjust pricing.',
    pricingNote3: '• Prices include: Materials, production, standard finishing (powder coating/painting), quality control, and safe packing.',
    pricingNote4: '• Delivery: FREE for Bekasi, East Jakarta, Cikarang areas. Outside areas charged based on distance (negotiable).',
    pricingNote5: '• Payment System: 50% DP after design approved, 50% settlement after installation complete. Accept Rupiah (IDR) and Dollar (USD).',
    pricingNote6: '• Volume Discount: 5-10 units (5% off), 11-20 units (10% off), 21+ units (negotiable up to 15%).',
    
    // ─────────────────────────── Material Excellence ───────────────────────────
    materialTitle: 'Premium Materials We Use',
    materialSubtitle: 'Only the Best Materials for Export Quality Furniture',
    
    material1Title: 'Hollow Steel & Solid Bar',
    material1Desc: 'Square hollow steel 4x4cm, 5x5cm, 6x6cm with thickness 1.2mm to 2mm from PT Krakatau Steel or equivalent. For structures requiring high load-bearing, we use solid steel bars. All steel is coated with galvanized coating for rust protection. Welding process uses TIG and MIG techniques for strong and aesthetic joints.',
    
    material2Title: 'Grade A Premium Solid Wood',
    material2Desc: 'Teak, mahogany, and sungkai grade A wood that has undergone a kiln-dried process to reduce moisture content to 12-15%, ensuring dimensional stability and preventing cracking or warping. Our table tops have a thickness of 2-3cm with natural oil, melamine coating, or duco paint finishing as preferred. Joinery uses dowel, mortise-tenon, or pocket screw techniques for maximum strength.',
    
    material3Title: 'Export Quality Powder Coating',
    material3Desc: 'We use Jotun (Norway) or Nippon (Japan) brand powder coating with export standards. The coating process is done after the steel surface is ground smooth and cleaned thoroughly. Coating thickness 60-80 microns for optimal durability. Available in 50+ color options: Black Matte, White Glossy, Grey, Bronze, Gold, Silver, Custom RAL colors. Our powder coating is UV resistant, weather resistant, and lasts up to 5-7 years for outdoor use.',
    
    material4Title: 'Import Hardware & Accessories',
    material4Desc: 'Stainless steel 304 bolts and nuts that are rust-resistant, reinforcement brackets for strong corner joints, adjustable leveling feet for uneven floor surfaces, soft-close hinges for cabinets, ball-bearing drawer slides for smooth drawers, and cable management solutions for office furniture. All our hardware is selected from trusted import suppliers to ensure long-term durability.',
    
    // ─────────────────────────── Contact & Order ───────────────────────────
    contactTitle: 'Contact Us & Start Your Project',
    contactSubtitle: 'Our Team is Ready to Help Realize Your Dream Furniture',
    
    contactInfo: 'For free consultation, quotation, or showroom visit:',
    
    whatsappTitle: 'WhatsApp & Phone',
    whatsappNumber: '+6288801146881',
    whatsappHours: 'Monday - Saturday: 08.00 - 17.00 WIB',
    whatsappResponse: 'Response time: 1-3 hours (working hours)',
    
    emailTitle: 'Official Email',
    emailGeneral: 'info@mangala-living.com',
    emailSales: 'sales@mangala-living.com',
    emailNote: 'For quotation, partnership, or inquiry',
    
    addressTitle: 'Workshop & Showroom',
    addressFull1: 'Mangala Living Workshop',
    addressFull2: 'Jl. Raya Setu Cibitung, Telajung',
    addressFull3: 'Kec. Cikarang Barat, Kabupaten Bekasi',
    addressFull4: 'West Java 17320, Indonesia',
    addressNote: '10 mins from Cibitung Toll | 25 mins from East Jakarta',
    
    visitTitle: 'Visit Us',
    visitDesc: 'Our workshop is open for visits. You can see the production process, material samples, and our project portfolio firsthand. Contact us beforehand to make an appointment.',
    
    websiteTitle: 'Website & Online',
    website: 'www.mangala-living.com',
    websiteNote: 'View complete portfolio, furniture tips articles, and latest product updates',
    
    exportExp: '• Export Experience: Malaysia, Singapore, Australia',
    workshopSize: '• Workshop: 500m² with 18-person production team',
    projectDone: '• Projects Completed: 1,200+ projects since 1999',
    
    continued: '(cont.)',
    
    // ─────────────────────────── Currency ───────────────────────────
    currency: 'USD',
    currencySymbol: '$',
    priceFormat: 'Starting from',
    
    // ─────────────────────────── Call to Actions ───────────────────────────
    cta1: '• WhatsApp us for free consultation & quotation',
    cta2: '• Visit our workshop in Bekasi to see products directly',
    cta3: '• Explore full collection at www.mangala-living.com',
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════════════════════════

// Helper function to load image and convert to base64
const loadImageAsBase64 = async (imagePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0)
        resolve(canvas.toDataURL('image/jpeg', 0.8))
      } else {
        reject(new Error('Failed to get canvas context'))
      }
    }
    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = imagePath
  })
}

// Format price with proper currency
const formatPrice = (price: string, currency: 'IDR' | 'USD', lang: 'id' | 'en'): string => {
  // Extract numeric value from price string
  const numericMatch = price.match(/[\d.,]+/)
  if (!numericMatch) return price
  
  const numericValue = parseFloat(numericMatch[0].replace(/[.,]/g, ''))
  
  if (currency === 'USD') {
    // Convert IDR to USD (approximate rate 1 USD = 16,000 IDR)
    const usdValue = Math.round(numericValue / 16000)
    return `$${usdValue}`
  } else {
    // Keep IDR format
    const formatted = numericValue.toLocaleString('id-ID')
    return `Rp ${formatted}`
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN PDF GENERATION FUNCTION
// ══════════════════════════════════════════════════════════════════════════════

export const generateCatalog = async () => {
  try {
    // Load PDF dependencies only when needed
    await loadPDFDependencies()
    
    // Get language preference
    const lang = getLanguagePreference()
    const t = content[lang]
    
    const doc = new jsPDF('p', 'mm', 'a4')
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    
    // ══════════════════════════════════════════════════════════════════════════
    // ELEGANT COLOR PALETTE
    // ══════════════════════════════════════════════════════════════════════════
    const colors = {
      primaryDark: [26, 35, 46],          // Rich charcoal
      primaryAccent: [139, 115, 85],      // Warm bronze
      secondaryAccent: [190, 171, 153],   // Elegant taupe
      textLight: [255, 255, 255],         // Pure white
      textDark: [44, 62, 80],             // Deep slate
      textMuted: [120, 120, 120],         // Muted grey
      goldAccent: [184, 134, 11],         // Elegant gold
      backgroundLight: [248, 248, 248],   // Soft white
      lineAccent: [200, 200, 200],        // Subtle line
    }
    
    let pageNumber = 1
    
    // ══════════════════════════════════════════════════════════════════════════
    // COVER PAGE - WORLD CLASS DESIGN
    // ══════════════════════════════════════════════════════════════════════════
    doc.setFillColor(...colors.primaryDark)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    // Elegant geometric frame
    doc.setDrawColor(...colors.primaryAccent)
    doc.setLineWidth(0.5)
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30, 'S')
    doc.setLineWidth(0.3)
    doc.rect(18, 18, pageWidth - 36, pageHeight - 36, 'S')
    
    // Top decorative line
    doc.setDrawColor(...colors.goldAccent)
    doc.setLineWidth(1)
    doc.line(pageWidth / 2 - 40, 45, pageWidth / 2 + 40, 45)
    
    // Brand name - MANGALA
    doc.setTextColor(...colors.textLight)
    doc.setFontSize(60)
    doc.setFont('helvetica', 'bold')
    doc.text(t.title1, pageWidth / 2, 75, { align: 'center' })
    
    // Brand name - LIVING with letter spacing
    doc.setFontSize(28)
    doc.setFont('helvetica', 'normal')
    doc.text(t.title2.split('').join('  '), pageWidth / 2, 92, { align: 'center' })
    
    // Decorative separator
    doc.setDrawColor(...colors.goldAccent)
    doc.setLineWidth(0.8)
    doc.line(pageWidth / 2 - 35, 100, pageWidth / 2 + 35, 100)
    
    // Subtitle
    doc.setFontSize(14)
    doc.setTextColor(...colors.secondaryAccent)
    doc.setFont('helvetica', 'bold')
    doc.text(t.subtitle, pageWidth / 2, 115, { align: 'center' })
    
    // Since year badge
    doc.setFillColor(...colors.goldAccent)
    doc.circle(pageWidth / 2, 135, 12, 'F')
    doc.setTextColor(...colors.primaryDark)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(t.since, pageWidth / 2, 137, { align: 'center' })
    
    // Tagline
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...colors.textLight)
    const taglineLines = doc.splitTextToSize(t.tagline, pageWidth - 60)
    doc.text(taglineLines, pageWidth / 2, 155, { align: 'center' })
    
    // Workshop location
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.secondaryAccent)
    doc.text(t.workshop, pageWidth / 2, 185, { align: 'center' })
    
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text(t.address, pageWidth / 2, 193, { align: 'center' })
    
    // Contact information - clickable
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.goldAccent)
    doc.textWithLink('+6288801146881', pageWidth / 2, 210, { 
      align: 'center',
      url: 'https://wa.me/+6288801146881'
    })
    doc.textWithLink('info@mangala-living.com', pageWidth / 2, 220, { 
      align: 'center',
      url: 'mailto:info@mangala-living.com'
    })
    
    doc.setTextColor(...colors.textLight)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.textWithLink('www.mangala-living.com', pageWidth / 2, 232, { 
      align: 'center',
      url: 'https://mangala-living.com'
    })
    
    // Bottom decorative line
    doc.setDrawColor(...colors.goldAccent)
    doc.setLineWidth(1)
    doc.line(pageWidth / 2 - 40, 250, pageWidth / 2 + 40, 250)
    
    // Copyright
    doc.setFontSize(8)
    doc.setTextColor(...colors.textMuted)
    doc.text(t.copyright, pageWidth / 2, 275, { align: 'center' })
    
    // ══════════════════════════════════════════════════════════════════════════
    // WELCOME PAGE - PROFESSIONAL INTRODUCTION
    // ══════════════════════════════════════════════════════════════════════════
    doc.addPage()
    pageNumber++
    
    // Page background
    doc.setFillColor(...colors.backgroundLight)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    // Elegant header section
    doc.setFillColor(...colors.primaryDark)
    doc.rect(0, 0, pageWidth, 55, 'F')
    
    // Header decorative top line
    doc.setDrawColor(...colors.goldAccent)
    doc.setLineWidth(0.5)
    doc.line(0, 3, pageWidth, 3)
    
    doc.setTextColor(...colors.textLight)
    doc.setFontSize(28)
    doc.setFont('helvetica', 'bold')
    doc.text(t.welcomeTitle, pageWidth / 2, 30, { align: 'center' })
    
    doc.setFontSize(11)
    doc.setFont('helvetica', 'italic')
    doc.setTextColor(...colors.secondaryAccent)
    doc.text(t.welcomeSubtitle, pageWidth / 2, 42, { align: 'center' })
    
    // Content area - optimized to fit on ONE page
    const margin = 22
    let yPos = 68
    const lineHeight = 6
    
    doc.setTextColor(...colors.textDark)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    
    // Introduction paragraph
    const introLines = doc.splitTextToSize(t.welcomeIntro, pageWidth - (margin * 2))
    doc.text(introLines, margin, yPos)
    yPos += introLines.length * lineHeight + 4
    
    // Combine all paragraphs with minimal spacing
    const paragraphs = [
      t.welcomePara1,
      t.welcomePara2,
      t.welcomePara3,
      t.welcomePara4,
      t.welcomePara5
    ]
    
    paragraphs.forEach((para) => {
      const paraLines = doc.splitTextToSize(para, pageWidth - (margin * 2))
      doc.text(paraLines, margin, yPos)
      yPos += paraLines.length * lineHeight + 4
    })
    
    // CTA section
    yPos += 3
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.goldAccent)
    const ctaLines = doc.splitTextToSize(t.welcomeCTA, pageWidth - (margin * 2))
    doc.text(ctaLines, margin, yPos)
    yPos += ctaLines.length * 6 + 8
    
    // Signature
    doc.setFontSize(10)
    doc.setFont('helvetica', 'italic')
    doc.setTextColor(...colors.textDark)
    doc.text(t.welcomeSignature, margin, yPos)
    yPos += 5
    doc.setFont('helvetica', 'bold')
    doc.text(t.welcomeTeam, margin, yPos)
    
    // Page number footer
    doc.setFontSize(8)
    doc.setTextColor(...colors.textMuted)
    doc.text(`${pageNumber}`, pageWidth / 2, 287, { align: 'center' })
    
    // ══════════════════════════════════════════════════════════════════════════
    // WHY CHOOSE US PAGE - ALL 6 REASONS ON ONE PAGE
    // ══════════════════════════════════════════════════════════════════════════
    doc.addPage()
    pageNumber++
    
    doc.setFillColor(...colors.backgroundLight)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    // Elegant header - more compact
    doc.setFillColor(...colors.primaryDark)
    doc.rect(0, 0, pageWidth, 45, 'F')
    
    doc.setTextColor(...colors.textLight)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text(t.whyChooseTitle, pageWidth / 2, 23, { align: 'center' })
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'italic')
    doc.setTextColor(...colors.secondaryAccent)
    doc.text(t.whyChooseSubtitle, pageWidth / 2, 35, { align: 'center' })
    
    // All 6 reasons with optimized spacing
    yPos = 55
    const allReasons = [
      { title: t.reason1Title, desc: t.reason1Desc },
      { title: t.reason2Title, desc: t.reason2Desc },
      { title: t.reason3Title, desc: t.reason3Desc },
      { title: t.reason4Title, desc: t.reason4Desc },
      { title: t.reason5Title, desc: t.reason5Desc },
      { title: t.reason6Title, desc: t.reason6Desc },
    ]
    
    allReasons.forEach((reason, index) => {
      // Reason title with number - more compact
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...colors.goldAccent)
      doc.text(reason.title, margin, yPos)
      yPos += 6
      
      // Reason description - smaller font and spacing
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...colors.textDark)
      const descLines = doc.splitTextToSize(reason.desc, pageWidth - (margin * 2))
      doc.text(descLines, margin, yPos)
      yPos += descLines.length * 5 + 6
      
      // Decorative separator - thinner
      if (index < allReasons.length - 1) {
        doc.setDrawColor(...colors.lineAccent)
        doc.setLineWidth(0.2)
        doc.line(margin, yPos - 3, pageWidth - margin, yPos - 3)
      }
    })
    
    // Page number
    doc.setFontSize(8)
    doc.setTextColor(...colors.textMuted)
    doc.text(`${pageNumber}`, pageWidth / 2, 287, { align: 'center' })
    
    // ══════════════════════════════════════════════════════════════════════════
    // MATERIAL EXCELLENCE PAGE
    // ══════════════════════════════════════════════════════════════════════════
    doc.addPage()
    pageNumber++
    
    doc.setFillColor(...colors.backgroundLight)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    // Elegant header
    doc.setFillColor(...colors.primaryDark)
    doc.rect(0, 0, pageWidth, 45, 'F')
    
    doc.setTextColor(...colors.textLight)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text(t.materialTitle, pageWidth / 2, 22, { align: 'center' })
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'italic')
    doc.setTextColor(...colors.secondaryAccent)
    doc.text(t.materialSubtitle, pageWidth / 2, 34, { align: 'center' })
    
    // Materials section
    yPos = 60
    const materials = [
      { title: t.material1Title, desc: t.material1Desc },
      { title: t.material2Title, desc: t.material2Desc },
      { title: t.material3Title, desc: t.material3Desc },
      { title: t.material4Title, desc: t.material4Desc },
    ]
    
    materials.forEach((material, index) => {
      // Check if we need a new page
      if (yPos > 235) {
        doc.addPage()
        pageNumber++
        doc.setFillColor(...colors.backgroundLight)
        doc.rect(0, 0, pageWidth, pageHeight, 'F')
        yPos = 30
      }
      
      // Material badge number
      doc.setFillColor(...colors.goldAccent)
      doc.circle(margin + 5, yPos - 2, 5, 'F')
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...colors.primaryDark)
      doc.text(`${index + 1}`, margin + 5, yPos, { align: 'center' })
      
      // Material title
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...colors.goldAccent)
      doc.text(material.title, margin + 13, yPos)
      yPos += 8
      
      // Material description
      doc.setFontSize(9.5)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...colors.textDark)
      const descLines = doc.splitTextToSize(material.desc, pageWidth - (margin * 2))
      doc.text(descLines, margin, yPos)
      yPos += descLines.length * 6 + 10
      
      // Decorative separator
      if (index < materials.length - 1) {
        doc.setDrawColor(...colors.lineAccent)
        doc.setLineWidth(0.3)
        doc.line(margin, yPos - 5, pageWidth - margin, yPos - 5)
      }
    })
    
    // Page number
    doc.setFontSize(8)
    doc.setTextColor(...colors.textMuted)
    doc.text(`${pageNumber}`, pageWidth / 2, 287, { align: 'center' })
    
    // ══════════════════════════════════════════════════════════════════════════
    // PRODUCT CATALOG PAGES
    // ══════════════════════════════════════════════════════════════════════════
    
    // Group products by category
    const productsByCategory: { [key: string]: Product[] } = {}
    ALL_PRODUCTS.forEach((product: Product) => {
      const mainCategory = product.categories[0]
      if (!productsByCategory[mainCategory]) {
        productsByCategory[mainCategory] = []
      }
      productsByCategory[mainCategory].push(product)
    })
    
    // Generate product pages
    for (const category of Object.keys(productsByCategory)) {
      const products = productsByCategory[category]
      
      doc.addPage()
      pageNumber++
      
      // Category header page
      doc.setFillColor(...colors.backgroundLight)
      doc.rect(0, 0, pageWidth, pageHeight, 'F')
      
      doc.setFillColor(...colors.primaryDark)
      doc.rect(0, 0, pageWidth, 50, 'F')
      
      // Category number badge
      const categoryIndex = Object.keys(productsByCategory).indexOf(category) + 1
      doc.setFillColor(...colors.goldAccent)
      doc.circle(30, 25, 8, 'F')
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...colors.primaryDark)
      doc.text(`${categoryIndex}`, 30, 27, { align: 'center' })
      
      doc.setTextColor(...colors.textLight)
      doc.setFontSize(24)
      doc.setFont('helvetica', 'bold')
      doc.text(category, 45, 28)
      
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...colors.secondaryAccent)
      doc.text(`${products.length} ${lang === 'id' ? 'produk tersedia' : 'products available'}`, 45, 38)
      
      // Product grid
      yPos = 65
      let xPos = margin
      let itemsInRow = 0
      const itemWidth = 85
      const itemHeight = 105
      const itemsPerRow = 2
      
      for (const product of products) {
        try {
          // Load product image
          const imgData = await loadImageAsBase64(product.image)
          const imgWidth = 75
          const imgHeight = 56
          
          // Product card background
          doc.setFillColor(255, 255, 255)
          doc.roundedRect(xPos, yPos, imgWidth + 4, itemHeight, 3, 3, 'F')
          
          // Drop shadow effect
          doc.setFillColor(230, 230, 230)
          doc.roundedRect(xPos + 1, yPos + 1, imgWidth + 4, itemHeight, 3, 3, 'F')
          doc.setFillColor(255, 255, 255)
          doc.roundedRect(xPos, yPos, imgWidth + 4, itemHeight, 3, 3, 'F')
          
          // Product image
          doc.addImage(imgData, 'JPEG', xPos + 2, yPos + 2, imgWidth, imgHeight)
          
          // Product name - clickable
          doc.setFontSize(10)
          doc.setFont('helvetica', 'bold')
          doc.setTextColor(...colors.textDark)
          
          const productName = product.name.length > 28 ? product.name.substring(0, 25) + '...' : product.name
          const productUrl = `https://mangala-living.com/product/${product.slug}`
          
          const nameLines = doc.splitTextToSize(productName, imgWidth)
          const nameYPos = yPos + imgHeight + 8
          doc.textWithLink(nameLines[0], xPos + 2, nameYPos, { url: productUrl })
          if (nameLines.length > 1) {
            doc.textWithLink(nameLines[1], xPos + 2, nameYPos + 5, { url: productUrl })
          }
          
          // Price with proper currency
          const formattedPrice = formatPrice(product.price, t.currency as 'IDR' | 'USD', lang)
          doc.setFontSize(13)
          doc.setFont('helvetica', 'bold')
          doc.setTextColor(...colors.goldAccent)
          doc.text(formattedPrice, xPos + 2, yPos + imgHeight + 22)
          
          // "View online" link
          doc.setFontSize(7)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(...colors.primaryAccent)
          doc.textWithLink(lang === 'id' ? 'Lihat online →' : 'View online →', xPos + 2, yPos + imgHeight + 28, { url: productUrl })
          
          // Categories tags
          doc.setFontSize(8)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(...colors.textMuted)
          const cats = product.categories.slice(0, 2).join(' • ')
          const catsText = cats.length > 30 ? cats.substring(0, 27) + '...' : cats
          const catsLines = doc.splitTextToSize(catsText, imgWidth)
          doc.text(catsLines[0], xPos + 2, yPos + imgHeight + 35)
          
          itemsInRow++
          
          // Move to next position
          if (itemsInRow >= itemsPerRow) {
            yPos += itemHeight + 10
            xPos = margin
            itemsInRow = 0
            
            // Check if we need new page
            if (yPos > 220) {
              // Page number
              doc.setFontSize(8)
              doc.setTextColor(...colors.textMuted)
              doc.text(`${pageNumber}`, pageWidth / 2, 287, { align: 'center' })
              
              doc.addPage()
              pageNumber++
              
              doc.setFillColor(...colors.backgroundLight)
              doc.rect(0, 0, pageWidth, pageHeight, 'F')
              
              // Repeat category header (smaller)
              doc.setFillColor(...colors.primaryDark)
              doc.rect(0, 0, pageWidth, 35, 'F')
              doc.setTextColor(...colors.textLight)
              doc.setFontSize(18)
              doc.setFont('helvetica', 'bold')
              doc.text(category + ' ' + t.continued, pageWidth / 2, 22, { align: 'center' })
              
              yPos = 50
            }
          } else {
            xPos += itemWidth + 8
          }
        } catch (error) {
          console.error(`Failed to load image for ${product.name}:`, error)
        }
      }
      
      // Page number
      doc.setFontSize(8)
      doc.setTextColor(...colors.textMuted)
      doc.text(`${pageNumber}`, pageWidth / 2, 287, { align: 'center' })
    }
    
    // ══════════════════════════════════════════════════════════════════════════
    // PRICING GUIDE PAGE
    // ══════════════════════════════════════════════════════════════════════════
    doc.addPage()
    pageNumber++
    
    doc.setFillColor(...colors.backgroundLight)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    // Header
    doc.setFillColor(...colors.primaryDark)
    doc.rect(0, 0, pageWidth, 45, 'F')
    
    doc.setTextColor(...colors.textLight)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text(t.pricingTitle, pageWidth / 2, 22, { align: 'center' })
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'italic')
    doc.setTextColor(...colors.secondaryAccent)
    doc.text(t.pricingSubtitle, pageWidth / 2, 34, { align: 'center' })
    
    // Pricing notes
    yPos = 60
    const pricingNotes = [
      t.pricingNote1,
      t.pricingNote2,
      t.pricingNote3,
      t.pricingNote4,
      t.pricingNote5,
      t.pricingNote6
    ]
    
    pricingNotes.forEach((note) => {
      doc.setFontSize(9.5)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...colors.textDark)
      const noteLines = doc.splitTextToSize(note, pageWidth - (margin * 2))
      doc.text(noteLines, margin, yPos)
      yPos += noteLines.length * 6 + 5
    })
    
    // Page number
    doc.setFontSize(8)
    doc.setTextColor(...colors.textMuted)
    doc.text(`${pageNumber}`, pageWidth / 2, 287, { align: 'center' })
    
    // ══════════════════════════════════════════════════════════════════════════
    // CONTACT PAGE - FINAL PAGE
    // ══════════════════════════════════════════════════════════════════════════
    doc.addPage()
    pageNumber++
    
    doc.setFillColor(...colors.primaryDark)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    // Elegant border frame
    doc.setDrawColor(...colors.goldAccent)
    doc.setLineWidth(0.5)
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30, 'S')
    doc.setLineWidth(0.2)
    doc.rect(18, 18, pageWidth - 36, pageHeight - 36, 'S')
    
    // Top decorative line
    doc.setDrawColor(...colors.goldAccent)
    doc.setLineWidth(1)
    doc.line(pageWidth / 2 - 40, 40, pageWidth / 2 + 40, 40)
    
    doc.setTextColor(...colors.textLight)
    doc.setFontSize(32)
    doc.setFont('helvetica', 'bold')
    doc.text(t.contactTitle, pageWidth / 2, 55, { align: 'center' })
    
    // Decorative separator
    doc.setDrawColor(...colors.goldAccent)
    doc.setLineWidth(0.8)
    doc.line(pageWidth / 2 - 35, 63, pageWidth / 2 + 35, 63)
    
    doc.setFontSize(11)
    doc.setFont('helvetica', 'italic')
    doc.setTextColor(...colors.secondaryAccent)
    doc.text(t.contactSubtitle, pageWidth / 2, 73, { align: 'center' })
    
    yPos = 90
    
    // WhatsApp
    doc.setFontSize(13)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.goldAccent)
    doc.text(t.whatsappTitle, pageWidth / 2, yPos, { align: 'center' })
    yPos += 10
    
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.textLight)
    doc.textWithLink(t.whatsappNumber, pageWidth / 2, yPos, { 
      align: 'center',
      url: 'https://wa.me/+6288801146881'
    })
    yPos += 8
    
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...colors.secondaryAccent)
    doc.text(t.whatsappHours, pageWidth / 2, yPos, { align: 'center' })
    yPos += 5
    doc.text(t.whatsappResponse, pageWidth / 2, yPos, { align: 'center' })
    yPos += 15
    
    // Email
    doc.setFontSize(13)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.goldAccent)
    doc.text(t.emailTitle, pageWidth / 2, yPos, { align: 'center' })
    yPos += 10
    
    doc.setFontSize(13)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.textLight)
    doc.textWithLink(t.emailGeneral, pageWidth / 2, yPos, { 
      align: 'center',
      url: 'mailto:info@mangala-living.com'
    })
    yPos += 7
    doc.textWithLink(t.emailSales, pageWidth / 2, yPos, { 
      align: 'center',
      url: 'mailto:sales@mangala-living.com'
    })
    yPos += 8
    
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...colors.secondaryAccent)
    doc.text(t.emailNote, pageWidth / 2, yPos, { align: 'center' })
    yPos += 15
    
    // Address - clickable
    doc.setFontSize(13)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.goldAccent)
    doc.text(t.addressTitle, pageWidth / 2, yPos, { align: 'center' })
    yPos += 10
    
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.textLight)
    doc.textWithLink(t.addressFull1, pageWidth / 2, yPos, { 
      align: 'center',
      url: 'https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9'
    })
    yPos += 6
    
    doc.setFont('helvetica', 'normal')
    doc.textWithLink(t.addressFull2, pageWidth / 2, yPos, { 
      align: 'center',
      url: 'https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9'
    })
    yPos += 6
    doc.textWithLink(t.addressFull3, pageWidth / 2, yPos, { 
      align: 'center',
      url: 'https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9'
    })
    yPos += 6
    doc.textWithLink(t.addressFull4, pageWidth / 2, yPos, { 
      align: 'center',
      url: 'https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9'
    })
    yPos += 8
    
    doc.setFontSize(9)
    doc.setFont('helvetica', 'italic')
    doc.setTextColor(...colors.secondaryAccent)
    doc.text(t.addressNote, pageWidth / 2, yPos, { align: 'center' })
    yPos += 15
    
    // Website
    doc.setFontSize(15)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.goldAccent)
    doc.textWithLink(t.website, pageWidth / 2, yPos, { 
      align: 'center',
      url: 'https://mangala-living.com'
    })
    yPos += 15
    
    // Bottom decorative line
    doc.setDrawColor(...colors.goldAccent)
    doc.setLineWidth(1)
    doc.line(pageWidth / 2 - 40, yPos, pageWidth / 2 + 40, yPos)
    yPos += 10
    
    // Workshop info
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...colors.textLight)
    doc.text(t.workshopSize, pageWidth / 2, yPos, { align: 'center' })
    yPos += 5
    doc.text(t.projectDone, pageWidth / 2, yPos, { align: 'center' })
    yPos += 5
    doc.text(t.exportExp, pageWidth / 2, yPos, { align: 'center' })
    
    // Copyright
    doc.setFontSize(8)
    doc.setTextColor(...colors.textMuted)
    doc.text(t.copyright, pageWidth / 2, 280, { align: 'center' })
    
    // Save PDF with language-specific filename
    const fileName = lang === 'id' 
      ? 'Katalog-Mangala-Living-2025.pdf'
      : 'Mangala-Living-Catalog-2025.pdf'
    doc.save(fileName)
    
  } catch (error) {
    console.error('Error generating catalog:', error)
    throw error
  }
}
