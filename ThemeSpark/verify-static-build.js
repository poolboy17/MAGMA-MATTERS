#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

async function verifyStaticBuild() {
  console.log('🔍 Verifying static build files...');
  
  const checks = [];
  
  try {
    // Check data files
    const dataFiles = ['articles.json', 'categories.json', 'authors.json'];
    for (const file of dataFiles) {
      const filePath = path.join('client', 'public', 'data', file);
      try {
        const content = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(content);
        checks.push({
          file: `data/${file}`,
          status: '✅',
          details: `${Array.isArray(data) ? data.length : Object.keys(data).length} items`
        });
      } catch (error) {
        checks.push({
          file: `data/${file}`,
          status: '❌',
          details: error.message
        });
      }
    }
    
    // Check SEO files
    const seoFiles = ['sitemap.xml', 'robots.txt', 'rss.xml', 'ads.txt'];
    for (const file of seoFiles) {
      const filePath = path.join('client', 'public', file);
      try {
        const content = await fs.readFile(filePath, 'utf8');
        checks.push({
          file,
          status: '✅',
          details: `${content.length} characters`
        });
      } catch (error) {
        checks.push({
          file,
          status: '❌',
          details: error.message
        });
      }
    }
    
    // Check build config
    const configFiles = ['netlify.toml', 'build-netlify.js'];
    for (const file of configFiles) {
      try {
        await fs.access(file);
        checks.push({
          file,
          status: '✅',
          details: 'Configuration ready'
        });
      } catch (error) {
        checks.push({
          file,
          status: '❌',
          details: 'Missing file'
        });
      }
    }
    
    console.log('\n📋 Verification Results:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    for (const check of checks) {
      console.log(`${check.status} ${check.file.padEnd(20)} ${check.details}`);
    }
    
    const failed = checks.filter(c => c.status === '❌');
    if (failed.length === 0) {
      console.log('\n🚀 All checks passed! Ready for Netlify deployment.');
      console.log('\nNext steps:');
      console.log('1. Connect your repo to Netlify');
      console.log('2. Set build command: node build-netlify.js');
      console.log('3. Set publish directory: client/dist');
      console.log('4. Deploy!');
    } else {
      console.log(`\n⚠️  ${failed.length} issues found. Please fix before deploying.`);
    }
    
  } catch (error) {
    console.error('❌ Verification failed:', error);
    process.exit(1);
  }
}

verifyStaticBuild();