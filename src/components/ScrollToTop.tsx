import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageVisit } from '../utils/pageVisitTracking'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    trackPageVisit(pathname)
  }, [pathname])

  return null
}

export default ScrollToTop
