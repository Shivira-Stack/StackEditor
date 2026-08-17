import { Editor } from '@tiptap/core';
import { SupportedLanguage } from '../core/i18n';
export declare class StatusBar {
    private container;
    private editor;
    private currentLanguage;
    constructor(container: HTMLElement, editor: Editor);
    private render;
    updateLanguage(lang: SupportedLanguage): void;
    update(): void;
}
