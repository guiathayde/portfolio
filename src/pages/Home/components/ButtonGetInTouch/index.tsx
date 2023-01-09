import { ButtonHTMLAttributes } from 'react';

import { useLanguage } from '../../../../hooks/language';

import { Container, ButtonText } from './styles';

interface ButtonGetInTouchProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: 'orange' | 'white';
}

export function ButtonGetInTouch({
  backgroundColor,
  ...rest
}: ButtonGetInTouchProps) {
  const { language, strings } = useLanguage();

  function handleGetInTouch(language: string) {
    let text =
      'Hello,%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20work';

    if (language === 'pt')
      text =
        'Olá,%20acessei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho';

    const link = `https://wa.me/5516991635766?text=${text}`;

    window.open(link, '_blank');
  }

  return (
    <Container
      backgroundColor={backgroundColor}
      onClick={() => handleGetInTouch(language)}
      {...rest}
    >
      <ButtonText>{strings.Home.getInTouch}</ButtonText>
    </Container>
  );
}
