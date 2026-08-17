export type SupportedLanguage = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ja' | 'zh';

export interface Translations {
  menus: {
    file: string;
    edit: string;
    view: string;
    insert: string;
    format: string;
    tools: string;
    table: string;
    help: string;
  };
  toolbar: {
    paragraph: string;
    headings: string;
    inline: string;
    blocks: string;
    align: string;
    styles: string;
    bold: string;
    italic: string;
    underline: string;
    textColor: string;
    highlightColor: string;
    fontFamily: string;
    fontSize: string;
    insertTable: string;
    insertLink: string;
    insertImage: string;
    comment: string;
    alignLeft: string;
    alignCenter: string;
    alignRight: string;
    alignJustify: string;
    bulletList: string;
    numberedList: string;
    checklist: string;
    clearFormat: string;
    sourceCode: string;
    fullscreen: string;
    shortcuts: string;
  };
  statusbar: {
    words: string;
    characters: string;
    mode: string;
  };
  modals: {
    save: string;
    cancel: string;
    close: string;
    insert: string;
  };
}

export const i18nDictionary: Record<SupportedLanguage, Translations> = {
  en: {
    menus: {
      file: 'File',
      edit: 'Edit',
      view: 'View',
      insert: 'Insert',
      format: 'Format',
      tools: 'Tools',
      table: 'Table',
      help: 'Help',
    },
    toolbar: {
      paragraph: 'Paragraph',
      headings: 'Headings',
      inline: 'Inline',
      blocks: 'Blocks',
      align: 'Align',
      styles: 'Styles',
      bold: 'Bold (Ctrl+B)',
      italic: 'Italic (Ctrl+I)',
      underline: 'Underline (Ctrl+U)',
      textColor: 'Text Color',
      highlightColor: 'Highlight Color',
      fontFamily: 'Font Family',
      fontSize: 'Font Size',
      insertTable: 'Insert Table',
      insertLink: 'Insert Link',
      insertImage: 'Insert Image',
      comment: 'Add Comment',
      alignLeft: 'Align Left',
      alignCenter: 'Align Center',
      alignRight: 'Align Right',
      alignJustify: 'Justify',
      bulletList: 'Bullet List',
      numberedList: 'Numbered List',
      checklist: 'Checklist',
      clearFormat: 'Clear Formatting (Tx)',
      sourceCode: 'HTML Source Code',
      fullscreen: 'Toggle Fullscreen',
      shortcuts: 'Keyboard Shortcuts',
    },
    statusbar: {
      words: 'words',
      characters: 'characters',
      mode: 'WYSIWYG',
    },
    modals: {
      save: 'Save',
      cancel: 'Cancel',
      close: 'Close',
      insert: 'Insert',
    },
  },
  es: {
    menus: {
      file: 'Archivo',
      edit: 'Editar',
      view: 'Ver',
      insert: 'Insertar',
      format: 'Formato',
      tools: 'Herramientas',
      table: 'Tabla',
      help: 'Ayuda',
    },
    toolbar: {
      paragraph: 'Párrafo',
      headings: 'Encabezados',
      inline: 'En línea',
      blocks: 'Bloques',
      align: 'Alinear',
      styles: 'Estilos',
      bold: 'Negrita (Ctrl+B)',
      italic: 'Cursiva (Ctrl+I)',
      underline: 'Subrayado (Ctrl+U)',
      textColor: 'Color de texto',
      highlightColor: 'Color de resaltado',
      fontFamily: 'Fuente',
      fontSize: 'Tamaño de fuente',
      insertTable: 'Insertar tabla',
      insertLink: 'Insertar enlace',
      insertImage: 'Insertar imagen',
      comment: 'Añadir comentario',
      alignLeft: 'Alinear a la izquierda',
      alignCenter: 'Centrar',
      alignRight: 'Alinear a la derecha',
      alignJustify: 'Justificar',
      bulletList: 'Lista con viñetas',
      numberedList: 'Lista numerada',
      checklist: 'Lista de verificación',
      clearFormat: 'Borrar formato (Tx)',
      sourceCode: 'Código fuente HTML',
      fullscreen: 'Pantalla completa',
      shortcuts: 'Atajos de teclado',
    },
    statusbar: {
      words: 'palabras',
      characters: 'caracteres',
      mode: 'Modo WYSIWYG',
    },
    modals: {
      save: 'Guardar',
      cancel: 'Cancelar',
      close: 'Cerrar',
      insert: 'Insertar',
    },
  },
  fr: {
    menus: {
      file: 'Fichier',
      edit: 'Édition',
      view: 'Affichage',
      insert: 'Insertion',
      format: 'Format',
      tools: 'Outils',
      table: 'Tableau',
      help: 'Aide',
    },
    toolbar: {
      paragraph: 'Paragraphe',
      headings: 'Titres',
      inline: 'En ligne',
      blocks: 'Blocs',
      align: 'Aligner',
      styles: 'Styles',
      bold: 'Gras (Ctrl+B)',
      italic: 'Italique (Ctrl+I)',
      underline: 'Souligné (Ctrl+U)',
      textColor: 'Couleur du texte',
      highlightColor: 'Couleur de surbrillance',
      fontFamily: 'Police',
      fontSize: 'Taille de police',
      insertTable: 'Insérer un tableau',
      insertLink: 'Insérer un lien',
      insertImage: 'Insérer une image',
      comment: 'Ajouter un commentaire',
      alignLeft: 'Aligner à gauche',
      alignCenter: 'Centrer',
      alignRight: 'Aligner à droite',
      alignJustify: 'Justifier',
      bulletList: 'Puces',
      numberedList: 'Numérotation',
      checklist: 'Liste de tâches',
      clearFormat: 'Effacer le formatage (Tx)',
      sourceCode: 'Code source HTML',
      fullscreen: 'Plein écran',
      shortcuts: 'Raccourcis clavier',
    },
    statusbar: {
      words: 'mots',
      characters: 'caractères',
      mode: 'Mode WYSIWYG',
    },
    modals: {
      save: 'Enregistrer',
      cancel: 'Annuler',
      close: 'Fermer',
      insert: 'Insérer',
    },
  },
  de: {
    menus: {
      file: 'Datei',
      edit: 'Bearbeiten',
      view: 'Ansicht',
      insert: 'Einfügen',
      format: 'Format',
      tools: 'Werkzeuge',
      table: 'Tabelle',
      help: 'Hilfe',
    },
    toolbar: {
      paragraph: 'Absatz',
      headings: 'Überschriften',
      inline: 'Inline',
      blocks: 'Blöcke',
      align: 'Ausrichten',
      styles: 'Stile',
      bold: 'Fett (Ctrl+B)',
      italic: 'Kursiv (Ctrl+I)',
      underline: 'Unterstrichen (Ctrl+U)',
      textColor: 'Textfarbe',
      highlightColor: 'Hervorhebungsfarbe',
      fontFamily: 'Schriftart',
      fontSize: 'Schriftgröße',
      insertTable: 'Tabelle einfügen',
      insertLink: 'Link einfügen',
      insertImage: 'Bild einfügen',
      comment: 'Kommentar hinzufügen',
      alignLeft: 'Linksbündig',
      alignCenter: 'Zentriert',
      alignRight: 'Rechtsbündig',
      alignJustify: 'Blocksatz',
      bulletList: 'Aufzählung',
      numberedList: 'Nummerierung',
      checklist: 'Checkliste',
      clearFormat: 'Formatierung löschen (Tx)',
      sourceCode: 'HTML-Quelltext',
      fullscreen: 'Vollbild',
      shortcuts: 'Tastaturkürzel',
    },
    statusbar: {
      words: 'Wörter',
      characters: 'Zeichen',
      mode: 'WYSIWYG-Modus',
    },
    modals: {
      save: 'Speichern',
      cancel: 'Abbrechen',
      close: 'Schließen',
      insert: 'Einfügen',
    },
  },
  it: {
    menus: {
      file: 'File',
      edit: 'Modifica',
      view: 'Visualizza',
      insert: 'Inserisci',
      format: 'Formato',
      tools: 'Strumenti',
      table: 'Tabella',
      help: 'Aiuto',
    },
    toolbar: {
      paragraph: 'Paragrafo',
      headings: 'Titoli',
      inline: 'In linea',
      blocks: 'Blocchi',
      align: 'Allinea',
      styles: 'Stili',
      bold: 'Grassetto (Ctrl+B)',
      italic: 'Corsivo (Ctrl+I)',
      underline: 'Sottolineato (Ctrl+U)',
      textColor: 'Colore testo',
      highlightColor: 'Colore evidenziatore',
      fontFamily: 'Carattere',
      fontSize: 'Dimensione carattere',
      insertTable: 'Inserisci tabella',
      insertLink: 'Inserisci link',
      insertImage: 'Inserisci immagine',
      comment: 'Aggiungi commento',
      alignLeft: 'Allinea a sinistra',
      alignCenter: 'Centra',
      alignRight: 'Allinea a destra',
      alignJustify: 'Giustifica',
      bulletList: 'Elenco puntato',
      numberedList: 'Elenco numerato',
      checklist: 'Elenco attività',
      clearFormat: 'Cancella formattazione (Tx)',
      sourceCode: 'Codice sorgente HTML',
      fullscreen: 'Schermo intero',
      shortcuts: 'Scorciatoie da tastiera',
    },
    statusbar: {
      words: 'parole',
      characters: 'caratteri',
      mode: 'Modalità WYSIWYG',
    },
    modals: {
      save: 'Salva',
      cancel: 'Annulla',
      close: 'Chiudi',
      insert: 'Inserisci',
    },
  },
  pt: {
    menus: {
      file: 'Arquivo',
      edit: 'Editar',
      view: 'Exibir',
      insert: 'Inserir',
      format: 'Formato',
      tools: 'Ferramentas',
      table: 'Tabela',
      help: 'Ajuda',
    },
    toolbar: {
      paragraph: 'Parágrafo',
      headings: 'Títulos',
      inline: 'Em linha',
      blocks: 'Blocos',
      align: 'Alinhar',
      styles: 'Estilos',
      bold: 'Negrito (Ctrl+B)',
      italic: 'Itálico (Ctrl+I)',
      underline: 'Sublinhado (Ctrl+U)',
      textColor: 'Cor do texto',
      highlightColor: 'Cor de realce',
      fontFamily: 'Fonte',
      fontSize: 'Tamanho da fonte',
      insertTable: 'Inserir tabela',
      insertLink: 'Inserir link',
      insertImage: 'Inserir imagem',
      comment: 'Adicionar comentário',
      alignLeft: 'Alinhar à esquerda',
      alignCenter: 'Centralizar',
      alignRight: 'Alinhar à direita',
      alignJustify: 'Justificar',
      bulletList: 'Marcadores',
      numberedList: 'Numeração',
      checklist: 'Lista de verificação',
      clearFormat: 'Limpar formatação (Tx)',
      sourceCode: 'Código-fonte HTML',
      fullscreen: 'Tela cheia',
      shortcuts: 'Atalhos de teclado',
    },
    statusbar: {
      words: 'palavras',
      characters: 'caracteres',
      mode: 'Modo WYSIWYG',
    },
    modals: {
      save: 'Salvar',
      cancel: 'Cancelar',
      close: 'Fechar',
      insert: 'Inserir',
    },
  },
  ja: {
    menus: {
      file: 'ファイル',
      edit: '編集',
      view: '表示',
      insert: '挿入',
      format: '書式',
      tools: 'ツール',
      table: '表',
      help: 'ヘルプ',
    },
    toolbar: {
      paragraph: '段落',
      headings: '見出し',
      inline: 'インライン',
      blocks: 'ブロック',
      align: '配置',
      styles: 'スタイル',
      bold: '太字 (Ctrl+B)',
      italic: '斜体 (Ctrl+I)',
      underline: '下線 (Ctrl+U)',
      textColor: '文字色',
      highlightColor: 'ハイライト色',
      fontFamily: 'フォント',
      fontSize: 'フォントサイズ',
      insertTable: '表の挿入',
      insertLink: 'リンクの挿入',
      insertImage: '画像の挿入',
      comment: 'コメントの追加',
      alignLeft: '左揃え',
      alignCenter: '中央揃え',
      alignRight: '右揃え',
      alignJustify: '両端揃え',
      bulletList: '箇条書き',
      numberedList: '番号付きリスト',
      checklist: 'タスクリスト',
      clearFormat: '書式のクリア (Tx)',
      sourceCode: 'HTMLソースコード',
      fullscreen: '全画面表示',
      shortcuts: 'キーボードショートカット',
    },
    statusbar: {
      words: '語',
      characters: '文字',
      mode: 'WYSIWYG モード',
    },
    modals: {
      save: '保存',
      cancel: 'キャンセル',
      close: '閉じる',
      insert: '挿入',
    },
  },
  zh: {
    menus: {
      file: '文件',
      edit: '编辑',
      view: '视图',
      insert: '插入',
      format: '格式',
      tools: '工具',
      table: '表格',
      help: '帮助',
    },
    toolbar: {
      paragraph: '段落',
      headings: '标题',
      inline: '行内',
      blocks: '块级',
      align: '对齐',
      styles: '样式',
      bold: '粗体 (Ctrl+B)',
      italic: '斜体 (Ctrl+I)',
      underline: '下划线 (Ctrl+U)',
      textColor: '文字颜色',
      highlightColor: '背景高亮',
      fontFamily: '字体',
      fontSize: '字号',
      insertTable: '插入表格',
      insertLink: '插入链接',
      insertImage: '插入图片',
      comment: '添加评论',
      alignLeft: '左对齐',
      alignCenter: '居中对齐',
      alignRight: '右对齐',
      alignJustify: '两端对齐',
      bulletList: '项目符号',
      numberedList: '编号列表',
      checklist: '待办任务',
      clearFormat: '清除格式 (Tx)',
      sourceCode: 'HTML 源码',
      fullscreen: '全屏模式',
      shortcuts: '快捷键帮助',
    },
    statusbar: {
      words: '字数',
      characters: '字符数',
      mode: 'WYSIWYG 模式',
    },
    modals: {
      save: '保存',
      cancel: '取消',
      close: '关闭',
      insert: '插入',
    },
  },
};
