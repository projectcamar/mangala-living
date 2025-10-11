import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Blog.css'
import { Helmet } from 'react-helmet-async'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      slug: 'cari-bengkel-las-bekasi',
      title: 'Cari Bengkel Las Bekasi Murah, Berkualitas, dan Terpercaya?',
      excerpt: 'Bengkel Las Bekasi Mitra Mandiri adalah solusi terbaik untuk kebutuhan konstruksi baja Anda. Dengan pengalaman 15 tahun sejak 2010, kami siap melayani berbagai proyek dengan kualitas terbaik.',
      date: '11 Oktober 2025',
      author: 'Admin',
      category: 'Bengkel Las'
    },
    {
      slug: 'jasa-tukang-las-cikarang',
      title: 'Jasa Tukang Las Cikarang - Profesional dan Terpercaya',
      excerpt: 'Mencari jasa tukang las di Cikarang? Kami melayani berbagai kebutuhan pengelasan untuk rumah, kantor, dan industri di wilayah Cikarang dengan harga kompetitif dan hasil berkualitas.',
      date: '11 Oktober 2025',
      author: 'Admin',
      category: 'Jasa Las'
    },
    {
      slug: 'jasa-tukang-las-setu',
      title: 'Jasa Tukang Las Setu - Cepat, Rapi, dan Berkualitas',
      excerpt: 'Layanan jasa tukang las profesional di Setu dan sekitarnya. Melayani pembuatan kanopi, pagar, tralis, railing tangga, dan berbagai konstruksi baja lainnya dengan pengerjaan cepat dan rapi.',
      date: '11 Oktober 2025',
      author: 'Admin',
      category: 'Jasa Las'
    },
    {
      slug: 'jasa-tukang-las-bekasi',
      title: 'Jasa Tukang Las Bekasi - Berpengalaman dan Bergaransi',
      excerpt: 'Jasa tukang las terpercaya di Bekasi untuk berbagai kebutuhan konstruksi baja. Dikerjakan oleh tenaga ahli berpengalaman dengan material berkualitas SNI dan harga yang kompetitif.',
      date: '11 Oktober 2025',
      author: 'Admin',
      category: 'Jasa Las'
    },
    {
      slug: 'jasa-kanopi-bekasi',
      title: 'Jasa Pasang Kanopi Bekasi - Harga Borongan Tukang Kanopi Terpercaya 2025',
      excerpt: 'Jasa pasang kanopi Bekasi terpercaya ✓ Harga mulai 350rb/m² ✓ Material SNI ✓ Garansi resmi. Alderon, Polycarbonate, Spandek, Kaca Tempered. Survey & konsultasi GRATIS! Pengalaman 20+ tahun.',
      date: '15 Januari 2025',
      author: 'Bengkel Las Mandiri',
      category: 'Layanan Las'
    }
  ]

  return (
    <div className="blog-page">
      <Helmet>
        <title>Blog - Bengkel Las Mandiri | Tips dan Artikel Seputar Konstruksi Baja</title>
        <meta name="description" content="Baca artikel, tips, dan informasi terbaru seputar jasa las, konstruksi baja, kanopi, pagar, tralis, dan produk furniture industrial di Bekasi dan sekitarnya." />
        <meta name="keywords" content="blog bengkel las, artikel las bekasi, tips konstruksi baja, jasa tukang las, informasi pengelasan" />
      </Helmet>
      
      <Header />
      
      <section className="blog-hero">
        <div className="container">
          <h1>Blog Bengkel Las Mandiri</h1>
          <p>Artikel, tips, dan informasi terbaru seputar jasa las dan konstruksi baja</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card-header">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <div className="blog-card-body">
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
                <div className="blog-card-footer">
                  <span className="blog-author">Oleh {post.author}</span>
                  <Link to={`/blog/${post.slug}`} className="blog-read-more">
                    Baca Selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blog

