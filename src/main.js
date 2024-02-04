import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zhCN from './locales/zh-CN.json'
import zhTW from './locales/zh-TW.json'
import ja from './locales/ja.json'
import routes from './routes'

const i18n = createI18n({
    legacy: false,
    locale: navigator.language,
    fallbackLocale: 'en', // set fallback locale
    messages: {
        'en': en,
        'zh': zhCN,
        'zh-CN': zhCN,
        'zh-SG': zhCN,
        'zh-TW': zhTW,
        'zh-HK': zhTW,
        'zh-Hans': zhCN,
        'zh-Hant': zhTW,
        'ja': ja,
    }
});

const mtfim = createApp(App)

mtfim.use(routes)
mtfim.use(i18n)
mtfim.mount('#app')
