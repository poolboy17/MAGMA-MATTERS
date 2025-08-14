/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./client/src/test/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/**',
        'dist/**',
        '**/*.config.{js,ts}',
        '**/*.test.{js,ts,jsx,tsx}',
        '**/__tests__/**',
        '**/test/**',
        'coverage/**',
        '.next/**',
        'playwright-report/**',
        'test-results/**',
      ],
      thresholds: {
        global: {
          branches: 90,  // Reduced for demo
          functions: 90, // Reduced for demo
          lines: 90,     // Reduced for demo  
          statements: 90 // Reduced for demo
        }
      },
      all: true,
      include: [
        'client/src/**/*.{js,ts,jsx,tsx}',
        'server/**/*.{js,ts}',
        'shared/**/*.{js,ts}'
      ]
    },
    include: [
      'client/src/**/*.{test,spec}.{js,ts,jsx,tsx}',
      'server/**/*.{test,spec}.{js,ts}',
      'shared/**/*.{test,spec}.{js,ts}'
    ],
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
      '@server': path.resolve(__dirname, './server'),
      '@assets': path.resolve(__dirname, './client/src/assets')
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
      '@server': path.resolve(__dirname, './server'),
      '@assets': path.resolve(__dirname, './client/src/assets')
    }
  }
})