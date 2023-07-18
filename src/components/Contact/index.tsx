'use client';

import { useLanguage } from '../../hooks/language';

import { ButtonGetInTouch } from '../ButtonGetInTouch';

export function Contact() {
  const { strings } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center bg-black-300 pt-24 pb-16 px-0 max-sm:px-4">
      <div className="flex flex-col items-center justify-center">
        <h6 className="not-italic font-extrabold text-5xl text-center text-orange-400 max-sm:text-3xl">
          {strings.Home.Contact.letsBuildYour}
        </h6>
        <h6 className="not-italic font-extrabold text-5xl text-center text-orange-400 max-sm:text-3xl">
          {strings.Home.Contact.projectTogether}
        </h6>

        <div className="mt-8">
          <ButtonGetInTouch backgroundColor="white" />
        </div>
      </div>
    </div>
  );
}
