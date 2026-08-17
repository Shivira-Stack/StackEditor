# 🌟 StackEditor

> **100% Free, Modern, and Full-Featured WYSIWYG Rich Text Editor** for web applications with zero API keys, no paywalls, and complete freedom.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178c6.svg)](https://www.typescriptlang.org/)
[![React Supported](https://img.shields.io/badge/React-18%2B-61dafb.svg)](https://reactjs.org/)

---

## ⚡ Key Highlights

- 💎 **Full-Featured Menubar & Ribbon UI:** Full Menubar, cascading multi-level submenus, ribbon toolbar with visual list grids, 10×10 table matrix picker, and breadcrumb status bar.
- 🚀 **100% Free & Open-Source:** No cloud subscriptions, no API keys, no restrictions, and no commercial lock-in.
- 📊 **Advanced Dynamic Tables:** Resizable columns, cell merging/splitting, row/column addition & deletion, cell background & border styling.
- 🔬 **LaTeX Math & Science:** KaTeX formulas inline and block.
- ⚡ **Source Code Editor Dialog:** Interactive HTML source editor with syntax formatting, line numbers, and theme toggling.
- 🌐 **Multi-Language Support (i18n):** 8+ languages with instant UI switching and translate dropdown icon.
- 📦 **Dual API Support:** Vanilla JavaScript / TypeScript (`StackEditor`) and React Component & Hook (`StackEditorComponent`, `useStackEditor`).

---

## 📦 Installation

```bash
npm install stack-editor
# or
yarn add stack-editor
# or
pnpm add stack-editor
```

---

## 🚀 Quick Start

### 1. Vanilla JavaScript / TypeScript

```html
<div id="editor"></div>

<script type="module">
  import { StackEditor } from 'stack-editor';
  import 'stack-editor/style.css';

  const editor = StackEditor.create({
    element: '#editor',
    placeholder: 'Write your story...',
    theme: 'light',
    onChange: (html, instance) => {
      console.log('HTML Content:', html);
      console.log('Markdown:', instance.getMarkdown());
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

export function MyEditor() {
  const [content, setContent] = useState('<h2>Hello StackEditor!</h2>');

  return (
    <StackEditorComponent
      value={content}
      onChange={(html) => setContent(html)}
      theme="light"
      menubar={true}
      toolbar="full"
      statusBar={true}
    />
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
    placeholder: 'Type something...',
    theme: 'light',
  });

  return (
    <div>
      <div ref={containerRef} />
      <button onClick={() => editor?.exportToPDF()}>Export PDF</button>
      <button onClick={() => editor?.exportToWord()}>Export Word</button>
    </div>
  );
}
```

---

## 📄 License

MIT © Antigravity
