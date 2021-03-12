import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { it, en, getLanguage } from './index';

const config = {
  resources: {
    en: {
      translation: en,
    },
    it: {
      translation: it,
    },
  },
  lng: getLanguage(),
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: 'en',
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(config);

export default i18n;
