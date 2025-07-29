// // import fg from 'fast-glob';
// // import fs from 'fs/promises';
// // import path from 'path';

// // const jsFiles = await fg(['dist/@components/**/*.{js,cjs}', 'dist/@core/**/*.{js,cjs}']);

// // for (const jsFile of jsFiles) {
// //   const dir = path.dirname(jsFile);

// //   const cssFile = `index.css`;
// //   const cssPath = path.join(dir, cssFile);

// //   try {
// //     await fs.access(cssPath); // throws if not exists
// //   } catch {
// //     continue; // skip if css doesn't exist
// //   }

// //   const code = await fs.readFile(jsFile, 'utf8');

// //   const importStmt = jsFile.endsWith('.cjs') ? `require('./${cssFile}');` : `import './${cssFile}';`;

// //   if (!code.includes(importStmt)) {
// //     await fs.writeFile(jsFile, `${importStmt}\n${code}`);
// //     console.log(`[✅] Injected ${cssPath} into ${jsFile}`);
// //   }
// // }

// import fg from 'fast-glob';
// import fs from 'fs/promises';
// import path from 'path';

// // const jsFiles = await fg(['dist/@components/**/*.{js,cjs}', 'dist/@core/**/*.{js,cjs}']);
// const jsFiles = await fg(['dist/@components/**/index.{js,cjs}', 'dist/@core/**/index.{js,cjs}']);

// for (const jsFile of jsFiles) {
//   const dir = path.dirname(jsFile);

//   const cssFile = `index.css`;
//   const cssPath = path.join(dir, cssFile);

//   try {
//     await fs.access(cssPath); // throws if not exists
//   } catch {
//     continue; // skip if css doesn't exist
//   }

//   const code = await fs.readFile(jsFile, 'utf8');

//   const importStmt = jsFile.endsWith('.cjs') ? `require('./${cssFile}');` : `import './${cssFile}';`;

//   if (!code.includes(importStmt)) {
//     await fs.writeFile(jsFile, `${importStmt}\n${code}`);
//     console.log(`[✅] Injected ${cssPath} into ${jsFile}`);
//   }
// }
