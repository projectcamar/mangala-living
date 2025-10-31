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
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = parseInt(searchParams.get('page') || '1')
  const postsPerPage = 8
  
  const posts = getPostsByPage(currentPage, postsPerPage)
  const totalPages = getTotalPages(postsPerPage)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() })
  }

  return (
    <div className="blog-page">
      <AnnouncementBar />
      <Helmet>
        <title>Blog Furniture Industrial & Tips Desain Cafe Restoran - Mangala Living</title>
        <meta name="description" content="Panduan lengkap furniture industrial untuk cafe, restoran, hotel. Tips memilih furniture besi custom, cara merawat, tren desain 2025, perbandingan material, harga, dan area workshop Bekasi Jakarta. 135+ artikel berbasis pengalaman 25 tahun Mangala Living." />
        <meta name="keywords" content="blog furniture industrial, tips furniture cafe, cara memilih furniture restoran, furniture besi custom panduan, workshop furniture bekasi, harga furniture industrial 2025, tips desain interior industrial, furniture cafe murah, perbandingan furniture besi vs kayu, cara merawat furniture industrial, tren furniture 2025, furniture bekasi guide, furniture jakarta tips, inspirasi desain cafe industrial" />
        <link rel="canonical" href="https://mangala-living.com/blog" />
        
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
          <img src={heroImage} alt="Blog & Article" loading="eager" />
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
                    <img src={post.image} alt={post.title} loading="lazy" />
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
            <div className="blog-pagination">
              {currentPage > 1 && (
                <button 
                  className="pagination-btn pagination-prev"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Prev
                </button>
              )}
              
              {/* Smart Pagination with Ellipsis */}
              {(() => {
                const pages: (number | string)[] = [];
                const showEllipsis = totalPages > 7;
                
                if (!showEllipsis) {
                  // Show all pages if 7 or less
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                  }
                } else {
                  // Always show first page
                  pages.push(1);
                  
                  if (currentPage <= 3) {
                    // Near the beginning
                    pages.push(2, 3, 4, 5, '...', totalPages);
                  } else if (currentPage >= totalPages - 2) {
                    // Near the end
                    pages.push('...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
                  } else {
                    // In the middle
                    pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
                  }
                }
                
                return pages.map((page, index) => {
                  if (page === '...') {
                    return (
                      <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                        ...
                      </span>
                    );
                  }
                  
                  return (
                    <button
                      key={page}
                      className={`pagination-btn pagination-number ${currentPage === page ? 'active' : ''}`}
                      onClick={() => handlePageChange(page as number)}
                    >
                      {page}
                    </button>
                  );
                });
              })()}
              
              {currentPage < totalPages && (
                <button 
                  className="pagination-btn pagination-next"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </section>
      

      <Footer />
    </div>
  )
}

export default Blog

