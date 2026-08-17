import { icons } from '../../core/icons';
import type { Editor } from '@tiptap/core';
import katex from 'katex';

export class MathModal {
  private backdrop: HTMLElement;
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'nova-modal-backdrop';
  }

  public show(): void {
    this.backdrop.innerHTML = `
      <div class="nova-modal">
        <div class="nova-modal-header">
          <h3 class="nova-modal-title">Insert Math Formula (LaTeX)</h3>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>
        <div class="nova-modal-body">
          <div class="nova-form-group">
            <label class="nova-form-label">LaTeX Expression</label>
            <textarea class="nova-form-textarea" id="ne-math-input" placeholder="e.g. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}">\\int_{0}^{\\infty} x^2 e^{-x} dx = 2</textarea>
          </div>
          <div class="nova-form-group">
            <label class="nova-form-label">Live Preview</label>
            <div id="ne-math-preview" style="padding: 16px; background: var(--ne-bg-secondary); border: 1px solid var(--ne-border-color); border-radius: var(--ne-radius-md); text-align: center; min-height: 48px; display: flex; align-items: center; justify-content: center;"></div>
          </div>
          <div class="nova-form-group" style="flex-direction: row; gap: 16px;">
            <label style="display: flex; align-items: center; gap: 6px; font-size: 13px; cursor: pointer;">
              <input type="radio" name="ne-math-type" value="block" checked /> Block Formula
            </label>
            <label style="display: flex; align-items: center; gap: 6px; font-size: 13px; cursor: pointer;">
              <input type="radio" name="ne-math-type" value="inline" /> Inline Formula
            </label>
          </div>
        </div>
        <div class="nova-modal-footer">
          <button type="button" class="nova-btn-secondary" data-action="close">Cancel</button>
          <button type="button" class="nova-btn-primary" data-action="save">Insert Formula</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    const input = this.backdrop.querySelector('#ne-math-input') as HTMLTextAreaElement;
    const preview = this.backdrop.querySelector('#ne-math-preview') as HTMLElement;
    const radios = this.backdrop.querySelectorAll('input[name="ne-math-type"]');

    const updatePreview = () => {
      const formula = input.value.trim();
      try {
        katex.render(formula || '...', preview, {
          throwOnError: false,
          displayMode: true,
        });
      } catch (err) {
        preview.innerText = 'Invalid LaTeX formula';
      }
    };

    updatePreview();
    input.addEventListener('input', updatePreview);
    input.focus();

    this.backdrop.querySelectorAll('[data-action="close"]').forEach((el) => {
      el.addEventListener('click', () => this.close());
    });

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
