import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Container,
  Card,
  SuccessIcon,
  Title,
  Description,
  CodeContainer,
  CodeLabel,
  Code,
  Instructions,
  LoadingSpinner,
  ErrorMessage,
} from './styles';

export function OAuthCallback() {
  const [authCode, setAuthCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const errorParam = urlParams.get('error');

    if (errorParam) {
      setError('Erro na autorização. Tente novamente.');
      setIsLoading(false);
      return;
    }

    if (code) {
      // Gerar um código de 4 dígitos baseado no hash do código OAuth
      const hash = code.split('').reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }, 0);

      const shortCode = Math.abs(hash).toString().slice(-4).padStart(4, '0');
      setAuthCode(shortCode);

      // Aqui você pode enviar o código OAuth original para seu backend
      // para processar e associar ao código curto
      // sendCodeToBackend(code, shortCode);
    } else {
      setError('Código de autorização não encontrado.');
    }

    setIsLoading(false);
  }, [location]);

  if (isLoading) {
    return (
      <Container>
        <Card>
          <LoadingSpinner />
          <Title>Processando autorização...</Title>
          <Description>
            Aguarde um momento enquanto validamos suas credenciais.
          </Description>
        </Card>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Card>
          <Title>Ops! Algo deu errado</Title>
          <ErrorMessage>{error}</ErrorMessage>
          <Instructions>
            Feche esta aba e tente novamente no Telegram.
          </Instructions>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <SuccessIcon />
        <Title>Login bem sucedido!</Title>
        <Description>
          Sua autorização foi processada com sucesso. Use o código abaixo no
          Telegram.
        </Description>

        <CodeContainer>
          <CodeLabel>SEU CÓDIGO:</CodeLabel>
          <Code>{authCode}</Code>
        </CodeContainer>

        <Instructions>
          Volte ao bot do Telegram e digite o código acima para completar a
          autenticação. Esta aba pode ser fechada.
        </Instructions>
      </Card>
    </Container>
  );
}
