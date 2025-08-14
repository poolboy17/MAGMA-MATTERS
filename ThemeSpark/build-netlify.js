#!/usr/bin/env node

// Simple wrapper script for Netlify build
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function main() {
  try {
    console.log('🚀 Starting Netlify build process...');
    
    // Run the static build script
    console.log('📄 Generating static data...');
    await execAsync('node scripts/build-static.js');
    
    // Build the client
    console.log('🔨 Building client...');
    await execAsync('cd client && npm run build');
    
    console.log('✅ Netlify build complete!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

main();