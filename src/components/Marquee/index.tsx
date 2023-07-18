'use client';

import FastMarquee from 'react-fast-marquee';

import { useWindowDimensions } from '../../hooks/windowDimensions';

import { TechMarquee } from './TechMarquee';

import { FastMarqueeStyles } from './styles';

export function Marquee() {
  const { width } = useWindowDimensions();

  return (
    <div className="flex flex-row justify-between items-center w-full h-[60px] bg-white mx-0 my-8 px-16 py-2">
      <FastMarquee
        style={FastMarqueeStyles}
        speed={60}
        gradientWidth={width > 425 ? 200 : 32}
        pauseOnHover
        pauseOnClick
      >
        <TechMarquee techName="HTML 5" />
        <TechMarquee techName="CSS" />
        <TechMarquee techName="JAVASCRIPT" />
        <TechMarquee techName="REACT" />
        <TechMarquee techName="REACT NATIVE" />
        <TechMarquee techName="EXPRESS" />
        <TechMarquee techName="TYPESCRIPT" />
        <TechMarquee techName="POSTGRESQL" />
      </FastMarquee>
    </div>
  );
}
