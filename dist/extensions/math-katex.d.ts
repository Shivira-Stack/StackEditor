import { Node } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        mathKatex: {
            insertInlineMath: (options: {
                formula: string;
            }) => ReturnType;
            insertBlockMath: (options: {
                formula: string;
            }) => ReturnType;
        };
    }
}
export declare const MathInline: Node<any, any>;
export declare const MathBlock: Node<any, any>;
