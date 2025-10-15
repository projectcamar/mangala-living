import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.jpg'
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
      <Helmet>
        <title>Blog & Article - Mangala Living</title>
        <meta name="description" content="Discover articles on furniture, interior design tips, and industry insights from Mangala Living." />
        <meta name="keywords" content="furniture blog, industrial furniture tips, interior design, furniture care, cafe furniture" />
        <link rel="canonical" href="https://mangalaliving.com/blog/" />
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
          <h2 className="blog-main-title">Discover Articles on Furniture</h2>
          
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

          {/* Pagination */}
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
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-btn pagination-number ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  Page {page}
                </button>
              ))}
              
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
      
      {/* SEO Content Section */}
      <section className="seo-content" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>
              Industrial Furniture Besi Custom Terpercaya di Bekasi
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
              Mangala Living adalah manufacturer industrial furniture besi custom terpercaya di Bekasi sejak 1999. 
              Dengan pengalaman 25+ tahun, kami telah melayani lebih dari 1000 bisnis di seluruh Indonesia.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
              Kami memproduksi industrial furniture custom untuk cafe, restoran, hotel, kantor, dan berbagai kebutuhan komersial. 
              Setiap produk dibuat dengan teknik pengelasan berkualitas tinggi dan material industrial grade terbaik. 
              <a href="/shop" style={{ color: '#ff6b35', textDecoration: 'none' }}>Lihat koleksi lengkap</a> atau 
              <a href="/contact-us" style={{ color: '#ff6b35', textDecoration: 'none' }}>hubungi kami</a> untuk konsultasi custom.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666', marginBottom: '30px' }}>
              <strong>Lokasi Workshop:</strong> Bekasi, Jawa Barat | <strong>Telp/WA:</strong> +62 852-1207-8467 | 
              <strong> Email:</strong> info@mangala-living.com
            </p>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
              Koleksi & Keunggulan Industrial Furniture
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
              Kami menyediakan berbagai koleksi industrial furniture besi custom termasuk 
              <a href="/product-category/new-arrivals" style={{ color: '#ff6b35', textDecoration: 'none' }}>New Arrivals</a>, 
              <a href="/product-category/lounge-seating-set" style={{ color: '#ff6b35', textDecoration: 'none' }}>Lounge Set</a>, 
              <a href="/product-category/industrial-sofa-bench" style={{ color: '#ff6b35', textDecoration: 'none' }}>Sofa Bench</a>, 
              <a href="/product-category/dining-set-collection" style={{ color: '#ff6b35', textDecoration: 'none' }}>Dining Set</a>, 
              <a href="/product-category/bar-furniture-collection" style={{ color: '#ff6b35', textDecoration: 'none' }}>Bar Set</a>, 
              <a href="/product-category/outdoor" style={{ color: '#ff6b35', textDecoration: 'none' }}>Outdoor</a>, 
              <a href="/product-category/daybed-collection" style={{ color: '#ff6b35', textDecoration: 'none' }}>Daybed</a>, 
              <a href="/product-category/storage-shelving" style={{ color: '#ff6b35', textDecoration: 'none' }}>Storage</a>, 
              <a href="/product-category/work-study-tables" style={{ color: '#ff6b35', textDecoration: 'none' }}>Tables</a>, dan 
              <a href="/product-category/dining-table-collection" style={{ color: '#ff6b35', textDecoration: 'none' }}>Dine Table</a>. 
              Semua produk dapat disesuaikan dengan kebutuhan bisnis Anda.
            </p>
            <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              <li>✓ Pengalaman 25+ tahun sebagai manufacturer furniture industrial</li>
              <li>✓ 1000+ klien puas di seluruh Indonesia</li>
              <li>✓ Custom design sesuai kebutuhan bisnis Anda</li>
              <li>✓ Material industrial grade berkualitas tinggi</li>
              <li>✓ Harga kompetitif langsung dari pabrik</li>
              <li>✓ Garansi kualitas produk</li>
              <li>✓ Workshop di Bekasi dengan akses mudah</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blog

