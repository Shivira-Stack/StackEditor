import type { Editor } from '@tiptap/core';
import { i18nDictionary, type SupportedLanguage } from '../core/i18n';

export class StatusBar {
  private container: HTMLElement;
  private editor: Editor;
  private currentLanguage: SupportedLanguage = 'en';

  constructor(container: HTMLElement, editor: Editor) {
    this.container = container;
    this.editor = editor;
    this.render();
  }

  private render(): void {
    this.container.className = 'nova-status-bar';
    this.container.innerHTML = `
      <div class="nova-status-left">
        <div class="nova-status-path" id="ne-status-path">p</div>
      </div>
      <div class="nova-status-right">
        <span class="nova-status-item" id="ne-status-words">
          0 words
        </span>
        <span class="nova-status-item" id="ne-status-chars">
          0 characters
        </span>
        <span class="nova-status-badge" id="ne-status-badge">WYSIWYG</span>
        <span class="nova-status-divider">|</span>
        <span class="nova-status-powered">Powered by <strong class="nova-powered-brand">Shivira Stack</strong></span>
      </div>
    `;
  }

  public updateLanguage(lang: SupportedLanguage): void {
    this.currentLanguage = lang;
    const t = i18nDictionary[lang] || i18nDictionary.en;
    const badgeEl = this.container.querySelector('#ne-status-badge');
    if (badgeEl) badgeEl.textContent = t.statusbar.mode;
    this.update();
  }

  public update(): void {
    const text = this.editor.getText();
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const t = i18nDictionary[this.currentLanguage] || i18nDictionary.en;

    const wordsEl = this.container.querySelector('#ne-status-words');
    const charsEl = this.container.querySelector('#ne-status-chars');
    const pathEl = this.container.querySelector('#ne-status-path');

    if (wordsEl) wordsEl.innerHTML = `<strong>${words.toLocaleString()}</strong> ${t.statusbar.words}`;
    if (charsEl) charsEl.innerHTML = `<strong>${chars.toLocaleString()}</strong> ${t.statusbar.characters}`;

    // Build DOM element path (e.g. p, p › strong, h1, table › tbody › tr › td)
    if (pathEl) {
      try {
        const { $from } = this.editor.state.selection;
        const path: string[] = [];
        for (let i = 1; i <= $from.depth; i++) {
          const name = $from.node(i).type.name;
          if (name !== 'doc') {
            if (name === 'heading') {
              path.push(`h${$from.node(i).attrs.level || 1}`);
            } else if (name === 'bulletList') {
              path.push('ul');
            } else if (name === 'orderedList') {
              path.push('ol');
            } else if (name === 'listItem') {
              path.push('li');
            } else if (name === 'table') {
              path.push('table');
            } else if (name === 'tableRow') {
              path.push('tr');
            } else if (name === 'tableCell') {
              path.push('td');
            } else if (name === 'tableHeader') {
              path.push('th');
            } else if (name === 'paragraph') {
              path.push('p');
            } else if (name === 'blockquote') {
              path.push('blockquote');
            } else if (name === 'codeBlock') {
              path.push('pre');
            } else {
              path.push(name);
            }
          }
        }

        const marks = $from.marks();
        marks.forEach((m) => {
          path.push(m.type.name);
        });

        if (path.length === 0) path.push('p');
        pathEl.innerHTML = path.map((tag) => `<span class="nova-path-tag">${tag}</span>`).join(' <span class="nova-path-sep">›</span> ');
      } catch {
        pathEl.textContent = 'p';
      }
    }
  }
}
