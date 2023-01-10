import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 32px 128px;

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;

    padding: 32px 16px;
  }
`;

export const ColumnLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 480px;
`;

export const ApresentationEmoji = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;

  margin-right: 8px;
`;

export const Apresentation = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  color: rgba(255, 255, 255, 0.5);
`;

export const ApresentationName = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  color: #ffffff;
`;

export const AboutTitle = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 53px;
  color: #ff8e5e;

  margin-top: 16px;
`;

export const AboutDescription = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;

  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ColumnRightContainer = styled.div`
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 535px;
  height: 534px;
  border-radius: 30px;

  object-fit: cover;
`;

export const ScrollToContinueImage = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  right: 466px;
  top: 459px;
`;
