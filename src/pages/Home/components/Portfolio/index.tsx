import { useLanguage } from '../../../../hooks/language';

import {
  Container,
  Heading,
  Title,
  PortfolioContainer,
  PortfolioItem,
  PortfolioItemImg,
} from './styles';

export function Portfolio() {
  const { strings } = useLanguage();

  return (
    <Container>
      <Heading>
        <Title>{strings.Home.Portfolio.iCreateJobs}</Title>
        <Title color="#FF8E5E">
          {strings.Home.Portfolio.thatEnchantPeople}
        </Title>
      </Heading>

      <PortfolioContainer>
        <PortfolioItem>
          <PortfolioItemImg src="https://source.unsplash.com/random" />
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioItemImg src="https://source.unsplash.com/random" />
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioItemImg src="https://source.unsplash.com/random" />
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioItemImg src="https://source.unsplash.com/random" />
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioItemImg src="https://source.unsplash.com/random" />
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioItemImg src="https://source.unsplash.com/random" />
        </PortfolioItem>
      </PortfolioContainer>
    </Container>
  );
}
