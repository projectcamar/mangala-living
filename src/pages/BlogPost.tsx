import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { getPostBySlug, BLOG_POSTS } from '../data/blog'
import { getBlogPostContent } from '../data/blogContent'
import './BlogPost.css'

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined
  const content = slug ? getBlogPostContent(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post || !content) {
    return (
      <div className="blog-post-page">
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

  return (
    <div className="blog-post-page">
      <Helmet>
        <title>{post.title} - Mangala Living</title>
        <meta name="description" content={post.slug === 'finishing-furniture-besi-powder-coating-vs-cat'
          ? 'Cat Powder Coating vs Cat Biasa ✓ Perbandingan Lengkap ✓ Tips Finishing Furniture Besi ✓ Workshop Mangala Bekasi'
          : post.slug === 'kombinasi-kayu-dan-besi-untuk-furniture-modern'
          ? 'Kombinasi Kayu & Besi untuk Furniture Modern ✓ Desain Industrial ✓ Tips Material ✓ Workshop Bekasi'
          : post.slug === 'desain-meja-bar-industrial-untuk-ruang-terbatas'
          ? 'Desain Meja Bar Industrial untuk Ruang Terbatas ✓ Solusi Space-Efficient ✓ Meja Bar Murah ✓ Call Mangala'
          : post.excerpt} />
        <meta name="keywords" content={post.slug === 'finishing-furniture-besi-powder-coating-vs-cat'
          ? 'cat powder coating, finishing furniture besi, powder coating vs cat biasa, furniture coating bekasi'
          : post.slug === 'kombinasi-kayu-dan-besi-untuk-furniture-modern'
          ? 'kombinasi kayu dan besi, furniture modern, material industrial, meja kursi kayu besi'
          : post.slug === 'desain-meja-bar-industrial-untuk-ruang-terbatas'
          ? 'desain meja bar, meja bar ruang terbatas, meja cafe compact, furniture space efficient'
          : `${post.title}, furniture, industrial furniture, mangala living, furniture bekasi`} />
        <link rel="canonical" href={`https://mangala-living.com/blog/${post.slug}`} />
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
                Mangala Living
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
                      <img src={section.image} alt={section.imageAlt || post.title} loading="lazy" />
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
                    <img src={article.image} alt={article.title} loading="lazy" />
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

      <Footer />
    </div>
  )
}

export default BlogPost

