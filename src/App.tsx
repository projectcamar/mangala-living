import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './App.css'

// Critical components loaded immediately
import WhatsAppButton from './components/WhatsAppButton'
import Breadcrumb from './components/Breadcrumb'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

// Loading component
const Loading = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Memuat...</p>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/jasa-las-bekasi" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Services />
              </>
            } />
            <Route path="/tentang-kami" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <About />
              </>
            } />
            <Route path="/layanan-las-bekasi" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Services />
              </>
            } />
            <Route path="/layanan-las-bekasi/:serviceSlug" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <ServiceDetail />
              </>
            } />
            <Route path="/album-bengkel-las-mandiri" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Portfolio />
              </>
            } />
            <Route path="/portfolio-bengkel-las" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Portfolio />
              </>
            } />
            <Route path="/kontak-bengkel-las-bekasi" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Contact />
              </>
            } />
            <Route path="/blog" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <Blog />
              </>
            } />
            <Route path="/blog/:slug" element={
              <>
                <Suspense fallback={<Loading />}>
                  <Breadcrumb />
                </Suspense>
                <BlogPost />
              </>
            } />
        </Routes>
          <Suspense fallback={<Loading />}>
        <WhatsAppButton />
          </Suspense>
        </Suspense>
        <Analytics />
      </Router>
    </HelmetProvider>
  )
}

export default App
