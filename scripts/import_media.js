/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const projectsConfig = [
  {
    folder: 'Youtube Automation',
    slug: 'youtube-automation-saas',
    primaryImage: 'WhatsApp Image 2026-10-15 at 10.02.54 PM.jpeg',
    primaryVideo: 'WhatsApp Video 2026-10-15 at 10.02.54 PM.mp4',
  },
  {
    folder: 'Social Media Bot',
    slug: 'social-media-automation-bot',
    primaryImage: 'WhatsApp Image 2026-10-15 at 9.58.42 PM.jpeg',
    primaryVideo: 'SocialMediaAutomationBot.mp4',
  },
  {
    folder: 'Whatsapp and instagram Auto-Reply',
    slug: 'instagram-facebook-auto-reply',
    primaryImage: 'WhatsApp Image 2026-10-15 at 9.59.06 PM.jpeg',
    primaryVideo: 'WhatsApp Video 2026-10-15 at 9.59.05 PM.mp4',
  },
  {
    folder: 'Whatsapp AI Automation Bot',
    slug: 'whatsapp-ai-automation-bot',
    primaryImage: null, // no images in folder
    primaryVideo: 'WhatsApp Video 2026-10-15 at 10.02.41 PM.mp4',
  },
  {
    folder: 'Property Moduler Real EstateManagement System',
    slug: 'property-moduler',
    primaryImage: null, // no images in folder
    primaryVideo: 'WhatsApp Video 2026-10-15 at 10.02.42 PM.mp4',
  },
  {
    folder: 'Graphy AI Trading Bot',
    slug: 'graphy-ai-trading-bot',
    primaryImage: null, // no images in folder
    primaryVideo: 'WhatsApp Video 2026-10-15 at 10.02.53 PM.mp4',
  },
  {
    folder: 'Audit Agent',
    slug: 'audit-client-agent',
    primaryImage: 'WhatsApp Image 2026-10-16 at 7.07.10 PM (3).jpeg',
    primaryVideo: null, // no video in folder
  },
];

const contentBase = path.join(__dirname, '..', 'Content');
const publicBase = path.join(__dirname, '..', 'public', 'projects');

async function processAll() {
  for (const cfg of projectsConfig) {
    const srcDir = path.join(contentBase, cfg.folder);
    const destDir = path.join(publicBase, cfg.slug);
    fs.mkdirSync(destDir, { recursive: true });

    console.log(`\nProcessing ${cfg.slug}...`);

    if (!fs.existsSync(srcDir)) {
      console.warn(`Source folder does not exist: ${srcDir}`);
      continue;
    }

    const files = fs.readdirSync(srcDir);
    const imageFiles = files.filter(f => /\.(jpe?g|png|webp)$/i.test(f));
    const videoFiles = files.filter(f => /\.(mp4|mov|webm)$/i.test(f));

    // 1. Process Images
    if (imageFiles.length > 0) {
      // Primary thumbnail
      const thumbFile = (cfg.primaryImage && imageFiles.includes(cfg.primaryImage))
        ? cfg.primaryImage
        : imageFiles[0];

      const thumbDest = path.join(destDir, 'thumbnail.jpg');
      await sharp(path.join(srcDir, thumbFile))
        .resize({ width: 1600, withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(thumbDest);

      const thumbStat = fs.statSync(thumbDest);
      console.log(`  Created thumbnail.jpg (${Math.round(thumbStat.size / 1024)} KB) from ${thumbFile}`);

      // Remaining extra images
      let imgIdx = 1;
      for (const img of imageFiles) {
        if (img === thumbFile) continue;
        const extraDest = path.join(destDir, `image-${imgIdx}.jpg`);
        await sharp(path.join(srcDir, img))
          .resize({ width: 1600, withoutEnlargement: true })
          .jpeg({ quality: 80, mozjpeg: true })
          .toFile(extraDest);
        imgIdx++;
      }
      console.log(`  Organized ${imgIdx - 1} extra images as image-1.jpg .. image-${imgIdx - 1}.jpg`);
    } else {
      console.log(`  No images found in folder for ${cfg.slug}. Thumbnail will remain placeholder.`);
    }

    // 2. Process Video
    if (videoFiles.length > 0 && cfg.primaryVideo) {
      const srcVideo = path.join(srcDir, cfg.primaryVideo);
      if (fs.existsSync(srcVideo)) {
        const destVideo = path.join(destDir, 'video.mp4');
        const sizeMb = fs.statSync(srcVideo).size / (1024 * 1024);
        console.log(`  Source video: ${cfg.primaryVideo} (${sizeMb.toFixed(2)} MB)`);

        if (sizeMb > 15) {
          console.log(`  Compressing video to under 15MB with ffmpeg...`);
          const cmd = `ffmpeg -y -i "${srcVideo}" -vf "scale='min(1920,iw)':-2" -vcodec libx264 -crf 24 -preset fast -pix_fmt yuv420p -movflags +faststart "${destVideo}"`;
          execSync(cmd, { stdio: 'inherit' });
        } else {
          console.log(`  Copying video with faststart optimization...`);
          const cmd = `ffmpeg -y -i "${srcVideo}" -c copy -movflags +faststart "${destVideo}"`;
          execSync(cmd, { stdio: 'inherit' });
        }
        const outSize = fs.statSync(destVideo).size / (1024 * 1024);
        console.log(`  Final video.mp4 size: ${outSize.toFixed(2)} MB`);
      }
    } else {
      console.log(`  No video file for ${cfg.slug}.`);
    }
  }
  console.log('\nAll media successfully imported and processed!');
}

processAll().catch(err => {
  console.error(err);
  process.exit(1);
});
