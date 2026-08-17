import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import type { SlashMenuItem } from '../core/types';
import { icons } from '../core/icons';

export const slashPluginKey = new PluginKey('slashMenu');

export const defaultSlashItems: SlashMenuItem[] = [
  {
    title: 'Heading 1',
    description: 'Big section heading',
    category: 'Headings',
    icon: icons.heading1,
    command: (editor) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
  },
  {
    title: 'Heading 2',
    description: 'Medium section heading',
    category: 'Headings',
    icon: icons.heading2,
    command: (editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
  },
  {
    title: 'Heading 3',
    description: 'Small section heading',
    category: 'Headings',
    icon: icons.heading3,
    command: (editor) => editor.chain().focus().toggleHeading({ level: 3 }).run(),
  },
  {
    title: 'Bullet List',
    description: 'Create a simple bulleted list',
    category: 'Lists',
    icon: icons.bulletList,
    command: (editor) => editor.chain().focus().toggleBulletList().run(),
  },
  {
    title: 'Numbered List',
    description: 'Create a list with numbering',
    category: 'Lists',
    icon: icons.orderedList,
    command: (editor) => editor.chain().focus().toggleOrderedList().run(),
  },
  {
    title: 'Task Checklist',
    description: 'Track tasks with a checklist',
    category: 'Lists',
    icon: icons.taskList,
    command: (editor) => editor.chain().focus().toggleTaskList().run(),
  },
  {
    title: 'Table',
    description: 'Insert a 3x3 editable table',
    category: 'Insert',
    icon: icons.table,
    command: (editor) => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(),
  },
  {
    title: 'Code Block',
    description: 'Capture a code snippet with syntax highlighting',
    category: 'Insert',
    icon: icons.codeBlock,
    command: (editor) => editor.chain().focus().toggleCodeBlock().run(),
  },
  {
    title: 'Math Equation',
    description: 'Insert a LaTeX block formula',
    category: 'Insert',
    icon: icons.math,
    command: (editor) => (editor.commands as any).insertBlockMath?.({ formula: 'f(x) = \\int_{-\\infty}^x e^{-t^2} dt' }),
  },
  {
    title: 'Blockquote',
    description: 'Capture a quote or key takeaway',
    category: 'Text',
    icon: icons.quote,
    command: (editor) => editor.chain().focus().toggleBlockquote().run(),
  },
  {
    title: 'Divider',
    description: 'Visually separate sections',
    category: 'Text',
    icon: icons.horizontalRule,
    command: (editor) => editor.chain().focus().setHorizontalRule().run(),
  },
];

export interface SlashCommandOptions {
  items?: SlashMenuItem[];
}

export const SlashCommand = Extension.create<SlashCommandOptions>({
  name: 'slashCommand',

  addOptions() {
    return {
      items: defaultSlashItems,
    };
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: slashPluginKey,
      }),
    ];
  },
});
