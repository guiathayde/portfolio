'use client';

import { useLanguage } from '../../hooks/language';

import { Content } from './Content';

export function Expirience() {
  const { strings } = useLanguage();

  return (
    <div className="w-full grid grid-cols-2 gap-8 py-8 px-32 max-sm:grid-cols-1 max-sm:px-4">
      <div className="w-full">
        <h3 className="flex items-center not-italic font-extrabold text-white mb-8 text-4xl max-sm:max-w-sm">
          🎓 {strings.Home.Experience.education}
        </h3>
        <Content
          title="Universidade Tecnológica Federal do Paraná"
          description="Bacharelado: Engenharia da Computação"
          duration={`01/2021 - ${strings.Home.Experience.currently}`}
        />
        <Content
          title="Python"
          description="http://apl.utfpr.edu.br/extensao/emitir/6A224D167164FB508DFA645A8B773756"
          duration="06/2020 - 12/2020"
        />
        <Content
          title="Bootcamp GoStack no ecossistema de tecnologias NodeJS, ReactJS e React Native"
          description="https://app.rocketseat.com.br/api/certificates/pdf/3d090152-
          ef80-4c8c-b2f4-907c572bd1d8"
          duration="01/2021 - 06/2021"
        />
      </div>

      <div className="w-full">
        <h3 className="flex items-center not-italic font-extrabold text-white mb-8 text-4xl max-sm:max-w-sm">
          💼 {strings.Home.Experience.professional}
        </h3>
        <Content
          title="nós - Nosso Olhar Solidário (UTFPR)"
          description="Full Stack Developer"
          duration={`08/2020 - ${strings.Home.Experience.currently}`}
        />
        <Content
          title="Ubivis"
          description="Android and Front-end Developer"
          duration={`09/2021 - ${strings.Home.Experience.currently}`}
        />
        <Content
          title="Amigos dos Jardinetes (UTFPR)"
          description="Full Stack Developer"
          duration="06/2022 - 12/2022"
        />
      </div>
    </div>
  );
}
