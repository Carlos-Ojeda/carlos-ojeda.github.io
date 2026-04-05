import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import './_language-selector.scss';

const LanguageSelector = () => {
  const { changeLanguage, currentLanguage } = useTranslations();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' }
  ];

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode);
  };

  return (
    <div className="language-selector">
      <div className="language-buttons">
        {languages.map((language) => (
          <button
            key={language.code}
            className={`language-button ${currentLanguage === language.code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(language.code)}
            title={language.name}
            aria-label={`Switch to ${language.name}`}
          >
            <span className="code">{language.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
