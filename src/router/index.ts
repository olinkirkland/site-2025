import { createRouter, createWebHistory } from 'vue-router';
import { setLanguage } from '@/i18n/locale';
import HomePage from '@/pages/HomePage.vue';

const routes = [
    {
        path: '/:locale(en|de)',
        name: 'home',
        component: HomePage
    }
];

const routerOptions = {
    history: createWebHistory(),
    routes
};

export const router = createRouter(routerOptions);

// Language Guard
router.beforeEach((to, _, next) => {
    const locale = to.params.locale as string; // www.example.com/en or www.example.com/de
    if (!['en', 'de'].includes(locale)) {
        // If the locale is not supported, redirect to the default language
        const browserLanguage = navigator.language.split('-')[0]; // Get the browser language (e.g., 'en', 'de')
        const defaultLocale = ['en', 'de'].includes(browserLanguage)
            ? browserLanguage
            : 'en'; // Default to 'en' if browser language is not supported
        return next(`/${defaultLocale}${to.fullPath}`); // Redirect to the default language
    }
    setLanguage(locale); // Set the language in i18n
    document.documentElement.lang = locale; // Set the HTML lang attribute
    next();
});
