import {
  Container,
  Title,
  ColumnRightContainer,
  SocialMediaButton,
  SocialMediaIcon,
  DownloadCVButton,
} from './styles';

import GitHubIcon from '../../assets/GitHubIcon.svg';
import TwitterIcon from '../../assets/TwitterIcon.svg';
import InstagramIcon from '../../assets/InstagramIcon.svg';

export function Header() {
  return (
    <Container>
      <Title>guiathayde.dev</Title>

      <ColumnRightContainer>
        <SocialMediaButton>
          <SocialMediaIcon src={GitHubIcon} />
        </SocialMediaButton>
        <SocialMediaButton>
          <SocialMediaIcon src={TwitterIcon} />
        </SocialMediaButton>
        <SocialMediaButton>
          <SocialMediaIcon src={InstagramIcon} />
        </SocialMediaButton>

        <DownloadCVButton>Download CV</DownloadCVButton>
      </ColumnRightContainer>
    </Container>
  );
}
