import { createI18n, useI18n } from 'vue-i18n';
import en from './locales/en/translations.json';
import de from './locales/de/translations.json';

// Use the i18n-editor from https://github.com/jcbvm/i18n-editor/releases/tag/1.0.0

// Type-define the master schema for the resource
// If the other language entries (es, de) are missing a key, it will be flagged as an error
type MessageSchema = typeof en;

const i18n = createI18n<[MessageSchema], 'en'>({
    // Add languages here
    legacy: false, // you must set `false`, to use Composition API
    locale: 'en',
    // fallbackLocale: 'en',
    missing: (locale, key) => {
        console.warn(`Missing translation for ${key} in ${locale}`);
        return `[${key}]`;
    },
    warnHtmlMessage: false,
    messages: {
        en, // English
        // @ts-ignore
        de // German
    }
});

let i18nInstance: any;
export function initializeI18nInstance() {
    i18nInstance = useI18n();
}

export function setLanguage(language: string) {
    if (!i18nInstance) throw new Error('i18n instance is not initialized');
    i18nInstance.locale.value = language;
    console.log(`Language set to: ${language}`);
}

export function getLanguage() {
    return i18nInstance.locale.value;
}

export function t(key: string, data?: Record<string, string>) {
    const localizedString = i18nInstance.t(key, data);
    // replace <br>, <br/>, <br /> with <span class="br"></span>
    return localizedString.replaceAll(
        /<br\s*\/?>/g,
        '<span class="br"></span>'
    );
}

export default i18n;
