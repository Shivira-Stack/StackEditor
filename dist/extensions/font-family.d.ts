import { Extension } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontFamily: {
            setFontFamily: (fontFamily: string) => ReturnType;
            unsetFontFamily: () => ReturnType;
        };
    }
}
export declare const FontFamily: Extension<any, any>;
