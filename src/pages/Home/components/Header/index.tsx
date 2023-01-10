import { LanguageSwitcherSelector } from './LanguageSwitcherSelector';

import { useLanguage } from '../../../../hooks/language';
import { useWindowDimensions } from '../../../../hooks/windowDimensions';

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
  const { width } = useWindowDimensions();

  function openUrl(url: string) {
    window.open(url, '_blank');
  }

  return (
    <Container>
      {width > 425 && <Title>guiathayde.dev</Title>}

      <ColumnRightContainer>
        <LanguageSwitcherSelector containerStyle={{ marginRight: 16 }} />

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

        <DownloadCVButton>{strings.Home.Header.downloadCV}</DownloadCVButton>
      </ColumnRightContainer>
    </Container>
  );
}
