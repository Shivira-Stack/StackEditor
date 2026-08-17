import { Extension } from '@tiptap/core';
import { Decoration, DecorationSet } from '@tiptap/pm/view';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Node as ProseMirrorNode } from '@tiptap/pm/model';

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
  matches: Array<{ from: number; to: number }>;
}

export const findReplacePluginKey = new PluginKey('findReplace');

function findMatches(
  doc: ProseMirrorNode,
  searchTerm: string,
  caseSensitive: boolean,
  isRegex: boolean
): Array<{ from: number; to: number }> {
  if (!searchTerm) return [];

  const matches: Array<{ from: number; to: number }> = [];

  let regex: RegExp;
  try {
    const flags = caseSensitive ? 'g' : 'gi';
    const pattern = isRegex ? searchTerm : searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    regex = new RegExp(pattern, flags);
  } catch {
    return [];
  }

  doc.descendants((node, pos) => {
    if (node.isText && node.text) {
      let match;
      while ((match = regex.exec(node.text)) !== null) {
        const from = pos + match.index;
        const to = from + match[0].length;
        matches.push({ from, to });
      }
    }
  });

  return matches;
}

export const FindReplace = Extension.create<any, FindReplaceStorage>({
  name: 'findReplace',

  addStorage() {
    return {
      searchTerm: '',
      replaceTerm: '',
      caseSensitive: false,
      regex: false,
      currentIndex: 0,
      matches: [],
    };
  },

  addCommands() {
    return {
      setSearchTerm:
        (searchTerm: string) =>
        ({ editor, tr, dispatch }) => {
          this.storage.searchTerm = searchTerm;
          this.storage.currentIndex = 0;
          this.storage.matches = findMatches(
            tr.doc,
            searchTerm,
            this.storage.caseSensitive,
            this.storage.regex
          );
          if (dispatch) dispatch(tr);
          return true;
        },

      setReplaceTerm:
        (replaceTerm: string) =>
        ({ tr, dispatch }) => {
          this.storage.replaceTerm = replaceTerm;
          if (dispatch) dispatch(tr);
          return true;
        },

      setCaseSensitive:
        (caseSensitive: boolean) =>
        ({ tr, dispatch }) => {
          this.storage.caseSensitive = caseSensitive;
          this.storage.matches = findMatches(
            tr.doc,
            this.storage.searchTerm,
            caseSensitive,
            this.storage.regex
          );
          if (dispatch) dispatch(tr);
          return true;
        },

      setRegex:
        (isRegex: boolean) =>
        ({ tr, dispatch }) => {
          this.storage.regex = isRegex;
          this.storage.matches = findMatches(
            tr.doc,
            this.storage.searchTerm,
            this.storage.caseSensitive,
            isRegex
          );
          if (dispatch) dispatch(tr);
          return true;
        },

      findNext:
        () =>
        ({ editor, tr, dispatch }) => {
          const total = this.storage.matches.length;
          if (total === 0) return false;
          this.storage.currentIndex = (this.storage.currentIndex + 1) % total;
          const match = this.storage.matches[this.storage.currentIndex];
          if (match) {
            editor.commands.setTextSelection({ from: match.from, to: match.to });
          }
          if (dispatch) dispatch(tr);
          return true;
        },

      findPrevious:
        () =>
        ({ editor, tr, dispatch }) => {
          const total = this.storage.matches.length;
          if (total === 0) return false;
          this.storage.currentIndex = (this.storage.currentIndex - 1 + total) % total;
          const match = this.storage.matches[this.storage.currentIndex];
          if (match) {
            editor.commands.setTextSelection({ from: match.from, to: match.to });
          }
          if (dispatch) dispatch(tr);
          return true;
        },

      replaceCurrent:
        () =>
        ({ editor, tr, dispatch }) => {
          const match = this.storage.matches[this.storage.currentIndex];
          if (!match) return false;
          
          tr.insertText(this.storage.replaceTerm, match.from, match.to);
          this.storage.matches = findMatches(
            tr.doc,
            this.storage.searchTerm,
            this.storage.caseSensitive,
            this.storage.regex
          );
          if (this.storage.currentIndex >= this.storage.matches.length) {
            this.storage.currentIndex = 0;
          }
          if (dispatch) dispatch(tr);
          return true;
        },

      replaceAllMatches:
        () =>
        ({ tr, dispatch }) => {
          if (!this.storage.matches.length) return false;

          // Replace backwards to keep pos indices valid
          const matches = [...this.storage.matches].reverse();
          matches.forEach((m) => {
            tr.insertText(this.storage.replaceTerm, m.from, m.to);
          });

          this.storage.matches = [];
          this.storage.currentIndex = 0;
          if (dispatch) dispatch(tr);
          return true;
        },

      clearSearch:
        () =>
        ({ tr, dispatch }) => {
          this.storage.searchTerm = '';
          this.storage.replaceTerm = '';
          this.storage.matches = [];
          this.storage.currentIndex = 0;
          if (dispatch) dispatch(tr);
          return true;
        },
    };
  },

  addProseMirrorPlugins() {
    const extension = this;

    return [
      new Plugin({
        key: findReplacePluginKey,
        props: {
          decorations(state) {
            const { searchTerm, caseSensitive, regex, currentIndex } = extension.storage;
            if (!searchTerm) return DecorationSet.empty;

            const matches = findMatches(state.doc, searchTerm, caseSensitive, regex);
            extension.storage.matches = matches;

            const decorations: Decoration[] = matches.map((match, index) => {
              const isCurrent = index === currentIndex;
              return Decoration.inline(match.from, match.to, {
                class: isCurrent ? 'nova-find-match nova-find-match-current' : 'nova-find-match',
              });
            });

            return DecorationSet.create(state.doc, decorations);
          },
        },
      }),
    ];
  },
});
