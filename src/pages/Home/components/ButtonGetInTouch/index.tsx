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
  const { strings } = useLanguage();

  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      <ButtonText>{strings.Home.getInTouch}</ButtonText>
    </Container>
  );
}
