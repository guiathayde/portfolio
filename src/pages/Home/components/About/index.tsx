import {
  Container,
  ColumnLeftContainer,
  Heading,
  Description,
  SocialMediaContainer,
  SocialMediaButton,
  SocialMediaIcon,
  TechsWorkedRecentlyText,
  TechsContainer,
  Tech,
  TechDot,
  ColumnRightContainer,
  DeskImage,
} from './styles';

import GitHubIcon from '../../../../assets/GitHubIcon.svg';
import TwitterIcon from '../../../../assets/TwitterIcon.svg';
import InstagramIcon from '../../../../assets/InstagramIcon.svg';
import TechDotImg from '../../../../assets/TechDot.svg';
import DeskImg from '../../../../assets/Desk.png';

export function About() {
  return (
    <Container>
      <ColumnLeftContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Heading color="#FF8E5E" style={{ marginRight: 12 }}>
            About{' '}
          </Heading>
          <Heading>me</Heading>
        </div>

        <Description>
          A creative professional with a strong portfolio in websites and
          mobiles app, including experience with front-end development.
          Experienced working from concept to production, and with stakeholders
          from multiple disciplines. A fluent user of popular design tool, the
          Figma and developing with frameworks like React.
        </Description>

        <SocialMediaContainer>
          <SocialMediaButton>
            <SocialMediaIcon src={GitHubIcon} />
          </SocialMediaButton>
          <SocialMediaButton>
            <SocialMediaIcon src={TwitterIcon} />
          </SocialMediaButton>
          <SocialMediaButton>
            <SocialMediaIcon src={InstagramIcon} />
          </SocialMediaButton>
        </SocialMediaContainer>

        <TechsWorkedRecentlyText>
          Here are a few technologies I&apos;ve been working with recently:
        </TechsWorkedRecentlyText>

        <TechsContainer>
          <Tech>
            <TechDot src={TechDotImg} />
            React
          </Tech>
          <Tech>
            <TechDot src={TechDotImg} />
            React Native
          </Tech>
          <Tech>
            <TechDot src={TechDotImg} />
            Express
          </Tech>
          <Tech>
            <TechDot src={TechDotImg} />
            PostgreSQL
          </Tech>
          <Tech>
            <TechDot src={TechDotImg} />
            TypeScript
          </Tech>
          <Tech>
            <TechDot src={TechDotImg} />
            Figma
          </Tech>
        </TechsContainer>
      </ColumnLeftContainer>

      <ColumnRightContainer>
        <DeskImage src={DeskImg} />
      </ColumnRightContainer>
    </Container>
  );
}
