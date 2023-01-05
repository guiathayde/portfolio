import FastMarquee from 'react-fast-marquee';

import {
  Container,
  FastMarqueeStyles,
  TechMarqueeText,
  AsteriskMarqueeText,
} from './styles';

export function Marquee() {
  return (
    <Container>
      <FastMarquee style={FastMarqueeStyles}>
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
