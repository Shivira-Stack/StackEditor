import { icons } from '../../core/icons';
import type { Editor } from '@tiptap/core';

export class TableGridModal {
  private backdrop: HTMLElement;
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'nova-modal-backdrop';
  }

  public show(): void {
    let selectedRows = 3;
    let selectedCols = 3;

    this.backdrop.innerHTML = `
      <div class="nova-modal" style="max-width: 320px;">
        <div class="nova-modal-header">
          <h3 class="nova-modal-title">Insert Table</h3>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>
        <div class="nova-modal-body" style="align-items: center;">
          <div class="nova-grid-picker" id="ne-grid-picker">
            ${Array.from({ length: 64 })
              .map((_, i) => {
                const r = Math.floor(i / 8) + 1;
                const c = (i % 8) + 1;
                return `<div class="nova-grid-cell ${r <= 3 && c <= 3 ? 'highlighted' : ''}" data-row="${r}" data-col="${c}"></div>`;
              })
              .join('')}
          </div>
          <div class="nova-grid-label" id="ne-grid-label">3 × 3 Table</div>
          <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
            <input type="checkbox" id="ne-table-header" checked />
            <label for="ne-table-header" class="nova-form-label" style="margin: 0; cursor: pointer;">Include header row</label>
          </div>
        </div>
        <div class="nova-modal-footer">
          <button type="button" class="nova-btn-secondary" data-action="close">Cancel</button>
          <button type="button" class="nova-btn-primary" data-action="insert">Insert</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    const gridPicker = this.backdrop.querySelector('#ne-grid-picker') as HTMLElement;
    const gridLabel = this.backdrop.querySelector('#ne-grid-label') as HTMLElement;
    const headerCheckbox = this.backdrop.querySelector('#ne-table-header') as HTMLInputElement;

    const cells = gridPicker.querySelectorAll('.nova-grid-cell');

    const updateHighlight = (rows: number, cols: number) => {
      selectedRows = rows;
      selectedCols = cols;
      gridLabel.innerText = `${cols} × ${rows} Table`;

      cells.forEach((cell) => {
        const r = parseInt(cell.getAttribute('data-row') || '1', 10);
        const c = parseInt(cell.getAttribute('data-col') || '1', 10);
        if (r <= rows && c <= cols) {
          cell.classList.add('highlighted');
        } else {
          cell.classList.remove('highlighted');
        }
      });
    };

    cells.forEach((cell) => {
      cell.addEventListener('mouseenter', () => {
        const r = parseInt(cell.getAttribute('data-row') || '1', 10);
        const c = parseInt(cell.getAttribute('data-col') || '1', 10);
        updateHighlight(r, c);
      });

      cell.addEventListener('click', () => {
        handleInsert();
      });
    });

    this.backdrop.querySelectorAll('[data-action="close"]').forEach((el) => {
      el.addEventListener('click', () => this.close());
    });

    const handleInsert = () => {
      this.editor.chain().focus().insertTable({
        rows: selectedRows,
        cols: selectedCols,
        withHeaderRow: headerCheckbox.checked,
      }).run();
      this.close();
    };

    this.backdrop.querySelector('[data-action="insert"]')?.addEventListener('click', handleInsert);

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
