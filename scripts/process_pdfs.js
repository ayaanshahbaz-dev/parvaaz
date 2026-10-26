const fs = require('fs');
const path = require('path');
const pdfPoppler = require('pdf-poppler');
const pdfParse = require('pdf-parse');

const CONTENT_PDF_DIR = path.join(__dirname, '../Content/PDFS');
const PUBLIC_PROJECTS_DIR = path.join(__dirname, '../public/projects');
const PUBLIC_DOCS_DIR = path.join(__dirname, '../public/documents');

if (!fs.existsSync(PUBLIC_DOCS_DIR)) {
  fs.mkdirSync(PUBLIC_DOCS_DIR, { recursive: true });
}

function getAllPdfFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllPdfFiles(fullPath));
    } else if (file.toLowerCase().endsWith('.pdf')) {
      results.push(fullPath);
    }
  });
  return results;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function cleanTitle(rawName) {
  return rawName
    .replace(/^\d+_/, '')
    .replace(/_/g, ' ')
    .replace(/\.pdf$/i, '')
    .trim();
}

async function processPdf(filePath) {
  const fileName = path.basename(filePath);
  const title = cleanTitle(fileName);
  const slug = slugify(title);

  console.log(`Processing: ${title} (${slug})`);

  // Copy PDF to public/documents
  const publicPdfName = `${slug}.pdf`;
  const destPdfPath = path.join(PUBLIC_DOCS_DIR, publicPdfName);
  fs.copyFileSync(filePath, destPdfPath);

  // Read PDF text
  const dataBuffer = fs.readFileSync(filePath);
  let parsedText = '';
  let pageCount = 1;
  try {
    const data = await pdfParse(dataBuffer);
    parsedText = data.text || '';
    pageCount = data.numpages || 1;
  } catch (err) {
    console.warn(`Text parse error for ${fileName}:`, err.message);
  }

  // Create project assets directory
  const projectDir = path.join(PUBLIC_PROJECTS_DIR, slug);
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }

  // Convert pages (up to 4 pages for preview showcase)
  const pagesToConvert = Math.min(pageCount, 4);
  const imagePaths = [];
  
  for (let p = 1; p <= pagesToConvert; p++) {
    const prefix = `page-${p}`;
    try {
      await pdfPoppler.convert(filePath, {
        format: 'jpeg',
        out_dir: projectDir,
        out_prefix: prefix,
        page: p
      });
      // pdf-poppler saves as prefix-pageNumber.jpg or prefix-1.jpg
      const genFiles = fs.readdirSync(projectDir).filter(f => f.startsWith(prefix) && f.endsWith('.jpg'));
      if (genFiles.length > 0) {
        const standardName = p === 1 ? 'thumbnail.jpg' : `image-${p}.jpg`;
        const oldPath = path.join(projectDir, genFiles[0]);
        const newPath = path.join(projectDir, standardName);
        if (oldPath !== newPath) {
          if (fs.existsSync(newPath)) fs.unlinkSync(newPath);
          fs.renameSync(oldPath, newPath);
        }
        if (p === 1) {
          // also keep an image-1.jpg copy
          fs.copyFileSync(newPath, path.join(projectDir, 'image-1.jpg'));
        }
        imagePaths.push(`/projects/${slug}/${standardName}`);
      }
    } catch (e) {
      console.warn(`Could not render page ${p} for ${slug}:`, e.message);
    }
  }

  return {
    slug,
    title,
    fileName,
    filePath,
    pdfUrl: `/documents/${publicPdfName}`,
    thumbnail: `/projects/${slug}/thumbnail.jpg`,
    images: imagePaths.length > 0 ? imagePaths : [`/projects/${slug}/thumbnail.jpg`],
    pageCount,
    textSample: parsedText.slice(0, 1500).replace(/\s+/g, ' ').trim()
  };
}

async function run() {
  const allPdfs = getAllPdfFiles(CONTENT_PDF_DIR);
  console.log(`Found ${allPdfs.length} PDFs.`);
  const results = [];

  for (const p of allPdfs) {
    try {
      const res = await processPdf(p);
      results.push(res);
    } catch (err) {
      console.error(`Failed ${p}:`, err);
    }
  }

  fs.writeFileSync(
    path.join(__dirname, 'extracted_pdfs.json'),
    JSON.stringify(results, null, 2)
  );
  console.log(`Successfully extracted ${results.length} PDFs to extracted_pdfs.json`);
}

run().catch(console.error);
