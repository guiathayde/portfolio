import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #19191d;

  padding: 100px 0;

  @media (max-width: 425px) {
    padding: 100px 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h6`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 52px;
  line-height: 53px;
  text-align: center;
  color: #ff8e5e;

  @media (max-width: 425px) {
    font-size: 32px;
  }
`;
