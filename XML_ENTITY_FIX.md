# XML Entity Reference Error Fix

## Problem
The sitemap files contained XML entity reference errors:
```
error on line 196 at column 89: EntityRef: expecting ';'
```

This was caused by unescaped `&` characters in URLs and text content within the XML files.

## Root Cause
URLs with query parameters (e.g., `?w=800&auto=format&fit=crop`) contained `&` characters that must be escaped as `&amp;` in XML documents.

## Solution
Added an `escapeXml()` function to the sitemap generation script (`scripts/generate-sitemap.mjs`) that properly escapes all XML special characters:
- `&` → `&amp;`
- `<` → `&lt;`
- `>` → `&gt;`
- `"` → `&quot;`
- `'` → `&apos;`

## Changes Made
1. Added `escapeXml()` helper function (line 31-39)
2. Applied escaping to all data during parsing:
   - Blog post titles and image URLs
   - Product names and image URLs
   - Category names
3. Applied escaping to all URLs in XML output:
   - Sitemap index
   - Post sitemap
   - Page sitemap
   - Category sitemap
   - Attachment sitemap

## Verification
✅ All 5 sitemap files now pass XML validation:
- `sitemap.xml` (index)
- `post-sitemap.xml` (186 blog posts)
- `page-sitemap.xml` (12 pages)
- `category-sitemap.xml` (14 categories)
- `attachment-sitemap.xml` (203 images)

## Example Fix
**Before:**
```xml
<image:loc>https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop</image:loc>
```

**After:**
```xml
<image:loc>https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&amp;auto=format&amp;fit=crop</image:loc>
```

## Testing
Run the sitemap generator to regenerate all files:
```bash
node scripts/generate-sitemap.mjs
```

Validate XML:
```bash
python3 -c "import xml.etree.ElementTree as ET; ET.parse('public/sitemap.xml')"
```
