import { ButtonHTMLAttributes } from 'react';
import { Container, ButtonText } from './styles';

interface ButtonGetInTouchProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: 'orange' | 'white';
}

export function ButtonGetInTouch({
  backgroundColor,
  ...rest
}: ButtonGetInTouchProps) {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      <ButtonText>Get in touch</ButtonText>
    </Container>
  );
}
