import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 24px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  margin-top: 32px;

  @media (max-width: 425px) {
    max-width: 393px;
  }
`;

export const Title = styled.h4`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  color: #ffffff;

  margin-bottom: 8px;

  @media (max-width: 425px) {
    word-wrap: break-word;
    overflow: hidden;
  }
`;

export const Description = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;

  max-width: 70%;
  word-wrap: break-word;
  overflow: hidden;

  @media (max-width: 425px) {
    max-width: 393px;
  }
`;

export const Duration = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;

  margin-right: 24px;
`;
