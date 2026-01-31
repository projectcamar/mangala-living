import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';
import { generateBreadcrumbSchema } from '../utils/seoEnhancements';
import { getCurrentLanguage, type LanguageCode } from '../utils/languageManager';

interface BreadcrumbProps {
  items?: { label: string; path: string }[];
}

const HOME_TRANSLATIONS: Record<LanguageCode, string> = {
  id: 'Beranda',
  en: 'Home',
  ar: 'الصفحة الرئيسية',
  zh: '首页',
  ja: 'ホーム',
  es: 'Inicio',
  fr: 'Accueil',
  ko: '홈'
};

const LANGUAGE_PREFIXES = ['id', 'eng', 'ar', 'zh', 'ja', 'es', 'fr', 'ko'];

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();
  const currentLang = getCurrentLanguage(location.pathname, location.search);
  const homeLabel = HOME_TRANSLATIONS[currentLang] || 'Home';

  // Create the proper home path (with language prefix if needed)
  const homePath = currentLang === 'en' ? '/' : `/${currentLang}`;

  // Generate breadcrumb items based on current path if not provided
  let filteredSegments = location.pathname.split('/').filter(Boolean);

  // Remove the language prefix if it's the first segment to avoid duplicate "Home"
  if (filteredSegments.length > 0 && LANGUAGE_PREFIXES.includes(filteredSegments[0])) {
    filteredSegments = filteredSegments.slice(1);
  }

  const breadcrumbItems = items || filteredSegments.map((path, index, array) => {
    const label = path.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    // Prefix with language if not on English
    const prefix = currentLang === 'en' ? '' : `/${currentLang}`;
    return {
      label,
      path: prefix + '/' + array.slice(0, index + 1).join('/')
    };
  });

  // Check if first item is already a Home equivalent
  const firstItemLabel = breadcrumbItems[0]?.label;
  const isHomeEquivalent = firstItemLabel && (
    firstItemLabel.toLowerCase() === 'home' ||
    Object.values(HOME_TRANSLATIONS).some(t => t.toLowerCase() === firstItemLabel.toLowerCase())
  );

  const allItems = isHomeEquivalent
    ? breadcrumbItems.map((item, idx) => idx === 0 ? { ...item, label: homeLabel } : item)
    : [{ label: homeLabel, path: homePath }, ...breadcrumbItems];

  // Generate JSON-LD schema for better SEO
  const breadcrumbSchema = generateBreadcrumbSchema(
    allItems.map(item => ({ name: item.label, url: item.path }))
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav className="breadcrumb" aria-label="breadcrumb">
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="breadcrumb-list"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li
                key={item.path}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="breadcrumb-item"
              >
                {!isLast ? (
                  <>
                    <Link to={item.path} itemProp="item">
                      <span itemProp="name">{item.label}</span>
                    </Link>
                    <meta itemProp="position" content={String(index + 1)} />
                    <ChevronRight size={16} className="breadcrumb-separator" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <span itemProp="name" aria-current="page">
                      {item.label}
                    </span>
                    <meta itemProp="position" content={String(index + 1)} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
