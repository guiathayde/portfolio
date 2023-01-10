import { ButtonGetInTouch } from '../ButtonGetInTouch';

import { useLanguage } from '../../../../hooks/language';
import { useWindowDimensions } from '../../../../hooks/windowDimensions';

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
  const { strings } = useLanguage();
  const { width } = useWindowDimensions();

  return (
    <Container>
      <ColumnLeftContainer>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ApresentationEmoji>✋ </ApresentationEmoji>
          <Apresentation>{strings.Home.Hero.apresentation}</Apresentation>
        </div>
        <ApresentationName>Guilherme.</ApresentationName>

        <AboutTitle>Front-end, Back-end and Mobile Developer</AboutTitle>
        <AboutDescription>{strings.Home.Hero.about}</AboutDescription>

        <ButtonGetInTouch
          backgroundColor="orange"
          style={{
            alignSelf: width > 425 ? 'flex-start' : 'center',
          }}
        />
      </ColumnLeftContainer>

      {width > 425 && (
        <ColumnRightContainer>
          <ProfileImage src={ProfileImg} alt="Guilherme Athayde" />
          <ScrollToContinueImage
            src={ScrollToContinueImg}
            alt="Scroll to continue"
          />
        </ColumnRightContainer>
      )}
    </Container>
  );
}
