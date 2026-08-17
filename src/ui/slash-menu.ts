import type { Editor } from '@tiptap/core';
import { defaultSlashItems } from '../extensions/slash-command';
import type { SlashMenuItem } from '../core/types';

export class SlashMenu {
  private container: HTMLElement;
  private editor: Editor;
  private parentWrapper: HTMLElement;
  private items: SlashMenuItem[];
  private filteredItems: SlashMenuItem[] = [];
  private selectedIndex = 0;
  private isOpen = false;
  private query = '';
  private triggerPos = 0;

  constructor(parentWrapper: HTMLElement, editor: Editor, items: SlashMenuItem[] = defaultSlashItems) {
    this.parentWrapper = parentWrapper;
    this.editor = editor;
    this.items = items;
    this.filteredItems = items;
    this.container = document.createElement('div');
    this.container.className = 'nova-slash-menu';
    this.container.style.display = 'none';
    this.parentWrapper.appendChild(this.container);
    this.bindEvents();
  }

  private render(): void {
    if (this.filteredItems.length === 0) {
      this.container.innerHTML = `<div style="padding: 12px; font-size: 13px; color: var(--ne-text-muted); text-align: center;">No matching blocks</div>`;
      return;
    }

    let html = '';
    let currentCategory = '';

    this.filteredItems.forEach((item, index) => {
      if (item.category !== currentCategory) {
        currentCategory = item.category;
        html += `<div class="nova-slash-category">${currentCategory}</div>`;
      }

      html += `
        <button type="button" class="nova-slash-item ${index === this.selectedIndex ? 'is-selected' : ''}" data-index="${index}">
          <div class="nova-slash-item-icon">${item.icon}</div>
          <div class="nova-slash-item-info">
            <span class="nova-slash-item-title">${item.title}</span>
            <span class="nova-slash-item-desc">${item.description}</span>
          </div>
        </button>
      `;
    });

    this.container.innerHTML = html;

    this.container.querySelectorAll('.nova-slash-item').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const idx = parseInt(el.getAttribute('data-index') || '0', 10);
        this.executeItem(idx);
      });
    });
  }

  private executeItem(index: number): void {
    const item = this.filteredItems[index];
    if (!item) return;

    // Delete the slash query from document
    const { state } = this.editor;
    const { from } = state.selection;
    this.editor.chain().focus().deleteRange({ from: this.triggerPos, to: from }).run();

    // Execute item command
    item.command(this.editor);
    this.hide();
  }

  public show(coords: { left: number; top: number }, query: string, triggerPos: number): void {
    this.query = query;
    this.triggerPos = triggerPos;
    this.filteredItems = this.items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    this.selectedIndex = 0;

    const wrapperRect = this.parentWrapper.getBoundingClientRect();
    const left = coords.left - wrapperRect.left;
    const top = coords.top - wrapperRect.top + 24;

    this.container.style.left = `${Math.max(10, Math.min(wrapperRect.width - 300, left))}px`;
    this.container.style.top = `${Math.max(10, top)}px`;
    this.container.style.display = 'flex';
    this.isOpen = true;

    this.render();
  }

  public hide(): void {
    this.container.style.display = 'none';
    this.isOpen = false;
  }

  private bindEvents(): void {
    // Keyboard navigation & slash detection
    this.editor.view.dom.addEventListener('keydown', (e: KeyboardEvent) => {
      if (this.isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.selectedIndex = (this.selectedIndex + 1) % Math.max(1, this.filteredItems.length);
          this.render();
          return;
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.selectedIndex = (this.selectedIndex - 1 + this.filteredItems.length) % Math.max(1, this.filteredItems.length);
          this.render();
          return;
        }
        if (e.key === 'Enter' || e.key === 'Tab') {
          if (this.filteredItems.length > 0) {
            e.preventDefault();
            this.executeItem(this.selectedIndex);
            return;
          }
        }
        if (e.key === 'Escape') {
          e.preventDefault();
          this.hide();
          return;
        }
      }
    });

    // Check on selection/input updates for slash triggers
    this.editor.on('transaction', () => {
      const { state } = this.editor;
      const { selection } = state;
      const { $from } = selection;

      if (!selection.empty) {
        if (this.isOpen) this.hide();
        return;
      }

      const textBefore = $from.parent.textBetween(0, $from.parentOffset, undefined, '\ufffc');
      const match = textBefore.match(/(?:^|\s)\/([a-zA-Z0-9]*)$/);

      if (match) {
        const query = match[1];
        const matchIndex = match.index! + (match[0].startsWith(' ') ? 1 : 0);
        const triggerPos = $from.start() + matchIndex;
        const coords = this.editor.view.coordsAtPos($from.pos);
        this.show(coords, query, triggerPos);
      } else if (this.isOpen) {
        this.hide();
      }
    });
  }

  public destroy(): void {
    if (this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
