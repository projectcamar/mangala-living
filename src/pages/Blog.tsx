import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'
import { getPostsByPage, getTotalPages } from '../data/blog'
import './Blog.css'

const Blog: React.FC = () => {
  const [searchParams] = useSearchParams()
  const postsPerPage = 8
  const rawPage = Number.parseInt(searchParams.get('page') || '1', 10)
  const totalPages = getTotalPages(postsPerPage)
  const currentPage = Number.isNaN(rawPage) ? 1 : Math.min(Math.max(rawPage, 1), totalPages || 1)
  const posts = getPostsByPage(currentPage, postsPerPage)

  const buildPageUrl = (page: number) => (page <= 1 ? '/blog' : `/blog?page=${page}`)
  const canonicalUrl = buildPageUrl(currentPage)
  const prevUrl = currentPage > 1 ? buildPageUrl(currentPage - 1) : null
  const nextUrl = currentPage < totalPages ? buildPageUrl(currentPage + 1) : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  return (
    <div className="blog-page">
      <AnnouncementBar />
      <Helmet>
        <title>Blog Furniture Industrial & Tips Desain Cafe Restoran - Mangala Living</title>
        <meta name="description" content="Panduan lengkap furniture industrial untuk cafe, restoran, hotel. Tips memilih furniture besi custom, cara merawat, tren desain 2025, perbandingan material, harga, dan area workshop Bekasi Jakarta. 135+ artikel berbasis pengalaman 25 tahun Mangala Living." />
        <meta name="keywords" content="blog furniture industrial, tips furniture cafe, cara memilih furniture restoran, furniture besi custom panduan, workshop furniture bekasi, harga furniture industrial 2025, tips desain interior industrial, furniture cafe murah, perbandingan furniture besi vs kayu, cara merawat furniture industrial, tren furniture 2025, furniture bekasi guide, furniture jakarta tips, inspirasi desain cafe industrial" />
        <link rel="canonical" href={`https://mangala-living.com${canonicalUrl}`} />
        {prevUrl && <link rel="prev" href={`https://mangala-living.com${prevUrl}`} />}
        {nextUrl && <link rel="next" href={`https://mangala-living.com${nextUrl}`} />}
        
        {/* AI Search Optimization: Clear article purpose */}
        <meta property="og:title" content="Blog Furniture Industrial - 135+ Artikel Tips & Panduan Lengkap" />
        <meta property="og:description" content="Artikel komprehensif tentang furniture industrial: tips pemilihan, perbandingan material, panduan harga, area coverage Jabodetabek, dan best practices dari 1000+ project sejak 1999." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mangala-living.com/blog" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-image">
          <img 
            src={heroImage} 
            alt="Blog Furniture Industrial & Tips Desain Cafe Restoran - 135+ Artikel Panduan Lengkap Mangala Living"
            title="Blog Furniture Industrial - Tips & Panduan Lengkap dari Workshop Bekasi Mangala Living"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            itemProp="image"
            data-image-type="blog-hero"
            data-category="blog"
          />
          <div className="blog-hero-overlay"></div>
        </div>
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">Blog & Article</h1>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-content-section">
        <div className="blog-container">
          {/* AI Search Optimized: Clear intent and value proposition */}
          <h2 className="blog-main-title">135+ Artikel Furniture Industrial: Panduan Lengkap dari Workshop Bekasi</h2>
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto 3rem', 
            padding: '1.5rem', 
            background: '#f8f9fa', 
            borderRadius: '8px',
            borderLeft: '4px solid #2C3E50'
          }}>
            <p style={{ margin: '0 0 1rem', fontSize: '1rem', lineHeight: '1.6', color: '#2C3E50' }}>
              <strong>Temukan jawaban lengkap untuk pertanyaan Anda tentang furniture industrial.</strong> Artikel kami ditulis berdasarkan pengalaman nyata menangani 1000+ project sejak 1999 di Jabodetabek.
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.95rem', lineHeight: '1.7', color: '#555' }}>
              <li><strong>Tips & Panduan Praktis:</strong> Cara memilih, merawat, dan mengoptimalkan furniture industrial untuk bisnis Anda</li>
              <li><strong>Perbandingan Material & Harga:</strong> Data objektif furniture besi vs kayu, custom vs ready, powder coating vs cat</li>
              <li><strong>Local Area Guide:</strong> Coverage area lengkap Bekasi, Cikarang, Jakarta dengan workshop terdekat</li>
              <li><strong>Design Inspiration:</strong> Tren 2025, kombinasi material, layout optimization untuk cafe dan restoran</li>
            </ul>
          </div>
          
          {/* Blog Grid */}
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.id} className="blog-card">
                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <img 
                      src={post.image} 
                      alt={`${post.title} - ${post.category} Blog Furniture Industrial Mangala Living`}
                      title={`${post.title} - ${post.category} Artikel Furniture Industrial`}
                      loading="lazy"
                      width="400"
                      height="250"
                      itemProp="image"
                      data-image-type="blog-post"
                      data-post-slug={post.slug}
                      data-category={post.category}
                    />
                    <div className="blog-card-badge">MANGALA</div>
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-card-category">{post.category.toUpperCase()}</span>
                    <h3 className="blog-card-title">{post.title}</h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination - Compact Version */}
          {totalPages > 1 && (
            <nav className="blog-pagination" aria-label="Blog pagination">
              {currentPage > 1 && (
                <Link
                  to={buildPageUrl(currentPage - 1)}
                  className="pagination-btn pagination-prev"
                  aria-label="Previous page"
                >
                  Prev
                </Link>
              )}

              {/* Smart Pagination with Ellipsis */}
              {(() => {
                const pages: (number | string)[] = []
                const showEllipsis = totalPages > 7

                if (!showEllipsis) {
                  // Show all pages if 7 or less
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i)
                  }
                } else {
                  // Always show first page
                  pages.push(1)

                  if (currentPage <= 3) {
                    // Near the beginning
                    pages.push(2, 3, 4, 5, '...', totalPages)
                  } else if (currentPage >= totalPages - 2) {
                    // Near the end
                    pages.push('...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
                  } else {
                    // In the middle
                    pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
                  }
                }

                return pages.map((page, index) => {
                  if (page === '...') {
                    return (
                      <span key={`ellipsis-${index}`} className="pagination-ellipsis" aria-hidden="true">
                        ...
                      </span>
                    )
                  }

                  const pageNumber = page as number
                  return (
                    <Link
                      key={pageNumber}
                      to={buildPageUrl(pageNumber)}
                      className={`pagination-btn pagination-number ${currentPage === pageNumber ? 'active' : ''}`}
                      aria-current={currentPage === pageNumber ? 'page' : undefined}
                    >
                      {pageNumber}
                    </Link>
                  )
                })
              })()}

              {currentPage < totalPages && (
                <Link
                  to={buildPageUrl(currentPage + 1)}
                  className="pagination-btn pagination-next"
                  aria-label="Next page"
                >
                  Next
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>
      

      <Footer />
    </div>
  )
}

export default Blog

