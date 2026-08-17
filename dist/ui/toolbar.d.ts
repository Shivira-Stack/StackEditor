import { Editor } from '@tiptap/core';
import { StackEditorInstance } from '../core/types';
import { SupportedLanguage } from '../core/i18n';
export declare class Toolbar {
    private container;
    private editor;
    private instance;
    private currentFontSize;
    constructor(container: HTMLElement, editor: Editor, instance: StackEditorInstance);
    private render;
    private initTablePicker;
    private bindEvents;
    private applyFontSize;
    private closeAllDropdowns;
    updateLanguage(lang: SupportedLanguage): void;
    updateState(): void;
    private listenToSelection;
}
