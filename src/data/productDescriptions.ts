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
    },
    ar: {
      name: 'رف معلق صناعي',
      caption: 'رف معلق صناعي من Mangala Living - رف تخزين فولاذي مميز مثبت على الحائط | ورشة بيكاسي إندونيسيا',
      shortCaption: 'رف معلق صناعي - رف تخزين جداري فولاذي',
      description: `الرف المعلق الصناعي من Mangala Living هو أثاث صناعي مصنوع بخبرة ومصمم للمساحات الحديثة. تم بناؤه في ورشة العمل الخاصة بنا في بيكاسي، إندونيسيا، وتعرض كل قطعة تقنيات لحام متفوقة والاهتمام بالتفاصيل.

مصنوعة يدويًا بواسطة عمال لحام وعمال معادن ذوي خبرة، تظهر كل قطعة براعة استثنائية. مصنوع من مواد متميزة بما في ذلك أقسام فولاذية مجوفة عالية الجودة وألواح فولاذية صلبة وطلاءات بودرة، يوفر هذا الأثاث القوة والجماليات الصناعية المكررة.

مصمم للمتانة والأناقة، تتميز هذه القطعة بمواد مختارة بعناية تضمن أداءً طويل الأمد. يجعل التصميم الصناعي المقترن بالحرفية الخبيرة منه قطعة بارزة في أي بيئة حديثة - سواء في المقاهي أو المطاعم أو المكاتب أو المنازل المعاصرة.

مبني وفقًا لمعايير الدرجة التجارية، تم لحام هذا الأثاث بدقة باستخدام معدات احترافية يمكنها تحمل الاستخدام اليومي الكثيف لسنوات قادمة. يمزج التصميم المتطور بسهولة بين الوظائف والقوة والشخصية الصناعية، مما يجعله خيارًا مثاليًا لأماكن الضيافة ومساحات العمل المشترك والمساكن الحديثة.

تلتزم Mangala Living بالجودة والدقة، مما يضمن أن كل لحام ومفصل لا يلبي المعايير الصناعية فحسب، بل يتجاوز التوقعات. استكشف مجموعتنا الكاملة للعثور على المزيد من القطع المصنوعة بشكل جيد بالمثل والمصممة لجلب الأناقة الصناعية والمتانة إلى مساحاتك.`,
      metaDescription: 'رف معلق صناعي - رف تخزين فولاذي مثبت على الحائط | أثاث صناعي مخصص | ورشة بيكاسي | Mangala Living',
      imageAlt: 'رف معلق صناعي - رف تخزين جداري فولاذي - أثاث صناعي مميز من ورشة Mangala Living بيكاسي'
    },
    zh: {
      name: '工业悬挂架',
      caption: 'Mangala Living工业悬挂架 - 优质钢制壁挂式储物架 | 印度尼西亚勿加泗车间',
      shortCaption: '工业悬挂架 - 钢制壁挂储物架',
      description: `Mangala Living的工业悬挂架是为现代空间精心打造的工业家具。在我们位于印度尼西亚勿加泗的车间制造，每件作品都展示了卓越的焊接技术和对细节的关注。

由经验丰富的焊工和金属工人手工制作，每件作品都展示了卓越的工艺。采用优质材料制成，包括高等级钢空心型材、实心钢板和粉末涂层表面处理，这款家具既提供强度又提供精致的工业美学。

这件作品专为耐用性和风格而设计，采用精心挑选的材料确保持久的性能。工业设计与专业工艺相结合，使其成为任何现代环境中的突出作品——无论是咖啡馆、餐厅、办公室还是现代住宅。

按照商业级标准制造，这款家具使用专业设备精心焊接，可以承受多年的重度日常使用。精致的设计轻松融合了功能性、强度和工业特色，使其成为酒店场所、共同工作空间和现代住宅的理想选择。

Mangala Living致力于质量和精确度，确保每个焊缝和接头不仅符合工业标准，而且超出预期。探索我们的完整系列，找到更多同样精心制作的作品，旨在为您的空间带来工业优雅和耐用性。`,
      metaDescription: '工业悬挂架 - 优质钢制壁挂式储物架 | 定制工业家具 | 勿加泗车间 | Mangala Living',
      imageAlt: '工业悬挂架 - 钢制壁挂储物架 - Mangala Living勿加泗车间的优质工业家具'
    },
    ja: {
      name: 'インダストリアル ハンギングシェルフ',
      caption: 'Mangala Livingのインダストリアル ハンギングシェルフ - プレミアムスチール壁掛け収納棚 | インドネシア・ブカシ工房',
      shortCaption: 'インダストリアル ハンギングシェルフ - スチール壁面収納棚',
      description: `Mangala Livingのインダストリアル ハンギングシェルフは、モダンな空間のために expertly crafted された工業用家具です。インドネシアのブカシにある当社の工房で製作され、各作品は優れた溶接技術と細部へのこだわりを示しています。

経験豊富な溶接工と金属加工職人によって手作りされ、すべての作品は卓越した職人技を示しています。高品質スチール中空型材、ソリッドスチールプレート、粉体塗装仕上げなどのプレミアム素材から構築されたこの家具は、強度と洗練された工業的美学の両方を提供します。

耐久性とスタイルのために設計されたこの作品は、長期的なパフォーマンスを保証する慎重に選択された素材を特徴としています。工業デザインと熟練した職人技が組み合わさって、カフェ、レストラン、オフィス、現代住宅など、あらゆる現代的な環境で際立つ作品となっています。

商業グレードの基準で製造されたこの家具は、長年にわたって重い日常使用に耐えることができるプロ仕様の機器を使用して丁寧に溶接されています。洗練されたデザインは、機能性、強度、工業的な性格を簡単に融合させ、ホスピタリティ会場、コワーキングスペース、現代住宅に理想的な選択となっています。

Mangala Livingは品質と精度にコミットしており、すべての溶接と接合部が工業基準を満たすだけでなく、期待を超えることを保証しています。完全なコレクションを探索して、工業的な優雅さと耐久性をあなたのスペースにもたらすために設計された、同等に優れた作品をさらに見つけてください。`,
      metaDescription: 'インダストリアル ハンギングシェルフ - プレミアムスチール壁掛け収納棚 | カスタム工業用家具 | ブカシ工房 | Mangala Living',
      imageAlt: 'インダストリアル ハンギングシェルフ - スチール壁面収納棚 - Mangala Livingブカシ工房のプレミアム工業用家具'
    },
    es: {
      name: 'Estante Colgante Industrial',
      caption: 'Estante Colgante Industrial de Mangala Living - Estante de Almacenamiento de Acero Premium Montado en Pared | Taller Bekasi Indonesia',
      shortCaption: 'Estante Colgante Industrial - Estante de Almacenamiento de Pared de Acero',
      description: `El Estante Colgante Industrial de Mangala Living es un mueble industrial elaborado por expertos diseñado para espacios modernos. Construido en nuestro taller en Bekasi, Indonesia, cada pieza muestra técnicas de soldadura superiores y atención al detalle.

Hecho a mano por soldadores y trabajadores metalúrgicos experimentados, cada pieza demuestra una artesanía excepcional. Construido con materiales premium que incluyen secciones huecas de acero de alto grado, placas de acero sólido y acabados con recubrimiento en polvo, este mueble ofrece tanto resistencia como estética industrial refinada.

Diseñado para durabilidad y estilo, esta pieza cuenta con materiales cuidadosamente seleccionados que aseguran un rendimiento duradero. El diseño industrial combinado con la artesanía experta lo convierte en una pieza destacada en cualquier entorno moderno, ya sea en cafeterías, restaurantes, oficinas o hogares contemporáneos.

Construido según estándares de grado comercial, este mueble está meticulosamente soldado utilizando equipo profesional que puede soportar un uso diario intenso durante años. El diseño sofisticado combina sin esfuerzo funcionalidad, resistencia y carácter industrial, convirtiéndolo en una opción ideal para lugares de hospitalidad, espacios de coworking y residencias modernas.

Mangala Living está comprometido con la calidad y la precisión, asegurando que cada soldadura y unión no solo cumpla con los estándares industriales sino que supere las expectativas. Explore nuestra colección completa para encontrar más piezas igualmente bien elaboradas diseñadas para llevar elegancia industrial y durabilidad a sus espacios.`,
      metaDescription: 'Estante Colgante Industrial - Estante de Almacenamiento de Acero Montado en Pared Premium | Mobiliario Industrial Personalizado | Taller Bekasi | Mangala Living',
      imageAlt: 'Estante Colgante Industrial - Estante de Almacenamiento de Pared de Acero - Mobiliario Industrial Premium del Taller Mangala Living Bekasi'
    },
    fr: {
      name: 'Étagère Suspendue Industrielle',
      caption: 'Étagère Suspendue Industrielle de Mangala Living - Étagère de Rangement en Acier Premium Fixée au Mur | Atelier Bekasi Indonésie',
      shortCaption: 'Étagère Suspendue Industrielle - Étagère de Rangement Murale en Acier',
      description: `L'Étagère Suspendue Industrielle de Mangala Living est un meuble industriel expertement conçu pour les espaces modernes. Construite dans notre atelier à Bekasi, en Indonésie, chaque pièce présente des techniques de soudage supérieures et une attention aux détails.

Fabriquée à la main par des soudeurs et des métallurgistes expérimentés, chaque pièce démontre un savoir-faire exceptionnel. Construite à partir de matériaux premium comprenant des sections creuses en acier de haute qualité, des plaques d'acier massif et des finitions thermolaquées, ce meuble offre à la fois résistance et esthétique industrielle raffinée.

Conçue pour la durabilité et le style, cette pièce présente des matériaux soigneusement sélectionnés qui assurent une performance durable. Le design industriel associé à un savoir-faire expert en fait une pièce remarquable dans tout cadre moderne - que ce soit dans des cafés, des restaurants, des bureaux ou des maisons contemporaines.

Construite selon des normes de qualité commerciale, ce meuble est méticuleusement soudé à l'aide d'équipements professionnels qui peuvent résister à une utilisation quotidienne intensive pendant des années. Le design sophistiqué mélange sans effort fonctionnalité, résistance et caractère industriel, ce qui en fait un choix idéal pour les lieux d'accueil, les espaces de coworking et les résidences modernes.

Mangala Living s'engage pour la qualité et la précision, garantissant que chaque soudure et joint non seulement répond aux normes industrielles mais dépasse les attentes. Explorez notre collection complète pour trouver d'autres pièces tout aussi bien conçues, conçues pour apporter élégance industrielle et durabilité à vos espaces.`,
      metaDescription: 'Étagère Suspendue Industrielle - Étagère de Rangement en Acier Fixée au Mur Premium | Mobilier Industriel Personnalisé | Atelier Bekasi | Mangala Living',
      imageAlt: 'Étagère Suspendue Industrielle - Étagère de Rangement Murale en Acier - Mobilier Industriel Premium de l\'Atelier Mangala Living Bekasi'
    },
    ko: {
      name: '인더스트리얼 행잉 선반',
      caption: 'Mangala Living 인더스트리얼 행잉 선반 - 프리미엄 강철 벽걸이 수납 선반 | 인도네시아 브카시 워크숍',
      shortCaption: '인더스트리얼 행잉 선반 - 강철 벽면 수납 선반',
      description: `Mangala Living의 인더스트리얼 행잉 선반은 현대 공간을 위해 전문적으로 제작된 인더스트리얼 가구입니다. 인도네시아 브카시에 있는 우리 워크숍에서 제작되었으며, 각 작품은 뛰어난 용접 기술과 세부 사항에 대한 관심을 보여줍니다.

숙련된 용접공과 금속 가공 전문가가 손으로 제작한 모든 작품은 탁월한 장인 정신을 보여줍니다. 고급 강철 중공 섹션, 솔리드 강철 플레이트 및 분체 도장 마감을 포함한 프리미엄 재료로 제작된 이 가구는 강도와 세련된 인더스트리얼 미학을 모두 제공합니다.

내구성과 스타일을 위해 설계된 이 작품은 오래 지속되는 성능을 보장하는 신중하게 선택된 재료를 특징으로 합니다. 전문 장인 정신과 결합된 인더스트리얼 디자인은 카페, 레스토랑, 사무실 또는 현대 주택 등 모든 현대적인 환경에서 눈에 띄는 작품입니다.

상업용 등급 표준에 따라 제작된 이 가구는 수년간 무거운 일상 사용을 견딜 수 있는 전문 장비를 사용하여 세심하게 용접되었습니다. 세련된 디자인은 기능성, 강도 및 인더스트리얼 특성을 쉽게 결합하여 호스피탈리티 장소, 코워킹 스페이스 및 현대 주거지에 이상적인 선택이 됩니다.

Mangala Living은 품질과 정밀도에 전념하며, 모든 용접 및 조인트가 산업 표준을 충족할 뿐만 아니라 기대를 초과하도록 보장합니다. 완전한 컬렉션을 탐색하여 공간에 인더스트리얼 우아함과 내구성을 가져오도록 설계된 동등하게 잘 만들어진 더 많은 작품을 찾으십시오.`,
      metaDescription: '인더스트리얼 행잉 선반 - 프리미엄 강철 벽걸이 수납 선반 | 맞춤형 인더스트리얼 가구 | 브카시 워크숍 | Mangala Living',
      imageAlt: '인더스트리얼 행잉 선반 - 강철 벽면 수납 선반 - Mangala Living 브카시 워크숍의 프리미엄 인더스트리얼 가구'
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
    },
    ar: {
      name: 'رف كتب فريم لوفت',
      caption: 'رف كتب فريم لوفت - رف كتب تخزين صناعي للمساحات الحديثة | ورشة Mangala Living بيكاسي',
      shortCaption: 'رف كتب فريم لوفت - تخزين رف كتب صناعي',
      description: `رف كتب فريم لوفت من Mangala Living هو الحل الأمثل للتخزين الصناعي للمنازل والمكاتب والمساحات التجارية الحديثة. يتميز رف الكتب المميز هذا بتصميم صناعي أنيق مع هيكل نموذجي يوفر أقصى قدر من مرونة التخزين والجاذبية البصرية.

صُنع في ورشة بيكاسي لدينا منذ عام 1999، يعرض رف الكتب هذا تقنيات لحام متفوقة والاهتمام بالتفاصيل. يوفر هيكل الإطار الفولاذي الصناعي قوة ممتازة مع الحفاظ على جمالية بسيطة ونظيفة تكمل أي تصميم داخلي صناعي أو حديث.

مثالي لغرف المعيشة والمكاتب والمقاهي والمساحات التجارية، يوفر رف الكتب هذا قدرات تخزين وعرض متعددة الاستخدامات. يسمح التصميم المعياري بالتخصيص والتوسع السهل، مما يجعله مثاليًا للمجموعات المتنامية واحتياجات التخزين المتغيرة.

مبني وفقًا لمعايير الدرجة التجارية، تم تصميم رف الكتب هذا لتحمل الاستخدام اليومي الثقيل مع الحفاظ على سلامته الهيكلية وجاذبيته البصرية. يضمن الطلاء بالبودرة حماية طويلة الأمد ضد التآكل والتآكل، مما يجعله استثمارًا ذكيًا لأي مساحة.`,
      metaDescription: 'رف كتب فريم لوفت - تخزين رف كتب صناعي | أثاث مخصص | Mangala Living بيكاسي',
      imageAlt: 'رف كتب فريم لوفت - تخزين رف كتب صناعي - أثاث مميز من Mangala Living'
    },
    zh: {
      name: 'Frame Loft书架',
      caption: 'Frame Loft书架 - 现代空间的工业储物书架 | Mangala Living勿加泗车间',
      shortCaption: 'Frame Loft书架 - 工业书架存储',
      description: `Mangala Living的Frame Loft书架是现代住宅、办公室和商业空间的完美工业储物解决方案。这款优质frame loft书架采用时尚的工业设计和模块化结构，提供最大的储物灵活性和视觉吸引力。

自1999年以来在我们位于勿加泗的车间制作，这款frame loft书架展示了卓越的焊接技术和对细节的关注。工业钢框架结构提供出色的强度，同时保持干净、简约的美学，可以补充任何工业或现代室内设计。

非常适合客厅、办公室、咖啡馆和零售空间，这款frame loft书架提供多功能存储和展示能力。模块化设计允许轻松定制和扩展，使其成为不断增长的收藏和不断变化的存储需求的理想选择。

按照商业级标准制造，这款frame loft书架旨在承受繁重的日常使用，同时保持其结构完整性和视觉吸引力。粉末涂层表面处理确保对磨损和腐蚀的长期保护，使其成为任何空间的明智投资。`,
      metaDescription: 'Frame Loft书架 - 工业书架存储 | 定制家具 | Mangala Living勿加泗',
      imageAlt: 'Frame Loft书架 - 工业书架存储 - Mangala Living的优质家具'
    },
    ja: {
      name: 'Frame Loftブックシェルフ',
      caption: 'Frame Loftブックシェルフ - モダン空間のための工業用収納ブックシェルフ | Mangala Livingブカシ工房',
      shortCaption: 'Frame Loftブックシェルフ - 工業用ブックシェルフ収納',
      description: `Mangala LivingのFrame Loftブックシェルフは、モダンな住宅、オフィス、商業空間のための完璧な工業用収納ソリューションです。このプレミアムframe loftブックシェルフは、最大限の収納柔軟性と視覚的な魅力を提供するモジュラー構造を備えた洗練された工業デザインが特徴です。

1999年以来、ブカシのワークショップで製作されたこのframe loftブックシェルフは、優れた溶接技術と細部へのこだわりを示しています。工業用スチールフレーム構造は、あらゆる工業的またはモダンなインテリアデザインを補完するクリーンでミニマリストな美学を維持しながら、優れた強度を提供します。

リビングルーム、オフィス、カフェ、小売スペースに最適で、このframe loftブックシェルフは多目的な収納とディスプレイ機能を提供します。モジュラーデザインにより、簡単にカスタマイズと拡張が可能で、成長するコレクションと変化する収納ニーズに理想的です。

商業グレードの基準で製造されたこのframe loftブックシェルフは、構造的完全性と視覚的魅力を維持しながら、重い日常使用に耐えるように設計されています。粉体塗装仕上げは、摩耗と腐食に対する長期的な保護を保証し、あらゆる空間にとって賢明な投資となります。`,
      metaDescription: 'Frame Loftブックシェルフ - 工業用ブックシェルフ収納 | カスタム家具 | Mangala Livingブカシ',
      imageAlt: 'Frame Loftブックシェルフ - 工業用ブックシェルフ収納 - Mangala Livingのプレミアム家具'
    },
    es: {
      name: 'Estantería Frame Loft',
      caption: 'Estantería Frame Loft - Estantería de Almacenamiento Industrial para Espacios Modernos | Taller Mangala Living Bekasi',
      shortCaption: 'Estantería Frame Loft - Almacenamiento de Estantería Industrial',
      description: `La Estantería Frame Loft de Mangala Living es la solución perfecta de almacenamiento industrial para hogares modernos, oficinas y espacios comerciales. Esta estantería frame loft premium presenta un diseño industrial elegante con construcción modular que proporciona la máxima flexibilidad de almacenamiento y atractivo visual.

Elaborada en nuestro taller de Bekasi desde 1999, esta estantería frame loft muestra técnicas de soldadura superiores y atención al detalle. La construcción del marco de acero industrial ofrece una excelente resistencia mientras mantiene una estética minimalista y limpia que complementa cualquier diseño de interiores industrial o moderno.

Perfecta para salas de estar, oficinas, cafeterías y espacios minoristas, esta estantería frame loft proporciona capacidades de almacenamiento y exhibición versátiles. El diseño modular permite una fácil personalización y expansión, lo que la hace ideal para colecciones en crecimiento y necesidades de almacenamiento cambiantes.

Construida según estándares de grado comercial, esta estantería frame loft está diseñada para soportar un uso diario intenso mientras mantiene su integridad estructural y atractivo visual. El acabado con recubrimiento en polvo asegura una protección duradera contra el desgaste y la corrosión, convirtiéndola en una inversión inteligente para cualquier espacio.`,
      metaDescription: 'Estantería Frame Loft - Almacenamiento de Estantería Industrial | Mobiliario Personalizado | Mangala Living Bekasi',
      imageAlt: 'Estantería Frame Loft - Almacenamiento de Estantería Industrial - Mobiliario Premium de Mangala Living'
    },
    fr: {
      name: 'Étagère Frame Loft',
      caption: 'Étagère Frame Loft - Étagère de Rangement Industrielle pour Espaces Modernes | Atelier Mangala Living Bekasi',
      shortCaption: 'Étagère Frame Loft - Rangement Étagère Industrielle',
      description: `L'Étagère Frame Loft de Mangala Living est la solution parfaite de rangement industriel pour les maisons modernes, les bureaux et les espaces commerciaux. Cette étagère frame loft premium présente un design industriel élégant avec une construction modulaire qui offre une flexibilité de rangement maximale et un attrait visuel.

Fabriquée dans notre atelier de Bekasi depuis 1999, cette étagère frame loft présente des techniques de soudage supérieures et une attention aux détails. La construction du cadre en acier industriel offre une excellente résistance tout en maintenant une esthétique minimaliste et épurée qui complète tout design d'intérieur industriel ou moderne.

Parfaite pour les salons, les bureaux, les cafés et les espaces de vente au détail, cette étagère frame loft offre des capacités de rangement et d'affichage polyvalentes. La conception modulaire permet une personnalisation et une expansion faciles, ce qui la rend idéale pour les collections en croissance et les besoins de rangement changeants.

Construite selon des normes de qualité commerciale, cette étagère frame loft est conçue pour résister à une utilisation quotidienne intensive tout en maintenant son intégrité structurelle et son attrait visuel. La finition thermolaquée assure une protection durable contre l'usure et la corrosion, ce qui en fait un investissement judicieux pour tout espace.`,
      metaDescription: 'Étagère Frame Loft - Rangement Étagère Industrielle | Mobilier Personnalisé | Mangala Living Bekasi',
      imageAlt: 'Étagère Frame Loft - Rangement Étagère Industrielle - Mobilier Premium de Mangala Living'
    },
    ko: {
      name: 'Frame Loft 책장',
      caption: 'Frame Loft 책장 - 현대 공간을 위한 인더스트리얼 수납 책장 | Mangala Living 브카시 워크숍',
      shortCaption: 'Frame Loft 책장 - 인더스트리얼 책장 수납',
      description: `Mangala Living의 Frame Loft 책장은 현대 주택, 사무실 및 상업 공간을 위한 완벽한 인더스트리얼 수납 솔루션입니다. 이 프리미엄 frame loft 책장은 최대 수납 유연성과 시각적 매력을 제공하는 모듈식 구조를 갖춘 세련된 인더스트리얼 디자인이 특징입니다.

1999년부터 브카시 워크숍에서 제작된 이 frame loft 책장은 뛰어난 용접 기술과 세부 사항에 대한 관심을 보여줍니다. 인더스트리얼 강철 프레임 구조는 모든 인더스트리얼 또는 현대적인 인테리어 디자인을 보완하는 깔끔하고 미니멀한 미학을 유지하면서 뛰어난 강도를 제공합니다.

거실, 사무실, 카페 및 소매 공간에 완벽한 이 frame loft 책장은 다목적 수납 및 디스플레이 기능을 제공합니다. 모듈식 디자인은 손쉬운 맞춤화 및 확장을 가능하게 하여 성장하는 컬렉션과 변화하는 수납 요구에 이상적입니다.

상업용 등급 표준에 따라 제작된 이 frame loft 책장은 구조적 무결성과 시각적 매력을 유지하면서 무거운 일상 사용을 견디도록 설계되었습니다. 분체 도장 마감은 마모 및 부식에 대한 오래 지속되는 보호를 보장하여 모든 공간에 현명한 투자가 됩니다.`,
      metaDescription: 'Frame Loft 책장 - 인더스트리얼 책장 수납 | 맞춤형 가구 | Mangala Living 브카시',
      imageAlt: 'Frame Loft 책장 - 인더스트리얼 책장 수납 - Mangala Living의 프리미엄 가구'
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
    },
    ar: {
      name: 'طاولة بار بلكونة',
      caption: 'طاولة بار بلكونة - طاولة بار صناعية خارجية للفناء والتراس | Mangala Living',
      shortCaption: 'طاولة بار بلكونة - طاولة بار خارجية',
      description: `طاولة البار للبلكونة من Mangala Living هي الحل المثالي للطعام والترفيه في الهواء الطلق للمساحات الحديثة. تتميز طاولة البار المميزة هذه بتصميم صناعي قوي مع بناء مقاوم للعوامل الجوية يوفر أقصى قدر من المتانة للاستخدام الخارجي.

صُنعت في ورشة بيكاسي لدينا منذ عام 1999، تعرض طاولة البار هذه تقنيات لحام متفوقة والاهتمام بالتفاصيل. يوفر هيكل الإطار الفولاذي الصناعي استقرارًا ممتازًا مع الحفاظ على جمالية حديثة أنيقة تكمل أي تصميم صناعي داخلي أو خارجي.

مثالية للشرفات والتراسات والفناءات والمقاهي الخارجية، توفر طاولة البار هذه قدرات طعام وترفيه متعددة الاستخدامات. يضمن الطلاء بالبودرة المقاوم للعوامل الجوية حماية طويلة الأمد ضد الظروف الخارجية القاسية، مما يجعلها مثالية للاستخدام على مدار العام.

مبنية وفقًا لمعايير الدرجة التجارية، تم تصميم طاولة البار هذه لتحمل الاستخدام اليومي الثقيل مع الحفاظ على سلامتها الهيكلية وجاذبيتها البصرية. يمزج التصميم الصناعي بسهولة بين الوظائف والقوة والمتانة الخارجية، مما يجعله خيارًا مثاليًا لأماكن الضيافة والشرفات السكنية ومساحات الترفيه الخارجية.`,
      metaDescription: 'طاولة بار بلكونة - طاولة بار صناعية خارجية | أثاث مقاوم للعوامل الجوية | Mangala Living',
      imageAlt: 'طاولة بار بلكونة - طاولة بار صناعية خارجية - أثاث مقاوم للعوامل الجوية من Mangala Living'
    },
    zh: {
      name: '阳台吧台桌',
      caption: '阳台吧台桌 - 露台和阳台用户外工业吧台桌 | Mangala Living',
      shortCaption: '阳台吧台桌 - 户外吧台桌',
      description: `Mangala Living的阳台吧台桌是现代空间的终极户外用餐和娱乐解决方案。这款优质阳台吧台桌采用坚固的工业设计和防风雨结构，为户外使用提供最大的耐用性。

自1999年以来在我们位于勿加泗的车间制作，这款阳台吧台桌展示了卓越的焊接技术和对细节的关注。工业钢框架结构提供出色的稳定性，同时保持时尚现代的美学，可以补充任何户外或室内工业设计。

非常适合阳台、露台、庭院和户外咖啡馆，这款阳台吧台桌提供多功能用餐和娱乐能力。防风雨粉末涂层确保对恶劣户外条件的长期保护，使其成为全年使用的理想选择。

按照商业级标准制造，这款阳台吧台桌旨在承受繁重的日常使用，同时保持其结构完整性和视觉吸引力。工业设计轻松融合了功能性、强度和户外耐用性，使其成为酒店场所、住宅阳台和户外娱乐空间的理想选择。`,
      metaDescription: '阳台吧台桌 - 户外工业吧台桌 | 防风雨家具 | Mangala Living',
      imageAlt: '阳台吧台桌 - 户外工业吧台桌 - Mangala Living的防风雨家具'
    },
    ja: {
      name: 'バルコニーバーテーブル',
      caption: 'バルコニーバーテーブル - パティオとテラス用アウトドア工業用バーテーブル | Mangala Living',
      shortCaption: 'バルコニーバーテーブル - アウトドアバーテーブル',
      description: `Mangala Livingのバルコニーバーテーブルは、モダンな空間のための究極のアウトドアダイニングとエンターテインメントソリューションです。このプレミアムバルコニーバーテーブルは、屋外使用に最大限の耐久性を提供する耐候性構造を備えた頑丈な工業デザインが特徴です。

1999年以来、ブカシのワークショップで製作されたこのバルコニーバーテーブルは、優れた溶接技術と細部へのこだわりを示しています。工業用スチールフレーム構造は、あらゆる屋外または屋内の工業デザインを補完する洗練された現代的な美学を維持しながら、優れた安定性を提供します。

バルコニー、テラス、パティオ、屋外カフェに最適で、このバルコニーバーテーブルは多目的なダイニングとエンターテインメント機能を提供します。耐候性粉体塗装は、過酷な屋外条件に対する長期的な保護を保証し、一年中の使用に理想的です。

商業グレードの基準で製造されたこのバルコニーバーテーブルは、構造的完全性と視覚的魅力を維持しながら、重い日常使用に耐えるように設計されています。工業デザインは、機能性、強度、屋外耐久性を簡単に融合させ、ホスピタリティ会場、住宅バルコニー、屋外エンターテインメントスペースに理想的な選択となっています。`,
      metaDescription: 'バルコニーバーテーブル - アウトドア工業用バーテーブル | 耐候性家具 | Mangala Living',
      imageAlt: 'バルコニーバーテーブル - アウトドア工業用バーテーブル - Mangala Livingの耐候性家具'
    },
    es: {
      name: 'Mesa de Bar para Balcón',
      caption: 'Mesa de Bar para Balcón - Mesa de Bar Industrial para Exteriores para Patio y Terraza | Mangala Living',
      shortCaption: 'Mesa de Bar para Balcón - Mesa de Bar para Exteriores',
      description: `La Mesa de Bar para Balcón de Mangala Living es la solución definitiva de comedor y entretenimiento al aire libre para espacios modernos. Esta mesa de bar premium presenta un diseño industrial robusto con construcción resistente a la intemperie que proporciona la máxima durabilidad para uso en exteriores.

Elaborada en nuestro taller de Bekasi desde 1999, esta mesa de bar para balcón muestra técnicas de soldadura superiores y atención al detalle. La construcción del marco de acero industrial ofrece una excelente estabilidad mientras mantiene una estética moderna elegante que complementa cualquier diseño industrial interior o exterior.

Perfecta para balcones, terrazas, patios y cafeterías al aire libre, esta mesa de bar para balcón proporciona capacidades de comedor y entretenimiento versátiles. El recubrimiento en polvo resistente a la intemperie asegura una protección duradera contra condiciones exteriores adversas, haciéndola ideal para uso durante todo el año.

Construida según estándares de grado comercial, esta mesa de bar para balcón está diseñada para soportar un uso diario intenso mientras mantiene su integridad estructural y atractivo visual. El diseño industrial combina sin esfuerzo funcionalidad, resistencia y durabilidad para exteriores, convirtiéndola en una opción ideal para lugares de hospitalidad, balcones residenciales y espacios de entretenimiento al aire libre.`,
      metaDescription: 'Mesa de Bar para Balcón - Mesa de Bar Industrial para Exteriores | Mobiliario Resistente a la Intemperie | Mangala Living',
      imageAlt: 'Mesa de Bar para Balcón - Mesa de Bar Industrial para Exteriores - Mobiliario Resistente a la Intemperie de Mangala Living'
    },
    fr: {
      name: 'Table de Bar de Balcon',
      caption: 'Table de Bar de Balcon - Table de Bar Industrielle Extérieure pour Patio et Terrasse | Mangala Living',
      shortCaption: 'Table de Bar de Balcon - Table de Bar Extérieure',
      description: `La Table de Bar de Balcon de Mangala Living est la solution ultime de restauration et de divertissement en plein air pour les espaces modernes. Cette table de bar premium présente un design industriel robuste avec une construction résistante aux intempéries qui offre une durabilité maximale pour une utilisation en extérieur.

Fabriquée dans notre atelier de Bekasi depuis 1999, cette table de bar de balcon présente des techniques de soudage supérieures et une attention aux détails. La construction du cadre en acier industriel offre une excellente stabilité tout en maintenant une esthétique moderne élégante qui complète tout design industriel intérieur ou extérieur.

Parfaite pour les balcons, les terrasses, les patios et les cafés en plein air, cette table de bar de balcon offre des capacités de restauration et de divertissement polyvalentes. Le revêtement en poudre résistant aux intempéries assure une protection durable contre les conditions extérieures difficiles, ce qui la rend idéale pour une utilisation toute l'année.

Construite selon des normes de qualité commerciale, cette table de bar de balcon est conçue pour résister à une utilisation quotidienne intensive tout en maintenant son intégrité structurelle et son attrait visuel. Le design industriel mélange sans effort fonctionnalité, résistance et durabilité extérieure, ce qui en fait un choix idéal pour les lieux d'accueil, les balcons résidentiels et les espaces de divertissement en plein air.`,
      metaDescription: 'Table de Bar de Balcon - Table de Bar Industrielle Extérieure | Mobilier Résistant aux Intempéries | Mangala Living',
      imageAlt: 'Table de Bar de Balcon - Table de Bar Industrielle Extérieure - Mobilier Résistant aux Intempéries de Mangala Living'
    },
    ko: {
      name: '발코니 바 테이블',
      caption: '발코니 바 테이블 - 파티오와 테라스용 아웃도어 인더스트리얼 바 테이블 | Mangala Living',
      shortCaption: '발코니 바 테이블 - 아웃도어 바 테이블',
      description: `Mangala Living의 발코니 바 테이블은 현대 공간을 위한 궁극적인 아웃도어 식사 및 엔터테인먼트 솔루션입니다. 이 프리미엄 발코니 바 테이블은 아웃도어 사용을 위한 최대 내구성을 제공하는 내후성 구조를 갖춘 견고한 인더스트리얼 디자인이 특징입니다.

1999년부터 브카시 워크숍에서 제작된 이 발코니 바 테이블은 뛰어난 용접 기술과 세부 사항에 대한 관심을 보여줍니다. 인더스트리얼 강철 프레임 구조는 모든 아웃도어 또는 인도어 인더스트리얼 디자인을 보완하는 세련되고 현대적인 미학을 유지하면서 뛰어난 안정성을 제공합니다.

발코니, 테라스, 파티오 및 아웃도어 카페에 완벽한 이 발코니 바 테이블은 다목적 식사 및 엔터테인먼트 기능을 제공합니다. 내후성 분체 도장은 가혹한 아웃도어 조건에 대한 오래 지속되는 보호를 보장하여 일년 내내 사용하기에 이상적입니다.

상업용 등급 표준에 따라 제작된 이 발코니 바 테이블은 구조적 무결성과 시각적 매력을 유지하면서 무거운 일상 사용을 견디도록 설계되었습니다. 인더스트리얼 디자인은 기능성, 강도 및 아웃도어 내구성을 쉽게 결합하여 호스피탈리티 장소, 주거 발코니 및 아웃도어 엔터테인먼트 공간에 이상적인 선택이 됩니다.`,
      metaDescription: '발코니 바 테이블 - 아웃도어 인더스트리얼 바 테이블 | 내후성 가구 | Mangala Living',
      imageAlt: '발코니 바 테이블 - 아웃도어 인더스트리얼 바 테이블 - Mangala Living의 내후성 가구'
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
