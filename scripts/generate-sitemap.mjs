#!/usr/bin/env node

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')
const BASE_URL = process.env.SITEMAP_BASE_URL || 'https://mangala-living.com'

const BLOG_FILE = path.join(ROOT_DIR, 'src', 'data', 'blog.ts')
const PRODUCTS_FILE = path.join(ROOT_DIR, 'src', 'data', 'products.ts')
const CATEGORY_FILE = path.join(ROOT_DIR, 'src', 'data', 'categories.ts')
const SEO_FILE = path.join(ROOT_DIR, 'src', 'utils', 'seo.ts')
const OUTPUT_DIR = path.join(ROOT_DIR, 'public')

const formatDate = (date) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return new Date().toISOString().split('T')[0]
  }
  return date.toISOString().split('T')[0]
}

const formatDateTime = (date) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return new Date().toISOString()
  }
  return date.toISOString()
}

const escapeXml = (str) => {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const clampToPastDate = (dateString) => {
  const parsed = new Date(dateString)
  const now = new Date()
  if (Number.isNaN(parsed.getTime())) {
    return now
  }
  return parsed > now ? now : parsed
}

const readFileSafe = async (filePath) => {
  try {
    return await fs.readFile(filePath, 'utf8')
  } catch (error) {
    console.warn(`[sitemap] Unable to read ${filePath}:`, error.message)
    return ''
  }
}

const parseBlogPosts = (source) => {
  const posts = []
  const regex = /{[^}]*?id:\s*(\d+)[^}]*?slug:\s*'([^']+)'[^}]*?title:\s*'([^']+)'[^}]*?image:\s*'([^']+)'[^}]*?date:\s*'([^']+)'[^}]*?}/gs
  let match
  while ((match = regex.exec(source))) {
    const [, id, slug, title, image, dateString] = match
    posts.push({
      id: parseInt(id),
      slug,
      title: escapeXml(title),
      image: escapeXml(image),
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: clampToPastDate(dateString),
      changefreq: 'monthly',
      priority: 0.62
    })
  }
  return posts
}

const extractObjectLiteral = (source, identifier) => {
  const startIndex = source.indexOf(identifier)
  if (startIndex === -1) {
    return ''
  }

  const equalsIndex = source.indexOf('=', startIndex)
  if (equalsIndex === -1) {
    return ''
  }

  const braceStart = source.indexOf('{', equalsIndex)
  if (braceStart === -1) {
    return ''
  }

  let depth = 0
  for (let i = braceStart; i < source.length; i++) {
    const char = source[i]
    if (char === '{') depth++
    if (char === '}') {
      depth--
      if (depth === 0) {
        return source.slice(braceStart + 1, i)
      }
    }
  }

  return ''
}

const parseProductImageMap = (source) => {
  const map = {}
  const objectLiteral = extractObjectLiteral(source, 'const PRODUCT_IMAGE_MAP')
  if (!objectLiteral) {
    return map
  }

  const regex = /'([^']+)'\s*:\s*'([^']+)'/g
  let match
  while ((match = regex.exec(objectLiteral))) {
    const [, slug, filename] = match
    map[slug] = filename
  }

  return map
}

const parseProducts = (source, imageMap) => {
  const products = []
  const regex = /{[^}]*?id:\s*(\d+)[^}]*?slug:\s*'([^']+)'[^}]*?name:\s*'([^']+)'[^}]*?image:\s*([a-zA-Z0-9_]+)[^}]*?}/g
  let match
  while ((match = regex.exec(source))) {
    const [, id, slug, name] = match
    const filename = imageMap[slug]
    const imageUrl = filename ? `${BASE_URL}/assets/${filename}` : ''

    products.push({
      id: parseInt(id),
      slug,
      name: escapeXml(name),
      loc: `${BASE_URL}/product/${slug}`,
      changefreq: 'monthly',
      priority: 0.6,
      image: imageUrl ? escapeXml(imageUrl) : ''
    })
  }
  return products
}

const parseCategorySlugs = (source) => {
  const categories = []
  const regex = /'([^']+)':\s*'([^']+)'/g
  let match
  while ((match = regex.exec(source))) {
    const [, key, value] = match
    categories.push({
      slug: key,
      name: escapeXml(value)
    })
  }
  return categories
}

const getFileLastModified = async (relativePath) => {
  try {
    const stats = await fs.stat(path.join(ROOT_DIR, relativePath))
    return stats.mtime
  } catch (error) {
    console.warn(`[sitemap] Unable to get mtime for ${relativePath}:`, error.message)
    return new Date()
  }
}

const buildStaticPages = async () => {
  const staticPages = [
    { loc: `${BASE_URL}/`, file: 'src/pages/Home.tsx', changefreq: 'weekly', priority: 1.0 },
    { loc: `${BASE_URL}/shop`, file: 'src/pages/Shop.tsx', changefreq: 'weekly', priority: 0.9 },
    { loc: `${BASE_URL}/blog`, file: 'src/pages/Blog.tsx', changefreq: 'daily', priority: 0.9 },
    { loc: `${BASE_URL}/about`, file: 'src/pages/About.tsx', changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/contact-us`, file: 'src/pages/Contact.tsx', changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/custom-order`, file: 'src/pages/CustomOrder.tsx', changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/partnership`, file: 'src/pages/Partnership.tsx', changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/terms-of-service`, file: 'src/pages/TermsOfService.tsx', changefreq: 'yearly', priority: 0.4 },
    { loc: `${BASE_URL}/shipping-information`, file: 'src/pages/ShippingInformation.tsx', changefreq: 'yearly', priority: 0.4 },
    { loc: `${BASE_URL}/search`, file: 'src/pages/SearchResults.tsx', changefreq: 'monthly', priority: 0.4 },
    { loc: `${BASE_URL}/product-tag/best-seller`, file: 'src/pages/BestSellers.tsx', changefreq: 'weekly', priority: 0.6 },
    { loc: `${BASE_URL}/furniture-besi-custom-bekasi`, file: 'src/pages/FurnitureBesiCustomBekasi.tsx', changefreq: 'monthly', priority: 0.75 }
  ]

  return Promise.all(staticPages.map(async (page) => ({
    ...page,
    lastmod: await getFileLastModified(page.file)
  })))
}

const buildCategoryPages = async (categorySlugs) => {
  const entries = []
  for (const category of categorySlugs) {
    entries.push({
      slug: category.slug,
      name: category.name,
      loc: `${BASE_URL}/product-category/${category.slug}`,
      changefreq: 'weekly',
      priority: 0.65,
      lastmod: await getFileLastModified('src/data/products.ts')
    })
  }
  return entries
}

const buildLanguageAlternates = (loc, explicitAlternates) => {
  if (explicitAlternates && explicitAlternates.length > 0) {
    return explicitAlternates
  }

  try {
    const url = new URL(loc)
    const params = url.searchParams
    params.delete('lang')

    const buildUrl = (lang) => {
      const cloned = new URL(loc)
      cloned.searchParams.delete('lang')
      if (lang) {
        cloned.searchParams.set('lang', lang)
      }
      return cloned.toString()
    }

    const defaultUrl = buildUrl(null)
    return [
      { hrefLang: 'id-ID', href: buildUrl('id') },
      { hrefLang: 'en', href: buildUrl('en') },
      { hrefLang: 'x-default', href: defaultUrl }
    ]
  } catch (error) {
    console.warn('[sitemap] Failed to build alternates for', loc, error.message)
    return []
  }
}

// Generate sitemap index (main sitemap.xml)
const generateSitemapIndex = (sitemaps) => {
  const header = '<?xml version="1.0" encoding="UTF-8"?>'
  const stylesheet = '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>'
  const comment = '<!-- Generated by Mangala Living Sitemap Generator, this is an XML Sitemap Index, meant for consumption by search engines. -->'
  const openTag = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  const closeTag = '</sitemapindex>'

  const entries = sitemaps.map((sitemap) => {
    return [
      '  <sitemap>',
      `    <loc>${escapeXml(sitemap.loc)}</loc>`,
      `    <lastmod>${formatDateTime(sitemap.lastmod)}</lastmod>`,
      '  </sitemap>'
    ].join('\n')
  })

  return [header, stylesheet, comment, openTag, ...entries, closeTag, ''].join('\n')
}

// Generate post sitemap (blog posts with images)
const generatePostSitemap = (posts) => {
  const header = '<?xml version="1.0" encoding="UTF-8"?>'
  const stylesheet = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'
  const openTag = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
  const closeTag = '</urlset>'

  const entries = posts.map((post) => {
    const parts = [
      '  <url>',
      `    <loc>${escapeXml(post.loc)}</loc>`,
      `    <lastmod>${formatDate(post.lastmod)}</lastmod>`,
      `    <changefreq>${post.changefreq}</changefreq>`,
      `    <priority>${post.priority.toFixed(2)}</priority>`
    ]

    // Add image tags
    if (post.image) {
      parts.push('    <image:image>')
      parts.push(`      <image:loc>${post.image}</image:loc>`)
      parts.push(`      <image:title>${post.title}</image:title>`)
      parts.push(`      <image:caption>${post.title}</image:caption>`)
      parts.push('    </image:image>')
    }

    // Add language alternates
    const alternates = buildLanguageAlternates(post.loc, post.alternates)
    alternates.forEach((alternate) => {
      if (alternate?.href && alternate?.hrefLang) {
        parts.push(`    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hrefLang)}" href="${escapeXml(alternate.href)}" />`)
      }
    })

    parts.push('  </url>')
    return parts.join('\n')
  })

  return [header, stylesheet, openTag, ...entries, closeTag, ''].join('\n')
}

// Generate page sitemap (static pages)
const generatePageSitemap = (pages) => {
  const header = '<?xml version="1.0" encoding="UTF-8"?>'
  const stylesheet = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'
  const openTag = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
  const closeTag = '</urlset>'

  const entries = pages.map((page) => {
    const parts = [
      '  <url>',
      `    <loc>${escapeXml(page.loc)}</loc>`,
      `    <lastmod>${formatDate(page.lastmod)}</lastmod>`,
      `    <changefreq>${page.changefreq}</changefreq>`,
      `    <priority>${page.priority.toFixed(2)}</priority>`
    ]

    // Add language alternates
    const alternates = buildLanguageAlternates(page.loc, page.alternates)
    alternates.forEach((alternate) => {
      if (alternate?.href && alternate?.hrefLang) {
        parts.push(`    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hrefLang)}" href="${escapeXml(alternate.href)}" />`)
      }
    })

    parts.push('  </url>')
    return parts.join('\n')
  })

  return [header, stylesheet, openTag, ...entries, closeTag, ''].join('\n')
}

// Generate category sitemap
const generateCategorySitemap = (categories) => {
  const header = '<?xml version="1.0" encoding="UTF-8"?>'
  const stylesheet = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'
  const openTag = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
  const closeTag = '</urlset>'

  const entries = categories.map((category) => {
    const parts = [
      '  <url>',
      `    <loc>${escapeXml(category.loc)}</loc>`,
      `    <lastmod>${formatDate(category.lastmod)}</lastmod>`,
      `    <changefreq>${category.changefreq}</changefreq>`,
      `    <priority>${category.priority.toFixed(2)}</priority>`
    ]

    // Add language alternates
    const alternates = buildLanguageAlternates(category.loc, category.alternates)
    alternates.forEach((alternate) => {
      if (alternate?.href && alternate?.hrefLang) {
        parts.push(`    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hrefLang)}" href="${escapeXml(alternate.href)}" />`)
      }
    })

    parts.push('  </url>')
    return parts.join('\n')
  })

  return [header, stylesheet, openTag, ...entries, closeTag, ''].join('\n')
}

// Generate attachment sitemap (images from products and blog)
const generateAttachmentSitemap = (products, posts) => {
  const header = '<?xml version="1.0" encoding="UTF-8"?>'
  const stylesheet = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'
  const openTag = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
  const closeTag = '</urlset>'

  const entries = []
  const now = new Date()

  // Add product images
  products.forEach((product) => {
    if (product.image) {
      entries.push([
        '  <url>',
        `    <loc>${escapeXml(product.loc)}</loc>`,
        `    <lastmod>${formatDate(now)}</lastmod>`,
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.50</priority>',
        '    <image:image>',
        `      <image:loc>${product.image}</image:loc>`,
        `      <image:title>${product.name}</image:title>`,
        `      <image:caption>${product.name} - Furniture Industrial Custom Bekasi</image:caption>`,
        '    </image:image>',
        '  </url>'
      ].join('\n'))
    }
  })

  // Add blog post images
  posts.forEach((post) => {
    if (post.image) {
      entries.push([
        '  <url>',
        `    <loc>${escapeXml(post.loc)}</loc>`,
        `    <lastmod>${formatDate(post.lastmod)}</lastmod>`,
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.50</priority>',
        '    <image:image>',
        `      <image:loc>${post.image}</image:loc>`,
        `      <image:title>${post.title}</image:title>`,
        `      <image:caption>${post.title}</image:caption>`,
        '    </image:image>',
        '  </url>'
      ].join('\n'))
    }
  })

  return [header, stylesheet, openTag, ...entries, closeTag, ''].join('\n')
}

// Generate product sitemap (individual product detail pages)
const generateProductSitemap = (products) => {
  const header = '<?xml version="1.0" encoding="UTF-8"?>'
  const stylesheet = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'
  const openTag = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
  const closeTag = '</urlset>'

  const entries = products.map((product) => {
    const parts = [
      '  <url>',
      `    <loc>${escapeXml(product.loc)}</loc>`,
      `    <lastmod>${formatDate(product.lastmod)}</lastmod>`,
      `    <changefreq>${product.changefreq}</changefreq>`,
      `    <priority>${product.priority.toFixed(2)}</priority>`
    ]

    const alternates = buildLanguageAlternates(product.loc, product.alternates)
    alternates.forEach((alternate) => {
      if (alternate?.href && alternate?.hrefLang) {
        parts.push(`    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hrefLang)}" href="${escapeXml(alternate.href)}" />`)
      }
    })

    parts.push('  </url>')
    return parts.join('\n')
  })

  return [header, stylesheet, openTag, ...entries, closeTag, ''].join('\n')
}

const main = async () => {
  console.log('[sitemap] Starting sitemap generation...')

  // Read source files
    const [blogSource, productSource, categorySource, seoSource] = await Promise.all([
    readFileSafe(BLOG_FILE),
    readFileSafe(PRODUCTS_FILE),
      readFileSafe(CATEGORY_FILE),
      readFileSafe(SEO_FILE)
  ])

    const productImageMap = parseProductImageMap(seoSource)

  // Parse data
    const [staticPages, blogPosts, rawProducts, categorySlugs] = await Promise.all([
    buildStaticPages(),
    Promise.resolve(parseBlogPosts(blogSource)),
      Promise.resolve(parseProducts(productSource, productImageMap)),
    Promise.resolve(parseCategorySlugs(categorySource))
  ])

    const categoryPages = await buildCategoryPages(categorySlugs)
    const productsLastModified = await getFileLastModified('src/data/products.ts')
    const products = rawProducts.map((product) => ({
      ...product,
      lastmod: productsLastModified
    }))

  // Get latest dates for each sitemap
  const latestBlogDate = blogPosts.reduce((latest, entry) => {
    const time = entry.lastmod.getTime()
    return time > latest ? time : latest
  }, 0)

  const latestPageDate = staticPages.reduce((latest, entry) => {
    const time = entry.lastmod.getTime()
    return time > latest ? time : latest
  }, 0)

  const latestCategoryDate = categoryPages.reduce((latest, entry) => {
    const time = entry.lastmod.getTime()
    return time > latest ? time : latest
  }, 0)

  const now = new Date()

  // Update blog listing page with latest blog date
  const blogListing = staticPages.find(page => page.loc === `${BASE_URL}/blog`)
  if (blogListing && latestBlogDate) {
    blogListing.lastmod = new Date(latestBlogDate)
  }

  // Generate individual sitemaps
  console.log('[sitemap] Generating post-sitemap.xml...')
  const postSitemapXml = generatePostSitemap(blogPosts.sort((a, b) => b.lastmod.getTime() - a.lastmod.getTime()))
  await fs.writeFile(path.join(OUTPUT_DIR, 'post-sitemap.xml'), postSitemapXml, 'utf8')

  console.log('[sitemap] Generating page-sitemap.xml...')
  const pageSitemapXml = generatePageSitemap(staticPages.sort((a, b) => a.loc.localeCompare(b.loc)))
  await fs.writeFile(path.join(OUTPUT_DIR, 'page-sitemap.xml'), pageSitemapXml, 'utf8')

  console.log('[sitemap] Generating category-sitemap.xml...')
  const categorySitemapXml = generateCategorySitemap(categoryPages.sort((a, b) => a.loc.localeCompare(b.loc)))
  await fs.writeFile(path.join(OUTPUT_DIR, 'category-sitemap.xml'), categorySitemapXml, 'utf8')

    console.log('[sitemap] Generating product-sitemap.xml...')
    const productSitemapXml = generateProductSitemap(products)
    await fs.writeFile(path.join(OUTPUT_DIR, 'product-sitemap.xml'), productSitemapXml, 'utf8')

    console.log('[sitemap] Generating attachment-sitemap.xml...')
  const attachmentSitemapXml = generateAttachmentSitemap(products, blogPosts)
  await fs.writeFile(path.join(OUTPUT_DIR, 'attachment-sitemap.xml'), attachmentSitemapXml, 'utf8')

  // Generate sitemap index
  console.log('[sitemap] Generating sitemap.xml (index)...')
  const sitemapIndex = [
    {
      loc: `${BASE_URL}/post-sitemap.xml`,
      lastmod: new Date(latestBlogDate || now)
    },
      {
      loc: `${BASE_URL}/page-sitemap.xml`,
      lastmod: new Date(latestPageDate || now)
    },
    {
      loc: `${BASE_URL}/category-sitemap.xml`,
      lastmod: new Date(latestCategoryDate || now)
    },
      {
        loc: `${BASE_URL}/product-sitemap.xml`,
        lastmod: productsLastModified
      },
    {
      loc: `${BASE_URL}/attachment-sitemap.xml`,
      lastmod: now
    }
  ]

  const indexXml = generateSitemapIndex(sitemapIndex)
  await fs.writeFile(path.join(OUTPUT_DIR, 'sitemap.xml'), indexXml, 'utf8')

    console.log('[sitemap] ? Generated sitemap index with 5 sitemaps')
  console.log(`[sitemap] ? post-sitemap.xml: ${blogPosts.length} blog posts`)
  console.log(`[sitemap] ? page-sitemap.xml: ${staticPages.length} pages`)
  console.log(`[sitemap] ? category-sitemap.xml: ${categoryPages.length} categories`)
    console.log(`[sitemap] ? product-sitemap.xml: ${products.length} products`)
    console.log(`[sitemap] ? attachment-sitemap.xml: ${products.length + blogPosts.length} images`)
  console.log('[sitemap] ? All sitemaps generated successfully!')
}

main().catch((error) => {
  console.error('[sitemap] Failed to generate sitemaps:', error)
  process.exitCode = 1
})
