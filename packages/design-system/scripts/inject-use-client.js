import fg from 'fast-glob';
import fs from 'fs/promises';

const jsFiles = await fg(['dist/@components/**/!(*chunk*|index).@(js|cjs)']);

for (const jsFile of jsFiles) {
  const code = await fs.readFile(jsFile, 'utf8');

  if (code.includes('use client')) {
    const newCode = `"use client";${code.replaceAll("'use client';", '').replaceAll('"use client";', '')}`;
    await fs.writeFile(jsFile, newCode);
    console.log(`[✅] Injected "use client" into ${jsFile}`);
  }
}
