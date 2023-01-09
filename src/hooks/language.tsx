import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

import pt from '../i18n/pt';
import en from '../i18n/en';

interface LanguageContextData {
  language: 'en' | 'pt';
  setLanguage: React.Dispatch<React.SetStateAction<'en' | 'pt'>>;

  strings: StringValues;
}

const LanguageContext = createContext<LanguageContextData>(
  {} as LanguageContextData,
);

interface StringValues {
  Home: {
    getInTouch: string;

    Header: {
      downloadCV: string;
    };
    Hero: {
      apresentation: string;
      about: string;
    };
    About: {
      about: string;
      me: string;
      description: string;
      techsWorkedRecently: string;
    };
    Experience: {
      education: string;
      professional: string;
      currently: string;
    };
    Skills: {
      my: string;
      skills: string;
      whatCanIDoForYou: string;
      applicationsIAmFluentIn: string;
      whatCanYouExpect: string;
      description1: string;
      description2: string;
      description3: string;
    };
    Portfolio: {
      iCreateJobs: string;
      thatEnchantPeople: string;
    };
    Contact: {
      letsBuildYour: string;
      projectTogether: string;
    };
    Footer: {
      madeWith: string;
    };
  };
}

interface LanguageProviderProps {
  children: ReactNode;
}
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const [strings, setStrings] = useState<StringValues>(en);

  useEffect(() => {
    const languageFromLocalStorage = localStorage.getItem(
      '@guiathayde:language',
    );

    if (languageFromLocalStorage) {
      setLanguage(languageFromLocalStorage as 'en' | 'pt');
    } else {
      setLanguage('en');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@guiathayde:language', language);

    if (language === 'en') setStrings(en);
    else if (language === 'pt') setStrings(pt);
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
