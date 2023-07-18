'use client';

import Image from 'next/image';

import { useLanguage } from '../../hooks/language';
import { useWindowDimensions } from '../../hooks/windowDimensions';

import { Heading } from './Heading';
import { SocialMediaButton } from './SocialMediaButton';
import { Tech } from './Tech';

import GitHubIcon from '../../assets/GitHubIcon.svg';
import TwitterIcon from '../../assets/TwitterIcon.svg';
import InstagramIcon from '../../assets/InstagramIcon.svg';
import DeskImg from '../../assets/Desk.png';

export function About() {
  const { strings } = useLanguage();
  const { width } = useWindowDimensions();

  return (
    <div className="flex flex-row justify-between items-center w-full py-8 px-32 max-sm:flex-col max-sm:justify-center max-sm:px-4">
      <div className="flex flex-col items-start max-w-md">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Heading color="#FF8E5E">{strings.Home.About.about + ' '}</Heading>
          <Heading>{strings.Home.About.me}</Heading>
        </div>

        <p className="not-italic font-normal text-sm leading-6 text-white mt-4 mb-4">
          {strings.Home.About.description}
        </p>

        <div className="flex flex-row items-center">
          <SocialMediaButton
            iconSrc={GitHubIcon}
            alt="GitHub"
            href="https://github.com/guiathayde/"
            target="_blank"
          />
          <SocialMediaButton
            iconSrc={TwitterIcon}
            alt="Twitter"
            href="https://twitter.com/GuiAthayde_"
            target="_blank"
          />
          <SocialMediaButton
            iconSrc={InstagramIcon}
            alt="Instagram"
            href="https://www.instagram.com/guiathayde_/"
            target="_blank"
          />
        </div>

        <h4 className="not-italic font-bold text-sm leading-6 text-white mt-6 mb-4">
          {strings.Home.About.techsWorkedRecently}
        </h4>

        <div className="grid grid-cols-3 gap-4">
          <Tech text="React" />
          <Tech text="React Native" />
          <Tech text="Express" />
          <Tech text="PostgreSQL" />
          <Tech text="TypeScript" />
          <Tech text="Figma" />
        </div>
      </div>

      {width >= 640 && (
        <div className="relative">
          <Image
            className="rounded-[40px] object-cover"
            src={DeskImg}
            width={565}
            height={387}
            alt="Desktop Illustration"
          />
        </div>
      )}
    </div>
  );
}
