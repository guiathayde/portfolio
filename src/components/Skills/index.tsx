'use client';

import { useLanguage } from '../../hooks/language';

import { SkillItem } from './SkillItem';

export function Skills() {
  const { strings } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center gap-2.5 w-full bg-black-300 px-32 py-16 max-sm:px-0">
      <div className="flex flex-col items-start gap-8 p-0 max-sm:w-10/12">
        <div className="flex flex-row flex-wrap overflow-hidden">
          <h2
            className="not-italic font-extrabold text-5xl leading-extra-loose mr-2"
          >
            {strings.Home.Skills.my}
          </h2>
          <h2 className="not-italic font-extrabold text-5xl leading-extra-loose text-orange-300">
            {strings.Home.Skills.skills}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full max-sm:grid-cols-1">
          <SkillItem
            rectangleColor="#1669B4"
            title={strings.Home.Skills.mostConfidentWith.title}
            description={strings.Home.Skills.mostConfidentWith.description}
          />
          <SkillItem
            rectangleColor="#67F5B1"
            title={strings.Home.Skills.iHaveGoodKnowledgeOn.title}
            description={strings.Home.Skills.iHaveGoodKnowledgeOn.description}
          />
          <SkillItem
            rectangleColor="#FD97CE"
            title={strings.Home.Skills.iCanManageWithSomeHelp.title}
            description={strings.Home.Skills.iCanManageWithSomeHelp.description}
          />
        </div>
      </div>
    </div>
  );
}
