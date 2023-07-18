'use client';

import Image from 'next/image';

import { useLanguage } from '../../hooks/language';

import { portfolio } from '../../database/portfolio';

export function Portfolio() {
  const { strings } = useLanguage();

  return (
    <div className="flex flex-col items-center gap-12 w-full px-32 py-8 p-0 max-sm:px-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="not-italic font-extrabold text-[3.25rem] leading-extra-loose text-center">
          {strings.Home.Portfolio.someApplications}
        </h2>
        <h2 className="not-italic font-extrabold text-[3.25rem] leading-extra-loose text-center text-orange-500">
          {strings.Home.Portfolio.thatIMade}
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        {portfolio.map((item) => (
          <a
            key={item.id}
            className="flex items-center justify-center w-[345px] h-[345px] rounded-[20px] border-none"
            href={item.github}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="w-full h-full object-cover opacity-[80%] transition-[filter] duration-[0.2s] rounded-[20px] hover:opacity-[100%]"
              src={item.images[0]}
              width={345}
              height={345}
              alt={item.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
