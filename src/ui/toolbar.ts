import type { Editor } from '@tiptap/core';
import type { StackEditorInstance } from '../core/types';
import { i18nDictionary, type SupportedLanguage } from '../core/i18n';
import { icons } from '../core/icons';
import { LinkModal } from './modals/link-modal';
import { ImageModal } from './modals/image-modal';
import { VideoModal } from './modals/video-modal';
import { MathModal } from './modals/math-modal';
import { TableGridModal } from './modals/table-grid-modal';
import { SourceCodeModal } from './modals/source-code-modal';
import { ShortcutsModal } from './modals/shortcuts-modal';

export class Toolbar {
  private container: HTMLElement;
  private editor: Editor;
  private instance: StackEditorInstance;
  private currentFontSize: number = 16;

  constructor(container: HTMLElement, editor: Editor, instance: StackEditorInstance) {
    this.container = container;
    this.editor = editor;
    this.instance = instance;
    this.render();
    this.bindEvents();
    this.initTablePicker();
    this.listenToSelection();
  }

  private render(): void {
    this.container.className = 'nova-toolbar';
    this.container.innerHTML = `
      <!-- History Group -->
      <div class="nova-toolbar-group">
        <button type="button" class="nova-btn" data-action="undo" title="Undo (Ctrl+Z)">${icons.undo}</button>
        <button type="button" class="nova-btn" data-action="redo" title="Redo (Ctrl+Y)">${icons.redo}</button>
      </div>

      <!-- Language Selector (Dropdown 1: Translate Icon ▾) -->
      <div class="nova-toolbar-dropdown">
        <button type="button" class="nova-btn" style="gap: 2px;" data-dropdown="lang" title="Translate / Language">
          ${icons.translate}
          <span class="nova-caret-mini">${icons.caretDown}</span>
        </button>
        <div class="nova-dropdown-panel" id="panel-lang" style="min-width: 150px;">
          <button type="button" class="nova-menu-subitem" data-lang="en">English (US)</button>
          <button type="button" class="nova-menu-subitem" data-lang="en-GB">English (UK)</button>
          <button type="button" class="nova-menu-subitem" data-lang="es">Español (Spanish)</button>
          <button type="button" class="nova-menu-subitem" data-lang="fr">Français (French)</button>
          <button type="button" class="nova-menu-subitem" data-lang="de">Deutsch (German)</button>
          <button type="button" class="nova-menu-subitem" data-lang="it">Italiano (Italian)</button>
          <button type="button" class="nova-menu-subitem" data-lang="pt">Português</button>
          <button type="button" class="nova-menu-subitem" data-lang="ja">日本語 (Japanese)</button>
          <button type="button" class="nova-menu-subitem" data-lang="zh">中文 (Chinese)</button>
        </div>
      </div>

      <!-- Paragraph / Style Selector (Dropdown 2: Paragraph ▾) -->
      <div class="nova-toolbar-dropdown">
        <button type="button" class="nova-select-btn" data-dropdown="paragraph" title="Paragraph Styles">
          <span id="nova-current-block">Paragraph</span>
          <span class="nova-caret-mini">${icons.caretDown}</span>
        </button>
        <div class="nova-dropdown-panel" id="panel-paragraph" style="min-width: 160px;">
          
          <!-- Headings Submenu -->
          <div class="nova-menu-has-submenu">
            <button type="button" class="nova-menu-subitem">
              <span>Headings</span>
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
              <span>Inline</span>
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
              <span>Blocks</span>
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
              <span>Align</span>
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
              <span>Styles</span>
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

      <!-- Font Size Stepper -->
      <div class="nova-stepper">
        <button type="button" class="nova-stepper-btn" data-action="font-dec" title="Decrease font size">−</button>
        <div class="nova-stepper-value" id="nova-font-size-label" tabindex="0">16px</div>
        <button type="button" class="nova-stepper-btn" data-action="font-inc" title="Increase font size">+</button>
      </div>

      <div class="nova-toolbar-divider"></div>

      <!-- Basic Formatting: B I U -->
      <div class="nova-toolbar-group">
        <button type="button" class="nova-btn" data-action="bold" title="Bold (Ctrl+B)">${icons.bold}</button>
        <button type="button" class="nova-btn" data-action="italic" title="Italic (Ctrl+I)">${icons.italic}</button>
        <button type="button" class="nova-btn" data-action="underline" title="Underline (Ctrl+U)">${icons.underline}</button>
      </div>

      <!-- Dropdown 3: A ▾ (Text Color) -->
      <div class="nova-toolbar-dropdown">
        <button type="button" class="nova-btn nova-color-btn" data-dropdown="text-color" title="Text Color">
          <span style="position: relative; display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 17px; font-weight: 700; font-size: 15px; line-height: 1; margin-right: 1px;">
            A
            <span class="nova-color-bar" id="nova-text-color-bar" style="position: absolute; bottom: -1px; left: 0; right: 0; height: 3px; background: #000000; border-radius: 1px;"></span>
          </span>
          <span class="nova-caret-mini">${icons.caretDown}</span>
        </button>
        <div class="nova-dropdown-panel nova-color-swatch-box" id="panel-text-color">
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
              <input type="color" style="opacity: 0; width: 0; height: 0; position: absolute;" id="nova-toolbar-custom-color">
            </label>
          </div>
        </div>
      </div>

      <!-- Dropdown 4: 🖊️ ▾ (Highlight / Background Color) -->
      <div class="nova-toolbar-dropdown">
        <button type="button" class="nova-btn" data-dropdown="bg-color" title="Highlight Color">
          ${icons.highlightPen}
          <span class="nova-caret-mini">${icons.caretDown}</span>
        </button>
        <div class="nova-dropdown-panel nova-color-swatch-box" id="panel-bg-color">
          <div class="nova-color-grid">
            <div class="nova-color-swatch" style="background: #fef08a;" data-highlight="#fef08a" title="Yellow"></div>
            <div class="nova-color-swatch" style="background: #bbf7d0;" data-highlight="#bbf7d0" title="Green"></div>
            <div class="nova-color-swatch" style="background: #bfdbfe;" data-highlight="#bfdbfe" title="Blue"></div>
            <div class="nova-color-swatch" style="background: #fecaca;" data-highlight="#fecaca" title="Red"></div>
            <div class="nova-color-swatch" style="background: #fed7aa;" data-highlight="#fed7aa" title="Orange"></div>
            <div class="nova-color-swatch" style="background: #f5d0fe;" data-highlight="#f5d0fe" title="Purple"></div>
            <div class="nova-color-swatch" style="background: #e2e8f0;" data-highlight="#e2e8f0" title="Gray"></div>
            <div class="nova-color-swatch" style="background: #fef9c3;" data-highlight="#fef9c3" title="Light Yellow"></div>
            <div class="nova-color-swatch" style="background: #dcfce7;" data-highlight="#dcfce7" title="Light Green"></div>
            <div class="nova-color-swatch" style="background: #dbeafe;" data-highlight="#dbeafe" title="Light Blue"></div>
          </div>
          <div class="nova-color-swatch-bottom">
            <button type="button" class="nova-color-btn-tool" data-action="reset-highlight" title="Clear Highlight" style="width: 100%; font-size: 12px; gap: 4px;">
              ${icons.colorSlash}
              <span>Clear highlight</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Dropdown 5: Font Family Dropdown -->
      <div class="nova-toolbar-dropdown">
        <button type="button" class="nova-select-btn" data-dropdown="fonts" title="Font Family" style="min-width: 70px;">
          <span>Font</span>
          <span class="nova-caret-mini">${icons.caretDown}</span>
        </button>
        <div class="nova-dropdown-panel nova-submenu-scrollable" id="panel-fonts" style="min-width: 180px; max-height: 320px;">
          <button type="button" class="nova-menu-subitem" data-font="default">System Default</button>
          <button type="button" class="nova-menu-subitem" data-font="Inter, sans-serif" style="font-family: Inter;">Inter</button>
          <button type="button" class="nova-menu-subitem" data-font="Arial, sans-serif" style="font-family: Arial;">Arial</button>
          <button type="button" class="nova-menu-subitem" data-font="'Arial Black', sans-serif" style="font-family: 'Arial Black'; font-weight: 900;">Arial Black</button>
          <button type="button" class="nova-menu-subitem" data-font="'Book Antiqua', serif" style="font-family: 'Book Antiqua';">Book Antiqua</button>
          <button type="button" class="nova-menu-subitem" data-font="Roboto, sans-serif" style="font-family: Roboto;">Roboto</button>
          <button type="button" class="nova-menu-subitem" data-font="Georgia, serif" style="font-family: Georgia;">Georgia</button>
          <button type="button" class="nova-menu-subitem" data-font="Helvetica, sans-serif" style="font-family: Helvetica;">Helvetica</button>
          <button type="button" class="nova-menu-subitem" data-font="Impact, sans-serif" style="font-family: Impact; font-weight: 900;">Impact</button>
          <button type="button" class="nova-menu-subitem" data-font="Tahoma, sans-serif" style="font-family: Tahoma;">Tahoma</button>
          <button type="button" class="nova-menu-subitem" data-font="'Times New Roman', serif" style="font-family: 'Times New Roman';">Times New Roman</button>
          <button type="button" class="nova-menu-subitem" data-font="'Trebuchet MS', sans-serif" style="font-family: 'Trebuchet MS';">Trebuchet MS</button>
          <button type="button" class="nova-menu-subitem" data-font="Verdana, sans-serif" style="font-family: Verdana;">Verdana</button>
          <button type="button" class="nova-menu-subitem" data-font="'Comic Sans MS', cursive" style="font-family: 'Comic Sans MS';">Comic Sans MS</button>
          <button type="button" class="nova-menu-subitem" data-font="ui-monospace, monospace" style="font-family: monospace;">Monospace</button>
        </div>
      </div>

      <!-- 🔗 (Link) -->
      <button type="button" class="nova-btn" data-action="link" title="Insert Link (Ctrl+K)">${icons.link}</button>

      <!-- 🖼️ (Image) -->
      <button type="button" class="nova-btn" data-action="image" title="Insert Image">${icons.image}</button>

      <!-- 🎥 (Video) -->
      <button type="button" class="nova-btn" data-action="video" title="Embed Video">${icons.video}</button>

      <!-- √x (Math Formula) -->
      <button type="button" class="nova-btn" data-action="math" title="Insert Math Formula (LaTeX)">${icons.math}</button>

      <!-- Dropdown 6: 📅 ▾ (Table Grid Picker) -->
      <div class="nova-toolbar-dropdown">
        <button type="button" class="nova-btn" data-dropdown="table-grid" title="Insert Table">
          ${icons.table}
          <span class="nova-caret-mini">${icons.caretDown}</span>
        </button>
        <div class="nova-dropdown-panel nova-submenu-table-grid" id="panel-table-grid">
          <div class="nova-table-matrix" data-matrix-id="toolbar-table"></div>
          <div class="nova-matrix-label" data-label-id="toolbar-table">0x0</div>
        </div>
      </div>

      <!-- 💬 (Blockquote) -->
      <button type="button" class="nova-btn" data-action="quote" title="Blockquote">${icons.quote}</button>

      <!-- Dropdown 7: ☰ ▾ (Alignment Dropdown) -->
      <div class="nova-toolbar-dropdown">
        <button type="button" class="nova-btn" data-dropdown="align" title="Text Alignment">
          ${icons.alignLeft}
          <span class="nova-caret-mini">${icons.caretDown}</span>
        </button>
        <div class="nova-dropdown-panel" id="panel-align" style="min-width: 140px;">
          <button type="button" class="nova-menu-subitem" data-align="left">
            <div class="nova-menu-left"><span class="nova-menu-icon">${icons.alignLeft}</span><span>Left</span></div>
          </button>
          <button type="button" class="nova-menu-subitem" data-align="center">
            <div class="nova-menu-left"><span class="nova-menu-icon">${icons.alignCenter}</span><span>Center</span></div>
          </button>
          <button type="button" class="nova-menu-subitem" data-align="right">
            <div class="nova-menu-left"><span class="nova-menu-icon">${icons.alignRight}</span><span>Right</span></div>
          </button>
          <button type="button" class="nova-menu-subitem" data-align="justify">
            <div class="nova-menu-left"><span class="nova-menu-icon">${icons.alignJustify}</span><span>Justify</span></div>
          </button>
        </div>
      </div>

      <!-- Dropdown 8: •☰ ▾ (Bullet List Dropdown) -->
      <div class="nova-toolbar-dropdown">
        <button type="button" class="nova-btn" data-dropdown="bullet-types" title="Bullet List Options">
          ${icons.bulletList}
          <span class="nova-caret-mini">${icons.caretDown}</span>
        </button>
        <div class="nova-dropdown-panel" id="panel-bullet-types" style="min-width: auto; padding: 4px;">
          <div class="nova-list-preview-grid">
            <button type="button" class="nova-list-card" data-bullet-style="disc" title="Default">
              <svg width="28" height="22" viewBox="0 0 32 26" fill="none">
                <circle cx="5" cy="5" r="2" fill="#222f3e"/>
                <rect x="10" y="4" width="18" height="2.5" rx="1" fill="#94a3b8"/>
                <circle cx="9" cy="13" r="1.8" stroke="#222f3e" stroke-width="1.2" fill="none"/>
                <rect x="14" y="12" width="14" height="2.5" rx="1" fill="#94a3b8"/>
                <rect x="11.5" y="19.5" width="3" height="3" fill="#222f3e"/>
                <rect x="18" y="20" width="10" height="2.5" rx="1" fill="#94a3b8"/>
              </svg>
            </button>
            <button type="button" class="nova-list-card" data-bullet-style="disc" title="Disc">
              <svg width="28" height="22" viewBox="0 0 32 26" fill="none">
                <circle cx="5" cy="5" r="2" fill="#222f3e"/>
                <rect x="10" y="4" width="18" height="2.5" rx="1" fill="#94a3b8"/>
                <circle cx="5" cy="13" r="2" fill="#222f3e"/>
                <rect x="10" y="12" width="18" height="2.5" rx="1" fill="#94a3b8"/>
                <circle cx="5" cy="21" r="2" fill="#222f3e"/>
                <rect x="10" y="20" width="18" height="2.5" rx="1" fill="#94a3b8"/>
              </svg>
            </button>
            <button type="button" class="nova-list-card" data-bullet-style="circle" title="Circle">
              <svg width="28" height="22" viewBox="0 0 32 26" fill="none">
                <circle cx="5" cy="5" r="1.8" stroke="#222f3e" stroke-width="1.2" fill="none"/>
                <rect x="10" y="4" width="18" height="2.5" rx="1" fill="#94a3b8"/>
                <circle cx="5" cy="13" r="1.8" stroke="#222f3e" stroke-width="1.2" fill="none"/>
                <rect x="10" y="12" width="18" height="2.5" rx="1" fill="#94a3b8"/>
                <circle cx="5" cy="21" r="1.8" stroke="#222f3e" stroke-width="1.2" fill="none"/>
                <rect x="10" y="20" width="18" height="2.5" rx="1" fill="#94a3b8"/>
              </svg>
            </button>
            <button type="button" class="nova-list-card" data-bullet-style="square" title="Square">
              <svg width="28" height="22" viewBox="0 0 32 26" fill="none">
                <rect x="3.5" y="3.5" width="3.5" height="3.5" fill="#222f3e"/>
                <rect x="10" y="4" width="18" height="2.5" rx="1" fill="#94a3b8"/>
                <rect x="3.5" y="11.5" width="3.5" height="3.5" fill="#222f3e"/>
                <rect x="10" y="12" width="18" height="2.5" rx="1" fill="#94a3b8"/>
                <rect x="3.5" y="19.5" width="3.5" height="3.5" fill="#222f3e"/>
                <rect x="10" y="20" width="18" height="2.5" rx="1" fill="#94a3b8"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Dropdown 9: 1.☰ ▾ (Numbered List Dropdown) -->
      <div class="nova-toolbar-dropdown">
        <button type="button" class="nova-btn" data-dropdown="ordered-types" title="Numbered List Options">
          ${icons.orderedList}
          <span class="nova-caret-mini">${icons.caretDown}</span>
        </button>
        <div class="nova-dropdown-panel" id="panel-ordered-types" style="min-width: auto; padding: 4px;">
          <div class="nova-list-preview-grid">
            <button type="button" class="nova-list-card" data-number-style="decimal" title="Default (1. 2. 3.)">
              <svg width="28" height="22" viewBox="0 0 32 26" fill="none">
                <text x="2" y="7" font-size="7" font-family="sans-serif" font-weight="600" fill="#222f3e">1.</text>
                <rect x="11" y="4" width="17" height="2.5" rx="1" fill="#94a3b8"/>
                <text x="2" y="15" font-size="7" font-family="sans-serif" font-weight="600" fill="#222f3e">2.</text>
                <rect x="11" y="12" width="17" height="2.5" rx="1" fill="#94a3b8"/>
                <text x="2" y="23" font-size="7" font-family="sans-serif" font-weight="600" fill="#222f3e">3.</text>
                <rect x="11" y="20" width="17" height="2.5" rx="1" fill="#94a3b8"/>
              </svg>
            </button>
            <button type="button" class="nova-list-card" data-number-style="lower-alpha" title="Lower Alpha (a. b. c.)">
              <svg width="28" height="22" viewBox="0 0 32 26" fill="none">
                <text x="2" y="7" font-size="7" font-family="sans-serif" font-weight="600" fill="#222f3e">a.</text>
                <rect x="11" y="4" width="17" height="2.5" rx="1" fill="#94a3b8"/>
                <text x="2" y="15" font-size="7" font-family="sans-serif" font-weight="600" fill="#222f3e">b.</text>
                <rect x="11" y="12" width="17" height="2.5" rx="1" fill="#94a3b8"/>
                <text x="2" y="23" font-size="7" font-family="sans-serif" font-weight="600" fill="#222f3e">c.</text>
                <rect x="11" y="20" width="17" height="2.5" rx="1" fill="#94a3b8"/>
              </svg>
            </button>
            <button type="button" class="nova-list-card" data-number-style="upper-alpha" title="Upper Alpha (A. B. C.)">
              <svg width="28" height="22" viewBox="0 0 32 26" fill="none">
                <text x="2" y="7" font-size="7" font-family="sans-serif" font-weight="600" fill="#222f3e">A.</text>
                <rect x="11" y="4" width="17" height="2.5" rx="1" fill="#94a3b8"/>
                <text x="2" y="15" font-size="7" font-family="sans-serif" font-weight="600" fill="#222f3e">B.</text>
                <rect x="11" y="12" width="17" height="2.5" rx="1" fill="#94a3b8"/>
                <text x="2" y="23" font-size="7" font-family="sans-serif" font-weight="600" fill="#222f3e">C.</text>
                <rect x="11" y="20" width="17" height="2.5" rx="1" fill="#94a3b8"/>
              </svg>
            </button>
            <button type="button" class="nova-list-card" data-number-style="lower-roman" title="Lower Roman (i. ii. iii.)">
              <svg width="28" height="22" viewBox="0 0 32 26" fill="none">
                <text x="2" y="7" font-size="6" font-family="sans-serif" font-weight="600" fill="#222f3e">i.</text>
                <rect x="11" y="4" width="17" height="2.5" rx="1" fill="#94a3b8"/>
                <text x="2" y="15" font-size="6" font-family="sans-serif" font-weight="600" fill="#222f3e">ii.</text>
                <rect x="11" y="12" width="17" height="2.5" rx="1" fill="#94a3b8"/>
                <text x="2" y="23" font-size="6" font-family="sans-serif" font-weight="600" fill="#222f3e">iii.</text>
                <rect x="11" y="20" width="17" height="2.5" rx="1" fill="#94a3b8"/>
              </svg>
            </button>
            <button type="button" class="nova-list-card" data-number-style="upper-roman" title="Upper Roman (I. II. III.)">
              <svg width="28" height="22" viewBox="0 0 32 26" fill="none">
                <text x="2" y="7" font-size="6.5" font-family="sans-serif" font-weight="600" fill="#222f3e">I.</text>
                <rect x="11" y="4" width="17" height="2.5" rx="1" fill="#94a3b8"/>
                <text x="2" y="15" font-size="6.5" font-family="sans-serif" font-weight="600" fill="#222f3e">II.</text>
                <rect x="11" y="12" width="17" height="2.5" rx="1" fill="#94a3b8"/>
                <text x="2" y="23" font-size="6.5" font-family="sans-serif" font-weight="600" fill="#222f3e">III.</text>
                <rect x="11" y="20" width="17" height="2.5" rx="1" fill="#94a3b8"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- ☑☰ (Checklist / Task List) -->
      <button type="button" class="nova-btn" data-action="task-list" title="Checklist">${icons.taskList}</button>

      <!-- Tx (Clear Formatting) -->
      <button type="button" class="nova-btn" data-action="clear-format" title="Clear Formatting (Tx)">${icons.clearFormatting}</button>

      <!-- <> (Source Code) -->
      <button type="button" class="nova-btn" data-action="source-code" title="HTML Source Code">${icons.sourceCode}</button>

      <!-- ⛶ (Fullscreen) -->
      <button type="button" class="nova-btn" data-action="fullscreen" title="Toggle Fullscreen">${icons.fullscreen}</button>

      <!-- ❓ (Help) -->
      <button type="button" class="nova-btn" data-action="shortcuts" title="Keyboard Shortcuts">${icons.helpCircle}</button>
    `;
  }

  private initTablePicker(): void {
    const matrix = this.container.querySelector('.nova-table-matrix[data-matrix-id="toolbar-table"]') as HTMLElement;
    const label = this.container.querySelector('.nova-matrix-label[data-label-id="toolbar-table"]') as HTMLElement;
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
          this.closeAllDropdowns();
        });

        matrix.appendChild(cell);
      }
    }

    matrix.addEventListener('mouseleave', () => {
      label.textContent = '0x0';
      matrix.querySelectorAll('.nova-matrix-cell').forEach((el) => el.classList.remove('highlighted'));
    });
  }

  private bindEvents(): void {
    const editor = this.editor;

    // Dropdown toggling
    this.container.querySelectorAll('[data-dropdown]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const parent = btn.closest('.nova-toolbar-dropdown');
        const isOpen = parent?.classList.contains('is-open');
        this.closeAllDropdowns();
        if (!isOpen) parent?.classList.add('is-open');
      });
    });

    document.addEventListener('click', () => this.closeAllDropdowns());

    // Language options
    this.container.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang') as SupportedLanguage;
        if (lang) {
          this.instance.setLanguage(lang);
        }
        this.closeAllDropdowns();
      });
    });

    // Action handlers
    this.container.querySelectorAll('[data-action]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.getAttribute('data-action');
        if (!action) return;

        switch (action) {
          case 'undo': editor.chain().focus().undo().run(); break;
          case 'redo': editor.chain().focus().redo().run(); break;
          case 'bold': editor.chain().focus().toggleBold().run(); break;
          case 'italic': editor.chain().focus().toggleItalic().run(); break;
          case 'underline': editor.chain().focus().toggleUnderline().run(); break;
          case 'strike': editor.chain().focus().toggleStrike().run(); break;
          case 'superscript': (editor.chain().focus() as any).toggleSuperscript().run(); break;
          case 'subscript': (editor.chain().focus() as any).toggleSubscript().run(); break;
          case 'inline-code': editor.chain().focus().toggleCode().run(); break;
          case 'insert-code': editor.chain().focus().toggleCodeBlock().run(); break;
          case 'insert-quote':
          case 'quote': editor.chain().focus().toggleBlockquote().run(); break;
          case 'link': new LinkModal(editor).show(); break;
          case 'image': new ImageModal(editor, this.instance.options.uploadImage).show(); break;
          case 'video': new VideoModal(editor).show(); break;
          case 'math': new MathModal(editor).show(); break;
          case 'table': new TableGridModal(editor).show(); break;
          case 'bullet-list': editor.chain().focus().toggleBulletList().run(); break;
          case 'ordered-list': editor.chain().focus().toggleOrderedList().run(); break;
          case 'task-list': (editor.chain().focus() as any).toggleTaskList().run(); break;
          case 'clear-format': editor.chain().focus().unsetAllMarks().clearNodes().run(); break;
          case 'source-code': new SourceCodeModal(editor).show(); break;
          case 'fullscreen': this.instance.toggleFullscreen(); break;
          case 'shortcuts': new ShortcutsModal().show(); break;
          case 'font-dec':
            this.currentFontSize = Math.max(8, this.currentFontSize - 2);
            this.applyFontSize();
            break;
          case 'font-inc':
            this.currentFontSize = Math.min(72, this.currentFontSize + 2);
            this.applyFontSize();
            break;
          case 'reset-color':
            (editor.chain().focus() as any).unsetColor().run();
            const colorBar = this.container.querySelector('#nova-text-color-bar') as HTMLElement;
            if (colorBar) colorBar.style.background = '#000000';
            this.closeAllDropdowns();
            break;
          case 'reset-highlight':
            (editor.chain().focus() as any).unsetHighlight().run();
            this.closeAllDropdowns();
            break;
          case 'small-caps':
            editor.chain().focus().toggleBold().run();
            this.closeAllDropdowns();
            break;
          case 'subtitle':
            editor.chain().focus().insertContent('<p style="color: #64748b; font-size: 16px;">Subtitle text...</p>').run();
            this.closeAllDropdowns();
            break;
          case 'highlight-style':
            (editor.chain().focus() as any).toggleHighlight({ color: '#bfdbfe' }).run();
            this.closeAllDropdowns();
            break;
        }
      });
    });

    // Heading options
    this.container.querySelectorAll('[data-heading]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const level = parseInt(btn.getAttribute('data-heading') || '0', 10);
        if (level === 0) editor.chain().focus().setParagraph().run();
        else editor.chain().focus().toggleHeading({ level: level as any }).run();
        this.closeAllDropdowns();
      });
    });

    // Align options
    this.container.querySelectorAll('[data-align]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const align = btn.getAttribute('data-align');
        if (align) (editor.chain().focus() as any).setTextAlign(align).run();
        this.closeAllDropdowns();
      });
    });

    // Font family options
    this.container.querySelectorAll('[data-font]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const font = btn.getAttribute('data-font');
        if (font === 'default') (editor.chain().focus() as any).unsetFontFamily().run();
        else if (font) (editor.chain().focus() as any).setFontFamily(font).run();
        this.closeAllDropdowns();
      });
    });

    // Color Swatches
    this.container.querySelectorAll('.nova-color-swatch[data-color]').forEach((swatch) => {
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        const color = (swatch as HTMLElement).dataset.color;
        if (color) {
          (editor.chain().focus() as any).setColor(color).run();
          const bar = this.container.querySelector('#nova-text-color-bar');
          if (bar) (bar as HTMLElement).style.background = color;
        }
        this.closeAllDropdowns();
      });
    });

    // Highlight Swatches
    this.container.querySelectorAll('.nova-color-swatch[data-highlight]').forEach((swatch) => {
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        const color = (swatch as HTMLElement).dataset.highlight;
        if (color) (editor.chain().focus() as any).toggleHighlight({ color }).run();
        this.closeAllDropdowns();
      });
    });

    // Language options (文A ▾)
    this.container.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang') as SupportedLanguage;
        if (lang) {
          this.instance.setLanguage(lang);
        }
        this.closeAllDropdowns();
      });
    });

    // Bullet list style variants
    this.container.querySelectorAll('[data-bullet-style]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const style = btn.getAttribute('data-bullet-style') || 'disc';
        if (!editor.isActive('bulletList')) {
          editor.chain().focus().toggleBulletList().run();
        }
        (editor.chain().focus() as any).updateAttributes('bulletList', { listStyleType: style }).run();
        this.closeAllDropdowns();
      });
    });

    // Numbered list style variants
    this.container.querySelectorAll('[data-number-style]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const style = btn.getAttribute('data-number-style') || 'decimal';
        if (!editor.isActive('orderedList')) {
          editor.chain().focus().toggleOrderedList().run();
        }
        (editor.chain().focus() as any).updateAttributes('orderedList', { listStyleType: style }).run();
        this.closeAllDropdowns();
      });
    });

    // Custom Color Input
    const colorInput = this.container.querySelector('#nova-toolbar-custom-color') as HTMLInputElement;
    colorInput?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.value) {
        (editor.chain().focus() as any).setColor(target.value).run();
        const bar = this.container.querySelector('#nova-text-color-bar');
        if (bar) (bar as HTMLElement).style.background = target.value;
      }
    });
    colorInput?.addEventListener('change', () => this.closeAllDropdowns());
  }

  private applyFontSize(): void {
    const label = this.container.querySelector('#nova-font-size-label');
    if (label) label.textContent = `${this.currentFontSize}px`;
    (this.editor.chain().focus() as any).setFontSize(`${this.currentFontSize}px`).run();
  }

  private closeAllDropdowns(): void {
    this.container.querySelectorAll('.nova-toolbar-dropdown').forEach((d) => d.classList.remove('is-open'));
  }

  public updateLanguage(lang: SupportedLanguage): void {
    const t = i18nDictionary[lang] || i18nDictionary.en;

    // Update active checkmarks on language list
    this.container.querySelectorAll('[data-lang]').forEach((btn) => {
      const l = btn.getAttribute('data-lang');
      const baseSpan = btn.querySelector('span:first-child') || btn;
      const text = baseSpan.textContent?.replace('✓', '').trim() || '';
      if (l === lang) {
        btn.innerHTML = `<span style="font-weight: 600;">${text}</span> <span style="font-weight: 700; color: #006ce0;">✓</span>`;
      } else {
        btn.innerHTML = `<span>${text}</span>`;
      }
    });

    // Update tooltips
    const setTooltip = (sel: string, text: string) => {
      const el = this.container.querySelector(sel);
      if (el) el.setAttribute('title', text);
    };

    setTooltip('[data-dropdown="paragraph"]', t.toolbar.paragraph);
    setTooltip('[data-action="bold"]', t.toolbar.bold);
    setTooltip('[data-action="italic"]', t.toolbar.italic);
    setTooltip('[data-action="underline"]', t.toolbar.underline);
    setTooltip('[data-dropdown="text-color"]', t.toolbar.textColor);
    setTooltip('[data-dropdown="bg-color"]', t.toolbar.highlightColor);
    setTooltip('[data-dropdown="fonts"]', t.toolbar.fontFamily);
    setTooltip('[data-dropdown="table-grid"]', t.toolbar.insertTable);
    setTooltip('[data-action="link"]', t.toolbar.insertLink);
    setTooltip('[data-action="image"]', t.toolbar.insertImage);
    setTooltip('[data-action="comment"]', t.toolbar.comment);
    setTooltip('[data-action="task-list"]', t.toolbar.checklist);
    setTooltip('[data-action="clear-format"]', t.toolbar.clearFormat);
    setTooltip('[data-action="source-code"]', t.toolbar.sourceCode);
    setTooltip('[data-action="fullscreen"]', t.toolbar.fullscreen);
    setTooltip('[data-action="shortcuts"]', t.toolbar.shortcuts);
  }

  public updateState(): void {
    const activeMap: Record<string, boolean> = {
      bold: this.editor.isActive('bold'),
      italic: this.editor.isActive('italic'),
      underline: this.editor.isActive('underline'),
      strike: this.editor.isActive('strike'),
      'task-list': this.editor.isActive('taskList'),
      quote: this.editor.isActive('blockquote'),
      fullscreen: this.instance.isFullscreen(),
      'source-code': this.instance.isSourceMode(),
    };

    Object.entries(activeMap).forEach(([action, isActive]) => {
      const btn = this.container.querySelector(`[data-action="${action}"]`);
      if (btn) {
        if (isActive) btn.classList.add('is-active');
        else btn.classList.remove('is-active');
      }
    });

    // Dynamic Fullscreen / Minimize Icon
    const fullscreenBtn = this.container.querySelector('[data-action="fullscreen"]');
    if (fullscreenBtn) {
      const isFull = this.instance.isFullscreen();
      fullscreenBtn.innerHTML = isFull ? icons.fullscreenExit : icons.fullscreen;
      fullscreenBtn.setAttribute('title', isFull ? 'Exit Fullscreen (Esc)' : 'Toggle Fullscreen');
      fullscreenBtn.classList.toggle('is-active', isFull);
    }

    // 1. Dynamic Alignment Icon & State
    let currentAlign = 'left';
    if (this.editor.isActive({ textAlign: 'center' })) currentAlign = 'center';
    else if (this.editor.isActive({ textAlign: 'right' })) currentAlign = 'right';
    else if (this.editor.isActive({ textAlign: 'justify' })) currentAlign = 'justify';

    const alignBtn = this.container.querySelector('[data-dropdown="align"]');
    if (alignBtn) {
      let icon = icons.alignLeft;
      if (currentAlign === 'center') icon = icons.alignCenter;
      else if (currentAlign === 'right') icon = icons.alignRight;
      else if (currentAlign === 'justify') icon = icons.alignJustify;

      alignBtn.innerHTML = `${icon}<span class="nova-caret-mini">${icons.caretDown}</span>`;
      alignBtn.classList.toggle('is-active', currentAlign !== 'left');
    }

    const panelAlign = this.container.querySelector('#panel-align');
    if (panelAlign) {
      panelAlign.querySelectorAll('[data-align]').forEach((item) => {
        const a = item.getAttribute('data-align');
        const isCur = (a === currentAlign);
        item.classList.toggle('is-active', isCur);
        const checkEl = item.querySelector('.nova-menu-check');
        if (isCur) {
          if (!checkEl) {
            const chk = document.createElement('span');
            chk.className = 'nova-menu-check';
            chk.textContent = '✓';
            item.appendChild(chk);
          }
        } else {
          checkEl?.remove();
        }
      });
    }

    // 2. Dynamic List States
    const isBullet = this.editor.isActive('bulletList');
    const bulletBtn = this.container.querySelector('[data-dropdown="bullet-types"]');
    if (bulletBtn) bulletBtn.classList.toggle('is-active', isBullet);

    const activeBulletStyle = this.editor.getAttributes('bulletList').listStyleType || 'disc';
    const panelBullet = this.container.querySelector('#panel-bullet-types');
    if (panelBullet) {
      panelBullet.querySelectorAll('.nova-list-card[data-bullet-style]').forEach((card) => {
        const s = card.getAttribute('data-bullet-style');
        card.classList.toggle('is-active', isBullet && s === activeBulletStyle);
      });
    }

    const isOrdered = this.editor.isActive('orderedList');
    const orderedBtn = this.container.querySelector('[data-dropdown="ordered-types"]');
    if (orderedBtn) orderedBtn.classList.toggle('is-active', isOrdered);

    const activeNumberStyle = this.editor.getAttributes('orderedList').listStyleType || 'decimal';
    const panelOrdered = this.container.querySelector('#panel-ordered-types');
    if (panelOrdered) {
      panelOrdered.querySelectorAll('.nova-list-card[data-number-style]').forEach((card) => {
        const s = card.getAttribute('data-number-style');
        card.classList.toggle('is-active', isOrdered && s === activeNumberStyle);
      });
    }

    // 3. Dynamic Format Block Label
    const blockLabel = this.container.querySelector('#nova-current-block');
    let currentBlock = 'Paragraph';
    if (this.editor.isActive('heading', { level: 1 })) currentBlock = 'Heading 1';
    else if (this.editor.isActive('heading', { level: 2 })) currentBlock = 'Heading 2';
    else if (this.editor.isActive('heading', { level: 3 })) currentBlock = 'Heading 3';
    else if (this.editor.isActive('heading', { level: 4 })) currentBlock = 'Heading 4';
    else if (this.editor.isActive('heading', { level: 5 })) currentBlock = 'Heading 5';
    else if (this.editor.isActive('heading', { level: 6 })) currentBlock = 'Heading 6';
    else if (this.editor.isActive('blockquote')) currentBlock = 'Quote';
    else if (this.editor.isActive('codeBlock')) currentBlock = 'Code Block';

    if (blockLabel) blockLabel.textContent = currentBlock;

    // 4. Dynamic Font Size Stepper
    const sizeLabel = this.container.querySelector('#nova-font-size-label');
    if (sizeLabel) {
      const explicitSize = this.editor.getAttributes('textStyle').fontSize;
      if (explicitSize) {
        sizeLabel.textContent = explicitSize;
      } else if (this.editor.isActive('heading', { level: 1 })) {
        sizeLabel.textContent = '32px';
      } else if (this.editor.isActive('heading', { level: 2 })) {
        sizeLabel.textContent = '24px';
      } else if (this.editor.isActive('heading', { level: 3 })) {
        sizeLabel.textContent = '20px';
      } else if (this.editor.isActive('heading', { level: 4 })) {
        sizeLabel.textContent = '18px';
      } else {
        sizeLabel.textContent = `${this.currentFontSize}px`;
      }
    }

    // 5. Dynamic Text Color Bar Indicator
    const colorBar = this.container.querySelector('#nova-text-color-bar') as HTMLElement;
    const activeColor = this.editor.getAttributes('textStyle').color || '#000000';
    if (colorBar) colorBar.style.background = activeColor;

    // 6. Dynamic Highlight Button State
    const bgBtn = this.container.querySelector('[data-dropdown="bg-color"]');
    if (bgBtn) bgBtn.classList.toggle('is-active', this.editor.isActive('highlight'));
  }

  private listenToSelection(): void {
    this.editor.on('transaction', () => {
      this.updateState();
    });
    this.editor.on('selectionUpdate', () => {
      this.updateState();
    });
  }
}
