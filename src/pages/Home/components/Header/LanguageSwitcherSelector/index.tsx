import { CSSProperties } from 'react';

import { useLanguage } from '../../../../../hooks/language';

import { Container } from './styles';

import EnglishFlag from '../../../../../assets/EnglishFlag.svg';
import BrazilFlag from '../../../../../assets/BrazilFlag.svg';

interface LanguageSwitcherSelectorProps {
  containerStyle?: CSSProperties;
}

export function LanguageSwitcherSelector({
  containerStyle,
}: LanguageSwitcherSelectorProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <Container style={containerStyle}>
      <img
        src={language === 'en' ? EnglishFlag : BrazilFlag}
        alt={language === 'en' ? 'English' : 'Portuguese'}
      />

      <div className="dropdown">
        <button
          type="button"
          onClick={() => {
            setLanguage(language === 'en' ? 'pt' : 'en');
          }}
        >
          <img
            src={language === 'en' ? BrazilFlag : EnglishFlag}
            alt={language === 'en' ? 'English' : 'Portuguese'}
          />
        </button>
      </div>
    </Container>
  );
}
