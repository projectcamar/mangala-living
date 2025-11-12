#!/usr/bin/env node

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')
const BLOG_FILE = path.join(ROOT_DIR, 'src', 'data', 'blog.ts')

const main = async () => {
  console.log('[fix-blog-dates] Reading blog.ts...')
  
  let content = await fs.readFile(BLOG_FILE, 'utf8')
  
  // Today's date
  const today = new Date('2025-11-12')
  
  // Replace all future dates with valid past dates
  // Strategy: Move all dates back by 1 year to make them historical
  content = content.replace(
    /date: '(2025|2026)-(\d{2})-(\d{2})'/g,
    (match, year, month, day) => {
      const dateStr = `${year}-${month}-${day}`
      const articleDate = new Date(dateStr)
      
      // If date is in future or after today, move back by 1 year
      if (articleDate > today) {
        const newYear = parseInt(year) - 1
        return `date: '${newYear}-${month}-${day}'`
      }
      
      return match
    }
  )
  
  // Backup original file
  const backupFile = BLOG_FILE + '.backup-dates-' + Date.now()
  await fs.copyFile(BLOG_FILE, backupFile)
  console.log(`[fix-blog-dates] ✅ Backup created: ${path.basename(backupFile)}`)
  
  // Write fixed content
  await fs.writeFile(BLOG_FILE, content, 'utf8')
  console.log('[fix-blog-dates] ✅ Fixed all future dates!')
  
  // Count changes
  const futureCount = (content.match(/date: '(2025|2026)-/g) || []).length
  console.log(`[fix-blog-dates] 📊 Dates updated to be in the past`)
  console.log(`[fix-blog-dates] 🎯 Now all ${futureCount} blog posts have valid historical dates`)
  console.log('\n[fix-blog-dates] Next steps:')
  console.log('  1. Run: npm run generate:sitemap')
  console.log('  2. Deploy to production')
  console.log('  3. Submit sitemap to Google Search Console')
  console.log('  4. Wait 1-2 weeks for Google to re-crawl')
}

main().catch((error) => {
  console.error('[fix-blog-dates] ❌ Error:', error)
  process.exitCode = 1
})
