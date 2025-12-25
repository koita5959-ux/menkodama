// 現在のパスから言語を判定
const path = window.location.pathname;
let currentLang = 'jp';
let basePath = '';

if (path.includes('/en/')) {
  currentLang = 'en';
  basePath = '../';
} else if (path.includes('/ko/')) {
  currentLang = 'ko';
  basePath = '../';
} else if (path.includes('/zh-cn/')) {
  currentLang = 'cn';
  basePath = '../';
} else if (path.includes('/zh-tw/')) {
  currentLang = 'tw';
  basePath = '../';
}

// 言語フル表記
const langNames = {
  jp: '日本語',
  en: 'English',
  ko: '한국어',
  cn: '简体中文',
  tw: '繁體中文'
};

// ナビメニューテキスト
const navTexts = {
  jp: { story: 'こだわり', menu: 'メニュー', access: 'アクセス' },
  en: { story: 'Our Story', menu: 'Menu', access: 'Access' },
  ko: { story: '장인정신', menu: '메뉴', access: '오시는 길' },
  cn: { story: '匠心工艺', menu: '菜单', access: '交通指南' },
  tw: { story: '匠心工藝', menu: '菜單', access: '交通指南' }
};

// 言語リンクパス
const langPaths = {
  jp: basePath || './',
  en: basePath + 'en/',
  ko: basePath + 'ko/',
  cn: basePath + 'zh-cn/',
  tw: basePath + 'zh-tw/'
};

// ヘッダーHTML生成
const headerHTML = `
<header class="header">
  <nav class="nav">
    <a href="${langPaths[currentLang]}index.html" class="nav-logo">
      <img src="${basePath}image/y_rogo.png" alt="麺本舗こだま" width="150">
    </a>
    <ul class="nav-menu">
      <li><a href="#about">${navTexts[currentLang].story}</a></li>
      <li><a href="#menu">${navTexts[currentLang].menu}</a></li>
      <li><a href="#access">${navTexts[currentLang].access}</a></li>
      <li class="lang-dropdown">
        <button class="lang-btn">🌐 ${langNames[currentLang]} ▼</button>
        <ul class="lang-menu">
          <li><a href="${langPaths.jp}index.html" class="${currentLang === 'jp' ? 'active' : ''}">日本語</a></li>
          <li><a href="${langPaths.en}index.html" class="${currentLang === 'en' ? 'active' : ''}">English</a></li>
          <li><a href="${langPaths.ko}index.html" class="${currentLang === 'ko' ? 'active' : ''}">한국어</a></li>
          <li><a href="${langPaths.cn}index.html" class="${currentLang === 'cn' ? 'active' : ''}">简体中文</a></li>
          <li><a href="${langPaths.tw}index.html" class="${currentLang === 'tw' ? 'active' : ''}">繁體中文</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</header>
`;

// ヘッダーを挿入
document.getElementById('header-container').innerHTML = headerHTML;

// ドロップダウンのクリックイベント
const langBtn = document.querySelector('.lang-btn');
const langMenu = document.querySelector('.lang-menu');

langBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  langMenu.classList.toggle('show');
});

// メニュー外クリックで閉じる
document.addEventListener('click', function(e) {
  if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
    langMenu.classList.remove('show');
  }
});
