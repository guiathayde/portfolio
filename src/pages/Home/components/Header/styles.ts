import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 32px 64px;

  border-bottom: 3px solid rgba(255, 255, 255, 0.02);
`;

export const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

export const ColumnRightContainer = styled.div`
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

export const DownloadCVButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  margin-left: 24px;
  gap: 10px;

  width: 192px;
  height: 51px;

  background-color: transparent;

  border: 1px solid #ffffff;
  border-radius: 60px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;
