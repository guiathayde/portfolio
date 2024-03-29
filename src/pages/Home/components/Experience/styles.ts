import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  width: 100%;

  padding: 32px 128px;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;

    padding: 32px 16px;
  }
`;

export const ContentContainer = styled.div``;

export const ContentTitle = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;

  color: #ffffff;

  margin-bottom: 32px;

  @media (max-width: 425px) {
    max-width: 393px;
  }
`;
