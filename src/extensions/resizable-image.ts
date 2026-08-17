import Image from '@tiptap/extension-image';
import { mergeAttributes } from '@tiptap/core';

export interface ImageAttributes {
  src: string;
  alt?: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  alignment?: 'left' | 'center' | 'right' | 'full';
  caption?: string;
}

export const ResizableImage = Image.extend({
  name: 'image',

  addAttributes() {
    return {
      ...this.parent?.(),
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
      width: {
        default: '100%',
        renderHTML: (attributes) => {
          return {
            width: attributes.width,
          };
        },
      },
      height: {
        default: null,
      },
      alignment: {
        default: 'center',
        renderHTML: (attributes) => {
          return {
            'data-align': attributes.alignment,
          };
        },
      },
      caption: {
        default: '',
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    const { alignment = 'center', width, caption, ...rest } = HTMLAttributes;

    return [
      'div',
      {
        class: 'nova-image-wrapper',
        'data-align': alignment,
        style: width && width !== '100%' ? `width: ${typeof width === 'number' ? `${width}px` : width};` : undefined,
      },
      ['img', mergeAttributes(this.options.HTMLAttributes, rest)],
      caption ? ['div', { class: 'nova-image-caption' }, caption] : ['span', {}],
    ];
  },

  addNodeView() {
    return ({ node, getPos, editor }) => {
      const container = document.createElement('div');
      container.className = 'nova-image-wrapper';
      container.setAttribute('data-align', node.attrs.alignment || 'center');

      if (node.attrs.width && node.attrs.width !== '100%') {
        container.style.width = typeof node.attrs.width === 'number' ? `${node.attrs.width}px` : node.attrs.width;
      }

      const img = document.createElement('img');
      img.src = node.attrs.src;
      if (node.attrs.alt) img.alt = node.attrs.alt;
      if (node.attrs.title) img.title = node.attrs.title;

      container.appendChild(img);

      const updateNodeAttributes = (attrs: Record<string, any>) => {
        if (typeof getPos === 'function') {
          const pos = getPos();
          if (typeof pos === 'number') {
            const { tr } = editor.view.state;
            editor.view.dispatch(
              tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                ...attrs,
              })
            );
          }
        }
      };

      // Caption
      const captionDiv = document.createElement('div');
      captionDiv.className = 'nova-image-caption';
      captionDiv.contentEditable = editor.isEditable ? 'true' : 'false';
      captionDiv.innerText = node.attrs.caption || '';
      captionDiv.addEventListener('blur', () => {
        updateNodeAttributes({ caption: captionDiv.innerText.trim() });
      });
      captionDiv.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          captionDiv.blur();
        }
      });
      container.appendChild(captionDiv);

      // Resize handles if editable
      if (editor.isEditable) {
        const positions = ['nw', 'ne', 'sw', 'se'];
        positions.forEach((pos) => {
          const handle = document.createElement('div');
          handle.className = `nova-image-resizer ${pos}`;

          handle.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const startX = e.clientX;
            const startWidth = container.offsetWidth;

            const onMouseMove = (moveEvent: MouseEvent) => {
              const currentX = moveEvent.clientX;
              const diffX = pos.includes('e') ? currentX - startX : startX - currentX;
              const newWidth = Math.max(120, Math.min(1200, startWidth + diffX));
              container.style.width = `${newWidth}px`;
            };

            const onMouseUp = () => {
              document.removeEventListener('mousemove', onMouseMove);
              document.removeEventListener('mouseup', onMouseUp);
              updateNodeAttributes({ width: `${container.offsetWidth}px` });
            };

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
          });

          container.appendChild(handle);
        });
      }

      return {
        dom: container,
        update: (updatedNode) => {
          if (updatedNode.type.name !== this.name) return false;
          container.setAttribute('data-align', updatedNode.attrs.alignment || 'center');
          if (updatedNode.attrs.width && updatedNode.attrs.width !== '100%') {
            container.style.width = typeof updatedNode.attrs.width === 'number' ? `${updatedNode.attrs.width}px` : updatedNode.attrs.width;
          } else {
            container.style.width = '';
          }
          if (img.src !== updatedNode.attrs.src) img.src = updatedNode.attrs.src;
          if (captionDiv.innerText !== updatedNode.attrs.caption) {
            captionDiv.innerText = updatedNode.attrs.caption || '';
          }
          return true;
        },
        selectNode: () => {
          container.classList.add('is-selected');
        },
        deselectNode: () => {
          container.classList.remove('is-selected');
        },
      };
    };
  },
});
