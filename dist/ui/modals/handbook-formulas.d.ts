export interface MathItem {
    id: string;
    name: string;
    category: string;
    chapter?: string;
    section?: string;
    latex: string;
    display: string;
    desc?: string;
    isPreset?: boolean;
}
export declare const ALL_MATH_ITEMS: MathItem[];
export declare const SYMBOL_ITEMS: {
    label: string;
    latex: string;
    desc: string;
}[];
export declare const GREEK_ITEMS: ({
    label: string;
    latex: string;
    name: string;
    isUpper?: undefined;
} | {
    label: string;
    latex: string;
    name: string;
    isUpper: boolean;
})[];
