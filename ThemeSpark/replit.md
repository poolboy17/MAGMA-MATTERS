# Magma Matters - Mythology & Culture Publishing Platform

## Overview

Magma Matters is a modern headless WordPress-powered magazine focused on mythology, ancient cultures, and timeless wisdom. Built with React and Express, the application provides a clean, responsive interface for reading articles about gods, legends, and cultural insights. It features a magazine-style layout with article cards displaying featured images, excerpts, and category badges. The platform supports article browsing, category filtering, and individual article viewing with a focus on user experience and accessibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with support for parameterized routes
- **State Management**: TanStack Query (React Query) with optimized cache configuration
  - 5-minute stale time matching server cache
  - Smart retry logic for network failures
  - Garbage collection optimization
- **Performance Features**:
  - WebP image optimization with automatic fallback
  - Lazy loading for images with priority loading for above-fold content
  - Performance monitoring component for development metrics
  - Responsive image sizing for different screen breakpoints
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with CSS custom properties for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for optimized REST API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints with pagination support (/api/articles?page=1&limit=20)
- **Performance Optimizations**:
  - Response compression with configurable thresholds
  - HTTP caching headers for optimal browser caching
  - Batch processing for external API requests
  - Memory-based cache manager with TTL expiration
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot module replacement and automatic restarts using tsx

### Data Storage & Performance
- **Primary Storage**: WordPress headless CMS via REST API for authentic content
- **Caching Strategy**: Multi-layer caching system with 5-minute TTL
  - Server-side request caching for WordPress API calls
  - Author, media, and category caching for faster lookups
  - HTTP cache headers (Cache-Control, ETag) for browser caching
- **Image Optimization**: WebP format conversion with 85% quality, lazy loading, and priority loading
- **Response Compression**: gzip/deflate compression for JSON responses and static assets
- **Batch Processing**: WordPress data fetched in optimized batches to reduce load time
- **Performance Monitoring**: Real-time performance metrics tracking in development

### Component Architecture
- **Design System**: Consistent component library with variant-based styling using class-variance-authority
- **Layout Components**: Reusable Header, Footer, and grid components for consistent page structure
- **Article Components**: Specialized components for article cards, grids, and individual article display
- **UI Primitives**: Comprehensive set of accessible UI components (buttons, cards, badges, etc.)

### Development Workflow
- **Type Safety**: Shared TypeScript schemas between frontend and backend using Zod validation
- **Code Organization**: Clear separation between client, server, and shared code with path aliases
- **Asset Handling**: Vite-based asset processing with support for various file types
- **Development Server**: Integrated development environment with Vite middleware in Express

### Testing Infrastructure
- **Unit Testing**: Vitest with Testing Library for React component and utility testing
- **Integration Testing**: Supertest for API endpoint testing with mock data
- **End-to-End Testing**: Playwright for cross-browser automated testing
- **Coverage Requirements**: 100% coverage enforced for branches, functions, lines, and statements
- **Test Structure**: Comprehensive test suites covering all components, pages, utilities, and API routes
- **Mock Services**: MSW (Mock Service Worker) for API mocking and realistic test scenarios
- **CI/CD Pipeline**: GitHub Actions workflow with automated testing, coverage reporting, and security scanning

### Automated Testing Workflow (Implemented August 2025)
- **Pre-commit Hooks**: Git hooks automatically validate code before commits
- **Comprehensive Scripts**: test-all.js, pre-commit.js, validate-commit.js for different validation levels
- **Commit Protection**: Automatic blocking of commits that fail quality checks
- **GitHub Actions**: Full CI/CD pipeline with multi-browser testing and security audits
- **Daily Monitoring**: Scheduled runs to detect drift and regressions
- **Coverage Enforcement**: Configurable thresholds with detailed reporting
- **Documentation**: Complete testing guide in TESTING.md

### ES Module Conversion (August 13, 2025)
- **Full ES Module Support**: Converted entire project to ES module syntax site-wide
- **ESLint v9 Compatibility**: Updated to flat config format with proper global definitions
- **Configuration Files**: Converted .eslintrc.js to eslint.config.js, updated all config files
- **Dependencies**: Installed missing ESLint v9 requirements (@eslint/js, plugins)
- **TypeScript Integration**: Maintained full TypeScript compatibility with ES modules
- **Build Process**: Verified production builds work correctly with ES module format

### Modern SEO Implementation (August 13, 2025)
- **Core SEO Infrastructure**: Implemented react-helmet-async for dynamic meta tag management
- **Structured Data**: Added comprehensive Schema.org markup with react-schemaorg and schema-dts
- **SEO Components**: Created reusable SEOHead and structured data components for articles and website
- **SEO Utilities**: Built utility functions for meta description generation, keyword extraction, and URL optimization
- **Server-Side SEO**: Added automated sitemap.xml, robots.txt, and RSS feed generation endpoints
- **Performance Optimized**: SEO endpoints include proper caching headers and efficient data processing
- **Internal Linking Strategy**: Implemented comprehensive internal linking system with contextual relevance scoring
- **Navigation Components**: Added breadcrumb navigation, related articles, and category hubs for optimal link distribution
- **SEO Best Practices**: URL optimization, anchor text variation, and link relationship analysis for modern search engines
- **Dependencies Added**: react-helmet-async, react-schemaorg, schema-dts, sitemap, robotstxt packages

### Background Worker System (August 13, 2025)
- **Content Sync Worker**: Automated 3-minute interval WordPress content synchronization
- **Performance Optimization**: Works in harmony with Hostinger's object caching for optimal performance
- **Cache Strategy**: Proactive cache refresh before 5-minute TTL expiration prevents user-facing delays
- **Worker Management**: REST API endpoints for status monitoring, start/stop control, and manual sync triggers
- **Development Integration**: Auto-starts in development mode, production-ready deployment configuration
- **Monitoring Dashboard**: React component for real-time worker statistics and control interface
- **Error Handling**: Comprehensive error tracking with automatic recovery and detailed logging
- **Benefits**: Eliminates user-facing WordPress API delays, reduces server load, maintains fresh content

### Content Formatting Enhancement (August 13, 2025)
- **WordPress Content Renderer**: Secure HTML rendering component with DOMPurify sanitization
- **Content Cleaning Pipeline**: Server-side content enhancement removes malformed sections and corrupted text
- **Text Corruption Fixes**: Automatically corrects common WordPress content issues like "trifucrion" → "Introduction"
- **Typography Enhancement**: Improved formatting with proper em dashes, ellipsis, and spacing
- **Safe HTML Rendering**: Preserves formatting while preventing XSS attacks through comprehensive sanitization
- **Tailwind Prose Integration**: Professional article typography with responsive design and dark mode support

### Netlify Static Deployment (August 14, 2025)
- **Static Site Generation**: Converted full-stack Express app to static React build for Netlify deployment
- **Build-Time Data Fetching**: WordPress content fetched during build process for maximum performance
- **Static Data Hooks**: Created useStaticArticles, useStaticCategories, useStaticAuthors hooks for client-side data
- **Netlify Configuration**: Complete netlify.toml with proper headers, redirects, and build settings
- **Build Scripts**: Automated build-static.js and build-netlify.js for seamless deployment process
- **Performance Optimization**: Sub-1-second load times with CDN distribution and zero server costs
- **SEO Preservation**: All URLs, content, and SEO features maintained in static format
- **AdSense Compliance**: ads.txt and all monetization requirements preserved for static deployment

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React routing library
- **express**: Node.js web application framework
- **drizzle-orm**: Type-safe ORM for database operations
- **zod**: Runtime type validation and schema definition

### Database and Storage
- **@neondatabase/serverless**: Serverless PostgreSQL database client
- **drizzle-kit**: Database migration and schema management tools
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional CSS class utility
- **lucide-react**: Icon library for consistent iconography

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-***: Replit-specific development plugins

### Form and Validation
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Integration between react-hook-form and validation libraries

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **embla-carousel-react**: Carousel component functionality