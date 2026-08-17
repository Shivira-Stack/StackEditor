export type SupportedLanguage = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ja' | 'zh';
export interface Translations {
    menus: {
        file: string;
        edit: string;
        view: string;
        insert: string;
        format: string;
        tools: string;
        table: string;
        help: string;
    };
    toolbar: {
        paragraph: string;
        headings: string;
        inline: string;
        blocks: string;
        align: string;
        styles: string;
        bold: string;
        italic: string;
        underline: string;
        textColor: string;
        highlightColor: string;
        fontFamily: string;
        fontSize: string;
        insertTable: string;
        insertLink: string;
        insertImage: string;
        comment: string;
        alignLeft: string;
        alignCenter: string;
        alignRight: string;
        alignJustify: string;
        bulletList: string;
        numberedList: string;
        checklist: string;
        clearFormat: string;
        sourceCode: string;
        fullscreen: string;
        shortcuts: string;
    };
    statusbar: {
        words: string;
        characters: string;
        mode: string;
    };
    modals: {
        save: string;
        cancel: string;
        close: string;
        insert: string;
    };
}
export declare const i18nDictionary: Record<SupportedLanguage, Translations>;
