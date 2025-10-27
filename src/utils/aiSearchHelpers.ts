// AI Search Helper Functions for Mangala Living

export const generateAIMetaTags = (pageType: string, isIndonesian: boolean) => {
  const baseTags = {
    'ai-content-type': 'furniture-manufacturer',
    'ai-business-type': 'industrial-furniture-manufacturer',
    'ai-location': 'bekasi-indonesia',
    'ai-specialization': 'custom-industrial-furniture',
    'ai-target-audience': 'cafe-restaurant-hotel-office-owners',
    'ai-experience-years': '25',
    'ai-clients-served': '1000+',
    'ai-service-area': 'indonesia',
    'ai-customization': 'available',
    'ai-shipping': 'nationwide',
    'ai-warranty': '1-year',
    'ai-payment-methods': 'cash-bank-transfer-credit-card',
    'ai-languages': 'indonesian-english',
    'ai-response-time': 'same-day',
    'ai-manufacturing-time': '2-4-weeks'
  }

  const pageSpecificTags = {
    'home': {
      'ai-page-type': 'homepage',
      'ai-primary-content': 'furniture-catalog-showcase'
    },
    'product': {
      'ai-page-type': 'product-detail',
      'ai-primary-content': 'product-information'
    },
    'category': {
      'ai-page-type': 'category-listing',
      'ai-primary-content': 'product-category-showcase'
    },
    'about': {
      'ai-page-type': 'about-page',
      'ai-primary-content': 'company-information'
    },
    'contact': {
      'ai-page-type': 'contact-page',
      'ai-primary-content': 'contact-information'
    }
  }

  return {
    ...baseTags,
    ...(pageSpecificTags[pageType as keyof typeof pageSpecificTags] || {})
  }
}

export const generateAIContentSummary = (isIndonesian: boolean) => {
  return {
    businessName: "Mangala Living",
    businessType: isIndonesian 
      ? "Manufacturer Furniture Industrial Besi Custom" 
      : "Industrial Steel Custom Furniture Manufacturer",
    location: "Bekasi, Indonesia",
    established: "1999",
    experience: "25+ tahun",
    clientsServed: "1000+",
    specialization: isIndonesian 
      ? "Furniture Industrial untuk Cafe, Restoran, Hotel, Kantor" 
      : "Industrial Furniture for Cafes, Restaurants, Hotels, Offices",
    keyFeatures: [
      isIndonesian ? "Custom Design" : "Custom Design",
      isIndonesian ? "Material Berkualitas Tinggi" : "High Quality Materials",
      isIndonesian ? "Harga Kompetitif" : "Competitive Prices",
      isIndonesian ? "Pengiriman Seluruh Indonesia" : "Nationwide Shipping",
      isIndonesian ? "Garansi 1 Tahun" : "1 Year Warranty"
    ],
    contactInfo: {
      phone: "+62 852-1207-8467",
      email: "info@mangala-living.com",
      whatsapp: "https://wa.me/6285212078467"
    }
  }
}

export const generateAISearchKeywords = (isIndonesian: boolean) => {
  const baseKeywords = [
    "furniture industrial indonesia",
    "furniture besi custom",
    "mangala living",
    "furniture manufacturer bekasi",
    "industrial furniture custom",
    "steel furniture indonesia"
  ]

  const indonesianKeywords = [
    "furniture cafe",
    "furniture restoran",
    "furniture hotel",
    "meja industrial",
    "kursi bar",
    "rak display industrial",
    "furniture besi bekasi",
    "manufacturer furniture industrial",
    "furniture custom bekasi",
    "meja kursi cafe",
    "furniture kantor",
    "furniture outdoor"
  ]

  const englishKeywords = [
    "cafe furniture",
    "restaurant furniture",
    "hotel furniture",
    "industrial table",
    "bar chair",
    "display rack industrial",
    "steel furniture bekasi",
    "industrial furniture manufacturer",
    "custom furniture bekasi",
    "cafe table chair",
    "office furniture",
    "outdoor furniture"
  ]

  return [
    ...baseKeywords,
    ...(isIndonesian ? indonesianKeywords : englishKeywords)
  ]
}

export const generateAIContextualData = (pageType: string, isIndonesian: boolean) => {
  const contextualData = {
    businessContext: {
      industry: "Furniture Manufacturing",
      subIndustry: "Industrial Furniture",
      targetMarket: "B2B Commercial",
      businessModel: "Manufacturing + Custom Design",
      competitiveAdvantage: "25+ years experience, custom design, quality materials"
    },
    contentContext: {
      language: isIndonesian ? "Indonesian" : "English",
      region: "Indonesia",
      currency: "IDR",
      timezone: "WIB",
      businessHours: "Monday-Saturday 08:00-17:00"
    },
    technicalContext: {
      websiteType: "E-commerce + Corporate",
      primaryGoal: "Lead Generation + Product Showcase",
      conversionActions: ["WhatsApp Contact", "Phone Call", "Email Inquiry"],
      userJourney: "Discovery → Product Browse → Contact → Custom Quote"
    }
  }

  return contextualData
}