# 🌟 StackEditor

> **100% Free & Open-Source, Enterprise-Grade WYSIWYG Rich Text Editor Platform**
> Complete Menubar, Ribbon Toolbar, Advanced Tables, Multi-Language i18n, LaTeX Formula Support, HTML Source Editor, PDF/Word Export, and Dual Theme Engine with zero API keys or cloud subscriptions.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178c6.svg)](https://www.typescriptlang.org/)
[![React Supported](https://img.shields.io/badge/React-18%2B-61dafb.svg)](https://reactjs.org/)
[![Powered by](https://img.shields.io/badge/Powered%20by-Shivira%20Stack-006ce0.svg)](https://github.com/Shivira-Stack/StackEditor)

---

## 📑 Table of Contents
- [✨ Key Features](#-key-features)
- [📦 Installation](#-installation)
- [🚀 Quick Start](#-quick-start)
  - [Vanilla JavaScript / TypeScript](#1-vanilla-javascript--typescript)
  - [React Component](#2-react-component)
  - [React Hook](#3-react-custom-hook)
  - [Next.js / Vue / Svelte](#4-nextjs--vue--svelte-integrations)
- [⚙️ Configuration Options](#️-configuration-options)
- [🛠️ API Methods Reference](#️-api-methods-reference)
- [🧩 Built-in Plugins & Features](#-built-in-plugins--features)
  - [1. Menubar & Cascading Submenus](#1-menubar--cascading-submenus)
  - [2. Ribbon Toolbar & List Card Pickers](#2-ribbon-toolbar--list-card-pickers)
  - [3. Dynamic Tables Engine](#3-dynamic-tables-engine)
  - [4. Multi-Language i18n Support](#4-multi-language-i18n-support)
  - [5. LaTeX Mathematics (KaTeX)](#5-latex-mathematics-katex)
  - [6. HTML Source Code Modal Dialog](#6-html-source-code-modal-dialog)
  - [7. Slash Command Palette (/)](#7-slash-command-palette-)
  - [8. Floating Bubble Menu](#8-floating-bubble-menu)
  - [9. Word (.docx) & PDF Export Engine](#9-word-docx--pdf-export-engine)
  - [10. Image & Media Handling](#10-image--media-handling)
- [🎨 Themes & Styling](#-themes--styling)
- [⌨️ Keyboard Shortcuts](#️-keyboard-shortcuts)
- [📄 License & Credits](#-license--credits)

---

## ✨ Key Features

- 💎 **Pixel-Perfect Menubar & Ribbon UI:** Full top menubar (*File, Edit, View, Insert, Format, Tools, Table, Help*) and flexible toolbar with visual list style cards and 10×10 table grid picker.
- 🚀 **100% Free & Open-Source:** No cloud subscriptions, zero API keys, no restrictions, and complete creative control.
- 📊 **Advanced Interactive Tables:** Drag-to-resize columns, cell merging & splitting, row/column addition & deletion, header row toggles, and floating table toolbar.
- 🔬 **LaTeX Mathematical Expressions:** Native inline and block LaTeX formulas powered by KaTeX with real-time preview modal.
- ⚡ **Source Code Editor Dialog:** In-app formatted HTML source editor with line-number gutter, syntax formatting, font zoom, light/dark themes, and clipboard tools.
- 🌐 **Multi-Language (i18n):** Instant UI language switching across 8+ languages (English, Spanish, French, German, Italian, Portuguese, Japanese, Chinese).
- ⌨️ **Slash Command Palette (`/`):** Contextual block inserting menu triggered by typing `/` on any blank line.
- 💬 **Floating Contextual Bubble Menu:** Automatic formatting popup on text selection.
- 📄 **Word (.docx) & PDF Export:** Client-side document export to `.docx` and print-ready PDF with zero backend dependencies.
- 🌓 **Dual Theme Engine:** Light (Clean White) and Matte Charcoal Dark Theme with high-contrast typography.
- 📦 **Dual API Support:** First-class support for both Vanilla JS/TS (`StackEditor`) and React (`StackEditorComponent`, `useStackEditor`).

---

## 📦 Installation

Install directly from GitHub or NPM:

```bash
# Using NPM
npm install git+https://github.com/Shivira-Stack/StackEditor.git

# Using Yarn
yarn add git+https://github.com/Shivira-Stack/StackEditor.git

# Using PNPM
pnpm add git+https://github.com/Shivira-Stack/StackEditor.git
```

---

## 🚀 Quick Start

### 1. Vanilla JavaScript / TypeScript

```html
<!-- index.html -->
<div id="editor-container"></div>

<script type="module">
  import { StackEditor } from 'stack-editor';
  import 'stack-editor/style.css';

  const editor = StackEditor.create({
    element: '#editor-container',
    placeholder: 'Start writing your story...',
    theme: 'light', // 'light' | 'dark'
    onChange: (html, instance) => {
      console.log('Document HTML:', html);
      console.log('Document Markdown:', instance.getMarkdown());
    },
  });
</script>
```

---

### 2. React Component

```tsx
import React, { useState } from 'react';
import { StackEditorComponent } from 'stack-editor/react';
import 'stack-editor/style.css';

export function DocumentEditor() {
  const [content, setContent] = useState('<h1>Welcome to StackEditor</h1><p>Start writing...</p>');

  return (
    <div style={{ maxWidth: 1000, margin: '20px auto' }}>
      <StackEditorComponent
        value={content}
        theme="light" // 'light' | 'dark'
        placeholder="Type here..."
        menubar={true}
        toolbar="full"
        statusBar={true}
        onChange={(html) => setContent(html)}
        onEditorReady={(editor) => {
          console.log('StackEditor is ready:', editor);
        }}
      />
    </div>
  );
}
```

---

### 3. React Custom Hook

```tsx
import React from 'react';
import { useStackEditor } from 'stack-editor/react';
import 'stack-editor/style.css';

export function CustomEditor() {
  const { containerRef, editor } = useStackEditor({
    placeholder: 'Write your notes...',
    theme: 'dark',
  });

  return (
    <div>
      <div className="editor-actions" style={{ marginBottom: 12 }}>
        <button onClick={() => editor?.exportToPDF()}>Export PDF</button>
        <button onClick={() => editor?.exportToWord()}>Export Word</button>
        <button onClick={() => editor?.setTheme('light')}>Light Theme</button>
        <button onClick={() => editor?.setTheme('dark')}>Dark Theme</button>
      </div>

      <div ref={containerRef} />
    </div>
  );
}
```

---

### 4. Next.js / Vue / Svelte Integrations

#### Next.js (App Router / Pages Router)
Because rich text editors interact with the browser DOM, load `StackEditorComponent` with dynamic import:

```tsx
import dynamic from 'next/dynamic';

const StackEditorComponent = dynamic(
  () => import('stack-editor/react').then((mod) => mod.StackEditorComponent),
  { ssr: false }
);
```

---

## ⚙️ Configuration Options

Pass these options to `StackEditor.create({ ... })` or `<StackEditorComponent { ... } />`:

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `element` | `HTMLElement \| string` | *(required in Vanilla)* | Target container DOM element or selector string |
| `content` | `string \| object` | `''` | Initial HTML string or JSON document object |
| `placeholder` | `string` | `'Type something...'` | Placeholder text shown on empty canvas |
| `editable` | `boolean` | `true` | Whether editor is editable or read-only |
| `autofocus` | `boolean \| 'start' \| 'end'` | `false` | Automatically focus editor on mount |
| `theme` | `'light' \| 'dark'` | `'light'` | Theme color mode |
| `language` | `'en' \| 'es' \| 'fr' \| 'de' \| 'it' \| 'pt' \| 'ja' \| 'zh'` | `'en'` | Initial UI language |
| `menubar` | `boolean` | `true` | Show or hide the top menubar navigation |
| `toolbar` | `boolean \| 'full' \| 'simple' \| 'document'` | `true` | Show or hide toolbar ribbon |
| `statusBar` | `boolean` | `true` | Show or hide bottom status bar |
| `bubbleMenu` | `boolean` | `true` | Enable floating selection popup menu |
| `slashCommand`| `boolean` | `true` | Enable slash `/` command palette |
| `tableToolbar`| `boolean` | `true` | Enable floating table action toolbar |
| `uploadImage` | `(file: File) => Promise<string>` | `undefined` | Custom asynchronous image uploader |
| `onChange` | `(html: string, editor: StackEditor) => void` | `undefined` | Callback fired on every content change |
| `onInit` | `(editor: StackEditor) => void` | `undefined` | Callback fired when editor initialization completes |
| `onDestroy` | `() => void` | `undefined` | Callback fired when editor instance is destroyed |

---

## 🛠️ API Methods Reference

Given an instance `editor = StackEditor.create(...)`:

### Content & Formats
- `editor.getHTML(): string` — Returns the current document as clean HTML.
- `editor.getMarkdown(): string` — Returns the document converted to standard Markdown.
- `editor.getJSON(): object` — Returns the underlying ProseMirror document AST JSON.
- `editor.getText(): string` — Returns plain text representation.
- `editor.setContent(content: string, emitUpdate?: boolean): void` — Replaces editor content.
- `editor.clearContent(): void` — Clears the editor canvas.
- `editor.isEmpty(): boolean` — Returns `true` if canvas contains no text or blocks.

### Theming & Language
- `editor.setTheme(theme: 'light' | 'dark'): void` — Changes theme dynamically.
- `editor.setLanguage(lang: SupportedLanguage): void` — Updates UI language for menubar, toolbar, and status bar.
- `editor.getLanguage(): SupportedLanguage` — Returns the current active language.

### Export & Window Controls
- `editor.exportToPDF(title?: string): void` — Triggers client-side print/PDF export window.
- `editor.exportToWord(filename?: string): void` — Generates and downloads native `.docx` Word file.
- `editor.exportToHTML(): string` — Exports raw HTML string.
- `editor.toggleFullscreen(): void` — Toggles distraction-free fullscreen view.
- `editor.isFullscreen(): boolean` — Checks if currently in fullscreen mode.
- `editor.focus(pos?: 'start' | 'end' | 'all'): void` — Focuses the editor canvas.
- `editor.destroy(): void` — Cleans up all DOM listeners, toolbars, and Prosemirror instances.

---

## 🧩 Built-in Plugins & Features

### 1. Menubar & Cascading Submenus
- **File:** New Document, Print, Word Export (.docx), PDF Export.
- **Edit:** Undo, Redo, Cut, Copy, Paste, Select All, Find & Replace.
- **View:** Source Code, Fullscreen, Visual Aids, Word Count.
- **Insert:** Image, Video, Link, Table, Math Formula, Code Block, Horizontal Rule, Special Characters.
- **Format:** Bold, Italic, Underline, Strikethrough, Superscript, Subscript, Code, Clear Formatting, Headings 1-6, Alignments, Line Height.
- **Tools:** Word Count, Source Code dialog.
- **Table:** Insert 10×10 matrix, Rows & Columns controls, Merge & Split cells, Delete Table.
- **Help:** Help & Keyboard Shortcuts dialog.

### 2. Ribbon Toolbar & List Card Pickers
- Font size stepper (`- 16px +`)
- Visual bullet list styles (*Disc, Circle, Square, Diamond*)
- Visual numbered list styles (*Decimal, Lower Alpha, Upper Alpha, Lower Roman, Upper Roman*)
- Font family selector (*Inter, Roboto, Arial, Georgia, Courier New, etc.*)
- Text color and highlight swatches picker

### 3. Dynamic Tables Engine
- **Column Resize:** Drag table column borders smoothly.
- **Cell Merging & Splitting:** Merge multiple selected cells or split existing merged cells.
- **Floating Table Toolbar:** Contextual row/column add and delete controls right above the active cell.

### 4. Multi-Language i18n Support
Click `文A ▾` in the toolbar or call `editor.setLanguage('es')`. Supported languages:
- 🇺🇸 English (`en`)
- 🇪🇸 Spanish (`es`)
- 🇫🇷 French (`fr`)
- 🇩🇪 German (`de`)
- 🇮🇹 Italian (`it`)
- 🇧🇷 Portuguese (`pt`)
- 🇯🇵 Japanese (`ja`)
- 🇨🇳 Chinese (`zh`)

### 5. LaTeX Mathematics (KaTeX)
- Insert inline math formulas ($E = mc^2$) or display block equations.
- Includes a live LaTeX KaTeX preview dialog modal.

### 6. HTML Source Code Modal Dialog
- Click `<>` in toolbar or *View → Source Code*.
- Includes syntax indentation, line numbers, font zoom (+/-), copy to clipboard, and light/dark mode toggling.

### 7. Slash Command Palette (`/`)
- Type `/` on any blank line to trigger a floating command palette with instant keyboard navigation (Up/Down/Enter/Escape).

### 8. Floating Bubble Menu
- Automatically appears when highlighting text for rapid formatting (Bold, Italic, Underline, Strike, Code, Heading, Link, Quote).

### 9. Word (.docx) & PDF Export Engine
- Client-side export that compiles document styles, tables, and images into `.docx` or formatted print-ready PDF.

### 10. Image & Media Handling
- Local file upload (Base64 data URL fallback or custom cloud handler via `uploadImage` option).
- Drag resize handles and left/center/right/full alignment options.
- Embedded video support (YouTube, Vimeo, MP4).

---

## 🎨 Themes & Styling

StackEditor comes with built-in CSS design tokens. You can easily customize colors by overriding CSS custom properties:

```css
:root {
  --ne-accent: #006ce0;         /* Primary brand color */
  --ne-accent-hover: #0054b3;   /* Brand hover */
  --ne-bg-primary: #ffffff;     /* Editor background */
  --ne-text-primary: #222f3e;   /* Primary text color */
  --ne-border-color: #e3e3e3;   /* Borders */
}

/* Dark Theme Overrides */
[data-theme="dark"],
.stack-editor-wrapper.theme-dark {
  --ne-bg-primary: #1f2329;
  --ne-bg-secondary: #181b20;
  --ne-bg-tertiary: #252a32;
  --ne-text-primary: #f3f4f6;
  --ne-border-color: #2e3440;
  --ne-accent: #38bdf8;
}
```

---

## ⌨️ Keyboard Shortcuts

| Action | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **Bold** | `Ctrl + B` | `Cmd + B` |
| **Italic** | `Ctrl + I` | `Cmd + I` |
| **Underline** | `Ctrl + U` | `Cmd + U` |
| **Undo** | `Ctrl + Z` | `Cmd + Z` |
| **Redo** | `Ctrl + Y` | `Cmd + Shift + Z` |
| **Find & Replace** | `Ctrl + F` | `Cmd + F` |
| **Heading 1 – 6** | `Ctrl + Alt + 1..6` | `Cmd + Option + 1..6` |
| **Bullet List** | `Ctrl + Shift + 8` | `Cmd + Shift + 8` |
| **Numbered List** | `Ctrl + Shift + 7` | `Cmd + Shift + 7` |
| **Slash Commands** | Type `/` on empty line | Type `/` on empty line |

---

## 📄 License & Credits

- **License:** [MIT License](https://opensource.org/licenses/MIT) — 100% Free for personal and commercial projects.
- **Created & Maintained by:** **Shivira Stack**
