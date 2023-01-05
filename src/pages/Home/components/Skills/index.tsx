import {
  Container,
  Content,
  Title,
  SkillsList,
  SkillItem,
  SkillContent,
} from './styles';

export function Skills() {
  return (
    <Container>
      <Content>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Title style={{ marginRight: 8 }}>My</Title>
          <Title color="#FE8E5E">Skills</Title>
        </div>
        <SkillsList>
          <SkillItem rectangleColor="#1669B4">
            <div className="rectangle"></div>

            <SkillContent>
              <h4>What can I do for you</h4>
              <p>
                I believe that great applications should be intuitive and
                user-friendly for everyone. It&apos;s my job to ensure that your
                audience can easily interact with your app in a way that makes
                sense for them, wherever they are.
              </p>
            </SkillContent>
          </SkillItem>
          <SkillItem rectangleColor="#67F5B1">
            <div className="rectangle"></div>

            <SkillContent>
              <h4>Applications I am fluent in</h4>
              <p>
                Developing interactive websites, mobile apps and back-end
                services, mostly frameworks with JavaScript. Very experienced
                with React, React Native and Express.
              </p>
            </SkillContent>
          </SkillItem>
          <SkillItem rectangleColor="#FD97CE">
            <div className="rectangle"></div>

            <SkillContent>
              <h4>What can you expect</h4>
              <p>
                You can expect me to deliver high-quality work on time and
                within budget. You can also expect me to be honest with you
                about your project&apos;s needs, so that we can come up with an
                approach that works best for both of us.
              </p>
            </SkillContent>
          </SkillItem>
        </SkillsList>
      </Content>
    </Container>
  );
}
