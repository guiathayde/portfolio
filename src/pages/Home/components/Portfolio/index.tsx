import { useMemo, useState } from 'react';
import Modal from 'react-modal';

import { useLanguage } from '../../../../hooks/language';

import { AwesomeFrame } from './components/AwesomeFrame';

import {
  Container,
  Heading,
  Title,
  PortfolioContainer,
  PortfolioItem,
  PortfolioItemImg,
} from './styles';

export function Portfolio() {
  const { strings } = useLanguage();

  const [isPortfolioDetailVisible, setIsPortfolioDetailVisible] =
    useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(0);

  const portfolioItems = useMemo(
    () => [
      {
        id: 1,
        title: 'GoBarber Mobile App',
        link: 'https://github.com/guiathayde/App-GoBarber',
        description:
          'Mobile application to schedule haircut and the hairdresser controls your schedule through the application.',
        images: [
          require('../../../../assets/portfolio/gobarber-app/SignIn.png'),
          require('../../../../assets/portfolio/gobarber-app/SignUp.png'),
          require('../../../../assets/portfolio/gobarber-app/List.png'),
          require('../../../../assets/portfolio/gobarber-app/Schedule.png'),
          require('../../../../assets/portfolio/gobarber-app/Profile.png'),
        ],
      },
      {
        id: 2,
        title: 'GoBarber Server',
        link: 'https://github.com/guiathayde/GoBarber-Server',
        description:
          'REST API of the GoBarber application. Fully scalable and ready to deploy.',
        images: [
          require('../../../../assets/portfolio/gobarber-server/Code.png'),
        ],
      },
      {
        id: 3,
        title: 'GoBarber Web',
        link: 'https://github.com/guiathayde/gobarber-web',
        description:
          'Website made with ReactJS for hairdressers and their clients.',
        images: [
          require('../../../../assets/portfolio/gobarber-web/Dashboard.png'),
          require('../../../../assets/portfolio/gobarber-web/Logon.png'),
          require('../../../../assets/portfolio/gobarber-web/SignUp.png'),
          require('../../../../assets/portfolio/gobarber-web/Profile.png'),
        ],
      },
      {
        id: 4,
        title: 'Lendo Música Mobile App',
        link: 'https://github.com/guiathayde/LendoMusica',
        description:
          "One of my first application in React Native. I've done this project in a selection process to enter a university project. The app search the lyric of song that the user inserts.",
        images: [
          require('../../../../assets/portfolio/lendo-musica-mobile-app/Search.png'),
          require('../../../../assets/portfolio/lendo-musica-mobile-app/SearchResult.png'),
          require('../../../../assets/portfolio/lendo-musica-mobile-app/Result.png'),
          require('../../../../assets/portfolio/lendo-musica-mobile-app/LatestSearch.png'),
        ],
      },
      {
        id: 5,
        title: 'Lendo Música Web',
        link: 'https://guiathayde.github.io/Lendo-Musica-Web/',
        description:
          "Personal project for study REST API. I've done this project to practice React code in web.",
        images: [
          require('../../../../assets/portfolio/lendo-musica-web/Home.png'),
          require('../../../../assets/portfolio/lendo-musica-web/SearchResult.png'),
          require('../../../../assets/portfolio/lendo-musica-web/Result.png'),
          require('../../../../assets/portfolio/lendo-musica-web/LatestSearch.png'),
        ],
      },
      {
        id: 6,
        title: 'RentX API',
        link: 'https://github.com/guiathayde/rentx',
        description:
          'Back-end of a REST API application for a fictitious car rental shop. Completely and fully scalable.',
        images: [
          require('../../../../assets/portfolio/rentx/Routes.png'),
          require('../../../../assets/portfolio/rentx/Code.png'),
        ],
      },
      {
        id: 7,
        title: 'Chat Web Socket',
        link: 'https://github.com/guiathayde/chat-websocket',
        description:
          'My first application to use Socket.io. Both the front-end and the back-end ready-made.',
        images: [
          require('../../../../assets/portfolio/chat-websocket/Chat.png'),
          require('../../../../assets/portfolio/chat-websocket/Home.png'),
        ],
      },
      {
        id: 8,
        title: 'Xati.',
        link: 'https://github.com/guiathayde/xati',
        description:
          'Mobile chat app. Built with React Native and Firebase database.',
        images: [
          require('../../../../assets/portfolio/xati/Landing.png'),
          require('../../../../assets/portfolio/xati/FirstScreen.png'),
          require('../../../../assets/portfolio/xati/Home.png'),
          require('../../../../assets/portfolio/xati/Chat.png'),
        ],
      },
    ],
    [],
  );

  return (
    <Container>
      <Heading>
        <Title>{strings.Home.Portfolio.iCreateJobs}</Title>
        <Title color="#FF8E5E">
          {strings.Home.Portfolio.thatEnchantPeople}
        </Title>
      </Heading>

      <PortfolioContainer>
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={item.id}
            onClick={() => {
              setSelectedPortfolioItem(index);
              setIsPortfolioDetailVisible(!isPortfolioDetailVisible);
            }}
          >
            <PortfolioItemImg src={item.images[0]} />
          </PortfolioItem>
        ))}
      </PortfolioContainer>

      <Modal
        isOpen={isPortfolioDetailVisible}
        onRequestClose={() => setIsPortfolioDetailVisible(false)}
        shouldCloseOnEsc
        style={{
          overlay: {
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          },
          content: {
            width: '60%',
            marginInline: 'auto',
            backgroundColor: 'transparent',
            border: 'none',
          },
        }}
      >
        <AwesomeFrame
          images={portfolioItems[selectedPortfolioItem].images}
          title={portfolioItems[selectedPortfolioItem].title}
          link={portfolioItems[selectedPortfolioItem].link}
          description={portfolioItems[selectedPortfolioItem].description}
        />
      </Modal>
    </Container>
  );
}
