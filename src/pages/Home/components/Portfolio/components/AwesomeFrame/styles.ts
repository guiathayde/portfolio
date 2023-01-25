import styled from 'styled-components';

interface IconProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 8px solid #dfdfdf;
  border-top: 0px;
  background: #ffffff;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.15);

  .slider {
    --slider-transition-duration: 0.1s;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  padding-left: 4px;

  width: 100%;
  height: 24px;

  background: #dfdfdf;
`;

export const Icon = styled.div<IconProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-inline: 2.5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-family: 'Inter';
  font-weight: 600;
  color: black;
  margin-right: 16px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Description = styled.p`
  font-family: 'Inter';
  color: black;

  align-self: flex-start;
  margin-left: 16px;
  margin-bottom: 16px;
`;
