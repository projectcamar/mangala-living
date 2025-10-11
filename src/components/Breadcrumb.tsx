import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

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

  // Add home as first item
  const allItems = [
    { label: 'Bengkel Las Bekasi', path: '/' },
    ...breadcrumbItems
  ];

  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="breadcrumb-list"
      >
        {allItems.map((item, index) => (
          <li
            key={item.path}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="breadcrumb-item"
          >
            <Link to={item.path} itemProp="item">
              <span itemProp="name">{item.label}</span>
            </Link>
            <meta itemProp="position" content={String(index + 1)} />
            {index < allItems.length - 1 && (
              <ChevronRight size={16} className="breadcrumb-separator" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
