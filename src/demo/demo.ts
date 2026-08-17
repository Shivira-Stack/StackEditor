import '../styles/index.css';
import './demo.css';
import { StackEditor } from '../core/editor';

const sampleContent = `
<h1 style="margin-top: 0;">🌟 Welcome to StackEditor!</h1>

<p><strong>StackEditor</strong> is a modern, <em>100% free and open-source</em> rich text editor built for professional web applications. It delivers a complete, elegant user experience with zero API keys, no subscriptions, and unlimited freedom.</p>

<hr />

<h2>✨ Interactive Features & Plugins Showcased</h2>
<p>Every single plugin and extension is enabled right here in this live demo. Try interacting with the elements below:</p>

<ul data-type="taskList">
  <li data-checked="true"><label><input type="checkbox" checked="checked"><span></span></label><div><strong>Full Menubar & Ribbon:</strong> Cascading multi-level submenus, visual list cards, and 10×10 table picker.</div></li>
  <li data-checked="true"><label><input type="checkbox" checked="checked"><span></span></label><div><strong>Interactive Tables:</strong> Column resizing, cell merge/split, row/column tools, and cell styling.</div></li>
  <li data-checked="true"><label><input type="checkbox" checked="checked"><span></span></label><div><strong>Slash Commands (<code>/</code>):</strong> Type <code>/</code> on any blank line to open the quick action palette.</div></li>
  <li data-checked="true"><label><input type="checkbox" checked="checked"><span></span></label><div><strong>Floating Bubble Menu:</strong> Select any text inside the editor to trigger the contextual bubble toolbar.</div></li>
  <li data-checked="true"><label><input type="checkbox" checked="checked"><span></span></label><div><strong>HTML Source Code Modal:</strong> Click the <code>&lt;&gt;</code> button in the toolbar or <em>View → Source Code</em> to format and edit raw HTML.</div></li>
  <li data-checked="true"><label><input type="checkbox" checked="checked"><span></span></label><div><strong>Multi-Language (i18n):</strong> Translate and switch UI language across 8+ languages from the translate icon.</div></li>
</ul>

<h2>📊 Advanced Dynamic Table with Resizing & Merging</h2>
<table>
  <thead>
    <tr>
      <th style="width: 28%;">Plugin / Feature</th>
      <th style="width: 24%;">Standard Cloud Editors</th>
      <th style="width: 24%;">Commercial Editors</th>
      <th style="width: 24%;">StackEditor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Full Menubar & Ribbon</strong></td>
      <td>Paid Tier ($30+/mo)</td>
      <td>Subscription Required</td>
      <td><span style="color: #006ce0; font-weight: 600;">✅ 100% Free</span></td>
    </tr>
    <tr>
      <td><strong>Table Cell Merge & Resize</strong></td>
      <td>Paid Plugin</td>
      <td>Paid Plugin</td>
      <td><span style="color: #006ce0; font-weight: 600;">✅ 100% Free</span></td>
    </tr>
    <tr>
      <td><strong>Source Code Editor Dialog</strong></td>
      <td>Paid Addon</td>
      <td>Paid Plugin</td>
      <td><span style="color: #006ce0; font-weight: 600;">✅ 100% Free</span></td>
    </tr>
    <tr>
      <td><strong>LaTeX Formula Math (KaTeX)</strong></td>
      <td>Paid Addon</td>
      <td>Paid Addon</td>
      <td><span style="color: #006ce0; font-weight: 600;">✅ 100% Free</span></td>
    </tr>
    <tr>
      <td><strong>PDF & Word (.docx) Export</strong></td>
      <td>Cloud Subscription</td>
      <td>Cloud Subscription</td>
      <td><span style="color: #006ce0; font-weight: 600;">✅ 100% Free</span></td>
    </tr>
  </tbody>
</table>

<h2>💻 Code Block with Syntax Highlighting</h2>
<pre><code class="language-typescript">// Quickstart StackEditor in your project
import { StackEditor } from 'stack-editor';
import 'stack-editor/style.css';

const editor = StackEditor.create({
  element: '#editor',
  placeholder: 'Start writing your story...',
  theme: 'light',
  menubar: true,
  toolbar: 'full',
  statusBar: true,
  onChange: (html, instance) => {
    console.log('HTML Output:', html);
    console.log('Markdown:', instance.getMarkdown());
  },
});</code></pre>

<h2>🔬 LaTeX Mathematical Equations (KaTeX)</h2>
<p>StackEditor natively parses and renders LaTeX formulas. Click on the formula below or insert your own via <em>Insert → Math Formula</em>:</p>

<p>Inline formula: <span class="nova-math-inline" data-latex="E = mc^2">E = mc^2</span> and the Gaussian integral:</p>
<div class="nova-math-block" data-latex="\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}">\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}</div>

<blockquote>
  "Good design makes a product useful. StackEditor strips away complexity and delivers enterprise-grade text editing freely to every developer."
  <br>— <strong>Shivira Stack Platform</strong>
</blockquote>
`;

function initDemoApp() {
  const mountEl = document.getElementById('editor-mount');
  if (!mountEl) return;

  const outputBody = document.getElementById('output-body');
  const tabBtns = document.querySelectorAll('.demo-tab-btn');
  let activeTab: 'html' | 'markdown' | 'json' = 'html';

  function updateOutput(ed: any) {
    if (!outputBody || !ed) return;
    if (activeTab === 'html') {
      outputBody.textContent = ed.getHTML();
    } else if (activeTab === 'markdown') {
      outputBody.textContent = ed.getMarkdown();
    } else if (activeTab === 'json') {
      outputBody.textContent = JSON.stringify(ed.getJSON(), null, 2);
    }
  }

  const editor = StackEditor.create({
    element: mountEl,
    content: sampleContent,
    placeholder: 'Start writing your document...',
    theme: 'light',
    onInit: (ed) => {
      updateOutput(ed);
    },
    onChange: (_html, ed) => {
      updateOutput(ed);
    },
  });

  // Theme selector
  const themeSelect = document.getElementById('theme-select') as HTMLSelectElement;
  themeSelect?.addEventListener('change', () => {
    const val = themeSelect.value as any;
    editor.setTheme(val);
    document.body.classList.toggle('theme-dark', val === 'dark');
  });

  // Export buttons
  document.getElementById('btn-export-pdf')?.addEventListener('click', () => editor.exportToPDF());
  document.getElementById('btn-export-word')?.addEventListener('click', () => editor.exportToWord());

  // Output Inspector tabs
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeTab = btn.getAttribute('data-tab') as any;
      updateOutput(editor);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDemoApp);
} else {
  initDemoApp();
}
