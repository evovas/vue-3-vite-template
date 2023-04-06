import { createI18n } from 'vue-i18n';

function loadLocaleMessages() {
  const locales = import.meta.glob(`/src/locales/*.json`, { eager: true });
  const messages = {};
  Object.keys(locales).forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales[key];
    }
  });
  return messages;
}

export const i18n = createI18n({
  allowComposition: true, // you need to specify that!
  locale: 'en_us',
  fallbackLocale: 'en_us',
  messages: loadLocaleMessages(),
});
