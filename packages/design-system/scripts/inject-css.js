/** 스타일시트가 dist 폴더에 import되지 않음*/
import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';

const jsFiles = await fg(['dist/@components/**/*.{js,cjs}', 'dist/@core/**/*.{js,cjs}']);

for (const jsFile of jsFiles) {
  const dir = path.dirname(jsFile);

  const cssFile = jsFile.replace(jsFile.endsWith('.cjs') ? '.cjs' : '.js', '.css').replace(dir, '');

  const cssPath = path.join(dir, cssFile);

  try {
    await fs.access(cssPath); // throws if not exists
  } catch {
    continue; // skip if css doesn't exist
  }

  const code = await fs.readFile(jsFile, 'utf8');

  const importStmt = jsFile.endsWith('.cjs') ? `require('.${cssFile}');` : `import '.${cssFile}';`;

  if (!code.includes(importStmt)) {
    await fs.writeFile(jsFile, `${importStmt}${code}`);
    console.log(`[🍀] Injected ${cssFile} into ${jsFile}`);
  }
}
