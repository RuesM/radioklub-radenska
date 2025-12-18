const translations = {
en: {
title: "Radioklub Radenska",
subtitle: "Local amateur radio club",
nav_about: "About",
nav_members: "Members",
nav_contests: "Contests",
nav_history: "History",
about_title: "About",
about_text: "Local amateur radio club bringing together radio enthusiasts.",
members_title: "Members",
members_text: "Licensed operators, beginners and supporters.",
contests_title: "Contests",
contests_text: "Tekmujemo v VHF, UHF in višjih pasovih iz tekmovalne lokacije Kocjan pri Radencih (lokator JN86AO). Tekmovalni klicni znak: S59P. Klubski klicni znak: S59DTB. Smo člani ZRS.",
history_title: "History",
history_text: "Long tradition of amateur radio activity.",
members_link: '<a href="members.html">View full member list</a>',
location_title: "Location",
location_text: "Our contest location is in Kocjan near Radenci (JN86AO)."
},
sl: {
title: "Radioklub Radenska",
subtitle: "Lokalni radioamaterski klub",
nav_about: "O klubu",
nav_members: "Člani",
nav_contests: "Tekmovanja",
nav_history: "Zgodovina",
about_title: "O klubu",
about_text: "Lokalni radioamaterski klub, ki združuje radioamaterje.",
members_title: "Člani",
members_text: "Licencirani radioamaterji, začetniki in podporniki.",
contests_title: "Tekmovanja",
contests_text: "Sodelovanje na domačih in mednarodnih tekmovanjih.",
history_title: "Zgodovina",
history_text: "Dolga tradicija radioamaterske dejavnosti.",
members_link: '<a href="members.html">Poglej celoten seznam članov</a>',
location_title: "Lokacija",
location_text: "Naša tekmovalna lokacija je v Kocjanu pri Radencih (JN86AO)."
}
};


function setLang(lang) {
document.querySelectorAll('[data-i18n]').forEach(el => {
el.innerHTML = translations[lang][el.dataset.i18n];
});
localStorage.setItem('lang', lang);
}


function toggleTheme() {
document.body.classList.toggle('dark');
const isDark = document.body.classList.contains('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}
}


function init() {
const savedLang = localStorage.getItem('lang') || 'en';
const savedTheme = localStorage.getItem('theme');
setLang(savedLang);

const langSelect = document.getElementById('langSelect');
if (langSelect) {
  langSelect.value = savedLang;
  langSelect.onchange = e => setLang(e.target.value);
}

if (savedTheme === 'dark') document.body.classList.add('dark');

updateThemeIcon(savedTheme === 'dark');

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.onclick = toggleTheme;
}

if (!localStorage.getItem('cookiesAccepted')) {
  const cookieBanner = document.getElementById('cookieBanner');
  if (cookieBanner) cookieBanner.style.display = 'flex';
}

const acceptCookies = document.getElementById('acceptCookies');
if (acceptCookies) {
  acceptCookies.onclick = () => {
    localStorage.setItem('cookiesAccepted', 'yes');
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) cookieBanner.style.display = 'none';
  };
}

const yearEl = document.getElementById('y');
if (yearEl) yearEl.textContent = new Date().getFullYear();
}


document.addEventListener('DOMContentLoaded', init);