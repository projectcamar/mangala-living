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
  // Smart batch preloading with user interaction detection
  useEffect(() => {
    let hasUserInteracted = false
    let preloadTimer: number | null = null

    // Detect user interaction
    const handleUserInteraction = () => {
      if (!hasUserInteracted) {
        hasUserInteracted = true
        
        // Preload critical pages immediately after user interaction
        import('./pages/Shop')
        import('./pages/ProductDetail')
        
        // Preload secondary pages after 2 seconds
        setTimeout(() => {
          import('./pages/ProductCategory')
        }, 2000)
        
        // Preload tertiary pages after 5 seconds
        setTimeout(() => {
          import('./pages/About')
          import('./pages/Blog')
          import('./pages/Contact')
        }, 5000)
      }
    }

    // Add event listeners for user interaction
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true })
    })

    // Fallback: preload critical pages after 10 seconds if no interaction
    preloadTimer = setTimeout(() => {
      if (!hasUserInteracted) {
        import('./pages/Shop')
        import('./pages/ProductDetail')
      }
    }, 10000)
    
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction)
      })
      if (preloadTimer) clearTimeout(preloadTimer)
    }
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
