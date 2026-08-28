import { Editor } from '@tiptap/core';
export declare class MathModal {
    private backdrop;
    private editor;
    private activeTab;
    constructor(editor: Editor);
    show(): void;
    close(): void;
}
