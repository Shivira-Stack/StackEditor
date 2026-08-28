import { Editor } from '@tiptap/core';
import { ALL_MATH_ITEMS, SYMBOL_ITEMS, GREEK_ITEMS } from './handbook-formulas';
export { ALL_MATH_ITEMS, SYMBOL_ITEMS, GREEK_ITEMS };
export declare class MathModal {
    private backdrop;
    private editor;
    private currentTab;
    private searchQuery;
    constructor(editor: Editor);
    show(): void;
    close(): void;
}
