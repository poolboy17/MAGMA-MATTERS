# 📁 Manual Netlify Deployment - Files Needed

## Core Deployment Files (Copy These to New Folder)

### 1. Root Directory Files:
```
netlify.toml
build-netlify.js
package.json
README.md
.gitignore
```

### 2. Scripts Directory:
```
scripts/
├── build-static.js
```

### 3. Client Directory (Complete):
```
client/
├── package.json
├── vite.config.ts
├── public/
│   ├── index.html
│   ├── ads.txt
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── rss.xml
│   ├── _redirects
│   ├── site.webmanifest
│   └── data/
│       ├── articles.json (3.1MB - 100 articles)
│       ├── categories.json
│       └── authors.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── hooks/
    │   └── use-static-data.ts
    ├── pages/
    │   ├── home.tsx
    │   ├── article.tsx
    │   ├── category.tsx
    │   ├── about.tsx
    │   ├── privacy.tsx
    │   ├── terms.tsx
    │   ├── affiliate-disclaimer.tsx
    │   └── not-found.tsx
    ├── components/
    │   ├── header.tsx
    │   ├── footer.tsx
    │   ├── article-grid.tsx
    │   ├── optimized-image.tsx
    │   ├── wordpress-content.tsx
    │   ├── performance-monitor.tsx
    │   ├── ui/ (all shadcn components)
    │   └── seo/ (SEO components)
    └── lib/
        ├── queryClient.ts
        ├── utils.ts
        └── internal-links.ts
```

## Simplest Manual Method:

### Option 1: Copy from Replit
1. Download your entire project from Replit
2. Upload to GitHub
3. Connect GitHub to Netlify

### Option 2: Essential Files Only
Copy these key files to create minimal deployment:

**Must-Have Files:**
- `netlify.toml` (build config)
- `build-netlify.js` (build script)  
- `scripts/build-static.js` (data fetcher)
- Entire `client/` directory with all content

**Netlify Settings:**
- Build command: `node build-netlify.js`
- Publish directory: `client/dist`
- Node version: 20

Your 100 mythology articles are already converted to static JSON files ready for instant loading!