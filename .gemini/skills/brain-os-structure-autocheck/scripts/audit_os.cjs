const fs = require('fs');
const path = require('path');

const rootDir = process.argv[2] || process.cwd();
const foldersToScan = ['01_Concepts', '02_Blueprints', '03_Threads'];
const mocsDir = path.join(rootDir, '04_Meta/MOCs');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (file === 'Attachments') return; // Skip Attachments directory

    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.md')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

console.log(`🔍 Auditing Brain_OS at: ${rootDir}`);

// 1. Collect all notes
let allNotes = [];
foldersToScan.forEach(folder => {
  const fullPath = path.join(rootDir, folder);
  if (fs.existsSync(fullPath)) {
    allNotes = allNotes.concat(getAllFiles(fullPath));
  }
});

// 2. Collect all links from MOCs
const mocFiles = getAllFiles(mocsDir);
const linkedNotes = new Set();
mocFiles.forEach(mocFile => {
  const content = fs.readFileSync(mocFile, 'utf8');
  const links = content.match(/\[\[(.*?)\]\]/g);
  if (links) {
    links.forEach(link => {
      const noteName = link.replace('[[', '').replace(']]', '').split('|')[0].trim();
      linkedNotes.add(noteName);
    });
  }
});

// 3. Check each note
const report = {
  missingMetadata: [],
  orphans: [],
  total: allNotes.length
};

allNotes.forEach(notePath => {
  const relativePath = path.relative(rootDir, notePath);
  const fileName = path.basename(notePath, '.md');
  const content = fs.readFileSync(notePath, 'utf8');

  // Check Metadata
  if (!content.startsWith('---') || !content.includes('id:') || !content.includes('type:')) {
    report.missingMetadata.push(relativePath);
  }

  // Check if Orphan (not in any MOC)
  // We check if the fileName or the relative path without extension is in the linkedNotes set
  const pathWithoutExt = relativePath.replace('.md', '');
  let isLinked = false;
  linkedNotes.forEach(linked => {
    if (relativePath.includes(linked) || linked.includes(fileName)) {
        isLinked = true;
    }
  });

  if (!isLinked) {
    report.orphans.push(relativePath);
  }
});

// 4. Output Results
console.log(`\n📊 Audit Summary:`);
console.log(`Total Notes Scanned: ${report.total}`);

if (report.missingMetadata.length > 0) {
  console.log(`\n❌ Missing/Invalid Metadata (${report.missingMetadata.length}):`);
  report.missingMetadata.forEach(m => console.log(`  - ${m}`));
} else {
  console.log(`\n✅ All files have valid metadata headers.`);
}

if (report.orphans.length > 0) {
  console.log(`\n❌ Orphaned Notes (Not linked in any MOC) (${report.orphans.length}):`);
  report.orphans.forEach(o => console.log(`  - ${o}`));
} else {
  console.log(`\n✅ All notes are correctly indexed in MOCs.`);
}

if (report.missingMetadata.length === 0 && report.orphans.length === 0) {
  console.log(`\n✨ Brain_OS is healthy!`);
} else {
  process.exit(1);
}
