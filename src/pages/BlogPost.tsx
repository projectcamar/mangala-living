import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link, useLocation } from 'react-router-dom'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ServiceAreasSection from '../components/ServiceAreasSection'
import { getPostBySlug, BLOG_POSTS } from '../data/blog'
import { getBlogPostContent } from '../data/blogContent'
import { generateBlogPostingSchema, generateFAQSchema } from '../utils/structuredData'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import './BlogPost.css'

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const post = slug ? getPostBySlug(slug) : undefined
  const content = slug ? getBlogPostContent(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post || !content) {
    return (
      <div className="blog-post-page">
        <AnnouncementBar />
        <Header />
        <div className="blog-post-not-found">
          <h1>Article Not Found</h1>
          <Link to="/blog" className="back-to-blog-btn">Back to Blog</Link>
        </div>
        <Footer />
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

  const searchParams = new URLSearchParams(location.search)
  const langParam = searchParams.get('lang')
  const localeMeta = generateLanguageSpecificMeta(langParam === 'id')
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  return (
    <div className="blog-post-page">
      <AnnouncementBar />
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
      
      <Header />
      
      <div className="blog-post-container">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="blog-post-layout">
          {/* Main Content */}
          <article className="blog-post-main">
            <h1 className="blog-post-title">{post.title}</h1>
            
            <div className="blog-post-meta">
              <span className="blog-post-author">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                {post.author || 'Mangala Living'}
              </span>
              <span className="blog-post-date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>

            <div className="blog-post-content">
              {content.sections.map((section, index) => (
                <div key={index} className="blog-section">
                  {section.heading && <h2>{section.heading}</h2>}
                  
                  {section.paragraphs && section.paragraphs.map((para, pIndex) => (
                    <p key={pIndex} dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                  
                  {section.image && (
                    <div className="blog-post-image">
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
                      <div className="blog-image-badge">MANGALA</div>
                    </div>
                  )}
                  
                  {section.list && (
                    <ul className="blog-post-list">
                      {section.list.map((item, lIndex) => (
                        <li key={lIndex} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* CTA Section */}
              <div className="blog-post-cta">
                <h3>Tertarik dengan Furniture Industrial Kami?</h3>
                <p>Kunjungi koleksi lengkap furniture industrial custom berkualitas tinggi dari Mangala Living.</p>
                <div className="blog-cta-buttons">
                  <Link to="/shop" className="blog-cta-btn primary">Lihat Semua Produk</Link>
                  <Link to="/contact-us" className="blog-cta-btn secondary">Hubungi Kami</Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="blog-post-sidebar">
            <h3 className="sidebar-title">Other Articles</h3>
            <div className="sidebar-articles">
              {otherArticles.map((article) => (
                <Link key={article.id} to={`/blog/${article.slug}`} className="sidebar-article-card">
                  <div className="sidebar-article-image">
                    <img 
                      src={article.image} 
                      alt={`${article.title} - ${article.category} Blog Furniture Industrial Mangala Living`}
                      title={`${article.title} - Related Article ${article.category}`}
                      loading="lazy"
                      width="200"
                      height="125"
                      itemProp="image"
                      data-image-type="sidebar-article"
                      data-post-slug={article.slug}
                      data-category={article.category}
                    />
                    <div className="sidebar-article-badge">MANGALA</div>
                  </div>
                  <div className="sidebar-article-content">
                    <span className="sidebar-article-category">{article.category.toUpperCase()}</span>
                    <h4 className="sidebar-article-title">{article.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* Service Areas Section - Only for Local Area Guide posts */}
      {shouldShowServiceAreas && <ServiceAreasSection isIndonesian={true} />}

      <Footer />
    </div>
  )
}

export default BlogPost

