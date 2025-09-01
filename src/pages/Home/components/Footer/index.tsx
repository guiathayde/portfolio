import { useLanguage } from '../../../../hooks/language';
import { Container, MadeBy } from './styles';

export function Footer() {
  const { strings } = useLanguage();

  return (
    <Container>
      <MadeBy>{strings.Home.Footer.madeWith}</MadeBy>

      <a href="/privacy-policy">{strings.Home.Footer.privacyPolicy}</a>
      <a href="/terms-and-conditions">
        {strings.Home.Footer.termsAndConditions}
      </a>
    </Container>
  );
}
