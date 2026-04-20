import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "app_name": "!Talk About Me",
      "tagline": "A Digital Memorial for the Souls of Gaza",
      "soul_card_header": "The IDF killed me, but I live in your hearts",
      "attribution": "Data verified and certified by the Gaza Ministry of Health (as of July 31, 2025).",
      "share_call": "Keep their memory alive. Share this soul's story.",
      "languages": {
        "en": "English",
        "ar": "العربية",
        "fr": "Français",
        "es": "Español"
      }
    }
  },
  ar: {
    translation: {
      "app_name": "!تحدث عني",
      "tagline": "نصب تذكاري رقمي لأرواح غزة",
      "soul_card_header": "قتلني الاحتلال، لكني أعيش في قلوبكم",
      "attribution": "تم التحقق من البيانات واعتمادها من قبل وزارة الصحة الفلسطينية في غزة (حتى 31 يوليو 2025).",
      "share_call": "أبقِ ذكراهم حية. شارك قصة هذه الروح.",
      "languages": {
        "en": "الإنجليزية",
        "ar": "العربية",
        "fr": "الفرنسية",
        "es": "الإسبانية"
      }
    }
  },
  fr: {
    translation: {
      "app_name": "!Parlez de moi",
      "tagline": "Un mémorial numérique pour les âmes de Gaza",
      "soul_card_header": "L'IDF m'a tué, mais je vis dans vos cœurs",
      "attribution": "Données vérifiées et certifiées par le ministère de la Santé de Gaza (au 31 juillet 2025).",
      "share_call": "Gardez leur mémoire vivante. Partagez l'histoire de cette âme.",
      "languages": {
        "en": "Anglais",
        "ar": "Arabe",
        "fr": "Français",
        "es": "Espagnol"
      }
    }
  },
  es: {
    translation: {
      "app_name": "!Habla de mí",
      "tagline": "Un memorial digital para las almas de Gaza",
      "soul_card_header": "El IDF me mató, pero vivo en sus corazones",
      "attribution": "Datos verificados y certificados por el Ministerio de Salud de Gaza (al 31 de julio de 2025).",
      "share_call": "Mantén viva su memoria. Comparte la historia de esta alma.",
      "languages": {
        "en": "Inglés",
        "ar": "Árabe",
        "fr": "Francés",
        "es": "Español"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
