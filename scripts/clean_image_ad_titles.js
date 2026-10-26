const fs = require('fs');

const filePath = 'data/projects.ts';
let content = fs.readFileSync(filePath, 'utf8');

const regex = /title:\s*"Image Ad \d+\s*[–-]\s*(.*?)"/g;
let count = 0;
const updated = content.replace(regex, (match, brandName) => {
  count++;
  return `title: "${brandName}"`;
});

fs.writeFileSync(filePath, updated, 'utf8');
console.log(`Updated ${count} Image Ad titles in ${filePath}`);
