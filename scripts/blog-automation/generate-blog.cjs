/**
 * Blog Automation Script — Mangala Living (Singapore VPS)
 * Runs 3x per day via Cron (08:00, 14:00, 20:00)
 *
 * Flow:
 * 1. Reads next topic from topics.json
 * 2. Calls LLM API (OpenRouter / Groq) to generate article
 * 3. Appends new post metadata to src/data/blog.ts
 * 4. Appends new post content sections to src/data/blogContent.ts
 * 5. Appends URL to public/post-sitemap.xml
 * 6. Executes git add, commit, and push to GitHub -> Triggers Vercel deploy
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Helper to auto-discover API keys from .env or run.sh files on VPS
function loadEnvFiles() {
  const possiblePaths = [
    path.join(__dirname, '../../.env'),
    '/home/ubuntu/cron-blog/.env',
    '/home/ubuntu/cron-blog/run.sh',
    '/home/ubuntu/.env',
    '/root/cron-blog/.env',
    '/root/cron-blog/run.sh',
  ]
  for (const envPath of possiblePaths) {
    if (fs.existsSync(envPath)) {
      try {
        const content = fs.readFileSync(envPath, 'utf8')
        const lines = content.split('\n')
        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || trimmed.startsWith('#')) continue
          const cleanLine = trimmed.startsWith('export ') ? trimmed.replace('export ', '') : trimmed
          const match = cleanLine.match(/^([A-Za-z0-9_]+)=["']?(.*?)["']?$/)
          if (match) {
            const key = match[1]
            const val = match[2]
            if (!process.env[key] || process.env[key].includes('YOUR_')) {
              process.env[key] = val
            }
          }
        }
      } catch (e) {}
    }
  }
}
loadEnvFiles()

// Load environment variables
// Primary: Mangala keys | Fallback: shared from lasbekasi .env via run.sh
const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY && !process.env.OPENROUTER_API_KEY.includes('YOUR_') ? process.env.OPENROUTER_API_KEY : null
const GROQ_KEY = process.env.GROQ_API_KEY && !process.env.GROQ_API_KEY.includes('YOUR_') ? process.env.GROQ_API_KEY : null
const GROQ_FALLBACK = process.env.GROQ_FALLBACK_KEY || process.env.GROQ_API_KEY
const BLUESMINDS_KEY = process.env.BLUESMINDS_API_KEY

const TOPICS_FILE = path.join(__dirname, 'topics.json')
const BLOG_DATA_FILE = path.join(__dirname, '../../src/data/blog.ts')
const BLOG_CONTENT_FILE = path.join(__dirname, '../../src/data/blogContent.ts')
const SITEMAP_FILE = path.join(__dirname, '../../public/post-sitemap.xml')

// Steel workshop images from Unsplash — rotated per post
const WORKSHOP_IMAGES = [
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop',
]

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function callLLM(prompt) {
  // 1. OpenRouter — Try multiple free/popular models
  if (OPENROUTER_KEY) {
    const openRouterModels = [
      'deepseek/deepseek-r1:free',
      'meta-llama/llama-3.3-70b-instruct:free',
      'deepseek/deepseek-chat',
      'google/gemini-2.0-flash-lite-001',
    ]
    for (const model of openRouterModels) {
      try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${OPENROUTER_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://mangala-living.com',
            'X-Title': 'Mangala Living Blog Automation',
          },
          body: JSON.stringify({
            model: model,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
          }),
        })
        const data = await res.json()
        if (data.choices && data.choices[0] && data.choices[0].message?.content) {
          console.log(`LLM: OpenRouter OK (${model})`)
          return data.choices[0].message.content
        } else if (data.error) {
          console.log(`OpenRouter (${model}) error:`, data.error.message || JSON.stringify(data.error))
        }
      } catch (e) {
        console.log(`OpenRouter (${model}) failed:`, e.message)
      }
    }
  }

  // 2. Groq — Mangala primary key
  if (GROQ_KEY) {
    const groqModels = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant']
    for (const model of groqModels) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${GROQ_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: model, messages: [{ role: 'user', content: prompt }], temperature: 0.7, max_tokens: 3000 }),
        })
        const data = await res.json()
        if (data.choices && data.choices[0] && data.choices[0].message?.content) {
          console.log(`LLM: Groq primary OK (${model})`)
          return data.choices[0].message.content
        } else if (data.error) {
          console.log(`Groq primary (${model}) error:`, data.error.message || JSON.stringify(data.error))
        }
      } catch (e) {
        console.log(`Groq primary (${model}) failed:`, e.message)
      }
    }
  }

  // 3. Groq — lasbekasi fallback key
  if (GROQ_FALLBACK) {
    const groqModels = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant']
    for (const model of groqModels) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${GROQ_FALLBACK}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: model, messages: [{ role: 'user', content: prompt }], temperature: 0.7, max_tokens: 3000 }),
        })
        const data = await res.json()
        if (data.choices && data.choices[0] && data.choices[0].message?.content) {
          console.log(`LLM: Groq fallback OK (${model})`)
          return data.choices[0].message.content
        } else if (data.error) {
          console.log(`Groq fallback (${model}) error:`, data.error.message || JSON.stringify(data.error))
        }
      } catch (e) {
        console.log(`Groq fallback (${model}) failed:`, e.message)
      }
    }
  }

  // 4. Bluesminds — lasbekasi fallback (OpenAI-compatible)
  if (BLUESMINDS_KEY) {
    try {
      const res = await fetch('https://api.bluesminds.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${BLUESMINDS_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.7, max_tokens: 3000 }),
      })
      const data = await res.json()
      if (data.choices && data.choices[0] && data.choices[0].message?.content) {
        console.log('LLM: Bluesminds OK')
        return data.choices[0].message.content
      } else if (data.error) {
        console.log('Bluesminds error:', data.error.message || JSON.stringify(data.error))
      }
    } catch (e) {
      console.log('Bluesminds failed:', e.message)
    }
  }

  throw new Error('All LLM providers and model fallbacks failed. Check API keys and logs on VPS.')
}

async function run() {
  console.log('Starting Mangala Living Blog Automation Script...')

  if (!fs.existsSync(TOPICS_FILE)) {
    console.error('topics.json file not found.')
    process.exit(1)
  }

  const topics = JSON.parse(fs.readFileSync(TOPICS_FILE, 'utf8'))
  if (topics.length === 0) {
    console.log('All topics processed! Refill topics.json to continue.')
    return
  }

  // Take the first topic and remove it from the queue
  const topicItem = topics.shift()
  fs.writeFileSync(TOPICS_FILE, JSON.stringify(topics, null, 2))

  const dateStr = new Date().toISOString().split('T')[0]
  const slug = slugify(topicItem.topic)
  const mainKeyword = topicItem.keywords[0]

  console.log(`Generating article: "${topicItem.topic}" (Category: ${topicItem.category})`)

  const isExportCategory = topicItem.category === 'Wrought Iron Export' || topicItem.category === 'Besi Tempa'

  // ── DYNAMIC PROMPT FORMULA (Domestic Las + Wrought Iron B2B Export) ──
  const prompt = isExportCategory ? `You are a senior B2B SEO content strategist & architectural metalwork specialist for Mangala Living — premier handcrafted wrought iron gate & architectural steel manufacturer in Indonesia (workshop in Setu Cibitung, Bekasi & Bali master craftsmen network).

Write a comprehensive, highly persuasive B2B & Export SEO article (1,200–1,500 words) for:
Title: "${topicItem.topic}"
Primary Keyword: "${mainKeyword}" (use 8-12 times naturally)
Secondary Keywords: ${topicItem.keywords.slice(1).join(', ')}

TARGET AUDIENCE & POSITIONING:
- Primary Buyers: Villa developers (Bali, Lombok, Jakarta), Architects & Interior Designers, Hotel & Resort developers, Overseas Importers/Distributors (Australia, Singapore, USA, UAE, UK, Canada, NZ).
- Core Value Proposition: "Handcrafted architectural metalwork & wrought iron gates from Indonesia — custom manufacturing for villas, residences, and international export with factory-direct pricing."

MANDATORY 7-SECTION STRUCTURE:
1. "Intro" — 3 opening paragraphs. Start with "Finding high quality ${mainKeyword} requires artisanal craftsmanship and structural precision..." Highlight why Mangala Living is the trusted Indonesian manufacturer.
2. "Handcrafted Wrought Iron Excellence & Factory Heritage" — 2-3 paragraphs about 25+ years experience since 1999, master blacksmith forging techniques, custom design capabilities, and export readiness.
3. "Premium Materials & Artisanal Finishing" — 2 paragraphs + LIST: Hand-forged Mild Steel, Solid Flat Bar, Heavy-duty Hollow Steel, Galvanized Weather-Shield Steel, Hot-dip Galvanizing, Anti-rust Zinc Primer, Custom Powder Coating & Antique Patina Finish.
4. "Architectural Product Capabilities" — 2 paragraphs + LIST: Custom Villa Gates, Classic Driveway Gates, Modern Minimalist Gates, Ornamental Fences, Stair & Balcony Railings, Wrought Iron Doors, Decorative Metal Panels, Custom Resort Metalwork.
5. "Why Global Buyers & Architects Choose Mangala Living" — 9 bullet points: 1.Artisan Handcraftsmanship, 2.Architectural Design Support, 3.Factory-Direct Wholesale Pricing, 4.Export Packaging & Logistics Support, 5.Custom CAD/Reference Adaptation, 6.Strict Quality Control, 7.Multi-Market Compliance (Australia/Singapore/UAE), 8.Fast Turnaround, 9.Full Production Guarantee.
6. "Transparent Pricing & Export Inquiry" — 2-3 paragraphs explaining custom quote process based on dimensions, complexity, and shipping. Direct call to action via WhatsApp: +6288801146881.
7. "Service Locations & Global Export Assistance" — Mention local regions (Bali, Jakarta, Bekasi, Surabaya) and international export destinations (Australia, Singapore, USA, UAE, UK, Canada, NZ, Europe). Conclude with strong CTA: "Contact Mangala Living via WhatsApp +6288801146881 or email for custom quotes and CAD design reviews!"

- Write in the EXACT target language matching the title's language (English, Spanish, Arabic, Mandarin Chinese, Japanese, French, Korean, or Indonesian)
- Maintain native, professional, persuasive tone in that language
- Mention "Mangala Living" at least 10 times
- Mention WhatsApp +6288801146881 in sections 6 and 7
- NO markdown bold/italic inside paragraph blocks

OUTPUT FORMAT — Pure JSON strictly matching:
{
  "title": "${topicItem.topic}",
  "excerpt": "Compelling meta description (120-155 characters) containing primary keyword and CTA.",
  "sections": [
    {
      "heading": "Section Title",
      "paragraphs": ["Paragraph 1...", "Paragraph 2..."],
      "list": ["Item 1", "Item 2"]
    }
  ]
}` : `Anda adalah penulis konten SEO senior untuk Mangala Living — bengkel las besi custom profesional di Bekasi sejak 1999. Workshop kami berlokasi di Jl. Raya Setu Cibitung, Bekasi, Jawa Barat.

Tulis artikel blog SEO LENGKAP dan INFORMATIF (target 1.200–1.500 kata) tentang:
Judul: "${topicItem.topic}"
Kata Kunci Utama: "${mainKeyword}" (gunakan 8-12 kali secara alami di seluruh artikel)
Kata Kunci Pendukung: ${topicItem.keywords.slice(1).join(', ')}

STRUKTUR ARTIKEL WAJIB (7 bagian) — ikuti persis:
1. "Intro" — 3 paragraf pembuka. Mulai dengan "Menemukan ${mainKeyword} yang berkualitas memang tidak mudah..." Sebutkan kata kunci utama 3x. Jelaskan bahwa pembaca sudah di tempat yang tepat karena Mangala Living adalah pilihan terbaik.
2. "${topicItem.topic} & Berpengalaman" — 2-3 paragraf tentang pengalaman Mangala Living sejak 1999, total proyek, komitmen kualitas, dan lokasi workshop Bekasi (Setu Cibitung).
3. "Material yang Kami Gunakan" — 2 paragraf + WAJIB sertakan list: Besi Hollow, Besi Hitam, Stainless Steel 304, Galvanis, Baja Ringan, Besi Plat, Besi Tempa. Jelaskan keunggulan masing-masing material.
4. "Layanan Mangala Living" — 2 paragraf + WAJIB list lengkap: Kanopi, Pagar Besi, Teralis Jendela, Teralis Pintu, Railing Tangga, Railing Balkon, Folding Gate, Pintu Besi, Pintu Henderson, Pintu Kasa Nyamuk, Tangga Besi Custom, Tangga Putar, Menara Tangki Air, Tukang Las Panggilan, Besi Tempa Custom.
5. "Keunggulan Mangala Living" — WAJIB 9 poin dengan penjelasan masing-masing: 1.Berpengalaman (sejak 1999), 2.Tukang Las Handal, 3.Material Terbaik, 4.Tepat Waktu, 5.Respon Cepat (24 jam), 6.Harga Terjangkau, 7.Gratis Survei, 8.Gratis Ongkir (area jangkauan), 9.Garansi Pekerjaan (1 tahun).
6. "Harga Terjangkau & Transparan" — 2-3 paragraf tentang sistem harga per meter, transparansi penawaran, survei gratis sebelum RAB. Ajak pembaca WhatsApp untuk tanya harga: +6288801146881.
7. "Wilayah Jangkauan & Hubungi Kami" — Sebutkan wilayah layanan: Bekasi, Cikarang, Cibubur, Cileungsi, Jakarta Timur, Jakarta Selatan, Depok, Bogor, Tambun, Karawang, Bali, dan seluruh Jabodetabek. Tutup dengan CTA kuat: "Hubungi Mangala Living sekarang via WhatsApp +6288801146881 untuk konsultasi GRATIS!"

ATURAN PENULISAN:
- Tulis dalam Bahasa Indonesia yang natural, mudah dipahami, dan persuasif
- Setiap bagian harus terasa warm dan personal, bukan robotik
- Sebutkan "Mangala Living" minimal 10 kali
- Sebutkan nomor WA +6288801146881 di bagian 6 dan 7
- JANGAN gunakan markdown bold/italic dalam paragraf

FORMAT OUTPUT — HARUS berupa JSON murni tanpa backtick atau markdown, dengan struktur PERSIS ini:
{
  "title": "${topicItem.topic}",
  "excerpt": "Meta deskripsi 120-155 karakter yang mengandung kata kunci utama dan CTA.",
  "sections": [
    {
      "heading": "Judul Bagian",
      "paragraphs": ["Paragraf 1...", "Paragraf 2...", "Paragraf 3..."],
      "list": ["Item 1", "Item 2", "Item 3"]
    }
  ]
}`

  try {
    const rawResponse = await callLLM(prompt)
    let cleanJson = rawResponse
      .replace(/```json\s*/gi, '')
      .replace(/```\s*/gi, '')
      .replace(/^[^{]*/, '')  // Remove any text before first {
      .replace(/[^}]*$/, '')  // Remove any text after last }
      .trim()

    // Ensure it ends with }
    if (!cleanJson.endsWith('}')) {
      cleanJson = cleanJson + '}'
    }

    const article = JSON.parse(cleanJson)
    console.log(`Article generated: ${article.sections?.length || 0} sections`)

    // Pick image by rotating through the list based on post ID
    const imageIndex = (topicItem.id || 1) % WORKSHOP_IMAGES.length
    const imageUrl = WORKSHOP_IMAGES[imageIndex]

    // Calculate next ID from blog.ts
    const blogTsContent = fs.readFileSync(BLOG_DATA_FILE, 'utf8')
    const idMatches = [...blogTsContent.matchAll(/"id":\s*(\d+)/g)]
    const maxId = idMatches.length ? Math.max(...idMatches.map(m => parseInt(m[1]))) : 100
    const newId = maxId + 1

    const newPostMeta = {
      id: newId,
      slug: slug,
      title: article.title,
      category: topicItem.category || 'Bengkel Las',
      excerpt: article.excerpt,
      image: imageUrl,
      date: dateStr,
      author: 'Tim Mangala Living',
      status: 'synced',
    }

    // 1. Append to blog.ts
    const lastBracketIndex = blogTsContent.lastIndexOf('\n]')
    const updatedBlogTs =
      blogTsContent.slice(0, lastBracketIndex) +
      `,\n  ${JSON.stringify(newPostMeta, null, 4)}\n` +
      blogTsContent.slice(lastBracketIndex)
    fs.writeFileSync(BLOG_DATA_FILE, updatedBlogTs, 'utf8')
    console.log(`Appended metadata to blog.ts (ID: ${newId})`)

    // Detect topic language for TypeScript SupportedLocale compliance ('id'|'en'|'ar'|'zh'|'ja'|'es'|'fr'|'ko')
    let postLang = 'id'
    if (/[\u0600-\u06FF]/.test(topicItem.topic)) postLang = 'ar'
    else if (/[\u4E00-\u9FFF]/.test(topicItem.topic)) postLang = 'zh'
    else if (/[\u3040-\u30FF]/.test(topicItem.topic)) postLang = 'ja'
    else if (/[\uAC00-\uD7AF]/.test(topicItem.topic)) postLang = 'ko'
    else if (/Fabricante|Proveedor|Puertas|Hierro Forjado/i.test(topicItem.topic)) postLang = 'es'
    else if (/Fournisseur|Exportateur|Portails|Fer Forgé/i.test(topicItem.topic)) postLang = 'fr'
    else if (topicItem.category === 'Wrought Iron Export') postLang = 'en'

    // 2. Append to blogContent.ts
    const blogContentTs = fs.readFileSync(BLOG_CONTENT_FILE, 'utf8')
    const newContentObj = {
      slug: slug,
      language: postLang,
      sections: article.sections,
    }

    const lastContentBracket = blogContentTs.lastIndexOf('\n]')
    const updatedContentTs =
      blogContentTs.slice(0, lastContentBracket) +
      `,\n  ${JSON.stringify(newContentObj, null, 4)}\n` +
      blogContentTs.slice(lastContentBracket)
    fs.writeFileSync(BLOG_CONTENT_FILE, updatedContentTs, 'utf8')
    console.log('Appended sections to blogContent.ts')

    // 3. Append to post-sitemap.xml
    if (fs.existsSync(SITEMAP_FILE)) {
      let sitemapContent = fs.readFileSync(SITEMAP_FILE, 'utf8')
      const newUrlEntry = `  <url>\n    <loc>https://mangala-living.com/blog/${slug}</loc>\n    <lastmod>${dateStr}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.80</priority>\n  </url>\n`
      sitemapContent = sitemapContent.replace('</urlset>', `${newUrlEntry}</urlset>`)
      fs.writeFileSync(SITEMAP_FILE, sitemapContent, 'utf8')
      console.log('Added URL to post-sitemap.xml')
    }

    // 4. Git commit & push
    console.log('Executing git commit and push...')
    try {
      execSync('git pull origin main --rebase', { stdio: 'inherit' })
    } catch (e) {
      console.log('Git pull --rebase warning:', e.message)
    }
    execSync('git add .', { stdio: 'inherit' })
    execSync(`git commit -m "feat(blog): auto-publish '${article.title}' [skip ci]"`, { stdio: 'inherit' })
    execSync('git push origin main', { stdio: 'inherit' })

    console.log(`Successfully published: ${article.title}`)
    console.log(`URL: https://mangala-living.com/blog/${slug}`)
    console.log(`Remaining topics: ${topics.length}`)

  } catch (err) {
    console.error('Error during blog automation:', err.message)
    // Restore the topic to the front if it failed
    topics.unshift(topicItem)
    fs.writeFileSync(TOPICS_FILE, JSON.stringify(topics, null, 2))
    console.log('Topic restored to queue for retry.')
    process.exit(1)
  }
}

run()
