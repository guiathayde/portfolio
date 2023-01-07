import { LanguageSwitcherSelector } from './LanguageSwitcherSelector';

import { useLanguage } from '../../../../hooks/language';

import {
  Container,
  Title,
  ColumnRightContainer,
  SocialMediaButton,
  SocialMediaIcon,
  DownloadCVButton,
} from './styles';

import GitHubIcon from '../../../../assets/GitHubIcon.svg';
import TwitterIcon from '../../../../assets/TwitterIcon.svg';
import InstagramIcon from '../../../../assets/InstagramIcon.svg';

export function Header() {
  const { strings } = useLanguage();

  return (
    <Container>
      <Title>guiathayde.dev</Title>

      <ColumnRightContainer>
        <LanguageSwitcherSelector containerStyle={{ marginRight: 16 }} />

        <SocialMediaButton>
          <SocialMediaIcon src={GitHubIcon} />
        </SocialMediaButton>
        <SocialMediaButton>
          <SocialMediaIcon src={TwitterIcon} />
        </SocialMediaButton>
        <SocialMediaButton>
          <SocialMediaIcon src={InstagramIcon} />
        </SocialMediaButton>

        <DownloadCVButton>{strings.Home.Header.downloadCV}</DownloadCVButton>
      </ColumnRightContainer>
    </Container>
  );
}
