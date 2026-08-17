import { icons } from '../../core/icons';
import type { Editor } from '@tiptap/core';

export class FindReplaceModal {
  private backdrop: HTMLElement;
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'nova-modal-backdrop';
  }

  public show(): void {
    const storage = (this.editor.storage as any).findReplace || {};
    const searchTerm = storage.searchTerm || '';
    const replaceTerm = storage.replaceTerm || '';

    this.backdrop.innerHTML = `
      <div class="nova-modal">
        <div class="nova-modal-header">
          <h3 class="nova-modal-title">Find & Replace</h3>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>
        <div class="nova-modal-body">
          <div class="nova-form-group">
            <label class="nova-form-label">Find text</label>
            <div style="display: flex; gap: 8px;">
              <input type="text" class="nova-form-input" id="ne-find-term" placeholder="Search term..." value="${searchTerm}" style="flex: 1;" />
              <button type="button" class="nova-btn-secondary" id="ne-find-prev" title="Previous match">▲</button>
              <button type="button" class="nova-btn-secondary" id="ne-find-next" title="Next match">▼</button>
            </div>
            <div id="ne-match-count" style="font-size: 12px; color: var(--ne-text-muted); margin-top: 2px;"></div>
          </div>
          <div class="nova-form-group">
            <label class="nova-form-label">Replace with</label>
            <input type="text" class="nova-form-input" id="ne-replace-term" placeholder="Replacement text..." value="${replaceTerm}" />
          </div>
          <div style="display: flex; gap: 16px;">
            <label style="display: flex; align-items: center; gap: 6px; font-size: 13px; cursor: pointer;">
              <input type="checkbox" id="ne-case-sensitive" /> Match Case
            </label>
            <label style="display: flex; align-items: center; gap: 6px; font-size: 13px; cursor: pointer;">
              <input type="checkbox" id="ne-regex" /> Regular Expression
            </label>
          </div>
        </div>
        <div class="nova-modal-footer" style="justify-content: space-between;">
          <button type="button" class="nova-btn-secondary" id="ne-replace-all" style="color: var(--ne-accent);">Replace All</button>
          <div style="display: flex; gap: 8px;">
            <button type="button" class="nova-btn-secondary" data-action="close">Done</button>
            <button type="button" class="nova-btn-primary" id="ne-replace-one">Replace</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    const findInput = this.backdrop.querySelector('#ne-find-term') as HTMLInputElement;
    const replaceInput = this.backdrop.querySelector('#ne-replace-term') as HTMLInputElement;
    const caseCheckbox = this.backdrop.querySelector('#ne-case-sensitive') as HTMLInputElement;
    const regexCheckbox = this.backdrop.querySelector('#ne-regex') as HTMLInputElement;
    const matchCountEl = this.backdrop.querySelector('#ne-match-count') as HTMLElement;

    const updateStatus = () => {
      const st = (this.editor.storage as any).findReplace;
      if (st && st.matches) {
        const total = st.matches.length;
        if (total > 0) {
          matchCountEl.innerText = `${st.currentIndex + 1} of ${total} matches`;
        } else if (findInput.value.trim()) {
          matchCountEl.innerText = 'No matches found';
        } else {
          matchCountEl.innerText = '';
        }
      }
    };

    findInput.addEventListener('input', () => {
      (this.editor.commands as any).setSearchTerm(findInput.value);
      updateStatus();
    });

    replaceInput.addEventListener('input', () => {
      (this.editor.commands as any).setReplaceTerm(replaceInput.value);
    });

    caseCheckbox.addEventListener('change', () => {
      (this.editor.commands as any).setCaseSensitive(caseCheckbox.checked);
      updateStatus();
    });

    regexCheckbox.addEventListener('change', () => {
      (this.editor.commands as any).setRegex(regexCheckbox.checked);
      updateStatus();
    });

    this.backdrop.querySelector('#ne-find-next')?.addEventListener('click', () => {
      (this.editor.commands as any).findNext();
      updateStatus();
    });

    this.backdrop.querySelector('#ne-find-prev')?.addEventListener('click', () => {
      (this.editor.commands as any).findPrevious();
      updateStatus();
    });

    this.backdrop.querySelector('#ne-replace-one')?.addEventListener('click', () => {
      (this.editor.commands as any).replaceCurrent();
      updateStatus();
    });

    this.backdrop.querySelector('#ne-replace-all')?.addEventListener('click', () => {
      (this.editor.commands as any).replaceAllMatches();
      updateStatus();
    });

    this.backdrop.querySelectorAll('[data-action="close"]').forEach((el) => {
      el.addEventListener('click', () => this.close());
    });

    this.backdrop.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
      if (e.key === 'Enter' && e.target === findInput) {
        e.preventDefault();
        (this.editor.commands as any).findNext();
        updateStatus();
      }
    });

    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) this.close();
    });

    if (findInput.value) {
      (this.editor.commands as any).setSearchTerm(findInput.value);
      updateStatus();
    }
    findInput.focus();
  }

  public close(): void {
    if (this.backdrop.parentNode) {
      this.backdrop.parentNode.removeChild(this.backdrop);
    }
  }
}
