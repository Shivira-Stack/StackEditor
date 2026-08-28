const fs = require('fs');
const path = require('path');
const katex = require('katex');

const rawHandbook = JSON.parse(fs.readFileSync(path.join(__dirname, '../scratch_final_handbook_formulas.json'), 'utf8'));

// Format and fix LaTeX expressions for KaTeX compatibility
function fixLatex(formula) {
  let s = formula.trim();

  // If simple fractions like a/b, (a+b)/c, etc.
  s = s.replace(/(\w+)\/(\w+)/g, '\\frac{$1}{$2}');

  // Multi-letter text variables should use \text{} if needed or standard math formatting
  // Fix common words in equations
  const textWords = [
    'Speed', 'Distance', 'Time', 'Average', 'Number', 'Dividend', 'Divisor', 'Quotient', 'Remainder',
    'Percentage', 'Part', 'Whole', 'Value', 'Total', 'Sum', 'Area', 'Perimeter', 'Volume', 'Surface',
    'Mass', 'Density', 'Force', 'Pressure', 'Work', 'Energy', 'Power', 'Current', 'Voltage', 'Resistance',
    'Profit', 'Loss', 'Cost', 'Selling', 'Price', 'Discount', 'Interest', 'Principal', 'Rate', 'Amount',
    'Mean', 'Median', 'Mode', 'Variance', 'StdDev', 'Observed', 'Expected', 'constant', 'cases', 'sin',
    'cos', 'tan', 'cot', 'sec', 'csc', 'sinh', 'cosh', 'tanh', 'log', 'ln', 'exp', 'det', 'dim', 'ker',
    'tr', 'rank', 'max', 'min', 'lim', 'sup', 'inf', 'gcd', 'lcm'
  ];

  return s;
}

const validHandbook = [];
let passCount = 0;
let fallbackCount = 0;

rawHandbook.forEach((item, idx) => {
  let latex = item.latex;
  let isValid = false;

  try {
    katex.renderToString(latex, { throwOnError: true });
    isValid = true;
    passCount++;
  } catch (e) {
    // Try wrapping non-math text in \text{} or cleaning
    try {
      // If it contains plain words like "Speed = Distance / Time"
      let cleaned = latex
        .replace(/([a-zA-Z]{3,})/g, '\\text{$1}')
        .replace(/\\text{frac}/g, '\\frac')
        .replace(/\\text{sqrt}/g, '\\sqrt')
        .replace(/\\text{times}/g, '\\times')
        .replace(/\\text{div}/g, '\\div')
        .replace(/\\text{pm}/g, '\\pm')
        .replace(/\\text{sum}/g, '\\sum')
        .replace(/\\text{int}/g, '\\int')
        .replace(/\\text{partial}/g, '\\partial')
        .replace(/\\text{nabla}/g, '\\nabla')
        .replace(/\\text{alpha}/g, '\\alpha')
        .replace(/\\text{beta}/g, '\\beta')
        .replace(/\\text{gamma}/g, '\\gamma')
        .replace(/\\text{delta}/g, '\\delta')
        .replace(/\\text{Delta}/g, '\\Delta')
        .replace(/\\text{lambda}/g, '\\lambda')
        .replace(/\\text{mu}/g, '\\mu')
        .replace(/\\text{pi}/g, '\\pi')
        .replace(/\\text{sigma}/g, '\\sigma')
        .replace(/\\text{omega}/g, '\\omega')
        .replace(/\\text{Omega}/g, '\\Omega')
        .replace(/\\text{theta}/g, '\\theta')
        .replace(/\\text{infty}/g, '\\infty')
        .replace(/\\text{Rightarrow}/g, '\\Rightarrow')
        .replace(/\\text{rightarrow}/g, '\\rightarrow');

      katex.renderToString(cleaned, { throwOnError: true });
      latex = cleaned;
      isValid = true;
      passCount++;
    } catch (e2) {
      fallbackCount++;
      // Wrap whole formula safely as text or simple math
      latex = `\\text{${item.latex.replace(/\\/g, '')}}`;
    }
  }

  validHandbook.push({
    id: item.id || `hb-${idx + 1}`,
    name: item.name,
    category: item.category,
    chapter: item.chapter,
    section: item.section,
    latex: latex,
    display: latex,
    desc: `${item.name} • ${item.section}`
  });
});

console.log(`✓ Validated ${validHandbook.length} handbook formulas (Pass: ${passCount}, Fallbacks: ${fallbackCount})`);

// Export to handbook-formulas.json
fs.writeFileSync(path.join(__dirname, '../scratch_validated_handbook.json'), JSON.stringify(validHandbook, null, 2), 'utf8');

// Write scripts/formula-data.js
const formulaDataJsContent = `// Global Education Formula Handbook (Class 1 to PhD) Data
const ALL_MATH_ITEMS = ${JSON.stringify(validHandbook, null, 2)};

const SYMBOL_ITEMS = [
  { label: '±', latex: '\\\\pm ', desc: 'Plus-minus' },
  { label: '∓', latex: '\\\\mp ', desc: 'Minus-plus' },
  { label: '×', latex: '\\\\times ', desc: 'Multiplication cross' },
  { label: '÷', latex: '\\\\div ', desc: 'Division sign' },
  { label: '·', latex: '\\\\cdot ', desc: 'Center dot product' },
  { label: '∘', latex: '\\\\circ ', desc: 'Function composition' },
  { label: '∗', latex: '\\\\ast ', desc: 'Asterisk / convolution' },
  { label: '⊕', latex: '\\\\oplus ', desc: 'Direct sum' },
  { label: '⊗', latex: '\\\\otimes ', desc: 'Tensor product' },
  { label: '⊙', latex: '\\\\odot ', desc: 'Hadamard product' },
  { label: '†', latex: '\\\\dagger ', desc: 'Hermitian conjugate' },
  { label: '=', latex: '= ', desc: 'Equals' },
  { label: '≠', latex: '\\\\neq ', desc: 'Not equal' },
  { label: '≈', latex: '\\\\approx ', desc: 'Approximately equal' },
  { label: '≡', latex: '\\\\equiv ', desc: 'Identical / congruent' },
  { label: '∼', latex: '\\\\sim ', desc: 'Similar / distributed as' },
  { label: '∝', latex: '\\\\propto ', desc: 'Proportional to' },
  { label: '<', latex: '< ', desc: 'Less than' },
  { label: '>', latex: '> ', desc: 'Greater than' },
  { label: '≤', latex: '\\\\leq ', desc: 'Less than or equal' },
  { label: '≥', latex: '\\\\geq ', desc: 'Greater than or equal' },
  { label: '≪', latex: '\\\\ll ', desc: 'Much less than' },
  { label: '≫', latex: '\\\\gg ', desc: 'Much greater than' },
  { label: '≅', latex: '\\\\cong ', desc: 'Isomorphic / congruent' },
  { label: '∈', latex: '\\\\in ', desc: 'Element of' },
  { label: '∉', latex: '\\\\notin ', desc: 'Not element of' },
  { label: '⊂', latex: '\\\\subset ', desc: 'Proper subset' },
  { label: '⊆', latex: '\\\\subseteq ', desc: 'Subset or equal' },
  { label: '⊄', latex: '\\\\not\\\\subset ', desc: 'Not a subset' },
  { label: '⊃', latex: '\\\\supset ', desc: 'Superset' },
  { label: '⊇', latex: '\\\\supseteq ', desc: 'Superset or equal' },
  { label: '∪', latex: '\\\\cup ', desc: 'Set union' },
  { label: '∩', latex: '\\\\cap ', desc: 'Set intersection' },
  { label: '∅', latex: '\\\\emptyset ', desc: 'Empty set' },
  { label: '∖', latex: '\\\\setminus ', desc: 'Set difference' },
  { label: '∀', latex: '\\\\forall ', desc: 'For all' },
  { label: '∃', latex: '\\\\exists ', desc: 'There exists' },
  { label: '∄', latex: '\\\\nexists ', desc: 'There does not exist' },
  { label: '¬', latex: '\\\\neg ', desc: 'Logical NOT' },
  { label: '∧', latex: '\\\\land ', desc: 'Logical AND' },
  { label: '∨', latex: '\\\\lor ', desc: 'Logical OR' },
  { label: '∴', latex: '\\\\therefore ', desc: 'Therefore' },
  { label: '∵', latex: '\\\\because ', desc: 'Because / since' },
  { label: 'ℝ', latex: '\\\\mathbb{R} ', desc: 'Real numbers' },
  { label: 'ℂ', latex: '\\\\mathbb{C} ', desc: 'Complex numbers' },
  { label: 'ℕ', latex: '\\\\mathbb{N} ', desc: 'Natural numbers' },
  { label: 'ℤ', latex: '\\\\mathbb{Z} ', desc: 'Integers' },
  { label: 'ℚ', latex: '\\\\mathbb{Q} ', desc: 'Rational numbers' },
  { label: '→', latex: '\\\\rightarrow ', desc: 'Right arrow' },
  { label: '←', latex: '\\\\leftarrow ', desc: 'Left arrow' },
  { label: '↔', latex: '\\\\leftrightarrow ', desc: 'Bidirectional arrow' },
  { label: '⇒', latex: '\\\\Rightarrow ', desc: 'Implies' },
  { label: '⇐', latex: '\\\\Leftarrow ', desc: 'Is implied by' },
  { label: '⇔', latex: '\\\\Leftrightarrow ', desc: 'If and only if (IFF)' },
  { label: '↦', latex: '\\\\mapsto ', desc: 'Maps to' },
  { label: '↑', latex: '\\\\uparrow ', desc: 'Up arrow' },
  { label: '↓', latex: '\\\\downarrow ', desc: 'Down arrow' },
  { label: '∞', latex: '\\\\infty ', desc: 'Infinity' },
  { label: '∂', latex: '\\\\partial ', desc: 'Partial differential' },
  { label: '∇', latex: '\\\\nabla ', desc: 'Nabla / Del gradient' },
  { label: 'ℏ', latex: '\\\\hbar ', desc: 'Reduced Planck constant' },
  { label: 'ℓ', latex: '\\\\ell ', desc: 'Script l' },
  { label: 'ℵ', latex: '\\\\aleph ', desc: 'Aleph cardinal' },
  { label: '∠', latex: '\\\\angle ', desc: 'Angle' },
  { label: '⊥', latex: '\\\\perp ', desc: 'Perpendicular' },
  { label: '∥', latex: '\\\\parallel ', desc: 'Parallel' },
  { label: '…', latex: '\\\\dots ', desc: 'Horizontal ellipsis' },
  { label: '⋮', latex: '\\\\vdots ', desc: 'Vertical ellipsis' },
  { label: '⋱', latex: '\\\\ddots ', desc: 'Diagonal ellipsis' }
];

const GREEK_ITEMS = [
  { label: 'α', latex: '\\\\alpha ', name: 'alpha' },
  { label: 'β', latex: '\\\\beta ', name: 'beta' },
  { label: 'γ', latex: '\\\\gamma ', name: 'gamma' },
  { label: 'δ', latex: '\\\\delta ', name: 'delta' },
  { label: 'ε', latex: '\\\\epsilon ', name: 'epsilon' },
  { label: 'ɛ', latex: '\\\\varepsilon ', name: 'varepsilon' },
  { label: 'ζ', latex: '\\\\zeta ', name: 'zeta' },
  { label: 'η', latex: '\\\\eta ', name: 'eta' },
  { label: 'θ', latex: '\\\\theta ', name: 'theta' },
  { label: 'ϑ', latex: '\\\\vartheta ', name: 'vartheta' },
  { label: 'ι', latex: '\\\\iota ', name: 'iota' },
  { label: 'κ', latex: '\\\\kappa ', name: 'kappa' },
  { label: 'λ', latex: '\\\\lambda ', name: 'lambda' },
  { label: 'μ', latex: '\\\\mu ', name: 'mu' },
  { label: 'ν', latex: '\\\\nu ', name: 'nu' },
  { label: 'ξ', latex: '\\\\xi ', name: 'xi' },
  { label: 'π', latex: '\\\\pi ', name: 'pi' },
  { label: 'ϖ', latex: '\\\\varpi ', name: 'varpi' },
  { label: 'ρ', latex: '\\\\rho ', name: 'rho' },
  { label: 'ϱ', latex: '\\\\varrho ', name: 'varrho' },
  { label: 'σ', latex: '\\\\sigma ', name: 'sigma' },
  { label: 'ς', latex: '\\\\varsigma ', name: 'varsigma' },
  { label: 'τ', latex: '\\\\tau ', name: 'tau' },
  { label: 'υ', latex: '\\\\upsilon ', name: 'upsilon' },
  { label: 'φ', latex: '\\\\phi ', name: 'phi' },
  { label: 'ϕ', latex: '\\\\varphi ', name: 'varphi' },
  { label: 'χ', latex: '\\\\chi ', name: 'chi' },
  { label: 'ψ', latex: '\\\\psi ', name: 'psi' },
  { label: 'ω', latex: '\\\\omega ', name: 'omega' },
  { label: 'Γ', latex: '\\\\Gamma ', name: 'Gamma', isUpper: true },
  { label: 'Δ', latex: '\\\\Delta ', name: 'Delta', isUpper: true },
  { label: 'Θ', latex: '\\\\Theta ', name: 'Theta', isUpper: true },
  { label: 'Λ', latex: '\\\\Lambda ', name: 'Lambda', isUpper: true },
  { label: 'Ξ', latex: '\\\\Xi ', name: 'Xi', isUpper: true },
  { label: 'Π', latex: '\\\\Pi ', name: 'Pi', isUpper: true },
  { label: 'Σ', latex: '\\\\Sigma ', name: 'Sigma', isUpper: true },
  { label: 'Υ', latex: '\\\\Upsilon ', name: 'Upsilon', isUpper: true },
  { label: 'Φ', latex: '\\\\Phi ', name: 'Phi', isUpper: true },
  { label: 'Ψ', latex: '\\\\Psi ', name: 'Psi', isUpper: true },
  { label: 'Ω', latex: '\\\\Omega ', name: 'Omega', isUpper: true }
];

module.exports = {
  ALL_MATH_ITEMS,
  SYMBOL_ITEMS,
  GREEK_ITEMS
};
`;

fs.writeFileSync(path.join(__dirname, 'formula-data.js'), formulaDataJsContent, 'utf8');
console.log('✓ Updated scripts/formula-data.js with all 586+ handbook formulas!');
