const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const katex = require('katex');

// 1. Load KaTeX CSS for embedding into self-contained HTML
const katexCssPath = path.join(__dirname, '../node_modules/katex/dist/katex.min.css');
const katexCss = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf8') : '';

// 2. Import formula list
const { ALL_MATH_ITEMS, SYMBOL_ITEMS, GREEK_ITEMS } = require('./formula-data');

const categoryTitles = {
  structures: '1. Basic Mathematical Structures, Radicals & Notations',
  algebra: '2. Algebra, Factoring, Series, Finance & Conic Geometry',
  calculus: '3. Calculus, Series Expansions, Differential Equations & Vector Calculus',
  matrices: '4. Linear Algebra, Matrix Operations & Vector Spaces',
  trig: '5. Trigonometry, Analytic Identities & Logarithmic Functions',
  physics: '6. Classical, Electromagnetic, Thermodynamic & Quantum Physics',
  chemistry: '7. Stoichiometry, Chemical Kinetics, Thermodynamics & Electrochemistry',
  biology: '8. Population Genetics, Enzymology, Ecology, Physiology & Biophysics',
  stats: '9. Probability, Inferential Statistics & Artificial Intelligence / Machine Learning',
  symbols: '10. Mathematical Operators, Relations, Sets, Logic & Arrows',
  greek: '11. The Complete Greek Alphabet (Lowercase & Uppercase)',
};

const categories = ['structures', 'algebra', 'calculus', 'matrices', 'trig', 'physics', 'chemistry', 'biology', 'stats'];

let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>StackEditor - Complete Mathematical & Scientific Formula Catalog</title>
  <style>
    ${katexCss}

    @page {
      size: A4 portrait;
      margin: 14mm 12mm 14mm 12mm;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      background: #ffffff;
      margin: 0;
      padding: 0;
      font-size: 11pt;
      line-height: 1.45;
    }

    /* Cover / Header */
    .catalog-header {
      border-bottom: 3px solid #2563eb;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .catalog-title {
      font-size: 20pt;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 4px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .catalog-subtitle {
      font-size: 10pt;
      color: #64748b;
      margin: 0;
    }

    .catalog-badge {
      background: #eff6ff;
      color: #2563eb;
      border: 1px solid #bfdbfe;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 9pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Category Section */
    .category-section {
      margin-bottom: 24px;
      page-break-inside: auto;
    }

    .category-heading {
      font-size: 12.5pt;
      font-weight: 700;
      color: #1e3a8a;
      background: #f1f5f9;
      padding: 6px 10px;
      border-left: 4px solid #2563eb;
      border-radius: 0 4px 4px 0;
      margin: 18px 0 10px 0;
      page-break-after: avoid;
    }

    /* Formula Table */
    table.formula-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 12px;
      page-break-inside: auto;
    }

    table.formula-table tr {
      page-break-inside: avoid;
      page-break-after: auto;
    }

    table.formula-table th {
      background: #f8fafc;
      color: #475569;
      font-size: 9pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 6px 8px;
      border: 1px solid #cbd5e1;
      text-align: left;
    }

    table.formula-table td {
      padding: 6px 8px;
      border: 1px solid #e2e8f0;
      vertical-align: middle;
      font-size: 9.5pt;
    }

    table.formula-table tr:nth-child(even) {
      background: #fafafa;
    }

    .formula-name {
      font-weight: 600;
      color: #0f172a;
      font-size: 9.5pt;
    }

    .formula-desc {
      font-size: 8pt;
      color: #64748b;
      margin-top: 2px;
    }

    .formula-display {
      text-align: center;
      padding: 6px;
      background: #ffffff;
      font-size: 11pt;
    }

    .formula-latex {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
      font-size: 8pt;
      color: #0f766e;
      background: #f0fdf4;
      padding: 3px 6px;
      border-radius: 3px;
      border: 1px solid #dcfce7;
      word-break: break-all;
    }

    /* Symbols Grid */
    .symbols-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 6px;
      margin-bottom: 14px;
      page-break-inside: avoid;
    }

    .symbol-card {
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 6px 4px;
      text-align: center;
      background: #ffffff;
      page-break-inside: avoid;
    }

    .symbol-char {
      font-size: 13pt;
      font-weight: bold;
      color: #0f172a;
      margin-bottom: 2px;
    }

    .symbol-latex {
      font-family: monospace;
      font-size: 7.5pt;
      color: #2563eb;
    }

    .symbol-desc {
      font-size: 7pt;
      color: #64748b;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Footer */
    .catalog-footer {
      border-top: 1px solid #cbd5e1;
      padding-top: 8px;
      margin-top: 20px;
      font-size: 8pt;
      color: #94a3b8;
      display: flex;
      justify-content: space-between;
    }
  </style>
</head>
<body>

  <!-- Cover Header -->
  <div class="catalog-header">
    <div>
      <h1 class="catalog-title">∑ StackEditor Formula Reference Catalog</h1>
      <p class="catalog-subtitle">Comprehensive All-Level Mathematical, Physical, Chemical, Biological & Statistical Equation Library</p>
    </div>
    <div class="catalog-badge">v1.1.0 Official</div>
  </div>
`;

// Render discipline sections
categories.forEach((catKey) => {
  const items = ALL_MATH_ITEMS.filter((m) => m.category === catKey);
  if (items.length === 0) return;

  htmlContent += `
  <div class="category-section">
    <div class="category-heading">${categoryTitles[catKey] || catKey}</div>
    <table class="formula-table">
      <thead>
        <tr>
          <th style="width: 28%;">Concept / Formula Name</th>
          <th style="width: 38%; text-align: center;">Rendered Mathematical Output</th>
          <th style="width: 34%;">LaTeX Code</th>
        </tr>
      </thead>
      <tbody>
  `;

  items.forEach((item) => {
    let renderedKatex = '';
    try {
      renderedKatex = katex.renderToString(item.latex, {
        throwOnError: false,
        displayMode: item.isPreset ? true : false,
      });
    } catch {
      renderedKatex = item.latex;
    }

    htmlContent += `
        <tr>
          <td>
            <div class="formula-name">${item.name}</div>
            ${item.desc ? `<div class="formula-desc">${item.desc}</div>` : ''}
          </td>
          <td class="formula-display">${renderedKatex}</td>
          <td><code class="formula-latex">${escapeHtml(item.latex)}</code></td>
        </tr>
    `;
  });

  htmlContent += `
      </tbody>
    </table>
  </div>
  `;
});

// Render Symbols Section
htmlContent += `
  <div class="category-section">
    <div class="category-heading">${categoryTitles['symbols']}</div>
    <div class="symbols-grid">
`;

SYMBOL_ITEMS.forEach((sym) => {
  htmlContent += `
      <div class="symbol-card">
        <div class="symbol-char">${sym.label}</div>
        <div class="symbol-latex">${escapeHtml(sym.latex)}</div>
        <div class="symbol-desc" title="${sym.desc}">${sym.desc}</div>
      </div>
  `;
});

htmlContent += `
    </div>
  </div>
`;

// Render Greek Alphabet Section
htmlContent += `
  <div class="category-section">
    <div class="category-heading">${categoryTitles['greek']}</div>
    <div class="symbols-grid">
`;

GREEK_ITEMS.forEach((g) => {
  htmlContent += `
      <div class="symbol-card">
        <div class="symbol-char">${g.label}</div>
        <div class="symbol-latex">${escapeHtml(g.latex)}</div>
        <div class="symbol-desc">${g.name} (${g.isUpper ? 'Upper' : 'Lower'})</div>
      </div>
  `;
});

htmlContent += `
    </div>
  </div>

  <div class="catalog-footer">
    <span>StackEditor • Enterprise-Grade Free & Open Source Rich Text Editor</span>
    <span>Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} • GitHub: Shivira-Stack/StackEditor</span>
  </div>

</body>
</html>
`;

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 3. Write HTML reference file
const docsDir = path.join(__dirname, '../docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

const htmlFilePath = path.join(docsDir, 'StackEditor_Complete_Formula_Catalog.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
console.log(`✓ HTML catalog written to ${htmlFilePath}`);

// 4. Compile PDF using Microsoft Edge headless
const pdfOutputPath = path.join(__dirname, '../StackEditor_Complete_Formula_Catalog.pdf');
const pdfDocsPath = path.join(docsDir, 'StackEditor_Complete_Formula_Catalog.pdf');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browserExe = fs.existsSync(edgePath) ? edgePath : (fs.existsSync(chromePath) ? chromePath : null);

if (browserExe) {
  try {
    console.log(`Generating PDF via ${path.basename(browserExe)}...`);
    const cmd = `"${browserExe}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfOutputPath}" "${htmlFilePath}"`;
    execSync(cmd, { stdio: 'inherit' });
    if (fs.existsSync(pdfOutputPath)) {
      fs.copyFileSync(pdfOutputPath, pdfDocsPath);
      console.log(`✓ PDF successfully generated at: ${pdfOutputPath}`);
      console.log(`✓ Copy also created at: ${pdfDocsPath}`);
    }
  } catch (err) {
    console.error('Error generating PDF:', err.message);
  }
} else {
  console.log('Browser binary not found. HTML catalog is available in docs/');
}
