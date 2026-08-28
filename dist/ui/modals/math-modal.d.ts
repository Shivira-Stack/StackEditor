import { Editor } from '@tiptap/core';
export interface MathItem {
    id: string;
    name: string;
    category: string;
    latex: string;
    display: string;
    desc?: string;
    isPreset?: boolean;
}
export declare const ALL_MATH_ITEMS: MathItem[];
export declare const SYMBOL_ITEMS: {
    label: string;
    latex: string;
    category: string;
    desc: string;
}[];
export declare const GREEK_ITEMS: {
    label: string;
    latex: string;
    name: string;
    isUpper?: boolean;
}[];
export declare class MathModal {
    private backdrop;
    private editor;
    private currentTab;
    private searchQuery;
    constructor(editor: Editor);
    show(): void;
    close(): void;
}
