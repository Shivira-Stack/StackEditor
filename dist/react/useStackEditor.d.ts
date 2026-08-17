import { StackEditor } from '../core/editor';
import { StackEditorOptions } from '../core/types';
export declare function useStackEditor(options: Omit<StackEditorOptions, 'element'> & {
    elementRef?: React.RefObject<HTMLElement>;
}): {
    editor: StackEditor | null;
    containerRef: import('react').MutableRefObject<HTMLDivElement | null>;
};
export declare const useNovaEditor: typeof useStackEditor;
