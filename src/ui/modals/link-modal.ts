import { icons } from '../../core/icons';
import type { Editor } from '@tiptap/core';

export class LinkModal {
  private backdrop: HTMLElement;
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'nova-modal-backdrop';
  }

  public show(): void {
    const previousUrl = this.editor.getAttributes('link').href || '';
    const previousText = this.editor.state.doc.textBetween(
      this.editor.state.selection.from,
      this.editor.state.selection.to,
      ' '
    );

    this.backdrop.innerHTML = `
      <div class="nova-modal">
        <div class="nova-modal-header">
          <h3 class="nova-modal-title">Insert / Edit Link</h3>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>
        <div class="nova-modal-body">
          <div class="nova-form-group">
            <label class="nova-form-label">Link URL (Web address)</label>
            <input type="url" class="nova-form-input" id="ne-link-url" placeholder="https://example.com" value="${previousUrl}" />
          </div>
          <div class="nova-form-group">
            <label class="nova-form-label">Text to display</label>
            <input type="text" class="nova-form-input" id="ne-link-text" placeholder="Link description" value="${previousText}" />
          </div>
          <div class="nova-form-group" style="flex-direction: row; align-items: center; gap: 8px;">
            <input type="checkbox" id="ne-link-target" checked />
            <label for="ne-link-target" class="nova-form-label" style="margin: 0; cursor: pointer;">Open link in new tab</label>
          </div>
        </div>
        <div class="nova-modal-footer">
          ${previousUrl ? '<button type="button" class="nova-btn-secondary" style="color: var(--ne-danger);" data-action="unlink">Remove Link</button>' : ''}
          <button type="button" class="nova-btn-secondary" data-action="close">Cancel</button>
          <button type="button" class="nova-btn-primary" data-action="save">Save Link</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    const urlInput = this.backdrop.querySelector('#ne-link-url') as HTMLInputElement;
    const textInput = this.backdrop.querySelector('#ne-link-text') as HTMLInputElement;
    const targetCheckbox = this.backdrop.querySelector('#ne-link-target') as HTMLInputElement;

    urlInput.focus();

    this.backdrop.querySelectorAll('[data-action="close"]').forEach((el) => {
      el.addEventListener('click', () => this.close());
    });

    this.backdrop.querySelector('[data-action="unlink"]')?.addEventListener('click', () => {
      this.editor.chain().focus().extendMarkRange('link').unsetLink().run();
      this.close();
    });

    const handleSave = () => {
      const url = urlInput.value.trim();
      const text = textInput.value.trim();

      if (!url) {
        this.editor.chain().focus().extendMarkRange('link').unsetLink().run();
      } else {
        if (text && text !== previousText && !this.editor.state.selection.empty) {
          this.editor.chain().focus().insertContent(`<a href="${url}" target="${targetCheckbox.checked ? '_blank' : '_self'}">${text}</a>`).run();
        } else {
          this.editor.chain().focus().extendMarkRange('link').setLink({
            href: url,
            target: targetCheckbox.checked ? '_blank' : null,
          }).run();
        }
      }
      this.close();
    };

    this.backdrop.querySelector('[data-action="save"]')?.addEventListener('click', handleSave);

    this.backdrop.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSave();
      } else if (e.key === 'Escape') {
        this.close();
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
