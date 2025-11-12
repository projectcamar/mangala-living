import { useEffect, useMemo, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import CurrencyHighlight from '../components/CurrencyHighlight'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { ALL_PRODUCTS } from '../data/products'
import { generateLanguageSpecificMeta, generateLocalizedUrls } from '../utils/seo'
import { convertIDRToUSD } from '../utils/currencyConverter'
import { getProductName } from '../data/productDescriptions'
import { getLanguageFromLocation } from '../utils/languageManager'
import './SearchResults.css'
import '../components/DualLanguage.css'

interface Product {
  id: number
  name: string
  category: string
  price: string
  image: string
  slug: string
}

interface ScoredProduct extends Product {
  score: number
  tokenMatches: number
}

const allProducts: Product[] = ALL_PRODUCTS.map(p => ({
  id: p.id,
  name: p.name,
  category: p.categories.join(', '),
  price: p.price,
  image: p.image,
  slug: p.slug
}))

function SearchResults() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('q') || ''
  const langParam = searchParams.get('lang')
  const [isIndonesian, setIsIndonesian] = useState(langParam === 'id')
  const [sortBy, setSortBy] = useState('default')
  const [usdPrices, setUsdPrices] = useState<Record<number, string>>({})
  const [isDetectingLanguage, setIsDetectingLanguage] = useState(true)

  // Language detection - instant, no async needed!
  useEffect(() => {
    const urlLang = getLanguageFromLocation(location.pathname, location.search)
    setIsIndonesian(urlLang === 'id')
    setIsDetectingLanguage(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    let isMounted = true

    const convertPrices = async () => {
      const prices: Record<number, string> = {}

      for (const product of allProducts) {
        try {
          const usdPrice = await convertIDRToUSD(product.price)
          prices[product.id] = usdPrice
        } catch (error) {
          console.error(`Failed to convert price for product ${product.slug}:`, error)
        }
      }

      if (isMounted) {
        setUsdPrices(prices)
      }
    }

    convertPrices()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const normalizedQuery = query.trim().toLowerCase()
  const hasQuery = normalizedQuery.length > 0

  const queryTokens = useMemo(() => {
    return hasQuery
      ? Array.from(
          new Set(
            normalizedQuery
              .split(/[\s\-_,.]+/)
              .map(token => token.trim())
              .filter(token => token.length > 1)
          )
        )
      : []
  }, [hasQuery, normalizedQuery])

  const matchedProducts = useMemo<ScoredProduct[]>(() => {
    if (!hasQuery) {
      return allProducts
        .map(product => ({
          ...product,
          score: 0,
          tokenMatches: 0
        }))
        .sort((a, b) => a.name.localeCompare(b.name))
    }

    return allProducts
      .map(product => {
        const nameLower = product.name.toLowerCase()
        const categoryLower = product.category.toLowerCase()
        const combinedText = `${nameLower} ${categoryLower}`

        const matched = queryTokens.filter(token => combinedText.includes(token))
        const tokenMatches = matched.length
        const containsAllTokens = queryTokens.length > 0 && tokenMatches === queryTokens.length
        const nameTokenMatches = matched.filter(token => nameLower.includes(token)).length
        const categoryTokenMatches = matched.filter(token => categoryLower.includes(token)).length
        const exactNameMatch = nameLower === normalizedQuery
        const phraseInName = nameLower.includes(normalizedQuery)

        let score = 0
        if (exactNameMatch) score += 200
        if (phraseInName) score += 120
        if (containsAllTokens) score += 80
        score += tokenMatches * 18
        score += nameTokenMatches * 12
        score += categoryTokenMatches * 6

        if (queryTokens.some(token => nameLower.startsWith(token))) {
          score += 25
        }

        const nameWords = nameLower.split(/\s+/)
        const wordMatchBonus = queryTokens.filter(token => nameWords.includes(token)).length * 10
        score += wordMatchBonus

        return {
          ...product,
          score,
          tokenMatches
        }
      })
      .filter(product => product.tokenMatches > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score
        if (b.tokenMatches !== a.tokenMatches) return b.tokenMatches - a.tokenMatches
        return a.name.localeCompare(b.name)
      })
  }, [hasQuery, normalizedQuery, queryTokens])

  const sortedProducts = useMemo<Product[]>(() => {
    if (sortBy === 'price-low') {
      return [...matchedProducts].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''), 10)
        const priceB = parseInt(b.price.replace(/\D/g, ''), 10)
        return priceA - priceB
      })
    }

    if (sortBy === 'price-high') {
      return [...matchedProducts].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''), 10)
        const priceB = parseInt(b.price.replace(/\D/g, ''), 10)
        return priceB - priceA
      })
    }

    return matchedProducts
  }, [matchedProducts, sortBy])

  const resultsCount = sortedProducts.length
  const localeMeta = generateLanguageSpecificMeta(isIndonesian)
  const localizedUrls = generateLocalizedUrls(location.pathname, location.search)

  const translations = {
    headingPrefix: isIndonesian ? 'Hasil Pencarian untuk' : 'Search Results for',
    headingEmpty: isIndonesian ? 'Hasil Pencarian' : 'Search Results',
    resultsCount: isIndonesian
      ? `${resultsCount} produk ditemukan`
      : `${resultsCount} results found`,
    noResults: hasQuery
      ? isIndonesian
        ? `Tidak ada produk ditemukan untuk "${query}". Coba kata kunci lain.`
        : `No products found for "${query}". Try a different search term.`
      : isIndonesian
        ? 'Tidak ada produk ditemukan.'
        : 'No products found.',
    sortDefault: isIndonesian ? 'Urutkan: Relevansi' : 'Sort by: Relevance',
    sortPriceLow: isIndonesian ? 'Harga: Rendah ke Tinggi' : 'Price: Low to High',
    sortPriceHigh: isIndonesian ? 'Harga: Tinggi ke Rendah' : 'Price: High to Low',
    bilingualSubtitleID: 'Telusuri furniture industrial custom Mangala Living dengan kata kunci favorit Anda.',
    bilingualSubtitleEN: 'Discover Mangala Living industrial custom furniture based on your preferred keywords.',
    languageAdjusting: isIndonesian ? 'Menyesuaikan preferensi bahasa…' : 'Adjusting language preference…'
  }

  const searchPath = hasQuery ? `/search?q=${encodeURIComponent(query)}` : '/search'
  const headingText = hasQuery ? `${translations.headingPrefix} "${query}"` : translations.headingEmpty

  const breadcrumbItems = [
    { label: isIndonesian ? 'Beranda' : 'Home', path: '/' },
    { label: headingText, path: searchPath }
  ]

  return (
    <div className="search-results-page">
      <AnnouncementBar isIndonesian={isIndonesian} />
      <Helmet htmlAttributes={{ lang: localeMeta.lang, dir: localeMeta.direction, 'data-language': localeMeta.lang }}>
        <title>
          {hasQuery ? `Search: ${query} - Mangala Living` : 'Search - Mangala Living'}
        </title>
        <meta
          name="description"
          content={
            hasQuery
              ? isIndonesian
                ? `Hasil pencarian untuk ${query}`
                : `Search results for ${query}`
              : isIndonesian
                ? 'Hasil pencarian produk Mangala Living.'
                : 'Search results for Mangala Living products.'
          }
        />
        <meta httpEquiv="content-language" content={localeMeta.lang} />
        <link rel="canonical" href={localizedUrls.canonical} />
        {localizedUrls.alternates.map((alternate) => (
          <link key={`search-results-hreflang-${alternate.hrefLang}`} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        <meta property="og:url" content={localizedUrls.canonical} />
        <meta property="og:locale" content={localeMeta.locale} />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
      </Helmet>

      <Header isIndonesian={isIndonesian} />
      <CurrencyHighlight isIndonesian={isIndonesian} />

      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        <div className="search-results-header">
          <div className="search-results-heading">
            <h1 className="search-results-title">{headingText}</h1>
            <p className="search-results-subtitle">
              {isIndonesian ? translations.bilingualSubtitleID : translations.bilingualSubtitleEN}
            </p>
            {isDetectingLanguage && (
              <span className="search-language-indicator">{translations.languageAdjusting}</span>
            )}
          </div>
          <div className="search-results-controls">
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">{translations.sortDefault}</option>
              <option value="price-low">{translations.sortPriceLow}</option>
              <option value="price-high">{translations.sortPriceHigh}</option>
            </select>
          </div>
        </div>

        <p className="results-count">{translations.resultsCount}</p>

        {sortedProducts.length > 0 ? (
          <div className="products-grid">
            {sortedProducts.map((product) => {
              const translatedName = getProductName(product.slug, isIndonesian) || product.name
              return (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="product-card"
                >
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={`${translatedName} - Industrial Furniture ${product.category} Search Results Mangala Living`}
                      title={`${translatedName} - ${product.category} Industrial Furniture - Mangala Living`}
                      loading="lazy"
                      width="300"
                      height="200"
                      itemProp="image"
                      data-image-type="search-result"
                      data-product-name={translatedName}
                      data-category={product.category}
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{translatedName}</h3>
                    <p className="product-category">{product.category}</p>
                  {usdPrices[product.id] && usdPrices[product.id] !== 'N/A' ? (
                    <div className="product-price-stack">
                      <span className="product-price-primary">
                        {isIndonesian ? product.price : usdPrices[product.id]}
                      </span>
                      <span className="product-price-secondary">
                        {isIndonesian ? usdPrices[product.id] : product.price}
                      </span>
                    </div>
                  ) : (
                    <p className="product-price">{product.price}</p>
                  )}
                </div>
              </Link>
              )
            })}
          </div>
        ) : (
          <div className="no-results">
            <p className="no-results-message">
              {translations.noResults}
            </p>
          </div>
        )}
      </div>

      <Footer isIndonesian={isIndonesian} />
    </div>
  )
}

export default SearchResults
