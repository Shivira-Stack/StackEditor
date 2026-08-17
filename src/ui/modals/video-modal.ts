import { icons } from '../../core/icons';
import type { Editor } from '@tiptap/core';

export class VideoModal {
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
          <h3 class="nova-modal-title">Embed Video</h3>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>
        <div class="nova-modal-body">
          <div class="nova-form-group">
            <label class="nova-form-label">Video URL (YouTube, Vimeo, MP4)</label>
            <input type="url" class="nova-form-input" id="ne-video-url" placeholder="https://www.youtube.com/watch?v=..." />
          </div>
          <p style="font-size: 12px; color: var(--ne-text-muted); margin: 0;">
            Supports YouTube videos, Vimeo links, or direct MP4 video URLs.
          </p>
        </div>
        <div class="nova-modal-footer">
          <button type="button" class="nova-btn-secondary" data-action="close">Cancel</button>
          <button type="button" class="nova-btn-primary" data-action="save">Embed Video</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    const urlInput = this.backdrop.querySelector('#ne-video-url') as HTMLInputElement;
    urlInput.focus();

    this.backdrop.querySelectorAll('[data-action="close"]').forEach((el) => {
      el.addEventListener('click', () => this.close());
    });

    const handleSave = () => {
      let url = urlInput.value.trim();
      if (!url) return;

      // Check YouTube
      const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
      if (ytMatch && ytMatch[1]) {
        const embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}`;
        this.editor.chain().focus().insertContent(`
          <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 1.5em 0; border-radius: 8px;">
            <iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
          </div>
        `).run();
      } else {
        // Direct video tag or iframe
        this.editor.chain().focus().insertContent(`
          <div style="margin: 1.5em 0; max-width: 100%;">
            <video src="${url}" controls style="max-width: 100%; border-radius: 8px;"></video>
          </div>
        `).run();
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
