import sharp from 'sharp';
import { existsSync, mkdirSync, statSync } from 'fs';
import { join } from 'path';

const publicDir = './public';
const sourceImage = join(publicDir, '2T5A8620.JPEG');

console.log('🖼️  Optimizing images...\n');

// Create different sizes and formats
const sizes = [
  { width: 640, suffix: '-640w' },
  { width: 1280, suffix: '-1280w' },
  { width: 1920, suffix: '-1920w' },
];

async function optimizeImage() {
  if (!existsSync(sourceImage)) {
    console.error('❌ Source image not found:', sourceImage);
    return;
  }

  const originalStats = statSync(sourceImage);
  const metadata = await sharp(sourceImage).metadata();
  console.log(`📊 Original: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB (${metadata.width}x${metadata.height})`);

  for (const size of sizes) {
    // Generate WebP
    const webpPath = join(publicDir, `2T5A8620${size.suffix}.webp`);
    await sharp(sourceImage)
      .resize(size.width, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath);

    const webpStats = statSync(webpPath);
    console.log(`✅ WebP ${size.width}w: ${(webpStats.size / 1024).toFixed(0)} KB`);

    // Generate optimized JPEG
    const jpegPath = join(publicDir, `2T5A8620${size.suffix}.jpg`);
    await sharp(sourceImage)
      .resize(size.width, null, { withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(jpegPath);

    const jpegStats = statSync(jpegPath);
    console.log(`✅ JPEG ${size.width}w: ${(jpegStats.size / 1024).toFixed(0)} KB`);
  }

  // Generate tiny blur placeholder
  const blurPath = join(publicDir, '2T5A8620-blur.jpg');
  await sharp(sourceImage)
    .resize(20, null, { withoutEnlargement: true })
    .jpeg({ quality: 20 })
    .blur(5)
    .toFile(blurPath);

  const blurStats = statSync(blurPath);
  console.log(`\n✅ Blur placeholder: ${(blurStats.size / 1024).toFixed(1)} KB\n`);

  console.log('✨ Image optimization complete!');
}

optimizeImage().catch(console.error);
