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
const OUTPUT_DIR = path.join(ROOT_DIR, 'dist', 'blog')

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

const evaluateArrayLiteral = (literal, identifier) => {
  if (!literal) {
    console.warn(`[prerender] Unable to locate array literal for ${identifier}`)
    return []
  }

  const sanitized = sanitizeTypeScript(literal)

  try {
    // Wrap in parentheses so Function can evaluate array literal
    return Function(`"use strict"; return (${sanitized});`)()
  } catch (error) {
    console.error(`[prerender] Failed to evaluate array literal for ${identifier}:`, error.message)
    return []
  }
}

const parseTypeScriptArray = (source, identifier) => {
  const literal = extractArrayLiteral(source, identifier)
  return evaluateArrayLiteral(literal, identifier)
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

const generateBlogPostHTML = (post, content) => {
  const introductionParagraphs = content?.sections?.[0]?.paragraphs?.length
    ? content.sections[0].paragraphs
    : [post.excerpt]

  const metaDescription = post.excerpt

  const sectionsHTML = (content?.sections || []).map((section, index) => {
    const parts = []

    if (section.heading) {
      parts.push(`
        <h2 style="color: #2c3e50; font-size: 24px; margin: 35px 0 18px; font-weight: 600; line-height: 1.4;">
          ${escapeHtml(section.heading)}
        </h2>
      `)
    }

    if (section.image) {
      parts.push(`
        <figure style="margin: 30px 0; border-radius: 12px; overflow: hidden; background: #f7f9fc; border: 1px solid #e0e6ef;">
          <img 
            src="${section.image}" 
            alt="${escapeHtml(section.imageAlt || `${post.title} - ${section.heading || 'Mangala Living'}`)}"
            style="width: 100%; display: block;"
            loading="${index < 2 ? 'eager' : 'lazy'}"
          />
          <figcaption style="font-size: 13px; color: #6b7a8f; padding: 12px 18px;">
            ${escapeHtml(section.imageAlt || `${post.title} by Mangala Living`)}
          </figcaption>
        </figure>
      `)
    }

    if (section.paragraphs?.length) {
      section.paragraphs.forEach(paragraph => {
        if (!paragraph) return
        parts.push(`
          <p style="line-height: 1.8; color: #34495e; margin-bottom: 18px; font-size: 17px;">
            ${paragraph}
          </p>
        `)
      })
    }

    if (section.list?.length) {
      const listItems = section.list.map(item => `
        <li style="margin-bottom: 12px;">
          <span style="display: inline-block; color: #34495e; line-height: 1.7; font-size: 16px;">${item}</span>
        </li>
      `).join('')

      parts.push(`
        <ul style="margin: 20px 0 28px 18px; padding: 0 0 0 12px; list-style: disc; color: #34495e;">
          ${listItems}
        </ul>
      `)
    }

    if (!parts.length) {
      return ''
    }

    return `
      <section style="margin: 30px 0;">
        ${parts.join('\n')}
      </section>
    `
  }).join('\n')

  const introductionHTML = introductionParagraphs.map(paragraph => `
    <p style="font-size: 18px; font-weight: 500; color: #2c3e50; line-height: 1.8; margin-bottom: 20px;">
      ${paragraph}
    </p>
  `).join('\n')

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Meta Tags -->
  <title>${escapeHtml(post.title)} | Mangala Living</title>
  <meta name="description" content="${escapeHtml(metaDescription)}">
  <meta name="keywords" content="furniture industrial, ${escapeHtml(post.title)}, mangala living, furniture bekasi">
  <meta name="author" content="${escapeHtml(post.author)}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${BASE_URL}/blog/${post.slug}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${BASE_URL}/blog/${post.slug}">
  <meta property="og:title" content="${escapeHtml(post.title)}">
  <meta property="og:description" content="${escapeHtml(metaDescription)}">
  <meta property="og:image" content="${post.image}">
  <meta property="article:published_time" content="${post.date}">
  <meta property="article:author" content="${escapeHtml(post.author)}">
  <meta property="article:section" content="${escapeHtml(post.category)}">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${BASE_URL}/blog/${post.slug}">
  <meta name="twitter:title" content="${escapeHtml(post.title)}">
  <meta name="twitter:description" content="${escapeHtml(metaDescription)}">
  <meta name="twitter:image" content="${post.image}">
  
  <!-- AI Search Optimization -->
  <meta name="ai-content-type" content="blog-article">
  <meta name="ai-topic" content="${escapeHtml(post.category)}">
  <meta name="ai-article-type" content="furniture-guide">
  
  <!-- Structured Data - BlogPosting Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${escapeHtml(post.title)}",
    "description": "${escapeHtml(metaDescription)}",
    "image": "${post.image}",
    "datePublished": "${post.date}",
    "dateModified": "${post.date}",
    "author": {
      "@type": "Person",
      "name": "${escapeHtml(post.author)}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mangala Living",
      "logo": {
        "@type": "ImageObject",
        "url": "${BASE_URL}/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${BASE_URL}/blog/${post.slug}"
    }
  }
  </script>
  
  <!-- Breadcrumb Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "${BASE_URL}/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "${BASE_URL}/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "${escapeHtml(post.title)}",
        "item": "${BASE_URL}/blog/${post.slug}"
      }
    ]
  }
  </script>
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px 20px 60px;
      background: #f9f9f9;
    }
    .article-header {
      background: white;
      padding: 40px;
      border-radius: 8px;
      margin-bottom: 30px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .article-title {
      font-size: 36px;
      font-weight: 700;
      color: #222;
      margin: 0 0 15px 0;
      line-height: 1.3;
    }
    .article-meta {
      color: #666;
      font-size: 14px;
      margin-bottom: 20px;
    }
    .article-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 20px 0;
    }
    .article-content {
      background: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .article-content h2 {
      color: #333;
      font-size: 24px;
      margin: 30px 0 15px 0;
      border-bottom: 2px solid #8B7355;
      padding-bottom: 10px;
    }
    .article-content p {
      line-height: 1.8;
      color: #555;
      margin-bottom: 20px;
    }
    .back-link {
      display: inline-block;
      margin: 30px 0;
      color: #8B7355;
      text-decoration: none;
      font-weight: 500;
    }
    .back-link:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      body {
        padding: 10px;
      }
      .article-header, .article-content {
        padding: 20px;
      }
      .article-title {
        font-size: 28px;
      }
    }
  </style>
</head>
<body>
  <a href="${BASE_URL}/blog" class="back-link">← Kembali ke Blog</a>
  
  <article>
    <header class="article-header">
      <h1 class="article-title">${escapeHtml(post.title)}</h1>
      <div class="article-meta">
          <span>📁 ${escapeHtml(post.category)}</span> | 
          <span>✍️ ${escapeHtml(post.author)}</span> | 
          <span>📅 ${formatDate(post.date)}</span>
      </div>
      ${post.image ? `<img src="${post.image}" alt="${escapeHtml(post.title)}" class="article-image" loading="lazy">` : ''}
    </header>
    
    <div class="article-content">
        ${introductionHTML}
      
      ${sectionsHTML}
      
      <hr style="margin: 40px 0; border: none; border-top: 1px solid #ddd;">
      
      <p style="text-align: center; color: #666;">
        <strong>Mangala Living</strong> - Manufacturer Furniture Industrial Besi Custom Bekasi<br>
        📞 <a href="https://wa.me/6285212078467" style="color: #8B7355;">+62 852-1207-8467</a> | 
        📧 <a href="mailto:info@mangala-living.com" style="color: #8B7355;">info@mangala-living.com</a>
      </p>
    </div>
  </article>
  
  <a href="${BASE_URL}/blog" class="back-link">← Kembali ke Blog</a>
  
  <!-- SPA Redirect for Interactive Features -->
  <script>
    // After search engine crawlers have read the content, 
    // redirect to the SPA version for full interactive experience
    if (document.readyState === 'complete' && window.location.hash !== '#static') {
      setTimeout(() => {
        window.location.href = '${BASE_URL}/blog/${post.slug}';
      }, 100);
    }
  </script>
</body>
</html>`
}

const main = async () => {
  console.log('[prerender] Starting blog pre-rendering...')
  
  // Read source files
  const [blogSource, blogContentSource] = await Promise.all([
    readFileSafe(BLOG_FILE),
    readFileSafe(BLOG_CONTENT_FILE)
  ])
  
  // Parse blog posts
  const blogPosts = parseBlogPosts(blogSource)
  console.log(`[prerender] Found ${blogPosts.length} blog posts`)

  const blogContents = parseBlogContents(blogContentSource)
  const blogContentMap = new Map(blogContents.map(content => [content.slug, content]))
  console.log(`[prerender] Found ${blogContents.length} manual content entries`)
  
  // Create output directory
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true })
  } catch (error) {
    console.error('[prerender] Failed to create output directory:', error)
    return
  }
  
  // Generate HTML for each blog post
  let successCount = 0
  let failCount = 0
  let fallbackCount = 0
  
  for (const post of blogPosts) {
    try {
      const manualContent = blogContentMap.get(post.slug)
      const content = manualContent || createFallbackContent(post)
      if (!manualContent) {
        fallbackCount++
      }
      
      // Generate HTML
      const html = generateBlogPostHTML(post, content)
      
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
