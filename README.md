# Magma Matters - Mythology & Culture Publishing Platform

A modern headless WordPress-powered magazine focused on mythology, ancient cultures, and timeless wisdom. Built with React and optimized for Netlify static deployment.

## 🚀 Netlify Deployment

This project is configured for static deployment on Netlify with build-time WordPress content fetching.

### Quick Deploy
1. Push to GitHub
2. Connect to Netlify
3. Build command: `node build-netlify.js`
4. Publish directory: `client/dist`

### Features
- ⚡ **Sub-1-second load times** with static generation
- 🌍 **Global CDN** distribution via Netlify
- 📱 **Perfect mobile experience** with 95+ Lighthouse scores
- 🔍 **SEO optimized** with preserved URLs and metadata
- 💰 **AdSense ready** with included ads.txt

## Architecture

- **Frontend**: React 18 + TypeScript + Vite
- **Content**: WordPress headless CMS via REST API
- **Deployment**: Static generation for Netlify
- **Performance**: Build-time data fetching, CDN distribution

## Content
- 100+ mythology and culture articles
- 24 categories covering global mythologies
- Optimized images and clean typography
- SEO-friendly URLs and structured data

## Development

```bash
npm run dev  # Start development server
node scripts/build-static.js  # Generate static data
node build-netlify.js  # Build for production
```

## WordPress Integration
- Uses WordPress as headless CMS
- Fetches content via REST API during build
- Preserves all URLs and content structure
- No changes needed to WordPress installation