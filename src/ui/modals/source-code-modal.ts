import { icons } from '../../core/icons';
import type { Editor } from '@tiptap/core';

export class SourceCodeModal {
  private backdrop: HTMLElement;
  private editor: Editor;
  private isDarkMode: boolean = false;
  private isFullscreen: boolean = false;
  private fontSize: number = 13.5;

  constructor(editor: Editor) {
    this.editor = editor;
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'nova-modal-backdrop';
  }

  private formatHTML(html: string): string {
    let tab = '  ';
    let result = '';
    let indent = '';

    const clean = html.replace(/>\s*</g, '><').trim();
    const tokens = clean.split(/(<[^>]+>)/g).filter(Boolean);

    tokens.forEach((token) => {
      if (token.startsWith('</')) {
        if (indent.length >= tab.length) {
          indent = indent.substring(tab.length);
        }
        result += indent + token + '\n';
      } else if (token.startsWith('<') && !token.startsWith('<!') && !token.endsWith('/>')) {
        const isSelfClosing = token.match(/<(img|hr|br|input|meta|link|col)[^>]*>/i);
        result += indent + token + '\n';
        if (!isSelfClosing) {
          indent += tab;
        }
      } else if (token.startsWith('<') && (token.endsWith('/>') || token.startsWith('<!'))) {
        result += indent + token + '\n';
      } else {
        const text = token.trim();
        if (text) {
          result += indent + text + '\n';
        }
      }
    });

    return result.trim();
  }

  public show(): void {
    const rawHTML = this.editor.getHTML();
    let formatted = rawHTML;
    try {
      formatted = this.formatHTML(rawHTML);
    } catch {
      formatted = rawHTML;
    }

    this.backdrop.innerHTML = `
      <div class="nova-modal nova-source-modal" id="nova-source-modal-box">
        <!-- Oxide Dialog Header -->
        <div class="nova-modal-header">
          <h2 class="nova-modal-title">Source Code</h2>
          <button type="button" class="nova-modal-close-btn" data-action="close" title="Close">
            ${icons.close}
          </button>
        </div>

        <!-- Toolbar Subheader -->
        <div class="nova-source-header">
          <div class="nova-source-left">
            <button type="button" class="nova-source-btn" data-action="format-code" title="Format HTML">
              <span class="nova-source-icon" style="color: #006ce0;">⚡</span>
              <span>Format HTML</span>
            </button>
            <button type="button" class="nova-source-btn" data-action="copy-code" title="Copy code to clipboard">
              <span class="nova-source-icon">${icons.copy}</span>
              <span>Copy code</span>
            </button>
          </div>

          <div class="nova-source-center">
            <button type="button" class="nova-source-pill-btn" data-action="toggle-theme" id="btn-theme-label">Theme: Light</button>
            <button type="button" class="nova-source-pill-btn" data-action="font-minus" title="Decrease font size">A−</button>
            <span style="font-size: 12px; color: #64748b; font-weight: 500; min-width: 32px; text-align: center;" id="source-zoom-label">14px</span>
            <button type="button" class="nova-source-pill-btn" data-action="font-plus" title="Increase font size">A+</button>
          </div>

          <div class="nova-source-right">
            <button type="button" class="nova-source-btn-icon" data-action="fullscreen-code" title="Toggle Fullscreen">
              ${icons.fullscreen}
            </button>
          </div>
        </div>

        <!-- Code Editor Body with Line Numbers -->
        <div class="nova-source-editor-wrap" id="nova-source-editor-wrap">
          <div class="nova-source-gutter" id="nova-source-gutter"></div>
          <textarea class="nova-source-textarea" id="ne-source-code" spellcheck="false" wrap="off">${formatted}</textarea>
        </div>

        <!-- Oxide Dialog Footer -->
        <div class="nova-modal-footer">
          <button type="button" class="nova-btn-secondary" data-action="close">Cancel</button>
          <button type="button" class="nova-btn-primary" data-action="save">Save</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    const modalBox = this.backdrop.querySelector('#nova-source-modal-box') as HTMLElement;
    const editorWrap = this.backdrop.querySelector('#nova-source-editor-wrap') as HTMLElement;
    const textarea = this.backdrop.querySelector('#ne-source-code') as HTMLTextAreaElement;
    const gutter = this.backdrop.querySelector('#nova-source-gutter') as HTMLElement;
    const zoomLabel = this.backdrop.querySelector('#source-zoom-label') as HTMLElement;
    const themeLabel = this.backdrop.querySelector('#btn-theme-label') as HTMLElement;

    const updateGutter = () => {
      const lines = textarea.value.split('\n');
      let gutterHTML = '';
      for (let i = 1; i <= lines.length; i++) {
        gutterHTML += `<div class="nova-gutter-line"><span class="nova-line-num">${i}</span></div>`;
      }
      gutter.innerHTML = gutterHTML;
    };

    const updateFontSize = () => {
      const rounded = Math.round(this.fontSize);
      textarea.style.fontSize = `${rounded}px`;
      gutter.style.fontSize = `${rounded}px`;
      const lineHeight = Math.round(rounded * 1.55);
      textarea.style.lineHeight = `${lineHeight}px`;
      gutter.style.lineHeight = `${lineHeight}px`;
      gutter.querySelectorAll('.nova-gutter-line').forEach((el) => {
        (el as HTMLElement).style.height = `${lineHeight}px`;
      });
      if (zoomLabel) zoomLabel.textContent = `${rounded}px`;
    };

    // Synchronize gutter and textarea scrolling
    textarea.addEventListener('scroll', () => {
      gutter.scrollTop = textarea.scrollTop;
    });

    textarea.addEventListener('input', () => {
      updateGutter();
    });

    // Initialize line numbers & font size
    updateGutter();
    updateFontSize();
    setTimeout(() => textarea.focus(), 50);

    // Event Handlers
    this.backdrop.querySelector('[data-action="copy-code"]')?.addEventListener('click', () => {
      navigator.clipboard.writeText(textarea.value).then(() => {
        const btn = this.backdrop.querySelector('[data-action="copy-code"] span:last-child');
        if (btn) {
          const original = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.textContent = original;
          }, 1800);
        }
      });
    });

    this.backdrop.querySelector('[data-action="format-code"]')?.addEventListener('click', () => {
      try {
        textarea.value = this.formatHTML(textarea.value);
        updateGutter();
      } catch (err) {
        console.error(err);
      }
    });

    this.backdrop.querySelector('[data-action="toggle-theme"]')?.addEventListener('click', () => {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        editorWrap.classList.add('dark-theme');
        if (themeLabel) themeLabel.textContent = 'Theme: Dark';
      } else {
        editorWrap.classList.remove('dark-theme');
        if (themeLabel) themeLabel.textContent = 'Theme: Light';
      }
    });

    this.backdrop.querySelector('[data-action="font-plus"]')?.addEventListener('click', () => {
      this.fontSize = Math.min(22, this.fontSize + 1);
      updateFontSize();
    });

    this.backdrop.querySelector('[data-action="font-minus"]')?.addEventListener('click', () => {
      this.fontSize = Math.max(10, this.fontSize - 1);
      updateFontSize();
    });

    this.backdrop.querySelector('[data-action="fullscreen-code"]')?.addEventListener('click', () => {
      this.isFullscreen = !this.isFullscreen;
      if (this.isFullscreen) {
        modalBox.classList.add('is-fullscreen');
      } else {
        modalBox.classList.remove('is-fullscreen');
      }
    });

    this.backdrop.querySelectorAll('[data-action="close"]').forEach((el) => {
      el.addEventListener('click', () => this.close());
    });

    const handleSave = () => {
      const code = textarea.value;
      this.editor.commands.setContent(code, true);
      this.close();
    };

    this.backdrop.querySelector('[data-action="save"]')?.addEventListener('click', handleSave);

    this.backdrop.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
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
