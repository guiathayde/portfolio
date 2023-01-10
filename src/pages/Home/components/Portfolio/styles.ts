import styled from 'styled-components';

interface TitleProps {
  color?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 47px;

  width: 100%;

  padding: 32px 128px;

  @media (max-width: 425px) {
    padding: 32px 16px;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Title = styled.h2<TitleProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 52px;
  line-height: 53px;
  text-align: center;
  color: ${({ color }) => color ?? 'white'};

  @media (max-width: 425px) {
    font-size: 44px;
  }
`;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const PortfolioItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 345px;
  height: 345px;
`;

export const PortfolioItemImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 20px;
  filter: opacity(50%);
`;
