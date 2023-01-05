import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: 'orange' | 'white';
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 32px;
  gap: 10px;

  border: none;

  width: 215px;
  height: 59px;

  background: ${props =>
    props.backgroundColor === 'orange' ? '#FF8E5E' : '#ffffff'};
  border-radius: 60px;
`;

export const ButtonText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #1d1e22;
`;
