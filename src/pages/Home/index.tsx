import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Expirience } from './components/Experience';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Hero />

      <Marquee />

      <About />

      <Expirience />

      <Skills />

      <Portfolio />

      <Contact />

      <Footer />
    </Container>
  );
}
