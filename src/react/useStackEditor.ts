import { useEffect, useRef, useState } from 'react';
import { StackEditor } from '../core/editor';
import type { StackEditorOptions } from '../core/types';

export function useStackEditor(options: Omit<StackEditorOptions, 'element'> & { elementRef?: React.RefObject<HTMLElement> }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [editorInstance, setEditorInstance] = useState<StackEditor | null>(null);

  useEffect(() => {
    const el = options.elementRef?.current || containerRef.current;
    if (!el) return;

    const instance = new StackEditor({
      ...options,
      element: el,
    });

    setEditorInstance(instance);

    return () => {
      instance.destroy();
      setEditorInstance(null);
    };
  }, []);

  return {
    editor: editorInstance,
    containerRef,
  };
}

// Backward-compatible alias
export const useNovaEditor = useStackEditor;
