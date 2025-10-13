import React, { useState, useEffect } from 'react'
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

      <Footer />
    </div>
  )
}

export default Blog

