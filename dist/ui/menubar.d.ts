import { Editor } from '@tiptap/core';
import { StackEditorInstance } from '../core/types';
import { SupportedLanguage } from '../core/i18n';
export declare class Menubar {
    private container;
    private editor;
    private instance;
    private activeMenu;
    constructor(container: HTMLElement, editor: Editor, instance: StackEditorInstance);
    private render;
    private initTableGridPickers;
    private bindEvents;
    private closeAllMenus;
    updateLanguage(lang: SupportedLanguage): void;
}
