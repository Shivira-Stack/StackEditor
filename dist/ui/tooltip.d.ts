export declare class TooltipManager {
    private static instance;
    private tooltipEl;
    private textEl;
    private arrowEl;
    private showTimeout;
    private currentTarget;
    static init(): TooltipManager;
    constructor();
    private bindGlobalEvents;
    show(target: HTMLElement, text: string): void;
    hide(): void;
    destroy(): void;
}
