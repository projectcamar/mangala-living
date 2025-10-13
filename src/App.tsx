import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './App.css'

// Critical components loaded immediately - NO LAZY LOADING for Home
import Home from './pages/Home'
import WhatsAppButton from './components/WhatsAppButton'

// Lazy load other pages (not critical for initial load)
const ProductCategory = lazy(() => import('./pages/ProductCategory'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const SearchResults = lazy(() => import('./pages/SearchResults'))
const BestSellers = lazy(() => import('./pages/BestSellers'))
const Shop = lazy(() => import('./pages/Shop'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

// Better loading skeleton
const Loading = () => (
  <div className="loading-skeleton">
    <div className="skeleton-header"></div>
    <div className="skeleton-hero"></div>
    <div className="skeleton-content">
      <div className="skeleton-card"></div>
      <div className="skeleton-card"></div>
      <div className="skeleton-card"></div>
    </div>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Home - Load immediately, no suspense */}
          <Route path="/" element={<Home />} />
          
          <Suspense fallback={<Loading />}>
            
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
          </Suspense>
        </Routes>
        <WhatsAppButton />
        <Analytics />
      </Router>
    </HelmetProvider>
  )
}

export default App
