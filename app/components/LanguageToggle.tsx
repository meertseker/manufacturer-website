"use client"

import React, { useState, createContext, useContext, ReactNode } from 'react';

// Define types for language context
type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

// Create a language context with default values
export const LanguageContext = createContext<LanguageContextType>({
  language: 'tr',
  toggleLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('tr'); // Default to Turkish

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Language Toggle Button Component
const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors duration-200"
    >
      <span className={`mr-2 ${language === 'tr' ? 'text-blue-600 font-bold' : 'text-gray-500'}`}>TR</span>
      <div className="w-5 h-5 flex items-center justify-center text-gray-400">|</div>
      <span className={`ml-2 ${language === 'en' ? 'text-blue-600 font-bold' : 'text-gray-500'}`}>EN</span>
    </button>
  );
};

export default LanguageToggle;