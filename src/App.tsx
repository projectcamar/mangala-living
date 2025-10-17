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

// Minimal loading for better UX
const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#fff'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #333',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
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
        <Routes>
          {/* Home - Load immediately (no suspense) */}
          <Route path="/" element={<Home />} />
          <Route path="/id" element={<Home />} />
          <Route path="/eng" element={<Home />} />
          
          {/* Other pages with minimal loading */}
          <Route path="/search" element={
            <Suspense fallback={<Loading />}>
              <SearchResults />
            </Suspense>
          } />
          <Route path="/shop" element={
            <Suspense fallback={<Loading />}>
              <Shop />
            </Suspense>
          } />
          <Route path="/product-tag/best-seller" element={
            <Suspense fallback={<Loading />}>
              <BestSellers />
            </Suspense>
          } />
          <Route path="/product-category/:category" element={
            <Suspense fallback={<Loading />}>
              <ProductCategory />
            </Suspense>
          } />
          <Route path="/product/:slug" element={
            <Suspense fallback={<Loading />}>
              <ProductDetail />
            </Suspense>
          } />
          <Route path="/contact-us" element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<Loading />}>
              <Blog />
            </Suspense>
          } />
          <Route path="/blog/:slug" element={
            <Suspense fallback={<Loading />}>
              <BlogPost />
            </Suspense>
          } />
        </Routes>
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </Router>
    </HelmetProvider>
  )
}

export default App
