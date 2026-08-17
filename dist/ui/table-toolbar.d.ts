import { Editor } from '@tiptap/core';
export declare class TableToolbar {
    private container;
    private editor;
    private parentWrapper;
    constructor(parentWrapper: HTMLElement, editor: Editor);
    private render;
    private bindEvents;
    update(): void;
    destroy(): void;
}
