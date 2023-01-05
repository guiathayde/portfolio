import { CSSProperties } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;

  padding: 8px 64px;
  margin: 32px 0;

  background: #fff;
`;

export const FastMarqueeStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: 60,
};

export const TechMarqueeText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 19px;
  line-height: 23px;

  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: #1d1e22;

  margin-left: 16px;
  margin-right: 16px;
`;

export const AsteriskMarqueeText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  height: 32px;
  text-align: center;
  vertical-align: middle;

  color: #ff8e5e;
`;
