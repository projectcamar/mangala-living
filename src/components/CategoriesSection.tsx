import React from 'react'
import { Link } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'
import './CategoriesSection.css'

interface CategoriesSectionProps {
  isIndonesian?: boolean
}

// Use dynamic URL imports for better code splitting - images load on demand
const benchImage = new URL('../assets/Bench-corner-kursi-sudut-kursi-santai.webp', import.meta.url).href
const mejaImage = new URL('../assets/meja-industrial-mejamakan.webp', import.meta.url).href
const mejaMakanImage = new URL('../assets/Meja-makan-industrial-150x60x90-2 kursi.webp', import.meta.url).href
const mejaKerjaImage = new URL('../assets/Meja-Kerja-Rak-Meja-Belajar-custom.webp', import.meta.url).href
const balconyBarImage = new URL('../assets/balcony-bar-table.webp', import.meta.url).href
const barChairImage = new URL('../assets/Kursi-Barstool-Besi-Behel.webp', import.meta.url).href
const hollowlineDisplayRackImage = new URL('../assets/Hollowline-Display-Rack.webp', import.meta.url).href
const frameLoftBookshelfImage = new URL('../assets/frame-Loft-Bookshelf.webp', import.meta.url).href
const daybedImage = new URL('../assets/industrial-daybed-boneonly.webp', import.meta.url).href
const loungeSetCoffeeTableImage = new URL('../assets/longue-set-coffee-table.webp', import.meta.url).href

interface Category {
  id: number
  name: string
  image: string
  link: string
}

const categories: Category[] = [
  {
    id: 1,
    name: 'New Arrivals',
    image: frameLoftBookshelfImage, // Frame Loft Bookshelf - produk new arrivals
    link: '/product-category/new-arrivals'
  },
  {
    id: 2,
    name: 'Lounge Set',
    image: loungeSetCoffeeTableImage, // Lounge Set Coffee Table - sesuai kategori lounge
    link: '/product-category/lounge-seating-set'
  },
  {
    id: 3,
    name: 'Sofa Bench',
    image: benchImage, // Bench Corner - sesuai kategori sofa bench
    link: '/product-category/industrial-sofa-bench'
  },
  {
    id: 4,
    name: 'Dining Set',
    image: mejaMakanImage, // Meja makan dengan 2 kursi - sesuai dining set
    link: '/product-category/dining-set-collection'
  },
  {
    id: 5,
    name: 'Bar Set',
    image: barChairImage, // Bar Chair - sesuai kategori bar
    link: '/product-category/bar-furniture-collection'
  },
  {
    id: 6,
    name: 'Outdoor',
    image: balconyBarImage, // Balcony Bar Table - sesuai outdoor
    link: '/product-category/balcony-outdoor-collection'
  },
  {
    id: 7,
    name: 'Daybed',
    image: daybedImage, // Industrial Daybed Frame - sesuai kategori daybed
    link: '/product-category/daybed-lounge-frame'
  },
  {
    id: 8,
    name: 'Storage',
    image: hollowlineDisplayRackImage, // Display Rack - sesuai storage
    link: '/product-category/accessories-storage'
  },
  {
    id: 9,
    name: 'Tables',
    image: mejaKerjaImage, // Meja Kerja - sesuai kategori tables
    link: '/product-category/table-collection'
  },
  {
    id: 10,
    name: 'Dine Table',
    image: mejaImage, // Meja makan industrial - sesuai dine table
    link: '/product-category/dining-table-collection'
  }
]

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ isIndonesian = false }) => {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="categories-title">
          {isIndonesian ? "Kategori Produk Kami" : "Our Categories"}
        </h2>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link} 
              className="category-card"
              onClick={() => trackEvent.categoryClick(category.name)}
            >
              <div className="category-image-wrapper">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection

