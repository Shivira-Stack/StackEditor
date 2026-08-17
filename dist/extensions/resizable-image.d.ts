export interface ImageAttributes {
    src: string;
    alt?: string;
    title?: string;
    width?: string | number;
    height?: string | number;
    alignment?: 'left' | 'center' | 'right' | 'full';
    caption?: string;
}
export declare const ResizableImage: import('@tiptap/core').Node<import('@tiptap/extension-image').ImageOptions, any>;
