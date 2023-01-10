import { useWindowDimensions } from '../../../../../hooks/windowDimensions';

import { Container, Title, Description, Duration } from './styles';

interface ContentProps {
  title: string;
  description: string;
  duration: string;
}

export function Content({ title, description, duration }: ContentProps) {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Title>{title}</Title>
      <div
        style={{
          display: 'flex',
          flexDirection: width > 425 ? 'row' : 'column',
          justifyContent: 'space-between',
        }}
      >
        <Description>{description}</Description>
        <Duration>{duration}</Duration>
      </div>
    </Container>
  );
}
