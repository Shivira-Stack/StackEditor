import { Extension } from '@tiptap/core';
import { PluginKey } from '@tiptap/pm/state';
import { SlashMenuItem } from '../core/types';
export declare const slashPluginKey: PluginKey<any>;
export declare const defaultSlashItems: SlashMenuItem[];
export interface SlashCommandOptions {
    items?: SlashMenuItem[];
}
export declare const SlashCommand: Extension<SlashCommandOptions, any>;
