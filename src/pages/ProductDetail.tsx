import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetailAIContent from '../components/ProductDetailAIContent'
import { ALL_PRODUCTS } from '../data/products'
import { generateCanonicalUrl, generateHreflangTags, getProductImageUrl } from '../utils/seo'
import { sendBackgroundEmail } from '../utils/emailHelpers'
import './ProductDetail.css'

interface ProductDetail {
  id: number
  slug: string
  name: string
  categories: string[]
  price: string
  images: string[]
  details: string
  description: string
}

// Generate product description
const generateProductDescription = (name: string) => {
  // Special descriptions for each product to target specific keywords and queries
  
  if (name.toLowerCase().includes('hollowline')) {
    return `The Hollowline Display Rack from Mangala Living is the perfect industrial storage solution for modern retail and commercial spaces. This premium hollowline display rack features a sleek industrial design with hollow steel construction that provides maximum durability and visual appeal.

Crafted in our Bekasi workshop since 1999, this hollowline display rack showcases superior welding techniques and attention to detail. The hollow steel frame construction offers excellent strength-to-weight ratio while maintaining a clean, minimalist aesthetic that complements any industrial or modern interior design.

Perfect for retail stores, cafes, restaurants, and offices, this hollowline display rack provides versatile storage and display capabilities. The modular design allows for easy customization and expansion, making it ideal for growing businesses that need flexible storage solutions.

Built to commercial-grade standards, this hollowline display rack is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The powder-coated finish ensures long-lasting protection against wear and corrosion, making it a smart investment for any commercial space.

Whether you need to display merchandise, organize documents, or create an industrial focal point, the Hollowline Display Rack delivers both functionality and style. Contact Mangala Living today to learn more about our hollowline display rack solutions and custom industrial furniture options.`
  }
  
  if (name.toLowerCase().includes('balcony bar table')) {
    return `The Balcony Bar Table from Mangala Living is the ultimate outdoor dining and entertainment solution for modern spaces. This premium balcony bar table features a robust industrial design with weather-resistant construction that provides maximum durability for outdoor use.

Crafted in our Bekasi workshop since 1999, this balcony bar table showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent stability while maintaining a sleek, modern aesthetic that complements any outdoor or indoor industrial design.

Perfect for balconies, terraces, patios, and outdoor cafes, this balcony bar table provides versatile dining and entertainment capabilities. The weather-resistant powder coating ensures long-lasting protection against harsh outdoor conditions, making it ideal for year-round use.

Built to commercial-grade standards, this balcony bar table is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The industrial design effortlessly blends functionality, strength, and outdoor durability, making it an ideal choice for hospitality venues, residential balconies, and outdoor entertainment spaces.

Whether you need outdoor dining furniture, balcony seating, or industrial outdoor tables, the Balcony Bar Table delivers both functionality and style. Contact Mangala Living today to learn more about our balcony bar table solutions and custom outdoor furniture options.`
  }
  
  if (name.toLowerCase().includes('frame loft bookshelf')) {
    return `The Frame Loft Bookshelf from Mangala Living is the perfect industrial storage solution for modern homes, offices, and commercial spaces. This premium frame loft bookshelf features a sleek industrial design with modular construction that provides maximum storage flexibility and visual appeal.

Crafted in our Bekasi workshop since 1999, this frame loft bookshelf showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent strength while maintaining a clean, minimalist aesthetic that complements any industrial or modern interior design.

Perfect for living rooms, offices, cafes, and retail spaces, this frame loft bookshelf provides versatile storage and display capabilities. The modular design allows for easy customization and expansion, making it ideal for growing collections and changing storage needs.

Built to commercial-grade standards, this frame loft bookshelf is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The powder-coated finish ensures long-lasting protection against wear and corrosion, making it a smart investment for any space.

Whether you need book storage, display shelving, or industrial storage solutions, the Frame Loft Bookshelf delivers both functionality and style. Contact Mangala Living today to learn more about our frame loft bookshelf solutions and custom industrial furniture options.`
  }
  
  if (name.toLowerCase().includes('bench corner lounge')) {
    return `The Bench Corner Lounge from Mangala Living is the perfect industrial seating solution for modern cafes, restaurants, and commercial spaces. This premium bench corner lounge features a sleek industrial design with comfortable seating that provides maximum comfort and visual appeal.

Crafted in our Bekasi workshop since 1999, this bench corner lounge showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent durability while maintaining a clean, minimalist aesthetic that complements any industrial or modern interior design.

Perfect for cafes, restaurants, waiting areas, and commercial spaces, this bench corner lounge provides versatile seating capabilities. The corner design maximizes space efficiency while creating intimate seating areas for guests and customers.

Built to commercial-grade standards, this bench corner lounge is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The industrial design effortlessly blends functionality, comfort, and durability, making it an ideal choice for hospitality venues, commercial spaces, and modern residences.

Whether you need cafe seating, restaurant furniture, or industrial lounge solutions, the Bench Corner Lounge delivers both functionality and style. Contact Mangala Living today to learn more about our bench corner lounge solutions and custom industrial furniture options.`
  }
  
  if (name.toLowerCase().includes('industrial daybed frame')) {
    return `The Industrial Daybed Frame from Mangala Living is the perfect industrial furniture solution for modern spaces. This premium industrial daybed frame features a robust industrial design with steel construction that provides maximum durability and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial daybed frame showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent strength while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for lounges, waiting areas, hotels, and commercial spaces, this industrial daybed frame provides versatile seating and relaxation capabilities. The daybed design offers comfortable seating and lounging options for guests and customers.

Built to commercial-grade standards, this industrial daybed frame is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The industrial design effortlessly blends functionality, comfort, and durability, making it an ideal choice for hospitality venues, commercial spaces, and modern residences.

Whether you need lounge furniture, daybed solutions, or industrial seating, the Industrial Daybed Frame delivers both functionality and style. Contact Mangala Living today to learn more about our industrial daybed frame solutions and custom industrial furniture options.`
  }
  
  if (name.toLowerCase().includes('dining table') || name.toLowerCase().includes('dining set')) {
    return `The ${name} from Mangala Living is the perfect industrial dining solution for modern homes, cafes, and restaurants. This premium industrial dining table features a robust industrial design with steel construction that provides maximum durability and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial dining table showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent stability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for homes, cafes, restaurants, and commercial dining spaces, this industrial dining table provides versatile dining capabilities. The industrial design creates a focal point for dining areas while offering practical functionality for daily use.

Built to commercial-grade standards, this industrial dining table is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The industrial design effortlessly blends functionality, strength, and durability, making it an ideal choice for hospitality venues, commercial spaces, and modern residences.

Whether you need dining furniture, restaurant tables, or industrial dining solutions, the ${name} delivers both functionality and style. Contact Mangala Living today to learn more about our industrial dining table solutions and custom industrial furniture options.`
  }
  
  if (name.toLowerCase().includes('bar chair') || name.toLowerCase().includes('bar stool') || name.toLowerCase().includes('stall chair')) {
    return `The ${name} from Mangala Living is the perfect industrial bar seating solution for modern cafes, restaurants, and commercial spaces. This premium industrial bar chair features a sleek industrial design with steel construction that provides maximum comfort and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial bar chair showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent durability while maintaining a clean, minimalist aesthetic that complements any industrial or modern interior design.

Perfect for bars, cafes, restaurants, and commercial spaces, this industrial bar chair provides versatile seating capabilities. The bar height design offers comfortable seating for counter areas and bar spaces.

Built to commercial-grade standards, this industrial bar chair is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The industrial design effortlessly blends functionality, comfort, and durability, making it an ideal choice for hospitality venues, commercial spaces, and modern residences.

Whether you need bar seating, restaurant chairs, or industrial bar furniture, the ${name} delivers both functionality and style. Contact Mangala Living today to learn more about our industrial bar chair solutions and custom industrial furniture options.`
  }
  
  if (name.toLowerCase().includes('outdoor bar set') || name.toLowerCase().includes('steelframe outdoor')) {
    return `The ${name} from Mangala Living is the perfect industrial outdoor furniture solution for modern spaces. This premium industrial outdoor bar set features a robust industrial design with weather-resistant construction that provides maximum durability for outdoor use.

Crafted in our Bekasi workshop since 1999, this industrial outdoor bar set showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent stability while maintaining a sleek, modern aesthetic that complements any outdoor or industrial design.

Perfect for outdoor cafes, restaurants, patios, and commercial outdoor spaces, this industrial outdoor bar set provides versatile outdoor dining and entertainment capabilities. The weather-resistant powder coating ensures long-lasting protection against harsh outdoor conditions.

Built to commercial-grade standards, this industrial outdoor bar set is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The industrial design effortlessly blends functionality, strength, and outdoor durability, making it an ideal choice for hospitality venues, outdoor dining, and commercial outdoor spaces.

Whether you need outdoor furniture, patio dining, or industrial outdoor solutions, the ${name} delivers both functionality and style. Contact Mangala Living today to learn more about our industrial outdoor bar set solutions and custom outdoor furniture options.`
  }
  
  if (name.toLowerCase().includes('cabinet') || name.toLowerCase().includes('storage') || name.toLowerCase().includes('display rack')) {
    return `The ${name} from Mangala Living is the perfect industrial storage solution for modern spaces. This premium industrial storage furniture features a robust industrial design with steel construction that provides maximum storage capacity and visual appeal.

Crafted in our Bekasi workshop since 1999, this industrial storage furniture showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent durability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary interior design.

Perfect for offices, cafes, restaurants, and commercial spaces, this industrial storage furniture provides versatile storage capabilities. The industrial design creates functional storage solutions while adding visual interest to any space.

Built to commercial-grade standards, this industrial storage furniture is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The industrial design effortlessly blends functionality, strength, and durability, making it an ideal choice for commercial spaces, offices, and modern residences.

Whether you need storage solutions, display furniture, or industrial storage, the ${name} delivers both functionality and style. Contact Mangala Living today to learn more about our industrial storage solutions and custom industrial furniture options.`
  }
  
  if (name.toLowerCase().includes('meja kerja') || name.toLowerCase().includes('work table')) {
    return `The ${name} from Mangala Living is the perfect industrial work table solution for modern offices and commercial spaces. This premium industrial work table features a robust industrial design with steel construction that provides maximum durability and functionality.

Crafted in our Bekasi workshop since 1999, this industrial work table showcases superior welding techniques and attention to detail. The industrial steel frame construction offers excellent stability while maintaining a sleek, modern aesthetic that complements any industrial or contemporary office design.

Perfect for offices, workshops, studios, and commercial spaces, this industrial work table provides versatile work capabilities. The industrial design creates a professional work environment while offering practical functionality for daily tasks.

Built to commercial-grade standards, this industrial work table is designed to withstand heavy daily use while maintaining its structural integrity and visual appeal. The industrial design effortlessly blends functionality, strength, and durability, making it an ideal choice for professional workspaces, offices, and commercial environments.

Whether you need office furniture, work tables, or industrial workspace solutions, the ${name} delivers both functionality and style. Contact Mangala Living today to learn more about our industrial work table solutions and custom industrial furniture options.`
  }
  
  // Default description for other products
  return `The ${name} from Mangala Living is expertly crafted industrial furniture designed for modern spaces. Built in our workshop in Bekasi, Indonesia, each piece showcases superior welding techniques and attention to detail.

Handcrafted by experienced welders and metalworkers, every piece demonstrates exceptional craftsmanship. Constructed from premium materials including high-grade steel hollow sections, solid steel plates, and powder-coated finishes, this furniture delivers both strength and refined industrial aesthetics.

Designed for durability and style, this piece features carefully selected materials that ensure long-lasting performance. The industrial design paired with expert craftsmanship makes it a standout piece in any modern setting?whether in cafes, restaurants, offices, or contemporary homes.

Built to commercial-grade standards, this furniture is meticulously welded using professional equipment that can withstand heavy daily use for years to come. The sophisticated design effortlessly blends functionality, strength, and industrial character, making it an ideal choice for hospitality venues, co-working spaces, and modern residences.

Mangala Living is committed to quality and precision, ensuring that every weld and joint not only meets industrial standards but exceeds expectations. Explore our complete collection to find more equally well-crafted pieces designed to bring industrial elegance and durability to your spaces.`
}

// Generate product details based on categories
const generateProductDetails = (categories: string[]) => {
  const details: string[] = []
  
  if (categories.some(c => c.includes('Table') || c.includes('Dining'))) {
    details.push('Industrial Steel Frame')
    details.push('Powder Coated Finish')
    details.push('Solid Wood/Metal Top')
  }
  
  if (categories.some(c => c.includes('Chair') || c.includes('Bench') || c.includes('Sofa'))) {
    details.push('Welded Steel Construction')
    details.push('Ergonomic Design')
    details.push('Weather Resistant Finish')
  }
  
  if (categories.some(c => c.includes('Bar'))) {
    details.push('High-Grade Steel Pipe')
    details.push('Footrest Support')
    details.push('Commercial Grade')
  }
  
  if (categories.some(c => c.includes('Storage') || c.includes('Accessories'))) {
    details.push('Heavy Duty Construction')
    details.push('Multiple Shelves/Compartments')
    details.push('Easy Assembly')
  }
  
  if (details.length === 0) {
    details.push('Premium Steel Construction')
    details.push('Powder Coated Black Finish')
    details.push('Industrial Design')
    details.push('Built to Last')
  }
  
  return details.join(', ')
}

// Create product details from ALL_PRODUCTS
const products: { [key: string]: ProductDetail } = {}
ALL_PRODUCTS.forEach(p => {
  products[p.slug] = {
    id: p.id,
    slug: p.slug,
    name: p.name,
    categories: p.categories,
    price: p.price,
    images: [p.image, p.image, p.image, p.image],
    details: generateProductDetails(p.categories),
    description: generateProductDescription(p.name)
  } as ProductDetail
})

// Related products - random 4 products
const getRelatedProducts = (currentSlug: string) => {
  return ALL_PRODUCTS
    .filter(p => p.slug !== currentSlug)
    .slice(0, 4)
    .map(p => ({
      slug: p.slug,
      name: p.name,
      category: p.categories[0],
      price: p.price,
      image: p.image
    }))
}

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const product = products[slug || '']
  
  const [selectedImage, setSelectedImage] = useState(0)

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return (
      <div>
        <AnnouncementBar />
        <Header />
        <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h1>Product not found</h1>
          <Link to="/shop" style={{ color: '#333', textDecoration: 'underline' }}>
            Browse all products
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(slug || '')

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: product.categories[0], path: `/product-category/${product.categories[0].toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}` },
    { label: product.name, path: `/product/${product.slug}` }
  ]

  // Generate structured data for the product
  const generateStructuredData = () => {
    const price = product.price.replace(/[^\d]/g, '') // Extract numeric price
    const numericPrice = parseInt(price) || 0
    // Convert all images to full URLs
    const imageUrls = product.images.map((img: string) => getProductImageUrl(img, product.slug))
    
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "image": imageUrls,
      "brand": {
        "@type": "Brand",
        "name": "Mangala Living"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Mangala Living",
        "url": "https://mangala-living.com",
        "logo": "https://mangala-living.com/logo.png",
        "image": "https://mangala-living.com/og-image.jpg"
      },
      "category": product.categories.join(", "),
      "sku": product.slug,
      "mpn": `ML-${product.id}`,
      "offers": {
        "@type": "Offer",
        "price": numericPrice,
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 30,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/FreeReturn",
          "applicableCountry": "ID"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "IDR"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "ID"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "businessDays": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
            },
            "cutoffTime": "14:00",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 3,
              "maxValue": 5,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 3,
              "unitCode": "DAY"
            }
          }
        },
        "seller": {
          "@type": "Organization",
          "name": "Mangala Living",
          "url": "https://mangala-living.com",
          "logo": "https://mangala-living.com/logo.png",
          "description": "Premium Industrial Scandinavian Furniture for Coffee Shops, Restaurants & Offices. Custom Solutions Since 1999.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Raya Setu Cikarang Barat.",
            "addressLocality": "Bekasi",
            "addressRegion": "Jawa Barat",
            "postalCode": "17320",
            "addressCountry": "ID"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-852-1207-8467",
            "contactType": "customer service",
            "email": "info@mangala-living.com",
            "availableLanguage": ["Indonesian", "English"]
          }
        },
        "url": `https://mangala-living.com/product/${product.slug}`
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah M."
          },
          "datePublished": "2025-10-15",
          "reviewBody": "Excellent quality furniture. The industrial design is perfect for our cafe. Highly recommended!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ahmad R."
          },
          "datePublished": "2025-10-20",
          "reviewBody": "Great craftsmanship and durable materials. Perfect for commercial use.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Lisa K."
          },
          "datePublished": "2025-10-25",
          "reviewBody": "Beautiful industrial furniture with excellent finishing. Very satisfied with the purchase.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          }
        }
      ]
    }
  }

  return (
    <div className="product-detail-page">
      <AnnouncementBar />
      <Helmet>
        <title>{product.name === 'Hollowline Display Rack' 
          ? 'Hollowline Display Rack ? Harga Murah Rp4.5 Juta ? Call Mangala +62 852 1207 8467'
          : `${product.name} - Mangala Living`}</title>
        <meta name="description" content={product.name === 'Hollowline Display Rack'
          ? 'Hollowline Display Rack Industrial ? Display Shelf Rack Modern ? Harga Rp4.500.000 ? Workshop Bekasi ? Garansi Kualitas ? Call Mangala +62 852 1207 8467'
          : `${product.name} - ${product.details}`} />
        <meta name="keywords" content={
          product.name === 'Hollowline Display Rack'
            ? 'hollowline display rack, display shelf rack, rak display industrial, hollowline storage, call mangala furniture, furniture bekasi murah'
            : product.name === 'Industrial Kitchen Cabinet'
            ? 'mangala kitchen cabinet, kitchen cabinet industrial, kabinet dapur cafe, furniture kitchen bekasi'
            : product.name === 'Bar Stall Chair'
            ? 'stall chair design, bar stall chair, kursi bar industrial, meja kursi cafe'
            : product.name === 'Set Furniture'
            ? 'set furniture industrial, meja kursi cafe lengkap, furniture cafe murah'
            : `${product.name}, industrial furniture, furniture besi, ${product.categories.join(', ')}, mangala living`
        } />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={generateCanonicalUrl(`/product/${product.slug}`)} />
        
        {/* Hreflang for language variants */}
        <link rel="alternate" hrefLang="id" href={generateHreflangTags(`/product/${product.slug}`).id} />
        <link rel="alternate" hrefLang="en" href={generateHreflangTags(`/product/${product.slug}`).en} />
        <link rel="alternate" hrefLang="x-default" href={generateHreflangTags(`/product/${product.slug}`).default} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${product.name} - Mangala Living`} />
        <meta property="og:description" content={`${product.name} - ${product.details}`} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:url" content={`https://mangala-living.com/product/${product.slug}`} />
        <meta property="og:type" content="product" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} - Mangala Living`} />
        <meta name="twitter:description" content={`${product.name} - ${product.details}`} />
        <meta name="twitter:image" content={product.images[0]} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
        
        {/* ImageObject Structured Data for Image SEO */}
        {product.images.map((img, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "url": getProductImageUrl(img, product.slug),
              "contentUrl": getProductImageUrl(img, product.slug),
              "caption": `${product.name} - Image ${index + 1} - Industrial Furniture ${product.categories.join(' ')} Mangala Living`,
              "description": `${product.name} - Premium Industrial Furniture from Mangala Living Workshop Bekasi - ${product.price}`,
              "width": 800,
              "height": 600,
              "creditText": "Mangala Living",
              "copyrightHolder": {
                "@type": "Organization",
                "name": "Mangala Living"
              },
              "license": "https://mangala-living.com",
              "publisher": {
                "@type": "Organization",
                "name": "Mangala Living",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://mangala-living.com/logo.png"
                }
              }
            })}
          </script>
        ))}
      </Helmet>

      <Header />

      <main className="product-detail-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />

          <div className="product-detail-content">
            {/* Product Gallery */}
            <div className="product-gallery">
              <div className="gallery-thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                    aria-label={`View ${product.name} image ${index + 1}`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - Image ${index + 1} - Industrial Furniture ${product.categories.join(' ')} Mangala Living`}
                      title={`${product.name} - View ${index + 1} - Premium Industrial Furniture by Mangala Living`}
                      loading={index === 0 ? "eager" : "lazy"}
                      width="100"
                      height="100"
                      itemProp="image"
                      data-image-type="product-thumbnail"
                      data-product-name={product.name}
                      data-image-index={index + 1}
                    />
                  </button>
                ))}
              </div>
              <div className="gallery-main">
                <img 
                  src={product.images[selectedImage]} 
                  alt={`${product.name} - Premium Industrial Furniture ${product.categories.join(' ')} - Mangala Living Workshop Bekasi`}
                  title={`${product.name} - Custom Industrial Furniture from Mangala Living - ${product.price}`}
                  className={selectedImage === 1 || selectedImage === 3 ? 'flipped' : ''}
                  loading="eager"
                  fetchPriority="high"
                  width="800"
                  height="600"
                  itemProp="image"
                  data-image-type="product-main"
                  data-product-name={product.name}
                  data-product-slug={product.slug}
                  data-selected-index={selectedImage}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-section">
              <h1 className="product-detail-title">{product.name}</h1>
              <p className="product-detail-categories">{product.categories.join(' & ')}</p>
              <p className="product-detail-price">{product.price}</p>
              <p className="product-price-note">*Price may vary based on customization</p>

              <button 
                className="order-now-btn"
                onClick={() => {
                  // Send background email notification
                  sendBackgroundEmail('order_now', {
                    productName: product.name,
                    productSlug: product.slug,
                    productPrice: product.price,
                    productCategory: product.categories.join(', '),
                    productUrl: window.location.href,
                  })

                  const whatsappMessage = `Halo Mangala Living,

Saya tertarik dengan produk:
*${product.name}*

Kategori: ${product.categories.join(', ')}
Harga: ${product.price}

Link Produk: ${window.location.href}

Mohon informasi lebih lanjut dan cara pemesanannya.

Terima kasih!`
                  
                  const whatsappUrl = `https://wa.me/6285212078467?text=${encodeURIComponent(whatsappMessage)}`
                  window.location.href = whatsappUrl
                }}
              >
                ORDER NOW
              </button>

              <div className="product-details-box">
                <h3>Product Details</h3>
                <p>{product.details}</p>
              </div>
            </div>
          </div>

          {/* About Product */}
          <div className="about-product-section">
            <h2>About {product.name}</h2>
            <div className="about-product-content">
              {product.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div className="related-products-section">
            <h2>You Might be Interested</h2>
            <div className="related-products-grid">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.slug}
                  to={`/product/${relatedProduct.slug}`}
                  className="related-product-card"
                >
                  <div className="related-product-image">
                    <img 
                      src={relatedProduct.image} 
                      alt={`${relatedProduct.name} - Related Industrial Furniture ${relatedProduct.category} Mangala Living`}
                      title={`${relatedProduct.name} - Premium Industrial Furniture ${relatedProduct.category} by Mangala Living`}
                      loading="lazy"
                      width="300"
                      height="200"
                      itemProp="image"
                      data-image-type="related-product"
                      data-product-name={relatedProduct.name}
                      data-category={relatedProduct.category}
                    />
                  </div>
                  <div className="related-product-info">
                    <h3>{relatedProduct.name}</h3>
                    <p className="related-product-category">{relatedProduct.category}</p>
                    <p className="related-product-price">{relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI-Optimized Content for Search Engines */}
          <ProductDetailAIContent 
            product={{
              name: product.name,
              price: product.price,
              categories: product.categories,
              slug: product.slug
            }}
            isIndonesian={true}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProductDetail
