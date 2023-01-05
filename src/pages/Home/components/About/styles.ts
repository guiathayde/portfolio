import styled from 'styled-components';

interface HeadingProps {
  color?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 32px 128px;
`;

export const ColumnLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 480px;
`;

export const Heading = styled.span<HeadingProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 54px;

  color: ${props => props.color ?? '#ffffff'};
`;

export const Description = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  text-transform: lowercase;

  color: #ffffff;

  margin-top: 16px;
  margin-bottom: 16px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SocialMediaButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;

  background-color: transparent;

  margin: 4px;

  border: none;
`;

export const SocialMediaIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const TechsWorkedRecentlyText = styled.h4`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  text-transform: capitalize;

  color: #ffffff;

  margin-top: 24px;
  margin-bottom: 16px;
`;

export const TechsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;

  color: #ffffff;
`;

export const TechDot = styled.img`
  width: 18px;
  height: 11px;
`;

export const ColumnRightContainer = styled.div`
  position: relative;
`;

export const DeskImage = styled.img`
  width: 565px;
  height: 387px;
  border-radius: 40px;

  object-fit: cover;
`;
