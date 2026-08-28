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
  // =========================================================================
  // 1. BASIC STRUCTURES & ARITHMETIC
  // =========================================================================
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

  // =========================================================================
  // 2. ALGEBRA & GEOMETRY (BASIC TO CORE)
  // =========================================================================
  { id: 'alg-simple-int', name: 'Simple Interest', category: 'algebra', latex: 'I = P \\cdot r \\cdot t', display: 'I = P r t', desc: 'Simple interest calculation' },
  { id: 'alg-compound-int', name: 'Compound Interest', category: 'algebra', latex: 'A = P \\left(1 + \\frac{r}{n}\\right)^{n t}', display: 'A = P\\left(1+\\frac{r}{n}\\right)^{nt}', desc: 'Compound interest with periodic compounding' },
  { id: 'alg-diff-sq', name: 'Difference of Squares', category: 'algebra', latex: 'a^2 - b^2 = (a - b)(a + b)', display: 'a^2-b^2 = (a-b)(a+b)', desc: 'Algebraic factoring identity' },
  { id: 'alg-perf-sq', name: 'Perfect Square Trinomial', category: 'algebra', latex: '(a \\pm b)^2 = a^2 \\pm 2 a b + b^2', display: '(a\\pm b)^2 = a^2\\pm 2ab+b^2', desc: 'Binomial expansion identity' },
  { id: 'alg-sum-cubes', name: 'Sum & Difference of Cubes', category: 'algebra', latex: 'a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp a b + b^2)', display: 'a^3\\pm b^3 = (a\\pm b)(a^2\\mp ab+b^2)', desc: 'Cubic factoring identity' },
  { id: 'alg-linear', name: 'Slope-Intercept Line', category: 'algebra', latex: 'y = m x + b', display: 'y = mx + b', desc: 'Standard slope-intercept form' },
  { id: 'alg-slope-form', name: 'Slope Formula', category: 'algebra', latex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', display: 'm = \\frac{y_2-y_1}{x_2-x_1}', desc: 'Rate of change between two coordinates' },
  { id: 'alg-point-slope', name: 'Point-Slope Equation', category: 'algebra', latex: 'y - y_1 = m (x - x_1)', display: 'y - y_1 = m(x-x_1)', desc: 'Line passing through (x1, y1)' },
  { id: 'alg-quad', name: 'Quadratic Formula', category: 'algebra', latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', display: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', desc: 'Roots of ax² + bx + c = 0', isPreset: true },
  { id: 'alg-discriminant', name: 'Quadratic Discriminant', category: 'algebra', latex: '\\Delta = b^2 - 4 a c', display: '\\Delta = b^2 - 4ac', desc: 'Determines nature of quadratic roots' },
  { id: 'alg-vertex', name: 'Parabola Vertex Form', category: 'algebra', latex: 'y = a (x - h)^2 + k', display: 'y = a(x-h)^2 + k', desc: 'Parabola with vertex at (h, k)' },
  { id: 'alg-dist', name: '2D Distance Formula', category: 'algebra', latex: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}', display: 'd = \\sqrt{\\Delta x^2 + \\Delta y^2}', desc: 'Euclidean distance between points' },
  { id: 'alg-midpoint', name: 'Midpoint Formula', category: 'algebra', latex: 'M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)', display: 'M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)', desc: 'Coordinates of line midpoint' },
  { id: 'alg-circle-eq', name: 'Equation of Circle', category: 'algebra', latex: '(x - h)^2 + (y - k)^2 = r^2', display: '(x-h)^2 + (y-k)^2 = r^2', desc: 'Circle center (h, k), radius r' },
  { id: 'alg-ellipse', name: 'Equation of Ellipse', category: 'algebra', latex: '\\frac{(x - h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1', display: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1', desc: 'Standard conic section ellipse' },
  { id: 'alg-hyperbola', name: 'Equation of Hyperbola', category: 'algebra', latex: '\\frac{(x - h)^2}{a^2} - \\frac{(y - k)^2}{b^2} = 1', display: '\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1', desc: 'Standard conic section hyperbola' },
  { id: 'alg-pyth', name: 'Pythagorean Theorem', category: 'algebra', latex: 'a^2 + b^2 = c^2', display: 'a^2 + b^2 = c^2', desc: 'Right triangle hypotenuse relation', isPreset: true },
  { id: 'alg-area-tri', name: 'Triangle Area', category: 'algebra', latex: 'A = \\frac{1}{2} b h', display: 'A = \\frac{1}{2}bh', desc: 'Base times height area' },
  { id: 'alg-heron', name: "Heron's Formula", category: 'algebra', latex: 'A = \\sqrt{s(s - a)(s - b)(s - c)}, \\quad s = \\frac{a + b + c}{2}', display: 'A = \\sqrt{s(s-a)(s-b)(s-c)}', desc: 'Triangle area from 3 sides' },
  { id: 'alg-trapezoid', name: 'Trapezoid Area', category: 'algebra', latex: 'A = \\frac{a + b}{2} h', display: 'A = \\frac{a+b}{2}h', desc: 'Area of a trapezoid' },
  { id: 'alg-circle-area', name: 'Area & Circumference of Circle', category: 'algebra', latex: 'A = \\pi r^2, \\quad C = 2 \\pi r', display: 'A = \\pi r^2, \\, C = 2\\pi r', desc: 'Circular geometry formulas', isPreset: true },
  { id: 'alg-sphere-vol', name: 'Sphere Volume & Surface Area', category: 'algebra', latex: 'V = \\frac{4}{3}\\pi r^3, \\quad A = 4\\pi r^2', display: 'V = \\frac{4}{3}\\pi r^3, \\, A = 4\\pi r^2', desc: '3D sphere spatial formulas', isPreset: true },
  { id: 'alg-cylinder', name: 'Cylinder Volume', category: 'algebra', latex: 'V = \\pi r^2 h', display: 'V = \\pi r^2 h', desc: 'Right circular cylinder volume' },
  { id: 'alg-cone', name: 'Cone Volume', category: 'algebra', latex: 'V = \\frac{1}{3}\\pi r^2 h', display: 'V = \\frac{1}{3}\\pi r^2 h', desc: 'Right circular cone volume' },
  { id: 'alg-binom', name: 'Binomial Theorem', category: 'algebra', latex: '(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k', display: '(x+y)^n = \\sum \\binom{n}{k}x^{n-k}y^k', desc: 'Polynomial power expansion', isPreset: true },
  { id: 'alg-arith-seq', name: 'Arithmetic Sequence & Sum', category: 'algebra', latex: 'a_n = a_1 + (n - 1)d, \\quad S_n = \\frac{n}{2}(a_1 + a_n)', display: 'a_n = a_1 + (n-1)d', desc: 'N-th term and sum of arithmetic series' },
  { id: 'alg-geom-seq', name: 'Geometric Sequence & Series', category: 'algebra', latex: 'a_n = a_1 r^{n-1}, \\quad S_n = a_1 \\frac{1 - r^n}{1 - r}, \\quad S_\\infty = \\frac{a_1}{1 - r}', display: 'S_\\infty = \\frac{a_1}{1-r}', desc: 'Finite and infinite geometric series sum' },
  { id: 'alg-euler-form', name: "Euler's Identity & Formula", category: 'algebra', latex: 'e^{i \\pi} + 1 = 0 \\iff e^{i \\theta} = \\cos\\theta + i \\sin\\theta', display: 'e^{i\\pi} + 1 = 0', desc: 'Fundamental mathematical identity', isPreset: true },
  { id: 'alg-demoivre', name: "De Moivre's Formula", category: 'algebra', latex: '(\\cos\\theta + i \\sin\\theta)^n = \\cos(n\\theta) + i \\sin(n\\theta)', display: '(\\cos\\theta + i\\sin\\theta)^n', desc: 'Powers of complex numbers' },
  { id: 'alg-comb-perm', name: 'Combinations & Permutations', category: 'algebra', latex: '\\binom{n}{k} = \\frac{n!}{k!(n - k)!}, \\quad P(n,k) = \\frac{n!}{(n - k)!}', display: '\\binom{n}{k} = \\frac{n!}{k!(n-k)!}', desc: 'Combinatorics counting formulas' },

  // =========================================================================
  // 3. CALCULUS & DIFFERENTIAL EQUATIONS
  // =========================================================================
  { id: 'calc-deriv-def', name: 'Derivative Definition (Limit)', category: 'calculus', latex: 'f\'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}', display: 'f\'(x) = \\lim_{h \\to 0}\\frac{\\Delta f}{h}', desc: 'Formal difference quotient' },
  { id: 'calc-lhopital', name: "L'Hôpital's Rule", category: 'calculus', latex: '\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f\'(x)}{g\'(x)}', display: '\\lim\\frac{f(x)}{g(x)} = \\lim\\frac{f\'(x)}{g\'(x)}', desc: 'Indeterminate limit evaluation' },
  { id: 'calc-prod-rule', name: 'Product Rule', category: 'calculus', latex: '\\frac{d}{dx}[u \\cdot v] = u\' v + u v\'', display: '(uv)\' = u\'v + uv\'', desc: 'Derivative of product of functions' },
  { id: 'calc-quot-rule', name: 'Quotient Rule', category: 'calculus', latex: '\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u\' v - u v\'}{v^2}', display: '\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}', desc: 'Derivative of fraction of functions' },
  { id: 'calc-chain-rule', name: 'Chain Rule', category: 'calculus', latex: '\\frac{d}{dx}f(g(x)) = f\'(g(x)) \\cdot g\'(x)', display: '\\frac{df}{dx} = \\frac{df}{dg}\\frac{dg}{dx}', desc: 'Composite function differentiation' },
  { id: 'calc-int-parts', name: 'Integration by Parts', category: 'calculus', latex: '\\int u \\, dv = u v - \\int v \\, du', display: '\\int u\\,dv = uv - \\int v\\,du', desc: 'Integral of product of functions' },
  { id: 'calc-ftc', name: 'Fundamental Theorem of Calculus', category: 'calculus', latex: '\\int_{a}^{b} f(x) \\, dx = F(b) - F(a), \\quad F\'(x) = f(x)', display: '\\int_a^b f(x) dx = F(b)-F(a)', desc: 'Connection between integral and antiderivative' },
  { id: 'calc-arc-length', name: 'Arc Length of Curve', category: 'calculus', latex: 'L = \\int_{a}^{b} \\sqrt{1 + \\left[f\'(x)\\right]^2} \\, dx', display: 'L = \\int_a^b \\sqrt{1 + (f\')^2} dx', desc: 'Curve arc length integration' },
  { id: 'calc-vol-rev-disc', name: 'Volume of Revolution (Disc)', category: 'calculus', latex: 'V = \\pi \\int_{a}^{b} [f(x)]^2 \\, dx', display: 'V = \\pi \\int_a^b [f(x)]^2 dx', desc: 'Rotational solid volume' },
  { id: 'calc-taylor', name: 'Taylor Series Expansion', category: 'calculus', latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x - a)^n', display: 'f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n', desc: 'Infinite polynomial approximation', isPreset: true },
  { id: 'calc-maclaurin-exp', name: 'Maclaurin Exponential Series', category: 'calculus', latex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots', display: 'e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}', desc: 'Exponential power series' },
  { id: 'calc-fourier', name: 'Fourier Transform', category: 'calculus', latex: '\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx', display: '\\hat{f}(\\xi) = \\int_{-\\infty}^\\infty f(x) e^{-2\\pi i x \\xi} dx', desc: 'Continuous Fourier frequency transform', isPreset: true },
  { id: 'calc-laplace', name: 'Laplace Transform', category: 'calculus', latex: '\\mathcal{L}\\{f(t)\\}(s) = \\int_{0}^{\\infty} f(t) e^{-s t} \\, dt', display: '\\mathcal{L}\\{f\\}(s) = \\int_0^\\infty f(t) e^{-st} dt', desc: 'Complex frequency domain transform' },
  { id: 'calc-ode1', name: 'First-Order Linear ODE', category: 'calculus', latex: '\\frac{dy}{dx} + P(x) y = Q(x) \\implies y = e^{-\\int P dx} \\left( \\int Q e^{\\int P dx} dx + C \\right)', display: 'y\' + P(x)y = Q(x)', desc: 'Integrating factor ODE solution' },
  { id: 'calc-harmonic-ode', name: 'Simple Harmonic Oscillator ODE', category: 'calculus', latex: '\\frac{d^2 y}{dt^2} + \\omega^2 y = 0 \\implies y(t) = A \\cos(\\omega t) + B \\sin(\\omega t)', display: 'y\'\' + \\omega^2 y = 0', desc: 'Second-order harmonic oscillation ODE' },
  { id: 'calc-wave-eq', name: 'Wave Equation (1D/3D)', category: 'calculus', latex: '\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\nabla^2 u = c^2 \\frac{\\partial^2 u}{\\partial x^2}', display: '\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\nabla^2 u', desc: 'Hyperbolic wave propagation PDE' },
  { id: 'calc-heat-eq', name: 'Heat / Diffusion Equation', category: 'calculus', latex: '\\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u = \\alpha \\frac{\\partial^2 u}{\\partial x^2}', display: '\\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u', desc: 'Parabolic thermal diffusion PDE' },
  { id: 'calc-stokes', name: "Stokes' Theorem", category: 'calculus', latex: '\\oint_{\\partial S} \\vec{F} \\cdot d\\vec{r} = \\iint_{S} (\\nabla \\times \\vec{F}) \\cdot d\\vec{S}', display: '\\oint_{\\partial S} \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot d\\vec{S}', desc: 'Surface curl to boundary circulation integral' },
  { id: 'calc-div-thm', name: 'Divergence (Gauss) Theorem', category: 'calculus', latex: '\\iint_{\\partial V} \\vec{F} \\cdot d\\vec{S} = \\iiint_{V} (\\nabla \\cdot \\vec{F}) \\, dV', display: '\\iint_{\\partial V} \\vec{F} \\cdot d\\vec{S} = \\iiint_V (\\nabla \\cdot \\vec{F}) dV', desc: 'Volume divergence to surface flux integral' },

  // =========================================================================
  // 4. LINEAR ALGEBRA & MATRICES
  // =========================================================================
  { id: 'mat-2x2', name: '2×2 Parentheses Matrix', category: 'matrices', latex: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}', display: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}', desc: '2x2 round matrix' },
  { id: 'mat-3x3', name: '3×3 Parentheses Matrix', category: 'matrices', latex: '\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}', display: '\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}', desc: '3x3 round matrix' },
  { id: 'mat-b2x2', name: '2×2 Square Bracket Matrix', category: 'matrices', latex: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}', display: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}', desc: '2x2 square matrix' },
  { id: 'mat-b3x3', name: '3×3 Square Bracket Matrix', category: 'matrices', latex: '\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix}', display: '\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix}', desc: '3x3 square matrix' },
  { id: 'det-2x2', name: '2×2 Determinant', category: 'matrices', latex: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = a d - b c', display: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}', desc: '2x2 matrix determinant' },
  { id: 'det-3x3', name: '3×3 Determinant', category: 'matrices', latex: '\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{vmatrix}', display: '\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{vmatrix}', desc: '3x3 matrix determinant' },
  { id: 'col-vec', name: 'Column Vector (3D)', category: 'matrices', latex: '\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}', display: '\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}', desc: '3D column vector' },
  { id: 'row-vec', name: 'Row Vector (3D)', category: 'matrices', latex: '\\begin{pmatrix} x & y & z \\end{pmatrix}', display: '\\begin{pmatrix} x & y & z \\end{pmatrix}', desc: '1x3 row vector' },
  { id: 'dot-prod', name: 'Dot Product', category: 'matrices', latex: '\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos\\theta = u_x v_x + u_y v_y + u_z v_z', display: '\\vec{u} \\cdot \\vec{v}', desc: 'Scalar dot product' },
  { id: 'cross-prod', name: 'Cross Product', category: 'matrices', latex: '\\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ u_x & u_y & u_z \\\\ v_x & v_y & v_z \\end{vmatrix}', display: '\\vec{u} \\times \\vec{v}', desc: 'Vector 3D cross product' },
  { id: 'mat-inv-2x2', name: '2×2 Matrix Inverse', category: 'matrices', latex: 'A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}', display: 'A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}', desc: '2x2 matrix inversion' },
  { id: 'mat-eigen', name: 'Eigenvalue & Eigenvector Equation', category: 'matrices', latex: 'A \\vec{v} = \\lambda \\vec{v} \\iff \\det(A - \\lambda I) = 0', display: 'A\\vec{v} = \\lambda\\vec{v}', desc: 'Characteristic matrix equation' },
  { id: 'mat-svd', name: 'Singular Value Decomposition (SVD)', category: 'matrices', latex: 'A = U \\Sigma V^{T}', display: 'A = U \\Sigma V^T', desc: 'Matrix factorization into singular components' },

  // =========================================================================
  // 5. TRIGONOMETRY & IDENTITIES
  // =========================================================================
  { id: 'trig-pyth', name: 'Pythagorean Trig Identity', category: 'trig', latex: '\\sin^2(\\theta) + \\cos^2(\\theta) = 1', display: '\\sin^2\\theta + \\cos^2\\theta = 1', desc: 'Core trigonometric identity' },
  { id: 'trig-tan-sec', name: 'Tangent-Secant Identity', category: 'trig', latex: '1 + \\tan^2(\\theta) = \\sec^2(\\theta), \\quad 1 + \\cot^2(\\theta) = \\csc^2(\\theta)', display: '1 + \\tan^2\\theta = \\sec^2\\theta', desc: 'Derived Pythagorean identities' },
  { id: 'trig-sin-add', name: 'Sine Angle Sum & Difference', category: 'trig', latex: '\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta', display: '\\sin(\\alpha \\pm \\beta)', desc: 'Sine addition theorem' },
  { id: 'trig-cos-add', name: 'Cosine Angle Sum & Difference', category: 'trig', latex: '\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta', display: '\\cos(\\alpha \\pm \\beta)', desc: 'Cosine addition theorem' },
  { id: 'trig-double-sin', name: 'Double Angle Sine', category: 'trig', latex: '\\sin(2\\theta) = 2 \\sin\\theta \\cos\\theta', display: '\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta', desc: 'Double angle expansion' },
  { id: 'trig-double-cos', name: 'Double Angle Cosine', category: 'trig', latex: '\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta', display: '\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta', desc: 'Double angle cosine expansions' },
  { id: 'trig-law-sines', name: 'Law of Sines', category: 'trig', latex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2 R', display: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}', desc: 'Triangular ratio of sides to opposite sines' },
  { id: 'trig-law-cos', name: 'Law of Cosines', category: 'trig', latex: 'c^2 = a^2 + b^2 - 2 a b \\cos C', display: 'c^2 = a^2 + b^2 - 2ab\\cos C', desc: 'Generalization of Pythagorean theorem' },

  // =========================================================================
  // 6. PHYSICS & ENGINEERING
  // =========================================================================
  { id: 'phys-newton2', name: "Newton's Second Law", category: 'physics', latex: '\\vec{F} = m \\vec{a} = \\frac{d\\vec{p}}{dt}', display: '\\vec{F} = m\\vec{a}', desc: 'Force equals mass times acceleration', isPreset: true },
  { id: 'phys-gravity', name: 'Universal Gravitation', category: 'physics', latex: 'F = G \\frac{m_1 m_2}{r^2}', display: 'F = G\\frac{m_1 m_2}{r^2}', desc: "Newton's universal law of gravitation", isPreset: true },
  { id: 'phys-kinematics', name: 'Kinematic Motion Equations', category: 'physics', latex: 'v = v_0 + a t, \\quad x = x_0 + v_0 t + \\frac{1}{2}a t^2, \\quad v^2 = v_0^2 + 2a(x - x_0)', display: 'x = x_0 + v_0 t + \\frac{1}{2}at^2', desc: 'Constant acceleration equations of motion', isPreset: true },
  { id: 'phys-kinetic', name: 'Kinetic Energy & Work', category: 'physics', latex: 'E_k = \\frac{1}{2} m v^2, \\quad W = \\int \\vec{F} \\cdot d\\vec{r} = \\Delta E_k', display: 'E_k = \\frac{1}{2}mv^2, \\, W = \\Delta E_k', desc: 'Work-energy theorem', isPreset: true },
  { id: 'phys-potential', name: 'Gravitational Potential Energy', category: 'physics', latex: 'U = m g h', display: 'U = mgh', desc: 'Potential energy near surface of Earth' },
  { id: 'phys-hooke', name: "Hooke's Law & Elastic Potential", category: 'physics', latex: 'F = -k x, \\quad U_s = \\frac{1}{2} k x^2, \\quad T = 2\\pi \\sqrt{\\frac{m}{k}}', display: 'F = -kx, \\, U = \\frac{1}{2}kx^2', desc: 'Spring restorative force and period' },
  { id: 'phys-relativity', name: 'Mass-Energy Equivalence', category: 'physics', latex: 'E = m c^2 = \\sqrt{(p c)^2 + (m_0 c^2)^2}', display: 'E = mc^2', desc: "Einstein's theory of special relativity", isPreset: true },
  { id: 'phys-coulomb', name: "Coulomb's Law", category: 'physics', latex: 'F = k_e \\frac{|q_1 q_2|}{r^2} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_1 q_2|}{r^2}', display: 'F = k_e \\frac{|q_1 q_2|}{r^2}', desc: 'Electrostatic force between point charges', isPreset: true },
  { id: 'phys-ohm', name: "Ohm's Law & Electric Power", category: 'physics', latex: 'V = I R, \\quad P = I V = I^2 R = \\frac{V^2}{R}', display: 'V = IR, \\, P = IV', desc: 'Voltage, current, resistance, and electrical power', isPreset: true },
  { id: 'phys-lorentz', name: 'Lorentz Force Law', category: 'physics', latex: '\\vec{F} = q \\left( \\vec{E} + \\vec{v} \\times \\vec{B} \\right)', display: '\\vec{F} = q(\\vec{E} + \\vec{v}\\times\\vec{B})', desc: 'Force on charged particle in electromagnetic fields', isPreset: true },
  { id: 'phys-faraday', name: "Faraday's Induction Law", category: 'physics', latex: '\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -\\frac{d}{dt}\\iint \\vec{B} \\cdot d\\vec{A}', display: '\\mathcal{E} = -\\frac{d\\Phi_B}{dt}', desc: 'Electromotive force induced by changing magnetic flux' },
  { id: 'phys-bernoulli', name: "Bernoulli's Fluid Equation", category: 'physics', latex: 'P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}', display: 'P + \\frac{1}{2}\\rho v^2 + \\rho gh = C', desc: 'Conservation of energy in fluid dynamics' },
  { id: 'phys-schrodinger', name: 'Schrödinger Wave Equation', category: 'physics', latex: 'i\\hbar \\frac{\\partial}{\\partial t}\\Psi(\\vec{r}, t) = \\hat{H}\\Psi(\\vec{r}, t)', display: 'i\\hbar \\frac{\\partial}{\\partial t}\\Psi = \\hat{H}\\Psi', desc: 'Fundamental quantum state time evolution equation', isPreset: true },
  { id: 'phys-heisenberg', name: 'Heisenberg Uncertainty Principle', category: 'physics', latex: '\\Delta x \\, \\Delta p \\ge \\frac{\\hbar}{2}', display: '\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}', desc: 'Quantum position and momentum uncertainty', isPreset: true },
  { id: 'phys-planck', name: 'Planck-Einstein Relation', category: 'physics', latex: 'E = h \\nu = \\hbar \\omega = \\frac{h c}{\\lambda}', display: 'E = h\\nu = \\hbar\\omega', desc: 'Photon energy as function of frequency', isPreset: true },
  { id: 'phys-debroglie', name: 'de Broglie Wavelength', category: 'physics', latex: '\\lambda = \\frac{h}{p} = \\frac{h}{m v}', display: '\\lambda = \\frac{h}{p}', desc: 'Wave-particle duality matter wavelength', isPreset: true },
  { id: 'phys-timedil', name: 'Relativistic Time Dilation', category: 'physics', latex: '\\Delta t\' = \\frac{\\Delta t}{\\sqrt{1 - \\frac{v^2}{c^2}}} = \\gamma \\Delta t', display: '\\Delta t\' = \\gamma \\Delta t', desc: 'Time dilation at relativistic velocity', isPreset: true },
  { id: 'phys-snell', name: "Snell's Law of Refraction", category: 'physics', latex: 'n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2)', display: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2', desc: 'Optics light refraction at refractive interface', isPreset: true },
  { id: 'phys-lens', name: "Thin Lens / Lensmaker Equation", category: 'physics', latex: '\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}, \\quad M = -\\frac{d_i}{d_o}', display: '\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}', desc: 'Focal length and optical magnification' },
  { id: 'phys-thermo1', name: 'First Law of Thermodynamics', category: 'physics', latex: '\\Delta U = Q - W', display: '\\Delta U = Q - W', desc: 'Conservation of internal energy, heat, and work', isPreset: true },
  { id: 'phys-entropy', name: "Boltzmann's Entropy Formula", category: 'physics', latex: 'S = k_B \\ln(\\Omega)', display: 'S = k_B \\ln\\Omega', desc: 'Statistical definition of entropy', isPreset: true },
  { id: 'phys-maxwell4', name: "Maxwell's Equations (Full Set)", category: 'physics', latex: '\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}, \\quad \\nabla \\cdot \\vec{B} = 0, \\quad \\nabla \\times \\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}, \\quad \\nabla \\times \\vec{B} = \\mu_0\\vec{J} + \\mu_0\\varepsilon_0\\frac{\\partial\\vec{E}}{\\partial t}', display: '\\nabla \\cdot \\vec{E}=\\frac{\\rho}{\\varepsilon_0}, \\; \\nabla \\times \\vec{B}=\\mu_0\\vec{J}+\\dots', desc: 'Complete classical electromagnetism system', isPreset: true },

  // =========================================================================
  // 7. CHEMISTRY & BIOCHEMISTRY
  // =========================================================================
  { id: 'chem-ideal-gas', name: 'Ideal Gas Law', category: 'chemistry', latex: 'P V = n R T = N k_B T', display: 'P V = n R T', desc: 'Equation of state of ideal gas', isPreset: true },
  { id: 'chem-vanderwaals', name: 'Van der Waals Real Gas', category: 'chemistry', latex: '\\left(P + \\frac{a n^2}{V^2}\\right)(V - n b) = n R T', display: '\\left(P + \\frac{an^2}{V^2}\\right)(V-nb) = nRT', desc: 'Equation of state of real gas' },
  { id: 'chem-gibbs', name: 'Gibbs Free Energy', category: 'chemistry', latex: '\\Delta G = \\Delta H - T \\Delta S = -R T \\ln(K)', display: '\\Delta G = \\Delta H - T\\Delta S', desc: 'Spontaneity criterion for chemical reactions', isPreset: true },
  { id: 'chem-arrhenius', name: 'Arrhenius Rate Equation', category: 'chemistry', latex: 'k = A e^{-\\frac{E_a}{R T}}', display: 'k = A e^{-\\frac{E_a}{RT}}', desc: 'Reaction rate constant temperature dependence', isPreset: true },
  { id: 'chem-nernst', name: 'Nernst Equation (Electrochemistry)', category: 'chemistry', latex: 'E = E^\\circ - \\frac{R T}{n F} \\ln(Q) = E^\\circ - \\frac{0.0592}{n} \\log_{10}(Q)', display: 'E = E^\\circ - \\frac{RT}{nF}\\ln Q', desc: 'Cell potential under non-standard conditions', isPreset: true },
  { id: 'chem-henderson', name: 'Henderson-Hasselbalch Equation', category: 'chemistry', latex: '\\text{pH} = \\text{p}K_a + \\log_{10}\\left( \\frac{[\\text{A}^-]}{[\\text{HA}]} \\right)', display: '\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}', desc: 'Buffer solution pH calculation', isPreset: true },
  { id: 'chem-beer', name: 'Beer-Lambert Law', category: 'chemistry', latex: 'A = \\varepsilon \\cdot c \\cdot l = -\\log_{10}\\left( \\frac{I}{I_0} \\right)', display: 'A = \\varepsilon c l', desc: 'Spectrophotometric light absorption law', isPreset: true },
  { id: 'chem-equilibrium', name: 'Equilibrium Constant (Keq)', category: 'chemistry', latex: 'K_{eq} = \\frac{[\\text{C}]^c [\\text{D}]^d}{[\\text{A}]^a [\\text{B}]^b}', display: 'K_{eq} = \\frac{[\\text{C}]^c [\\text{D}]^d}{[\\text{A}]^a [\\text{B}]^b}', desc: 'Law of mass action equilibrium ratio', isPreset: true },
  { id: 'chem-rate-law', name: 'Chemical Rate Law', category: 'chemistry', latex: 'r = k [\\text{A}]^m [\\text{B}]^n', display: 'r = k [\\text{A}]^m [\\text{B}]^n', desc: 'Reaction rate order dependence', isPreset: true },
  { id: 'chem-photosynth', name: 'Photosynthesis Reaction', category: 'chemistry', latex: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2', display: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\to \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2', desc: 'Biological light-driven carbon fixation', isPreset: true },
  { id: 'chem-respiration', name: 'Cellular Respiration Reaction', category: 'chemistry', latex: '\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 36\\text{ATP}', display: '\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\to 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 36\\text{ATP}', desc: 'Aerobic metabolism ATP generation', isPreset: true },

  // =========================================================================
  // 8. BIOLOGY, GENETICS & ECOLOGY
  // =========================================================================
  { id: 'bio-hardy', name: 'Hardy-Weinberg Equilibrium', category: 'biology', latex: 'p^2 + 2pq + q^2 = 1 \\quad \\text{and} \\quad p + q = 1', display: 'p^2 + 2pq + q^2 = 1', desc: 'Population genetics allele frequency distribution', isPreset: true },
  { id: 'bio-michaelis', name: 'Michaelis-Menten Kinetics', category: 'biology', latex: 'v = \\frac{V_{\\max} [S]}{K_m + [S]}', display: 'v = \\frac{V_{\\max}[S]}{K_m + [S]}', desc: 'Enzyme catalysis velocity reaction model', isPreset: true },
  { id: 'bio-lineweaver', name: 'Lineweaver-Burk Double Reciprocal', category: 'biology', latex: '\\frac{1}{v} = \\frac{K_m}{V_{\\max}} \\frac{1}{[S]} + \\frac{1}{V_{\\max}}', display: '\\frac{1}{v} = \\frac{K_m}{V_{\\max}}\\frac{1}{[S]} + \\frac{1}{V_{\\max}}', desc: 'Linearized enzyme kinetics transformation', isPreset: true },
  { id: 'bio-exp-growth', name: 'Exponential Population Growth', category: 'biology', latex: '\\frac{dN}{dt} = r N \\implies N(t) = N_0 e^{r t}', display: 'N(t) = N_0 e^{rt}', desc: 'Malthusian unconstrained population growth', isPreset: true },
  { id: 'bio-logistic', name: 'Logistic Population Growth', category: 'biology', latex: '\\frac{dN}{dt} = r N \\left( 1 - \\frac{N}{K} \\right)', display: '\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)', desc: 'Carrying capacity K constrained growth model', isPreset: true },
  { id: 'bio-shannon', name: 'Shannon-Wiener Diversity Index', category: 'biology', latex: 'H\' = -\\sum_{i=1}^{S} p_i \\ln(p_i)', display: 'H\' = -\\sum_{i=1}^{S} p_i \\ln(p_i)', desc: 'Ecological community biodiversity measurement', isPreset: true },
  { id: 'bio-ghk', name: 'Goldman-Hodgkin-Katz (GHK) Voltage', category: 'biology', latex: 'V_m = \\frac{R T}{F} \\ln\\left( \\frac{P_{\\text{K}}[\\text{K}^+]_o + P_{\\text{Na}}[\\text{Na}^+]_o + P_{\\text{Cl}}[\\text{Cl}^-]_i}{P_{\\text{K}}[\\text{K}^+]_i + P_{\\text{Na}}[\\text{Na}^+]_i + P_{\\text{Cl}}[\\text{Cl}^-]_o} \\right)', display: 'V_m = \\frac{RT}{F}\\ln\\left(\\frac{P_K[K^+]_o + \\dots}{P_K[K^+]_i + \\dots}\\right)', desc: 'Cell membrane resting potential across ion permeabilities', isPreset: true },
  { id: 'bio-lotka', name: 'Lotka-Volterra Predator-Prey', category: 'biology', latex: '\\frac{dx}{dt} = \\alpha x - \\beta x y, \\quad \\frac{dy}{dt} = \\delta x y - \\gamma y', display: '\\frac{dx}{dt} = \\alpha x - \\beta xy, \\; \\frac{dy}{dt} = \\delta xy - \\gamma y', desc: 'Nonlinear biological predator-prey dynamics', isPreset: true },
  { id: 'bio-kleiber', name: "Kleiber's Law (Metabolic Scaling)", category: 'biology', latex: 'B = B_0 \\, M^{\\frac{3}{4}}', display: 'B \\propto M^{3/4}', desc: 'Allometric scaling law of basal metabolic rate to mass', isPreset: true },

  // =========================================================================
  // 9. STATISTICS, PROBABILITY & MACHINE LEARNING
  // =========================================================================
  { id: 'stat-bayes', name: "Bayes' Theorem", category: 'stats', latex: 'P(A|B) = \\frac{P(B|A) \\, P(A)}{P(B)} = \\frac{P(B|A) \\, P(A)}{\\sum_{i} P(B|A_i) P(A_i)}', display: 'P(A|B) = \\frac{P(B|A) P(A)}{P(B)}', desc: 'Fundamental posterior probability inversion', isPreset: true },
  { id: 'stat-norm-pdf', name: 'Gaussian Normal Distribution', category: 'stats', latex: 'f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}', display: 'f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}', desc: 'Continuous probability density function', isPreset: true },
  { id: 'stat-var', name: 'Sample Variance & Std Deviation', category: 'stats', latex: 's^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2, \\quad s = \\sqrt{s^2}', display: 's^2 = \\frac{1}{n-1}\\sum (x_i - \\bar{x})^2', desc: 'Unbiased estimator of variance', isPreset: true },
  { id: 'stat-pearson', name: 'Pearson Correlation (r)', category: 'stats', latex: 'r = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2 \\sum (y_i - \\bar{y})^2}}', display: 'r = \\frac{\\sum (x-\\bar{x})(y-\\bar{y})}{\\sqrt{\\sum(x-\\bar{x})^2 \\sum(y-\\bar{y})^2}}', desc: 'Linear bivariate correlation coefficient', isPreset: true },
  { id: 'stat-binom', name: 'Binomial Probability Mass (PMF)', category: 'stats', latex: 'P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}', display: 'P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}', desc: 'Probability of k successes in n trials', isPreset: true },
  { id: 'stat-poisson', name: 'Poisson Distribution PMF', category: 'stats', latex: 'P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}', display: 'P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}', desc: 'Probability of count occurrences per interval', isPreset: true },
  { id: 'stat-sigmoid', name: 'Sigmoid / Logistic Activation', category: 'stats', latex: '\\sigma(z) = \\frac{1}{1 + e^{-z}} = \\frac{e^z}{e^z + 1}', display: '\\sigma(z) = \\frac{1}{1 + e^{-z}}', desc: 'Machine learning logistic activation function', isPreset: true },
  { id: 'stat-softmax', name: 'Softmax Probability Function', category: 'stats', latex: '\\text{Softmax}(z_i) = \\frac{e^{z_i}}{\\sum_{j=1}^{K} e^{z_j}}', display: '\\text{Softmax}(z_i) = \\frac{e^{z_i}}{\\sum_j e^{z_j}}', desc: 'Multi-class probability distribution normalization', isPreset: true },
  { id: 'stat-cross-entropy', name: 'Cross-Entropy Loss', category: 'stats', latex: '\\mathcal{L} = -\\frac{1}{N} \\sum_{i=1}^{N} \\sum_{k=1}^{K} y_{i,k} \\log(\\hat{y}_{i,k})', display: '\\mathcal{L} = -\\sum y \\log(\\hat{y})', desc: 'Deep learning classification loss function', isPreset: true },
  { id: 'stat-mse', name: 'Mean Squared Error (MSE)', category: 'stats', latex: '\\text{MSE} = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2', display: '\\text{MSE} = \\frac{1}{n} \\sum (y - \\hat{y})^2', desc: 'Regression mean squared deviation loss', isPreset: true },
  { id: 'stat-chisq', name: 'Chi-Square Test Statistic', category: 'stats', latex: '\\chi^2 = \\sum_{i=1}^{k} \\frac{(O_i - E_i)^2}{E_i}', display: '\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}', desc: 'Goodness of fit statistical test', isPreset: true },
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
    // Check if user selected math node or text in editor
    let initialFormula = '';
    let isInitialBlock = false;

    const { state } = this.editor;
    const { from, to } = state.selection;
    const node = state.doc.nodeAt(from);

    if (node && (node.type.name === 'mathInline' || node.type.name === 'mathBlock')) {
      initialFormula = node.attrs.formula || '';
      isInitialBlock = node.type.name === 'mathBlock';
    } else {
      const selectedText = state.doc.textBetween(from, to, ' ').trim();
      initialFormula = selectedText || '\\frac{dy}{dx}';
    }

    this.backdrop.innerHTML = `
      <div class="nova-modal nova-math-modal" style="max-width: 680px; width: 92vw;">
        <!-- Header -->
        <div class="nova-modal-header" style="padding: 10px 16px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px; color: var(--ne-accent); font-weight: bold; line-height: 1;">∑</span>
            <h3 class="nova-modal-title" style="font-size: 14px;">Math & Scientific Formula Studio</h3>
          </div>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>

        <!-- Body -->
        <div class="nova-modal-body" style="gap: 7px; padding: 10px 16px;">
          <!-- Search & Filter Bar -->
          <div style="display: flex; gap: 6px; align-items: center;">
            <input type="text" id="ne-math-search" class="nova-form-input" placeholder="🔍 Search formula across any level (e.g. interest, quadratic, taylor, hardy, newton, gibbs, bayes, sigmoid)..." style="font-size: 11.5px; padding: 4px 8px; height: 28px; flex: 1;" />
          </div>

          <!-- Category Tabs -->
          <div class="nova-math-tabs" id="ne-math-tab-bar">
            <button type="button" class="nova-math-tab-btn is-active" data-tab="structures">📐 Structures</button>
            <button type="button" class="nova-math-tab-btn" data-tab="algebra">📐 Algebra</button>
            <button type="button" class="nova-math-tab-btn" data-tab="calculus">📈 Calculus</button>
            <button type="button" class="nova-math-tab-btn" data-tab="matrices">🔢 Matrices</button>
            <button type="button" class="nova-math-tab-btn" data-tab="trig">📐 Trig</button>
            <button type="button" class="nova-math-tab-btn" data-tab="physics">⚡ Physics</button>
            <button type="button" class="nova-math-tab-btn" data-tab="chemistry">🧪 Chemistry</button>
            <button type="button" class="nova-math-tab-btn" data-tab="biology">🧬 Biology</button>
            <button type="button" class="nova-math-tab-btn" data-tab="stats">📊 Stats & AI</button>
            <button type="button" class="nova-math-tab-btn" data-tab="symbols">🔣 Symbols</button>
            <button type="button" class="nova-math-tab-btn" data-tab="greek">🏛️ Greek</button>
          </div>

          <!-- Tab Content Panels Container -->
          <div id="ne-math-panels-container" class="nova-math-panel-wrapper">
            <!-- Panels injected dynamically -->
          </div>

          <!-- Live KaTeX Equation Preview -->
          <div class="nova-form-group" style="margin-top: 1px; gap: 3px;">
            <label class="nova-form-label" style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; margin-bottom: 0;">
              <span>Live Equation Preview</span>
              <span style="font-size: 10px; font-weight: normal; color: var(--ne-text-muted);">Real-time KaTeX</span>
            </label>
            <div id="ne-math-preview" class="nova-math-preview-box"></div>
          </div>

          <!-- LaTeX Expression Textarea -->
          <div class="nova-form-group" style="gap: 3px;">
            <label class="nova-form-label" style="font-size: 11px; margin-bottom: 0;">LaTeX Code</label>
            <textarea class="nova-form-textarea" id="ne-math-input" placeholder="LaTeX code..." style="min-height: 36px; height: 38px; padding: 5px 8px; font-size: 12px; font-family: var(--ne-font-mono); resize: none;">${initialFormula}</textarea>
          </div>

          <!-- Equation Mode & Clear -->
          <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1px;">
            <div style="display: flex; gap: 14px; align-items: center;">
              <label style="display: flex; align-items: center; gap: 5px; font-size: 11.5px; font-weight: 500; cursor: pointer;">
                <input type="radio" name="ne-math-type" value="inline" ${!isInitialBlock ? 'checked' : ''} /> <b>Inline Equation</b> (flows inside text)
              </label>
              <label style="display: flex; align-items: center; gap: 5px; font-size: 11.5px; font-weight: 500; cursor: pointer;">
                <input type="radio" name="ne-math-type" value="block" ${isInitialBlock ? 'checked' : ''} /> Block (Centered standalone)
              </label>
            </div>
            <button type="button" class="nova-btn-secondary" id="ne-math-clear" style="padding: 2px 8px; font-size: 11px; height: 24px;">Clear</button>
          </div>
        </div>

        <!-- Footer -->
        <div class="nova-modal-footer" style="padding: 8px 16px;">
          <button type="button" class="nova-btn-secondary" data-action="close" style="padding: 5px 12px; font-size: 12px;">Cancel</button>
          <button type="button" class="nova-btn-primary" data-action="save" style="padding: 5px 14px; font-size: 12px;">Insert Equation</button>
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

      // Search across everything
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

        let html = `<div class="nova-math-panel"><div style="font-size: 11px; color: var(--ne-text-muted); margin-bottom: 4px;">Search results for "${q}":</div>`;

        if (mathMatches.length === 0 && symMatches.length === 0 && greekMatches.length === 0) {
          html += `<div style="padding: 16px; text-align: center; color: var(--ne-text-muted); font-size: 12px;">No matching formulas or symbols found.</div></div>`;
          panelsContainer.innerHTML = html;
          return;
        }

        if (mathMatches.length > 0) {
          html += `<div class="nova-math-grid-templates" style="margin-bottom: 6px;">`;
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

      // Symbols View
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
            <div style="font-size: 11px; font-weight: 600; color: var(--ne-text-muted); margin: 4px 0 2px;">${cat.name}</div>
            <div class="nova-math-grid-symbols" style="margin-bottom: 4px;">
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

      // Greek View
      if (this.currentTab === 'greek') {
        const lower = GREEK_ITEMS.filter((g) => !g.isUpper);
        const upper = GREEK_ITEMS.filter((g) => g.isUpper);

        panelsContainer.innerHTML = `
          <div class="nova-math-panel">
            <div style="font-size: 11px; font-weight: 600; color: var(--ne-text-muted); margin: 2px 0 3px;">Lowercase Greek Letters</div>
            <div class="nova-math-grid-symbols" style="margin-bottom: 6px;">
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
            <div style="font-size: 11px; font-weight: 600; color: var(--ne-text-muted); margin: 2px 0 3px;">Uppercase Greek Letters</div>
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

      // All discipline tabs (Structures, Algebra, Calculus, Matrices, Trig, Physics, Chemistry, Biology, Stats)
      const items = ALL_MATH_ITEMS.filter((m) => m.category === this.currentTab);
      panelsContainer.innerHTML = `
        <div class="nova-math-panel">
          <div class="nova-math-grid-templates">
            ${items
              .map(
                (m, idx) => `
              <button type="button" class="nova-math-card" data-act="${m.isPreset ? 'replace' : 'insert'}" data-latex="${encodeURIComponent(m.latex)}" title="${m.name}: ${m.desc || ''}">
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
          panelsContainer.querySelectorAll('.nova-math-card, .nova-math-sym-btn').forEach((b) => b.classList.remove('is-selected'));
          btn.classList.add('is-selected');

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
