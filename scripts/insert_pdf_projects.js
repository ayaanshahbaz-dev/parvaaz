const fs = require('fs');
const path = require('path');

const PROJECTS_PATH = path.join(__dirname, '../data/projects.ts');
const EXTRACTED_PATH = path.join(__dirname, 'extracted_all_pdfs.json');

const extracted = JSON.parse(fs.readFileSync(EXTRACTED_PATH, 'utf8'));
let projectsContent = fs.readFileSync(PROJECTS_PATH, 'utf8');

// Read existing project slugs to avoid duplicate insertion
const existingSlugs = new Set();
const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = slugRegex.exec(projectsContent)) !== null) {
  existingSlugs.add(match[1]);
}

const newProjects = extracted.filter(p => !existingSlugs.has(p.slug));
console.log(`Found ${newProjects.length} new PDF projects to insert.`);

if (newProjects.length === 0) {
  console.log('No new projects to add.');
  process.exit(0);
}

// Find highest current order
const orderRegex = /order:\s*(\d+)/g;
let maxOrder = 0;
while ((match = orderRegex.exec(projectsContent)) !== null) {
  const o = parseInt(match[1], 10);
  if (o > maxOrder) maxOrder = o;
}

// Prepare project entries
const entries = newProjects.map((p, idx) => {
  return `  {
    slug: ${JSON.stringify(p.slug)},
    title: ${JSON.stringify(p.title)},
    resultLine: ${JSON.stringify(p.resultLine)},
    category: ${JSON.stringify(p.category)},
    industry: ${JSON.stringify(p.industry)},
    clientLabel: ${JSON.stringify(p.clientLabel)},
    clientPublic: true,
    thumbnail: ${JSON.stringify(p.thumbnail)},
    images: ${JSON.stringify(p.images, null, 6).replace(/\n/g, '\n    ')},
    pdfUrl: ${JSON.stringify(p.pdfUrl)},
    challenge: ${JSON.stringify(p.challenge)},
    solution: ${JSON.stringify(p.solution)},
    tools: ${JSON.stringify(p.tools)},
    results: ${JSON.stringify(p.results, null, 6).replace(/\n/g, '\n    ')},
    year: "2026",
    featured: false,
    order: ${maxOrder + idx + 1},
  },`;
}).join('\n');

// Insert right before the closing `];`
const lastBracket = projectsContent.lastIndexOf('];');
if (lastBracket === -1) {
  throw new Error('Could not locate closing ]; in projects.ts');
}

const updatedContent = projectsContent.slice(0, lastBracket) + entries + '\n' + projectsContent.slice(lastBracket);
fs.writeFileSync(PROJECTS_PATH, updatedContent, 'utf8');
console.log(`Successfully appended ${newProjects.length} PDF projects to projects.ts!`);
