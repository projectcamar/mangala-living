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
const OUTPUT_FILE = path.join(ROOT_DIR, 'public', 'sitemap.xml')

const formatDate = (date) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return new Date().toISOString().split('T')[0]
  }
  return date.toISOString().split('T')[0]
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
  const regex = /{[^}]*?slug:\s*'([^']+)'[^}]*?date:\s*'([^']+)'[^}]*?}/gs
  let match
  while ((match = regex.exec(source))) {
    const [, slug, dateString] = match
    posts.push({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: clampToPastDate(dateString),
      changefreq: 'monthly',
      priority: 0.62
    })
  }
  return posts
}

const parseProducts = (source) => {
  const products = []
  const regex = /{[^}]*?slug:\s*'([^']+)'[^}]*?}/g
  let match
  while ((match = regex.exec(source))) {
    const [, slug] = match
    products.push({
      loc: `${BASE_URL}/product/${slug}`,
      changefreq: 'monthly',
      priority: 0.6
    })
  }
  return products
}

const parseCategorySlugs = (source) => {
  const categories = []
  const regex = /'([^']+)':\s*'[^']+'/g
  let match
  while ((match = regex.exec(source))) {
    const [ , key ] = match
    categories.push(key)
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
  for (const slug of categorySlugs) {
    entries.push({
      loc: `${BASE_URL}/product-category/${slug}`,
      changefreq: 'weekly',
      priority: 0.65,
      lastmod: await getFileLastModified('src/data/products.ts')
    })
  }
  return entries
}

const deduplicate = (items) => {
  const seen = new Set()
  return items.filter((item) => {
    if (seen.has(item.loc)) {
      return false
    }
    seen.add(item.loc)
    return true
  })
}

const generateXml = (entries) => {
  const header = '<?xml version="1.0" encoding="UTF-8"?>'
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  const urlsetClose = '</urlset>'

  const lines = entries.map((entry) => {
    const parts = [
      '  <url>',
      `    <loc>${entry.loc}</loc>`,
      `    <lastmod>${formatDate(entry.lastmod)}</lastmod>`
    ]

    if (entry.changefreq) {
      parts.push(`    <changefreq>${entry.changefreq}</changefreq>`)
    }
    if (entry.priority !== undefined) {
      parts.push(`    <priority>${entry.priority.toFixed(2)}</priority>`)
    }

    parts.push('  </url>')
    return parts.join('\n')
  })

  return [header, urlsetOpen, ...lines, urlsetClose, ''].join('\n')
}

const main = async () => {
  const [blogSource, productSource, categorySource] = await Promise.all([
    readFileSafe(BLOG_FILE),
    readFileSafe(PRODUCTS_FILE),
    readFileSafe(CATEGORY_FILE)
  ])

  const [staticPages, blogPosts, products, categories] = await Promise.all([
    buildStaticPages(),
    Promise.resolve(parseBlogPosts(blogSource)),
    Promise.resolve(parseProducts(productSource)),
    Promise.resolve(parseCategorySlugs(categorySource))
  ])

  const categoryPages = await buildCategoryPages(categories)

  const latestBlogDate = blogPosts.reduce((latest, entry) => {
    const time = entry.lastmod.getTime()
    return time > latest ? time : latest
  }, 0)

  const blogListing = staticPages.find(page => page.loc === `${BASE_URL}/blog`)
  if (blogListing && latestBlogDate) {
    blogListing.lastmod = new Date(latestBlogDate)
  }

  const urls = deduplicate([
    ...staticPages,
    ...categoryPages,
    ...products,
    ...blogPosts
  ]).sort((a, b) => a.loc.localeCompare(b.loc))

  const xml = generateXml(urls)
  await fs.writeFile(OUTPUT_FILE, xml, 'utf8')
  console.log(`[sitemap] Generated ${urls.length} urls at ${path.relative(ROOT_DIR, OUTPUT_FILE)}`)
}

main().catch((error) => {
  console.error('[sitemap] Failed to generate sitemap:', error)
  process.exitCode = 1
})
