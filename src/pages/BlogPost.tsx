import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link, useLocation } from 'react-router-dom'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ServiceAreasSection from '../components/ServiceAreasSection'
import AuthorCard from '../components/AuthorCard'
import { getPostBySlug, BLOG_POSTS } from '../data/blog'
import { getBlogPostContent } from '../data/blogContent'
import { generateBlogPostingSchema, generateFAQSchema } from '../utils/structuredData'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import BlogProductShowcase from '../components/BlogProductShowcase'
import { getRelevantProductsForBlog, getProductShowcaseHeading } from '../utils/blogProductMapping'
import './Blog.css'
import '../components/DualLanguage.css'

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [isLanguageLoading, setIsLanguageLoading] = useState(true)
  const post = slug ? getPostBySlug(slug) : undefined
  const content = slug ? getBlogPostContent(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    const path = location.pathname

    if (path.startsWith('/id')) {
      setIsIndonesian(true)
      setIsLanguageLoading(false)
      return
    }

    if (path.startsWith('/eng')) {
      setIsIndonesian(false)
      setIsLanguageLoading(false)
      return
    }

    const params = new URLSearchParams(location.search)
    const lang = params.get('lang')

    if (lang === 'id' || lang === 'en') {
      setIsIndonesian(lang === 'id')
      setIsLanguageLoading(false)
      return
    }

    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()

        if (data.country_code === 'ID') {
          setIsIndonesian(true)
        } else {
          const browserLang = navigator.language || navigator.languages?.[0]
          setIsIndonesian(Boolean(browserLang?.startsWith('id')))
        }
      } catch (error) {
        const browserLang = navigator.language || navigator.languages?.[0]
        setIsIndonesian(Boolean(browserLang?.startsWith('id')))
      } finally {
        setIsLanguageLoading(false)
      }
    }

    detectLocation()
  }, [location.pathname, location.search])

  if (isLanguageLoading) {
    return null
  }

  if (!post || !content) {
    return (
      <div className="blog-page">
        <AnnouncementBar isIndonesian={isIndonesian} />
        <Header isIndonesian={isIndonesian} />
        <section className="blog-content-section" aria-labelledby="blog-post-not-found-heading">
          <div className="blog-container">
            <div className="section-header">
              <h1 id="blog-post-not-found-heading">Article Not Found</h1>
              <p className="section-subtitle">The article you are looking for is unavailable.</p>
            </div>
            <Link to="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </section>
        <Footer isIndonesian={isIndonesian} />
      </div>
    )
  }

  // Get other articles (exclude current)
  const otherArticles = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3)

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
    <div className="blog-page">
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>{post.title} - Mangala Living</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={generateKeywords(post.slug, post.title)} />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`blog-post-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
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
        <meta name="twitter:description" content={post.excerpt} />
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
      <Header isIndonesian={isIndonesian} />

      <main>
        <section className="blog-content-section">
          <div className="blog-container">
            <Breadcrumb items={breadcrumbItems} />

            <article>
              <header>
                <h1>{post.title}</h1>
                <p>{post.author || 'Mangala Living'} · {formattedDate}</p>
              </header>

              {content.sections.map((section, index) => (
                <React.Fragment key={index}>
                  <section>
                    {section.heading && <h2>{section.heading}</h2>}

                    {section.paragraphs?.map((para, pIndex) => (
                      <p key={pIndex} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}

                    {section.image && (
                      <figure>
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
                        {section.imageAlt && <figcaption>{section.imageAlt}</figcaption>}
                      </figure>
                    )}

                    {section.list && (
                      <ul>
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
                      const showcaseDescription = post.category === 'Export & International'
                        ? `Discover our premium industrial furniture collection, manufactured in our Bekasi workshop with high-quality materials and powder coating finish.`
                        : `Berikut adalah produk industrial pilihan kami yang relevan dengan topik artikel ini. Semua produk dibuat dengan kualitas premium dan material industrial grade di workshop kami di Bekasi.`

                      return (
                        <BlogProductShowcase
                          products={relevantProducts}
                          heading={showcaseHeading}
                          description={showcaseDescription}
                          isIndonesian={post.category !== 'Export & International'}
                        />
                      )
                    }
                    return null
                  })()}
                </React.Fragment>
              ))}

              {post.author === 'Helmi Ramdan' && (
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
                  isIndonesian={post.category !== 'Export & International'}
                />
              )}

              {(() => {
                const showcaseAlreadyShown = content.sections.length > 3

                if (!showcaseAlreadyShown) {
                  const relevantProducts = getRelevantProductsForBlog(post.slug, post.title, post.excerpt)
                  const hasProductKeywords = /meja|kursi|rak|display|bar|dining|kitchen|furniture|cabinet|shelf|chair|table/i.test(post.slug + post.title)

                  if (relevantProducts.length > 0 && hasProductKeywords) {
                    const showcaseHeading = getProductShowcaseHeading(post.slug, post.title)
                    const showcaseDescription = post.category === 'Export & International'
                      ? `Discover high-quality industrial furniture collection related to this article. All products are manufactured with premium materials, industrial-grade quality, and durable powder coating finish in our Bekasi workshop. Factory-direct pricing with no intermediaries!`
                      : `Temukan produk industrial berkualitas tinggi yang relevan dengan topik artikel ini. Semua produk dibuat dengan kualitas premium, material industrial grade, dan finishing powder coating tahan lama di workshop kami di Bekasi. Harga pabrik langsung, tidak ada perantara!`

                    return (
                      <BlogProductShowcase
                        products={relevantProducts}
                        heading={showcaseHeading}
                        description={showcaseDescription}
                        isIndonesian={post.category !== 'Export & International'}
                      />
                    )
                  }
                }
                return null
              })()}

              <section>
                <div className="section-header">
                  <h2>
                    {post.category === 'Export & International'
                      ? 'Interested in Our Industrial Furniture?'
                      : 'Tertarik dengan Furniture Industrial Kami?'}
                  </h2>
                  <p className="section-subtitle">
                    {post.category === 'Export & International'
                      ? 'Visit our complete collection of high-quality custom industrial furniture from Mangala Living.'
                      : 'Kunjungi koleksi lengkap furniture industrial custom berkualitas tinggi dari Mangala Living.'}
                  </p>
                </div>
                <Link to="/shop" className="btn-primary">
                  {post.category === 'Export & International' ? 'View All Products' : 'Lihat Semua Produk'}
                </Link>
                {' '}
                <Link to="/contact-us" className="btn-secondary">
                  {post.category === 'Export & International' ? 'Contact Us' : 'Hubungi Kami'}
                </Link>
              </section>
            </article>

            {otherArticles.length > 0 && (
              <aside>
                <h2>Other Articles</h2>
                <ul>
                  {otherArticles.map((article) => (
                    <li key={article.id}>
                      <Link to={`/blog/${article.slug}`}>
                        <strong>{article.title}</strong>
                        <div>{article.category}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </section>
      </main>

      {shouldShowServiceAreas && <ServiceAreasSection isIndonesian={isIndonesian} />}

      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default BlogPost
