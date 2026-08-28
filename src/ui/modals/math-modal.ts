import { icons } from '../../core/icons';
import type { Editor } from '@tiptap/core';
import katex from 'katex';

export interface MathItem {
  id: string;
  name: string;
  category: string;
  latex: string;
  display: string;
  desc?: string;
  isPreset?: boolean;
}

export const ALL_MATH_ITEMS: MathItem[] = [
  // ==========================================
  // 1. BASIC STRUCTURES & ARITHMETIC
  // ==========================================
  { id: 'frac', name: 'Fraction', category: 'structures', latex: '\\frac{a}{b}', display: '\\frac{a}{b}', desc: 'Standard fraction' },
  { id: 'frac-dx', name: 'Differential Fraction', category: 'structures', latex: '\\frac{dy}{dx}', display: '\\frac{dy}{dx}', desc: 'Derivative ratio' },
  { id: 'sqrt', name: 'Square Root', category: 'structures', latex: '\\sqrt{x}', display: '\\sqrt{x}', desc: 'Square root of x' },
  { id: 'nroot', name: 'N-th Root', category: 'structures', latex: '\\sqrt[n]{x}', display: '\\sqrt[n]{x}', desc: 'N-th radical root' },
  { id: 'pow', name: 'Superscript / Power', category: 'structures', latex: 'x^{n}', display: 'x^{n}', desc: 'Exponent power' },
  { id: 'sub', name: 'Subscript', category: 'structures', latex: 'x_{i}', display: 'x_{i}', desc: 'Index subscript' },
  { id: 'subsup', name: 'Sub & Super', category: 'structures', latex: 'x_{i}^{n}', display: 'x_{i}^{n}', desc: 'Both index and power' },
  { id: 'abs', name: 'Absolute Value', category: 'structures', latex: '\\left| x \\right|', display: '|x|', desc: 'Absolute value / modulus' },
  { id: 'norm', name: 'Vector Norm', category: 'structures', latex: '\\left\\| \\vec{v} \\right\\|', display: '\\|\\vec{v}\\|', desc: 'Magnitude / norm' },
  { id: 'floor', name: 'Floor Function', category: 'structures', latex: '\\lfloor x \\rfloor', display: '\\lfloor x \\rfloor', desc: 'Floor bracket' },
  { id: 'ceil', name: 'Ceiling Function', category: 'structures', latex: '\\lceil x \\rceil', display: '\\lceil x \\rceil', desc: 'Ceiling bracket' },
  { id: 'paren', name: 'Dynamic Parentheses', category: 'structures', latex: '\\left( \\frac{a}{b} \\right)', display: '\\left( \\frac{a}{b} \\right)', desc: 'Auto-sizing round parentheses' },
  { id: 'bracket', name: 'Dynamic Brackets', category: 'structures', latex: '\\left[ \\frac{a}{b} \\right]', display: '\\left[ \\frac{a}{b} \\right]', desc: 'Auto-sizing square brackets' },
  { id: 'brace', name: 'Dynamic Braces', category: 'structures', latex: '\\left\\{ x \\in \\mathbb{R} \\mid x > 0 \\right\\}', display: '\\{ x \\}', desc: 'Auto-sizing curly braces' },
  { id: 'angle', name: 'Angle Brackets (Bra-Ket)', category: 'structures', latex: '\\langle u, v \\rangle', display: '\\langle u, v \\rangle', desc: 'Inner product / Bra-ket' },
  { id: 'cases', name: 'Piecewise / Cases', category: 'structures', latex: 'f(x) = \\begin{cases} x^2 & x \\ge 0 \\\\ -x & x < 0 \\end{cases}', display: '\\begin{cases} a \\\\ b \\end{cases}', desc: 'Piecewise conditional function' },
  { id: 'overline', name: 'Overline / Conjugate', category: 'structures', latex: '\\overline{z}', display: '\\overline{z}', desc: 'Complex conjugate or mean' },
  { id: 'vec', name: 'Vector Arrow', category: 'structures', latex: '\\vec{v}', display: '\\vec{v}', desc: 'Vector arrow over letter' },
  { id: 'hat', name: 'Unit Vector (Hat)', category: 'structures', latex: '\\hat{u}', display: '\\hat{u}', desc: 'Unit vector / estimator' },
  { id: 'dot', name: 'Time Derivative (Dot)', category: 'structures', latex: '\\dot{x}', display: '\\dot{x}', desc: 'First time derivative' },
  { id: 'ddot', name: 'Second Time Derivative (Ddot)', category: 'structures', latex: '\\ddot{x}', display: '\\ddot{x}', desc: 'Second time derivative' },

  // ==========================================
  // 2. CALCULUS & ANALYSIS
  // ==========================================
  { id: 'int-indef', name: 'Indefinite Integral', category: 'calculus', latex: '\\int f(x) \\, dx', display: '\\int f(x) dx', desc: 'Indefinite integration' },
  { id: 'int-def', name: 'Definite Integral', category: 'calculus', latex: '\\int_{a}^{b} f(x) \\, dx', display: '\\int_{a}^{b}', desc: 'Integral from a to b' },
  { id: 'int-double', name: 'Double Integral', category: 'calculus', latex: '\\iint_{D} f(x,y) \\, dx\\,dy', display: '\\iint_{D}', desc: 'Surface double integral' },
  { id: 'int-triple', name: 'Triple Integral', category: 'calculus', latex: '\\iiint_{V} f(x,y,z) \\, dV', display: '\\iiint_{V}', desc: 'Volume triple integral' },
  { id: 'int-contour', name: 'Contour / Closed Integral', category: 'calculus', latex: '\\oint_{C} f(z) \\, dz', display: '\\oint_{C}', desc: 'Closed line integral' },
  { id: 'diff-1', name: 'First Derivative', category: 'calculus', latex: '\\frac{df}{dx}', display: '\\frac{df}{dx}', desc: 'First order derivative' },
  { id: 'diff-2', name: 'Second Derivative', category: 'calculus', latex: '\\frac{d^2 f}{dx^2}', display: '\\frac{d^2 f}{dx^2}', desc: 'Second order derivative' },
  { id: 'diff-part', name: 'Partial Derivative', category: 'calculus', latex: '\\frac{\\partial f}{\\partial x}', display: '\\frac{\\partial f}{\\partial x}', desc: 'Partial derivative wrt x' },
  { id: 'diff-part2', name: 'Second Partial Derivative', category: 'calculus', latex: '\\frac{\\partial^2 f}{\\partial x^2}', display: '\\frac{\\partial^2 f}{\\partial x^2}', desc: 'Second partial derivative' },
  { id: 'diff-mixed', name: 'Mixed Partial Derivative', category: 'calculus', latex: '\\frac{\\partial^2 f}{\\partial x \\partial y}', display: '\\frac{\\partial^2 f}{\\partial x \\partial y}', desc: 'Mixed second partial' },
  { id: 'lim', name: 'Limit', category: 'calculus', latex: '\\lim_{x \\to a} f(x)', display: '\\lim_{x \\to a}', desc: 'Limit as x approaches a' },
  { id: 'lim-inf', name: 'Limit to Infinity', category: 'calculus', latex: '\\lim_{x \\to \\infty} f(x)', display: '\\lim_{x \\to \\infty}', desc: 'Limit as x approaches infinity' },
  { id: 'sum', name: 'Summation with Bounds', category: 'calculus', latex: '\\sum_{i=1}^{n} x_{i}', display: '\\sum_{i=1}^{n}', desc: 'Finite summation series' },
  { id: 'sum-inf', name: 'Infinite Series', category: 'calculus', latex: '\\sum_{n=0}^{\\infty} a_{n} x^n', display: '\\sum_{n=0}^{\\infty}', desc: 'Power series summation' },
  { id: 'prod', name: 'Product Operator', category: 'calculus', latex: '\\prod_{i=1}^{n} x_{i}', display: '\\prod_{i=1}^{n}', desc: 'Product across terms' },
  { id: 'grad', name: 'Gradient (Del)', category: 'calculus', latex: '\\nabla f', display: '\\nabla f', desc: 'Spatial gradient vector' },
  { id: 'div', name: 'Divergence', category: 'calculus', latex: '\\nabla \\cdot \\vec{F}', display: '\\nabla \\cdot \\vec{F}', desc: 'Vector field divergence' },
  { id: 'curl', name: 'Curl / Rotation', category: 'calculus', latex: '\\nabla \\times \\vec{F}', display: '\\nabla \\times \\vec{F}', desc: 'Vector field curl' },
  { id: 'laplacian', name: 'Laplacian', category: 'calculus', latex: '\\nabla^2 f = \\Delta f', display: '\\nabla^2 f', desc: 'Laplace differential operator' },

  // ==========================================
  // 3. LINEAR ALGEBRA & MATRICES
  // ==========================================
  { id: 'mat-2x2', name: '2×2 Parentheses Matrix', category: 'matrices', latex: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}', display: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}', desc: '2x2 round matrix' },
  { id: 'mat-3x3', name: '3×3 Parentheses Matrix', category: 'matrices', latex: '\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}', display: '\\begin{pmatrix} \\dots \\end{pmatrix}', desc: '3x3 round matrix' },
  { id: 'mat-b2x2', name: '2×2 Square Bracket Matrix', category: 'matrices', latex: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}', display: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}', desc: '2x2 square matrix' },
  { id: 'mat-b3x3', name: '3×3 Square Bracket Matrix', category: 'matrices', latex: '\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix}', display: '\\begin{bmatrix} \\dots \\end{bmatrix}', desc: '3x3 square matrix' },
  { id: 'det-2x2', name: '2×2 Determinant', category: 'matrices', latex: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}', display: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}', desc: '2x2 determinant' },
  { id: 'det-3x3', name: '3×3 Determinant', category: 'matrices', latex: '\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{vmatrix}', display: '\\begin{vmatrix} \\dots \\end{vmatrix}', desc: '3x3 determinant' },
  { id: 'col-vec', name: 'Column Vector (3D)', category: 'matrices', latex: '\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}', display: '\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}', desc: '3D coordinate column vector' },
  { id: 'row-vec', name: 'Row Vector (3D)', category: 'matrices', latex: '\\begin{pmatrix} x & y & z \\end{pmatrix}', display: '\\begin{pmatrix} x & y & z \\end{pmatrix}', desc: '1x3 row vector' },
  { id: 'dot-prod', name: 'Dot Product', category: 'matrices', latex: '\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos\\theta', display: '\\vec{u} \\cdot \\vec{v}', desc: 'Vector scalar product' },
  { id: 'cross-prod', name: 'Cross Product', category: 'matrices', latex: '\\vec{u} \\times \\vec{v}', display: '\\vec{u} \\times \\vec{v}', desc: 'Vector cross product' },
  { id: 'trans', name: 'Matrix Transpose', category: 'matrices', latex: 'A^{T}', display: 'A^{T}', desc: 'Transpose of matrix A' },
  { id: 'inv', name: 'Matrix Inverse', category: 'matrices', latex: 'A^{-1}', display: 'A^{-1}', desc: 'Inverse of matrix A' },

  // ==========================================
  // 4. TRIGONOMETRY & FUNCTIONS
  // ==========================================
  { id: 'sin', name: 'Sine', category: 'trig', latex: '\\sin(x)', display: '\\sin(x)', desc: 'Sine function' },
  { id: 'cos', name: 'Cosine', category: 'trig', latex: '\\cos(x)', display: '\\cos(x)', desc: 'Cosine function' },
  { id: 'tan', name: 'Tangent', category: 'trig', latex: '\\tan(x)', display: '\\tan(x)', desc: 'Tangent function' },
  { id: 'csc', name: 'Cosecant', category: 'trig', latex: '\\csc(x)', display: '\\csc(x)', desc: 'Cosecant' },
  { id: 'sec', name: 'Secant', category: 'trig', latex: '\\sec(x)', display: '\\sec(x)', desc: 'Secant' },
  { id: 'cot', name: 'Cotangent', category: 'trig', latex: '\\cot(x)', display: '\\cot(x)', desc: 'Cotangent' },
  { id: 'arcsin', name: 'Inverse Sine (Arcsine)', category: 'trig', latex: '\\arcsin(x)', display: '\\arcsin(x)', desc: 'Arc-sine' },
  { id: 'arccos', name: 'Inverse Cosine (Arccosine)', category: 'trig', latex: '\\arccos(x)', display: '\\arccos(x)', desc: 'Arc-cosine' },
  { id: 'arctan', name: 'Inverse Tangent (Arctangent)', category: 'trig', latex: '\\arctan(x)', display: '\\arctan(x)', desc: 'Arc-tangent' },
  { id: 'sinh', name: 'Hyperbolic Sine', category: 'trig', latex: '\\sinh(x)', display: '\\sinh(x)', desc: 'Hyperbolic sine' },
  { id: 'cosh', name: 'Hyperbolic Cosine', category: 'trig', latex: '\\cosh(x)', display: '\\cosh(x)', desc: 'Hyperbolic cosine' },
  { id: 'tanh', name: 'Hyperbolic Tangent', category: 'trig', latex: '\\tanh(x)', display: '\\tanh(x)', desc: 'Hyperbolic tangent' },
  { id: 'ln', name: 'Natural Logarithm', category: 'trig', latex: '\\ln(x)', display: '\\ln(x)', desc: 'Natural log base e' },
  { id: 'log10', name: 'Base-10 Logarithm', category: 'trig', latex: '\\log_{10}(x)', display: '\\log_{10}(x)', desc: 'Common logarithm' },
  { id: 'logb', name: 'Base-b Logarithm', category: 'trig', latex: '\\log_{b}(x)', display: '\\log_{b}(x)', desc: 'Arbitrary base logarithm' },
  { id: 'exp', name: 'Exponential', category: 'trig', latex: 'e^{x} = \\exp(x)', display: 'e^{x}', desc: 'Exponential function' },

  // ==========================================
  // 5. FAMOUS & POPULAR PRESET FORMULAS
  // ==========================================
  {
    id: 'form-quad',
    name: 'Quadratic Formula',
    category: 'presets',
    latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    display: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    desc: 'Solutions of quadratic equation ax² + bx + c = 0',
    isPreset: true,
  },
  {
    id: 'form-pyth',
    name: 'Pythagorean Theorem',
    category: 'presets',
    latex: 'a^2 + b^2 = c^2',
    display: 'a^2 + b^2 = c^2',
    desc: 'Geometric right triangle side relations',
    isPreset: true,
  },
  {
    id: 'form-euler',
    name: "Euler's Identity",
    category: 'presets',
    latex: 'e^{i\\pi} + 1 = 0',
    display: 'e^{i\\pi} + 1 = 0',
    desc: 'Connection between e, pi, i, 1, and 0',
    isPreset: true,
  },
  {
    id: 'form-mass',
    name: 'Mass-Energy Equivalence',
    category: 'presets',
    latex: 'E = m c^2',
    display: 'E = m c^2',
    desc: "Einstein's theory of special relativity",
    isPreset: true,
  },
  {
    id: 'form-area-circle',
    name: 'Area of Circle',
    category: 'presets',
    latex: 'A = \\pi r^2',
    display: 'A = \\pi r^2',
    desc: 'Circular geometry area formula',
    isPreset: true,
  },
  {
    id: 'form-vol-sphere',
    name: 'Volume of Sphere',
    category: 'presets',
    latex: 'V = \\frac{4}{3}\\pi r^3',
    display: 'V = \\frac{4}{3}\\pi r^3',
    desc: '3D sphere volume formula',
    isPreset: true,
  },
  {
    id: 'form-binom',
    name: 'Binomial Theorem',
    category: 'presets',
    latex: '(x + a)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^k a^{n-k}',
    display: '(x+a)^n = \\sum_{k=0}^n \\binom{n}{k} x^k a^{n-k}',
    desc: 'Polynomial power expansion',
    isPreset: true,
  },
  {
    id: 'form-gauss',
    name: 'Gaussian Integral',
    category: 'presets',
    latex: '\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}',
    display: '\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}',
    desc: 'Integral of gaussian probability density',
    isPreset: true,
  },
  {
    id: 'form-norm-pdf',
    name: 'Normal Distribution PDF',
    category: 'presets',
    latex: 'f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}',
    display: 'f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}',
    desc: 'Gaussian standard distribution probability density',
    isPreset: true,
  },
  {
    id: 'form-bayes',
    name: "Bayes' Theorem",
    category: 'presets',
    latex: 'P(A|B) = \\frac{P(B|A) \\, P(A)}{P(B)}',
    display: 'P(A|B) = \\frac{P(B|A) P(A)}{P(B)}',
    desc: 'Conditional probability inversion formula',
    isPreset: true,
  },
  {
    id: 'form-schrodinger',
    name: 'Schrödinger Wave Equation',
    category: 'presets',
    latex: 'i\\hbar \\frac{\\partial}{\\partial t}\\Psi(\\vec{r}, t) = \\hat{H}\\Psi(\\vec{r}, t)',
    display: 'i\\hbar \\frac{\\partial}{\\partial t}\\Psi = \\hat{H}\\Psi',
    desc: 'Fundamental quantum state time evolution equation',
    isPreset: true,
  },
  {
    id: 'form-heisenberg',
    name: 'Heisenberg Uncertainty Principle',
    category: 'presets',
    latex: '\\sigma_x \\sigma_p \\ge \\frac{\\hbar}{2}',
    display: '\\sigma_x \\sigma_p \\ge \\frac{\\hbar}{2}',
    desc: 'Position and momentum uncertainty lower bound',
    isPreset: true,
  },
  {
    id: 'form-taylor',
    name: 'Taylor Series Expansion',
    category: 'presets',
    latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x - a)^n',
    display: 'f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!} (x-a)^n',
    desc: 'Infinite polynomial approximation about point a',
    isPreset: true,
  },
  {
    id: 'form-fourier',
    name: 'Fourier Transform',
    category: 'presets',
    latex: '\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx',
    display: '\\hat{f}(\\xi) = \\int_{-\\infty}^\\infty f(x) e^{-2\\pi i x \\xi} dx',
    desc: 'Time to frequency domain continuous transform',
    isPreset: true,
  },
  {
    id: 'form-maxwell-gauss',
    name: "Gauss's Law (Maxwell)",
    category: 'presets',
    latex: '\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}',
    display: '\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}',
    desc: 'Electric field flux divergence in electromagnetism',
    isPreset: true,
  },
  {
    id: 'form-law-cos',
    name: 'Law of Cosines',
    category: 'presets',
    latex: 'c^2 = a^2 + b^2 - 2ab \\cos(\\gamma)',
    display: 'c^2 = a^2 + b^2 - 2ab \\cos(\\gamma)',
    desc: 'Generalized triangle law for non-right triangles',
    isPreset: true,
  },
  {
    id: 'form-sample-var',
    name: 'Sample Variance & Std Dev',
    category: 'presets',
    latex: 's^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
    display: 's^2 = \\frac{1}{n-1}\\sum_{i=1}^n (x_i-\\bar{x})^2',
    desc: 'Unbiased sample variance estimator',
    isPreset: true,
  },
  {
    id: 'form-ideal-gas',
    name: 'Ideal Gas Law',
    category: 'presets',
    latex: 'P V = n R T',
    display: 'P V = n R T',
    desc: 'Thermodynamic pressure-volume-temperature relation',
    isPreset: true,
  },
];

export const SYMBOL_ITEMS: { label: string; latex: string; category: string; desc: string }[] = [
  // Operators
  { label: '±', latex: '\\pm ', category: 'operators', desc: 'Plus-minus' },
  { label: '∓', latex: '\\mp ', category: 'operators', desc: 'Minus-plus' },
  { label: '×', latex: '\\times ', category: 'operators', desc: 'Multiplication cross' },
  { label: '÷', latex: '\\div ', category: 'operators', desc: 'Division sign' },
  { label: '·', latex: '\\cdot ', category: 'operators', desc: 'Center dot product' },
  { label: '∘', latex: '\\circ ', category: 'operators', desc: 'Function composition' },
  { label: '∗', latex: '\\ast ', category: 'operators', desc: 'Asterisk / convolution' },
  { label: '⊕', latex: '\\oplus ', category: 'operators', desc: 'Direct sum' },
  { label: '⊗', latex: '\\otimes ', category: 'operators', desc: 'Tensor product' },
  { label: '⊙', latex: '\\odot ', category: 'operators', desc: 'Hadamard product' },
  { label: '†', latex: '\\dagger ', category: 'operators', desc: 'Hermitian conjugate' },

  // Relations & Inequalities
  { label: '=', latex: '= ', category: 'relations', desc: 'Equals' },
  { label: '≠', latex: '\\neq ', category: 'relations', desc: 'Not equal' },
  { label: '≈', latex: '\\approx ', category: 'relations', desc: 'Approximately equal' },
  { label: '≡', latex: '\\equiv ', category: 'relations', desc: 'Identical / congruent' },
  { label: '∼', latex: '\\sim ', category: 'relations', desc: 'Similar / distributed as' },
  { label: '∝', latex: '\\propto ', category: 'relations', desc: 'Proportional to' },
  { label: '<', latex: '< ', category: 'relations', desc: 'Less than' },
  { label: '>', latex: '> ', category: 'relations', desc: 'Greater than' },
  { label: '≤', latex: '\\leq ', category: 'relations', desc: 'Less than or equal' },
  { label: '≥', latex: '\\geq ', category: 'relations', desc: 'Greater than or equal' },
  { label: '≪', latex: '\\ll ', category: 'relations', desc: 'Much less than' },
  { label: '≫', latex: '\\gg ', category: 'relations', desc: 'Much greater than' },
  { label: '≅', latex: '\\cong ', category: 'relations', desc: 'Isomorphic / congruent' },

  // Sets & Logic
  { label: '∈', latex: '\\in ', category: 'sets', desc: 'Element of' },
  { label: '∉', latex: '\\notin ', category: 'sets', desc: 'Not element of' },
  { label: '⊂', latex: '\\subset ', category: 'sets', desc: 'Proper subset' },
  { label: '⊆', latex: '\\subseteq ', category: 'sets', desc: 'Subset or equal' },
  { label: '⊄', latex: '\\not\\subset ', category: 'sets', desc: 'Not a subset' },
  { label: '⊃', latex: '\\supset ', category: 'sets', desc: 'Superset' },
  { label: '⊇', latex: '\\supseteq ', category: 'sets', desc: 'Superset or equal' },
  { label: '∪', latex: '\\cup ', category: 'sets', desc: 'Set union' },
  { label: '∩', latex: '\\cap ', category: 'sets', desc: 'Set intersection' },
  { label: '∅', latex: '\\emptyset ', category: 'sets', desc: 'Empty set' },
  { label: '∖', latex: '\\setminus ', category: 'sets', desc: 'Set difference' },
  { label: '∀', latex: '\\forall ', category: 'sets', desc: 'For all' },
  { label: '∃', latex: '\\exists ', category: 'sets', desc: 'There exists' },
  { label: '∄', latex: '\\nexists ', category: 'sets', desc: 'There does not exist' },
  { label: '¬', latex: '\\neg ', category: 'sets', desc: 'Logical NOT' },
  { label: '∧', latex: '\\land ', category: 'sets', desc: 'Logical AND' },
  { label: '∨', latex: '\\lor ', category: 'sets', desc: 'Logical OR' },
  { label: '∴', latex: '\\therefore ', category: 'sets', desc: 'Therefore' },
  { label: '∵', latex: '\\because ', category: 'sets', desc: 'Because / since' },
  { label: 'ℝ', latex: '\\mathbb{R} ', category: 'sets', desc: 'Real numbers' },
  { label: 'ℂ', latex: '\\mathbb{C} ', category: 'sets', desc: 'Complex numbers' },
  { label: 'ℕ', latex: '\\mathbb{N} ', category: 'sets', desc: 'Natural numbers' },
  { label: 'ℤ', latex: '\\mathbb{Z} ', category: 'sets', desc: 'Integers' },
  { label: 'ℚ', latex: '\\mathbb{Q} ', category: 'sets', desc: 'Rational numbers' },

  // Arrows
  { label: '→', latex: '\\rightarrow ', category: 'arrows', desc: 'Right arrow' },
  { label: '←', latex: '\\leftarrow ', category: 'arrows', desc: 'Left arrow' },
  { label: '↔', latex: '\\leftrightarrow ', category: 'arrows', desc: 'Bidirectional arrow' },
  { label: '⇒', latex: '\\Rightarrow ', category: 'arrows', desc: 'Implies' },
  { label: '⇐', latex: '\\Leftarrow ', category: 'arrows', desc: 'Is implied by' },
  { label: '⇔', latex: '\\Leftrightarrow ', category: 'arrows', desc: 'If and only if (IFF)' },
  { label: '↦', latex: '\\mapsto ', category: 'arrows', desc: 'Maps to' },
  { label: '↑', latex: '\\uparrow ', category: 'arrows', desc: 'Up arrow' },
  { label: '↓', latex: '\\downarrow ', category: 'arrows', desc: 'Down arrow' },

  // Miscellaneous & Calculus Signs
  { label: '∞', latex: '\\infty ', category: 'misc', desc: 'Infinity' },
  { label: '∂', latex: '\\partial ', category: 'misc', desc: 'Partial differential' },
  { label: '∇', latex: '\\nabla ', category: 'misc', desc: 'Nabla / Del gradient' },
  { label: 'ℏ', latex: '\\hbar ', category: 'misc', desc: 'Reduced Planck constant' },
  { label: 'ℓ', latex: '\\ell ', category: 'misc', desc: 'Script l' },
  { label: 'ℵ', latex: '\\aleph ', category: 'misc', desc: 'Aleph cardinal' },
  { label: '∠', latex: '\\angle ', category: 'misc', desc: 'Angle' },
  { label: '⊥', latex: '\\perp ', category: 'misc', desc: 'Perpendicular' },
  { label: '∥', latex: '\\parallel ', category: 'misc', desc: 'Parallel' },
  { label: '…', latex: '\\dots ', category: 'misc', desc: 'Horizontal ellipsis' },
  { label: '⋮', latex: '\\vdots ', category: 'misc', desc: 'Vertical ellipsis' },
  { label: '⋱', latex: '\\ddots ', category: 'misc', desc: 'Diagonal ellipsis' },
];

export const GREEK_ITEMS: { label: string; latex: string; name: string; isUpper?: boolean }[] = [
  // Lowercase
  { label: 'α', latex: '\\alpha ', name: 'alpha' },
  { label: 'β', latex: '\\beta ', name: 'beta' },
  { label: 'γ', latex: '\\gamma ', name: 'gamma' },
  { label: 'δ', latex: '\\delta ', name: 'delta' },
  { label: 'ε', latex: '\\epsilon ', name: 'epsilon' },
  { label: 'ɛ', latex: '\\varepsilon ', name: 'varepsilon' },
  { label: 'ζ', latex: '\\zeta ', name: 'zeta' },
  { label: 'η', latex: '\\eta ', name: 'eta' },
  { label: 'θ', latex: '\\theta ', name: 'theta' },
  { label: 'ϑ', latex: '\\vartheta ', name: 'vartheta' },
  { label: 'ι', latex: '\\iota ', name: 'iota' },
  { label: 'κ', latex: '\\kappa ', name: 'kappa' },
  { label: 'λ', latex: '\\lambda ', name: 'lambda' },
  { label: 'μ', latex: '\\mu ', name: 'mu' },
  { label: 'ν', latex: '\\nu ', name: 'nu' },
  { label: 'ξ', latex: '\\xi ', name: 'xi' },
  { label: 'π', latex: '\\pi ', name: 'pi' },
  { label: 'ϖ', latex: '\\varpi ', name: 'varpi' },
  { label: 'ρ', latex: '\\rho ', name: 'rho' },
  { label: 'ϱ', latex: '\\varrho ', name: 'varrho' },
  { label: 'σ', latex: '\\sigma ', name: 'sigma' },
  { label: 'ς', latex: '\\varsigma ', name: 'varsigma' },
  { label: 'τ', latex: '\\tau ', name: 'tau' },
  { label: 'υ', latex: '\\upsilon ', name: 'upsilon' },
  { label: 'φ', latex: '\\phi ', name: 'phi' },
  { label: 'ϕ', latex: '\\varphi ', name: 'varphi' },
  { label: 'χ', latex: '\\chi ', name: 'chi' },
  { label: 'ψ', latex: '\\psi ', name: 'psi' },
  { label: 'ω', latex: '\\omega ', name: 'omega' },

  // Uppercase
  { label: 'Γ', latex: '\\Gamma ', name: 'Gamma', isUpper: true },
  { label: 'Δ', latex: '\\Delta ', name: 'Delta', isUpper: true },
  { label: 'Θ', latex: '\\Theta ', name: 'Theta', isUpper: true },
  { label: 'Λ', latex: '\\Lambda ', name: 'Lambda', isUpper: true },
  { label: 'Ξ', latex: '\\Xi ', name: 'Xi', isUpper: true },
  { label: 'Π', latex: '\\Pi ', name: 'Pi', isUpper: true },
  { label: 'Σ', latex: '\\Sigma ', name: 'Sigma', isUpper: true },
  { label: 'Υ', latex: '\\Upsilon ', name: 'Upsilon', isUpper: true },
  { label: 'Φ', latex: '\\Phi ', name: 'Phi', isUpper: true },
  { label: 'Ψ', latex: '\\Psi ', name: 'Psi', isUpper: true },
  { label: 'Ω', latex: '\\Omega ', name: 'Omega', isUpper: true },
];

export class MathModal {
  private backdrop: HTMLElement;
  private editor: Editor;
  private currentTab = 'structures';
  private searchQuery = '';

  constructor(editor: Editor) {
    this.editor = editor;
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'nova-modal-backdrop';
  }

  public show(): void {
    // Check if user selected text in the editor canvas
    const selectedText = this.editor.state.doc.textBetween(
      this.editor.state.selection.from,
      this.editor.state.selection.to,
      ' '
    ).trim();

    const initialFormula = selectedText || 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}';

    this.backdrop.innerHTML = `
      <div class="nova-modal nova-math-modal" style="max-width: 780px; width: 95vw;">
        <!-- Header -->
        <div class="nova-modal-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 20px; color: var(--ne-accent); font-weight: bold; line-height: 1;">∑</span>
            <h3 class="nova-modal-title">Math & Scientific Equation Builder</h3>
          </div>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>

        <!-- Body -->
        <div class="nova-modal-body" style="gap: 10px; padding: 14px 20px;">
          <!-- Search & Filter Bar -->
          <div style="display: flex; gap: 8px; align-items: center;">
            <input type="text" id="ne-math-search" class="nova-form-input" placeholder="🔍 Search formula, symbol, or structure (e.g. integral, matrix, sqrt, bayes, beta, sin)..." style="font-size: 12.5px; padding: 7px 10px; flex: 1;" />
          </div>

          <!-- Category Tabs -->
          <div class="nova-math-tabs" id="ne-math-tab-bar">
            <button type="button" class="nova-math-tab-btn is-active" data-tab="structures">📐 Structures</button>
            <button type="button" class="nova-math-tab-btn" data-tab="calculus">📈 Calculus</button>
            <button type="button" class="nova-math-tab-btn" data-tab="matrices">🔢 Matrices</button>
            <button type="button" class="nova-math-tab-btn" data-tab="trig">📐 Functions & Trig</button>
            <button type="button" class="nova-math-tab-btn" data-tab="presets">📚 Popular Formulas</button>
            <button type="button" class="nova-math-tab-btn" data-tab="symbols">🔣 Symbols</button>
            <button type="button" class="nova-math-tab-btn" data-tab="greek">🏛️ Greek</button>
          </div>

          <!-- Tab Content Panels Container -->
          <div id="ne-math-panels-container" class="nova-math-panel-wrapper">
            <!-- Panels injected dynamically -->
          </div>

          <!-- Live KaTeX Equation Preview -->
          <div class="nova-form-group" style="margin-top: 2px;">
            <label class="nova-form-label" style="display: flex; justify-content: space-between; align-items: center;">
              <span>Live Equation Preview</span>
              <span style="font-size: 11px; font-weight: normal; color: var(--ne-text-muted);">Real-time KaTeX Output</span>
            </label>
            <div id="ne-math-preview" class="nova-math-preview-box"></div>
          </div>

          <!-- LaTeX Expression Textarea -->
          <div class="nova-form-group">
            <label class="nova-form-label">LaTeX Code</label>
            <textarea class="nova-form-textarea" id="ne-math-input" placeholder="Type LaTeX formula or click any template above..." style="min-height: 65px; font-size: 13.5px; font-family: var(--ne-font-mono);">${initialFormula}</textarea>
          </div>

          <!-- Equation Mode & Clear -->
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; gap: 18px; align-items: center;">
              <label style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; cursor: pointer;">
                <input type="radio" name="ne-math-type" value="block" checked /> Block Equation (Centered)
              </label>
              <label style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; cursor: pointer;">
                <input type="radio" name="ne-math-type" value="inline" /> Inline Equation
              </label>
            </div>
            <button type="button" class="nova-btn-secondary" id="ne-math-clear" style="padding: 4px 10px; font-size: 12px;">Clear Code</button>
          </div>
        </div>

        <!-- Footer -->
        <div class="nova-modal-footer">
          <button type="button" class="nova-btn-secondary" data-action="close">Cancel</button>
          <button type="button" class="nova-btn-primary" data-action="save">Insert Equation</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    const input = this.backdrop.querySelector('#ne-math-input') as HTMLTextAreaElement;
    const preview = this.backdrop.querySelector('#ne-math-preview') as HTMLElement;
    const searchInput = this.backdrop.querySelector('#ne-math-search') as HTMLInputElement;
    const panelsContainer = this.backdrop.querySelector('#ne-math-panels-container') as HTMLElement;
    const radios = this.backdrop.querySelectorAll('input[name="ne-math-type"]');
    const tabBtns = this.backdrop.querySelectorAll('.nova-math-tab-btn');

    // Live preview update
    const updatePreview = () => {
      const formula = input.value.trim();
      if (!formula) {
        preview.innerHTML = `<span style="color: var(--ne-text-muted); font-size: 13px; font-style: italic;">Equation preview will appear here...</span>`;
        return;
      }
      try {
        katex.render(formula, preview, {
          throwOnError: false,
          displayMode: true,
        });
      } catch {
        preview.innerHTML = `<span style="color: var(--ne-danger); font-size: 12px;">Syntax error in LaTeX equation</span>`;
      }
    };

    // Helper to insert LaTeX at cursor position in textarea
    const insertAtCursor = (textToInsert: string) => {
      const start = input.selectionStart;
      const end = input.selectionEnd;
      const val = input.value;
      input.value = val.substring(0, start) + textToInsert + val.substring(end);
      input.selectionStart = input.selectionEnd = start + textToInsert.length;
      input.focus();
      updatePreview();
    };

    // Helper to replace whole formula (for full presets)
    const replaceFormula = (fullLatex: string) => {
      input.value = fullLatex;
      input.focus();
      updatePreview();
    };

    // Render panels based on activeTab and searchQuery
    const renderActivePanel = () => {
      const q = this.searchQuery.toLowerCase().trim();

      // If user typed in search bar, show matching results across all categories
      if (q) {
        const mathMatches = ALL_MATH_ITEMS.filter(
          (m) =>
            m.name.toLowerCase().includes(q) ||
            m.latex.toLowerCase().includes(q) ||
            (m.desc && m.desc.toLowerCase().includes(q))
        );
        const symMatches = SYMBOL_ITEMS.filter(
          (s) =>
            s.label.toLowerCase().includes(q) ||
            s.latex.toLowerCase().includes(q) ||
            s.desc.toLowerCase().includes(q)
        );
        const greekMatches = GREEK_ITEMS.filter(
          (g) => g.name.toLowerCase().includes(q) || g.label.toLowerCase().includes(q)
        );

        let html = `<div class="nova-math-panel"><div style="font-size: 12px; color: var(--ne-text-muted); margin-bottom: 6px;">Search results for "${q}":</div>`;

        if (mathMatches.length === 0 && symMatches.length === 0 && greekMatches.length === 0) {
          html += `<div style="padding: 20px; text-align: center; color: var(--ne-text-muted); font-size: 13px;">No matching formulas or symbols found.</div></div>`;
          panelsContainer.innerHTML = html;
          return;
        }

        if (mathMatches.length > 0) {
          html += `<div class="nova-math-grid-templates" style="margin-bottom: 10px;">`;
          mathMatches.forEach((m, idx) => {
            html += `
              <button type="button" class="nova-math-card" data-act="${m.isPreset ? 'replace' : 'insert'}" data-latex="${encodeURIComponent(m.latex)}" title="${m.name}: ${m.desc || ''}">
                <div class="nova-math-card-preview" id="search-math-${idx}"></div>
                <span class="nova-math-card-label">${m.name}</span>
              </button>
            `;
          });
          html += `</div>`;
        }

        if (symMatches.length > 0 || greekMatches.length > 0) {
          html += `<div class="nova-math-grid-symbols">`;
          symMatches.forEach((s) => {
            html += `<button type="button" class="nova-math-sym-btn" data-act="insert" data-latex="${encodeURIComponent(s.latex)}" title="${s.desc} (${s.latex})">${s.label}</button>`;
          });
          greekMatches.forEach((g) => {
            html += `<button type="button" class="nova-math-sym-btn" data-act="insert" data-latex="${encodeURIComponent(g.latex)}" title="${g.name} (${g.latex})">${g.label}</button>`;
          });
          html += `</div>`;
        }

        html += `</div>`;
        panelsContainer.innerHTML = html;

        // Render KaTeX previews in search results
        mathMatches.forEach((m, idx) => {
          const el = panelsContainer.querySelector(`#search-math-${idx}`) as HTMLElement;
          if (el) {
            try {
              katex.render(m.display, el, { throwOnError: false, displayMode: false });
            } catch {}
          }
        });

        bindItemClicks();
        return;
      }

      // Normal Category Tab Views
      if (this.currentTab === 'symbols') {
        const categories = [
          { name: 'Operators & Arithmetic', filter: 'operators' },
          { name: 'Relations & Inequalities', filter: 'relations' },
          { name: 'Sets & Mathematical Logic', filter: 'sets' },
          { name: 'Arrows & Mapping', filter: 'arrows' },
          { name: 'Calculus & Physics Signs', filter: 'misc' },
        ];

        let html = `<div class="nova-math-panel">`;
        categories.forEach((cat) => {
          const items = SYMBOL_ITEMS.filter((s) => s.category === cat.filter);
          html += `
            <div style="font-size: 11.5px; font-weight: 600; color: var(--ne-text-muted); margin: 6px 0 4px;">${cat.name}</div>
            <div class="nova-math-grid-symbols" style="margin-bottom: 6px;">
              ${items
                .map(
                  (s) => `
                <button type="button" class="nova-math-sym-btn" data-act="insert" data-latex="${encodeURIComponent(s.latex)}" title="${s.desc} (${s.latex})">
                  ${s.label}
                </button>
              `
                )
                .join('')}
            </div>
          `;
        });
        html += `</div>`;
        panelsContainer.innerHTML = html;
        bindItemClicks();
        return;
      }

      if (this.currentTab === 'greek') {
        const lower = GREEK_ITEMS.filter((g) => !g.isUpper);
        const upper = GREEK_ITEMS.filter((g) => g.isUpper);

        panelsContainer.innerHTML = `
          <div class="nova-math-panel">
            <div style="font-size: 11.5px; font-weight: 600; color: var(--ne-text-muted); margin: 4px 0 4px;">Lowercase Greek Letters</div>
            <div class="nova-math-grid-symbols" style="margin-bottom: 8px;">
              ${lower
                .map(
                  (g) => `
                <button type="button" class="nova-math-sym-btn" data-act="insert" data-latex="${encodeURIComponent(g.latex)}" title="${g.name} (${g.latex})">
                  ${g.label}
                </button>
              `
                )
                .join('')}
            </div>
            <div style="font-size: 11.5px; font-weight: 600; color: var(--ne-text-muted); margin: 4px 0 4px;">Uppercase Greek Letters</div>
            <div class="nova-math-grid-symbols">
              ${upper
                .map(
                  (g) => `
                <button type="button" class="nova-math-sym-btn" data-act="insert" data-latex="${encodeURIComponent(g.latex)}" title="${g.name} (${g.latex})">
                  ${g.label}
                </button>
              `
                )
                .join('')}
            </div>
          </div>
        `;
        bindItemClicks();
        return;
      }

      if (this.currentTab === 'presets') {
        const presets = ALL_MATH_ITEMS.filter((m) => m.category === 'presets');
        panelsContainer.innerHTML = `
          <div class="nova-math-panel">
            <div class="nova-math-grid-presets">
              ${presets
                .map(
                  (p, idx) => `
                <button type="button" class="nova-math-preset-card" data-act="replace" data-latex="${encodeURIComponent(p.latex)}" title="${p.name}">
                  <div class="nova-math-preset-header">
                    <span class="nova-math-preset-title">${p.name}</span>
                    <span class="nova-math-preset-desc">${p.desc || ''}</span>
                  </div>
                  <div class="nova-math-preset-formula" id="cat-preset-${idx}"></div>
                </button>
              `
                )
                .join('')}
            </div>
          </div>
        `;

        presets.forEach((p, idx) => {
          const el = panelsContainer.querySelector(`#cat-preset-${idx}`) as HTMLElement;
          if (el) {
            try {
              katex.render(p.display, el, { throwOnError: false, displayMode: true });
            } catch {}
          }
        });

        bindItemClicks();
        return;
      }

      // Structures, Calculus, Matrices, Trig
      const items = ALL_MATH_ITEMS.filter((m) => m.category === this.currentTab);
      panelsContainer.innerHTML = `
        <div class="nova-math-panel">
          <div class="nova-math-grid-templates">
            ${items
              .map(
                (m, idx) => `
              <button type="button" class="nova-math-card" data-act="insert" data-latex="${encodeURIComponent(m.latex)}" title="${m.name}: ${m.desc || ''}">
                <div class="nova-math-card-preview" id="cat-tmpl-${idx}"></div>
                <span class="nova-math-card-label">${m.name}</span>
              </button>
            `
              )
              .join('')}
          </div>
        </div>
      `;

      items.forEach((m, idx) => {
        const el = panelsContainer.querySelector(`#cat-tmpl-${idx}`) as HTMLElement;
        if (el) {
          try {
            katex.render(m.display, el, { throwOnError: false, displayMode: false });
          } catch {}
        }
      });

      bindItemClicks();
    };

    // Bind click events on buttons in panel
    const bindItemClicks = () => {
      panelsContainer.querySelectorAll('[data-latex]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const act = btn.getAttribute('data-act');
          const raw = btn.getAttribute('data-latex');
          if (!raw) return;
          const latex = decodeURIComponent(raw);
          if (act === 'replace') {
            replaceFormula(latex);
          } else {
            insertAtCursor(latex);
          }
        });
      });
    };

    // Search input listener
    searchInput.addEventListener('input', () => {
      this.searchQuery = searchInput.value;
      renderActivePanel();
    });

    // Tab buttons listener
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        searchInput.value = '';
        this.searchQuery = '';
        tabBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        this.currentTab = btn.getAttribute('data-tab') || 'structures';
        renderActivePanel();
      });
    });

    // Initialize panel & preview
    renderActivePanel();
    updatePreview();
    input.addEventListener('input', updatePreview);
    setTimeout(() => input.focus(), 50);

    // Clear code button
    this.backdrop.querySelector('#ne-math-clear')?.addEventListener('click', () => {
      input.value = '';
      updatePreview();
      input.focus();
    });

    // Close actions
    this.backdrop.querySelectorAll('[data-action="close"]').forEach((el) => {
      el.addEventListener('click', () => this.close());
    });

    // Save action
    const handleSave = () => {
      const formula = input.value.trim();
      if (!formula) return;

      let isBlock = true;
      radios.forEach((r: any) => {
        if (r.checked && r.value === 'inline') isBlock = false;
      });

      if (isBlock) {
        (this.editor.commands as any).insertBlockMath({ formula });
      } else {
        (this.editor.commands as any).insertInlineMath({ formula });
      }

      this.close();
    };

    this.backdrop.querySelector('[data-action="save"]')?.addEventListener('click', handleSave);

    this.backdrop.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleSave();
      }
    });

    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) this.close();
    });
  }

  public close(): void {
    if (this.backdrop.parentNode) {
      this.backdrop.parentNode.removeChild(this.backdrop);
    }
  }
}
