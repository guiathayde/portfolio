import { useLanguage } from '../../../../hooks/language';
import { Container, MadeBy } from './styles';

export function Footer() {
  const { strings } = useLanguage();

  return (
    <Container>
      <MadeBy>{strings.Home.Footer.madeWith}</MadeBy>
    </Container>
  );
}
