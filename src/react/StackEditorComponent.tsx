import React, { useEffect, useRef } from 'react';
import { StackEditor } from '../core/editor';
import type { StackEditorOptions } from '../core/types';

export interface StackEditorProps extends Omit<StackEditorOptions, 'element'> {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  onEditorReady?: (editor: StackEditor) => void;
}

export type NovaEditorProps = StackEditorProps;

export const StackEditorComponent: React.FC<StackEditorProps> = ({
  className,
  style,
  value,
  onChange,
  onEditorReady,
  ...options
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<StackEditor | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const instance = new StackEditor({
      ...options,
      element: containerRef.current,
      content: value || options.content,
      onChange: (html, ed) => {
        onChange?.(html, ed);
      },
    });

    editorRef.current = instance;
    onEditorReady?.(instance);

    return () => {
      instance.destroy();
      editorRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className={`stack-editor-mount ${className || ''}`} style={style} />;
};

// Backward-compatible alias
export const NovaEditorComponent = StackEditorComponent;
