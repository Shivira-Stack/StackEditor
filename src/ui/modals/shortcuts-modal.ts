import { icons } from '../../core/icons';

export class ShortcutsModal {
  private backdrop: HTMLElement;

  constructor() {
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'nova-modal-backdrop';
  }

  public show(): void {
    this.backdrop.innerHTML = `
      <div class="nova-modal modal-large">
        <div class="nova-modal-header">
          <h3 class="nova-modal-title">Help & Keyboard Shortcuts</h3>
          <button type="button" class="nova-modal-close-btn" data-action="close">${icons.close}</button>
        </div>
        <div class="nova-modal-body" style="max-height: 400px; overflow-y: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <thead>
              <tr style="border-bottom: 2px solid var(--ne-border-color); text-align: left;">
                <th style="padding: 8px 12px;">Action</th>
                <th style="padding: 8px 12px;">Windows / Linux</th>
                <th style="padding: 8px 12px;">macOS</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--ne-border-color);"><td style="padding: 8px 12px;">Bold</td><td>Ctrl + B</td><td>Cmd + B</td></tr>
              <tr style="border-bottom: 1px solid var(--ne-border-color);"><td style="padding: 8px 12px;">Italic</td><td>Ctrl + I</td><td>Cmd + I</td></tr>
              <tr style="border-bottom: 1px solid var(--ne-border-color);"><td style="padding: 8px 12px;">Underline</td><td>Ctrl + U</td><td>Cmd + U</td></tr>
              <tr style="border-bottom: 1px solid var(--ne-border-color);"><td style="padding: 8px 12px;">Undo</td><td>Ctrl + Z</td><td>Cmd + Z</td></tr>
              <tr style="border-bottom: 1px solid var(--ne-border-color);"><td style="padding: 8px 12px;">Redo</td><td>Ctrl + Y</td><td>Cmd + Shift + Z</td></tr>
              <tr style="border-bottom: 1px solid var(--ne-border-color);"><td style="padding: 8px 12px;">Find & Replace</td><td>Ctrl + F</td><td>Cmd + F</td></tr>
              <tr style="border-bottom: 1px solid var(--ne-border-color);"><td style="padding: 8px 12px;">Heading 1 - 6</td><td>Ctrl + Alt + 1..6</td><td>Cmd + Option + 1..6</td></tr>
              <tr style="border-bottom: 1px solid var(--ne-border-color);"><td style="padding: 8px 12px;">Bullet List</td><td>Ctrl + Shift + 8</td><td>Cmd + Shift + 8</td></tr>
              <tr style="border-bottom: 1px solid var(--ne-border-color);"><td style="padding: 8px 12px;">Numbered List</td><td>Ctrl + Shift + 7</td><td>Cmd + Shift + 7</td></tr>
              <tr style="border-bottom: 1px solid var(--ne-border-color);"><td style="padding: 8px 12px;">Slash Commands</td><td>Type <code>/</code> on empty line</td><td>Type <code>/</code> on empty line</td></tr>
            </tbody>
          </table>
          <div style="margin-top: 14px; padding: 12px; background: var(--ne-bg-secondary); border-radius: var(--ne-radius-md); font-size: 12px;">
            <strong>StackEditor v1.0.0</strong> — 100% Free Open-Source Text Platform.
          </div>
        </div>
        <div class="nova-modal-footer">
          <button type="button" class="nova-btn-primary" data-action="close">Close</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.backdrop);

    this.backdrop.querySelectorAll('[data-action="close"]').forEach((el) => {
      el.addEventListener('click', () => this.close());
    });

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
