import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Hero />

      <Marquee />

      <About />
    </Container>
  );
}
