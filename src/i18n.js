import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './languages/es.json';
import en from './languages/en.json';
import val from './languages/val.json';

i18n.use(initReactI18next).init({
  resources: {
    es,
    en,
    val
  },
  lng: 'es', // Idioma predeterminado
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})



export default i18n
