import { Editor } from '@tiptap/core';
export declare class TableGridModal {
    private backdrop;
    private editor;
    constructor(editor: Editor);
    show(): void;
    close(): void;
}
