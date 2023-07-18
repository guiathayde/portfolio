'use client';

import { useLanguage } from '../../hooks/language';

export function Footer() {
  const { strings } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center w-full pb-11">
      <span className="not-italic font-normal text-sm leading-6 text-center text-white text-opacity-30">
        {strings.Home.Footer.madeWith}
      </span>
    </div>
  );
}
