import { useLanguage } from '../../../../hooks/language';

import {
  Container,
  Content,
  Title,
  SkillsList,
  SkillItem,
  SkillContent,
} from './styles';

export function Skills() {
  const { strings } = useLanguage();

  return (
    <Container>
      <Content>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Title style={{ marginRight: 8 }}>{strings.Home.Skills.my}</Title>
          <Title color="#FE8E5E">{strings.Home.Skills.skills}</Title>
        </div>
        <SkillsList>
          <SkillItem rectangleColor="#1669B4">
            <div className="rectangle"></div>

            <SkillContent>
              <h4>{strings.Home.Skills.whatCanIDoForYou}</h4>
              <p>{strings.Home.Skills.description1}</p>
            </SkillContent>
          </SkillItem>
          <SkillItem rectangleColor="#67F5B1">
            <div className="rectangle"></div>

            <SkillContent>
              <h4>{strings.Home.Skills.applicationsIAmFluentIn}</h4>
              <p>{strings.Home.Skills.description2}</p>
            </SkillContent>
          </SkillItem>
          <SkillItem rectangleColor="#FD97CE">
            <div className="rectangle"></div>

            <SkillContent>
              <h4>{strings.Home.Skills.whatCanYouExpect}</h4>
              <p>{strings.Home.Skills.description3}</p>
            </SkillContent>
          </SkillItem>
        </SkillsList>
      </Content>
    </Container>
  );
}
