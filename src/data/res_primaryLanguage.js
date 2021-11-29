module.exports = [
  {
    basic_info: {
      description_header: 'Hi',
      description:
        "👋 I'm Guilherme Athayde. Computer Engineering Student at UTFPR. I'm working with newest front-end frameworks like React and React Native. On back-end I'm using Express and Socket.io. ",
      section_name: {
        about: 'About me',
        projects: 'Projects',
        skills: 'Skills',
        experience: 'Experience',
      },
    },
    projects: [
      {
        title: 'Xati.',
        startDate: '2021',
        description:
          'Mobile chat app. Built with React Native and Firebase database.',
        images: [
          require('../assets/portfolio/xati/Landing.png'),
          require('../assets/portfolio/xati/FirstScreen.png'),
          require('../assets/portfolio/xati/Home.png'),
          require('../assets/portfolio/xati/Chat.png'),
        ],
        url: 'https://github.com/guiathayde/xati',
        technologies: [
          {
            class: 'devicon-react-original colored',
            name: 'React Native',
          },
          {
            class: 'devicon-android-plain-wordmark colored',
            name: 'Android',
          },
          {
            class: 'devicon-apple-original colored',
            name: 'IOS',
          },
          {
            class: 'devicon-typescript-plain colored',
            name: 'TypeScript',
          },
        ],
      },
      {
        title: 'Chat Web Socket',
        startDate: '2021',
        description:
          'My first application to use Socket.io. Both the front-end and the back-end ready-made.',
        images: [
          require('../assets/portfolio/chat-websocket/Home.png'),
          require('../assets/portfolio/chat-websocket/Chat.png'),
        ],
        url: 'https://github.com/guiathayde/chat-websocket',
        technologies: [
          {
            class: 'devicon-html5-plain-wordmark colored',
            name: 'HTML',
          },
          {
            class: 'devicon-css3-plain-wordmark colored',
            name: 'CSS',
          },
          {
            class: 'devicon-javascript-plain colored',
            name: 'JavaScript',
          },
          {
            class: 'devicon-typescript-plain colored',
            name: 'TypeScript',
          },
        ],
      },
      {
        title: 'RentX API',
        startDate: '2021',
        description:
          'Back-end of a REST API application for a fictitious car rental shop. Completely and fully scalable.',
        images: [
          require('../assets/portfolio/rentx/Routes.png'),
          require('../assets/portfolio/rentx/Code.png'),
        ],
        url: 'https://github.com/guiathayde/rentx',
        technologies: [
          {
            class: 'devicon-nodejs-plain-wordmark colored',
            name: 'NodeJS',
          },
          {
            class: 'devicon-express-original colored',
            name: 'Express',
          },
          {
            class: 'devicon-typescript-plain colored',
            name: 'TypeScript',
          },
        ],
      },
      {
        title: 'Lendo Música Web',
        startDate: '2020',
        description:
          "Personal project for study REST API. I've done this project to practice React code in web.",
        images: [
          require('../assets/portfolio/lendo-musica-web/Home.png'),
          require('../assets/portfolio/lendo-musica-web/SearchResult.png'),
          require('../assets/portfolio/lendo-musica-web/Result.png'),
          require('../assets/portfolio/lendo-musica-web/LatestSearch.png'),
        ],
        url: 'https://guiathayde.github.io/Lendo-Musica-Web/',
        technologies: [
          {
            class: 'devicon-react-original colored',
            name: 'React',
          },
          {
            class: 'devicon-typescript-plain colored',
            name: 'TypeScript',
          },
        ],
      },
      {
        title: 'Lendo Música Mobile App',
        startDate: '2020',
        description:
          "One of my first application in React Native. I've done this project in a selection process to enter a university project. The app search the lyric of song that the user inserts.",
        images: [
          require('../assets/portfolio/lendo-musica-mobile-app/Search.png'),
          require('../assets/portfolio/lendo-musica-mobile-app/SearchResult.png'),
          require('../assets/portfolio/lendo-musica-mobile-app/Result.png'),
          require('../assets/portfolio/lendo-musica-mobile-app/LatestSearch.png'),
        ],
        url: 'https://github.com/guiathayde/LendoMusica',
        technologies: [
          {
            class: 'devicon-react-original colored',
            name: 'React Native',
          },
          {
            class: 'devicon-android-plain-wordmark colored',
            name: 'Android',
          },
          {
            class: 'devicon-apple-original colored',
            name: 'IOS',
          },
          {
            class: 'devicon-javascript-plain colored',
            name: 'JavaScript',
          },
        ],
      },
      {
        title: 'GoBarber Web',
        startDate: '2020',
        description:
          'Website made with ReactJS for hairdressers and their clients.',
        images: [
          require('../assets/portfolio/gobarber-web/Logon.png'),
          require('../assets/portfolio/gobarber-web/SignUp.png'),
          require('../assets/portfolio/gobarber-web/Dashboard.png'),
          require('../assets/portfolio/gobarber-web/Profile.png'),
        ],
        url: 'https://github.com/guiathayde/gobarber-web',
        technologies: [
          {
            class: 'devicon-react-original colored',
            name: 'React',
          },
          {
            class: 'devicon-typescript-plain colored',
            name: 'TypeScript',
          },
        ],
      },
      {
        title: 'GoBarber Server',
        startDate: '2020',
        description:
          'REST API of the GoBarber application. Fully scalable and ready to deploy.',
        images: [require('../assets/portfolio/gobarber-server/Code.png')],
        url: 'https://github.com/guiathayde/GoBarber-Server',
        technologies: [
          {
            class: 'devicon-nodejs-plain-wordmark colored',
            name: 'NodeJS',
          },
          {
            class: 'devicon-express-original colored',
            name: 'Express',
          },
          {
            class: 'devicon-typescript-plain colored',
            name: 'TypeScript',
          },
        ],
      },
      {
        title: 'GoBarber Mobile App',
        startDate: '2020',
        description:
          'Mobile application to schedule haircut and the hairdresser controls your schedule through the application.',
        images: [
          require('../assets/portfolio/gobarber-app/SignIn.png'),
          require('../assets/portfolio/gobarber-app/SignUp.png'),
          require('../assets/portfolio/gobarber-app/List.png'),
          require('../assets/portfolio/gobarber-app/Schedule.png'),
          require('../assets/portfolio/gobarber-app/Profile.png'),
        ],
        url: 'https://github.com/guiathayde/App-GoBarber',
        technologies: [
          {
            class: 'devicon-react-original colored',
            name: 'React Native',
          },
          {
            class: 'devicon-android-plain-wordmark colored',
            name: 'Android',
          },
          {
            class: 'devicon-apple-original colored',
            name: 'IOS',
          },
          {
            class: 'devicon-typescript-plain colored',
            name: 'TypeScript',
          },
        ],
      },
    ],
    experience: [
      {
        company: 'Ubivis',
        title: 'Android Developer',
        years: '09.2021 - present',
        mainTech: ['Android', 'Kotlin'],
        technologies: ['REST API', 'Kotlin'],
      },
      {
        company: 'nós - Nosso Olhar Solidário (Project from UTFPR)',
        title: 'Full Stack Developer',
        years: '10.2020 - present',
        mainTech: ['React Native', 'ReactJS', 'NodeJS'],
        technologies: ['REST API', 'JavaScript', 'TypeScript'],
      },
    ],
  },
];
