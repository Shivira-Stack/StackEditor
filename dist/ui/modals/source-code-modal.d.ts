import { Editor } from '@tiptap/core';
export declare class SourceCodeModal {
    private backdrop;
    private editor;
    private isDarkMode;
    private isFullscreen;
    private fontSize;
    constructor(editor: Editor);
    private formatHTML;
    show(): void;
    close(): void;
}
