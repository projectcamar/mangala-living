import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import translation files
import idTranslation from './locales/id/translation.json';
import enTranslation from './locales/en/translation.json';
import jpTranslation from './locales/jp/translation.json';
import deTranslation from './locales/de/translation.json';
import nlTranslation from './locales/nl/translation.json';
import koTranslation from './locales/ko/translation.json';
import frTranslation from './locales/fr/translation.json';
import arTranslation from './locales/ar/translation.json';
import cnTranslation from './locales/cn/translation.json';

const resources = {
  id: { translation: idTranslation },
  en: { translation: enTranslation },
  jp: { translation: jpTranslation },
  de: { translation: deTranslation },
  nl: { translation: nlTranslation },
  ko: { translation: koTranslation },
  fr: { translation: frTranslation },
  ar: { translation: arTranslation },
  cn: { translation: cnTranslation },
};

// Country to language mapping
const countryLanguageMap: { [key: string]: string } = {
  'ID': 'id', // Indonesia
  'US': 'en', // United States
  'GB': 'en', // United Kingdom
  'AU': 'en', // Australia
  'JP': 'jp', // Japan
  'DE': 'de', // Germany
  'NL': 'nl', // Netherlands
  'KR': 'ko', // South Korea
  'FR': 'fr', // France
  'AE': 'ar', // UAE
  'SA': 'ar', // Saudi Arabia
  'CN': 'cn', // China
  'SG': 'en', // Singapore (default to English)
};

// IP detection function
export const detectLanguageFromIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code;
    return countryLanguageMap[countryCode] || 'en'; // Default to English
  } catch (error) {
    console.warn('Failed to detect language from IP, using browser language:', error);
    return 'en';
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

// Auto-detect language on first load
if (!localStorage.getItem('i18nextLng')) {
  detectLanguageFromIP().then(language => {
    i18n.changeLanguage(language);
  });
}

export default i18n;