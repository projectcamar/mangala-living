import React from 'react';
import { generateImageAlt, getImageLoadingStrategy } from '../utils/seoEnhancements';

interface SEOImageProps {
  src: string;
  productName?: string;
  category?: string;
  alt?: string;
  position?: 'hero' | 'above-fold' | 'below-fold';
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * SEO-optimized Image Component
 * - Automatic lazy loading for below-fold images
 * - SEO-friendly alt text generation
 * - Performance optimization with fetchPriority
 * - Responsive image loading
 * - Image protection (disable right-click and drag)
 */
const SEOImage: React.FC<SEOImageProps> = ({
  src,
  productName,
  category,
  alt,
  position = 'below-fold',
  width,
  height,
  className = '',
  style,
  onClick
}) => {
  // Get loading strategy based on position
  const loadingStrategy = getImageLoadingStrategy(position);
  
  // Generate SEO-optimized alt text if not provided
  const altText = alt || generateImageAlt({
    productName,
    category,
    action: 'furniture besi custom'
  });

  // Handler untuk mencegah right-click dan drag
  const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    return false;
  };
  
  return (
    <img
      src={src}
      alt={altText}
      className={className}
      style={{
        ...style,
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitUserDrag: 'none',
        userDrag: 'none',
      }}
      width={width}
      height={height}
      loading={loadingStrategy.loading}
      fetchPriority={loadingStrategy.fetchPriority}
      decoding={loadingStrategy.decoding}
      onClick={onClick}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      draggable={false}
    />
  );
};

export default SEOImage;
