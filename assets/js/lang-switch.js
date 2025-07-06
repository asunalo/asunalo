// 言語切替用スクリプト
function switchLang(lang) {
    document.querySelectorAll('.lang-ja').forEach(el => {
      el.style.display = (lang === 'ja') ? 'block' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = (lang === 'en') ? 'block' : 'none';
    });
  }
  