import { Editor } from '@tiptap/core';
export declare class ImageModal {
    private backdrop;
    private editor;
    private uploadHandler?;
    constructor(editor: Editor, uploadHandler?: (file: File) => Promise<string>);
    show(): void;
    close(): void;
}
