/**
 * Blog Automation Script — Mangala Living (Singapore VPS)
 * Runs 3x per day via Cron (08:00, 14:00, 20:00)
 *
 * Flow:
 * 1. Reads next topic from topics.json
 * 2. Calls LLM API (OpenRouter / Groq / OpenAI) to generate article
 * 3. Appends new post metadata to src/data/blog.ts
 * 4. Appends new post content sections to src/data/blogContent.ts
 * 5. Appends URL to public/post-sitemap.xml
 * 6. Executes git add, commit, and push to GitHub (projectcamar/mangala-living) -> Triggers Vercel deploy
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Load environment variables
const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY
const GROQ_KEY = process.env.GROQ_API_KEY
const OPENAI_KEY = process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY

const TOPICS_FILE = path.join(__dirname, 'topics.json')
const BLOG_DATA_FILE = path.join(__dirname, '../../src/data/blog.ts')
const BLOG_CONTENT_FILE = path.join(__dirname, '../../src/data/blogContent.ts')
const SITEMAP_FILE = path.join(__dirname, '../../public/post-sitemap.xml')

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function callLLM(prompt) {
  if (OPENROUTER_KEY) {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1:free',
        messages: [{ role: 'user', content: prompt }],
      }),
    })
    const data = await res.json()
    if (data.choices && data.choices[0]) {
      return data.choices[0].message.content
    }
  }

  if (GROQ_KEY) {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
      }),
    })
    const data = await res.json()
    if (data.choices && data.choices[0]) {
      return data.choices[0].message.content
    }
  }

  throw new Error('No working LLM API key configured in environment variables.')
}

async function run() {
  console.log('🚀 Starting Mangala Living Blog Automation Script...')

  if (!fs.existsSync(TOPICS_FILE)) {
    console.error('❌ topics.json file not found.')
    process.exit(1)
  }

  const topics = JSON.parse(fs.readFileSync(TOPICS_FILE, 'utf8'))
  if (topics.length === 0) {
    console.log('⚠️ All topics processed!')
    return
  }

  // Take the first topic and pop it from topics.json
  const topicItem = topics.shift()
  fs.writeFileSync(TOPICS_FILE, JSON.stringify(topics, null, 2))

  const dateStr = new Date().toISOString().split('T')[0]
  const slug = slugify(topicItem.topic)

  console.log(`📝 Generating article for topic: "${topicItem.topic}"`)

  const prompt = `Anda adalah penulis konten SEO senior untuk Mangala Living (manufacturer furniture industrial & bengkel las besi custom terpercaya di Bekasi sejak 1999).

Buatkan artikel blog SEO yang sangat informatif, mendalam, dan profesional tentang:
Judul: "${topicItem.topic}"
Kata Kunci Utama: ${topicItem.keywords.join(', ')}

Format keluaran HARUS berupa JSON murni dengan struktur persis seperti ini (tanpa markdown backtick):
{
  "title": "${topicItem.topic}",
  "excerpt": "Ringkasan informatif 1-2 kalimat untuk meta deskripsi dan preview.",
  "sections": [
    {
      "heading": "Judul Sub-Bagian 1",
      "paragraphs": ["Paragraf 1 yang mendalam...", "Paragraf 2 yang informatif..."],
      "list": ["Poin 1", "Poin 2", "Poin 3"]
    },
    {
      "heading": "Judul Sub-Bagian 2",
      "paragraphs": ["Paragraf penjelasan..."],
      "list": ["Keunggulan A", "Keunggulan B"]
    },
    {
      "heading": "Kesimpulan & Konsultasi Gratis",
      "paragraphs": ["Kesimpulan dan ajakan menghubungi Mangala Living Bekasi di +6288801146881 atau kunjungi workshop kami di Setu Cibitung Bekasi."]
    }
  ]
}`

  try {
    const rawResponse = await callLLM(prompt)
    const cleanJson = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim()
    const article = JSON.parse(cleanJson)

    // Calculate next ID from blog.ts
    const blogTsContent = fs.readFileSync(BLOG_DATA_FILE, 'utf8')
    const idMatches = [...blogTsContent.matchAll(/"id":\s*(\d+)/g)]
    const maxId = idMatches.length ? Math.max(...idMatches.map(m => parseInt(m[1]))) : 100
    const newId = maxId + 1

    const newPostMeta = {
      id: newId,
      slug: slug,
      title: article.title,
      category: topicItem.category || 'Steel Fabrication',
      excerpt: article.excerpt,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop',
      date: dateStr,
      author: 'Tim Mangala Living',
      status: 'synced',
    }

    // 1. Append to blog.ts
    const lastBracketIndex = blogTsContent.lastIndexOf(']')
    const updatedBlogTs = blogTsContent.slice(0, lastBracketIndex) + `,\n  ${JSON.stringify(newPostMeta, null, 4)}\n` + blogTsContent.slice(lastBracketIndex)
    fs.writeFileSync(BLOG_DATA_FILE, updatedBlogTs, 'utf8')
    console.log(`✅ Appended metadata to blog.ts (ID: ${newId})`)

    // 2. Append to blogContent.ts
    const blogContentTs = fs.readFileSync(BLOG_CONTENT_FILE, 'utf8')
    const newContentObj = {
      slug: slug,
      sections: article.sections,
    }

    const lastContentBracket = blogContentTs.lastIndexOf(']')
    const updatedContentTs = blogContentTs.slice(0, lastContentBracket) + `,\n  ${JSON.stringify(newContentObj, null, 4)}\n` + blogContentTs.slice(lastContentBracket)
    fs.writeFileSync(BLOG_CONTENT_FILE, updatedContentTs, 'utf8')
    console.log(`✅ Appended sections to blogContent.ts`)

    // 3. Append to post-sitemap.xml
    if (fs.existsSync(SITEMAP_FILE)) {
      let sitemapContent = fs.readFileSync(SITEMAP_FILE, 'utf8')
      const newUrlEntry = `  <url>\n    <loc>https://mangala-living.com/blog/${slug}</loc>\n    <lastmod>${dateStr}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.80</priority>\n  </url>\n`
      sitemapContent = sitemapContent.replace('</urlset>', `${newUrlEntry}</urlset>`)
      fs.writeFileSync(SITEMAP_FILE, sitemapContent, 'utf8')
      console.log(`✅ Added URL to post-sitemap.xml`)
    }

    // 4. Git commit & push
    console.log('🔄 Executing git commit and push...')
    execSync('git add .', { stdio: 'inherit' })
    execSync(`git commit -m "feat(blog): auto-publish post '${article.title}' [skip ci]"`, { stdio: 'inherit' })
    execSync('git push origin main', { stdio: 'inherit' })

    console.log('🎉 Successfully published blog post and pushed to Vercel!')
  } catch (err) {
    console.error('❌ Error during blog automation:', err)
  }
}

run()
