import { Editor } from '@tiptap/core';
export declare class LinkModal {
    private backdrop;
    private editor;
    constructor(editor: Editor);
    show(): void;
    close(): void;
}
