import { Editor } from '@tiptap/core';
import { createEditorExtensions } from './extensions';
import { Menubar } from '../ui/menubar';
import { Toolbar } from '../ui/toolbar';
import { BubbleMenu } from '../ui/bubble-menu';
import { SlashMenu } from '../ui/slash-menu';
import { TableToolbar } from '../ui/table-toolbar';
import { StatusBar } from '../ui/status-bar';
import { TooltipManager } from '../ui/tooltip';
import { ExportTools } from '../extensions/export-tools';
import { icons } from './icons';
import type { SupportedLanguage } from './i18n';
import type { StackEditorOptions, StackEditorInstance, StackTheme } from './types';

export class StackEditor implements StackEditorInstance {
  public readonly editor: Editor;
  public readonly container: HTMLElement;
  public readonly options: StackEditorOptions;

  private menubar: Menubar | null = null;
  private toolbar: Toolbar | null = null;
  private bubbleMenu: BubbleMenu | null = null;
  private slashMenu: SlashMenu | null = null;
  private tableToolbar: TableToolbar | null = null;
  private statusBar: StatusBar | null = null;
  private isFullscreenState = false;
  private isSourceModeState = false;
  private currentLanguage: SupportedLanguage = 'en';

  private contentMount!: HTMLElement;
  private sourceViewContainer!: HTMLElement;
  private sourceTextarea!: HTMLTextAreaElement;
  private sourceGutter!: HTMLElement;
  private sourceFontSize: number = 13;
  private sourceIsDark: boolean = false;

  public static create(options: StackEditorOptions): StackEditor {
    return new StackEditor(options);
  }

  public static init(options: StackEditorOptions): Promise<StackEditor> {
    return new Promise((resolve) => {
      const instance = new StackEditor({
        ...options,
        onInit: (ed) => {
          options.onInit?.(ed);
          resolve(instance);
        },
      });
    });
  }

  constructor(options: StackEditorOptions) {
    this.options = options;

    // Resolve target mount element
    let targetEl: HTMLElement | null = null;
    if (typeof options.element === 'string') {
      targetEl = document.querySelector(options.element);
    } else {
      targetEl = options.element;
    }

    if (!targetEl) {
      throw new Error(`[StackEditor] Target element "${options.element}" not found.`);
    }

    // Build editor layout DOM
    this.container = document.createElement('div');
    const initTheme = options.theme || 'light';
    this.container.className = `stack-editor-wrapper nova-editor-wrapper theme-${initTheme}`;
    this.container.setAttribute('data-theme', initTheme);

    // Top Menubar mount
    const menubarMount = document.createElement('div');
    menubarMount.className = 'stack-menubar-mount nova-menubar-mount';
    this.container.appendChild(menubarMount);

    // Toolbar Ribbon mount
    const toolbarMount = document.createElement('div');
    toolbarMount.className = 'stack-toolbar-mount nova-toolbar-mount';
    this.container.appendChild(toolbarMount);

    // Editor scroll body & content mount
    const editorBody = document.createElement('div');
    editorBody.className = 'stack-editor-body nova-editor-body';
    this.container.appendChild(editorBody);

    this.contentMount = document.createElement('div');
    this.contentMount.className = 'stack-editor-content nova-editor-content';
    editorBody.appendChild(this.contentMount);

    // Create in-body source code container (hidden by default)
    this.buildInBodySourceView(editorBody);

    // Status Bar mount
    const statusBarMount = document.createElement('div');
    statusBarMount.className = 'stack-statusbar-mount nova-statusbar-mount';
    this.container.appendChild(statusBarMount);

    // Bubble Menu floating mount
    const bubbleMount = document.createElement('div');
    this.container.appendChild(bubbleMount);

    // Replace target element content with StackEditor container
    targetEl.innerHTML = '';
    targetEl.appendChild(this.container);

    // Initialize core ProseMirror TipTap engine
    const extensions = createEditorExtensions({
      placeholder: options.placeholder || 'Type something, or press "/" for commands...',
      uploadImage: options.uploadImage,
      extensions: options.extensions,
    });

    this.editor = new Editor({
      element: this.contentMount,
      extensions,
      content: options.content || '',
      editable: options.editable ?? true,
      autofocus: options.autofocus ?? false,
      onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        options.onChange?.(html, this);
        options.onUpdate?.(this);
        this.statusBar?.update();
        this.toolbar?.updateState();
      },
      onSelectionUpdate: () => {
        options.onSelectionUpdate?.(this);
        this.statusBar?.update();
        this.toolbar?.updateState();
      },
      onFocus: () => {
        options.onFocus?.(this);
      },
      onBlur: () => {
        options.onBlur?.(this);
      },
      onCreate: () => {
        options.onInit?.(this);
      },
    });

    // Mount UI Components
    if (options.menubar !== false) {
      this.menubar = new Menubar(menubarMount, this.editor, this as any);
    }

    if (options.toolbar !== false) {
      this.toolbar = new Toolbar(toolbarMount, this.editor, this as any);
    }

    if (options.bubbleMenu !== false) {
      this.bubbleMenu = new BubbleMenu(bubbleMount, this.editor);
    }

    if (options.slashCommand !== false) {
      this.slashMenu = new SlashMenu(this.container, this.editor);
    }

    if (options.tableToolbar !== false) {
      this.tableToolbar = new TableToolbar(this.container, this.editor);
    }

    if (options.statusBar !== false) {
      this.statusBar = new StatusBar(statusBarMount, this.editor);
    }

    // Initialize custom Oxide tooltip manager
    TooltipManager.init();

    // Set initial language if specified
    if (options.language) {
      this.setLanguage(options.language);
    }

    // Setup global Escape key to exit fullscreen
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isFullscreenState) {
        this.toggleFullscreen();
      }
    });
  }

  private buildInBodySourceView(parent: HTMLElement): void {
    this.sourceViewContainer = document.createElement('div');
    this.sourceViewContainer.className = 'nova-source-inbody';
    this.sourceViewContainer.style.display = 'none';

    // Toolbar inside in-body source mode
    const sourceToolbar = document.createElement('div');
    sourceToolbar.className = 'nova-source-toolbar';
    sourceToolbar.innerHTML = `
      <div class="nova-source-left">
        <span class="nova-source-title">
          <span style="font-weight: 700;">&lt;&gt;</span> HTML Source Code Editor
        </span>
        <button type="button" class="nova-source-btn" id="btn-source-format">Format HTML</button>
        <button type="button" class="nova-source-btn" id="btn-source-theme">Theme: Light</button>
      </div>
      <div class="nova-source-right">
        <button type="button" class="nova-source-btn" id="btn-source-zoom-out">A−</button>
        <span style="font-size: 11px; opacity: 0.8;" id="source-zoom-label">13px</span>
        <button type="button" class="nova-source-btn" id="btn-source-zoom-in">A+</button>
        <button type="button" class="nova-source-btn nova-source-btn-primary" id="btn-source-save-exit">Save & Exit</button>
      </div>
    `;

    // Code area with line numbers gutter
    const codeArea = document.createElement('div');
    codeArea.className = 'nova-source-area';

    this.sourceGutter = document.createElement('div');
    this.sourceGutter.className = 'nova-source-gutter';

    this.sourceTextarea = document.createElement('textarea');
    this.sourceTextarea.className = 'nova-source-textarea';
    this.sourceTextarea.spellcheck = false;

    // Synchronize gutter line numbers on scroll & input
    const updateGutter = () => {
      const lines = this.sourceTextarea.value.split('\n').length;
      let gutterHTML = '';
      for (let i = 1; i <= Math.max(lines, 1); i++) {
        gutterHTML += `<div>${i}</div>`;
      }
      this.sourceGutter.innerHTML = gutterHTML;
    };

    this.sourceTextarea.addEventListener('input', updateGutter);
    this.sourceTextarea.addEventListener('scroll', () => {
      this.sourceGutter.scrollTop = this.sourceTextarea.scrollTop;
    });

    codeArea.appendChild(this.sourceGutter);
    codeArea.appendChild(this.sourceTextarea);

    this.sourceViewContainer.appendChild(sourceToolbar);
    this.sourceViewContainer.appendChild(codeArea);
    parent.appendChild(this.sourceViewContainer);

    // Event listeners inside source toolbar
    sourceToolbar.querySelector('#btn-source-format')?.addEventListener('click', () => {
      this.sourceTextarea.value = this.formatHTMLString(this.sourceTextarea.value);
      updateGutter();
    });

    const themeBtn = sourceToolbar.querySelector('#btn-source-theme') as HTMLElement;
    themeBtn?.addEventListener('click', () => {
      this.sourceIsDark = !this.sourceIsDark;
      this.sourceViewContainer.classList.toggle('is-dark', this.sourceIsDark);
      themeBtn.textContent = this.sourceIsDark ? 'Theme: Dark' : 'Theme: Light';
    });

    const zoomLabel = sourceToolbar.querySelector('#source-zoom-label') as HTMLElement;
    sourceToolbar.querySelector('#btn-source-zoom-in')?.addEventListener('click', () => {
      if (this.sourceFontSize < 22) {
        this.sourceFontSize += 1;
        this.applySourceFontSize(zoomLabel);
      }
    });

    sourceToolbar.querySelector('#btn-source-zoom-out')?.addEventListener('click', () => {
      if (this.sourceFontSize > 10) {
        this.sourceFontSize -= 1;
        this.applySourceFontSize(zoomLabel);
      }
    });

    sourceToolbar.querySelector('#btn-source-save-exit')?.addEventListener('click', () => {
      this.toggleSourceMode();
    });
  }

  private applySourceFontSize(labelEl: HTMLElement): void {
    this.sourceTextarea.style.fontSize = `${this.sourceFontSize}px`;
    this.sourceGutter.style.fontSize = `${this.sourceFontSize}px`;
    this.sourceTextarea.style.lineHeight = `${this.sourceFontSize * 1.5}px`;
    this.sourceGutter.style.lineHeight = `${this.sourceFontSize * 1.5}px`;
    labelEl.textContent = `${this.sourceFontSize}px`;
  }

  private formatHTMLString(html: string): string {
    let formatted = '';
    let indent = '';
    const tab = '  ';
    html.split(/>\s*</).forEach((element) => {
      if (element.match(/^\/\w/)) {
        indent = indent.substring(tab.length);
      }
      formatted += indent + '<' + element + '>\r\n';
      if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith('input') && !element.startsWith('img') && !element.startsWith('br') && !element.startsWith('hr')) {
        indent += tab;
      }
    });
    return formatted.substring(1, formatted.length - 3);
  }

  public toggleSourceMode(): void {
    this.isSourceModeState = !this.isSourceModeState;

    if (this.isSourceModeState) {
      // Switching to Source Mode
      const currentHTML = this.formatHTMLString(this.editor.getHTML());
      this.sourceTextarea.value = currentHTML;
      
      // Update line numbers
      const lines = currentHTML.split('\n').length;
      let gutterHTML = '';
      for (let i = 1; i <= Math.max(lines, 1); i++) {
        gutterHTML += `<div>${i}</div>`;
      }
      this.sourceGutter.innerHTML = gutterHTML;

      this.contentMount.style.display = 'none';
      this.sourceViewContainer.style.display = 'flex';
      this.sourceTextarea.focus();
    } else {
      // Exiting Source Mode -> Apply changes
      const updatedHTML = this.sourceTextarea.value;
      this.editor.commands.setContent(updatedHTML, true);
      this.sourceViewContainer.style.display = 'none';
      this.contentMount.style.display = 'block';
      this.editor.commands.focus();
    }
  }

  public isSourceMode(): boolean {
    return this.isSourceModeState;
  }

  public getHTML(): string {
    if (this.isSourceModeState) {
      return this.sourceTextarea.value;
    }
    return this.editor.getHTML();
  }

  public getJSON(): Record<string, any> {
    return this.editor.getJSON();
  }

  public getText(): string {
    return this.editor.getText();
  }

  public getMarkdown(): string {
    return ExportTools.htmlToMarkdown(this.getHTML());
  }

  public setHTML(html: string): void {
    this.editor.commands.setContent(html);
  }

  public setJSON(json: Record<string, any>): void {
    this.editor.commands.setContent(json as any);
  }

  public setMarkdown(markdown: string): void {
    this.editor.commands.setContent(markdown);
  }

  public clear(): void {
    this.editor.commands.clearContent();
  }

  public focus(position: 'start' | 'end' | 'all' | number | boolean = 'end'): void {
    this.editor.commands.focus(position);
  }

  public blur(): void {
    this.editor.commands.blur();
  }

  public destroy(): void {
    this.bubbleMenu?.destroy();
    this.slashMenu?.destroy();
    this.tableToolbar?.destroy();
    this.editor.destroy();
    this.container.remove();
  }

  public setTheme(theme: StackTheme): void {
    this.container.classList.remove('theme-light', 'theme-dark', 'theme-slate');
    this.container.classList.add(`theme-${theme}`);
    this.container.setAttribute('data-theme', theme);
  }

  public toggleFullscreen(): void {
    this.isFullscreenState = !this.isFullscreenState;
    this.container.classList.toggle('fullscreen', this.isFullscreenState);
    this.toolbar?.updateState();
  }

  public isFullscreen(): boolean {
    return this.isFullscreenState;
  }

  public setLanguage(lang: SupportedLanguage): void {
    this.currentLanguage = lang;
    this.menubar?.updateLanguage(lang);
    this.toolbar?.updateLanguage(lang);
    this.statusBar?.updateLanguage(lang);
    this.contentMount.setAttribute('lang', lang);
  }

  public getLanguage(): SupportedLanguage {
    return this.currentLanguage;
  }

  public exportToPDF(): void {
    ExportTools.exportToPDF(this.getHTML());
  }

  public exportToMarkdown(): string {
    return this.getMarkdown();
  }

  public exportToWord(): void {
    ExportTools.exportToWord(this.getHTML());
  }

  public exportToHTML(): string {
    return this.getHTML();
  }
}

// Backward-compatibility alias
export const NovaEditor = StackEditor;
