'use client';

import { CSSProperties, useState } from 'react';
import Image from 'next/image';

import { useLanguage } from '../../hooks/language';

import EnglishFlag from '../../assets/EnglishFlag.svg';
import BrazilFlag from '../../assets/BrazilFlag.svg';

interface LanguageSwitcherSelectorProps {
  containerStyle?: CSSProperties;
}

export function LanguageSwitcherSelector({
  containerStyle,
}: LanguageSwitcherSelectorProps) {
  const { language, setLanguage } = useLanguage();

  const [switchLanguageVisibility, setSwitchLanguageVisibility] =
    useState(false);

  return (
    <div
      className="relative flex flex-row-reverse items-center justify-center"
      style={containerStyle}
    >
      <Image
        onMouseEnter={() => setSwitchLanguageVisibility(true)}
        onClick={() => setSwitchLanguageVisibility(!switchLanguageVisibility)}
        className="w-10 h-10 rounded-full"
        src={language === 'en' ? EnglishFlag : BrazilFlag}
        width={40}
        height={40}
        alt={language === 'en' ? 'English' : 'Portuguese'}
      />

      <div
        className={`
          ${switchLanguageVisibility ? 'visible' : 'invisible'} 
          m-0 
          p-0 
          list-none 
          max-sm:flex 
          max-sm:flex-row-reverse 
          max-sm:items-center 
          max-sm:justify-center
        `}
      >
        <button
          className="flex items-center justify-center w-10 h-10 border-none rounded-full py-1 mx-2 hover:w-[45px] hover:h-[45px]"
          type="button"
          onClick={() => {
            setLanguage(language === 'en' ? 'ptBr' : 'en');
          }}
          onMouseOut={() => setSwitchLanguageVisibility(false)}
        >
          <Image
            className="w-10 h-10 rounded-full hover:w-[45px] hover:h-[45px]"
            src={language === 'en' ? BrazilFlag : EnglishFlag}
            width={40}
            height={40}
            alt={language === 'en' ? 'English' : 'Portuguese'}
          />
        </button>
      </div>
    </div>
  );
}
