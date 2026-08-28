import { icons } from '../../core/icons';
import type { Editor } from '@tiptap/core';
import katex from 'katex';
import { ALL_MATH_ITEMS, SYMBOL_ITEMS, GREEK_ITEMS, MathItem } from './handbook-formulas';

export { ALL_MATH_ITEMS, SYMBOL_ITEMS, GREEK_ITEMS };

export class MathModal {
  private backdrop: HTMLElement;
  private editor: Editor;
  private currentTab = 'arithmetic';
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
      <div class="nova-modal nova-math-modal" style="max-width: 700px; width: 92vw;">
        <!-- Header -->
        <div class="nova-modal-header" style="padding: 10px 16px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px; color: var(--ne-accent); font-weight: bold; line-height: 1;">∑</span>
            <h3 class="nova-modal-title" style="font-size: 14px;">Global Formula Studio (Class 1 to PhD)</h3>
          </div>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>

        <!-- Body -->
        <div class="nova-modal-body" style="gap: 7px; padding: 10px 16px;">
          <!-- Search & Filter Bar -->
          <div style="display: flex; gap: 6px; align-items: center;">
            <input type="text" id="ne-math-search" class="nova-form-input" placeholder="🔍 Search 580+ formulas (e.g. area, interest, quadratic, taylor, newton, gibbs, bayes, sigmoid, fourier, bernoulli)..." style="font-size: 11.5px; padding: 4px 8px; height: 28px; flex: 1;" />
          </div>

          <!-- Category Tabs -->
          <div class="nova-math-tabs" id="ne-math-tab-bar">
            <button type="button" class="nova-math-tab-btn is-active" data-tab="arithmetic">🧮 Arithmetic</button>
            <button type="button" class="nova-math-tab-btn" data-tab="algebra">📐 Algebra</button>
            <button type="button" class="nova-math-tab-btn" data-tab="geometry">📐 Geometry</button>
            <button type="button" class="nova-math-tab-btn" data-tab="calculus">📈 Calculus</button>
            <button type="button" class="nova-math-tab-btn" data-tab="matrices">🔢 Matrices</button>
            <button type="button" class="nova-math-tab-btn" data-tab="trig">📐 Trig</button>
            <button type="button" class="nova-math-tab-btn" data-tab="physics">⚡ Physics</button>
            <button type="button" class="nova-math-tab-btn" data-tab="chemistry">🧪 Chemistry</button>
            <button type="button" class="nova-math-tab-btn" data-tab="biology">🧬 Biology</button>
            <button type="button" class="nova-math-tab-btn" data-tab="stats">📊 Stats & AI</button>
            <button type="button" class="nova-math-tab-btn" data-tab="cs">💻 CompSci</button>
            <button type="button" class="nova-math-tab-btn" data-tab="engineering">⚙️ Engg</button>
            <button type="button" class="nova-math-tab-btn" data-tab="finance">💰 Finance</button>
            <button type="button" class="nova-math-tab-btn" data-tab="earth">🌍 Earth & Astro</button>
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
              <span style="font-size: 10px; font-weight: normal; color: var(--ne-text-muted);">Real-time KaTeX Output</span>
            </label>
            <div id="ne-math-preview" class="nova-math-preview-box"></div>
          </div>

          <!-- LaTeX Expression Textarea -->
          <div class="nova-form-group" style="gap: 3px;">
            <label class="nova-form-label" style="font-size: 11px; margin-bottom: 0;">LaTeX Code</label>
            <textarea class="nova-form-textarea" id="ne-math-input" placeholder="Type LaTeX formula or click any template above..." style="min-height: 36px; height: 38px; padding: 5px 8px; font-size: 12px; font-family: var(--ne-font-mono); resize: none;">${initialFormula}</textarea>
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

      // Search across all 580+ formulas
      if (q) {
        const mathMatches = ALL_MATH_ITEMS.filter(
          (m) =>
            m.name.toLowerCase().includes(q) ||
            m.latex.toLowerCase().includes(q) ||
            (m.desc && m.desc.toLowerCase().includes(q)) ||
            (m.chapter && m.chapter.toLowerCase().includes(q)) ||
            (m.section && m.section.toLowerCase().includes(q))
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

        let html = `<div class="nova-math-panel"><div style="font-size: 11px; color: var(--ne-text-muted); margin-bottom: 4px;">Found ${mathMatches.length + symMatches.length + greekMatches.length} results for "${q}":</div>`;

        if (mathMatches.length === 0 && symMatches.length === 0 && greekMatches.length === 0) {
          html += `<div style="padding: 16px; text-align: center; color: var(--ne-text-muted); font-size: 12px;">No matching formulas found. Try another search keyword.</div></div>`;
          panelsContainer.innerHTML = html;
          return;
        }

        if (mathMatches.length > 0) {
          html += `<div class="nova-math-grid-templates" style="margin-bottom: 6px;">`;
          mathMatches.slice(0, 120).forEach((m, idx) => {
            html += `
              <button type="button" class="nova-math-card" data-act="replace" data-latex="${encodeURIComponent(m.latex)}" title="${m.name}: ${m.desc || ''}">
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
        mathMatches.slice(0, 120).forEach((m, idx) => {
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
        let html = `<div class="nova-math-panel">`;
        html += `
          <div style="font-size: 11px; font-weight: 600; color: var(--ne-text-muted); margin: 4px 0 2px;">Mathematical & Scientific Symbols</div>
          <div class="nova-math-grid-symbols" style="margin-bottom: 4px;">
            ${SYMBOL_ITEMS.map((s) => `
              <button type="button" class="nova-math-sym-btn" data-act="insert" data-latex="${encodeURIComponent(s.latex)}" title="${s.desc} (${s.latex})">
                ${s.label}
              </button>
            `).join('')}
          </div>
        `;
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
              ${lower.map((g) => `
                <button type="button" class="nova-math-sym-btn" data-act="insert" data-latex="${encodeURIComponent(g.latex)}" title="${g.name} (${g.latex})">
                  ${g.label}
                </button>
              `).join('')}
            </div>
            <div style="font-size: 11px; font-weight: 600; color: var(--ne-text-muted); margin: 2px 0 3px;">Uppercase Greek Letters</div>
            <div class="nova-math-grid-symbols">
              ${upper.map((g) => `
                <button type="button" class="nova-math-sym-btn" data-act="insert" data-latex="${encodeURIComponent(g.latex)}" title="${g.name} (${g.latex})">
                  ${g.label}
                </button>
              `).join('')}
            </div>
          </div>
        `;
        bindItemClicks();
        return;
      }

      // All discipline tabs
      const items = ALL_MATH_ITEMS.filter((m) => m.category === this.currentTab);
      panelsContainer.innerHTML = `
        <div class="nova-math-panel">
          <div class="nova-math-grid-templates">
            ${items
              .map(
                (m, idx) => `
              <button type="button" class="nova-math-card" data-act="replace" data-latex="${encodeURIComponent(m.latex)}" title="${m.name}: ${m.desc || ''}">
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
        this.currentTab = btn.getAttribute('data-tab') || 'arithmetic';
        renderActivePanel();
      });
    });

    // Initialize panel & preview
    renderActivePanel();
    updatePreview();
    input.addEventListener('input', updatePreview);
    setTimeout(() => {
      input.focus();
      input.select();
    }, 50);

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

      let isBlock = false;
      radios.forEach((r: any) => {
        if (r.checked && r.value === 'block') isBlock = true;
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
