/* Language preference (EN/ID), read by every content/*.js file to decide
   which language's text to expose. Must load before any content/*.js
   script, since those read getLang() at module-load time. Switching
   language is a full page reload — see setLang() — so every renderer
   just needs to pick the right language once at load, same as today. */
const LANG_KEY = 'npLang';
const DEFAULT_LANG = 'en';

function getLang() {
    try {
        const stored = localStorage.getItem(LANG_KEY);
        return (stored === 'en' || stored === 'id') ? stored : DEFAULT_LANG;
    } catch (e) {
        return DEFAULT_LANG;
    }
}

function setLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    location.reload();
}

document.documentElement.lang = getLang();
