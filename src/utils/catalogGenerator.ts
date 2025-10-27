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

export const generateCatalog = async () => {
  try {
    // Load PDF dependencies only when needed
    await loadPDFDependencies()
    
    const doc = new jsPDF('p', 'mm', 'a4')
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    
    // Hero Page
    doc.setFillColor(44, 62, 80)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(48)
    doc.setFont('helvetica', 'normal')
    doc.text('MANGALA', pageWidth / 2, 80, { align: 'center' })
    
    doc.setFontSize(16)
    doc.text('LIVING', pageWidth / 2, 95, { align: 'center' })
    
    doc.setFontSize(12)
    doc.setTextColor(200, 200, 200)
    doc.text('Premium Industrial Furniture Catalog', pageWidth / 2, 120, { align: 'center' })
    
    doc.setFontSize(10)
    doc.setTextColor(180, 180, 180)
    doc.text('Your best choice for premium industrial scandinavian furniture since 1999.', pageWidth / 2, 135, { align: 'center' })
    
    doc.setFontSize(9)
    doc.setTextColor(255, 255, 255)
    doc.text('Workshop Bekasi', pageWidth / 2, 160, { align: 'center' })
    doc.text('Jl. Raya Setu Cibitung - Bekasi', pageWidth / 2, 168, { align: 'center' })
    
    doc.setTextColor(52, 152, 219)
    doc.text('+62 852-1207-8467', pageWidth / 2, 190, { align: 'center' })
    doc.text('info@mangalaliving.com', pageWidth / 2, 198, { align: 'center' })
    
    doc.setTextColor(255, 255, 255)
    doc.text('www.mangala-living.com', pageWidth / 2, 210, { align: 'center' })
    
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 150)
    doc.text('© 2025 Mangala Living. All rights reserved.', pageWidth / 2, 280, { align: 'center' })
    
    // Group products by category
    const productsByCategory: { [key: string]: Product[] } = {}
    ALL_PRODUCTS.forEach((product: Product) => {
      const mainCategory = product.categories[0]
      if (!productsByCategory[mainCategory]) {
        productsByCategory[mainCategory] = []
      }
      productsByCategory[mainCategory].push(product)
    })
    
    // Products with images
    for (const category of Object.keys(productsByCategory)) {
      const products = productsByCategory[category]
      
      // Add page for category
      doc.addPage()
      
      // Category title
      doc.setFillColor(44, 62, 80)
      doc.rect(0, 0, pageWidth, 30, 'F')
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(20)
      doc.setFont('helvetica', 'bold')
      doc.text(category, pageWidth / 2, 20, { align: 'center' })
      
      let yPos = 45
      let xPos = 15
      let itemsInRow = 0
      const itemWidth = 85
      const itemHeight = 90 // Increased height to prevent overlap
      const itemsPerRow = 2
      
      for (const product of products) {
        try {
          // Load and add product image
          const imgData = await loadImageAsBase64(product.image)
          const imgWidth = 75
          const imgHeight = 55
          
          // Add image
          doc.addImage(imgData, 'JPEG', xPos + 5, yPos, imgWidth, imgHeight)
          
          // Add product info below image
          doc.setFontSize(10)
          doc.setFont('helvetica', 'bold')
          doc.setTextColor(44, 62, 80)
          
          // Product name (wrap if too long)
          const productName = product.name.length > 35 ? product.name.substring(0, 32) + '...' : product.name
          doc.text(productName, xPos + 5, yPos + imgHeight + 8)
          
          // Price
          doc.setFontSize(11)
          doc.setFont('helvetica', 'bold')
          doc.setTextColor(52, 152, 219)
          doc.text(product.price, xPos + 5, yPos + imgHeight + 16)
          
          // Categories
          doc.setFontSize(8)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(100, 100, 100)
          const cats = product.categories.slice(0, 2).join(', ')
          doc.text(cats.length > 38 ? cats.substring(0, 35) + '...' : cats, xPos + 5, yPos + imgHeight + 22)
          
          itemsInRow++
          
          // Move to next position
          if (itemsInRow >= itemsPerRow) {
            yPos += itemHeight + 10
            xPos = 15
            itemsInRow = 0
            
            // Check if we need new page (leave space for footer)
            if (yPos > 220) {
              doc.addPage()
              
              // Repeat category title
              doc.setFillColor(44, 62, 80)
              doc.rect(0, 0, pageWidth, 30, 'F')
              doc.setTextColor(255, 255, 255)
              doc.setFontSize(20)
              doc.setFont('helvetica', 'bold')
              doc.text(category + ' (cont.)', pageWidth / 2, 20, { align: 'center' })
              
              yPos = 45
            }
          } else {
            xPos += itemWidth + 10
          }
        } catch (error) {
          console.error(`Failed to load image for ${product.name}:`, error)
          // Continue with next product even if image fails
        }
      }
      
      // Add footer with website on each category page
      doc.setFontSize(9)
      doc.setTextColor(100, 100, 100)
      doc.text('www.mangala-living.com', pageWidth / 2, 285, { align: 'center' })
    }
    
    // Contact page
    doc.addPage()
    doc.setFillColor(44, 62, 80)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(28)
    doc.setFont('helvetica', 'bold')
    doc.text('Contact Us', pageWidth / 2, 80, { align: 'center' })
    
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.text('For custom orders and inquiries:', pageWidth / 2, 100, { align: 'center' })
    
    doc.setFontSize(14)
    doc.setTextColor(52, 152, 219)
    doc.text('+62 852-1207-8467', pageWidth / 2, 120, { align: 'center' })
    doc.text('info@mangalaliving.com', pageWidth / 2, 135, { align: 'center' })
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(10)
    doc.text('Workshop Bekasi', pageWidth / 2, 160, { align: 'center' })
    doc.setFontSize(9)
    doc.text('Jl. Raya Setu Cibitung - Bekasi, Telajung', pageWidth / 2, 170, { align: 'center' })
    doc.text('Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320', pageWidth / 2, 178, { align: 'center' })
    
    doc.setFontSize(12)
    doc.setTextColor(52, 152, 219)
    doc.text('www.mangala-living.com', pageWidth / 2, 200, { align: 'center' })
    
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 150)
    doc.text('© 2025 Mangala Living. All rights reserved.', pageWidth / 2, 280, { align: 'center' })
    
    // Save PDF
    doc.save('Mangala-Living-Catalog-2025.pdf')
  } catch (error) {
    console.error('Error generating catalog:', error)
    throw error
  }
}
