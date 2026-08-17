import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Link from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Typography from '@tiptap/extension-typography';
import CharacterCount from '@tiptap/extension-character-count';
import Placeholder from '@tiptap/extension-placeholder';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';

import { FontSize } from '../extensions/font-size';
import { FontFamily } from '../extensions/font-family';
import { LineHeight } from '../extensions/line-height';
import { ResizableImage } from '../extensions/resizable-image';
import { MathInline, MathBlock } from '../extensions/math-katex';
import { FindReplace } from '../extensions/find-replace';
import { SlashCommand } from '../extensions/slash-command';
import { CustomBulletList, CustomOrderedList } from '../extensions/custom-lists';
import type { StackEditorOptions } from './types';

const lowlight = createLowlight(common);

export function createEditorExtensions(options: Partial<StackEditorOptions> = {}) {
  const extensions = [
    StarterKit.configure({
      codeBlock: false, // Use CodeBlockLowlight instead
      bulletList: false, // Use CustomBulletList
      orderedList: false, // Use CustomOrderedList
      heading: {
        levels: [1, 2, 3, 4, 5, 6],
      },
    }),
    CustomBulletList,
    CustomOrderedList,
    Underline,
    TextStyle,
    Color,
    Highlight.configure({ multicolor: true }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
      alignments: ['left', 'center', 'right', 'justify'],
    }),
    TaskList,
    TaskItem.configure({ nested: true }),
    Table.configure({
      resizable: true,
      HTMLAttributes: {
        class: 'nova-table',
      },
    }),
    TableRow,
    TableHeader,
    TableCell,
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        class: 'nova-link',
        rel: 'noopener noreferrer',
        target: '_blank',
      },
    }),
    Subscript,
    Superscript,
    Typography,
    CharacterCount,
    Placeholder.configure({
      placeholder: options.placeholder || 'Type something, or press "/" for commands...',
      emptyEditorClass: 'is-editor-empty',
    }),
    CodeBlockLowlight.configure({
      lowlight,
      defaultLanguage: 'typescript',
      HTMLAttributes: {
        class: 'nova-code-block',
      },
    }),
    FontSize,
    FontFamily,
    LineHeight,
    ResizableImage,
    MathInline,
    MathBlock,
    FindReplace,
    SlashCommand,
  ];

  if (options.extensions && Array.isArray(options.extensions)) {
    extensions.push(...options.extensions as any[]);
  }

  return extensions;
}
