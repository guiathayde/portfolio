import { useLanguage } from '../../../../hooks/language';

import { ButtonGetInTouch } from '../ButtonGetInTouch';

import { Container, Content, Title } from './styles';

export function Contact() {
  const { strings } = useLanguage();

  return (
    <Container>
      <Content>
        <Title>{strings.Home.Contact.letsBuildYour}</Title>
        <Title>{strings.Home.Contact.projectTogether}</Title>

        <ButtonGetInTouch backgroundColor="white" style={{ marginTop: 24 }} />
      </Content>
    </Container>
  );
}
