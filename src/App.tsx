import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './App.css'

// Critical components loaded immediately - NO LAZY LOADING for Home
import Home from './pages/Home'
import WhatsAppButton from './components/WhatsAppButton'

// Preload critical pages for better performance
const Shop = lazy(() => import('./pages/Shop'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const ProductCategory = lazy(() => import('./pages/ProductCategory'))

// Lazy load less critical pages
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const SearchResults = lazy(() => import('./pages/SearchResults'))
const BestSellers = lazy(() => import('./pages/BestSellers'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

// Optimized loading skeleton
const Loading = () => (
  <div className="loading-skeleton">
    <div className="skeleton-header"></div>
    <div className="skeleton-content">
      <div className="skeleton-card"></div>
      <div className="skeleton-card"></div>
    </div>
  </div>
)

function App() {
  // Preload critical pages after initial load
  useEffect(() => {
    const preloadPages = () => {
      // Preload Shop page (most accessed)
      import('./pages/Shop')
      // Preload ProductDetail (frequently accessed)
      import('./pages/ProductDetail')
      // Preload ProductCategory (frequently accessed)
      import('./pages/ProductCategory')
    }

    // Preload after 1 second to not block initial render
    const timer = setTimeout(preloadPages, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home - Load immediately (not lazy) */}
            <Route path="/" element={<Home />} />
            
            {/* Language-specific routes - All routes work for both languages */}
            <Route path="/id" element={<Home />} />
            <Route path="/eng" element={<Home />} />
            
            {/* Search Results */}
            <Route path="/search" element={<SearchResults />} />
            
            {/* Shop - All Products */}
            <Route path="/shop" element={<Shop />} />
            
            {/* Product Tag - Best Sellers */}
            <Route path="/product-tag/best-seller" element={<BestSellers />} />
            
            {/* Product Category Pages */}
            <Route path="/product-category/:category" element={<ProductCategory />} />
            
            {/* Product Detail Pages */}
            <Route path="/product/:slug" element={<ProductDetail />} />
            
            {/* Contact Page */}
            <Route path="/contact-us" element={<Contact />} />
            
            {/* About Page */}
            <Route path="/about" element={<About />} />
            
            {/* Blog Page */}
            <Route path="/blog" element={<Blog />} />
            
            {/* Blog Post Detail */}
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </Router>
    </HelmetProvider>
  )
}

export default App
