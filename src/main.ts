import './style.scss';
import './i18n';
import './alpine';


document.getElementById('btnLangES')?.addEventListener('click', () => {
    window.AlpineI18n.locale = 'es';
});
document.getElementById('btnLangEN')?.addEventListener('click', () => {
    window.AlpineI18n.locale = 'en';
});

document.addEventListener('alpine-i18n:locale-change', () => {
    alert(window.AlpineI18n.t('lang-changed', {lang: window.AlpineI18n.locale}));
})
