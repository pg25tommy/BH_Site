const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const MAX_WIDTH = 1200; // Max width in pixels (plenty for retina displays)
const QUALITY = 80; // Quality (80 is sweet spot - visually identical but much smaller)
const MIN_SIZE_KB = 200; // Only optimize images larger than 200KB

// Directories to scan
const IMAGE_DIRS = [
  'public/images/atmosphere',
  'public/images/gallery',
  'public/images/menu/burgers',
  'public/images/menu/appetizers',
  'public/images/menu/sandwiches',
  'public/images/menu/salads',
  'public/images/menu/milkshakes',
  'public/images/menu/beer-ciders',
  'public/images/menu/coffees',
  'public/images/menu/beverages',
  'public/images/menu/specialty',
];

async function getFileSize(filePath) {
  const stats = await fs.promises.stat(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

async function optimizeImage(filePath) {
  const originalSize = await getFileSize(filePath);

  // Skip if smaller than threshold
  if (originalSize < MIN_SIZE_KB * 1024) {
    return null;
  }

  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, path.extname(filePath));
  const dirName = path.dirname(filePath);

  console.log(`\n  Optimizing: ${path.basename(filePath)}`);
  console.log(`   Original size: ${formatBytes(originalSize)}`);

  try {
    // Always output as WebP for best compression
    const optimizedPath = path.join(dirName, `${baseName}.optimized.webp`);

    const pipeline = sharp(filePath).resize(MAX_WIDTH, null, {
      withoutEnlargement: true,
      fit: 'inside',
    });

    await pipeline
      .webp({
        quality: QUALITY,
        effort: 6, // Higher effort = better compression
      })
      .toFile(optimizedPath);

    const newSize = await getFileSize(optimizedPath);
    const savedBytes = originalSize - newSize;
    const percentSaved = ((savedBytes / originalSize) * 100).toFixed(1);

    console.log(`   New size: ${formatBytes(newSize)}`);
    console.log(`   Saved: ${formatBytes(savedBytes)} (${percentSaved}% reduction)`);

    return {
      file: path.basename(filePath),
      originalExt: ext,
      optimizedFile: `${baseName}.optimized.webp`,
      originalPath: filePath,
      optimizedPath,
      finalPath: path.join(dirName, `${baseName}.webp`),
      originalSize,
      newSize,
      savedBytes,
      percentSaved: parseFloat(percentSaved),
      formatChanged: ext !== '.webp',
    };
  } catch (error) {
    console.error(`   Error optimizing ${filePath}:`, error.message);
    return null;
  }
}

async function scanDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`\n  Directory not found: ${dirPath}`);
    return [];
  }

  const files = await fs.promises.readdir(dirPath);
  const results = [];

  for (const file of files) {
    // Skip already optimized files
    if (file.includes('.optimized.')) continue;

    const filePath = path.join(dirPath, file);
    const stat = await fs.promises.stat(filePath);

    if (stat.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(file)) {
      const result = await optimizeImage(filePath);
      if (result) {
        results.push(result);
      }
    }
  }

  return results;
}

async function main() {
  console.log('Starting image optimization...\n');
  console.log(`Configuration:`);
  console.log(`  - Max width: ${MAX_WIDTH}px`);
  console.log(`  - Quality: ${QUALITY}%`);
  console.log(`  - Output format: WebP`);
  console.log(`  - Min size to optimize: ${MIN_SIZE_KB}KB`);

  let allResults = [];

  for (const dir of IMAGE_DIRS) {
    console.log(`\n Scanning: ${dir}`);
    const results = await scanDirectory(dir);
    allResults = allResults.concat(results);
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));

  if (allResults.length === 0) {
    console.log('\nNo images needed optimization (all under threshold)');
  } else {
    const totalOriginal = allResults.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = allResults.reduce((sum, r) => sum + r.newSize, 0);
    const totalSaved = totalOriginal - totalNew;
    const avgPercent = (allResults.reduce((sum, r) => sum + r.percentSaved, 0) / allResults.length).toFixed(1);

    console.log(`\nOptimized ${allResults.length} images`);
    console.log(`   Total original size: ${formatBytes(totalOriginal)}`);
    console.log(`   Total new size: ${formatBytes(totalNew)}`);
    console.log(`   Total saved: ${formatBytes(totalSaved)}`);
    console.log(`   Average reduction: ${avgPercent}%`);

    console.log('\nIndividual results:');
    allResults.forEach((r, i) => {
      const formatNote = r.formatChanged ? ` (${r.originalExt} -> .webp)` : '';
      console.log(`   ${i + 1}. ${r.file}${formatNote}`);
      console.log(`      ${formatBytes(r.originalSize)} -> ${formatBytes(r.newSize)} (${r.percentSaved}% saved)`);
    });

    // Create batch script to replace files
    const batchLines = [];
    const jsonUpdates = [];

    for (const r of allResults) {
      const optimizedWin = r.optimizedPath.replace(/\//g, '\\');
      const finalWin = r.finalPath.replace(/\//g, '\\');
      const originalWin = r.originalPath.replace(/\//g, '\\');

      if (r.formatChanged) {
        // New format: move optimized to .webp name, delete old file
        batchLines.push(`move /Y "${optimizedWin}" "${finalWin}"`);
        batchLines.push(`del "${originalWin}"`);
        // Track JSON path updates needed
        const oldRef = r.originalPath.replace(/^public/, '').replace(/\\/g, '/');
        const newRef = r.finalPath.replace(/^public/, '').replace(/\\/g, '/');
        jsonUpdates.push({ old: oldRef, new: newRef });
      } else {
        // Same format (already webp): just replace in place
        batchLines.push(`move /Y "${optimizedWin}" "${originalWin}"`);
      }
    }

    const scriptPath = 'replace-optimized-images.bat';
    fs.writeFileSync(scriptPath, batchLines.join('\n'));
    console.log(`\nCreated: ${scriptPath}`);

    if (jsonUpdates.length > 0) {
      console.log(`\nImage path updates needed in menuData.json:`);
      jsonUpdates.forEach(u => {
        console.log(`   ${u.old} -> ${u.new}`);
      });

      // Write JSON updates file for reference
      fs.writeFileSync('image-path-updates.json', JSON.stringify(jsonUpdates, null, 2));
      console.log(`\nCreated: image-path-updates.json`);
    }

    console.log(`\nNext steps:`);
    console.log(`   1. Review .optimized.webp files to verify quality`);
    console.log(`   2. Stop your dev server if running`);
    console.log(`   3. Run: replace-optimized-images.bat`);
    console.log(`   4. Update image references in menuData.json if format changed`);
  }

  console.log('\nOptimization complete!\n');
}

main().catch(console.error);
