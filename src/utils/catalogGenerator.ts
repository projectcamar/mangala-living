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

// Get language preference from localStorage
const getLanguagePreference = (): 'id' | 'en' => {
  try {
    const stored = localStorage.getItem('mangala_lang_preference')
    if (stored === 'id' || stored === 'en') {
      return stored
    }
  } catch (error) {
    console.log('Failed to read language preference')
  }
  return 'id' // Default to Indonesian
}

// Bilingual content
const content = {
  id: {
    title1: 'MANGALA',
    title2: 'LIVING',
    subtitle: 'Katalog Furniture Industrial Premium',
    tagline: 'Pilihan terbaik untuk furniture industrial scandinavian premium sejak 1999.',
    workshop: 'Workshop Bekasi',
    address: 'Jl. Raya Setu Cibitung - Bekasi',
    contactTitle: 'Hubungi Kami',
    contactSubtitle: 'Untuk pesanan custom dan informasi lebih lanjut:',
    addressFull1: 'Jl. Raya Setu Cibitung - Bekasi, Telajung',
    addressFull2: 'Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320',
    copyright: 'Copyright 2025 Mangala Living. All rights reserved.',
    continued: '(lanjutan)',
    introPage: {
      title: 'Selamat Datang',
      line1: 'Terima kasih telah mengunduh katalog Mangala Living 2025.',
      line2: 'Temukan koleksi furniture industrial premium kami yang dirancang khusus untuk memenuhi kebutuhan bisnis modern Anda.',
      line3: 'Setiap produk dibuat dengan perhatian pada detail, menggunakan material berkualitas tinggi dan teknik pengelasan profesional.',
      line4: 'Dari cafe, restoran, hingga kantor - kami hadirkan solusi furniture yang menggabungkan estetika industrial dengan fungsionalitas.',
      cta: 'Hubungi kami untuk konsultasi custom dan penawaran khusus.',
    }
  },
  en: {
    title1: 'MANGALA',
    title2: 'LIVING',
    subtitle: 'Premium Industrial Furniture Catalog',
    tagline: 'Your best choice for premium industrial scandinavian furniture since 1999.',
    workshop: 'Workshop Bekasi',
    address: 'Jl. Raya Setu Cibitung - Bekasi',
    contactTitle: 'Contact Us',
    contactSubtitle: 'For custom orders and inquiries:',
    addressFull1: 'Jl. Raya Setu Cibitung - Bekasi, Telajung',
    addressFull2: 'Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320',
    copyright: 'Copyright 2025 Mangala Living. All rights reserved.',
    continued: '(cont.)',
    introPage: {
      title: 'Welcome',
      line1: 'Thank you for downloading the Mangala Living 2025 catalog.',
      line2: 'Discover our premium industrial furniture collection, specially designed to meet the needs of modern businesses.',
      line3: 'Each piece is crafted with attention to detail, using high-quality materials and professional welding techniques.',
      line4: 'From cafes and restaurants to offices - we bring furniture solutions that combine industrial aesthetics with functionality.',
      cta: 'Contact us for custom consultation and special offers.',
    }
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
    
    // Get language preference
    const lang = getLanguagePreference()
    const t = content[lang]
    
    const doc = new jsPDF('p', 'mm', 'a4')
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    
    // Define elegant color scheme
    const colors = {
      darkBg: [30, 41, 59],      // Elegant dark slate
      accent: [139, 115, 85],     // Warm bronze/brown
      lightAccent: [190, 171, 153], // Light taupe
      text: [255, 255, 255],
      darkText: [44, 62, 80],
      price: [139, 115, 85],      // Same as accent
      lightGray: [150, 150, 150]
    }
    
    // ========== COVER PAGE ==========
    doc.setFillColor(...colors.darkBg)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    // Elegant border accent
    doc.setDrawColor(...colors.accent)
    doc.setLineWidth(0.5)
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30, 'S')
    
    doc.setTextColor(...colors.text)
    doc.setFontSize(52)
    doc.setFont('helvetica', 'bold')
    doc.text(t.title1, pageWidth / 2, 90, { align: 'center' })
    
    doc.setFontSize(18)
    doc.setFont('helvetica', 'normal')
    doc.text(t.title2, pageWidth / 2, 105, { align: 'center' })
    
    // Decorative line
    doc.setDrawColor(...colors.accent)
    doc.setLineWidth(0.8)
    doc.line(pageWidth / 2 - 30, 115, pageWidth / 2 + 30, 115)
    
    doc.setFontSize(13)
    doc.setTextColor(...colors.lightAccent)
    doc.setFont('helvetica', 'bold')
    doc.text(t.subtitle, pageWidth / 2, 130, { align: 'center' })
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...colors.text)
    const taglineLines = doc.splitTextToSize(t.tagline, pageWidth - 60)
    doc.text(taglineLines, pageWidth / 2, 145, { align: 'center' })
    
    // Contact info
    doc.setFontSize(10)
    doc.setTextColor(...colors.text)
    doc.text(t.workshop, pageWidth / 2, 175, { align: 'center' })
    doc.setFontSize(9)
    doc.text(t.address, pageWidth / 2, 183, { align: 'center' })
    
    doc.setTextColor(...colors.accent)
    doc.setFont('helvetica', 'bold')
    doc.text('+62 852-1207-8467', pageWidth / 2, 200, { align: 'center' })
    doc.text('info@mangala-living.com', pageWidth / 2, 208, { align: 'center' })
    
    doc.setTextColor(...colors.text)
    doc.setFont('helvetica', 'normal')
    doc.text('www.mangala-living.com', pageWidth / 2, 220, { align: 'center' })
    
    doc.setFontSize(8)
    doc.setTextColor(...colors.lightGray)
    doc.text(t.copyright, pageWidth / 2, 275, { align: 'center' })
    
    // ========== INTRO PAGE ==========
    doc.addPage()
    doc.setFillColor(248, 248, 248)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    // Elegant header
    doc.setFillColor(...colors.darkBg)
    doc.rect(0, 0, pageWidth, 50, 'F')
    doc.setTextColor(...colors.text)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text(t.introPage.title, pageWidth / 2, 32, { align: 'center' })
    
    // Content
    doc.setTextColor(...colors.darkText)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    
    let yPos = 75
    const margin = 25
    const lineHeight = 8
    
    const introLines = [
      t.introPage.line1,
      t.introPage.line2,
      t.introPage.line3,
      t.introPage.line4
    ]
    
    introLines.forEach(line => {
      const wrappedLines = doc.splitTextToSize(line, pageWidth - (margin * 2))
      doc.text(wrappedLines, margin, yPos)
      yPos += wrappedLines.length * lineHeight + 5
    })
    
    yPos += 10
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.accent)
    const ctaLines = doc.splitTextToSize(t.introPage.cta, pageWidth - (margin * 2))
    doc.text(ctaLines, margin, yPos)
    
    // Group products by category
    const productsByCategory: { [key: string]: Product[] } = {}
    ALL_PRODUCTS.forEach((product: Product) => {
      const mainCategory = product.categories[0]
      if (!productsByCategory[mainCategory]) {
        productsByCategory[mainCategory] = []
      }
      productsByCategory[mainCategory].push(product)
    })
    
    // ========== PRODUCT PAGES ==========
    for (const category of Object.keys(productsByCategory)) {
      const products = productsByCategory[category]
      
      doc.addPage()
      
      // Elegant category header
      doc.setFillColor(...colors.darkBg)
      doc.rect(0, 0, pageWidth, 40, 'F')
      doc.setTextColor(...colors.text)
      doc.setFontSize(22)
      doc.setFont('helvetica', 'bold')
      doc.text(category, pageWidth / 2, 25, { align: 'center' })
      
      let yPos = 55
      let xPos = 20
      let itemsInRow = 0
      const itemWidth = 80
      const itemHeight = 95
      const itemsPerRow = 2
      
      for (const product of products) {
        try {
          // Load and add product image with subtle border
          const imgData = await loadImageAsBase64(product.image)
          const imgWidth = 70
          const imgHeight = 52
          
          // Image background
          doc.setFillColor(255, 255, 255)
          doc.roundedRect(xPos + 2, yPos, imgWidth + 2, imgHeight + 2, 2, 2, 'F')
          
          // Add image
          doc.addImage(imgData, 'JPEG', xPos + 3, yPos + 1, imgWidth, imgHeight)
          
          // Product info
          doc.setFontSize(10)
          doc.setFont('helvetica', 'bold')
          doc.setTextColor(...colors.darkText)
          
          // Product name with link
          const productName = product.name.length > 30 ? product.name.substring(0, 27) + '...' : product.name
          const productUrl = `https://mangala-living.com/product/${product.slug}`
          
          // Add clickable link on product name
          doc.textWithLink(productName, xPos + 3, yPos + imgHeight + 8, { url: productUrl })
          doc.setTextColor(...colors.accent)
          doc.setFontSize(7)
          doc.text('(Click to view)', xPos + 3, yPos + imgHeight + 13)
          
          // Price
          doc.setFontSize(12)
          doc.setFont('helvetica', 'bold')
          doc.setTextColor(...colors.price)
          doc.text(product.price, xPos + 3, yPos + imgHeight + 20)
          
          // Categories
          doc.setFontSize(8)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(100, 100, 100)
          const cats = product.categories.slice(0, 2).join(', ')
          doc.text(cats.length > 30 ? cats.substring(0, 27) + '...' : cats, xPos + 3, yPos + imgHeight + 26)
          
          itemsInRow++
          
          // Move to next position
          if (itemsInRow >= itemsPerRow) {
            yPos += itemHeight + 12
            xPos = 20
            itemsInRow = 0
            
            // Check if we need new page
            if (yPos > 215) {
              doc.addPage()
              
              // Repeat category header
              doc.setFillColor(...colors.darkBg)
              doc.rect(0, 0, pageWidth, 40, 'F')
              doc.setTextColor(...colors.text)
              doc.setFontSize(22)
              doc.setFont('helvetica', 'bold')
              doc.text(category + ' ' + t.continued, pageWidth / 2, 25, { align: 'center' })
              
              yPos = 55
            }
          } else {
            xPos += itemWidth + 15
          }
        } catch (error) {
          console.error(`Failed to load image for ${product.name}:`, error)
        }
      }
      
      // Elegant footer
      doc.setDrawColor(...colors.lightAccent)
      doc.setLineWidth(0.3)
      doc.line(30, 282, pageWidth - 30, 282)
      doc.setFontSize(9)
      doc.setTextColor(...colors.darkText)
      doc.setFont('helvetica', 'normal')
      doc.textWithLink('www.mangalaliving.com', pageWidth / 2, 287, { 
        align: 'center',
        url: 'https://mangala-living.com'
      })
    }
    
    // ========== CONTACT PAGE ==========
    doc.addPage()
    doc.setFillColor(...colors.darkBg)
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    // Elegant border
    doc.setDrawColor(...colors.accent)
    doc.setLineWidth(0.5)
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30, 'S')
    
    doc.setTextColor(...colors.text)
    doc.setFontSize(30)
    doc.setFont('helvetica', 'bold')
    doc.text(t.contactTitle, pageWidth / 2, 80, { align: 'center' })
    
    // Decorative line
    doc.setDrawColor(...colors.accent)
    doc.setLineWidth(0.8)
    doc.line(pageWidth / 2 - 30, 90, pageWidth / 2 + 30, 90)
    
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.text(t.contactSubtitle, pageWidth / 2, 105, { align: 'center' })
    
    doc.setFontSize(15)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.accent)
    doc.textWithLink('+62 852-1207-8467', pageWidth / 2, 125, { 
      align: 'center',
      url: 'https://wa.me/6285212078467'
    })
    doc.textWithLink('info@mangala-living.com', pageWidth / 2, 140, { 
      align: 'center',
      url: 'mailto:info@mangala-living.com'
    })
    
    doc.setTextColor(...colors.text)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text(t.workshop, pageWidth / 2, 165, { align: 'center' })
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text(t.addressFull1, pageWidth / 2, 175, { align: 'center' })
    doc.text(t.addressFull2, pageWidth / 2, 183, { align: 'center' })
    
    doc.setFontSize(13)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...colors.accent)
    doc.textWithLink('www.mangalaliving.com', pageWidth / 2, 205, { 
      align: 'center',
      url: 'https://mangala-living.com'
    })
    
    doc.setFontSize(8)
    doc.setTextColor(...colors.lightGray)
    doc.text(t.copyright, pageWidth / 2, 275, { align: 'center' })
    
    // Save PDF with language suffix
    const fileName = lang === 'id' 
      ? 'Katalog-Mangala-Living-2025.pdf'
      : 'Mangala-Living-Catalog-2025.pdf'
    doc.save(fileName)
  } catch (error) {
    console.error('Error generating catalog:', error)
    throw error
  }
}
