import {
  Container,
  Heading,
  Title,
  PortfolioContainer,
  PortfolioItem,
  PortfolioItemImg,
} from './styles';

export function Portfolio() {
  return (
    <Container>
      <Heading>
        <Title>I create jobs</Title>
        <Title color="#FF8E5E">that enchant people</Title>
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
