const translations = {
  ja: {
    title: 'きつねちゃんのホームページ',
    subtitle: 'きつねのかわいいホームページ',
    about: '好きなもの',
    favorites: {
      chestnut: '栗饅頭',
      tea: '緑茶',
      tatami: '畳',
    },
    notifications: {
      chestnut: '栗饅頭は最高の和菓子！',
      tea: '炬燵に座って緑茶を飲むと心が落ち着きますο(=•ω＜=)ρ⌒☆',
      tatami: 'きつねちゃんの居場所',
    },
    contact: 'Contact',
    email: 'Email',
    github: 'GitHub',
    discord: 'Discord',
    footer: '© 2024 きつねちゃん. MIT License',
  },
  en: {
    title: "Kitune-chan's Homepage",
    subtitle: "Cute Fox's Homepage",
    about: 'Favorites',
    favorites: {
      chestnut: 'Chestnut Manju',
      tea: 'Green Tea',
      tatami: 'Tatami',
    },
    notifications: {
      chestnut: 'Chestnut manju is the best Japanese sweet!',
      tea: 'Drinking green tea while sitting at the kotatsu makes me feel calm ο(=•ω＜=)ρ⌒☆',
      tatami: "Kitune-chan's favorite spot",
    },
    contact: 'Contact',
    email: 'Email',
    github: 'GitHub',
    discord: 'Discord',
    footer: '© 2024 Kitune-chan. MIT License',
  },
  zh: {
    title: '狐狸酱的主页',
    subtitle: '可爱狐狸的主页',
    about: '喜欢的东西',
    favorites: {
      chestnut: '栗子馒头',
      tea: '绿茶',
      tatami: '榻榻米',
    },
    notifications: {
      chestnut: '栗子馒头是最棒的和果子！',
      tea: '坐在暖炉桌旁喝绿茶让我的心平静下来ο(=•ω＜=)ρ⌒☆',
      tatami: '狐狸酱的居所',
    },
    contact: '联系方式',
    email: '电子邮件',
    github: 'GitHub',
    discord: 'Discord',
    footer: '© 2024 狐狸酱. MIT License',
  },
};

function changeLanguage(lang) {
  document.documentElement.lang = lang;
  const t = translations[lang];

  document.title = t.title;
  document.querySelector('.subtitle').textContent = t.subtitle;
  document.querySelector('.about h2').textContent = t.about;
  document.querySelectorAll('.favorite-item p')[0].textContent = t.favorites.chestnut;
  document.querySelectorAll('.favorite-item p')[1].textContent = t.favorites.tea;
  document.querySelectorAll('.favorite-item p')[2].textContent = t.favorites.tatami;
  document.querySelector('.contact h2').textContent = t.contact;
  document.querySelectorAll('.contact-item span')[0].textContent = t.email;
  document.querySelectorAll('.contact-item span')[1].textContent = t.github;
  document.querySelectorAll('.contact-item span')[2].textContent = t.discord;
  document.querySelector('footer p').textContent = t.footer;

  document.querySelector('.favorite-item:nth-child(1)').onclick = () => showNotification(t.notifications.chestnut);
  document.querySelector('.favorite-item:nth-child(2)').onclick = () => showNotification(t.notifications.tea);
  document.querySelector('.favorite-item:nth-child(3)').onclick = () => showNotification(t.notifications.tatami);

  localStorage.setItem('language', lang);
}

function initLanguage() {
  const savedLang = localStorage.getItem('language');
  const browserLang = navigator.language.split('-')[0];
  const defaultLang = ['ja', 'en', 'zh'].includes(browserLang) ? browserLang : 'ja';

  changeLanguage(savedLang || defaultLang);
}

initLanguage();
