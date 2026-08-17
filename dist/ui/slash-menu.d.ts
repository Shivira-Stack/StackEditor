import { Editor } from '@tiptap/core';
import { SlashMenuItem } from '../core/types';
export declare class SlashMenu {
    private container;
    private editor;
    private parentWrapper;
    private items;
    private filteredItems;
    private selectedIndex;
    private isOpen;
    private query;
    private triggerPos;
    constructor(parentWrapper: HTMLElement, editor: Editor, items?: SlashMenuItem[]);
    private render;
    private executeItem;
    show(coords: {
        left: number;
        top: number;
    }, query: string, triggerPos: number): void;
    hide(): void;
    private bindEvents;
    destroy(): void;
}
