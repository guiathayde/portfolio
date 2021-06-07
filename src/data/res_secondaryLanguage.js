module.exports = [
  {
    basic_info: {
      description_header: "Eae",
      description:
        "👋 Sou Guilherme Athayde. Estudante de Engenharia da Computação na UTFPR. Estou trabalhando com as estruturas de front-end mais recentes, como React e React Native. No back-end, estou usando Express e Socket.io.",
      section_name: {
        about: "Sobre mim",
        projects: "Projetos",
        skills: "Habilidades",
        experience: "Experiências",
      },
    },
    projects: [
      {
        title: "Xati.",
        startDate: "2021",
        description:
          "Aplicativo de bate-papo móvel. Construído com React Native e banco de dados Firebase.",
        images: [
          require("../assets/portfolio/xati/Landing.png"),
          require("../assets/portfolio/xati/FirstScreen.png"),
          require("../assets/portfolio/xati/Home.png"),
          require("../assets/portfolio/xati/Chat.png"),
        ],
        url: "https://github.com/guiathayde/xati",
        technologies: [
          {
            class: "devicon-react-original colored",
            name: "React Native",
          },
          {
            class: "devicon-android-plain-wordmark colored",
            name: "Android",
          },
          {
            class: "devicon-apple-original colored",
            name: "IOS",
          },
          {
            class: "devicon-typescript-plain colored",
            name: "TypeScript",
          },
        ],
      },
      {
        title: "Chat Web Socket",
        startDate: "2021",
        description:
          "Meu primeiro aplicativo usando Socket.io. Tanto o front-end quanto o back-end prontos para uso.",
        images: [
          require("../assets/portfolio/chat-websocket/Home.png"),
          require("../assets/portfolio/chat-websocket/Chat.png"),
        ],
        url: "https://github.com/guiathayde/chat-websocket",
        technologies: [
          {
            class: "devicon-html5-plain-wordmark colored",
            name: "HTML",
          },
          {
            class: "devicon-css3-plain-wordmark colored",
            name: "CSS",
          },
          {
            class: "devicon-javascript-plain colored",
            name: "JavaScript",
          },
          {
            class: "devicon-typescript-plain colored",
            name: "TypeScript",
          },
        ],
      },
      {
        title: "RentX API",
        startDate: "2021",
        description:
          "Back-end de um aplicativo REST API para uma locadora de veículos fictícia. Completa e totalmente escalonável.",
        images: [
          require("../assets/portfolio/rentx/Routes.png"),
          require("../assets/portfolio/rentx/Code.png"),
        ],
        url: "https://github.com/guiathayde/rentx",
        technologies: [
          {
            class: "devicon-nodejs-plain-wordmark colored",
            name: "NodeJS",
          },
          {
            class: "devicon-express-original colored",
            name: "Express",
          },
          {
            class: "devicon-typescript-plain colored",
            name: "TypeScript",
          },
        ],
      },
      {
        title: "Lendo Música Web",
        startDate: "2020",
        description:
          "Projeto pessoal para estudo da API REST. Fiz este projeto para praticar o código React na web.",
        images: [
          require("../assets/portfolio/lendo-musica-web/Home.png"),
          require("../assets/portfolio/lendo-musica-web/SearchResult.png"),
          require("../assets/portfolio/lendo-musica-web/Result.png"),
          require("../assets/portfolio/lendo-musica-web/LatestSearch.png"),
        ],
        url: "https://guiathayde.github.io/Lendo-Musica-Web/",
        technologies: [
          {
            class: "devicon-react-original colored",
            name: "React",
          },
          {
            class: "devicon-typescript-plain colored",
            name: "TypeScript",
          },
        ],
      },
      {
        title: "Lendo Música Mobile App",
        startDate: "2020",
        description:
          "Uma das minhas primeiras aplicações no React Native. Fiz este projeto em processo seletivo para ingressar em um projeto universitário. O aplicativo busca a letra da música que o usuário insere.",
        images: [
          require("../assets/portfolio/lendo-musica-mobile-app/Search.png"),
          require("../assets/portfolio/lendo-musica-mobile-app/SearchResult.png"),
          require("../assets/portfolio/lendo-musica-mobile-app/Result.png"),
          require("../assets/portfolio/lendo-musica-mobile-app/LatestSearch.png"),
        ],
        url: "https://github.com/guiathayde/LendoMusica",
        technologies: [
          {
            class: "devicon-react-original colored",
            name: "React Native",
          },
          {
            class: "devicon-android-plain-wordmark colored",
            name: "Android",
          },
          {
            class: "devicon-apple-original colored",
            name: "IOS",
          },
          {
            class: "devicon-javascript-plain colored",
            name: "JavaScript",
          },
        ],
      },
      {
        title: "GoBarber Web",
        startDate: "2020",
        description:
          "Site feito com ReactJS para cabeleireiros e seus clientes.",
        images: [
          require("../assets/portfolio/gobarber-web/Logon.png"),
          require("../assets/portfolio/gobarber-web/SignUp.png"),
          require("../assets/portfolio/gobarber-web/Dashboard.png"),
          require("../assets/portfolio/gobarber-web/Profile.png"),
        ],
        url: "https://github.com/guiathayde/gobarber-web",
        technologies: [
          {
            class: "devicon-react-original colored",
            name: "React",
          },
          {
            class: "devicon-typescript-plain colored",
            name: "TypeScript",
          },
        ],
      },
      {
        title: "GoBarber Server",
        startDate: "2020",
        description:
          "API REST do aplicativo GoBarber. Totalmente escalonável e pronto para implantar.",
        images: [require("../assets/portfolio/gobarber-server/Code.png")],
        url: "https://github.com/guiathayde/GoBarber-Server",
        technologies: [
          {
            class: "devicon-nodejs-plain-wordmark colored",
            name: "NodeJS",
          },
          {
            class: "devicon-express-original colored",
            name: "Express",
          },
          {
            class: "devicon-typescript-plain colored",
            name: "TypeScript",
          },
        ],
      },
      {
        title: "GoBarber Mobile App",
        startDate: "2020",
        description:
          "Aplicativo mobile para agendar corte de cabelo e o cabeleireiro controla sua agenda por meio do aplicativo.",
        images: [
          require("../assets/portfolio/gobarber-app/SignIn.png"),
          require("../assets/portfolio/gobarber-app/SignUp.png"),
          require("../assets/portfolio/gobarber-app/List.png"),
          require("../assets/portfolio/gobarber-app/Schedule.png"),
          require("../assets/portfolio/gobarber-app/Profile.png"),
        ],
        url: "https://github.com/guiathayde/App-GoBarber",
        technologies: [
          {
            class: "devicon-react-original colored",
            name: "React Native",
          },
          {
            class: "devicon-android-plain-wordmark colored",
            name: "Android",
          },
          {
            class: "devicon-apple-original colored",
            name: "IOS",
          },
          {
            class: "devicon-typescript-plain colored",
            name: "TypeScript",
          },
        ],
      },
    ],
    experience: [
      {
        company: "nós - Nosso Olhar Solidário (Projeto da UTFPR)",
        title: "Full Stack Developer",
        years: "10.2020 - presente",
        mainTech: ["React Native", "ReactJS", "NodeJS"],
        technologies: ["REST API", "JavaScript", "TypeScript"],
      },
    ],
  },
];
