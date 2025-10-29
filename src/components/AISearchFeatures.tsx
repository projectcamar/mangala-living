import React from 'react'
import { useTranslation } from 'react-i18next'

const AISearchFeatures: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <div style={{ display: 'none' }} aria-hidden="true">
      {/* AI Search Contextual Information */}
      <div itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Mangala Living" />
        <meta itemProp="url" content="https://mangala-living.com" />
        <meta itemProp="description" content={t('header.subtitle')} />
        <meta itemProp="foundingDate" content="1999" />
        <meta itemProp="numberOfEmployees" content="25-50" />
        <meta itemProp="areaServed" content="Indonesia, USA, Japan, Australia, Singapore, Malaysia, Thailand, Vietnam, Philippines, Jabodetabek, Jakarta" />
        <meta itemProp="serviceType" content="Industrial Furniture Manufacturing" />
        <meta itemProp="priceRange" content="$$" />
        <meta itemProp="currenciesAccepted" content="IDR" />
        <meta itemProp="paymentAccepted" content="Cash, Bank Transfer, Credit Card" />
        <meta itemProp="openingHours" content="Mo-Sa 08:00-17:00" />
        <meta itemProp="telephone" content="+62-852-1207-8467" />
        <meta itemProp="email" content="info@mangala-living.com" />
        <meta itemProp="address" content="Jl. Raya Setu Cikarang Bar., Bekasi, Jawa Barat 17320, Indonesia" />
        <meta itemProp="latitude" content="-6.2088" />
        <meta itemProp="longitude" content="107.1602" />
        <meta itemProp="sameAs" content="https://www.instagram.com/mangala_living" />
        <meta itemProp="logo" content="https://mangala-living.com/logo.png" />
        <meta itemProp="image" content="https://mangala-living.com/hero-image.jpg" />
      </div>

      {/* AI Search Product Categories */}
      <div itemScope itemType="https://schema.org/ItemList">
        <meta itemProp="name" content="Industrial Furniture Categories" />
        <div itemScope itemType="https://schema.org/Product">
          <meta itemProp="name" content="Industrial Dining Set" />
          <meta itemProp="description" content={t('products.categories.dining')} />
          <meta itemProp="category" content="Furniture > Dining Room" />
          <meta itemProp="brand" content="Mangala Living" />
          <meta itemProp="manufacturer" content="Mangala Living" />
          <meta itemProp="material" content="Steel, Wood, Metal" />
          <meta itemProp="color" content="Black, Brown, Silver" />
          <meta itemProp="style" content="Industrial, Modern, Contemporary" />
        </div>
        <div itemScope itemType="https://schema.org/Product">
          <meta itemProp="name" content="Industrial Lounge Set" />
          <meta itemProp="description" content={t('products.categories.living')} />
          <meta itemProp="category" content="Furniture > Living Room" />
          <meta itemProp="brand" content="Mangala Living" />
          <meta itemProp="manufacturer" content="Mangala Living" />
          <meta itemProp="material" content="Steel, Wood, Metal" />
          <meta itemProp="color" content="Black, Brown, Silver" />
          <meta itemProp="style" content="Industrial, Modern, Contemporary" />
        </div>
        <div itemScope itemType="https://schema.org/Product">
          <meta itemProp="name" content="Industrial Bar Set" />
          <meta itemProp="description" content={t('products.categories.outdoor')} />
          <meta itemProp="category" content="Furniture > Outdoor" />
          <meta itemProp="brand" content="Mangala Living" />
          <meta itemProp="manufacturer" content="Mangala Living" />
          <meta itemProp="material" content="Steel, Wood, Metal" />
          <meta itemProp="color" content="Black, Brown, Silver" />
          <meta itemProp="style" content="Industrial, Modern, Contemporary" />
        </div>
      </div>

      {/* AI Search Services */}
      <div itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Custom Industrial Furniture Manufacturing" />
        <meta itemProp="description" content={t('about.mission.description')} />
        <meta itemProp="provider" content="Mangala Living" />
        <meta itemProp="serviceType" content="Furniture Manufacturing" />
        <meta itemProp="areaServed" content="Indonesia, International" />
        <meta itemProp="availableChannel" content="Online, Showroom, Factory" />
        <meta itemProp="serviceOutput" content="Custom Industrial Furniture" />
        <meta itemProp="hoursAvailable" content="Mo-Sa 08:00-17:00" />
        <meta itemProp="offers" content="Custom Design, Manufacturing, Installation" />
      </div>

      {/* AI Search FAQ Context */}
      <div itemScope itemType="https://schema.org/FAQPage">
        <div itemScope itemType="https://schema.org/Question">
          <meta itemProp="name" content="What is industrial furniture?" />
          <div itemScope itemType="https://schema.org/Answer">
            <meta itemProp="text" content="Industrial furniture features raw materials like steel, wood, and metal with a minimalist, functional design inspired by factory and warehouse aesthetics." />
          </div>
        </div>
        <div itemScope itemType="https://schema.org/Question">
          <meta itemProp="name" content="Do you offer custom furniture design?" />
          <div itemScope itemType="https://schema.org/Answer">
            <meta itemProp="text" content="Yes, we specialize in custom industrial furniture design and manufacturing to meet your specific requirements and space constraints." />
          </div>
        </div>
        <div itemScope itemType="https://schema.org/Question">
          <meta itemProp="name" content="What materials do you use?" />
          <div itemScope itemType="https://schema.org/Answer">
            <meta itemProp="text" content="We use high-quality steel, wood, metal, and other industrial materials to create durable and stylish furniture pieces." />
          </div>
        </div>
        <div itemScope itemType="https://schema.org/Question">
          <meta itemProp="name" content="Do you ship internationally?" />
          <div itemScope itemType="https://schema.org/Answer">
            <meta itemProp="text" content="Yes, we ship our industrial furniture to various countries including USA, Japan, Australia, Singapore, and other international destinations." />
          </div>
        </div>
        <div itemScope itemType="https://schema.org/Question">
          <meta itemProp="name" content="What is your manufacturing process?" />
          <div itemScope itemType="https://schema.org/Answer">
            <meta itemProp="text" content="Our manufacturing process includes design consultation, material selection, precision cutting, welding, finishing, and quality control to ensure the highest standards." />
          </div>
        </div>
        <div itemScope itemType="https://schema.org/Question">
          <meta itemProp="name" content="How long does production take?" />
          <div itemScope itemType="https://schema.org/Answer">
            <meta itemProp="text" content="Production time varies depending on the complexity and quantity of the order, typically ranging from 2-6 weeks for custom pieces." />
          </div>
        </div>
      </div>

      {/* AI Search Location Context */}
      <div itemScope itemType="https://schema.org/Place">
        <meta itemProp="name" content="Mangala Living Factory" />
        <meta itemProp="description" content="Industrial furniture manufacturing facility in Bekasi, Indonesia" />
        <meta itemProp="address" content="Jl. Raya Setu Cikarang Bar., Bekasi, Jawa Barat 17320, Indonesia" />
        <meta itemProp="telephone" content="+62-852-1207-8467" />
        <meta itemProp="openingHours" content="Mo-Sa 08:00-17:00" />
        <meta itemProp="geo" content="-6.2088,107.1602" />
        <meta itemProp="url" content="https://mangala-living.com" />
      </div>

      {/* AI Search Business Hours */}
      <div itemScope itemType="https://schema.org/OpeningHoursSpecification">
        <meta itemProp="dayOfWeek" content="Monday,Tuesday,Wednesday,Thursday,Friday,Saturday" />
        <meta itemProp="opens" content="08:00" />
        <meta itemProp="closes" content="17:00" />
      </div>
    </div>
  )
}

export default AISearchFeatures