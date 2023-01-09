import { useLanguage } from '../../../../hooks/language';

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
  const { strings } = useLanguage();

  function openUrl(url: string) {
    window.open(url, '_blank');
  }

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
            {strings.Home.About.about + ' '}
          </Heading>
          <Heading>{strings.Home.About.me}</Heading>
        </div>

        <Description>{strings.Home.About.description}</Description>

        <SocialMediaContainer>
          <SocialMediaButton
            onClick={() => openUrl('https://github.com/guiathayde')}
          >
            <SocialMediaIcon src={GitHubIcon} />
          </SocialMediaButton>
          <SocialMediaButton
            onClick={() => openUrl('https://twitter.com/GuiAthayde_')}
          >
            <SocialMediaIcon src={TwitterIcon} />
          </SocialMediaButton>
          <SocialMediaButton
            onClick={() => openUrl('https://www.instagram.com/guiathayde_/')}
          >
            <SocialMediaIcon src={InstagramIcon} />
          </SocialMediaButton>
        </SocialMediaContainer>

        <TechsWorkedRecentlyText>
          {strings.Home.About.techsWorkedRecently}
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
