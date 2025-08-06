import { useTranslation } from 'react-i18next';

export const useTranslations = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    try {
      i18n.changeLanguage(language);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const getCurrentLanguage = () => {
    return i18n.language || 'en';
  };

  const getGreeting = () => {
    try {
      const h = new Date().getHours();
      if (h < 12) return t('aboutMe.greeting') || 'Good morning';
      if (h < 18) return t('aboutMe.greetingAfternoon') || 'Good afternoon';
      return t('aboutMe.greetingEvening') || 'Good evening';
    } catch (error) {
      console.error('Error getting greeting:', error);
      return 'Hello';
    }
  };

  return {
    t: (key, options) => {
      try {
        return t(key, options) || key;
      } catch (error) {
        console.error('Translation error:', error);
        return key;
      }
    },
    changeLanguage,
    getCurrentLanguage,
    getGreeting,
    currentLanguage: i18n.language || 'en',
    isLanguageReady: i18n.isInitialized || false
  };
};
