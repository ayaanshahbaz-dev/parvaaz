/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const contentDir = path.join(__dirname, '..', 'Content', 'AI videos and Images');
const publicBase = path.join(__dirname, '..', 'public', 'projects');

async function run() {
  const allFiles = fs.readdirSync(contentDir);
  const videoFiles = allFiles.filter(f => f.endsWith('.mp4')).sort();
  const imageFiles = allFiles.filter(f => f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg')).sort();

  console.log(`Found ${videoFiles.length} video ads and ${imageFiles.length} image files.`);

  // 1. Process Video Ads
  const videoProjectsData = [];
  for (let i = 0; i < videoFiles.length; i++) {
    const vFile = videoFiles[i];
    const adNum = i + 1;
    const slug = `video-ad-${adNum}`;
    const destDir = path.join(publicBase, slug);
    fs.mkdirSync(destDir, { recursive: true });

    const srcVideo = path.join(contentDir, vFile);
    const destVideo = path.join(destDir, 'video.mp4');
    const destThumb = path.join(destDir, 'thumbnail.jpg');

    console.log(`[Video Ad ${adNum}] Processing ${vFile}...`);
    // Copy video
    fs.copyFileSync(srcVideo, destVideo);

    // Extract thumbnail frame at 1s
    try {
      execSync(`ffmpeg -y -ss 00:00:01 -i "${srcVideo}" -vframes 1 -q:v 2 "${destThumb}"`, { stdio: 'ignore' });
    } catch {
      // fallback at 0s
      execSync(`ffmpeg -y -ss 00:00:00 -i "${srcVideo}" -vframes 1 -q:v 2 "${destThumb}"`, { stdio: 'ignore' });
    }

    videoProjectsData.push({
      slug,
      title: `Video Ad ${adNum}`,
      resultLine: `High-impact commercial video creative produced with AI cinematography.`,
      category: 'videos-ads',
      industry: 'Content Creation',
      clientLabel: '',
      clientPublic: false,
      thumbnail: `/projects/${slug}/thumbnail.jpg`,
      video: `/projects/${slug}/video.mp4`,
      challenge: `Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.`,
      solution: `Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.`,
      tools: ['AI Video Generation', 'Midjourney', 'Runway', 'FFmpeg', 'Creative Direction'],
      results: [],
      year: '2026',
      featured: false,
      order: 10 + adNum,
    });
  }

  // 2. Group Image Ads by brand/subject
  function getGroupKey(name) {
    if (name.includes('7.11.40 PM')) return 'Pearl Oasis Restaurant';
    if (name.includes('7.12.48 PM')) return 'Fruitien Juice';
    if (name.includes('7.14.49 PM')) return 'Minsa Glow Sunscreen';
    if (name.includes('7.15.05 PM') || name.includes('7.15.06 PM')) return 'Parvaaz AI Chatbot';
    if (/crispy.*chicken/i.test(name)) return 'Crispy Fried Chicken Feast';

    let base = name.replace(/\.(png|jpe?g)$/i, '').trim();
    base = base.replace(/\s*\(\d+\)$/, '').trim();
    base = base.replace(/\s+\d+$/, '').trim();
    return base;
  }

  const imageGroups = {};
  imageFiles.forEach(f => {
    const k = getGroupKey(f);
    if (!imageGroups[k]) imageGroups[k] = [];
    imageGroups[k].push(f);
  });

  const sortedGroupKeys = Object.keys(imageGroups).sort();
  const imageProjectsData = [];

  for (let i = 0; i < sortedGroupKeys.length; i++) {
    const groupName = sortedGroupKeys[i];
    const groupItems = imageGroups[groupName].sort();
    const adNum = i + 1;
    const slug = `image-ad-${adNum}`;
    const destDir = path.join(publicBase, slug);
    fs.mkdirSync(destDir, { recursive: true });

    console.log(`[Image Ad ${adNum} - ${groupName}] Processing ${groupItems.length} images...`);

    // Primary thumbnail from first image
    const primaryImg = groupItems[0];
    const thumbDest = path.join(destDir, 'thumbnail.jpg');
    await sharp(path.join(contentDir, primaryImg))
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(thumbDest);

    const projectImages = [];
    // Convert all images into the project folder
    for (let imgIdx = 0; imgIdx < groupItems.length; imgIdx++) {
      const srcImg = groupItems[imgIdx];
      const outName = `image-${imgIdx + 1}.jpg`;
      const outDest = path.join(destDir, outName);
      await sharp(path.join(contentDir, srcImg))
        .resize({ width: 1600, withoutEnlargement: true })
        .jpeg({ quality: 84, mozjpeg: true })
        .toFile(outDest);
      projectImages.push(`/projects/${slug}/${outName}`);
    }

    imageProjectsData.push({
      slug,
      title: groupName,
      resultLine: `Creative commercial product advertisement and campaign visual design.`,
      category: 'videos-ads',
      industry: 'E-commerce',
      clientLabel: '',
      clientPublic: false,
      thumbnail: `/projects/${slug}/thumbnail.jpg`,
      images: projectImages,
      challenge: `Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.`,
      solution: `Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.`,
      tools: ['AI Image Generation', 'Photoshop', 'Midjourney', 'Digital Creative Direction'],
      results: [],
      year: '2026',
      featured: false,
      order: 30 + adNum,
    });
  }

  // Output JSON for merging
  fs.writeFileSync(
    path.join(__dirname, 'new_ads_data.json'),
    JSON.stringify({ videoProjectsData, imageProjectsData }, null, 2)
  );

  console.log(`\nSuccessfully processed:`);
  console.log(`- ${videoProjectsData.length} Video Ads (Video Ad 1 to ${videoProjectsData.length})`);
  console.log(`- ${imageProjectsData.length} Image Ad sets (Image Ad 1 to ${imageProjectsData.length})`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
