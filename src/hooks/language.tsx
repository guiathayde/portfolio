'use client';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

import { StringsType, en, ptBr } from '../i18n';

interface LanguageContextData {
  language: 'en' | 'ptBr';
  setLanguage: React.Dispatch<React.SetStateAction<'en' | 'ptBr'>>;

  strings: StringsType;
}

const LanguageContext = createContext<LanguageContextData>(
  {} as LanguageContextData
);

interface LanguageProviderProps {
  children: ReactNode;
}
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<'en' | 'ptBr'>('en');
  const [strings, setStrings] = useState<StringsType>(en);

  useEffect(() => {
    const languageFromLocalStorage = localStorage.getItem(
      '@guiathayde:language'
    );

    if (languageFromLocalStorage) {
      setLanguage(languageFromLocalStorage as 'en' | 'ptBr');
    } else {
      setLanguage('en');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@guiathayde:language', language);

    if (language === 'ptBr') setStrings(ptBr);
    else setStrings(en);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        strings,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextData {
  const context = useContext(LanguageContext);

  return context;
}
