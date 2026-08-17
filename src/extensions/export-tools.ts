import TurndownService from 'turndown';

export class ExportTools {
  private static turndownService: TurndownService | null = null;

  private static getTurndown(): TurndownService {
    if (!this.turndownService) {
      this.turndownService = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced',
        bulletListMarker: '-',
      });

      // Keep task lists
      this.turndownService.addRule('taskList', {
        filter: (node) => {
          return node.nodeName === 'LI' && node.parentElement?.getAttribute('data-type') === 'taskList';
        },
        replacement: (content, node) => {
          const isChecked = (node as HTMLElement).getAttribute('data-checked') === 'true';
          return `${isChecked ? '[x]' : '[ ]'} ${content.trim()}\n`;
        },
      });

      // Keep math nodes
      this.turndownService.addRule('mathInline', {
        filter: (node) => {
          return node.nodeName === 'SPAN' && node.getAttribute('data-type') === 'math-inline';
        },
        replacement: (_content, node) => {
          const formula = (node as HTMLElement).getAttribute('data-formula') || '';
          return `$${formula}$`;
        },
      });

      this.turndownService.addRule('mathBlock', {
        filter: (node) => {
          return node.nodeName === 'DIV' && node.getAttribute('data-type') === 'math-block';
        },
        replacement: (_content, node) => {
          const formula = (node as HTMLElement).getAttribute('data-formula') || '';
          return `\n$$\n${formula}\n$$\n`;
        },
      });
    }
    return this.turndownService;
  }

  public static htmlToMarkdown(html: string): string {
    return this.getTurndown().turndown(html);
  }

  public static exportToPDF(htmlContent: string, title = 'Document'): void {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              padding: 40px;
              color: #1e293b;
              max-width: 800px;
              margin: 0 auto;
            }
            h1, h2, h3 { color: #0f172a; }
            table { border-collapse: collapse; width: 100%; margin: 20px 0; }
            th, td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
            th { background: #f1f5f9; }
            pre { background: #1e293b; color: #f8fafc; padding: 14px; border-radius: 6px; }
            blockquote { border-left: 4px solid #3b82f6; margin: 1em 0; padding-left: 1em; font-style: italic; }
            img { max-width: 100%; height: auto; }
            @media print {
              body { padding: 0; }
            }
          </style>
        </head>
        <body>
          ${htmlContent}
          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }

  public static exportToWord(htmlContent: string, filename = 'document.docx'): void {
    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' ` +
      `xmlns:w='urn:schemas-microsoft-com:office:word' ` +
      `xmlns='http://www.w3.org/TR/REC-html40'>` +
      `<head><meta charset='utf-8'><title>Export HTML to Word Document</title>` +
      `<style>
        body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; }
        table { border-collapse: collapse; width: 100%; }
        td, th { border: 1px solid #000; padding: 6px 10px; }
      </style></head><body>`;
    const footer = `</body></html>`;
    const sourceHTML = header + htmlContent + footer;

    const blob = new Blob(['\ufeff', sourceHTML], {
      type: 'application/msword',
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  public static downloadFile(content: string, filename: string, mimeType: string): void {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
