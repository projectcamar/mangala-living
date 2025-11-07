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
      :root {
        color-scheme: light;
        --brand-bg: #ffffff;
        --brand-dark: #2c3e50;
        --brand-muted: #7f8c8d;
        --brand-border: #e0e0e0;
        --brand-accent: #8B7355;
        --brand-accent-dark: #6f5b42;
        --brand-black: #2c2c2c;
      }
      body {
        margin: 0;
        font-family: 'Plus Jakarta Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: var(--brand-bg);
        color: var(--brand-dark);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
      }
      a {
        color: var(--brand-accent);
        text-decoration: none;
        transition: color 0.3s ease;
      }
      a:hover {
        color: var(--brand-accent-dark);
      }
      img { display: block; max-width: 100%; height: auto; }
      .static-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
      .static-announcement-bar { background: var(--brand-black); color: #fff; padding: 8px 0; font-size: 0.85rem; letter-spacing: 0.02em; }
      .static-announcement-content { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 12px; }
      .static-announcement-highlight { color: var(--brand-accent); font-weight: 600; margin-left: 8px; }
      .static-announcement-cta { background: var(--brand-accent); color: #fff; padding: 6px 18px; border-radius: 4px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; }
      .static-announcement-cta:hover { background: var(--brand-accent-dark); color: #fff; }
      .static-header { background: #fff; box-shadow: 0 12px 32px rgba(0,0,0,0.08); position: sticky; top: 0; z-index: 20; }
      .static-header-top { border-bottom: 1px solid rgba(0,0,0,0.05); }
      .static-header-top-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 14px 0; }
      .static-header-nav { display: flex; gap: 24px; font-size: 0.85rem; letter-spacing: 0.12em; text-transform: uppercase; }
      .static-header-link { color: var(--brand-dark); font-weight: 500; }
      .static-header-link:hover { color: var(--brand-accent); }
      .static-header-brand { font-weight: 300; font-size: 1.6rem; letter-spacing: 0.3em; color: #000; }
      .static-header-actions { display: flex; align-items: center; gap: 16px; }
      .static-language-pill { background: rgba(0,0,0,0.05); color: var(--brand-dark); padding: 6px 12px; border-radius: 999px; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; }
      .static-header-action { color: var(--brand-dark); font-weight: 500; }
      .static-header-action:hover { color: var(--brand-accent); }
      .static-header-button { border: 1.5px solid var(--brand-black); color: var(--brand-black); padding: 10px 20px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; transition: all 0.3s ease; background: transparent; }
      .static-header-button:hover { background: var(--brand-black); color: #fff; }
      .static-header-bottom { background: #fff; }
      .static-header-bottom-inner { display: flex; overflow-x: auto; padding: 12px 0; }
      .static-category-nav { display: flex; gap: 20px; font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; }
      .static-category-link { color: var(--brand-muted); position: relative; }
      .static-category-link::after { content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 1px; background: transparent; transition: background 0.3s ease; }
      .static-category-link:hover { color: var(--brand-dark); }
      .static-category-link:hover::after { background: var(--brand-dark); }
      .static-main { padding: 120px 0 80px; background: #fff; }
      .static-breadcrumb { font-size: 0.85rem; color: var(--brand-muted); margin-bottom: 28px; }
      .static-breadcrumb ol { list-style: none; display: flex; gap: 8px; margin: 0; padding: 0; flex-wrap: wrap; }
      .static-breadcrumb li::after { content: '/'; margin-left: 8px; color: #bdc3c7; }
      .static-breadcrumb li:last-child::after { display: none; }
      .static-breadcrumb a { color: var(--brand-accent); font-weight: 500; }
      .static-layout { display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); gap: 60px; align-items: flex-start; }
      .static-article { background: #fff; padding: 48px; border-radius: 16px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 24px 60px rgba(0,0,0,0.08); }
      .static-back-link { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; color: var(--brand-dark); text-transform: uppercase; letter-spacing: 0.14em; font-size: 0.75rem; margin-bottom: 24px; }
      .static-back-link:hover { color: var(--brand-accent); }
      .static-article h1 { font-size: 2.6rem; font-weight: 400; color: var(--brand-dark); margin: 0 0 18px; letter-spacing: -0.02em; }
      .static-article-meta { display: flex; flex-wrap: wrap; gap: 20px; font-size: 0.9rem; color: var(--brand-muted); margin-bottom: 36px; padding-bottom: 20px; border-bottom: 1px solid var(--brand-border); }
      .static-article-meta-item { display: inline-flex; align-items: center; gap: 8px; }
      .static-hero-image { margin: 32px 0; border-radius: 10px; overflow: hidden; box-shadow: 0 14px 40px rgba(0,0,0,0.12); }
      .static-article-section { margin: 40px 0; }
      .static-article-section h2 { font-size: 1.8rem; font-weight: 500; color: var(--brand-dark); margin: 32px 0 16px; letter-spacing: -0.01em; }
      .static-article-section p { margin-bottom: 18px; color: #34495e; text-align: justify; }
      .static-article-section p a { color: var(--brand-accent); font-weight: 500; }
      .static-article-section p a:hover { color: var(--brand-accent-dark); text-decoration: underline; }
      .static-article-section ul { margin: 20px 0; padding-left: 0; list-style: none; }
      .static-article-section li { position: relative; padding-left: 28px; margin-bottom: 14px; color: #34495e; }
      .static-article-section li::before { content: '-'; position: absolute; left: 10px; color: var(--brand-accent); font-weight: 700; }
      .static-article-section li strong { color: var(--brand-dark); }
      .static-article-image { margin: 36px 0; border-radius: 10px; overflow: hidden; background: #f8f9fa; border: 1px solid rgba(0,0,0,0.05); }
      .static-article-image img { width: 100%; height: auto; }
      .static-article-image figcaption { padding: 10px 18px; font-size: 0.75rem; letter-spacing: 0.18em; color: var(--brand-muted); font-weight: 600; }
      .static-product-showcase { margin: 56px 0; padding: 40px; border-radius: 16px; border-left: 4px solid var(--brand-accent); background: linear-gradient(135deg, rgba(139,115,85,0.12), rgba(44,44,44,0)); }
      .static-product-header h2 { font-size: 2rem; font-weight: 500; color: var(--brand-dark); margin: 0 0 12px; }
      .static-product-header p { margin: 0 0 24px; color: var(--brand-muted); font-size: 1rem; max-width: 720px; }
      .static-product-grid { display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
      .static-product-card { background: #fff; border-radius: 14px; overflow: hidden; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 18px 45px rgba(0,0,0,0.08); transition: transform 0.3s ease, box-shadow 0.3s ease; }
      .static-product-card:hover { transform: translateY(-6px); box-shadow: 0 22px 60px rgba(0,0,0,0.12); }
      .static-product-card-link { display: block; color: inherit; }
      .static-product-image-wrapper { position: relative; overflow: hidden; height: 220px; }
      .static-product-image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
      .static-product-card:hover .static-product-image-wrapper img { transform: scale(1.05); }
      .static-product-badge { position: absolute; top: 16px; left: 16px; background: rgba(255,255,255,0.95); color: var(--brand-dark); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.16em; padding: 6px 14px; }
      .static-product-info { padding: 22px 24px 28px; }
      .static-product-info h3 { margin: 0 0 10px; font-size: 1.1rem; font-weight: 500; color: var(--brand-dark); }
      .static-product-categories { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
      .static-product-categories span { background: rgba(139,115,85,0.12); color: var(--brand-accent); padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; }
      .static-product-prices { display: flex; flex-direction: column; gap: 4px; margin-bottom: 18px; }
      .static-price-primary { font-weight: 600; color: var(--brand-dark); }
      .static-price-secondary { color: var(--brand-muted); font-size: 0.9rem; }
      .static-product-cta { font-weight: 600; color: var(--brand-accent); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; }
      .static-product-footer { margin-top: 32px; text-align: center; }
      .static-product-button { display: inline-block; padding: 12px 28px; border-radius: 30px; border: 2px solid var(--brand-black); color: var(--brand-black); font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; transition: all 0.3s ease; }
      .static-product-button:hover { background: var(--brand-black); color: #fff; }
      .static-sidebar { position: sticky; top: 120px; }
      .static-sidebar h3 { font-size: 1.5rem; font-weight: 500; color: var(--brand-dark); margin: 0 0 24px; }
      .static-sidebar-grid { display: grid; gap: 24px; }
      .static-sidebar-card { display: block; background: #fff; border-radius: 14px; overflow: hidden; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 16px 40px rgba(0,0,0,0.08); transition: transform 0.3s ease, box-shadow 0.3s ease; color: inherit; }
      .static-sidebar-card:hover { transform: translateY(-4px); box-shadow: 0 22px 55px rgba(0,0,0,0.12); }
      .static-sidebar-image { position: relative; height: 200px; overflow: hidden; }
      .static-sidebar-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
      .static-sidebar-card:hover .static-sidebar-image img { transform: scale(1.08); }
      .static-sidebar-badge { position: absolute; top: 12px; left: 12px; background: rgba(255,255,255,0.95); color: var(--brand-dark); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.16em; padding: 6px 14px; }
      .static-sidebar-info { padding: 18px 20px 24px; }
      .static-sidebar-category { display: block; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; color: var(--brand-muted); margin-bottom: 8px; }
      .static-sidebar-info h4 { margin: 0; font-size: 1.05rem; font-weight: 500; color: var(--brand-dark); line-height: 1.4; }
      .static-sidebar-card:hover .static-sidebar-info h4 { color: var(--brand-accent); }
      .static-author-card { background: #f8f9fa; border: 1px solid rgba(0,0,0,0.05); border-left: 4px solid var(--brand-accent); border-radius: 14px; padding: 32px; margin: 48px 0; }
      .static-author-card-inner { display: flex; gap: 20px; align-items: flex-start; }
      .static-author-avatar { width: 60px; height: 60px; border-radius: 50%; background: var(--brand-accent); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; letter-spacing: 0.08em; }
      .static-author-card h3 { margin: 0 0 6px; font-weight: 500; }
      .static-author-title { margin: 0 0 16px; color: var(--brand-muted); font-size: 0.95rem; }
      .static-author-card ul { margin: 0 0 18px; padding-left: 20px; color: #34495e; }
      .static-author-card li { margin-bottom: 10px; }
      .static-author-card a { color: var(--brand-accent); font-weight: 600; }
      .static-author-card a:hover { color: var(--brand-accent-dark); }
      .static-cta { background: var(--brand-black); color: #fff; padding: 48px; border-left: 4px solid var(--brand-accent); border-radius: 16px; margin: 64px 0 36px; text-align: center; position: relative; overflow: hidden; }
      .static-cta::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(139,115,85,0.18), rgba(0,0,0,0)); }
      .static-cta > * { position: relative; z-index: 1; }
      .static-cta h3 { margin: 0 0 12px; font-size: 1.9rem; font-weight: 400; letter-spacing: 0.04em; }
      .static-cta p { margin: 0 0 28px; font-size: 1.05rem; opacity: 0.92; }
      .static-cta-buttons { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
      .static-cta-button { display: inline-flex; align-items: center; justify-content: center; padding: 12px 28px; border-radius: 28px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
      .static-cta-button.primary { background: var(--brand-accent); color: #fff; border: 2px solid var(--brand-accent); }
      .static-cta-button.primary:hover { background: var(--brand-accent-dark); border-color: var(--brand-accent-dark); }
      .static-cta-button.secondary { border: 2px solid rgba(255,255,255,0.7); color: #fff; background: transparent; }
      .static-cta-button.secondary:hover { background: #fff; color: var(--brand-dark); }
      .static-service-areas { background: linear-gradient(180deg, rgba(139,115,85,0.1), rgba(255,255,255,0)); padding: 80px 0; }
      .static-service-areas h2 { text-align: center; font-size: 2rem; font-weight: 500; color: var(--brand-dark); margin: 0 0 12px; }
      .static-service-areas p { text-align: center; margin: 0 auto 32px; max-width: 720px; color: var(--brand-muted); }
      .static-service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
      .static-service-grid div { background: #fff; border-radius: 14px; padding: 24px; box-shadow: 0 18px 45px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.06); }
      .static-service-grid h3 { margin: 0 0 12px; color: var(--brand-dark); font-weight: 500; }
      .static-footer { background: #101418; color: #eceff1; padding: 70px 0 40px; margin-top: 70px; }
      .static-footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 28px; }
      .static-footer h3 { margin-top: 0; font-size: 1.5rem; font-weight: 500; color: #fff; letter-spacing: 0.08em; }
      .static-footer h4 { margin-top: 0; color: #fff; letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.9rem; }
      .static-footer p { margin: 0 0 12px; color: rgba(236,239,241,0.85); font-size: 0.95rem; }
      .static-footer a { color: rgba(236,239,241,0.95); font-weight: 500; }
      .static-footer a:hover { color: var(--brand-accent); }
      .static-footer ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
      .static-footer-form { display: flex; flex-direction: column; gap: 10px; }
      .static-footer-form input { padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(236,239,241,0.3); background: rgba(255,255,255,0.08); color: #fff; }
      .static-footer-form button { padding: 10px 14px; border-radius: 8px; border: none; background: var(--brand-accent); color: #fff; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: background 0.3s ease; }
      .static-footer-form button:hover { background: var(--brand-accent-dark); }
      .static-footer-bottom { border-top: 1px solid rgba(236,239,241,0.12); margin-top: 40px; padding-top: 18px; font-size: 0.85rem; color: rgba(236,239,241,0.7); text-align: center; }
      @media (max-width: 1024px) {
        .static-header-top-inner { flex-wrap: wrap; justify-content: center; text-align: center; }
        .static-header-nav { justify-content: center; flex-wrap: wrap; }
        .static-header-actions { justify-content: center; }
        .static-layout { grid-template-columns: 1fr; }
        .static-sidebar { position: static; }
        .static-sidebar-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
      }
      @media (max-width: 768px) {
        .static-container { padding: 0 18px; }
        .static-main { padding: 100px 0 60px; }
        .static-article { padding: 32px 24px; }
        .static-article h1 { font-size: 2rem; }
        .static-article-meta { flex-direction: column; gap: 10px; }
        .static-article-section h2 { font-size: 1.5rem; }
        .static-product-showcase { padding: 28px 24px; }
        .static-product-image-wrapper { height: 200px; }
        .static-author-card-inner { flex-direction: column; align-items: center; text-align: center; }
        .static-cta { padding: 36px 24px; }
        .static-cta h3 { font-size: 1.6rem; }
        .static-cta-buttons { flex-direction: column; }
        .static-cta-button { width: 100%; }
      }
      @media (max-width: 520px) {
        .static-header-top-inner { gap: 12px; }
        .static-header-brand { font-size: 1.3rem; letter-spacing: 0.2em; }
        .static-header-button { display: none; }
        .static-main { padding: 90px 0 50px; }
        .static-article { padding: 28px 20px; }
        .static-article h1 { font-size: 1.7rem; }
        .static-article-section h2 { font-size: 1.3rem; }
        .static-product-showcase { padding: 24px 18px; }
        .static-sidebar-grid { grid-template-columns: 1fr; }
        .static-service-areas { padding: 60px 0; }
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
