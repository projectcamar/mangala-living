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

const parseBlogPosts = (source) => {
  const posts = []
  const regex = /{[^}]*?id:\s*(\d+)[^}]*?slug:\s*'([^']+)'[^}]*?title:\s*'([^']+)'[^}]*?category:\s*'([^']+)'[^}]*?excerpt:\s*'([^']+)'[^}]*?image:\s*'([^']+)'[^}]*?date:\s*'([^']+)'[^}]*?author:\s*'([^']+)'[^}]*?}/gs
  let match
  while ((match = regex.exec(source))) {
    const [, id, slug, title, category, excerpt, image, date, author] = match
    posts.push({
      id: parseInt(id),
      slug,
      title,
      category,
      excerpt,
      image,
      date,
      author: author || 'Helmi Ramdan'
    })
  }
  return posts
}

const parseBlogContent = (source, slug) => {
  // Find the content for this specific slug
  const regex = new RegExp(`'${slug}':\\s*{[^}]*?metaDescription:\\s*'([^']+)'[^}]*?introduction:\\s*'([^']+)'[^}]*?sections:\\s*\\[([\\s\\S]*?)\\]`, 'g')
  const match = regex.exec(source)
  
  if (!match) return null
  
  const [, metaDescription, introduction, sectionsStr] = match
  
  // Parse sections - simplified parsing
  const sections = []
  const sectionRegex = /{[^}]*?heading:\s*'([^']*?)'[^}]*?content:\s*'([^']*?)'[^}]*?}/gs
  let sectionMatch
  while ((sectionMatch = sectionRegex.exec(sectionsStr))) {
    const [, heading, content] = sectionMatch
    sections.push({ heading, content })
  }
  
  return {
    metaDescription,
    introduction,
    sections
  }
}

const generateBlogPostHTML = (post, content) => {
  const metaDescription = content?.metaDescription || post.excerpt
  const introduction = content?.introduction || post.excerpt
  
  // Generate sections HTML
  let sectionsHTML = ''
  if (content?.sections) {
    sectionsHTML = content.sections.map(section => {
      if (!section.heading && !section.content) return ''
      return `
        <section style="margin: 30px 0;">
          ${section.heading ? `<h2 style="color: #333; font-size: 24px; margin-bottom: 15px;">${escapeHtml(section.heading)}</h2>` : ''}
          ${section.content ? `<p style="line-height: 1.8; color: #555;">${escapeHtml(section.content)}</p>` : ''}
        </section>
      `
    }).join('')
  }
  
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
      padding: 20px;
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
        <span>📅 ${post.date}</span>
      </div>
      ${post.image ? `<img src="${post.image}" alt="${escapeHtml(post.title)}" class="article-image" loading="lazy">` : ''}
    </header>
    
    <div class="article-content">
      <p style="font-size: 18px; font-weight: 500; color: #333;">${escapeHtml(introduction)}</p>
      
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
  
  for (const post of blogPosts) {
    try {
      // Parse content for this post
      const content = parseBlogContent(blogContentSource, post.slug)
      
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
  console.log(`[prerender] 📁 Output directory: ${OUTPUT_DIR}`)
  console.log('[prerender] 🎉 Pre-rendering complete!')
}

main().catch((error) => {
  console.error('[prerender] Failed to pre-render blog posts:', error)
  process.exitCode = 1
})
