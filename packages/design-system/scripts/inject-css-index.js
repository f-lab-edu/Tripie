import fs from 'fs/promises';
import path from 'path';

const distRoot = './dist';

async function injectCssIntoIndexes(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  let cssFile = null;

  // First pass: check for *.client.css
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.css')) {
      cssFile = entry.name;
      break;
    }
  }

  // Second pass: inject CSS into index.js/cjs
  for (const entry of entries) {
    if (!cssFile) break;
    if (!entry.isFile()) continue;

    const fileName = entry.name;
    const isJS = fileName === 'index.js';
    const isCJS = fileName === 'index.cjs';

    if (!isJS && !isCJS) continue;

    const filePath = path.join(dir, fileName);
    let content = await fs.readFile(filePath, 'utf8');
    const importPath = `./${cssFile}`;

    const alreadyInjected = content.includes(importPath);
    if (alreadyInjected) continue;

    const importLine = isCJS ? `require('${importPath}');\n` : `import '${importPath}';\n`;

    await fs.writeFile(filePath, importLine + content, 'utf8');
    console.log(`✔ Injected ${cssFile} into ${fileName}`);
  }

  // Recurse into subfolders
  for (const entry of entries) {
    if (entry.isDirectory()) {
      await injectCssIntoIndexes(path.join(dir, entry.name));
    }
  }
}

await injectCssIntoIndexes(distRoot);
