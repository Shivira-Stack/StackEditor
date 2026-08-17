import type { Editor } from '@tiptap/core';
import { icons } from '../core/icons';
import { LinkModal } from './modals/link-modal';

export class BubbleMenu {
  private container: HTMLElement;
  private editor: Editor;
  private parentWrapper: HTMLElement;

  constructor(parentWrapper: HTMLElement, editor: Editor) {
    this.parentWrapper = parentWrapper;
    this.editor = editor;
    this.container = document.createElement('div');
    this.container.className = 'nova-bubble-menu is-hidden';
    this.render();
    this.bindEvents();
    this.parentWrapper.appendChild(this.container);
  }

  private render(): void {
    this.container.innerHTML = `
      <button type="button" class="nova-btn" data-action="bold" title="Bold">${icons.bold}</button>
      <button type="button" class="nova-btn" data-action="italic" title="Italic">${icons.italic}</button>
      <button type="button" class="nova-btn" data-action="underline" title="Underline">${icons.underline}</button>
      <button type="button" class="nova-btn" data-action="strike" title="Strikethrough">${icons.strikethrough}</button>
      <button type="button" class="nova-btn" data-action="code" title="Inline Code">${icons.code}</button>
      <div class="nova-bubble-divider"></div>
      <button type="button" class="nova-btn" data-action="heading1" title="Heading 1">${icons.heading1}</button>
      <button type="button" class="nova-btn" data-action="heading2" title="Heading 2">${icons.heading2}</button>
      <button type="button" class="nova-btn" data-action="link" title="Link">${icons.link}</button>
      <button type="button" class="nova-btn" data-action="quote" title="Quote">${icons.quote}</button>
    `;
  }

  private bindEvents(): void {
    const editor = this.editor;

    this.container.querySelector('[data-action="bold"]')?.addEventListener('click', () => editor.chain().focus().toggleBold().run());
    this.container.querySelector('[data-action="italic"]')?.addEventListener('click', () => editor.chain().focus().toggleItalic().run());
    this.container.querySelector('[data-action="underline"]')?.addEventListener('click', () => editor.chain().focus().toggleUnderline().run());
    this.container.querySelector('[data-action="strike"]')?.addEventListener('click', () => editor.chain().focus().toggleStrike().run());
    this.container.querySelector('[data-action="code"]')?.addEventListener('click', () => editor.chain().focus().toggleCode().run());
    this.container.querySelector('[data-action="heading1"]')?.addEventListener('click', () => editor.chain().focus().toggleHeading({ level: 1 }).run());
    this.container.querySelector('[data-action="heading2"]')?.addEventListener('click', () => editor.chain().focus().toggleHeading({ level: 2 }).run());
    this.container.querySelector('[data-action="link"]')?.addEventListener('click', () => new LinkModal(editor).show());
    this.container.querySelector('[data-action="quote"]')?.addEventListener('click', () => editor.chain().focus().toggleBlockquote().run());

    // Hide bubble menu when clicking toolbar or menubar
    this.parentWrapper.querySelector('.nova-toolbar')?.addEventListener('mousedown', () => this.hide());
    this.parentWrapper.querySelector('.nova-menubar')?.addEventListener('mousedown', () => this.hide());
  }

  public hide(): void {
    this.container.classList.add('is-hidden');
  }

  public update(): void {
    // If any toolbar/menubar dropdown is active, don't show bubble menu
    if (this.parentWrapper.querySelector('.nova-toolbar-dropdown.is-open, .nova-menu-item.is-open')) {
      this.hide();
      return;
    }

    const { selection } = this.editor.state;
    const isTextSelected = !selection.empty && selection.from !== selection.to;

    if (!isTextSelected || this.editor.isActive('image') || this.editor.isActive('table')) {
      this.hide();
      return;
    }

    // Position bubble menu right above the selection coordinates
    const { view } = this.editor;
    const { from, to } = selection;
    const start = view.coordsAtPos(from);
    const end = view.coordsAtPos(to);

    const wrapperRect = this.parentWrapper.getBoundingClientRect();
    const bodyEl = this.parentWrapper.querySelector('.nova-editor-body');
    const bodyRect = bodyEl ? bodyEl.getBoundingClientRect() : wrapperRect;

    const left = (start.left + end.left) / 2 - wrapperRect.left - 130;
    let top = start.top - wrapperRect.top - 46;

    // If selection is too close to toolbar/top edge, display below selection
    if (start.top - bodyRect.top < 48) {
      top = end.bottom - wrapperRect.top + 8;
    }

    this.container.style.left = `${Math.max(10, Math.min(wrapperRect.width - 290, left))}px`;
    this.container.style.top = `${Math.max(10, top)}px`;

    // Active state highlighting
    const updateActive = (selector: string, isActive: boolean) => {
      const el = this.container.querySelector(selector);
      if (el) el.classList.toggle('is-active', isActive);
    };

    updateActive('[data-action="bold"]', this.editor.isActive('bold'));
    updateActive('[data-action="italic"]', this.editor.isActive('italic'));
    updateActive('[data-action="underline"]', this.editor.isActive('underline'));
    updateActive('[data-action="strike"]', this.editor.isActive('strike'));
    updateActive('[data-action="code"]', this.editor.isActive('code'));
    updateActive('[data-action="heading1"]', this.editor.isActive('heading', { level: 1 }));
    updateActive('[data-action="heading2"]', this.editor.isActive('heading', { level: 2 }));
    updateActive('[data-action="quote"]', this.editor.isActive('blockquote'));
    updateActive('[data-action="link"]', this.editor.isActive('link'));

    this.container.classList.remove('is-hidden');
  }

  public destroy(): void {
    if (this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
