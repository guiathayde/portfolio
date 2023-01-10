import styled from 'styled-components';

interface TitleProps {
  color?: string;
}

interface SkillItemProps {
  rectangleColor?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 122px;
  gap: 10px;

  width: 100%;

  background: #19191d;

  @media (max-width: 425px) {
    padding: 60px 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 31px;

  width: 100%;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  word-wrap: break-word;
  overflow: hidden;
  white-space: initial;

  @media (max-width: 425px) {
    max-width: 393px;
  }
`;

export const Title = styled.span<TitleProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 54px;

  color: ${props => props.color ?? '#ffffff'};

  @media (max-width: 425px) {
    font-size: 40px;
  }
`;

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  width: 100%;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillItem = styled.div<SkillItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;

  .rectangle {
    width: 10px;
    height: 222px;

    background: ${props => props.rectangleColor ?? '#ffffff'};
    border-radius: 30px;
  }
`;

export const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  h4 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #ffffff;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
  }
`;
