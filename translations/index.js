export { default as it } from './locales/it-IT';
export { default as en } from './locales/en-GB';

export const getLanguage = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  return localStorage.getItem('i18nextLng') || navigator.language.split('-')[0];
};
