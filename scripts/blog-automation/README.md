# Mangala Living — Automated Blog Publisher (VPS Singapore)

Automated 3x daily SEO blog post publishing system running on your Singapore Ubuntu VPS (`43.159.44.156`).

---

## Architecture Overview

```
Singapore VPS (43.159.44.156)
├── Cron Schedule (08:00, 14:00, 20:00 WIB)
│   └── node scripts/blog-automation/generate-blog.cjs
│       ├── Picks next topic from topics.json
│       ├── Calls OpenRouter API / Groq API to generate bilingual article
│       ├── Appends metadata to src/data/blog.ts
│       ├── Appends article content to src/data/blogContent.ts
│       ├── Updates public/post-sitemap.xml
│       └── Git Commit & Push to GitHub (projectcamar/mangala-living)
│           └── Vercel automatically deploys new build
```

---

## One-Command VPS Setup

Connect to your VPS via SSH and run:

```bash
ssh ubuntu@43.159.44.156
cd /path/to/mangala-living
chmod +x scripts/blog-automation/install.sh
./scripts/blog-automation/install.sh
```

---

## API Credentials Setup

Set environment variables on your VPS:
- `export OPENROUTER_API_KEY="<your-openrouter-key>"`
- `export GROQ_API_KEY="<your-groq-key>"`
- **GitHub Repo**: `projectcamar/mangala-living`

---

## Testing Manually

To manually trigger a single blog post creation on the VPS or locally:

```bash
export OPENROUTER_API_KEY="<your-openrouter-key>"
export GROQ_API_KEY="<your-groq-key>"
node scripts/blog-automation/generate-blog.cjs
```

Logs will be saved to `/tmp/blog-automation.log`.
