export declare class ExportTools {
    private static turndownService;
    private static getTurndown;
    static htmlToMarkdown(html: string): string;
    static exportToPDF(htmlContent: string, title?: string): void;
    static exportToWord(htmlContent: string, filename?: string): void;
    static downloadFile(content: string, filename: string, mimeType: string): void;
}
