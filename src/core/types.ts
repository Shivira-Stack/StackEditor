import type { Editor as TipTapEditor, Extension, Mark, Node } from '@tiptap/core';
import type { SupportedLanguage } from './i18n';

export type StackTheme = 'light' | 'dark' | 'slate';
export type NovaTheme = StackTheme;

export interface StackEditorOptions {
  element: HTMLElement | string;
  content?: string | object;
  placeholder?: string;
  editable?: boolean;
  autofocus?: boolean | 'start' | 'end' | 'all';
  theme?: StackTheme;
  language?: SupportedLanguage;
  
  // Feature Toggles
  menubar?: boolean;
  toolbar?: boolean | string[] | 'full' | 'simple' | 'document';
  bubbleMenu?: boolean;
  slashCommand?: boolean;
  tableToolbar?: boolean;
  imageToolbar?: boolean;
  statusBar?: boolean;
  
  // Custom upload handler
  uploadImage?: (file: File) => Promise<string>;
  
  // Custom extra extensions
  extensions?: (Extension | Mark | Node)[];
  
  // Event Handlers
  onInit?: (editor: StackEditorInstance) => void;
  onChange?: (html: string, editor: StackEditorInstance) => void;
  onUpdate?: (editor: StackEditorInstance) => void;
  onSelectionUpdate?: (editor: StackEditorInstance) => void;
  onFocus?: (editor: StackEditorInstance) => void;
  onBlur?: (editor: StackEditorInstance) => void;
  onDestroy?: () => void;
}

export interface StackEditorInstance {
  readonly editor: TipTapEditor;
  readonly container: HTMLElement;
  readonly options: StackEditorOptions;
  
  getHTML(): string;
  getJSON(): Record<string, any>;
  getText(): string;
  getMarkdown(): string;
  
  setHTML(html: string): void;
  setJSON(json: Record<string, any>): void;
  setMarkdown(markdown: string): void;
  clear(): void;
  
  focus(position?: 'start' | 'end' | 'all' | number | boolean): void;
  blur(): void;
  destroy(): void;
  
  setTheme(theme: StackTheme): void;
  toggleFullscreen(): void;
  isFullscreen(): boolean;
  toggleSourceMode(): void;
  isSourceMode(): boolean;
  setLanguage(lang: SupportedLanguage): void;
  getLanguage(): SupportedLanguage;
  
  // Exporters
  exportToPDF(): void;
  exportToMarkdown(): string;
  exportToWord(): void;
  exportToHTML(): string;
}

// Backward-compatible aliases
export type NovaEditorOptions = StackEditorOptions;
export type NovaEditorInstance = StackEditorInstance;

export interface SlashMenuItem {
  title: string;
  description: string;
  category: 'Text' | 'Headings' | 'Lists' | 'Insert' | 'Media' | 'Advanced';
  icon: string;
  command: (editor: TipTapEditor) => void;
}
