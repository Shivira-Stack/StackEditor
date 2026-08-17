import { Extension } from '@tiptap/core';
import { PluginKey } from '@tiptap/pm/state';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        findReplace: {
            setSearchTerm: (term: string) => ReturnType;
            setReplaceTerm: (term: string) => ReturnType;
            setCaseSensitive: (caseSensitive: boolean) => ReturnType;
            setRegex: (regex: boolean) => ReturnType;
            findNext: () => ReturnType;
            findPrevious: () => ReturnType;
            replaceCurrent: () => ReturnType;
            replaceAllMatches: () => ReturnType;
            clearSearch: () => ReturnType;
        };
    }
}
export interface FindReplaceStorage {
    searchTerm: string;
    replaceTerm: string;
    caseSensitive: boolean;
    regex: boolean;
    currentIndex: number;
    matches: Array<{
        from: number;
        to: number;
    }>;
}
export declare const findReplacePluginKey: PluginKey<any>;
export declare const FindReplace: Extension<any, FindReplaceStorage>;
