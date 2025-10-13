// Import images
import benchCornerImage from '../assets/Bench-corner-kursi-sudut-kursi-santai.png'
import mejaMakanImage from '../assets/meja-industrial-mejamakan.png'
import kabinetLemariImage from '../assets/Kabinet-Lemari-industrial.png'
import mejaKerjaImage from '../assets/Meja-Kerja-Rak-Meja-Belajar-custom.png'
import mejaMakanSetImage from '../assets/Meja-makan-industrial-150x60x90-2 kursi.png'
import gantunganBajuImage from '../assets/gantungan-baju-industrial.png'
import balconyBarTableImage from '../assets/balcony-bar-table.png'
import frameLoftBookshelfImage from '../assets/frame-Loft-Bookshelf.png'
import barChairImage from '../assets/Kursi-Barstool-Besi-Behel.png'
import hollowlineDisplayRackImage from '../assets/Hollowline-Display-Rack.png'
import steelframeOutdoorBarSetImage from '../assets/Steelfram-Outdoor-Bar-Set.png'
import kabinetDapurImage from '../assets/Kabinet-Industrial-Dapur.jpg'
import kursiBarStallImage from '../assets/Kursi-Bar-kursi-stall-chair.jpg'
import rakDisplayPartisiImage from '../assets/rak-display-partisi-industrial-besi.png'
import rakGantungIndustrialImage from '../assets/rak-gantung-industrial.png'
import daybedBoneOnlyImage from '../assets/industrial-daybed-boneonly.jpg'

export interface Product {
  id: number
  slug: string
  name: string
  categories: string[]
  price: string
  image: string
}

export const ALL_PRODUCTS: Product[] = [
  // New Arrivals - Original products with specific images
  { id: 1, slug: 'frame-loft-bookshelf', name: 'Frame Loft Bookshelf', categories: ['New Arrivals', 'Storage'], price: 'Rp3.500.000', image: frameLoftBookshelfImage },
  { id: 2, slug: 'balcony-bar-table', name: 'Balcony Bar Table', categories: ['New Arrivals', 'Bar Set', 'Outdoor'], price: 'Rp3.500.000', image: balconyBarTableImage },
  
  // Lounge Set
  { id: 3, slug: 'bench-corner-lounge', name: 'Bench Corner Lounge', categories: ['Lounge Set', 'Sofa Bench'], price: 'Rp2.800.000', image: benchCornerImage },
  
  // Daybed
  { id: 16, slug: 'industrial-daybed-frame', name: 'Industrial Daybed Frame', categories: ['Daybed'], price: 'Rp3.200.000', image: daybedBoneOnlyImage },
  
  // Dining Set
  { id: 4, slug: 'bandung-pipe-dining-table', name: 'Bandung Pipe Dining Table', categories: ['Dining Set', 'Dine Table'], price: 'Rp2.800.000', image: mejaMakanImage },
  { id: 5, slug: 'dining-set-with-2-chairs', name: 'Dining Set with 2 Chairs', categories: ['Dining Set', 'Dine Table'], price: 'Rp4.000.000', image: mejaMakanSetImage },
  
  // Bar Set
  { id: 6, slug: 'beam-industrial-bar-chair', name: 'Beam Industrial Bar Chair', categories: ['Bar Set'], price: 'Rp450.000', image: barChairImage },
  { id: 7, slug: 'bar-stall-chair', name: 'Bar Stall Chair', categories: ['Bar Set'], price: 'Rp450.000', image: kursiBarStallImage },
  { id: 8, slug: 'steelframe-outdoor-bar-set', name: 'Steelframe Outdoor Bar Set', categories: ['Bar Set', 'Outdoor'], price: 'Rp8.150.000', image: steelframeOutdoorBarSetImage },
  
  // Storage
  { id: 9, slug: 'industrial-kitchen-cabinet', name: 'Industrial Kitchen Cabinet', categories: ['Storage'], price: 'Rp4.500.000', image: kabinetDapurImage },
  { id: 10, slug: 'kabinet-lemari-industrial', name: 'Kabinet Lemari Industrial', categories: ['Storage'], price: 'Rp4.500.000', image: kabinetLemariImage },
  { id: 11, slug: 'hollowline-display-rack', name: 'Hollowline Display Rack', categories: ['Storage'], price: 'Rp4.500.000', image: hollowlineDisplayRackImage },
  { id: 12, slug: 'ladder-frame-display-stand', name: 'Ladder Frame Display Stand', categories: ['Storage'], price: 'Rp3.700.000', image: rakDisplayPartisiImage },
  { id: 13, slug: 'industrial-hanging-shelf', name: 'Industrial Hanging Shelf', categories: ['Storage'], price: 'Rp1.200.000', image: rakGantungIndustrialImage },
  { id: 14, slug: 'industrial-coat-rack', name: 'Industrial Coat Rack', categories: ['Storage'], price: 'Rp2.500.000', image: gantunganBajuImage },
  
  // Tables
  { id: 15, slug: 'meja-kerja-industrial', name: 'Meja Kerja Industrial', categories: ['Tables'], price: 'Rp1.400.000', image: mejaKerjaImage },
]

