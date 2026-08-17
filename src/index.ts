import './styles/index.css';

export { StackEditor, NovaEditor } from './core/editor';
export { createEditorExtensions } from './core/extensions';
export { icons } from './core/icons';
export { i18nDictionary, type SupportedLanguage, type Translations } from './core/i18n';
export type {
  StackEditorOptions,
  StackEditorInstance,
  StackTheme,
  NovaEditorOptions,
  NovaEditorInstance,
  NovaTheme,
  SlashMenuItem,
} from './core/types';

// Extensions
export { FontSize } from './extensions/font-size';
export { FontFamily } from './extensions/font-family';
export { LineHeight } from './extensions/line-height';
export { ResizableImage } from './extensions/resizable-image';
export { MathInline, MathBlock } from './extensions/math-katex';
export { FindReplace } from './extensions/find-replace';
export { SlashCommand, defaultSlashItems } from './extensions/slash-command';
export { ExportTools } from './extensions/export-tools';

// UI Components
export { Menubar } from './ui/menubar';
export { Toolbar } from './ui/toolbar';
export { BubbleMenu } from './ui/bubble-menu';
export { SlashMenu } from './ui/slash-menu';
export { TableToolbar } from './ui/table-toolbar';
export { StatusBar } from './ui/status-bar';

// Modals
export { LinkModal } from './ui/modals/link-modal';
export { ImageModal } from './ui/modals/image-modal';
export { VideoModal } from './ui/modals/video-modal';
export { TableGridModal } from './ui/modals/table-grid-modal';
export { MathModal } from './ui/modals/math-modal';
export { FindReplaceModal } from './ui/modals/find-replace-modal';
export { SourceCodeModal } from './ui/modals/source-code-modal';

// React adapter export convenience
export * from './react/index';
