const fs = require('fs');
const path = require('path');

const CONTENT_PDF_DIR = path.join(__dirname, '../Content/PDFS');
const PROJECTS_PATH = path.join(__dirname, '../data/projects.ts');

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

// Build map: slug -> category
const slugToCat = {};

const folders = fs.readdirSync(CONTENT_PDF_DIR);
folders.forEach(folder => {
  const fullFolder = path.join(CONTENT_PDF_DIR, folder);
  if (!fs.statSync(fullFolder).isDirectory()) return;

  let cat = 'case-studies';
  if (folder.includes('Market Research')) {
    cat = 'market-research';
  } else if (folder.includes('Projects & Case Studies')) {
    cat = 'case-studies';
  } else if (folder.includes('Campaigns, Analytics & Results')) {
    cat = 'campaigns-analytics';
  }

  const files = fs.readdirSync(fullFolder).filter(f => f.endsWith('.pdf'));
  files.forEach(f => {
    const slug = slugify(cleanTitle(f));
    slugToCat[slug] = cat;
  });
});

console.log('Category mapping count:', Object.keys(slugToCat).length);

// Now update data/projects.ts
let projectsFile = fs.readFileSync(PROJECTS_PATH, 'utf8');

let updatedCount = 0;
for (const [slug, category] of Object.entries(slugToCat)) {
  // Regex to match project block by slug
  const regex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?category:\\s*)['"][^'"]+['"]`, 'g');
  if (regex.test(projectsFile)) {
    projectsFile = projectsFile.replace(regex, `$1'${category}'`);
    updatedCount++;
  }
}

fs.writeFileSync(PROJECTS_PATH, projectsFile, 'utf8');
console.log(`Updated ${updatedCount} projects with their specific folder category!`);
