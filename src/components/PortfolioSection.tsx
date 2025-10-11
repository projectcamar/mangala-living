import React, { useState } from 'react'
import './PortfolioSection.css'
import benchCornerImg from '../assets/Bench-corner-kursi-sudut-kursi-santai.png'
import gantunganBajuImg from '../assets/gantungan-baju-industrial.png'
import kabinetLemariImg from '../assets/Kabinet-Lemari-industrial.png'
import mejaIndustrialImg from '../assets/meja-industrial-mejamakan.png'
import mejaKerjaRakImg from '../assets/Meja-Kerja-Rak-Meja-Belajar-custom.png'
import mejaMakanKursiImg from '../assets/Meja-makan-industrial-150x60x90-2 kursi.png'
import rakBesiImg from '../assets/rak-besi.png'
import rakGantungImg from '../assets/rak-gantung-industrial.png'

interface ProductSize {
  dimensions: string
  price: number
}

interface Product {
  id: number
  name: string
  basePrice: number
  sizes?: ProductSize[]
  description?: string
  image?: string
}

const PortfolioSection: React.FC = () => {
  const [sortBy, setSortBy] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('')

  const products: Product[] = [
    { 
      id: 1, 
      name: "Rak gantung kayu dan besi custom", 
      basePrice: 2500000,
      image: rakBesiImg,
      description: `Rak gantung custom dengan kombinasi kayu dan besi yang kokoh dan elegan. Cocok untuk ruang tamu, dapur, atau ruang kerja dengan gaya industrial modern.

**Cara baca ukuran:**
Contoh : 150x25x60
- 150 = panjang kayu
- 25 = lebar kayu  
- 60 = artinya 2 tingkat
- Jika 90 maka 3 tingkat
- Jarak antar tingkat dapat disesuaikan

**Material:**
- Hollow besi 20x20 mm finishing cat/powder coating
- Kayu : pinus/suren grade A, tebal 20 mm
- *sudah termasuk skrup dan fischer untuk pemasangan

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 10-14 Hari
- Min. Pemesanan: 1 Buah
- Etalase: Rak Gantung Custom

Silahkan chat untuk konsultasi custom model atau ukuran.`,
      sizes: [
        { dimensions: "120x25x60", price: 1800000 },
        { dimensions: "150x25x60", price: 2200000 },
        { dimensions: "180x25x60", price: 2500000 },
        { dimensions: "200x25x60", price: 2800000 },
        { dimensions: "150x25x90", price: 2500000 },
        { dimensions: "180x25x90", price: 2900000 },
        { dimensions: "200x25x90", price: 3200000 }
      ]
    },
    { 
      id: 2, 
      name: "Kabinet Lemari Industrial", 
      basePrice: 4500000,
      image: kabinetLemariImg,
      description: `Kabinet lemari industrial dengan desain modern minimalis. Kombinasi sempurna antara fungsi penyimpanan dan estetika. Cocok untuk ruang tamu, kamar tidur, atau ruang kerja.

**Spesifikasi:**
- Kabinet dengan pintu kaca/kayu/kombinasi
- Rak internal dapat disesuaikan
- Finishing powder coating untuk rangka besi
- Dapat disesuaikan dengan kebutuhan ruangan

**Material:**
- Rangka besi hollow 30x30 mm
- Panel kayu pinus/plywood HPL
- Kaca tempered 5mm (untuk pintu kaca)
- Handle stainless/besi finishing hitam

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Set
- Etalase: Furniture Industrial

Silahkan chat untuk konsultasi desain dan ukuran sesuai kebutuhan.`,
      sizes: [
        { dimensions: "80x40x180", price: 3800000 },
        { dimensions: "100x40x180", price: 4500000 },
        { dimensions: "120x40x180", price: 5200000 },
        { dimensions: "150x40x180", price: 6500000 }
      ]
    },
    { 
      id: 3, 
      name: "Partisi Ruangan", 
      basePrice: 6250000,
      description: `Partisi ruangan industrial untuk pembatas ruangan dengan tetap memberikan kesan luas dan modern. Cocok untuk rumah, kantor, atau cafe dengan konsep open space.

**Jenis Partisi:**
- Partisi kayu + besi
- Partisi kaca + besi
- Partisi kombinasi kayu, kaca, besi
- Dapat dibuat model sliding atau fix

**Material:**
- Rangka besi hollow 30x30 atau 40x40 mm
- Kayu pinus/jati/trembesi (sesuai budget)
- Kaca tempered 5-8mm
- Roda sliding (untuk model sliding)

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Set
- Etalase: Partisi Custom

Silahkan chat untuk konsultasi desain, ukuran dan material yang sesuai dengan konsep ruangan anda.`,
      sizes: [
        { dimensions: "200x200 (fix)", price: 4500000 },
        { dimensions: "250x200 (fix)", price: 5500000 },
        { dimensions: "300x200 (fix)", price: 6250000 },
        { dimensions: "200x200 (sliding)", price: 6000000 },
        { dimensions: "250x200 (sliding)", price: 7200000 },
        { dimensions: "300x200 (sliding)", price: 8500000 }
      ]
    },
    { 
      id: 4, 
      name: "Kabinet Industrial Dapur", 
      basePrice: 4500000,
      description: `Kabinet dapur industrial dengan desain modern yang fungsional. Solusi penyimpanan yang stylish untuk dapur anda dengan harga lebih terjangkau dari kitchen set konvensional.

**Keunggulan:**
- Desain industrial modern
- Rak internal dapat disesuaikan
- Kuat dan tahan lama
- Mudah dibersihkan
- Dapat disesuaikan dengan ukuran dapur

**Material:**
- Rangka besi hollow 30x30 mm finishing powder coating
- Body plywood HPL tahan air
- Pintu kayu solid/plywood HPL
- Rak stainless/kayu
- Handle stainless

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Set
- Etalase: Kabinet Dapur

Chat kami untuk konsultasi desain sesuai layout dapur anda.`,
      sizes: [
        { dimensions: "100x50x200", price: 3500000 },
        { dimensions: "120x50x200", price: 4000000 },
        { dimensions: "150x50x200", price: 4500000 },
        { dimensions: "180x50x200", price: 5500000 },
        { dimensions: "200x50x200", price: 6200000 }
      ]
    },
    { 
      id: 5, 
      name: "Kanopi Alderon Kanopi Solartuff Kanopi Tempered Glass", 
      basePrice: 1200000,
      description: `Kanopi berkualitas dengan berbagai pilihan material atap. Melindungi teras, carport, atau area outdoor dari panas dan hujan dengan tetap mempertahankan pencahayaan alami.

**Pilihan Material Atap:**
- Alderon: Ringan, anti bocor, tahan UV
- Solartuff: Tembus cahaya, tahan benturan
- Polycarbonate: Ekonomis, beragam warna
- Tempered Glass: Mewah, modern, kuat

**Material Rangka:**
- Hollow besi galvanis 40x40 atau 40x60 mm
- Pipa besi 1.5 - 2 inch
- Tiang besi WF/hollow 80x80/pipa 3 inch
- Finishing cat/powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-14 Hari
- Min. Pemesanan: 4 m²
- Etalase: Kanopi

Harga per meter persegi, sudah termasuk bahan dan pemasangan. Chat untuk survey dan konsultasi gratis.`,
      sizes: [
        { dimensions: "Alderon /m²", price: 650000 },
        { dimensions: "Solartuff /m²", price: 850000 },
        { dimensions: "Polycarbonate /m²", price: 550000 },
        { dimensions: "Tempered Glass /m²", price: 1200000 }
      ]
    },
    { 
      id: 6, 
      name: "Cermin Dinding Cermin besar Kaca Cermin", 
      basePrice: 2500000,
      description: `Cermin dinding custom dengan frame besi industrial. Membuat ruangan terlihat lebih luas dan modern. Cocok untuk ruang tamu, kamar tidur, atau gym pribadi.

**Spesifikasi:**
- Cermin berkualitas tinggi, tidak buram
- Frame besi finishing powder coating/cat
- Model dapat disesuaikan (minimalis/industrial)
- Dapat dipasang horizontal atau vertikal

**Material:**
- Kaca cermin 5mm berkualitas tinggi
- Frame besi hollow 20x20 atau 30x30 mm
- Backing board/multipleks
- Sistem gantung aman dan kuat

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 10-14 Hari
- Min. Pemesanan: 1 Buah
- Etalase: Cermin Custom

Silahkan chat untuk konsultasi ukuran dan desain frame sesuai ruangan anda.`,
      sizes: [
        { dimensions: "80x100cm", price: 1500000 },
        { dimensions: "100x120cm", price: 1900000 },
        { dimensions: "120x150cm", price: 2500000 },
        { dimensions: "150x180cm", price: 3200000 },
        { dimensions: "180x200cm", price: 3900000 }
      ]
    },
    { 
      id: 7, 
      name: "Kayu Papan Pinus", 
      basePrice: 130000,
      description: `Kayu papan pinus kualitas premium untuk berbagai kebutuhan furniture dan konstruksi. Sudah dikeringkan (kiln dry) sehingga tidak mudah melengkung atau retak.

**Keunggulan Pinus:**
- Serat kayu halus dan rapi
- Ringan namun kuat
- Mudah dikerjakan
- Harga terjangkau
- Cocok untuk furniture dan dekorasi

**Spesifikasi:**
- Grade: A/B
- Kadar air: 12-14% (kiln dry)
- Finishing: Mentah/natural
- Sudah diserut halus (S4S)

**Detail:**
- Kondisi: Baru
- Ketersediaan: Ready stock
- Min. Pemesanan: 1 lembar
- Etalase: Material Kayu

Harga per lembar. Tersedia custom pemotongan sesuai kebutuhan.`,
      sizes: [
        { dimensions: "200x10x2cm", price: 65000 },
        { dimensions: "200x15x2cm", price: 95000 },
        { dimensions: "200x20x2cm", price: 130000 },
        { dimensions: "200x25x2cm", price: 160000 },
        { dimensions: "200x30x2cm", price: 195000 },
        { dimensions: "200x10x3cm", price: 95000 },
        { dimensions: "200x15x3cm", price: 140000 },
        { dimensions: "200x20x3cm", price: 185000 }
      ]
    },
    { 
      id: 8, 
      name: "Kursi Bar kursi stall chair", 
      basePrice: 450000,
      description: `Kursi bar industrial dengan desain modern minimalis. Cocok untuk kitchen island, meja bar, cafe, atau resto. Kombinasi rangka besi kokoh dengan dudukan kayu yang nyaman.

**Keunggulan:**
- Desain industrial modern
- Kokoh dan stabil
- Nyaman untuk duduk lama
- Finishing rapi dan premium
- Dapat custom tinggi dan warna

**Material:**
- Rangka besi hollow 20x20 atau pipa besi
- Dudukan kayu pinus/jati/multiplek HPL
- Sandaran kayu (optional)
- Footrest besi
- Finishing powder coating/cat duco

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Buah
- Etalase: Kursi Industrial

Chat untuk pilihan warna dan custom ukuran.`,
      sizes: [
        { dimensions: "Tinggi 60cm (tanpa sandaran)", price: 350000 },
        { dimensions: "Tinggi 70cm (tanpa sandaran)", price: 400000 },
        { dimensions: "Tinggi 75cm (tanpa sandaran)", price: 450000 },
        { dimensions: "Tinggi 60cm (dengan sandaran)", price: 475000 },
        { dimensions: "Tinggi 70cm (dengan sandaran)", price: 525000 },
        { dimensions: "Tinggi 75cm (dengan sandaran)", price: 575000 }
      ]
    },
    { 
      id: 9, 
      name: "Meja Tamu Meja Trembesi Meja Kopi", 
      basePrice: 5500000,
      description: `Meja tamu dari kayu trembesi solid dengan serat natural yang indah. Setiap meja memiliki corak unik karena menggunakan kayu natural. Cocok untuk ruang tamu dengan konsep natural, rustic, atau industrial.

**Keunggulan Kayu Trembesi:**
- Kayu keras berkualitas premium
- Serat natural indah dan unik
- Sangat kokoh dan tahan lama
- Semakin lama semakin bernilai
- Ramah lingkungan (sustainable)

**Material:**
- Top table kayu trembesi solid 5-8cm
- Rangka besi hollow/pipa finishing powder coating
- Finishing natural/melamic/duco
- Diproses dengan teknik profesional

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 21-30 Hari
- Min. Pemesanan: 1 Set
- Etalase: Meja Premium

Setiap meja memiliki corak kayu yang berbeda (natural wood pattern). Chat untuk pilihan ukuran dan finishing.`,
      sizes: [
        { dimensions: "80x80x45cm", price: 4500000 },
        { dimensions: "100x60x45cm", price: 4800000 },
        { dimensions: "120x70x45cm", price: 5500000 },
        { dimensions: "150x80x45cm", price: 7200000 },
        { dimensions: "180x90x45cm", price: 9500000 }
      ]
    },
    { 
      id: 10, 
      name: "Meja Kopi coffee Table industrial", 
      basePrice: 1100000,
      description: `Coffee table industrial dengan desain minimalis modern. Cocok untuk ruang tamu, ruang keluarga, atau area santai. Perpaduan sempurna antara fungsi dan estetika.

**Keunggulan:**
- Desain industrial minimalis
- Ukuran ideal untuk coffee table
- Kuat dan stabil
- Mudah dipadukan dengan interior
- Harga terjangkau

**Material:**
- Top table kayu pinus/multiplek HPL
- Rangka besi hollow 30x30 atau 40x40 mm
- Rak bawah untuk penyimpanan (optional)
- Finishing powder coating untuk rangka
- Cat duco/melamic untuk top table

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Buah
- Etalase: Meja Kopi

Chat untuk konsultasi warna dan custom ukuran.`,
      sizes: [
        { dimensions: "80x50x45", price: 850000 },
        { dimensions: "100x50x45", price: 950000 },
        { dimensions: "100x60x45", price: 1100000 },
        { dimensions: "120x60x45", price: 1250000 },
        { dimensions: "120x70x45", price: 1400000 }
      ]
    },
    { 
      id: 11, 
      name: "Meja Makan Trembesi", 
      basePrice: 8500000,
      description: `Meja makan premium dari kayu trembesi solid dengan ukuran besar. Investasi furniture berkualitas untuk keluarga yang menghargai kualitas dan estetika natural. Setiap meja unik dengan corak kayu alami.

**Keunggulan:**
- Kayu trembesi solid premium grade A
- Corak serat natural yang indah
- Sangat kokoh untuk penggunaan jangka panjang
- Dapat menampung banyak orang
- Nilai investasi yang baik

**Material:**
- Top table kayu trembesi solid 6-10cm
- Rangka/kaki besi hollow/pipa industrial
- Finishing natural/semi gloss/duco premium
- Kaki besi finishing powder coating hitam

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 30-45 Hari
- Min. Pemesanan: 1 Set
- Etalase: Meja Makan Premium

Setiap meja memiliki corak unik. Tersedia pilihan ukuran dan finishing. Chat untuk konsultasi.`,
      sizes: [
        { dimensions: "150x80x75", price: 6500000 },
        { dimensions: "180x90x75", price: 8500000 },
        { dimensions: "200x100x75", price: 10500000 },
        { dimensions: "220x100x75", price: 12500000 },
        { dimensions: "250x110x75", price: 15000000 }
      ]
    },
    { 
      id: 12, 
      name: "Meja Teras Meja Kopi Meja Makan industrial", 
      basePrice: 1950000,
      description: `Meja serbaguna dengan desain industrial yang dapat digunakan untuk teras, meja kopi, atau meja makan. Desain simpel namun kokoh dan fungsional.

**Keunggulan:**
- Desain industrial minimalis
- Multifungsi (teras/kopi/makan)
- Rangka kokoh dan stabil
- Tahan cuaca untuk outdoor
- Mudah perawatan

**Material:**
- Top table kayu pinus/jati/multiplek HPL
- Rangka besi hollow 40x40 mm
- Kaki besi pipa/hollow tebal
- Finishing powder coating anti karat
- Top table finishing melamic/duco

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 10-14 Hari
- Min. Pemesanan: 1 Buah
- Etalase: Meja Industrial

Cocok untuk indoor dan outdoor. Chat untuk custom ukuran dan warna.`,
      sizes: [
        { dimensions: "100x60x75", price: 1500000 },
        { dimensions: "120x60x75", price: 1650000 },
        { dimensions: "120x70x75", price: 1800000 },
        { dimensions: "150x70x75", price: 1950000 },
        { dimensions: "150x80x75", price: 2200000 },
        { dimensions: "180x80x75", price: 2600000 }
      ]
    },
    { 
      id: 13, 
      name: "Meja Bar industrial Tralis industrial", 
      basePrice: 8150000,
      description: `Set meja bar industrial dilengkapi dengan tralis/partisi industrial. Cocok untuk cafe, resto, bar, atau area dapur rumah modern. Memberikan kesan industrial yang kuat dan elegant.

**Paket Termasuk:**
- Meja bar dengan rak penyimpanan
- Tralis/partisi industrial sebagai backdrop
- Instalasi dan finishing premium

**Material:**
- Rangka besi hollow 40x40 atau 50x50 mm
- Top table kayu solid/multiplek HPL
- Tralis besi hollow 20x20 atau pipa
- Rak bawah untuk penyimpanan
- Finishing powder coating premium

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 21-30 Hari
- Min. Pemesanan: 1 Set
- Etalase: Set Cafe/Bar

Desain dapat disesuaikan dengan konsep ruangan. Chat untuk konsultasi dan custom design.`,
      sizes: [
        { dimensions: "Meja 150cm + Tralis 200cm", price: 6500000 },
        { dimensions: "Meja 180cm + Tralis 250cm", price: 8150000 },
        { dimensions: "Meja 200cm + Tralis 300cm", price: 9800000 },
        { dimensions: "Meja 250cm + Tralis 300cm", price: 11500000 }
      ]
    },
    { 
      id: 14, 
      name: "Meja Bar Meja Bartender Meja Industrial Meja Makan", 
      basePrice: 2800000,
      description: `Meja bar multifungsi dengan tinggi ideal untuk bar counter. Dapat digunakan sebagai meja bar, meja bartender, atau meja makan tinggi. Desain industrial modern yang stylish.

**Keunggulan:**
- Tinggi ideal untuk bar counter
- Desain industrial modern
- Rak bawah untuk penyimpanan
- Kokoh dan stabil
- Custom ukuran dan warna

**Material:**
- Top table kayu pinus/multiplek HPL tebal 18-25mm
- Rangka besi hollow 40x40 mm
- Rak bawah kayu atau wire mesh
- Footrest besi untuk kenyamanan
- Finishing premium powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 10-14 Hari
- Min. Pemesanan: 1 Buah
- Etalase: Meja Bar

Tinggi standar 90-110cm sesuai kebutuhan. Chat untuk konsultasi ukuran dan desain.`,
      sizes: [
        { dimensions: "100x40x100", price: 2100000 },
        { dimensions: "120x40x100", price: 2400000 },
        { dimensions: "150x40x100", price: 2800000 },
        { dimensions: "180x40x100", price: 3200000 },
        { dimensions: "150x50x100", price: 3100000 },
        { dimensions: "180x50x100", price: 3600000 }
      ]
    },
    { 
      id: 15, 
      name: "Meja coffee Meja kopi meja custom Meja kecil", 
      basePrice: 1400000,
      description: `Meja coffee custom dengan ukuran kompak. Ideal untuk ruang tamu kecil, apartemen, atau sebagai side table. Desain minimalis yang dapat disesuaikan dengan kebutuhan.

**Keunggulan:**
- Ukuran kompak dan efisien
- Desain dapat di-custom
- Cocok untuk ruang kecil
- Kuat dan kokoh
- Harga ekonomis

**Material:**
- Top table kayu pinus/multiplek HPL
- Rangka besi hollow 25x25 atau 30x30 mm
- Optional rak bawah
- Finishing cat duco/melamic/natural
- Rangka finishing powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Buah
- Etalase: Meja Coffee

Tersedia berbagai ukuran dan model. Chat untuk custom desain sesuai ruangan anda.`,
      sizes: [
        { dimensions: "60x40x45", price: 750000 },
        { dimensions: "70x50x45", price: 900000 },
        { dimensions: "80x50x45", price: 1050000 },
        { dimensions: "90x50x45", price: 1200000 },
        { dimensions: "100x60x45", price: 1400000 }
      ]
    },
    { 
      id: 16, 
      name: "Display Baju Rak Baju Clothes Display", 
      basePrice: 4500000,
      image: gantunganBajuImg,
      description: `Display baju industrial untuk toko pakaian, butik, atau walk-in closet. Desain minimalis yang membuat pakaian anda tampil menarik dan tertata rapi.

**Keunggulan:**
- Desain industrial modern untuk retail
- Kuat menahan beban banyak pakaian
- Fleksibel untuk berbagai jenis display
- Mudah dipindah dan diatur ulang
- Memberikan kesan premium pada toko

**Material:**
- Rangka besi hollow/pipa finishing powder coating
- Gantungan besi chrome/powder coating
- Rak kayu/wire mesh untuk aksesoris
- Roda dengan rem (optional)
- Finishing premium dan rapi

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Display Retail

Desain dapat disesuaikan dengan kebutuhan display. Chat untuk konsultasi layout toko.`,
      sizes: [
        { dimensions: "100x50x180 (single bar)", price: 2800000 },
        { dimensions: "120x50x180 (single bar)", price: 3200000 },
        { dimensions: "150x50x180 (double bar)", price: 4500000 },
        { dimensions: "180x50x180 (double bar)", price: 5200000 },
        { dimensions: "200x60x200 (triple level)", price: 6500000 }
      ]
    },
    { 
      id: 17, 
      name: "partisi kayu", 
      basePrice: 6650000,
      description: `Partisi kayu premium untuk pembatas ruangan yang tetap memberikan kesan hangat dan natural. Cocok untuk rumah, kantor, atau cafe dengan konsep natural modern.

**Keunggulan:**
- Material kayu berkualitas tinggi
- Desain natural dan warm
- Fleksibel untuk berbagai konsep
- Dapat dibuat fix atau sliding
- Memberikan privasi tanpa menghalangi sirkulasi udara

**Material:**
- Kayu jati/mahoni/pinus grade A
- Rangka besi hollow 40x40 mm (jika diperlukan)
- Rel sliding (untuk model sliding)
- Finishing melamic/duco/natural oil
- Hardware berkualitas tinggi

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 21-30 Hari
- Min. Pemesanan: 1 Set
- Etalase: Partisi Custom

Model dan motif dapat disesuaikan. Chat untuk konsultasi desain sesuai ruangan.`,
      sizes: [
        { dimensions: "150x200 (fix)", price: 4500000 },
        { dimensions: "200x200 (fix)", price: 5800000 },
        { dimensions: "250x200 (fix)", price: 6650000 },
        { dimensions: "200x200 (sliding)", price: 7500000 },
        { dimensions: "250x200 (sliding)", price: 8800000 },
        { dimensions: "300x200 (sliding)", price: 10200000 }
      ]
    },
    { 
      id: 18, 
      name: "Rak Dinding Display Rak Gantung", 
      basePrice: 1350000,
      description: `Rak dinding/rak gantung serbaguna untuk display atau penyimpanan. Cocok untuk ruang tamu, kamar tidur, dapur, atau toko. Desain minimalis yang mudah dipadukan dengan berbagai konsep interior.

**Keunggulan:**
- Hemat ruang lantai
- Desain minimalis modern
- Kuat dan kokoh
- Mudah pemasangan
- Multifungsi

**Material:**
- Papan kayu pinus/multiplek HPL tebal 18-20mm
- Bracket besi hollow/siku finishing powder coating
- Fischer dan skrup untuk pemasangan
- Finishing melamic/duco/natural
- Load capacity hingga 30kg per rak

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Set
- Etalase: Rak Display

Sudah termasuk bracket dan aksesoris pemasangan. Chat untuk custom ukuran.`,
      sizes: [
        { dimensions: "80x20 (1 tingkat)", price: 450000 },
        { dimensions: "100x20 (1 tingkat)", price: 550000 },
        { dimensions: "120x20 (2 tingkat)", price: 950000 },
        { dimensions: "150x20 (2 tingkat)", price: 1100000 },
        { dimensions: "150x25 (3 tingkat)", price: 1350000 },
        { dimensions: "180x25 (3 tingkat)", price: 1600000 }
      ]
    },
    { 
      id: 19, 
      name: "Kursi outdoor kursi taman kursi panjang", 
      basePrice: 2100000,
      description: `Kursi panjang outdoor untuk taman, teras, atau area outdoor. Desain yang tahan cuaca dengan material berkualitas. Cocok untuk bersantai menikmati suasana outdoor.

**Keunggulan:**
- Desain outdoor furniture
- Tahan cuaca dan hujan
- Kokoh dan nyaman
- Finishing anti karat
- Kapasitas 2-3 orang

**Material:**
- Rangka besi hollow/pipa finishing powder coating anti karat
- Dudukan kayu outdoor grade (bengkirai/ulin) atau kayu pinus treated
- Sandaran kayu solid
- Bracket dan baut stainless
- Finishing cat outdoor/natural oil

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Furniture Outdoor

Tahan cuaca untuk outdoor. Tersedia pilihan warna dan ukuran. Chat untuk konsultasi.`,
      sizes: [
        { dimensions: "120x50x80", price: 1800000 },
        { dimensions: "150x50x80", price: 2100000 },
        { dimensions: "180x50x80", price: 2500000 },
        { dimensions: "200x60x80 (dengan tangan)", price: 3200000 }
      ]
    },
    { 
      id: 20, 
      name: "Meja Kerja Meja Belajar Meja Susun Meja rak", 
      basePrice: 3800000,
      description: `Meja kerja/belajar dengan sistem rak bertingkat. Desain efisien untuk ruang kerja atau belajar yang membutuhkan banyak penyimpanan. Cocok untuk work from home atau kamar anak.

**Keunggulan:**
- Desain efisien dengan banyak penyimpanan
- Rak bertingkat untuk organize barang
- Kokoh untuk beban kerja
- Kabel management (optional)
- Space saving design

**Material:**
- Top table kayu pinus/multiplek HPL tebal 18mm
- Rangka besi hollow 30x30 atau 40x40 mm
- Rak kayu bertingkat
- Laci (optional)
- Finishing powder coating dan melamic

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 10-14 Hari
- Min. Pemesanan: 1 Set
- Etalase: Meja Kerja

Desain dapat disesuaikan dengan kebutuhan. Chat untuk custom layout dan ukuran.`,
      sizes: [
        { dimensions: "100x50x150 (2 tingkat)", price: 2500000 },
        { dimensions: "120x50x150 (2 tingkat)", price: 2800000 },
        { dimensions: "120x60x180 (3 tingkat)", price: 3200000 },
        { dimensions: "150x60x180 (3 tingkat)", price: 3800000 },
        { dimensions: "180x60x180 (3 tingkat)", price: 4500000 }
      ]
    },
    { 
      id: 21, 
      name: "Kursi Outdoor Kursi Taman", 
      basePrice: 4800000,
      description: `Set kursi outdoor untuk taman dengan desain elegant dan tahan cuaca. Cocok untuk taman, teras, atau area outdoor rumah. Material berkualitas yang tahan lama.

**Keunggulan:**
- Set lengkap untuk outdoor living
- Material tahan cuaca ekstrem
- Desain modern minimalis
- Nyaman untuk outdoor relaxing
- Finishing anti karat dan UV

**Paket Termasuk:**
- 1 Sofa 2-3 seater outdoor
- 2 Single chair outdoor
- 1 Coffee table outdoor
- Cushion outdoor (optional)

**Material:**
- Rangka besi hollow finishing powder coating outdoor grade
- Kayu outdoor (bengkirai/ulin) atau synthetic rattan
- Cushion fabric outdoor waterproof (optional)
- Hardware stainless steel

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 21-30 Hari
- Min. Pemesanan: 1 Set
- Etalase: Set Outdoor

Dapat custom warna dan ukuran. Chat untuk pilihan material dan finishing.`,
      sizes: [
        { dimensions: "Set Compact (2 kursi + meja)", price: 3200000 },
        { dimensions: "Set Medium (sofa 2 seat + 1 kursi + meja)", price: 4800000 },
        { dimensions: "Set Large (sofa 3 seat + 2 kursi + meja)", price: 6500000 },
        { dimensions: "Set Premium (sofa L + 2 kursi + 2 meja)", price: 9500000 }
      ]
    },
    { 
      id: 22, 
      name: "Rak Display Industrial Partisi Industrial", 
      basePrice: 3700000,
      description: `Rak display sekaligus partisi industrial. Solusi multifungsi untuk pembatas ruangan yang tetap memberikan fungsi penyimpanan. Cocok untuk toko, cafe, atau rumah modern.

**Keunggulan:**
- Dual fungsi: display & partisi
- Desain industrial modern
- Fleksibel untuk berbagai kebutuhan
- Kokoh dan stabil
- Dapat diakses dari 2 sisi

**Material:**
- Rangka besi hollow 40x40 atau 50x50 mm
- Rak kayu pinus/multiplek HPL
- Backing panel (optional)
- Finishing powder coating premium
- Dapat dilengkapi roda (mobile partition)

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Display & Partisi

Tinggi dan lebar dapat disesuaikan. Chat untuk konsultasi desain sesuai ruangan.`,
      sizes: [
        { dimensions: "120x35x180", price: 2800000 },
        { dimensions: "150x35x180", price: 3200000 },
        { dimensions: "150x40x200", price: 3700000 },
        { dimensions: "180x40x200", price: 4300000 },
        { dimensions: "200x40x200", price: 4900000 }
      ]
    },
    { 
      id: 23, 
      name: "Modular Industrial Custom Kabinet industrial", 
      basePrice: 8200000,
      description: `Sistem kabinet modular industrial yang dapat disesuaikan dengan kebutuhan ruangan. Cocok untuk dapur, ruang kerja, atau retail store. Desain fleksibel dan dapat dikembangkan.

**Keunggulan:**
- Sistem modular yang fleksibel
- Dapat ditambah sesuai kebutuhan
- Desain custom total
- Material premium dan tahan lama
- Finishing berkualitas tinggi

**Paket Modular Termasuk:**
- Kabinet bawah dengan laci/pintu
- Kabinet atas (optional)
- Counter top HPL/solid surface
- Rak terbuka industrial
- Hardware premium

**Material:**
- Rangka besi hollow 30x30 atau 40x40 mm
- Body plywood HPL/solid wood
- Counter top HPL/granite/solid surface
- Pintu dengan handle premium
- Finishing powder coating & HPL berkualitas

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 30-45 Hari
- Min. Pemesanan: 1 Set (min 2 meter)
- Etalase: Kabinet Custom

Harga per meter. Desain disesuaikan dengan layout ruangan. Chat untuk konsultasi dan survey.`,
      sizes: [
        { dimensions: "2 meter linear", price: 6500000 },
        { dimensions: "3 meter linear", price: 8200000 },
        { dimensions: "4 meter linear", price: 10500000 },
        { dimensions: "5 meter linear", price: 13000000 },
        { dimensions: "6 meter linear (L-shape)", price: 16000000 }
      ]
    },
    { 
      id: 24, 
      name: "Rak Dapur Gantung Industrial Custom", 
      basePrice: 350000,
      description: `Rak gantung dapur industrial custom dengan desain minimalis. Solusi penyimpanan praktis untuk dapur modern. Harga ekonomis dengan kualitas terjamin.

**Keunggulan:**
- Hemat space dan biaya vs kitchen set
- Mudah dijangkau dan praktis
- Desain industrial modern
- Kokoh dan kuat
- Custom ukuran sesuai dapur

**Cara baca ukuran:**
Contoh : 100x20
- 100 = panjang rak (cm)
- 20 = lebar papan kayu (cm)
- Tinggi pemasangan dapat disesuaikan

**Material:**
- Hollow galvanis 20x20 mm finishing cat/powder coating
- Kayu pinus grade A, tebal 18-20 mm
- Skrup dan fischer untuk pemasangan
- Finishing melamic/duco untuk kayu

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 5-7 Hari
- Min. Pemesanan: 1 Buah
- Etalase: Rak Dapur

Cocok untuk dapur minimalis modern. Chat untuk konsultasi ukuran sesuai dapur.`,
      sizes: [
        { dimensions: "60x20 (single)", price: 250000 },
        { dimensions: "80x20 (single)", price: 300000 },
        { dimensions: "100x20 (single)", price: 350000 },
        { dimensions: "120x20 (single)", price: 400000 },
        { dimensions: "100x20 (double)", price: 650000 },
        { dimensions: "120x20 (double)", price: 750000 },
        { dimensions: "150x20 (double)", price: 850000 }
      ]
    },
    { 
      id: 25, 
      name: "Paket Meja TV dan rak gantung industrial", 
      basePrice: 2710000,
      description: `Paket hemat meja TV dan rak gantung industrial. Solusi lengkap untuk ruang keluarga atau ruang tamu dengan desain matching industrial modern.

**Paket Termasuk:**
- 1 Meja TV industrial dengan rak bawah
- 1 Set rak gantung 2-3 tingkat
- Desain matching & serasi
- Instalasi dan finishing rapi

**Keunggulan:**
- Paket lengkap hemat biaya
- Desain matching dan coordinated
- Praktis dan fungsional
- Kualitas premium
- Custom warna sesuai selera

**Material:**
- Rangka besi hollow finishing powder coating
- Top table dan rak kayu pinus/multiplek HPL
- Hardware berkualitas
- Finishing cat duco/melamic premium
- Bracket dan skrup untuk rak gantung

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 10-14 Hari
- Min. Pemesanan: 1 Paket
- Etalase: Paket Furniture

Desain dan ukuran dapat disesuaikan. Chat untuk custom paket sesuai ruangan.`,
      sizes: [
        { dimensions: "Meja TV 100cm + Rak 100cm", price: 2100000 },
        { dimensions: "Meja TV 120cm + Rak 120cm", price: 2400000 },
        { dimensions: "Meja TV 150cm + Rak 150cm", price: 2710000 },
        { dimensions: "Meja TV 150cm + Rak 180cm", price: 3100000 },
        { dimensions: "Meja TV 180cm + Rak 200cm", price: 3600000 }
      ]
    },
    { 
      id: 26, 
      name: "Meja Bar Meja Bar Custom", 
      basePrice: 3500000,
      description: `Meja bar custom dengan desain sesuai kebutuhan ruangan anda. Cocok untuk dapur, ruang makan, cafe, atau bar. Desain industrial yang dapat disesuaikan total.

**Keunggulan:**
- Full custom design
- Ukuran disesuaikan ruangan
- Include rak penyimpanan
- Footrest untuk kenyamanan
- Pilihan material dan warna bebas

**Spesifikasi Custom:**
- Tinggi standar 100-110cm (dapat disesuaikan)
- Lebar dan panjang sesuai kebutuhan
- Dengan/tanpa rak bawah
- Dengan/tanpa backing/backdrop
- Model kaki bisa dipilih

**Material:**
- Top table kayu solid/multiplek HPL/granite
- Rangka besi hollow 40x40 atau 50x50 mm
- Rak bawah kayu/wire mesh
- Footrest besi
- Finishing premium powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Meja Bar Custom

Konsultasi gratis untuk desain. Chat untuk kirim denah ruangan dan konsep yang diinginkan.`,
      sizes: [
        { dimensions: "120x40x100", price: 2500000 },
        { dimensions: "150x40x100", price: 2900000 },
        { dimensions: "180x40x100", price: 3500000 },
        { dimensions: "200x45x100", price: 4000000 },
        { dimensions: "180x50x100 (premium)", price: 4200000 },
        { dimensions: "200x50x100 (premium)", price: 4800000 }
      ]
    },
    { 
      id: 27, 
      name: "Bench corner kursi sudut kursi santai", 
      basePrice: 2800000,
      image: benchCornerImg,
      description: `Bench corner untuk pojok ruangan, cocok untuk area santai, ruang makan, atau reading nook. Desain yang mengoptimalkan sudut ruangan dengan style industrial modern.

**Keunggulan:**
- Memanfaatkan sudut ruangan (space saving)
- Nyaman untuk santai dan bersantap
- Desain L-shape ergonomis
- Dapat dilengkapi storage/laci bawah
- Custom ukuran sesuai sudut ruangan

**Spesifikasi:**
- Bentuk L sesuai pojok ruangan
- Sandaran nyaman untuk duduk lama
- Optional storage/laci bawah
- Dapat dilengkapi cushion
- Tinggi dudukan 40-45cm (standar)

**Material:**
- Rangka besi hollow 40x40 mm
- Dudukan kayu pinus/multiplek HPL
- Sandaran kayu solid/panel
- Optional cushion foam + fabric
- Finishing powder coating dan duco

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Set
- Etalase: Kursi Custom

Ukuran disesuaikan dengan sudut ruangan. Chat untuk konsultasi dan ukur ruangan.`,
      sizes: [
        { dimensions: "120x120x80 (tanpa storage)", price: 2200000 },
        { dimensions: "150x150x80 (tanpa storage)", price: 2800000 },
        { dimensions: "180x150x80 (tanpa storage)", price: 3200000 },
        { dimensions: "150x150x80 (dengan storage)", price: 3500000 },
        { dimensions: "180x150x80 (dengan storage)", price: 4000000 }
      ]
    },
    { 
      id: 28, 
      name: "Meja Kerja Rak Meja Belajar custom", 
      basePrice: 1400000,
      image: mejaKerjaRakImg,
      description: `Meja kerja/belajar dengan rak samping yang fungsional. Cocok untuk WFH, ruang belajar anak, atau home office. Desain compact dengan banyak penyimpanan.

**Keunggulan:**
- Compact dengan banyak storage
- Rak samping untuk organize barang
- Cocok untuk space terbatas
- Cable management ready
- Kokoh untuk beban kerja

**Spesifikasi:**
- Meja utama untuk kerja/belajar
- Rak samping 2-3 tingkat
- Optional laci untuk storage
- Cable hole untuk kerapian kabel
- Tinggi standar 75cm

**Material:**
- Top table kayu pinus/multiplek HPL tebal 18mm
- Rangka besi hollow 30x30 mm
- Rak samping kayu bertingkat
- Laci dengan rel (optional)
- Finishing melamic dan powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Set
- Etalase: Meja Belajar

Desain dan ukuran dapat disesuaikan. Chat untuk custom layout.`,
      sizes: [
        { dimensions: "100x50x120 (rak 2 tingkat)", price: 1200000 },
        { dimensions: "120x50x120 (rak 2 tingkat)", price: 1400000 },
        { dimensions: "120x60x150 (rak 3 tingkat)", price: 1650000 },
        { dimensions: "150x60x150 (rak 3 tingkat)", price: 1900000 },
        { dimensions: "120x60x150 (dengan laci)", price: 2100000 }
      ]
    },
    { 
      id: 29, 
      name: "Meja Dapur Industrial Custom Meja Makan Custom", 
      basePrice: 2800000,
      description: `Meja serbaguna untuk dapur atau ruang makan dengan desain industrial custom. Dapat digunakan sebagai island dapur, meja persiapan, atau meja makan. Fungsional dan stylish.

**Keunggulan:**
- Multifungsi: dapur/makan
- Desain industrial robust
- Top table tahan panas dan goresan
- Storage rak bawah
- Custom ukuran dan tinggi

**Spesifikasi:**
- Tinggi 75cm (makan) atau 90cm (island)
- Rak bawah untuk penyimpanan
- Top table tebal 25-30mm
- Kaki kokoh dan stabil
- Optional dengan roda (mobile island)

**Material:**
- Top table kayu solid/multiplek HPL tahan air
- Rangka besi hollow 40x40 mm
- Rak bawah kayu/stainless
- Optional granite/solid surface top
- Finishing food grade dan anti karat

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 10-14 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Meja Dapur

Ukuran dan tinggi dapat disesuaikan. Chat untuk konsultasi fungsi dan layout dapur.`,
      sizes: [
        { dimensions: "100x60x75 (meja makan)", price: 2200000 },
        { dimensions: "120x60x75 (meja makan)", price: 2500000 },
        { dimensions: "150x70x75 (meja makan)", price: 2800000 },
        { dimensions: "120x60x90 (island dapur)", price: 2900000 },
        { dimensions: "150x70x90 (island dapur)", price: 3300000 },
        { dimensions: "180x80x90 (island premium)", price: 3900000 }
      ]
    },
    { 
      id: 30, 
      name: "Meja TV custom industrial tema", 
      basePrice: 1999000,
      description: `Meja TV industrial custom dengan tema sesuai selera. Kombinasi sempurna antara fungsi media console dan furniture statement piece untuk ruang keluarga modern.

**Keunggulan:**
- Desain industrial modern
- Rak bawah untuk DVD/console game
- Cable management hole
- Ukuran disesuaikan dengan TV
- Kokoh menahan TV besar

**Spesifikasi:**
- Tinggi ideal 40-50cm
- Rak terbuka untuk perangkat
- Cable hole untuk kerapian
- Load capacity hingga 100kg
- Dapat dilengkapi laci

**Material:**
- Top table kayu pinus/multiplek HPL tebal 18-25mm
- Rangka besi hollow 30x30 atau 40x40 mm
- Rak kayu untuk storage
- Backing panel (optional)
- Finishing duco/melamic premium

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Buah
- Etalase: Meja TV

Ukuran disesuaikan dengan TV dan ruangan. Chat untuk konsultasi desain dan warna.`,
      sizes: [
        { dimensions: "100x40x50", price: 1400000 },
        { dimensions: "120x40x50", price: 1650000 },
        { dimensions: "150x40x50", price: 1999000 },
        { dimensions: "180x45x50", price: 2400000 },
        { dimensions: "150x40x50 (dengan laci)", price: 2500000 },
        { dimensions: "180x45x50 (dengan laci)", price: 2900000 }
      ]
    },
    { 
      id: 31, 
      name: "Meja Dapur industrial custom", 
      basePrice: 4500000,
      description: `Meja dapur custom industrial dengan berbagai fungsi. Dapat digunakan sebagai kitchen island, meja persiapan, atau meja kerja dapur. Desain yang memadukan fungsi dan estetika.

**Keunggulan:**
- Kitchen island multifungsi
- Storage optimal dengan kabinet/rak
- Top table food grade dan tahan panas
- Dapat dilengkapi sink (optional)
- Desain custom sesuai layout dapur

**Spesifikasi:**
- Top table tahan panas dan air
- Kabinet bawah dengan pintu/laci
- Rak terbuka untuk akses mudah
- Counter height 90cm (ideal untuk persiapan)
- Load capacity tinggi

**Material:**
- Top table multiplek HPL tahan air/granite/quartz
- Rangka besi hollow 40x40 atau 50x50 mm
- Body kabinet plywood HPL
- Laci dengan rel soft close (optional)
- Hardware stainless dan handle premium

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 21-30 Hari
- Min. Pemesanan: 1 Set
- Etalase: Meja Dapur Custom

Termasuk survey dan konsultasi desain gratis. Chat untuk diskusi layout dapur anda.`,
      sizes: [
        { dimensions: "120x60x90", price: 3500000 },
        { dimensions: "150x60x90", price: 4000000 },
        { dimensions: "150x70x90", price: 4500000 },
        { dimensions: "180x70x90", price: 5200000 },
        { dimensions: "200x80x90 (dengan sink)", price: 6500000 }
      ]
    },
    { 
      id: 32, 
      name: "Meja Kerja Meja Kantor Meja industrial", 
      basePrice: 1700000,
      description: `Meja kerja/kantor industrial dengan desain profesional dan fungsional. Cocok untuk home office, kantor startup, atau co-working space. Simple, kokoh, dan produktif.

**Keunggulan:**
- Desain clean dan profesional
- Luas kerja yang cukup
- Kokoh dan tidak goyang
- Cable management system
- Harga terjangkau

**Spesifikasi:**
- Tinggi standar 75cm (ergonomis)
- Lebar kerja 100-180cm
- Optional rak samping/bawah
- Cable hole untuk kerapian
- Kaki kuat dan stabil

**Material:**
- Top table kayu pinus/multiplek HPL tebal 18-25mm
- Rangka besi hollow 30x30 atau 40x40 mm
- Bracket penguat di bawah
- Optional laci/filing cabinet
- Finishing melamic dan powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Meja Kantor

Cocok untuk setup WFH atau kantor. Chat untuk custom ukuran dan tambahan feature.`,
      sizes: [
        { dimensions: "100x60x75", price: 1350000 },
        { dimensions: "120x60x75", price: 1500000 },
        { dimensions: "150x60x75", price: 1700000 },
        { dimensions: "150x70x75", price: 1900000 },
        { dimensions: "180x70x75", price: 2200000 },
        { dimensions: "150x60x75 (dengan laci)", price: 2400000 }
      ]
    },
    { 
      id: 33, 
      name: "Meja Cafe industrial 2 unit meja + rak gantung", 
      basePrice: 5300000,
      description: `Paket meja cafe industrial lengkap dengan 2 unit meja dan rak gantung. Solusi hemat untuk setup cafe, coffee shop, atau resto kecil. Desain matching dan profesional.

**Paket Termasuk:**
- 2 Unit meja cafe ukuran sama
- 1 Set rak gantung untuk display
- Desain koordinated dan matching
- Finishing seragam

**Keunggulan:**
- Paket hemat untuk usaha cafe
- Desain industrial modern
- Kuat dan tahan lama
- Mudah maintenance
- Professional look

**Material:**
- Top table kayu solid/multiplek HPL food grade
- Rangka besi hollow 40x40 mm
- Rak gantung kayu + besi
- Kaki meja stabil dan kokoh
- Finishing premium powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Paket
- Etalase: Paket Cafe

Cocok untuk startup cafe/resto. Ukuran dan jumlah meja dapat disesuaikan. Chat untuk custom paket.`,
      sizes: [
        { dimensions: "2 Meja 100x60 + Rak 150cm", price: 4500000 },
        { dimensions: "2 Meja 120x60 + Rak 150cm", price: 4900000 },
        { dimensions: "2 Meja 120x70 + Rak 180cm", price: 5300000 },
        { dimensions: "2 Meja 150x70 + Rak 200cm", price: 6200000 },
        { dimensions: "3 Meja 120x60 + 2 Rak 150cm", price: 7500000 }
      ]
    },
    { 
      id: 34, 
      name: "Meja makan industrial 150x60x90 + 2 kursi", 
      basePrice: 4000000,
      image: mejaMakanKursiImg,
      description: `Paket meja makan industrial dengan 2 kursi matching. Set lengkap untuk ruang makan kompak. Cocok untuk apartemen atau rumah minimalis. Desain industrial modern yang timeless.

**Paket Termasuk:**
- 1 Meja makan industrial
- 2 Kursi matching dengan sandaran
- Finishing seragam dan rapi
- Desain koordinated

**Keunggulan:**
- Set lengkap hemat biaya
- Desain matching sempurna
- Kokoh untuk daily use
- Ukuran ideal untuk 3-4 orang
- Style industrial modern

**Material:**
- Top meja kayu pinus/multiplek HPL tebal 25mm
- Rangka meja hollow 40x40 mm
- Kursi rangka besi hollow 25x25 mm
- Dudukan kursi kayu solid
- Finishing powder coating dan melamic

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 10-14 Hari
- Min. Pemesanan: 1 Set
- Etalase: Set Makan

Warna dapat disesuaikan. Tambah kursi Rp 600rb/unit. Chat untuk pilihan warna.`,
      sizes: [
        { dimensions: "120x60x75 + 2 kursi", price: 3200000 },
        { dimensions: "150x60x75 + 2 kursi", price: 3600000 },
        { dimensions: "150x70x75 + 2 kursi", price: 4000000 },
        { dimensions: "150x70x75 + 4 kursi", price: 5200000 },
        { dimensions: "180x80x75 + 4 kursi", price: 6000000 }
      ]
    },
    { 
      id: 35, 
      name: "Rak Gantung industrial 160 x 32 - 3 ambalan kayu dan besi", 
      basePrice: 1200000,
      description: `Rak gantung industrial dengan 3 tingkat ambalan kayu dan rangka besi. Cocok untuk dapur, ruang tamu, atau toko. Desain industrial yang kokoh dan fungsional.

**Spesifikasi:**
- 3 tingkat ambalan kayu
- Jarak antar tingkat 25-30cm (adjustable)
- Sistem gantung dengan bracket kuat
- Dapat menahan beban hingga 40kg total

**Keunggulan:**
- Hemat ruang lantai
- 3 tingkat penyimpanan
- Desain industrial modern
- Mudah pemasangan
- Harga ekonomis

**Cara baca ukuran:**
160 x 32 artinya:
- 160 = panjang rak (cm)
- 32 = lebar papan kayu (cm)
- 3 ambalan = 3 tingkat

**Material:**
- Hollow besi galvanis 20x20 mm
- Kayu pinus grade A, tebal 18-20 mm
- Bracket dan fischer untuk pemasangan
- Finishing powder coating dan melamic

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Set
- Etalase: Rak Gantung

Sudah termasuk aksesoris pemasangan. Chat untuk custom ukuran dan warna.`,
      sizes: [
        { dimensions: "120x25 (3 tingkat)", price: 900000 },
        { dimensions: "140x30 (3 tingkat)", price: 1050000 },
        { dimensions: "160x32 (3 tingkat)", price: 1200000 },
        { dimensions: "180x32 (3 tingkat)", price: 1350000 },
        { dimensions: "200x35 (3 tingkat)", price: 1550000 },
        { dimensions: "160x32 (4 tingkat)", price: 1500000 }
      ]
    },
    { 
      id: 36, 
      name: "Meja makan Meja Cafe industrial set & Rak Gantung", 
      basePrice: 4600000,
      description: `Paket set meja cafe/makan industrial dilengkapi dengan rak gantung. Solusi lengkap untuk cafe, ruang makan, atau dapur. Desain matching industrial modern yang cohesive.

**Paket Termasuk:**
- 1 Meja cafe/makan industrial
- 1 Set rak gantung 2-3 tingkat
- Desain matching dan satu tema
- Instalasi lengkap

**Keunggulan:**
- Paket lengkap hemat
- Desain coordinated
- Cocok untuk cafe atau rumah
- Kualitas premium
- Fungsional dan stylish

**Material:**
- Top meja kayu pinus/multiplek HPL tebal 25mm
- Rangka meja hollow 40x40 mm
- Rak gantung kayu + besi hollow 20x20
- Hardware berkualitas
- Finishing powder coating dan melamic

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Paket
- Etalase: Paket Set Cafe

Warna dan ukuran dapat disesuaikan. Chat untuk konsultasi desain dan layout.`,
      sizes: [
        { dimensions: "Meja 120x60 + Rak 120cm", price: 3800000 },
        { dimensions: "Meja 150x70 + Rak 150cm", price: 4200000 },
        { dimensions: "Meja 150x70 + Rak 180cm", price: 4600000 },
        { dimensions: "Meja 180x80 + Rak 200cm", price: 5400000 },
        { dimensions: "Meja 150x70 + 2 Rak 150cm", price: 5800000 }
      ]
    },
    { 
      id: 37, 
      name: "Kursi panjang kayu besi kursi industrial", 
      basePrice: 1300000,
      description: `Kursi panjang/bench industrial dengan kombinasi kayu dan besi. Cocok untuk ruang makan, teras, atau area public. Desain industrial yang simpel namun stylish.

**Keunggulan:**
- Space efficient untuk banyak orang
- Desain industrial minimalis
- Kokoh dan stabil
- Mudah dipindahkan
- Cocok untuk indoor/outdoor

**Spesifikasi:**
- Panjang 120-180cm (custom)
- Lebar dudukan 35-40cm
- Tinggi dudukan 45cm (standar)
- Optional dengan sandaran
- Kapasitas 2-3 orang

**Material:**
- Dudukan kayu pinus/jati solid tebal 3-4cm
- Rangka besi hollow 30x30 atau pipa
- Kaki besi kuat dan stabil
- Optional sandaran kayu
- Finishing natural/melamic dan powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Kursi Panjang

Tersedia dengan atau tanpa sandaran. Chat untuk custom ukuran dan warna.`,
      sizes: [
        { dimensions: "120x35x45 (tanpa sandaran)", price: 1100000 },
        { dimensions: "150x35x45 (tanpa sandaran)", price: 1300000 },
        { dimensions: "180x40x45 (tanpa sandaran)", price: 1500000 },
        { dimensions: "120x35x80 (dengan sandaran)", price: 1500000 },
        { dimensions: "150x35x80 (dengan sandaran)", price: 1750000 },
        { dimensions: "180x40x80 (dengan sandaran)", price: 2000000 }
      ]
    },
    { 
      id: 38, 
      name: "Meja bar meja dapur meja kerja industrial", 
      basePrice: 2800000,
      description: `Meja multifungsi industrial yang dapat digunakan sebagai meja bar, meja dapur, atau meja kerja. Desain versatile dengan tinggi yang dapat disesuaikan dengan kebutuhan.

**Keunggulan:**
- Multifungsi 3 in 1
- Desain adaptif
- Rak penyimpanan di bawah
- Kokoh dan stabil
- Custom tinggi sesuai fungsi

**Pilihan Tinggi:**
- 75cm untuk meja makan/kerja
- 90cm untuk island dapur
- 100-110cm untuk bar counter

**Material:**
- Top table kayu pinus/multiplek HPL tebal 25mm
- Rangka besi hollow 40x40 mm
- Rak bawah kayu/wire mesh
- Footrest untuk tinggi bar
- Finishing premium powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 10-14 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Meja Industrial

Tinggi dan ukuran disesuaikan fungsi. Chat untuk konsultasi penggunaan dan desain.`,
      sizes: [
        { dimensions: "120x50x75 (meja kerja/makan)", price: 2300000 },
        { dimensions: "150x60x75 (meja kerja/makan)", price: 2600000 },
        { dimensions: "120x50x90 (island dapur)", price: 2500000 },
        { dimensions: "150x60x90 (island dapur)", price: 2800000 },
        { dimensions: "150x40x100 (bar counter)", price: 2900000 },
        { dimensions: "180x40x100 (bar counter)", price: 3300000 }
      ]
    },
    { 
      id: 39, 
      name: "Meja makan industrial meja makan meja dapur 120x50x90", 
      basePrice: 2900000,
      description: `Meja makan/dapur industrial dengan desain compact. Cocok untuk apartemen atau rumah dengan ruang terbatas. Tinggi 90cm memberikan kesan modern dan dapat dipadukan dengan kursi bar.

**Keunggulan:**
- Ukuran compact
- Tinggi modern 90cm
- Cocok untuk space kecil
- Rak bawah untuk storage
- Desain industrial minimalis

**Spesifikasi:**
- Tinggi 90cm (untuk kursi bar/counter)
- Rak bawah 2 tingkat
- Cable hole (optional)
- Kaki kokoh dan stabil
- Kapasitas 2-4 orang

**Material:**
- Top table kayu pinus/multiplek HPL tebal 25mm
- Rangka besi hollow 40x40 mm
- Rak bawah kayu pinus
- Bracket penguat
- Finishing melamic dan powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 10-14 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Meja Makan

Cocok dipasangkan dengan kursi bar tinggi 60-70cm. Chat untuk pilihan warna.`,
      sizes: [
        { dimensions: "100x50x90", price: 2200000 },
        { dimensions: "120x50x90", price: 2500000 },
        { dimensions: "120x60x90", price: 2700000 },
        { dimensions: "150x60x90", price: 2900000 },
        { dimensions: "150x70x90", price: 3200000 }
      ]
    },
    { 
      id: 40, 
      name: "Meja makan industrial meja dapur 120x60x90", 
      basePrice: 2600000,
      description: `Meja makan/dapur industrial ukuran 120x60cm dengan tinggi 90cm. Ukuran ideal untuk 2-4 orang dengan tinggi modern. Cocok untuk dapur minimalis atau ruang makan kompak.

**Keunggulan:**
- Ukuran proporsional 120x60cm
- Tinggi 90cm (counter height)
- Ideal untuk 3-4 orang
- Rak bawah fungsional
- Harga ekonomis

**Spesifikasi:**
- Dimensi top 120x60cm
- Tinggi 90cm (pair dengan kursi bar)
- 1-2 rak bawah
- Kaki stabil dan kuat
- Finishing rapi

**Material:**
- Top table kayu pinus/multiplek HPL tebal 25mm
- Rangka besi hollow 40x40 mm
- Rak bawah kayu solid/multiplek
- Hardware berkualitas
- Finishing powder coating dan melamic premium

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Meja Makan

Best seller size! Cocok untuk apartemen atau rumah minimalis. Chat untuk custom warna.`,
      sizes: [
        { dimensions: "100x60x90", price: 2300000 },
        { dimensions: "120x60x90", price: 2600000 },
        { dimensions: "120x60x90 (dengan laci)", price: 3100000 },
        { dimensions: "120x70x90", price: 2800000 },
        { dimensions: "150x70x90", price: 3100000 }
      ]
    },
    { 
      id: 41, 
      name: "Meja industrial meja vintage meja dapur", 
      basePrice: 3000000,
      image: mejaIndustrialImg,
      description: `Meja industrial dengan sentuhan vintage yang unik. Kombinasi material modern dengan finishing vintage memberikan karakter khusus. Cocok untuk dapur, cafe, atau ruang makan dengan konsep eclectic.

**Keunggulan:**
- Style industrial vintage unik
- Finishing antique yang artistik
- Kokoh dengan material berkualitas
- Multifungsi untuk berbagai kebutuhan
- Statement piece untuk interior

**Spesifikasi:**
- Top table dengan finishing vintage/distressed
- Rangka besi dengan patina effect
- Rak bawah untuk penyimpanan
- Detail vintage yang detil
- Setiap meja memiliki karakter unik

**Material:**
- Top table kayu solid/multiplek dengan finishing vintage
- Rangka besi dengan finishing patina/rust effect
- Rak kayu dengan teknik aging
- Hardware vintage style
- Finishing special vintage technique

**Detail:**
- Kondisi: Baru dengan finishing vintage
- Waktu Preorder: 14-21 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Meja Vintage

Finishing vintage dapat disesuaikan. Chat untuk referensi warna dan style.`,
      sizes: [
        { dimensions: "120x60x75", price: 2500000 },
        { dimensions: "120x60x90", price: 2700000 },
        { dimensions: "150x70x75", price: 2900000 },
        { dimensions: "150x70x90", price: 3000000 },
        { dimensions: "180x80x90", price: 3600000 }
      ]
    },
    { 
      id: 42, 
      name: "Meja industrial meja dapur meja vintage meja cafe meja bar 120x50x90", 
      basePrice: 2600000,
      description: `Meja serbaguna industrial-vintage dengan ukuran compact 120x50cm. Tinggi 90cm cocok untuk berbagai fungsi: cafe, bar, dapur, atau ruang makan. Desain versatile yang stylish.

**Keunggulan:**
- Multifungsi 4 in 1
- Ukuran compact 120x50cm
- Tinggi 90cm (counter height)
- Style industrial-vintage
- Cocok untuk space terbatas

**Fungsi Penggunaan:**
- Meja cafe untuk 2 orang
- Bar counter untuk home bar
- Island dapur kecil
- Meja makan tinggi

**Material:**
- Top table kayu pinus/multiplek finishing melamic
- Rangka besi hollow 40x40 mm
- Rak bawah untuk storage
- Footrest besi
- Finishing powder coating

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 7-10 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Meja Multifungsi

Ukuran ideal untuk apartemen atau space kecil. Chat untuk custom warna dan detail.`,
      sizes: [
        { dimensions: "100x50x90", price: 2200000 },
        { dimensions: "120x50x90", price: 2600000 },
        { dimensions: "120x50x100 (bar height)", price: 2700000 },
        { dimensions: "120x60x90", price: 2800000 },
        { dimensions: "150x60x90", price: 3100000 }
      ]
    },
    { 
      id: 43, 
      name: "Bedroom wardrobe - lemari pakaian", 
      basePrice: 1900000,
      description: `Lemari pakaian custom untuk kamar tidur dengan desain minimalis modern. Solusi penyimpanan yang efisien dan rapi untuk pakaian dan aksesoris. Dapat disesuaikan dengan ukuran ruangan.

**Keunggulan:**
- Desain custom sesuai ruangan
- Penyimpanan optimal dan terorganisir
- Pintu sliding/swing (pilihan)
- Interior dapat di-custom
- Harga lebih ekonomis dari built-in

**Spesifikasi Interior:**
- Rak untuk pakaian lipat
- Gantungan untuk pakaian
- Laci untuk aksesoris (optional)
- Cermin dalam (optional)
- Lampu LED dalam (optional)

**Material:**
- Body plywood/blockboard HPL
- Rangka kayu/multipleks
- Pintu HPL/mirror/kombinasi
- Handle aluminium/stainless
- Rel sliding soft close (untuk sliding door)

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 21-30 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Lemari Custom

Termasuk survey dan konsultasi desain. Chat untuk ukur ruangan dan diskusi layout.`,
      sizes: [
        { dimensions: "100x50x200 (2 pintu)", price: 3500000 },
        { dimensions: "120x50x200 (2 pintu)", price: 4000000 },
        { dimensions: "150x50x200 (3 pintu)", price: 4800000 },
        { dimensions: "180x60x200 (3 pintu)", price: 5800000 },
        { dimensions: "200x60x220 (sliding)", price: 7500000 }
      ]
    },
    { 
      id: 44, 
      name: "Kitchen set minimalis custom plywood+hpl", 
      basePrice: 1900000,
      description: `Kitchen set minimalis custom dengan material plywood dan finishing HPL. Solusi dapur modern yang tahan lama dan mudah perawatan. Harga per meter dengan kualitas premium.

**Keunggulan:**
- Full custom design sesuai layout dapur
- Material plywood tahan lama
- HPL tahan air dan panas
- Berbagai pilihan warna HPL
- Harga per meter yang kompetitif

**Paket Termasuk:**
- Kabinet bawah dengan laci/pintu
- Kabinet atas (optional)
- Counter top HPL/granite (pilihan)
- Kitchen sink dan faucet (optional)
- Hardware berkualitas

**Material:**
- Body plywood 18mm finishing HPL
- Rangka kayu/multiplek
- Counter top HPL 20mm/granite
- Pintu plywood HPL
- Handle aluminium, rel laci soft close

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 30-45 Hari
- Min. Pemesanan: 2 Meter
- Etalase: Kitchen Set

Harga per meter termasuk bawah dan atas. Survey dan konsultasi gratis. Chat untuk schedule survey.`,
      sizes: [
        { dimensions: "Per meter (HPL standar)", price: 1900000 },
        { dimensions: "Per meter (HPL premium)", price: 2200000 },
        { dimensions: "Paket 2 meter (komplit)", price: 4200000 },
        { dimensions: "Paket 3 meter (komplit)", price: 6000000 },
        { dimensions: "Paket 4 meter (komplit)", price: 7800000 }
      ]
    },
    { 
      id: 45, 
      name: "rak gantung industrial shelf", 
      basePrice: 1600000,
      image: rakGantungImg,
      description: `Rak gantung dapur bisa menjadi alternative untuk dapur anda agar terlihat mewah. Biaya jauh lebih murah dibanding kitchen set. Tema industrial ini sering dipakai untuk cafe, namun saat ini sudah banyak digunakan di rumah-rumah modern minimalis.

**Cara baca ukuran:**
Contoh : 120x20x60
- 120 = panjang kayu
- 20 = lebar kayu  
- 60 = artinya 2 tingkat
- Jika 90 maka 3 tingkat
- Jarak antar kayu bisa per 20~30 cm

**Material:**
- Hollow galvanize 20x20 mm
- Kayu : pinus, suren, tebal 18-20 mm
- *sudah termasuk skrup dan fischer

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 14 Hari
- Min. Pemesanan: 1 Buah
- Etalase: Rak Gantung

Silahkan chat untuk konsultasi custom model atau ukuran.`,
      sizes: [
        { dimensions: "210x20x60", price: 1600000 },
        { dimensions: "210x20x90", price: 1800000 },
        { dimensions: "210x30x60", price: 1700000 },
        { dimensions: "210x30x90", price: 2000000 },
        { dimensions: "250x20x60", price: 1850000 },
        { dimensions: "250x20x90", price: 2200000 },
        { dimensions: "150x25x60", price: 1200000 },
        { dimensions: "250x30x60", price: 2000000 },
        { dimensions: "250x30x90", price: 2300000 },
        { dimensions: "160x35x90", price: 1700000 }
      ]
    },
    { 
      id: 46, 
      name: "Lemari Pakaian Scandinavian", 
      basePrice: 1900000,
      description: `Lemari pakaian dengan desain Scandinavian minimalis. Konsep Nordic yang clean, simple, dan fungsional. Cocok untuk kamar tidur modern minimalis dengan nuansa natural dan hangat.

**Konsep Scandinavian:**
- Desain minimalis dan clean
- Warna natural wood atau putih
- Fokus pada fungsi dan kenyamanan
- Garis-garis simpel dan elegan
- Material berkualitas

**Keunggulan:**
- Desain timeless Scandinavian
- Penyimpanan optimal
- Tampilan elegan dan modern
- Mudah dipadukan dengan interior
- Kualitas tahan lama

**Material:**
- Body plywood/MDF finishing HPL wood grain
- Rangka kayu solid untuk kekuatan
- Pintu dengan finishing natural/putih
- Handle minimalis kayu/aluminium
- Interior HPL/melamic

**Detail:**
- Kondisi: Baru
- Waktu Preorder: 21-30 Hari
- Min. Pemesanan: 1 Unit
- Etalase: Lemari Scandinavian

Tersedia pilihan warna natural oak, walnut, atau white. Chat untuk konsultasi desain.`,
      sizes: [
        { dimensions: "80x50x180 (2 pintu)", price: 3200000 },
        { dimensions: "100x50x180 (2 pintu)", price: 3800000 },
        { dimensions: "120x50x200 (2 pintu)", price: 4500000 },
        { dimensions: "150x50x200 (3 pintu)", price: 5500000 },
        { dimensions: "180x60x200 (3 pintu)", price: 6800000 }
      ]
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }


  const filteredProducts = products.filter(product => {
    if (sortBy === 'all') return true
    if (sortBy === 'under-1m') return product.basePrice < 1000000
    if (sortBy === '1m-5m') return product.basePrice >= 1000000 && product.basePrice < 5000000
    if (sortBy === '5m-10m') return product.basePrice >= 5000000 && product.basePrice < 10000000
    if (sortBy === 'over-10m') return product.basePrice >= 10000000
    return true
  })

  const handleDetailClick = (product: Product) => {
    setSelectedProduct(product)
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].dimensions)
    }
  }

  const getCurrentPrice = (product: Product) => {
    if (product.sizes && selectedSize) {
      const size = product.sizes.find(s => s.dimensions === selectedSize)
      return size ? size.price : product.basePrice
    }
    return product.basePrice
  }

  const handleWhatsAppClick = (product: Product) => {
    const currentPrice = getCurrentPrice(product)
    const sizeInfo = product.sizes && selectedSize ? `\nUkuran: ${selectedSize}` : ''
    const message = `Halo, saya tertarik dengan produk: ${product.name}${sizeInfo}\nHarga: ${formatPrice(currentPrice)}\n\nBisa minta informasi lebih detail?`
    const whatsappUrl = `https://wa.me/6285212078467?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Produk Kami</div>
          <h2>Produk Kami</h2>
          <p>Koleksi produk furniture dan konstruksi berkualitas tinggi</p>
        </div>
        
        <div className="portfolio-filters">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${sortBy === 'all' ? 'active' : ''}`}
              onClick={() => setSortBy('all')}
            >
              Semua Produk
            </button>
            <button 
              className={`filter-btn ${sortBy === 'under-1m' ? 'active' : ''}`}
              onClick={() => setSortBy('under-1m')}
            >
              Di bawah 1 Juta
            </button>
            <button 
              className={`filter-btn ${sortBy === '1m-5m' ? 'active' : ''}`}
              onClick={() => setSortBy('1m-5m')}
            >
              1-5 Juta
            </button>
            <button 
              className={`filter-btn ${sortBy === '5m-10m' ? 'active' : ''}`}
              onClick={() => setSortBy('5m-10m')}
            >
              5-10 Juta
            </button>
            <button 
              className={`filter-btn ${sortBy === 'over-10m' ? 'active' : ''}`}
              onClick={() => setSortBy('over-10m')}
            >
              Di atas 10 Juta
            </button>
          </div>
        </div>
        
        <div className="portfolio-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="portfolio-item">
              <div className="portfolio-image">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div className="portfolio-placeholder">
                    <span>Gambar Produk</span>
                  </div>
                )}
              </div>
              <div className="portfolio-content">
                <h3>{product.name}</h3>
                <div className="product-price">{formatPrice(product.basePrice)}</div>
                {product.sizes && product.sizes.length > 0 && (
                  <div className="size-indicator">+ {product.sizes.length} ukuran tersedia</div>
                )}
                <div className="button-group">
                  <button 
                    className="btn-detail"
                    onClick={() => handleDetailClick(product)}
                  >
                    Lihat Detail
                  </button>
                  <button 
                    className="btn-whatsapp"
                    onClick={() => handleWhatsAppClick(product)}
                  >
                    <span className="whatsapp-icon">📱</span>
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedProduct.name}</h2>
              <button 
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="product-info">
                {/* Product Image - Added */}
                {selectedProduct.image && (
                  <div className="modal-product-image">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '8px', marginBottom: '20px' }}
                    />
                  </div>
                )}
                
                {/* Size Selection - Moved to top */}
                {selectedProduct.sizes && selectedProduct.sizes.length > 0 ? (
                  <div className="size-selection">
                    <h3>Pilih Ukuran:</h3>
                    <div className="size-options">
                      {selectedProduct.sizes.map((size, index) => (
                        <button
                          key={index}
                          className={`size-option ${selectedSize === size.dimensions ? 'selected' : ''}`}
                          onClick={() => setSelectedSize(size.dimensions)}
                        >
                          <div className="size-dimensions">{size.dimensions}</div>
                          <div className="size-price">{formatPrice(size.price)}</div>
                        </button>
                      ))}
                    </div>
                    <div className="selected-price">
                      <strong>Harga: {formatPrice(getCurrentPrice(selectedProduct))}</strong>
                    </div>
                  </div>
                ) : (
                  <div className="single-price">
                    <strong>Harga: {formatPrice(selectedProduct.basePrice)}</strong>
                  </div>
                )}

                {/* Product Description */}
                {selectedProduct.description && (
                  <div className="product-description">
                    {selectedProduct.description.split('\n').map((line, index) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <h4 key={index} className="description-heading">{line.replace(/\*\*/g, '')}</h4>
                      } else if (line.startsWith('- ')) {
                        return <div key={index} className="description-bullet">{line}</div>
                      } else if (line.trim() === '') {
                        return <br key={index} />
                      } else {
                        return <p key={index} className="description-text">{line}</p>
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                className="btn-whatsapp"
                onClick={() => handleWhatsAppClick(selectedProduct)}
              >
                <span className="whatsapp-icon">📱</span>
                Tanya via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PortfolioSection
