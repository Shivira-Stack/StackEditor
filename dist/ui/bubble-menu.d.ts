import { Editor } from '@tiptap/core';
export declare class BubbleMenu {
    private container;
    private editor;
    private parentWrapper;
    constructor(parentWrapper: HTMLElement, editor: Editor);
    private render;
    private bindEvents;
    hide(): void;
    update(): void;
    destroy(): void;
}
