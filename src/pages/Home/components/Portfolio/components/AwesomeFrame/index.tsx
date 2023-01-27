import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import {
  Container,
  Header,
  Icon,
  Image,
  Title,
  Description,
  Link,
} from './styles';

import OpenInNewIcon from '../../../../../../assets/OpenInNew.svg';

interface AwesomeFrameProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: any[];
  title: string;
  link: string;
  description: string;
}

export function AwesomeFrame({
  images,
  title,
  link,
  description,
}: AwesomeFrameProps) {
  return (
    <Container>
      <Header>
        <Icon color="#FC605C" />
        <Icon color="#FDBC40" />
        <Icon color="#33C849" />
      </Header>

      <AwesomeSlider className="slider" style={{ height: '85%' }}>
        {images.map((image, index) => (
          <div key={index} style={{ width: '100%', height: '100%' }}>
            <Image src={image} />
          </div>
        ))}
      </AwesomeSlider>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'flex-start',
          marginLeft: 16,
          marginTop: 32,
          marginBottom: 8,
        }}
      >
        <Title>{title}</Title>
        <Link href={link} target="_blank">
          <img src={OpenInNewIcon} alt={title} />
        </Link>
      </div>

      <Description>{description}</Description>
    </Container>
  );
}
