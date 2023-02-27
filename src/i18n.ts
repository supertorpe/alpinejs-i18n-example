import localization from './i18n.json';

document.addEventListener('alpine-i18n:ready', () => {
    const browserLang = navigator.language;
    let candidate = '';
    let created = false;
    Object.keys(localization).forEach((key) => {
        if (!window.AlpineI18n.fallbackLocale) {
            window.AlpineI18n.fallbackLocale = key;
        }
        if (!created) {
            if (key == browserLang) {
                window.AlpineI18n.create(key, localization);
                created = true;
            } else if (!candidate && browserLang.startsWith(key)) {
                candidate = key;
            }
        }
    });
    if (!created) {
        if (candidate) {
            window.AlpineI18n.create(candidate, localization);
        } else {
            window.AlpineI18n.create(window.AlpineI18n.fallbackLocale, localization);
        }
    }
});