import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ConsultationModal from '../components/ConsultationModal'
import { ArrowLeft, CheckCircle, Clock, Star, Calculator, X, MessageCircle } from 'lucide-react'
import './ServiceDetail.css'

const ServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>()
  const cleanSlug = serviceSlug?.replace(/^jasa-(pembuatan-)?|-bekasi$/g, '')
  const [showCalculator, setShowCalculator] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [calculatorData, setCalculatorData] = React.useState({
    length: '',
    width: '',
    height: '',
    quantity: '1',
    material: '',
    additionalOptions: {} as { [key: string]: string }
  })

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [serviceSlug])

  const serviceData: { [key: string]: any } = {
    'kanopi': {
      title: 'Bengkel Las Kanopi',
      description: 'Selamat datang ke dalam website kami sebagai Bengkel Las Mandiri yang menerima jasa pembuatan kanopi yang memiliki pengalaman selama belasan tahun di bidang pengelasan.',
      icon: 'Umbrella',
      price: 'Mulai dari Rp. 450.000/meter persegi',
      priceCustom: 'Model tempa mulai dari Rp. 500.000/m2',
      features: [
        'Desain custom sesuai kebutuhan',
        'Material berkualitas tinggi (SNI)',
        'Tahan cuaca ekstrem',
        'Pemasangan profesional',
        'Garansi kualitas'
      ],
      materials: [
        {
          name: 'ATAP',
          options: ['Polycarbonate', 'Spandek', 'Alderon', 'Acrylic', 'Solartuf'],
          description: 'Masing-masing mempunyai kekurangan dan kelebihan tergantung kebutuhan dan selera anda.'
        },
        {
          name: 'RANGKA',
          options: ['Hollow 40×40', 'Hollow 40×60', 'Hollow 40×80', 'Hollow 5×10', 'Pipa 1 1/4 inc', 'Pipa 1 1/2 inc', 'Pipa 2 inc'],
          description: 'Masing-masing ukuran mempunyai ketebalan yang berbeda. Pilihlah sesuai kebutuhan anda.'
        },
        {
          name: 'TIANG',
          options: ['Besi Baja WF 150', 'Hollow 80x80', 'Pipa 3 inch'],
          description: 'Tiang harus kokoh dan disesuaikan dengan model dan volume kanopi yang akan anda bikin.'
        }
      ],
      process: [
        'Hubungi no telp. 0852-1207-8467 atau datang langsung ke tempat kami',
        'Pihak bengkel akan melakukan survei terlebih dahulu',
        'Konsumen berhak pilih jenis bahan dan model yang digunakan',
        'Bila konsumen setuju dengan harga, wajib memberi DP',
        'Pihak bengkel akan mulai mengerjakan setelah ada DP',
        'Konsultasi biaya gratis'
      ],
      benefits: [
        'Perlindungan dari panas dan hujan',
        'Nilai estetika yang tinggi',
        'Daya tahan jangka panjang',
        'Perawatan mudah',
        'Membuat rumah terlihat cantik',
        'Area teras lebih sejuk'
      ],
      whyChoose: [
        'Berpengalaman lebih dari 10 tahun',
        'Pemesanan mudah dan cepat',
        'Tepat waktu dalam pengerjaan',
        'Harga murah dan bisa dinegosiasi',
        'Respon cepat customer service',
        'Bergaransi pekerjaan'
      ]
    },
    'pagar-besi': {
      title: 'Pagar Besi',
      description: 'Membuat pagar besi untuk rumah, kantor, gedung dan lainnya dengan desain minimalis dan modern',
      icon: 'Fence',
      price: 'Mulai dari Rp. 350.000/meter',
      priceCustom: 'Model tempa mulai dari Rp. 500.000/meter',
      features: [
        'Desain minimalis dan modern',
        'Keamanan maksimal',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Pemasangan rapi'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 40×40', 'Besi Hollow 50×50', 'Besi Hollow 60×60'],
          description: 'Pilihan ketebalan sesuai kebutuhan keamanan dan estetika.'
        },
        {
          name: 'FINISHING',
          options: ['Cat Duco', 'Powder Coating', 'Galvanis', 'Chrome'],
          description: 'Berbagai pilihan finishing untuk ketahanan dan keindahan.'
        }
      ],
      process: [
        'Survey dan pengukuran lokasi',
        'Desain pagar sesuai kebutuhan',
        'Pembuatan komponen di workshop',
        'Finishing dan coating',
        'Pemasangan di lokasi',
        'Quality control dan garansi'
      ],
      benefits: [
        'Keamanan properti maksimal',
        'Estetika yang menarik',
        'Daya tahan tinggi',
        'Perawatan minimal',
        'Meningkatkan nilai properti'
      ],
      whyChoose: [
        'Desain custom sesuai keinginan',
        'Material berkualitas SNI',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'pintu-besi': {
      title: 'Pintu Besi',
      description: 'Jasa pembuatan pintu besi yang mampu menerima berbagai pesanan bentuk, ukuran dan model dengan kualitas terbaik',
      icon: 'DoorOpen',
      price: 'Mulai dari Rp. 800.000/pintu',
      priceCustom: 'Model custom mulai dari Rp. 1.200.000/pintu',
      features: [
        'Desain custom berbagai model',
        'Keamanan maksimal',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Sistem penguncian kuat'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 40×40', 'Besi Hollow 50×50', 'Besi Plat 2mm', 'Besi Plat 3mm'],
          description: 'Pilihan ketebalan sesuai kebutuhan keamanan.'
        },
        {
          name: 'PENGUNCI',
          options: ['Handle Stainless', 'Kunci Mortise', 'Kunci Digital', 'Kunci Biometric'],
          description: 'Sistem penguncian sesuai kebutuhan keamanan.'
        }
      ],
      process: [
        'Konsultasi desain dan ukuran',
        'Survey lokasi pemasangan',
        'Pembuatan frame dan panel',
        'Instalasi sistem penguncian',
        'Finishing dan coating',
        'Pemasangan dan testing'
      ],
      benefits: [
        'Keamanan rumah maksimal',
        'Tahan terhadap cuaca',
        'Daya tahan jangka panjang',
        'Estetika yang menarik',
        'Perawatan mudah'
      ],
      whyChoose: [
        'Desain sesuai kebutuhan',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga terjangkau',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'pintu-kasa-nyamuk': {
      title: 'Pintu Kasa Nyamuk',
      description: 'Menerima pembuatan pintu kasa nyamuk dengan kualitas besi terbaik untuk melindungi rumah dari serangga',
      icon: 'Grid3X3',
      price: 'Mulai dari Rp. 300.000/pintu',
      priceCustom: 'Model custom mulai dari Rp. 500.000/pintu',
      features: [
        'Kasa nyamuk berkualitas',
        'Frame besi kuat',
        'Sistem buka tutup mudah',
        'Tahan terhadap cuaca',
        'Pemasangan rapi'
      ],
      materials: [
        {
          name: 'KASA',
          options: ['Kasa Fiberglass', 'Kasa Stainless', 'Kasa Aluminium'],
          description: 'Pilihan kasa sesuai kebutuhan dan budget.'
        },
        {
          name: 'FRAME',
          options: ['Besi Hollow 20×20', 'Besi Hollow 25×25', 'Aluminium'],
          description: 'Frame yang kuat dan tahan lama.'
        }
      ],
      process: [
        'Pengukuran ukuran pintu',
        'Pemilihan jenis kasa',
        'Pembuatan frame',
        'Pemasangan kasa',
        'Instalasi engsel dan handle',
        'Pemasangan di lokasi'
      ],
      benefits: [
        'Perlindungan dari nyamuk',
        'Sirkulasi udara tetap baik',
        'Tidak menghalangi cahaya',
        'Mudah dibersihkan',
        'Harga terjangkau'
      ],
      whyChoose: [
        'Kualitas kasa terbaik',
        'Frame besi kuat',
        'Pemasangan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pengerjaan cepat'
      ]
    },
    'teralis-jendela': {
      title: 'Teralis Jendela',
      description: 'Bengkel las terbaik siap mengerjakan teralis jendela untuk pengamanan rumah dengan desain yang menarik',
      icon: 'Grid3X3',
      price: 'Mulai dari Rp. 200.000/jendela',
      priceCustom: 'Model custom mulai dari Rp. 350.000/jendela',
      features: [
        'Desain custom menarik',
        'Keamanan maksimal',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Pemasangan rapi'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 20×20', 'Besi Hollow 25×25', 'Besi Hollow 30×30'],
          description: 'Pilihan ukuran sesuai kebutuhan keamanan.'
        },
        {
          name: 'DESAIN',
          options: ['Model Minimalis', 'Model Klasik', 'Model Modern', 'Model Custom'],
          description: 'Berbagai pilihan desain sesuai selera.'
        }
      ],
      process: [
        'Pengukuran jendela',
        'Desain teralis',
        'Pembuatan komponen',
        'Finishing dan coating',
        'Pemasangan di jendela',
        'Quality control'
      ],
      benefits: [
        'Keamanan jendela maksimal',
        'Estetika yang menarik',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi',
        'Perawatan mudah'
      ],
      whyChoose: [
        'Desain sesuai kebutuhan',
        'Material berkualitas',
        'Pengerjaan profesional',
        'Harga terjangkau',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'teralis-pintu': {
      title: 'Teralis Pintu',
      description: 'Tukang las yang siap membuat teralis pintu sebagai anti maling dan menghalau hewan dengan desain yang kuat',
      icon: 'Grid3X3',
      price: 'Mulai dari Rp. 250.000/pintu',
      priceCustom: 'Model custom mulai dari Rp. 400.000/pintu',
      features: [
        'Desain anti maling',
        'Keamanan maksimal',
        'Material besi kuat',
        'Finishing anti karat',
        'Pemasangan profesional'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 25×25', 'Besi Hollow 30×30', 'Besi Hollow 40×40'],
          description: 'Pilihan ketebalan sesuai kebutuhan keamanan.'
        },
        {
          name: 'SISTEM PENGUNCI',
          options: ['Kunci Mortise', 'Kunci Padlock', 'Kunci Digital'],
          description: 'Sistem penguncian yang aman.'
        }
      ],
      process: [
        'Survey keamanan pintu',
        'Desain teralis anti maling',
        'Pembuatan komponen',
        'Instalasi sistem penguncian',
        'Finishing dan coating',
        'Pemasangan dan testing'
      ],
      benefits: [
        'Keamanan pintu maksimal',
        'Anti maling dan hewan',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi',
        'Estetika yang menarik'
      ],
      whyChoose: [
        'Desain anti maling',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'railing-balkon': {
      title: 'Railing Balkon',
      description: 'Bengkel Las Mandiri mengerjakan railing balkon berbagai model dan kokoh untuk keamanan maksimal',
      icon: 'Building',
      price: 'Mulai dari Rp. 300.000/meter',
      priceCustom: 'Model custom mulai dari Rp. 500.000/meter',
      features: [
        'Desain modern dan elegan',
        'Keamanan maksimal',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Pemasangan kokoh'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 40×40', 'Besi Hollow 50×50', 'Besi Hollow 60×60'],
          description: 'Pilihan ketebalan sesuai kebutuhan keamanan.'
        },
        {
          name: 'DESAIN',
          options: ['Model Minimalis', 'Model Klasik', 'Model Modern', 'Model Custom'],
          description: 'Berbagai pilihan desain sesuai arsitektur bangunan.'
        }
      ],
      process: [
        'Survey struktur balkon',
        'Desain railing',
        'Pembuatan komponen',
        'Finishing dan coating',
        'Pemasangan di balkon',
        'Quality control keamanan'
      ],
      benefits: [
        'Keamanan balkon maksimal',
        'Estetika yang menarik',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi',
        'Meningkatkan nilai properti'
      ],
      whyChoose: [
        'Desain sesuai arsitektur',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'railing-tangga': {
      title: 'Railing Tangga',
      description: 'Mampu membuat railing tangga dengan desain trendy yang kokoh dan kuat untuk keamanan maksimal',
      icon: 'TrendingUp',
      price: 'Mulai dari Rp. 250.000/meter',
      priceCustom: 'Model custom mulai dari Rp. 400.000/meter',
      features: [
        'Desain trendy dan modern',
        'Keamanan maksimal',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Pemasangan kokoh'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 25×25', 'Besi Hollow 30×30', 'Besi Hollow 40×40'],
          description: 'Pilihan ketebalan sesuai kebutuhan keamanan.'
        },
        {
          name: 'DESAIN',
          options: ['Model Spiral', 'Model Lurus', 'Model Custom', 'Model Tempa'],
          description: 'Berbagai pilihan desain sesuai kebutuhan.'
        }
      ],
      process: [
        'Survey struktur tangga',
        'Desain railing',
        'Pembuatan komponen',
        'Finishing dan coating',
        'Pemasangan di tangga',
        'Quality control keamanan'
      ],
      benefits: [
        'Keamanan tangga maksimal',
        'Estetika yang menarik',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi',
        'Mudah dibersihkan'
      ],
      whyChoose: [
        'Desain trendy dan modern',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'pintu-henderson': {
      title: 'Pintu Henderson',
      description: 'Kami mengerjakan pembuatan pintu henderson sesuai permintaan dengan kualitas terbaik',
      icon: 'DoorOpen',
      price: 'Mulai dari Rp. 1.500.000/pintu',
      priceCustom: 'Model custom mulai dari Rp. 2.000.000/pintu',
      features: [
        'Desain klasik elegan',
        'Keamanan maksimal',
        'Material besi berkualitas',
        'Finishing premium',
        'Sistem penguncian kuat'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 50×50', 'Besi Plat 3mm', 'Besi Plat 4mm'],
          description: 'Pilihan ketebalan sesuai kebutuhan keamanan.'
        },
        {
          name: 'FINISHING',
          options: ['Cat Duco Premium', 'Powder Coating', 'Chrome', 'Gold'],
          description: 'Finishing premium untuk keindahan.'
        }
      ],
      process: [
        'Konsultasi desain klasik',
        'Survey lokasi',
        'Pembuatan frame dan panel',
        'Instalasi sistem penguncian',
        'Finishing premium',
        'Pemasangan dan testing'
      ],
      benefits: [
        'Keamanan rumah maksimal',
        'Estetika klasik elegan',
        'Tahan terhadap cuaca',
        'Daya tahan jangka panjang',
        'Meningkatkan nilai properti'
      ],
      whyChoose: [
        'Desain klasik elegan',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'pintu-lipat': {
      title: 'Pintu Lipat',
      description: 'Bengkel Las Mandiri menerima pembuatan pintu lipat berbagai model dengan sistem yang mudah digunakan',
      icon: 'DoorOpen',
      price: 'Mulai dari Rp. 800.000/pintu',
      priceCustom: 'Model custom mulai dari Rp. 1.200.000/pintu',
      features: [
        'Sistem lipat yang mudah',
        'Desain modern',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Pemasangan profesional'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 40×40', 'Besi Hollow 50×50', 'Besi Plat 2mm'],
          description: 'Pilihan ketebalan sesuai kebutuhan.'
        },
        {
          name: 'SISTEM LIPAT',
          options: ['Engsel Khusus', 'Roller System', 'Track System'],
          description: 'Sistem lipat yang mudah dan tahan lama.'
        }
      ],
      process: [
        'Konsultasi desain lipat',
        'Pengukuran lokasi',
        'Pembuatan panel lipat',
        'Instalasi sistem lipat',
        'Finishing dan coating',
        'Pemasangan dan testing'
      ],
      benefits: [
        'Sistem lipat yang mudah',
        'Menghemat ruang',
        'Estetika modern',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi'
      ],
      whyChoose: [
        'Desain modern dan praktis',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'tangga-putar': {
      title: 'Tangga Putar',
      description: 'Berpengalaman membuat tangga putar dengan berbagai model yang elegan dan fungsional',
      icon: 'TrendingUp',
      price: 'Mulai dari Rp. 2.500.000/tangga',
      priceCustom: 'Model custom mulai dari Rp. 3.500.000/tangga',
      features: [
        'Desain spiral elegan',
        'Konstruksi kokoh',
        'Material besi berkualitas',
        'Finishing premium',
        'Pemasangan profesional'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 50×50', 'Besi Hollow 60×60', 'Besi Plat 3mm'],
          description: 'Pilihan ketebalan sesuai kebutuhan konstruksi.'
        },
        {
          name: 'DESAIN',
          options: ['Model Spiral Klasik', 'Model Spiral Modern', 'Model Custom'],
          description: 'Berbagai pilihan desain sesuai kebutuhan.'
        }
      ],
      process: [
        'Konsultasi desain spiral',
        'Survey struktur bangunan',
        'Pembuatan komponen',
        'Finishing premium',
        'Pemasangan di lokasi',
        'Quality control keamanan'
      ],
      benefits: [
        'Desain spiral elegan',
        'Menghemat ruang',
        'Estetika yang menarik',
        'Konstruksi kokoh',
        'Daya tahan tinggi'
      ],
      whyChoose: [
        'Desain spiral elegan',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'menara-tangki-air': {
      title: 'Menara Tangki Air',
      description: 'Bengkel Las Mandiri mengerjakan pembuatan menara tangki air untuk toren dengan konstruksi yang kokoh',
      icon: 'Building2',
      price: 'Mulai dari Rp. 3.000.000/menara',
      priceCustom: 'Model custom mulai dari Rp. 4.500.000/menara',
      features: [
        'Konstruksi kokoh dan kuat',
        'Desain sesuai kebutuhan',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Pemasangan profesional'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 60×60', 'Besi Hollow 80×80', 'Besi WF 150'],
          description: 'Pilihan ketebalan sesuai beban tangki.'
        },
        {
          name: 'KONSTRUKSI',
          options: ['Rangka Utama', 'Bracing', 'Platform', 'Tangga Akses'],
          description: 'Komponen konstruksi yang lengkap.'
        }
      ],
      process: [
        'Konsultasi kapasitas tangki',
        'Survey lokasi dan struktur',
        'Desain konstruksi',
        'Pembuatan komponen',
        'Finishing anti karat',
        'Pemasangan dan testing'
      ],
      benefits: [
        'Konstruksi kokoh dan aman',
        'Mendukung beban tangki',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi',
        'Mudah diakses untuk perawatan'
      ],
      whyChoose: [
        'Konstruksi kokoh dan aman',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'konstruksi-baja': {
      title: 'Konstruksi Baja',
      description: 'Baja adalah logam yang sering digunakan dalam konstruksi karena memiliki sifat-sifat mekanis yang sangat baik, termasuk kekuatan yang tinggi, daya lentur, dan kemampuan untuk menahan beban yang signifikan.',
      icon: 'Building2',
      price: 'Mulai dari Rp. 2.500.000/ton',
      priceCustom: 'Proyek custom mulai dari Rp. 3.500.000/ton',
      features: [
        'Kekuatan tinggi dan daya lentur',
        'Tahan terhadap beban signifikan',
        'Material berkualitas SNI',
        'Konstruksi yang kokoh',
        'Pemasangan profesional'
      ],
      materials: [
        {
          name: 'BAJA UTAMA',
          options: ['Baja WF 150', 'Baja WF 200', 'Baja WF 250', 'Baja WF 300'],
          description: 'Pilihan profil baja sesuai kebutuhan konstruksi.'
        },
        {
          name: 'SAMBUNGAN',
          options: ['Las Listrik', 'Las Argon', 'Baut High Tension', 'Rivet'],
          description: 'Sistem sambungan yang kuat dan tahan lama.'
        }
      ],
      process: [
        'Konsultasi desain konstruksi',
        'Survey lokasi proyek',
        'Perhitungan struktur',
        'Pembuatan komponen baja',
        'Finishing dan coating',
        'Pemasangan di lokasi'
      ],
      benefits: [
        'Konstruksi yang sangat kuat',
        'Tahan terhadap gempa',
        'Daya tahan jangka panjang',
        'Fleksibilitas desain',
        'Perawatan minimal'
      ],
      whyChoose: [
        'Pengalaman konstruksi baja',
        'Material berkualitas SNI',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'bike-rack': {
      title: 'Bike Rack',
      description: 'Bike rack, atau rak sepeda, adalah struktur atau perangkat yang dirancang khusus untuk menyimpan atau mengamankan sepeda. Tujuannya adalah untuk memberikan tempat yang aman dan teratur untuk menyimpan sepeda.',
      icon: 'Bike',
      price: 'Mulai dari Rp. 500.000/unit',
      priceCustom: 'Model custom mulai dari Rp. 750.000/unit',
      features: [
        'Desain anti pencurian',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Pemasangan yang kokoh',
        'Kapasitas sesuai kebutuhan'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 40×40', 'Besi Hollow 50×50', 'Besi Plat 3mm'],
          description: 'Pilihan ketebalan sesuai kebutuhan keamanan.'
        },
        {
          name: 'SISTEM PENGUNCI',
          options: ['Chain Lock', 'U-Lock', 'Cable Lock', 'Digital Lock'],
          description: 'Sistem penguncian yang aman.'
        }
      ],
      process: [
        'Konsultasi kapasitas sepeda',
        'Survey lokasi pemasangan',
        'Desain bike rack',
        'Pembuatan komponen',
        'Finishing dan coating',
        'Pemasangan dan testing'
      ],
      benefits: [
        'Keamanan sepeda maksimal',
        'Tempat penyimpanan teratur',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi',
        'Mudah digunakan'
      ],
      whyChoose: [
        'Desain anti pencurian',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga terjangkau',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'pintu-dorong': {
      title: 'Pintu Dorong',
      description: 'Pintu dorong, juga dikenal sebagai pintu geser atau pintu luncur, adalah jenis pintu yang dibuka dan ditutup dengan cara digeser ke samping, tanpa perlu memutar pegangan atau tuas.',
      icon: 'DoorOpen',
      price: 'Mulai dari Rp. 1.200.000/pintu',
      priceCustom: 'Model custom mulai dari Rp. 1.800.000/pintu',
      features: [
        'Sistem geser yang lancar',
        'Menghemat ruang',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Pemasangan profesional'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 50×50', 'Besi Plat 2mm', 'Besi Plat 3mm'],
          description: 'Pilihan ketebalan sesuai kebutuhan.'
        },
        {
          name: 'SISTEM GESER',
          options: ['Roller System', 'Track System', 'Guide Rail', 'Wheel Assembly'],
          description: 'Komponen sistem geser yang lancar.'
        }
      ],
      process: [
        'Konsultasi desain pintu',
        'Pengukuran bukaan',
        'Pembuatan frame dan panel',
        'Instalasi sistem geser',
        'Finishing dan coating',
        'Pemasangan dan testing'
      ],
      benefits: [
        'Menghemat ruang',
        'Sistem buka tutup mudah',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi',
        'Estetika modern'
      ],
      whyChoose: [
        'Desain modern dan praktis',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'pintu-kayu-ulin': {
      title: 'Pintu Kayu Ulin',
      description: 'Pintu besi dengan penutup kayu ulin adalah jenis pintu yang memiliki bingkai atau struktur utama terbuat dari besi, dengan permukaan eksterior yang ditutupi oleh kayu ulin.',
      icon: 'TreePine',
      price: 'Mulai dari Rp. 2.000.000/pintu',
      priceCustom: 'Model custom mulai dari Rp. 3.000.000/pintu',
      features: [
        'Kombinasi besi dan kayu ulin',
        'Tahan terhadap cuaca ekstrem',
        'Anti rayap dan serangga',
        'Estetika natural yang menarik',
        'Daya tahan jangka panjang'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 50×50', 'Besi Plat 3mm', 'Besi Plat 4mm'],
          description: 'Struktur besi yang kokoh untuk frame pintu.'
        },
        {
          name: 'KAYU ULIN',
          options: ['Kayu Ulin Grade A', 'Kayu Ulin Grade B', 'Finishing Natural', 'Finishing Stained'],
          description: 'Kayu ulin berkualitas tinggi dengan finishing yang tahan lama.'
        }
      ],
      process: [
        'Konsultasi desain pintu',
        'Pemilihan kayu ulin',
        'Pembuatan frame besi',
        'Pemasangan kayu ulin',
        'Finishing dan coating',
        'Pemasangan dan testing'
      ],
      benefits: [
        'Tahan terhadap cuaca ekstrem',
        'Anti rayap dan serangga',
        'Estetika natural yang menarik',
        'Daya tahan jangka panjang',
        'Meningkatkan nilai properti'
      ],
      whyChoose: [
        'Kombinasi material premium',
        'Kayu ulin berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'teralis': {
      title: 'Teralis',
      description: 'Tralis dengan plat cutting merujuk pada penggunaan teknologi pemotongan laser untuk membuat desain atau motif pada plat. Teknologi ini memungkinkan pembuatan desain yang sangat detail dan presisi pada material plat besi.',
      icon: 'Grid3X3',
      price: 'Mulai dari Rp. 300.000/m²',
      priceCustom: 'Model custom mulai dari Rp. 500.000/m²',
      features: [
        'Teknologi laser cutting',
        'Desain detail dan presisi',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Pemasangan profesional'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Plat 2mm', 'Besi Plat 3mm', 'Besi Plat 4mm'],
          description: 'Pilihan ketebalan sesuai kebutuhan desain.'
        },
        {
          name: 'TEKNOLOGI',
          options: ['Laser Cutting', 'Plasma Cutting', 'Water Jet Cutting'],
          description: 'Teknologi pemotongan yang presisi.'
        }
      ],
      process: [
        'Konsultasi desain teralis',
        'Pembuatan desain digital',
        'Laser cutting pada plat',
        'Finishing dan coating',
        'Pemasangan di lokasi',
        'Quality control'
      ],
      benefits: [
        'Desain detail dan presisi',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi',
        'Estetika yang menarik',
        'Perawatan mudah'
      ],
      whyChoose: [
        'Teknologi laser cutting',
        'Desain custom presisi',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas'
      ]
    },
    'pintu-garasi-sliding': {
      title: 'Pintu Garasi Sliding',
      description: 'Pintu garasi sliding adalah jenis pintu yang dibuka dengan cara digeser ke samping, sangat cocok untuk garasi dengan ruang terbatas.',
      icon: 'DoorOpen',
      price: 'Mulai dari Rp. 1.500.000/pintu',
      priceCustom: 'Model custom mulai dari Rp. 2.500.000/pintu',
      features: [
        'Sistem sliding yang lancar',
        'Menghemat ruang garasi',
        'Material besi berkualitas',
        'Finishing anti karat',
        'Pemasangan profesional'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 60×60', 'Besi Plat 3mm', 'Besi Plat 4mm'],
          description: 'Pilihan ketebalan sesuai kebutuhan garasi.'
        },
        {
          name: 'SISTEM SLIDING',
          options: ['Track System', 'Roller Assembly', 'Guide Rail', 'Wheel System'],
          description: 'Komponen sistem sliding yang lancar.'
        }
      ],
      process: [
        'Konsultasi desain pintu garasi',
        'Pengukuran bukaan garasi',
        'Pembuatan frame dan panel',
        'Instalasi sistem sliding',
        'Finishing dan coating',
        'Pemasangan dan testing'
      ],
      benefits: [
        'Menghemat ruang garasi',
        'Sistem buka tutup mudah',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi',
        'Keamanan maksimal'
      ],
      whyChoose: [
        'Desain praktis untuk garasi',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    },
    'tempat-tidur-besi': {
      title: 'Tempat Tidur Besi',
      description: 'Tempat tidur besi yang kokoh dan tahan lama dengan desain modern dan minimalis. Dibuat dengan material besi berkualitas tinggi untuk memberikan kenyamanan dan keamanan maksimal.',
      icon: 'Bed',
      price: 'Mulai dari Rp. 800.000/tempat tidur',
      priceCustom: 'Model custom mulai dari Rp. 1.200.000/tempat tidur',
      features: [
        'Desain modern dan minimalis',
        'Konstruksi besi yang kokoh',
        'Finishing anti karat',
        'Mudah dibersihkan',
        'Daya tahan jangka panjang'
      ],
      materials: [
        {
          name: 'BESI UTAMA',
          options: ['Besi Hollow 40×40', 'Besi Hollow 50×50', 'Besi Plat 2mm'],
          description: 'Pilihan ketebalan sesuai kebutuhan tempat tidur.'
        },
        {
          name: 'FINISHING',
          options: ['Cat Duco', 'Powder Coating', 'Chrome', 'Stainless'],
          description: 'Berbagai pilihan finishing untuk keindahan.'
        }
      ],
      process: [
        'Konsultasi desain tempat tidur',
        'Pengukuran ukuran tempat tidur',
        'Pembuatan frame besi',
        'Finishing dan coating',
        'Assembly dan testing',
        'Pengiriman dan pemasangan'
      ],
      benefits: [
        'Konstruksi yang kokoh',
        'Tahan terhadap cuaca',
        'Daya tahan tinggi',
        'Mudah dibersihkan',
        'Harga terjangkau'
      ],
      whyChoose: [
        'Desain modern dan minimalis',
        'Material berkualitas tinggi',
        'Pengerjaan profesional',
        'Harga kompetitif',
        'Garansi kualitas',
        'Pemasangan tepat waktu'
      ]
    }
  }

  const service = serviceData[cleanSlug || ''] || {
    title: 'Layanan Tidak Ditemukan',
    description: 'Layanan yang Anda cari tidak tersedia',
    icon: 'Wrench',
    features: [],
    process: [],
    benefits: []
  }

  return (
    <div className="service-detail-page">
      <Helmet>
        <title>{service.title} - Bengkel Las Mandiri | Jasa {service.title} Terbaik di Bogor</title>
        <meta name="description" content={`${service.description} Harga mulai dari ${service.price}. 15+ tahun pengalaman, kualitas SNI terjamin, harga kompetitif. Konsultasi gratis!`} />
        <meta name="keywords" content={`${service.title}, bengkel las, jasa ${service.title}, harga ${service.title}, ${service.title} bogor, ${service.title} jakarta, konstruksi besi, Bengkel Las Mandiri`} />
        <meta property="og:title" content={`${service.title} - Bengkel Las Mandiri`} />
        <meta property="og:description" content={`${service.description} Harga mulai dari ${service.price}. 15+ tahun pengalaman, kualitas SNI terjamin.`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} - Bengkel Las Mandiri`} />
        <meta name="twitter:description" content={`${service.description} Harga mulai dari ${service.price}. 15+ tahun pengalaman, kualitas SNI terjamin.`} />
        <link rel="canonical" href={`https://lasbekasi.com/layanan-las-bekasi/jasa-pembuatan-${cleanSlug}-bekasi`} />
      </Helmet>
      <Header />
      
      <section className="service-hero">
        <div className="container">
              <Link to="/layanan-las-bekasi" className="back-link">
            <ArrowLeft size={20} />
            Kembali ke Layanan
          </Link>
          
          <div className="service-hero-content">
            <div className="section-subtitle">Layanan</div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        </div>
      </section>

      <section className="service-content-section">
        <div className="container">
          {/* Bahan yang Digunakan - Moved to top */}
          {service.materials && (
            <div className="service-materials">
              <h3>Bahan yang Digunakan</h3>
              <p className="section-description">
                Kami hanya menggunakan material berkualitas tinggi dengan standar SNI yang telah teruji ketahanannya. 
                Setiap bahan dipilih dengan cermat untuk memastikan hasil akhir yang tahan lama, kuat, dan sesuai dengan kebutuhan Anda. 
                Investasi yang tepat hari ini akan memberikan perlindungan dan keindahan bertahun-tahun ke depan.
              </p>
              <div className="materials-grid">
                {service.materials.map((material: any, index: number) => (
                  <div key={index} className="material-card">
                    <h4>{material.name}</h4>
                    <p>{material.description}</p>
                    <div className="material-options">
                      {material.options.map((option: string, optIndex: number) => (
                        <span key={optIndex} className="material-option">{option}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Proses Pengerjaan - Moved to top */}
          <div className="service-process">
            <h3>Proses Pengerjaan</h3>
            <p className="section-description">
              Proses pengerjaan yang sistematis dan profesional memastikan hasil yang sempurna sesuai ekspektasi Anda. 
              Setiap tahap dikerjakan dengan teliti oleh tim ahli berpengalaman, mulai dari perencanaan hingga finishing. 
              Kami berkomitmen memberikan transparansi penuh dalam setiap proses, sehingga Anda dapat memantau perkembangan proyek dengan nyaman.
            </p>
            <div className="process-steps">
              {service.process.map((step: string, index: number) => (
                <div key={index} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-pricing">
            <h3>Harga Layanan</h3>
            <p className="section-description">
              Harga yang transparan dan kompetitif tanpa ada biaya tersembunyi. Kami memberikan nilai terbaik untuk setiap rupiah yang Anda investasikan. 
              Harga sudah termasuk material berkualitas, tenaga kerja profesional, dan garansi kualitas. 
              Konsultasi gratis untuk mendapatkan estimasi yang akurat sesuai kebutuhan dan budget Anda.
            </p>
            <div className="pricing-cards">
              <div className="pricing-card">
                <h4>Harga Standar</h4>
                <div className="price">{service.price}</div>
                <p>Harga sudah termasuk pemasangan</p>
              </div>
              {service.priceCustom && (
                <div className="pricing-card featured">
                  <h4>Model Custom</h4>
                  <div className="price">{service.priceCustom}</div>
                  <p>Desain sesuai keinginan</p>
                </div>
              )}
            </div>
            <div className="calculator-button-container">
              <button className="btn-calculator" onClick={() => setShowCalculator(true)}>
                <Calculator size={20} />
                Mau Coba Hitung?
              </button>
            </div>
          </div>

          <div className="service-content-grid">
            <div className="service-features">
              <h3>Fitur Layanan</h3>
              <ul>
                {service.features.map((feature: string, index: number) => (
                  <li key={index}>
                    <CheckCircle size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-benefits">
              <h3>Keunggulan</h3>
              <ul>
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index}>
                    <Star size={20} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="service-education">
            <div className="education-content">
              <div className="education-header">
                <h2>Mengapa Memilih Bengkel Las Mandiri?</h2>
                <p className="education-subtitle">20+ Tahun Pengalaman • Kualitas Terjamin • Harga Kompetitif</p>
              </div>
              
              <div className="education-grid">
                <div className="education-card">
                  <div className="education-icon">
                    <Clock size={32} />
                  </div>
                  <h3>20+ Tahun Pengalaman</h3>
                  <p>Lebih dari 20 tahun sejak 1999 melayani ribuan pelanggan dengan kepuasan maksimal. Pengalaman yang teruji dalam berbagai proyek konstruksi besi.</p>
                </div>
                
                <div className="education-card">
                  <div className="education-icon">
                    <CheckCircle size={32} />
                  </div>
                  <h3>Kualitas SNI Terjamin</h3>
                  <p>Menggunakan material berkualitas tinggi dengan standar SNI. Setiap produk dijamin tahan lama dan sesuai standar industri.</p>
                </div>
                
                <div className="education-card">
                  <div className="education-icon">
                    <Star size={32} />
                  </div>
                  <h3>Harga Kompetitif</h3>
                  <p>Harga terjangkau dengan kualitas premium. Kami memberikan nilai terbaik untuk setiap rupiah yang Anda investasikan.</p>
                </div>
              </div>
              
              <div className="education-proof">
                <h3>Bukti Kompetensi Kami</h3>
                <div className="proof-stats">
                  <div className="proof-item">
                    <div className="proof-number">20+</div>
                    <div className="proof-label">Tahun Pengalaman</div>
                  </div>
                  <div className="proof-item">
                    <div className="proof-number">1000+</div>
                    <div className="proof-label">Proyek Selesai</div>
                  </div>
                  <div className="proof-item">
                    <div className="proof-number">98%</div>
                    <div className="proof-label">Tingkat Kepuasan</div>
                  </div>
                  <div className="proof-item">
                    <div className="proof-number">24/7</div>
                    <div className="proof-label">Layanan Konsultasi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Calculator Modal */}
      {showCalculator && (
        <div className="calculator-modal">
          <div className="calculator-content">
            <div className="calculator-header">
              <h3>Kalkulator Estimasi Harga</h3>
              <button className="close-calculator" onClick={() => setShowCalculator(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="calculator-form">
              {/* Dynamic form fields based on service type */}
              {cleanSlug === 'kanopi' && (
                <>
                  <div className="form-group">
                    <label>Panjang Kanopi (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.length}
                      onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      placeholder="Masukkan panjang kanopi"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Lebar Kanopi (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar kanopi"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Atap</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis atap</option>
                      <option value="polycarbonate">Polycarbonate (+0%)</option>
                      <option value="spandek">Spandek (+0%)</option>
                      <option value="alderon">Alderon (+15%)</option>
                      <option value="acrylic">Acrylic (+20%)</option>
                      <option value="solartuf">Solartuf (+25%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Rangka</label>
                    <select 
                      value={calculatorData.additionalOptions.range || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, range: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis rangka</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-40x60">Hollow 40×60 (+10%)</option>
                      <option value="hollow-40x80">Hollow 40×80 (+20%)</option>
                      <option value="pipa-1-25">Pipa 1 1/4 inc (+15%)</option>
                      <option value="pipa-1-5">Pipa 1 1/2 inc (+25%)</option>
                      <option value="pipa-2">Pipa 2 inc (+35%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Tiang</label>
                    <select 
                      value={calculatorData.additionalOptions.tiang || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, tiang: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis tiang</option>
                      <option value="besi-wf-150">Besi Baja WF 150 (+0%)</option>
                      <option value="hollow-80x80">Hollow 80×80 (+5%)</option>
                      <option value="pipa-3">Pipa 3 inch (+10%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'pagar-besi' && (
                <>
                  <div className="form-group">
                    <label>Panjang Pagar (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.length}
                      onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      placeholder="Masukkan panjang pagar"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Pagar (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi pagar"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+20%)</option>
                      <option value="hollow-60x60">Hollow 60×60 (+40%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Finishing</label>
                    <select 
                      value={calculatorData.additionalOptions.finishing || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, finishing: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis finishing</option>
                      <option value="cat-duco">Cat Duco (+0%)</option>
                      <option value="powder-coating">Powder Coating (+15%)</option>
                      <option value="galvanis">Galvanis (+25%)</option>
                      <option value="chrome">Chrome (+50%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'konstruksi-baja' && (
                <>
                  <div className="form-group">
                    <label>Volume Proyek (ton)</label>
                    <input 
                      type="number" 
                      value={calculatorData.length}
                      onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      placeholder="Masukkan volume dalam ton"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Baja</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis baja</option>
                      <option value="baja-wf-150">Baja WF 150 (+0%)</option>
                      <option value="baja-wf-200">Baja WF 200 (+15%)</option>
                      <option value="baja-wf-250">Baja WF 250 (+30%)</option>
                      <option value="baja-wf-300">Baja WF 300 (+45%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Kompleksitas Proyek</label>
                    <select 
                      value={calculatorData.additionalOptions.complexity || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, complexity: e.target.value}
                      })}
                    >
                      <option value="">Pilih kompleksitas</option>
                      <option value="sederhana">Sederhana (+0%)</option>
                      <option value="sedang">Sedang (+25%)</option>
                      <option value="kompleks">Kompleks (+50%)</option>
                      <option value="sangat-kompleks">Sangat Kompleks (+75%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Sambungan</label>
                    <select 
                      value={calculatorData.additionalOptions.sambungan || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, sambungan: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis sambungan</option>
                      <option value="las-biasa">Las Biasa (+0%)</option>
                      <option value="las-tungsten">Las Tungsten (+15%)</option>
                      <option value="baut-keling">Baut & Keling (+10%)</option>
                      <option value="sambungan-khusus">Sambungan Khusus (+25%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'railing-tangga' && (
                <>
                  <div className="form-group">
                    <label>Panjang Railing (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.length}
                      onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      placeholder="Masukkan panjang railing"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Railing (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi railing"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Desain</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis desain</option>
                      <option value="minimalis">Minimalis (+0%)</option>
                      <option value="klasik">Klasik (+20%)</option>
                      <option value="modern">Modern (+15%)</option>
                      <option value="custom">Custom (+40%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'pintu-garasi-sliding' && (
                <>
                  <div className="form-group">
                    <label>Lebar Garasi (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar garasi"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Garasi (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi garasi"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-60x60">Besi Hollow 60×60 (+0%)</option>
                      <option value="plat-3mm">Besi Plat 3mm (+15%)</option>
                      <option value="plat-4mm">Besi Plat 4mm (+25%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Sistem Sliding</label>
                    <select 
                      value={calculatorData.additionalOptions.sliding || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, sliding: e.target.value}
                      })}
                    >
                      <option value="">Pilih sistem sliding</option>
                      <option value="track-system">Track System (+0%)</option>
                      <option value="roller-assembly">Roller Assembly (+10%)</option>
                      <option value="guide-rail">Guide Rail (+15%)</option>
                      <option value="wheel-system">Wheel System (+20%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'pintu-besi' && (
                <>
                  <div className="form-group">
                    <label>Lebar Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+15%)</option>
                      <option value="plat-2mm">Plat 2mm (+20%)</option>
                      <option value="plat-3mm">Plat 3mm (+30%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Sistem Pengunci</label>
                    <select 
                      value={calculatorData.additionalOptions.lock || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, lock: e.target.value}
                      })}
                    >
                      <option value="">Pilih sistem pengunci</option>
                      <option value="handle-stainless">Handle Stainless (+0%)</option>
                      <option value="kunci-mortise">Kunci Mortise (+10%)</option>
                      <option value="kunci-digital">Kunci Digital (+25%)</option>
                      <option value="kunci-biometric">Kunci Biometric (+50%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'pintu-kayu-ulin' && (
                <>
                  <div className="form-group">
                    <label>Lebar Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi Frame</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi frame</option>
                      <option value="hollow-50x50">Hollow 50×50 (+0%)</option>
                      <option value="plat-3mm">Plat 3mm (+15%)</option>
                      <option value="plat-4mm">Plat 4mm (+25%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Grade Kayu Ulin</label>
                    <select 
                      value={calculatorData.additionalOptions.wood || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, wood: e.target.value}
                      })}
                    >
                      <option value="">Pilih grade kayu ulin</option>
                      <option value="grade-a">Grade A (+0%)</option>
                      <option value="grade-b">Grade B (+15%)</option>
                      <option value="finishing-natural">Finishing Natural (+10%)</option>
                      <option value="finishing-stained">Finishing Stained (+20%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'teralis' && (
                <>
                  <div className="form-group">
                    <label>Panjang Teralis (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.length}
                      onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      placeholder="Masukkan panjang teralis"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Lebar Teralis (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar teralis"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Ketebalan Plat</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih ketebalan plat</option>
                      <option value="plat-2mm">Plat 2mm (+0%)</option>
                      <option value="plat-3mm">Plat 3mm (+20%)</option>
                      <option value="plat-4mm">Plat 4mm (+40%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Teknologi Cutting</label>
                    <select 
                      value={calculatorData.additionalOptions.technology || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, technology: e.target.value}
                      })}
                    >
                      <option value="">Pilih teknologi cutting</option>
                      <option value="laser-cutting">Laser Cutting (+0%)</option>
                      <option value="plasma-cutting">Plasma Cutting (+10%)</option>
                      <option value="water-jet">Water Jet Cutting (+25%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'tempat-tidur-besi' && (
                <>
                  <div className="form-group">
                    <label>Panjang Tempat Tidur (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.length}
                      onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      placeholder="Masukkan panjang tempat tidur"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Lebar Tempat Tidur (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar tempat tidur"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+15%)</option>
                      <option value="plat-2mm">Plat 2mm (+20%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Finishing</label>
                    <select 
                      value={calculatorData.additionalOptions.finishing || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, finishing: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis finishing</option>
                      <option value="cat-duco">Cat Duco (+0%)</option>
                      <option value="powder-coating">Powder Coating (+15%)</option>
                      <option value="chrome">Chrome (+30%)</option>
                      <option value="stainless">Stainless (+40%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'bike-rack' && (
                <>
                  <div className="form-group">
                    <label>Jumlah Sepeda</label>
                    <input 
                      type="number" 
                      value={calculatorData.quantity}
                      onChange={(e) => setCalculatorData({...calculatorData, quantity: e.target.value})}
                      placeholder="Masukkan jumlah sepeda"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+15%)</option>
                      <option value="plat-3mm">Plat 3mm (+20%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Sistem Pengunci</label>
                    <select 
                      value={calculatorData.additionalOptions.lock || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, lock: e.target.value}
                      })}
                    >
                      <option value="">Pilih sistem pengunci</option>
                      <option value="chain-lock">Chain Lock (+0%)</option>
                      <option value="u-lock">U-Lock (+10%)</option>
                      <option value="cable-lock">Cable Lock (+5%)</option>
                      <option value="electronic-lock">Electronic Lock (+25%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Finishing</label>
                    <select 
                      value={calculatorData.additionalOptions.finishing || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, finishing: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis finishing</option>
                      <option value="cat-duco">Cat Duco (+0%)</option>
                      <option value="powder-coating">Powder Coating (+15%)</option>
                      <option value="galvanis">Galvanis (+20%)</option>
                      <option value="chrome">Chrome (+30%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'pintu-dorong' && (
                <>
                  <div className="form-group">
                    <label>Lebar Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+15%)</option>
                      <option value="plat-2mm">Plat 2mm (+20%)</option>
                      <option value="plat-3mm">Plat 3mm (+30%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Sistem Sliding</label>
                    <select 
                      value={calculatorData.additionalOptions.sliding || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, sliding: e.target.value}
                      })}
                    >
                      <option value="">Pilih sistem sliding</option>
                      <option value="track-biasa">Track Biasa (+0%)</option>
                      <option value="track-roller">Track Roller (+15%)</option>
                      <option value="track-guide">Track Guide (+25%)</option>
                      <option value="track-wheel">Track Wheel (+30%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'railing-balkon' && (
                <>
                  <div className="form-group">
                    <label>Panjang Railing (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.length}
                      onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      placeholder="Masukkan panjang railing"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Railing (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi railing"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+15%)</option>
                      <option value="pipa-1-25">Pipa 1 1/4 inc (+10%)</option>
                      <option value="pipa-1-5">Pipa 1 1/2 inc (+20%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Desain</label>
                    <select 
                      value={calculatorData.additionalOptions.design || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, design: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis desain</option>
                      <option value="minimalis">Minimalis (+0%)</option>
                      <option value="klasik">Klasik (+20%)</option>
                      <option value="modern">Modern (+15%)</option>
                      <option value="custom">Custom (+40%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'menara-tangki-air' && (
                <>
                  <div className="form-group">
                    <label>Tinggi Menara (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi menara"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Kapasitas Tangki (liter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.quantity}
                      onChange={(e) => setCalculatorData({...calculatorData, quantity: e.target.value})}
                      placeholder="Masukkan kapasitas tangki"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-60x60">Hollow 60×60 (+0%)</option>
                      <option value="hollow-80x80">Hollow 80×80 (+15%)</option>
                      <option value="baja-wf-150">Baja WF 150 (+20%)</option>
                      <option value="baja-wf-200">Baja WF 200 (+35%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Pondasi</label>
                    <select 
                      value={calculatorData.additionalOptions.pondasi || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, pondasi: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis pondasi</option>
                      <option value="beton-biasa">Beton Biasa (+0%)</option>
                      <option value="beton-besi">Beton Besi (+25%)</option>
                      <option value="pondasi-dalam">Pondasi Dalam (+40%)</option>
                      <option value="pondasi-khusus">Pondasi Khusus (+60%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'pintu-kasa-nyamuk' && (
                <>
                  <div className="form-group">
                    <label>Lebar Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Kasa</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis kasa</option>
                      <option value="kasa-aluminium">Kasa Aluminium (+0%)</option>
                      <option value="kasa-stainless">Kasa Stainless (+25%)</option>
                      <option value="kasa-fiberglass">Kasa Fiberglass (+15%)</option>
                      <option value="kasa-besi">Kasa Besi (+10%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Frame</label>
                    <select 
                      value={calculatorData.additionalOptions.frame || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, frame: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis frame</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+15%)</option>
                      <option value="aluminium">Aluminium (+20%)</option>
                      <option value="stainless">Stainless (+30%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'teralis-jendela' && (
                <>
                  <div className="form-group">
                    <label>Lebar Jendela (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar jendela"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Jendela (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi jendela"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+15%)</option>
                      <option value="plat-2mm">Plat 2mm (+20%)</option>
                      <option value="plat-3mm">Plat 3mm (+30%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Desain</label>
                    <select 
                      value={calculatorData.additionalOptions.design || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, design: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis desain</option>
                      <option value="minimalis">Minimalis (+0%)</option>
                      <option value="klasik">Klasik (+20%)</option>
                      <option value="modern">Modern (+15%)</option>
                      <option value="custom">Custom (+40%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'teralis-pintu' && (
                <>
                  <div className="form-group">
                    <label>Lebar Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+15%)</option>
                      <option value="plat-2mm">Plat 2mm (+20%)</option>
                      <option value="plat-3mm">Plat 3mm (+30%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Tingkat Keamanan</label>
                    <select 
                      value={calculatorData.additionalOptions.security || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, security: e.target.value}
                      })}
                    >
                      <option value="">Pilih tingkat keamanan</option>
                      <option value="standar">Standar (+0%)</option>
                      <option value="tinggi">Tinggi (+25%)</option>
                      <option value="maksimal">Maksimal (+50%)</option>
                      <option value="anti-bobol">Anti Bobol (+75%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'pintu-henderson' && (
                <>
                  <div className="form-group">
                    <label>Lebar Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+15%)</option>
                      <option value="plat-2mm">Plat 2mm (+20%)</option>
                      <option value="plat-3mm">Plat 3mm (+30%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Sistem Henderson</label>
                    <select 
                      value={calculatorData.additionalOptions.henderson || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, henderson: e.target.value}
                      })}
                    >
                      <option value="">Pilih sistem Henderson</option>
                      <option value="standar">Standar (+0%)</option>
                      <option value="premium">Premium (+25%)</option>
                      <option value="luxury">Luxury (+50%)</option>
                      <option value="custom">Custom (+75%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'pintu-lipat' && (
                <>
                  <div className="form-group">
                    <label>Lebar Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi Pintu (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi pintu"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jumlah Lipatan</label>
                    <select 
                      value={calculatorData.quantity}
                      onChange={(e) => setCalculatorData({...calculatorData, quantity: e.target.value})}
                    >
                      <option value="">Pilih jumlah lipatan</option>
                      <option value="2">2 Lipatan (+0%)</option>
                      <option value="3">3 Lipatan (+15%)</option>
                      <option value="4">4 Lipatan (+30%)</option>
                      <option value="5">5 Lipatan (+45%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-40x40">Hollow 40×40 (+0%)</option>
                      <option value="hollow-50x50">Hollow 50×50 (+15%)</option>
                      <option value="plat-2mm">Plat 2mm (+20%)</option>
                      <option value="plat-3mm">Plat 3mm (+30%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {cleanSlug === 'tangga-putar' && (
                <>
                  <div className="form-group">
                    <label>Tinggi Tangga (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi tangga"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Diameter Tangga (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan diameter tangga"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Besi</label>
                    <select 
                      value={calculatorData.material}
                      onChange={(e) => setCalculatorData({...calculatorData, material: e.target.value})}
                    >
                      <option value="">Pilih jenis besi</option>
                      <option value="hollow-50x50">Hollow 50×50 (+0%)</option>
                      <option value="hollow-60x60">Hollow 60×60 (+15%)</option>
                      <option value="plat-3mm">Plat 3mm (+20%)</option>
                      <option value="pipa-3">Pipa 3 inch (+25%)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Jenis Desain</label>
                    <select 
                      value={calculatorData.additionalOptions.design || ''}
                      onChange={(e) => setCalculatorData({
                        ...calculatorData, 
                        additionalOptions: {...calculatorData.additionalOptions, design: e.target.value}
                      })}
                    >
                      <option value="">Pilih jenis desain</option>
                      <option value="spiral-klasik">Spiral Klasik (+0%)</option>
                      <option value="spiral-modern">Spiral Modern (+15%)</option>
                      <option value="spiral-minimalis">Spiral Minimalis (+10%)</option>
                      <option value="custom">Custom (+40%)</option>
                    </select>
                  </div>
                </>
              )}
              
              {/* Default form for other services */}
              {!['kanopi', 'pagar-besi', 'konstruksi-baja', 'railing-tangga', 'pintu-garasi-sliding', 'pintu-besi', 'pintu-kayu-ulin', 'teralis', 'tempat-tidur-besi', 'bike-rack', 'pintu-dorong', 'railing-balkon', 'menara-tangki-air', 'pintu-kasa-nyamuk', 'teralis-jendela', 'teralis-pintu', 'pintu-henderson', 'pintu-lipat', 'tangga-putar'].includes(serviceSlug || '') && (
                <>
                  <div className="form-group">
                    <label>Panjang (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.length}
                      onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      placeholder="Masukkan panjang"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Lebar (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      placeholder="Masukkan lebar"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tinggi (meter)</label>
                    <input 
                      type="number" 
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      placeholder="Masukkan tinggi"
                    />
                  </div>
                </>
              )}
              
              <div className="form-group">
                <label>Jumlah Unit</label>
                <input 
                  type="number" 
                  value={calculatorData.quantity}
                  onChange={(e) => setCalculatorData({...calculatorData, quantity: e.target.value})}
                  placeholder="Jumlah unit"
                />
              </div>
              
              <div className="calculator-result">
                <h4>Estimasi Harga:</h4>
                <div className="price-estimate">
                  {(() => {
                    const length = parseFloat(calculatorData.length) || 0
                    const width = parseFloat(calculatorData.width) || 0
                    const height = parseFloat(calculatorData.height) || 0
                    const quantity = parseInt(calculatorData.quantity) || 1
                    
                    if (length === 0) return 'Masukkan dimensi untuk menghitung'
                    
                    let basePrice = 0
                    let area = 0
                    let materialMultiplier = 1
                    let additionalMultiplier = 1
                    
                    // Calculate base price and area based on service type
                    if (cleanSlug === 'kanopi') {
                      area = length * width
                      basePrice = 450000
                      
                      // Material multiplier for atap
                      if (calculatorData.material === 'alderon') materialMultiplier = 1.15
                      else if (calculatorData.material === 'acrylic') materialMultiplier = 1.20
                      else if (calculatorData.material === 'solartuf') materialMultiplier = 1.25
                      
                      // Additional multiplier for rangka
                      if (calculatorData.additionalOptions.range === 'hollow-40x60') additionalMultiplier = 1.10
                      else if (calculatorData.additionalOptions.range === 'hollow-40x80') additionalMultiplier = 1.20
                      else if (calculatorData.additionalOptions.range === 'pipa-1-25') additionalMultiplier = 1.15
                      else if (calculatorData.additionalOptions.range === 'pipa-1-5') additionalMultiplier = 1.25
                      else if (calculatorData.additionalOptions.range === 'pipa-2') additionalMultiplier = 1.35
                      
                    } else if (cleanSlug === 'pagar-besi') {
                      area = length * (height || 1.5) // Default height 1.5m
                      basePrice = 350000
                      
                      // Material multiplier for besi
                      if (calculatorData.material === 'hollow-50x50') materialMultiplier = 1.20
                      else if (calculatorData.material === 'hollow-60x60') materialMultiplier = 1.40
                      
                      // Additional multiplier for finishing
                      if (calculatorData.additionalOptions.finishing === 'powder-coating') additionalMultiplier = 1.15
                      else if (calculatorData.additionalOptions.finishing === 'galvanis') additionalMultiplier = 1.25
                      else if (calculatorData.additionalOptions.finishing === 'chrome') additionalMultiplier = 1.50
                      
                    } else if (cleanSlug === 'konstruksi-baja') {
                      area = length // Volume in ton
                      basePrice = 2500000
                      
                      // Material multiplier for baja
                      if (calculatorData.material === 'baja-wf-200') materialMultiplier = 1.15
                      else if (calculatorData.material === 'baja-wf-250') materialMultiplier = 1.30
                      else if (calculatorData.material === 'baja-wf-300') materialMultiplier = 1.45
                      
                      // Additional multiplier for complexity
                      if (calculatorData.additionalOptions.complexity === 'sedang') additionalMultiplier = 1.25
                      else if (calculatorData.additionalOptions.complexity === 'kompleks') additionalMultiplier = 1.50
                      else if (calculatorData.additionalOptions.complexity === 'sangat-kompleks') additionalMultiplier = 1.75
                      
                    } else if (cleanSlug === 'railing-tangga') {
                      area = length * (height || 1.0) // Perimeter calculation
                      basePrice = 250000
                      
                      // Material multiplier for desain
                      if (calculatorData.material === 'klasik') materialMultiplier = 1.20
                      else if (calculatorData.material === 'modern') materialMultiplier = 1.15
                      else if (calculatorData.material === 'custom') materialMultiplier = 1.40
                      
                    } else if (cleanSlug === 'pintu-garasi-sliding') {
                      area = width * (height || 2.5) // Default height 2.5m
                      basePrice = 1500000
                      
                      // Material multiplier for besi
                      if (calculatorData.material === 'plat-3mm') materialMultiplier = 1.15
                      else if (calculatorData.material === 'plat-4mm') materialMultiplier = 1.25
                      
                      // Additional multiplier for sliding system
                      if (calculatorData.additionalOptions.sliding === 'roller-assembly') additionalMultiplier = 1.10
                      else if (calculatorData.additionalOptions.sliding === 'guide-rail') additionalMultiplier = 1.15
                      else if (calculatorData.additionalOptions.sliding === 'wheel-system') additionalMultiplier = 1.20
                      
                    } else if (cleanSlug === 'pintu-besi') {
                      area = width * (height || 2.0) // Default height 2m
                      basePrice = 800000
                      
                      // Material multiplier for besi
                      if (calculatorData.material === 'hollow-50x50') materialMultiplier = 1.15
                      else if (calculatorData.material === 'plat-2mm') materialMultiplier = 1.20
                      else if (calculatorData.material === 'plat-3mm') materialMultiplier = 1.30
                      
                      // Additional multiplier for lock system
                      if (calculatorData.additionalOptions.lock === 'kunci-mortise') additionalMultiplier = 1.10
                      else if (calculatorData.additionalOptions.lock === 'kunci-digital') additionalMultiplier = 1.25
                      else if (calculatorData.additionalOptions.lock === 'kunci-biometric') additionalMultiplier = 1.50
                      
                    } else if (cleanSlug === 'pintu-kayu-ulin') {
                      area = width * (height || 2.0) // Default height 2m
                      basePrice = 2000000
                      
                      // Material multiplier for besi frame
                      if (calculatorData.material === 'plat-3mm') materialMultiplier = 1.15
                      else if (calculatorData.material === 'plat-4mm') materialMultiplier = 1.25
                      
                      // Additional multiplier for wood grade
                      if (calculatorData.additionalOptions.wood === 'grade-b') additionalMultiplier = 1.15
                      else if (calculatorData.additionalOptions.wood === 'finishing-natural') additionalMultiplier = 1.10
                      else if (calculatorData.additionalOptions.wood === 'finishing-stained') additionalMultiplier = 1.20
                      
                    } else if (cleanSlug === 'teralis') {
                      area = length * width
                      basePrice = 300000
                      
                      // Material multiplier for plat thickness
                      if (calculatorData.material === 'plat-3mm') materialMultiplier = 1.20
                      else if (calculatorData.material === 'plat-4mm') materialMultiplier = 1.40
                      
                      // Additional multiplier for technology
                      if (calculatorData.additionalOptions.technology === 'plasma-cutting') additionalMultiplier = 1.10
                      else if (calculatorData.additionalOptions.technology === 'water-jet') additionalMultiplier = 1.25
                      
                    } else if (cleanSlug === 'tempat-tidur-besi') {
                      area = length * width
                      basePrice = 800000
                      
                      // Material multiplier for besi
                      if (calculatorData.material === 'hollow-50x50') materialMultiplier = 1.15
                      else if (calculatorData.material === 'plat-2mm') materialMultiplier = 1.20
                      
                      // Additional multiplier for finishing
                      if (calculatorData.additionalOptions.finishing === 'powder-coating') additionalMultiplier = 1.15
                      else if (calculatorData.additionalOptions.finishing === 'chrome') additionalMultiplier = 1.30
                      else if (calculatorData.additionalOptions.finishing === 'stainless') additionalMultiplier = 1.40
                      
                    } else {
                      // Default calculation for other services
                      area = length * width * (height || 1)
                      basePrice = 500000
                    }
                    
                    const total = area * basePrice * materialMultiplier * additionalMultiplier * quantity
                    
                    return total > 0 ? `Rp. ${total.toLocaleString('id-ID')}` : 'Masukkan dimensi untuk menghitung'
                  })()}
                </div>
                <div className="price-breakdown">
                  <h5>Rincian Perhitungan:</h5>
                  <div className="breakdown-item">
                    <span>Harga Dasar:</span>
                    <span>Rp. {(() => {
                      const length = parseFloat(calculatorData.length) || 0
                      const width = parseFloat(calculatorData.width) || 0
                      const height = parseFloat(calculatorData.height) || 0
                      const quantity = parseInt(calculatorData.quantity) || 1
                      
                      let area = 0
                      let basePrice = 0
                      
                      if (cleanSlug === 'kanopi') {
                        area = length * width
                        basePrice = 450000
                      } else if (cleanSlug === 'pagar-besi') {
                        area = length * (height || 1.5)
                        basePrice = 350000
                      } else if (cleanSlug === 'konstruksi-baja') {
                        area = length
                        basePrice = 2500000
                      } else if (cleanSlug === 'railing-tangga') {
                        area = length * (height || 1.0)
                        basePrice = 250000
                      } else {
                        area = length * width * (height || 1)
                        basePrice = 500000
                      }
                      
                      return (area * basePrice * quantity).toLocaleString('id-ID')
                    })()}</span>
                  </div>
                  {calculatorData.material && (
                    <div className="breakdown-item">
                      <span>Material ({calculatorData.material}):</span>
                      <span>+{(() => {
                        let multiplier = 1
                        if (cleanSlug === 'kanopi') {
                          if (calculatorData.material === 'alderon') multiplier = 1.15
                          else if (calculatorData.material === 'acrylic') multiplier = 1.20
                          else if (calculatorData.material === 'solartuf') multiplier = 1.25
                        } else if (cleanSlug === 'pagar-besi') {
                          if (calculatorData.material === 'hollow-50x50') multiplier = 1.20
                          else if (calculatorData.material === 'hollow-60x60') multiplier = 1.40
                        }
                        return `${Math.round((multiplier - 1) * 100)}%`
                      })()}</span>
                    </div>
                  )}
                  <div className="breakdown-total">
                    <span><strong>Total Estimasi:</strong></span>
                    <span><strong>{(() => {
                      const length = parseFloat(calculatorData.length) || 0
                      const width = parseFloat(calculatorData.width) || 0
                      const height = parseFloat(calculatorData.height) || 0
                      const quantity = parseInt(calculatorData.quantity) || 1
                      
                      if (length === 0) return 'Masukkan dimensi untuk menghitung'
                      
                      let basePrice = 0
                      let area = 0
                      let materialMultiplier = 1
                      let additionalMultiplier = 1
                      
                      if (cleanSlug === 'kanopi') {
                        area = length * width
                        basePrice = 450000
                        if (calculatorData.material === 'alderon') materialMultiplier = 1.15
                        else if (calculatorData.material === 'acrylic') materialMultiplier = 1.20
                        else if (calculatorData.material === 'solartuf') materialMultiplier = 1.25
                        if (calculatorData.additionalOptions.range === 'hollow-40x60') additionalMultiplier = 1.10
                        else if (calculatorData.additionalOptions.range === 'hollow-40x80') additionalMultiplier = 1.20
                        else if (calculatorData.additionalOptions.range === 'pipa-1-25') additionalMultiplier = 1.15
                        else if (calculatorData.additionalOptions.range === 'pipa-1-5') additionalMultiplier = 1.25
                        else if (calculatorData.additionalOptions.range === 'pipa-2') additionalMultiplier = 1.35
                      } else if (cleanSlug === 'pagar-besi') {
                        area = length * (height || 1.5)
                        basePrice = 350000
                        if (calculatorData.material === 'hollow-50x50') materialMultiplier = 1.20
                        else if (calculatorData.material === 'hollow-60x60') materialMultiplier = 1.40
                        if (calculatorData.additionalOptions.finishing === 'powder-coating') additionalMultiplier = 1.15
                        else if (calculatorData.additionalOptions.finishing === 'galvanis') additionalMultiplier = 1.25
                        else if (calculatorData.additionalOptions.finishing === 'chrome') additionalMultiplier = 1.50
                      } else if (cleanSlug === 'konstruksi-baja') {
                        area = length
                        basePrice = 2500000
                        if (calculatorData.material === 'baja-wf-200') materialMultiplier = 1.15
                        else if (calculatorData.material === 'baja-wf-250') materialMultiplier = 1.30
                        else if (calculatorData.material === 'baja-wf-300') materialMultiplier = 1.45
                        if (calculatorData.additionalOptions.complexity === 'sedang') additionalMultiplier = 1.25
                        else if (calculatorData.additionalOptions.complexity === 'kompleks') additionalMultiplier = 1.50
                        else if (calculatorData.additionalOptions.complexity === 'sangat-kompleks') additionalMultiplier = 1.75
                      } else if (cleanSlug === 'railing-tangga') {
                        area = length * (height || 1.0)
                        basePrice = 250000
                        if (calculatorData.material === 'klasik') materialMultiplier = 1.20
                        else if (calculatorData.material === 'modern') materialMultiplier = 1.15
                        else if (calculatorData.material === 'custom') materialMultiplier = 1.40
                      } else {
                        area = length * width * (height || 1)
                        basePrice = 500000
                      }
                      
                      const total = area * basePrice * materialMultiplier * additionalMultiplier * quantity
                      return `Rp. ${total.toLocaleString('id-ID')}`
                    })()}</strong></span>
                  </div>
                </div>
                <p className="price-note">*Estimasi kasar, harga final dapat berubah sesuai kondisi lapangan dan survey</p>
              </div>
              
              <div className="calculator-actions">
                <button className="btn-primary" onClick={() => setShowCalculator(false)}>
                  Tutup
                </button>
                <Link to="/kontak-bengkel-las-bekasi" className="btn-secondary">
                  Konsultasi Langsung
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Butuh Konsultasi?</h2>
            <p>Hubungi kami untuk mendapatkan penawaran terbaik</p>
            <div className="cta-buttons">
              <button 
                className="btn-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Konsultasi Gratis
              </button>
              <button 
                className="btn-secondary"
                onClick={() => setIsModalOpen(true)}
              >
                <MessageCircle size={20} />
                Hubungi Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

export default ServiceDetail
