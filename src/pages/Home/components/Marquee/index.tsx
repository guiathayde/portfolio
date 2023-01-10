import FastMarquee from 'react-fast-marquee';

import { useWindowDimensions } from '../../../../hooks/windowDimensions';

import {
  Container,
  FastMarqueeStyles,
  TechMarqueeText,
  AsteriskMarqueeText,
} from './styles';

export function Marquee() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <FastMarquee
        style={FastMarqueeStyles}
        speed={60}
        gradientWidth={width > 425 ? 200 : 32}
        pauseOnHover
        pauseOnClick
      >
        <TechMarqueeText>HTML 5</TechMarqueeText>
        <AsteriskMarqueeText>*</AsteriskMarqueeText>
        <TechMarqueeText>CSS</TechMarqueeText>
        <AsteriskMarqueeText>*</AsteriskMarqueeText>
        <TechMarqueeText>JAVASCRIPT</TechMarqueeText>
        <AsteriskMarqueeText>*</AsteriskMarqueeText>
        <TechMarqueeText>REACT</TechMarqueeText>
        <AsteriskMarqueeText>*</AsteriskMarqueeText>
        <TechMarqueeText>REACT NATIVE</TechMarqueeText>
        <AsteriskMarqueeText>*</AsteriskMarqueeText>
        <TechMarqueeText>EXPRESS</TechMarqueeText>
        <AsteriskMarqueeText>*</AsteriskMarqueeText>
        <TechMarqueeText>TYPESCRIPT</TechMarqueeText>
        <AsteriskMarqueeText>*</AsteriskMarqueeText>
        <TechMarqueeText>POSTGRESQL</TechMarqueeText>
      </FastMarquee>
    </Container>
  );
}
