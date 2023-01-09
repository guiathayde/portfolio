import { useLanguage } from '../../../../hooks/language';

import { Content } from './Content';

import { Container, ContentContainer, ContentTitle } from './styles';

export function Expirience() {
  const { strings } = useLanguage();

  return (
    <Container>
      <ContentContainer>
        <ContentTitle>🎓 {strings.Home.Experience.education}</ContentTitle>
        <Content
          title="Universidade Tecnológica Federal do Paraná"
          description="Bacharelado: Engenharia da Computação"
          duration={`01/2021 - ${strings.Home.Experience.currently}`}
        />
        <Content
          title="Python"
          description="http://apl.utfpr.edu.br/extensao/emitir/6A224D167164FB508DFA645A8B773756"
          duration="06/2020 - 12/2020"
        />
        <Content
          title="Bootcamp GoStack no ecossistema de tecnologias NodeJS, ReactJS e React Native"
          description="https://app.rocketseat.com.br/api/certificates/pdf/3d090152-
          ef80-4c8c-b2f4-907c572bd1d8"
          duration="01/2021 - 06/2021"
        />
      </ContentContainer>

      <ContentContainer>
        <ContentTitle>💼 {strings.Home.Experience.professional}</ContentTitle>
        <Content
          title="nós - Nosso Olhar Solidário (UTFPR)"
          description="Full Stack Developer"
          duration={`08/2020 - ${strings.Home.Experience.currently}`}
        />
        <Content
          title="Ubivis"
          description="Android and Front-end Developer"
          duration={`09/2021 - ${strings.Home.Experience.currently}`}
        />
        <Content
          title="Amigos dos Jardinetes (UTFPR)"
          description="Full Stack Developer"
          duration="06/2022 - 12/2022"
        />
      </ContentContainer>
    </Container>
  );
}
