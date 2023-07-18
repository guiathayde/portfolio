'use client';

import Image from 'next/image';

import { ButtonGetInTouch } from '../ButtonGetInTouch';

import { useLanguage } from '../../hooks/language';
import { useWindowDimensions } from '../../hooks/windowDimensions';

import ProfileImg from '../../assets/profile.jpg';
import ScrollToContinueImg from '../../assets/scrollExplorer.svg';

export function Hero() {
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
      px-32 
      py-8
      max-sm:flex-col
      max-sm:justify-center
      max-sm:px-4
    "
    >
      <div className="flex flex-col items-start max-w-[480px]">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <span className="not-italic font-bold text-lg leading-7 mr-2">
            ✋{' '}
          </span>
          <span className="not-italic font-bold text-lg leading-7 text-[rgba(255,255,255,0.5)]">
            {strings.Home.Hero.apresentation}
          </span>
        </div>
        <span className="not-italic font-extrabold text-5xl leading-extra-loose text-white">
          Guilherme.
        </span>

        <p className="not-italic font-extrabold text-5xl leading-extra-loose text-orange-300 mt-4">
          Front-end, Back-end and Mobile Developer
        </p>
        <p className="not-italic font-bold text-sm leading-6 text-white my-4">
          {strings.Home.Hero.about}
        </p>

        <ButtonGetInTouch
          backgroundColor="orange"
          style={{
            alignSelf: width > 425 ? 'flex-start' : 'center',
          }}
        />
      </div>

      {width > 425 && (
        <div className="relative">
          <Image
            className="w-[535px] h-[534px] object-cover rounded-[30px]"
            src={ProfileImg}
            alt="Guilherme Athayde"
          />
          <Image
            className="absolute w-[100px] h-[100px] right-[466px] top-[459px]"
            src={ScrollToContinueImg}
            alt="Scroll to continue"
          />
        </div>
      )}
    </div>
  );
}
