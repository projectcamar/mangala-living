import { track } from '@vercel/analytics'

// Custom events for better analytics tracking
export const trackEvent = {
  // Product interactions
  productView: (productName: string, category: string) => {
    track('product_view', {
      product_name: productName,
      category: category
    })
  },

  productClick: (productName: string, category: string) => {
    track('product_click', {
      product_name: productName,
      category: category
    })
  },

  // Category interactions
  categoryView: (categoryName: string) => {
    track('category_view', {
      category_name: categoryName
    })
  },

  categoryClick: (categoryName: string) => {
    track('category_click', {
      category_name: categoryName
    })
  },

  // Search interactions
  searchQuery: (query: string, resultsCount: number) => {
    track('search_query', {
      query: query,
      results_count: resultsCount
    })
  },

  // Contact interactions
  whatsappClick: (source: string) => {
    track('whatsapp_click', {
      source: source
    })
  },

  catalogDownload: () => {
    track('catalog_download')
  },

  // Language switching
  languageSwitch: (fromLang: string, toLang: string) => {
    track('language_switch', {
      from_language: fromLang,
      to_language: toLang
    })
  },

  // Page navigation
  pageView: (pageName: string, path: string) => {
    track('page_view', {
      page_name: pageName,
      path: path
    })
  }
}
