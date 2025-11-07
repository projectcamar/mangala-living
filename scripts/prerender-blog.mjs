#!/usr/bin/env node

/**
 * Pre-render Blog Posts to Static HTML
 * 
 * This script generates static HTML files for all blog posts so that:
 * 1. AI crawlers can read blog content without executing JavaScript
 * 2. Search engines can properly index blog content
 * 3. Social media can scrape proper meta tags
 * 
 * Solution to the issue where AI could only crawl main page but not blog content.
 */

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')
const BASE_URL = process.env.SITEMAP_BASE_URL || 'https://mangala-living.com'

const BLOG_FILE = path.join(ROOT_DIR, 'src', 'data', 'blog.ts')
const BLOG_CONTENT_FILE = path.join(ROOT_DIR, 'src', 'data', 'blogContent.ts')
const PRODUCT_FILE = path.join(ROOT_DIR, 'src', 'data', 'products.ts')
const OUTPUT_DIR = path.join(ROOT_DIR, 'dist', 'blog')
const OUTPUT_ASSETS_DIR = path.join(OUTPUT_DIR, 'assets')

const escapeHtml = (str) => {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const readFileSafe = async (filePath) => {
  try {
    return await fs.readFile(filePath, 'utf8')
  } catch (error) {
    console.warn(`[prerender] Unable to read ${filePath}:`, error.message)
    return ''
  }
}

const formatDate = (isoDate) => {
  try {
    return new Date(isoDate).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return isoDate
  }
}

const sanitizeTypeScript = (code) => {
  let result = ''
  let inString = false
  let stringChar = ''
  let escaped = false
  let inLineComment = false
  let inBlockComment = false

  for (let i = 0; i < code.length; i++) {
    const char = code[i]
    const next = code[i + 1]

    if (inLineComment) {
      if (char === '\n') {
        inLineComment = false
        result += char
      }
      continue
    }

    if (inBlockComment) {
      if (char === '*' && next === '/') {
        inBlockComment = false
        i++
      }
      continue
    }

    if (inString) {
      result += char
      if (escaped) {
        escaped = false
        continue
      }
      if (char === '\\') {
        escaped = true
        continue
      }
      if (char === stringChar) {
        inString = false
      }
      continue
    }

    if (char === '/' && next === '/') {
      inLineComment = true
      i++
      continue
    }

    if (char === '/' && next === '*') {
      inBlockComment = true
      i++
      continue
    }

    if (char === "'" || char === '"' || char === '`') {
      inString = true
      stringChar = char
      result += char
      continue
    }

    result += char
  }

  return result
}

const extractArrayLiteral = (source, identifier) => {
  const pattern = new RegExp(`const\\s+${identifier}\\b[^=]*=`, 'm')
  const match = pattern.exec(source)
  if (!match) {
    return null
  }

  let index = match.index + match[0].length
  const length = source.length

  // Skip whitespace
  while (index < length && /\s/.test(source[index])) {
    index++
  }

  if (source[index] !== '[') {
    return null
  }

  const start = index
  let depth = 0
  let inString = false
  let stringChar = ''
  let escaped = false

  for (let i = index; i < length; i++) {
    const char = source[i]

    if (inString) {
      if (escaped) {
        escaped = false
      } else if (char === '\\') {
        escaped = true
      } else if (char === stringChar) {
        inString = false
      }
      continue
    }

    if (char === "'" || char === '"' || char === '`') {
      inString = true
      stringChar = char
      continue
    }

    if (char === '[') {
      depth++
    } else if (char === ']') {
      depth--
      if (depth === 0) {
        return source.slice(start, i + 1)
      }
    }
  }

  return null
}

const evaluateArrayLiteral = (literal, identifier, context = {}) => {
  if (!literal) {
    console.warn(`[prerender] Unable to locate array literal for ${identifier}`)
    return []
  }

  const sanitized = sanitizeTypeScript(literal)
  const contextDeclarations = Object.entries(context)
    .map(([key, value]) => `const ${key} = ${JSON.stringify(value)};`)
    .join('\n')

  try {
    // Wrap in parentheses so Function can evaluate array literal
    return Function(`"use strict"; ${contextDeclarations} return (${sanitized});`)()
  } catch (error) {
    console.error(`[prerender] Failed to evaluate array literal for ${identifier}:`, error.message)
    return []
  }
}

const parseTypeScriptArray = (source, identifier, context = {}) => {
  const literal = extractArrayLiteral(source, identifier)
  return evaluateArrayLiteral(literal, identifier, context)
}

const parseBlogPosts = (source) => {
  return parseTypeScriptArray(source, 'BLOG_POSTS').map(post => ({
    ...post,
    author: post.author || 'Helmi Ramdan'
  }))
}

const parseBlogContents = (source) => {
  const contents = parseTypeScriptArray(source, 'BLOG_CONTENTS')
  return Array.isArray(contents) ? contents : []
}

const createSafeFileName = (fileName, usedNames) => {
  const ext = path.extname(fileName)
  const base = path.basename(fileName, ext)
  const sanitizedBase = base
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase() || 'asset'

  let candidate = `${sanitizedBase}${ext}`
  let counter = 1
  while (usedNames.has(candidate)) {
    candidate = `${sanitizedBase}-${counter}${ext}`
    counter++
  }
  usedNames.add(candidate)
  return candidate
}

const parseProductFile = (source) => {
  if (!source) {
    console.warn('[prerender] Product source is empty')
    return { products: [], assetMap: new Map() }
  }

  const importRegex = /import\s+(\w+)\s+from\s+['"]..\/assets\/([^'"]+)['"]/g
  const assetDeclarations = new Map()
  const usedNames = new Set()
  let match

  while ((match = importRegex.exec(source)) !== null) {
    const varName = match[1]
    const relativeAssetPath = match[2]
    const absoluteAssetPath = path.join(ROOT_DIR, 'src', 'assets', relativeAssetPath)
    const safeFileName = createSafeFileName(path.basename(relativeAssetPath), usedNames)

    assetDeclarations.set(varName, {
      sourcePath: absoluteAssetPath,
      outputFileName: safeFileName,
      relativeUrl: `../assets/${safeFileName}`
    })
  }

  const context = {}
  assetDeclarations.forEach((info, varName) => {
    context[varName] = info.relativeUrl
  })

  const products = parseTypeScriptArray(source, 'ALL_PRODUCTS', context)
  const assetMap = new Map()

  assetDeclarations.forEach((info) => {
    assetMap.set(info.relativeUrl, info)
  })

  return { products: Array.isArray(products) ? products : [], assetMap }
}

const PRODUCT_KEYWORD_MAPPINGS = [
  {
    keywords: ['meja', 'table', 'meja makan', 'meja cafe', 'meja bar', 'meja kerja', 'dining table', 'bar table', 'coffee table'],
    productIds: [4, 5, 15, 3]
  },
  {
    keywords: ['kursi', 'chair', 'kursi bar', 'bar chair', 'stall chair', 'barstool'],
    productIds: [6, 7]
  },
  {
    keywords: ['rak', 'rack', 'shelf', 'display', 'storage', 'rak display', 'display rack', 'bookshelf', 'lemari', 'kabinet'],
    productIds: [1, 9, 10, 11, 12, 13]
  },
  {
    keywords: ['bar set', 'bar-set', 'outdoor', 'balcony', 'teras', 'area luar'],
    productIds: [2, 8]
  },
  {
    keywords: ['daybed', 'loung', 'sofa', 'santai', 'lounge set', 'bench'],
    productIds: [16, 17, 3]
  },
  {
    keywords: ['dining set', 'set makan', 'meja kursi set'],
    productIds: [4, 5]
  },
  {
    keywords: ['kitchen', 'dapur', 'cabinet', 'kabinet', 'lemari dapur'],
    productIds: [9, 10]
  },
  {
    keywords: ['gantungan', 'hanging', 'coat rack'],
    productIds: [13, 14]
  }
]

const getRelevantProductsForBlogPost = (post, allProducts) => {
  if (!post || !allProducts.length) {
    return []
  }

  const searchText = `${post.slug || ''} ${post.title || ''} ${post.excerpt || ''}`.toLowerCase()
  const relevantProductIds = new Set()

  for (const mapping of PRODUCT_KEYWORD_MAPPINGS) {
    const hasKeyword = mapping.keywords.some(keyword => searchText.includes(keyword.toLowerCase()))
    if (hasKeyword) {
      mapping.productIds.forEach(id => relevantProductIds.add(id))
    }
  }

  const productMap = new Map(allProducts.map(product => [product.id, product]))
  const matchedProducts = Array.from(relevantProductIds)
    .map(id => productMap.get(id))
    .filter(Boolean)

  if (matchedProducts.length === 0) {
    return allProducts.slice(0, 6)
  }

  return matchedProducts.slice(0, 6)
}

const getProductShowcaseHeadingStatic = (slug = '', title = '') => {
  const searchText = `${slug} ${title}`.toLowerCase()

  if (searchText.includes('meja')) {
    return 'Produk Meja Industrial Pilihan Kami'
  }
  if (searchText.includes('kursi')) {
    return 'Kursi Bar & Cafe Industrial Berkualitas'
  }
  if (searchText.includes('rak') || searchText.includes('display')) {
    return 'Rak Display & Storage Industrial Terbaik'
  }
  if (searchText.includes('bar') || searchText.includes('outdoor')) {
    return 'Bar Set & Outdoor Furniture Industrial'
  }
  if (searchText.includes('dining') || searchText.includes('makan')) {
    return 'Dining Set Industrial untuk Cafe & Restoran'
  }
  if (searchText.includes('kitchen') || searchText.includes('dapur')) {
    return 'Kitchen Cabinet & Storage Industrial'
  }
  if (searchText.includes('lounge') || searchText.includes('daybed')) {
    return 'Lounge Set & Daybed Industrial Nyaman'
  }

  return 'Produk Industrial Terkait yang Mungkin Anda Suka'
}

const convertIDRToUSDStatic = (idrPrice) => {
  if (!idrPrice) return null
  const numericValue = parseFloat(idrPrice.replace(/[^0-9]/g, ''))
  if (!numericValue || Number.isNaN(numericValue)) {
    return null
  }
  const exchangeRate = 15000
  const usdPrice = numericValue / exchangeRate
  if (!usdPrice || !Number.isFinite(usdPrice)) {
    return null
  }

  return usdPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: usdPrice >= 100 ? 0 : 2,
    maximumFractionDigits: usdPrice >= 100 ? 0 : 2
  })
}

const ensureProductAssetsCopied = async (products, assetMap, copiedSet) => {
  for (const product of products) {
    if (!product?.image) continue
    const assetInfo = assetMap.get(product.image)
    if (!assetInfo || copiedSet.has(assetInfo.outputFileName)) continue

    try {
      await fs.copyFile(
        assetInfo.sourcePath,
        path.join(OUTPUT_ASSETS_DIR, assetInfo.outputFileName)
      )
      copiedSet.add(assetInfo.outputFileName)
    } catch (error) {
      console.warn(`[prerender] Failed to copy asset ${assetInfo.outputFileName}:`, error.message)
    }
  }
}

const PRODUCT_KEYWORD_REGEX = /meja|kursi|rak|display|bar|dining|kitchen|furniture|cabinet|shelf|chair|table/i

const hasProductRelatedKeywords = (post) => {
  const combined = `${post.slug || ''} ${post.title || ''}`
  return PRODUCT_KEYWORD_REGEX.test(combined)
}

const normalizeBaseUrl = (url) => {
  if (!url) return ''
  return url.endsWith('/') ? url.slice(0, -1) : url
}

const makeAbsoluteAssetUrl = (baseUrl, relativePath) => {
  if (!relativePath) return null
  const trimmedBase = normalizeBaseUrl(baseUrl)
  const fileName = relativePath.replace('../assets/', '')
  if (!fileName) return null
  return `${trimmedBase}/blog/assets/${encodeURIComponent(fileName)}`
}

const generateAnnouncementBarHTML = () => `
  <div class="static-announcement-bar">
    <div class="static-container">
      <div class="static-announcement-content">
        <span class="static-announcement-text">
          Bring Your Dream Furniture to Life!
          <span class="static-announcement-highlight">Free Design Consultation</span>
        </span>
        <a href="${BASE_URL}/custom-order" class="static-announcement-cta">Order Custom Order Now &gt;</a>
      </div>
    </div>
  </div>
`

const generateHeaderHTML = () => `
  <header class="static-header" role="banner">
    <div class="static-header-top">
      <div class="static-container static-header-top-inner">
        <nav class="static-header-nav">
          <a href="${BASE_URL}/about" class="static-header-link">About</a>
          <a href="${BASE_URL}/blog" class="static-header-link">Blog</a>
          <a href="${BASE_URL}/contact-us" class="static-header-link">Contact Us</a>
        </nav>
        <a href="${BASE_URL}/" class="static-header-brand" aria-label="Mangala Living">
          MANGALA
        </a>
        <div class="static-header-actions">
          <div class="static-language-pill">EN</div>
          <a href="${BASE_URL}/search" class="static-header-action">Search</a>
          <a href="${BASE_URL}/custom-order" class="static-header-button">Download Our Catalog</a>
        </div>
      </div>
    </div>
    <div class="static-header-bottom">
      <div class="static-container static-header-bottom-inner">
        <nav class="static-category-nav">
          <a href="${BASE_URL}/product-category/new-arrivals" class="static-category-link">New Arrivals</a>
          <a href="${BASE_URL}/product-category/lounge-seating-set" class="static-category-link">Lounge Set</a>
          <a href="${BASE_URL}/product-category/industrial-sofa-bench" class="static-category-link">Sofa Bench</a>
          <a href="${BASE_URL}/product-category/dining-set-collection" class="static-category-link">Dining Set</a>
          <a href="${BASE_URL}/product-category/bar-furniture-collection" class="static-category-link">Bar Set</a>
          <a href="${BASE_URL}/product-category/balcony-outdoor-collection" class="static-category-link">Outdoor</a>
          <a href="${BASE_URL}/product-category/daybed-lounge-frame" class="static-category-link">Daybed</a>
          <a href="${BASE_URL}/product-category/accessories-storage" class="static-category-link">Storage</a>
          <a href="${BASE_URL}/product-category/table-collection" class="static-category-link">Tables</a>
          <a href="${BASE_URL}/product-category/dining-table-collection" class="static-category-link">Dine Table</a>
        </nav>
      </div>
    </div>
  </header>
`

const generateBreadcrumbHTML = (post) => `
  <nav class="static-breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li><a href="${BASE_URL}/">Home</a></li>
      <li><a href="${BASE_URL}/blog">Blog</a></li>
      <li aria-current="page">${escapeHtml(post.title)}</li>
    </ol>
  </nav>
`

const generateArticleMetaHTML = (post) => `
  <div class="static-article-meta">
    <span class="static-article-meta-item">
      <span class="static-meta-icon">📁</span>
      ${escapeHtml(post.category || 'Blog')}
    </span>
    <span class="static-article-meta-item">
      <span class="static-meta-icon">✍️</span>
      ${escapeHtml(post.author || 'Mangala Living')}
    </span>
    <span class="static-article-meta-item">
      <span class="static-meta-icon">📅</span>
      ${formatDate(post.date)}
    </span>
  </div>
`

const generateSectionHTML = (section, post, index) => {
  const parts = []
  if (section.heading) {
    parts.push(`
      <h2>${escapeHtml(section.heading)}</h2>
    `)
  }

  if (section.image) {
    parts.push(`
      <figure class="static-article-image">
        <img 
          src="${section.image}" 
          alt="${escapeHtml(section.imageAlt || `${post.title} - ${section.heading || 'Industrial Furniture Article'} - Mangala Living`)}"
          loading="${index <= 1 ? 'eager' : 'lazy'}"
        />
        <figcaption>MANGALA</figcaption>
      </figure>
    `)
  }

  if (section.paragraphs?.length) {
    section.paragraphs.forEach(paragraph => {
      if (!paragraph) return
      parts.push(`<p>${paragraph}</p>`)
    })
  }

  if (section.list?.length) {
    const listItems = section.list.map(item => `<li>${item}</li>`).join('')
    parts.push(`
      <ul>
        ${listItems}
      </ul>
    `)
  }

  if (!parts.length) {
    return ''
  }

  return `<section class="static-article-section">${parts.join('\n')}</section>`
}

const generateArticleSectionsHTML = (content, post) => {
  if (!content?.sections?.length) {
    return ''
  }

  return content.sections
    .map((section, index) => generateSectionHTML(section, post, index))
    .join('\n')
}

const generateProductShowcaseHTML = (products, heading, isIndonesian, baseUrl) => {
  if (!products || products.length === 0) {
    return ''
  }

  const description = isIndonesian
    ? 'Berikut adalah produk industrial pilihan kami yang relevan dengan topik artikel ini. Semua produk dibuat dengan kualitas premium dan material industrial grade di workshop kami di Bekasi.'
    : 'Discover our premium industrial furniture collection manufactured in our Bekasi workshop with high-quality materials and powder coating finish.'

  const displayProducts = products.slice(0, 3)

  const cards = displayProducts.map((product, index) => {
    const usdPrice = convertIDRToUSDStatic(product.price)
    const absoluteImage = makeAbsoluteAssetUrl(baseUrl, product.image)
    return `
      <article class="static-product-card" data-position="${index + 1}">
        <a href="${BASE_URL}/product/${product.slug}" class="static-product-card-link">
          <div class="static-product-image-wrapper">
            ${product.image ? `<img src="${product.image}" alt="${escapeHtml(product.name)}" loading="${index === 0 ? 'eager' : 'lazy'}" width="360" height="260" />` : ''}
            <span class="static-product-badge">PRODUK KAMI</span>
          </div>
          <div class="static-product-info">
            <h3>${escapeHtml(product.name)}</h3>
            <div class="static-product-categories">
              ${(product.categories || []).map(cat => `<span>${escapeHtml(cat)}</span>`).join('')}
            </div>
            <div class="static-product-prices">
              <span class="static-price-primary">${escapeHtml(product.price || '')}</span>
              ${usdPrice ? `<span class="static-price-secondary">${usdPrice}</span>` : ''}
            </div>
            <span class="static-product-cta">${isIndonesian ? 'Lihat Detail Produk' : 'View Product Details'}</span>
          </div>
        </a>
        ${absoluteImage ? `<link itemprop="image" content="${absoluteImage}" />` : ''}
      </article>
    `
  }).join('\n')

  return `
    <section class="static-product-showcase">
      <div class="static-product-header">
        <h2>${escapeHtml(heading || 'Produk Industrial Terkait')}</h2>
        <p>${description}</p>
      </div>
      <div class="static-product-grid">
        ${cards}
      </div>
      <div class="static-product-footer">
        <a href="${BASE_URL}/shop" class="static-product-button">
          ${isIndonesian ? 'Lihat Semua Produk' : 'View All Products'}
        </a>
      </div>
    </section>
  `
}

const generateSidebarHTML = (otherArticles) => {
  if (!otherArticles?.length) {
    return ''
  }

  const cards = otherArticles.map(article => `
    <a href="${BASE_URL}/blog/${article.slug}" class="static-sidebar-card">
      <div class="static-sidebar-image">
        ${article.image ? `<img src="${article.image}" alt="${escapeHtml(article.title)}" loading="lazy" width="320" height="220" />` : ''}
        <span class="static-sidebar-badge">MANGALA</span>
      </div>
      <div class="static-sidebar-info">
        <span class="static-sidebar-category">${escapeHtml(article.category || '').toUpperCase()}</span>
        <h4>${escapeHtml(article.title)}</h4>
      </div>
    </a>
  `).join('\n')

  return `
    <aside class="static-sidebar">
      <h3>Other Articles</h3>
      <div class="static-sidebar-grid">
        ${cards}
      </div>
    </aside>
  `
}

const generateAuthorCardHTML = (post) => {
  if (post.author !== 'Helmi Ramdan') {
    return ''
  }

  const isExport = post.category === 'Export & International'
  const title = isExport
    ? 'Associate at Housing and Settlement Department, DKI Jakarta Province'
    : 'Associate at Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta'
  const experiences = isExport
    ? [
        'Infrastructure Engineer at Damai Putra Group (3+ years)',
        'Design Engineer & Architectural Drafter (5+ years)',
        'Alumni of Diponegoro University',
        'Commercial Space Design & Construction Specialist'
      ]
    : [
        'Infrastructure Engineer at Damai Putra Group (3+ tahun)',
        'Design Engineer & Architectural Drafter (5+ tahun)',
        'Alumni Universitas Diponegoro',
        'Spesialis Commercial Space Design & Construction'
      ]

  return `
    <section class="static-author-card">
      <div class="static-author-card-inner">
        <div class="static-author-avatar">HR</div>
        <div>
          <h3>Helmi Ramdan</h3>
          <p class="static-author-title">${escapeHtml(title)}</p>
          <ul>
            ${experiences.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
          <a href="https://www.linkedin.com/in/helmi-ramdan-067912118/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
      </div>
    </section>
  `
}

const generateCTAHTML = (post) => {
  const isExport = post.category === 'Export & International'
  return `
    <section class="static-cta">
      <h3>${isExport ? 'Interested in Our Industrial Furniture?' : 'Tertarik dengan Furniture Industrial Kami? | Interested in Our Industrial Furniture?'}</h3>
      <p>${isExport
        ? 'Visit our complete collection of high-quality custom industrial furniture from Mangala Living.'
        : 'Kunjungi koleksi lengkap furniture industrial custom berkualitas tinggi dari Mangala Living. | Visit our complete collection of high-quality custom industrial furniture from Mangala Living.'}</p>
      <div class="static-cta-buttons">
        <a href="${BASE_URL}/shop" class="static-cta-button primary">${isExport ? 'View All Products' : 'Lihat Semua Produk | View All Products'}</a>
        <a href="${BASE_URL}/contact-us" class="static-cta-button secondary">${isExport ? 'Contact Us' : 'Hubungi Kami | Contact Us'}</a>
      </div>
    </section>
  `
}

const generateServiceAreasHTML = () => `
  <section class="static-service-areas">
    <div class="static-container">
      <h2>Wilayah Layanan Kami</h2>
      <p>Melayani Bekasi, Jakarta, Cikarang, Depok, Bogor, Tangerang, Karawang, dan seluruh Jabodetabek dengan pengalaman 25+ tahun.</p>
      <div class="static-service-grid">
        <div>
          <h3>Bekasi & Cikarang</h3>
          <p>Workshop langsung di Setu, Bekasi. Melayani Summarecon Bekasi, Harapan Indah, Grand Galaxy City, Lippo Cikarang, Jababeka, dan kawasan industri MM2100.</p>
        </div>
        <div>
          <h3>Jakarta & Jabodetabek</h3>
          <p>Pengalaman proyek di Kemang, SCBD, Senopati, Sudirman, Thamrin, Margonda Depok, Bogor Kota, hingga BSD Tangerang.</p>
        </div>
        <div>
          <h3>Konsultasi Khusus</h3>
          <p>Hubungi kami untuk konsultasi layout, material, dan estimasi budget furniture industrial sesuai kebutuhan bisnis Anda.</p>
        </div>
      </div>
    </div>
  </section>
`

const generateFooterHTML = () => `
  <footer class="static-footer">
    <div class="static-container static-footer-grid">
      <div>
        <h3>MANGALA</h3>
        <p>Your best choice for premium industrial scandinavian furniture since 1999.</p>
        <p>Serving coffee shops, restaurants, and businesses across Indonesia. Custom orders welcome.</p>
      </div>
      <div>
        <h4>Contact Us</h4>
        <p><a href="mailto:info@mangala-living.com">info@mangala-living.com</a></p>
        <p><a href="https://wa.me/6288801146881">+62 888 0114 6881</a></p>
        <p>Workshop Bekasi: Jl. Raya Setu Cibitung - Bekasi, Telajung, Kabupaten Bekasi, Jawa Barat 17320</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="${BASE_URL}/about">About</a></li>
          <li><a href="${BASE_URL}/blog">Blog</a></li>
          <li><a href="${BASE_URL}/shipping-information">Shipping</a></li>
          <li><a href="${BASE_URL}/contact-us">Contact Us</a></li>
          <li><a href="${BASE_URL}/custom-order">Custom Order</a></li>
          <li><a href="${BASE_URL}/partnership">Partnership</a></li>
        </ul>
      </div>
      <div>
        <h4>Subscribe</h4>
        <form class="static-footer-form">
          <input type="text" placeholder="First name" aria-label="First name" />
          <input type="email" placeholder="Email" aria-label="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="static-footer-bottom">
      <div class="static-container">
        <span>Copyright ${new Date().getFullYear()} Mangala Living. All rights reserved.</span>
      </div>
    </div>
  </footer>
`

const generateProductSchemas = (products, post, baseUrl) => {
  if (!products || !products.length) {
    return []
  }

  const trimmedBase = normalizeBaseUrl(baseUrl)
  const displayProducts = products.slice(0, 3)

  return displayProducts.map(product => {
    const imageFileName = product.image ? product.image.replace('../assets/', '') : ''
    const imageUrl = imageFileName ? `${trimmedBase}/blog/assets/${encodeURIComponent(imageFileName)}` : undefined
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": `${product.name} - ${product.categories.join(', ')} Industrial Furniture berkualitas premium dari Mangala Living Workshop Bekasi.`,
      "image": imageUrl,
      "category": product.categories.join(', '),
      "brand": {
        "@type": "Brand",
        "name": "Mangala Living"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Mangala Living",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bekasi",
          "addressRegion": "Jawa Barat",
          "addressCountry": "ID"
        }
      },
      "offers": {
        "@type": "Offer",
        "url": `${trimmedBase}/product/${product.slug}`,
        "priceCurrency": "IDR",
        "price": (product.price || '').replace(/[^0-9]/g, ''),
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Mangala Living",
          "url": trimmedBase
        }
      }
    }
  })
}

const createFallbackContent = (post) => {
  const titleHighlight = post.title.replace(/-/g, ' ')
  return {
    sections: [
      {
        paragraphs: [
          post.excerpt,
          `Mangala Living memproduksi ${titleHighlight.toLowerCase()} dengan kualitas workshop premium di Bekasi. Semua furniture dibuat menggunakan material industrial grade, konstruksi welding profesional, dan finishing powder coating tahan lama.`,
          `Kami telah membantu 1000+ project komersial sejak 1999. Dengan pengalaman lebih dari 25 tahun, kami memahami standar kualitas, timeline, dan anggaran yang diperlukan untuk menghadirkan solusi furniture yang tepat untuk bisnis Anda.`
        ]
      },
      {
        heading: 'Keunggulan Utama Mangala Living',
        list: [
          '<strong>Produksi In-House:</strong> Semua proses mulai dari design, fabrikasi, powder coating, hingga quality control dilakukan di workshop kami sendiri.',
          '<strong>Custom Sesuai Project:</strong> Dimensi, material, dan finishing bisa disesuaikan dengan kebutuhan brand atau konsep interior Anda.',
          '<strong>Durability Terjamin:</strong> Struktur besi berkualitas, powder coating outdoor-grade, dan kayu pilihan memastikan ketahanan 5-8 tahun untuk penggunaan komersial.',
          '<strong>Pengiriman Profesional:</strong> Packing aman, supervisi loading, serta dokumentasi lengkap untuk pengiriman domestik maupun ekspor.'
        ]
      },
      {
        heading: 'Solusi Furniture yang Kami Sediakan',
        paragraphs: [
          'Tim design dan produksi kami melayani kebutuhan cafe, restoran, hotel, kantor, hingga developer properti. Produk meliputi meja-kursi dining, bar set, lounge furniture, rak display, cabinetry, hingga custom furniture untuk area outdoor.',
          'Setiap project mendapat pendampingan konsultatif: mulai dari pemilihan produk, layout, penyesuaian budget, hingga instalasi di lokasi.'
        ]
      },
      {
        heading: 'Langkah Order & Konsultasi',
        list: [
          '<strong>1. Konsultasi Awal:</strong> Kirimkan kebutuhan melalui WhatsApp atau email. Sertakan jumlah unit, ukuran ruangan, referensi desain, dan target budget.',
          '<strong>2. Proposal & Quotation:</strong> Kami susun rekomendasi produk, material, serta estimasi biaya lengkap dengan timeline produksi.',
          '<strong>3. Produksi & Quality Control:</strong> Setelah DP 50%, produksi dimulai. Kami kirimkan update berkala (foto/video) dan jadwalkan inspeksi sebelum pengiriman.',
          '<strong>4. Pengiriman & Instalasi:</strong> Tim kami menyiapkan packing aman, koordinasi logistik, serta instalasi (untuk area Jabodetabek).'
        ]
      },
      {
        heading: 'Hubungi Tim Mangala Living',
        paragraphs: [
          'Hubungi kami untuk konsultasi gratis dan mendapatkan katalog terbaru:',
          '<strong>WhatsApp:</strong> +62 888-0114-6881 (Fast Response)',
          '<strong>Email:</strong> info@mangala-living.com',
          '<strong>Workshop:</strong> Jl. Raya Setu Cibitung - Bekasi, Jawa Barat 17320',
          'Kami siap membantu Anda mewujudkan furniture industrial yang estetik, fungsional, dan tahan lama untuk bisnis Anda.'
        ]
      }
    ]
  }
}

const generateBlogPostHTML = (post, content, {
  otherArticles = [],
  relevantProducts = [],
  showcaseHeading,
  baseUrl,
  showServiceAreas = false
}) => {
  const metaDescription = post.excerpt || (content?.sections?.[0]?.paragraphs?.[0] || '')
  const articleSectionsHTML = generateArticleSectionsHTML(content, post)
  const sidebarHTML = generateSidebarHTML(otherArticles)
  const shouldDisplayProducts = hasProductRelatedKeywords(post) && relevantProducts.length > 0
  const productShowcaseHTML = shouldDisplayProducts
    ? generateProductShowcaseHTML(relevantProducts, showcaseHeading, post.category !== 'Export & International', baseUrl)
    : ''
  const authorCardHTML = generateAuthorCardHTML(post)
  const ctaHTML = generateCTAHTML(post)
  const serviceAreasHTML = showServiceAreas ? generateServiceAreasHTML() : ''
  const productSchemas = shouldDisplayProducts ? generateProductSchemas(relevantProducts, post, baseUrl) : []

  const trimmedBaseUrl = normalizeBaseUrl(baseUrl)
  const canonicalUrl = `${trimmedBaseUrl}/blog/${post.slug}`

  const heroImageHTML = post.image
    ? `<div class="static-hero-image"><img src="${post.image}" alt="${escapeHtml(post.title)}" loading="eager" /></div>`
    : ''

  const styles = `
    *, *::before, *::after { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f5f7fb;
      color: #1f2933;
      line-height: 1.6;
    }
    a { color: #0f6bff; text-decoration: none; }
    a:hover { text-decoration: underline; }
    img { display: block; max-width: 100%; }
    .static-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .static-announcement-bar { background: #1f2933; color: #fff; padding: 14px 0; font-size: 0.95rem; }
    .static-announcement-content { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; }
    .static-announcement-highlight { color: #ffd166; font-weight: 600; margin-left: 8px; }
    .static-announcement-cta { color: #ffd166; font-weight: 600; }
    .static-header { background: #ffffff; box-shadow: 0 12px 30px rgba(15, 102, 255, 0.08); position: sticky; top: 0; z-index: 20; }
    .static-header-top { border-bottom: 1px solid rgba(15, 102, 255, 0.1); }
    .static-header-top-inner { display: flex; justify-content: space-between; align-items: center; padding: 14px 0; gap: 24px; }
    .static-header-nav { display: flex; gap: 18px; font-size: 0.95rem; font-weight: 500; }
    .static-header-link { color: #4b5563; }
    .static-header-brand { font-weight: 800; font-size: 1.25rem; letter-spacing: 0.4em; color: #0f172a; }
    .static-header-actions { display: flex; align-items: center; gap: 14px; }
    .static-language-pill { background: rgba(15, 102, 255, 0.12); color: #0f6bff; font-weight: 600; padding: 6px 12px; border-radius: 999px; font-size: 0.8rem; }
    .static-header-action { color: #0f6bff; font-weight: 500; }
    .static-header-button { background: linear-gradient(135deg, #0f6bff, #2333ff); color: #fff; padding: 10px 18px; border-radius: 999px; font-weight: 600; font-size: 0.9rem; }
    .static-header-bottom-inner { display: flex; overflow-x: auto; padding: 12px 0; }
    .static-category-nav { display: flex; gap: 18px; font-size: 0.9rem; font-weight: 500; }
    .static-category-link { color: #445066; white-space: nowrap; position: relative; }
    .static-category-link:hover::after { content: ''; position: absolute; left: 0; right: 0; bottom: -6px; height: 3px; background: #0f6bff; border-radius: 999px; }
    .static-main { padding: 60px 0 80px; }
    .static-breadcrumb { font-size: 0.9rem; color: #64748b; margin-bottom: 24px; }
    .static-breadcrumb ol { list-style: none; display: flex; gap: 8px; padding: 0; margin: 0; flex-wrap: wrap; }
    .static-breadcrumb li::after { content: '/'; margin-left: 8px; color: #cbd5f5; }
    .static-breadcrumb li:last-child::after { display: none; }
    .static-layout { display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 0.9fr); gap: 48px; align-items: start; }
    .static-article { background: #fff; padding: 48px; border-radius: 24px; box-shadow: 0 30px 80px rgba(15, 102, 255, 0.08); position: relative; overflow: hidden; }
    .static-article::before { content: ''; position: absolute; top: -120px; right: -120px; width: 240px; height: 240px; border-radius: 50%; background: rgba(15,102,255,0.08); z-index: 0; }
    .static-article > * { position: relative; z-index: 1; }
    .static-back-link { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; color: #0f6bff; margin-bottom: 12px; }
    .static-article h1 { font-size: 2.6rem; margin: 0 0 20px; color: #0f172a; line-height: 1.2; letter-spacing: -0.02em; }
    .static-article-meta { display: flex; flex-wrap: wrap; gap: 18px; font-size: 0.95rem; color: #64748b; margin-bottom: 30px; }
    .static-article-meta-item { display: inline-flex; align-items: center; gap: 6px; }
    .static-meta-icon { font-size: 1rem; }
    .static-hero-image { margin: 30px 0; border-radius: 18px; overflow: hidden; box-shadow: 0 20px 40px rgba(15, 102, 255, 0.12); }
    .static-article-section { margin: 42px 0; }
    .static-article-section h2 { font-size: 2rem; margin-bottom: 20px; color: #0f172a; font-weight: 700; letter-spacing: -0.01em; }
    .static-article-section p { font-size: 1.05rem; color: #334155; margin-bottom: 18px; text-align: justify; }
    .static-article-section ul { padding-left: 20px; color: #334155; margin: 24px 0; }
    .static-article-section li { margin-bottom: 14px; position: relative; padding-left: 6px; }
    .static-article-image { margin: 36px 0; border-radius: 18px; overflow: hidden; background: #f8fafc; border: 1px solid rgba(15,102,255,0.08); }
    .static-article-image img { width: 100%; height: auto; }
    .static-article-image figcaption { padding: 12px 18px; font-size: 0.8rem; letter-spacing: 0.3em; color: #94a3b8; font-weight: 700; }
    .static-product-showcase { margin: 60px 0; padding: 40px; border-radius: 24px; background: linear-gradient(135deg, rgba(15,102,255,0.08), rgba(35,51,255,0.05)); border: 1px solid rgba(15,102,255,0.12); }
    .static-product-header h2 { font-size: 2rem; margin: 0 0 12px; }
    .static-product-header p { margin: 0 0 24px; color: #475569; font-size: 1.05rem; max-width: 720px; }
    .static-product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
    .static-product-card { background: #fff; border-radius: 18px; box-shadow: 0 20px 60px rgba(15,102,255,0.08); overflow: hidden; transition: transform 0.2s ease, box-shadow 0.2s ease; border: 1px solid rgba(15,102,255,0.1); }
    .static-product-card:hover { transform: translateY(-6px); box-shadow: 0 30px 80px rgba(15,102,255,0.12); }
    .static-product-card-link { display: block; color: inherit; }
    .static-product-image-wrapper { position: relative; overflow: hidden; }
    .static-product-image-wrapper img { width: 100%; height: 220px; object-fit: cover; }
    .static-product-badge { position: absolute; top: 16px; left: 16px; background: rgba(255,255,255,0.88); color: #0f172a; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; padding: 6px 14px; border-radius: 999px; }
    .static-product-info { padding: 20px 22px 28px; }
    .static-product-info h3 { margin: 0 0 10px; font-size: 1.1rem; color: #0f172a; }
    .static-product-categories { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
    .static-product-categories span { background: rgba(15,102,255,0.09); color: #0f6bff; padding: 4px 10px; border-radius: 999px; font-size: 0.75rem; font-weight: 600; }
    .static-product-prices { display: flex; flex-direction: column; gap: 4px; margin-bottom: 18px; }
    .static-price-primary { font-weight: 700; color: #0f172a; }
    .static-price-secondary { color: #475569; font-size: 0.95rem; }
    .static-product-cta { font-weight: 600; color: #0f6bff; font-size: 0.9rem; }
    .static-product-footer { margin-top: 32px; text-align: center; }
    .static-product-button { display: inline-block; padding: 12px 24px; border-radius: 999px; background: #0f6bff; color: #fff; font-weight: 600; }
    .static-sidebar { position: sticky; top: 120px; }
    .static-sidebar h3 { font-size: 1.5rem; margin-bottom: 24px; color: #0f172a; }
    .static-sidebar-grid { display: grid; gap: 24px; }
    .static-sidebar-card { background: #fff; border-radius: 18px; overflow: hidden; box-shadow: 0 18px 50px rgba(15,102,255,0.08); border: 1px solid rgba(15,102,255,0.08); display: block; color: inherit; transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .static-sidebar-card:hover { transform: translateY(-4px); box-shadow: 0 24px 60px rgba(15,102,255,0.12); }
    .static-sidebar-image { position: relative; height: 200px; overflow: hidden; }
    .static-sidebar-image img { width: 100%; height: 100%; object-fit: cover; }
    .static-sidebar-badge { position: absolute; top: 14px; left: 14px; background: rgba(255,255,255,0.88); color: #0f172a; font-size: 0.7rem; letter-spacing: 0.18em; font-weight: 700; padding: 4px 12px; border-radius: 999px; }
    .static-sidebar-info { padding: 18px 20px 22px; }
    .static-sidebar-category { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.24em; color: #0f6bff; display: block; margin-bottom: 10px; }
    .static-sidebar-info h4 { margin: 0; font-size: 1rem; color: #0f172a; line-height: 1.4; }
    .static-author-card { background: #f8fafc; padding: 32px; border-radius: 20px; margin: 48px 0; border: 1px solid rgba(148,163,184,0.3); }
    .static-author-card-inner { display: flex; gap: 24px; align-items: flex-start; }
    .static-author-avatar { width: 64px; height: 64px; border-radius: 50%; background: #0f6bff; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.2rem; }
    .static-author-card h3 { margin: 0 0 8px; }
    .static-author-title { margin: 0 0 16px; color: #475569; font-size: 0.95rem; }
    .static-author-card ul { padding-left: 20px; margin: 0 0 18px; color: #334155; }
    .static-author-card li { margin-bottom: 10px; }
    .static-author-card a { color: #0f6bff; font-weight: 600; }
    .static-cta { background: linear-gradient(135deg, #0f6bff, #2333ff); color: #fff; padding: 48px; border-radius: 24px; text-align: center; margin: 64px 0 36px; position: relative; overflow: hidden; }
    .static-cta::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0)); }
    .static-cta > * { position: relative; z-index: 1; }
    .static-cta h3 { margin: 0 0 12px; font-size: 2rem; }
    .static-cta p { margin: 0 0 24px; font-size: 1.05rem; opacity: 0.92; }
    .static-cta-buttons { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
    .static-cta-button { padding: 12px 26px; border-radius: 999px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
    .static-cta-button.primary { background: #fff; color: #0f172a; }
    .static-cta-button.secondary { border: 2px solid rgba(255,255,255,0.6); color: #fff; }
    .static-service-areas { background: linear-gradient(180deg, rgba(15,102,255,0.08) 0%, rgba(15,102,255,0) 100%); padding: 80px 0; }
    .static-service-areas h2 { text-align: center; font-size: 2.2rem; margin-bottom: 12px; color: #0f172a; }
    .static-service-areas p { text-align: center; margin: 0 auto 36px; max-width: 720px; color: #475569; }
    .static-service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
    .static-service-grid div { background: #fff; border-radius: 20px; padding: 24px; box-shadow: 0 20px 60px rgba(15,102,255,0.08); border: 1px solid rgba(15,102,255,0.12); }
    .static-service-grid h3 { margin: 0 0 12px; color: #0f172a; }
    .static-footer { background: #0b1220; color: #e2e8f0; padding: 80px 0 40px; margin-top: 80px; }
    .static-footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; }
    .static-footer h3 { margin-top: 0; font-size: 1.6rem; color: #fff; }
    .static-footer h4 { margin-top: 0; color: #fff; }
    .static-footer a { color: #60a5fa; }
    .static-footer ul { list-style: none; padding: 0; margin: 0; }
    .static-footer li { margin-bottom: 10px; }
    .static-footer-form { display: flex; flex-direction: column; gap: 12px; }
    .static-footer-form input { padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(148,163,184,0.4); background: rgba(15,23,42,0.6); color: #e2e8f0; }
    .static-footer-form button { padding: 10px 14px; border-radius: 10px; border: none; background: #0f6bff; color: #fff; font-weight: 600; cursor: pointer; }
    .static-footer-bottom { border-top: 1px solid rgba(148,163,184,0.2); margin-top: 48px; padding-top: 24px; font-size: 0.9rem; color: #94a3b8; }
    @media (max-width: 1024px) {
      .static-layout { grid-template-columns: 1fr; }
      .static-sidebar { position: static; }
      .static-header-top-inner { flex-wrap: wrap; justify-content: center; text-align: center; }
      .static-header-nav { justify-content: center; flex-wrap: wrap; }
    }
    @media (max-width: 768px) {
      .static-container { padding: 0 18px; }
      .static-article { padding: 32px 24px; }
      .static-article h1 { font-size: 2rem; }
      .static-article-section h2 { font-size: 1.6rem; }
      .static-header-button { display: none; }
      .static-header-bottom-inner { display: none; }
      .static-announcement-content { justify-content: center; text-align: center; }
      .static-product-showcase { padding: 28px; }
      .static-product-image-wrapper img { height: 200px; }
      .static-author-card-inner { flex-direction: column; align-items: center; text-align: center; }
      .static-cta { padding: 36px 24px; }
    }
  `

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": metaDescription,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author || 'Mangala Living'
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mangala Living",
      "logo": {
        "@type": "ImageObject",
        "url": `${trimmedBaseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${trimmedBaseUrl}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${trimmedBaseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": canonicalUrl
      }
    ]
  }

  const structuredDataScripts = [
    blogPostingSchema,
    breadcrumbSchema,
    ...productSchemas
  ].map(schema => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('\n')

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(post.title)} | Mangala Living</title>
  <meta name="description" content="${escapeHtml(metaDescription)}">
  <meta name="keywords" content="furniture industrial, ${escapeHtml(post.title)}, mangala living, furniture bekasi">
  <meta name="author" content="${escapeHtml(post.author || 'Mangala Living')}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${escapeHtml(post.title)}">
  <meta property="og:description" content="${escapeHtml(metaDescription)}">
  <meta property="og:image" content="${post.image}">
  <meta property="article:published_time" content="${post.date}">
  <meta property="article:author" content="${escapeHtml(post.author || 'Mangala Living')}">
  <meta property="article:section" content="${escapeHtml(post.category || 'Blog')}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${canonicalUrl}">
  <meta name="twitter:title" content="${escapeHtml(post.title)}">
  <meta name="twitter:description" content="${escapeHtml(metaDescription)}">
  <meta name="twitter:image" content="${post.image}">
  <meta name="ai-content-type" content="blog-article">
  <meta name="ai-topic" content="${escapeHtml(post.category || 'Blog')}">
  <meta name="ai-article-type" content="furniture-guide">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <style>${styles}</style>
  ${structuredDataScripts}
</head>
<body>
  ${generateAnnouncementBarHTML()}
  ${generateHeaderHTML()}
  <main class="static-main">
    <div class="static-container">
      ${generateBreadcrumbHTML(post)}
      <div class="static-layout">
        <article class="static-article">
          <a class="static-back-link" href="${trimmedBaseUrl}/blog">← Kembali ke Blog</a>
          <h1>${escapeHtml(post.title)}</h1>
          ${generateArticleMetaHTML(post)}
          ${heroImageHTML}
          ${articleSectionsHTML}
          ${productShowcaseHTML}
          ${authorCardHTML}
          ${ctaHTML}
        </article>
        ${sidebarHTML}
      </div>
    </div>
  </main>
  ${serviceAreasHTML}
  ${generateFooterHTML()}
  <script>
    if (window.location.hash !== '#static') {
      window.addEventListener('load', function () {
        setTimeout(function () {
          const targetUrl = '${trimmedBaseUrl}/blog/${post.slug}'
          if (window.location.href !== targetUrl) {
            window.location.href = targetUrl
          }
        }, 200)
      })
    }
  </script>
</body>
</html>`
}

const main = async () => {
  console.log('[prerender] Starting blog pre-rendering...')
  
  // Read source files
  const [blogSource, blogContentSource, productSource] = await Promise.all([
    readFileSafe(BLOG_FILE),
    readFileSafe(BLOG_CONTENT_FILE),
    readFileSafe(PRODUCT_FILE)
  ])
  
  // Parse blog posts
  const blogPosts = parseBlogPosts(blogSource)
  console.log(`[prerender] Found ${blogPosts.length} blog posts`)

  const blogContents = parseBlogContents(blogContentSource)
  const blogContentMap = new Map(blogContents.map(content => [content.slug, content]))
  console.log(`[prerender] Found ${blogContents.length} manual content entries`)

  const { products: allProducts, assetMap } = parseProductFile(productSource)
  console.log(`[prerender] Loaded ${allProducts.length} products for showcase mapping`)
  
  // Create output directory
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true })
    await fs.mkdir(OUTPUT_ASSETS_DIR, { recursive: true })
  } catch (error) {
    console.error('[prerender] Failed to create output directory:', error)
    return
  }
  
  // Generate HTML for each blog post
  let successCount = 0
  let failCount = 0
  let fallbackCount = 0
  const copiedAssets = new Set()
  
  for (const post of blogPosts) {
    try {
      const manualContent = blogContentMap.get(post.slug)
      const content = manualContent || createFallbackContent(post)
      if (!manualContent) {
        fallbackCount++
      }
      
      const otherArticles = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)
      const relevantProducts = getRelevantProductsForBlogPost(post, allProducts)
      const showcaseHeading = getProductShowcaseHeadingStatic(post.slug, post.title)
      const shouldShowServiceAreas =
        post.category === 'Local Area Guide' ||
        post.slug === 'furniture-besi-custom-bekasi-workshop-terpercaya' ||
        post.slug === 'bikin-furniture-besi-custom-jabodetabek-berkualitas'

      if (hasProductRelatedKeywords(post) && relevantProducts.length > 0) {
        await ensureProductAssetsCopied(relevantProducts.slice(0, 3), assetMap, copiedAssets)
      }

      // Generate HTML
      const html = generateBlogPostHTML(post, content, {
        otherArticles,
        relevantProducts,
        showcaseHeading,
        baseUrl: BASE_URL,
        showServiceAreas: shouldShowServiceAreas
      })
      
      // Create directory for this post
      const postDir = path.join(OUTPUT_DIR, post.slug)
      await fs.mkdir(postDir, { recursive: true })
      
      // Write HTML file
      const htmlPath = path.join(postDir, 'index.html')
      await fs.writeFile(htmlPath, html, 'utf8')
      
      successCount++
      
      if (successCount % 50 === 0) {
        console.log(`[prerender] Progress: ${successCount}/${blogPosts.length}`)
      }
    } catch (error) {
      console.error(`[prerender] Failed to generate HTML for ${post.slug}:`, error.message)
      failCount++
    }
  }
  
  console.log(`[prerender] ✅ Successfully generated ${successCount} blog post HTML files`)
  if (failCount > 0) {
    console.log(`[prerender] ❌ Failed to generate ${failCount} files`)
  }
  if (fallbackCount > 0) {
    console.log(`[prerender] ℹ️ Used fallback content for ${fallbackCount} posts`)
  }
  console.log(`[prerender] 📁 Output directory: ${OUTPUT_DIR}`)
  console.log('[prerender] 🎉 Pre-rendering complete!')
}

main().catch((error) => {
  console.error('[prerender] Failed to pre-render blog posts:', error)
  process.exitCode = 1
})
