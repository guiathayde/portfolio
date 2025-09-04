import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 32px;
  background-color: #1d1e22;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  background: linear-gradient(135deg, #19191d 0%, #2a2a2f 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  text-align: center;
`;

export const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #67f5b1 0%, #33c849 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  &::after {
    content: '✓';
    font-size: 40px;
    font-weight: bold;
    color: white;
  }
`;

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 34px;
  color: #ffffff;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
`;

export const CodeContainer = styled.div`
  background: rgba(255, 142, 94, 0.1);
  border: 2px solid #ff8e5e;
  border-radius: 12px;
  padding: 20px;
  margin: 16px 0;
  width: 100%;
`;

export const CodeLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ff8e5e;
  display: block;
  margin-bottom: 8px;
`;

export const Code = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  letter-spacing: 0.1em;
`;

export const Instructions = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 24px;
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: #ff8e5e;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorMessage = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #fc605c;
  margin-top: 16px;
`;
