/**
 * Multi-Language Product Descriptions and Captions
 * SEO-friendly descriptions in 8 languages
 */

export interface MultiLanguageDescription {
  en: {
    name: string
    caption: string
    shortCaption: string
    description: string
    metaDescription: string
    imageAlt: string
  }
  id: {
    name: string
    caption: string
    shortCaption: string
    description: string
    metaDescription: string
    imageAlt: string
  }
  ar: {
    name: string
    caption: string
    shortCaption: string
    description: string
    metaDescription: string
    imageAlt: string
  }
  zh: {
    name: string
    caption: string
    shortCaption: string
    description: string
    metaDescription: string
    imageAlt: string
  }
  ja: {
    name: string
    caption: string
    shortCaption: string
    description: string
    metaDescription: string
    imageAlt: string
  }
  es: {
    name: string
    caption: string
    shortCaption: string
    description: string
    metaDescription: string
    imageAlt: string
  }
  fr: {
    name: string
    caption: string
    shortCaption: string
    description: string
    metaDescription: string
    imageAlt: string
  }
  ko: {
    name: string
    caption: string
    shortCaption: string
    description: string
    metaDescription: string
    imageAlt: string
  }
}

// Keep backward compatibility
export type DualLanguageDescription = MultiLanguageDescription

export const PRODUCT_DESCRIPTIONS: Record<string, MultiLanguageDescription> = {
  'industrial-hanging-shelf': {
    en: {
      name: 'Industrial Hanging Shelf',
      caption: 'Industrial Hanging Shelf from Mangala Living - Premium Steel Wall-Mounted Storage Shelf | Workshop Bekasi Indonesia',
      shortCaption: 'Industrial Hanging Shelf - Steel Wall Storage Shelf',
      description: `The Industrial Hanging Shelf from Mangala Living is expertly crafted industrial furniture designed for modern spaces. Built in our workshop in Bekasi, Indonesia, each piece showcases superior welding techniques and attention to detail.

Handcrafted by experienced welders and metalworkers, every piece demonstrates exceptional craftsmanship. Constructed from premium materials including high-grade steel hollow sections, solid steel plates, and powder-coated finishes, this furniture delivers both strength and refined industrial aesthetics.

Designed for durability and style, this piece features carefully selected materials that ensure long-lasting performance. The industrial design paired with expert craftsmanship makes it a standout piece in any modern setting—whether in cafes, restaurants, offices, or contemporary homes.

Built to commercial-grade standards, this furniture is meticulously welded using professional equipment that can withstand heavy daily use for years to come. The sophisticated design effortlessly blends functionality, strength, and industrial character, making it an ideal choice for hospitality venues, co-working spaces, and modern residences.

Mangala Living is committed to quality and precision, ensuring that every weld and joint not only meets industrial standards but exceeds expectations. Explore our complete collection to find more equally well-crafted pieces designed to bring industrial elegance and durability to your spaces.`,
      metaDescription: 'Industrial Hanging Shelf - Premium Steel Wall-Mounted Storage Shelf | Custom Industrial Furniture | Workshop Bekasi | Mangala Living',
      imageAlt: 'Industrial Hanging Shelf - Steel Wall Storage Shelf - Premium Industrial Furniture from Mangala Living Workshop Bekasi'
    },
    id: {
      name: 'Rak Gantung Industrial',
      caption: 'Rak Gantung Industrial dari Mangala Living - Rak Dinding Baja Premium untuk Penyimpanan | Workshop Bekasi Indonesia',
      shortCaption: 'Rak Gantung Industrial - Rak Dinding Baja Penyimpanan',
      description: `Rak Gantung Industrial dari Mangala Living adalah furniture industrial yang dibuat dengan ahli untuk ruang modern. Dibuat di workshop kami di Bekasi, Indonesia, setiap bagian menampilkan teknik pengelasan superior dan perhatian terhadap detail.

Dibuat dengan tangan oleh tukang las dan pekerja logam berpengalaman, setiap bagian menunjukkan keahlian yang luar biasa. Dibangun dari material premium termasuk hollow section baja kualitas tinggi, plat baja solid, dan finishing powder coating, furniture ini memberikan kekuatan dan estetika industrial yang halus.

Dirancang untuk ketahanan dan gaya, bagian ini menampilkan material yang dipilih dengan hati-hati yang memastikan performa tahan lama. Desain industrial dipadukan dengan keahlian ahli membuatnya menjadi bagian yang menonjol di setting modern mana pun—baik di kafe, restoran, kantor, atau rumah kontemporer.

Dibuat sesuai standar kualitas komersial, furniture ini dilas dengan hati-hati menggunakan peralatan profesional yang dapat menahan penggunaan harian berat selama bertahun-tahun. Desain yang canggih dengan mudah memadukan fungsionalitas, kekuatan, dan karakter industrial, menjadikannya pilihan ideal untuk venue hospitality, ruang co-working, dan tempat tinggal modern.

Mangala Living berkomitmen pada kualitas dan presisi, memastikan bahwa setiap lasan dan sambungan tidak hanya memenuhi standar industrial tetapi melebihi harapan. Jelajahi koleksi lengkap kami untuk menemukan lebih banyak bagian yang dibuat dengan sama baiknya, dirancang untuk membawa keanggunan dan ketahanan industrial ke ruang Anda.`,
      metaDescription: 'Rak Gantung Industrial - Rak Dinding Baja Premium untuk Penyimpanan | Furniture Industrial Custom | Workshop Bekasi | Mangala Living',
      imageAlt: 'Rak Gantung Industrial - Rak Dinding Baja Penyimpanan - Furniture Industrial Premium dari Workshop Mangala Living Bekasi'
    }
  },
  'frame-loft-bookshelf': {
    en: {
      name: 'Frame Loft Bookshelf',
      caption: 'Frame Loft Bookshelf - Industrial Storage Bookshelf for Modern Spaces | Mangala Living Workshop Bekasi',
      shortCaption: 'Frame Loft Bookshelf - Industrial Bookshelf Storage',
      description: `The Frame Loft Bookshelf from Mangala Living is the perfect industrial storage solution for modern homes, offices, and commercial spaces. This premium frame loft bookshelf features a sleek industrial design with modular construction that provides maximum storage flexibility and visual appeal.

Crafted in our Bekasi workshop since 1999, this frame loft bookshelf showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent strength while maintaining a clean, minimalist aesthetic that complements any industrial or modern interior design.

Perfect for living rooms, offices, cafes, and retail spaces, this frame loft bookshelf provides versatile storage and display capabilities. The modular design allows for easy customization and expansion, making it ideal for growing collections and changing storage needs.

Built to commercial-grade standards, this frame loft bookshelf is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The powder-coated finish ensures long-lasting protection against wear and corrosion, making it a smart investment for any space.`,
      metaDescription: 'Frame Loft Bookshelf - Industrial Bookshelf Storage | Custom Furniture | Mangala Living Bekasi',
      imageAlt: 'Frame Loft Bookshelf - Industrial Bookshelf Storage - Premium Furniture from Mangala Living'
    },
    id: {
      name: 'Frame Loft Bookshelf',
      caption: 'Frame Loft Bookshelf - Rak Buku Industrial untuk Ruang Modern | Workshop Mangala Living Bekasi',
      shortCaption: 'Frame Loft Bookshelf - Rak Buku Industrial Penyimpanan',
      description: `Frame Loft Bookshelf dari Mangala Living adalah solusi penyimpanan industrial sempurna untuk rumah modern, kantor, dan ruang komersial. Rak buku frame loft premium ini menampilkan desain industrial yang ramping dengan konstruksi modular yang memberikan fleksibilitas penyimpanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, frame loft bookshelf ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan kekuatan yang sangat baik sambil mempertahankan estetika minimalis yang bersih yang melengkapi desain interior industrial atau modern apa pun.

Sempurna untuk ruang tamu, kantor, kafe, dan ruang ritel, frame loft bookshelf ini menyediakan kapasitas penyimpanan dan tampilan yang serbaguna. Desain modular memungkinkan kustomisasi dan ekspansi yang mudah, menjadikannya ideal untuk koleksi yang berkembang dan kebutuhan penyimpanan yang berubah.

Dibuat sesuai standar kualitas komersial, frame loft bookshelf ini dirancang untuk menahan penggunaan harian berat sambil mempertahankan integritas struktural dan daya tarik visualnya. Finishing powder coating memastikan perlindungan tahan lama terhadap keausan dan korosi, menjadikannya investasi yang cerdas untuk ruang apa pun.`,
      metaDescription: 'Frame Loft Bookshelf - Rak Buku Industrial Penyimpanan | Furniture Custom | Mangala Living Bekasi',
      imageAlt: 'Frame Loft Bookshelf - Rak Buku Industrial Penyimpanan - Furniture Premium dari Mangala Living'
    }
  },
  'balcony-bar-table': {
    en: {
      name: 'Balcony Bar Table',
      caption: 'Balcony Bar Table - Outdoor Industrial Bar Table for Patio and Terrace | Mangala Living',
      shortCaption: 'Balcony Bar Table - Outdoor Bar Table',
      description: `The Balcony Bar Table from Mangala Living is the ultimate outdoor dining and entertainment solution for modern spaces. This premium balcony bar table features a robust industrial design with weather-resistant construction that provides maximum durability for outdoor use.

Crafted in our Bekasi workshop since 1999, this balcony bar table showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent stability while maintaining a sleek, modern aesthetic that complements any outdoor or indoor industrial design.

Perfect for balconies, terraces, patios, and outdoor cafes, this balcony bar table provides versatile dining and entertainment capabilities. The weather-resistant powder coating ensures long-lasting protection against harsh outdoor conditions, making it ideal for year-round use.

Built to commercial-grade standards, this balcony bar table is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The industrial design effortlessly blends functionality, strength, and outdoor durability, making it an ideal choice for hospitality venues, residential balconies, and outdoor entertainment spaces.`,
      metaDescription: 'Balcony Bar Table - Outdoor Industrial Bar Table | Weather Resistant Furniture | Mangala Living',
      imageAlt: 'Balcony Bar Table - Outdoor Industrial Bar Table - Weather Resistant Furniture from Mangala Living'
    },
    id: {
      name: 'Meja Bar Balkon',
      caption: 'Balcony Bar Table - Meja Bar Outdoor Industrial untuk Teras dan Balkon | Mangala Living',
      shortCaption: 'Balcony Bar Table - Meja Bar Outdoor',
      description: `Balcony Bar Table dari Mangala Living adalah solusi makan dan hiburan outdoor terbaik untuk ruang modern. Meja bar balkon premium ini menampilkan desain industrial yang kokoh dengan konstruksi tahan cuaca yang memberikan ketahanan maksimal untuk penggunaan outdoor.

Dibuat di workshop Bekasi kami sejak 1999, meja bar balkon ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan stabilitas yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain industrial outdoor atau indoor apa pun.

Sempurna untuk balkon, teras, patio, dan kafe outdoor, meja bar balkon ini menyediakan kapasitas makan dan hiburan yang serbaguna. Powder coating tahan cuaca memastikan perlindungan tahan lama terhadap kondisi outdoor yang keras, menjadikannya ideal untuk penggunaan sepanjang tahun.

Dibuat sesuai standar kualitas komersial, meja bar balkon ini dirancang untuk menahan penggunaan harian berat sambil mempertahankan integritas struktural dan daya tarik visualnya. Desain industrial dengan mudah memadukan fungsionalitas, kekuatan, dan ketahanan outdoor, menjadikannya pilihan ideal untuk venue hospitality, balkon perumahan, dan ruang hiburan outdoor.`,
      metaDescription: 'Balcony Bar Table - Meja Bar Outdoor Industrial | Furniture Tahan Cuaca | Mangala Living',
      imageAlt: 'Balcony Bar Table - Meja Bar Outdoor Industrial - Furniture Tahan Cuaca dari Mangala Living'
    }
  },
  'lounge-set-coffee-table': {
    en: {
      name: 'Lounge Set Coffee Table',
      caption: 'Lounge Set Coffee Table - Industrial Coffee Table for Living Room | Mangala Living',
      shortCaption: 'Lounge Set Coffee Table - Industrial Coffee Table',
      description: `The Lounge Set Coffee Table from Mangala Living is expertly crafted industrial furniture designed for modern living spaces. This premium coffee table features a robust industrial design with steel construction that provides maximum durability and visual appeal.

Crafted in our Bekasi workshop since 1999, this lounge set coffee table showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent stability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for living rooms, lounges, waiting areas, and commercial spaces, this lounge set coffee table provides versatile functionality. The industrial design creates a focal point for living areas while offering practical functionality for daily use.`,
      metaDescription: 'Lounge Set Coffee Table - Industrial Coffee Table | Custom Furniture | Mangala Living',
      imageAlt: 'Lounge Set Coffee Table - Industrial Coffee Table - Premium Furniture from Mangala Living'
    },
    id: {
      name: 'Meja Kopi Lounge Set',
      caption: 'Lounge Set Coffee Table - Meja Kopi Industrial untuk Ruang Tamu | Mangala Living',
      shortCaption: 'Lounge Set Coffee Table - Meja Kopi Industrial',
      description: `Lounge Set Coffee Table dari Mangala Living adalah furniture industrial yang dibuat dengan ahli untuk ruang hidup modern. Meja kopi premium ini menampilkan desain industrial yang kokoh dengan konstruksi baja yang memberikan ketahanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, meja kopi lounge set ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan stabilitas yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain interior industrial atau kontemporer apa pun.

Sempurna untuk ruang tamu, lounge, area tunggu, dan ruang komersial, meja kopi lounge set ini menyediakan fungsionalitas yang serbaguna. Desain industrial menciptakan titik fokus untuk ruang hidup sambil menawarkan fungsionalitas praktis untuk penggunaan harian.`,
      metaDescription: 'Lounge Set Coffee Table - Meja Kopi Industrial | Furniture Custom | Mangala Living',
      imageAlt: 'Lounge Set Coffee Table - Meja Kopi Industrial - Furniture Premium dari Mangala Living'
    }
  },
  'bench-corner-lounge': {
    en: {
      name: 'Bench Corner Lounge',
      caption: 'Bench Corner Lounge - Industrial Corner Bench for Cafes and Restaurants | Mangala Living',
      shortCaption: 'Bench Corner Lounge - Industrial Corner Bench',
      description: `The Bench Corner Lounge from Mangala Living is the perfect industrial seating solution for modern cafes, restaurants, and commercial spaces. This premium bench corner lounge features a sleek industrial design with comfortable seating that provides maximum comfort and visual appeal.

Crafted in our Bekasi workshop since 1999, this bench corner lounge showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent durability while maintaining a clean, minimalist aesthetic that complements any industrial or modern interior design.

Perfect for cafes, restaurants, waiting areas, and commercial spaces, this bench corner lounge provides versatile seating capabilities. The corner design maximizes space efficiency while creating intimate seating areas for guests and customers.`,
      metaDescription: 'Bench Corner Lounge - Industrial Corner Bench | Cafe Furniture | Mangala Living',
      imageAlt: 'Bench Corner Lounge - Industrial Corner Bench - Premium Seating from Mangala Living'
    },
    id: {
      name: 'Kursi Sudut Lounge',
      caption: 'Bench Corner Lounge - Kursi Sudut Industrial untuk Kafe dan Restoran | Mangala Living',
      shortCaption: 'Bench Corner Lounge - Kursi Sudut Industrial',
      description: `Bench Corner Lounge dari Mangala Living adalah solusi tempat duduk industrial sempurna untuk kafe modern, restoran, dan ruang komersial. Kursi sudut premium ini menampilkan desain industrial yang ramping dengan tempat duduk yang nyaman yang memberikan kenyamanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, kursi sudut ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan ketahanan yang sangat baik sambil mempertahankan estetika minimalis yang bersih yang melengkapi desain interior industrial atau modern apa pun.

Sempurna untuk kafe, restoran, area tunggu, dan ruang komersial, kursi sudut ini menyediakan kapasitas tempat duduk yang serbaguna. Desain sudut memaksimalkan efisiensi ruang sambil menciptakan area tempat duduk yang intim untuk tamu dan pelanggan.`,
      metaDescription: 'Bench Corner Lounge - Kursi Sudut Industrial | Furniture Kafe | Mangala Living',
      imageAlt: 'Bench Corner Lounge - Kursi Sudut Industrial - Tempat Duduk Premium dari Mangala Living'
    }
  },
  'industrial-daybed-frame': {
    en: {
      name: 'Industrial Daybed Frame',
      caption: 'Industrial Daybed Frame - Steel Daybed Frame for Lounge Areas | Mangala Living',
      shortCaption: 'Industrial Daybed Frame - Steel Daybed',
      description: `The Industrial Daybed Frame from Mangala Living is the perfect industrial furniture solution for modern spaces. This premium industrial daybed frame features a robust industrial design with steel construction that provides maximum durability and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial daybed frame showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent strength while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for lounges, waiting areas, hotels, and commercial spaces, this industrial daybed frame provides versatile seating and relaxation capabilities. The daybed design offers comfortable seating and lounging options for guests and customers.`,
      metaDescription: 'Industrial Daybed Frame - Steel Daybed Frame | Lounge Furniture | Mangala Living',
      imageAlt: 'Industrial Daybed Frame - Steel Daybed - Premium Furniture from Mangala Living'
    },
    id: {
      name: 'Rangka Daybed Industrial',
      caption: 'Industrial Daybed Frame - Rangka Daybed Baja untuk Area Lounge | Mangala Living',
      shortCaption: 'Industrial Daybed Frame - Daybed Baja',
      description: `Industrial Daybed Frame dari Mangala Living adalah solusi furniture industrial sempurna untuk ruang modern. Rangka daybed industrial premium ini menampilkan desain industrial yang kokoh dengan konstruksi baja yang memberikan ketahanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, rangka daybed industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan kekuatan yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain interior industrial atau kontemporer apa pun.

Sempurna untuk lounge, area tunggu, hotel, dan ruang komersial, rangka daybed industrial ini menyediakan kapasitas tempat duduk dan relaksasi yang serbaguna. Desain daybed menawarkan opsi tempat duduk dan berbaring yang nyaman untuk tamu dan pelanggan.`,
      metaDescription: 'Industrial Daybed Frame - Rangka Daybed Baja | Furniture Lounge | Mangala Living',
      imageAlt: 'Industrial Daybed Frame - Daybed Baja - Furniture Premium dari Mangala Living'
    }
  },
  'bandung-pipe-dining-table': {
    en: {
      name: 'Bandung Pipe Dining Table',
      caption: 'Bandung Pipe Dining Table - Industrial Dining Table for Home and Restaurant | Mangala Living',
      shortCaption: 'Bandung Pipe Dining Table - Industrial Dining Table',
      description: `The Bandung Pipe Dining Table from Mangala Living is the perfect industrial dining solution for modern homes, cafes, and restaurants. This premium industrial dining table features a robust industrial design with steel construction that provides maximum durability and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial dining table showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent stability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for homes, cafes, restaurants, and commercial dining spaces, this industrial dining table provides versatile dining capabilities. The industrial design creates a focal point for dining areas while offering practical functionality for daily use.`,
      metaDescription: 'Bandung Pipe Dining Table - Industrial Dining Table | Custom Furniture | Mangala Living',
      imageAlt: 'Bandung Pipe Dining Table - Industrial Dining Table - Premium Furniture from Mangala Living'
    },
    id: {
      name: 'Meja Makan Pipa Bandung',
      caption: 'Bandung Pipe Dining Table - Meja Makan Industrial untuk Rumah dan Restoran | Mangala Living',
      shortCaption: 'Bandung Pipe Dining Table - Meja Makan Industrial',
      description: `Bandung Pipe Dining Table dari Mangala Living adalah solusi makan industrial sempurna untuk rumah modern, kafe, dan restoran. Meja makan industrial premium ini menampilkan desain industrial yang kokoh dengan konstruksi baja yang memberikan ketahanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, meja makan industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan stabilitas yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain interior industrial atau kontemporer apa pun.

Sempurna untuk rumah, kafe, restoran, dan ruang makan komersial, meja makan industrial ini menyediakan kapasitas makan yang serbaguna. Desain industrial menciptakan titik fokus untuk area makan sambil menawarkan fungsionalitas praktis untuk penggunaan harian.`,
      metaDescription: 'Bandung Pipe Dining Table - Meja Makan Industrial | Furniture Custom | Mangala Living',
      imageAlt: 'Bandung Pipe Dining Table - Meja Makan Industrial - Furniture Premium dari Mangala Living'
    }
  },
  'dining-set-with-2-chairs': {
    en: {
      name: 'Dining Set with 2 Chairs',
      caption: 'Dining Set with 2 Chairs - Complete Industrial Dining Set | Mangala Living',
      shortCaption: 'Dining Set with 2 Chairs - Complete Dining Set',
      description: `The Dining Set with 2 Chairs from Mangala Living is the perfect industrial dining solution for modern homes, cafes, and restaurants. This premium industrial dining set features a robust industrial design with steel construction that provides maximum durability and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial dining set showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent stability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for homes, cafes, restaurants, and commercial dining spaces, this industrial dining set provides versatile dining capabilities. The industrial design creates a focal point for dining areas while offering practical functionality for daily use.`,
      metaDescription: 'Dining Set with 2 Chairs - Complete Industrial Dining Set | Custom Furniture | Mangala Living',
      imageAlt: 'Dining Set with 2 Chairs - Complete Industrial Dining Set - Premium Furniture from Mangala Living'
    },
    id: {
      name: 'Set Meja Makan dengan 2 Kursi',
      caption: 'Dining Set with 2 Chairs - Set Meja Makan Industrial Lengkap | Mangala Living',
      shortCaption: 'Dining Set with 2 Chairs - Set Meja Makan Lengkap',
      description: `Dining Set with 2 Chairs dari Mangala Living adalah solusi makan industrial sempurna untuk rumah modern, kafe, dan restoran. Set meja makan industrial premium ini menampilkan desain industrial yang kokoh dengan konstruksi baja yang memberikan ketahanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, set meja makan industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan stabilitas yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain interior industrial atau kontemporer apa pun.

Sempurna untuk rumah, kafe, restoran, dan ruang makan komersial, set meja makan industrial ini menyediakan kapasitas makan yang serbaguna. Desain industrial menciptakan titik fokus untuk area makan sambil menawarkan fungsionalitas praktis untuk penggunaan harian.`,
      metaDescription: 'Dining Set with 2 Chairs - Set Meja Makan Industrial Lengkap | Furniture Custom | Mangala Living',
      imageAlt: 'Dining Set with 2 Chairs - Set Meja Makan Industrial Lengkap - Furniture Premium dari Mangala Living'
    }
  },
  'beam-industrial-bar-chair': {
    en: {
      name: 'Beam Industrial Bar Chair',
      caption: 'Beam Industrial Bar Chair - Industrial Bar Stool for Counter and Bar | Mangala Living',
      shortCaption: 'Beam Industrial Bar Chair - Industrial Bar Stool',
      description: `The Beam Industrial Bar Chair from Mangala Living is the perfect industrial bar seating solution for modern cafes, restaurants, and commercial spaces. This premium industrial bar chair features a sleek industrial design with steel construction that provides maximum comfort and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial bar chair showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent durability while maintaining a clean, minimalist aesthetic that complements any industrial or modern interior design.

Perfect for bars, cafes, restaurants, and commercial spaces, this industrial bar chair provides versatile seating capabilities. The bar height design offers comfortable seating for counter areas and bar spaces.`,
      metaDescription: 'Beam Industrial Bar Chair - Industrial Bar Stool | Cafe Furniture | Mangala Living',
      imageAlt: 'Beam Industrial Bar Chair - Industrial Bar Stool - Premium Seating from Mangala Living'
    },
    id: {
      name: 'Kursi Bar Beam Industrial',
      caption: 'Beam Industrial Bar Chair - Kursi Bar Industrial untuk Counter dan Bar | Mangala Living',
      shortCaption: 'Beam Industrial Bar Chair - Kursi Bar Industrial',
      description: `Beam Industrial Bar Chair dari Mangala Living adalah solusi tempat duduk bar industrial sempurna untuk kafe modern, restoran, dan ruang komersial. Kursi bar industrial premium ini menampilkan desain industrial yang ramping dengan konstruksi baja yang memberikan kenyamanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, kursi bar industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan ketahanan yang sangat baik sambil mempertahankan estetika minimalis yang bersih yang melengkapi desain interior industrial atau modern apa pun.

Sempurna untuk bar, kafe, restoran, dan ruang komersial, kursi bar industrial ini menyediakan kapasitas tempat duduk yang serbaguna. Desain tinggi bar menawarkan tempat duduk yang nyaman untuk area counter dan ruang bar.`,
      metaDescription: 'Beam Industrial Bar Chair - Kursi Bar Industrial | Furniture Kafe | Mangala Living',
      imageAlt: 'Beam Industrial Bar Chair - Kursi Bar Industrial - Tempat Duduk Premium dari Mangala Living'
    },
    ar: {
      name: 'كرسي بار بيم الصناعي',
      caption: 'كرسي بار بيم الصناعي - كرسي بار صناعي للكاونتر والبار | Mangala Living',
      shortCaption: 'كرسي بار بيم الصناعي - كرسي بار صناعي',
      description: `كرسي البار الصناعي Beam من Mangala Living هو الحل المثالي لمقاعد البار الصناعي للمقاهي والمطاعم والمساحات التجارية الحديثة. يتميز كرسي البار الصناعي المميز هذا بتصميم صناعي أنيق مع هيكل فولاذي يوفر أقصى قدر من الراحة والجاذبية البصرية.

صُنع في ورشة عملنا في بيكاسي منذ عام 1999، يعرض كرسي البار الصناعي هذا تقنيات لحام متفوقة والاهتمام بالتفاصيل. يوفر هيكل الإطار الفولاذي الصناعي متانة ممتازة مع الحفاظ على جمالية بسيطة ونظيفة تكمل أي تصميم داخلي صناعي أو حديث.

مثالي للبارات والمقاهي والمطاعم والمساحات التجارية، يوفر كرسي البار الصناعي هذا قدرات جلوس متعددة الاستخدامات. يوفر تصميم ارتفاع البار جلوسًا مريحًا لمناطق الكاونتر ومساحات البار.`,
      metaDescription: 'كرسي بار بيم الصناعي - كرسي بار صناعي | أثاث المقاهي | Mangala Living',
      imageAlt: 'كرسي بار بيم الصناعي - كرسي بار صناعي - مقاعد مميزة من Mangala Living'
    },
    zh: {
      name: 'Beam工业吧椅',
      caption: 'Beam工业吧椅 - 工业吧椅用于柜台和酒吧 | Mangala Living',
      shortCaption: 'Beam工业吧椅 - 工业吧椅',
      description: `Mangala Living的Beam工业吧椅是现代咖啡馆、餐厅和商业空间的完美工业座椅解决方案。这款优质工业吧椅采用时尚的工业设计和钢结构，提供最大的舒适性和视觉吸引力。

自1999年以来在我们位于勿加泗的车间制作，这款工业吧椅展示了卓越的焊接技术和对细节的关注。工业钢框架结构提供出色的耐用性，同时保持干净、简约的美学，可以补充任何工业或现代室内设计。

非常适合酒吧、咖啡馆、餐厅和商业空间，这款工业吧椅提供多功能座椅能力。酒吧高度设计为柜台区和酒吧空间提供舒适的座椅。`,
      metaDescription: 'Beam工业吧椅 - 工业吧椅 | 咖啡馆家具 | Mangala Living',
      imageAlt: 'Beam工业吧椅 - 工业吧椅 - Mangala Living的优质座椅'
    },
    ja: {
      name: 'Beam Industrial Bar Chair',
      caption: 'Beam Industrial Bar Chair - カウンターとバー用の工業用バーチェア | Mangala Living',
      shortCaption: 'Beam Industrial Bar Chair - 工業用バーチェア',
      description: `Mangala LivingのBeam Industrial Bar Chairは、モダンなカフェ、レストラン、商業空間に最適な工業用バーシーティングソリューションです。このプレミアム工業用バーチェアは、最大限の快適性と視覚的な魅力を提供するスチール構造を備えた洗練された工業デザインが特徴です。

1999年以来、ブカシのワークショップで製作されたこの工業用バーチェアは、優れた溶接技術と細部へのこだわりを示しています。工業用スチールフレーム構造は、優れた耐久性を提供しながら、あらゆる工業的またはモダンなインテリアデザインを補完するクリーンでミニマリストな美学を維持しています。

バー、カフェ、レストラン、商業空間に最適で、この工業用バーチェアは多目的な座席機能を提供します。バーの高さのデザインは、カウンターエリアとバースペースに快適な座席を提供します。`,
      metaDescription: 'Beam Industrial Bar Chair - 工業用バーチェア | カフェ家具 | Mangala Living',
      imageAlt: 'Beam Industrial Bar Chair - 工業用バーチェア - Mangala Livingのプレミアムシーティング'
    },
    es: {
      name: 'Silla de Bar Industrial Beam',
      caption: 'Silla de Bar Industrial Beam - Taburete de Bar Industrial para Mostrador y Bar | Mangala Living',
      shortCaption: 'Silla de Bar Industrial Beam - Taburete de Bar Industrial',
      description: `La Silla de Bar Industrial Beam de Mangala Living es la solución perfecta de asientos de bar industriales para cafeterías modernas, restaurantes y espacios comerciales. Esta silla de bar industrial premium presenta un diseño industrial elegante con construcción de acero que proporciona la máxima comodidad y atractivo visual.

Elaborada en nuestro taller de Bekasi desde 1999, esta silla de bar industrial muestra técnicas de soldadura superiores y atención al detalle. La construcción del marco de acero industrial ofrece una excelente durabilidad mientras mantiene una estética minimalista y limpia que complementa cualquier diseño de interiores industrial o moderno.

Perfecta para bares, cafeterías, restaurantes y espacios comerciales, esta silla de bar industrial proporciona capacidades de asientos versátiles. El diseño de altura de bar ofrece asientos cómodos para áreas de mostrador y espacios de bar.`,
      metaDescription: 'Silla de Bar Industrial Beam - Taburete de Bar Industrial | Mobiliario de Cafetería | Mangala Living',
      imageAlt: 'Silla de Bar Industrial Beam - Taburete de Bar Industrial - Asientos Premium de Mangala Living'
    },
    fr: {
      name: 'Chaise de Bar Industrielle Beam',
      caption: 'Chaise de Bar Industrielle Beam - Tabouret de Bar Industriel pour Comptoir et Bar | Mangala Living',
      shortCaption: 'Chaise de Bar Industrielle Beam - Tabouret de Bar Industriel',
      description: `La Chaise de Bar Industrielle Beam de Mangala Living est la solution parfaite de sièges de bar industriels pour les cafés modernes, les restaurants et les espaces commerciaux. Cette chaise de bar industrielle premium présente un design industriel élégant avec une construction en acier qui offre un confort maximal et un attrait visuel.

Fabriquée dans notre atelier de Bekasi depuis 1999, cette chaise de bar industrielle présente des techniques de soudage supérieures et une attention aux détails. La construction du cadre en acier industriel offre une excellente durabilité tout en maintenant une esthétique minimaliste et épurée qui complète tout design d'intérieur industriel ou moderne.

Parfaite pour les bars, les cafés, les restaurants et les espaces commerciaux, cette chaise de bar industrielle offre des capacités d'assise polyvalentes. Le design de hauteur de bar offre des sièges confortables pour les zones de comptoir et les espaces de bar.`,
      metaDescription: 'Chaise de Bar Industrielle Beam - Tabouret de Bar Industriel | Mobilier de Café | Mangala Living',
      imageAlt: 'Chaise de Bar Industrielle Beam - Tabouret de Bar Industriel - Sièges Premium de Mangala Living'
    },
    ko: {
      name: 'Beam 인더스트리얼 바 체어',
      caption: 'Beam 인더스트리얼 바 체어 - 카운터와 바를 위한 인더스트리얼 바 의자 | Mangala Living',
      shortCaption: 'Beam 인더스트리얼 바 체어 - 인더스트리얼 바 의자',
      description: `Mangala Living의 Beam 인더스트리얼 바 체어는 현대적인 카페, 레스토랑 및 상업 공간을 위한 완벽한 인더스트리얼 바 좌석 솔루션입니다. 이 프리미엄 인더스트리얼 바 체어는 최대의 편안함과 시각적 매력을 제공하는 강철 구조를 갖춘 세련된 인더스트리얼 디자인이 특징입니다.

1999년부터 브카시 워크숍에서 제작된 이 인더스트리얼 바 체어는 뛰어난 용접 기술과 세부 사항에 대한 관심을 보여줍니다. 인더스트리얼 강철 프레임 구조는 뛰어난 내구성을 제공하면서 모든 인더스트리얼 또는 현대적인 인테리어 디자인을 보완하는 깔끔하고 미니멀한 미학을 유지합니다.

바, 카페, 레스토랑 및 상업 공간에 완벽한 이 인더스트리얼 바 체어는 다목적 좌석 기능을 제공합니다. 바 높이 디자인은 카운터 영역과 바 공간을 위한 편안한 좌석을 제공합니다.`,
      metaDescription: 'Beam 인더스트리얼 바 체어 - 인더스트리얼 바 의자 | 카페 가구 | Mangala Living',
      imageAlt: 'Beam 인더스트리얼 바 체어 - 인더스트리얼 바 의자 - Mangala Living의 프리미엄 좌석'
    }
  },
  'bar-stall-chair': {
    en: {
      name: 'Bar Stall Chair',
      caption: 'Bar Stall Chair - Industrial Stall Chair for Bar and Counter | Mangala Living',
      shortCaption: 'Bar Stall Chair - Industrial Stall Chair',
      description: `The Bar Stall Chair from Mangala Living is the perfect industrial bar seating solution for modern cafes, restaurants, and commercial spaces. This premium industrial bar chair features a sleek industrial design with steel construction that provides maximum comfort and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial bar chair showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent durability while maintaining a clean, minimalist aesthetic that complements any industrial or modern interior design.

Perfect for bars, cafes, restaurants, and commercial spaces, this industrial bar chair provides versatile seating capabilities. The bar height design offers comfortable seating for counter areas and bar spaces.`,
      metaDescription: 'Bar Stall Chair - Industrial Stall Chair | Cafe Furniture | Mangala Living',
      imageAlt: 'Bar Stall Chair - Industrial Stall Chair - Premium Seating from Mangala Living'
    },
    id: {
      name: 'Kursi Stall Bar',
      caption: 'Bar Stall Chair - Kursi Stall Industrial untuk Bar dan Counter | Mangala Living',
      shortCaption: 'Bar Stall Chair - Kursi Stall Industrial',
      description: `Bar Stall Chair dari Mangala Living adalah solusi tempat duduk bar industrial sempurna untuk kafe modern, restoran, dan ruang komersial. Kursi bar industrial premium ini menampilkan desain industrial yang ramping dengan konstruksi baja yang memberikan kenyamanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, kursi bar industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan ketahanan yang sangat baik sambil mempertahankan estetika minimalis yang bersih yang melengkapi desain interior industrial atau modern apa pun.

Sempurna untuk bar, kafe, restoran, dan ruang komersial, kursi bar industrial ini menyediakan kapasitas tempat duduk yang serbaguna. Desain tinggi bar menawarkan tempat duduk yang nyaman untuk area counter dan ruang bar.`,
      metaDescription: 'Bar Stall Chair - Kursi Stall Industrial | Furniture Kafe | Mangala Living',
      imageAlt: 'Bar Stall Chair - Kursi Stall Industrial - Tempat Duduk Premium dari Mangala Living'
    },
    ar: {
      name: 'كرسي بار ستول',
      caption: 'كرسي بار ستول - كرسي ستول صناعي للبار والكاونتر | Mangala Living',
      shortCaption: 'كرسي بار ستول - كرسي ستول صناعي',
      description: `كرسي البار ستول من Mangala Living هو الحل المثالي لمقاعد البار الصناعي للمقاهي والمطاعم والمساحات التجارية الحديثة. يتميز كرسي البار الصناعي المميز هذا بتصميم صناعي أنيق مع هيكل فولاذي يوفر أقصى قدر من الراحة والجاذبية البصرية.

صُنع في ورشة عملنا في بيكاسي منذ عام 1999، يعرض كرسي البار الصناعي هذا تقنيات لحام متفوقة والاهتمام بالتفاصيل. يوفر هيكل الإطار الفولاذي الصناعي متانة ممتازة مع الحفاظ على جمالية بسيطة ونظيفة تكمل أي تصميم داخلي صناعي أو حديث.

مثالي للبارات والمقاهي والمطاعم والمساحات التجارية، يوفر كرسي البار الصناعي هذا قدرات جلوس متعددة الاستخدامات. يوفر تصميم ارتفاع البار جلوسًا مريحًا لمناطق الكاونتر ومساحات البار.`,
      metaDescription: 'كرسي بار ستول - كرسي ستول صناعي | أثاث المقاهي | Mangala Living',
      imageAlt: 'كرسي بار ستول - كرسي ستول صناعي - مقاعد مميزة من Mangala Living'
    },
    zh: {
      name: '吧台高脚椅',
      caption: '吧台高脚椅 - 工业吧台椅用于酒吧和柜台 | Mangala Living',
      shortCaption: '吧台高脚椅 - 工业吧台椅',
      description: `Mangala Living的吧台高脚椅是现代咖啡馆、餐厅和商业空间的完美工业座椅解决方案。这款优质工业吧椅采用时尚的工业设计和钢结构，提供最大的舒适性和视觉吸引力。

自1999年以来在我们位于勿加泗的车间制作，这款工业吧椅展示了卓越的焊接技术和对细节的关注。工业钢框架结构提供出色的耐用性，同时保持干净、简约的美学，可以补充任何工业或现代室内设计。

非常适合酒吧、咖啡馆、餐厅和商业空间，这款工业吧椅提供多功能座椅能力。酒吧高度设计为柜台区和酒吧空间提供舒适的座椅。`,
      metaDescription: '吧台高脚椅 - 工业吧台椅 | 咖啡馆家具 | Mangala Living',
      imageAlt: '吧台高脚椅 - 工业吧台椅 - Mangala Living的优质座椅'
    },
    ja: {
      name: 'バースツールチェア',
      caption: 'バースツールチェア - バーとカウンター用の工業用スツールチェア | Mangala Living',
      shortCaption: 'バースツールチェア - 工業用スツールチェア',
      description: `Mangala Livingのバースツールチェアは、モダンなカフェ、レストラン、商業空間に最適な工業用バーシーティングソリューションです。このプレミアム工業用バーチェアは、最大限の快適性と視覚的な魅力を提供するスチール構造を備えた洗練された工業デザインが特徴です。

1999年以来、ブカシのワークショップで製作されたこの工業用バーチェアは、優れた溶接技術と細部へのこだわりを示しています。工業用スチールフレーム構造は、優れた耐久性を提供しながら、あらゆる工業的またはモダンなインテリアデザインを補完するクリーンでミニマリストな美学を維持しています。

バー、カフェ、レストラン、商業空間に最適で、この工業用バーチェアは多目的な座席機能を提供します。バーの高さのデザインは、カウンターエリアとバースペースに快適な座席を提供します。`,
      metaDescription: 'バースツールチェア - 工業用スツールチェア | カフェ家具 | Mangala Living',
      imageAlt: 'バースツールチェア - 工業用スツールチェア - Mangala Livingのプレミアムシーティング'
    },
    es: {
      name: 'Silla de Bar Stall',
      caption: 'Silla de Bar Stall - Silla Stall Industrial para Bar y Mostrador | Mangala Living',
      shortCaption: 'Silla de Bar Stall - Silla Stall Industrial',
      description: `La Silla de Bar Stall de Mangala Living es la solución perfecta de asientos de bar industriales para cafeterías modernas, restaurantes y espacios comerciales. Esta silla de bar industrial premium presenta un diseño industrial elegante con construcción de acero que proporciona la máxima comodidad y atractivo visual.

Elaborada en nuestro taller de Bekasi desde 1999, esta silla de bar industrial muestra técnicas de soldadura superiores y atención al detalle. La construcción del marco de acero industrial ofrece una excelente durabilidad mientras mantiene una estética minimalista y limpia que complementa cualquier diseño de interiores industrial o moderno.

Perfecta para bares, cafeterías, restaurantes y espacios comerciales, esta silla de bar industrial proporciona capacidades de asientos versátiles. El diseño de altura de bar ofrece asientos cómodos para áreas de mostrador y espacios de bar.`,
      metaDescription: 'Silla de Bar Stall - Silla Stall Industrial | Mobiliario de Cafetería | Mangala Living',
      imageAlt: 'Silla de Bar Stall - Silla Stall Industrial - Asientos Premium de Mangala Living'
    },
    fr: {
      name: 'Chaise de Bar Stall',
      caption: 'Chaise de Bar Stall - Chaise Stall Industrielle pour Bar et Comptoir | Mangala Living',
      shortCaption: 'Chaise de Bar Stall - Chaise Stall Industrielle',
      description: `La Chaise de Bar Stall de Mangala Living est la solution parfaite de sièges de bar industriels pour les cafés modernes, les restaurants et les espaces commerciaux. Cette chaise de bar industrielle premium présente un design industriel élégant avec une construction en acier qui offre un confort maximal et un attrait visuel.

Fabriquée dans notre atelier de Bekasi depuis 1999, cette chaise de bar industrielle présente des techniques de soudage supérieures et une attention aux détails. La construction du cadre en acier industriel offre une excellente durabilité tout en maintenant une esthétique minimaliste et épurée qui complète tout design d'intérieur industriel ou moderne.

Parfaite pour les bars, les cafés, les restaurants et les espaces commerciaux, cette chaise de bar industrielle offre des capacités d'assise polyvalentes. Le design de hauteur de bar offre des sièges confortables pour les zones de comptoir et les espaces de bar.`,
      metaDescription: 'Chaise de Bar Stall - Chaise Stall Industrielle | Mobilier de Café | Mangala Living',
      imageAlt: 'Chaise de Bar Stall - Chaise Stall Industrielle - Sièges Premium de Mangala Living'
    },
    ko: {
      name: '바 스톨 체어',
      caption: '바 스톨 체어 - 바와 카운터를 위한 인더스트리얼 스톨 체어 | Mangala Living',
      shortCaption: '바 스톨 체어 - 인더스트리얼 스톨 체어',
      description: `Mangala Living의 바 스톨 체어는 현대적인 카페, 레스토랑 및 상업 공간을 위한 완벽한 인더스트리얼 바 좌석 솔루션입니다. 이 프리미엄 인더스트리얼 바 체어는 최대의 편안함과 시각적 매력을 제공하는 강철 구조를 갖춘 세련된 인더스트리얼 디자인이 특징입니다.

1999년부터 브카시 워크숍에서 제작된 이 인더스트리얼 바 체어는 뛰어난 용접 기술과 세부 사항에 대한 관심을 보여줍니다. 인더스트리얼 강철 프레임 구조는 뛰어난 내구성을 제공하면서 모든 인더스트리얼 또는 현대적인 인테리어 디자인을 보완하는 깔끔하고 미니멀한 미학을 유지합니다.

바, 카페, 레스토랑 및 상업 공간에 완벽한 이 인더스트리얼 바 체어는 다목적 좌석 기능을 제공합니다. 바 높이 디자인은 카운터 영역과 바 공간을 위한 편안한 좌석을 제공합니다.`,
      metaDescription: '바 스톨 체어 - 인더스트리얼 스톨 체어 | 카페 가구 | Mangala Living',
      imageAlt: '바 스톨 체어 - 인더스트리얼 스톨 체어 - Mangala Living의 프리미엄 좌석'
    }
  },
  'steelframe-outdoor-bar-set': {
    en: {
      name: 'Steelframe Outdoor Bar Set',
      caption: 'Steelframe Outdoor Bar Set - Outdoor Industrial Bar Furniture Set | Mangala Living',
      shortCaption: 'Steelframe Outdoor Bar Set - Outdoor Bar Set',
      description: `The Steelframe Outdoor Bar Set from Mangala Living is the perfect industrial outdoor furniture solution for modern spaces. This premium industrial outdoor bar set features a robust industrial design with weather-resistant construction that provides maximum durability for outdoor use.

Crafted in our Bekasi workshop since 1999, this industrial outdoor bar set showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent stability while maintaining a sleek, modern aesthetic that complements any outdoor or industrial design.

Perfect for outdoor cafes, restaurants, patios, and commercial outdoor spaces, this industrial outdoor bar set provides versatile outdoor dining and entertainment capabilities. The weather-resistant powder coating ensures long-lasting protection against harsh outdoor conditions.`,
      metaDescription: 'Steelframe Outdoor Bar Set - Outdoor Industrial Bar Furniture | Weather Resistant | Mangala Living',
      imageAlt: 'Steelframe Outdoor Bar Set - Outdoor Industrial Bar Furniture - Weather Resistant from Mangala Living'
    },
    id: {
      name: 'Set Bar Outdoor Steelframe',
      caption: 'Steelframe Outdoor Bar Set - Set Furniture Bar Outdoor Industrial | Mangala Living',
      shortCaption: 'Steelframe Outdoor Bar Set - Set Bar Outdoor',
      description: `Steelframe Outdoor Bar Set dari Mangala Living adalah solusi furniture outdoor industrial sempurna untuk ruang modern. Set bar outdoor industrial premium ini menampilkan desain industrial yang kokoh dengan konstruksi tahan cuaca yang memberikan ketahanan maksimal untuk penggunaan outdoor.

Dibuat di workshop Bekasi kami sejak 1999, set bar outdoor industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan stabilitas yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain outdoor atau industrial apa pun.

Sempurna untuk kafe outdoor, restoran, patio, dan ruang outdoor komersial, set bar outdoor industrial ini menyediakan kapasitas makan dan hiburan outdoor yang serbaguna. Powder coating tahan cuaca memastikan perlindungan tahan lama terhadap kondisi outdoor yang keras.`,
      metaDescription: 'Steelframe Outdoor Bar Set - Furniture Bar Outdoor Industrial | Tahan Cuaca | Mangala Living',
      imageAlt: 'Steelframe Outdoor Bar Set - Furniture Bar Outdoor Industrial - Tahan Cuaca dari Mangala Living'
    }
  },
  'industrial-kitchen-cabinet': {
    en: {
      name: 'Industrial Kitchen Cabinet',
      caption: 'Industrial Kitchen Cabinet - Steel Kitchen Storage Cabinet | Mangala Living',
      shortCaption: 'Industrial Kitchen Cabinet - Steel Kitchen Cabinet',
      description: `The Industrial Kitchen Cabinet from Mangala Living is the perfect industrial storage solution for modern spaces. This premium industrial storage furniture features a robust industrial design with steel construction that provides maximum storage capacity and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial storage furniture showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent durability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for offices, cafes, restaurants, and commercial spaces, this industrial storage furniture provides versatile storage capabilities. The industrial design creates functional storage solutions while adding visual interest to any space.`,
      metaDescription: 'Industrial Kitchen Cabinet - Steel Kitchen Storage Cabinet | Custom Furniture | Mangala Living',
      imageAlt: 'Industrial Kitchen Cabinet - Steel Kitchen Cabinet - Premium Storage from Mangala Living'
    },
    id: {
      name: 'Kabinet Dapur Industrial',
      caption: 'Industrial Kitchen Cabinet - Kabinet Dapur Baja Penyimpanan | Mangala Living',
      shortCaption: 'Industrial Kitchen Cabinet - Kabinet Dapur Baja',
      description: `Industrial Kitchen Cabinet dari Mangala Living adalah solusi penyimpanan industrial sempurna untuk ruang modern. Furniture penyimpanan industrial premium ini menampilkan desain industrial yang kokoh dengan konstruksi baja yang memberikan kapasitas penyimpanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, furniture penyimpanan industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan ketahanan yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain interior industrial atau kontemporer apa pun.

Sempurna untuk kantor, kafe, restoran, dan ruang komersial, furniture penyimpanan industrial ini menyediakan kapasitas penyimpanan yang serbaguna. Desain industrial menciptakan solusi penyimpanan fungsional sambil menambah minat visual untuk ruang apa pun.`,
      metaDescription: 'Industrial Kitchen Cabinet - Kabinet Dapur Baja Penyimpanan | Furniture Custom | Mangala Living',
      imageAlt: 'Industrial Kitchen Cabinet - Kabinet Dapur Baja - Penyimpanan Premium dari Mangala Living'
    }
  },
  'kabinet-lemari-industrial': {
    en: {
      name: 'Industrial Storage Cabinet',
      caption: 'Industrial Storage Cabinet - Industrial Wardrobe Cabinet | Mangala Living',
      shortCaption: 'Industrial Storage Cabinet - Wardrobe Cabinet',
      description: `The Kabinet Lemari Industrial from Mangala Living is the perfect industrial storage solution for modern spaces. This premium industrial storage furniture features a robust industrial design with steel construction that provides maximum storage capacity and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial storage furniture showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent durability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for offices, cafes, restaurants, and commercial spaces, this industrial storage furniture provides versatile storage capabilities. The industrial design creates functional storage solutions while adding visual interest to any space.`,
      metaDescription: 'Industrial Storage Cabinet - Industrial Wardrobe Cabinet | Custom Furniture | Mangala Living',
      imageAlt: 'Industrial Storage Cabinet - Industrial Wardrobe Cabinet - Premium Storage from Mangala Living'
    },
    id: {
      name: 'Kabinet Lemari Industrial',
      caption: 'Kabinet Lemari Industrial - Kabinet Penyimpanan Industrial | Mangala Living',
      shortCaption: 'Kabinet Lemari Industrial - Kabinet Industrial',
      description: `Kabinet Lemari Industrial dari Mangala Living adalah solusi penyimpanan industrial sempurna untuk ruang modern. Furniture penyimpanan industrial premium ini menampilkan desain industrial yang kokoh dengan konstruksi baja yang memberikan kapasitas penyimpanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, furniture penyimpanan industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan ketahanan yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain interior industrial atau kontemporer apa pun.

Sempurna untuk kantor, kafe, restoran, dan ruang komersial, furniture penyimpanan industrial ini menyediakan kapasitas penyimpanan yang serbaguna. Desain industrial menciptakan solusi penyimpanan fungsional sambil menambah minat visual untuk ruang apa pun.`,
      metaDescription: 'Kabinet Lemari Industrial - Kabinet Penyimpanan Industrial | Furniture Custom | Mangala Living',
      imageAlt: 'Kabinet Lemari Industrial - Kabinet Industrial - Penyimpanan Premium dari Mangala Living'
    }
  },
  'hollowline-display-rack': {
    en: {
      name: 'Hollowline Display Rack',
      caption: 'Hollowline Display Rack - Industrial Display Shelf Rack | Mangala Living',
      shortCaption: 'Hollowline Display Rack - Display Rack',
      description: `The Hollowline Display Rack from Mangala Living is the perfect industrial storage solution for modern retail and commercial spaces. This premium hollowline display rack features a sleek industrial design with hollow steel construction that provides maximum durability and visual appeal.

Crafted in our Bekasi workshop since 1999, this hollowline display rack showcases superior welding techniques and attention to detail. The hollow steel frame construction offers excellent strength-to-weight ratio while maintaining a clean, minimalist aesthetic that complements any industrial or modern interior design.

Perfect for retail stores, cafes, restaurants, and offices, this hollowline display rack provides versatile storage and display capabilities. The modular design allows for easy customization and expansion, making it ideal for growing businesses that need flexible storage solutions.`,
      metaDescription: 'Hollowline Display Rack - Industrial Display Shelf Rack | Custom Furniture | Mangala Living',
      imageAlt: 'Hollowline Display Rack - Industrial Display Rack - Premium Storage from Mangala Living'
    },
    id: {
      name: 'Rak Display Hollowline',
      caption: 'Hollowline Display Rack - Rak Display Industrial | Mangala Living',
      shortCaption: 'Hollowline Display Rack - Rak Display',
      description: `Hollowline Display Rack dari Mangala Living adalah solusi penyimpanan industrial sempurna untuk ruang ritel dan komersial modern. Rak display hollowline premium ini menampilkan desain industrial yang ramping dengan konstruksi baja hollow yang memberikan ketahanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, rak display hollowline ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja hollow menawarkan rasio kekuatan-berat yang sangat baik sambil mempertahankan estetika minimalis yang bersih yang melengkapi desain interior industrial atau modern apa pun.

Sempurna untuk toko ritel, kafe, restoran, dan kantor, rak display hollowline ini menyediakan kapasitas penyimpanan dan tampilan yang serbaguna. Desain modular memungkinkan kustomisasi dan ekspansi yang mudah, menjadikannya ideal untuk bisnis yang berkembang yang membutuhkan solusi penyimpanan yang fleksibel.`,
      metaDescription: 'Hollowline Display Rack - Rak Display Industrial | Furniture Custom | Mangala Living',
      imageAlt: 'Hollowline Display Rack - Rak Display Industrial - Penyimpanan Premium dari Mangala Living'
    }
  },
  'ladder-frame-display-stand': {
    en: {
      name: 'Ladder Frame Display Stand',
      caption: 'Ladder Frame Display Stand - Industrial Ladder Display Stand | Mangala Living',
      shortCaption: 'Ladder Frame Display Stand - Ladder Display',
      description: `The Ladder Frame Display Stand from Mangala Living is the perfect industrial storage solution for modern spaces. This premium industrial storage furniture features a robust industrial design with steel construction that provides maximum storage capacity and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial storage furniture showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent durability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for offices, cafes, restaurants, and commercial spaces, this industrial storage furniture provides versatile storage capabilities. The industrial design creates functional storage solutions while adding visual interest to any space.`,
      metaDescription: 'Ladder Frame Display Stand - Industrial Ladder Display | Custom Furniture | Mangala Living',
      imageAlt: 'Ladder Frame Display Stand - Industrial Ladder Display - Premium Storage from Mangala Living'
    },
    id: {
      name: 'Stand Display Rangka Tangga',
      caption: 'Ladder Frame Display Stand - Stand Display Tangga Industrial | Mangala Living',
      shortCaption: 'Ladder Frame Display Stand - Display Tangga',
      description: `Ladder Frame Display Stand dari Mangala Living adalah solusi penyimpanan industrial sempurna untuk ruang modern. Furniture penyimpanan industrial premium ini menampilkan desain industrial yang kokoh dengan konstruksi baja yang memberikan kapasitas penyimpanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, furniture penyimpanan industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan ketahanan yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain interior industrial atau kontemporer apa pun.

Sempurna untuk kantor, kafe, restoran, dan ruang komersial, furniture penyimpanan industrial ini menyediakan kapasitas penyimpanan yang serbaguna. Desain industrial menciptakan solusi penyimpanan fungsional sambil menambah minat visual untuk ruang apa pun.`,
      metaDescription: 'Ladder Frame Display Stand - Display Tangga Industrial | Furniture Custom | Mangala Living',
      imageAlt: 'Ladder Frame Display Stand - Display Tangga Industrial - Penyimpanan Premium dari Mangala Living'
    }
  },
  'industrial-coat-rack': {
    en: {
      name: 'Industrial Coat Rack',
      caption: 'Industrial Coat Rack - Steel Coat Rack Hanger | Mangala Living',
      shortCaption: 'Industrial Coat Rack - Coat Rack',
      description: `The Industrial Coat Rack from Mangala Living is the perfect industrial storage solution for modern spaces. This premium industrial storage furniture features a robust industrial design with steel construction that provides maximum storage capacity and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial storage furniture showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent durability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for offices, cafes, restaurants, and commercial spaces, this industrial storage furniture provides versatile storage capabilities. The industrial design creates functional storage solutions while adding visual interest to any space.`,
      metaDescription: 'Industrial Coat Rack - Steel Coat Rack | Custom Furniture | Mangala Living',
      imageAlt: 'Industrial Coat Rack - Steel Coat Rack - Premium Storage from Mangala Living'
    },
    id: {
      name: 'Gantungan Baju Industrial',
      caption: 'Industrial Coat Rack - Gantungan Baju Industrial Baja | Mangala Living',
      shortCaption: 'Industrial Coat Rack - Gantungan Baju',
      description: `Industrial Coat Rack dari Mangala Living adalah solusi penyimpanan industrial sempurna untuk ruang modern. Furniture penyimpanan industrial premium ini menampilkan desain industrial yang kokoh dengan konstruksi baja yang memberikan kapasitas penyimpanan maksimal dan daya tarik visual.

Dibuat di workshop Bekasi kami sejak 1999, furniture penyimpanan industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan ketahanan yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain interior industrial atau kontemporer apa pun.

Sempurna untuk kantor, kafe, restoran, dan ruang komersial, furniture penyimpanan industrial ini menyediakan kapasitas penyimpanan yang serbaguna. Desain industrial menciptakan solusi penyimpanan fungsional sambil menambah minat visual untuk ruang apa pun.`,
      metaDescription: 'Industrial Coat Rack - Gantungan Baju Industrial Baja | Furniture Custom | Mangala Living',
      imageAlt: 'Industrial Coat Rack - Gantungan Baju Industrial - Penyimpanan Premium dari Mangala Living'
    }
  },
  'meja-kerja-industrial': {
    en: {
      name: 'Industrial Work Table',
      caption: 'Industrial Work Table - Industrial Work Desk | Mangala Living',
      shortCaption: 'Industrial Work Table - Work Desk',
      description: `The Meja Kerja Industrial from Mangala Living is the perfect industrial work table solution for modern offices and commercial spaces. This premium industrial work table features a robust industrial design with steel construction that provides maximum durability and functionality.

Crafted in our Bekasi workshop since 1999, this industrial work table showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent stability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary office design.

Perfect for offices, workshops, studios, and commercial spaces, this industrial work table provides versatile work capabilities. The industrial design creates a professional work environment while offering practical functionality for daily tasks.`,
      metaDescription: 'Industrial Work Table - Industrial Work Desk | Office Furniture | Mangala Living',
      imageAlt: 'Industrial Work Table - Industrial Work Desk - Premium Office Furniture from Mangala Living'
    },
    id: {
      name: 'Meja Kerja Industrial',
      caption: 'Meja Kerja Industrial - Meja Kerja Industrial | Mangala Living',
      shortCaption: 'Meja Kerja Industrial - Meja Kerja',
      description: `Meja Kerja Industrial dari Mangala Living adalah solusi meja kerja industrial sempurna untuk kantor modern dan ruang komersial. Meja kerja industrial premium ini menampilkan desain industrial yang kokoh dengan konstruksi baja yang memberikan ketahanan maksimal dan fungsionalitas.

Dibuat di workshop Bekasi kami sejak 1999, meja kerja industrial ini menampilkan teknik pengelasan superior dan perhatian terhadap detail. Konstruksi rangka baja industrial menawarkan stabilitas yang sangat baik sambil mempertahankan estetika modern yang ramping yang melengkapi desain kantor industrial atau kontemporer apa pun.

Sempurna untuk kantor, workshop, studio, dan ruang komersial, meja kerja industrial ini menyediakan kapasitas kerja yang serbaguna. Desain industrial menciptakan lingkungan kerja profesional sambil menawarkan fungsionalitas praktis untuk tugas harian.`,
      metaDescription: 'Meja Kerja Industrial - Meja Kerja Industrial | Furniture Kantor | Mangala Living',
      imageAlt: 'Meja Kerja Industrial - Meja Kerja Industrial - Furniture Kantor Premium dari Mangala Living'
    }
  }
}

/**
 * Get multi-language description for a product by slug
 */
export const getProductDescription = (slug: string): MultiLanguageDescription | null => {
  const desc = PRODUCT_DESCRIPTIONS[slug]
  if (!desc) return null
  return desc
}

/**
 * Get caption for product image (SEO-friendly multi-language)
 */
export const getProductImageCaption = (slug: string, isIndonesian: boolean, language?: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'): string => {
  const desc = getProductDescription(slug)
  const lang = language || (isIndonesian ? 'id' : 'en')
  
  if (!desc) {
    // Fallback to generic caption
    const fallbacks: Record<string, string> = {
      en: 'Premium Industrial Furniture from Mangala Living Workshop Bekasi',
      id: 'Furniture Industrial Premium dari Mangala Living Workshop Bekasi',
      ar: 'أثاث صناعي مميز من ورشة Mangala Living بيكاسي',
      zh: 'Mangala Living勿加泗车间的优质工业家具',
      ja: 'Mangala Livingブカシワークショップのプレミアム工業用家具',
      es: 'Mobiliario Industrial Premium del Taller Mangala Living Bekasi',
      fr: 'Mobilier Industriel Premium de l\'Atelier Mangala Living Bekasi',
      ko: 'Mangala Living 브카시 워크숍의 프리미엄 인더스트리얼 가구'
    }
    return fallbacks[lang] || fallbacks.en
  }
  return desc[lang]?.caption || desc.en.caption
}

/**
 * Get short caption for product image (for alt text)
 */
export const getProductImageAlt = (slug: string, isIndonesian: boolean, language?: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'): string => {
  const desc = getProductDescription(slug)
  const lang = language || (isIndonesian ? 'id' : 'en')
  
  if (!desc) {
    // Fallback to generic alt
    const fallbacks: Record<string, string> = {
      en: 'Premium Industrial Furniture from Mangala Living',
      id: 'Furniture Industrial Premium dari Mangala Living',
      ar: 'أثاث صناعي مميز من Mangala Living',
      zh: 'Mangala Living的优质工业家具',
      ja: 'Mangala Livingのプレミアム工業用家具',
      es: 'Mobiliario Industrial Premium de Mangala Living',
      fr: 'Mobilier Industriel Premium de Mangala Living',
      ko: 'Mangala Living의 프리미엄 인더스트리얼 가구'
    }
    return fallbacks[lang] || fallbacks.en
  }
  return desc[lang]?.imageAlt || desc.en.imageAlt
}

/**
 * Get translated product name
 */
export const getProductName = (slug: string, isIndonesian: boolean, language?: 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'): string => {
  const desc = getProductDescription(slug)
  const lang = language || (isIndonesian ? 'id' : 'en')
  
  if (!desc) {
    // Fallback - get name from products.ts
    return ''
  }
  return desc[lang]?.name || desc.en.name
}
