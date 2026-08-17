import { default as React } from 'react';
import { StackEditor } from '../core/editor';
import { StackEditorOptions } from '../core/types';
export interface StackEditorProps extends Omit<StackEditorOptions, 'element'> {
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    onEditorReady?: (editor: StackEditor) => void;
}
export type NovaEditorProps = StackEditorProps;
export declare const StackEditorComponent: React.FC<StackEditorProps>;
export declare const NovaEditorComponent: React.FC<StackEditorProps>;
