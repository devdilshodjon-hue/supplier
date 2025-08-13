#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Image optimization script for converting to WebP and AVIF
// This script requires sharp: npm install --save-dev sharp

const sharp = require('sharp');

const INPUT_DIR = 'public/images';
const OUTPUT_DIR = 'public/optimized';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to get all image files
function getAllImages(dir) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const files = [];
  
  function scanDirectory(directory) {
    const items = fs.readdirSync(directory);
    
    for (const item of items) {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (imageExtensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  if (fs.existsSync(dir)) {
    scanDirectory(dir);
  }
  
  return files;
}

// Function to optimize and convert images
async function optimizeImage(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const relativePath = path.relative(INPUT_DIR, path.dirname(inputPath));
  const outputSubDir = path.join(OUTPUT_DIR, relativePath);
  
  // Create subdirectory if it doesn't exist
  if (!fs.existsSync(outputSubDir)) {
    fs.mkdirSync(outputSubDir, { recursive: true });
  }
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Original optimized
    await image
      .jpeg({ quality: 85, progressive: true })
      .toFile(path.join(outputSubDir, `${filename}.jpg`));
    
    // WebP version
    await image
      .webp({ quality: 85, effort: 6 })
      .toFile(path.join(outputSubDir, `${filename}.webp`));
    
    // AVIF version (modern browsers)
    await image
      .avif({ quality: 85, effort: 9 })
      .toFile(path.join(outputSubDir, `${filename}.avif`));
    
    // Generate responsive sizes
    const sizes = [480, 768, 1024, 1200, 1920];
    
    for (const size of sizes) {
      if (metadata.width && metadata.width > size) {
        // WebP responsive
        await image
          .resize(size)
          .webp({ quality: 85, effort: 6 })
          .toFile(path.join(outputSubDir, `${filename}-${size}w.webp`));
        
        // AVIF responsive
        await image
          .resize(size)
          .avif({ quality: 85, effort: 9 })
          .toFile(path.join(outputSubDir, `${filename}-${size}w.avif`));
        
        // JPEG responsive
        await image
          .resize(size)
          .jpeg({ quality: 85, progressive: true })
          .toFile(path.join(outputSubDir, `${filename}-${size}w.jpg`));
      }
    }
    
    console.log(`✅ Optimized: ${inputPath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

// Function to generate placeholder images
async function generatePlaceholder(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const relativePath = path.relative(INPUT_DIR, path.dirname(inputPath));
  const outputSubDir = path.join(OUTPUT_DIR, relativePath);
  
  try {
    // Generate low-quality placeholder (blur effect)
    await sharp(inputPath)
      .resize(20)
      .blur(2)
      .jpeg({ quality: 20 })
      .toFile(path.join(outputSubDir, `${filename}-placeholder.jpg`));
    
    console.log(`✅ Generated placeholder: ${filename}`);
  } catch (error) {
    console.error(`❌ Error generating placeholder for ${inputPath}:`, error.message);
  }
}

// Main optimization function
async function optimizeAllImages() {
  console.log('🖼️  Starting image optimization...');
  
  const images = getAllImages(INPUT_DIR);
  
  if (images.length === 0) {
    console.log('📁 No images found in', INPUT_DIR);
    console.log('💡 Add your images to public/images/ directory');
    return;
  }
  
  console.log(`📊 Found ${images.length} images to optimize`);
  
  for (const imagePath of images) {
    await optimizeImage(imagePath);
    await generatePlaceholder(imagePath);
  }
  
  console.log('✨ Image optimization complete!');
  console.log('📁 Optimized images saved to:', OUTPUT_DIR);
}

// Generate manifest file for images
function generateImageManifest() {
  const manifestPath = path.join(OUTPUT_DIR, 'manifest.json');
  const images = getAllImages(OUTPUT_DIR);
  
  const manifest = {
    generated: new Date().toISOString(),
    images: images.map(imgPath => {
      const relativePath = path.relative(OUTPUT_DIR, imgPath);
      const filename = path.basename(imgPath, path.extname(imgPath));
      const format = path.extname(imgPath).slice(1);
      
      return {
        path: relativePath,
        filename,
        format,
        size: fs.statSync(imgPath).size
      };
    })
  };
  
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('📋 Generated image manifest:', manifestPath);
}

// Run optimization
if (require.main === module) {
  optimizeAllImages()
    .then(() => generateImageManifest())
    .catch(error => {
      console.error('💥 Optimization failed:', error);
      process.exit(1);
    });
}

module.exports = { optimizeAllImages, generateImageManifest };
