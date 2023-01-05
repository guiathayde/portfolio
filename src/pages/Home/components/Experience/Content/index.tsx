import { Container, Title, Description, Duration } from './styles';

interface ContentProps {
  title: string;
  description: string;
  duration: string;
}

export function Content({ title, description, duration }: ContentProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Description>{description}</Description>
        <Duration>{duration}</Duration>
      </div>
    </Container>
  );
}
