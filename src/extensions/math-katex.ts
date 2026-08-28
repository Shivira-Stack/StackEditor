import { Node, mergeAttributes } from '@tiptap/core';
import katex from 'katex';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    mathKatex: {
      insertInlineMath: (options: { formula: string }) => ReturnType;
      insertBlockMath: (options: { formula: string }) => ReturnType;
    };
  }
}

export const MathInline = Node.create({
  name: 'mathInline',
  group: 'inline',
  inline: true,
  selectable: true,
  draggable: true,
  atom: true,

  addAttributes() {
    return {
      formula: {
        default: 'E = mc^2',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-type="math-inline"]',
        getAttrs: (element) => ({
          formula: (element as HTMLElement).getAttribute('data-formula'),
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'span',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'math-inline',
        'data-formula': HTMLAttributes.formula,
        class: 'nova-math-inline',
      }),
    ];
  },

  addNodeView() {
    return ({ node, editor, getPos }) => {
      const dom = document.createElement('span');
      dom.className = 'nova-math-inline';
      dom.setAttribute('data-formula', node.attrs.formula);
      dom.title = 'Double-click to edit formula';

      try {
        katex.render(node.attrs.formula || '?', dom, {
          throwOnError: false,
          displayMode: false,
        });
      } catch (err) {
        dom.innerText = node.attrs.formula;
      }

      dom.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (typeof getPos === 'function') {
          const pos = getPos();
          if (typeof pos === 'number') {
            editor.commands.setNodeSelection(pos);
          }
        }
        window.dispatchEvent(new CustomEvent('nova:open-math-modal'));
      });

      return {
        dom,
        update: (updatedNode) => {
          if (updatedNode.type.name !== this.name) return false;
          dom.setAttribute('data-formula', updatedNode.attrs.formula);
          try {
            katex.render(updatedNode.attrs.formula || '?', dom, {
              throwOnError: false,
              displayMode: false,
            });
          } catch {
            dom.innerText = updatedNode.attrs.formula;
          }
          return true;
        },
      };
    };
  },

  addCommands() {
    return {
      insertInlineMath:
        ({ formula }) =>
        ({ chain }) => {
          return chain().insertContent({
            type: this.name,
            attrs: { formula },
          }).run();
        },
    };
  },
});

export const MathBlock = Node.create({
  name: 'mathBlock',
  group: 'block',
  selectable: true,
  draggable: true,
  atom: true,

  addAttributes() {
    return {
      formula: {
        default: '\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="math-block"]',
        getAttrs: (element) => ({
          formula: (element as HTMLElement).getAttribute('data-formula'),
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'math-block',
        'data-formula': HTMLAttributes.formula,
        class: 'nova-math-block',
      }),
    ];
  },

  addNodeView() {
    return ({ node, editor, getPos }) => {
      const dom = document.createElement('div');
      dom.className = 'nova-math-block';
      dom.setAttribute('data-formula', node.attrs.formula);
      dom.title = 'Double-click to edit formula';

      try {
        katex.render(node.attrs.formula || '?', dom, {
          throwOnError: false,
          displayMode: true,
        });
      } catch {
        dom.innerText = node.attrs.formula;
      }

      dom.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (typeof getPos === 'function') {
          const pos = getPos();
          if (typeof pos === 'number') {
            editor.commands.setNodeSelection(pos);
          }
        }
        window.dispatchEvent(new CustomEvent('nova:open-math-modal'));
      });

      return {
        dom,
        update: (updatedNode) => {
          if (updatedNode.type.name !== this.name) return false;
          dom.setAttribute('data-formula', updatedNode.attrs.formula);
          try {
            katex.render(updatedNode.attrs.formula || '?', dom, {
              throwOnError: false,
              displayMode: true,
            });
          } catch {
            dom.innerText = updatedNode.attrs.formula;
          }
          return true;
        },
      };
    };
  },

  addCommands() {
    return {
      insertBlockMath:
        ({ formula }) =>
        ({ chain }) => {
          return chain().insertContent({
            type: this.name,
            attrs: { formula },
          }).run();
        },
    };
  },
});
