'use client';

import { useLanguage } from '../../hooks/language';
import { useWindowDimensions } from '../../hooks/windowDimensions';

import { LanguageSwitcherSelector } from './LanguageSwitcherSelector';
import { SocialMediaButton } from './SocialMediaButton';

import GitHubIcon from '../../assets/GitHubIcon.svg';
import TwitterIcon from '../../assets/TwitterIcon.svg';
import InstagramIcon from '../../assets/InstagramIcon.svg';

export function Header() {
  const { strings } = useLanguage();
  const { width } = useWindowDimensions();

  return (
    <div
      className="
        flex 
        flex-row 
        justify-between 
        items-center 
        w-full 
        px-16 
        py-8 
        rounded
        border-b-[rgba(255,255,255,0.02)] 
        border-solid
        max-sm:justify-center
        max-sm:px-4
      "
    >
      {width > 425 && (
        <h2 className="not-italic font-extrabold text-2xl leading-7 text-white">
          guiathayde.dev
        </h2>
      )}

      <div className="flex flex-row items-center">
        <LanguageSwitcherSelector containerStyle={{ marginRight: 16 }} />

        <SocialMediaButton
          icon={GitHubIcon}
          alt="GitHub"
          href="https://github.com/guiathayde"
          target="_blank"
        />
        <SocialMediaButton
          icon={TwitterIcon}
          alt="Twitter"
          href="https://twitter.com/GuiAthayde_"
          target="_blank"
        />
        <SocialMediaButton
          icon={InstagramIcon}
          alt="Instagram"
          href="https://www.instagram.com/guiathayde_/"
          target="_blank"
        />

        <a
          className="
            flex 
            flex-row 
            justify-center 
            items-center 
            gap-2.5 
            w-48 
            h-[51px] 
            bg-transparent 
            border 
            not-italic 
            font-bold 
            text-base 
            leading-5 
            no-underline 
            text-white 
            ml-6 
            px-10 
            py-4 
            rounded-[60px] 
            border-solid 
            border-white
            max-sm:text-sm
          "
          href="CV.pdf"
          target="_blank"
          download
        >
          {strings.Home.Header.downloadCV}
        </a>
      </div>
    </div>
  );
}
