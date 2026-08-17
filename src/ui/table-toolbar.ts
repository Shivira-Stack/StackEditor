import type { Editor } from '@tiptap/core';
import { icons } from '../core/icons';

export class TableToolbar {
  private container: HTMLElement;
  private editor: Editor;
  private parentWrapper: HTMLElement;

  constructor(parentWrapper: HTMLElement, editor: Editor) {
    this.parentWrapper = parentWrapper;
    this.editor = editor;
    this.container = document.createElement('div');
    this.container.className = 'nova-table-toolbar';
    this.container.style.display = 'none';
    this.render();
    this.bindEvents();
    this.parentWrapper.appendChild(this.container);
  }

  private render(): void {
    this.container.innerHTML = `
      <button type="button" class="nova-btn" data-action="addRowBefore" title="Insert Row Above">${icons.rowBefore}</button>
      <button type="button" class="nova-btn" data-action="addRowAfter" title="Insert Row Below">${icons.rowAfter}</button>
      <button type="button" class="nova-btn" data-action="deleteRow" title="Delete Row">${icons.deleteRowIcon}</button>
      <div class="nova-toolbar-divider" style="height: 16px;"></div>
      <button type="button" class="nova-btn" data-action="addColumnBefore" title="Insert Column Left">${icons.colBefore}</button>
      <button type="button" class="nova-btn" data-action="addColumnAfter" title="Insert Column Right">${icons.colAfter}</button>
      <button type="button" class="nova-btn" data-action="deleteColumn" title="Delete Column">${icons.deleteColIcon}</button>
      <div class="nova-toolbar-divider" style="height: 16px;"></div>
      <button type="button" class="nova-btn" data-action="mergeCells" title="Merge Selected Cells">${icons.mergeCells}</button>
      <button type="button" class="nova-btn" data-action="splitCell" title="Split Cell">${icons.splitCells}</button>
      <button type="button" class="nova-btn" data-action="toggleHeaderRow" title="Toggle Header Row">${icons.table}</button>
      <div class="nova-toolbar-divider" style="height: 16px;"></div>
      <button type="button" class="nova-btn" data-action="deleteTable" title="Delete Table" style="color: var(--ne-danger);">${icons.deleteTableBox}</button>
    `;
  }

  private bindEvents(): void {
    const editor = this.editor;

    this.container.querySelector('[data-action="addRowBefore"]')?.addEventListener('click', () => editor.chain().focus().addRowBefore().run());
    this.container.querySelector('[data-action="addRowAfter"]')?.addEventListener('click', () => editor.chain().focus().addRowAfter().run());
    this.container.querySelector('[data-action="deleteRow"]')?.addEventListener('click', () => editor.chain().focus().deleteRow().run());

    this.container.querySelector('[data-action="addColumnBefore"]')?.addEventListener('click', () => editor.chain().focus().addColumnBefore().run());
    this.container.querySelector('[data-action="addColumnAfter"]')?.addEventListener('click', () => editor.chain().focus().addColumnAfter().run());
    this.container.querySelector('[data-action="deleteColumn"]')?.addEventListener('click', () => editor.chain().focus().deleteColumn().run());

    this.container.querySelector('[data-action="mergeCells"]')?.addEventListener('click', () => editor.chain().focus().mergeCells().run());
    this.container.querySelector('[data-action="splitCell"]')?.addEventListener('click', () => editor.chain().focus().splitCell().run());
    this.container.querySelector('[data-action="toggleHeaderRow"]')?.addEventListener('click', () => editor.chain().focus().toggleHeaderRow().run());
    this.container.querySelector('[data-action="deleteTable"]')?.addEventListener('click', () => editor.chain().focus().deleteTable().run());
  }

  public update(): void {
    if (!this.editor.isActive('table')) {
      this.container.style.display = 'none';
      return;
    }

    const { selection } = this.editor.state;
    const { view } = this.editor;
    const coords = view.coordsAtPos(selection.from);

    const wrapperRect = this.parentWrapper.getBoundingClientRect();
    const left = coords.left - wrapperRect.left;
    const top = coords.top - wrapperRect.top - 40;

    this.container.style.left = `${Math.max(10, Math.min(wrapperRect.width - 340, left))}px`;
    this.container.style.top = `${Math.max(10, top)}px`;
    this.container.style.display = 'flex';
  }

  public destroy(): void {
    if (this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
