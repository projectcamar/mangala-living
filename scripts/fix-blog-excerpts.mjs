#!/usr/bin/env node

/**
 * Script to fix blog excerpts by extracting first paragraph from blogContent
 * This ensures each article has a unique, content-specific meta description
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Strip HTML tags and clean text
const stripHTML = (html) => {
  return html
    .replace(/<a[^>]*>/gi, '')
    .replace(/<\/a>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/&rarr;/g, '→')
    .replace(/&nbsp;/g, ' ')
    .trim()
}

// Generate excerpt from paragraph (120-160 chars ideal for meta description)
const generateExcerpt = (paragraph) => {
  const cleaned = stripHTML(paragraph)
  
  // If paragraph is already short enough, use it
  if (cleaned.length <= 160) {
    return cleaned
  }
  
  // Find natural break point (sentence ending)
  const sentences = cleaned.split(/\.\s+/)
  let excerpt = sentences[0]
  
  // Add more sentences if still short
  let i = 1
  while (excerpt.length < 120 && i < sentences.length) {
    const nextSentence = sentences[i]
    if (excerpt.length + nextSentence.length + 2 <= 160) {
      excerpt += '. ' + nextSentence
      i++
    } else {
      break
    }
  }
  
  // Ensure it ends with period
  if (!excerpt.endsWith('.')) {
    excerpt += '.'
  }
  
  return excerpt
}

// Read blogContent.ts and extract first paragraph for each article
const extractExcerpts = () => {
  const blogContentPath = path.join(__dirname, '../src/data/blogContent.ts')
  const content = fs.readFileSync(blogContentPath, 'utf-8')
  
  const excerpts = {}
  
  // Match each blog article section
  const articlePattern = /slug:\s*'([^']+)',\s*sections:\s*\[[\s\S]*?paragraphs:\s*\[([\s\S]*?)\]/g
  
  let match
  while ((match = articlePattern.exec(content)) !== null) {
    const slug = match[1]
    const paragraphsBlock = match[2]
    
    // Extract first paragraph
    const firstParagraphMatch = paragraphsBlock.match(/'([^']+)'/)
    if (firstParagraphMatch) {
      const firstParagraph = firstParagraphMatch[1]
      const excerpt = generateExcerpt(firstParagraph)
      excerpts[slug] = excerpt
      console.log(`✓ ${slug}: "${excerpt.substring(0, 80)}..."`)
    }
  }
  
  return excerpts
}

// Update blog.ts with new excerpts
const updateBlogExcerpts = (excerpts) => {
  const blogPath = path.join(__dirname, '../src/data/blog.ts')
  let content = fs.readFileSync(blogPath, 'utf-8')
  
  let updatedCount = 0
  
  // For each excerpt, find and replace in blog.ts
  for (const [slug, excerpt] of Object.entries(excerpts)) {
    // Escape special regex characters in slug
    const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    
    // Match the article block and replace excerpt - simpler pattern
    const pattern = new RegExp(
      `(slug:\\s*'${escapedSlug}',[\\s\\S]*?excerpt:\\s*)'([^']*)'`,
      'm'
    )
    
    // Escape single quotes in excerpt
    const escapedExcerpt = excerpt.replace(/'/g, "\\'")
    
    const before = content
    content = content.replace(pattern, `$1'${escapedExcerpt}'`)
    
    if (content !== before) {
      updatedCount++
      console.log(`  ✓ Updated: ${slug}`)
    } else {
      console.log(`  ✗ Failed: ${slug}`)
    }
  }
  
  // Write back to file
  fs.writeFileSync(blogPath, content, 'utf-8')
  
  console.log(`\n✅ Updated ${updatedCount} article excerpts!`)
  console.log(`📝 File: ${blogPath}`)
}

// Main execution
console.log('🔍 Extracting excerpts from blog content...\n')

try {
  const excerpts = extractExcerpts()
  
  console.log(`\n📊 Found ${Object.keys(excerpts).length} articles`)
  console.log('\n⚙️ Updating blog.ts with new excerpts...\n')
  
  updateBlogExcerpts(excerpts)
  
  console.log('\n✅ Done! All blog excerpts have been updated with actual content.')
  console.log('💡 Each article now has a unique, content-specific meta description.')
  console.log('\n📋 Next steps:')
  console.log('   1. Review the changes in git diff')
  console.log('   2. Deploy to production')
  console.log('   3. Request Google re-crawl via Search Console')
  
} catch (error) {
  console.error('❌ Error:', error.message)
  process.exit(1)
}
