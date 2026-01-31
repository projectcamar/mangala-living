import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link, useLocation, Navigate } from 'react-router-dom'
import { Mail, MessageCircle, Share2, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ServiceAreasSection from '../components/ServiceAreasSection'
import AuthorCard from '../components/AuthorCard'
import { getPostBySlug, BLOG_POSTS } from '../data/blog'
import { getBlogPostContentLocalized, type BlogSection } from '../data/blogContent'
import { generateBlogPostingSchema, generateFAQSchema } from '../utils/structuredData'
import { generateLanguageSpecificMeta, generateLocalizedUrls, truncateTitle, truncateMetaDescription } from '../utils/seo'
import BlogProductShowcase from '../components/BlogProductShowcase'
import { getRelevantProductsForBlog, getProductShowcaseHeading } from '../utils/blogProductMapping'
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager'
import { trackWhatsAppClick } from '../utils/whatsappTracking'
import './Blog.css'
import './BlogPost.css'
import '../components/DualLanguage.css'

// Translations for sidebar features
const SIDEBAR_FEATURES_TRANSLATIONS: Record<LanguageCode, {
  newsletter: {
    title: string
    description: string
    placeholder: string
    button: string
    success: string
  }
  share: {
    title: string
    description: string
    copied: string
    shareOn: string
  }
  consultation: {
    title: string
    description: string
    button: string
  }
}> = {
  id: {
    newsletter: {
      title: 'Dapatkan Update Artikel',
      description: 'Subscribe untuk menerima artikel terbaru tentang furniture industrial langsung ke email Anda.',
      placeholder: 'Masukkan email Anda',
      button: 'Subscribe',
      success: 'Terima kasih! Silakan cek email Anda untuk konfirmasi.'
    },
    share: {
      title: 'Bagikan Artikel',
      description: 'Bagikan artikel ini ke teman atau kolega Anda',
      copied: 'Link berhasil disalin!',
      shareOn: 'Bagikan di'
    },
    consultation: {
      title: 'Konsultasi Gratis',
      description: 'Butuh saran untuk project furniture Anda? Chat langsung dengan tim kami.',
      button: 'Chat via WhatsApp'
    }
  },
  en: {
    newsletter: {
      title: 'Get Article Updates',
      description: 'Subscribe to receive the latest industrial furniture articles directly to your email.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
      success: 'Thank you! Please check your email for confirmation.'
    },
    share: {
      title: 'Share Article',
      description: 'Share this article with your friends or colleagues',
      copied: 'Link copied successfully!',
      shareOn: 'Share on'
    },
    consultation: {
      title: 'Free Consultation',
      description: 'Need advice for your furniture project? Chat directly with our team.',
      button: 'Chat via WhatsApp'
    }
  },
  ar: {
    newsletter: {
      title: 'احصل على تحديثات المقالات',
      description: 'اشترك لتلقي أحدث مقالات الأثاث الصناعي مباشرة إلى بريدك الإلكتروني.',
      placeholder: 'أدخل بريدك الإلكتروني',
      button: 'اشترك',
      success: 'شكراً لك! يرجى التحقق من بريدك الإلكتروني للتأكيد.'
    },
    share: {
      title: 'شارك المقال',
      description: 'شارك هذه المقالة مع أصدقائك أو زملائك',
      copied: 'تم نسخ الرابط بنجاح!',
      shareOn: 'شارك على'
    },
    consultation: {
      title: 'استشارة مجانية',
      description: 'تحتاج إلى نصيحة لمشروع الأثاث الخاص بك؟ تواصل مباشرة مع فريقنا.',
      button: 'الدردشة عبر واتساب'
    }
  },
  zh: {
    newsletter: {
      title: '获取文章更新',
      description: '订阅以直接通过电子邮件接收最新的工业风家具文章。',
      placeholder: '输入您的邮箱',
      button: '订阅',
      success: '谢谢！请查看您的邮箱进行确认。'
    },
    share: {
      title: '分享文章',
      description: '与您的朋友或同事分享这篇文章',
      copied: '链接已成功复制！',
      shareOn: '分享到'
    },
    consultation: {
      title: '免费咨询',
      description: '需要家具项目建议？直接与我们团队聊天。',
      button: '通过 WhatsApp 聊天'
    }
  },
  ja: {
    newsletter: {
      title: '記事の更新を受け取る',
      description: '最新のインダストリアル家具記事をメールで直接受け取るために購読してください。',
      placeholder: 'メールアドレスを入力',
      button: '購読',
      success: 'ありがとうございます！メールで確認してください。'
    },
    share: {
      title: '記事を共有',
      description: 'この記事を友達や同僚と共有してください',
      copied: 'リンクが正常にコピーされました！',
      shareOn: 'で共有'
    },
    consultation: {
      title: '無料相談',
      description: '家具プロジェクトのアドバイスが必要ですか？チームに直接チャットできます。',
      button: 'WhatsApp でチャット'
    }
  },
  es: {
    newsletter: {
      title: 'Recibe Actualizaciones',
      description: 'Suscríbete para recibir los últimos artículos sobre muebles industriales directamente en tu correo.',
      placeholder: 'Ingresa tu correo',
      button: 'Suscribirse',
      success: '¡Gracias! Por favor revisa tu correo para confirmar.'
    },
    share: {
      title: 'Compartir Artículo',
      description: 'Comparte este artículo con tus amigos o colegas',
      copied: '¡Enlace copiado con éxito!',
      shareOn: 'Compartir en'
    },
    consultation: {
      title: 'Consulta Gratuita',
      description: '¿Necesitas asesoramiento para tu proyecto de muebles? Chatea directamente con nuestro equipo.',
      button: 'Chatear por WhatsApp'
    }
  },
  fr: {
    newsletter: {
      title: 'Recevoir les Mises à Jour',
      description: 'Abonnez-vous pour recevoir les derniers articles sur le mobilier industriel directement par e-mail.',
      placeholder: 'Entrez votre e-mail',
      button: "S'abonner",
      success: 'Merci ! Veuillez vérifier votre e-mail pour confirmation.'
    },
    share: {
      title: 'Partager l\'Article',
      description: 'Partagez cet article avec vos amis ou collègues',
      copied: 'Lien copié avec succès !',
      shareOn: 'Partager sur'
    },
    consultation: {
      title: 'Consultation Gratuite',
      description: 'Besoin de conseils pour votre projet de mobilier ? Discutez directement avec notre équipe.',
      button: 'Discuter via WhatsApp'
    }
  },
  ko: {
    newsletter: {
      title: '기사 업데이트 받기',
      description: '최신 산업용 가구 기사를 이메일로 직접 받으려면 구독하세요.',
      placeholder: '이메일 주소 입력',
      button: '구독',
      success: '감사합니다! 이메일에서 확인해 주세요.'
    },
    share: {
      title: '기사 공유',
      description: '이 기사를 친구나 동료와 공유하세요',
      copied: '링크가 성공적으로 복사되었습니다!',
      shareOn: '에서 공유'
    },
    consultation: {
      title: '무료 상담',
      description: '가구 프로젝트에 대한 조언이 필요하신가요? 저희 팀과 직접 채팅하세요.',
      button: 'WhatsApp으로 채팅'
    }
  }
}

const BLOG_PRODUCT_SHOWCASE_DESCRIPTION: Record<LanguageCode, string> = {
  id: 'Temukan produk industrial berkualitas tinggi yang relevan dengan topik artikel ini. Semua produk dibuat dengan kualitas premium, material industrial grade, dan finishing powder coating tahan lama di workshop kami di Bekasi. Harga pabrik langsung, tidak ada perantara!',
  en: 'Discover high-quality industrial furniture collection related to this article. All products are manufactured with premium materials, industrial-grade quality, and durable powder coating finish in our Bekasi workshop. Factory-direct pricing with no intermediaries!',
  ar: 'اكتشف مجموعتنا من أثاث صناعي عالي الجودة المتعلق بهذه المقالة. يتم تصنيع جميع المنتجات بمواد عالية الجودة وجودة صناعية وتشطيب ببودرة متين في ورشتنا في بيكاسي. أسعار مباشرة من المصنع بدون وسطاء!',
  zh: '探索与本文相关的高品质工业风家具系列。所有产品均在我们在Bekasi的工坊中使用优质材料、工业级质量和耐用粉末涂层精加工制造。工厂直销价格，无中间商！',
  ja: 'この記事に関連する高品質な工業風家具コレクションをご覧ください。すべての製品は、Bekasiのワークショップでプレミアム素材、工業グレードの品質、耐久性のあるパウダーコーティング仕上げで製造されています。工場直販価格、仲介業者なし！',
  es: 'Descubra nuestra colección de muebles industriales de alta calidad relacionada con este artículo. Todos los productos están fabricados con materiales premium, calidad de grado industrial y acabado de pintura en polvo duradero en nuestro taller de Bekasi. Precios directos de fábrica, sin intermediarios!',
  fr: 'Découvrez notre collection de mobilier industriel de haute qualité liée à cet article. Tous les produits sont fabriqués avec des matériaux premium, une qualité de qualité industrielle et une finition en poudre durable dans notre atelier de Bekasi. Prix direct d\'usine, sans intermédiaires!',
  ko: '이 기사와 관련된 고품질 산업용 가구 컬렉션을 발견하세요. 모든 제품은 Bekasi의 작업장에서 프리미엄 재료, 산업 등급 품질 및 내구성이 뛰어난 파우더 코팅 마감으로 제조됩니다. 공장 직접 가격, 중간 상인 없음!'
}

const CTA_TRANSLATIONS: Record<LanguageCode, {
  title: string
  subtitle: string
  viewAllProducts: string
  contactUs: string
}> = {
  id: {
    title: 'Tertarik dengan Furniture Industrial Kami?',
    subtitle: 'Kunjungi koleksi lengkap furniture industrial custom berkualitas tinggi dari Mangala Living.',
    viewAllProducts: 'Lihat Semua Produk',
    contactUs: 'Hubungi Kami'
  },
  en: {
    title: 'Interested in Our Industrial Furniture?',
    subtitle: 'Visit our complete collection of high-quality custom industrial furniture from Mangala Living.',
    viewAllProducts: 'View All Products',
    contactUs: 'Contact Us'
  },
  ar: {
    title: 'هل أنت مهتم بأثاثنا الصناعي؟',
    subtitle: 'زر مجموعتنا الكاملة من الأثاث الصناعي المخصص عالي الجودة من Mangala Living.',
    viewAllProducts: 'عرض جميع المنتجات',
    contactUs: 'اتصل بنا'
  },
  zh: {
    title: '对我们的工业风家具感兴趣吗？',
    subtitle: '访问我们完整的Mangala Living高品质定制工业风家具系列。',
    viewAllProducts: '查看所有产品',
    contactUs: '联系我们'
  },
  ja: {
    title: '当社の工業風家具にご興味はありますか？',
    subtitle: 'Mangala Livingの高品質なカスタム工業風家具の完全なコレクションをご覧ください。',
    viewAllProducts: 'すべての製品を見る',
    contactUs: 'お問い合わせ'
  },
  es: {
    title: '¿Interesado en Nuestro Mobiliario Industrial?',
    subtitle: 'Visite nuestra colección completa de muebles industriales personalizados de alta calidad de Mangala Living.',
    viewAllProducts: 'Ver Todos los Productos',
    contactUs: 'Contáctenos'
  },
  fr: {
    title: 'Intéressé par Notre Mobilier Industriel ?',
    subtitle: 'Visitez notre collection complète de mobilier industriel sur mesure de haute qualité de Mangala Living.',
    viewAllProducts: 'Voir Tous les Produits',
    contactUs: 'Nous Contacter'
  },
  ko: {
    title: '저희 산업용 가구에 관심이 있으신가요?',
    subtitle: 'Mangala Living의 고품질 맞춤형 산업용 가구 컬렉션 전체를 둘러보세요.',
    viewAllProducts: '모든 제품 보기',
    contactUs: '문의하기'
  }
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLanguageLoading, setIsLanguageLoading] = useState(true)
  const [language, setLanguage] = useState<LanguageCode>('en')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)
  const post = slug ? getPostBySlug(slug) : undefined

  // Check if post has custom content, otherwise use AI-generated content
  const hasCustomContent = post?.customContent && (
    post.customContent.introduction ||
    (post.customContent.sections && post.customContent.sections.length > 0) ||
    post.customContent.conclusion
  )

  const content = slug ? (hasCustomContent ? {
    sections: [
      // Introduction section
      ...(post.customContent?.introduction ? [{
        heading: '',
        paragraphs: [post.customContent.introduction]
      }] : []),
      // Custom sections
      ...(post.customContent?.sections?.map(section => ({
        heading: section.heading,
        paragraphs: [section.content]
      } as BlogSection)) || []),
      // Conclusion section
      ...(post.customContent?.conclusion ? [{
        heading: '',
        paragraphs: [post.customContent.conclusion]
      }] : [])
    ]
  } : getBlogPostContentLocalized(slug, language)) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    // If the post has custom content with an explicit language set, use it.
    // Otherwise, fall back to URL/browser detection.
    if (post?.customContent?.language) {
      const explicitLang = post.customContent.language
      setLanguage(explicitLang)
      setIsIndonesian(explicitLang === 'id')
      setIsLanguageLoading(false)
    } else {
      const detectedLang = getCurrentLanguage(location.pathname, location.search)
      setLanguage(detectedLang)
      setIsIndonesian(detectedLang === 'id')
      setIsLanguageLoading(false)
    }
  }, [location.pathname, location.search, post?.customContent?.language])

  if (isLanguageLoading) {
    return (
      <div className="blog-page blog-post-page">
        <AnnouncementBar language={language} isIndonesian={isIndonesian} />
        <Header isIndonesian={isIndonesian} language={language} />
        <main className="blog-post-main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid #f3f3f3',
              borderTop: '3px solid #333',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1rem'
            }} />
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
            <p>Loading...</p>
          </div>
        </main>
        <Footer isIndonesian={isIndonesian} language={language} />
      </div>
    )
  }

  // Redirect to NotFound page if blog post doesn't exist to prevent Soft 404
  if (!post || !content) {
    return <Navigate to="/404-not-found" replace />
  }

  // Get other articles (exclude current)
  const otherArticles = BLOG_POSTS
    .filter(p => p.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 7)

  // Share article functions
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const articleTitle = post?.title || ''

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${articleTitle} ${currentUrl}`)}`
  }

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim() || newsletterLoading) return

    setNewsletterLoading(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: 'Blog Visitor',
          email: newsletterEmail,
          notificationType: 'newsletter_subscription',
          blogPost: post?.title || '',
          blogPostUrl: window.location.href,
          language: language
        }),
      })
      setNewsletterSubmitted(true)
      setNewsletterEmail('')
      setTimeout(() => setNewsletterSubmitted(false), 5000)
    } catch (error) {
      console.error('Newsletter subscription error:', error)
    } finally {
      setNewsletterLoading(false)
    }
  }

  // Get translations for sidebar features
  const sidebarFeatures = SIDEBAR_FEATURES_TRANSLATIONS[language] ?? SIDEBAR_FEATURES_TRANSLATIONS.en

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: post.category, path: '/blog' },
    { label: post.title, path: `/blog/${post.slug}` }
  ]

  // Generate SEO-optimized keywords based on post slug
  const generateKeywords = (slug: string, title: string) => {
    const keywordMap: { [key: string]: string } = {
      // HIGH-INTENT KEYWORDS
      'furniture-besi-custom-bekasi-workshop-terpercaya': 'furniture besi custom bekasi, workshop furniture bekasi, jasa furniture besi bekasi, custom furniture bekasi, furniture besi bekasi terpercaya',
      'industrial-furniture-bekasi-harga-pabrik-kualitas-premium': 'industrial furniture bekasi, furniture industrial bekasi harga pabrik, workshop furniture industrial bekasi, furniture cafe bekasi',
      'furniture-cafe-industrial-bekasi-desain-custom-modern': 'furniture cafe industrial bekasi, furniture cafe bekasi, meja kursi cafe bekasi, desain cafe industrial bekasi',
      'workshop-furniture-besi-bekasi-produksi-langsung': 'workshop furniture besi bekasi, produksi furniture besi bekasi, pabrik furniture bekasi, workshop furniture industrial',
      'jual-furniture-industrial-jakarta-bekasi-terlengkap': 'jual furniture industrial jakarta, jual furniture industrial bekasi, furniture industrial jakarta, toko furniture industrial',
      'meja-makan-besi-custom-bekasi-industrial-minimalis': 'meja makan besi custom bekasi, meja makan industrial bekasi, custom dining table bekasi, meja cafe bekasi',
      'meja-cafe-industrial-besi-custom-bekasi-jabodetabek': 'meja cafe industrial besi custom, meja cafe custom bekasi, meja bar industrial bekasi, furniture cafe jabodetabek',
      'furniture-besi-hotel-custom-desain-eksklusif': 'furniture besi hotel custom, custom furniture hotel, furniture hotel industrial, desain furniture hotel',
      'bikin-furniture-besi-custom-jabodetabek-berkualitas': 'bikin furniture besi custom, custom furniture jabodetabek, jasa bikin furniture besi, workshop furniture jabodetabek',
      'furniture-besi-untuk-restoran-industrial-modern': 'furniture besi untuk restoran, furniture restoran industrial, meja kursi restoran besi, furniture commercial',
      // FINISHING & TECHNIQUE
      'finishing-furniture-besi-powder-coating-vs-cat': 'cat powder coating, finishing furniture besi, powder coating vs cat biasa, furniture coating bekasi',
      'kombinasi-kayu-dan-besi-untuk-furniture-modern': 'kombinasi kayu dan besi, furniture modern, material industrial, meja kursi kayu besi',
      'desain-meja-bar-industrial-untuk-ruang-terbatas': 'desain meja bar, meja bar ruang terbatas, meja cafe compact, furniture space efficient'
    }
    return keywordMap[slug] || `${title}, furniture industrial, furniture besi custom, furniture bekasi, mangala living`
  }

  // Generate BlogPosting Schema
  const blogSchema = generateBlogPostingSchema(post)
  const metaDescription = (post.excerpt && post.excerpt.trim().length > 0)
    ? post.excerpt
    : (post.category === 'Export & International'
      ? `Read: ${post.title} — Practical guide, FAQs, and product references from Mangala Living.`
      : `Baca: ${post.title} — Panduan praktis, FAQ, dan referensi produk dari Mangala Living.`)

  // Extract FAQ from content for AI Search Optimization (Strategy 1 & 5)
  const extractFAQFromContent = () => {
    if (!content?.sections) return []

    const faqSection = content.sections.find(section =>
      section.heading?.toLowerCase().includes('faq') ||
      section.heading?.toLowerCase().includes('pertanyaan')
    )

    if (!faqSection?.list) return []

    // Parse FAQ list items (format: <strong>Question</strong><br/>Answer)
    return faqSection.list.map(item => {
      const cleanItem = item.replace(/<[^>]*>/g, ' ').trim()
      const parts = cleanItem.split(/\s+(?:br\/|:)\s*/)

      if (parts.length >= 2) {
        return {
          question: parts[0].trim(),
          answer: parts.slice(1).join(' ').trim()
        }
      }
      return null
    }).filter(Boolean) as Array<{ question: string; answer: string }>
  }

  const faqData = extractFAQFromContent()
  const faqSchema = faqData.length > 0 ? generateFAQSchema(faqData) : null

  // Check if this blog post should show Service Areas Section
  // Show for "Local Area Guide" category (geo-targeted posts) or specific workshop-related posts
  const shouldShowServiceAreas =
    post.category === 'Local Area Guide' ||
    post.slug === 'furniture-besi-custom-bekasi-workshop-terpercaya' ||
    post.slug === 'bikin-furniture-besi-custom-jabodetabek-berkualitas'

  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="blog-page blog-post-page">
      <AnnouncementBar language={language} isIndonesian={isIndonesian} />
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{truncateTitle(`${post.title} - Mangala Living`)}</title>
        <meta name="description" content={truncateMetaDescription(metaDescription)} />
        <meta name="keywords" content={generateKeywords(post.slug, post.title)} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        {/* Robots meta - allow indexing, follow links, point to canonical */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`blog-post-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author || 'Mangala Living'} />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
        {post.author === 'Helmi Ramdan' && (
          <>
            <meta name="author" content="Helmi Ramdan" />
            <meta name="article:author" content="Helmi Ramdan" />
            <meta name="article:author:role" content="Associate at Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta, Infrastructure Engineer" />
            <meta name="article:author:expertise" content="Commercial Space Design, Construction Management, Infrastructure Engineering, Architectural Drafting, Furniture Design Consultation" />
            <meta name="article:author:experience" content="8+ years total: 3+ years Infrastructure Engineering at Damai Putra Group, 5+ years Design Engineering & Architectural Drafting" />
            <meta name="article:author:education" content="Universitas Diponegoro" />
            <meta name="article:author:specialization" content="Commercial Space Design & Construction" />
            <link rel="author" href="https://www.linkedin.com/in/helmi-ramdan-067912118/" />
          </>
        )}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={post.image} />

        {/* BlogPosting Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>

        {/* FAQ Structured Data for AI Search Optimization */}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      <Header isIndonesian={isIndonesian} language={language} />

      <section className="blog-post-hero" aria-labelledby="blog-post-title">
        <div className="blog-post-hero-image">
          <img
            src={post.image}
            alt={`${post.title} - ${post.category} Industrial Furniture Article by Mangala Living`}
            title={`${post.title} | Mangala Living`}
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="blog-post-hero-overlay" />
        </div>
        <div className="blog-post-hero-content">
          <div className="blog-post-hero-inner">
            <span className="blog-post-category-tag">{post.category}</span>
            <h1 id="blog-post-title" className="blog-post-title">
              {post.title}
            </h1>
            <p className="blog-post-meta">
              {post.author || 'Mangala Living'} · {formattedDate}
            </p>
          </div>
        </div>
      </section>

      <main className="blog-post-main" aria-labelledby="blog-post-title">
        <section className="blog-content-section">
          <div className="blog-post-container">
            <Breadcrumb items={breadcrumbItems} />

            <div className="blog-post-layout">
              <article className="blog-post-article" aria-labelledby="blog-post-title">
                {post.customContent?.keyPoints && post.customContent.keyPoints.length > 0 && (
                  <div className="key-takeaways-box">
                    <h3>🔑 Key Takeaways</h3>
                    <ul>
                      {post.customContent.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {content.sections.map((section, index) => (
                  <React.Fragment key={index}>
                    <section className="blog-post-section">
                      {section.heading && <h2 className="blog-post-section-heading">{section.heading}</h2>}

                      {section.paragraphs?.map((para, pIndex) => (
                        <p
                          key={pIndex}
                          className="blog-post-paragraph"
                          dangerouslySetInnerHTML={{ __html: para }}
                        />
                      ))}

                      {section.image && (
                        <figure className="blog-post-figure">
                          <img
                            src={section.image}
                            alt={section.imageAlt || `${post.title} - ${section.heading || 'Industrial Furniture Article'} - Mangala Living`}
                            title={section.imageAlt || `${post.title} - ${section.heading || 'Furniture Industrial Guide'} by Mangala Living`}
                            loading="lazy"
                            width="800"
                            height="500"
                            itemProp="image"
                            data-image-type="blog-content"
                            data-post-slug={post.slug}
                            data-section-heading={section.heading || ''}
                          />
                          {section.imageAlt && <figcaption className="blog-post-figcaption">{section.imageAlt}</figcaption>}
                        </figure>
                      )}

                      {section.list && (
                        <ul className="blog-post-list">
                          {section.list.map((item, lIndex) => (
                            <li key={lIndex} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      )}
                    </section>

                    {index === 2 && (() => {
                      const relevantProducts = getRelevantProductsForBlog(post.slug, post.title, post.excerpt)
                      const hasProductKeywords = /meja|kursi|rak|display|bar|dining|kitchen|furniture|cabinet|shelf|chair|table/i.test(post.slug + post.title)

                      if (relevantProducts.length > 0 && hasProductKeywords) {
                        const showcaseHeading = getProductShowcaseHeading(post.slug, post.title)
                        const showcaseDescription = BLOG_PRODUCT_SHOWCASE_DESCRIPTION[language] || BLOG_PRODUCT_SHOWCASE_DESCRIPTION.en

                        return (
                          <div className="blog-post-product-showcase">
                            <BlogProductShowcase
                              products={relevantProducts}
                              heading={showcaseHeading}
                              description={showcaseDescription}
                              language={language}
                            />
                          </div>
                        )
                      }
                      return null
                    })()}
                  </React.Fragment>
                ))}

                {post.author === 'Helmi Ramdan' && (
                  <div className="blog-post-author-card">
                    <AuthorCard
                      name="Helmi Ramdan"
                      title={post.category === 'Export & International'
                        ? "Associate at Housing and Settlement Department, DKI Jakarta Province"
                        : "Associate at Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta"}
                      experience={post.category === 'Export & International'
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
                        ]}
                      linkedIn="https://www.linkedin.com/in/helmi-ramdan-067912118/"
                      language={language}
                    />
                  </div>
                )}

                {(() => {
                  const showcaseAlreadyShown = content.sections.length > 3

                  if (!showcaseAlreadyShown) {
                    const relevantProducts = getRelevantProductsForBlog(post.slug, post.title, post.excerpt)
                    const hasProductKeywords = /meja|kursi|rak|display|bar|dining|kitchen|furniture|cabinet|shelf|chair|table/i.test(post.slug + post.title)

                    if (relevantProducts.length > 0 && hasProductKeywords) {
                      const showcaseHeading = getProductShowcaseHeading(post.slug, post.title)
                      const showcaseDescription = BLOG_PRODUCT_SHOWCASE_DESCRIPTION[language] || BLOG_PRODUCT_SHOWCASE_DESCRIPTION.en

                      return (
                        <div className="blog-post-product-showcase">
                          <BlogProductShowcase
                            products={relevantProducts}
                            heading={showcaseHeading}
                            description={showcaseDescription}
                            language={language}
                          />
                        </div>
                      )
                    }
                  }
                  return null
                })()}

                <div className="blog-post-cta card">
                  <div className="section-header">
                    <h2>
                      {CTA_TRANSLATIONS[language]?.title || CTA_TRANSLATIONS.en.title}
                    </h2>
                    <p className="section-subtitle">
                      {CTA_TRANSLATIONS[language]?.subtitle || CTA_TRANSLATIONS.en.subtitle}
                    </p>
                  </div>
                  <div className="blog-post-cta-actions">
                    <Link to="/shop" className="btn-primary">
                      {CTA_TRANSLATIONS[language]?.viewAllProducts || CTA_TRANSLATIONS.en.viewAllProducts}
                    </Link>
                    <Link to="/contact-us" className="btn-secondary">
                      {CTA_TRANSLATIONS[language]?.contactUs || CTA_TRANSLATIONS.en.contactUs}
                    </Link>
                  </div>
                </div>
              </article>

              {otherArticles.length > 0 && (
                <aside className="blog-post-sidebar" aria-labelledby="blog-post-sidebar-title">
                  <div className="blog-post-sidebar-card card">
                    <h2 id="blog-post-sidebar-title" className="blog-post-sidebar-title">Other Articles</h2>
                    <ul className="blog-post-sidebar-list">
                      {otherArticles.map((article) => (
                        <li key={article.id}>
                          <Link to={`/blog/${article.slug}`} className="blog-post-sidebar-link">
                            <span className="blog-post-sidebar-link-title">{article.title}</span>
                            <span className="blog-post-sidebar-link-category">{article.category}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature 1: Newsletter Subscription */}
                  <div className="blog-post-sidebar-feature card">
                    <div className="sidebar-feature-icon">
                      <Mail size={20} />
                    </div>
                    <h3 className="sidebar-feature-title">{sidebarFeatures.newsletter.title}</h3>
                    <p className="sidebar-feature-description">{sidebarFeatures.newsletter.description}</p>
                    {!newsletterSubmitted ? (
                      <form onSubmit={handleNewsletterSubmit} className="sidebar-newsletter-form">
                        <input
                          type="email"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          placeholder={sidebarFeatures.newsletter.placeholder}
                          required
                          className="sidebar-newsletter-input"
                          disabled={newsletterLoading}
                        />
                        <button
                          type="submit"
                          className="sidebar-newsletter-btn"
                          disabled={newsletterLoading || !newsletterEmail.trim()}
                        >
                          {newsletterLoading ? '...' : sidebarFeatures.newsletter.button}
                        </button>
                      </form>
                    ) : (
                      <div className="sidebar-newsletter-success">
                        <p>{sidebarFeatures.newsletter.success}</p>
                      </div>
                    )}
                  </div>

                  {/* Feature 2: Share Article */}
                  <div className="blog-post-sidebar-feature card">
                    <div className="sidebar-feature-icon">
                      <Share2 size={20} />
                    </div>
                    <h3 className="sidebar-feature-title">{sidebarFeatures.share.title}</h3>
                    <p className="sidebar-feature-description">{sidebarFeatures.share.description}</p>
                    <div className="share-buttons-grid">
                      <a
                        href={shareUrls.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-button share-facebook"
                        onClick={() => trackWhatsAppClick('blog_post_share_facebook', {
                          blogPost: post?.title || '',
                          blogPostSlug: slug || ''
                        })}
                      >
                        <Facebook size={18} />
                        <span>Facebook</span>
                      </a>
                      <a
                        href={shareUrls.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-button share-twitter"
                        onClick={() => trackWhatsAppClick('blog_post_share_twitter', {
                          blogPost: post?.title || '',
                          blogPostSlug: slug || ''
                        })}
                      >
                        <Twitter size={18} />
                        <span>Twitter</span>
                      </a>
                      <a
                        href={shareUrls.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-button share-linkedin"
                        onClick={() => trackWhatsAppClick('blog_post_share_linkedin', {
                          blogPost: post?.title || '',
                          blogPostSlug: slug || ''
                        })}
                      >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={shareUrls.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-button share-whatsapp"
                        onClick={() => trackWhatsAppClick('blog_post_share_whatsapp', {
                          blogPost: post?.title || '',
                          blogPostSlug: slug || ''
                        })}
                      >
                        <MessageCircle size={18} />
                        <span>WhatsApp</span>
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className={`share-button share-copy ${linkCopied ? 'copied' : ''}`}
                      >
                        {linkCopied ? <Check size={18} /> : <Copy size={18} />}
                        <span>{linkCopied ? sidebarFeatures.share.copied : 'Copy Link'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Feature 3: Free Consultation CTA */}
                  <div className="blog-post-sidebar-feature card sidebar-consultation">
                    <div className="sidebar-feature-icon">
                      <MessageCircle size={20} />
                    </div>
                    <h3 className="sidebar-feature-title">{sidebarFeatures.consultation.title}</h3>
                    <p className="sidebar-feature-description">{sidebarFeatures.consultation.description}</p>
                    <a
                      href={`https://wa.me/+6288801146881?text=${encodeURIComponent(
                        post?.category === 'Export & International'
                          ? `Hello Mangala Living,\n\nI just read your article: "${post?.title}". I'm interested in industrial furniture for my project. Can I get more information and consultation?\n\nArticle: ${window.location.href}\n\nThank you!`
                          : `Halo Mangala Living,\n\nSaya baru membaca artikel Anda: "${post?.title}". Saya tertarik dengan furniture industrial untuk project saya. Bisakah saya mendapatkan informasi lebih lanjut dan konsultasi?\n\nArtikel: ${window.location.href}\n\nTerima kasih!`
                      )}`}
                      className="sidebar-consultation-btn"
                      onClick={() => trackWhatsAppClick('blog_post_consultation_sidebar', {
                        blogPost: post?.title || '',
                        blogPostSlug: slug || '',
                        blogPostCategory: post?.category || ''
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={16} />
                      {sidebarFeatures.consultation.button}
                    </a>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>
      </main>

      {shouldShowServiceAreas && <ServiceAreasSection isIndonesian={isIndonesian} />}

      <Footer isIndonesian={isIndonesian} language={language} />
    </div>
  )
}

export default BlogPost
