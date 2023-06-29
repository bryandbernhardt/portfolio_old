import pt from './pt.json';
import en from './en.json';
import es from './es.json';

import { createI18n } from 'vue-i18n';

const locale = window.navigator.language.substring(0, 2);

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages: { pt, en, es }
});

export default i18n;