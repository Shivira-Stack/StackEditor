import { icons } from '../../core/icons';
import type { Editor } from '@tiptap/core';
import katex from 'katex';

interface MathTemplate {
  name: string;
  latex: string;
  display: string;
}

const TEMPLATES: MathTemplate[] = [
  { name: 'Fraction', latex: '\\frac{a}{b}', display: '\\frac{a}{b}' },
  { name: 'Square Root', latex: '\\sqrt{x}', display: '\\sqrt{x}' },
  { name: 'N-th Root', latex: '\\sqrt[n]{x}', display: '\\sqrt[n]{x}' },
  { name: 'Power', latex: 'x^{2}', display: 'x^{2}' },
  { name: 'Subscript', latex: 'x_{i}', display: 'x_{i}' },
  { name: 'Sub & Super', latex: 'x_{i}^{n}', display: 'x_{i}^{n}' },
  { name: 'Integral', latex: '\\int_{a}^{b} f(x) \\, dx', display: '\\int_{a}^{b}' },
  { name: 'Double Integral', latex: '\\iint_{D} f(x,y) \\, dx\\,dy', display: '\\iint' },
  { name: 'Summation', latex: '\\sum_{i=1}^{n} x_{i}', display: '\\sum_{i=1}^{n}' },
  { name: 'Product', latex: '\\prod_{i=1}^{n} x_{i}', display: '\\prod_{i=1}^{n}' },
  { name: 'Limit', latex: '\\lim_{x \\to \\infty} f(x)', display: '\\lim_{x \\to \\infty}' },
  { name: 'Derivative', latex: '\\frac{df}{dx}', display: '\\frac{df}{dx}' },
  { name: 'Partial Derivative', latex: '\\frac{\\partial f}{\\partial x}', display: '\\frac{\\partial f}{\\partial x}' },
  { name: '2×2 Matrix', latex: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}', display: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}' },
  { name: 'Bracket Matrix', latex: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}', display: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}' },
  { name: 'Cases / Piecewise', latex: 'f(x) = \\begin{cases} x & x \\ge 0 \\\\ -x & x < 0 \\end{cases}', display: '\\begin{cases} a \\\\ b \\end{cases}' },
];

const PRESETS: { title: string; desc: string; latex: string }[] = [
  {
    title: 'Quadratic Formula',
    desc: 'Solutions of ax² + bx + c = 0',
    latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
  },
  {
    title: 'Pythagorean Theorem',
    desc: 'Right triangle relationship',
    latex: 'a^2 + b^2 = c^2',
  },
  {
    title: "Euler's Identity",
    desc: 'Fundamental mathematical constant relation',
    latex: 'e^{i\\pi} + 1 = 0',
  },
  {
    title: 'Mass-Energy Equivalence',
    desc: "Einstein's famous equation",
    latex: 'E = mc^2',
  },
  {
    title: 'Area of Circle',
    desc: 'Geometry area formula',
    latex: 'A = \\pi r^2',
  },
  {
    title: 'Binomial Theorem',
    desc: 'Polynomial expansion',
    latex: '(x + a)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^k a^{n-k}',
  },
  {
    title: 'Gaussian Integral',
    desc: 'Normal distribution integral',
    latex: '\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}',
  },
  {
    title: 'Normal Distribution PDF',
    desc: 'Probability density function',
    latex: 'f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}',
  },
];

const SYMBOLS: { label: string; latex: string }[] = [
  { label: '±', latex: '\\pm ' },
  { label: '×', latex: '\\times ' },
  { label: '÷', latex: '\\div ' },
  { label: '·', latex: '\\cdot ' },
  { label: '≠', latex: '\\neq ' },
  { label: '≈', latex: '\\approx ' },
  { label: '≤', latex: '\\leq ' },
  { label: '≥', latex: '\\geq ' },
  { label: '≪', latex: '\\ll ' },
  { label: '≫', latex: '\\gg ' },
  { label: '∞', latex: '\\infty ' },
  { label: '∂', latex: '\\partial ' },
  { label: '∇', latex: '\\nabla ' },
  { label: '∈', latex: '\\in ' },
  { label: '∉', latex: '\\notin ' },
  { label: '⊂', latex: '\\subset ' },
  { label: '⊆', latex: '\\subseteq ' },
  { label: '∪', latex: '\\cup ' },
  { label: '∩', latex: '\\cap ' },
  { label: '∀', latex: '\\forall ' },
  { label: '∃', latex: '\\exists ' },
  { label: '→', latex: '\\rightarrow ' },
  { label: '⇒', latex: '\\Rightarrow ' },
  { label: '⇔', latex: '\\Leftrightarrow ' },
  { label: '∵', latex: '\\because ' },
  { label: '∴', latex: '\\therefore ' },
];

const GREEK: { label: string; latex: string }[] = [
  { label: 'α', latex: '\\alpha ' },
  { label: 'β', latex: '\\beta ' },
  { label: 'γ', latex: '\\gamma ' },
  { label: 'δ', latex: '\\delta ' },
  { label: 'ε', latex: '\\epsilon ' },
  { label: 'ζ', latex: '\\zeta ' },
  { label: 'η', latex: '\\eta ' },
  { label: 'θ', latex: '\\theta ' },
  { label: 'λ', latex: '\\lambda ' },
  { label: 'μ', latex: '\\mu ' },
  { label: 'π', latex: '\\pi ' },
  { label: 'ρ', latex: '\\rho ' },
  { label: 'σ', latex: '\\sigma ' },
  { label: 'τ', latex: '\\tau ' },
  { label: 'φ', latex: '\\phi ' },
  { label: 'ψ', latex: '\\psi ' },
  { label: 'ω', latex: '\\omega ' },
  { label: 'Γ', latex: '\\Gamma ' },
  { label: 'Δ', latex: '\\Delta ' },
  { label: 'Θ', latex: '\\Theta ' },
  { label: 'Λ', latex: '\\Lambda ' },
  { label: 'Σ', latex: '\\Sigma ' },
  { label: 'Φ', latex: '\\Phi ' },
  { label: 'Ω', latex: '\\Omega ' },
];

export class MathModal {
  private backdrop: HTMLElement;
  private editor: Editor;
  private activeTab: 'templates' | 'presets' | 'symbols' | 'greek' = 'templates';

  constructor(editor: Editor) {
    this.editor = editor;
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'nova-modal-backdrop';
  }

  public show(): void {
    // Check if user selected text in the document
    const selectedText = this.editor.state.doc.textBetween(
      this.editor.state.selection.from,
      this.editor.state.selection.to,
      ' '
    ).trim();

    // Default formula or selected text
    const initialFormula = selectedText || 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}';

    this.backdrop.innerHTML = `
      <div class="nova-modal nova-math-modal" style="max-width: 680px; width: 95vw;">
        <div class="nova-modal-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px; color: var(--ne-accent); font-weight: bold;">∑</span>
            <h3 class="nova-modal-title">Insert Math Equation (LaTeX)</h3>
          </div>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>

        <div class="nova-modal-body" style="gap: 12px; padding: 16px 20px;">
          <!-- Category Tabs -->
          <div class="nova-math-tabs">
            <button type="button" class="nova-math-tab-btn is-active" data-tab="templates">Structures & Templates</button>
            <button type="button" class="nova-math-tab-btn" data-tab="presets">Popular Formulas</button>
            <button type="button" class="nova-math-tab-btn" data-tab="symbols">Symbols & Operators</button>
            <button type="button" class="nova-math-tab-btn" data-tab="greek">Greek Alphabet</button>
          </div>

          <!-- Tab Content 1: Templates -->
          <div class="nova-math-panel" id="tab-panel-templates">
            <div class="nova-math-grid-templates">
              ${TEMPLATES.map(
                (t, idx) => `
                <button type="button" class="nova-math-card" data-insert="${encodeURIComponent(t.latex)}" title="${t.name}">
                  <div class="nova-math-card-preview" id="tmpl-prev-${idx}"></div>
                  <span class="nova-math-card-label">${t.name}</span>
                </button>
              `
              ).join('')}
            </div>
          </div>

          <!-- Tab Content 2: Presets -->
          <div class="nova-math-panel" id="tab-panel-presets" style="display: none;">
            <div class="nova-math-grid-presets">
              ${PRESETS.map(
                (p, idx) => `
                <button type="button" class="nova-math-preset-card" data-insert-full="${encodeURIComponent(p.latex)}">
                  <div class="nova-math-preset-header">
                    <span class="nova-math-preset-title">${p.title}</span>
                    <span class="nova-math-preset-desc">${p.desc}</span>
                  </div>
                  <div class="nova-math-preset-formula" id="preset-prev-${idx}"></div>
                </button>
              `
              ).join('')}
            </div>
          </div>

          <!-- Tab Content 3: Symbols & Operators -->
          <div class="nova-math-panel" id="tab-panel-symbols" style="display: none;">
            <div class="nova-math-grid-symbols">
              ${SYMBOLS.map(
                (s) => `
                <button type="button" class="nova-math-sym-btn" data-insert="${encodeURIComponent(s.latex)}" title="${s.latex}">
                  ${s.label}
                </button>
              `
              ).join('')}
            </div>
          </div>

          <!-- Tab Content 4: Greek Letters -->
          <div class="nova-math-panel" id="tab-panel-greek" style="display: none;">
            <div class="nova-math-grid-symbols">
              ${GREEK.map(
                (g) => `
                <button type="button" class="nova-math-sym-btn" data-insert="${encodeURIComponent(g.latex)}" title="${g.latex}">
                  ${g.label}
                </button>
              `
              ).join('')}
            </div>
          </div>

          <!-- Live Preview Box -->
          <div class="nova-form-group" style="margin-top: 4px;">
            <label class="nova-form-label" style="display: flex; justify-content: space-between; align-items: center;">
              <span>Live Equation Preview</span>
              <span style="font-size: 11px; font-weight: normal; color: var(--ne-text-muted);">Rendered with KaTeX</span>
            </label>
            <div id="ne-math-preview" class="nova-math-preview-box"></div>
          </div>

          <!-- LaTeX Expression Input Area -->
          <div class="nova-form-group">
            <label class="nova-form-label">LaTeX Code</label>
            <textarea class="nova-form-textarea" id="ne-math-input" placeholder="Type LaTeX formula or click templates above..." style="min-height: 70px; font-size: 13.5px;">${initialFormula}</textarea>
          </div>

          <!-- Placement Mode -->
          <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 2px;">
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

        <div class="nova-modal-footer">
          <button type="button" class="nova-btn-secondary" data-action="close">Cancel</button>
          <button type="button" class="nova-btn-primary" data-action="save">Insert Equation</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    const input = this.backdrop.querySelector('#ne-math-input') as HTMLTextAreaElement;
    const preview = this.backdrop.querySelector('#ne-math-preview') as HTMLElement;
    const radios = this.backdrop.querySelectorAll('input[name="ne-math-type"]');
    const tabBtns = this.backdrop.querySelectorAll('.nova-math-tab-btn');

    // Render template preview math
    TEMPLATES.forEach((t, idx) => {
      const el = this.backdrop.querySelector(`#tmpl-prev-${idx}`) as HTMLElement;
      if (el) {
        try {
          katex.render(t.display, el, { throwOnError: false, displayMode: false });
        } catch {}
      }
    });

    // Render preset preview math
    PRESETS.forEach((p, idx) => {
      const el = this.backdrop.querySelector(`#preset-prev-${idx}`) as HTMLElement;
      if (el) {
        try {
          katex.render(p.latex, el, { throwOnError: false, displayMode: true });
        } catch {}
      }
    });

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
      } catch (err) {
        preview.innerHTML = `<span style="color: var(--ne-danger); font-size: 12px;">Syntax error in LaTeX equation</span>`;
      }
    };

    updatePreview();
    input.addEventListener('input', updatePreview);
    setTimeout(() => input.focus(), 50);

    // Tab switching
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        tabBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const tab = btn.getAttribute('data-tab') as any;
        this.activeTab = tab;

        this.backdrop.querySelectorAll('.nova-math-panel').forEach((p) => {
          (p as HTMLElement).style.display = 'none';
        });

        const activePanel = this.backdrop.querySelector(`#tab-panel-${tab}`) as HTMLElement;
        if (activePanel) activePanel.style.display = 'block';
      });
    });

    // Insertion helper: inserts text at cursor in textarea
    const insertAtCursor = (textToInsert: string) => {
      const start = input.selectionStart;
      const end = input.selectionEnd;
      const val = input.value;
      input.value = val.substring(0, start) + textToInsert + val.substring(end);
      input.selectionStart = input.selectionEnd = start + textToInsert.length;
      input.focus();
      updatePreview();
    };

    // Template clicks
    this.backdrop.querySelectorAll('[data-insert]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const raw = btn.getAttribute('data-insert');
        if (raw) {
          insertAtCursor(decodeURIComponent(raw));
        }
      });
    });

    // Preset full replacement clicks
    this.backdrop.querySelectorAll('[data-insert-full]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const raw = btn.getAttribute('data-insert-full');
        if (raw) {
          input.value = decodeURIComponent(raw);
          updatePreview();
          input.focus();
        }
      });
    });

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
