// // // import fs from 'fs';
// // // import path from 'path';

// // // const TARGET_DIRS = [path.resolve(process.cwd(), 'dist/@components'), path.resolve(process.cwd(), 'dist/@core')];

// // // const walk = dir =>
// // //   fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
// // //     const fullPath = path.join(dir, entry.name);
// // //     return entry.isDirectory() ? walk(fullPath) : [fullPath];
// // //   });

// // // const injectCssImports = baseDir => {
// // //   const files = walk(baseDir);

// // //   const grouped = files.reduce((acc, file) => {
// // //     const ext = path.extname(file);
// // //     const base = path.basename(file, ext);
// // //     const dir = path.dirname(file);

// // //     if (!ext) return acc;

// // //     const key = path.join(dir, base);
// // //     acc[key] = acc[key] || {};
// // //     acc[key][ext] = file;
// // //     return acc;
// // //   }, {});

// // //   for (const key in grouped) {
// // //     const { '.js': jsFile, '.cjs': cjsFile, '.mjs': mjsFile, '.css': cssFile } = grouped[key] || {};
// // //     if (!cssFile) continue;

// // //     const cssFileName = path.basename(cssFile);
// // //     const importRequirePath = `./${cssFileName}`;

// // //     // CommonJS
// // //     if (cjsFile) {
// // //       const contents = fs.readFileSync(cjsFile, 'utf8');
// // //       const requireLine = `require('${importRequirePath}');`;
// // //       if (!contents.includes(requireLine)) {
// // //         fs.writeFileSync(cjsFile, `${requireLine}\n${contents}`);
// // //         console.log(`[Injected CJS] ${path.relative(baseDir, cjsFile)}`);
// // //       }
// // //     }

// // //     // ESM (either mjs or js without cjs)
// // //     const esmFile = mjsFile || (jsFile && !cjsFile);
// // //     if (esmFile) {
// // //       const contents = fs.readFileSync(esmFile, 'utf8');
// // //       const importLine = `import '${importRequirePath}';`;
// // //       if (!contents.includes(importLine)) {
// // //         fs.writeFileSync(esmFile, `${importLine}\n${contents}`);
// // //         console.log(`[Injected ESM] ${path.relative(baseDir, esmFile)}`);
// // //       }
// // //     }
// // //   }
// // // };

// // // for (const dir of TARGET_DIRS) {
// // //   if (fs.existsSync(dir)) {
// // //     injectCssImports(dir);
// // //   } else {
// // //     console.warn(`[Skip] ${dir} does not exist.`);
// // //   }
// // // }

// // import fs from 'fs/promises';
// // import path from 'path';

// // const distRoot = './dist';

// // async function injectCssImports(dir) {
// //   const entries = await fs.readdir(dir, { withFileTypes: true });

// //   for (const entry of entries) {
// //     const fullPath = path.join(dir, entry.name);

// //     if (entry.isDirectory()) {
// //       await injectCssImports(fullPath);
// //     } else if (entry.isFile() && /\.(js|cjs)$/.test(entry.name)) {
// //       const jsFile = entry.name;
// //       const cssFile = jsFile.replace(/\.(js|cjs)$/, '.css');
// //       const cssPath = path.join(dir, cssFile);

// //       try {
// //         await fs.access(cssPath); // Check if matching CSS exists
// //       } catch {
// //         continue;
// //       }

// //       const jsPath = path.join(dir, jsFile);
// //       let content = await fs.readFile(jsPath, 'utf8');

// //       const alreadyInjected = content.includes(`./${cssFile}`);
// //       if (alreadyInjected) continue;

// //       const isCJS = jsFile.endsWith('.cjs');
// //       const importLine = isCJS ? `require('./${cssFile}');\n` : `import './${cssFile}';\n`;

// //       await fs.writeFile(jsPath, importLine + content, 'utf8');
// //       console.log(`✔ Injected CSS (${cssFile}) into ${jsPath}`);
// //     }
// //   }
// // }

// // await injectCssImports(distRoot);

// // // async function injectCssIntoIndexes(dir) {
// // //   const entries = await fs.readdir(dir, { withFileTypes: true });

// // //   let cssFile = null;

// // //   // First pass: check for *.client.css
// // //   for (const entry of entries) {
// // //     if (entry.isFile() && entry.name.endsWith('.css')) {
// // //       cssFile = entry.name;
// // //       break;
// // //     }
// // //   }

// // //   // Second pass: inject CSS into index.js/cjs
// // //   for (const entry of entries) {
// // //     if (!cssFile) break;
// // //     if (!entry.isFile()) continue;

// // //     const fileName = entry.name;
// // //     const isJS = fileName === 'index.js';
// // //     const isCJS = fileName === 'index.cjs';

// // //     if (!isJS && !isCJS) continue;

// // //     const filePath = path.join(dir, fileName);
// // //     let content = await fs.readFile(filePath, 'utf8');
// // //     const importPath = `./${cssFile}`;

// // //     const alreadyInjected = content.includes(importPath);
// // //     if (alreadyInjected) continue;

// // //     const importLine = isCJS ? `require('${importPath}');\n` : `import '${importPath}';\n`;

// // //     await fs.writeFile(filePath, importLine + content, 'utf8');
// // //     console.log(`✔ Injected ${cssFile} into ${fileName}`);
// // //   }

// // //   // Recurse into subfolders
// // //   for (const entry of entries) {
// // //     if (entry.isDirectory()) {
// // //       await injectCssIntoIndexes(path.join(dir, entry.name));
// // //     }
// // //   }
// // // }
// // // await injectCssIntoIndexes(distRoot);

// // import fg from 'fast-glob';
// // import fs from 'fs/promises';
// // import path from 'path';

// // const files = await fg('dist/@components/**/index.@(js|cjs|mjs)', { dot: false });

// // for (const jsFile of files) {
// //   const dir = path.dirname(jsFile);
// //   const cssFiles = await fg(['*.css'], { cwd: dir });

// //   for (const cssFile of cssFiles) {
// //     const jsCode = await fs.readFile(jsFile, 'utf8');
// //     const importStatement = jsFile.endsWith('.cjs') ? `require('./${cssFile}');` : `import './${cssFile}';`;

// //     // Avoid duplicate injection
// //     if (!jsCode.includes(importStatement)) {
// //       const newCode = `${importStatement}\n${jsCode}`;
// //       await fs.writeFile(jsFile, newCode);
// //       console.log(`[✅] Injected ${cssFile} into ${jsFile}`);
// //     }
// //   }
// // }

// // scripts/inject-css.js
// import fg from 'fast-glob';
// import fs from 'fs/promises';
// import path from 'path';

// const toKebabCase = str =>
//   str
//     .replace(/([a-z])([A-Z])/g, '$1-$2')
//     .replace(/[\s_]+/g, '-')
//     .toLowerCase();

// // const jsFiles = await fg([
// //   'dist/@components/**/!(*chunk*|index).@(js|cjs)',
// //   'dist/@core/**/!(*chunk*|index).@(js|cjs)',
// // ]);

// const jsFiles = await fg(['dist/@components/**/!(*chunk*).@(js|cjs)', 'dist/@core/**/!(*chunk*).@(js|cjs)']);

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
