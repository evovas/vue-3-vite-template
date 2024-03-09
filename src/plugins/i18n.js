/* eslint-disable */
import { createI18n } from 'vue-i18n';
import en_us from '/src/locales/en_us.json';
import ja_jp from '/src/locales/ja_jp.json';
import zh_hk from '/src/locales/zh_hk.json';
export const i18n = createI18n({
  legacy: false,
  locale: 'en_us',
  fallbackLocale: 'en_us',
  messages: {
    en_us,
    ja_jp,
    zh_hk,
  },
});
