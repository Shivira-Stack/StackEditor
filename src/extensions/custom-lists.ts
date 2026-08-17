import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';

export const CustomBulletList = BulletList.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      listStyleType: {
        default: 'disc',
        parseHTML: (element) => element.getAttribute('data-list-style') || element.style.listStyleType || 'disc',
        renderHTML: (attributes) => {
          if (!attributes.listStyleType || attributes.listStyleType === 'disc') {
            return {};
          }
          return {
            'data-list-style': attributes.listStyleType,
            style: `list-style-type: ${attributes.listStyleType}`,
          };
        },
      },
    };
  },
});

export const CustomOrderedList = OrderedList.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      listStyleType: {
        default: 'decimal',
        parseHTML: (element) => element.getAttribute('data-list-style') || element.style.listStyleType || 'decimal',
        renderHTML: (attributes) => {
          if (!attributes.listStyleType || attributes.listStyleType === 'decimal') {
            return {};
          }
          return {
            'data-list-style': attributes.listStyleType,
            style: `list-style-type: ${attributes.listStyleType}`,
          };
        },
      },
    };
  },
});
