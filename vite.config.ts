import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Better code splitting for improved Speed Index
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - separate heavy libraries
          if (id.includes('node_modules')) {
            // Core React (critical, load first)
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core'
            }
            // React Router (needed for routing)
            if (id.includes('react-router')) {
              return 'react-router'
            }
            // Helmet (SEO, can be deferred)
            if (id.includes('react-helmet')) {
              return 'helmet-vendor'
            }
            // PDF generation (heavy, lazy load)
            if (id.includes('jspdf') || id.includes('pdf')) {
              return 'pdf-vendor'
            }
            // Icons (moderate size)
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'icons-vendor'
            }
            // Analytics (can be async)
            if (id.includes('@vercel/analytics') || id.includes('@vercel/speed-insights')) {
              return 'analytics-vendor'
            }
            // Other vendors
            return 'vendor'
          }
          
          // Separate component chunks for better caching
          if (id.includes('/src/components/')) {
            return 'components'
          }
          if (id.includes('/src/pages/')) {
            return 'pages'
          }
          if (id.includes('/src/utils/')) {
            return 'utils'
          }
        }
      }
    },
    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // No source maps in production for faster load
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'esnext',
    // CSS code splitting for better performance
    cssCodeSplit: true,
    // Optimize asset inline size threshold (smaller = more requests but faster initial load)
    assetsInlineLimit: 4096
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
    exclude: ['@vercel/analytics', '@vercel/speed-insights']
  }
})
