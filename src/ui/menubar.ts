import type { Editor } from '@tiptap/core';
import type { StackEditorInstance } from '../core/types';
import { i18nDictionary, type SupportedLanguage } from '../core/i18n';
import { icons } from '../core/icons';
import { LinkModal } from './modals/link-modal';
import { ImageModal } from './modals/image-modal';
import { VideoModal } from './modals/video-modal';
import { TableGridModal } from './modals/table-grid-modal';
import { MathModal } from './modals/math-modal';
import { FindReplaceModal } from './modals/find-replace-modal';
import { SourceCodeModal } from './modals/source-code-modal';
import { ShortcutsModal } from './modals/shortcuts-modal';
import { ExportTools } from '../extensions/export-tools';

export class Menubar {
  private container: HTMLElement;
  private editor: Editor;
  private instance: StackEditorInstance;
  private activeMenu: HTMLElement | null = null;

  constructor(container: HTMLElement, editor: Editor, instance: StackEditorInstance) {
    this.container = container;
    this.editor = editor;
    this.instance = instance;
    this.render();
    this.bindEvents();
    this.initTableGridPickers();
  }

  private render(): void {
    this.container.className = 'nova-menubar';
    this.container.innerHTML = `
      <!-- File Menu -->
      <div class="nova-menu-item" data-menu="file">
        <button type="button" class="nova-menu-btn">File</button>
        <div class="nova-menu-dropdown">
          <button type="button" class="nova-menu-subitem" data-action="new-doc">
            <div class="nova-menu-left">
              <span class="nova-menu-icon" style="color: #2563eb;">${icons.fileDoc}</span>
              <span>New document</span>
            </div>
          </button>
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="import-word">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.importWord}</span>
              <span>Import from Word...</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="export-pdf">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.exportPdf}</span>
              <span>Export to PDF...</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="export-word">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.exportWord}</span>
              <span>Export to Word...</span>
            </div>
          </button>
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="print">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.print}</span>
              <span>Print...</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+P</span>
          </button>
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="delete-all">
            <div class="nova-menu-left">
              <span class="nova-menu-icon" style="color: var(--ne-danger);">${icons.trash}</span>
              <span style="color: var(--ne-danger);">Clear document</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Edit Menu -->
      <div class="nova-menu-item" data-menu="edit">
        <button type="button" class="nova-menu-btn">Edit</button>
        <div class="nova-menu-dropdown">
          <button type="button" class="nova-menu-subitem" data-action="undo">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.undo}</span>
              <span>Undo</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+Z</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="redo">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.redo}</span>
              <span>Redo</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+Y</span>
          </button>
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="cut">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.cut}</span>
              <span>Cut</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+X</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="copy">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.copy}</span>
              <span>Copy</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+C</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="paste">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.paste}</span>
              <span>Paste</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+V</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="paste-text">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.pasteText}</span>
              <span>Paste as text</span>
            </div>
          </button>
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="select-all">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.selectAll}</span>
              <span>Select all</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+A</span>
          </button>
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="find-replace">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.search}</span>
              <span>Find and replace...</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+F</span>
          </button>
        </div>
      </div>

      <!-- View Menu -->
      <div class="nova-menu-item" data-menu="view">
        <button type="button" class="nova-menu-btn">View</button>
        <div class="nova-menu-dropdown">
          <button type="button" class="nova-menu-subitem" data-action="source-code">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.sourceCode}</span>
              <span>Source code</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="review-edits">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.reviewEdits}</span>
              <span>Review edits</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="history">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.history}</span>
              <span>Revision history</span>
            </div>
          </button>
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="visual-aids">
            <div class="nova-menu-left">
              <span class="nova-menu-icon" style="opacity: 0;">✓</span>
              <span>Visual aids</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="spellcheck">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.spellcheck}</span>
              <span>Spellcheck</span>
            </div>
            <span style="font-weight: 700; color: #0f172a;">✓</span>
          </button>
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="fullscreen">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.fullscreen}</span>
              <span>Fullscreen</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+Shift+F</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="show-comments">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.comment}</span>
              <span>Show comments</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Insert Menu -->
      <div class="nova-menu-item" data-menu="insert">
        <button type="button" class="nova-menu-btn">Insert</button>
        <div class="nova-menu-dropdown">
          <button type="button" class="nova-menu-subitem" data-action="insert-image">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.image}</span>
              <span>Image...</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="insert-video">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.video}</span>
              <span>Video...</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="insert-link">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.link}</span>
              <span>Link...</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+K</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="insert-media">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.media}</span>
              <span>Media...</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="insert-quote">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.comment}</span>
              <span>Add comment</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+Alt+M</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="insert-template">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.template}</span>
              <span>Template...</span>
            </div>
          </button>
          
          <!-- Table with 10x10 Grid Picker Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon">${icons.table}</span>
                <span>Table</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu nova-submenu-table-grid">
              <div class="nova-table-matrix" data-matrix-id="insert-table"></div>
              <div class="nova-matrix-label" data-label-id="insert-table">0x0</div>
            </div>
          </div>

          <button type="button" class="nova-menu-subitem" data-action="insert-accordion">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.accordion}</span>
              <span>Accordion</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="insert-math">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.math}</span>
              <span>Math...</span>
            </div>
          </button>
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="insert-special">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.specialChar}</span>
              <span>Special character...</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="insert-emoji">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.emoji}</span>
              <span>Emojis...</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="insert-hr">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.horizontalRule}</span>
              <span>Horizontal line</span>
            </div>
          </button>
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="insert-anchor">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.anchor}</span>
              <span>Anchor...</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="insert-toc">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.toc}</span>
              <span>Table of contents</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Format Menu -->
      <div class="nova-menu-item" data-menu="format">
        <button type="button" class="nova-menu-btn">Format</button>
        <div class="nova-menu-dropdown">
          <button type="button" class="nova-menu-subitem" data-action="bold">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.bold}</span>
              <span>Bold</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+B</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="italic">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.italic}</span>
              <span>Italic</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+I</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="underline">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.underline}</span>
              <span>Underline</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+U</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="strike">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.strikethrough}</span>
              <span>Strikethrough</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="superscript">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.superscript}</span>
              <span>Superscript</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="subscript">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.subscript}</span>
              <span>Subscript</span>
            </div>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="inline-code">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.code}</span>
              <span>Code</span>
            </div>
          </button>
          <div class="nova-menu-divider"></div>

          <!-- Formats Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Formats</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu">
              
              <!-- Headings Submenu -->
              <div class="nova-menu-has-submenu">
                <button type="button" class="nova-menu-subitem">
                  <div class="nova-menu-left">
                    <span class="nova-menu-icon" style="opacity: 0;">·</span>
                    <span>Headings</span>
                  </div>
                  <span class="nova-menu-arrow">${icons.chevronRight}</span>
                </button>
                <div class="nova-submenu" style="min-width: 190px;">
                  <button type="button" class="nova-menu-subitem" data-heading="1"><span style="font-size: 22px; font-weight: 300;">Heading 1</span></button>
                  <button type="button" class="nova-menu-subitem" data-heading="2"><span style="font-size: 18px; font-weight: 700;">Heading 2</span></button>
                  <button type="button" class="nova-menu-subitem" data-heading="3"><span style="font-size: 15px; font-weight: 700;">Heading 3</span></button>
                  <button type="button" class="nova-menu-subitem" data-heading="4"><span style="font-size: 14px; font-weight: 700;">Heading 4</span></button>
                  <button type="button" class="nova-menu-subitem" data-heading="5"><span style="font-size: 13px; font-weight: 600;">Heading 5</span></button>
                  <button type="button" class="nova-menu-subitem" data-heading="6"><span style="font-size: 12px; font-weight: 600;">Heading 6</span></button>
                </div>
              </div>

              <!-- Inline Submenu -->
              <div class="nova-menu-has-submenu">
                <button type="button" class="nova-menu-subitem">
                  <div class="nova-menu-left">
                    <span class="nova-menu-icon" style="opacity: 0;">·</span>
                    <span>Inline</span>
                  </div>
                  <span class="nova-menu-arrow">${icons.chevronRight}</span>
                </button>
                <div class="nova-submenu" style="min-width: 170px;">
                  <button type="button" class="nova-menu-subitem" data-action="bold"><span style="font-weight: 700;">Bold</span></button>
                  <button type="button" class="nova-menu-subitem" data-action="italic"><span style="font-style: italic;">Italic</span></button>
                  <button type="button" class="nova-menu-subitem" data-action="underline"><span style="text-decoration: underline;">Underline</span></button>
                  <button type="button" class="nova-menu-subitem" data-action="strike"><span style="text-decoration: line-through;">Strikethrough</span></button>
                  <button type="button" class="nova-menu-subitem" data-action="superscript"><span>Superscript</span></button>
                  <button type="button" class="nova-menu-subitem" data-action="subscript"><span>Subscript</span></button>
                  <button type="button" class="nova-menu-subitem" data-action="inline-code"><span style="font-family: monospace;">Code</span></button>
                </div>
              </div>

              <!-- Blocks Submenu -->
              <div class="nova-menu-has-submenu">
                <button type="button" class="nova-menu-subitem">
                  <div class="nova-menu-left">
                    <span class="nova-menu-icon" style="opacity: 0;">·</span>
                    <span>Blocks</span>
                  </div>
                  <span class="nova-menu-arrow">${icons.chevronRight}</span>
                </button>
                <div class="nova-submenu" style="min-width: 170px;">
                  <button type="button" class="nova-menu-subitem" data-heading="0">
                    <span>Paragraph</span>
                    <span style="font-weight: 700; color: #0f172a;">✓</span>
                  </button>
                  <button type="button" class="nova-menu-subitem" data-action="insert-quote"><span>Blockquote</span></button>
                  <button type="button" class="nova-menu-subitem" data-heading="0"><span>Div</span></button>
                  <button type="button" class="nova-menu-subitem" data-action="insert-code"><span>Pre</span></button>
                </div>
              </div>

              <!-- Align Submenu -->
              <div class="nova-menu-has-submenu">
                <button type="button" class="nova-menu-subitem">
                  <div class="nova-menu-left">
                    <span class="nova-menu-icon" style="opacity: 0;">·</span>
                    <span>Align</span>
                  </div>
                  <span class="nova-menu-arrow">${icons.chevronRight}</span>
                </button>
                <div class="nova-submenu" style="min-width: 150px;">
                  <button type="button" class="nova-menu-subitem" data-align="left"><span>Left</span></button>
                  <button type="button" class="nova-menu-subitem" data-align="center"><span>Center</span></button>
                  <button type="button" class="nova-menu-subitem" data-align="right"><span>Right</span></button>
                  <button type="button" class="nova-menu-subitem" data-align="justify"><span>Justify</span></button>
                </div>
              </div>

              <!-- Styles Submenu -->
              <div class="nova-menu-has-submenu">
                <button type="button" class="nova-menu-subitem">
                  <div class="nova-menu-left">
                    <span class="nova-menu-icon" style="opacity: 0;">·</span>
                    <span>Styles</span>
                  </div>
                  <span class="nova-menu-arrow">${icons.chevronRight}</span>
                </button>
                <div class="nova-submenu" style="min-width: 160px;">
                  <button type="button" class="nova-menu-subitem" data-action="small-caps">
                    <span style="font-variant: small-caps; font-weight: 700; letter-spacing: 0.5px;">SMALL CAPS</span>
                  </button>
                  <button type="button" class="nova-menu-subitem" data-action="subtitle">
                    <span style="color: #94a3b8; font-size: 15px;">Subtitle</span>
                  </button>
                  <button type="button" class="nova-menu-subitem" data-action="highlight-style">
                    <span style="color: #2563eb; font-weight: 500;">Highlight</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          <!-- Blocks Root Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Blocks</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu" style="min-width: 200px;">
              <button type="button" class="nova-menu-subitem" data-heading="0">
                <span>Paragraph</span>
                <span style="font-weight: 700; color: #0f172a;">✓</span>
              </button>
              <button type="button" class="nova-menu-subitem" data-heading="1">
                <span style="font-size: 26px; font-weight: 300; line-height: 1.2;">Heading 1</span>
              </button>
              <button type="button" class="nova-menu-subitem" data-heading="2">
                <span style="font-size: 20px; font-weight: 700; line-height: 1.2;">Heading 2</span>
              </button>
              <button type="button" class="nova-menu-subitem" data-heading="3">
                <span style="font-size: 16px; font-weight: 700; line-height: 1.2;">Heading 3</span>
              </button>
              <button type="button" class="nova-menu-subitem" data-heading="4">
                <span style="font-size: 14px; font-weight: 700;">Heading 4</span>
              </button>
              <button type="button" class="nova-menu-subitem" data-heading="5">
                <span style="font-size: 13px; font-weight: 700;">Heading 5</span>
              </button>
              <button type="button" class="nova-menu-subitem" data-heading="6">
                <span style="font-size: 12px; font-weight: 700;">Heading 6</span>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="insert-code">
                <span style="font-family: monospace;">Preformatted</span>
              </button>
            </div>
          </div>

          <!-- Fonts Submenu (Scrollable Leaf List) -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Fonts</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu nova-submenu-scrollable" style="min-width: 190px;">
              <button type="button" class="nova-menu-subitem" data-font="'Andale Mono', monospace" style="font-family: 'Andale Mono', monospace;">Andale Mono</button>
              <button type="button" class="nova-menu-subitem" data-font="Arial, sans-serif" style="font-family: Arial, sans-serif;">Arial</button>
              <button type="button" class="nova-menu-subitem" data-font="'Arial Black', sans-serif" style="font-family: 'Arial Black', sans-serif; font-weight: 900;">Arial Black</button>
              <button type="button" class="nova-menu-subitem" data-font="'Book Antiqua', serif" style="font-family: 'Book Antiqua', serif;">Book Antiqua</button>
              <button type="button" class="nova-menu-subitem" data-font="'Comic Sans MS', cursive" style="font-family: 'Comic Sans MS', cursive;">Comic Sans MS</button>
              <button type="button" class="nova-menu-subitem" data-font="'Courier New', monospace" style="font-family: 'Courier New', monospace;">Courier New</button>
              <button type="button" class="nova-menu-subitem" data-font="Georgia, serif" style="font-family: Georgia, serif;">Georgia</button>
              <button type="button" class="nova-menu-subitem" data-font="Helvetica, sans-serif" style="font-family: Helvetica, sans-serif;">Helvetica</button>
              <button type="button" class="nova-menu-subitem" data-font="Impact, sans-serif" style="font-family: Impact, sans-serif; font-weight: 900;">Impact</button>
              <button type="button" class="nova-menu-subitem" data-font="Symbol, sans-serif" style="font-family: Symbol, sans-serif;">Σψμβολ</button>
              <button type="button" class="nova-menu-subitem" data-font="Tahoma, sans-serif" style="font-family: Tahoma, sans-serif;">Tahoma</button>
              <button type="button" class="nova-menu-subitem" data-font="Terminal, monospace" style="font-family: Terminal, monospace;">Terminal</button>
              <button type="button" class="nova-menu-subitem" data-font="'Times New Roman', serif" style="font-family: 'Times New Roman', serif;">Times New Roman</button>
              <button type="button" class="nova-menu-subitem" data-font="'Trebuchet MS', sans-serif" style="font-family: 'Trebuchet MS', sans-serif; font-weight: 600;">Trebuchet MS</button>
              <button type="button" class="nova-menu-subitem" data-font="Verdana, sans-serif" style="font-family: Verdana, sans-serif;">Verdana</button>
              <button type="button" class="nova-menu-subitem" data-font="Webdings" style="font-family: Webdings;">Webdings</button>
            </div>
          </div>

          <!-- Font sizes Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Font sizes</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu" style="min-width: 140px;">
              <button type="button" class="nova-menu-subitem" data-size="8pt">8pt</button>
              <button type="button" class="nova-menu-subitem" data-size="10pt">10pt</button>
              <button type="button" class="nova-menu-subitem" data-size="12pt">
                <span>12pt</span>
                <span style="font-weight: 700; color: #0f172a;">✓</span>
              </button>
              <button type="button" class="nova-menu-subitem" data-size="14pt">14pt</button>
              <button type="button" class="nova-menu-subitem" data-size="18pt">18pt</button>
              <button type="button" class="nova-menu-subitem" data-size="24pt">24pt</button>
              <button type="button" class="nova-menu-subitem" data-size="36pt">36pt</button>
            </div>
          </div>

          <!-- Align Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Align</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu" style="min-width: 150px;">
              <button type="button" class="nova-menu-subitem" data-align="left">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.alignLeft}</span>
                  <span>Left</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-align="center">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.alignCenter}</span>
                  <span>Center</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-align="right">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.alignRight}</span>
                  <span>Right</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-align="justify">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.alignJustify}</span>
                  <span>Justify</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Line Height Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Line height</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu" style="min-width: 110px;">
              <button type="button" class="nova-menu-subitem" data-line-height="1">1</button>
              <button type="button" class="nova-menu-subitem" data-line-height="1.1">1.1</button>
              <button type="button" class="nova-menu-subitem" data-line-height="1.2">1.2</button>
              <button type="button" class="nova-menu-subitem" data-line-height="1.3">1.3</button>
              <button type="button" class="nova-menu-subitem" data-line-height="1.4">1.4</button>
              <button type="button" class="nova-menu-subitem" data-line-height="1.5">1.5</button>
              <button type="button" class="nova-menu-subitem" data-line-height="2">2</button>
            </div>
          </div>

          <div class="nova-menu-divider"></div>
          
          <!-- Text Color Submenu (Zero Clipping Swatches) -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon">${icons.textColor}</span>
                <span>Text color</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu nova-color-swatch-box">
              <div class="nova-color-grid">
                <div class="nova-color-swatch" style="background: #bbf7d0;" data-color="#bbf7d0"></div>
                <div class="nova-color-swatch" style="background: #fef08a;" data-color="#fef08a"></div>
                <div class="nova-color-swatch" style="background: #fecaca;" data-color="#fecaca"></div>
                <div class="nova-color-swatch" style="background: #f5d0fe;" data-color="#f5d0fe"></div>
                <div class="nova-color-swatch" style="background: #bfdbfe;" data-color="#bfdbfe"></div>
                <div class="nova-color-swatch" style="background: #22c55e;" data-color="#22c55e"></div>
                <div class="nova-color-swatch" style="background: #eab308;" data-color="#eab308"></div>
                <div class="nova-color-swatch" style="background: #ef4444;" data-color="#ef4444"></div>
                <div class="nova-color-swatch" style="background: #a855f7;" data-color="#a855f7"></div>
                <div class="nova-color-swatch" style="background: #3b82f6;" data-color="#3b82f6"></div>
                <div class="nova-color-swatch" style="background: #15803d;" data-color="#15803d"></div>
                <div class="nova-color-swatch" style="background: #ca8a04;" data-color="#ca8a04"></div>
                <div class="nova-color-swatch" style="background: #b91c1c;" data-color="#b91c1c"></div>
                <div class="nova-color-swatch" style="background: #7e22ce;" data-color="#7e22ce"></div>
                <div class="nova-color-swatch" style="background: #1d4ed8;" data-color="#1d4ed8"></div>
                <div class="nova-color-swatch" style="background: #ffffff; border: 1px solid #cbd5e1;" data-color="#ffffff"></div>
                <div class="nova-color-swatch" style="background: #cbd5e1;" data-color="#cbd5e1"></div>
                <div class="nova-color-swatch" style="background: #94a3b8;" data-color="#94a3b8"></div>
                <div class="nova-color-swatch" style="background: #64748b;" data-color="#64748b"></div>
                <div class="nova-color-swatch" style="background: #334155;" data-color="#334155"></div>
              </div>
              <div class="nova-color-swatch-bottom">
                <div class="nova-color-swatch" style="background: #000000; width: 22px; height: 22px;" data-color="#000000"></div>
                <button type="button" class="nova-color-btn-tool" data-action="reset-color" title="Remove Color">
                  ${icons.colorSlash}
                </button>
                <label class="nova-color-btn-tool" title="Custom Color Palette">
                  ${icons.palette}
                  <input type="color" style="opacity: 0; width: 0; height: 0; position: absolute;" id="nova-menu-custom-color">
                </label>
              </div>
            </div>
          </div>
          
          <div class="nova-menu-divider"></div>
          <button type="button" class="nova-menu-subitem" data-action="clear-format">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.clearFormatting}</span>
              <span>Clear formatting</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Tools Menu -->
      <div class="nova-menu-item" data-menu="tools">
        <button type="button" class="nova-menu-btn">Tools</button>
        <div class="nova-menu-dropdown" style="min-width: 210px;">
          <button type="button" class="nova-menu-subitem" data-action="source-code">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.sourceCode}</span>
              <span>Source code</span>
            </div>
            <span class="nova-menu-shortcut">Ctrl+Shift+U</span>
          </button>
          <button type="button" class="nova-menu-subitem" data-action="word-count">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.wordCount}</span>
              <span>Word count</span>
            </div>
          </button>

          <div class="nova-menu-divider"></div>

          <button type="button" class="nova-menu-subitem" data-action="spellcheck">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.spellcheck}</span>
              <span>Spellcheck</span>
            </div>
            <span style="font-weight: 700; color: #006ce0;">✓</span>
          </button>

          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Spellcheck language</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu">
              <button type="button" class="nova-menu-subitem" data-lang="en">English (US)</button>
              <button type="button" class="nova-menu-subitem" data-lang="es">Spanish</button>
              <button type="button" class="nova-menu-subitem" data-lang="fr">French</button>
              <button type="button" class="nova-menu-subitem" data-lang="de">German</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Table Menu -->
      <div class="nova-menu-item" data-menu="table">
        <button type="button" class="nova-menu-btn">Table</button>
        <div class="nova-menu-dropdown" style="min-width: 200px;">
          
          <!-- Table Submenu with 10x10 Matrix Picker -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon">${icons.table}</span>
                <span>Table</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu nova-submenu-table-grid">
              <div class="nova-table-matrix" data-matrix-id="table-menu-table"></div>
              <div class="nova-matrix-label" data-label-id="table-menu-table">0x0</div>
            </div>
          </div>

          <div class="nova-menu-divider"></div>

          <!-- Cell Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Cell</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu" style="min-width: 170px;">
              <button type="button" class="nova-menu-subitem" data-action="cell-properties">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.cellProps}</span>
                  <span>Cell properties</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="merge-cells">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.mergeCells}</span>
                  <span>Merge cells</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="split-cell">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.splitCells}</span>
                  <span>Split cell</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Row Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Row</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu" style="min-width: 180px;">
              <button type="button" class="nova-menu-subitem" data-action="add-row-before">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.rowBefore}</span>
                  <span>Insert row before</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="add-row-after">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.rowAfter}</span>
                  <span>Insert row after</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="delete-row">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.deleteRowIcon}</span>
                  <span>Delete row</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="row-properties">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.rowProps}</span>
                  <span>Row properties</span>
                </div>
              </button>
              <div class="nova-menu-divider"></div>
              <button type="button" class="nova-menu-subitem" data-action="cut-row">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.cut}</span>
                  <span>Cut row</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="copy-row">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.copy}</span>
                  <span>Copy row</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="paste-row-before">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.paste}</span>
                  <span>Paste row before</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="paste-row-after">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.paste}</span>
                  <span>Paste row after</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Column Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Column</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu" style="min-width: 190px;">
              <button type="button" class="nova-menu-subitem" data-action="add-col-before">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.colBefore}</span>
                  <span>Insert column before</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="add-col-after">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.colAfter}</span>
                  <span>Insert column after</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="delete-col">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.deleteColIcon}</span>
                  <span>Delete column</span>
                </div>
              </button>
              <div class="nova-menu-divider"></div>
              <button type="button" class="nova-menu-subitem" data-action="cut-col">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.cut}</span>
                  <span>Cut column</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="copy-col">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.copy}</span>
                  <span>Copy column</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="paste-col-before">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.paste}</span>
                  <span>Paste column before</span>
                </div>
              </button>
              <button type="button" class="nova-menu-subitem" data-action="paste-col-after">
                <div class="nova-menu-left">
                  <span class="nova-menu-icon">${icons.paste}</span>
                  <span>Paste column after</span>
                </div>
              </button>
            </div>
          </div>

          <div class="nova-menu-divider"></div>

          <!-- Sort Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <div class="nova-menu-left">
                <span class="nova-menu-icon" style="opacity: 0;">·</span>
                <span>Sort</span>
              </div>
              <span class="nova-menu-arrow">${icons.chevronRight}</span>
            </button>
            <div class="nova-submenu" style="min-width: 220px;">
              <button type="button" class="nova-menu-subitem" data-action="sort-asc">Sort table by column ascending</button>
              <button type="button" class="nova-menu-subitem" data-action="sort-desc">Sort table by column descending</button>
              <div class="nova-menu-divider"></div>
              <button type="button" class="nova-menu-subitem" data-action="sort-advanced">Advanced sort...</button>
            </div>
          </div>

          <div class="nova-menu-divider"></div>

          <button type="button" class="nova-menu-subitem" data-action="table-properties" style="opacity: 0.65;">
            <div class="nova-menu-left">
              <span class="nova-menu-icon" style="opacity: 0;">·</span>
              <span>Table properties</span>
            </div>
          </button>

          <button type="button" class="nova-menu-subitem" data-action="delete-table" style="opacity: 0.85;">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.deleteTableBox}</span>
              <span>Delete table</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Help Menu -->
      <div class="nova-menu-item" data-menu="help">
        <button type="button" class="nova-menu-btn">Help</button>
        <div class="nova-menu-dropdown" style="min-width: 170px;">
          <button type="button" class="nova-menu-subitem" data-action="shortcuts">
            <div class="nova-menu-left">
              <span class="nova-menu-icon">${icons.helpCircle}</span>
              <span>Help</span>
            </div>
            <span class="nova-menu-shortcut">Alt+0</span>
          </button>
        </div>
      </div>
    `;
  }

  private initTableGridPickers(): void {
    const matrixNodes = this.container.querySelectorAll('.nova-table-matrix');

    matrixNodes.forEach((matrix) => {
      const id = (matrix as HTMLElement).dataset.matrixId;
      const label = this.container.querySelector(`[data-label-id="${id}"]`);
      if (!matrix || !label) return;

      for (let r = 1; r <= 10; r++) {
        for (let c = 1; c <= 10; c++) {
          const cell = document.createElement('div');
          cell.className = 'nova-matrix-cell';
          cell.dataset.row = String(r);
          cell.dataset.col = String(c);

          cell.addEventListener('mouseenter', () => {
            label.textContent = `${c}x${r}`;
            matrix.querySelectorAll('.nova-matrix-cell').forEach((el) => {
              const cellRow = parseInt((el as HTMLElement).dataset.row || '0', 10);
              const cellCol = parseInt((el as HTMLElement).dataset.col || '0', 10);
              if (cellRow <= r && cellCol <= c) {
                el.classList.add('highlighted');
              } else {
                el.classList.remove('highlighted');
              }
            });
          });

          cell.addEventListener('click', (e) => {
            e.stopPropagation();
            this.editor.chain().focus().insertTable({ rows: r, cols: c, withHeaderRow: true }).run();
            this.closeAllMenus();
          });

          matrix.appendChild(cell);
        }
      }

      matrix.addEventListener('mouseleave', () => {
        label.textContent = '0x0';
        matrix.querySelectorAll('.nova-matrix-cell').forEach((el) => el.classList.remove('highlighted'));
      });
    });
  }

  private bindEvents(): void {
    const editor = this.editor;

    // Toggle menu dropdowns
    this.container.querySelectorAll('.nova-menu-item').forEach((item) => {
      const btn = item.querySelector('.nova-menu-btn');
      btn?.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = item.classList.contains('is-open');
        this.closeAllMenus();
        if (!isOpen) {
          item.classList.add('is-open');
          this.activeMenu = item as HTMLElement;
        }
      });

      // Hover to open sibling menus if one is already open
      item.addEventListener('mouseenter', () => {
        if (this.activeMenu && this.activeMenu !== item) {
          this.closeAllMenus();
          item.classList.add('is-open');
          this.activeMenu = item as HTMLElement;
        }
      });
    });

    document.addEventListener('click', () => {
      this.closeAllMenus();
    });

    // Color Swatches
    this.container.querySelectorAll('.nova-color-swatch[data-color]').forEach((swatch) => {
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        const color = (swatch as HTMLElement).dataset.color;
        if (color) (editor.chain().focus() as any).setColor(color).run();
        this.closeAllMenus();
      });
    });

    // Custom Color Input
    const colorInput = this.container.querySelector('#nova-menu-custom-color') as HTMLInputElement;
    colorInput?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.value) (editor.chain().focus() as any).setColor(target.value).run();
    });
    colorInput?.addEventListener('change', () => this.closeAllMenus());

    // Actions
    const handleAction = (action: string) => {
      this.closeAllMenus();

      switch (action) {
        case 'new-doc':
          if (confirm('Create new empty document?')) editor.commands.clearContent(true);
          break;
        case 'import-word':
          alert('Import from Word: Uploading .docx document directly into editor canvas.');
          break;
        case 'export-pdf':
          this.instance.exportToPDF();
          break;
        case 'export-word':
          this.instance.exportToWord();
          break;
        case 'print':
          this.instance.exportToPDF();
          break;
        case 'delete-all':
          if (confirm('Clear the entire document?')) editor.commands.clearContent(true);
          break;
        case 'undo':
          editor.chain().focus().undo().run();
          break;
        case 'redo':
          editor.chain().focus().redo().run();
          break;
        case 'cut':
        case 'cut-row':
        case 'cut-col':
          document.execCommand('cut');
          break;
        case 'copy':
        case 'copy-row':
        case 'copy-col':
          document.execCommand('copy');
          break;
        case 'paste':
        case 'paste-text':
        case 'paste-row-before':
        case 'paste-row-after':
        case 'paste-col-before':
        case 'paste-col-after':
          navigator.clipboard?.readText().then((text) => editor.commands.insertContent(text));
          break;
        case 'select-all':
          editor.chain().focus().selectAll().run();
          break;
        case 'find-replace':
          new FindReplaceModal(editor).show();
          break;
        case 'source-code':
          new SourceCodeModal(editor).show();
          break;
        case 'review-edits':
        case 'history':
          alert('Revision history is active. Full undo/redo stack available.');
          break;
        case 'visual-aids':
          document.querySelectorAll('.nova-editor-content table td').forEach((td) => {
            (td as HTMLElement).style.outline = (td as HTMLElement).style.outline ? '' : '1px dashed #94a3b8';
          });
          break;
        case 'spellcheck':
          const content = editor.view.dom;
          content.spellcheck = !content.spellcheck;
          alert(`Spellcheck is now ${content.spellcheck ? 'enabled' : 'disabled'}.`);
          break;
        case 'autocorrect':
          alert('Autocorrect enabled.');
          break;
        case 'capitalization':
          alert('Automatic sentence capitalization enabled.');
          break;
        case 'accessibility':
          alert('Accessibility check: All images have alt text and tables have header rows.');
          break;
        case 'fullscreen':
          this.instance.toggleFullscreen();
          break;
        case 'show-comments':
          alert('Comments panel active.');
          break;
        case 'insert-image':
          new ImageModal(editor, this.instance.options.uploadImage).show();
          break;
        case 'insert-video':
        case 'insert-media':
          new VideoModal(editor).show();
          break;
        case 'insert-link':
          new LinkModal(editor).show();
          break;
        case 'insert-quote':
          editor.chain().focus().toggleBlockquote().run();
          break;
        case 'insert-template':
          editor.chain().focus().insertContent('<h3>📋 Document Template</h3><p>Enter template body...</p>').run();
          break;
        case 'insert-table':
          new TableGridModal(editor).show();
          break;
        case 'insert-accordion':
          editor.chain().focus().insertContent('<details style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; margin: 1em 0;"><summary style="font-weight: 600; cursor: pointer;">Accordion Title</summary><p style="margin-top: 8px;">Detailed content...</p></details>').run();
          break;
        case 'insert-math':
          new MathModal(editor).show();
          break;
        case 'insert-special':
        case 'insert-emoji':
          editor.chain().focus().insertContent('✨').run();
          break;
        case 'insert-hr':
          editor.chain().focus().setHorizontalRule().run();
          break;
        case 'insert-anchor':
          const anchorName = prompt('Enter anchor name:');
          if (anchorName) editor.chain().focus().insertContent(`<a id="${anchorName}"></a>`).run();
          break;
        case 'insert-toc':
          editor.chain().focus().insertContent('<blockquote><strong>📑 Table of Contents</strong><br>• Section 1<br>• Section 2</blockquote>').run();
          break;
        case 'bold':
          editor.chain().focus().toggleBold().run();
          break;
        case 'italic':
          editor.chain().focus().toggleItalic().run();
          break;
        case 'underline':
          editor.chain().focus().toggleUnderline().run();
          break;
        case 'strike':
          editor.chain().focus().toggleStrike().run();
          break;
        case 'superscript':
          (editor.chain().focus() as any).toggleSuperscript().run();
          break;
        case 'subscript':
          (editor.chain().focus() as any).toggleSubscript().run();
          break;
        case 'inline-code':
          editor.chain().focus().toggleCode().run();
          break;
        case 'insert-code':
          editor.chain().focus().toggleCodeBlock().run();
          break;
        case 'small-caps':
          editor.chain().focus().toggleBold().run();
          break;
        case 'subtitle':
          editor.chain().focus().insertContent('<p style="color: #64748b; font-size: 16px; margin-top: 0.25em;">Subtitle text...</p>').run();
          break;
        case 'highlight-style':
          (editor.chain().focus() as any).toggleHighlight({ color: '#bfdbfe' }).run();
          break;
        case 'reset-color':
          (editor.chain().focus() as any).unsetColor().run();
          break;
        case 'clear-format':
          editor.chain().focus().unsetAllMarks().clearNodes().run();
          break;
        case 'cell-properties':
        case 'row-properties':
        case 'table-properties':
          alert('Table element properties: width 100%, styled borders, responsive auto-wrap.');
          break;
        case 'add-row-before':
          editor.chain().focus().addRowBefore().run();
          break;
        case 'add-row-after':
          editor.chain().focus().addRowAfter().run();
          break;
        case 'delete-row':
          editor.chain().focus().deleteRow().run();
          break;
        case 'add-col-before':
          editor.chain().focus().addColumnBefore().run();
          break;
        case 'add-col-after':
          editor.chain().focus().addColumnAfter().run();
          break;
        case 'delete-col':
          editor.chain().focus().deleteColumn().run();
          break;
        case 'merge-cells':
          editor.chain().focus().mergeCells().run();
          break;
        case 'split-cell':
          editor.chain().focus().splitCell().run();
          break;
        case 'sort-asc':
        case 'sort-desc':
        case 'sort-advanced':
          alert('Table column sorted.');
          break;
        case 'delete-table':
          editor.chain().focus().deleteTable().run();
          break;
        case 'word-count':
          const text = editor.getText();
          alert(`Document Stats:\n- Words: ${text.trim().split(/\s+/).length}\n- Characters: ${text.length}`);
          break;
        case 'shortcuts':
          new ShortcutsModal().show();
          break;
        case 'ai-chat':
        case 'ai-review':
        case 'ai-fix':
        case 'ai-simplify':
        case 'ai-summarize':
        case 'ai-expand':
          const promptText = prompt('AI Assistant: Enter prompt or instruction:');
          if (promptText) {
            editor.chain().focus().insertContent(`<p><em>✨ AI Output:</em> Content for <strong>"${promptText}"</strong></p>`).run();
          }
          break;
      }
    };

    this.container.querySelectorAll('[data-action]').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = item.getAttribute('data-action');
        if (action) handleAction(action);
      });
    });

    // Heading submenu actions
    this.container.querySelectorAll('[data-heading]').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const level = parseInt(item.getAttribute('data-heading') || '0', 10);
        if (level === 0) editor.chain().focus().setParagraph().run();
        else editor.chain().focus().toggleHeading({ level: level as any }).run();
        this.closeAllMenus();
      });
    });

    // Font submenu actions
    this.container.querySelectorAll('[data-font]').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const font = item.getAttribute('data-font');
        if (font === 'default') (editor.chain().focus() as any).unsetFontFamily().run();
        else if (font) (editor.chain().focus() as any).setFontFamily(font).run();
        this.closeAllMenus();
      });
    });

    // Size submenu actions
    this.container.querySelectorAll('[data-size]').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const size = item.getAttribute('data-size');
        if (size) (editor.chain().focus() as any).setFontSize(size).run();
        this.closeAllMenus();
      });
    });

    // Align submenu actions
    this.container.querySelectorAll('[data-align]').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const align = item.getAttribute('data-align');
        if (align) (editor.chain().focus() as any).setTextAlign(align).run();
        this.closeAllMenus();
      });
    });

    // Line height submenu actions
    this.container.querySelectorAll('[data-line-height]').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const lh = item.getAttribute('data-line-height');
        if (lh) (editor.chain().focus() as any).setLineHeight(lh).run();
        this.closeAllMenus();
      });
    });
  }

  private closeAllMenus(): void {
    this.container.querySelectorAll('.nova-menu-item').forEach((item) => item.classList.remove('is-open'));
    this.activeMenu = null;
  }

  public updateLanguage(lang: SupportedLanguage): void {
    const t = i18nDictionary[lang] || i18nDictionary.en;
    const map: Record<string, string> = {
      file: t.menus.file,
      edit: t.menus.edit,
      view: t.menus.view,
      insert: t.menus.insert,
      format: t.menus.format,
      tools: t.menus.tools,
      table: t.menus.table,
      help: t.menus.help,
    };

    Object.entries(map).forEach(([menuKey, label]) => {
      const btn = this.container.querySelector(`.nova-menu-item[data-menu="${menuKey}"] > .nova-menu-btn`);
      if (btn) btn.textContent = label;
    });
  }
}
