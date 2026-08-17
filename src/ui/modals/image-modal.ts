import { icons } from '../../core/icons';
import type { Editor } from '@tiptap/core';

export class ImageModal {
  private backdrop: HTMLElement;
  private editor: Editor;
  private uploadHandler?: (file: File) => Promise<string>;

  constructor(editor: Editor, uploadHandler?: (file: File) => Promise<string>) {
    this.editor = editor;
    this.uploadHandler = uploadHandler;
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'nova-modal-backdrop';
  }

  public show(): void {
    this.backdrop.innerHTML = `
      <div class="nova-modal">
        <div class="nova-modal-header">
          <h3 class="nova-modal-title">Insert Image</h3>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>
        <div class="nova-modal-body">
          <div class="nova-form-group">
            <label class="nova-form-label">Image URL</label>
            <input type="url" class="nova-form-input" id="ne-img-url" placeholder="https://images.unsplash.com/..." />
          </div>
          <div style="display: flex; align-items: center; gap: 10px; margin: -6px 0;">
            <div style="flex: 1; height: 1px; background: var(--ne-border-color);"></div>
            <span style="font-size: 11px; color: var(--ne-text-muted); text-transform: uppercase;">OR Upload File</span>
            <div style="flex: 1; height: 1px; background: var(--ne-border-color);"></div>
          </div>
          <div class="nova-form-group">
            <input type="file" id="ne-img-file" accept="image/*" class="nova-form-input" style="padding: 6px;" />
          </div>
          <div class="nova-form-group">
            <label class="nova-form-label">Alt text (description for accessibility)</label>
            <input type="text" class="nova-form-input" id="ne-img-alt" placeholder="A descriptive title" />
          </div>
          <div class="nova-form-group">
            <label class="nova-form-label">Caption (optional)</label>
            <input type="text" class="nova-form-input" id="ne-img-caption" placeholder="Optional image caption..." />
          </div>
        </div>
        <div class="nova-modal-footer">
          <button type="button" class="nova-btn-secondary" data-action="close">Cancel</button>
          <button type="button" class="nova-btn-primary" data-action="save">Insert Image</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    const urlInput = this.backdrop.querySelector('#ne-img-url') as HTMLInputElement;
    const fileInput = this.backdrop.querySelector('#ne-img-file') as HTMLInputElement;
    const altInput = this.backdrop.querySelector('#ne-img-alt') as HTMLInputElement;
    const captionInput = this.backdrop.querySelector('#ne-img-caption') as HTMLInputElement;

    urlInput.focus();

    this.backdrop.querySelectorAll('[data-action="close"]').forEach((el) => {
      el.addEventListener('click', () => this.close());
    });

    const handleSave = async () => {
      let src = urlInput.value.trim();
      const alt = altInput.value.trim();
      const caption = captionInput.value.trim();

      if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        if (this.uploadHandler) {
          try {
            src = await this.uploadHandler(file);
          } catch (err) {
            console.error('Image upload failed', err);
            return;
          }
        } else {
          // Fallback to local Base64 Data URL
          src = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
          });
        }
      }

      if (src) {
        this.editor.chain().focus().setImage({
          src,
          alt: alt || undefined,
          ...({ caption } as any),
        } as any).run();
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
