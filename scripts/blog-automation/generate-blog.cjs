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
  // 1. OpenRouter — Try active free models
  if (OPENROUTER_KEY) {
    const openRouterModels = [
      'deepseek/deepseek-r1-distill-llama-70b:free',
      'meta-llama/llama-3.3-70b-instruct:free',
      'qwen/qwen-2.5-72b-instruct:free',
      'google/gemini-2.0-flash-exp:free',
      'nvidia/llama-3.1-nemotron-70b-instruct:free',
      'mistralai/mistral-small-24b-instruct-2501:free',
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
    const groqModels = [
      'llama3-70b-8192',
      'llama3-8b-8192',
      'mixtral-8x7b-32768',
      'gemma2-9b-it',
      'llama-3.3-70b-specdec',
      'deepseek-r1-distill-qwen-32b',
    ]
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
    const groqModels = [
      'llama3-70b-8192',
      'llama3-8b-8192',
      'mixtral-8x7b-32768',
      'gemma2-9b-it',
      'llama-3.3-70b-specdec',
      'deepseek-r1-distill-qwen-32b',
    ]
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

function generateFallbackArticle(topicItem) {
  const title = topicItem.topic
  const keyword = (topicItem.keywords && topicItem.keywords[0]) ? topicItem.keywords[0] : title
  const templateIdx = (topicItem.id ? topicItem.id : Math.floor(Math.random() * 100)) % 10

  const templates = [
    // Template 0: Solusi Terpercaya & Standar Kualitas Tinggi
    {
      title: title,
      excerpt: `Cari penyedia ${keyword} profesional? Mangala Living menghadirkan solusi pengelasan besi berkualitas tinggi & bergaransi. Konsultasi gratis via WhatsApp +6288801146881.`,
      sections: [
        {
          heading: `Pendahuluan: Memilih ${title}`,
          paragraphs: [
            `Mencari penyedia ${keyword} yang mengutamakan mutu konstruksi dan kerapihan pengerjaan merupakan langkah penting bagi setiap pemilik properti maupun pengembang. Di tengah maraknya opsi yang ada, keandalan struktur dan ketahanan material tetap menjadi prioritas utama.`,
            `Mangala Living menghadirkan solusi komprehensif untuk ${title} dengan standar fabrikasi profesional. Didukung oleh tim ahli berpengalaman sejak 1999, setiap detail pengerjaan dirancang untuk memberikan hasil terbaik yang estetis dan tahan lama.`,
            `Dengan workshop utama yang berlokasi di Setu Cibitung Bekasi, Mangala Living melayani pemesanan custom baik untuk hunian pribadi, komersial, hingga kebutuhan proyek skala besar.`
          ]
        },
        {
          heading: `Keunggulan Layanan ${title} di Mangala Living`,
          paragraphs: [
            `Pengalaman lebih dari 25 tahun menjadikan Mangala Living sebagai mitra terpercaya dalam pengerjaan ${keyword}. Kami mengombinasikan teknik pengelasan presisi dengan pemilihan bahan berkualitas tinggi.`,
            `Seluruh proses dari perancangan awal hingga pemasangan akhir dilakukan dengan pengawasan mutu yang ketat untuk menjamin keamanan serta kepuasan pelanggan.`
          ]
        },
        {
          heading: `Pilihan Material Standar SNI & Spesifikasi`,
          paragraphs: [
            `Untuk memastikan daya tahan maksimal pada ${keyword}, Mangala Living menyediakan pilihan material berkualitas yang dapat disesuaikan dengan kebutuhan budget Anda:`,
            `Setiap jenis bahan dilapisi dengan cat anti-karat zinc chromate berkualitas tinggi serta finishing sesuai selera Anda.`
          ],
          list: [
            "Besi Hollow Galvanis (Tahan Karat & Cuaca)",
            "Besi Hitam / Mild Steel Solid Presisi",
            "Stainless Steel 304 Anti Korosi",
            "Baja Ringan SNI Kokoh dan Ringan",
            "Besi Plat & Besi Tempa Artisanal Custom"
          ]
        },
        {
          heading: `Layanan Pengelasan Besi Custom Lainnya`,
          paragraphs: [
            `Selain spesialisasi pada ${title}, Mangala Living juga melayani berbagai pengerjaan besi dan kontruksi las lainnya untuk area Jabodetabek dan sekitarnya:`,
            `Seluruh pengerjaan dikerjakan dengan standar keamanan tinggi dan ketepatan waktu yang terjamin.`
          ],
          list: [
            "Kanopi Besi Minimalis, Alderon, & Polycarbonate",
            "Pagar Besi Minimalis, Modern, & Besi Tempa Classic",
            "Teralis Jendela & Pintu Kasa Nyamuk Anti Maling",
            "Railing Tangga, Tangga Putar, & Railing Balkon",
            "Folding Gate, Pintu Besi, & Menara Tangki Air Toren"
          ]
        },
        {
          heading: `9 Keunggulan Utama Menggunakan Jasa Mangala Living`,
          paragraphs: [
            `Inilah alasan mengapa ratusan pelanggan memercayakan pengerjaan ${keyword} kepada Mangala Living:`
          ],
          list: [
            "Berpengalaman Sejak 1999",
            "Tukang Las Profesional & Tersertifikasi",
            "Material Berkualitas Tinggi Standar SNI",
            "Pengerjaan Tepat Waktu Sesuai Kesepakatan",
            "Respon Cepat 24 Jam via WhatsApp",
            "Transparansi Harga Tanpa Biaya Siluman",
            "Gratis Survei & Ukur Lokasi",
            "Gratis Ongkos Kirim (Area Jangkauan)",
            "Garansi Pekerjaan Hingga 1 Tahun"
          ]
        },
        {
          heading: `Harga Terjangkau & Transparansi Biaya`,
          paragraphs: [
            `Harga layanan ${keyword} dihitung secara transparan berdasarkan ukuran dimensi per meter, spesifikasi bahan, dan kerumitan motif yang dipilih.`,
            `Kami siap menerbitkan Rencana Anggaran Biaya (RAB) terperinci sebelum proyek dimulai, sehingga Anda mendapatkan kepastian budget yang jelas dan efisien.`,
            `Untuk informasi harga promo terbaru dan diskusi estimasi biaya, Anda dapat langsung menghubungi customer service Mangala Living melalui WhatsApp di +6288801146881.`
          ]
        },
        {
          heading: `Wilayah Layanan & Cara Pemesanan`,
          paragraphs: [
            `Mangala Living melayani area Bekasi, Cikarang, Cibubur, Cileungsi, Jakarta Timur, Jakarta Selatan, Depok, Bogor, Tangerang, Karawang, dan seluruh Jabodetabek.`,
            `Segera wujudkan ${title} idaman Anda bersama pakar konstruksi besi terpercaya. Hubungi WhatsApp +6288801146881 untuk konsultasi dan survei lokasi GRATIS!`
          ]
        }
      ]
    },
    // Template 1: Desain Modern & Estetika Bangunan
    {
      title: title,
      excerpt: `Rekomendasi ${keyword} terbaik untuk mempercantik dan mengamankan properti Anda. Pengerjaan rapi & material unggulan dari Mangala Living. Hubungi WhatsApp +6288801146881.`,
      sections: [
        {
          heading: `Solusi Modern untuk ${title}`,
          paragraphs: [
            `Tampilan hunian modern saat ini tidak lepas dari elemen besi yang kuat namun tetap memiliki nilai estetika tinggi. Pemasangan ${keyword} tidak hanya menambah keamanan tetapi juga meningkatkan estetika eksterior dan interior properti.`,
            `Di Mangala Living, kami memahami pentingnya perpaduan fungsionalitas dan keindahan visual. Pengerjaan ${title} dirancang secara khusus menyesuaikan dengan konsep arsitektur rumah Anda.`,
            `Tim profesional kami di Setu Cibitung Bekasi siap memandu Anda mulai dari penentuan konsep desain hingga proses instalasi rapi di lokasi.`
          ]
        },
        {
          heading: `Mengapa ${keyword} Penting untuk Properti Anda`,
          paragraphs: [
            `Konstruksi ${keyword} merupakan investasi jangka panjang untuk kenyamanan dan keamanan keluarga. Bahan pilihan yang diproses dengan benar akan bertahan hingga belasan tahun tanpa mengalami kerusakan berarti.`,
            `Di samping itu, sentuhan desain yang tepat pada ${title} dapat meningkatkan nilai jual (property value) bangunan secara signifikan.`
          ]
        },
        {
          heading: `Spesifikasi Material & Sistem Pengecatan`,
          paragraphs: [
            `Kami menggunakan pilihan material besi terbaik untuk memproduksi ${keyword} yang awet dan tahan terhadap cuaca ekstrem:`,
            `Pengecatan finishing dilakukan secara bertahap dengan teknik penyemprotan halus untuk hasil yang rata, mengkilap, dan tidak mudah mengelupas.`
          ],
          list: [
            "Besi Hollow Galvanis anti karat kualitas premium",
            "Besi Plat Strip & Solid Bar presisi",
            "Stainless Steel Mirror & Hairline Finish",
            "Cat Dasar Anti Karat Epoxy/Zinc Chromate",
            "Finishing Cat Duco / Powder Coating kustom"
          ]
        },
        {
          heading: `Layanan Pengelasan & Kontraktor Besi Terlengkap`,
          paragraphs: [
            `Mangala Living berpengalaman mengerjakan beragam produk interior dan eksterior berbasis besi:`,
            `Seluruh pesanan dapat disesuaikan (custom dimension) sesuai dengan kondisi ukuran bangunan Anda.`
          ],
          list: [
            "Pagar Besi Minimalis & Pagar Besi Tempa",
            "Kanopi Alderon, Polycarbonate, & Solarflat",
            "Teralis Jendela Minimalis & Pintu Exspanda",
            "Railing Tangga Kayu Besi & Balkon Glass Railing",
            "Tangga Putar Besi & Menara Toren Air"
          ]
        },
        {
          heading: `Keunggulan Mangala Living`,
          paragraphs: [
            `Komitmen kami adalah memberikan nilai lebih bagi setiap kustomer:`
          ],
          list: [
            "Berpengalaman sejak 1999 di bidang pengelasan",
            "Layanan survei dan pengukuran GRATIS tanpa syarat",
            "Konsultasi desain & pemilihan bahan gratis",
            "Jaminan pengerjaan rapi dan presisi",
            "Harga bersaing langsung dari workshop/pabrik",
            "Garansi kepuasan pelanggan & perbaikan 1 tahun",
            "Layanan fleksibel 24 jam via WhatsApp +6288801146881"
          ]
        },
        {
          heading: `Harga Transparan & Bebas Pembengkakan Biaya`,
          paragraphs: [
            `Dapatkan penawaran harga terbaik untuk ${keyword} tanpa khawatir adanya biaya tersembunyi di tengah pengerjaan.`,
            `Kami memberikan Rencana Anggaran Biaya (RAB) tertulis sebelum produksi dimulai, sehingga Anda mendapatkan kepastian investasi yang aman dan terjangkau.`,
            `Hubungi tim sales kami melalui WhatsApp di +6288801146881 untuk mendapatkan katalog sampel dan estimasi harga per meter.`
          ]
        },
        {
          heading: `Konsultasi & Pemesanan Sekarang`,
          paragraphs: [
            `Jangkauan layanan kami meliputi Bekasi, Cikarang, Tambun, Karawang, Jakarta, Cibubur, Depok, Bogor, dan sekitarnya.`,
            `Percayakan kebutuhan ${title} Anda pada ahlinya. Hubungi Mangala Living sekarang via WhatsApp +6288801146881 untuk konsultasi dan jadwalkan survei gratis!`
          ]
        }
      ]
    },
    // Template 2: Kerapihan Presisi & Daya Tahan Ekstrem
    {
      title: title,
      excerpt: `Spesialis pembuatan ${keyword} presisi tinggi & tahan cuaca. Bengkel las profesional Mangala Living sejak 1999. Hubungi WA +6288801146881 untuk konsultasi gratis.`,
      sections: [
        {
          heading: `Standard Presisi Pengerjaan ${title}`,
          paragraphs: [
            `Pengerjaan kontruksi ${keyword} membutuhkan presisi tinggi dan teknik pengelasan yang matang agar struktur mampu menahan beban dan perubahan suhu ruang terbuka.`,
            `Mangala Living mengutamakan standar fabrikasi modern dalam setiap pembuatan ${title}. Setiap sambungan besi dilas dengan rapat dan diamplas halus sebelum memasuki tahap coating.`,
            `Didukung oleh workshop seluas ratusan meter di Setu Cibitung Bekasi, kami siap mengerjakan pesanan partai kecil maupun besar.`
          ]
        },
        {
          heading: `Prosedur Fabrikasi & Pengawasan Kualitas`,
          paragraphs: [
            `Setiap unit ${keyword} melewati tahapan kontrol kualitas yang ketat. Mulai dari pemotongan sesuai gambar kerja, pengelasan matang, hingga pengujian kekuatan sambungan.`,
            `Pendekatan ini memastikan bahwa produk yang terpasang di bangunan Anda memiliki keamanan tingkat tinggi dan bertahan lama.`
          ]
        },
        {
          heading: `Bahan Baku Unggulan Standar Industri`,
          paragraphs: [
            `Kami memilih material besi yang lulus uji kualitas agar ${keyword} bebas dari risiko rapuh dan keropos:`,
            `Seluruh bahan dijamin memiliki ketebalan yang sesuai dengan spesifikasi.`
          ],
          list: [
            "Besi Hollow Galvanis anti korosi tinggi",
            "Besi Siku & Besi WF untuk struktur beban berat",
            "Stainless Steel SUS 304 kualitas ekspor",
            "Plat Besi Cutting Laser custom motif",
            "Cat Dasar Zinc Chromate anti karat"
          ]
        },
        {
          heading: `Ragam Pilihan Kontruksi Pengelasan Besi`,
          paragraphs: [
            `Mangala Living melayani pembuatan berbagai kebutuhan kontruksi besi custom lainnya:`,
            `Dikerjakan oleh teknisi ahli dengan jaminan kepatuhan pada tenggat waktu proyek.`
          ],
          list: [
            "Pagar Minimalis & Pagar Dorong/Lipat",
            "Kanopi Rumah, Garasi, & Area Parkir Ruko",
            "Teralis Jendela Minimalis Anti Maling",
            "Railing Balkon & Railing Tangga Custom",
            "Pintu Besi Exspanda & Folding Gate"
          ]
        },
        {
          heading: `Kenapa Mangala Living Jadi Pilihan Utama?`,
          paragraphs: [
            `Keunggulan utama yang menjadikan kami mitra terpercaya sejak 1999:`
          ],
          list: [
            "Tukang las handal & berpengalaman puluhan tahun",
            "Garansi kekuatan konstruksi hingga 1 tahun",
            "Respon WhatsApp cepat & komunikatif di +6288801146881",
            "Survei ke lokasi GRATIS tanpa keterikatan",
            "Harga kompetitif langsung dari bengkel produksi",
            "Jangkauan luas seluruh Jabodetabek & Karawang"
          ]
        },
        {
          heading: `Estimasi Harga & Perhitungan Anggaran`,
          paragraphs: [
            `Perhitungan harga ${keyword} menyesuaikan ketebalan bahan, volume ukuran, dan kerumitan model.`,
            `Kami memberikan penawaran RAB transparan tanpa ada biaya rahasia saat serah terima pekerjaan.`,
            `Dapatkan estimasi biaya tercepat dengan mengirimkan ukuran kasar lokasi Anda ke WhatsApp +6288801146881.`
          ]
        },
        {
          heading: `Hubungi Mangala Living`,
          paragraphs: [
            `Layanan kami mencakup area Bekasi, Cikarang, Cibubur, Jakarta, Depok, Tangerang, Bogor, dan sekitarnya.`,
            `Dapatkan hasil pengerjaan ${title} terbaik untuk hunian Anda. Kontak Mangala Living sekarang via WhatsApp +6288801146881 untuk jadwal survei gratis!`
          ]
        }
      ]
    },
    // Template 3: Keamanan Maksimal & Desain Estetis
    {
      title: title,
      excerpt: `Tingkatkan keamanan & keindahan bangunan dengan ${keyword} dari Mangala Living. Pengerjaan terjamin & gratis survei. Konsultasi WA +6288801146881.`,
      sections: [
        {
          heading: `Solusi Keamanan & Estetika: ${title}`,
          paragraphs: [
            `Faktor keamanan merupakan pertimbangan paling utama dalam merancang properti tempat tinggal maupun tempat usaha. Pemasangan ${keyword} memberikan perlindungan ekstra sekaligus mempercantik nilai arsitektur hunian.`,
            `Mangala Living merancang setiap produk ${title} dengan memperhitungkan faktor proteksi mekanis serta kecantikan motif visual yang harmonis.`,
            `Workshop kami di Setu Cibitung Bekasi dilengkapi dengan peralatan pengelasan modern untuk memastikan setiap potongan besi terpasang kuat dan rapi.`
          ]
        },
        {
          heading: `Keunggulan Desain & Proteksi Ganda`,
          paragraphs: [
            `Produk ${keyword} dari Mangala Living dibuat menggunakan material berdaya tahan tinggi yang sulit dibongkar secara paksa, memberikan rasa tenang bagi seluruh penghuni rumah.`,
            `Selain itu, finishing lapisan anti karat memastikan struktur tidak mudah aus tergerus hujan maupun panas terik.`
          ]
        },
        {
          heading: `Spesifikasi Material Pilihan`,
          paragraphs: [
            `Kami mengombinasikan berbagai jenis besi kualitas atas untuk menghasilkan ${keyword} yang kokoh:`,
            `Setiap komponen disemprot dengan cat dasar anti-korosi sebelum dilapisi warna favorit sesuai permintaan Anda.`
          ],
          list: [
            "Besi Galvanis anti karat kualitas grade A",
            "Besi Solid Plat Strip & Square Bar",
            "Atap Polycarbonate, Alderon, & Tempered Glass",
            "Finishing Anti-rust primer + Top coat Duco"
          ]
        },
        {
          heading: `Layanan Pengelasan Terintegrasi Mangala Living`,
          paragraphs: [
            `Kami menerima pesanan pengelasan besi custom lengkap untuk berbagai keperluan bangunan:`,
            `Tim kami siap datang melakukan survei dan pengukuran akurat di lokasi Anda.`
          ],
          list: [
            "Pagar Rumah Minimalis & Pagar Tempa Klasik",
            "Kanopi Besi Alderon & Polycarbonate",
            "Teralis Jendela & Pintu Exspanda Kasa Nyamuk",
            "Railing Tangga, Railing Balkon, & Mezzanine",
            "Pintu Besi Lipat, Sliding Gate, & Tower Toren"
          ]
        },
        {
          heading: `Alasan Konsumen Memilih Mangala Living`,
          paragraphs: [
            `Komitmen kualitas yang konsisten sejak tahun 1999:`
          ],
          list: [
            "Reputasi teruji selama lebih dari 25 tahun",
            "Pengerjaan tepat waktu dengan standar keamanan tinggi",
            "Layanan survei dan konsultasi 100% GRATIS",
            "Harga terjangkau transparan tanpa biaya tersembunyi",
            "Garansi pemeliharaan resmi hingga 1 tahun",
            "Customer service siap melayani 24 jam via WhatsApp"
          ]
        },
        {
          heading: `Penawaran Harga & Konsultasi Anggaran`,
          paragraphs: [
            `Nikmati penawaran harga kompetitif untuk pengerjaan ${keyword} dengan skema pembayaran transparan.`,
            `Kami akan menerbitkan rincian RAB tertulis agar Anda dapat menyesuaikan spesifikasi pekerjaan dengan anggaran yang tersedia.`,
            `Konsultasikan rencana pemasangan Anda langsung dengan teknisi kami via WhatsApp di +6288801146881.`
          ]
        },
        {
          heading: `Jangkauan Layanan & Kontak Pemesanan`,
          paragraphs: [
            `Kami melayani pemesanan untuk wilayah Bekasi, Cikarang, Cibubur, Jakarta, Depok, Bogor, Tangerang, Karawang, dan sekitarnya.`,
            `Jangan tunda keamanan dan keindahan rumah Anda. Kontak Mangala Living di WhatsApp +6288801146881 untuk konsultasi dan penawaran terbaik hari ini!`
          ]
        }
      ]
    },
    // Template 4: Garansi Pekerjaan & Biaya Efisien
    {
      title: title,
      excerpt: `Penyedia ${keyword} murah bergaransi resmi dari Mangala Living. Pengerjaan tepat waktu & gratis survei lokasi. Hubungi WhatsApp +6288801146881.`,
      sections: [
        {
          heading: `Layanan Pengelasan Hemat & Berkualitas: ${title}`,
          paragraphs: [
            `Mendapatkan produk ${keyword} berkualitas tinggi tidak harus menguras anggaran pembangunan Anda. Di Mangala Living, kami menyediakan opsi pengerjaan besi yang efisien namun tetap mempertahankan mutu konstruksi nomor satu.`,
            `Spesialisasi kami pada ${title} didukung oleh rantai pasok material langsung dari distributor resmi, sehingga kami mampu menawarkan harga pabrik yang sangat bersaing.`,
            `Berpusat di Bekasi (Setu Cibitung), tim kami siap memberikan solusi terbaik bagi hunian pribadi maupun proyek komersial Anda.`
          ]
        },
        {
          heading: `Efisiensi Tanpa Mengorbankan Kualitas`,
          paragraphs: [
            `Setiap pesanan ${keyword} dikerjakan dengan ketelitian tinggi oleh tenaga ahli yang berpengalaman. Kami memastikan setiap sambungan las terikat sempurna dan bebas cacat struktur.`,
            `Dengan dukungan jaminan garansi 1 tahun, Anda tidak perlu khawatir akan risiko kerusakan atau penurunan kualitas di kemudian hari.`
          ]
        },
        {
          heading: `Material Pilihan Standar Bangunan`,
          paragraphs: [
            `Pilihan material untuk ${keyword} dapat disesuaikan dengan kebutuhan dan estimasi biaya yang Anda tetapkan:`,
            `Semua material diproses dengan perlindungan anti-karat ganda untuk menjamin daya tahan jangka panjang.`
          ],
          list: [
            "Besi Hollow Galvanis tahan korosi",
            "Besi Hitam Mild Steel ekonomis & kokoh",
            "Stainless Steel 304 anti karat",
            "Baja Ringan SNI presisi tinggi",
            "Finishing Cat Semprot Epoksi & Zinc Chromate"
          ]
        },
        {
          heading: `Portfolio Layanan Konstruksi Besi`,
          paragraphs: [
            `Mangala Living mengerjakan berbagai produk pengelasan custom untuk kebutuhan arsitektur:`,
            `Desain dapat disesuaikan dengan contoh foto atau gambar kerja arsitek pilihan Anda.`
          ],
          list: [
            "Kanopi Alderon, Polycarbonate, & Solarflat",
            "Pagar Besi Minimalis & Besi Tempa Modern",
            "Teralis Jendela & Pintu Exspanda Kasa Nyamuk",
            "Railing Tangga Besi, Kayu, & Balkon Minimalis",
            "Folding Gate, Pintu Besi, & Tangga Putar"
          ]
        },
        {
          heading: `Keuntungan Memilih Mangala Living`,
          paragraphs: [
            `Mengapa pelanggan terus mempercayakan kebutuhan besi kepada kami:`
          ],
          list: [
            "Pengalaman bengkel las sejak 1999",
            "Harga langsung dari workshop (tanpa perantara)",
            "Gratis survei lokasi dan konsultasi RAB",
            "Pengerjaan tepat waktu sesuai timeline",
            "Garansi perbaikan hingga 1 tahun full",
            "Layanan fleksibel via WhatsApp +6288801146881"
          ]
        },
        {
          heading: `Sistem Pembayaran & RAB Transparan`,
          paragraphs: [
            `Kami menerapkan sistem Rencana Anggaran Biaya (RAB) transparan untuk pengerjaan ${keyword}. Anda akan mendapatkan rincian harga per meter secara mendetail.`,
            `Tidak ada biaya tersembunyi setelah kesepakatan dibuat. Hubungi kami sekarang untuk mendapatkan skema harga promo bulan ini.`,
            `Konsultasi langsung dengan tim teknis via WhatsApp +6288801146881.`
          ]
        },
        {
          heading: `Hubungi Kami Sekarang`,
          paragraphs: [
            `Layanan meliputi area Bekasi, Cikarang, Cibubur, Jakarta, Depok, Bogor, Tangerang, Karawang, dan sekitarnya.`,
            `Wujudkan pengerjaan ${title} impian Anda bersama Mangala Living. Hubungi WhatsApp +6288801146881 untuk survei gratis hari ini!`
          ]
        }
      ]
    },
    // Template 5: Inovasi Besi & Estetika Bangunan Modern
    {
      title: title,
      excerpt: `Solusi ${keyword} custom untuk tampilan rumah modern & minimalis. Hasil las rapi dari Mangala Living sejak 1999. Hubungi WA +6288801146881.`,
      sections: [
        {
          heading: `Sentuhan Elegan untuk ${title}`,
          paragraphs: [
            `Elemen ${keyword} dapat memberikan karakter yang kuat pada tampilan eksterior maupun interior bangunan. Konsep desain minimalis modern yang dipadukan dengan kerapihan pengerjaan besi akan menciptakan suasana hunian yang lebih mewah dan tertata.`,
            `Mangala Living spesialis dalam pembuatan ${title} dengan sentuhan desain kustom yang dapat disesuaikan dengan arsitektur rumah Anda.`,
            `Workshop kami di Setu Cibitung Bekasi memadukan ketrampilan pengrajin besi berpengalaman dengan teknologi pengelasan presisi.`
          ]
        },
        {
          heading: `Perpaduan Estetika & Kekuatan Struktur`,
          paragraphs: [
            `Setiap unit ${keyword} dirancang tidak hanya elok dipandang, tetapi juga menjamin tingkat keamanan mekanis maksimal.`,
            `Kami memperhatikan setiap sudut siku dan sambungan besi agar menghasilkan finishing yang mulus dan bebas dari lekukan kasar.`
          ]
        },
        {
          heading: `Material Pilihan & Opsi Finishing`,
          paragraphs: [
            `Untuk menunjang keindahan ${keyword}, kami menawarkan pilihan bahan baku dan opsi finishing berkualitas:`,
            `Opsi finishing cat meliputi warna matte/doff, mengkilap (glossy), hingga tekstur antique patina yang mewah.`
          ],
          list: [
            "Besi Hollow Galvanis kualitas premium",
            "Besi Plat Laser Cut motif custom",
            "Stainless Steel SUS 304 kilap tinggi",
            "Cat Dasar Epoksi Anti Karat",
            "Finishing Powder Coating tahan gores"
          ]
        },
        {
          heading: `Layanan Pengelasan Custom Terlengkap`,
          paragraphs: [
            `Selain pengerjaan ${title}, Mangala Living melayani pembuatan produk besi dekoratif dan struktural lainnya:`,
            `Setiap pesanan diproduksi sesuai spesifikasi ukuran lokasi Anda.`
          ],
          list: [
            "Kanopi Besi Minimalis & Kaca Tempered",
            "Pagar Besi Minimalis & Pagar Tempa Mewah",
            "Teralis Jendela & Pintu Exspanda Nyamuk",
            "Railing Tangga & Balkon Modern",
            "Tangga Putar & Konstruksi Besi Custom"
          ]
        },
        {
          heading: `Keunggulan Layanan Mangala Living`,
          paragraphs: [
            `Komitmen kami untuk setiap klien:`
          ],
          list: [
            "Pengalaman lebih dari 25 tahun di industri pengelasan",
            "Desain custom bebas sesuai permintaan",
            "Survei lokasi dan pengukuran 100% GRATIS",
            "Estimasi waktu pengerjaan yang akurat",
            "Jaminan garansi kualitas pekerjaan 1 tahun",
            "Layanan WhatsApp responsif di +6288801146881"
          ]
        },
        {
          heading: `Informasi Harga & Diskusi RAB`,
          paragraphs: [
            `Dapatkan rincian harga ${keyword} yang transparan dan kompetitif langsung dari pihak produsen.`,
            `Kami akan membantu menyesuaikan pilihan bahan agar hasil pengerjaan tetap indah sesuai alokasi budget Anda.`,
            `Hubungi tim sales kami melalui WhatsApp di +6288801146881 untuk konsultasi dan sampel motif.`
          ]
        },
        {
          heading: `Wilayah Jangkauan & Konsultasi Gratis`,
          paragraphs: [
            `Mangala Living melayani wilayah Bekasi, Cikarang, Cibubur, Jakarta, Depok, Bogor, Tangerang, dan Karawang.`,
            `Jadikan ${title} bagian dari keindahan rumah Anda. Hubungi WhatsApp +6288801146881 untuk konsultasi dan survei gratis sekarang!`
          ]
        }
      ]
    },
    // Template 6: Layanan Cepat & Tukang Las Panggilan
    {
      title: title,
      excerpt: `Butuh jasa ${keyword} cepat & profesional? Mangala Living melayani pengelasan custom & perbaikan bergaransi. WA +6288801146881.`,
      sections: [
        {
          heading: `Layanan Cepat & Berpengalaman: ${title}`,
          paragraphs: [
            `Kebutuhan pemasangan atau perbaikan ${keyword} sering kali membutuhkan penanganan yang cepat dan responsif. Menunda pengerjaan besi dapat mengganggu kenyamanan dan faktor keamanan properti Anda.`,
            `Mangala Living menghadirkan layanan pengerjaan ${title} dengan respon cepat dan estimasi waktu yang terukur. Didukung oleh armada tim las berpengalaman, kami siap melayani kebutuhan Anda secara efisien.`,
            `Workshop utama kami berlokasi di Setu Cibitung Bekasi, siap menjangkau lokasi Anda di seluruh Jabodetabek.`
          ]
        },
        {
          heading: `Tukang Las Profesional & Peralatan Lengkap`,
          paragraphs: [
            `Setiap proyek ${keyword} ditangani oleh teknisi las yang menguasai berbagai teknik pengelasan (MIG/TIG/Arc Welding). Peralatan kerja modern kami memastikan pengerjaan dapat diselesaikan tepat waktu dengan kerapihan maksimal.`,
            `Kami mengedepankan aspek keselamatan kerja serta kebersihan area setelah pemasangan selesai dilakukan.`
          ]
        },
        {
          heading: `Standar Material & Kualitas Konstruksi`,
          paragraphs: [
            `Kualitas material adalah kunci daya tahan ${keyword}. Kami menggunakan besi berkualitas tinggi yang tahan korosi dan beban berat:`,
            `Seluruh besi dilapisi anti-karat ganda agar terhindar dari pelapukan akibat kelembapan udara.`
          ],
          list: [
            "Besi Hollow Galvanis anti karat",
            "Besi Siku & Besi Beton tebal",
            "Stainless Steel anti korosi",
            "Baja Ringan & Plat Besi SNI",
            "Cat Primer Zinc Chromate & Epoksi"
          ]
        },
        {
          heading: `Ragam Jasa Pengelasan Mangala Living`,
          paragraphs: [
            `Kami melayani pembuatan dan perbaikan berbagai konstruksi besi:`,
            `Semua pengerjaan dijamin rapi, kuat, dan bergaransi.`
          ],
          list: [
            "Kanopi Rumah & Carport Minimalis",
            "Pagar Besi Dorong, Lipat, & Tempa",
            "Teralis Jendela & Pintu Besi Pengaman",
            "Railing Tangga, Balkon, & Mezzanine",
            "Folding Gate & Service Las Panggilan"
          ]
        },
        {
          heading: `Keunggulan Layanan Cepat Mangala Living`,
          paragraphs: [
            `Alasan memilih tim las kami:`
          ],
          list: [
            "Respon WhatsApp 24 jam di +6288801146881",
            "Pengalaman bengkel las sejak 1999",
            "Survei lokasi cepat & GRATIS",
            "Pengerjaan tepat waktu & terorganisir",
            "Garansi perbaikan hingga 1 tahun",
            "Harga transparan tanpa biaya tersembunyi"
          ]
        },
        {
          heading: `Harga Terjangkau & Estimasi Cepat`,
          paragraphs: [
            `Dapatkan estimasi biaya pengerjaan ${keyword} secara cepat dengan mengirimkan foto dan ukuran lokasi Anda via WhatsApp.`,
            `Kami memberikan rincian RAB transparan agar anggaran Anda tetap terkontrol dengan baik.`,
            `Hubungi tim teknis Mangala Living sekarang via WhatsApp +6288801146881.`
          ]
        },
        {
          heading: `Kontak & Jangkauan Layanan`,
          paragraphs: [
            `Layanan kami mencakup Bekasi, Cikarang, Cibubur, Jakarta, Depok, Bogor, Tangerang, dan Karawang.`,
            `Percayakan pengerjaan ${title} Anda pada ahlinya. Kontak WhatsApp +6288801146881 untuk konsultasi & survei lokasi GRATIS!`
          ]
        }
      ]
    },
    // Template 7: Material Kombinasi & Finishing Premium
    {
      title: title,
      excerpt: `Pilihan ${keyword} dengan material premium & finishing cat anti-karat ganda. Kualitas unggulan Mangala Living. WA +6288801146881.`,
      sections: [
        {
          heading: `Finishing Premium untuk ${title}`,
          paragraphs: [
            `Kunci utama dari daya tahan ${keyword} berada pada kualitas bahan baku serta teknik finishing lapisan pelindung yang digunakan. Tanpa proteksi anti-karat yang baik, besi akan mudah mengalami korosi dalam hitungan bulan.`,
            `Mangala Living menghadirkan solusi ${title} dengan standar finishing premium. Kami menerapkan proses pelapisan cat bertahap untuk menjamin ketahanan dari cuaca tropis yang ekstrem.`,
            `Didukung bengkel las berpengalaman sejak 1999 di Setu Cibitung Bekasi, kami memproduksi pengerjaan besi berkualitas tinggi untuk hunian Anda.`
          ]
        },
        {
          heading: `Teknik Pelapisan Anti-Karat Ganda`,
          paragraphs: [
            `Dalam pemuatan ${keyword}, kami mengaplikasikan Zinc Chromate Primer atau Epoxy Coating sebagai lapisan dasar. Setelah itu, dilanjutkan dengan lapisan top coat warna pilihan Anda.`,
            `Hasilnya adalah permukaan besi yang halus, mengkilap, dan memiliki daya tahan ekstra terhadap benturan serta kelembapan.`
          ]
        },
        {
          heading: `Varian Material & Spesifikasi Teknis`,
          paragraphs: [
            `Kami menyediakan berbagai material pilihan sesuai standar arsitektur:`,
            `Setiap ukuran dan ketebalan material dijamin akurat sesuai kesepakatan.`
          ],
          list: [
            "Besi Hollow Galvanis (Rekomendasi Utama Anti Karat)",
            "Stainless Steel SUS 304 Kualitas Ekspor",
            "Besi Plat Cutting Laser Custom Pattern",
            "Atap Alderon Double Layer & Polycarbonate Premium",
            "Cat Duco / Powder Coating Tahan Gores"
          ]
        },
        {
          heading: `Layanan Pengelasan Besi Terlengkap`,
          paragraphs: [
            `Mangala Living melayani pembuatan dan perakitan berbagai elemen besi rumah:`,
            `Pengerjaan dilakukan secara profesional dengan pengawasan mutu menyeluruh.`
          ],
          list: [
            "Kanopi Besi Minimalis & Carport Kaca",
            "Pagar Besi Minimalis & Tempa Klasik",
            "Teralis Jendela & Pintu Exspanda",
            "Railing Tangga & Balkon Minimalis",
            "Folding Gate, Pintu Besi, & Tangga Putar"
          ]
        },
        {
          heading: `Nilai Tambah Layanan Mangala Living`,
          paragraphs: [
            `Mengapa pelanggan memilih produk kami:`
          ],
          list: [
            "Pengalaman industri sejak 1999",
            "Garansi ketahanan pekerjaan hingga 1 tahun",
            "Survei lokasi dan konsultasi GRATIS",
            "Harga transparan sesuai RAB",
            "Respon WhatsApp cepat di +6288801146881",
            "Armada pengiriman sendiri (bebas risiko)"
          ]
        },
        {
          heading: `Harga Transparan & Bebas Pembengkakan`,
          paragraphs: [
            `Perhitungan harga ${keyword} ditentukan oleh luas volume, jenis bahan, dan pilihan finishing.`,
            `Kami menerbitkan RAB tertulis sebelum pengerjaan dimulai sehingga anggaran investasi Anda terjamin aman.`,
            `Konsultasikan anggaran Anda via WhatsApp di +6288801146881.`
          ]
        },
        {
          heading: `Hubungi Kami`,
          paragraphs: [
            `Jangkauan area: Bekasi, Cikarang, Cibubur, Jakarta, Depok, Bogor, Tangerang, Karawang, dan sekitarnya.`,
            `Dapatkan ${title} berkualitas tinggi dari produsen terpercaya. Hubungi WhatsApp +6288801146881 untuk survei gratis!`
          ]
        }
      ]
    },
    // Template 8: Solusi Renovasi & Upgrade Tampilan Properti
    {
      title: title,
      excerpt: `Upgrade hunian Anda dengan ${keyword} berkualitas dari Mangala Living. Pengerjaan rapi, kokoh & bergaransi 1 tahun. WA +6288801146881.`,
      sections: [
        {
          heading: `Renovasi & Upgrade: ${title}`,
          paragraphs: [
            `Melakukan peremajaan atau penambahan elemen ${keyword} pada properti adalah cara terbaik untuk meningkatkan nilai visual dan fungsi ruangan secara signifikan.`,
            `Mangala Living menyediakan jasa renovasi dan pembuatan baru untuk ${title} dengan standar pengerjaan yang terstruktur dan aman.`,
            `Tim teknis kami di Setu Cibitung Bekasi berpengalaman membantu pemilik rumah dalam merancang bentuk besi yang ideal sesuai arsitektur terkini.`
          ]
        },
        {
          heading: `Transformasi Tampilan & Proteksi Rumah`,
          paragraphs: [
            `Dengan mengganti elemen besi lama yang rusak dengan ${keyword} baru berbahan galvanis, rumah Anda tidak hanya terlihat lebih modern tetapi juga lebih terproteksi dari cuaca dan potensi gangguan luar.`,
            `Pengerjaan yang rapi dan finishing cat yang elegan akan memberikan kesan hunian yang terawat dan mewah.`
          ]
        },
        {
          heading: `Material Pilihan Berdaya Tahan Tinggi`,
          paragraphs: [
            `Kami menggunakan pilihan bahan yang sudah teruji kekuatannya untuk menopang ${keyword}:`,
            `Setiap komponen besi dijamin bebas dari cacat las dan dilapisi anti karat secara menyeluruh.`
          ],
          list: [
            "Besi Hollow Galvanis tahan karat",
            "Besi Hitam Mild Steel kokoh",
            "Stainless Steel 304 tahan korosi",
            "Atap Polycarbonate & Alderon",
            "Finishing Cat Duco / Semprot Epoxy"
          ]
        },
        {
          heading: `Katalog Produk Pengelasan Mangala Living`,
          paragraphs: [
            `Kami mengerjakan beragam produk besi untuk kebutuhan bangunan pribadi dan komersial:`,
            `Semua produk dapat dipesan secara custom menyesuaikan ukuran lokasi.`
          ],
          list: [
            "Pagar Rumah Minimalis & Pagar Tempa Klasik",
            "Kanopi Rumah, Garasi, & Toko",
            "Teralis Jendela & Pintu Exspanda Kasa Nyamuk",
            "Railing Tangga & Balkon Kustom",
            "Folding Gate, Pintu Besi, & Menara Toren"
          ]
        },
        {
          heading: `Alasan Konsumen Memilih Mangala Living`,
          paragraphs: [
            `Keunggulan utama bengkel las kami sejak 1999:`
          ],
          list: [
            "Pengalaman 25+ tahun di bidang las besi",
            "Gratis survei lokasi dan konsultasi RAB",
            "Pengerjaan tepat waktu dan rapi",
            "Harga kompetitif langsung dari pabrik/bengkel",
            "Garansi pemeliharaan 1 tahun resmi",
            "Respon WhatsApp 24 jam via +6288801146881"
          ]
        },
        {
          heading: `Rincian Biaya & RAB Terbuka`,
          paragraphs: [
            `Dapatkan estimasi biaya pengerjaan ${keyword} yang transparan sebelum proyek dimulai.`,
            `Kami akan membantu memberikan alternatif bahan yang sesuai dengan budget Anda tanpa mengurangi faktor keselamatan konstruksi.`,
            `Hubungi kami via WhatsApp +6288801146881 untuk penawaran diskon khusus.`
          ]
        },
        {
          heading: `Hubungi Mangala Living`,
          paragraphs: [
            `Area jangkauan: Bekasi, Cikarang, Cibubur, Jakarta, Depok, Bogor, Tangerang, dan Karawang.`,
            `Wujudkan ${title} berkualitas untuk rumah Anda. Kontak WhatsApp +6288801146881 sekarang untuk survei lokasi GRATIS!`
          ]
        }
      ]
    },
    // Template 9: Pilihan Utama Arsitek & Pengembang Properti
    {
      title: title,
      excerpt: `Penyedia ${keyword} profesional untuk proyek perumahan, villa, & ruko. Kualitas fabrikasi standar arsitektur dari Mangala Living. WA +6288801146881.`,
      sections: [
        {
          heading: `Standar Arsitektur untuk ${title}`,
          paragraphs: [
            `Dalam skala pengembang properti maupun kontraktor bangunan, pengadaan ${keyword} harus memenuhi standar spesifikasi gambar kerja arsitek serta batas waktu yang ketat.`,
            `Mangala Living adalah mitra bengkel las profesional yang berpengalaman melayani pesanan ${title} untuk proyek perumahan, ruko, cafe, hingga villa komersial.`,
            `Workshop kami di Setu Cibitung Bekasi memiliki kapasitas produksi yang memadai untuk menangani pengerjaan skala besar dengan konsistensi mutu yang terjaga.`
          ]
        },
        {
          heading: `Fabrikasi Profesional & Pembacaan Gambar Kerja`,
          paragraphs: [
            `Tim teknis kami terbiasa membaca detail shop drawing arsitek dalam memproduksi ${keyword}. Ketelitian dimensi dan sudut potong menjadi perhatian utama kami untuk kemudahan proses instalasi di lapangan.`
          ]
        },
        {
          heading: `Material Spesifikasi Industri`,
          paragraphs: [
            `Kami menyediakan pilihan bahan berkualitas tinggi sesuai tuntutan dokumen tender/spesifikasi proyek:`,
            `Setiap material dilengkapi dengan pelindung anti-karat standar proyek bangunan.`
          ],
          list: [
            "Besi Hollow Galvanis SNI",
            "Besi Siku, WF, & H-Beam",
            "Stainless Steel SUS 304",
            "Plat Besi Laser Cut Custom Pattern",
            "Finishing Cat Epoksi Industri & Powder Coating"
          ]
        },
        {
          heading: `Lingkup Pengerjaan Konstruksi Besi`,
          paragraphs: [
            `Mangala Living melayani pengadaan berbagai elemen besi bangunan:`,
            `Semua produk dikerjakan dengan standar kontrol kualitas menyeluruh.`
          ],
          list: [
            "Kanopi Struktur Besi & Kaca Tempered",
            "Pagar Besi Perumahan & Pagar Tempa Villa",
            "Teralis Jendela & Pintu Pengaman Ruko",
            "Railing Tangga Utama & Railing Balkon",
            "Folding Gate, Pintu Besi, & Tangga Darurat"
          ]
        },
        {
          heading: `Mengapa Developer & Arsitek Memilih Kami?`,
          paragraphs: [
            `Komitmen profesionalitas Mangala Living sejak 1999:`
          ],
          list: [
            "Pengalaman puluhan tahun mengelola proyek besi",
            "Kapasitas bengkel produksi yang luas dan siap komersial",
            "Kemampuan membaca CAD / Gambar Kerja Arsitek",
            "Ketepatan jadwal penyerahan proyek (on-time delivery)",
            "Garansi pemeliharaan resmi hingga 1 tahun",
            "Layanan komunikasi 24 jam via WhatsApp +6288801146881"
          ]
        },
        {
          heading: `Penawaran Harga Proyek & RAB`,
          paragraphs: [
            `Dapatkan penawaran harga grosir / volume khusus untuk pengerjaan ${keyword} skala proyek.`,
            `Kami siap menerbitkan RAB tertulis dan invoice resmi sesuai kualifikasi pembukuan perusahaan Anda.`,
            `Hubungi tim B2B / Sales Mangala Living via WhatsApp di +6288801146881.`
          ]
        },
        {
          heading: `Jangkauan Layanan & Kontak Proyek`,
          paragraphs: [
            `Melayani seluruh wilayah Jabodetabek, Karawang, Bali, hingga pengiriman proyek luar pulau dan ekspor.`,
            `Diskusikan proyek ${title} Anda bersama Mangala Living. Hubungi WhatsApp +6288801146881 untuk penawaran & konsultasi gratis!`
          ]
        }
      ]
    }
  ]

  const selectedTemplate = templates[templateIdx]
  console.log(`[Offline Fallback System] Generated article using Template #${templateIdx} for topic: "${title}"`)
  return selectedTemplate
}

async function run() {
  console.log('Starting Mangala Living Blog Automation Script...')

  try {
    execSync('git pull origin main --rebase', { stdio: 'inherit' })
  } catch (e) {
    console.log('Initial git pull --rebase warning:', e.message)
  }

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

  try {
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

  let article
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

    article = JSON.parse(cleanJson)
    if (!article.sections || !Array.isArray(article.sections) || article.sections.length === 0) {
      throw new Error('Invalid LLM output structure')
    }
    console.log(`Article generated via LLM: ${article.sections?.length || 0} sections`)
  } catch (err) {
    console.log(`LLM Generation Note: ${err.message}`)
    console.log('Switching to 10-Template Seamless Offline Fallback System...')
    article = generateFallbackArticle(topicItem)
  }

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
