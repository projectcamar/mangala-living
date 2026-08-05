/**
 * Steel Services Data — Custom Steel Fabrication Cluster
 * Powers: CustomSteelWorks hub page + all individual ServiceDetail pages
 * SEO: Each service has unique slug, keywords, meta title, and meta description
 */

export type LanguageCode = 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'

export interface ServiceTranslation {
  name: string
  shortDesc: string
  longDesc: string
  heroTitle: string
  heroSubtitle: string
  materialTitle: string
  materials: string[]
  processTitle: string
  process: string[]
  faqs: Array<{ q: string; a: string }>
}

export interface SteelService {
  slug: string
  icon: string
  cluster: 'residential' | 'commercial' | 'industrial' | 'wrought-iron'
  keywords: string[]
  metaTitle: { en: string; id: string }
  metaDescription: { en: string; id: string }
  unsplashQuery: string
  translations: {
    en: ServiceTranslation
    id: ServiceTranslation
  }
}

export interface ServiceCluster {
  key: 'residential' | 'commercial' | 'industrial' | 'wrought-iron'
  icon: string
  label: { en: string; id: string; ar: string; zh: string; ja: string; es: string; fr: string; ko: string }
  description: { en: string; id: string }
}

export const SERVICE_CLUSTERS: ServiceCluster[] = [
  {
    key: 'residential',
    icon: '🏠',
    label: {
      en: 'Residential',
      id: 'Hunian & Properti',
      ar: 'سكني',
      zh: '住宅',
      ja: '住宅用',
      es: 'Residencial',
      fr: 'Résidentiel',
      ko: '주거용',
    },
    description: {
      en: 'Custom steel fabrication for homes, villas, and residential properties — canopies, railings, gates, fences, and more.',
      id: 'Fabrikasi besi custom untuk rumah, vila, dan properti hunian — kanopi, railing, pagar, teralis, dan lainnya.',
    },
  },
  {
    key: 'commercial',
    icon: '🏢',
    label: {
      en: 'Commercial',
      id: 'Komersial',
      ar: 'تجاري',
      zh: '商业',
      ja: '商業用',
      es: 'Comercial',
      fr: 'Commercial',
      ko: '상업용',
    },
    description: {
      en: 'Steel structures and fixtures for cafes, restaurants, offices, retail stores, and hospitality businesses.',
      id: 'Struktur dan fixture besi untuk cafe, restoran, kantor, toko retail, dan bisnis hospitality.',
    },
  },
  {
    key: 'industrial',
    icon: '🏭',
    label: {
      en: 'Industrial Fabrication',
      id: 'Fabrikasi Industrial',
      ar: 'تصنيع صناعي',
      zh: '工业制造',
      ja: '工業用製造',
      es: 'Fabricación Industrial',
      fr: 'Fabrication Industrielle',
      ko: '산업용 제작',
    },
    description: {
      en: 'Heavy-duty steel fabrication, welding services, custom steel frames, mezzanines, and industrial metalwork.',
      id: 'Fabrikasi besi heavy-duty, jasa las, frame baja custom, mezzanine, dan pekerjaan logam industrial.',
    },
  },
  {
    key: 'wrought-iron',
    icon: '⚜️',
    label: {
      en: 'Wrought Iron & Decorative',
      id: 'Besi Tempa & Dekoratif',
      ar: 'حديد مطروق وزخرفي',
      zh: '熟铁与装饰铁艺',
      ja: '錬鉄・装飾鉄芸',
      es: 'Hierro Forjado y Decorativo',
      fr: 'Fer Forgé et Décoratif',
      ko: '단조철 및 장식',
    },
    description: {
      en: 'Classic and ornamental wrought iron works — gates, fences, railings, balconies, and decorative metal panels.',
      id: 'Karya besi tempa klasik dan ornamental — pagar, railing, balkon, dan panel logam dekoratif.',
    },
  },
]

export const STEEL_SERVICES: SteelService[] = [
  // ── RESIDENTIAL ─────────────────────────────────────────────────────────────
  {
    slug: 'kanopi',
    icon: '🏗️',
    cluster: 'residential',
    keywords: ['kanopi besi', 'kanopi minimalis', 'kanopi hollow', 'jasa kanopi bekasi', 'kanopi polycarbonate', 'kanopi alderon', 'canopy steel'],
    metaTitle: {
      en: 'Custom Steel Canopy Bekasi | Canopy Installation Indonesia | Mangala Living',
      id: 'Kanopi Besi Custom Bekasi | Jasa Pemasangan Kanopi | Mangala Living',
    },
    metaDescription: {
      en: 'Professional steel canopy fabrication & installation in Bekasi. Hollow steel, polycarbonate, and alderon canopies for homes and commercial properties. Free consultation.',
      id: 'Jasa pembuatan dan pemasangan kanopi besi custom di Bekasi. Material hollow, polycarbonate, dan alderon untuk hunian dan komersial. Konsultasi gratis.',
    },
    unsplashQuery: 'steel canopy modern architecture',
    translations: {
      en: {
        name: 'Steel Canopy',
        shortDesc: 'Custom steel canopies for homes & commercial spaces',
        longDesc: 'Professional steel canopy fabrication tailored to your space. We work with hollow steel, galvanized steel, polycarbonate, and alderon roofing. Every canopy is custom-measured, powder-coated, and installed by our experienced team from our Bekasi workshop.',
        heroTitle: 'Custom Steel Canopy — Bekasi Workshop',
        heroSubtitle: 'Durable, weather-resistant canopies for homes, garages, cafes, and commercial properties. Factory-direct pricing, 1-year warranty.',
        materialTitle: 'Available Materials',
        materials: ['Hollow Steel (40x40, 40x60, 60x60)', 'Galvanized Steel', 'Polycarbonate Roofing', 'Alderon Roofing', 'Spandek Roofing', 'Powder Coat Finish'],
        processTitle: 'Our Process',
        process: ['Free site survey & consultation', 'Custom design & material selection', 'Fabrication at Bekasi workshop', 'On-site installation', 'Quality inspection & handover'],
        faqs: [
          { q: 'How long does canopy installation take?', a: 'Typically 3–7 working days depending on size. Large commercial canopies may take up to 14 days.' },
          { q: 'Do you offer polycarbonate or alderon roofing?', a: 'Yes. We work with polycarbonate (twin-wall and multiwall), alderon, and spandek roofing panels. We recommend polycarbonate for weather-resistant light transmission.' },
          { q: 'Can you make a canopy for a cafe or restaurant?', a: 'Absolutely. Commercial canopies for cafes, restaurants, and storefronts are one of our specialties. We can integrate lighting and branding elements.' },
          { q: 'What is the price range for a steel canopy?', a: 'Starting from Rp 500.000/m² for hollow steel with spandek roofing. Polycarbonate and alderon canopies start from Rp 800.000/m². Contact us for a free custom quote.' },
        ],
      },
      id: {
        name: 'Kanopi Besi',
        shortDesc: 'Kanopi besi custom untuk hunian & komersial',
        longDesc: 'Jasa pembuatan kanopi besi custom sesuai ukuran dan kebutuhan Anda. Kami menggunakan material hollow besi, besi galvanis, polycarbonate, dan alderon. Setiap kanopi dikerjakan dengan presisi, difinishing powder coat, dan dipasang langsung oleh tim berpengalaman dari workshop Bekasi kami.',
        heroTitle: 'Kanopi Besi Custom — Workshop Bekasi',
        heroSubtitle: 'Kanopi tahan cuaca untuk rumah, garasi, cafe, dan properti komersial. Harga langsung dari pabrik, garansi 1 tahun.',
        materialTitle: 'Pilihan Material',
        materials: ['Hollow Besi (40x40, 40x60, 60x60)', 'Besi Galvanis', 'Atap Polycarbonate', 'Atap Alderon', 'Atap Spandek', 'Finishing Powder Coat'],
        processTitle: 'Proses Pengerjaan',
        process: ['Survey lokasi & konsultasi gratis', 'Desain custom & pemilihan material', 'Fabrikasi di workshop Bekasi', 'Pemasangan di lokasi', 'Inspeksi kualitas & serah terima'],
        faqs: [
          { q: 'Berapa lama proses pemasangan kanopi?', a: 'Umumnya 3–7 hari kerja tergantung ukuran. Kanopi komersial besar bisa memakan waktu hingga 14 hari.' },
          { q: 'Apakah tersedia kanopi polycarbonate atau alderon?', a: 'Ya. Kami menyediakan atap polycarbonate (twin-wall & multiwall), alderon, dan spandek. Polycarbonate direkomendasikan untuk pencahayaan alami yang optimal.' },
          { q: 'Bisa bikin kanopi untuk cafe atau restoran?', a: 'Tentu. Kanopi komersial untuk cafe, restoran, dan toko adalah salah satu spesialisasi kami. Kami bisa mengintegrasikan pencahayaan dan elemen branding.' },
          { q: 'Berapa harga kanopi besi?', a: 'Mulai dari Rp 500.000/m² untuk hollow besi dengan atap spandek. Kanopi polycarbonate dan alderon mulai dari Rp 800.000/m². Hubungi kami untuk penawaran custom gratis.' },
        ],
      },
    },
  },
  {
    slug: 'teralis',
    icon: '🪟',
    cluster: 'residential',
    keywords: ['teralis jendela', 'teralis pintu', 'teralis minimalis', 'teralis besi bekasi', 'window grille steel', 'security grille'],
    metaTitle: {
      en: 'Custom Steel Window Grilles Bekasi | Security Grilles Indonesia | Mangala Living',
      id: 'Teralis Jendela & Pintu Custom Bekasi | Teralis Besi Minimalis | Mangala Living',
    },
    metaDescription: {
      en: 'Custom steel window and door grilles for homes and commercial buildings. Security grilles with modern minimalist or classic designs. Bekasi workshop, free consultation.',
      id: 'Teralis jendela dan pintu besi custom untuk rumah dan gedung komersial. Desain minimalis modern atau klasik. Workshop Bekasi, konsultasi gratis.',
    },
    unsplashQuery: 'steel window grille minimalist modern',
    translations: {
      en: {
        name: 'Window & Door Grilles',
        shortDesc: 'Security grilles with modern or classic design',
        longDesc: 'Custom-fabricated steel window and door grilles providing security without sacrificing aesthetics. Available in minimalist flat bar, hollow frame, ornamental, and classic styles. All grilles are powder-coated for long-lasting corrosion resistance.',
        heroTitle: 'Custom Steel Grilles — Window & Door Security',
        heroSubtitle: 'Security grilles for homes, apartments, and commercial buildings. Modern minimalist to classic designs. Factory-direct from Bekasi.',
        materialTitle: 'Design Styles',
        materials: ['Minimalist Flat Bar', 'Hollow Frame Grid', 'Ornamental / Classic', 'Stainless Steel', 'Powder Coat (any color)', 'Custom Pattern on Request'],
        processTitle: 'Our Process',
        process: ['Measure windows & doors on-site', 'Design consultation (minimalist or classic)', 'Fabrication in Bekasi', 'Delivery & installation', 'Warranty & after-sales support'],
        faqs: [
          { q: 'Can I get custom patterns for grilles?', a: 'Yes. We can fabricate any pattern you design, including ornamental, geometric, and brand-themed patterns.' },
          { q: 'Do grilles require painting after installation?', a: 'No. All our grilles come with powder coat finish which is far more durable than conventional paint and resistant to rust.' },
          { q: 'Can you make grilles for sliding doors?', a: 'Yes. We produce sliding door security grilles, folding grilles, and fixed grilles for all door and window types.' },
        ],
      },
      id: {
        name: 'Teralis Jendela & Pintu',
        shortDesc: 'Teralis keamanan dengan desain modern atau klasik',
        longDesc: 'Teralis jendela dan pintu besi custom yang memberikan keamanan tanpa mengorbankan estetika. Tersedia dalam gaya minimalis flat bar, rangka hollow, ornamental, dan klasik. Semua teralis difinishing powder coat untuk ketahanan korosi jangka panjang.',
        heroTitle: 'Teralis Besi Custom — Jendela & Pintu',
        heroSubtitle: 'Teralis keamanan untuk rumah, apartemen, dan gedung komersial. Desain minimalis modern hingga klasik. Langsung dari workshop Bekasi.',
        materialTitle: 'Pilihan Desain',
        materials: ['Minimalis Flat Bar', 'Rangka Hollow Grid', 'Ornamental / Klasik', 'Stainless Steel', 'Powder Coat (pilih warna)', 'Pattern Custom sesuai permintaan'],
        processTitle: 'Proses Pengerjaan',
        process: ['Ukur jendela & pintu di lokasi', 'Konsultasi desain (minimalis atau klasik)', 'Fabrikasi di workshop Bekasi', 'Pengiriman & pemasangan', 'Garansi & dukungan purna jual'],
        faqs: [
          { q: 'Bisa buat teralis dengan motif custom?', a: 'Ya. Kami bisa memfabrikasi motif apa pun, termasuk ornamental, geometris, dan motif sesuai brand Anda.' },
          { q: 'Apakah teralis perlu dicat setelah pemasangan?', a: 'Tidak. Semua teralis kami sudah difinishing powder coat yang jauh lebih tahan lama dari cat biasa dan tahan karat.' },
          { q: 'Bisa buat teralis untuk pintu sliding?', a: 'Ya. Kami memproduksi teralis pintu sliding, teralis lipat, dan teralis tetap untuk semua jenis pintu dan jendela.' },
        ],
      },
    },
  },
  {
    slug: 'pagar-besi-minimalis',
    icon: '🚧',
    cluster: 'residential',
    keywords: ['pagar besi minimalis', 'pagar besi hollow', 'pagar rumah minimalis', 'jasa pagar besi bekasi', 'steel fence minimalist'],
    metaTitle: {
      en: 'Minimalist Steel Fence Bekasi | Custom Iron Fence Indonesia | Mangala Living',
      id: 'Pagar Besi Minimalis Bekasi | Pagar Hollow Custom | Mangala Living',
    },
    metaDescription: {
      en: 'Custom minimalist steel fences for homes and commercial properties. Hollow steel, flat bar, and ornamental designs. Bekasi workshop, powder coat finish, free installation quote.',
      id: 'Pagar besi minimalis custom untuk rumah dan properti komersial. Material hollow, flat bar, dan ornamental. Workshop Bekasi, finishing powder coat, penawaran gratis.',
    },
    unsplashQuery: 'minimalist steel fence modern home',
    translations: {
      en: {
        name: 'Minimalist Steel Fence',
        shortDesc: 'Sleek steel fencing for residential & commercial properties',
        longDesc: 'Modern minimalist steel fences combining security with architectural beauty. We fabricate from hollow steel, flat bar, and round pipe, available in any height and style — from ultra-minimalist horizontal slats to classic vertical bars with ornamental accents.',
        heroTitle: 'Minimalist Steel Fence — Custom Fabrication',
        heroSubtitle: 'Secure your property in style. Hollow steel, flat bar, and ornamental fences for homes and commercial buildings. Bekasi workshop.',
        materialTitle: 'Available Materials',
        materials: ['Hollow Steel (various profiles)', 'Steel Flat Bar', 'Round Steel Pipe', 'Square Steel Pipe', 'Galvanized Options', 'Powder Coat Finish'],
        processTitle: 'Our Process',
        process: ['Site survey & measurement', 'Design mockup & approval', 'Workshop fabrication', 'Transport & installation', 'Quality check & handover'],
        faqs: [
          { q: 'What is the standard height for residential fences?', a: 'Typical residential fence height is 150–200cm. We can fabricate any height you require.' },
          { q: 'How long does a steel fence last?', a: 'With proper powder coat finish and minimal maintenance, steel fences typically last 15–25 years.' },
          { q: 'Do you install the fence or just fabricate it?', a: 'We offer full service — fabrication AND installation. Our team will handle everything from site preparation to final installation.' },
        ],
      },
      id: {
        name: 'Pagar Besi Minimalis',
        shortDesc: 'Pagar besi elegan untuk hunian & properti komersial',
        longDesc: 'Pagar besi minimalis modern yang memadukan keamanan dan keindahan arsitektur. Kami memfabrikasi dari hollow besi, flat bar, dan pipa besi, tersedia dalam berbagai tinggi dan gaya — dari slat horizontal ultra-minimalis hingga batang vertikal klasik dengan aksen ornamental.',
        heroTitle: 'Pagar Besi Minimalis — Custom Bekasi',
        heroSubtitle: 'Lindungi properti Anda dengan gaya. Pagar hollow, flat bar, dan ornamental untuk rumah dan gedung komersial. Workshop Bekasi.',
        materialTitle: 'Pilihan Material',
        materials: ['Hollow Besi (berbagai profil)', 'Flat Bar Baja', 'Pipa Besi Bulat', 'Pipa Besi Kotak', 'Pilihan Galvanis', 'Finishing Powder Coat'],
        processTitle: 'Proses Pengerjaan',
        process: ['Survey lokasi & pengukuran', 'Mockup desain & persetujuan', 'Fabrikasi di workshop', 'Pengiriman & pemasangan', 'Inspeksi kualitas & serah terima'],
        faqs: [
          { q: 'Berapa tinggi standar pagar rumah?', a: 'Tinggi pagar rumah umumnya 150–200cm. Kami bisa memfabrikasi sesuai tinggi yang Anda butuhkan.' },
          { q: 'Berapa lama umur pagar besi?', a: 'Dengan finishing powder coat yang tepat dan perawatan minimal, pagar besi umumnya tahan 15–25 tahun.' },
          { q: 'Apakah termasuk jasa pemasangan?', a: 'Ya. Kami menyediakan layanan lengkap — fabrikasi DAN pemasangan. Tim kami menangani segalanya dari persiapan lokasi hingga pemasangan akhir.' },
        ],
      },
    },
  },
  {
    slug: 'pintu-pagar',
    icon: '🚪',
    cluster: 'residential',
    keywords: ['pintu pagar sliding', 'pintu pagar swing', 'pintu pagar besi', 'pintu pagar minimalis bekasi', 'steel gate'],
    metaTitle: {
      en: 'Custom Steel Gate Bekasi | Sliding & Swing Gate | Mangala Living',
      id: 'Pintu Pagar Besi Custom Bekasi | Sliding & Swing Gate | Mangala Living',
    },
    metaDescription: {
      en: 'Custom sliding and swing steel gates for homes and commercial properties. Motorized or manual options. Bekasi workshop, free consultation and installation quote.',
      id: 'Pintu pagar besi sliding dan swing custom untuk rumah dan properti komersial. Pilihan manual atau motorized. Workshop Bekasi, konsultasi & penawaran gratis.',
    },
    unsplashQuery: 'modern steel gate driveway',
    translations: {
      en: {
        name: 'Steel Gate (Sliding & Swing)',
        shortDesc: 'Custom sliding and swing gates for homes & commercial properties',
        longDesc: 'Secure, stylish steel gates for residential driveways and commercial entrances. We fabricate both sliding gates (single and double track) and swing gates, available in minimalist, modern, or ornamental designs, with optional motorized automation.',
        heroTitle: 'Custom Steel Gate — Sliding & Swing',
        heroSubtitle: 'Minimalist or ornamental steel gates for homes and businesses. Manual or motorized. Custom design, factory-direct pricing.',
        materialTitle: 'Gate Options',
        materials: ['Sliding Gate (Single/Double Track)', 'Swing Gate (Single/Double Leaf)', 'Motorized Automation (optional)', 'Hollow Steel Frame', 'Flat Bar Design', 'Powder Coat Finish'],
        processTitle: 'Our Process',
        process: ['Site survey & width measurement', 'Gate type & design selection', 'Fabrication in Bekasi', 'Track/hinge installation', 'Motor setup (if motorized)', 'Final testing & handover'],
        faqs: [
          { q: 'What is the difference between sliding and swing gates?', a: 'Sliding gates move horizontally along a track — ideal for narrow driveways. Swing gates open inward or outward — great for wider entrances with clearance space.' },
          { q: 'Can the gate be motorized later?', a: 'Yes. We can design gates with motor-ready infrastructure so you can add automation at any time.' },
          { q: 'What is the maximum width you can fabricate?', a: 'We can fabricate gates up to 6 meters wide for sliding gates and up to 4 meters for swing gates.' },
        ],
      },
      id: {
        name: 'Pintu Pagar (Sliding & Swing)',
        shortDesc: 'Pintu pagar sliding dan swing custom untuk hunian & komersial',
        longDesc: 'Pintu pagar besi kokoh dan stylish untuk garasi rumah dan entrance komersial. Kami memfabrikasi pintu pagar sliding (single dan double track) maupun swing, tersedia dalam desain minimalis, modern, atau ornamental, dengan opsi otomasi motorized.',
        heroTitle: 'Pintu Pagar Besi Custom — Sliding & Swing',
        heroSubtitle: 'Pintu pagar minimalis atau ornamental untuk rumah dan bisnis. Manual atau motorized. Desain custom, harga langsung dari pabrik.',
        materialTitle: 'Pilihan Pintu Pagar',
        materials: ['Sliding Gate (Single/Double Track)', 'Swing Gate (Single/Double Daun)', 'Otomasi Motorized (opsional)', 'Frame Hollow Besi', 'Desain Flat Bar', 'Finishing Powder Coat'],
        processTitle: 'Proses Pengerjaan',
        process: ['Survey lokasi & ukur lebar pintu', 'Pilih tipe & desain pintu pagar', 'Fabrikasi di workshop Bekasi', 'Pemasangan rel/engsel', 'Setup motor (jika motorized)', 'Testing akhir & serah terima'],
        faqs: [
          { q: 'Apa perbedaan pintu pagar sliding dan swing?', a: 'Pintu pagar sliding bergerak horizontal di atas rel — cocok untuk garasi sempit. Pintu pagar swing terbuka ke dalam atau ke luar — bagus untuk entrance yang lebih lebar.' },
          { q: 'Bisa ditambahkan motor otomatis belakangan?', a: 'Ya. Kami bisa merancang pintu pagar dengan infrastruktur motor-ready sehingga Anda bisa menambahkan otomasi kapan saja.' },
          { q: 'Berapa lebar maksimal yang bisa dibuat?', a: 'Kami bisa memfabrikasi pintu pagar sliding hingga 6 meter dan swing hingga 4 meter.' },
        ],
      },
    },
  },
  {
    slug: 'folding-gate',
    icon: '🔐',
    cluster: 'residential',
    keywords: ['folding gate', 'folding gate besi', 'folding gate bekasi', 'pintu lipat besi', 'rolling door', 'accordion gate'],
    metaTitle: {
      en: 'Custom Folding Gate Bekasi | Steel Accordion Gate | Mangala Living',
      id: 'Folding Gate Custom Bekasi | Pintu Lipat Besi | Mangala Living',
    },
    metaDescription: {
      en: 'Custom steel folding gates for homes, shops, and garages. Space-saving accordion design, powder-coated finish. Bekasi workshop, free installation consultation.',
      id: 'Folding gate besi custom untuk rumah, toko, dan garasi. Desain accordion hemat tempat, finishing powder coat. Workshop Bekasi, konsultasi pemasangan gratis.',
    },
    unsplashQuery: 'steel folding gate shop front',
    translations: {
      en: {
        name: 'Folding Gate',
        shortDesc: 'Space-saving accordion steel gates for shops & garages',
        longDesc: 'Steel folding gates (accordion gates) are ideal for storefronts, garages, and commercial entrances where space for a sliding or swing gate is limited. Our folding gates fold neatly to the side, are powder-coated, and can be fitted with locks for security.',
        heroTitle: 'Custom Folding Gate — Steel Accordion Door',
        heroSubtitle: 'Space-saving steel folding gates for shops, garages, and commercial fronts. Durable, secure, and powder-coated.',
        materialTitle: 'Available Types',
        materials: ['Single Accordion (folds to one side)', 'Double Accordion (folds both sides)', 'Full-height Door Type', 'Half-height Type', 'With Lock & Security Bar', 'Powder Coat Finish'],
        processTitle: 'Our Process',
        process: ['Measure opening width & height', 'Select accordion type & finish color', 'Fabrication in Bekasi', 'On-site installation with track', 'Lock fitting & final handover'],
        faqs: [
          { q: 'How much space does a folding gate require?', a: 'A folding gate only needs about 15–20% of the opening width as clearance on the folding side — far less than a swing gate.' },
          { q: 'Is a folding gate suitable for shopfronts?', a: 'Yes, folding gates are widely used for shopfronts, mini-markets, and commercial entrances due to their compactness.' },
          { q: 'Can folding gates be motorized?', a: 'Basic motorized options are available for some folding gate configurations. Ask us about this during consultation.' },
        ],
      },
      id: {
        name: 'Folding Gate',
        shortDesc: 'Pintu lipat besi hemat tempat untuk toko & garasi',
        longDesc: 'Folding gate besi ideal untuk toko, garasi, dan entrance komersial di mana ruang untuk pintu pagar sliding atau swing terbatas. Folding gate kami terlipat rapi ke samping, difinishing powder coat, dan dilengkapi kunci untuk keamanan.',
        heroTitle: 'Folding Gate Custom — Pintu Lipat Besi',
        heroSubtitle: 'Folding gate besi hemat tempat untuk toko, garasi, dan entrance komersial. Kokoh, aman, dan berfinishing powder coat.',
        materialTitle: 'Tipe yang Tersedia',
        materials: ['Single Accordion (lipat satu sisi)', 'Double Accordion (lipat dua sisi)', 'Tipe Pintu Full-height', 'Tipe Half-height', 'Dengan Kunci & Security Bar', 'Finishing Powder Coat'],
        processTitle: 'Proses Pengerjaan',
        process: ['Ukur lebar & tinggi bukaan', 'Pilih tipe accordion & warna finishing', 'Fabrikasi di workshop Bekasi', 'Pemasangan di lokasi dengan rel', 'Pemasangan kunci & serah terima'],
        faqs: [
          { q: 'Berapa ruang yang dibutuhkan folding gate?', a: 'Folding gate hanya membutuhkan sekitar 15–20% dari lebar bukaan sebagai clearance di sisi lipatan — jauh lebih kecil dari pintu swing.' },
          { q: 'Apakah folding gate cocok untuk toko?', a: 'Ya, folding gate banyak digunakan untuk toko, minimarket, dan entrance komersial karena kekompakannya.' },
          { q: 'Bisa folding gate dipasang motor otomatis?', a: 'Opsi motorized tersedia untuk beberapa konfigurasi folding gate. Tanyakan kepada kami saat konsultasi.' },
        ],
      },
    },
  },
  {
    slug: 'railing-balkon',
    icon: '🏛️',
    cluster: 'residential',
    keywords: ['railing balkon', 'railing balcony', 'pagar balkon besi', 'railing besi minimalis', 'balcony railing steel bekasi'],
    metaTitle: {
      en: 'Custom Balcony Railing Bekasi | Steel Balustrade Indonesia | Mangala Living',
      id: 'Railing Balkon Custom Bekasi | Pagar Balkon Besi | Mangala Living',
    },
    metaDescription: {
      en: 'Custom steel balcony railings and balustrades for homes, apartments, and hotels. Minimalist, industrial, or ornamental designs. Free consultation, Bekasi workshop.',
      id: 'Railing balkon besi custom untuk rumah, apartemen, dan hotel. Desain minimalis, industrial, atau ornamental. Konsultasi gratis, workshop Bekasi.',
    },
    unsplashQuery: 'steel balcony railing modern architecture',
    translations: {
      en: {
        name: 'Balcony Railing',
        shortDesc: 'Steel balcony railings in minimalist, industrial, or ornamental styles',
        longDesc: 'Custom steel balcony railings that enhance the architectural beauty of your property while ensuring safety. We fabricate flat bar horizontal railings, industrial-style vertical bar railings, glass-panel railings with steel frames, and classic ornamental railings.',
        heroTitle: 'Custom Balcony Railing — Steel Balustrade',
        heroSubtitle: 'Architectural steel railings for balconies, terraces, and outdoor decks. Safety and beauty in every detail.',
        materialTitle: 'Available Styles',
        materials: ['Horizontal Flat Bar (minimalist)', 'Vertical Rod (industrial)', 'Glass Panel with Steel Frame', 'Classic Ornamental', 'Round Pipe Railing', 'Powder Coat or Stainless Finish'],
        processTitle: 'Our Process',
        process: ['Site measurement & consultation', 'Design selection & material choice', 'Fabrication in Bekasi workshop', 'On-site installation & anchoring', 'Safety inspection & handover'],
        faqs: [
          { q: 'What is the standard height for balcony railings?', a: 'Indonesian building code recommends a minimum of 100cm for balcony railings. We typically recommend 110–120cm for residential use.' },
          { q: 'Can you combine steel with glass panels?', a: 'Yes. We can fabricate steel frames for tempered glass panels, creating a modern, open look while maintaining structural integrity.' },
          { q: 'Are stainless steel railings available?', a: 'Yes. We offer stainless steel 304 and 316 options which require no painting and are highly corrosion resistant.' },
        ],
      },
      id: {
        name: 'Railing Balkon',
        shortDesc: 'Railing balkon besi gaya minimalis, industrial, atau ornamental',
        longDesc: 'Railing balkon besi custom yang meningkatkan keindahan arsitektur properti Anda sekaligus memastikan keamanan. Kami memfabrikasi railing horizontal flat bar, railing batang vertikal industrial, railing panel kaca dengan rangka besi, dan railing ornamental klasik.',
        heroTitle: 'Railing Balkon Custom — Pagar Balkon Besi',
        heroSubtitle: 'Railing besi arsitektural untuk balkon, teras, dan dek outdoor. Keamanan dan keindahan di setiap detail.',
        materialTitle: 'Pilihan Gaya',
        materials: ['Horizontal Flat Bar (minimalis)', 'Batang Vertikal (industrial)', 'Panel Kaca dengan Rangka Besi', 'Ornamental Klasik', 'Pipa Bulat Railing', 'Finishing Powder Coat atau Stainless'],
        processTitle: 'Proses Pengerjaan',
        process: ['Pengukuran lokasi & konsultasi', 'Pilih desain & material', 'Fabrikasi di workshop Bekasi', 'Pemasangan di lokasi & pengangkuran', 'Inspeksi keamanan & serah terima'],
        faqs: [
          { q: 'Berapa tinggi standar railing balkon?', a: 'Standar bangunan Indonesia merekomendasikan minimum 100cm untuk railing balkon. Kami umumnya menyarankan 110–120cm untuk hunian.' },
          { q: 'Bisa kombinasi besi dengan panel kaca?', a: 'Ya. Kami bisa memfabrikasi rangka besi untuk panel kaca tempered, menciptakan tampilan modern dan terbuka dengan tetap menjaga integritas struktural.' },
          { q: 'Tersedia railing stainless steel?', a: 'Ya. Kami menyediakan opsi stainless steel 304 dan 316 yang tidak perlu dicat dan sangat tahan korosi.' },
        ],
      },
    },
  },
  {
    slug: 'railing-tangga',
    icon: '🪜',
    cluster: 'residential',
    keywords: ['railing tangga', 'stair railing steel', 'handrail besi', 'railing tangga minimalis', 'railing tangga bekasi'],
    metaTitle: {
      en: 'Custom Stair Railing Bekasi | Steel Handrail Indonesia | Mangala Living',
      id: 'Railing Tangga Custom Bekasi | Handrail Besi Minimalis | Mangala Living',
    },
    metaDescription: {
      en: 'Custom steel stair railings and handrails for homes, offices, and commercial buildings. Minimalist, industrial, or ornamental styles. Bekasi workshop, free quote.',
      id: 'Railing tangga dan handrail besi custom untuk rumah, kantor, dan gedung komersial. Gaya minimalis, industrial, atau ornamental. Workshop Bekasi, penawaran gratis.',
    },
    unsplashQuery: 'steel stair railing modern interior',
    translations: {
      en: {
        name: 'Stair Railing',
        shortDesc: 'Custom steel stair railings for interiors & exteriors',
        longDesc: 'Well-designed stair railings are both safety features and architectural statements. We fabricate custom stair railings in flat bar, round pipe, square tube, and combination designs — suitable for indoor stairs, outdoor steps, and commercial staircases.',
        heroTitle: 'Custom Stair Railing — Steel Handrail',
        heroSubtitle: 'Safety meets style. Custom steel stair railings for homes, offices, and commercial spaces.',
        materialTitle: 'Available Materials',
        materials: ['Steel Flat Bar', 'Round Steel Pipe', 'Square Steel Tube', 'Stainless Steel 304/316', 'Combination with Timber', 'Powder Coat Finish'],
        processTitle: 'Our Process',
        process: ['Staircase measurement & site survey', 'Design consultation & material selection', 'Fabrication in Bekasi', 'Installation with wall/floor anchoring', 'Final inspection & handover'],
        faqs: [
          { q: 'Can you match the railing to my existing interior design?', a: 'Yes. We can fabricate railings to complement any interior style — industrial, modern, Scandinavian, or classic. Share your reference photos for consultation.' },
          { q: 'Do you work on outdoor staircases?', a: 'Yes. For outdoor staircases we recommend galvanized or powder-coated finishes for maximum weather resistance.' },
          { q: 'Can timber be combined with steel for the handrail?', a: 'Yes. We can integrate timber top rails with steel balusters for a warm, mixed-material look.' },
        ],
      },
      id: {
        name: 'Railing Tangga',
        shortDesc: 'Railing tangga besi custom untuk interior & eksterior',
        longDesc: 'Railing tangga yang dirancang baik merupakan fitur keamanan sekaligus pernyataan arsitektural. Kami memfabrikasi railing tangga custom dari flat bar, pipa bulat, pipa kotak, dan desain kombinasi — cocok untuk tangga indoor, tangga outdoor, dan tangga komersial.',
        heroTitle: 'Railing Tangga Custom — Handrail Besi',
        heroSubtitle: 'Keamanan bertemu estetika. Railing tangga besi custom untuk rumah, kantor, dan ruang komersial.',
        materialTitle: 'Pilihan Material',
        materials: ['Flat Bar Baja', 'Pipa Besi Bulat', 'Pipa Baja Kotak', 'Stainless Steel 304/316', 'Kombinasi dengan Kayu', 'Finishing Powder Coat'],
        processTitle: 'Proses Pengerjaan',
        process: ['Ukur tangga & survey lokasi', 'Konsultasi desain & pemilihan material', 'Fabrikasi di workshop Bekasi', 'Pemasangan dengan angkur dinding/lantai', 'Inspeksi akhir & serah terima'],
        faqs: [
          { q: 'Bisa disesuaikan dengan desain interior yang sudah ada?', a: 'Ya. Kami bisa memfabrikasi railing yang sesuai dengan gaya interior apa pun — industrial, modern, Skandinavian, atau klasik. Kirimkan foto referensi untuk konsultasi.' },
          { q: 'Apakah mengerjakan tangga outdoor?', a: 'Ya. Untuk tangga outdoor kami merekomendasikan finishing galvanis atau powder coat untuk ketahanan cuaca maksimal.' },
          { q: 'Bisa dikombinasikan kayu dengan besi untuk handrail?', a: 'Ya. Kami bisa mengintegrasikan handrail atas dari kayu dengan balusters besi untuk tampilan mixed-material yang hangat.' },
        ],
      },
    },
  },
  {
    slug: 'tangga-besi',
    icon: '📐',
    cluster: 'residential',
    keywords: ['tangga besi', 'tangga besi custom', 'steel staircase', 'tangga hollow besi', 'jasa bikin tangga besi bekasi'],
    metaTitle: {
      en: 'Custom Steel Staircase Bekasi | Steel Stairs Indonesia | Mangala Living',
      id: 'Tangga Besi Custom Bekasi | Tangga Hollow Besi | Mangala Living',
    },
    metaDescription: {
      en: 'Custom steel staircases for homes, offices, and commercial buildings. Floating stairs, spiral stairs, and straight stairs with steel frames. Bekasi workshop.',
      id: 'Tangga besi custom untuk rumah, kantor, dan gedung komersial. Tangga melayang, tangga spiral, dan tangga lurus rangka besi. Workshop Bekasi.',
    },
    unsplashQuery: 'custom steel staircase interior design',
    translations: {
      en: {
        name: 'Steel Staircase',
        shortDesc: 'Custom steel staircases — floating, spiral & straight',
        longDesc: 'Custom steel staircases engineered for safety, durability, and architectural impact. We fabricate straight staircases with steel stringers, spiral staircases, floating (cantilevered) staircases, and combination steel-timber staircases. All compliant with Indonesian structural standards.',
        heroTitle: 'Custom Steel Staircase — Bekasi Workshop',
        heroSubtitle: 'Floating, spiral, and straight steel staircases for homes and commercial buildings. Custom design, engineered for safety.',
        materialTitle: 'Staircase Types',
        materials: ['Straight Staircase (steel stringer)', 'Floating / Cantilevered Stairs', 'Spiral Staircase', 'L-shaped & U-shaped', 'Steel + Timber Combination', 'Anti-slip Grating Treads'],
        processTitle: 'Our Process',
        process: ['Space assessment & structural review', 'Engineering design & approval', 'Steel fabrication in workshop', 'On-site assembly & installation', 'Load testing & quality sign-off'],
        faqs: [
          { q: 'Do floating stairs require wall reinforcement?', a: 'Yes. Cantilevered stairs require wall anchoring with structural support. We assess the wall structure before fabrication to ensure safety.' },
          { q: 'Can you add timber treads on a steel staircase?', a: 'Yes. We fabricate the steel structure and can integrate timber, stone, or concrete treads as requested.' },
          { q: 'Do you handle permits for structural steel?', a: 'We provide fabrication drawings and structural calculations upon request to assist with building permit applications.' },
        ],
      },
      id: {
        name: 'Tangga Besi',
        shortDesc: 'Tangga besi custom — melayang, spiral & lurus',
        longDesc: 'Tangga besi custom yang direkayasa untuk keamanan, ketahanan, dan dampak arsitektural. Kami memfabrikasi tangga lurus dengan stringer baja, tangga spiral, tangga melayang (kantilever), dan tangga kombinasi besi-kayu. Semua sesuai standar struktural Indonesia.',
        heroTitle: 'Tangga Besi Custom — Workshop Bekasi',
        heroSubtitle: 'Tangga besi melayang, spiral, dan lurus untuk rumah dan gedung komersial. Desain custom, direkayasa untuk keamanan.',
        materialTitle: 'Tipe Tangga',
        materials: ['Tangga Lurus (stringer baja)', 'Tangga Melayang / Kantilever', 'Tangga Spiral', 'Tangga Bentuk L & U', 'Kombinasi Besi + Kayu', 'Anak Tangga Anti-Slip Grating'],
        processTitle: 'Proses Pengerjaan',
        process: ['Penilaian ruang & review struktural', 'Desain rekayasa & persetujuan', 'Fabrikasi baja di workshop', 'Perakitan & pemasangan di lokasi', 'Uji beban & penandatanganan kualitas'],
        faqs: [
          { q: 'Apakah tangga melayang memerlukan penguatan dinding?', a: 'Ya. Tangga kantilever memerlukan angkur dinding dengan dukungan struktural. Kami menilai struktur dinding sebelum fabrikasi untuk memastikan keamanan.' },
          { q: 'Bisa ditambahkan anak tangga kayu?', a: 'Ya. Kami memfabrikasi struktur besi dan bisa mengintegrasikan anak tangga kayu, batu, atau beton sesuai permintaan.' },
          { q: 'Apakah menangani izin bangunan untuk baja struktural?', a: 'Kami menyediakan gambar fabrikasi dan perhitungan struktural atas permintaan untuk membantu aplikasi izin bangunan.' },
        ],
      },
    },
  },
  {
    slug: 'pergola',
    icon: '🌿',
    cluster: 'residential',
    keywords: ['pergola besi', 'pergola hollow', 'pergola minimalis', 'jasa pergola bekasi', 'steel pergola garden'],
    metaTitle: {
      en: 'Custom Steel Pergola Bekasi | Garden Pergola Indonesia | Mangala Living',
      id: 'Pergola Besi Custom Bekasi | Pergola Hollow Minimalis | Mangala Living',
    },
    metaDescription: {
      en: 'Custom steel pergolas for gardens, terraces, and outdoor spaces. Minimalist hollow steel designs with polycarbonate, alderon, or open-roof options. Bekasi workshop.',
      id: 'Pergola besi custom untuk taman, teras, dan ruang outdoor. Desain hollow minimalis dengan atap polycarbonate, alderon, atau open-roof. Workshop Bekasi.',
    },
    unsplashQuery: 'steel pergola modern garden outdoor',
    translations: {
      en: {
        name: 'Steel Pergola',
        shortDesc: 'Custom steel pergolas for gardens, terraces & outdoor areas',
        longDesc: 'Steel pergolas transform outdoor spaces into beautiful, functional areas. We fabricate minimalist hollow-steel pergolas, open-roof pergolas for natural ventilation, and covered pergolas with polycarbonate or alderon roofing. Ideal for gardens, pool areas, cafes, and restaurant terraces.',
        heroTitle: 'Custom Steel Pergola — Outdoor Structure',
        heroSubtitle: 'Transform your garden or terrace with a custom steel pergola. Modern minimalist or lush with climbing plants — we build it your way.',
        materialTitle: 'Pergola Options',
        materials: ['Open Roof (natural ventilation)', 'Polycarbonate Covered', 'Alderon Covered', 'Shading Net (paranet)', 'Integrated Lighting', 'Powder Coat Finish'],
        processTitle: 'Our Process',
        process: ['Site consultation & measurement', 'Design & material selection', 'Fabrication in Bekasi', 'Foundation & post installation', 'Roof panel installation', 'Final finish & handover'],
        faqs: [
          { q: 'Can a pergola support climbing plants?', a: 'Yes. Open-roof pergolas are designed to support climbing plants like bougainvillea, jasmine, and wisteria. We can add horizontal wires or mesh for plant guidance.' },
          { q: 'Is a steel pergola suitable for a cafe terrace?', a: 'Absolutely. Steel pergolas are one of our most popular products for cafe and restaurant outdoor areas. We can add integrated lighting and branding.' },
          { q: 'How is the foundation done?', a: 'Pergola posts are anchored into concrete foundations (typically 30x30x50cm depth). We include foundation work in our installation service.' },
        ],
      },
      id: {
        name: 'Pergola Besi',
        shortDesc: 'Pergola besi custom untuk taman, teras & area outdoor',
        longDesc: 'Pergola besi mengubah ruang outdoor menjadi area yang indah dan fungsional. Kami memfabrikasi pergola hollow minimalis, pergola open-roof untuk ventilasi alami, dan pergola tertutup dengan atap polycarbonate atau alderon. Ideal untuk taman, area kolam renang, cafe, dan teras restoran.',
        heroTitle: 'Pergola Besi Custom — Struktur Outdoor',
        heroSubtitle: 'Transformasikan taman atau teras Anda dengan pergola besi custom. Minimalis modern atau rindang dengan tanaman rambat — kami membangunnya sesuai keinginan Anda.',
        materialTitle: 'Pilihan Pergola',
        materials: ['Open Roof (ventilasi alami)', 'Tertutup Polycarbonate', 'Tertutup Alderon', 'Paranet Shading', 'Lampu Terintegrasi', 'Finishing Powder Coat'],
        processTitle: 'Proses Pengerjaan',
        process: ['Konsultasi lokasi & pengukuran', 'Desain & pemilihan material', 'Fabrikasi di workshop Bekasi', 'Pemasangan pondasi & tiang', 'Pemasangan panel atap', 'Finishing akhir & serah terima'],
        faqs: [
          { q: 'Bisa untuk tanaman rambat?', a: 'Ya. Pergola open-roof dirancang untuk menopang tanaman rambat seperti bougenville, melati, dan wisteria. Kami bisa menambahkan kawat atau mesh horizontal untuk panduan tanaman.' },
          { q: 'Apakah pergola besi cocok untuk teras cafe?', a: 'Tentu. Pergola besi adalah salah satu produk kami yang paling populer untuk area outdoor cafe dan restoran. Kami bisa menambahkan lampu terintegrasi dan branding.' },
          { q: 'Bagaimana cara pemasangan pondasi?', a: 'Tiang pergola diangkur ke pondasi beton (biasanya 30x30x50cm kedalaman). Kami menyertakan pekerjaan pondasi dalam layanan pemasangan kami.' },
        ],
      },
    },
  },
  {
    slug: 'carport',
    icon: '🚗',
    cluster: 'residential',
    keywords: ['carport besi', 'carport hollow', 'carport minimalis bekasi', 'kanopi garasi', 'steel carport garage'],
    metaTitle: {
      en: 'Custom Steel Carport Bekasi | Garage Canopy Indonesia | Mangala Living',
      id: 'Carport Besi Custom Bekasi | Kanopi Garasi Minimalis | Mangala Living',
    },
    metaDescription: {
      en: 'Custom steel carports for single and double garages. Polycarbonate, alderon, and spandek roofing options. Bekasi workshop, factory-direct pricing, free consultation.',
      id: 'Carport besi custom untuk garasi single dan double. Pilihan atap polycarbonate, alderon, dan spandek. Workshop Bekasi, harga pabrik, konsultasi gratis.',
    },
    unsplashQuery: 'modern steel carport minimalist home',
    translations: {
      en: {
        name: 'Steel Carport',
        shortDesc: 'Custom steel carports for single & double garages',
        longDesc: 'Protect your vehicle with a custom steel carport. We design and fabricate single, double, and triple carports using hollow steel frames with polycarbonate, alderon, or spandek roofing. Modern minimalist designs that complement your home\'s architecture.',
        heroTitle: 'Custom Steel Carport — Garage Canopy',
        heroSubtitle: 'Protect your car in style. Custom hollow steel carports with polycarbonate or alderon roofing for homes across Indonesia.',
        materialTitle: 'Carport Options',
        materials: ['Single Carport (1 car)', 'Double Carport (2 cars)', 'Triple Carport (3 cars)', 'Polycarbonate Roofing', 'Alderon Roofing', 'Spandek Roofing'],
        processTitle: 'Our Process',
        process: ['Site measurement', 'Design & material selection', 'Fabrication in Bekasi', 'Post anchoring & frame installation', 'Roof panel installation', 'Final handover'],
        faqs: [
          { q: 'What roof type is best for a carport?', a: 'For heat reduction, polycarbonate (UV-blocking) or alderon is recommended. For maximum durability and minimal maintenance, spandek roofing is cost-effective.' },
          { q: 'Can a carport be attached to the house wall?', a: 'Yes. We can design carports that attach to the house wall or stand as freestanding structures depending on your layout.' },
          { q: 'What is the standard carport size?', a: 'A single carport is typically 3–4m wide and 5–6m deep. A double carport is 5–7m wide. We fabricate to your exact dimensions.' },
        ],
      },
      id: {
        name: 'Carport Besi',
        shortDesc: 'Carport besi custom untuk garasi single & double',
        longDesc: 'Lindungi kendaraan Anda dengan carport besi custom. Kami merancang dan memfabrikasi carport single, double, dan triple menggunakan rangka hollow besi dengan atap polycarbonate, alderon, atau spandek. Desain minimalis modern yang melengkapi arsitektur rumah Anda.',
        heroTitle: 'Carport Besi Custom — Kanopi Garasi',
        heroSubtitle: 'Lindungi mobil Anda dengan gaya. Carport hollow besi custom dengan atap polycarbonate atau alderon untuk rumah di seluruh Indonesia.',
        materialTitle: 'Pilihan Carport',
        materials: ['Single Carport (1 mobil)', 'Double Carport (2 mobil)', 'Triple Carport (3 mobil)', 'Atap Polycarbonate', 'Atap Alderon', 'Atap Spandek'],
        processTitle: 'Proses Pengerjaan',
        process: ['Pengukuran lokasi', 'Desain & pemilihan material', 'Fabrikasi di workshop Bekasi', 'Pemasangan angkur tiang & rangka', 'Pemasangan panel atap', 'Serah terima'],
        faqs: [
          { q: 'Atap apa yang terbaik untuk carport?', a: 'Untuk pengurangan panas, polycarbonate (blokir UV) atau alderon direkomendasikan. Untuk ketahanan maksimal dan perawatan minimal, atap spandek adalah pilihan yang hemat biaya.' },
          { q: 'Bisa carport ditempel ke dinding rumah?', a: 'Ya. Kami bisa merancang carport yang menempel ke dinding rumah atau berdiri sendiri tergantung tata letak Anda.' },
          { q: 'Berapa ukuran standar carport?', a: 'Carport single umumnya 3–4m lebar dan 5–6m dalam. Carport double 5–7m lebar. Kami memfabrikasi sesuai dimensi Anda.' },
        ],
      },
    },
  },
  {
    slug: 'besi-tempa',
    icon: '⚜️',
    cluster: 'wrought-iron',
    keywords: ['besi tempa', 'wrought iron', 'pagar besi tempa', 'railing besi tempa', 'ornamental iron bekasi', 'pintu besi tempa'],
    metaTitle: {
      en: 'Wrought Iron Works Bekasi | Ornamental Iron Gate & Railing | Mangala Living',
      id: 'Besi Tempa Bekasi | Pagar & Railing Ornamental | Mangala Living',
    },
    metaDescription: {
      en: 'Classic wrought iron fabrication — gates, fences, railings, balconies, and decorative metalwork. Ornamental ironwork from our Bekasi workshop. Custom designs welcome.',
      id: 'Fabrikasi besi tempa klasik — pagar, railing, balkon, dan karya logam dekoratif. Ornamental ironwork dari workshop Bekasi kami. Desain custom diterima.',
    },
    unsplashQuery: 'wrought iron gate ornamental classic',
    translations: {
      en: {
        name: 'Wrought Iron & Ornamental',
        shortDesc: 'Classic ornamental wrought iron gates, railings & decorative metal',
        longDesc: 'Traditional ornamental ironwork combining artisan craftsmanship with modern fabrication. We produce wrought iron gates, fences, railings, balcony balustrades, and decorative metal panels. Perfect for classic, Victorian, Balinese, and heritage-style properties.',
        heroTitle: 'Wrought Iron — Ornamental Ironwork',
        heroSubtitle: 'Artisan ornamental metalwork for gates, railings, fences, and decorative elements. Classic beauty, lasting craftsmanship.',
        materialTitle: 'Available Products',
        materials: ['Wrought Iron Gate', 'Ornamental Fence', 'Wrought Iron Railing', 'Balcony Balustrade', 'Decorative Metal Panel', 'Custom Ornamental Elements'],
        processTitle: 'Our Process',
        process: ['Design consultation & reference sharing', 'Custom design drawing & approval', 'Forging & welding in workshop', 'Finishing (black paint or powder coat)', 'Installation & final handover'],
        faqs: [
          { q: 'What is wrought iron vs. regular steel?', a: 'Wrought iron refers to ornamental ironwork with decorative elements — scrolls, leaves, curls. It uses mild steel or flat bar shaped into artistic forms. It is different from cast iron.' },
          { q: 'Can I bring my own design reference?', a: 'Yes. We welcome photos, sketches, or digital references. Our team will translate your vision into a working design drawing.' },
          { q: 'How long does ornamental ironwork take to fabricate?', a: 'Typically 2–4 weeks depending on complexity and quantity. Simpler designs can be ready in 1 week.' },
        ],
      },
      id: {
        name: 'Besi Tempa & Ornamental',
        shortDesc: 'Besi tempa ornamental klasik — pagar, railing & logam dekoratif',
        longDesc: 'Karya besi tempa ornamental tradisional yang memadukan keahlian pengrajin dengan fabrikasi modern. Kami memproduksi pagar besi tempa, pagar ornamental, railing, baluster balkon, dan panel logam dekoratif. Sempurna untuk properti bergaya klasik, Victoria, Bali, dan heritage.',
        heroTitle: 'Besi Tempa — Ornamental Ironwork',
        heroSubtitle: 'Karya logam ornamental untuk pagar, railing, dan elemen dekoratif. Keindahan klasik, keahlian abadi.',
        materialTitle: 'Produk yang Tersedia',
        materials: ['Pagar Besi Tempa', 'Pagar Ornamental', 'Railing Besi Tempa', 'Baluster Balkon', 'Panel Logam Dekoratif', 'Elemen Ornamental Custom'],
        processTitle: 'Proses Pengerjaan',
        process: ['Konsultasi desain & berbagi referensi', 'Gambar desain custom & persetujuan', 'Penempaan & pengelasan di workshop', 'Finishing (cat hitam atau powder coat)', 'Pemasangan & serah terima'],
        faqs: [
          { q: 'Apa itu besi tempa vs besi biasa?', a: 'Besi tempa merujuk pada karya besi ornamental dengan elemen dekoratif — gulungan, daun, lengkungan. Menggunakan mild steel atau flat bar yang dibentuk menjadi bentuk artistik.' },
          { q: 'Bisa bawa referensi desain sendiri?', a: 'Ya. Kami menerima foto, sketsa, atau referensi digital. Tim kami akan menerjemahkan visi Anda menjadi gambar desain yang bisa dikerjakan.' },
          { q: 'Berapa lama waktu fabrikasi ornamental besi?', a: 'Umumnya 2–4 minggu tergantung kompleksitas dan kuantitas. Desain sederhana bisa selesai dalam 1 minggu.' },
        ],
      },
    },
  },
  // ── COMMERCIAL ──────────────────────────────────────────────────────────────
  {
    slug: 'partisi-besi',
    icon: '🏗️',
    cluster: 'commercial',
    keywords: ['partisi besi', 'steel partition', 'cafe partition', 'restaurant divider steel', 'interior partition besi bekasi'],
    metaTitle: {
      en: 'Custom Steel Partition Bekasi | Cafe & Restaurant Divider | Mangala Living',
      id: 'Partisi Besi Custom Bekasi | Partisi Cafe & Restoran | Mangala Living',
    },
    metaDescription: {
      en: 'Custom steel partitions and room dividers for cafes, restaurants, offices, and retail stores. Industrial-style steel and glass partitions from Bekasi workshop.',
      id: 'Partisi besi custom dan pembatas ruangan untuk cafe, restoran, kantor, dan toko retail. Partisi besi dan kaca gaya industrial dari workshop Bekasi.',
    },
    unsplashQuery: 'steel glass partition cafe interior',
    translations: {
      en: {
        name: 'Steel Partition',
        shortDesc: 'Industrial steel partitions for cafes, restaurants & offices',
        longDesc: 'Custom steel partitions and room dividers that define spaces without permanent walls. We fabricate full-height steel frame partitions with glass panels, half-height dividers, industrial mesh partitions, and decorative steel screens — perfect for cafes, restaurants, offices, and retail interiors.',
        heroTitle: 'Custom Steel Partition — Industrial Room Divider',
        heroSubtitle: 'Define your space with custom steel partitions. Glass and steel combinations for modern cafes, restaurants, and commercial interiors.',
        materialTitle: 'Partition Types',
        materials: ['Full-height Steel + Glass', 'Half-height Steel Divider', 'Industrial Mesh Screen', 'Decorative Metal Panel', 'Sliding Steel Partition', 'Fixed Frame with Shelving'],
        processTitle: 'Our Process',
        process: ['Space planning consultation', 'Design & material selection', 'Fabrication in Bekasi', 'On-site installation & anchoring', 'Final styling & handover'],
        faqs: [
          { q: 'Do steel partitions need to be anchored to the floor?', a: 'Heavy full-height partitions are typically floor-anchored. Lightweight half-height dividers can be freestanding.' },
          { q: 'Can the partition include shelving or storage?', a: 'Yes. We can integrate shelving, hooks, or display brackets into the partition design.' },
          { q: 'Are partitions suitable for outdoor restaurant areas?', a: 'Yes. For outdoor use we use galvanized or stainless steel with weather-resistant finishes.' },
        ],
      },
      id: {
        name: 'Partisi Besi',
        shortDesc: 'Partisi besi industrial untuk cafe, restoran & kantor',
        longDesc: 'Partisi besi custom dan pembatas ruangan yang mendefinisikan ruang tanpa dinding permanen. Kami memfabrikasi partisi rangka besi full-height dengan panel kaca, divider half-height, partisi mesh industrial, dan layar logam dekoratif — sempurna untuk interior cafe, restoran, kantor, dan retail.',
        heroTitle: 'Partisi Besi Custom — Industrial Room Divider',
        heroSubtitle: 'Definisikan ruang Anda dengan partisi besi custom. Kombinasi kaca dan besi untuk cafe, restoran, dan interior komersial modern.',
        materialTitle: 'Tipe Partisi',
        materials: ['Full-height Besi + Kaca', 'Divider Half-height', 'Layar Mesh Industrial', 'Panel Logam Dekoratif', 'Partisi Besi Sliding', 'Rangka Tetap dengan Rak'],
        processTitle: 'Proses Pengerjaan',
        process: ['Konsultasi perencanaan ruang', 'Desain & pemilihan material', 'Fabrikasi di workshop Bekasi', 'Pemasangan di lokasi & pengangkuran', 'Styling akhir & serah terima'],
        faqs: [
          { q: 'Apakah partisi besi perlu diangkur ke lantai?', a: 'Partisi full-height berat biasanya diangkur ke lantai. Divider half-height yang ringan bisa berdiri sendiri.' },
          { q: 'Bisa partisi include rak atau penyimpanan?', a: 'Ya. Kami bisa mengintegrasikan rak, kait, atau braket display ke dalam desain partisi.' },
          { q: 'Apakah partisi cocok untuk area restoran outdoor?', a: 'Ya. Untuk penggunaan outdoor kami menggunakan besi galvanis atau stainless dengan finishing tahan cuaca.' },
        ],
      },
    },
  },
  // ── INDUSTRIAL FABRICATION ──────────────────────────────────────────────────
  {
    slug: 'jasa-las-custom',
    icon: '⚡',
    cluster: 'industrial',
    keywords: ['jasa las bekasi', 'jasa las custom', 'bengkel las bekasi', 'custom steel fabrication', 'welding service bekasi', 'jasa fabrikasi baja'],
    metaTitle: {
      en: 'Custom Steel Fabrication & Welding Service Bekasi | Mangala Living',
      id: 'Jasa Las Custom & Fabrikasi Baja Bekasi | Bengkel Las Bekasi | Mangala Living',
    },
    metaDescription: {
      en: 'Professional steel fabrication and welding services from our Bekasi workshop. Mild steel, hollow steel, and stainless steel. Custom metalwork for commercial and industrial projects.',
      id: 'Jasa fabrikasi baja dan las profesional dari workshop Bekasi kami. Mild steel, hollow besi, dan stainless. Metalwork custom untuk proyek komersial dan industrial.',
    },
    unsplashQuery: 'steel fabrication welding workshop industrial',
    translations: {
      en: {
        name: 'Custom Steel Fabrication & Welding',
        shortDesc: 'Professional welding and steel fabrication from Bekasi workshop',
        longDesc: 'Professional custom steel fabrication and welding service for commercial and industrial projects. We work with mild steel, hollow steel, galvanized steel, stainless steel, and structural steel. From custom frames and platforms to machine bases and industrial fixtures.',
        heroTitle: 'Custom Steel Fabrication & Welding — Bekasi',
        heroSubtitle: 'Professional steel fabrication for commercial, industrial, and architectural projects. Factory-direct, 25+ years experience.',
        materialTitle: 'Materials & Services',
        materials: ['Mild Steel Fabrication', 'Hollow Steel Fabrication', 'Stainless Steel 304/316', 'Structural Steel', 'MIG/TIG/ARC Welding', 'Powder Coat Finishing'],
        processTitle: 'Our Process',
        process: ['Technical brief & requirement analysis', 'Engineering drawing & material plan', 'Steel cutting & preparation', 'Welding & assembly', 'Surface treatment & finishing', 'Quality inspection & delivery'],
        faqs: [
          { q: 'Do you accept small custom orders?', a: 'Yes. We accept both small custom orders (single pieces) and large production runs. Contact us with your requirements.' },
          { q: 'Do you provide engineering drawings?', a: 'Yes. We can prepare fabrication drawings for your approval before production begins.' },
          { q: 'What welding methods do you use?', a: 'We use MIG (GMAW), TIG (GTAW), and SMAW (stick) welding depending on the material and application.' },
        ],
      },
      id: {
        name: 'Jasa Las & Fabrikasi Baja Custom',
        shortDesc: 'Jasa las dan fabrikasi baja profesional dari workshop Bekasi',
        longDesc: 'Jasa fabrikasi baja custom dan las profesional untuk proyek komersial dan industrial. Kami bekerja dengan mild steel, hollow besi, besi galvanis, stainless steel, dan baja struktural. Dari rangka custom dan platform hingga dudukan mesin dan fixture industrial.',
        heroTitle: 'Jasa Las Custom & Fabrikasi Baja — Bekasi',
        heroSubtitle: 'Fabrikasi baja profesional untuk proyek komersial, industrial, dan arsitektural. Langsung dari pabrik, pengalaman 25+ tahun.',
        materialTitle: 'Material & Layanan',
        materials: ['Fabrikasi Mild Steel', 'Fabrikasi Hollow Besi', 'Stainless Steel 304/316', 'Baja Struktural', 'Las MIG/TIG/ARC', 'Finishing Powder Coat'],
        processTitle: 'Proses Pengerjaan',
        process: ['Brief teknis & analisis kebutuhan', 'Gambar teknik & rencana material', 'Pemotongan & persiapan baja', 'Pengelasan & perakitan', 'Treatment permukaan & finishing', 'Inspeksi kualitas & pengiriman'],
        faqs: [
          { q: 'Apakah menerima pesanan custom kecil?', a: 'Ya. Kami menerima pesanan custom kecil (satu buah) maupun produksi massal. Hubungi kami dengan kebutuhan Anda.' },
          { q: 'Apakah menyediakan gambar teknik?', a: 'Ya. Kami bisa menyiapkan gambar fabrikasi untuk persetujuan Anda sebelum produksi dimulai.' },
          { q: 'Metode las apa yang digunakan?', a: 'Kami menggunakan las MIG (GMAW), TIG (GTAW), dan SMAW (stick) tergantung material dan aplikasi.' },
        ],
      },
    },
  },
  {
    slug: 'rak-gudang',
    icon: '📦',
    cluster: 'industrial',
    keywords: ['rak gudang besi', 'heavy duty rack', 'rak pabrik', 'industrial shelving', 'warehouse rack bekasi', 'rak besi heavy duty'],
    metaTitle: {
      en: 'Heavy Duty Warehouse Rack Bekasi | Industrial Shelving | Mangala Living',
      id: 'Rak Gudang Besi Heavy Duty Bekasi | Rak Industrial | Mangala Living',
    },
    metaDescription: {
      en: 'Custom heavy-duty steel warehouse racks and industrial shelving for factories, warehouses, and commercial storage. Bekasi workshop, factory-direct pricing.',
      id: 'Rak gudang besi heavy-duty dan rak industrial custom untuk pabrik, gudang, dan penyimpanan komersial. Workshop Bekasi, harga pabrik.',
    },
    unsplashQuery: 'warehouse industrial shelving rack steel',
    translations: {
      en: {
        name: 'Heavy-Duty Warehouse Rack',
        shortDesc: 'Industrial steel racks for warehouses, factories & commercial storage',
        longDesc: 'Custom heavy-duty steel warehouse racks engineered for industrial-grade storage. We fabricate pallet racks, longspan shelving, mezzanine-mounted racks, and custom storage solutions for warehouses, factories, retail storerooms, and commercial spaces.',
        heroTitle: 'Heavy-Duty Warehouse Rack — Industrial Steel',
        heroSubtitle: 'Custom industrial steel racks for warehouses and factories. Load-rated, powder-coated, and ready for heavy-duty use.',
        materialTitle: 'Rack Types',
        materials: ['Pallet Rack (selective)', 'Longspan Shelving', 'Medium Duty Shelving', 'Cantilever Rack', 'Mezzanine Storage', 'Custom Storage Configurations'],
        processTitle: 'Our Process',
        process: ['Warehouse space assessment', 'Load capacity calculation', 'Custom rack design', 'Steel fabrication in Bekasi', 'On-site assembly & installation', 'Load testing & handover'],
        faqs: [
          { q: 'What load capacity can your racks handle?', a: 'Our standard heavy-duty racks handle 500–2000 kg per level. We engineer each rack to your specific load requirements.' },
          { q: 'Do you need anchoring for warehouse racks?', a: 'For safety, heavy-duty racks should be anchored to the floor. We include floor anchoring in our installation service.' },
          { q: 'Can you design a complete warehouse storage system?', a: 'Yes. We offer complete warehouse storage planning and can design a system that maximizes your floor space and storage capacity.' },
        ],
      },
      id: {
        name: 'Rak Gudang Heavy Duty',
        shortDesc: 'Rak besi industrial untuk gudang, pabrik & penyimpanan komersial',
        longDesc: 'Rak gudang besi heavy-duty custom yang direkayasa untuk penyimpanan bermutu industrial. Kami memfabrikasi rak pallet, longspan shelving, rak mezzanine, dan solusi penyimpanan custom untuk gudang, pabrik, ruang penyimpanan retail, dan ruang komersial.',
        heroTitle: 'Rak Gudang Heavy Duty — Baja Industrial',
        heroSubtitle: 'Rak baja industrial custom untuk gudang dan pabrik. Berkapasitas beban, powder coat, siap digunakan untuk penggunaan berat.',
        materialTitle: 'Tipe Rak',
        materials: ['Rak Pallet (selective)', 'Longspan Shelving', 'Rak Medium Duty', 'Cantilever Rack', 'Penyimpanan Mezzanine', 'Konfigurasi Penyimpanan Custom'],
        processTitle: 'Proses Pengerjaan',
        process: ['Penilaian ruang gudang', 'Kalkulasi kapasitas beban', 'Desain rak custom', 'Fabrikasi baja di workshop Bekasi', 'Perakitan & pemasangan di lokasi', 'Uji beban & serah terima'],
        faqs: [
          { q: 'Berapa kapasitas beban rak Anda?', a: 'Rak heavy-duty standar kami menangani 500–2000 kg per level. Kami merekayasa setiap rak sesuai kebutuhan beban spesifik Anda.' },
          { q: 'Apakah rak gudang perlu diangkur?', a: 'Untuk keamanan, rak heavy-duty harus diangkur ke lantai. Kami menyertakan pengangkuran lantai dalam layanan pemasangan kami.' },
          { q: 'Bisa mendesain sistem penyimpanan gudang lengkap?', a: 'Ya. Kami menawarkan perencanaan penyimpanan gudang lengkap dan bisa mendesain sistem yang memaksimalkan ruang lantai dan kapasitas penyimpanan Anda.' },
        ],
      },
    },
  },
]

// Helper functions
export const getServiceBySlug = (slug: string): SteelService | undefined => {
  return STEEL_SERVICES.find(s => s.slug === slug)
}

export const getServicesByCluster = (cluster: SteelService['cluster']): SteelService[] => {
  return STEEL_SERVICES.filter(s => s.cluster === cluster)
}

export const getAllServiceSlugs = (): string[] => {
  return STEEL_SERVICES.map(s => s.slug)
}

export const FEATURED_SERVICES = [
  'kanopi',
  'teralis',
  'pagar-besi-minimalis',
  'folding-gate',
  'railing-balkon',
  'railing-tangga',
  'tangga-besi',
  'pergola',
]
