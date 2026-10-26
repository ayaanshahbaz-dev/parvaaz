const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CONTENT_PDF_DIR = path.join(__dirname, '../Content/PDFS');
const PUBLIC_PROJECTS_DIR = path.join(__dirname, '../public/projects');
const PUBLIC_DOCS_DIR = path.join(__dirname, '../public/documents');
const POPPLER_BIN = path.join(__dirname, '../node_modules/pdf-poppler/lib/win/poppler-0.51/bin');
const PDFTOCAIRO = path.join(POPPLER_BIN, 'pdftocairo.exe');
const PDFTOTEXT = path.join(POPPLER_BIN, 'pdftotext.exe');

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
    .replace(/\(\d+\)/g, '')
    .trim();
}

function determineIndustry(text, title) {
  const t = (title + ' ' + text).toLowerCase();
  if (t.includes('dental') || t.includes('clinic') || t.includes('skincare') || t.includes('fitness')) {
    return 'Healthcare';
  }
  if (t.includes('real estate') || t.includes('property') || t.includes('housing')) {
    return 'Real Estate';
  }
  if (t.includes('finance') || t.includes('trading') || t.includes('bank') || t.includes('b2b saas') || t.includes('business model')) {
    return 'Finance';
  }
  if (t.includes('grocery') || t.includes('fashion') || t.includes('lego') || t.includes('d2c') || t.includes('ecommerce') || t.includes('tea') || t.includes('restaurant')) {
    return 'E-commerce';
  }
  return 'Content Creation';
}

function extractKeyMetrics(text) {
  const results = [];
  // look for percentage or multiplier or numbers
  const pctMatches = text.match(/(\+?\d+%\s*[\w\s]{4,28})/gi) || [];
  const numMatches = text.match(/(\d+[kKmMbB]?\+?\s*[\w\s]{4,28})/gi) || [];

  for (const m of pctMatches.slice(0, 3)) {
    const parts = m.trim().split(/\s+/);
    const val = parts[0];
    const lbl = parts.slice(1).join(' ').slice(0, 32);
    if (lbl.length > 3 && !results.some(r => r.value === val)) {
      results.push({ value: val, label: lbl });
    }
  }

  if (results.length < 3) {
    results.push({ value: '100%', label: 'Data-driven strategy execution' });
  }
  if (results.length < 3) {
    results.push({ value: 'Strategic', label: 'Multi-channel competitive audit' });
  }
  if (results.length < 3) {
    results.push({ value: 'Actionable', label: 'Implementation roadmap deliverable' });
  }

  return results.slice(0, 3);
}

function extractProblemSolution(text, title) {
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 20);
  
  let challenge = `Organizations facing competitive pressures require rigorous analysis to overcome market saturation, audience disconnects, and unoptimized multi-channel engagement strategies.`;
  let solution = `Delivered an in-depth strategic analysis and execution framework for ${title}, covering customer psychology, competitive intelligence, content operations, and conversion-focused growth systems.`;

  // Find paragraphs that look like overview or problem
  const problemKeywords = ['problem', 'challenge', 'objective', 'overview', 'context'];
  const solutionKeywords = ['solution', 'strategy', 'framework', 'approach', 'execution', 'recommendation'];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lower = line.toLowerCase();
    if (problemKeywords.some(k => lower.includes(k)) && lines[i + 1]) {
      challenge = lines[i + 1].slice(0, 280) + '...';
      break;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lower = line.toLowerCase();
    if (solutionKeywords.some(k => lower.includes(k)) && lines[i + 1]) {
      solution = lines[i + 1].slice(0, 320) + '...';
      break;
    }
  }

  return { challenge, solution };
}

function run() {
  const allPdfs = getAllPdfFiles(CONTENT_PDF_DIR);
  console.log(`Found ${allPdfs.length} PDFs to convert.`);
  const extractedProjects = [];

  allPdfs.forEach((pdfPath, index) => {
    const fileName = path.basename(pdfPath);
    const title = cleanTitle(fileName);
    const slug = slugify(title);

    console.log(`[${index + 1}/${allPdfs.length}] Processing ${title}...`);

    // Copy original PDF to public/documents
    const publicPdfName = `${slug}.pdf`;
    const destPdfPath = path.join(PUBLIC_DOCS_DIR, publicPdfName);
    fs.copyFileSync(pdfPath, destPdfPath);

    // Make project dir in public/projects
    const projectDir = path.join(PUBLIC_PROJECTS_DIR, slug);
    if (!fs.existsSync(projectDir)) {
      fs.mkdirSync(projectDir, { recursive: true });
    }

    // Extract text with pdftotext
    const txtOutPath = path.join(projectDir, 'content.txt');
    try {
      execSync(`"${PDFTOTEXT}" "${pdfPath}" "${txtOutPath}"`, { stdio: 'ignore' });
    } catch (e) {}

    let textContent = '';
    if (fs.existsSync(txtOutPath)) {
      textContent = fs.readFileSync(txtOutPath, 'utf8');
      fs.unlinkSync(txtOutPath); // remove temp text file
    }

    // Render first 6 slides to images with pdftocairo
    const slidePrefix = path.join(projectDir, 'slide');
    try {
      execSync(`"${PDFTOCAIRO}" -jpeg -scale-to 1400 -l 6 "${pdfPath}" "${slidePrefix}"`, { stdio: 'ignore' });
    } catch (e) {
      console.warn(`Render warning for ${slug}:`, e.message);
    }

    // Rename slide-1.jpg to thumbnail.jpg and collect slides
    const slideFiles = fs.readdirSync(projectDir).filter(f => f.startsWith('slide-') && f.endsWith('.jpg')).sort((a, b) => {
      const numA = parseInt(a.replace('slide-', '').replace('.jpg', ''), 10);
      const numB = parseInt(b.replace('slide-', '').replace('.jpg', ''), 10);
      return numA - numB;
    });

    const images = [];
    if (slideFiles.length > 0) {
      // Create thumbnail from slide-1
      const firstSlide = path.join(projectDir, slideFiles[0]);
      const thumbPath = path.join(projectDir, 'thumbnail.jpg');
      fs.copyFileSync(firstSlide, thumbPath);

      slideFiles.forEach((file, idx) => {
        const destName = `image-${idx + 1}.jpg`;
        const oldP = path.join(projectDir, file);
        const newP = path.join(projectDir, destName);
        if (oldP !== newP) {
          if (fs.existsSync(newP)) fs.unlinkSync(newP);
          fs.renameSync(oldP, newP);
        }
        images.push(`/projects/${slug}/${destName}`);
      });
    }

    const industry = determineIndustry(textContent, title);
    const { challenge, solution } = extractProblemSolution(textContent, title);
    const results = extractKeyMetrics(textContent);

    let resultLine = `Strategic audit and growth framework analyzing market positioning, audience psychology, and performance optimization.`;
    if (title.toLowerCase().includes('case study')) {
      resultLine = `In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.`;
    } else if (title.toLowerCase().includes('analytics')) {
      resultLine = `Full campaign analytics report detailing KPIs, attribution channels, creative benchmarks, and ROI analysis.`;
    }

    extractedProjects.push({
      slug,
      title,
      resultLine,
      category: 'n8n', // Grouped with Strategy & Automations / Analytics
      industry,
      clientLabel: 'Strategic Case Study',
      clientPublic: true,
      thumbnail: `/projects/${slug}/thumbnail.jpg`,
      images: images.length > 0 ? images : [`/projects/${slug}/thumbnail.jpg`],
      pdfUrl: `/documents/${publicPdfName}`,
      challenge,
      solution,
      tools: [
        'Strategic Research',
        'Data Storytelling',
        'Market Intelligence',
        'Customer Psychology',
        'Auditing & Analytics',
        'Campaign Optimization',
      ],
      results,
      year: '2026',
      featured: false,
    });
  });

  fs.writeFileSync(
    path.join(__dirname, 'extracted_all_pdfs.json'),
    JSON.stringify(extractedProjects, null, 2)
  );

  console.log(`\nSuccessfully processed and rendered all ${extractedProjects.length} PDF projects!`);
}

run();
