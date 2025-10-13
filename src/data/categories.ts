// Centralized categories for consistency across all pages
export const CATEGORIES = [
  'New Arrivals',
  'Lounge Set',
  'Sofa Bench',
  'Dining Set',
  'Bar Set',
  'Outdoor',
  'Daybed',
  'Storage',
  'Tables',
  'Dine Table',
] as const

export const CATEGORY_MAP: { [key: string]: string } = {
  'new-arrivals': 'New Arrivals',
  'lounge-seating-set': 'Lounge Set',
  'industrial-sofa-bench': 'Sofa Bench',
  'dining-set-collection': 'Dining Set',
  'bar-furniture-collection': 'Bar Set',
  'balcony-outdoor-collection': 'Outdoor',
  'outdoor': 'Outdoor', // Add direct mapping
  'daybed-lounge-frame': 'Daybed',
  'accessories-storage': 'Storage',
  'table-collection': 'Tables',
  'dining-table-collection': 'Dine Table',
}

