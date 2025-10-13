import React from 'react'
import { Link } from 'react-router-dom'
import './CategoriesSection.css'

// Import images
import benchImage from '../assets/Bench-corner-kursi-sudut-kursi-santai.png'
import mejaImage from '../assets/meja-industrial-mejamakan.png'
import mejaMakanImage from '../assets/Meja-makan-industrial-150x60x90-2 kursi.png'
import mejaKerjaImage from '../assets/Meja-Kerja-Rak-Meja-Belajar-custom.png'
import balconyBarImage from '../assets/balcony-bar-table.png'
import barChairImage from '../assets/Kursi-Barstool-Besi-Behel.png'
import hollowlineDisplayRackImage from '../assets/Hollowline-Display-Rack.png'
import frameLoftBookshelfImage from '../assets/frame-Loft-Bookshelf.png'
import daybedImage from '../assets/industrial-daybed-boneonly.jpg'

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
    image: benchImage, // Bench Corner Lounge - sesuai kategori lounge
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

const CategoriesSection: React.FC = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="categories-title">Our Categories</h2>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link} 
              className="category-card"
            >
              <div className="category-image-wrapper">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                  loading="lazy"
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

