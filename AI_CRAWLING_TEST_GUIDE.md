# AI Crawling Enhancement - Testing Guide

## Quick Testing Checklist

### 1. Local Development Test
```bash
# Start dev server
npm run dev

# Check for errors in console
# Visit these pages to verify:
- http://localhost:5173/shop
- http://localhost:5173/product/frame-loft-bookshelf
- http://localhost:5173/product-category/bar-set
- http://localhost:5173/blog/tips-memilih-furniture-industrial-untuk-cafe
```

### 2. Verify Hidden AI Content Exists
Open browser DevTools → Elements → Search for:
- `ProductDetailAIContent`
- `CategoryAIContent`
- `display: none`
- `aria-hidden="true"`

Should find hidden sections with comprehensive content.

### 3. Verify Structured Data
Visit pages and check in DevTools:
```javascript
// Look for <script type="application/ld+json">
// Should find schemas:
- Product schema (on product pages)
- BreadcrumbList schema (on category/shop pages)
- CollectionPage schema (on category/shop pages)
- FAQPage schema (on pages with FAQ)
```

Or use Google's Rich Results Test:
- https://search.google.com/test/rich-results
- Input your page URLs

### 4. Test AI Queries (After Deployment & Indexing)

#### Test with ChatGPT:
```
Query 1: "Apa itu Mangala Living?"
Expected: Should mention:
- Manufacturer furniture industrial custom
- Bekasi location
- Since 1999
- Contact info

Query 2: "Harga meja cafe industrial di Mangala Living"
Expected: Should provide:
- Price ranges
- Specific examples
- Factory price benefits
- Contact to order

Query 3: "Bagaimana cara order furniture custom dari Mangala Living?"
Expected: Should describe:
- 7-step process
- Timeline (2-4 weeks)
- DP 50%
- Contact WhatsApp
```

#### Test with Perplexity:
```
Query 1: "Workshop furniture besi terpercaya di Bekasi"
Expected: Should cite Mangala Living with:
- Address
- Experience
- Contact

Query 2: "Furniture outdoor yang tahan cuaca untuk cafe"
Expected: Should recommend and cite:
- Mangala Living outdoor furniture
- Powder coating benefit
- 5-8 years durability
```

#### Test with Google AI Overviews:
```
Search: "furniture cafe industrial bekasi harga pabrik"
Expected: Mangala Living appears in:
- AI Overview
- Or featured snippet
- With accurate info
```

### 5. Check Crawlability

#### robots.txt Check
Make sure hidden content is crawlable:
```
# Should NOT block:
User-agent: *
Allow: /

# Should NOT have:
Disallow: *.tsx
Disallow: /components/
```

#### View Page Source
Right-click page → View Page Source
- Verify hidden content exists in HTML
- Check schema.org JSON-LD scripts
- Confirm meta tags are correct

### 6. Monitor AI Bot Traffic

After deployment, check server logs for AI bot user agents:
- `GPTBot` (OpenAI/ChatGPT)
- `ChatGPT-User` (OpenAI)
- `Claude-Web` (Anthropic/Claude)
- `PerplexityBot` (Perplexity)
- `Googlebot` (Google)
- `Bingbot` (Bing/Copilot)

### 7. Validate SEO

Use tools:
- Google Search Console → Coverage report
- Bing Webmaster Tools
- Check for structured data errors

### 8. Manual Verification

#### Product Page Test (e.g., /product/frame-loft-bookshelf)
- ✅ Title includes product name + "Industrial Furniture Berkualitas Tinggi"
- ✅ Meta description comprehensive
- ✅ Hidden AI content exists with 8 sections
- ✅ Product schema present
- ✅ FAQ schema present (7 questions)
- ✅ Breadcrumb schema

#### Category Page Test (e.g., /product-category/bar-set)
- ✅ Title includes "Bar Set Industrial Bekasi"
- ✅ Meta description mentions product count
- ✅ Hidden AI content with category details
- ✅ BreadcrumbList schema
- ✅ CollectionPage schema
- ✅ Category-specific FAQ

#### Shop Page Test (/shop)
- ✅ Title: "Jual Furniture Industrial Bekasi - Harga Pabrik Langsung"
- ✅ Comprehensive meta description
- ✅ Hidden AI content for "All Products"
- ✅ BreadcrumbList schema
- ✅ CollectionPage with all products
- ✅ Merchant structured data

### 9. Common Issues & Fixes

#### Issue: Hidden content not in HTML
**Fix:** Verify component is imported and used in page

#### Issue: Schema validation errors
**Fix:** Check JSON-LD syntax in browser console

#### Issue: AI not finding info
**Fix:** 
- Wait 1-2 weeks for indexing
- Check robots.txt not blocking
- Verify sitemap submitted
- Check hidden content is in HTML source

#### Issue: Meta description too long
**Fix:** Limit to 155-160 characters

### 10. Success Metrics

After 2-4 weeks, you should see:
- ✅ AI bots in server logs (GPTBot, Claude-Web, etc.)
- ✅ Structured data shows in Google Search Console
- ✅ Increased organic traffic from long-tail queries
- ✅ ChatGPT/Perplexity citing your content
- ✅ Better ranking for location + product queries

---

## Testing Timeline

**Week 1:**
- Deploy changes
- Submit sitemap to Google/Bing
- Check structured data validation
- Verify hidden content exists

**Week 2-3:**
- Monitor server logs for AI bots
- Test queries manually in ChatGPT
- Check Google Search Console for crawl activity

**Week 4+:**
- Verify AI can answer queries correctly
- Monitor organic traffic increase
- Check citations in AI responses
- Measure conversion from AI-referred traffic

---

## Contact for Issues

If AI is not crawling properly:
1. Check robots.txt
2. Verify sitemap.xml includes all pages
3. Ensure hidden content is in HTML source
4. Check structured data validation
5. Wait adequate time for indexing (2-4 weeks)

---

**Ready for AI Crawling!** 🚀🤖
