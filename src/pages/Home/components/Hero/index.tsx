import { ButtonGetInTouch } from '../ButtonGetInTouch';

import {
  Container,
  ColumnLeftContainer,
  ApresentationEmoji,
  Apresentation,
  ApresentationName,
  AboutTitle,
  AboutDescription,
  ColumnRightContainer,
  ProfileImage,
  ScrollToContinueImage,
} from './styles';

import ProfileImg from '../../../../assets/profile.jpg';
import ScrollToContinueImg from '../../../../assets/scrollExplorer.svg';

export function Hero() {
  return (
    <Container>
      <ColumnLeftContainer>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ApresentationEmoji>✋</ApresentationEmoji>
          <Apresentation> Hello, my name is</Apresentation>
        </div>
        <ApresentationName>Guilherme.</ApresentationName>

        <AboutTitle>Front-end, Back-end and Mobile Developer</AboutTitle>
        <AboutDescription>
          I create websites that are a pleasure to use. I&apos;m Computer
          Engineering Student at UTFPR, working with newest front-end frameworks
          like React and React Native. On back-end I&apos;m using Express and
          Socket.io. And with mobile using React Native and Android native.
        </AboutDescription>

        <ButtonGetInTouch backgroundColor="orange" />
      </ColumnLeftContainer>

      <ColumnRightContainer>
        <ProfileImage src={ProfileImg} alt="Guilherme Athayde" />
        <ScrollToContinueImage
          src={ScrollToContinueImg}
          alt="Scroll to continue"
        />
      </ColumnRightContainer>
    </Container>
  );
}
