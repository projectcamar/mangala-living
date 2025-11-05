import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Wrench, Palette, Truck, CheckCircle, MessageCircle, Package, DollarSign, Ruler, Award, Clock, MapPin, Phone, Mail, Download } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import showroomImage from '../assets/Bench-corner-kursi-sudut-kursi-santai.webp'
import patioImage from '../assets/Steelfram-Outdoor-Bar-Set.webp'
import catalogPDF from '../assets/Mangala-Living-Catalog-2025.pdf'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import './CustomOrder.css'

const CustomOrder: React.FC = () => {
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // 1) Check URL path prefix
    const path = location.pathname
    if (path.startsWith('/id')) {
      setIsIndonesian(true)
      setIsLoading(false)
      return
    }
    if (path.startsWith('/eng')) {
      setIsIndonesian(false)
      setIsLoading(false)
      return
    }

    // 2) Check query parameter ?lang=
    const params = new URLSearchParams(location.search)
    const lang = params.get('lang')
    if (lang === 'id' || lang === 'en') {
      setIsIndonesian(lang === 'id')
      setIsLoading(false)
      return
    }

    // 3) Fallback to IP/Browser detection
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        if (data.country_code === 'ID') {
          setIsIndonesian(true)
        }
      } catch (error) {
        const browserLang = navigator.language || navigator.languages?.[0]
        if (browserLang?.startsWith('id')) {
          setIsIndonesian(true)
        }
      } finally {
        setIsLoading(false)
      }
    }
    detectLocation()
  }, [location.pathname, location.search])

  if (isLoading) {
    return null
  }

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  return (
    <div className="custom-order-page">
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{isIndonesian ? 'Custom Order Furniture Industrial Premium - Desain Eksklusif dari Mangala Living Bekasi' : 'Premium Industrial Furniture Custom Order - Exclusive Design from Mangala Living Bekasi'}</title>
        <meta name="description" content={isIndonesian 
          ? "Custom order furniture industrial premium di Bekasi: Meja makan, kursi cafe, rak display, patio furniture, dan furniture komersial custom. Proses lengkap dari konsultasi, desain 3D, produksi hingga instalasi. Material premium: besi hollow, kayu solid, powder coating berkualitas ekspor. Harga mulai Rp 2.5 juta (IDR). Timeline 15-25 hari. Workshop Mangala Living melayani Jakarta, Bekasi, Cikarang dengan FREE survey." 
          : "Premium industrial furniture custom order in Bekasi: Dining tables, cafe chairs, display racks, patio furniture, and custom commercial furniture. Complete process from consultation, 3D design, production to installation. Premium materials: hollow steel, solid wood, export-quality powder coating. Prices from $160 USD. Timeline 15-25 days. Mangala Living Workshop serves Jakarta, Bekasi, Cikarang with FREE survey."} />
        <meta name="keywords" content={isIndonesian 
          ? "custom order furniture bekasi, furniture besi custom jakarta, desain furniture industrial, custom patio furniture, furniture cafe custom, meja makan custom, rak display custom, furniture komersial bekasi, harga furniture custom, workshop furniture bekasi" 
          : "custom furniture order bekasi, custom steel furniture jakarta, industrial furniture design, custom patio furniture, cafe furniture custom, custom dining table, display rack custom, commercial furniture bekasi, custom furniture price"} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`custom-order-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
      </Helmet>
      
      <Header isIndonesian={isIndonesian} />
      
      {/* Hero Section */}
      <section className="custom-order-hero">
        <div className="custom-order-hero-image">
          <img 
            src={heroImage} 
            alt="Custom Order Furniture Industrial - Pesan Furniture Besi Custom Design Mangala Living Bekasi"
            title="Custom Order - Design Your Own Industrial Furniture with Mangala Living"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            itemProp="image"
            data-image-type="custom-order-hero"
            data-category="custom-order"
          />
          <div className="custom-order-hero-overlay"></div>
        </div>
        <div className="custom-order-hero-content">
          <h1 className="custom-order-hero-title">
            {isIndonesian ? 'Pesanan Khusus' : 'Custom Order'}
          </h1>
          <p className="custom-order-hero-subtitle">
            {isIndonesian 
              ? 'Wujudkan Visi Furniture Industrial Anda'
              : 'Bring Your Industrial Furniture Vision to Life'}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="custom-order-intro-section">
        <div className="custom-order-intro-container">
          <div className="custom-order-intro-badge">
            <Award size={24} strokeWidth={1.5} />
            <span>{isIndonesian ? 'Kualitas Ekspor Terjamin' : 'Export Quality Guaranteed'}</span>
          </div>
          <h2 className="custom-order-intro-title">
            {isIndonesian 
              ? 'Setiap Ruang Memiliki Karakter yang Unik'
              : 'Every Space Has Its Unique Character'}
          </h2>
          <div className="custom-order-intro-text">
            {isIndonesian ? (
              <>
                <p className="custom-order-intro-paragraph">
                  Di era di mana desain interior menjadi cerminan identitas dan nilai estetika, furniture industrial telah berkembang jauh melampaui sekadar fungsional. Kami di <strong>Mangala Living</strong> memahami bahwa setiap proyek—baik itu untuk rumah tinggal, cafe, restoran, hotel, kantor, maupun area outdoor patio—memerlukan pendekatan desain yang personal dan penuh pertimbangan.
                </p>
                <p className="custom-order-intro-paragraph">
                  Furniture custom bukan hanya tentang ukuran yang pas. Ini tentang menciptakan atmosfer, menghadirkan kenyamanan yang sesuai kebutuhan, dan memastikan setiap elemen desain sejalan dengan visi Anda. Dari <strong>meja makan industrial</strong> dengan proporsi yang sempurna, <strong>kursi bar cafe</strong> yang stylish namun ergonomis, <strong>rak display</strong> yang memaksimalkan ruang, hingga <strong>patio furniture</strong> yang tahan cuaca ekstrem—semuanya dimulai dari pemahaman mendalam tentang kebutuhan Anda.
                </p>
                <p className="custom-order-intro-paragraph">
                  Dengan pengalaman lebih dari 25 tahun dalam industri furniture besi dan kayu, workshop kami di Bekasi telah menyelesaikan lebih dari 1,200 proyek custom untuk klien lokal dan internasional. Kami tidak sekadar membuat furniture; kami menghadirkan karya yang berbicara tentang keahlian, presisi, dan dedikasi terhadap kualitas tinggi.
                </p>
              </>
            ) : (
              <>
                <p className="custom-order-intro-paragraph">
                  In an era where interior design reflects identity and aesthetic values, industrial furniture has evolved far beyond mere functionality. We at <strong>Mangala Living</strong> understand that every project—whether it's for residential homes, cafes, restaurants, hotels, offices, or outdoor patio areas—requires a personal and thoughtful design approach.
                </p>
                <p className="custom-order-intro-paragraph">
                  Custom furniture isn't just about the right dimensions. It's about creating atmosphere, delivering comfort that suits your needs, and ensuring every design element aligns with your vision. From <strong>industrial dining tables</strong> with perfect proportions, <strong>cafe bar chairs</strong> that are stylish yet ergonomic, <strong>display racks</strong> that maximize space, to <strong>patio furniture</strong> that withstands extreme weather—everything begins with a deep understanding of your requirements.
                </p>
                <p className="custom-order-intro-paragraph">
                  With over 25 years of experience in the steel and wood furniture industry, our Bekasi workshop has completed more than 1,200 custom projects for local and international clients. We don't just make furniture; we deliver works that speak of craftsmanship, precision, and dedication to high quality.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="custom-order-categories-section">
        <div className="custom-order-categories-container">
          <h2 className="custom-order-categories-title">
            {isIndonesian 
              ? 'Kategori Produk Custom yang Kami Tawarkan'
              : 'Custom Product Categories We Offer'}
          </h2>
          <p className="custom-order-categories-subtitle">
            {isIndonesian
              ? 'Dari furniture residential hingga komersial outdoor patio—semua dapat disesuaikan dengan kebutuhan spesifik Anda'
              : 'From residential furniture to commercial outdoor patio—all can be customized to your specific needs'}
          </p>
          
          <div className="custom-order-categories-grid">
            <div className="custom-order-category-card">
              <div className="custom-order-category-number">01</div>
              <h3 className="custom-order-category-title">
                {isIndonesian ? 'Furniture Cafe & Restoran' : 'Cafe & Restaurant Furniture'}
              </h3>
              <p className="custom-order-category-description">
                {isIndonesian
                  ? 'Meja makan industrial, kursi bar stool, booth seating custom, counter service, dan rak display. Desain yang mempertimbangkan traffic pengunjung, durabilitas tinggi, dan estetika modern yang menarik pelanggan.'
                  : 'Industrial dining tables, bar stool chairs, custom booth seating, service counters, and display racks. Designs that consider visitor traffic, high durability, and modern aesthetics that attract customers.'}
              </p>
              <div className="custom-order-category-price">
                {isIndonesian ? 'Mulai dari Rp 2.5 juta / set' : 'Starting from $160 USD / set'}
              </div>
            </div>

            <div className="custom-order-category-card">
              <div className="custom-order-category-number">02</div>
              <h3 className="custom-order-category-title">
                {isIndonesian ? 'Patio & Outdoor Furniture' : 'Patio & Outdoor Furniture'}
              </h3>
              <p className="custom-order-category-description">
                {isIndonesian
                  ? 'Balcony bar table, outdoor lounge set, garden bench, rooftop furniture, dan patio dining set. Material anti karat dengan powder coating weather-resistant untuk ketahanan maksimal di area outdoor.'
                  : 'Balcony bar tables, outdoor lounge sets, garden benches, rooftop furniture, and patio dining sets. Rust-resistant materials with weather-resistant powder coating for maximum durability in outdoor areas.'}
              </p>
              <div className="custom-order-category-price">
                {isIndonesian ? 'Mulai dari Rp 3.2 juta / set' : 'Starting from $200 USD / set'}
              </div>
            </div>

            <div className="custom-order-category-card">
              <div className="custom-order-category-number">03</div>
              <h3 className="custom-order-category-title">
                {isIndonesian ? 'Furniture Kantor & Co-Working' : 'Office & Co-Working Furniture'}
              </h3>
              <p className="custom-order-category-description">
                {isIndonesian
                  ? 'Meja kerja modular, meeting table besar, partisi ruangan industrial, rak buku dan display, serta kabinet penyimpanan. Fokus pada produktivitas, ergonomi, dan manajemen kabel yang rapi.'
                  : 'Modular work desks, large meeting tables, industrial room partitions, book and display shelves, and storage cabinets. Focus on productivity, ergonomics, and neat cable management.'}
              </p>
              <div className="custom-order-category-price">
                {isIndonesian ? 'Mulai dari Rp 2.8 juta / set' : 'Starting from $180 USD / set'}
              </div>
            </div>

            <div className="custom-order-category-card">
              <div className="custom-order-category-number">04</div>
              <h3 className="custom-order-category-title">
                {isIndonesian ? 'Furniture Residential' : 'Residential Furniture'}
              </h3>
              <p className="custom-order-category-description">
                {isIndonesian
                  ? 'Meja makan keluarga, rak TV minimalis, bookshelf industrial, daybed santai, kursi corner, dan console table. Desain yang mengutamakan kenyamanan rumah dengan sentuhan industrial yang hangat.'
                  : 'Family dining tables, minimalist TV racks, industrial bookshelves, lounging daybeds, corner chairs, and console tables. Designs that prioritize home comfort with a warm industrial touch.'}
              </p>
              <div className="custom-order-category-price">
                {isIndonesian ? 'Mulai dari Rp 2.3 juta / set' : 'Starting from $145 USD / set'}
              </div>
            </div>

            <div className="custom-order-category-card">
              <div className="custom-order-category-number">05</div>
              <h3 className="custom-order-category-title">
                {isIndonesian ? 'Furniture Hotel & Hospitality' : 'Hotel & Hospitality Furniture'}
              </h3>
              <p className="custom-order-category-description">
                {isIndonesian
                  ? 'Lobby furniture set, kamar hotel headboard custom, minibar cabinet, luggage rack, dan outdoor pool furniture. Standar hospitality dengan finishing premium dan durabilitas tinggi untuk traffic berat.'
                  : 'Lobby furniture sets, custom hotel room headboards, minibar cabinets, luggage racks, and outdoor pool furniture. Hospitality standards with premium finishing and high durability for heavy traffic.'}
              </p>
              <div className="custom-order-category-price">
                {isIndonesian ? 'Mulai dari Rp 3.5 juta / set' : 'Starting from $220 USD / set'}
              </div>
            </div>

            <div className="custom-order-category-card">
              <div className="custom-order-category-number">06</div>
              <h3 className="custom-order-category-title">
                {isIndonesian ? 'Retail & Display Solutions' : 'Retail & Display Solutions'}
              </h3>
              <p className="custom-order-category-description">
                {isIndonesian
                  ? 'Rak display clothing, jewelry display case, product showcase, gondola retail, dan wall shelving system. Desain yang memaksimalkan visibility produk dan customer experience di toko retail.'
                  : 'Clothing display racks, jewelry display cases, product showcases, retail gondolas, and wall shelving systems. Designs that maximize product visibility and customer experience in retail stores.'}
              </p>
              <div className="custom-order-category-price">
                {isIndonesian ? 'Mulai dari Rp 2.6 juta / unit' : 'Starting from $165 USD / unit'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="custom-order-showcase-section">
        <div className="custom-order-showcase-container">
          <div className="custom-order-showcase-content">
            <div className="custom-order-showcase-images">
              <div className="custom-order-showcase-image-main">
                <img 
                  src={showroomImage} 
                  alt="Custom Industrial Furniture Design Mangala Living" 
                  className="custom-order-showcase-img"
                />
              </div>
              <div className="custom-order-showcase-image-secondary">
                <img 
                  src={patioImage} 
                  alt="Custom Patio Outdoor Furniture Mangala Living" 
                  className="custom-order-showcase-img"
                />
              </div>
            </div>
            <div className="custom-order-showcase-text">
              <div className="custom-order-showcase-label">
                {isIndonesian ? 'Keunggulan Kami' : 'Our Advantages'}
              </div>
              <h2 className="custom-order-showcase-title">
                {isIndonesian 
                  ? 'Mengapa Memilih Mangala Living untuk Custom Order?'
                  : 'Why Choose Mangala Living for Custom Orders?'}
              </h2>
              <div className="custom-order-showcase-features">
                <div className="custom-order-showcase-feature">
                  <div className="custom-order-showcase-feature-icon">
                    <Award size={28} strokeWidth={1.5} />
                  </div>
                  <div className="custom-order-showcase-feature-text">
                    <h4>{isIndonesian ? 'Kualitas Ekspor Premium' : 'Premium Export Quality'}</h4>
                    <p>{isIndonesian 
                      ? 'Material pilihan: besi hollow 4x4cm hingga 6x6cm, kayu solid grade A, powder coating Jotun/Nippon standar ekspor dengan ketahanan 5-7 tahun outdoor.'
                      : 'Selected materials: 4x4cm to 6x6cm hollow steel, grade A solid wood, Jotun/Nippon export-standard powder coating with 5-7 years outdoor durability.'}</p>
                  </div>
                </div>
                <div className="custom-order-showcase-feature">
                  <div className="custom-order-showcase-feature-icon">
                    <Ruler size={28} strokeWidth={1.5} />
                  </div>
                  <div className="custom-order-showcase-feature-text">
                    <h4>{isIndonesian ? 'Presisi Hingga Milimeter' : 'Precision to the Millimeter'}</h4>
                    <p>{isIndonesian 
                      ? 'Tim tukang las dan tukang kayu berpengalaman 15+ tahun. Setiap potongan, setiap sambungan las, dan setiap finishing dikerjakan dengan standar akurasi tinggi.'
                      : '15+ years experienced welding and carpentry team. Every cut, every weld joint, and every finish is executed with high accuracy standards.'}</p>
                  </div>
                </div>
                <div className="custom-order-showcase-feature">
                  <div className="custom-order-showcase-feature-icon">
                    <Clock size={28} strokeWidth={1.5} />
                  </div>
                  <div className="custom-order-showcase-feature-text">
                    <h4>{isIndonesian ? 'Timeline Transparan' : 'Transparent Timeline'}</h4>
                    <p>{isIndonesian 
                      ? 'Produksi reguler 15-25 hari kerja, bulk order 30-45 hari. Update progress berkala via WhatsApp dengan foto dan video proses produksi.'
                      : 'Regular production 15-25 working days, bulk orders 30-45 days. Regular progress updates via WhatsApp with photos and videos of production process.'}</p>
                  </div>
                </div>
                <div className="custom-order-showcase-feature">
                  <div className="custom-order-showcase-feature-icon">
                    <DollarSign size={28} strokeWidth={1.5} />
                  </div>
                  <div className="custom-order-showcase-feature-text">
                    <h4>{isIndonesian ? 'Harga Factory Direct' : 'Factory Direct Pricing'}</h4>
                    <p>{isIndonesian 
                      ? 'Tanpa markup middleman. Harga Rp 2.3-8.5 juta (atau $145-530 USD) per set tergantung kompleksitas. Diskon volume 5-15% untuk order bulk.'
                      : 'No middleman markup. Prices Rp 2.3-8.5 million (or $145-530 USD) per set depending on complexity. Volume discount 5-15% for bulk orders.'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="custom-order-process-section">
        <div className="custom-order-process-container">
          <div className="custom-order-process-header">
            <h2 className="custom-order-process-title">
              {isIndonesian ? 'Proses Custom Order yang Jelas & Terstruktur' : 'Clear & Structured Custom Order Process'}
            </h2>
            <p className="custom-order-process-subtitle">
              {isIndonesian 
                ? 'Dari konsultasi awal hingga furniture terpasang sempurna—kami dampingi setiap langkah dengan profesional dan transparan'
                : 'From initial consultation to perfectly installed furniture—we accompany every step professionally and transparently'}
            </p>
          </div>
          
          <div className="custom-order-timeline">
            <div className="custom-order-timeline-item">
              <div className="custom-order-timeline-marker">
                <div className="custom-order-timeline-number">01</div>
                <div className="custom-order-timeline-line"></div>
              </div>
              <div className="custom-order-timeline-content">
                <div className="custom-order-timeline-icon">
                  <MessageCircle size={36} strokeWidth={1.5} />
                </div>
                <h3 className="custom-order-timeline-title">
                  {isIndonesian ? 'Konsultasi & Briefing Awal' : 'Initial Consultation & Briefing'}
                </h3>
                <p className="custom-order-timeline-description">
                  {isIndonesian 
                    ? 'Hubungi kami via WhatsApp atau datang langsung ke workshop. Ceritakan konsep, budget, dan timeline Anda. Kami akan diskusikan feasibility, material options, dan estimasi awal. Konsultasi 100% GRATIS tanpa komitmen.'
                    : 'Contact us via WhatsApp or visit our workshop directly. Share your concept, budget, and timeline. We\'ll discuss feasibility, material options, and initial estimates. Consultation is 100% FREE with no commitment.'}
                </p>
                <div className="custom-order-timeline-detail">
                  <strong>{isIndonesian ? 'Durasi:' : 'Duration:'}</strong> {isIndonesian ? '30-60 menit' : '30-60 minutes'}<br />
                  <strong>{isIndonesian ? 'Output:' : 'Output:'}</strong> {isIndonesian ? 'Rough sketch & estimasi biaya awal' : 'Rough sketch & initial cost estimate'}
                </div>
              </div>
            </div>

            <div className="custom-order-timeline-item">
              <div className="custom-order-timeline-marker">
                <div className="custom-order-timeline-number">02</div>
                <div className="custom-order-timeline-line"></div>
              </div>
              <div className="custom-order-timeline-content">
                <div className="custom-order-timeline-icon">
                  <Ruler size={36} strokeWidth={1.5} />
                </div>
                <h3 className="custom-order-timeline-title">
                  {isIndonesian ? 'Survey & Measurement Lokasi' : 'Site Survey & Measurement'}
                </h3>
                <p className="custom-order-timeline-description">
                  {isIndonesian 
                    ? 'Untuk project besar atau furniture built-in, tim kami datang ke lokasi untuk survey detail. Kami ukur dimensi ruangan, cek aksesibilitas, perhatikan lighting dan traffic flow. Khusus area Bekasi, Jakarta Timur, Cikarang: GRATIS survey.'
                    : 'For large projects or built-in furniture, our team visits your location for detailed survey. We measure room dimensions, check accessibility, observe lighting and traffic flow. Special for Bekasi, East Jakarta, Cikarang areas: FREE survey.'}
                </p>
                <div className="custom-order-timeline-detail">
                  <strong>{isIndonesian ? 'Durasi:' : 'Duration:'}</strong> {isIndonesian ? '1-2 jam di lokasi' : '1-2 hours on site'}<br />
                  <strong>{isIndonesian ? 'Output:' : 'Output:'}</strong> {isIndonesian ? 'Technical drawing & foto dokumentasi' : 'Technical drawing & documentation photos'}
                </div>
              </div>
            </div>

            <div className="custom-order-timeline-item">
              <div className="custom-order-timeline-marker">
                <div className="custom-order-timeline-number">03</div>
                <div className="custom-order-timeline-line"></div>
              </div>
              <div className="custom-order-timeline-content">
                <div className="custom-order-timeline-icon">
                  <Palette size={36} strokeWidth={1.5} />
                </div>
                <h3 className="custom-order-timeline-title">
                  {isIndonesian ? 'Desain 3D & Quotation Detail' : '3D Design & Detailed Quotation'}
                </h3>
                <p className="custom-order-timeline-description">
                  {isIndonesian 
                    ? 'Designer kami buat 3D rendering realistis dengan SketchUp/3ds Max sehingga Anda bisa visualisasi hasil akhir sebelum produksi. Quotation mencakup breakdown material, man power, finishing, delivery & instalasi. Revisi desain 1-2x tanpa biaya tambahan.'
                    : 'Our designer creates realistic 3D rendering with SketchUp/3ds Max so you can visualize the final result before production. Quotation includes material breakdown, manpower, finishing, delivery & installation. 1-2x design revisions at no extra cost.'}
                </p>
                <div className="custom-order-timeline-detail">
                  <strong>{isIndonesian ? 'Durasi:' : 'Duration:'}</strong> {isIndonesian ? '2-5 hari kerja' : '2-5 working days'}<br />
                  <strong>{isIndonesian ? 'Output:' : 'Output:'}</strong> {isIndonesian ? '3D render + quotation PDF terdetail' : '3D render + detailed PDF quotation'}
                </div>
              </div>
            </div>

            <div className="custom-order-timeline-item">
              <div className="custom-order-timeline-marker">
                <div className="custom-order-timeline-number">04</div>
                <div className="custom-order-timeline-line"></div>
              </div>
              <div className="custom-order-timeline-content">
                <div className="custom-order-timeline-icon">
                  <DollarSign size={36} strokeWidth={1.5} />
                </div>
                <h3 className="custom-order-timeline-title">
                  {isIndonesian ? 'Down Payment & Material Procurement' : 'Down Payment & Material Procurement'}
                </h3>
                <p className="custom-order-timeline-description">
                  {isIndonesian 
                    ? 'Setelah desain disetujui, DP 50% untuk pembelian material. Kami procurement material premium dari supplier terpercaya: besi dari PT Krakatau Steel, kayu solid dari supplier grade A, powder coating Jotun. Semua material dicek quality control sebelum produksi.'
                    : 'After design approval, 50% DP for material purchase. We procure premium materials from trusted suppliers: steel from PT Krakatau Steel, grade A solid wood, Jotun powder coating. All materials undergo quality control before production.'}
                </p>
                <div className="custom-order-timeline-detail">
                  <strong>{isIndonesian ? 'Pembayaran:' : 'Payment:'}</strong> {isIndonesian ? 'DP 50% (IDR/USD diterima)' : '50% DP (IDR/USD accepted)'}<br />
                  <strong>{isIndonesian ? 'Metode:' : 'Method:'}</strong> {isIndonesian ? 'Transfer bank / Cash' : 'Bank transfer / Cash'}
                </div>
              </div>
            </div>

            <div className="custom-order-timeline-item">
              <div className="custom-order-timeline-marker">
                <div className="custom-order-timeline-number">05</div>
                <div className="custom-order-timeline-line"></div>
              </div>
              <div className="custom-order-timeline-content">
                <div className="custom-order-timeline-icon">
                  <Wrench size={36} strokeWidth={1.5} />
                </div>
                <h3 className="custom-order-timeline-title">
                  {isIndonesian ? 'Produksi & Quality Control' : 'Production & Quality Control'}
                </h3>
                <p className="custom-order-timeline-description">
                  {isIndonesian 
                    ? 'Tim produksi kami (10 tukang las + 5 tukang kayu + 3 finishing specialist) mulai eksekusi. Proses: cutting material → welding/joinery → grinding & sanding → primer coating → powder coating/painting → final assembly. Update progress via foto & video setiap 3-5 hari.'
                    : 'Our production team (10 welders + 5 carpenters + 3 finishing specialists) begins execution. Process: cutting material → welding/joinery → grinding & sanding → primer coating → powder coating/painting → final assembly. Progress updates via photos & videos every 3-5 days.'}
                </p>
                <div className="custom-order-timeline-detail">
                  <strong>{isIndonesian ? 'Durasi:' : 'Duration:'}</strong> {isIndonesian ? '15-25 hari kerja (reguler)' : '15-25 working days (regular)'}<br />
                  <strong>{isIndonesian ? 'QC:' : 'QC:'}</strong> {isIndonesian ? '3 checkpoint quality control' : '3 quality control checkpoints'}
                </div>
              </div>
            </div>

            <div className="custom-order-timeline-item">
              <div className="custom-order-timeline-marker">
                <div className="custom-order-timeline-number">06</div>
                <div className="custom-order-timeline-line"></div>
              </div>
              <div className="custom-order-timeline-content">
                <div className="custom-order-timeline-icon">
                  <CheckCircle size={36} strokeWidth={1.5} />
                </div>
                <h3 className="custom-order-timeline-title">
                  {isIndonesian ? 'Final Inspection & Approval' : 'Final Inspection & Approval'}
                </h3>
                <p className="custom-order-timeline-description">
                  {isIndonesian 
                    ? 'Furniture selesai! Kami invite Anda untuk inspeksi langsung di workshop atau kami kirim foto/video detail dari semua angle. Cek finishing, warna, dimensi, dan fungsionalitas. Jika ada minor adjustment, kami perbaiki on the spot.'
                    : 'Furniture is complete! We invite you for direct inspection at the workshop or send detailed photos/videos from all angles. Check finishing, color, dimensions, and functionality. If any minor adjustments needed, we fix on the spot.'}
                </p>
                <div className="custom-order-timeline-detail">
                  <strong>{isIndonesian ? 'Durasi:' : 'Duration:'}</strong> {isIndonesian ? '1-2 hari untuk approval' : '1-2 days for approval'}<br />
                  <strong>{isIndonesian ? 'Garansi:' : 'Warranty:'}</strong> {isIndonesian ? '2 tahun struktur, 1 tahun finishing' : '2 years structure, 1 year finishing'}
                </div>
              </div>
            </div>

            <div className="custom-order-timeline-item">
              <div className="custom-order-timeline-marker">
                <div className="custom-order-timeline-number">07</div>
              </div>
              <div className="custom-order-timeline-content">
                <div className="custom-order-timeline-icon">
                  <Truck size={36} strokeWidth={1.5} />
                </div>
                <h3 className="custom-order-timeline-title">
                  {isIndonesian ? 'Delivery, Instalasi & Pelunasan' : 'Delivery, Installation & Final Payment'}
                </h3>
                <p className="custom-order-timeline-description">
                  {isIndonesian 
                    ? 'Packaging aman dengan bubble wrap + kardus + wooden crate (untuk patio furniture outdoor). Tim instalasi kami rakit dan pasang di lokasi hingga sempurna. Pelunasan 50% setelah instalasi selesai. Bonus: panduan perawatan furniture & touch-up kit untuk minor scratches.'
                    : 'Safe packaging with bubble wrap + cardboard + wooden crate (for outdoor patio furniture). Our installation team assembles and installs on location until perfect. Final 50% payment after installation complete. Bonus: furniture care guide & touch-up kit for minor scratches.'}
                </p>
                <div className="custom-order-timeline-detail">
                  <strong>{isIndonesian ? 'Durasi:' : 'Duration:'}</strong> {isIndonesian ? '0.5-1 hari instalasi' : '0.5-1 day installation'}<br />
                  <strong>{isIndonesian ? 'Biaya delivery:' : 'Delivery cost:'}</strong> {isIndonesian ? 'Bekasi/Jakarta FREE, luar kota by mileage' : 'Bekasi/Jakarta FREE, outside by mileage'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="custom-order-pricing-section">
        <div className="custom-order-pricing-container">
          <h2 className="custom-order-pricing-title">
            {isIndonesian ? 'Harga Transparan & Kompetitif' : 'Transparent & Competitive Pricing'}
          </h2>
          <p className="custom-order-pricing-subtitle">
            {isIndonesian 
              ? 'Estimasi harga custom furniture berdasarkan kategori dan kompleksitas desain'
              : 'Custom furniture price estimates based on category and design complexity'}
          </p>
          
          <div className="custom-order-pricing-table">
            <div className="custom-order-pricing-row custom-order-pricing-header-row">
              <div className="custom-order-pricing-cell">
                {isIndonesian ? 'Kategori Produk' : 'Product Category'}
              </div>
              <div className="custom-order-pricing-cell">
                {isIndonesian ? 'Ukuran/Spesifikasi' : 'Size/Specification'}
              </div>
              <div className="custom-order-pricing-cell">
                {isIndonesian ? 'Harga Mulai (IDR)' : 'Starting Price (IDR)'}
              </div>
              <div className="custom-order-pricing-cell">
                {isIndonesian ? 'Harga Mulai (USD)' : 'Starting Price (USD)'}
              </div>
            </div>
            
            <div className="custom-order-pricing-row">
              <div className="custom-order-pricing-cell">
                <strong>{isIndonesian ? 'Meja Makan Industrial' : 'Industrial Dining Table'}</strong>
              </div>
              <div className="custom-order-pricing-cell">
                150x80cm, besi 4x4cm + kayu top
              </div>
              <div className="custom-order-pricing-cell">
                Rp 2,300,000
              </div>
              <div className="custom-order-pricing-cell">
                $145 USD
              </div>
            </div>

            <div className="custom-order-pricing-row">
              <div className="custom-order-pricing-cell">
                <strong>{isIndonesian ? 'Kursi Bar Cafe' : 'Cafe Bar Chair'}</strong>
              </div>
              <div className="custom-order-pricing-cell">
                Height 75cm, powder coating + cushion
              </div>
              <div className="custom-order-pricing-cell">
                Rp 950,000
              </div>
              <div className="custom-order-pricing-cell">
                $60 USD
              </div>
            </div>

            <div className="custom-order-pricing-row">
              <div className="custom-order-pricing-cell">
                <strong>{isIndonesian ? 'Patio Balcony Set' : 'Patio Balcony Set'}</strong>
              </div>
              <div className="custom-order-pricing-cell">
                1 table + 2 chairs, weather-resistant
              </div>
              <div className="custom-order-pricing-cell">
                Rp 3,200,000
              </div>
              <div className="custom-order-pricing-cell">
                $200 USD
              </div>
            </div>

            <div className="custom-order-pricing-row">
              <div className="custom-order-pricing-cell">
                <strong>{isIndonesian ? 'Rak Display Retail' : 'Retail Display Rack'}</strong>
              </div>
              <div className="custom-order-pricing-cell">
                180x60x200cm, multi-tier
              </div>
              <div className="custom-order-pricing-cell">
                Rp 2,600,000
              </div>
              <div className="custom-order-pricing-cell">
                $165 USD
              </div>
            </div>

            <div className="custom-order-pricing-row">
              <div className="custom-order-pricing-cell">
                <strong>{isIndonesian ? 'Outdoor Lounge Chair' : 'Outdoor Lounge Chair'}</strong>
              </div>
              <div className="custom-order-pricing-cell">
                Premium powder coating, cushion tahan air
              </div>
              <div className="custom-order-pricing-cell">
                Rp 1,850,000
              </div>
              <div className="custom-order-pricing-cell">
                $115 USD
              </div>
            </div>

            <div className="custom-order-pricing-row">
              <div className="custom-order-pricing-cell">
                <strong>{isIndonesian ? 'Meja Kerja Kantor' : 'Office Work Desk'}</strong>
              </div>
              <div className="custom-order-pricing-cell">
                120x60cm, dengan cable management
              </div>
              <div className="custom-order-pricing-cell">
                Rp 2,100,000
              </div>
              <div className="custom-order-pricing-cell">
                $132 USD
              </div>
            </div>
          </div>

          <div className="custom-order-pricing-notes">
            <h4>{isIndonesian ? 'Catatan Penting Harga:' : 'Important Pricing Notes:'}</h4>
            <ul>
              <li>{isIndonesian 
                ? '✓ Harga di atas adalah estimasi starting price untuk desain standard dengan material grade standar'
                : '✓ Above prices are starting price estimates for standard designs with standard grade materials'}</li>
              <li>{isIndonesian 
                ? '✓ Custom design kompleks, material premium (besi 6x6cm, kayu jati, finishing electroplating) akan adjust harga'
                : '✓ Complex custom designs, premium materials (6x6cm steel, teak wood, electroplating finish) will adjust pricing'}</li>
              <li>{isIndonesian 
                ? '✓ Harga sudah termasuk: material, produksi, standard finishing (powder coating/painting), packing'
                : '✓ Prices include: materials, production, standard finishing (powder coating/painting), packing'}</li>
              <li>{isIndonesian 
                ? '✓ Belum termasuk: delivery (FREE Bekasi/Jakarta Timur, outside by mileage), instalasi (negotiable)'
                : '✓ Not included: delivery (FREE Bekasi/East Jakarta, outside by mileage), installation (negotiable)'}</li>
              <li>{isIndonesian 
                ? '✓ Pembayaran: DP 50%, Pelunasan 50% setelah instalasi. Terima IDR (Rupiah) dan USD (Dollar)'
                : '✓ Payment: 50% DP, 50% Final after installation. Accept IDR (Rupiah) and USD (Dollar)'}</li>
              <li>{isIndonesian 
                ? '✓ Diskon volume: Order 5-10 unit (5% off), 11-20 unit (10% off), 21+ unit (nego up to 15% off)'
                : '✓ Volume discount: Order 5-10 units (5% off), 11-20 units (10% off), 21+ units (nego up to 15% off)'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="custom-order-materials-section">
        <div className="custom-order-materials-container">
          <h2 className="custom-order-materials-title">
            {isIndonesian ? 'Material Premium yang Kami Gunakan' : 'Premium Materials We Use'}
          </h2>
          <div className="custom-order-materials-grid">
            <div className="custom-order-material-card">
              <h4>{isIndonesian ? 'Besi Hollow & Solid' : 'Hollow & Solid Steel'}</h4>
              <p>{isIndonesian 
                ? 'Besi hollow 4x4cm, 5x5cm, 6x6cm dari PT Krakatau Steel. Untuk struktur berat gunakan solid steel bar. Anti karat dengan galvanized coating.'
                : 'Hollow steel 4x4cm, 5x5cm, 6x6cm from PT Krakatau Steel. For heavy structures use solid steel bar. Rust-resistant with galvanized coating.'}</p>
            </div>
            <div className="custom-order-material-card">
              <h4>{isIndonesian ? 'Kayu Solid Grade A' : 'Grade A Solid Wood'}</h4>
              <p>{isIndonesian 
                ? 'Kayu jati, mahoni, sungkai grade A. Proses kiln-dried untuk stabilitas dimensi. Table top thickness 2-3cm.'
                : 'Teak, mahogany, sungkai wood grade A. Kiln-dried process for dimensional stability. Table top thickness 2-3cm.'}</p>
            </div>
            <div className="custom-order-material-card">
              <h4>{isIndonesian ? 'Powder Coating Premium' : 'Premium Powder Coating'}</h4>
              <p>{isIndonesian 
                ? 'Jotun atau Nippon powder coating standar ekspor. Thickness 60-80 micron. Pilihan warna 50+ varian. Tahan UV & weatherproof untuk patio.'
                : 'Jotun or Nippon export-standard powder coating. Thickness 60-80 microns. 50+ color variant options. UV resistant & weatherproof for patio.'}</p>
            </div>
            <div className="custom-order-material-card">
              <h4>{isIndonesian ? 'Hardware & Accessories' : 'Hardware & Accessories'}</h4>
              <p>{isIndonesian 
                ? 'Baut stainless steel, bracket reinforcement, leveling feet adjustable, soft-close hinges untuk kabinet.'
                : 'Stainless steel bolts, reinforcement brackets, adjustable leveling feet, soft-close hinges for cabinets.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="custom-order-cta-section">
        <div className="custom-order-cta-container">
          <div className="custom-order-cta-content">
            <h2 className="custom-order-cta-title">
              {isIndonesian ? 'Siap Mulai Project Custom Furniture Anda?' : 'Ready to Start Your Custom Furniture Project?'}
            </h2>
            <p className="custom-order-cta-description">
              {isIndonesian 
                ? 'Dari konsep awal hingga instalasi final, tim Mangala Living siap mewujudkan visi furniture industrial Anda dengan kualitas ekspor dan harga factory direct. Apakah itu untuk cafe, restoran, patio outdoor, kantor, hotel, atau rumah—kami punya pengalaman dan kapabilitas untuk deliver hasil yang melampaui ekspektasi.'
                : 'From initial concept to final installation, the Mangala Living team is ready to realize your industrial furniture vision with export quality and factory direct prices. Whether it\'s for cafes, restaurants, outdoor patios, offices, hotels, or homes—we have the experience and capability to deliver results that exceed expectations.'}
            </p>
            <p className="custom-order-cta-description">
              {isIndonesian 
                ? 'Hubungi kami sekarang untuk konsultasi GRATIS. Diskusikan ide Anda, dapatkan estimasi harga, dan lihat portfolio project kami yang telah menghiasi ratusan space di Bekasi, Jakarta, Cikarang, dan berbagai kota lain.'
                : 'Contact us now for a FREE consultation. Discuss your ideas, get price estimates, and view our project portfolio that has adorned hundreds of spaces in Bekasi, Jakarta, Cikarang, and various other cities.'}
            </p>
            
            <div className="custom-order-cta-buttons">
              <a 
                href="https://wa.me/6285212078467" 
                target="_blank" 
                rel="noopener noreferrer"
                className="custom-order-cta-button custom-order-cta-button-primary"
              >
                <MessageCircle size={20} />
                {isIndonesian ? 'WhatsApp Sekarang' : 'WhatsApp Now'}
              </a>
              <a 
                href={catalogPDF}
                download="Mangala-Living-Catalog-2025.pdf"
                className="custom-order-cta-button custom-order-cta-button-secondary"
              >
                <Download size={20} />
                {isIndonesian ? 'Download Katalog 2025' : 'Download 2025 Catalog'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="custom-order-contact-section">
        <div className="custom-order-contact-container">
          <h2 className="custom-order-contact-title">
            {isIndonesian ? 'Kunjungi Workshop & Showroom Kami' : 'Visit Our Workshop & Showroom'}
          </h2>
          
          <div className="custom-order-contact-grid">
            <div className="custom-order-contact-card">
              <div className="custom-order-contact-icon">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h4>{isIndonesian ? 'Alamat Workshop' : 'Workshop Address'}</h4>
              <p>
                <strong>Mangala Living Workshop</strong><br />
                <a 
                  href="https://maps.app.goo.gl/ABqcrJ4Wv864RrjT9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="custom-order-contact-link"
                >
                  Jl. Raya Setu Cibitung<br />
                  Telajung, Kec. Cikarang Barat<br />
                  Kabupaten Bekasi, Jawa Barat 17320
                </a>
              </p>
              <p className="custom-order-contact-note">
                {isIndonesian 
                  ? '📍 10 menit dari Tol Cibitung | 25 menit dari Jakarta Timur'
                  : '📍 10 minutes from Cibitung Toll | 25 minutes from East Jakarta'}
              </p>
            </div>

            <div className="custom-order-contact-card">
              <div className="custom-order-contact-icon">
                <Phone size={32} strokeWidth={1.5} />
              </div>
              <h4>{isIndonesian ? 'Telepon & WhatsApp' : 'Phone & WhatsApp'}</h4>
              <p>
                <a 
                  href="https://wa.me/6285212078467" 
                  className="custom-order-contact-link custom-order-contact-link-primary"
                >
                  +62 852-1207-8467
                </a>
              </p>
              <p className="custom-order-contact-note">
                {isIndonesian 
                  ? '💬 Senin-Sabtu: 08.00-17.00 WIB<br />Response time: 1-3 jam (working hours)'
                  : '💬 Monday-Saturday: 08.00-17.00 WIB<br />Response time: 1-3 hours (working hours)'}
              </p>
            </div>

            <div className="custom-order-contact-card">
              <div className="custom-order-contact-icon">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <h4>{isIndonesian ? 'Email Resmi' : 'Official Email'}</h4>
              <p>
                <a 
                  href="mailto:info@mangala-living.com" 
                  className="custom-order-contact-link"
                >
                  info@mangala-living.com
                </a>
              </p>
              <p>
                <a 
                  href="mailto:sales@mangala-living.com" 
                  className="custom-order-contact-link"
                >
                  sales@mangala-living.com
                </a>
              </p>
              <p className="custom-order-contact-note">
                {isIndonesian 
                  ? '📧 Untuk quotation & partnership inquiry'
                  : '📧 For quotation & partnership inquiry'}
              </p>
            </div>
          </div>

          <div className="custom-order-contact-footer">
            <p>
              {isIndonesian 
                ? '🏭 Workshop luas 500m² dengan tim produksi 18 orang | 📦 Pengalaman ekspor ke Malaysia, Singapura, Australia'
                : '🏭 500m² workshop with 18-person production team | 📦 Export experience to Malaysia, Singapore, Australia'}
            </p>
          </div>
        </div>
      </section>

      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default CustomOrder
