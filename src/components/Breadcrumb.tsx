import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';
import { generateBreadcrumbSchema } from '../utils/seoEnhancements';

interface BreadcrumbProps {
  items?: { label: string; path: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();
  
  // Generate breadcrumb items based on current path if not provided
  const breadcrumbItems = items || location.pathname
    .split('/')
    .filter(Boolean)
    .map((path, index, array) => {
      const label = path.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      return {
        label,
        path: '/' + array.slice(0, index + 1).join('/')
      };
    });

  // Add home as first item only if it's not already there
  const allItems = breadcrumbItems[0]?.label === 'Home' 
    ? breadcrumbItems 
    : [{ label: 'Home', path: '/' }, ...breadcrumbItems];

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
