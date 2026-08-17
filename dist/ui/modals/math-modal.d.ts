import { Editor } from '@tiptap/core';
export declare class MathModal {
    private backdrop;
    private editor;
    constructor(editor: Editor);
    show(): void;
    close(): void;
}
