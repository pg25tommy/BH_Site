const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const MAX_WIDTH = 1200; // Max width in pixels (plenty for retina displays)
const QUALITY = 80; // JPEG quality (80 is sweet spot - visually identical but much smaller)
const MIN_SIZE_KB = 500; // Only optimize images larger than 500KB

// Directories to scan
const IMAGE_DIRS = [
  'public/images/atmosphere',
  'public/images/gallery',
];

async function getFileSize(filePath) {
  const stats = await fs.promises.stat(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

async function optimizeImage(filePath) {
  const originalSize = await getFileSize(filePath);
  const originalSizeMB = originalSize / 1024 / 1024;

  // Skip if smaller than threshold
  if (originalSizeMB < (MIN_SIZE_KB / 1024)) {
    return null;
  }

  console.log(`\n📸 Optimizing: ${path.basename(filePath)}`);
  console.log(`   Original size: ${formatBytes(originalSize)}`);

  try {
    // Create optimized version with .optimized suffix
    const ext = path.extname(filePath);
    const baseName = path.basename(filePath, ext);
    const dirName = path.dirname(filePath);
    const optimizedPath = path.join(dirName, `${baseName}.optimized${ext}`);

    // Optimize image
    await sharp(filePath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true, // Don't enlarge smaller images
        fit: 'inside',
      })
      .jpeg({
        quality: QUALITY,
        progressive: true, // Progressive JPEGs load faster
        mozjpeg: true, // Use mozjpeg for better compression
      })
      .toFile(optimizedPath);

    const newSize = await getFileSize(optimizedPath);
    const savedBytes = originalSize - newSize;
    const percentSaved = ((savedBytes / originalSize) * 100).toFixed(1);

    console.log(`   ✅ New size: ${formatBytes(newSize)}`);
    console.log(`   💾 Saved: ${formatBytes(savedBytes)} (${percentSaved}% reduction)`);
    console.log(`   📁 Created: ${path.basename(optimizedPath)}`);

    return {
      file: path.basename(filePath),
      optimizedFile: path.basename(optimizedPath),
      originalPath: filePath,
      optimizedPath,
      originalSize,
      newSize,
      savedBytes,
      percentSaved: parseFloat(percentSaved),
    };
  } catch (error) {
    console.error(`   ❌ Error optimizing ${filePath}:`, error.message);
    return null;
  }
}

async function scanDirectory(dirPath) {
  const files = await fs.promises.readdir(dirPath);
  const results = [];

  for (const file of files) {
    // Skip already optimized files
    if (file.includes('.optimized.')) continue;

    const filePath = path.join(dirPath, file);
    const stat = await fs.promises.stat(filePath);

    if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
      const result = await optimizeImage(filePath);
      if (result) {
        results.push(result);
      }
    }
  }

  return results;
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`Configuration:`);
  console.log(`  - Max width: ${MAX_WIDTH}px`);
  console.log(`  - Quality: ${QUALITY}%`);
  console.log(`  - Min size to optimize: ${MIN_SIZE_KB}KB`);
  console.log(`\nScanning directories...`);

  let allResults = [];

  for (const dir of IMAGE_DIRS) {
    if (!fs.existsSync(dir)) {
      console.log(`\n⚠️  Directory not found: ${dir}`);
      continue;
    }

    console.log(`\n📁 Scanning: ${dir}`);
    const results = await scanDirectory(dir);
    allResults = allResults.concat(results);
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));

  if (allResults.length === 0) {
    console.log('\n✨ No images needed optimization (all under 500KB)');
  } else {
    const totalOriginal = allResults.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = allResults.reduce((sum, r) => sum + r.newSize, 0);
    const totalSaved = totalOriginal - totalNew;
    const avgPercent = (allResults.reduce((sum, r) => sum + r.percentSaved, 0) / allResults.length).toFixed(1);

    console.log(`\n✅ Optimized ${allResults.length} images`);
    console.log(`   Total original size: ${formatBytes(totalOriginal)}`);
    console.log(`   Total new size: ${formatBytes(totalNew)}`);
    console.log(`   Total saved: ${formatBytes(totalSaved)}`);
    console.log(`   Average reduction: ${avgPercent}%`);

    console.log('\n📋 Individual results:');
    allResults.forEach((r, i) => {
      console.log(`   ${i + 1}. ${r.file}`);
      console.log(`      ${formatBytes(r.originalSize)} → ${formatBytes(r.newSize)} (${r.percentSaved}% saved)`);
    });

    // Create batch script to replace files
    console.log('\n\n📝 Creating replacement script...');

    const batchCommands = allResults.map(r => {
      const originalPath = r.originalPath.replace(/\//g, '\\');
      const optimizedPath = r.optimizedPath.replace(/\//g, '\\');
      return `move /Y "${optimizedPath}" "${originalPath}"`;
    }).join('\n');

    const scriptPath = 'replace-optimized-images.bat';
    fs.writeFileSync(scriptPath, batchCommands);

    console.log(`✅ Created: ${scriptPath}`);
    console.log(`\n💡 Next steps:`);
    console.log(`   1. Review the .optimized.jpg files to verify quality`);
    console.log(`   2. Stop your dev server if running`);
    console.log(`   3. Run: replace-optimized-images.bat`);
    console.log(`   4. This will replace originals with optimized versions`);
  }

  console.log('\n✨ Optimization complete!\n');
}

main().catch(console.error);
