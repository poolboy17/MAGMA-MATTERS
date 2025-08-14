export default {
  ci: {
    collect: {
      url: [
        'http://localhost:5000/',
        'http://localhost:5000/about',
        'http://localhost:5000/privacy',
        'http://localhost:5000/terms',
        'http://localhost:5000/affiliate-disclaimer'
      ],
      startServerCommand: 'npm run dev',
      startServerReadyPattern: 'serving on port 5000',
      startServerReadyTimeout: 30000,
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        
        // SEO specific assertions
        'document-title': 'error',
        'meta-description': 'error',
        'http-status-code': 'error',
        'crawlable-anchors': 'error',
        'link-text': 'warn',
        'structured-data': 'warn',
        'robots-txt': 'warn',
        
        // Performance assertions
        'first-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 4000 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        
        // Accessibility assertions
        'color-contrast': 'error',
        'image-alt': 'error',
        'label': 'error',
        'heading-order': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};