import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

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
  const [copied, setCopied] = useState(false);
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
      setAuthCode(code);

      // Aqui você pode enviar o código OAuth original para seu backend
      // para processar e associar ao código curto
      // sendCodeToBackend(code, shortCode);
    } else {
      setError('Código de autorização não encontrado.');
    }

    setIsLoading(false);
  }, [location]);

  const handleCopy = useCallback(() => {
    if (!authCode) return;
    const copyText = authCode;
    const done = () => {
      setCopied(true);

      toast.info('Código copiado!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });

      setTimeout(() => setCopied(false), 2000);
    };
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(copyText)
        .then(done)
        .catch(() => {
          // fallback
          try {
            const textarea = document.createElement('textarea');
            textarea.value = copyText;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            done();
          } catch (_) {
            /* ignore */
          }
        });
    } else {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = copyText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        done();
      } catch (_) {
        /* ignore */
      }
    }
  }, [authCode]);

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
          <Code
            role="button"
            tabIndex={0}
            title={copied ? 'Copiado!' : 'Clique para copiar'}
            onClick={handleCopy}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCopy();
              }
            }}
            style={{
              cursor: authCode ? 'pointer' : 'default',
              userSelect: 'all',
            }}
          >
            {authCode}
          </Code>
          {copied && (
            <span style={{ marginLeft: 8, fontSize: 12, color: '#4caf50' }}>
              Copiado!
            </span>
          )}
        </CodeContainer>

        <Instructions>
          Volte ao bot do Telegram e digite o código acima para completar a
          autenticação. Esta aba pode ser fechada.
        </Instructions>
      </Card>
    </Container>
  );
}
